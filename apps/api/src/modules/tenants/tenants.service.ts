import { Injectable } from '@nestjs/common';
import type { Tenant, TenantId } from '@kitchen-cpq/shared-types';

@Injectable()
export class TenantsService {
  private readonly tenants: Tenant[] = [
    {
      id: 'tenant-demo' as TenantId,
      slug: 'tenant-demo',
      displayName: 'Demo Tenant',
      createdAt: new Date().toISOString(),
      isActive: true
    }
  ];

  listTenants(): Tenant[] {
    return this.tenants;
  }

  getTenant(idOrSlug: string): Tenant | undefined {
    return this.tenants.find((t) => t.id === idOrSlug || t.slug === idOrSlug);
  }
}
