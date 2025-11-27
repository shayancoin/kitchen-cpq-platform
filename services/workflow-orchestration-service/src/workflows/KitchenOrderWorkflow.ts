import type {
  CatalogSnapshotRef,
  ProjectId,
  QuoteId,
  TenantId
} from '@kitchen-cpq/shared-types';
import { proxyActivities } from '../temporal';

const cpqActivities = proxyActivities<{
  recomputeQuoteActivity(params: { projectId: ProjectId; tenantId: TenantId }): Promise<void>;
}>({
  startToCloseTimeout: '30s',
  scheduleToCloseTimeout: '2m'
});

const cadCamActivities = proxyActivities<{
  generateCadCamOutputsActivity(params: {
    projectId: ProjectId;
    quoteId: QuoteId;
    tenantId: TenantId;
    catalog: CatalogSnapshotRef;
  }): Promise<{ bomId: string; cncProgramId: string }>;
}>({
  startToCloseTimeout: '30s',
  scheduleToCloseTimeout: '2m'
});

const manufacturingActivities = proxyActivities<{
  createManufacturingJobActivity(params: {
    projectId: ProjectId;
    quoteId: QuoteId;
    tenantId: TenantId;
    catalog: CatalogSnapshotRef;
    bomId?: string;
    cncProgramId?: string;
  }): Promise<{ id: string }>;
}>({
  startToCloseTimeout: '10s',
  scheduleToCloseTimeout: '30s'
});

export interface KitchenOrderWorkflowInput {
  projectId: ProjectId;
  tenantId: TenantId;
  quoteId?: QuoteId;
  catalog?: CatalogSnapshotRef;
}

/**
 * Orchestrates CPQ → CAD/CAM → Manufacturing activities to process a kitchen order.
 *
 * @param input - Workflow input containing `projectId` and `tenantId`. Must include `quoteId` and `catalog` for orchestration to proceed.
 * @throws Error when `input.quoteId` or `input.catalog` is missing.
 * @returns An object with `quoteId` (echoed from input) and `jobId` set to the created manufacturing job id, or `undefined` if no job id was produced.
 */
export async function KitchenOrderWorkflow(
  input: KitchenOrderWorkflowInput
): Promise<{ quoteId?: QuoteId; jobId?: string }> {
  if (!input.quoteId || !input.catalog) {
    throw new Error('KitchenOrderWorkflow requires quoteId and catalog');
  }

  await cpqActivities.recomputeQuoteActivity({
    projectId: input.projectId,
    tenantId: input.tenantId
  });

  const cadOutputs = await cadCamActivities.generateCadCamOutputsActivity({
    projectId: input.projectId,
    quoteId: input.quoteId,
    tenantId: input.tenantId,
    catalog: input.catalog
  });

  const job = await manufacturingActivities.createManufacturingJobActivity({
    projectId: input.projectId,
    quoteId: input.quoteId,
    tenantId: input.tenantId,
    catalog: input.catalog,
    bomId: cadOutputs.bomId,
    cncProgramId: cadOutputs.cncProgramId
  });

  return { quoteId: input.quoteId, jobId: job?.id ?? undefined };
}