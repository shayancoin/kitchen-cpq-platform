'use client';

import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  loading?: boolean;
  emptyState?: ReactNode;
  onRowClick?: (row: T) => void;
  dense?: boolean;
};

export function DataTable<T>({ data, columns, loading, emptyState, onRowClick, dense }: DataTableProps<T>) {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  if (loading) {
    return <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">Loading…</div>;
  }

  if (!data.length) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">
        {emptyState ?? 'No records found.'}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className={cn('w-full border-collapse text-left text-sm', dense ? 'text-xs' : 'text-sm')}>
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-3 py-2">
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
              className={cn('hover:bg-slate-50', onRowClick ? 'cursor-pointer' : '')}
              onClick={() => (onRowClick ? onRowClick(row.original) : undefined)}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-2 align-middle">
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
