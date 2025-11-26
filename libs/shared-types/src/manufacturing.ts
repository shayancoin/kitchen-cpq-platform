import type { ISODateTime, Millimeter, ULID } from './primitives';
import type { ProjectId } from './projects';
import type { QuoteId } from './cpq';
import type { CatalogSnapshotRef } from './catalog';
import type { TenantId } from './identity';

export interface BomItem {
  id: ULID;
  sku: string;
  description: string;
  quantity: number;
  uom: 'piece' | 'panel' | 'edge_m' | 'hardware';
}

export interface Bom {
  id: ULID;
  /**
   * Invariant: tenantId(Bom) === tenantId(Project(projectId)).
   * Persistence code should always populate this from the owning project.
   */
  tenantId: TenantId;
  projectId: ProjectId;
  quoteId: QuoteId;
  items: BomItem[];
  generatedAt: ISODateTime;
  catalogVersion: CatalogSnapshotRef;
}

export interface CutListItem {
  id: ULID;
  panelSku: string;
  length: Millimeter;
  width: Millimeter;
  thickness: Millimeter;
  grainDirection: 'x' | 'y';
}

/**
 * Invariant:
 *   tenantId(CutList) === tenantId(Project(projectId)) === tenantId(Bom(bomId))
 *
 * Callers should always derive tenantId from the associated Project/Bom,
 * and persistence/query layers must include tenantId in filters to enforce
 * tenant isolation.
 */
export interface CutList {
  id: ULID;
  tenantId: TenantId;
  projectId: ProjectId;
  bomId: ULID;
  items: CutListItem[];
  generatedAt: ISODateTime;
}

export interface CncProgram {
  id: ULID;
  projectId: ProjectId;
  machineId: string;
  gcodeUri: string;
  nestingPreviewUri?: string;
  generatedAt: ISODateTime;
}
