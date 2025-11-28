import { getTrpcClient } from '../../../src/lib/trpc-server';
import { DashboardClient } from './DashboardClient';

export default async function CpqDashboardPage() {
  const trpc = await getTrpcClient();
  const [kpis, badge, quotes] = await Promise.all([
    trpc.ui.getDashboardKpis.query(),
    trpc.ui.getConstraintBadge.query({ projectId: 'demo-project' }),
    trpc.cpq.listQuotes.query()
  ]);

  return <DashboardClient initialKpis={kpis} initialBadge={badge} initialQuotes={quotes} />;
}
