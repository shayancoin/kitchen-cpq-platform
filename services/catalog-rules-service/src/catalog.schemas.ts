import type { CatalogVersionId, TenantId, ULID, UserId } from '@kitchen-cpq/shared-types';
import type { CatalogPayload } from '@kitchen-cpq/shared-validation';
import type { RuleDslBlob } from '@kitchen-cpq/domain-catalog';

export interface ProductFamily {
  id: ULID;
  tenantId: TenantId;
  code: string;
  displayName: string;
  description?: string;
}

export interface Sku {
  id: ULID;
  tenantId: TenantId;
  familyId: ULID;
  sku: string;
  description: string;
  basePrice: number;
  attributes: Record<string, unknown>;
}

export interface OptionValue {
  id: ULID;
  optionId: ULID;
  value: string;
  priceDelta?: number;
}

export interface Option {
  id: ULID;
  tenantId: TenantId;
  code: string;
  displayName: string;
  values: OptionValue[];
}

export interface RuleRecord {
  id: ULID;
  tenantId: TenantId;
  name: string;
  blob: RuleDslBlob;
  createdBy: UserId;
}

export interface CatalogDraftRecord {
  id: CatalogVersionId;
  tenantId: TenantId;
  label: string;
  rules: RuleRecord[];
  payload: CatalogPayload;
  createdBy: UserId;
}
