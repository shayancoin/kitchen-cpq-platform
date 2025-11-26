import type { ReactNode } from 'react';

export const metadata = {
  title: 'Kitchen CPQ Frontend',
  description: 'Multi-tenant CPQ + Studio console'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

