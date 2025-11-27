'use client';

import React, { useMemo } from 'react';
import type { QuoteSummary } from '@kitchen-cpq/shared-types';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

type QuoteTableProps = {
  quotes: QuoteSummary[];
  loading?: boolean;
  onSelect?: (quoteId: string) => void;
};

export function QuoteTable({ quotes, loading = false, onSelect }: QuoteTableProps): JSX.Element {
  const columns = useMemo<ColumnDef<QuoteSummary>[]>(
    () => [
      { accessorKey: 'id', header: 'Quote' },
      { accessorKey: 'status', header: 'Status' },
      {
        accessorKey: 'total',
        header: 'Total',
        cell: ({ row }) => `${row.original.currency} ${row.original.total.toFixed(2)}`
      },
      { accessorKey: 'updatedAt', header: 'Updated' }
    ],
    []
  );

  const table = useReactTable({
    data: quotes,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  if (loading) {
    return <div className="rounded-md border border-slate-200 bg-white p-4 text-sm">Loading quotes…</div>;
  }

  if (!quotes.length) {
    return <div className="rounded-md border border-dashed border-slate-300 bg-white p-6 text-sm">No quotes found.</div>;
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-3">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-slate-100">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-slate-50"
              onClick={() => onSelect?.(row.original.id)}
              role={onSelect ? 'button' : undefined}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
