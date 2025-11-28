import type { ReactNode } from 'react';
import { Badge } from '../primitives/Badge';

export function MarginBadge({ value }: { value: number }) {
  let tone: Parameters<typeof Badge>[0]['tone'] = 'neutral';
  if (value >= 22) tone = 'success';
  else if (value >= 15) tone = 'warning';
  else tone = 'error';

  return <Badge tone={tone}>{value.toFixed(0)}% margin</Badge>;
}

export function ConstraintBadge({
  severity,
  count,
  label
}: {
  severity: 'ok' | 'warning' | 'error';
  count?: number;
  label?: ReactNode;
}) {
  const tone = severity === 'error' ? 'error' : severity === 'warning' ? 'warning' : 'success';
  return <Badge tone={tone}>{label ?? `${count ?? 0} constraints`}</Badge>;
}
