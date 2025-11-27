import * as http from 'http';
import { SpanStatusCode, trace } from '@opentelemetry/api';
import { kafkaBroker } from '@kitchen-cpq/shared-kafka';
import type { QuoteConfirmedEvent } from '@kitchen-cpq/shared-events';
import {
  recomputeQuoteActivity,
  recomputeQuoteActivityOptions
} from '../activities/cpqActivities';
import { Client, NativeConnection, Worker } from '../temporal-runtime';
import { KitchenOrderWorkflow } from '../workflows/KitchenOrderWorkflow';
import { InstrumentationLogger } from '../instrumentation';

type Histogram = {
  buckets: Record<string, number>;
  sum: number;
  count: number;
};

const logger = new InstrumentationLogger('workflow-orchestration-worker');
const tracer = trace.getTracer('workflow-orchestration-worker');

const LATENCY_BUCKETS = [50, 100, 250, 500, 1000, 5000];
const activityMetrics: Record<
  string,
  { throughput: number; errors: number; histogram: Histogram }
> = {};

function initHistogram(): Histogram {
  return {
    buckets: Object.fromEntries([...LATENCY_BUCKETS.map(String), '+Inf'].map((b) => [b, 0])),
    sum: 0,
    count: 0
  };
}

function recordActivityMetrics(name: string, durationMs: number, error = false) {
  const metric =
    activityMetrics[name] ??
    (activityMetrics[name] = { throughput: 0, errors: 0, histogram: initHistogram() });

  metric.throughput += 1;
  if (error) metric.errors += 1;

  metric.histogram.count += 1;
  metric.histogram.sum += durationMs;

  let bucketed = false;
  for (const bucket of LATENCY_BUCKETS) {
    if (durationMs <= bucket) {
      metric.histogram.buckets[bucket.toString()] += 1;
      bucketed = true;
    }
  }
  if (!bucketed) {
    metric.histogram.buckets['+Inf'] += 1;
  }
}

function instrumentActivity<TArgs extends unknown[], TResult>(
  name: string,
  fn: (...args: TArgs) => Promise<TResult>,
  timeouts: { startToClose: string; scheduleToClose: string }
) {
  return async (...args: TArgs): Promise<TResult> => {
    const start = process.hrtime.bigint();
    const span = tracer.startSpan(`CpqActivity.${name}`, {
      attributes: {
        'activity.name': name,
        'activity.start_to_close_timeout': timeouts.startToClose,
        'activity.schedule_to_close_timeout': timeouts.scheduleToClose
      }
    });

    try {
      const result = await fn(...args);
      return result;
    } catch (err) {
      span.recordException(err as Error);
      span.setStatus({ code: 2 });
      throw err;
    } finally {
      const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
      recordActivityMetrics(name, durationMs, span.status.code === 2);
      span.end();
    }
  };
}

/**
 * Starts an HTTP server that exposes a health endpoint and Prometheus-compatible metrics for instrumented activities.
 *
 * The server responds to GET /health with JSON { status: 'ok' } and to GET /metrics with Prometheus-formatted metrics
 * derived from `activityMetrics` (throughput, errors, duration buckets, sum, and count) labeled by activity name.
 *
 * @param port - TCP port to listen on (default: 9464)
 */
function startMetricsServer(port = 9464) {
  const server = http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }

    if (req.url === '/metrics') {
      res.writeHead(200, { 'Content-Type': 'text/plain; version=0.0.4' });
      const lines: string[] = [];
      for (const [name, metric] of Object.entries(activityMetrics)) {
        lines.push(
          `temporal_activity_throughput_total{activity="${name}"} ${metric.throughput}`
        );
        lines.push(
          `temporal_activity_errors_total{activity="${name}"} ${metric.errors}`
        );
        const labelsBase = `activity="${name}"`;
        for (const bucket of [...LATENCY_BUCKETS.map(String), '+Inf']) {
          lines.push(
            `temporal_activity_duration_ms_bucket{${labelsBase},le="${bucket}"} ${metric.histogram.buckets[bucket]}`
          );
        }
        lines.push(
          `temporal_activity_duration_ms_sum{${labelsBase}} ${metric.histogram.sum.toFixed(3)}`
        );
        lines.push(
          `temporal_activity_duration_ms_count{${labelsBase}} ${metric.histogram.count}`
        );
      }
      res.end(lines.join('\n'));
      return;
    }

    res.writeHead(404);
    res.end();
  });

  server.listen(port, () => {
    logger.info('Metrics server listening', { port });
  });
}

