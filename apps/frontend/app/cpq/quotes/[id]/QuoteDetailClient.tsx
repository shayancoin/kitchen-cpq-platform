'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { ConstraintSummary, CpqSummaryBarState, ParametricState, QuoteLineItem, QuoteSummary } from '@kitchen-cpq/shared-types';
import { createKitchenScene, updateSceneFromState, type SceneHandle } from '@kitchen-cpq/3d-engine';
import {
  Button,
  Card,
  ConstraintBadge as ConstraintBadgeUi,
  CpqSummaryBar,
  DataTable,
  MarginBadge,
  SectionHeader,
  ThreePaneLayout
} from '@kitchen-cpq/ui-kit';
import { ColumnDef } from '@tanstack/react-table';
import { trpc } from '../../../../src/lib/trpc-client';
import { AppChrome } from '../../../../src/components/AppChrome';

type QuoteDetailClientProps = {
  quote: QuoteSummary;
  state: ParametricState;
};

export function QuoteDetailClient({ quote, state }: QuoteDetailClientProps) {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<SceneHandle | null>(null);
  const constraintSummary: ConstraintSummary | undefined = state.constraints ?? undefined;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || sceneRef.current) return;
    (async () => {
      sceneRef.current = await createKitchenScene(canvas, state);
    })();
    return () => {
      sceneRef.current?.dispose?.();
      sceneRef.current = null;
    };
  }, [state]);

  useEffect(() => {
    if (!sceneRef.current) return;
    void updateSceneFromState(sceneRef.current, state);
  }, [state]);

  const initialSummary: CpqSummaryBarState = {
    total: quote.total,
    tax: quote.tax,
    marginPercent: quote.marginPercent,
    currency: quote.currency,
    hasBlockingErrors: constraintSummary?.hasBlockingErrors ?? false
  };

  const { data: summary } = trpc.ui.getCpqSummaryBar.useQuery(
    { projectId: quote.projectId },
    { initialData: initialSummary, refetchInterval: 4000 }
  );

  const columns = useMemo<ColumnDef<QuoteLineItem>[]>(
    () => [
      { accessorKey: 'sku', header: 'SKU' },
      { accessorKey: 'description', header: 'Description' },
      { accessorKey: 'quantity', header: 'Qty', cell: ({ row }) => row.original.quantity.toFixed(0) },
      { accessorKey: 'unitPrice', header: 'Unit', cell: ({ row }) => row.original.unitPrice.toFixed(2) },
      {
        accessorKey: 'marginPercent',
        header: 'Margin',
        cell: ({ row }) => <MarginBadge value={row.original.marginPercent} />
      }
    ],
    []
  );

  return (
    <AppChrome>
      <div className="space-y-5">
        <SectionHeader
          label="Quote"
          title={`Quote ${quote.id}`}
          description={`Project ${quote.projectId} · Catalog ${quote.catalogVersion.id}`}
          actions={
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => router.push('/cpq/quotes')}>
                Back to quotes
              </Button>
              <Button>Send for approval</Button>
            </div>
          }
        />

        <ThreePaneLayout
          left={
            <div className="space-y-3">
              <Card title="Metadata" subtitle="Scenario tabs placeholder">
                <dl className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <dt>Status</dt>
                    <dd className="font-semibold capitalize">{quote.status}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>Margin</dt>
                    <dd>
                      <MarginBadge value={quote.marginPercent} />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>Updated</dt>
                    <dd>{new Date(quote.updatedAt).toLocaleString()}</dd>
                  </div>
                </dl>
              </Card>
              <Card title="Constraints" subtitle="From kernel validation">
                <ConstraintBadgeUi
                  severity={constraintSummary?.hasBlockingErrors ? 'error' : 'ok'}
                  count={constraintSummary?.violations?.length ?? 0}
                  label={constraintSummary?.hasBlockingErrors ? 'Blocking' : 'No blockers'}
                />
                {constraintSummary?.violations?.length ? (
                  <ul className="mt-2 space-y-1 text-xs text-red-700">
                    {constraintSummary.violations.map((v) => (
                      <li key={v.code}>{v.message}</li>
                    ))}
                  </ul>
                ) : null}
              </Card>
              {summary ? (
                <Card title="Summary">
                  <CpqSummaryBar state={summary} />
                </Card>
              ) : null}
            </div>
          }
          center={
            <Card title="3D preview" subtitle="Read-only from parametric state">
              <canvas ref={canvasRef} width={800} height={480} className="h-[360px] w-full rounded-lg border border-slate-200" />
            </Card>
          }
          right={
            <div className="space-y-3">
              <Card title="Line items" subtitle="Editable in CPQ service">
                <DataTable data={quote.lineItems} columns={columns} dense />
              </Card>
              <Card title="Actions">
                <div className="space-y-2 text-sm text-slate-700">
                  <p>• Price now</p>
                  <p>• Send for approval</p>
                  <p>• Hand off to manufacturing</p>
                </div>
              </Card>
            </div>
          }
        />
      </div>
    </AppChrome>
  );
}
