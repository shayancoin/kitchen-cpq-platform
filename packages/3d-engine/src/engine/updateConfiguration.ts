import type { ParametricState } from '@kitchen-cpq/shared-types';
import type { SceneHandle } from './createKitchenScene';
import type { Mesh, InstancedMesh } from '@babylonjs/core';

const cabinetColor = { r: 0.8, g: 0.72, b: 0.65 };
let babylonCache: typeof import('@babylonjs/core') | null = null;

/**
 * Update the scene to match the provided parametric state by creating, updating, or removing cabinet visuals.
 *
 * Updates or lazily initializes 3D cabinet meshes, their shared base mesh and material, and synchronizes instances with state.cabinets; if the 3D scene or required context is unavailable, renders a simple 2D fallback onto the provided canvas.
 *
 * @param handle - Scene handle that holds the Babylon scene, engine, canvas and optional cached cabinet meshes/materials
 * @param state - Parametric state containing the list of cabinets to render and synchronize
 */
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
  const { MeshBuilder, Color3, StandardMaterial } = babylon;

  const existing: Map<string, Mesh | InstancedMesh> =
    (handle.cabinets as Map<string, Mesh | InstancedMesh>) ?? new Map();
  handle.cabinets = existing;

  if (!handle.cabinetBaseMesh) {
    handle.cabinetBaseMesh = MeshBuilder.CreateBox('cabinet-base', { size: 1 }, handle.scene);
    handle.cabinetBaseMesh.isVisible = false;
  }
  if (!handle.cabinetMaterial) {
    const mat = new StandardMaterial('cabinet-mat', handle.scene);
    mat.diffuseColor = new Color3(cabinetColor.r, cabinetColor.g, cabinetColor.b);
    handle.cabinetMaterial = mat;
  }
  handle.cabinetBaseMesh.material = handle.cabinetMaterial;

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
      const instance = handle.cabinetBaseMesh.createInstance(`cab-${cab.id}`);
      instance.material = handle.cabinetMaterial;
      mesh = instance;
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