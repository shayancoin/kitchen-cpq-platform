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
  await fetch(`${BASE}/sessions/mutate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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
  const idx = Math.floor(0.95 * (sorted.length - 1));
  return sorted[idx] || 0;
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
