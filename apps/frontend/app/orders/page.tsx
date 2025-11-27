'use client';

import { useState } from 'react';
import { trpc } from '../../src/lib/trpc-client';

type OrderEvent = { label: string; at: string };

/**
 * Render the Orders page showing a project-specific order workflow timeline.
 *
 * Fetches the timeline for the current Project ID (editable via an input) and refreshes the data every 4 seconds; shows a loading state while awaiting data and displays events with timestamps when available.
 *
 * @returns A React element that displays the project ID input and the order workflow timeline.
 */
export default function OrdersPage() {
  const [projectId, setProjectId] = useState('demo-project');

  const { data, isLoading } = trpc.reporting.orderTimeline.useQuery(
    { projectId },
    { refetchInterval: 4000 }
  );

  const timeline: OrderEvent[] = data?.timeline ?? [];

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-10">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Orders</p>
          <h1 className="text-2xl font-semibold text-slate-900">Order workflow timeline</h1>
          <p className="text-sm text-slate-600">
            Mirrors Temporal workflow steps (quote confirmed → CAD/CAM → manufacturing).
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600" htmlFor="projectId">
            Project ID
          </label>
          <input
            id="projectId"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-inner focus:border-slate-400 focus:outline-none"
          />
        </div>
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        {isLoading && <p className="text-sm text-slate-600">Loading timeline…</p>}
        {!isLoading && (
          <ol className="relative ml-4 space-y-4 border-l border-slate-200">
            {timeline.map((event) => (
              <li key={event.label} className="pl-4">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-indigo-500" />
                <p className="text-sm font-semibold text-slate-900">{event.label}</p>
                <p className="text-xs text-slate-500">
                  {new Date(event.at).toLocaleTimeString()}
                </p>
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
}