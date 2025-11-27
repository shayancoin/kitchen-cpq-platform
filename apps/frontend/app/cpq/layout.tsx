import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '../../src/lib/ui';

const navItems = [
  { href: '/cpq/dashboard', label: 'Dashboard' },
  { href: '/cpq/quotes', label: 'Quotes' },
  { href: '/cpq/catalog', label: 'Catalog' },
  { href: '/cpq/configure/demo-project', label: 'Configure' }
];

export default function CpqLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell">
      <aside className="hidden w-64 flex-shrink-0 border-r border-slate-200 bg-white/70 px-4 py-6 lg:block">
        <div className="mb-6">
          <p className="text-xs uppercase text-slate-500">CPQ</p>
          <h2 className="text-lg font-semibold text-slate-900">Kitchen Platform</h2>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
