import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type SectionHeaderProps = {
  label?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export function SectionHeader({ label, title, description, actions, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between', className)}>
      <div className="space-y-1">
        {label ? <p className="text-xs uppercase tracking-[0.08em] text-slate-500">{label}</p> : null}
        <div className="text-2xl font-semibold text-[var(--brand-primary,#0f172a)]">{title}</div>
        {description ? <p className="text-sm text-slate-600 max-w-2xl">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}
