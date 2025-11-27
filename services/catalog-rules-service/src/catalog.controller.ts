import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import type { CatalogVersionId, TenantId, UserId } from '@kitchen-cpq/shared-types';
import { CatalogService } from './catalog.service';
import { ZodError } from 'zod';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly service: CatalogService) {}

  @Get('drafts/:tenantId')
  listDrafts(@Param('tenantId') tenantId: TenantId) {
    return this.service.listDrafts(tenantId);
  }

  @Post('drafts')
  createDraft(
    @Body()
    body: {
      tenantId: TenantId;
      label: string;
      payload: unknown;
      rules: any[];
      createdBy: UserId;
      draftId?: CatalogVersionId;
    }
  ) {
    async createDraft(
      @Body()
      body: {
        tenantId: string;
        label: string;
        payload: Record<string, unknown>;
        rules: Array<Record<string, unknown>>;
        draftId: string;
        createdBy: string;
      }
    ) {
      try {
        return await this.service.createDraft({
          tenantId: body.tenantId,
          label: body.label,
          payload: body.payload,
          rules: (body.rules ?? []).map((r, idx) => ({
            id: `${idx}` as CatalogVersionId,
            tenantId: body.tenantId,
            name: r?.name ?? `rule-${idx}`,
            blob: r,
            createdBy: body.createdBy
          })),
          createdBy: body.createdBy,
          draftId: body.draftId
        });
      } catch (err) {
        if (err instanceof ZodError) {
          const message = err.errors.map((e) => e.message).join('; ');
          throw new BadRequestException(`Invalid catalog payload: ${message}`);
        }
        throw err;
      }
    }
  }

  @Get('versions/:tenantId')
  listVersions(@Param('tenantId') tenantId: TenantId) {
    return this.service.listPublished(tenantId);
  }

  @Post('publish')
  publish(
    @Body()
    body: {
      draftId: CatalogVersionId;
      payloadUri: string;
      userId: UserId;
    }
  ) {
    return this.service.publishDraft({
      draftId: body.draftId,
      payloadUri: body.payloadUri,
      userId: body.userId
    });
  }
}
