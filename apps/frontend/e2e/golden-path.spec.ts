import { test, expect } from '@playwright/test';
import { appRouter } from '@kitchen-cpq/shared-trpc';

const caller = appRouter.createCaller({
  userId: 'user-demo',
  tenantId: 'tenant-demo',
  session: {
    id: 'session-demo',
    userId: 'user-demo',
    tenantId: 'tenant-demo',
    issuedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    jwt: 'stub.jwt'
  }
});

test('golden path: login -> quotes -> configurator', async () => {
  const session = await caller.auth.getSession();
  expect(session?.tenantId).toBe('tenant-demo');

  const quote = await caller.cpq.getQuoteForProject({ projectId: 'demo-project' });
  expect(quote?.id).toBeDefined();
  expect(quote?.lineItems.length).toBeGreaterThanOrEqual(0);

  const mutateResult = await caller.configurator.mutateParameters({
    projectId: 'demo-project',
    deltas: [{ path: 'cabinets.cab-1.width', value: 800 }]
  });

  expect(mutateResult.state.updatedAt).toBeTruthy();
  expect(mutateResult.priceDelta.totalPrice).toBeGreaterThanOrEqual(0);
});
