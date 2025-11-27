import { createTrpcClient } from '@kitchen-cpq/shared-trpc';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export const getTrpcClient = () => createTrpcClient({ baseUrl: API_BASE });
