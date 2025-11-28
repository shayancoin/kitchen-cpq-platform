import type { PropsWithChildren } from 'react';
import { cn } from '../../utils/cn';

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'error' | 'info';

const toneClasses: Record<BadgeTone, string> = {
  neutral: 'bg-slate-100 text-slate-800 border border-slate-200',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  warning: 'bg-amber-50 text-amber-800 border border-amber-100',
  error: 'bg-red-50 text-red-700 border border-red-100',
  info: 'bg-blue-50 text-blue-700 border border-blue-100'
};

export function Badge({ tone = 'neutral', className, children }: PropsWithChildren<{ tone?: BadgeTone; className?: string }>) {
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold', toneClasses[tone], className)}>
      {children}
    </span>
  );
}
