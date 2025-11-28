import { notFound } from 'next/navigation';
import { getTrpcClient } from '../../../../src/lib/trpc-server';
import { QuoteDetailClient } from './QuoteDetailClient';

export default async function QuoteDetailPage({ params }: { params: { id: string } }) {
  const trpc = await getTrpcClient();
  const quote = await trpc.cpq.getQuote.query({ quoteId: params.id });
  if (!quote) return notFound();
  const { state } = await trpc.configurator.getSessionState.query({ projectId: quote.projectId });

  return <QuoteDetailClient quote={quote} state={state} />;
}
