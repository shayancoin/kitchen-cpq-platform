import { Injectable, UnauthorizedException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  InMemoryManufacturingScheduler,
  type ManufacturingInputs
} from '@kitchen-cpq/domain-manufacturing';
import {
  buildEnvelope,
  type ManufacturingJobCompletedEvent,
  type ManufacturingJobCreatedEvent
} from '@kitchen-cpq/shared-events';
import type {
  CatalogSnapshotRef,
  ManufacturingJob,
  ProjectId,
  QuoteId,
  TenantId,
  ULID
} from '@kitchen-cpq/shared-types';
import { kafkaBroker, topicMap } from '@kitchen-cpq/shared-kafka';

@Injectable()
export class ManufacturingService {
  private readonly scheduler = new InMemoryManufacturingScheduler();

  createJob(input: {
    projectId: ProjectId;
    quoteId: QuoteId;
    tenantId: TenantId;
    catalogSnapshot: CatalogSnapshotRef;
  }): ManufacturingJob {
    const job = this.scheduler.createJob({
      projectId: input.projectId,
      quoteId: input.quoteId,
      tenantId: input.tenantId,
      catalogVersion: input.catalogSnapshot
    } satisfies ManufacturingInputs);

    this.emitJobCreated(job);
    return job;
  }

  completeJob(jobId: ULID, notes?: string) {
    const job = this.scheduler.completeJob(jobId, notes);
    if (!job) return undefined;
    this.emitJobCompleted(job);
    return job;
  }

  listJobs(tenantId: TenantId) {
    if (!tenantId) {
      throw new UnauthorizedException('Tenant context is required');
    }
    // In-memory scheduler supports filtering; real impl should enforce RLS/WHERE tenantId = :tenantId.
    return this.scheduler.list().filter((j) => j.tenantId === tenantId);
  }

  private emitJobCreated(job: ManufacturingJob) {
    const event: ManufacturingJobCreatedEvent = {
      name: 'manufacturing.job.created',
      jobId: job.id,
      projectId: job.projectId,
      quoteId: job.quoteId,
      catalog: job.catalogVersion,
      tenantId: job.tenantId,
      occurredAt: job.createdAt,
      schemaVersion: 'v1'
    };
    kafkaBroker.publish({
      topic: topicMap[event.name],
      envelope: buildEnvelope(event, () => randomUUID() as ULID)
    });
  }

  private emitJobCompleted(job: ManufacturingJob) {
    const event: ManufacturingJobCompletedEvent = {
      name: 'manufacturing.job.completed',
      jobId: job.id,
      projectId: job.projectId,
      quoteId: job.quoteId,
      succeeded: job.status === 'completed',
      notes: job.notes,
      tenantId: job.tenantId,
      occurredAt: job.updatedAt,
      schemaVersion: 'v1'
    };
    kafkaBroker.publish({
      topic: topicMap[event.name],
      envelope: buildEnvelope(event, () => randomUUID() as ULID)
    });
  }
}
