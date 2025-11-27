import { SpanStatusCode, trace } from '@opentelemetry/api';
import { createHash } from 'crypto';
import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { createClient, type RedisClientType } from 'redis';
import { cpqClient } from '../clients/cpq';
import { Context } from '../temporal';
import type { ProjectId, TenantId } from '@kitchen-cpq/shared-types';
import { logger } from '../instrumentation';

const IDEMPOTENCY_FILE = join(
  process.env.IDEMPOTENCY_STORE_PATH ?? '/tmp',
  'workflow-idempotency.json'
);
const parsedTtl = Number(process.env.IDEMPOTENCY_TTL_MS);
const IDEMPOTENCY_TTL_MS = Number.isFinite(parsedTtl) ? parsedTtl : 1000 * 60 * 60 * 24; // default 24h, honors 0
const IDEMPOTENCY_REDIS_URL = process.env.IDEMPOTENCY_REDIS_URL;
const IDEMPOTENCY_DEV_ONLY = process.env.IDEMPOTENCY_DEV_ONLY === 'true';

type StoredResult = { status: 'completed'; expiresAt: number };

interface IdempotencyStore {
  has(key: string): Promise<boolean>;
  reserve(key: string): Promise<boolean>;
}

/**
 * Dev-only store that keeps state on disk for single-worker usage. Not safe for multi-replica deployments.
 */
class DevFileIdempotencyStore implements IdempotencyStore {
  private file = IDEMPOTENCY_FILE;
  private lockFile = `${IDEMPOTENCY_FILE}.lock`;

  private async acquireLock(): Promise<fs.FileHandle> {
    const backoffMs = 25;
    while (true) {
      try {
        return await fs.open(this.lockFile, 'wx');
      } catch (err) {
        if ((err as NodeJS.ErrnoException)?.code === 'EEXIST') {
          await new Promise((resolve) => setTimeout(resolve, backoffMs));
          continue;
        }
        throw err;
      }
    }
  }

  private async releaseLock(handle: fs.FileHandle) {
    await handle.close();
    await fs.rm(this.lockFile, { force: true });
  }

  private async read(): Promise<Record<string, StoredResult>> {
    try {
      const data = await fs.readFile(this.file, 'utf8');
      const parsed = JSON.parse(data) as Record<string, StoredResult>;
      const now = Date.now();
      const pruned: Record<string, StoredResult> = {};
      for (const [key, value] of Object.entries(parsed)) {
        if (value.expiresAt > now) pruned[key] = value;
      }
      if (Object.keys(pruned).length !== Object.keys(parsed).length) {
        await fs.writeFile(this.file, JSON.stringify(pruned), 'utf8');
      }
      return pruned;
    } catch {
      return {};
    }
  }

  private async write(store: Record<string, StoredResult>) {
    const dir = dirname(this.file);
    await fs.mkdir(dir, { recursive: true });
    const tempFile = `${this.file}.${process.pid}.tmp`;
    await fs.writeFile(tempFile, JSON.stringify(store), 'utf8');
    await fs.rename(tempFile, this.file);
  }

  async has(key: string): Promise<boolean> {
    const store = await this.read();
    return Boolean(store[key]);
  }

  async reserve(key: string): Promise<boolean> {
    const lock = await this.acquireLock();
    try {
      const store = await this.read();
      if (store[key]) return false;
      store[key] = { status: 'completed', expiresAt: Date.now() + IDEMPOTENCY_TTL_MS };
      await this.write(store);
      return true;
    } finally {
      await this.releaseLock(lock);
    }
  }
}

class RedisIdempotencyStore implements IdempotencyStore {
  private clientPromise: Promise<RedisClientType>;

  constructor(private url: string, private ttlMs: number) {
    this.clientPromise = this.connect();
  }

  private async connect(): Promise<RedisClientType> {
    const client = createClient({ url: this.url });
    client.on('error', (err) => logger.error('idempotency.redis.error', { error: err.message }));
    await client.connect();
    return client;
  }

