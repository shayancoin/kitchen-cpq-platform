import './globals.css';
import type { ReactNode } from 'react';
import { Providers } from './providers';

export const metadata = {
  title: 'Kitchen CPQ Frontend',
  description: 'Multi-tenant CPQ + Studio console'
};

/**
 * Application root layout that provides the top-level HTML structure and wraps page content with Providers.
 *
 * @param children - The application content to render inside the body; it will be wrapped by the Providers component.
 * @returns The top-level `html` and `body` elements with styling, containing the provided `children` wrapped by `Providers`.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-slate-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}