import { createHash, randomUUID } from 'crypto';
import stringify from 'fast-json-stable-stringify';
import type {
  CatalogSnapshotRef,
  CatalogVersion,
  CatalogVersionId,
  ISODateTime,
  TenantId,
  ULID,
  UserId
} from '@kitchen-cpq/shared-types';
import { CatalogPayloadSchema, type CatalogPayload } from '@kitchen-cpq/shared-validation';

export type RuleDslBlob = Record<string, unknown>;

export interface CatalogDraft {
  id: CatalogVersionId;
  tenantId: TenantId;
  label: string;
  payload: CatalogPayload;
  rules: RuleDslBlob[];
}

export function parseCatalogPayload(raw: unknown): CatalogPayload {
  return CatalogPayloadSchema.parse(raw);
}

export function computeCatalogHash(payload: CatalogPayload): string {
  return createHash('sha256').update(stringify(payload)).digest('hex');
}

export function buildCatalogVersion(input: {
  draft: CatalogDraft;
  payloadUri: string;
  createdBy: UserId;
  timestamp?: ISODateTime;
}): CatalogVersion {
  const { draft, payloadUri, createdBy } = input;
  const createdAt = input.timestamp ?? new Date().toISOString();
  const hash = computeCatalogHash(draft.payload);

  return {
    id: draft.id ?? (randomUUID() as CatalogVersionId),
    tenantId: draft.tenantId,
    label: draft.label,
    createdAt,
    createdBy,
    hash,
    payloadUri
  };
}

export function snapshotRefFromVersion(version: CatalogVersion): CatalogSnapshotRef {
  return {
    id: version.id,
    hash: version.hash
  };
}

export class CatalogRulesEngine {
  constructor(private readonly rules: RuleDslBlob[]) {}

  evaluateConfiguration(config: unknown): { isValid: boolean; warnings: string[] } {
    // Placeholder deterministic evaluation; replace with proper DSL interpreter.
    const warnings = this.rules.length ? [] : ['No rules loaded'];
    return { isValid: true, warnings };
  }
}

export interface CatalogSnapshotRecord {
  version: CatalogVersion;
  payloadUri: string;
  createdBy: UserId;
}

export class InMemoryCatalogRepository {
  private readonly versions: CatalogSnapshotRecord[] = [];

  listByTenant(tenantId: TenantId): CatalogVersion[] {
    return this.versions
      .filter((v) => v.version.tenantId === tenantId)
      .map((v) => v.version);
  }

  save(record: CatalogSnapshotRecord): CatalogVersion {
    const exists = this.versions.some((v) => v.version.id === record.version.id);
    if (exists) {
      return record.version; // Idempotent: already persisted
    }
    this.versions.push(record);
    return record.version;
  }

  latest(tenantId: TenantId): CatalogVersion | undefined {
    const list = this.listByTenant(tenantId);
    return list[list.length - 1];
  }
}

export interface PublishSnapshotResult {
  version: CatalogVersion;
  ref: CatalogSnapshotRef;
  correlationId: ULID;
}

export function publishSnapshot(
  repo: InMemoryCatalogRepository,
  draft: CatalogDraft,
  payloadUri: string,
  createdBy: UserId,
  correlationId: ULID
): PublishSnapshotResult {
  const version = buildCatalogVersion({ draft, payloadUri, createdBy });
  repo.save({ version, payloadUri, createdBy });
  return { version, ref: snapshotRefFromVersion(version), correlationId };
}
