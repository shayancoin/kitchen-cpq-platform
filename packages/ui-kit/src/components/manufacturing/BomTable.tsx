import type { BomItem } from '@kitchen-cpq/shared-types';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../data/DataTable';

const columns: ColumnDef<BomItem>[] = [
  { accessorKey: 'sku', header: 'SKU' },
  { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'quantity', header: 'Qty', cell: ({ getValue }) => Number(getValue<number>()).toFixed(0) },
  { accessorKey: 'uom', header: 'UoM' }
];

export function BomTable({ items }: { items: BomItem[] }) {
  return <DataTable data={items} columns={columns} dense emptyState="No BOM items" />;
}
