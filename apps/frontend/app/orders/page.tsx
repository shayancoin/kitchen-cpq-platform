'use client';

import { useState } from 'react';
import { Card, Input, SectionHeader } from '@kitchen-cpq/ui-kit';
import { AppChrome } from '../../src/components/AppChrome';
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
    <AppChrome>
      <div className="space-y-5">
        <SectionHeader
          label="Orders"
          title="Order workflow timeline"
          description="Mirrors Temporal workflow steps (quote confirmed → CAD/CAM → manufacturing)."
          actions={
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-600" htmlFor="projectId">
                Project ID
              </label>
              <Input id="projectId" value={projectId} onChange={(e) => setProjectId(e.target.value)} className="w-40" />
            </div>
          }
        />

        <Card title="Timeline">
          {isLoading && <p className="text-sm text-slate-600">Loading timeline…</p>}
          {!isLoading && (
            <ol className="relative ml-4 space-y-4 border-l border-slate-200">
              {timeline.map((event) => (
                <li key={event.label} className="pl-4">
                  <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-indigo-500" />
                  <p className="text-sm font-semibold text-slate-900">{event.label}</p>
                  <p className="text-xs text-slate-500">{new Date(event.at).toLocaleTimeString()}</p>
                </li>
              ))}
            </ol>
          )}
        </Card>
      </div>
    </AppChrome>
  );
}
