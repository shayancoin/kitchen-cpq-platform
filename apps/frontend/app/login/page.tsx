'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('demo@example.com');
  const [tenantId, setTenantId] = useState('tenant-demo');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      setNextPath(url.searchParams.get('next'));
    }
  }, []);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, tenantId })
      });
      if (!res.ok) {
        throw new Error(`Login failed: ${res.status}`);
      }
      const session = await res.json();
      document.cookie = `auth_token=${session.jwt}; path=/; SameSite=Lax`;
      router.push(nextPath ?? '/cpq/dashboard');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-lg"
      >
        <div className="space-y-1">
          <p className="text-sm text-slate-500">Kitchen CPQ</p>
          <h1 className="text-2xl font-semibold text-slate-900">Sign in</h1>
        </div>
        <label className="block space-y-1">
          <span className="text-sm text-slate-700">Email</span>
          <input
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
          />
        </label>
        <label className="block space-y-1">
          <span className="text-sm text-slate-700">Tenant</span>
          <input
            className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
            value={tenantId}
            onChange={(e) => setTenantId(e.target.value)}
            name="tenant"
            required
          />
        </label>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
        <p className="text-xs text-slate-500">
          Issues a short-lived JWT from the API and stores it in an auth_token cookie for tRPC calls.
        </p>
      </form>
    </main>
  );
}
