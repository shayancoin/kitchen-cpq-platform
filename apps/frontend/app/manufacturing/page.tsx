'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createTrpcClient } from '@kitchen-cpq/shared-trpc';
import type { ManufacturingJob } from '@kitchen-cpq/shared-types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export default function ManufacturingPage() {
  const trpc = useMemo(() => createTrpcClient({ baseUrl: API_BASE }), []);

  const { data, isLoading, error } = useQuery({
    queryKey: ['manufacturing-jobs'],
    queryFn: () => trpc.reporting.getManufacturingJobs.query(),
    refetchInterval: 3000
  });

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10">
      <header>
        <p className="text-xs uppercase tracking-wide text-slate-500">Manufacturing</p>
        <h1 className="text-2xl font-semibold text-slate-900">
          Factory queue (Temporal/Kafka stub)
        </h1>
        <p className="text-sm text-slate-600">
          Polls the API reporting endpoint to show job states derived from workflow events.
        </p>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        {isLoading && <p className="text-sm text-slate-600">Loading jobs…</p>}
        {error && (
          <p className="text-sm text-red-600">Failed to load jobs: {error.message}</p>
        )}
        {!isLoading && !error && (
          <ul className="space-y-3">
            {(data?.jobs ?? []).map((job) => (
              <li
                key={job.id}
                className="flex items-center justify-between rounded-md border border-slate-100 px-3 py-2"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{job.id}</p>
                  <p className="text-xs text-slate-500">
                    Updated {new Date(job.updatedAt).toLocaleTimeString()}
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {job.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
