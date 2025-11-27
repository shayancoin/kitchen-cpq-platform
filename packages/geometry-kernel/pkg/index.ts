import type {
  ConstraintSeverity,
  ConstraintSummary,
  ParamDelta,
  ParametricState,
  ProjectId,
  TenantId
} from '@kitchen-cpq/shared-types';

type WasmModule = {
  apply_delta?: (stateJson: string, deltaJson: string) => string;
  validate_design?: (projectId: string) => string;
};

const stateStore = new Map<string, ParametricState>();
let wasmModulePromise: Promise<WasmModule> | null = null;

/**
 * Load and cache the geometry WebAssembly module wrapper, falling back to an empty object when unavailable.
 *
 * @returns The loaded `WasmModule` wrapper, or an empty object if the module cannot be imported
 */
async function loadWasm(): Promise<WasmModule> {
  if (wasmModulePromise) return wasmModulePromise;
  // In CI/dev we often run without wasm-pack output. Fallback to an empty object so the pure
  // TypeScript path is used. If the generated geometry_kernel.js exists it will be loaded.
  wasmModulePromise = (import('./geometry_kernel.js') as Promise<WasmModule>).catch(() => ({}));
  return wasmModulePromise;
}

const cloneState = (state: ParametricState): ParametricState =>
  JSON.parse(JSON.stringify(state));

/**
 * Set a top-level property on a cabinet within the given state.
 *
 * If the cabinet with `cabinetId` is not found or `key` is `"parameters"`, the function does nothing.
 *
 * @param state - The parametric state containing cabinets
 * @param cabinetId - The identifier of the cabinet to modify
 * @param key - The cabinet property name to set (must be a top-level cabinet field; nested `parameters.*` are ignored)
 * @param value - The new value to assign to the specified property
 */
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

/**
 * Applies a list of parameter and geometry deltas to a deep-cloned state and returns the updated state with recomputed constraints.
 *
 * @param state - The source ParametricState to clone and apply deltas to
 * @param deltas - Ordered list of ParamDelta entries describing path-based updates
 * @returns An object containing `state`: the updated ParametricState (with applied deltas and refreshed `updatedAt`), and `constraints`: the ConstraintSummary computed for that updated state
 */
function applyDeltaPure(
  state: ParametricState,
  deltas: ParamDelta[]
): { state: ParametricState; constraints: ConstraintSummary } {
  const next = cloneState(state);
  for (const delta of deltas) {
    const segments = delta.path.split('.');
    if (segments[0] === 'cabinets' && segments.length >= 3) {
      const [, cabinetId, prop, ...rest] = segments;
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

/**
 * Evaluate a parametric state and produce a constraint summary containing detected violations.
 *
 * @param state - The parametric state to evaluate for constraint violations
 * @returns An object with `violations` (the list of detected constraint violations) and `hasBlockingErrors` — `true` if any violation has severity `'error'`, `false` otherwise
 */
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

/**
 * Create a baseline ParametricState populated with a simple room, one cabinet, and default metadata.
 *
 * @param projectId - The project identifier to assign to the created state
 * @param tenantId - The tenant identifier to assign to the created state
 * @returns A ParametricState containing: the provided `projectId` and `tenantId`, a default `catalogVersionId`, a room with two walls and no openings, a single base cabinet, an empty constraint summary (`hasBlockingErrors: false`), and `updatedAt` set to the current timestamp
 */
function defaultState(projectId: ProjectId, tenantId: TenantId): ParametricState {
  return {
    projectId,
    tenantId,
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

/**
 * Apply a sequence of parameter deltas to a parametric state, preferring a loaded WASM implementation and falling back to a TypeScript implementation when unavailable or on error.
 *
 * @param state - The current parametric state to update
 * @param delta - An array of parameter deltas to apply to `state`
 * @returns The updated `state` and the computed constraint summary for that state
 *
 * Side effects: persists the updated state in the internal state store under its `projectId`.
 */
export async function applyDelta(
  state: ParametricState,
  delta: ParamDelta[]
): Promise<{ state: ParametricState; constraints: ConstraintSummary }> {
  const wasm = await loadWasm();
  if (wasm.apply_delta) {
    try {
      const resultJson = wasm.apply_delta(JSON.stringify(state), JSON.stringify(delta));
      const parsed = JSON.parse(resultJson) as { state: ParametricState; constraints: ConstraintSummary };
      stateStore.set(parsed.state.projectId as any, parsed.state);
      return parsed;
    } catch {
      // fall through to TS path
    }
  }
  return applyDeltaPure(state, delta);
}

/**
 * Validate a project's design and produce a constraint summary for its current state.
 *
 * If a WASM-based validator is available and succeeds, its result is returned; otherwise constraints are computed from the stored state for `projectId` or from a default state.
 *
 * @returns The computed ConstraintSummary describing any violations and whether there are blocking errors
 */
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
  const state =
    stateStore.get(projectId as any) ??
    defaultState(projectId, 'tenant-demo' as TenantId);
  return computeConstraints(state);
}

/**
 * Retrieve the stored ParametricState for a project.
 *
 * @param projectId - Project identifier to look up in the in-memory state store
 * @returns The stored ParametricState for `projectId`, or `undefined` if not present
 */
export function getStoredState(projectId: ProjectId): ParametricState | undefined {
  return stateStore.get(projectId as any);
}

/**
 * Store the provided ParametricState in the internal in-memory state store under the given projectId.
 *
 * @param projectId - Identifier of the project whose state is being stored
 * @param state - The ParametricState to store
 */
export function setStoredState(projectId: ProjectId, state: ParametricState): void {
  stateStore.set(projectId as any, state);
}

/**
 * Create and persist a default ParametricState for the given project and tenant.
 *
 * @param projectId - Identifier for the project; used as the state's projectId and storage key
 * @param tenantId - Identifier for the tenant set on the created state
 * @returns The newly created and stored ParametricState
 */
export function createDefaultState(projectId: ProjectId, tenantId: TenantId): ParametricState {
  const base = defaultState(projectId, tenantId);
  stateStore.set(projectId as any, base);
  return base;
}