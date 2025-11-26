/**
 * CI guardrails for latency budgets. Extend with real metrics ingestion when available.
 */

interface LatencyBudget {
  name: string;
  targetP95Ms: number;
  measuredP95Ms?: number;
}

const parseEnvNumber = (value: string | undefined): number | undefined => {
  if (!value) return undefined;
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const budgets: LatencyBudget[] = [
  {
    name: 'WorkflowService.StartOrderWorkflow.ACK',
    targetP95Ms: 150,
    measuredP95Ms: parseEnvNumber(process.env.WORKFLOW_ACK_P95_MS),
  },
];

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
    budgets.map((b) => `${b.name}: target ${b.targetP95Ms}ms${b.measuredP95Ms ? `, measured ${b.measuredP95Ms}ms` : ''}`).join('\n'),
  );
}
