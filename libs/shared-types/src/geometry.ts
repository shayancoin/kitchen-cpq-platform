import type { Millimeter, ULID } from './primitives';

export interface Vector2 {
  x: Millimeter;
  y: Millimeter;
}

export interface Vector3 {
  x: Millimeter;
  y: Millimeter;
  z: Millimeter;
}

export interface WallSegment {
  id: ULID;
  start: Vector2;
  end: Vector2;
  height: Millimeter;
  thickness: Millimeter;
}

export interface Opening {
  id: ULID;
  kind: 'door' | 'window';
  positionOnWall: Millimeter;
  width: Millimeter;
  height: Millimeter;
  sillHeight: Millimeter;
}

export interface RoomGeometry {
  id: ULID;
  perimeter: WallSegment[];
  openings: Opening[];
  ceilingHeight: Millimeter;
}

