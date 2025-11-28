import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export function ThreePaneLayout({
  left,
  center,
  right,
  className
}: {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('grid gap-4 lg:grid-cols-[320px_1fr_360px] xl:grid-cols-[360px_1fr_400px]', className)}>
      <div className="space-y-3">{left}</div>
      <div className="space-y-3">{center}</div>
      <div className="space-y-3">{right}</div>
    </div>
  );
}
