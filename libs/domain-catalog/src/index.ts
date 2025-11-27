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

/**
 * Validate and parse a raw value into a CatalogPayload.
 *
 * @param raw - The untrusted value to validate and convert into a catalog payload
 * @returns The validated CatalogPayload
 * @throws When `raw` does not conform to the CatalogPayload schema
 */
export function parseCatalogPayload(raw: unknown): CatalogPayload {
  return CatalogPayloadSchema.parse(raw);
}

/**
 * Compute a stable content hash for a catalog payload.
 *
 * @param payload - The catalog payload to hash; it is serialized deterministically before hashing
 * @returns Hex-encoded SHA-256 hash of a stable serialization of `payload`
 */
export function computeCatalogHash(payload: CatalogPayload): string {
  return createHash('sha256').update(stringify(payload)).digest('hex');
}

/**
 * Builds a CatalogVersion from a CatalogDraft and associated metadata.
 *
 * @param input.draft - The draft that provides tenant, label and payload used to construct the version
 * @param input.payloadUri - URI where the catalog payload is stored
 * @param input.createdBy - UserId of the actor that created the version
 * @param input.timestamp - Optional ISO datetime to use as `createdAt`; when omitted the current time is used
 * @returns The constructed CatalogVersion, including an assigned `id` (generated if the draft has none) and a SHA-256 `hash` of the payload
 */
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

/**
 * Create a snapshot reference containing the version's id and hash.
 *
 * @returns A CatalogSnapshotRef containing the version's `id` and `hash`
 */
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

/**
 * Build a catalog version from a draft, persist it, and produce a snapshot reference with the correlation id.
 *
 * @param repo - Repository used to persist the catalog snapshot
 * @param draft - Draft describing the catalog version to publish
 * @param payloadUri - URI where the catalog payload is stored
 * @param createdBy - User id that performs the publish
 * @param correlationId - Correlation identifier for this publish operation
 * @returns The saved catalog version, its snapshot reference, and the provided correlation id
 */
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