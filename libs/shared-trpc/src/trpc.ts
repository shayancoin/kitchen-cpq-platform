import { initTRPC, TRPCError } from '@trpc/server';
import type { Session, TenantId, UserId } from '@kitchen-cpq/shared-types';

export type TrpcContext = {
  userId?: UserId;
  tenantId?: TenantId;
  session?: Session | null;
};

const t = initTRPC.context<TrpcContext>().create();

const enforceAuth = t.middleware(({ ctx, next }) => {
  if (!ctx?.userId || !ctx?.tenantId) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Missing auth context' });
  }
  return next({ ctx });
});

export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(enforceAuth);
export const createCallerFactory = t.createCallerFactory;
