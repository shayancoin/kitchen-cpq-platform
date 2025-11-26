import React from 'react';

export type QuoteRow = {
  id: string;
  name: string;
  status: string;
  total: string;
  updatedAt: string;
};

type QuoteTableProps = {
  quotes: QuoteRow[];
  loading?: boolean;
};

export function QuoteTable({ quotes, loading = false }: QuoteTableProps): JSX.Element {
  if (loading) {
    return <div>Loading quotes…</div>;
  }

  if (!quotes.length) {
    return <div>No quotes found.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Quote</th>
          <th>Status</th>
          <th>Total</th>
          <th>Updated</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr key={quote.id}>
            <td>{quote.name}</td>
            <td>{quote.status}</td>
            <td>{quote.total}</td>
            <td>{quote.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
