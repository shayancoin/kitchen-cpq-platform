import { cookies } from 'next/headers';
import { createTrpcClient } from '@kitchen-cpq/shared-trpc';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export const getTrpcClient = () => {
  const cookieStore = cookies as unknown as () => { get?: (name: string) => { value?: string } | undefined };
  const token = cookieStore()?.get?.('auth_token')?.value;
  return createTrpcClient({
    baseUrl: API_BASE,
    headers: token ? { authorization: `Bearer ${token}` } : undefined
  });
};
