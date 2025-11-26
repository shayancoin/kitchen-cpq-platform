import { QuoteTable } from '@pkg/ui-kit/components';

export default function QuotesListPage(): JSX.Element {
  return (
    <main>
      <QuoteTable quotes={[]} loading={true} />
    </main>
  );
}
