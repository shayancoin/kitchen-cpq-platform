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
      tenantId: 'tenant-demo',
      userId: 'user-demo',
      projectId: PROJECT_ID,
      deltas: [{ path: 'cabinets.cab-1.position', value: position }],
      requestGallery: false
    })
  });
  return performance.now() - start;
}

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
