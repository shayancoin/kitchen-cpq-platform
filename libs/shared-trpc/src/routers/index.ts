import { observable } from '@trpc/server/observable';
import { z } from 'zod';
import type {
  CatalogSnapshotRef,
  CatalogVersion,
  ConstraintBadgePayload,
  ConstraintSummary,
  CopilotMessage,
  LayoutGoals,
  LayoutVariant,
  LayoutVariantId,
  ParamDelta,
  ParametricState,
  ProjectId,
  QuoteId,
  QuoteSummary,
  Session,
  Tenant,
  ULID,
  User,
  CpqSummaryBarState
} from '@kitchen-cpq/shared-types';
import { CabinetInstanceId, CatalogVersionId, TenantId, UserId } from '@kitchen-cpq/shared-types';
import { protectedProcedure, publicProcedure, router, type TrpcContext } from '../trpc';

type BaseEntities = {
  tenant: Tenant;
  user: User;
  session: Session;
};

const nowIso = (): string => new Date().toISOString();

const resolveBaseEntities = (ctx: TrpcContext): BaseEntities => {
  const tenantId = (ctx.tenantId ?? ('tenant-demo' as TenantId)) as TenantId;
  const userId = (ctx.userId ?? ('user-demo' as UserId)) as UserId;

  const tenant: Tenant = {
    id: tenantId,
    slug: 'tenant-demo',
    displayName: 'Demo Tenant',
    createdAt: nowIso(),
    isActive: true
  };

  const user: User = {
    id: userId,
    tenantId,
    email: 'demo@example.com',
    displayName: 'Demo User',
    roles: ['dealer'],
    createdAt: nowIso(),
    lastLoginAt: nowIso()
  };

  const session: Session =
    ctx.session ?? {
      id: 'session-demo',
      userId,
      tenantId,
      issuedAt: nowIso(),
      expiresAt: nowIso(),
      jwt: 'stub.jwt.token'
    };

  return { tenant, user, session };
};

const baseConstraintSummary: ConstraintSummary = {
  hasBlockingErrors: false,
  violations: []
};

const buildParametricState = (projectId: ProjectId, tenantId: TenantId): ParametricState => ({
  projectId,
  tenantId,
  catalogVersionId: 'catalog-001' as CatalogVersionId,
  room: {
    id: 'room-1',
    perimeter: [
      {
        id: 'wall-1',
        start: { x: 0, y: 0 },
        end: { x: 4000, y: 0 },
        height: 2700,
        thickness: 150
      },
      {
        id: 'wall-2',
        start: { x: 4000, y: 0 },
        end: { x: 4000, y: 3200 },
        height: 2700,
        thickness: 150
      }
    ],
    openings: [],
    ceilingHeight: 2700
  },
  cabinets: [
    {
      id: 'cab-1' as CabinetInstanceId,
      sku: 'BASE-30',
      kind: 'base',
      roomId: 'room-1',
      wallId: 'wall-1',
      position: 0,
      elevation: 0,
      width: 762,
      depth: 610,
      height: 914,
      rotationDeg: 0,
      parameters: {}
    }
  ],
  constraints: baseConstraintSummary,
  updatedAt: nowIso()
});

const applyDeltas = (state: ParametricState, deltas: ParamDelta[]): ParametricState => {
  const next = { ...state, cabinets: state.cabinets.map((c) => ({ ...c })), updatedAt: nowIso() };
  for (const delta of deltas) {
    if (delta.path.startsWith('cabinets.')) {
      const [, cabinetId, prop] = delta.path.split('.');
      const target = next.cabinets.find((c) => c.id === cabinetId);
      if (target && prop && prop in target) {
        // @ts-expect-error: dynamic assignment for stub behavior
        target[prop] = delta.value;
      }
      if (target && prop?.startsWith('parameters')) {
        const paramKey = prop.replace('parameters.', '');
        target.parameters[paramKey] = delta.value as string | number | boolean;
      }
    }
  }
  return next;
};

