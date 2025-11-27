import { Injectable } from '@nestjs/common';
import type {
  ConstraintSummary,
  LayoutVariant,
  ParamDelta,
  ParametricState,
  TenantId
} from '@kitchen-cpq/shared-types';

const nowIso = () => new Date().toISOString();

@Injectable()
export class ConfiguratorGatewayService {
  buildState(projectId: string, tenantId: TenantId): ParametricState {
    return {
      projectId,
      tenantId,
      catalogVersionId: 'catalog-001',
      room: {
        id: 'room-1',
        perimeter: [],
        openings: [],
        ceilingHeight: 2700
      },
      cabinets: [],
      constraints: { hasBlockingErrors: false, violations: [] },
      updatedAt: nowIso()
    };
  }

  applyDeltas(state: ParametricState, _deltas: ParamDelta[]): ParametricState {
    return {
      ...state,
      updatedAt: nowIso()
    };
  }

  layoutVariants(state: ParametricState): LayoutVariant[] {
    return [
      {
        id: 'layout-a',
        label: 'Galley',
        state,
        objectiveScores: {
          workTriangleScore: 0.8,
          storageScore: 0.6,
          budgetScore: 0.7,
          ergonomicsScore: 0.75
        }
      }
    ];
  }

  constraintSummary(): ConstraintSummary {
    return { hasBlockingErrors: false, violations: [] };
  }
}
