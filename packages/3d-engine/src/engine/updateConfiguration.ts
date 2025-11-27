import type { ParametricState } from '@kitchen-cpq/shared-types';
import type { SceneHandle } from './createKitchenScene';

const cabinetColor = { r: 0.8, g: 0.72, b: 0.65 };

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

  const babylon = await import('@babylonjs/core');
  const { MeshBuilder, Color3 } = babylon;

  const existing = handle.cabinets;

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
      mesh = MeshBuilder.CreateBox(
        `cab-${cab.id}`,
        { width: cab.width, height: cab.height, depth: cab.depth },
        handle.scene
      );
      mesh.material = new babylon.StandardMaterial(`cab-mat-${cab.id}`, handle.scene);
      mesh.material.diffuseColor = new Color3(cabinetColor.r, cabinetColor.g, cabinetColor.b);
      existing.set(cab.id, mesh);
    }
    mesh.position.x = cab.position + cab.width / 2;
    mesh.position.y = cab.height / 2;
    mesh.position.z = cab.depth / 2;
    mesh.rotation.y = (cab.rotationDeg * Math.PI) / 180;
  }
}
