import type {
  ConstraintSeverity,
  ConstraintSummary,
  ParamDelta,
  ParametricState,
  ProjectId
} from '@kitchen-cpq/shared-types';

type WasmModule = {
  apply_delta?: (stateJson: string, deltaJson: string) => string;
  validate_design?: (projectId: string) => string;
};

const stateStore = new Map<string, ParametricState>();
let wasmModulePromise: Promise<WasmModule> | null = null;

async function loadWasm(): Promise<WasmModule> {
  if (wasmModulePromise) return wasmModulePromise;
  // In CI/dev we often run without wasm-pack output. Fallback to an empty object so the pure
  // TypeScript path is used. If the generated geometry_kernel.js exists it will be loaded.
  wasmModulePromise = (import('./geometry_kernel.js') as Promise<WasmModule>).catch(() => ({}));
  return wasmModulePromise;
}

const cloneState = (state: ParametricState): ParametricState =>
  JSON.parse(JSON.stringify(state));

function setCabinetField(
  state: ParametricState,
  cabinetId: string,
  key: string,
  value: ParamDelta['value']
) {
  const target = state.cabinets.find((c) => c.id === (cabinetId as any));
  if (!target) return;
  if (key === 'parameters') {
    // not expected: parameters.* should be handled above
    return;
  }
  target[key] = value as any;
}

function applyDeltaPure(
  state: ParametricState,
  deltas: ParamDelta[]
): { state: ParametricState; constraints: ConstraintSummary } {
  const next = cloneState(state);
  for (const delta of deltas) {
    const segments = delta.path.split('.');
    if (segments[0] === 'cabinets' && segments.length >= 3) {
      const [_, cabinetId, prop, ...rest] = segments;
      if (prop === 'parameters' && rest.length > 0) {
        const paramKey = rest.join('.');
        const cab = next.cabinets.find((c) => c.id === (cabinetId as any));
        if (cab) {
          cab.parameters[paramKey] = delta.value;
        }
      } else {
        setCabinetField(next, cabinetId, prop, delta.value);
      }
      continue;
    }

    if (segments[0] === 'room' && segments[1] === 'perimeter' && segments.length >= 4) {
      const wallId = segments[2];
      const wall = next.room.perimeter.find((w) => w.id === wallId);
      if (wall) {
        const leaf = segments[3];
        if (leaf === 'start' || leaf === 'end') {
          wall[leaf] = delta.value as any;
        }
      }
      continue;
    }
  }

  const constraints = computeConstraints(next);
  next.constraints = constraints;
  next.updatedAt = new Date().toISOString() as any;
  stateStore.set(next.projectId as any, next);
  return { state: next, constraints };
}

function computeConstraints(state: ParametricState): ConstraintSummary {
  const violations: ConstraintSummary['violations'] = [];
  if (state.cabinets.length > 10) {
    violations.push({
      code: 'NKBA_AISLE_WIDTH',
      severity: 'error' as ConstraintSeverity,
      message: 'Maximum of 10 cabinets in demo kernel',
      affectedCabinetIds: state.cabinets.map((c) => c.id),
      affectedGeometryIds: []
    });
  }
  return {
    hasBlockingErrors: violations.some((v) => v.severity === 'error'),
    violations
  };
}

function defaultState(projectId: ProjectId): ParametricState {
  return {
    projectId,
    tenantId: 'tenant-demo' as any,
    catalogVersionId: 'catalog-001' as any,
    room: {
      id: 'room-1' as any,
      perimeter: [
        {
          id: 'wall-1' as any,
          start: { x: 0, y: 0 },
          end: { x: 4000, y: 0 },
          height: 2700,
          thickness: 150
        },
        {
          id: 'wall-2' as any,
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
        id: 'cab-1' as any,
        sku: 'BASE-30',
        kind: 'base',
        roomId: 'room-1' as any,
        wallId: 'wall-1' as any,
        position: 0,
        elevation: 0,
        width: 762,
        depth: 610,
        height: 914,
        rotationDeg: 0,
        parameters: {}
      }
    ],
    constraints: { hasBlockingErrors: false, violations: [] },
    updatedAt: new Date().toISOString() as any
  };
}

export async function applyDelta(
  state: ParametricState,
  delta: ParamDelta[]
): Promise<{ state: ParametricState; constraints: ConstraintSummary }> {
  const wasm = await loadWasm();
  if (wasm.apply_delta) {
    const resultJson = wasm.apply_delta(JSON.stringify(state), JSON.stringify(delta));
    try {
      const parsed = JSON.parse(resultJson) as { state: ParametricState; constraints: ConstraintSummary };
      stateStore.set(parsed.state.projectId as any, parsed.state);
      return parsed;
    } catch {
      // fall through to TS path
    }
  }
  return applyDeltaPure(state, delta);
}

export async function validateDesign(projectId: ProjectId): Promise<ConstraintSummary> {
  const wasm = await loadWasm();
  if (wasm.validate_design) {
    try {
      const json = wasm.validate_design(projectId as any);
      return JSON.parse(json) as ConstraintSummary;
    } catch {
      // fall back
    }
  }
  const state = stateStore.get(projectId as any) ?? defaultState(projectId);
  return computeConstraints(state);
}

export function getStoredState(projectId: ProjectId): ParametricState | undefined {
  return stateStore.get(projectId as any);
}

export function setStoredState(projectId: ProjectId, state: ParametricState): void {
  stateStore.set(projectId as any, state);
}

export function createDefaultState(projectId: ProjectId): ParametricState {
  const base = defaultState(projectId);
  stateStore.set(projectId as any, base);
  return base;
}
