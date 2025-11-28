'use client';

import { useState } from 'react';
import type { CatalogVersion } from '@kitchen-cpq/shared-types';
import { Button, Card, DataTable, SectionHeader, TextArea } from '@kitchen-cpq/ui-kit';
import { ColumnDef } from '@tanstack/react-table';
import { trpc } from '../../src/lib/trpc-client';
import { AppChrome } from '../../src/components/AppChrome';

type ParameterRow = { name: string; range: string; default: string };

const parameterColumns: ColumnDef<ParameterRow>[] = [
  { accessorKey: 'name', header: 'Parameter' },
  { accessorKey: 'range', header: 'Domain' },
  { accessorKey: 'default', header: 'Default' }
];

const versionColumns: ColumnDef<CatalogVersion>[] = [
  { accessorKey: 'id', header: 'Version' },
  { accessorKey: 'label', header: 'Label' },
  { accessorKey: 'createdAt', header: 'Created', cell: ({ row }) => new Date(row.original.createdAt).toLocaleString() }
];

const defaultRules = `rule island_clearances {
  require distance(island, wall) >= 1000mm
  require triangle(appliance.sink, appliance.range, appliance.fridge) <= 6m
}`;

export function CatalogClient({ initialVersions }: { initialVersions: CatalogVersion[] }) {
  const { data: versions = [] } = trpc.catalogAdmin.listCatalogVersions.useQuery(undefined, {
    initialData: initialVersions,
    refetchInterval: 10000
  });
  const [rules, setRules] = useState(defaultRules);
  const params: ParameterRow[] = [
    { name: 'base.width', range: '300–1200mm', default: '762' },
    { name: 'base.depth', range: '560–700mm', default: '610' },
    { name: 'wall.height', range: '600–1100mm', default: '914' }
  ];

  return (
    <AppChrome>
      <div className="space-y-6">
        <SectionHeader
          label="Catalog"
          title="LayEdit-style catalog & rules editor"
          description="Stubbed view showing catalog versions, parameter domains, and a rules DSL editor."
          actions={<Button variant="primary">Publish draft</Button>}
        />

        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card title="Rules DSL" subtitle="Monaco placeholder">
            <TextArea
              rows={10}
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              className="font-mono"
            />
            <div className="mt-2 flex items-center gap-2">
              <Button variant="outline">Validate</Button>
              <Button variant="ghost">Run test suite</Button>
            </div>
          </Card>
          <Card title="Parameter domains" subtitle="Shared-types driven">
            <DataTable data={params} columns={parameterColumns} dense />
          </Card>
        </div>

        <Card title="Catalog versions" subtitle="catalogAdmin.listCatalogVersions">
          <DataTable data={versions} columns={versionColumns} />
        </Card>
      </div>
    </AppChrome>
  );
}
