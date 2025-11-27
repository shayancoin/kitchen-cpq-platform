import { getTrpcClient } from '../../../../src/lib/trpc-server';

interface ConfigurePageProps {
  params: { projectId: string };
}

export default async function ConfigureProjectPage({ params }: ConfigurePageProps) {
  const trpc = getTrpcClient();
  const { state } = await trpc.configurator.getSessionState.query({ projectId: params.projectId });

  return (
    <main className="p-6 space-y-3">
      <div>
        <p className="text-sm text-slate-500">Configurator</p>
        <h2 className="text-2xl font-semibold text-slate-900">Project {params.projectId}</h2>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-600">
          Catalog version: <span className="font-semibold">{state.catalogVersionId}</span>
        </p>
        <p className="text-sm text-slate-600">
          Cabinets: <span className="font-semibold">{state.cabinets.length}</span>
        </p>
      </div>
      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
        Embed 3D configurator here using packages/3d-engine (stub for Step 2/3).
      </div>
    </main>
  );
}
