import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  InMemoryQuoteRepository,
  QuoteRepository,
  QuoteDomainService,
  QuotePricingEngine
} from '@kitchen-cpq/domain-cpq';
import {
  buildEnvelope,
  type QuoteConfirmedEvent,
  type QuoteCreatedEvent,
  type QuotePricedEvent
} from '@kitchen-cpq/shared-events';
import type {
  CatalogSnapshotRef,
  CurrencyCode,
  ProjectId,
  QuoteId,
  QuoteSummary,
  TenantId
} from '@kitchen-cpq/shared-types';
import { kafkaBroker, topicMap } from '@kitchen-cpq/shared-kafka';

export interface CreateQuoteInput {
  projectId: ProjectId;
  tenantId: TenantId;
  catalogSnapshot: CatalogSnapshotRef;
  currency: CurrencyCode;
  items: { sku: string; description: string; quantity: number }[];
}

type QuotePayload = { quote: QuoteSummary };
type ConfirmPayload = {
  quoteId: QuoteId;
  projectId: ProjectId;
  catalog: CatalogSnapshotRef;
  tenantId: TenantId;
};
type EventPayload = QuotePayload | ConfirmPayload;

/**
 * Type guard that determines whether an event payload contains a `quote` property.
 *
 * @param p - The event payload to inspect
 * @returns `true` if `p` has a `quote` property, `false` otherwise
 */
function isQuotePayload(p: EventPayload): p is QuotePayload {
  return (p as QuotePayload).quote !== undefined;
}

@Injectable()
export class CpqService {
  private readonly projectQuoteIndex = new Map<ProjectId, QuoteId>();

  constructor(
    @Inject('QuoteRepository') private readonly repo: QuoteRepository,
    private readonly domain: QuoteDomainService
  ) {}

  createQuote(input: CreateQuoteInput): QuoteSummary {
    const quote = this.domain.createQuote({
      projectId: input.projectId,
      tenantId: input.tenantId,
      catalogSnapshot: input.catalogSnapshot,
      currency: input.currency,
      items: input.items
    });
    this.projectQuoteIndex.set(input.projectId, quote.id);
    this.emitQuoteEvent('quote.created', { quote });
    return quote;
  }

  repriceQuote(params: {
    projectId: ProjectId;
    tenantId: TenantId;
    catalogSnapshot: CatalogSnapshotRef;
    quoteId?: QuoteId;
    allowCatalogOverride?: boolean;
  }): QuoteSummary {
    const targetQuoteId =
      params.quoteId ?? this.projectQuoteIndex.get(params.projectId);
    if (!targetQuoteId) {
      throw new Error(`No existing quote found for project ${params.projectId}. Use createQuote instead.`);
    }

    const updated = this.domain.repriceQuote(
      targetQuoteId,
      params.catalogSnapshot,
      params.allowCatalogOverride ?? false
    );
    this.emitQuoteEvent('quote.priced', { quote: updated });
    return updated;
  }

  confirmQuote(quoteId: QuoteId): QuoteSummary {
    const confirmed = this.domain.confirmQuote(quoteId);
    this.emitQuoteEvent('quote.confirmed', {
      quoteId: confirmed.id,
      projectId: confirmed.projectId,
      catalog: confirmed.catalogVersion,
      tenantId: confirmed.tenantId
    });
    return confirmed;
  }

  getQuoteForProject(projectId: ProjectId): QuoteSummary | undefined {
    const id = this.projectQuoteIndex.get(projectId);
    if (!id) return undefined;
    return this.repo.findById(id)?.quote;
  }

  private emitQuoteEvent(
    name: 'quote.created',
    payload: { quote: QuoteSummary }
  ): void;
  private emitQuoteEvent(
    name: 'quote.priced',
    payload: { quote: QuoteSummary }
  ): void;
  private emitQuoteEvent(
    name: 'quote.confirmed',
    payload: {
      quoteId: QuoteId;
      projectId: ProjectId;
      catalog: CatalogSnapshotRef;
      tenantId: TenantId;
    }
  ): void;

  private emitQuoteEvent(
    name: 'quote.created' | 'quote.priced' | 'quote.confirmed',
    payload: EventPayload
  ) {
    const base = {
      occurredAt: new Date().toISOString(),
      schemaVersion: 'v1' as const,
      tenantId: isQuotePayload(payload) ? payload.quote.tenantId : payload.tenantId
    };

    if (name === 'quote.confirmed') {
      if (isQuotePayload(payload)) {
        throw new Error('quote.confirmed requires confirm payload');
      }
      const confirmPayload = payload as ConfirmPayload;
      const event: QuoteConfirmedEvent = {
        name,
        quoteId: confirmPayload.quoteId,
        projectId: confirmPayload.projectId,
        catalog: confirmPayload.catalog,
        ...base
      };
      const envelope = buildEnvelope(event, () => randomUUID() as QuoteId);
      kafkaBroker.publish({ topic: topicMap[event.name], envelope });
      return;
    }

    const quotePayloadData = isQuotePayload(payload)
      ? payload
      : (() => {
          throw new Error('quote event missing quote payload');
        })();

    const quotePayload =
      name === 'quote.created'
        ? ({
            name,
            quote: quotePayloadData.quote,
            ...base
          } satisfies QuoteCreatedEvent)
        : ({
            name,
            quote: quotePayloadData.quote,
            ...base
          } satisfies QuotePricedEvent);

    const envelope = buildEnvelope(quotePayload, () => randomUUID() as QuoteId);
    kafkaBroker.publish({ topic: topicMap[quotePayload.name], envelope });
  }
}