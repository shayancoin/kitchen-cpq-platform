import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import { verifyAuthToken } from '@kitchen-cpq/shared-auth';
import type { Session, TenantId, UserId } from '@kitchen-cpq/shared-types';
import { loadConfig } from '@kitchen-cpq/shared-config';
import type { TrpcContext } from '@kitchen-cpq/shared-trpc';

const extractBearer = (req: CreateExpressContextOptions['req']): string | undefined => {
  const header = req.headers['authorization'];
  if (typeof header === 'string' && header.toLowerCase().startsWith('bearer ')) {
    return header.slice(7).trim();
  }
  return undefined;
};

const extractAuthCookie = (req: CreateExpressContextOptions['req']): string | undefined => {
  const raw = req.headers['cookie'];
  if (typeof raw !== 'string') return undefined;
  const cookies = raw.split(';').map((c) => c.trim());
  const auth = cookies.find((c) => c.startsWith('auth_token='));
  return auth ? decodeURIComponent(auth.split('=').slice(1).join('=')) : undefined;
};

export function createContext({ req }: CreateExpressContextOptions): TrpcContext {
  const config = loadConfig();

  const rawTenant = req.headers['x-tenant-id'];
  const rawUser = req.headers['x-user-id'];
  const fallbackTenant =
    typeof rawTenant === 'string' ? rawTenant : Array.isArray(rawTenant) ? rawTenant[0] : 'tenant-demo';
  const fallbackUser =
    typeof rawUser === 'string' ? rawUser : Array.isArray(rawUser) ? rawUser[0] : 'user-demo';
  const token = extractBearer(req) ?? extractAuthCookie(req);

  let userId = fallbackUser as UserId;
  let tenantId = fallbackTenant as TenantId;
  let session: Session | undefined;

  if (token) {
    try {
      const claims = verifyAuthToken(token, {
        secret: config.auth.jwtSecret,
        audience: config.auth.jwtAudience,
        issuer: config.auth.jwtIssuer
      });
      userId = claims.sub as UserId;
      tenantId = claims.tenantId as TenantId;
      session = {
        id: `sess-${claims.sub}`,
        userId,
        tenantId,
        issuedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        jwt: token
      };
    } catch {
      // fall back to demo identity
    }
  }

  return {
    userId,
    tenantId,
    session
  };
}

export type ApiTrpcContext = ReturnType<typeof createContext>;
