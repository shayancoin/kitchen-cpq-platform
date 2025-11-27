import { Body, Controller, Get, Post } from '@nestjs/common';
import type { Tenant } from '@kitchen-cpq/shared-types';
import { TenantsService, type CreateTenantDto } from './tenants.service';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Get()
  async listTenants(): Promise<Tenant[]> {
    return this.tenantsService.listTenants();
  }

  @Post()
  async createTenant(@Body() body: CreateTenantDto): Promise<Tenant> {
    return this.tenantsService.createTenant(body);
  }
}
