import { Controller, Get, Headers, Param } from '@nestjs/common';
import type { Tenant } from '@kitchen-cpq/shared-types';
import { TenantsService } from './tenants.service';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Get()
  list(): Tenant[] {
    return this.tenantsService.listTenants();
  }

  @Get('current')
  current(@Headers('x-tenant-id') tenantId?: string): Tenant | undefined {
    return tenantId ? this.tenantsService.getTenant(tenantId) : this.tenantsService.listTenants()[0];
  }

  @Get(':slug')
  bySlug(@Param('slug') slug: string): Tenant | undefined {
    return this.tenantsService.getTenant(slug);
  }
}
