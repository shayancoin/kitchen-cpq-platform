'use client';

import { BomTable, Card, CncJobCard, SectionHeader } from '@kitchen-cpq/ui-kit';
import { AppChrome } from '../../src/components/AppChrome';
import type { BomItem } from '@kitchen-cpq/shared-types';
import { trpc } from '../../src/lib/trpc-client';

const demoBom: BomItem[] = [
  { id: 'bom-1', sku: 'PANEL-3/4', description: '3/4" panel', quantity: 12, uom: 'panel' },
  { id: 'bom-2', sku: 'HARDWARE-HINGE', description: 'Soft-close hinge', quantity: 24, uom: 'hardware' }
];

export default function ManufacturingPage() {
  const { data } = trpc.reporting.getManufacturingJobs.useQuery(undefined, { refetchInterval: 4000 });
  const jobs = data?.jobs ?? [];

  return (
    <AppChrome>
      <div className="space-y-6">
        <SectionHeader
          label="Manufacturing"
          title="Order queues & job status"
          description="Temporal/Kafka-backed feed of jobs with BOM preview."
        />

        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <Card title="Job queue" subtitle="reporting.getManufacturingJobs">
            <div className="grid gap-3 md:grid-cols-2">
              {jobs.map((job) => (
                <CncJobCard key={job.id} job={job} />
              ))}
            </div>
          </Card>
          <Card title="BOM preview" subtitle="Stubbed items">
            <BomTable items={demoBom} />
          </Card>
        </div>
      </div>
    </AppChrome>
  );
}
