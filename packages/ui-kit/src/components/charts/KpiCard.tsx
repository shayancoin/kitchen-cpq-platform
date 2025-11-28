import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Card } from '../primitives/Card';

type KpiCardProps = {
  label: string;
  value: ReactNode;
  delta?: string;
  trend?: { label: string; value: number }[];
};

export function KpiCard({ label, value, delta, trend }: KpiCardProps) {
  return (
    <Card title={label} className="h-full">
      <div className="space-y-3">
        <div className="text-3xl font-semibold text-[var(--brand-primary,#0f172a)]">{value}</div>
        {delta ? <div className="text-xs text-slate-500">{delta}</div> : null}
        {trend ? <MiniTrend data={trend} /> : null}
      </div>
    </Card>
  );
}

function MiniTrend({ data }: { data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="flex items-end gap-1">
      {data.map((point) => (
        <div key={point.label} className="flex-1">
          <div
            className="w-full rounded-sm bg-[var(--brand-accent,#f97316)]"
            style={{ height: `${(point.value / max) * 48 || 4}px` }}
            title={`${point.label}: ${point.value}`}
          />
        </div>
      ))}
    </div>
  );
}
