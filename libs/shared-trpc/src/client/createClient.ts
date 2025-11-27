import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../routers';

type CreateClientOptions = {
  baseUrl?: string;
  headers?: Record<string, string>;
};

export const createTrpcClient = (options: CreateClientOptions = {}) => {
  const url = `${options.baseUrl ?? 'http://localhost:3001'}/trpc`;
  return createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url,
        fetch: (input, init) =>
          fetch(input, {
            ...init,
            credentials: 'include'
          }),
        headers() {
          // If running in the browser and a token cookie exists, attach Authorization for parity with server-side usage.
          const cookieHeader =
            typeof document !== 'undefined'
              ? document.cookie
                  .split(';')
                  .map((c) => c.trim())
                  .find((c) => c.startsWith('auth_token='))
              : undefined;
          const token = cookieHeader?.split('=')[1];
          return token
            ? { ...options.headers, authorization: `Bearer ${token}` }
            : options.headers ?? {};
        }
      })
    ]
  });
};
