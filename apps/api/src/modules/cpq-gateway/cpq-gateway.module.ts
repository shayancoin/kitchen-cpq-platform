import { Module } from '@nestjs/common';
import { initTRPC, TRPCError } from '@trpc/server';
import { verifyAuthToken } from '@kitchen-cpq/shared-auth';
import { Request } from 'express';
import { z } from 'zod';

export type TokenClaims = {
  tenantId: string;
  userId: string;
  roles: string[];
};

/**
 * Placeholder Identity client. In production, wire this to the actual
 * identity-tenancy-service gRPC `ValidateToken` RPC.
 */
class IdentityClient {
  async validateToken(jwt: string | undefined): Promise<TokenClaims> {
    if (!jwt) {
      throw new Error('unauthorized');
    }
    // TODO: call IdentityService.ValidateToken(jwt)
    return {
      tenantId: 'tenant-placeholder',
      userId: 'user-placeholder',
      roles: ['dealer']
    };
  }
}

/**
 * Placeholder CPQ gRPC client. Wire this to the generated stubs for
 * `cpq.proto` in a real implementation.
 */
export class CpqGrpcClient {
  async priceDelta(projectId: string, tenantId: string) {
    // TODO: call gRPC CpqService.PriceDelta with deadline to meet latency budgets.
    return { total_price: 0, currency: 'USD', tenantId, projectId };
  }

  async recomputeQuote(projectId: string, tenantId: string) {
    // TODO: call gRPC CpqService.RecomputeQuote with deadline to meet latency budgets.
    return {
      id: 'quote-placeholder',
      project_id: projectId,
      tenant_id: tenantId,
      total: 0,
      currency: 'USD',
      margin_percent: 0
    };
  }
}

export const createCpqContext = (cpqClient: CpqGrpcClient, req?: Request) => ({
  cpqClient,
  req,
  claims: undefined as TokenClaims | undefined
});

export type CpqContext = ReturnType<typeof createCpqContext>;

// Simple telemetry stubs; replace with real OpenTelemetry metrics/spans.
async function withSpan<T>(name: string, fn: () => Promise<T>): Promise<T> {
  return fn();
}

function recordHistogram(
  _name: string,
  _labels: Record<string, string | number | boolean>,
  _valueMs: number
) {
  // no-op placeholder
}

const t = initTRPC.context<CpqContext>().create();

const extractBearerToken = (req?: Request): string | undefined => {
  if (!req) return undefined;

  const header = req.headers['authorization'];
  if (header && header.toLowerCase().startsWith('bearer ')) {
    return header.slice(7).trim();
  }

  const cookieHeader = req.headers['cookie'];
  if (!cookieHeader) return undefined;
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map((c) => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    })
  );
  return cookies['Authorization'] || cookies['authorization'];
};

const authMiddleware = t.middleware(async ({ ctx, next }) => {
  const token = extractBearerToken(ctx.req);

  if (!token) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Missing bearer token' });
  }

  try {
    const claims = verifyAuthToken(token, {
      audience: process.env.JWT_AUDIENCE,
      issuer: process.env.JWT_ISSUER
    });

    const validatedClaims: TokenClaims = {
      tenantId: claims.tenantId,
      userId: claims.sub,
      roles: claims.roles
    };

    return next({
      ctx: {
        ...ctx,
        claims: validatedClaims
      }
    });
  } catch (err) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid token', cause: err });
  }
});

const baseRouter = t.router({
  getQuoteForProject: t.procedure
    .use(authMiddleware)
    .input(z.object({ projectId: z.string() }))
    .query(async ({ input, ctx }) => {
      if (!ctx.claims) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Missing claims' });
      }
      const start = Date.now();
      const result = await withSpan('BFF.getQuoteForProject', async () =>
        ctx.cpqClient.recomputeQuote(input.projectId, ctx.claims?.tenantId || 'unknown')
      );
      recordHistogram(
        'http_request_duration_seconds',
        { service: 'api', method: 'cpq.getQuoteForProject' },
        Date.now() - start
      );
      return result;
    }),
  recomputeQuote: t.procedure
    .use(authMiddleware)
    .input(z.object({ projectId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (!ctx.claims) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Missing claims' });
      }
      const start = Date.now();
      const result = await withSpan('BFF.recomputeQuote', async () =>
        ctx.cpqClient.recomputeQuote(input.projectId, ctx.claims?.tenantId || 'unknown')
      );
      recordHistogram(
        'http_request_duration_seconds',
        { service: 'api', method: 'cpq.recomputeQuote' },
        Date.now() - start
      );
      return result;
    }),
  applyDealerAdjustments: t.procedure
    .use(authMiddleware)
    .input(
      z.object({
        quoteId: z.string(),
        adjustments: z.array(
          z.object({
            lineItemId: z.string(),
            discountPercent: z.number().min(0).max(100)
          })
        )
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.claims) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Missing claims' });
      }
      const start = Date.now();
      // TODO: extend cpq service to accept adjustments; for now use recompute placeholder
      const result = await withSpan('BFF.applyDealerAdjustments', async () =>
        ctx.cpqClient.recomputeQuote(input.quoteId, ctx.claims?.tenantId || 'unknown')
      );
      recordHistogram(
        'http_request_duration_seconds',
        { service: 'api', method: 'cpq.applyDealerAdjustments' },
        Date.now() - start
      );
      return result;
    })
});

export const cpqRouter = baseRouter;

@Module({
  providers: [
    IdentityClient,
    CpqGrpcClient,
    {
      provide: 'TRPC_ROUTER_CPQ',
      useValue: cpqRouter
    }
  ],
  exports: ['TRPC_ROUTER_CPQ', CpqGrpcClient]
})
export class CpqGatewayModule {}
