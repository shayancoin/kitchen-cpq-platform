import type {
  Bom,
  CatalogSnapshotRef,
  CatalogVersion,
  CncProgram,
  CutList,
  ISODateTime,
  ProjectId,
  QuoteId,
  QuoteSummary,
  TenantId,
  ULID
} from '@kitchen-cpq/shared-types';

export type EventName =
  | 'catalog.snapshot.published'
  | 'configuration.validated'
  | 'quote.created'
  | 'quote.confirmed'
  | 'quote.priced'
  | 'order.placed'
  | 'bom.generated'
  | 'cadcam.cnc.output.generated'
  | 'manufacturing.job.created'
  | 'manufacturing.job.completed'
  | 'shipment.dispatched';

export interface BaseEventPayload {
  tenantId: TenantId;
  occurredAt: ISODateTime;
  schemaVersion: string;
}

export interface CatalogSnapshotPublishedEvent extends BaseEventPayload {
  name: 'catalog.snapshot.published';
  catalogVersion: CatalogVersion;
}

export interface ConfigurationValidatedEvent extends BaseEventPayload {
  name: 'configuration.validated';
  projectId: ProjectId;
  catalog: CatalogSnapshotRef;
  validationSummary: {
    isValid: boolean;
    warnings?: string[];
    errors?: string[];
  };
}

export interface QuoteCreatedEvent extends BaseEventPayload {
  name: 'quote.created';
  quote: QuoteSummary;
}

export interface QuoteConfirmedEvent extends BaseEventPayload {
  name: 'quote.confirmed';
  quoteId: QuoteId;
  projectId: ProjectId;
  catalog: CatalogSnapshotRef;
}

export interface QuotePricedEvent extends BaseEventPayload {
  name: 'quote.priced';
  quote: QuoteSummary;
}

export interface OrderPlacedEvent extends BaseEventPayload {
  name: 'order.placed';
  quoteId: QuoteId;
  projectId: ProjectId;
  catalog: CatalogSnapshotRef;
}

export interface BomGeneratedEvent extends BaseEventPayload {
  name: 'bom.generated';
  bom: Bom;
  projectId: ProjectId;
  quoteId: QuoteId;
}

export interface CadCamCncOutputGeneratedEvent extends BaseEventPayload {
  name: 'cadcam.cnc.output.generated';
  cncProgram: CncProgram;
  cutList: CutList;
  bomId: ULID;
  projectId: ProjectId;
}

export interface ManufacturingJobCreatedEvent extends BaseEventPayload {
  name: 'manufacturing.job.created';
  jobId: ULID;
  quoteId: QuoteId;
  projectId: ProjectId;
  catalog: CatalogSnapshotRef;
}

export interface ManufacturingJobCompletedEvent extends BaseEventPayload {
  name: 'manufacturing.job.completed';
  jobId: ULID;
  quoteId: QuoteId;
  projectId: ProjectId;
  succeeded: boolean;
  notes?: string;
}

export interface ShipmentDispatchedEvent extends BaseEventPayload {
  name: 'shipment.dispatched';
  jobId: ULID;
  projectId: ProjectId;
  trackingUrl?: string;
}

export type DomainEventPayload =
  | CatalogSnapshotPublishedEvent
  | ConfigurationValidatedEvent
  | QuoteCreatedEvent
  | QuoteConfirmedEvent
  | QuotePricedEvent
  | OrderPlacedEvent
  | BomGeneratedEvent
  | CadCamCncOutputGeneratedEvent
  | ManufacturingJobCreatedEvent
  | ManufacturingJobCompletedEvent
  | ShipmentDispatchedEvent;

export interface EventEnvelope<TPayload extends DomainEventPayload> {
  id: ULID;
  name: TPayload['name'];
  version: string;
  producedAt: ISODateTime;
  payload: TPayload;
  headers?: Record<string, string>;
}

export interface EventSchema {
  name: EventName;
  version: string;
  description: string;
  fields: string[];
}

export const eventSchemas: Record<EventName, EventSchema> = {
  'catalog.snapshot.published': {
    name: 'catalog.snapshot.published',
    version: 'v1',
    description: 'Immutable catalog snapshot publication',
    fields: ['catalogVersion']
  },
  'configuration.validated': {
    name: 'configuration.validated',
    version: 'v1',
    description: 'Configurator emits after constraint validation',
    fields: ['projectId', 'catalog', 'validationSummary']
  },
  'quote.created': {
    name: 'quote.created',
    version: 'v1',
    description: 'CPQ created a new quote tied to a catalog snapshot',
    fields: ['quote']
  },
  'quote.confirmed': {
    name: 'quote.confirmed',
    version: 'v1',
    description: 'Quote confirmed by customer/dealer',
    fields: ['quoteId', 'projectId', 'catalog']
  },
  'quote.priced': {
    name: 'quote.priced',
    version: 'v1',
    description: 'Quote repriced (idempotent) against a catalog snapshot',
    fields: ['quote']
  },
  'order.placed': {
    name: 'order.placed',
    version: 'v1',
    description: 'Order placed downstream of confirmed quote',
    fields: ['quoteId', 'projectId', 'catalog']
  },
  'bom.generated': {
    name: 'bom.generated',
    version: 'v1',
    description: 'CAD/CAM service produced a BOM',
    fields: ['bom']
  },
  'cadcam.cnc.output.generated': {
    name: 'cadcam.cnc.output.generated',
    version: 'v1',
    description: 'CNC artifacts ready in object storage',
    fields: ['cncProgram', 'cutList', 'bomId', 'projectId']
  },
  'manufacturing.job.created': {
    name: 'manufacturing.job.created',
    version: 'v1',
    description: 'Manufacturing job persisted and scheduled',
    fields: ['jobId', 'quoteId', 'projectId', 'catalog']
  },
  'manufacturing.job.completed': {
    name: 'manufacturing.job.completed',
    version: 'v1',
    description: 'Manufacturing job completed',
    fields: ['jobId', 'quoteId', 'projectId', 'succeeded', 'notes']
  },
  'shipment.dispatched': {
    name: 'shipment.dispatched',
    version: 'v1',
    description: 'Shipment handed to carrier',
    fields: ['jobId', 'projectId', 'trackingUrl']
  }
};

/**
 * Create a standardized event envelope for a domain event payload.
 *
 * @param payload - The domain event payload to wrap
 * @param idGenerator - Function that produces a ULID to use as the envelope `id`
 * @param timestamp - Function that returns an ISO 8601 timestamp for `producedAt`; defaults to current time
 * @returns An EventEnvelope containing the provided payload, generated `id`, `name`, `version`, `producedAt`, and `headers` (`schema-version` and `event-name`)
 */
export function buildEnvelope<TPayload extends DomainEventPayload>(
  payload: TPayload,
  idGenerator: () => ULID,
  timestamp: () => ISODateTime = () => new Date().toISOString()
): EventEnvelope<TPayload> {
  return {
    id: idGenerator(),
    name: payload.name,
    version: eventSchemas[payload.name].version,
    producedAt: timestamp(),
    payload,
    headers: {
      'schema-version': eventSchemas[payload.name].version,
      'event-name': payload.name
    }
  };
}

/**
 * Registers an EventSchema in the central eventSchemas registry.
 *
 * @param schema - The EventSchema to register; if a schema with the same `name` already exists it will be replaced
 */
export function registerEventSchema(schema: EventSchema) {
  eventSchemas[schema.name] = schema;
}
