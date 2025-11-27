import type { ParametricState } from '@kitchen-cpq/shared-types';
import type { SceneHandle } from './createKitchenScene';

let babylonCache: typeof import('@babylonjs/core') | null = null;

export async function updateSceneFromState(
  handle: SceneHandle,
  state: ParametricState
): Promise<void> {
  if (!handle.scene || !handle.engine || !handle.cabinets) {
    // Fallback: draw basic 2D rectangles
    const ctx = handle.canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, handle.canvas.width, handle.canvas.height);
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(0, 0, handle.canvas.width, handle.canvas.height);
      ctx.fillStyle = '#c7b299';
      state.cabinets.forEach((cab) => {
        ctx.fillRect(10 + cab.position * 0.05, 50, cab.width * 0.05, 40);
      });
    }
    return;
  }

  if (!babylonCache) {
    babylonCache = await import('@babylonjs/core');
  }
  const babylon = babylonCache;

  const existing = handle.cabinets;
  const base = handle.cabinetBaseMesh;
  const material = handle.cabinetMaterial;
  if (!base || !material) {
    return;
  }

  // Remove meshes that no longer exist
  for (const [id, mesh] of existing.entries()) {
    if (!state.cabinets.find((c) => c.id === id)) {
      mesh.dispose();
      existing.delete(id);
    }
  }

  for (const cab of state.cabinets) {
    let mesh = existing.get(cab.id);
    if (!mesh) {
      mesh = base.createInstance(`cab-${cab.id}`);
      mesh.material = material;
      existing.set(cab.id, mesh);
    }
    mesh.scaling.x = cab.width;
    mesh.scaling.y = cab.height;
    mesh.scaling.z = cab.depth;
    mesh.position.x = cab.position + cab.width / 2;
    mesh.position.y = cab.height / 2;
    mesh.position.z = cab.depth / 2;
    mesh.rotation.y = (cab.rotationDeg * Math.PI) / 180;
  }
}
