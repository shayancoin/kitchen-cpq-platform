import type { Degree, Millimeter } from './primitives';
import type { ULID } from './primitives';

export type CabinetKind = 'base' | 'wall' | 'tall' | 'appliance';

export interface CabinetInstanceIdBrand {
  readonly _brand: 'CabinetInstanceId';
}
export type CabinetInstanceId = string & CabinetInstanceIdBrand;

export interface CabinetInstance {
  id: CabinetInstanceId;
  sku: string;
  kind: CabinetKind;
  roomId: ULID;
  wallId: ULID;
  position: Millimeter;
  elevation: Millimeter;
  width: Millimeter;
  depth: Millimeter;
  height: Millimeter;
  rotationDeg: Degree;
  parameters: Record<string, number | string | boolean>;
}

