import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { ulid } from 'ulid';
import {
  buildCatalogVersion,
  publishSnapshot,
  CatalogRulesEngine,
  InMemoryCatalogRepository,
  parseCatalogPayload
} from '@kitchen-cpq/domain-catalog';
import {
  buildEnvelope,
  type CatalogSnapshotPublishedEvent
} from '@kitchen-cpq/shared-events';
import type {
  CatalogSnapshotRef,
  CatalogVersion,
  CatalogVersionId,
  TenantId,
  ULID,
  UserId
} from '@kitchen-cpq/shared-types';
import { kafkaBroker, topicMap } from '@kitchen-cpq/shared-kafka';
import type { CatalogDraftRecord, RuleRecord } from './catalog.schemas';

interface CreateDraftInput {
  tenantId: TenantId;
  label: string;
  payload: unknown;
  rules: RuleRecord[];
  createdBy: UserId;
  draftId?: CatalogVersionId;
}

interface PublishInput {
  draftId: CatalogVersionId;
  payloadUri: string;
  userId: UserId;
}

@Injectable()
export class CatalogService {
  private readonly drafts = new Map<CatalogVersionId, CatalogDraftRecord>();
  private readonly repo = new InMemoryCatalogRepository();

  createDraft(input: CreateDraftInput): CatalogDraftRecord {
    const payload = parseCatalogPayload(input.payload);

    const draft: CatalogDraftRecord = {
      id: input.draftId ?? (ulid() as CatalogVersionId),
      tenantId: input.tenantId,
      label: input.label,
      rules: input.rules,
      payload,
      createdBy: input.createdBy
    };
    this.drafts.set(draft.id, draft);
    return draft;
  }

  listDrafts(tenantId: TenantId): CatalogDraftRecord[] {
    return [...this.drafts.values()].filter((d) => d.tenantId === tenantId);
  }

  listPublished(tenantId: TenantId): CatalogVersion[] {
    return this.repo.listByTenant(tenantId);
  }

  validateRules(tenantId: TenantId, config: unknown): { isValid: boolean } {
    const draft = this.listDrafts(tenantId)[0];
    const rules = draft?.rules.map((r) => r.blob) ?? [];
    const engine = new CatalogRulesEngine(rules);
    return engine.evaluateConfiguration(config);
  }

  publishDraft(input: PublishInput): { version: CatalogVersion; ref: CatalogSnapshotRef } {
    const draft = this.drafts.get(input.draftId);
    if (!draft) {
      throw new Error(`Draft ${input.draftId} not found`);
    }

    const result = publishSnapshot(
      this.repo,
      {
        id: draft.id,
        tenantId: draft.tenantId,
        label: draft.label,
        payload: draft.payload,
        rules: draft.rules.map((r) => r.blob)
      },
      input.payloadUri,
      input.userId,
      randomUUID() as ULID
    );

    const eventPayload: CatalogSnapshotPublishedEvent = {
      name: 'catalog.snapshot.published',
      catalogVersion: buildCatalogVersion({
        draft: {
          id: draft.id,
          tenantId: draft.tenantId,
          label: draft.label,
          payload: draft.payload,
          rules: draft.rules.map((r) => r.blob)
        },
        payloadUri: input.payloadUri,
        createdBy: input.userId
      }),
      tenantId: draft.tenantId,
      occurredAt: new Date().toISOString(),
      schemaVersion: 'v1'
    };

    const envelope = buildEnvelope(eventPayload, () => ulid() as ULID);
    kafkaBroker.publish({
      topic: topicMap[eventPayload.name],
      envelope
    });

    return { version: result.version, ref: result.ref };
  }
}