/**
 * Registers a Kafka subscription for `orders.lifecycle` and starts a KitchenOrderWorkflow when a valid `quote.confirmed` event is received.
 *
 * Validates incoming envelopes for the `quote.confirmed` payload shape, sets tracing attributes on the handling span, logs receipt, and starts a Temporal KitchenOrderWorkflow using the event's projectId, tenantId, quoteId, and catalog. Invalid payloads are logged and marked as span errors; workflow start failures are recorded on the span and rethrown.
 */
function wireKafkaBridge() {
  const client = new Client();

  const isQuoteConfirmedPayload = (payload: unknown): payload is QuoteConfirmedEvent => {
    if (!payload || typeof payload !== 'object') return false;
    const p = payload as Record<string, unknown>;
    return (
      p.name === 'quote.confirmed' &&
      typeof p.projectId === 'string' &&
      typeof p.quoteId === 'string' &&
      typeof p.tenantId === 'string' &&
      typeof (p.catalog as { id?: unknown })?.id === 'string' &&
      typeof (p.catalog as { hash?: unknown })?.hash === 'string'
    );
  };

  kafkaBroker.subscribe('orders.lifecycle', async ({ envelope }) => {
    await tracer.startActiveSpan(
      'WorkflowBridge.handleQuoteConfirmed',
      { kind: 2 as number },
      async (span) => {
        const payload = envelope.payload;
        if (!isQuoteConfirmedPayload(payload)) {
          logger.warn('workflow.bridge.quote-confirmed.invalid-payload', {
            envelopeId: envelope.id
          });
          span.setStatus({ code: SpanStatusCode.ERROR, message: 'invalid payload' });
          span.end();
          return;
        }

        span.setAttributes({
          'messaging.system': 'kafka',
          'messaging.destination': 'orders.lifecycle',
          'tenant.id': payload.tenantId,
          'project.id': payload.projectId,
          'quote.id': payload.quoteId
        });

        try {
          logger.info('workflow.bridge.quote-confirmed', {
            projectId: payload.projectId,
            quoteId: payload.quoteId,
            catalog: payload.catalog
          });

          await client.workflow.start(KitchenOrderWorkflow, {
            taskQueue: 'kitchen-order-queue',
            workflowId: `order-${payload.quoteId}`,
            args: [
              {
                projectId: payload.projectId,
                tenantId: payload.tenantId,
                quoteId: payload.quoteId,
                catalog: payload.catalog
              }
            ]
          });
          span.setStatus({ code: SpanStatusCode.OK });
        } catch (err) {
          logger.error('Failed to process orders.lifecycle event', {
            error: (err as Error).message,
            envelopeId: envelope.id
          });
          span.recordException(err as Error);
          span.setStatus({ code: SpanStatusCode.ERROR });
          throw err;
        } finally {
          span.end();
        }
      }
    );
  });
}

/**
 * Starts and runs the Temporal worker, wires the Kafka bridge, and exposes the metrics HTTP endpoint while tracing the worker lifecycle.
 *
 * Connects to the Temporal server, registers workflows and instrumented activities on the `kitchen-order-queue`, starts the Kafka-to-workflow bridge, and starts the metrics server. Runs the worker inside a tracing span so any errors are recorded to tracing before being propagated.
 *
 * @throws Propagates any error thrown by the worker after recording it to the active trace span.
 */
async function runWorker() {
  const connection = await NativeConnection.connect({
    address: process.env.TEMPORAL_ADDRESS ?? 'localhost:7233'
  });

  const taskQueue = 'kitchen-order-queue';
  const namespace = process.env.TEMPORAL_NAMESPACE ?? 'default';

  const worker = await Worker.create({
    connection,
    namespace,
    taskQueue,
    workflowsPath: require.resolve('../workflows'),
    activities: {
      recomputeQuoteActivity: instrumentActivity(
        'recomputeQuoteActivity',
        recomputeQuoteActivity,
        {
          startToClose: recomputeQuoteActivityOptions.startToCloseTimeout,
          scheduleToClose: recomputeQuoteActivityOptions.scheduleToCloseTimeout
        }
      )
    }
  });

  logger.info('Temporal worker starting', {
    taskQueue,
    namespace,
    address: process.env.TEMPORAL_ADDRESS ?? 'localhost:7233'
  });

  wireKafkaBridge();
  startMetricsServer(Number(process.env.METRICS_PORT ?? 9464));

  await tracer.startActiveSpan('TemporalWorker.run', async (span) => {
    try {
      await worker.run();
    } catch (err) {
      span.recordException(err as Error);
      span.setStatus({ code: 2 });
      throw err;
    } finally {
      span.end();
    }
  });
}

runWorker().catch((err) => {
  logger.error('Temporal worker failed', { error: (err as Error)?.message });
  process.exit(1);
});