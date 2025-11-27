'use client';

import { useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

interface SubdomainPageProps {
  params: { subdomain: string };
}

export default function SubdomainLanding({ params }: SubdomainPageProps) {
  const [email, setEmail] = useState('demo@example.com');
  const [session, setSession] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleLogin = async () => {
    setStatus('Signing in…');
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tenantId: params.subdomain })
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.message ?? 'Login failed');
      }
      document.cookie = `Authorization=${json.jwt}; path=/`;
      setSession(json.id);
      setStatus('Session issued');
    } catch (err) {
      setStatus((err as Error).message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-slate-900">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Tenant portal</h1>
        <p className="mt-2 text-sm text-slate-600">Subdomain: {params.subdomain}</p>

        <div className="mt-6 space-y-3 text-sm">
          <label className="block text-slate-700">
            Email
            <input
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </label>
          <button
            type="button"
            className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            onClick={handleLogin}
          >
            Sign in
          </button>
          {status && <p className="text-slate-600">Status: {status}</p>}
          {session && <p className="text-slate-600">Session ID: {session}</p>}
        </div>
      </div>
    </main>
  );
}