const createQuoteSummary = (state: ParametricState): QuoteSummary => {
  const subtotal = state.cabinets.reduce((acc, cabinet) => acc + cabinet.width * 0.5, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;
  const catalogVersion: CatalogSnapshotRef = {
    id: state.catalogVersionId,
    hash: 'demo-hash'
  };
  return {
    id: `quote-${state.projectId}` as QuoteId,
    projectId: state.projectId,
    tenantId: state.tenantId,
    status: 'draft',
    currency: 'USD',
    subtotal,
    tax,
    total,
    marginPercent: 22,
    createdAt: nowIso(),
    updatedAt: nowIso(),
    catalogVersion,
    lineItems: state.cabinets.map((cabinet) => ({
      id: cabinet.id,
      sku: cabinet.sku,
      description: `Cabinet ${cabinet.sku}`,
      quantity: 1,
      unitPrice: cabinet.width * 0.5,
      listPrice: cabinet.width * 0.5,
      netPrice: cabinet.width * 0.5,
      currency: 'USD',
      marginPercent: 22,
      configurationRef: {
        projectId: state.projectId,
        cabinetInstanceId: cabinet.id
      }
    }))
  };
};

const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    const { session } = resolveBaseEntities(ctx);
    return session;
  }),
  loginWithOAuthCallback: publicProcedure
    .input(z.object({ code: z.string(), state: z.string().optional() }))
    .mutation(({ ctx, input }) => {
      const { session, user, tenant } = resolveBaseEntities(ctx);
      return {
        ...session,
        id: `sess-${input.code}`,
        userId: user.id,
        tenantId: tenant.id,
        issuedAt: nowIso(),
        expiresAt: nowIso(),
        jwt: `stub.jwt.${input.code}`
      };
    }),
  logout: publicProcedure.mutation(() => ({ success: true }))
});

const tenancyRouter = router({
  getCurrentTenant: protectedProcedure.query(({ ctx }): Tenant => {
    return resolveBaseEntities(ctx).tenant;
  }),
  listTenantsForUser: protectedProcedure.query(({ ctx }): Tenant[] => {
    return [resolveBaseEntities(ctx).tenant];
  })
});

const configuratorRouter = router({
  getSessionState: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(({ input, ctx }): { state: ParametricState } => {
      const { tenant } = resolveBaseEntities(ctx);
      const state = buildParametricState(input.projectId as ProjectId, tenant.id);
      return { state };
    }),
  mutateParameters: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        deltas: z.array(
          z.object({
            path: z.string(),
            value: z.union([z.number(), z.string(), z.boolean()])
          }) as unknown as z.ZodType<ParamDelta>
        )
      })
    )
    .mutation(({ input, ctx }) => {
      const { tenant } = resolveBaseEntities(ctx);
      const state = buildParametricState(input.projectId as ProjectId, tenant.id);
      const updated = applyDeltas(state, input.deltas as ParamDelta[]);
      return {
        state: updated,
        constraintSummary: updated.constraints,
        priceDelta: { totalPrice: updated.cabinets.length * 1000, currency: 'USD' }
      };
    }),
  requestLayoutVariants: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        goals: z.custom<LayoutGoals>()
      })
    )
    .mutation(({ input, ctx }): { variants: LayoutVariant[] } => {
      const { tenant } = resolveBaseEntities(ctx);
      const baseState = buildParametricState(input.projectId as ProjectId, tenant.id);
      const variants: LayoutVariant[] = [
        {
          id: 'variant-1' as LayoutVariantId,
          label: 'Galley',
          state: baseState,
          objectiveScores: {
            workTriangleScore: 0.8,
            storageScore: 0.6,
            budgetScore: 0.7,
            ergonomicsScore: 0.75
          }
        },
        {
          id: 'variant-2' as LayoutVariantId,
          label: 'Island',
          state: { ...baseState, updatedAt: nowIso() },
          objectiveScores: {
            workTriangleScore: 0.7,
            storageScore: 0.7,
            budgetScore: 0.65,
            ergonomicsScore: 0.72
          }
        }
      ];
      return { variants };
    }),
  validateDesign: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query((): ConstraintSummary => baseConstraintSummary)
});

