import type { ReactNode } from 'react';

export interface ShellProps {
  children: ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {children}
    </div>
  );
}

