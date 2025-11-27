import { Injectable } from '@nestjs/common';
import { loadConfig } from '@kitchen-cpq/shared-config';
import type { Role, Session, TenantId, UserId } from '@kitchen-cpq/shared-types';
import { sign } from 'jsonwebtoken';

export interface LoginRequest {
  email: string;
  tenantId?: string;
  displayName?: string;
  roles?: Role[];
}

@Injectable()
export class AuthService {
  private readonly config = loadConfig();

  login(body: LoginRequest): Session {
    const tenantId = (body.tenantId ?? 'tenant-demo') as TenantId;
    const userId = (`user-${body.email}`) as UserId;
    const issuedAt = new Date();
    const expiresAt = new Date(issuedAt.getTime() + 60 * 60 * 1000);

    const jwt = sign(
      {
        sub: userId,
        tenantId,
        roles: body.roles ?? ['dealer']
      },
      this.config.auth.jwtSecret,
      {
        issuer: this.config.auth.jwtIssuer,
        audience: this.config.auth.jwtAudience,
        expiresIn: '1h'
      }
    );

    return {
      id: `sess-${userId}`,
      userId,
      tenantId,
      issuedAt: issuedAt.toISOString(),
      expiresAt: expiresAt.toISOString(),
      jwt
    };
  }

  sessionFromHeaders(headers: Record<string, string | string[] | undefined>): Session {
    const tenantId = ((headers['x-tenant-id'] as string | undefined) ?? 'tenant-demo') as TenantId;
    const userId = ((headers['x-user-id'] as string | undefined) ?? 'user-demo') as UserId;
    // Preserve original userId; use it directly in session instead of re-deriving from email.
    const issuedAt = new Date();
    const expiresAt = new Date(issuedAt.getTime() + 60 * 60 * 1000);
    const jwt = sign(
      {
        sub: userId,
        tenantId,
        roles: ['dealer']
      },
      this.config.auth.jwtSecret,
      {
        issuer: this.config.auth.jwtIssuer,
        audience: this.config.auth.jwtAudience,
        expiresIn: '1h'
      }
    );

    return {
      id: `sess-${userId}`,
      userId,
      tenantId,
      issuedAt: issuedAt.toISOString(),
      expiresAt: expiresAt.toISOString(),
      jwt
    };
  }
}
