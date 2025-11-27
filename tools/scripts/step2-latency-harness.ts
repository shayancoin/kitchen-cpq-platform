/**
 * Synthetic “drag cabinet” harness for Step 2.
 * Run after starting:
 *  - services/param-kernel-service (default :3012)
 *  - services/configurator-session-service (default :3013)
 *  - services/optimization-engine-service (default :8001) optional
 */
import { performance } from 'perf_hooks';

const BASE = process.env.CFG_SESSION_URL ?? 'http://localhost:3013';
const PROJECT_ID = process.env.PROJECT_ID ?? 'perf-demo';

/**
 * Sends a single mutation request to set `cabinets.cab-1.position` and measures the request latency.
 *
 * @param position - The numeric position to set for `cabinets.cab-1.position`
 * @returns The elapsed time in milliseconds for the HTTP request
 */
async function mutateOnce(position: number): Promise<number> {
  const start = performance.now();
  const token = process.env.AUTH_TOKEN;
  await fetch(`${BASE}/sessions/mutate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({
      projectId: PROJECT_ID,
      deltas: [{ path: 'cabinets.cab-1.position', value: position }],
      requestGallery: false
    })
  });
  return performance.now() - start;
}

/**
 * Computes the 95th percentile of a numeric sample set.
 *
 * @param samples - Array of numeric samples (for example, latency measurements) to compute the percentile from
 * @returns The 95th percentile value from `samples`; `0` if `samples` is empty
 */
function p95(samples: number[]): number {
  const sorted = [...samples].sort((a, b) => a - b);
  const n = sorted.length;
  if (n === 0) return 0;
  const pos = (n - 1) * 0.95;
  const lower = Math.floor(pos);
  const upper = Math.ceil(pos);
  if (lower === upper) return sorted[lower];
  const weight = pos - lower;
  return sorted[lower] * (1 - weight) + sorted[upper] * weight;
}

/**
 * Runs a short latency benchmark of eight parameter mutation requests and prints a JSON report of the results.
 *
 * The printed report is a JSON object with the following fields:
 * - `name`: metric name (`configurator.mutateParameters`)
 * - `samples`: array of measured durations in milliseconds for each mutation request
 * - `p95`: 95th percentile of the `samples`
 * - `timestamp`: ISO 8601 timestamp when the report was generated
 *
 * The function performs eight mutation requests with positions 0, 50, …, 350 and writes the report to stdout.
 */
async function run() {
  const samples: number[] = [];
  for (let i = 0; i < 8; i++) {
    samples.push(await mutateOnce(i * 50));
  }
  const report = {
    name: 'configurator.mutateParameters',
    samples,
    p95: p95(samples),
    timestamp: new Date().toISOString()
  };
  console.log(JSON.stringify(report, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});