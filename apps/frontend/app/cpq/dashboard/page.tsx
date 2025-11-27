import { Card, CardContent, CardHeader, CardTitle } from '../../../src/components/ui/card';
import { getTrpcClient } from '../../../src/lib/trpc-server';

export default async function CpqDashboardPage() {
  const trpc = getTrpcClient();
  const [quote, badge] = await Promise.all([
    trpc.cpq.getQuoteForProject.query({ projectId: 'demo-project' }),
    trpc.ui.getConstraintBadge.query({ projectId: 'demo-project' })
  ]);

  return (
    <main className="p-6 space-y-4">
      <div>
        <p className="text-sm text-slate-500">Overview</p>
        <h1 className="text-2xl font-semibold text-slate-900">CPQ Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Active Quote</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold">${quote?.total.toFixed(2) ?? '0.00'}</div>
            <p className="text-sm text-slate-500">Status: {quote?.status ?? 'draft'}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Constraint Badge</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">{badge.primaryMessage}</p>
            <p className="text-sm text-slate-500">Severity: {badge.severity}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Catalog Version</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">{quote?.catalogVersion.id ?? 'catalog-001'}</p>
            <p className="text-sm text-slate-500">Tenant scoped</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
