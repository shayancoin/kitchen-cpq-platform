'use client';

import { useMemo } from 'react';
import type { QuoteSummary } from '@kitchen-cpq/shared-types';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../data/DataTable';
import { MarginBadge } from './MarginBadge';
import { Badge } from '../primitives/Badge';

type QuoteTableProps = {
  quotes: QuoteSummary[];
  loading?: boolean;
  onSelect?: (quoteId: string) => void;
};

const statusTone: Record<QuoteSummary['status'], Parameters<typeof Badge>[0]['tone']> = {
  draft: 'neutral',
  submitted: 'info',
  approved: 'success',
  rejected: 'error',
  expired: 'warning'
};

export function QuoteTable({ quotes, loading = false, onSelect }: QuoteTableProps): JSX.Element {
  const columns = useMemo<ColumnDef<QuoteSummary>[]>(
    () => [
      { accessorKey: 'id', header: 'Quote' },
      { accessorKey: 'projectId', header: 'Project' },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <Badge tone={statusTone[row.original.status]}>{row.original.status}</Badge>
      },
      {
        accessorKey: 'total',
        header: 'Amount',
        cell: ({ row }) => `${row.original.currency} ${row.original.total.toFixed(2)}`
      },
      {
        accessorKey: 'marginPercent',
        header: 'Margin',
        cell: ({ row }) => <MarginBadge value={row.original.marginPercent} />
      },
      {
        accessorKey: 'updatedAt',
        header: 'Updated',
        cell: ({ row }) => new Date(row.original.updatedAt).toLocaleString()
      }
    ],
    []
  );

  return <DataTable data={quotes} columns={columns} loading={loading} onRowClick={(row) => onSelect?.(row.id)} />;
}
