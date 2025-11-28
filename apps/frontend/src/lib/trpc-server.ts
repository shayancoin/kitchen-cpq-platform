import { cookies } from 'next/headers';
import { createTrpcClient } from '@kitchen-cpq/shared-trpc';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export const getTrpcClient = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  return createTrpcClient({
    baseUrl: API_BASE,
    headers: token ? { authorization: `Bearer ${token}` } : undefined
  });
};
