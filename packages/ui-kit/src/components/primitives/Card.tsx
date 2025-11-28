import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type CardProps = PropsWithChildren<{
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  actions?: ReactNode;
}>;

export function Card({ title, subtitle, actions, className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-[var(--brand-surface,#ffffff)] shadow-sm',
        className
      )}
    >
      {(title || actions) && (
        <div className="flex items-start justify-between gap-2 border-b border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] px-4 py-3">
          <div>
            {title ? <div className="text-sm font-semibold text-[var(--brand-primary,#0f172a)]">{title}</div> : null}
            {subtitle ? <div className="text-xs text-slate-500">{subtitle}</div> : null}
          </div>
          {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
        </div>
      )}
      <div className="px-4 py-3 text-sm text-slate-800">{children}</div>
    </div>
  );
}
