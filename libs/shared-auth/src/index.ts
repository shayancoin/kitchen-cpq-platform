import * as jwt from 'jsonwebtoken';
import type { Role } from '@kitchen-cpq/shared-types';

export type AuthClaims = {
  sub: string;
  tenantId: string;
  roles: Role[];
  email?: string;
};

type VerifyOptions = {
  secret?: string;
  audience?: string | string[];
  issuer?: string | string[];
};

/**
 * Verify a JWT and extract the required authentication claims.
 *
 * @param token - The JWT string to verify.
 * @param options - Optional verification settings: `secret` overrides the environment secret; `audience` and `issuer` are passed to the verifier.
 * @returns The token's authentication claims: `sub`, `tenantId`, `roles`, and optional `email`.
 * @throws Error('JWT secret is not configured') if no secret is provided via options or environment.
 * @throws Error('Invalid token payload') if the verified token payload is a string.
 * @throws Error('Invalid or missing JWT claims') if `sub` or `tenantId` are falsy or `roles` is not an array.
 */
export function verifyAuthToken(token: string, options: VerifyOptions = {}): AuthClaims {
  const secret = options.secret ?? process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT secret is not configured');
  }

  const decoded = jwt.verify(
    token,
    secret,
    {
      audience: options.audience as jwt.VerifyOptions['audience'],
      issuer: options.issuer as jwt.VerifyOptions['issuer']
    } satisfies jwt.VerifyOptions
  );

  if (typeof decoded === 'string') {
    throw new Error('Invalid token payload');
  }

  const { sub, tenantId, roles, email } = decoded as Partial<AuthClaims> & jwt.JwtPayload;

  if (!sub || !tenantId || !Array.isArray(roles)) {
    throw new Error('Invalid or missing JWT claims');
  }

  return {
    sub,
    tenantId,
    roles,
    email
  };
}