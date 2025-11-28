import * as fs from 'fs';
import * as path from 'path';

interface LatencyBudget {
  name: string;
  targetP95Ms: number;
  measuredP95Ms?: number;
}

type Manifest = {
  endpoints: { name: string; budgetMs: number }[];
};

const parseEnvNumber = (value: string | undefined): number | undefined => {
  if (!value) return undefined;
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const slugify = (name: string): string => name.replace(/[^a-z0-9]+/gi, '_').toUpperCase();

const loadManifest = (): Manifest => {
  const manifestPath = path.join(__dirname, 'latency-budgets.json');
  const content = fs.readFileSync(manifestPath, 'utf8');
  return JSON.parse(content) as Manifest;
};

const manifest = loadManifest();

const expectedEndpoints = new Set([
  'auth.getSession',
  'tenancy.getCurrentTenant',
  'configurator.mutateParameters',
  'configurator.requestLayoutVariants',
  'configurator.validateDesign',
  'cpq.listQuotes',
  'cpq.getQuote',
  'cpq.priceDelta',
  'cpq.getQuoteForProject',
  'ui.getConstraintBadge',
  'ui.getCpqSummaryBar',
  'ui.getDashboardKpis',
  'ui.getTenantBranding',
  'auth.getCurrentUser',
  'catalogAdmin.listCatalogVersions',
  'reporting.getManufacturingJobs',
  'workflow.StartOrderWorkflow.ACK',
  'cadcam.GenerateArtifacts',
  'ai.design.interpretIntent',
  'ai.design.chat',
  'ai.manufacturing.analyst',
]);

const manifestNames = new Set(manifest.endpoints.map((e) => e.name));
const missingInManifest = Array.from(expectedEndpoints).filter((name) => !manifestNames.has(name));

if (missingInManifest.length) {
  throw new Error(
    `Latency manifest is missing required endpoints: ${missingInManifest.join(', ')}. Update tools/scripts/latency-budgets.json to include them.`,
  );
}

const budgets: LatencyBudget[] = manifest.endpoints.map((endpoint) => ({
  name: endpoint.name,
  targetP95Ms: endpoint.budgetMs,
  measuredP95Ms: parseEnvNumber(process.env[`LATENCY_${slugify(endpoint.name)}`]),
}));

function assertBudgets(entries: LatencyBudget[]): void {
  const failures = entries
    .filter((b) => Number.isFinite(b.measuredP95Ms))
    .filter((b) => b.measuredP95Ms! > b.targetP95Ms)
    .map((b) => `${b.name} measured ${b.measuredP95Ms}ms > target ${b.targetP95Ms}ms`);

  if (failures.length) {
    throw new Error(`Latency budget violations:\n${failures.join('\n')}`);
  }
}

const outputJson = process.env.OUTPUT_JSON === 'true';

assertBudgets(budgets);

if (outputJson) {
  console.log(JSON.stringify({ budgets, timestamp: new Date().toISOString() }));
} else {
  console.log(
    budgets
      .map((b) => `${b.name}: target ${b.targetP95Ms}ms${b.measuredP95Ms ? `, measured ${b.measuredP95Ms}ms` : ''}`)
      .join('\n'),
  );
}
