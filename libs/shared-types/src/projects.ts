import type { ISODateTime } from './primitives';
import type { TenantId, UserId } from './identity';

export interface ProjectIdBrand {
  readonly _brand: 'ProjectId';
}
export type ProjectId = string & ProjectIdBrand;

export interface CatalogVersionIdBrand {
  readonly _brand: 'CatalogVersionId';
}
export type CatalogVersionId = string & CatalogVersionIdBrand;

export type ProjectStatus = 'draft' | 'quoted' | 'ordered' | 'archived';

export interface Project {
  id: ProjectId;
  tenantId: TenantId;
  ownerId: UserId;
  status: ProjectStatus;
  catalogVersionId: CatalogVersionId;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
}

