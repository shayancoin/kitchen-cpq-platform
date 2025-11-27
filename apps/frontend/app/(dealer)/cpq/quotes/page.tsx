import { QuoteTable } from '@kitchen-cpq/ui-kit';
import type { QuoteSummary } from '@kitchen-cpq/shared-types';

export default async function QuotesListPage() {
  const quotes: QuoteSummary[] = [
    {
      id: 'quote-demo' as QuoteSummary['id'],
      projectId: 'demo-project' as QuoteSummary['projectId'],
      tenantId: 'tenant-demo' as QuoteSummary['tenantId'],
      status: 'draft',
      currency: 'USD',
      subtotal: 0,
      tax: 0,
      total: 0,
      marginPercent: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      catalogVersion: {
        id: 'catalog-001' as QuoteSummary['catalogVersion']['id'],
        hash: 'hash-001'
      },
      lineItems: []
    }
  ];

  return (
    <main className="page-shell">
      <section className="w-full p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">CPQ</p>
            <h1 className="text-2xl font-semibold text-slate-900">Quotes</h1>
          </div>
        </div>
        <QuoteTable quotes={quotes} loading={false} />
      </section>
    </main>
  );
}
