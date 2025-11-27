import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
  ForbiddenException,
  Logger
} from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import type {
  CatalogSnapshotRef,
  CatalogVersionId,
  ProjectId,
  QuoteId,
  TenantId,
  Role
} from '@kitchen-cpq/shared-types';
import { CadCamService } from './cadcam.service';

class CatalogSnapshotDto implements CatalogSnapshotRef {
  @IsString()
  @IsNotEmpty()
  id!: CatalogVersionId;

  @IsString()
  @IsNotEmpty()
  hash!: string;
}

class GenerateArtifactsDto {
  @IsString()
  @IsNotEmpty()
  tenantId!: TenantId;

  @IsString()
  @IsNotEmpty()
  projectId!: ProjectId;

  @IsString()
  @IsNotEmpty()
  quoteId!: QuoteId;

  @ValidateNested()
  @Type(() => CatalogSnapshotDto)
  catalogSnapshot!: CatalogSnapshotDto;
}

type GatewayIdentity = {
  userId: string;
  tenantId: TenantId;
  roles: Role[];
};

const extractGatewayIdentity = (req: any): GatewayIdentity => {
  const tenantId = (req.headers['x-tenant-id'] as string | undefined)?.trim();
  const userId = (req.headers['x-user-id'] as string | undefined)?.trim();
  const rolesHeader = (req.headers['x-user-roles'] as string | undefined)?.trim();
  const roles: Role[] = rolesHeader
    ? rolesHeader.split(',').map((r) => r.trim()).filter(Boolean) as Role[]
    : [];

  if (!tenantId || !userId) {
    throw new ForbiddenException('Missing propagated identity headers');
  }

  const identity: GatewayIdentity = { userId, tenantId: tenantId as TenantId, roles };
  req.user = identity;
  return identity;
};

@Controller('api/cadcam')
export class CadCamController {
  private readonly logger = new Logger(CadCamController.name);

  constructor(private readonly service: CadCamService) {}

  @Post('generate')
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  )
  async generate(
    @Body() body: GenerateArtifactsDto,
    @Req() req: any
  ) {
    const user = extractGatewayIdentity(req);

    const hasTenantAccess = user.tenantId === body.tenantId;
    const allowedRoles: Role[] = ['manufacturing_engineer', 'catalog_engineer', 'admin'];
    const hasRole = user.roles.some((r) => allowedRoles.includes(r));

    if (!hasTenantAccess || !hasRole) {
      throw new ForbiddenException('Unauthorized for tenant or role');
    }

    this.logger.log('cadcam.generateArtifacts', {
      actorUserId: user.userId,
      actorTenantId: user.tenantId,
      targetTenantId: body.tenantId,
      projectId: body.projectId,
      quoteId: body.quoteId
    });

    return this.service.generateArtifacts({
      tenantId: body.tenantId,
      projectId: body.projectId,
      quoteId: body.quoteId,
      catalogSnapshot: body.catalogSnapshot
    });
  }

  @Get('latest/:tenantId/:projectId')
  async latest(
    @Param('tenantId') tenantId: TenantId,
    @Param('projectId') projectId: ProjectId,
    @Req() req: any
  ) {
    const user = extractGatewayIdentity(req);
    const hasTenantAccess = user.tenantId === tenantId;
    const allowedRoles: Role[] = ['manufacturing_engineer', 'catalog_engineer', 'admin'];
    const hasRole = user.roles.some((r) => allowedRoles.includes(r));

    if (!hasTenantAccess || !hasRole) {
      throw new ForbiddenException('Unauthorized for tenant or role');
    }

    this.logger.log('cadcam.getLatestArtifacts', {
      actorUserId: user.userId,
      actorTenantId: user.tenantId,
      targetTenantId: tenantId,
      projectId
    });

    return this.service.getLatest(projectId, tenantId);
  }
}
