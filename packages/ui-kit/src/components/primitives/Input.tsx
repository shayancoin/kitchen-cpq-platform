import type { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'w-full rounded-md border border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-white px-3 py-2 text-sm text-[var(--brand-primary,#0f172a)] shadow-inner focus:border-[var(--brand-accent,#2563eb)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-accent,#2563eb)_40%,transparent)]',
        className
      )}
      {...props}
    />
  );
}
