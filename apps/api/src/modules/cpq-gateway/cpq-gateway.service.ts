import { Injectable } from '@nestjs/common';
import type { CatalogSnapshotRef, ParametricState, QuoteSummary, TenantId } from '@kitchen-cpq/shared-types';

const nowIso = () => new Date().toISOString();

@Injectable()
export class CpqGatewayService {
  buildParametricState(projectId: string, tenantId: TenantId): ParametricState {
    return {
      projectId,
      tenantId,
      catalogVersionId: 'catalog-001',
      room: {
        id: 'room-1',
        perimeter: [],
        openings: [],
        ceilingHeight: 2700
      },
      cabinets: [],
      constraints: { hasBlockingErrors: false, violations: [] },
      updatedAt: nowIso()
    };
  }

  buildQuote(projectId: string, tenantId: TenantId): QuoteSummary {
    const catalogVersion: CatalogSnapshotRef = { id: 'catalog-001', hash: 'hash-001' };
    return {
      id: `quote-${projectId}`,
      projectId,
      tenantId,
      status: 'draft',
      currency: 'USD',
      subtotal: 0,
      tax: 0,
      total: 0,
      marginPercent: 0,
      createdAt: nowIso(),
      updatedAt: nowIso(),
      catalogVersion,
      lineItems: []
    };
  }
}