const cpqRouter = router({
  getQuoteForProject: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(({ input, ctx }): QuoteSummary | null => {
      const { tenant } = resolveBaseEntities(ctx);
      const state = buildParametricState(input.projectId as ProjectId, tenant.id);
      return createQuoteSummary(state);
    }),
  recomputeQuote: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation(({ input, ctx }): QuoteSummary => {
      const { tenant } = resolveBaseEntities(ctx);
      const state = buildParametricState(input.projectId as ProjectId, tenant.id);
      return createQuoteSummary(state);
    }),
  applyDealerAdjustments: protectedProcedure
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
    .mutation(({ input, ctx }): QuoteSummary => {
      const { tenant } = resolveBaseEntities(ctx);
      const state = buildParametricState(input.quoteId as ProjectId, tenant.id);
      const baseQuote = createQuoteSummary(state);
      const discountMultiplier =
        input.adjustments.length > 0 ? 1 - input.adjustments[0].discountPercent / 100 : 1;
      const subtotal = baseQuote.subtotal * discountMultiplier;
      const tax = subtotal * 0.07;
      return {
        ...baseQuote,
        subtotal,
        tax,
        total: subtotal + tax,
        updatedAt: nowIso()
      };
    })
});

const catalogAdminRouter = router({
  listCatalogVersions: protectedProcedure.query(({ ctx }): CatalogVersion[] => {
    const { tenant, user } = resolveBaseEntities(ctx);
    return [
      {
        id: 'catalog-001' as CatalogVersionId,
        tenantId: tenant.id,
        label: 'Baseline Kitchen Catalog',
        createdAt: nowIso(),
        createdBy: user.id,
        hash: 'hash-001',
        payloadUri: 's3://catalogs/catalog-001.json'
      }
    ];
  }),
  publishCatalogDraft: protectedProcedure
    .input(z.object({ draftId: z.string() }))
    .mutation(({ input, ctx }): CatalogVersion => {
      const { tenant, user } = resolveBaseEntities(ctx);
      return {
        id: input.draftId as CatalogVersionId,
        tenantId: tenant.id,
        label: `Published ${input.draftId}`,
        createdAt: nowIso(),
        createdBy: user.id,
        hash: `hash-${input.draftId}`,
        payloadUri: `s3://catalogs/${input.draftId}.json`
      };
    })
});

const copilotRouter = router({
  startSession: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation((): { sessionId: ULID } => {
      return { sessionId: `copilot-${Date.now()}` as ULID };
    }),
  streamCompletion: protectedProcedure
    .input(
      z.object({
        sessionId: z.string(),
        messages: z.array(z.custom<CopilotMessage>())
      })
    )
    .subscription(() =>
      observable<{ token: string }>((emit) => {
        emit.next({ token: 'stub-token' });
        emit.complete();
        return () => undefined;
      })
    ),
  applySuggestion: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        deltas: z.array(z.custom<ParamDelta>())
      })
    )
    .mutation(({ input, ctx }) => {
      const { tenant } = resolveBaseEntities(ctx);
      const state = buildParametricState(input.projectId as ProjectId, tenant.id);
      const updated = applyDeltas(state, input.deltas as ParamDelta[]);
      return {
        state: updated,
        constraintSummary: updated.constraints
      };
    })
});

const uiRouter = router({
  getConstraintBadge: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query((): ConstraintBadgePayload => ({
      severity: baseConstraintSummary.hasBlockingErrors ? 'error' : 'ok',
      count: baseConstraintSummary.violations.length,
      primaryMessage: baseConstraintSummary.hasBlockingErrors
        ? 'Blocking constraints present'
        : 'All constraints satisfied'
    })),
  getCpqSummaryBar: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(({ input, ctx }): CpqSummaryBarState => {
      const { tenant } = resolveBaseEntities(ctx);
      const quote = createQuoteSummary(buildParametricState(input.projectId as ProjectId, tenant.id));
      return {
        total: quote.total,
        tax: quote.tax,
        marginPercent: quote.marginPercent,
        currency: quote.currency,
        hasBlockingErrors: baseConstraintSummary.hasBlockingErrors
      };
    })
});

export const appRouter = router({
  auth: authRouter,
  tenancy: tenancyRouter,
  configurator: configuratorRouter,
  cpq: cpqRouter,
  catalogAdmin: catalogAdminRouter,
  copilot: copilotRouter,
  ui: uiRouter
});

export type AppRouter = typeof appRouter;
export {
  authRouter,
  tenancyRouter,
  configuratorRouter,
  cpqRouter,
  catalogAdminRouter,
  copilotRouter,
  uiRouter
};
