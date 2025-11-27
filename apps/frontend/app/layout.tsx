import './globals.css';
import type { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'Kitchen CPQ Frontend',
  description: 'Multi-tenant CPQ + Studio console'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-slate-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
