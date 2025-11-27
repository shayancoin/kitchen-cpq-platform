'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { createTrpcClient, trpc } from '../src/lib/trpc-client';

/**
 * Provides TRPC and React Query context to descendant components.
 *
 * The React Query client is configured to refetch every 4000ms and to not refetch on window focus.
 *
 * @param children - Elements to render within the TRPC and QueryClient providers
 * @returns A provider tree that supplies the TRPC client and the configured React Query client to its children
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