# Param Kernel Rollout Plan

## Strategy
- Argo Rollout canary with progressive weights: 20% → analysis → 50% → analysis → 100% with pauses (5m/10m/5m) to observe metrics.
- Stable traffic goes through `param-kernel-service`; canary traffic is introduced proportionally via rollout weights and exposed on `param-kernel-service-canary` for direct checks or shadow traffic.
- Rollout defaults to 1 replica; scale replicas if you need finer traffic splits.

## Health Checks (Prometheus)
- **Error rate:** failure when 5xx ratio >3% over 1m windows; success when <1%. Query uses `http_requests_total` filtered by `service` + `namespace`.
- **Latency p95:** failure when p95 >600ms; success when <500ms. Query uses `http_request_duration_seconds_bucket` histogram.
- Metrics are defined in `AnalysisTemplate/param-kernel-canary-health`. Update the Prometheus address if your cluster differs.

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
