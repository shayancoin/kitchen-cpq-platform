const stateStore = new Map();
let wasmModulePromise = null;

async function loadWasm() {
  if (wasmModulePromise) return wasmModulePromise;
  wasmModulePromise = import('./geometry_kernel.js').catch(() => ({}));
  return wasmModulePromise;
}

const cloneState = (state) => JSON.parse(JSON.stringify(state));

function setCabinetField(state, cabinetId, key, value) {
  const target = state.cabinets.find((c) => c.id === cabinetId);
  if (!target) return;
  if (key === 'parameters') return;
  target[key] = value;
}

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

function defaultState(projectId) {
  const base = {
    projectId,
    tenantId: 'tenant-demo',
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
  const state = stateStore.get(projectId) || defaultState(projectId);
  return computeConstraints(state);
}

function getStoredState(projectId) {
  return stateStore.get(projectId);
}

function setStoredState(projectId, state) {
  stateStore.set(projectId, state);
}

function createDefaultState(projectId) {
  return defaultState(projectId);
}

module.exports = {
  applyDelta,
  validateDesign,
  getStoredState,
  setStoredState,
  createDefaultState
};
