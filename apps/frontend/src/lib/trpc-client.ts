'use client';

import { createTRPCReact } from '@trpc/react-query';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@kitchen-cpq/shared-trpc';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

const getAuthHeaders = () => {
  if (typeof document === 'undefined') return undefined;
  const token = document.cookie
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith('auth_token='))
    ?.split('=')[1];
  return token ? { authorization: `Bearer ${token}` } : undefined;
};

export const trpc = createTRPCReact<AppRouter>();

export const createTrpcClient = () =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: `${API_BASE}/trpc`,
        fetch(input, init) {
          return fetch(input, { ...init, credentials: 'include' });
        },
        headers() {
          return getAuthHeaders();
        }
      })
    ]
  });
