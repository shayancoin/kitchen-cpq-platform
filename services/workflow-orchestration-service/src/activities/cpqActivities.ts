import { Context } from '@temporalio/activity';
import { logger } from '@kitchen-cpq/instrumentation-otel';
import { cpqClient } from '../clients/cpq';

const dedupeCache = new Set<string>();

/**
 * Recomputes quote pricing and constraints for a project.
 * P95 budget: 30s (startToCloseTimeout: 30s, scheduleToCloseTimeout: 120s)
 * Idempotency: uses workflowId + projectId as natural key; CPQ service deduplicates.
 */
export async function recomputeQuoteActivity(projectId: string): Promise<void> {
  const { workflowExecution } = Context.current().info;
  const workflowId = workflowExecution.workflowId;
  const dedupeKey = `${workflowId}|recomputeQuoteActivity|${projectId}`;
  const spanName = 'WorkflowOrchestrationService.recomputeQuoteActivity';

  logger.info('recomputeQuoteActivity.start', {
    projectId,
    workflowId,
    spanName,
    tenantId: 'unknown'
  });

  if (dedupeCache.has(dedupeKey)) {
    logger.info('recomputeQuoteActivity.dedupe-hit', { projectId, workflowId });
    return;
  }

  try {
    await cpqClient.recomputeQuote({ projectId });
    dedupeCache.add(dedupeKey);
    logger.info('recomputeQuoteActivity.success', {
      projectId,
      workflowId,
      spanName,
      tenantId: 'unknown'
    });
  } catch (error) {
    logger.error('recomputeQuoteActivity.error', {
      projectId,
      workflowId,
      spanName,
      tenantId: 'unknown',
      error: (error as Error)?.message ?? String(error)
    });
    throw error;
  }
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
