# ADR-0001 — Step 1.1 Monorepo Hardening

## Context
- Canonical specs from `plan.md`, `folder-tree.md`, `data-contracts-tRPC-gRPC-latency.md`, and `.cursor/rules/*` require shared contracts, tRPC surfaces, proto manifests, and latency checks.
- The repository was missing `implementation.md` and workspace package manifests for shared libs, blocking `pnpm install`.
- API gateway modules were skeletal; identity/tenancy service lacked entities/configuration.
- Frontend shell needed template wiring (Platforms + Studio Admin) with Tailwind v4/shadcn and tRPC client usage.

## Decisions
- Added workspace `package.json` files for shared libs (`shared-types`, `shared-config`, `shared-validation`, `shared-auth`, `shared-trpc`, `instrumentation-otel`) so `workspace:*` links resolve during install.
- Align shared contracts with canonical spec:
  - Removed duplicate parametric-kernel types, added `workflow.ts`.
  - Rebuilt `libs/shared-trpc` routers with real mock data, consolidated `appRouter`, and shipped a typed client helper.
  - Fixed proto definitions (parametric kernel JSON state, identity expiry as ISO string) and replaced `generate-protos.cjs` with a manifest generator + `proto-defs:codegen` target; added latency manifest + stricter `check-latency-budgets.ts`.
- Backend hardening:
  - API `TrpcModule` now mounts shared `appRouter` with context from headers/JWT (fallback demo identity).
  - Added stubbed Auth/Tenants/CPQ/Configurator controllers and services returning shared-type-shaped data.
  - Identity-tenancy service now uses TypeORM Postgres config via `shared-config`, with Tenant/User/Membership entities and basic auth/tenant controllers.
- Frontend wiring:
  - Integrated Tailwind v4/shadcn-style primitives (copied/trimmed from Studio Admin) with new `button`, `card`, and `cn` utilities.
  - Added tRPC server client, CPQ layouts, dashboard/quotes/configure screens pulling data from tRPC, updated middleware to Platforms pattern, and a simple login form hitting the API `/auth/login`.
  - Updated `packages/ui-kit` QuoteTable to TanStack Table + tailwind styling.
- Added Playwright e2e test (`apps/frontend/e2e/golden-path.spec.ts`) that exercises the golden path via `appRouter.createCaller`; Playwright target added to project.json. Browser download skipped via `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` during install.

## Deviations / Notes
- `implementation.md` not present; could not reconcile contents.
- Playwright peer/browser downloads are skipped; running with Node 14 will fail (pnpm/corepack requires Node ≥20). Use Node 20+ (`~/.nvm/versions/node/v20.19.5/bin/node`) to avoid `??=` syntax errors.
- React Query peer mismatch remains (`@trpc/react-query` expects v4; current dependency is v5) but not exercised yet.
- Identity-tenancy TypeORM config expects Postgres; runtime connection not validated in this step.

## Follow-ups
- Resolve React Query v4/v5 alignment or add a v4-compatible tRPC react client.
- Flesh out gRPC clients for API gateway modules and identity service stubs when services come online.
- Add more template components (nav/sidebar) and hook configurator SDK to the 3D engine in Step 2.
