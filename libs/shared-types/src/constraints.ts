import type { CabinetInstanceId } from './cabinets';
import type { ULID } from './primitives';

export type ConstraintSeverity = 'info' | 'warning' | 'error';

export type ConstraintCode =
  | 'NKBA_WORK_TRIANGLE'
  | 'NKBA_AISLE_WIDTH'
  | 'COLLISION'
  | 'OOB_ROOM'
  | 'DFM_PANEL_SIZE'
  | 'DFM_EDGE_CLEARANCE';

export interface ConstraintViolation {
  code: ConstraintCode;
  severity: ConstraintSeverity;
  message: string;
  affectedCabinetIds: CabinetInstanceId[];
  affectedGeometryIds: ULID[];
}

export interface ConstraintSummary {
  hasBlockingErrors: boolean;
  violations: ConstraintViolation[];
}

