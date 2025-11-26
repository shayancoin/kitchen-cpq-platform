import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { INSTRUMENTATION_OPTIONS } from './tokens';
import type { InstrumentationOptions } from './instrumentation.types';

type HistogramBuckets = {
  buckets: Record<string, number>;
  sum: number;
  count: number;
};

@Injectable()
export class InstrumentationService {
  private readonly latencyBuckets = [50, 100, 250, 500, 1000, 5000];
  private readonly requestTotals = new Map<string, number>();
  private readonly errorTotals = new Map<string, number>();
  private readonly histograms = new Map<string, HistogramBuckets>();

  constructor(
    @Inject(INSTRUMENTATION_OPTIONS)
    private readonly options: InstrumentationOptions
  ) {}

  createRequestMiddleware(): NestMiddleware {
    return {
      use: (req: Request, res: Response, next: NextFunction) => {
        const start = process.hrtime.bigint();
        res.on('finish', () => {
          const durationMs =
            Number(process.hrtime.bigint() - start) / 1_000_000;
          const path =
            (req.route?.path ||
              (req as any).originalUrl ||
              req.url ||
              'unknown').split('?')[0];
          const method = req.method || 'UNKNOWN';
          const status = res.statusCode || 0;

          this.recordRequest({ method, path, status, durationMs });
        });

        next();
      }
    };
  }

  recordRequest({
    method,
    path,
    status,
    durationMs
  }: {
    method: string;
    path: string;
    status: number;
    durationMs: number;
  }) {
    if (!this.options.enableMetrics) return;

    const requestKey = `${method}|${path}|${status}`;
    this.requestTotals.set(requestKey, (this.requestTotals.get(requestKey) || 0) + 1);

    if (status >= 500) {
      const errorKey = `${method}|${path}`;
      this.errorTotals.set(errorKey, (this.errorTotals.get(errorKey) || 0) + 1);
    }

    const histogramKey = `${method}|${path}`;
    const histogram = this.histograms.get(histogramKey) ?? {
      buckets: Object.fromEntries([
        ...this.latencyBuckets.map((b) => [b.toString(), 0]),
        ['+Inf', 0]
      ]),
      sum: 0,
      count: 0
    };

    histogram.count += 1;
    histogram.sum += durationMs;

    for (const bucket of this.latencyBuckets) {
      if (durationMs <= bucket) {
        histogram.buckets[bucket.toString()] += 1;
      }
    }

    // Ensure +Inf reflects total observations to keep cumulative semantics intact.
    histogram.buckets['+Inf'] = histogram.count;

    this.histograms.set(histogramKey, histogram);
  }

  buildMetrics(): string {
    if (!this.options.enableMetrics) {
      return '# metrics disabled';
    }

    const lines: string[] = [];
    const service = this.options.serviceName;

    lines.push('# HELP http_requests_total Total HTTP requests');
    lines.push('# TYPE http_requests_total counter');
    for (const [key, value] of this.requestTotals.entries()) {
      const [method, route, status] = key.split('|');
      lines.push(
        `http_requests_total{service="${service}",method="${method}",route="${route}",status="${status}"} ${value}`
      );
    }

    lines.push('# HELP http_request_errors_total Total HTTP 5xx errors');
    lines.push('# TYPE http_request_errors_total counter');
    for (const [key, value] of this.errorTotals.entries()) {
      const [method, route] = key.split('|');
      lines.push(
        `http_request_errors_total{service="${service}",method="${method}",route="${route}"} ${value}`
      );
    }

    lines.push('# HELP http_request_duration_ms Duration of HTTP requests');
    lines.push('# TYPE http_request_duration_ms histogram');
    for (const [key, histogram] of this.histograms.entries()) {
      const [method, route] = key.split('|');
      const labelsBase = `service="${service}",method="${method}",route="${route}"`;

      for (const bucket of [...this.latencyBuckets.map(String), '+Inf']) {
        const bucketValue = histogram.buckets[bucket] ?? 0;
        lines.push(
          `http_request_duration_ms_bucket{${labelsBase},le="${bucket}"} ${bucketValue}`
        );
      }

      lines.push(
        `http_request_duration_ms_sum{${labelsBase}} ${histogram.sum.toFixed(3)}`
      );
      lines.push(
        `http_request_duration_ms_count{${labelsBase}} ${histogram.count}`
      );
    }

    return lines.join('\n');
  }
}
