import { ulid } from 'ulid';
import type {
  CatalogSnapshotRef,
  CurrencyCode,
  ISODateTime,
  ProjectId,
  QuoteId,
  QuoteLineItem,
  QuoteStatus,
  QuoteSummary,
  TenantId,
  ULID
} from '@kitchen-cpq/shared-types';

export interface QuotePricingInput {
  projectId: ProjectId;
  tenantId: TenantId;
  catalogSnapshot: CatalogSnapshotRef;
  currency: CurrencyCode;
  items: Array<Pick<QuoteLineItem, 'sku' | 'description' | 'quantity'>>;
}

export interface QuotePricingResult {
  summary: QuoteSummary;
}

export class QuotePricingEngine {
  price(input: QuotePricingInput): QuotePricingResult {
    const now = new Date().toISOString() as ISODateTime;
    const lineItems: QuoteLineItem[] = input.items.map((item, idx) => {
      const unitPrice = 100 + idx * 10;
      const listPrice = unitPrice * item.quantity;
      return {
        id: ulid() as ULID,
        sku: item.sku,
        description: item.description,
        quantity: item.quantity,
        unitPrice,
        listPrice,
        netPrice: listPrice,
        currency: input.currency,
        marginPercent: 18,
        configurationRef: {
          projectId: input.projectId
        }
      };
    });

    const subtotal = lineItems.reduce((sum, li) => sum + li.netPrice, 0);
    const tax = subtotal * 0.07;
    const total = subtotal + tax;

    const summary: QuoteSummary = {
      id: ulid() as QuoteId,
      projectId: input.projectId,
      tenantId: input.tenantId,
      status: 'draft',
      currency: input.currency,
      subtotal,
      tax,
      total,
      marginPercent: 18,
      createdAt: now,
      updatedAt: now,
      catalogVersion: input.catalogSnapshot,
      lineItems
    };

    return { summary };
  }
}

export interface QuoteRecord {
  quote: QuoteSummary;
  catalogSnapshot: CatalogSnapshotRef;
}

export class QuoteInvariantError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QuoteInvariantError';
  }
}

export class QuoteDomainService {
  constructor(
    private readonly repo: QuoteRepository,
    private readonly pricing: QuotePricingEngine
  ) {}

  createQuote(input: QuotePricingInput): QuoteSummary {
    const { summary } = this.pricing.price(input);
    this.repo.save({ quote: summary, catalogSnapshot: input.catalogSnapshot });
    return summary;
  }

  repriceQuote(
    quoteId: QuoteId,
    catalogSnapshot: CatalogSnapshotRef,
    allowCatalogOverride = false
  ): QuoteSummary {
    const record = this.repo.findById(quoteId);
    if (!record) {
      throw new QuoteInvariantError(`Quote ${quoteId} not found`);
    }

    if (
      !allowCatalogOverride &&
      (record.catalogSnapshot.id !== catalogSnapshot.id ||
        record.catalogSnapshot.hash !== catalogSnapshot.hash)
    ) {
      throw new QuoteInvariantError(
        'Catalog snapshot mismatch; rerun with explicit override to reprice'
      );
    }

    const { summary } = this.pricing.price({
      projectId: record.quote.projectId,
      tenantId: record.quote.tenantId,
      catalogSnapshot,
      currency: record.quote.currency,
      items: record.quote.lineItems.map((li) => ({
        sku: li.sku,
        description: li.description,
        quantity: li.quantity
      }))
    });

    const updated = { ...summary, id: quoteId, status: record.quote.status };
    this.repo.save({ quote: updated, catalogSnapshot });
    return updated;
  }

  confirmQuote(quoteId: QuoteId): QuoteSummary {
    const record = this.repo.findById(quoteId);
    if (!record) {
      throw new QuoteInvariantError(`Quote ${quoteId} not found`);
    }
    const updated: QuoteSummary = {
      ...record.quote,
      status: 'approved' as QuoteStatus,
      updatedAt: new Date().toISOString() as ISODateTime
    };
    this.repo.save({ quote: updated, catalogSnapshot: record.catalogSnapshot });
    return updated;
  }
}

export interface QuoteRepository {
  save(record: QuoteRecord): void;
  findById(id: QuoteId): QuoteRecord | undefined;
}

export class InMemoryQuoteRepository implements QuoteRepository {
  private readonly store = new Map<QuoteId, QuoteRecord>();

  save(record: QuoteRecord): void {
    this.store.set(record.quote.id, record);
  }

  findById(id: QuoteId): QuoteRecord | undefined {
    return this.store.get(id);
  }
}
