import { ForbiddenException, Injectable } from '@nestjs/common';
import { createHash, randomUUID } from 'crypto';
import { performance } from 'perf_hooks';
import { trace } from '@opentelemetry/api';
import {
  type Bom,
  type CatalogSnapshotRef,
  type CutList,
  type CncProgram,
  type ProjectId,
  type QuoteId,
  type TenantId,
  type ULID
} from '@kitchen-cpq/shared-types';
import {
  buildEnvelope,
  type CadCamCncOutputGeneratedEvent,
  type BomGeneratedEvent
} from '@kitchen-cpq/shared-events';
import { kafkaBroker, topicMap } from '@kitchen-cpq/shared-kafka';
import { logger as sharedLogger } from '@kitchen-cpq/instrumentation-otel';

interface GenerateInput {
  tenantId: TenantId;
  projectId: ProjectId;
  quoteId: QuoteId;
  catalogSnapshot: CatalogSnapshotRef;
}

@Injectable()
export class CadCamService {
  private readonly store = new ArtifactPersistenceService();
  private readonly tracer = trace.getTracer('cad-cam-dfm-service');
  private readonly logger = sharedLogger;

  async generateArtifacts(input: GenerateInput) {
    const span = this.tracer.startSpan('CadCamService.GenerateArtifacts', {
      attributes: {
        'tenant.id': input.tenantId,
        'project.id': input.projectId,
        'quote.id': input.quoteId
      }
    });
    const startTime = performance.now();
    const bom: Bom = {
      id: randomUUID() as ULID,
      tenantId: input.tenantId,
      projectId: input.projectId,
      quoteId: input.quoteId,
      items: [
        {
          id: randomUUID() as ULID,
          sku: 'PANEL-STD',
          description: 'Standard panel',
          quantity: 4,
          uom: 'panel'
        }
      ],
      generatedAt: new Date().toISOString(),
      catalogVersion: input.catalogSnapshot
    };

    const cutList: CutList = {
      id: randomUUID() as ULID,
      tenantId: input.tenantId,
      projectId: input.projectId,
      bomId: bom.id,
      items: [
        {
          id: randomUUID() as ULID,
          panelSku: 'PANEL-STD',
          length: 800,
          width: 600,
          thickness: 18,
          grainDirection: 'x'
        }
      ],
      generatedAt: new Date().toISOString()
    };

    const now = Date.now();
    const cncProgram: CncProgram = {
      id: randomUUID() as ULID,
      tenantId: input.tenantId,
      projectId: input.projectId,
      machineId: 'cnc-sim',
      gcodeUri: `s3://cnc/${input.projectId}/${now}/program.gcode`,
      nestingPreviewUri: `s3://cnc/${input.projectId}/${now}/preview.png`,
      generatedAt: new Date().toISOString()
    };

    try {
      await this.store.save({
        tenantId: input.tenantId,
        projectId: input.projectId,
        artifacts: { bom, cutList, cnc: cncProgram }
      });
      this.emitArtifactsEvents(bom, cutList, cncProgram);
      return { bom, cutList, cncProgram };
    } catch (err) {
      this.logger.error('cadcam.generateArtifacts failed to persist artifacts', {
        projectId: input.projectId,
        tenantId: input.tenantId,
        error: err instanceof Error ? err.message : String(err)
      });
      throw err;
    } finally {
      this.logger.info('cadcam.generateArtifacts.complete', {
        latencyMs: performance.now() - startTime,
        projectId: input.projectId,
        tenantId: input.tenantId
      });
      span.end();
    }
  }

  async getLatest(projectId: ProjectId, tenantId: TenantId) {
    return this.store.getLatest(projectId, tenantId);
  }

  private emitArtifactsEvents(bom: Bom, cutList: CutList, cnc: CncProgram) {
    const bomEvent: BomGeneratedEvent = {
      name: 'bom.generated',
      bom,
      projectId: bom.projectId,
      quoteId: bom.quoteId,
      occurredAt: bom.generatedAt,
      schemaVersion: 'v1',
      tenantId: bom.tenantId
    };
    kafkaBroker.publish({
      topic: topicMap[bomEvent.name],
      envelope: buildEnvelope(bomEvent, () => randomUUID() as ULID)
    });

    const cncEvent: CadCamCncOutputGeneratedEvent = {
      name: 'cadcam.cnc.output.generated',
      cncProgram: cnc,
      cutList,
      bomId: bom.id,
      projectId: bom.projectId,
      occurredAt: cnc.generatedAt,
      schemaVersion: 'v1',
      tenantId: bom.tenantId
    };
    kafkaBroker.publish({
      topic: topicMap[cncEvent.name],
      envelope: buildEnvelope(cncEvent, () => randomUUID() as ULID)
    });
  }
}

type ArtifactBundle = { bom: Bom; cutList: CutList; cnc: CncProgram };

interface ArtifactMetadata {
  tenantId: TenantId;
  projectId: ProjectId;
  bomUri: string;
  cutListUri: string;
  cncProgramUri: string;
  checksum: string;
  createdAt: string;
  updatedAt: string;
  revision: number;
}

