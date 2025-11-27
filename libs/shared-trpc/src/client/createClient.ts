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
        headers() {
          return options.headers ?? {};
        }
      })
    ]
  });
};
