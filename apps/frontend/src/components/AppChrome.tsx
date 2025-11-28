'use client';

import type { PropsWithChildren } from 'react';
import { AppShell, Skeleton } from '@kitchen-cpq/ui-kit';
import { trpc } from '../lib/trpc-client';
import { mainNavItems } from '../lib/nav';

export function AppChrome({ children }: PropsWithChildren) {
  const { data: tenant, isLoading: tenantLoading } = trpc.tenancy.getCurrentTenant.useQuery();
  const { data: user, isLoading: userLoading } = trpc.auth.getCurrentUser.useQuery();

  if (tenantLoading || userLoading || !tenant || !user) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <Skeleton className="h-10 w-40" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  return (
    <AppShell
      navItems={mainNavItems}
      tenantName={tenant.displayName}
      branding={tenant.branding}
      user={{ name: user.displayName, email: user.email, roles: user.roles }}
    >
      {children}
    </AppShell>
  );
}
