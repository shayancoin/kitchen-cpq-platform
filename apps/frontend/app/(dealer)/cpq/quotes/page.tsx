import { QuoteTable } from '@kitchen-cpq/ui-kit';
import { getTrpcClient } from '../../../../src/lib/trpc-server';

export default async function QuotesListPage() {
  const trpc = getTrpcClient();
  const quote = await trpc.cpq.getQuoteForProject.query({ projectId: 'demo-project' });
  const quotes = quote ? [quote] : [];

  return (
    <main className="page-shell">
      <section className="w-full p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">CPQ</p>
            <h1 className="text-2xl font-semibold text-slate-900">Quotes</h1>
          </div>
        </div>
        <QuoteTable quotes={quotes} loading={!quote} />
      </section>
    </main>
  );
}
