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
 * @param children - The React nodes to render inside the layout's body within Providers
 * @returns The top-level HTML element containing the body and Providers-wrapped content
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
