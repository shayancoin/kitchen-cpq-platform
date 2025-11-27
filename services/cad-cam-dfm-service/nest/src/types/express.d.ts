import 'express';
import type { Role, TenantId } from '@kitchen-cpq/shared-types';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      userId: string;
      tenantId: TenantId;
      roles: Role[];
    };
    traceId?: string;
  }
}
