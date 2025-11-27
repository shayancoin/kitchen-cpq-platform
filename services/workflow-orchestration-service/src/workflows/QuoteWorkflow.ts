import type { ProjectId, QuoteId, TenantId } from '@kitchen-cpq/shared-types';
import { proxyActivities } from '../temporal';

const activities = proxyActivities<{
  recomputeQuoteActivity(params: { projectId: ProjectId; tenantId: TenantId }): Promise<void>;
}>({
  startToCloseTimeout: '30s',
  scheduleToCloseTimeout: '2m',
  retryPolicy: {
    initialInterval: '1s',
    backoffCoefficient: 2.0,
    maximumInterval: '15s',
    maximumAttempts: 5,
    nonRetryableErrorTypes: [
      'ValidationError',
      'PermissionDeniedError',
      'DomainConflictError'
    ]
  }
});

export interface QuoteWorkflowInput {
  projectId: ProjectId;
  tenantId: TenantId;
}

/**
 * Orchestrates recomputation of a project's quote for a tenant.
 *
 * @param input - Workflow input containing `projectId` and `tenantId` that identify the scope for recomputation
 * @returns An object with an optional `quoteId`; `quoteId` is `undefined` when no quote is produced
 */
export async function QuoteWorkflow(
  input: QuoteWorkflowInput
): Promise<{ quoteId?: QuoteId }> {
  await activities.recomputeQuoteActivity({
    projectId: input.projectId,
    tenantId: input.tenantId
  });
  return { quoteId: undefined };
}