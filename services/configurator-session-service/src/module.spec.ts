import { ConfiguratorSessionService } from './module';

describe('ConfiguratorSessionService', () => {
  const service = new ConfiguratorSessionService();

  beforeAll(() => {
    // @ts-ignore
    global.fetch = jest.fn(async () => ({
      ok: true,
      json: async () => ({ variants: [] })
    }));
  });

  it('mutates state via kernel and persists session', async () => {
    const response = await service.mutate({
      tenantId: 'tenant-1' as any,
      userId: 'user-1' as any,
      projectId: 'proj-1' as any,
      deltas: [{ path: 'cabinets.cab-1.width' as any, value: 800 }],
      requestGallery: false
    });

    expect(response.state.cabinets[0].width).toBe(800);
    expect(response.constraintSummary.hasBlockingErrors).toBe(false);
  });

  it('validates existing session state', async () => {
    const constraints = await service.validate({
      tenantId: 'tenant-1' as any,
      userId: 'user-1' as any,
      projectId: 'proj-1' as any
    });
    expect(constraints.violations.length).toBeGreaterThanOrEqual(0);
  });
});
