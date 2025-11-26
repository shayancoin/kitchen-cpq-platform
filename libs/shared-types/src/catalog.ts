import type { CatalogVersionId } from './projects';
import type { ISODateTime } from './primitives';
import type { TenantId, UserId } from './identity';

export interface CatalogVersion {
  id: CatalogVersionId;
  tenantId: TenantId;
  label: string;
  createdAt: ISODateTime;
  createdBy: UserId;
  hash: string;
  payloadUri: string;
}

export interface CatalogSnapshotRef {
  id: CatalogVersionId;
  hash: string;
}

