import { Module } from '@nestjs/common';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

type TokenClaims = {
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
class CpqGrpcClient {
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

const t = initTRPC.context<{
  claims: TokenClaims;
  cpqClient: CpqGrpcClient;
}>().create();

const authMiddleware = t.middleware(async ({ ctx, next }) => {
  return next({
    ctx
  });
});

const baseRouter = t.router({
  getQuoteForProject: t.procedure
    .use(authMiddleware)
    .input(z.object({ projectId: z.string() }))
    .query(async ({ input, ctx }) => {
      const start = Date.now();
      const result = await withSpan('BFF.getQuoteForProject', async () =>
        ctx.cpqClient.recomputeQuote(input.projectId, ctx.claims.tenantId)
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
      const start = Date.now();
      const result = await withSpan('BFF.recomputeQuote', async () =>
        ctx.cpqClient.recomputeQuote(input.projectId, ctx.claims.tenantId)
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
      const start = Date.now();
      // TODO: extend cpq service to accept adjustments; for now use recompute placeholder
      const result = await withSpan('BFF.applyDealerAdjustments', async () =>
        ctx.cpqClient.recomputeQuote(input.quoteId, ctx.claims.tenantId)
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
