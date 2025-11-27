import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  Module,
  Post,
  Query,
  Req,
  UnauthorizedException
} from '@nestjs/common';
import type { Request } from 'express';
import { getTracer, getLogger, getMetricsRegistry } from '@kitchen-cpq/instrumentation-otel';
import { verifyAuthToken } from '@kitchen-cpq/shared-auth';
import type {
  ConstraintSummary,
  LayoutGoals,
  LayoutVariant,
  ParamDelta,
  ParametricState,
  ProjectId,
  TenantId,
  UserId,
  Role
} from '@kitchen-cpq/shared-types';
import { applyDelta, createDefaultState, validateDesign } from '@kitchen-cpq/geometry-kernel';
import { z, ZodError } from 'zod';

type SessionKey = string;

const mutateRequestSchema = z.object({
  projectId: z.string().min(1) as unknown as z.ZodType<ProjectId>,
  deltas: z.array(
    z.object({
      path: z.string().min(1),
      value: z.union([z.string(), z.number(), z.boolean()])
    }) as unknown as z.ZodType<ParamDelta>
  ),
  requestGallery: z.boolean().optional(),
  goals: z
    .object({
      storageWeight: z.number().min(0).max(1),
      budgetWeight: z.number().min(0).max(1),
      opennessWeight: z.number().min(0).max(1),
      familyFriendlyWeight: z.number().min(0).max(1),
      prefersIsland: z.boolean()
    })
    .optional()
});

const validateRequestSchema = z.object({
  projectId: z.string().min(1) as unknown as z.ZodType<ProjectId>
});

export type MutateRequestDto = z.infer<typeof mutateRequestSchema>;

export interface MutateResponseDto {
  state: ParametricState;
  constraintSummary: ConstraintSummary;
  layouts?: LayoutVariant[];
}

export type ValidateRequestDto = z.infer<typeof validateRequestSchema>;

class OptimizationClient {
  private readonly tracer = getTracer();
  private readonly logger = getLogger();
  private readonly latencyHistogram = getMetricsRegistry().createHistogram(
    'optimization_request_duration_seconds',
    { description: 'Optimization service request latency' }
  );

  constructor(
    private readonly baseUrl = process.env.OPTIMIZATION_URL ?? 'http://localhost:8001',
    private readonly timeoutMs = Number(process.env.OPTIMIZATION_TIMEOUT_MS ?? 5000)
  ) {}

