import { Body, Controller, Get, Module, Post, Query } from '@nestjs/common';
import type {
  ConstraintSummary,
  LayoutGoals,
  LayoutVariant,
  ParamDelta,
  ParametricState,
  ProjectId,
  TenantId,
  UserId
} from '@kitchen-cpq/shared-types';
import { applyDelta, createDefaultState, validateDesign } from '@kitchen-cpq/geometry-kernel';

type SessionKey = string;

const nowIso = () => new Date().toISOString();

export interface MutateRequestDto {
  tenantId: TenantId;
  userId: UserId;
  projectId: ProjectId;
  deltas: ParamDelta[];
  requestGallery?: boolean;
  goals?: LayoutGoals;
}

export interface MutateResponseDto {
  state: ParametricState;
  constraintSummary: ConstraintSummary;
  layouts?: LayoutVariant[];
}

export interface ValidateRequestDto {
  tenantId: TenantId;
  userId: UserId;
  projectId: ProjectId;
}

class OptimizationClient {
  constructor(private readonly baseUrl = process.env.OPTIMIZATION_URL ?? 'http://localhost:8001') {}

  async suggestLayouts(projectId: string, goals?: LayoutGoals): Promise<LayoutVariant[]> {
    const res = await fetch(`${this.baseUrl}/suggest-layouts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        project_id: projectId,
        goals: goals ?? {
          storageWeight: 0.5,
          budgetWeight: 0.5,
          opennessWeight: 0.5,
          familyFriendlyWeight: 0.5,
          prefersIsland: false
        },
        max_layouts: 3
      })
    });
    if (!res.ok) {
      return [];
    }
    const payload = (await res.json()) as { variants: LayoutVariant[] };
    return payload.variants;
  }
}

export class ConfiguratorSessionService {
  private readonly optClient = new OptimizationClient();
  private readonly sessionStore = new Map<SessionKey, ParametricState>();

  private key(tenantId: TenantId, userId: UserId, projectId: ProjectId): SessionKey {
    return `${tenantId}:${userId}:${projectId}`;
  }

  getOrCreateState(tenantId: TenantId, userId: UserId, projectId: ProjectId): ParametricState {
    const key = this.key(tenantId, userId, projectId);
    if (this.sessionStore.has(key)) {
      return this.sessionStore.get(key)!;
    }
    const state = createDefaultState(projectId as any);
    this.sessionStore.set(key, state);
    return state;
  }

  private saveState(tenantId: TenantId, userId: UserId, projectId: ProjectId, state: ParametricState) {
    this.sessionStore.set(this.key(tenantId, userId, projectId), state);
  }

  async mutate(input: MutateRequestDto): Promise<MutateResponseDto> {
    const baseState = this.getOrCreateState(input.tenantId, input.userId, input.projectId);
    const { state, constraints } = await applyDelta(baseState, input.deltas);
    this.saveState(input.tenantId, input.userId, input.projectId, state);

    const response: MutateResponseDto = {
      state,
      constraintSummary: constraints
    };

    if (input.requestGallery) {
      response.layouts = await this.optClient.suggestLayouts(input.projectId, input.goals);
    }

    return response;
  }

  async validate(input: ValidateRequestDto): Promise<ConstraintSummary> {
    this.getOrCreateState(input.tenantId, input.userId, input.projectId);
    return validateDesign(input.projectId);
  }
}

@Controller('sessions')
export class ConfiguratorSessionController {
  constructor(private readonly sessions: ConfiguratorSessionService) {}

  @Post('mutate')
  mutate(@Body() body: MutateRequestDto): Promise<MutateResponseDto> {
    return this.sessions.mutate(body);
  }

  @Get('validate')
  validate(
    @Query('tenantId') tenantId: TenantId,
    @Query('userId') userId: UserId,
    @Query('projectId') projectId: ProjectId
  ): Promise<ConstraintSummary> {
    return this.sessions.validate({ tenantId, userId, projectId });
  }

  @Get('state')
  state(
    @Query('tenantId') tenantId: TenantId,
    @Query('userId') userId: UserId,
    @Query('projectId') projectId: ProjectId
  ): ParametricState {
    return this.sessions.getOrCreateState(tenantId, userId, projectId);
  }
}

@Module({
  controllers: [ConfiguratorSessionController],
  providers: [ConfiguratorSessionService],
  exports: [ConfiguratorSessionService]
})
export class ConfiguratorSessionModule {}
