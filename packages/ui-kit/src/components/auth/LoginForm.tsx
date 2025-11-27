import React, { useState } from 'react';

export type LoginFormProps = {
  defaultEmail?: string;
  defaultTenantId?: string;
  loading?: boolean;
  error?: string | null;
  onSubmit: (values: { email: string; tenantId: string }) => void | Promise<void>;
};

export function LoginForm({
  defaultEmail = '',
  defaultTenantId = '',
  loading = false,
  error,
  onSubmit
}: LoginFormProps): JSX.Element {
  const [email, setEmail] = useState(defaultEmail);
  const [tenantId, setTenantId] = useState(defaultTenantId);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await onSubmit({ email, tenantId });
  };

  return (
    <form
      onSubmit={handleSubmit}
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
  );
}
