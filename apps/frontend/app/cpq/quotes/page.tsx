import { getTrpcClient } from '../../../src/lib/trpc-server';
import { QuotesClient } from './QuotesClient';

export default async function QuotesPage() {
  const trpc = await getTrpcClient();
  const quotes = await trpc.cpq.listQuotes.query();
  return <QuotesClient initialQuotes={quotes} />;
}
