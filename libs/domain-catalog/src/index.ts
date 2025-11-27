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
 * Validate and parse an unknown value into a CatalogPayload using the CatalogPayloadSchema.
 *
 * @returns The parsed `CatalogPayload`.
 */
export function parseCatalogPayload(raw: unknown): CatalogPayload {
  return CatalogPayloadSchema.parse(raw);
}

/**
 * Produces a deterministic fingerprint for a catalog payload.
 *
 * @param payload - The catalog payload to hash
 * @returns The SHA-256 hex digest of the payload's stable JSON serialization
 */
export function computeCatalogHash(payload: CatalogPayload): string {
  return createHash('sha256').update(stringify(payload)).digest('hex');
}

/**
 * Create a CatalogVersion from a CatalogDraft, payload URI, and creator.
 *
 * @param input - Object containing the source draft, destination payload URI, creator, and optional timestamp
 * @param input.draft - The CatalogDraft to base the version on
 * @param input.payloadUri - Location where the catalog payload is stored
 * @param input.createdBy - UserId of the creator
 * @param input.timestamp - Optional ISO timestamp to use as `createdAt`; current time is used if omitted
 * @returns The constructed CatalogVersion with `id` taken from the draft (or a new UUID if absent), `createdAt` set to the provided or current timestamp, and `hash` computed from the draft payload
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
 * Create a snapshot reference that identifies a catalog version by id and payload hash.
 *
 * @returns A CatalogSnapshotRef containing the version's `id` and `hash`.
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
 * Create and persist a catalog version from a draft and return its snapshot reference together with the correlation id.
 *
 * Persists a new catalog snapshot to the provided repository and derives a snapshot reference from the created version.
 *
 * @param draft - The catalog draft to publish (contains id, tenantId, label, payload, and rules)
 * @param payloadUri - The storage location URI of the catalog payload
 * @param createdBy - The user id that is recorded as the creator of the published version
 * @param correlationId - ULID used to correlate this publish operation with external workflows or logs
 * @returns An object containing the persisted catalog `version`, its snapshot `ref`, and the provided `correlationId`
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