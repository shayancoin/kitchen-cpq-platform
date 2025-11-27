import { ParametricKernelService } from './module';
import { createDefaultState, setStoredState } from '@kitchen-cpq/geometry-kernel';

describe('ParametricKernelService', () => {
  const service = new ParametricKernelService();

  it('applies deltas and preserves project metadata', async () => {
    const projectId = 'proj-1';
    createDefaultState(projectId as any);
    const response = await service.applyDelta({
      project_id: projectId,
      deltas: [{ path: 'cabinets.cab-1.width', value_json: JSON.stringify(900) }]
    });

    const parsed = JSON.parse(response.state.json);
    expect(parsed.projectId).toBe(projectId);
    expect(parsed.cabinets[0].width).toBe(900);
    expect(response.constraints.hasBlockingErrors).toBe(false);
  });

  it('detects simple constraint violations (max cabinet count)', async () => {
    const projectId = 'proj-constraints';
    const base = createDefaultState(projectId as any);
    base.cabinets = Array.from({ length: 11 }).map((_, idx) => ({
      ...base.cabinets[0],
      id: `cab-${idx}`
    })) as any;
    setStoredState(projectId as any, base);

    const result = await service.validateDesign({ project_id: projectId });
    expect(result.constraints.hasBlockingErrors).toBe(true);
    expect(result.constraints.violations[0].code).toBe('NKBA_AISLE_WIDTH');
  });
});
