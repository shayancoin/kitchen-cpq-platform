import type { CatalogSnapshotRef, ProjectId, QuoteId, TenantId, ULID } from '@kitchen-cpq/shared-types';
import { randomUUID } from 'crypto';
import { logger } from '../instrumentation';

export async function generateCadCamOutputsActivity(input: {
  projectId: ProjectId;
  quoteId: QuoteId;
  tenantId: TenantId;
  catalog: CatalogSnapshotRef;
}): Promise<{ bomId: ULID; cncProgramId: ULID }> {
  logger.info('generateCadCamOutputsActivity.start', input);
  const bomId = randomUUID() as ULID;
  const cncProgramId = randomUUID() as ULID;
  logger.info('generateCadCamOutputsActivity.complete', { bomId, cncProgramId });
  return { bomId, cncProgramId };
}

export const generateCadCamOutputsActivityOptions = {
  startToCloseTimeout: '60s',
  retry: {
    initialInterval: '2s',
    maximumAttempts: 3
  }
};
