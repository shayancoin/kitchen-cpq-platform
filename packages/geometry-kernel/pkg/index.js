const stateStore = new Map();
let wasmModulePromise = null;

/**
 * Lazily loads and caches the geometry kernel module.
 * @returns {Promise<Object>} The geometry kernel module object, or an empty object if loading fails.
 */
async function loadWasm() {
  if (wasmModulePromise) return wasmModulePromise;
  wasmModulePromise = import('./geometry_kernel.js').catch(() => ({}));
  return wasmModulePromise;
}

const cloneState = (state) => JSON.parse(JSON.stringify(state));

/**
 * Set a top-level field on a cabinet in the state, ignoring the `parameters` field.
 * Mutates the provided state in-place; does nothing if no cabinet with the given id exists.
 * @param {object} state - State object containing a `cabinets` array.
 * @param {string} cabinetId - Identifier of the cabinet to update.
 * @param {string} key - Field name to set on the cabinet; updates are ignored when `key` is `'parameters'`.
 * @param {*} value - Value to assign to the specified field.
 */
function setCabinetField(state, cabinetId, key, value) {
  const target = state.cabinets.find((c) => c.id === cabinetId);
  if (!target) return;
  if (key === 'parameters') return;
  target[key] = value;
}

/**
 * Compute constraint violations for a design state.
 * @param {Object} state - Design state object containing a `cabinets` array.
 * @returns {{hasBlockingErrors: boolean, violations: Array<Object>}} An object with `hasBlockingErrors` set to `true` if any violation has severity `"error"`, and `violations` listing each detected constraint violation. Each violation contains `code`, `severity`, `message`, and optional `affectedCabinetIds` / `affectedGeometryIds`.
 */
function computeConstraints(state) {
  const violations = [];
  if (state.cabinets.length > 10) {
    violations.push({
      code: 'NKBA_AISLE_WIDTH',
      severity: 'error',
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
 * Create and persist a new default project state containing a single room, one base cabinet, and initial constraints.
 * @param {string} projectId - Unique identifier for the project.
 * @param {string} tenantId - Identifier for the tenant/organization.
 * @returns {Object} The created state object.
 */
function defaultState(projectId, tenantId) {
  const base = {
    projectId,
    tenantId,
    catalogVersionId: 'catalog-001',
    room: {
      id: 'room-1',
      perimeter: [
        { id: 'wall-1', start: { x: 0, y: 0 }, end: { x: 4000, y: 0 }, height: 2700, thickness: 150 },
        { id: 'wall-2', start: { x: 4000, y: 0 }, end: { x: 4000, y: 3200 }, height: 2700, thickness: 150 }
      ],
      openings: [],
      ceilingHeight: 2700
    },
    cabinets: [
      {
        id: 'cab-1',
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
    constraints: { hasBlockingErrors: false, violations: [] },
    updatedAt: new Date().toISOString()
  };
  stateStore.set(projectId, base);
  return base;
}

/**
 * Apply a sequence of deltas to a cloned copy of the provided state, persist the result, and recompute constraints.
 *
 * Applies deltas that target cabinet fields (including nested `parameters` entries) and room perimeter wall endpoints.
 * After applying all deltas this function recomputes the state's constraints, sets `updatedAt` to the current time,
 * stores the new state in the internal state store keyed by `projectId`, and returns the updated state and constraints.
 *
 * @param {Object} state - The current project state to clone and modify.
 * @param {Array<Object>} deltas - An array of delta objects. Each delta must include a `path` string and a `value`.
 *                                Paths supported by this function include:
 *                                - `cabinets.<cabinetId>.<field>` (or `cabinets.<cabinetId>.parameters.<...>` for nested params)
 *                                - `room.perimeter.<wallId>.<start|end>`
 * @returns {{ state: Object, constraints: Object }} The updated (stored) state and its recomputed constraints.
function applyDeltaPure(state, deltas) {
  const next = cloneState(state);
  for (const delta of deltas) {
    const segments = delta.path.split('.');
    if (segments[0] === 'cabinets' && segments.length >= 3) {
      const [, cabinetId, prop, ...rest] = segments;
      if (prop === 'parameters' && rest.length > 0) {
        const paramKey = rest.join('.');
        const cab = next.cabinets.find((c) => c.id === cabinetId);
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
          wall[leaf] = delta.value;
        }
      }
      continue;
    }
  }

  const constraints = computeConstraints(next);
  next.constraints = constraints;
  next.updatedAt = new Date().toISOString();
  stateStore.set(next.projectId, next);
  return { state: next, constraints };
}

/**
 * Apply a delta to a design state, using the WebAssembly implementation when available and falling back to the pure-JS updater.
 * @param {Object} state - The current design state to which the delta will be applied.
 * @param {Object} delta - The change description to apply to the state.
 * @returns {Object} An object containing the resulting `state` and computed `constraints`.
 */
async function applyDelta(state, delta) {
  const wasm = await loadWasm();
  if (wasm.apply_delta) {
    try {
      const resultJson = wasm.apply_delta(JSON.stringify(state), JSON.stringify(delta));
      const parsed = JSON.parse(resultJson);
      stateStore.set(parsed.state.projectId, parsed.state);
      return parsed;
    } catch {
      // fall through
    }
  }
  return applyDeltaPure(state, delta);
}

/**
 * Validate a project's design and produce constraint evaluation results.
 * @param {string} projectId - The project identifier whose design should be validated.
 * @returns {{hasBlockingErrors: boolean, violations: Array}} An object describing constraint evaluation: `hasBlockingErrors` indicates whether any errors with blocking severity exist, and `violations` is an array of individual violation entries.
 */
async function validateDesign(projectId) {
  const wasm = await loadWasm();
  if (wasm.validate_design) {
    try {
      const json = wasm.validate_design(projectId);
      return JSON.parse(json);
    } catch {
      // fall back
    }
  }
  const state = stateStore.get(projectId) || defaultState(projectId, 'tenant-demo');
  return computeConstraints(state);
}

/**
 * Retrieve persisted project state from the in-memory store.
 * @param {string} projectId - Project identifier.
 * @returns {Object|undefined} The stored state for the project, or `undefined` if none exists.
 */
function getStoredState(projectId) {
  return stateStore.get(projectId);
}

/**
 * Persist the given project state in the in-memory store under the provided project identifier.
 * @param {string} projectId - The unique identifier for the project.
 * @param {Object} state - The project state object to store (typically the full design state).
 */
function setStoredState(projectId, state) {
  stateStore.set(projectId, state);
}

/**
 * Create and persist a default design state for the specified project and tenant.
 * @param {string} projectId - The project identifier to associate the new state with.
 * @param {string} tenantId - The tenant identifier for the new state.
 * @returns {object} The created default state object stored for the project.
 */
function createDefaultState(projectId, tenantId) {
  return defaultState(projectId, tenantId);
}

module.exports = {
  applyDelta,
  validateDesign,
  getStoredState,
  setStoredState,
  createDefaultState
};