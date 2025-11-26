import type { CatalogSnapshotRef } from './catalog';
import type { CurrencyCode, ISODateTime, ULID } from './primitives';
import type { CabinetInstanceId } from './cabinets';
import type { ProjectId } from './projects';
import type { TenantId } from './identity';

export interface QuoteIdBrand {
  readonly _brand: 'QuoteId';
}
export type QuoteId = string & QuoteIdBrand;

export type QuoteStatus =
  | 'draft'
  | 'submitted'
  | 'approved'
  | 'rejected'
  | 'expired';

export interface QuoteLineItem {
  id: ULID;
  sku: string;
  description: string;
  quantity: number;
  unitPrice: number;
  listPrice: number;
  netPrice: number;
  currency: CurrencyCode;
  marginPercent: number;
  configurationRef: {
    projectId: ProjectId;
    cabinetInstanceId?: CabinetInstanceId;
  };
}

export interface QuoteSummary {
  id: QuoteId;
  projectId: ProjectId;
  tenantId: TenantId;
  status: QuoteStatus;
  currency: CurrencyCode;
  subtotal: number;
  tax: number;
  total: number;
  marginPercent: number;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
  catalogVersion: CatalogSnapshotRef;
  lineItems: QuoteLineItem[];
}

