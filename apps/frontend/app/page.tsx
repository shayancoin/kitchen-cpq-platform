export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-slate-900">
      <h1 className="text-3xl font-semibold">kitchen-cpq-platform — Frontend Shell</h1>
      <p className="mt-4 text-sm text-slate-600">
        Tenant-aware CPQ &amp; Studio console (routes stubbed).
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="/login"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Login
        </a>
        <a
          href="/cpq/dashboard"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
        >
          Enter CPQ
        </a>
      </div>
    </main>
  );
}
