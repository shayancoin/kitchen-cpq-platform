'use client';

import type { ComponentType, PropsWithChildren, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import type { Role, TenantBranding } from '@kitchen-cpq/shared-types';
import { cn } from '../../utils/cn';
import { TenantThemeProvider } from '../../theme/TenantThemeProvider';
import { Button } from '../primitives/Button';

export type NavItem = {
  label: string;
  href: string;
  icon?: ReactNode;
  badge?: ReactNode;
  roles?: Role[];
};

export type UserProfile = {
  name: string;
  email?: string;
  roles: Role[];
};

type LinkRendererProps = PropsWithChildren<{ href: string; className?: string }>;

const DefaultLink: ComponentType<LinkRendererProps> = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

type AppShellProps = PropsWithChildren<{
  navItems: NavItem[];
  user?: UserProfile;
  tenantName?: string;
  branding?: TenantBranding;
  topbarContent?: ReactNode;
  linkComponent?: ComponentType<LinkRendererProps>;
  onSignOut?: () => void;
}>;

export function AppShell({
  navItems,
  user,
  tenantName,
  branding,
  topbarContent,
  linkComponent: LinkComponent = DefaultLink,
  onSignOut,
  children
}: AppShellProps) {
  const [open, setOpen] = useState(false);
  const userRoles = user?.roles ?? [];

  const allowedItems = useMemo(() => {
    if (!userRoles.length) return navItems;
    return navItems.filter((item) => !item.roles || item.roles.some((role) => userRoles.includes(role)));
  }, [navItems, userRoles]);

  return (
    <TenantThemeProvider branding={branding}>
      <div className="flex min-h-screen bg-[var(--brand-surface,#f8fafc)] text-[var(--brand-primary,#0f172a)]">
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-20 w-64 transform border-r border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-[var(--brand-surface,#0b1220)]/95 backdrop-blur transition-transform lg:translate-x-0',
            open ? 'translate-x-0' : '-translate-x-full'
          )}
          style={branding?.navGradient ? { backgroundImage: branding.navGradient } : undefined}
        >
          <div className="flex items-center gap-2 px-4 py-4 text-sm font-semibold text-white">
            <div className="h-9 w-9 rounded-lg bg-[color-mix(in_srgb,var(--brand-accent,#f97316)_70%,#0f172a)]" />
            <div>
              <div className="text-xs uppercase tracking-[0.08em] text-slate-300">{tenantName ?? 'Tenant'}</div>
              <div className="text-base font-semibold text-white">Kitchen CPQ</div>
            </div>
          </div>
          <nav className="mt-2 space-y-1 px-3">
            {allowedItems.map((item) => (
              <LinkComponent
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-100 hover:bg-white/10',
                  'transition-colors'
                )}
              >
                <span className="flex items-center gap-2">
                  {item.icon ? <span className="text-slate-300">{item.icon}</span> : null}
                  <span>{item.label}</span>
                </span>
                {item.badge ? <span className="text-xs text-slate-300">{item.badge}</span> : null}
              </LinkComponent>
            ))}
          </nav>
          <div className="mt-auto hidden px-3 pb-4 pt-6 lg:block">
            {user ? (
              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-100">
                <div className="font-semibold">{user.name}</div>
                {user.email ? <div className="text-slate-300">{user.email}</div> : null}
                <div className="text-slate-400">{user.roles.join(', ')}</div>
              </div>
            ) : null}
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col lg:pl-64">
          <header className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-[var(--brand-surface,#ffffff)]/95 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <button
                className="rounded-md border border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] px-2 py-1 text-sm font-semibold text-[var(--brand-primary,#0f172a)] lg:hidden"
                onClick={() => setOpen((prev) => !prev)}
              >
                {open ? 'Close' : 'Menu'}
              </button>
              <div className="hidden text-sm font-semibold text-[var(--brand-primary,#0f172a)] sm:block">
                {tenantName ?? 'Kitchen CPQ'}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {topbarContent}
              {onSignOut ? (
                <Button variant="outline" onClick={onSignOut} className="hidden sm:inline-flex">
                  Sign out
                </Button>
              ) : null}
            </div>
          </header>
          <main className="flex-1 bg-[var(--brand-surface-muted,#f8fafc)] px-4 pb-10 pt-6">{children}</main>
        </div>
      </div>
    </TenantThemeProvider>
  );
}