  async suggestLayouts(tenantId: TenantId, projectId: string, goals?: LayoutGoals): Promise<LayoutVariant[]> {
    const span = this.tracer.startSpan('OptimizationClient.suggestLayouts', {
      attributes: { 'tenant.id': tenantId, 'project.id': projectId }
    });
    const start = Date.now();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const res = await fetch(`${this.baseUrl}/suggest-layouts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenant_id: tenantId,
          project_id: projectId,
          goals: goals ?? {
            storageWeight: 0.5,
            budgetWeight: 0.5,
            opennessWeight: 0.5,
            familyFriendlyWeight: 0.5,
            prefersIsland: false
          },
          max_layouts: 3
        }),
        signal: controller.signal
      });
      if (!res.ok) {
        this.logger.error('optimization fetch failed', {
          url: `${this.baseUrl}/suggest-layouts`,
          projectId,
          status: res.status
        });
        span.recordException(new Error(`HTTP ${res.status}`));
        span.setStatus({ code: 2, message: 'Optimization fetch failed' });
        return [];
      }
      const payload = (await res.json()) as {
        variants: Array<{
          id: string;
          label: string;
          state_json: string;
          work_triangle_score: number;
          storage_score: number;
          budget_score: number;
          ergonomics_score: number;
        }>;
      };
      span.setStatus({ code: 1 });
      return payload.variants.map((v) => ({
        id: v.id as string,
        label: v.label,
        state: JSON.parse(v.state_json) as ParametricState,
        objectiveScores: {
          workTriangleScore: v.work_triangle_score,
          storageScore: v.storage_score,
          budgetScore: v.budget_score,
          ergonomicsScore: v.ergonomics_score
        }
      }));
    } catch (err) {
      this.logger.error('optimization fetch error', {
        url: `${this.baseUrl}/suggest-layouts`,
        projectId,
        error: err instanceof Error ? err.message : String(err)
      });
      span.recordException(err instanceof Error ? err : new Error(String(err)));
      span.setStatus({ code: 2, message: 'Optimization fetch error' });
      return [];
    } finally {
      clearTimeout(timer);
      this.latencyHistogram.record((Date.now() - start) / 1000, {
        service: 'configurator-session-service',
        method: 'suggestLayouts'
      });
      span.end();
    }
  }
}

export interface SessionStore {
  get(key: SessionKey): Promise<ParametricState | null>;
  set(key: SessionKey, state: ParametricState, ttlMs: number): Promise<void>;
  delete(key: SessionKey): Promise<void>;
  shutdown(): Promise<void>;
}

class InMemorySessionStore implements SessionStore {
  private store = new Map<SessionKey, { state: ParametricState; expiresAt: number }>();

  async get(key: SessionKey): Promise<ParametricState | null> {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return entry.state;
  }

  async set(key: SessionKey, state: ParametricState, ttlMs: number): Promise<void> {
    this.store.set(key, { state, expiresAt: Date.now() + ttlMs });
  }

  async delete(key: SessionKey): Promise<void> {
    this.store.delete(key);
  }

  async shutdown(): Promise<void> {
    this.store.clear();
  }
}

type RedisLike = {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, options?: { PX?: number }): Promise<void>;
  del(key: string): Promise<number>;
  quit(): Promise<void>;
};

export class RedisSessionStore implements SessionStore {
  constructor(private readonly client: RedisLike, private readonly defaultTtlMs = 300_000) {}

  async get(key: SessionKey): Promise<ParametricState | null> {
    try {
      const raw = await this.client.get(key);
      return raw ? (JSON.parse(raw) as ParametricState) : null;
    } catch (err) {
      getLogger().error('redis get failed', { key, error: err instanceof Error ? err.message : String(err) });
      throw err;
    }
  }

  async set(key: SessionKey, state: ParametricState, ttlMs = this.defaultTtlMs): Promise<void> {
    try {
      await this.client.set(key, JSON.stringify(state), { PX: ttlMs });
    } catch (err) {
      getLogger().error('redis set failed', { key, error: err instanceof Error ? err.message : String(err) });
      throw err;
    }
  }

  async delete(key: SessionKey): Promise<void> {
    try {
      await this.client.del(key);
    } catch (err) {
      getLogger().error('redis delete failed', { key, error: err instanceof Error ? err.message : String(err) });
      throw err;
    }
  }

  async shutdown(): Promise<void> {
    await this.client.quit();
  }
}

export class ConfiguratorSessionService {
  private readonly optClient = new OptimizationClient();
  private readonly sessionStore: SessionStore;
  private readonly sessionTtlMs = Number(process.env.SESSION_TTL_MS ?? 300_000);

  constructor(store?: SessionStore) {
    this.sessionStore = store ?? new InMemorySessionStore();
  }

  private key(tenantId: TenantId, userId: UserId, projectId: ProjectId): SessionKey {
    return `${tenantId}:${userId}:${projectId}`;
  }

  async getOrCreateState(tenantId: TenantId, userId: UserId, projectId: ProjectId): Promise<ParametricState> {
    const key = this.key(tenantId, userId, projectId);
    const cached = await this.sessionStore.get(key);
    if (cached) return cached;
    const state = createDefaultState(projectId, tenantId);
    await this.sessionStore.set(key, state, this.sessionTtlMs);
    return state;
  }

  private async saveState(tenantId: TenantId, userId: UserId, projectId: ProjectId, state: ParametricState) {
    await this.sessionStore.set(this.key(tenantId, userId, projectId), state, this.sessionTtlMs);
  }

  async mutate(principal: { tenantId: TenantId; userId: UserId; roles: Role[] }, input: MutateRequestDto): Promise<MutateResponseDto> {
    const baseState = await this.getOrCreateState(principal.tenantId, principal.userId, input.projectId);
    const { state, constraints } = await applyDelta(baseState, input.deltas);
    await this.saveState(principal.tenantId, principal.userId, input.projectId, state);

    const response: MutateResponseDto = {
      state,
      constraintSummary: constraints
    };

    if (input.requestGallery) {
      // fire-and-forget to keep critical path fast; result handled elsewhere
      void this.optClient.suggestLayouts(principal.tenantId, input.projectId, input.goals);
    }

    return response;
  }

  async validate(principal: { tenantId: TenantId; userId: UserId; roles: Role[] }, input: ValidateRequestDto): Promise<ConstraintSummary> {
    await this.getOrCreateState(principal.tenantId, principal.userId, input.projectId);
    return validateDesign(input.projectId);
  }

  async shutdown(): Promise<void> {
    await this.sessionStore.shutdown();
  }
}

@Controller('sessions')
export class ConfiguratorSessionController {
  constructor(private readonly sessions: ConfiguratorSessionService) {}

  private extractPrincipal(req: Request): { tenantId: TenantId; userId: UserId; roles: Role[] } {
    const auth = req.headers['authorization'];
    if (!auth || Array.isArray(auth) || !auth.toLowerCase().startsWith('bearer ')) {
      throw new UnauthorizedException('Missing bearer token');
    }
    const token = auth.slice(7);
    try {
      const claims = verifyAuthToken(token, {
        issuer: process.env.JWT_ISSUER,
        audience: process.env.JWT_AUDIENCE,
        secret: process.env.JWT_SECRET
      });
      return { tenantId: claims.tenantId as TenantId, userId: claims.sub as UserId, roles: claims.roles };
    } catch (err) {
      throw new UnauthorizedException('Invalid or missing JWT claims');
    }
  }

  private ensureRole(principal: { roles: Role[] }, allowed: Role[]): void {
    if (!principal.roles.some((r) => allowed.includes(r))) {
      throw new ForbiddenException('Insufficient role');
    }
  }

  @Post('mutate')
  async mutate(@Req() req: Request, @Body() body: unknown): Promise<MutateResponseDto> {
    const span = getTracer().startSpan('ConfiguratorSessionService.mutate');
    const histogram = getMetricsRegistry().createHistogram('configurator_session_duration_seconds');
    const start = Date.now();
    const principal = this.extractPrincipal(req);
    this.ensureRole(principal, ['dealer', 'admin']);
    let parsed: MutateRequestDto;
    try {
      parsed = mutateRequestSchema.parse(body);
    } catch (err) {
      const message = err instanceof ZodError ? err.errors.map((e) => e.message).join('; ') : 'Invalid payload';
      throw new BadRequestException(message);
    }
    try {
      return await this.sessions.mutate(principal, parsed);
    } finally {
      histogram.record((Date.now() - start) / 1000, {
        service: 'configurator-session-service',
        method: 'mutate'
      });
      span.end();
    }
  }

  @Get('validate')
  async validate(@Req() req: Request, @Query('projectId') projectId: ProjectId): Promise<ConstraintSummary> {
    const span = getTracer().startSpan('ConfiguratorSessionService.validate');
    const histogram = getMetricsRegistry().createHistogram('configurator_session_duration_seconds');
    const start = Date.now();
    const principal = this.extractPrincipal(req);
    this.ensureRole(principal, ['dealer', 'admin']);
    let parsed: ValidateRequestDto;
    try {
      parsed = validateRequestSchema.parse({ projectId });
    } catch (err) {
      const message = err instanceof ZodError ? err.errors.map((e) => e.message).join('; ') : 'Invalid payload';
      throw new BadRequestException(message);
    }
    try {
      return await this.sessions.validate(principal, parsed);
    } finally {
      histogram.record((Date.now() - start) / 1000, {
        service: 'configurator-session-service',
        method: 'validate'
      });
      span.end();
    }
  }

  @Get('state')
  async state(@Req() req: Request, @Query('projectId') projectId: ProjectId): Promise<ParametricState> {
    const span = getTracer().startSpan('ConfiguratorSessionService.state');
    const histogram = getMetricsRegistry().createHistogram('configurator_session_duration_seconds');
    const start = Date.now();
    const principal = this.extractPrincipal(req);
    this.ensureRole(principal, ['dealer', 'admin']);
    let parsed: ValidateRequestDto;
    try {
      parsed = validateRequestSchema.parse({ projectId });
    } catch (err) {
      const message = err instanceof ZodError ? err.errors.map((e) => e.message).join('; ') : 'Invalid payload';
      throw new BadRequestException(message);
    }
    try {
      return await this.sessions.getOrCreateState(principal.tenantId, principal.userId, parsed.projectId);
    } finally {
      histogram.record((Date.now() - start) / 1000, {
        service: 'configurator-session-service',
        method: 'state'
      });
      span.end();
    }
  }
}

@Module({
  controllers: [ConfiguratorSessionController],
  providers: [
    {
      provide: ConfiguratorSessionService,
      useFactory: async () => {
        const redisUrl = process.env.REDIS_URL;
        if (redisUrl) {
          try {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { createClient } = require('redis');
            const client: RedisLike = createClient({ url: redisUrl });
            if (client.connect) {
              await client.connect();
            }
            return new ConfiguratorSessionService(new RedisSessionStore(client));
          } catch (err) {
            getLogger().error('Failed to initialize Redis, falling back to memory', {
              error: err instanceof Error ? err.message : String(err)
            });
            return new ConfiguratorSessionService(new InMemorySessionStore());
          }
        }
        return new ConfiguratorSessionService(new InMemorySessionStore());
      }
    }
  ],
  exports: [ConfiguratorSessionService]
})
export class ConfiguratorSessionModule {}
