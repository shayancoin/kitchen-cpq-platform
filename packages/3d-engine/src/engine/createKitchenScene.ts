import type { ParametricState } from '@kitchen-cpq/shared-types';

export interface SceneHandle {
  id: string;
}

export function createKitchenScene(
  canvas: HTMLCanvasElement,
  initialState: ParametricState
): SceneHandle {
  // Babylon.js integration will be wired later based on bp800/react-babylonjs.
  console.log('createKitchenScene stub', { canvas, initialState });
  return { id: 'stub-scene' };
}

