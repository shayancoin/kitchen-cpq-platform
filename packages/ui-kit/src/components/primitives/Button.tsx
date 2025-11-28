import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../../utils/cn';

export type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--brand-accent,#2563eb)] text-white hover:bg-opacity-90 focus-visible:outline-[var(--brand-accent,#2563eb)]',
  ghost:
    'text-[var(--brand-primary,#0f172a)] hover:bg-[var(--brand-surface-muted,#f8fafc)] focus-visible:outline-[var(--brand-primary,#0f172a)]',
  outline:
    'border border-[color-mix(in_srgb,var(--brand-primary,#0f172a)_12%,#d5d9e3)] text-[var(--brand-primary,#0f172a)] hover:bg-[var(--brand-surface-muted,#f8fafc)] focus-visible:outline-[var(--brand-accent,#2563eb)]',
  danger:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600'
};

export function Button({
  children,
  variant = 'primary',
  loading,
  className,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], disabled || loading ? 'opacity-60' : '', className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? '…' : null}
      {children}
    </button>
  );
}
