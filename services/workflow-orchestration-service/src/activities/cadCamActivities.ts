import type { CatalogSnapshotRef, ProjectId, QuoteId, TenantId, ULID } from '@kitchen-cpq/shared-types';
import { randomUUID } from 'crypto';
import { logger } from '../instrumentation';

/**
 * Generates new identifiers for CAD/CAM outputs for the given project quote.
 *
 * @param input - Object identifying the project, quote, tenant, and catalog snapshot
 * @returns `{ bomId, cncProgramId }` where `bomId` is the generated bill-of-materials identifier and `cncProgramId` is the generated CNC program identifier
 */
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