  private async client() {
    return this.clientPromise;
  }

  async has(key: string): Promise<boolean> {
    const client = await this.client();
    const exists = await client.exists(key);
    return Boolean(exists);
  }

  async reserve(key: string): Promise<boolean> {
    const client = await this.client();
    const result = await client.set(key, 'completed', { NX: true, PX: this.ttlMs });
    return result === 'OK';
  }
}

async function createIdempotencyStore(): Promise<IdempotencyStore> {
  if (IDEMPOTENCY_REDIS_URL) {
    logger.info('idempotency.store.redis', { ttlMs: IDEMPOTENCY_TTL_MS });
    return new RedisIdempotencyStore(IDEMPOTENCY_REDIS_URL, IDEMPOTENCY_TTL_MS);
  }

  if (IDEMPOTENCY_DEV_ONLY) {
    logger.warn('idempotency.store.dev-file', {
      path: IDEMPOTENCY_FILE,
      note: 'Dev-only file-backed store; not safe for multiple worker replicas.'
    });
    return new DevFileIdempotencyStore();
  }

  throw new Error(
    'Idempotency store not configured: set IDEMPOTENCY_REDIS_URL for a durable store or IDEMPOTENCY_DEV_ONLY=true to allow the local dev-only store.'
  );
}

const idempotencyStorePromise = createIdempotencyStore();

/**
 * Recomputes quote pricing and constraints for a project.
 * P95 budget: 30s (startToCloseTimeout: 30s, scheduleToCloseTimeout: 120s)
 * Idempotency: keyed by workflowId + activityName + payload hash; replace cache with durable store.
 */
export async function recomputeQuoteActivity(input: {
  projectId: ProjectId;
  tenantId: TenantId;
}): Promise<void> {
  const { projectId, tenantId } = input;
  const { workflowExecution } = Context.current().info;
  const workflowId = workflowExecution.workflowId;
  const payloadHash = createHash('sha256')
    .update(JSON.stringify({ projectId, tenantId }))
    .digest('hex');
  const dedupeKey = `${workflowId}|recomputeQuoteActivity|${payloadHash}`;

  const tracer = trace.getTracer('workflow-orchestration-service');
  const spanName = 'CpqActivity.recomputeQuote';

  logger.info('recomputeQuoteActivity.start', {
    projectId,
    workflowId,
    tenantId,
    spanName
  });

  const store = await idempotencyStorePromise;

  if (await store.has(dedupeKey)) {
    logger.info('recomputeQuoteActivity.dedupe-hit', {
      projectId,
      workflowId,
      tenantId
    });
    return;
  }

  return tracer.startActiveSpan(
    spanName,
    {
      attributes: {
        'workflow.id': workflowId,
        'tenant.id': tenantId,
        'project.id': projectId
      }
    },
    async (span) => {
      try {
        const reserved = await store.reserve(dedupeKey);
        if (!reserved) {
          logger.info('recomputeQuoteActivity.dedupe-after-setnx', {
            projectId,
            workflowId,
            tenantId
          });
          return;
        }

        await cpqClient.recomputeQuote({ projectId, tenantId });
        logger.info('recomputeQuoteActivity.success', {
          projectId,
          workflowId,
          tenantId,
          spanName
        });
      } catch (error) {
        span.recordException(error as Error);
        logger.error('recomputeQuoteActivity.error', {
          projectId,
          workflowId,
          tenantId,
          spanName,
          error: (error as Error)?.message ?? String(error)
        });
        span.setStatus({ code: SpanStatusCode.ERROR });
        throw error;
      } finally {
        span.end();
      }
    }
  );
}

export const recomputeQuoteActivityOptions = {
  startToCloseTimeout: '30s',
  scheduleToCloseTimeout: '2m',
  retry: {
    initialInterval: '1s',
    backoffCoefficient: 2.0,
    maximumInterval: '15s',
    maximumAttempts: 5
  }
};
