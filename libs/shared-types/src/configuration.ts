import type { ISODateTime } from './primitives';
import type { RoomGeometry } from './geometry';
import type { CabinetInstance, CabinetInstanceId } from './cabinets';
import type { ConstraintSummary } from './constraints';
import type { CatalogVersionId, ProjectId } from './projects';
import type { TenantId } from './identity';

export interface ParametricState {
  projectId: ProjectId;
  tenantId: TenantId;
  catalogVersionId: CatalogVersionId;
  room: RoomGeometry;
  cabinets: CabinetInstance[];
  constraints: ConstraintSummary;
  updatedAt: ISODateTime;
}

export type ParamPath =
  | `room.perimeter.${string}.start`
  | `room.perimeter.${string}.end`
  | `cabinets.${CabinetInstanceId}.position`
  | `cabinets.${CabinetInstanceId}.width`
  | `cabinets.${CabinetInstanceId}.parameters.${string}`;

export interface ParamDelta {
  path: ParamPath;
  value: number | string | boolean;
}

export interface LayoutGoals {
  storageWeight: number;
  budgetWeight: number;
  opennessWeight: number;
  familyFriendlyWeight: number;
  prefersIsland: boolean;
}

export interface LayoutVariantIdBrand {
  readonly _brand: 'LayoutVariantId';
}
export type LayoutVariantId = string & LayoutVariantIdBrand;

export interface LayoutVariant {
  id: LayoutVariantId;
  label: string;
  state: ParametricState;
  objectiveScores: {
    workTriangleScore: number;
    storageScore: number;
    budgetScore: number;
    ergonomicsScore: number;
  };
}

