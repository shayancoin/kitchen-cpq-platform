import * as http from 'http';
import * as https from 'https';
import { trace, SpanStatusCode } from '@opentelemetry/api';
import type {
  CatalogSnapshotRef,
  CatalogVersionId,
  ProjectId,
  QuoteId,
  TenantId
} from '@kitchen-cpq/shared-types';
import { ApplicationFailure } from '../temporal';
import { InstrumentationLogger } from '../instrumentation';

type RecomputeQuoteInput = {
  projectId: ProjectId;
  tenantId: TenantId;
  quoteId?: QuoteId;
  catalogSnapshot?: CatalogSnapshotRef;
  allowCatalogOverride?: boolean;
};

type HttpMethod = 'POST' | 'GET';

type HttpResponse<T = unknown> = {
  status: number;
  data: T;
};

type HttpHeaders = Record<string, string | number | undefined>;

const logger = new InstrumentationLogger('cpq-client');
const tracer = trace.getTracer('workflow-orchestration-service');

const CPQ_BASE_URL =
  process.env.CPQ_BASE_URL ?? 'http://cpq-pricing-service:3014';
const CPQ_RECOMPUTE_PATH =
  process.env.CPQ_RECOMPUTE_PATH ?? '/api/cpq/recompute-quote';
const CPQ_TIMEOUT_MS = Number(process.env.CPQ_TIMEOUT_MS ?? 10_000);
const CPQ_MAX_ATTEMPTS = Number(process.env.CPQ_MAX_ATTEMPTS ?? 3);
const DEFAULT_CATALOG_SNAPSHOT: CatalogSnapshotRef = {
  id: (process.env.CATALOG_SNAPSHOT_ID ?? 'catalog-001') as CatalogVersionId,
  hash: process.env.CATALOG_SNAPSHOT_HASH ?? 'hash-001'
};

/**
 * Delay execution for a given number of milliseconds.
 *
 * @param ms - The delay duration in milliseconds
 * @returns A promise that resolves when the delay has elapsed
 */
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function httpRequest<T>(
  method: HttpMethod,
  urlString: string,
  body: unknown,
  timeoutMs: number,
  headers: HttpHeaders = {}
): Promise<HttpResponse<T>> {
  const url = new URL(urlString);
  const isHttps = url.protocol === 'https:';
  const lib = isHttps ? https : http;

  const payload = body ? JSON.stringify(body) : undefined;

  return new Promise<HttpResponse<T>>((resolve, reject) => {
    const req = lib.request(
      {
        method,
        hostname: url.hostname,
        port: url.port || (isHttps ? 443 : 80),
        path: url.pathname + url.search,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': payload ? Buffer.byteLength(payload) : 0,
          ...headers
        }
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const raw = Buffer.concat(chunks).toString();
          const status = res.statusCode ?? 0;
          const contentType = res.headers['content-type'] ?? '';
          let data: any = raw;
          if (contentType.includes('application/json')) {
            try {
              data = raw ? JSON.parse(raw) : {};
            } catch (err) {
              return reject(err);
            }
          }
          resolve({ status, data });
        });
      }
    );

    req.on('error', (err) => reject(err));
    req.setTimeout(timeoutMs, () => {
      req.destroy(new Error('CPQ request timed out'));
    });

    if (payload) {
      req.write(payload);
    }
    req.end();
  });
}

function buildIdempotencyKey(input: RecomputeQuoteInput): string {
  return `cpq-recompute:${input.tenantId}:${input.projectId}:${input.quoteId ?? 'none'}`;
}

function isTransient(status: number) {
  return status === 429 || status >= 500;
}

export const cpqClient = {
  async recomputeQuote(input: RecomputeQuoteInput): Promise<void> {
    const { projectId, tenantId, quoteId, allowCatalogOverride } = input;
    const idempotencyKey = buildIdempotencyKey(input);
    const catalogSnapshot = input.catalogSnapshot ?? DEFAULT_CATALOG_SNAPSHOT;

    return tracer.startActiveSpan(
      'cpqClient.recomputeQuote',
      {
        attributes: {
          'cpq.project_id': projectId,
          'cpq.tenant_id': tenantId,
          'cpq.quote_id': quoteId ?? '',
          'cpq.idempotency_key': idempotencyKey
        }
      },
      async (span) => {
        try {
          let attempt = 0;
          let lastError: unknown;
          const url = `${CPQ_BASE_URL}${CPQ_RECOMPUTE_PATH}`;
          const payload = { projectId, tenantId, quoteId, catalogSnapshot, allowCatalogOverride };

          while (attempt < CPQ_MAX_ATTEMPTS) {
            attempt += 1;
            span.addEvent('cpq.request', { attempt });
            logger.info('cpqClient.recomputeQuote.request', {
              url,
              attempt,
              projectId,
              tenantId,
              quoteId,
              idempotencyKey
            });

            try {
              const { status, data } = await httpRequest(
                'POST',
                url,
                payload,
                CPQ_TIMEOUT_MS,
                {
                  'Idempotency-Key': idempotencyKey,
                  'X-Tenant-Id': tenantId
                }
              );

              if (status >= 200 && status < 300) {
                logger.info('cpqClient.recomputeQuote.success', {
                  status,
                  attempt,
                  projectId,
                  tenantId,
                  quoteId
                });
                span.setStatus({ code: SpanStatusCode.OK });
                return;
              }

              if (isTransient(status)) {
                lastError = new Error(
                  `Transient CPQ failure: ${status} ${JSON.stringify(data)}`
                );
                logger.warn('cpqClient.recomputeQuote.transient', {
                  status,
                  attempt,
                  projectId,
                  tenantId,
                  quoteId
                });
              } else {
                // Deterministic failure → surface as non-retryable
                const message =
                  typeof data === 'string'
                    ? data
                    : JSON.stringify(data ?? { status });
                throw ApplicationFailure.nonRetryable(
                  `CPQ rejected request (${status}): ${message}`,
                  'CPQNonRetryable'
                );
              }
            } catch (err) {
              lastError = err;
              const isTimeout =
                (err as Error)?.message?.includes('timed out') ?? false;
              const retryable =
                isTimeout ||
                !(err instanceof ApplicationFailure) ||
                err.type !== 'CPQNonRetryable';

              if (!retryable) {
                throw err;
              }

              const backoffMs = Math.min(
                500 * Math.pow(2, attempt - 1),
                5_000
              );
              logger.warn('cpqClient.recomputeQuote.retry', {
                attempt,
                backoffMs,
                error: (err as Error)?.message,
                projectId,
                tenantId,
                quoteId
              });
              await sleep(backoffMs);
            }
          }

          throw lastError ?? new Error('CPQ request failed after retries');
        } catch (err) {
          span.recordException(err as Error);
          span.setStatus({ code: SpanStatusCode.ERROR });
          throw err;
        } finally {
          span.end();
        }
      }
    );
  }
};