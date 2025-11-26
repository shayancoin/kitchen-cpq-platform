import http from 'http';
import { Worker, NativeConnection } from '@temporalio/worker';
import { trace } from '@opentelemetry/api';
import { InstrumentationLogger } from '@kitchen-cpq/instrumentation-otel';
import {
  recomputeQuoteActivity,
  recomputeQuoteActivityOptions
} from '../activities/cpqActivities';

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
