import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';
import type {
  CatalogVersion,
  CatalogSnapshotRef,
  ConstraintSummary,
  CopilotMessage,
  CopilotTurn,
  LayoutGoals,
  LayoutVariant,
  ParamDelta,
  ParametricState,
  ProjectId,
  QuoteSummary,
  Tenant,
  ULID
} from '@kitchen-cpq/shared-types';

export type Context = {
  userId: string;
  tenantId: string;
};

const t = initTRPC.context<Context>().create();

const enforceAuth = t.middleware(({ ctx, next }) => {
  if (!ctx?.userId || !ctx?.tenantId) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Missing auth context' });
  }

  return next({ ctx });
});

export const protectedProcedure = t.procedure.use(enforceAuth);

export const authRouter = t.router({
  getSession: protectedProcedure.query(() => null),
  logout: protectedProcedure.mutation(() => ({ success: true }))
});

export const tenancyRouter = t.router({
  getCurrentTenant: protectedProcedure.query((): Tenant => {
    throw new Error('Not implemented');
  }),
  listTenantsForUser: protectedProcedure.query((): Tenant[] => {
    throw new Error('Not implemented');
  })
});

export const configuratorRouter = t.router({
  getSessionState: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query((): { state: ParametricState } => {
      throw new Error('Not implemented');
    }),
  mutateParameters: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        deltas: z.array(z.custom<ParamDelta>())
      })
    )
    .mutation((): {
      state: ParametricState;
      constraintSummary: ConstraintSummary;
      priceDelta: { totalPrice: number; currency: string };
    } => {
      throw new Error('Not implemented');
    }),
  requestLayoutVariants: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        goals: z.custom<LayoutGoals>()
      })
    )
    .mutation((): { variants: LayoutVariant[] } => {
      throw new Error('Not implemented');
    }),
  validateDesign: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query((): ConstraintSummary => {
      throw new Error('Not implemented');
    })
});

export const cpqRouter = t.router({
  getQuoteForProject: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query((): QuoteSummary | null => {
      throw new Error('Not implemented');
    }),
  recomputeQuote: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation((): QuoteSummary => {
      throw new Error('Not implemented');
    })
});

export const catalogAdminRouter = t.router({
  listCatalogVersions: protectedProcedure.query((): CatalogVersion[] => {
    throw new Error('Not implemented');
  }),
  publishCatalogDraft: protectedProcedure
    .input(z.object({ draftId: z.string() }))
    .mutation((): CatalogVersion => {
      throw new Error('Not implemented');
    })
});

export const copilotRouter = t.router({
  startSession: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation((): { sessionId: ULID } => {
      throw new Error('Not implemented');
    }),
  streamCompletion: protectedProcedure
    .input(
      z.object({
        sessionId: z.string(),
        messages: z.array(z.custom<CopilotMessage>())
      })
    )
    .subscription(() => {
      throw new Error('Not implemented');
    }),
  applySuggestion: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        deltas: z.array(z.custom<ParamDelta>())
      })
    )
    .mutation((): {
      state: ParametricState;
      constraintSummary: ConstraintSummary;
    } => {
      throw new Error('Not implemented');
    })
});

export const uiRouter = t.router({
  getConstraintBadge: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(() => {
      throw new Error('Not implemented');
    }),
  getCpqSummaryBar: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(() => {
      throw new Error('Not implemented');
    })
});
