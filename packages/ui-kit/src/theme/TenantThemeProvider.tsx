import type { CSSProperties, PropsWithChildren } from 'react';
import type { TenantBranding, ThemePreset } from '@kitchen-cpq/shared-types';
import { cn } from '../utils/cn';

const fallbackBranding: TenantBranding = {
  primaryColor: '#0f172a',
  accentColor: '#2563eb',
  surfaceColor: '#ffffff',
  subtleBorderColor: '#e2e8f0',
  navGradient: 'linear-gradient(180deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)',
  constraintTokens: { ok: '#22c55e', warning: '#f59e0b', error: '#ef4444' },
  preset: 'default'
};

const presetOverrides: Record<ThemePreset, Partial<TenantBranding>> = {
  default: {},
  tangerine: {
    accentColor: '#f97316',
    surfaceColor: '#0b1220',
    subtleBorderColor: '#1f2937',
    navGradient: 'linear-gradient(180deg, #0b1220 0%, #111827 50%, #0b1220 100%)'
  },
  brutalist: {
    accentColor: '#fde047',
    primaryColor: '#111111',
    surfaceColor: '#ffffff',
    subtleBorderColor: '#111111',
    navGradient: 'linear-gradient(180deg, #000000 0%, #1f1f1f 60%, #0a0a0a 100%)'
  }
};

export const resolveBranding = (branding?: TenantBranding): TenantBranding => {
  const preset = branding?.preset ?? 'default';
  return {
    ...fallbackBranding,
    ...(presetOverrides[preset] ?? {}),
    ...branding,
    preset
  };
};

export function TenantThemeProvider({
  branding,
  mode = 'light',
  children
}: PropsWithChildren<{ branding?: TenantBranding; mode?: 'light' | 'dark' }>) {
  const tokens = resolveBranding(branding);
  const style = {
    '--brand-primary': tokens.primaryColor,
    '--brand-accent': tokens.accentColor,
    '--brand-surface': tokens.surfaceColor ?? fallbackBranding.surfaceColor,
    '--brand-surface-muted': tokens.surfaceColor
      ? `color-mix(in srgb, ${tokens.surfaceColor} 92%, #ffffff)`
      : '#f8fafc',
    '--brand-border-subtle': tokens.subtleBorderColor ?? fallbackBranding.subtleBorderColor,
    '--constraint-ok': tokens.constraintTokens?.ok ?? fallbackBranding.constraintTokens?.ok,
    '--constraint-warning': tokens.constraintTokens?.warning ?? fallbackBranding.constraintTokens?.warning,
    '--constraint-error': tokens.constraintTokens?.error ?? fallbackBranding.constraintTokens?.error
  } as CSSProperties;

  return (
    <div
      style={style}
      className={cn(
        'min-h-screen text-[var(--brand-primary,#0f172a)]',
        mode === 'dark' ? 'bg-[#0b1220] text-slate-50' : 'bg-slate-50'
      )}
      data-theme={tokens.preset ?? 'default'}
    >
      {children}
    </div>
  );
}
