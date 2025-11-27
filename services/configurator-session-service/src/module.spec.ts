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
    const principal = { tenantId: 'tenant-1' as any, userId: 'user-1' as any, roles: ['dealer'] as any };
    const response = await service.mutate(principal, {
      projectId: 'proj-1' as any,
      deltas: [{ path: 'cabinets.cab-1.width' as any, value: 800 }],
      requestGallery: false
    });

    expect(response.state.cabinets[0].width).toBe(800);
    expect(response.constraintSummary.hasBlockingErrors).toBe(false);
  });

  it('validates existing session state', async () => {
    const principal = { tenantId: 'tenant-1' as any, userId: 'user-1' as any, roles: ['dealer'] as any };
    const constraints = await service.validate(principal, {
      projectId: 'proj-1' as any
    });
    expect(Array.isArray(constraints.violations)).toBe(true);
    constraints.violations.forEach((v) => {
      expect(typeof v.code).toBe('string');
      expect(typeof v.message).toBe('string');
      expect(Array.isArray(v.affectedCabinetIds)).toBe(true);
    });
    expect(constraints.hasBlockingErrors).toBe(false);
  });
});
