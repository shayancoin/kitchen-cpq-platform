import { logger } from '@kitchen-cpq/instrumentation-otel';
import type { DomainEventPayload, EventEnvelope, EventName } from '@kitchen-cpq/shared-events';

export type KafkaTopic =
  | 'catalog.snapshot.published'
  | 'cpq.quotes'
  | 'manufacturing.jobs'
  | 'cadcam.outputs'
  | 'orders.lifecycle';

export const topicMap: Record<EventName, KafkaTopic> = {
  'catalog.snapshot.published': 'catalog.snapshot.published',
  'configuration.validated': 'cpq.quotes',
  'quote.created': 'cpq.quotes',
  'quote.confirmed': 'orders.lifecycle',
  'quote.priced': 'cpq.quotes',
  'order.placed': 'orders.lifecycle',
  'bom.generated': 'cadcam.outputs',
  'cadcam.cnc.output.generated': 'cadcam.outputs',
  'manufacturing.job.created': 'manufacturing.jobs',
  'manufacturing.job.completed': 'manufacturing.jobs',
  'shipment.dispatched': 'orders.lifecycle'
};

export interface KafkaMessage<TPayload extends DomainEventPayload> {
  topic: KafkaTopic;
  envelope: EventEnvelope<TPayload>;
}

type Handler<TPayload extends DomainEventPayload> = (
  message: KafkaMessage<TPayload>
) => Promise<void> | void;

/**
 * Tiny in-memory Kafka stub for local/dev use.
 * Real deployments will swap this with kafkajs- or confluent-kafka-backed producers/consumers.
 */
export class InMemoryKafkaBroker {
  private readonly handlers: Partial<
    Record<KafkaTopic, Handler<DomainEventPayload>[]>
  > = {};

  async publish<TPayload extends DomainEventPayload>(message: KafkaMessage<TPayload>): Promise<void> {
    const handlers = this.handlers[message.topic] ?? [];
    if (!handlers.length) return;

    const results = await Promise.allSettled(
      handlers.map((handler) => Promise.resolve(handler(message)))
    );

    const failures = results
      .map((result, index) =>
        result.status === 'rejected' ? { index, reason: result.reason } : null
      )
      .filter(Boolean) as { index: number; reason: unknown }[];

    if (failures.length) {
      failures.forEach(({ index, reason }) => {
        logger.error('InMemoryKafkaBroker handler failed', {
          topic: message.topic,
          envelopeId: message.envelope.id,
          handlerIndex: index,
          error: reason instanceof Error ? reason.message : String(reason)
        });
      });

      const first = failures[0]?.reason;
      if (first instanceof Error) {
        throw first;
      }

      const aggregatedMessage = failures
        .map(
          ({ index, reason }) =>
            `handler ${index} failed: ${reason instanceof Error ? reason.message : String(reason)}`
        )
        .join('; ');

      throw new Error(`InMemoryKafkaBroker publish failed: ${aggregatedMessage}`);
    }
  }

  subscribe<TPayload extends DomainEventPayload>(
    topic: KafkaTopic,
    handler: Handler<TPayload>
  ): () => void {
    const handlers = this.handlers[topic] ?? [];
    handlers.push(handler as Handler<DomainEventPayload>);
    this.handlers[topic] = handlers;

    return () => {
      const list = this.handlers[topic] ?? [];
      this.handlers[topic] = list.filter((h) => h !== handler);
    };
  }
}

export const kafkaBroker = new InMemoryKafkaBroker();
