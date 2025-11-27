'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { createTrpcClient, trpc } from '../src/lib/trpc-client';

/**
 * Wraps `children` with TRPC and TanStack React Query providers so they share a common client and query context.
 *
 * The internal QueryClient is configured to refetch queries every 4000 ms and not refetch on window focus.
 *
 * @param children - The React nodes to render inside the providers.
 * @returns A React element that provides TRPC and React Query contexts to `children`.
 */
export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchInterval: 4000,
            refetchOnWindowFocus: false
          }
        }
      })
  );

  const [trpcClient] = useState(() => createTrpcClient());

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}