# ADR-0002: Parametric Kernel, Optimization Engine, and 3D Viewer (Step 2)

## Context
- Epic 2 in `data-contracts-tRPC-gRPC-latency.md` defines the interactive path `Browser → Configurator Session BFF → Parametric Kernel → Optimization Engine → Browser` with P95 ≤ 150 ms and backend slice ≈120 ms.
- The monorepo already exposes canonical geometry and constraint types in `libs/shared-types`.
- OSS donors to leverage: `rustwasm/wasm-pack-template` (WASM kernel), `opencascade.js` examples (geometry), `fastapi-microservice-template` + `d-krupke/cpsat-primer` (CP-SAT), `eldinor/bp800`/`Babylon.js` (3D viewer).

## Decisions
1. **Geometry kernel package**  
   - Implemented in `packages/geometry-kernel` with a Rust WASM boundary (`apply_delta`, `validate_design`) and a TypeScript/JS wrapper that is always available (fallback when WASM isn’t built).  
   - Maintains an in-memory project-state map; applies `ParamDelta` paths; enforces a basic constraint (`<=10` cabinets) to surface violation plumbing.
2. **Parametric Kernel Service (NestJS)**  
   - Exposes HTTP endpoints `/kernel/apply-delta` and `/kernel/validate` mirroring `parametric_kernel.proto` shapes.  
   - Wraps the geometry kernel package, persists session state, and returns `ParametricStateJson` + `ConstraintSummary`.  
   - Jest tests cover delta round‑trip and constraint detection.
3. **Configurator Session Service (NestJS BFF)**  
   - HTTP BFF under `/sessions` with `mutate`, `validate`, and `state` endpoints matching Epic 2 tRPC semantics.  
   - Calls the Parametric Kernel service in-process; optional Optimization Engine call (`requestGallery`) via HTTP.  
   - Session cache is an in-memory map keyed by `(tenantId,userId,projectId)`. Jest tests cover mutation + validation paths.
4. **Optimization Engine Service (FastAPI + CP-SAT)**  
   - Endpoint `/suggest-layouts` builds a small CP-SAT model (grid occupancy) with 50 ms time limit and deterministic single-worker solver.  
   - Returns at least one `LayoutVariant` with serialized `ParametricState`. Pytest covers feasibility.
5. **3D engine + frontend embedding**  
   - `packages/3d-engine` provides `createKitchenScene`/`updateSceneFromState` using Babylon.js when available, with a 2D canvas fallback.  
   - New Next.js route `/cpq/configure/[projectId]` renders three panes (form, canvas, summary) and wires fetches to the Configurator Session BFF.
6. **Latency harness**  
   - `tools/scripts/step2-latency-harness.ts` issues a synthetic drag sequence against the BFF and reports P95, feeding `check-latency-budgets.ts`.

## Consequences
- Interactive path now exercises real services end-to-end with deterministic state and constraint plumbing, while remaining lightweight for local dev.
- WASM output is optional at dev time; the TS wrapper keeps the API surface stable until full wasm-pack integration runs in CI.
- In-memory stores keep latency low but will need Redis persistence before multi-instance deployment.
- Optimization/3D integrations are minimal but aligned with donor templates, easing further hardening (WebGPU, richer constraints, catalog-driven geometry).
