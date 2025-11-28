'use client';

import { useRouter } from 'next/navigation';
import type { ConstraintBadgePayload, DashboardKpis, QuoteSummary } from '@kitchen-cpq/shared-types';
import {
  Card,
  ConstraintBadge as ConstraintBadgeUi,
  KpiCard,
  QuoteTable,
  SectionHeader
} from '@kitchen-cpq/ui-kit';
import { AppChrome } from '../../../src/components/AppChrome';
import { trpc } from '../../../src/lib/trpc-client';

type DashboardClientProps = {
  initialKpis: DashboardKpis;
  initialQuotes: QuoteSummary[];
  initialBadge: ConstraintBadgePayload;
};

export function DashboardClient({ initialKpis, initialQuotes, initialBadge }: DashboardClientProps) {
  const router = useRouter();
  const { data: kpis } = trpc.ui.getDashboardKpis.useQuery(undefined, { initialData: initialKpis });
  const { data: quotes } = trpc.cpq.listQuotes.useQuery(undefined, { initialData: initialQuotes });
  const { data: badge } = trpc.ui.getConstraintBadge.useQuery(
    { projectId: 'demo-project' },
    { initialData: initialBadge }
  );

  return (
    <AppChrome>
      <div className="space-y-6">
        <SectionHeader
          label="CPQ"
          title="Pipeline & margin overview"
          description="Dealer-friendly view backed by tRPC endpoints; data refreshes every few seconds to mirror the BFF/CPQ services."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <KpiCard label="Open quotes" value={kpis?.openQuotes ?? 0} />
          <KpiCard
            label="Conversion"
            value={`${kpis?.conversionRate ?? 0}%`}
            delta="Based on submitted → approved"
          />
          <KpiCard
            label="Pipeline value"
            value={`$${(kpis?.pipelineValue ?? 0).toLocaleString()}`}
            trend={kpis?.revenueTrend}
          />
          <KpiCard label="Avg margin" value={`${kpis?.avgMargin ?? 0}%`} />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card
            title="Constraint badge"
            subtitle="From ui.getConstraintBadge"
            className="lg:col-span-1"
          >
            <ConstraintBadgeUi
              severity={badge?.severity ?? 'ok'}
              count={badge?.count ?? 0}
              label={badge?.primaryMessage}
            />
          </Card>
          <Card
            title="Catalog version"
            subtitle="Scoped by tenant"
            className="lg:col-span-1"
          >
            <div className="text-sm text-slate-700">Baseline: catalog-001</div>
            <div className="text-xs text-slate-500">Change management handled in catalog service.</div>
          </Card>
          <Card title="Re-pricing SLA" subtitle="Target P95 < 150ms" className="lg:col-span-1">
            <p className="text-sm text-slate-700">
              UI uses TanStack Query + tRPC batching; heavy work offloaded to BFF/CPQ services.
            </p>
          </Card>
        </div>

        <Card title="Quotes" subtitle="Live TanStack Table derived from cpq.listQuotes">
          <QuoteTable
            quotes={quotes ?? []}
            onSelect={(quoteId) => router.push(`/cpq/quotes/${quoteId}`)}
          />
        </Card>
      </div>
    </AppChrome>
  );
}
