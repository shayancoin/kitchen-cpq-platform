'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoginForm } from '@kitchen-cpq/ui-kit';

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

  const onSubmit = async ({ email: nextEmail, tenantId: nextTenant }: { email: string; tenantId: string }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: nextEmail, tenantId: nextTenant })
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
      <LoginForm
        defaultEmail={email}
        defaultTenantId={tenantId}
        loading={loading}
        error={error ?? undefined}
        onSubmit={(values: { email: string; tenantId: string }) => {
          setEmail(values.email);
          setTenantId(values.tenantId);
          return onSubmit(values);
        }}
      />
    </main>
  );
}
