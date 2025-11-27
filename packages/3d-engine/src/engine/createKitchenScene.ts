import type { ParametricState } from '@kitchen-cpq/shared-types';
import type { Mesh, InstancedMesh, StandardMaterial } from '@babylonjs/core';
import { updateSceneFromState } from './updateConfiguration';

type BabylonModule = typeof import('@babylonjs/core');

export interface SceneHandle {
  id: string;
  canvas: HTMLCanvasElement;
  engine?: any;
  scene?: any;
  cabinets?: Map<string, Mesh | InstancedMesh>;
  cabinetMaterial?: StandardMaterial;
  cabinetBaseMesh?: Mesh;
  dispose?: () => void;
}

async function loadBabylon(): Promise<BabylonModule | null> {
  try {
    // Dynamic import so tests without Babylon can still run.
    const module = await import('@babylonjs/core');
    return module;
  } catch (err) {
    console.warn('Babylon.js not available, falling back to canvas stub', err);
    return null;
  }
}

export async function createKitchenScene(
  canvas: HTMLCanvasElement,
  initialState: ParametricState
): Promise<SceneHandle> {
  const babylon = await loadBabylon();
  const handle: SceneHandle = {
    id: `scene-${Date.now()}`,
    canvas,
    cabinets: new Map()
  };

  if (!babylon) {
    // Simple 2D fallback render.
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    return handle;
  }

  const {
    Engine,
    Scene,
    HemisphericLight,
    Vector3,
    ArcRotateCamera,
    MeshBuilder,
    Color3,
    StandardMaterial
  } = babylon;
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);
  const camera = new ArcRotateCamera(
    'camera',
    Math.PI / 2,
    Math.PI / 3,
    6000,
    new Vector3(0, 1000, 0),
    scene
  );
  camera.attachControl(canvas, true);

  const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);
  light.intensity = 0.8;

  // Floor plane
  const floor = MeshBuilder.CreateGround(
    'floor',
    { width: 5000, height: 5000, subdivisions: 1 },
    scene
  );
  floor.position.y = 0;
  floor.receiveShadows = true;

  // Walls (simple boxes)
  const wallMaterial = new StandardMaterial('wall-mat', scene);
  wallMaterial.diffuseColor = new Color3(0.95, 0.95, 0.95);

  for (const wall of initialState.room.perimeter) {
    const dx = wall.end.x - wall.start.x;
    const dy = wall.end.y - wall.start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    if (length < 1) {
      // Skip degenerate wall segments
      continue;
    }
    const wallMesh = MeshBuilder.CreateBox(
      `wall-${wall.id}`,
      { width: length, height: wall.height, depth: wall.thickness },
      scene
    );
    wallMesh.position.x = wall.start.x + dx / 2;
    wallMesh.position.z = wall.start.y + dy / 2;
    wallMesh.position.y = wall.height / 2;
    wallMesh.rotation.y = Math.atan2(dy, dx);
    wallMesh.material = wallMaterial;
  }

  // Shared cabinet material and base mesh (unit cube) to enable instancing.
  const cabinetMaterial = new StandardMaterial('cabinet-mat', scene);
  cabinetMaterial.diffuseColor = new Color3(0.8, 0.72, 0.65);
  const cabinetBaseMesh = MeshBuilder.CreateBox('cabinet-base', { size: 1 }, scene);
  cabinetBaseMesh.material = cabinetMaterial;
  cabinetBaseMesh.isVisible = false; // use only for instances

  handle.engine = engine;
  handle.scene = scene;
  handle.cabinets = new Map();
  handle.cabinetMaterial = cabinetMaterial;
  handle.cabinetBaseMesh = cabinetBaseMesh;
  handle.dispose = () => {
    scene.dispose();
    engine.dispose();
  };

  await updateSceneFromState(handle, initialState);
  engine.runRenderLoop(() => {
    scene.render();
  });

  return handle;
}
