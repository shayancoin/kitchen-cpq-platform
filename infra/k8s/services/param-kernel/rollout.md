# Param Kernel Rollout Plan

## Strategy
- Argo Rollout canary with progressive weights: 20% → analysis → 50% → analysis → 100% with pauses (5m/10m/5m) to observe metrics.
- Stable traffic goes through `param-kernel-service`; canary traffic is introduced proportionally via rollout weights and exposed on `param-kernel-service-canary` for direct checks or shadow traffic.
- Rollout defaults to 1 replica; scale replicas if you need finer traffic splits.

## Health Checks (Prometheus)
- **Error rate:** failure when 5xx ratio >3% over 1m windows; success when <1%. Query uses `http_requests_total` filtered by `service` + `namespace`.
- **Latency p95:** failure when p95 >60ms (0.060s); success when <30ms (0.030s). Query uses `http_request_duration_seconds_bucket` histogram.
- Metrics are defined in `AnalysisTemplate/param-kernel-canary-health`. Update the Prometheus address if your cluster differs.

## Performance Commissioning
- Baseline (p95): 42ms on 2024-07-15 from load-test suite `param-kernel-apply-delta` (Grafana snapshot LT-0715-pkernel). P99: 65ms. P99.9: 95ms. Histogram: see trace bundle `s3://perf-artifacts/pkernel/2024-07-15/histogram.json`.
- Target: p95 30ms. Abort threshold: p95 60ms (2× margin for cold caches/scheduling jitter). P99 target: 50ms; P99.9 target: 80ms.
- Variability note: Short canaries can show +20–30% variance due to pod cold-start, cache warm-up, and noisy neighbors. The 2× margin is intentional to avoid false positives while still catching regressions that double latency.

### Contingency Playbook (first-canary failures)
1) Verify Prometheus freshness (scrape age < 60s) and that the `http_request_duration_seconds` buckets are populated for `param-kernel-service-canary`.
2) Check pod/node health: CPU throttling, OOMs, or saturation; restart the canary pod if it’s cold-start bound.
3) Automated cache warm-up: before analysis, run a pre-analysis job (or Argo Rollouts preStep hook) that sends 200 ApplyDelta requests to `param-kernel-service-canary` with the baseline payload (20KB JSON, 5 deltas, 3 materials). Profile: rate 20 RPS, concurrency 5, iterations 10, total 200 requests. Success criteria: warm-up window p95 < 45ms, P99 < 70ms over a steady 60s window; histogram exported to `s3://perf-artifacts/pkernel/warmup/latest.json`. If hook fails, abort rollout.
   - Operator checklist (if hook is manual): record timestamp, payload hash, RPS, concurrency, iteration count, observed p95/P99. Store the run log next to the histogram.
4) If transient noise suspected, temporarily widen failureCondition to 0.08 and re-run canary; revert to 0.036 after confirming stability.
5) If sustained regression, abort rollout (`kubectl argo rollouts abort param-kernel-service -n kitchen-cpq`) and open an incident with links to traces (Grafana/Tempo) and histograms.

## Rollback Behavior
- Any failed analysis step aborts the rollout and keeps the previous ReplicaSet as stable. `failureLimit: 1` forces immediate abort on sustained failures.
- Manual abort: `kubectl argo rollouts abort param-kernel-service -n kitchen-cpq`.

## Shadow / Validation Traffic
- Optional: mirror traffic from your ingress/gateway to `param-kernel-service-canary` during the first pause window for dark launches. Keep read-only operations only.
- Direct smoke checks: point test clients to `param-kernel-service-canary` during pauses before resuming the rollout.

## CI/CD Digest Injection
- The Argo Rollout image uses `kitchen-cpq/param-kernel-service@${PARAM_KERNEL_IMAGE_DIGEST}`; CI renders the final manifest by substituting `${PARAM_KERNEL_IMAGE_DIGEST}` with the resolved digest.
- `.github/workflows/ci.yml` resolves the published digest (prefers `${GITHUB_SHA}` tag, falls back to `:latest`) and renders an artifact `artifacts/param-kernel/rollout.yaml` with the concrete digest to apply.
- Apply with `kubectl argo rollouts set image param-kernel-service param-kernel-service=kitchen-cpq/param-kernel-service@sha256:<digest> -n kitchen-cpq` or by applying the rendered artifact.