class ObjectStorageClient {
  private readonly bucket = process.env.CAD_CAM_BUCKET ?? 'cadcam-artifacts';
  // In-memory backing store to keep the service deterministic in local/dev.
  private readonly blobs = new Map<string, Buffer>();

  async putObject(params: {
    key: string;
    body: Buffer | string;
    contentType?: string;
    tenantId: TenantId;
    projectId: ProjectId;
  }): Promise<string> {
    const normalizedKey = params.key.replace(/^\/+/, '');
    const uri = `s3://${this.bucket}/${normalizedKey}`;
    const payload = typeof params.body === 'string' ? Buffer.from(params.body) : params.body;

    this.blobs.set(uri, payload);
    return uri;
  }
}

class ArtifactMetadataRepository {
  private readonly records = new Map<string, ArtifactMetadata>();

  private key(tenantId: TenantId, projectId: ProjectId) {
    return `${tenantId}|${projectId}`;
  }

  async upsert(
    record: Omit<ArtifactMetadata, 'revision'> & { revision?: number },
    expectedRevision?: number
  ): Promise<ArtifactMetadata> {
    const key = this.key(record.tenantId, record.projectId);
    const existing = this.records.get(key);

    if (existing && existing.tenantId !== record.tenantId) {
      throw new ForbiddenException('tenant isolation breach');
    }

    if (existing && expectedRevision !== undefined && existing.revision !== expectedRevision) {
      throw new Error('concurrent update detected');
    }

    const nextRevision = (record.revision ?? existing?.revision ?? 0) + 1;
    const createdAt = existing?.createdAt ?? record.createdAt;

    const next: ArtifactMetadata = {
      ...record,
      createdAt,
      updatedAt: record.updatedAt,
      revision: nextRevision
    };

    this.records.set(key, next);
    return next;
  }

  async getLatest(tenantId: TenantId, projectId: ProjectId): Promise<ArtifactMetadata | undefined> {
    const record = this.records.get(this.key(tenantId, projectId));
    if (record && record.tenantId !== tenantId) {
      throw new ForbiddenException('tenant isolation breach');
    }
    return record;
  }
}

class ArtifactPersistenceService {
  private readonly storage = new ObjectStorageClient();
  private readonly metadataRepo = new ArtifactMetadataRepository();
  private readonly logger = sharedLogger;

  private ensureTenantConsistency(tenantId: TenantId, artifacts: ArtifactBundle) {
    if (artifacts.bom.tenantId !== tenantId || artifacts.cutList.tenantId !== tenantId || artifacts.cnc.tenantId !== tenantId) {
      throw new ForbiddenException('artifact tenant mismatch');
    }
  }

  private async uploadArtifacts(tenantId: TenantId, projectId: ProjectId, artifacts: ArtifactBundle) {
    const keyBase = `${tenantId}/${projectId}`;

    const [bomUri, cutListUri, cncProgramUri] = await Promise.all([
      this.storage.putObject({
        key: `${keyBase}/bom.json`,
        body: JSON.stringify(artifacts.bom),
        contentType: 'application/json',
        tenantId,
        projectId
      }),
      this.storage.putObject({
        key: `${keyBase}/cut-list.json`,
        body: JSON.stringify(artifacts.cutList),
        contentType: 'application/json',
        tenantId,
        projectId
      }),
      this.storage.putObject({
        key: `${keyBase}/cnc-program.json`,
        body: JSON.stringify(artifacts.cnc),
        contentType: 'application/json',
        tenantId,
        projectId
      })
    ]);

    return { bomUri, cutListUri, cncProgramUri };
  }

  async save(input: { tenantId: TenantId; projectId: ProjectId; artifacts: ArtifactBundle }): Promise<void> {
    const { tenantId, projectId, artifacts } = input;
    this.ensureTenantConsistency(tenantId, artifacts);

    const now = new Date().toISOString();
    const checksum = createHash('sha256').update(JSON.stringify(artifacts)).digest('hex');

    try {
      const { bomUri, cutListUri, cncProgramUri } = await this.uploadArtifacts(tenantId, projectId, artifacts);
      const existing = await this.metadataRepo.getLatest(tenantId, projectId);
      await this.metadataRepo.upsert(
        {
          tenantId,
          projectId,
          bomUri,
          cutListUri,
          cncProgramUri,
          checksum,
          createdAt: existing?.createdAt ?? now,
          updatedAt: now,
          revision: existing?.revision
        },
        existing?.revision
      );
    } catch (err) {
      this.logger.error('cadcam.artifacts.save_failed', {
        tenantId,
        projectId,
        error: err instanceof Error ? err.message : String(err)
      });
      throw err;
    }
  }

  async getLatest(projectId: ProjectId, tenantId: TenantId): Promise<ArtifactMetadata | undefined> {
    try {
      return await this.metadataRepo.getLatest(tenantId, projectId);
    } catch (err) {
      this.logger.error('cadcam.artifacts.getLatest_failed', {
        tenantId,
        projectId,
        error: err instanceof Error ? err.message : String(err)
      });
      throw err;
    }
  }
}
