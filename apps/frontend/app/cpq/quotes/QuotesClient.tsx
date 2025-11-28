'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { QuoteStatus, QuoteSummary } from '@kitchen-cpq/shared-types';
import { Badge, Card, MarginBadge, QuoteTable, SectionHeader } from '@kitchen-cpq/ui-kit';
import { AppChrome } from '../../../src/components/AppChrome';
import { trpc } from '../../../src/lib/trpc-client';

type QuotesClientProps = {
  initialQuotes: QuoteSummary[];
};

const filters: { label: string; value: QuoteStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Draft', value: 'draft' },
  { label: 'Submitted', value: 'submitted' },
  { label: 'Approved', value: 'approved' }
];

export function QuotesClient({ initialQuotes }: QuotesClientProps) {
  const router = useRouter();
  const { data: quotes = [] } = trpc.cpq.listQuotes.useQuery(undefined, { initialData: initialQuotes });
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');

  const visibleQuotes = useMemo(() => {
    if (statusFilter === 'all') return quotes;
    return quotes.filter((q) => q.status === statusFilter);
  }, [quotes, statusFilter]);

  const avgMargin = quotes.length
    ? Math.round(quotes.reduce((acc, q) => acc + q.marginPercent, 0) / quotes.length)
    : 0;

  return (
    <AppChrome>
      <div className="space-y-6">
        <SectionHeader
          label="CPQ"
          title="Quotes"
          description="Live quote list pulled from cpq.listQuotes; clicking a row opens the 3-pane quote detail view."
          actions={
            <div className="flex items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setStatusFilter(f.value)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${statusFilter === f.value ? 'bg-[var(--brand-accent,#f97316)] text-white' : 'bg-white text-[var(--brand-primary,#0f172a)] border border-slate-200'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Card title="Quotes" subtitle={`Total: ${quotes.length}`}>
            <div className="text-lg font-semibold text-[var(--brand-primary,#0f172a)]">{quotes.length}</div>
            <div className="text-xs text-slate-500">Includes draft + submitted + approved</div>
          </Card>
          <Card title="Average margin">
            <MarginBadge value={avgMargin} />
          </Card>
          <Card title="Constraint state">
            <Badge tone="info">Managed per quote via ui.getConstraintBadge</Badge>
          </Card>
        </div>

        <QuoteTable quotes={visibleQuotes} onSelect={(quoteId) => router.push(`/cpq/quotes/${quoteId}`)} />
      </div>
    </AppChrome>
  );
}
