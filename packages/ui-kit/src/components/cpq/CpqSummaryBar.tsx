import type { CpqSummaryBarState } from '@kitchen-cpq/shared-types';
import { ConstraintBadge, MarginBadge } from './MarginBadge';

export function CpqSummaryBar({ state }: { state: CpqSummaryBarState }) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="text-lg font-semibold text-[var(--brand-primary,#0f172a)]">
        {state.currency} {state.total.toFixed(2)}
      </div>
      <div className="text-xs text-slate-500">Tax {state.currency} {state.tax.toFixed(2)}</div>
      <MarginBadge value={state.marginPercent} />
      <ConstraintBadge severity={state.hasBlockingErrors ? 'error' : 'ok'} label={state.hasBlockingErrors ? 'Blocking constraints' : 'Constraints clear'} />
    </div>
  );
}
