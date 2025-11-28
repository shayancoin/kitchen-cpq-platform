import { getTrpcClient } from '../../src/lib/trpc-server';
import { CatalogClient } from './CatalogClient';

export default async function CatalogPage() {
  const trpc = getTrpcClient();
  const versions = await trpc.catalogAdmin.listCatalogVersions.query();
  return <CatalogClient initialVersions={versions} />;
}
