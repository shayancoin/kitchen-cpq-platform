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

  applyDeltas(state: ParametricState, deltas: ParamDelta[]): ParametricState {
    if (deltas.length === 0) {
      return state;
    }

    // Deep clone the state to avoid mutating callers.
    const nextState: ParametricState = JSON.parse(JSON.stringify(state));

    const setPath = (target: any, path: string, value: any) => {
      const segments = path.split('.');
      let cursor = target;
      for (let i = 0; i < segments.length; i++) {
        const keyRaw = segments[i];
        const isLast = i === segments.length - 1;
        const key: string | number = Number.isNaN(Number(keyRaw)) ? keyRaw : Number(keyRaw);

        if (isLast) {
          cursor[key] = value;
        } else {
          if (cursor[key] === undefined) {
            cursor[key] = {};
          }
          cursor = cursor[key];
        }
      }
    };

    for (const delta of deltas) {
      setPath(nextState, delta.path, delta.value);
    }

    nextState.updatedAt = nowIso();
    return nextState;
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

  constraintSummary(_state?: ParametricState): ConstraintSummary {
    return { hasBlockingErrors: false, violations: [] };
  }
}
