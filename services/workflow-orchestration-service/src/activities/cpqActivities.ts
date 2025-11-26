import { Context } from '@temporalio/activity';
import { logger } from '@kitchen-cpq/instrumentation-otel';
import { SpanStatusCode, trace } from '@opentelemetry/api';
import { createHash } from 'crypto';
import { cpqClient } from '../clients/cpq';

// Ephemeral dedupe cache; replace with durable store (Redis/DB) keyed by workflow + payload hash.
const dedupeCache = new Set<string>();

/**
 * Recomputes quote pricing and constraints for a project.
 * P95 budget: 30s (startToCloseTimeout: 30s, scheduleToCloseTimeout: 120s)
 * Idempotency: keyed by workflowId + activityName + payload hash; replace cache with durable store.
 */
export async function recomputeQuoteActivity(input: {
  projectId: string;
  tenantId: string;
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

  if (dedupeCache.has(dedupeKey)) {
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
        await cpqClient.recomputeQuote({ projectId, tenantId });
        dedupeCache.add(dedupeKey);
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
