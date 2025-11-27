import type { ReactNode } from 'react';

export interface ShellProps {
  children: ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-slate-900">
      {children}
    </div>
  );
}
