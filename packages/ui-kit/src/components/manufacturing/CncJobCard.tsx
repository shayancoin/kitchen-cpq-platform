import type { ManufacturingJob } from '@kitchen-cpq/shared-types';
import { Badge } from '../primitives/Badge';
import { Card } from '../primitives/Card';

const statusTone: Record<ManufacturingJob['status'], 'warning' | 'info' | 'success' | 'error' | 'neutral'> = {
  pending: 'warning',
  scheduled: 'info',
  in_progress: 'info',
  completed: 'success',
  failed: 'error'
};

export function CncJobCard({ job }: { job: ManufacturingJob }) {
  return (
    <Card
      title={`Job ${job.id}`}
      subtitle={`Project ${job.projectId}`}
      actions={<Badge tone={statusTone[job.status]}>{job.status.replace('_', ' ')}</Badge>}
    >
      <dl className="grid grid-cols-2 gap-3 text-xs text-slate-600">
        <div>
          <dt className="text-[11px] uppercase tracking-wide text-slate-500">Catalog</dt>
          <dd className="font-semibold text-[var(--brand-primary,#0f172a)]">{job.catalogVersion.id}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-wide text-slate-500">Updated</dt>
          <dd className="font-semibold text-[var(--brand-primary,#0f172a)]">
            {new Date(job.updatedAt).toLocaleTimeString()}
          </dd>
        </div>
        {job.notes ? (
          <div className="col-span-2">
            <dt className="text-[11px] uppercase tracking-wide text-slate-500">Notes</dt>
            <dd className="text-slate-700">{job.notes}</dd>
          </div>
        ) : null}
      </dl>
    </Card>
  );
}
