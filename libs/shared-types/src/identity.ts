import type { ISODateTime, ULID } from './primitives';

export interface TenantIdBrand {
  readonly _brand: 'TenantId';
}
export type TenantId = string & TenantIdBrand;

export interface UserIdBrand {
  readonly _brand: 'UserId';
}
export type UserId = string & UserIdBrand;

export type Role =
  | 'consumer'
  | 'dealer'
  | 'catalog_engineer'
  | 'manufacturing_engineer'
  | 'admin';

export type ThemePreset = 'default' | 'tangerine' | 'brutalist';

export interface TenantBranding {
  logoUrl?: string;
  primaryColor: string;
  accentColor: string;
  surfaceColor?: string;
  subtleBorderColor?: string;
  navGradient?: string;
  constraintTokens?: {
    ok: string;
    warning: string;
    error: string;
  };
  preset?: ThemePreset;
}

export interface Tenant {
  id: TenantId;
  slug: string;
  displayName: string;
  createdAt: ISODateTime;
  isActive: boolean;
  branding?: TenantBranding;
}

export interface User {
  id: UserId;
  tenantId: TenantId;
  email: string;
  displayName: string;
  roles: Role[];
  createdAt: ISODateTime;
  lastLoginAt?: ISODateTime;
}

export interface Session {
  id: ULID;
  userId: UserId;
  tenantId: TenantId;
  issuedAt: ISODateTime;
  expiresAt: ISODateTime;
  jwt: string;
}
