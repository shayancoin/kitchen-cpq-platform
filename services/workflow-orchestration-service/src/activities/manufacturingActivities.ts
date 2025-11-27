import type {
  CatalogSnapshotRef,
  ManufacturingJob,
  ProjectId,
  QuoteId,
  TenantId,
  ULID
} from '@kitchen-cpq/shared-types';
import { randomUUID } from 'crypto';
import { logger } from '../instrumentation';

/**
 * Create a ManufacturingJob object from the provided identifiers and catalog snapshot.
 *
 * @param input - Object containing the identifiers and references used to build the job:
 *   - `projectId`: project identifier
 *   - `quoteId`: quote identifier
 *   - `tenantId`: tenant identifier
 *   - `catalog`: catalog snapshot reference used for `catalogVersion`
 *   - `bomId` (optional): bill-of-materials identifier to associate with the job
 *   - `cncProgramId` (optional): CNC program identifier to associate with the job
 * @returns The newly constructed `ManufacturingJob` with a generated `id`, `status` set to `"scheduled"`, and `createdAt`/`updatedAt` timestamps.
 */
export async function createManufacturingJobActivity(input: {
  projectId: ProjectId;
  quoteId: QuoteId;
  tenantId: TenantId;
  catalog: CatalogSnapshotRef;
  bomId?: ULID;
  cncProgramId?: ULID;
}): Promise<ManufacturingJob> {
  const now = new Date().toISOString();
  const job: ManufacturingJob = {
    id: randomUUID() as ULID,
    tenantId: input.tenantId,
    projectId: input.projectId,
    quoteId: input.quoteId,
    catalogVersion: input.catalog,
    status: 'scheduled',
    createdAt: now,
    updatedAt: now,
    bomId: input.bomId,
    cncProgramId: input.cncProgramId
  };

  logger.info('createManufacturingJobActivity', { job });
  return job;
}

export const createManufacturingJobActivityOptions = {
  startToCloseTimeout: '20s',
  retry: {
    initialInterval: '1s',
    maximumAttempts: 3
  }
};
