````md
# kitchen-cpq-platform

> Frontier, high‑performance, end‑to‑end **3D kitchen CPQ + CAD‑to‑CNC** platform.  
> Real‑time Babylon.js configurator, type‑safe CPQ, CAD automation, and CNC outputs in one monorepo.

The goal of this repo is to implement a **single system from sale to factory**:  
what the customer sees in the 3D planner is exactly what gets priced, engineered, nested, and cut.   

---

## 1. Core capabilities

This platform is designed to deliver:

- **Real‑time 3D kitchen configurator**
  - Babylon.js 8 (WebGPU‑first), 60 FPS target.   
  - Parametric modules, constraints, collisions, and camera controls.
- **CPQ (Configure‑Price‑Quote) engine**
  - Canonical configuration model shared across 3D, pricing, BOM, and CNC.
  - Margin‑aware quoting with approvals, discounts, and multi‑version quotes.   
- **CAD‑to‑CNC automation**
  - Parametric → BOM → cut lists → CAD drawings → CNC programs (G‑code).   
  - OpenCascade‑based CAD kernel, Rust‑based manufacturing logic.
- **Full enterprise integrations**
  - CRM (Salesforce / HubSpot) for leads & opportunities.
  - ERP / MES for orders, inventory, and production jobs.
  - E‑com (MedusaJS / Shopify punch‑out) for checkout.   
- **Multi‑tenant SaaS delivery**
  - Manufacturers, dealers, and internal ops share one platform with tenant isolation.
  - Turnkey SDK (`kitchen-kit.js`) to embed the configurator on external sites.   

Performance design targets (from the architecture docs):

- UI interaction latency **T_latency ≤ 50 ms** for common operations.
- Layout + repricing recomputation **≤ 100 ms (P95)**.
- 60 FPS 3D camera, thousands of concurrent active planners per region.   

  services/          # Domain microservices (NestJS, FastAPI, Temporal, Rust)
    identity-tenancy-service/
    catalog-rules-service/
    configurator-session-service/
    cpq-pricing-service/
    cad-cam-dfm-service/
    optimization-engine-service/
    workflow-orchestration-service/
    integrations/
      crm-salesforce/
      erp-sap/

## 2. High‑level architecture

The repo is a **polyglot Nx/Turborepo monorepo** centred on TypeScript, with Rust/Python for heavy compute.   

### 2.1 Layers

- **Front‑end & UI**
  - Next.js 16 + React 19 multi‑tenant portal (Vercel Platforms + Studio Admin).   
  - shadcn/ui + Tailwind v4 design system, TanStack Table, RHF + Zod for forms.
  - Embeddable configurator (`<kitchen-configurator>`) backed by Babylon 8 WebGPU engine.   

- **Engines**
  - **3D engine**: Babylon.js 8 + WebGPU + workers for geometry (bp800‑style setup).   
  - **Parametric kernel**: Rust → WebAssembly, using wasm‑pack template.
  - **CAD/B‑rep**: OpenCascade.js / OCCT service for STEP/DXF/technical drawings.
  - **Optimization**: OR‑Tools CP‑SAT for layouts, panel nesting, and combinatorial CPQ decisions.   

- **Backend services**
  - NestJS microservices (auth/tenancy, catalog+rules, configurator session, CPQ, manufacturing, CAD/CAM, optimizers, integrations).   
  - Python FastAPI microservices for OR‑Tools‑based optimization.
  - Temporal workflows for order & manufacturing lifecycles.

- **Data & messaging**
  - PostgreSQL 16 for OLTP (tenants, users, quotes, orders, jobs, catalog).
  - Kafka (or Redpanda) as event backbone (`quote.created`, `cnc.job.created`, …).
  - S3/Blob storage for CAD artifacts, G‑code, PDFs, and rendered assets.   

---

## 3. Monorepo layout

Canonical layout (summarized; see `1-5/folder-tree.md` for full tree):

- `apps/frontend` – Next.js multi-tenant CPQ + Studio console  
  - Derived from `vercel/platforms` (multi-tenant shell) and `next-shadcn-admin-dashboard` (admin UI).  
  - App Router routes stubbed for:
    - `/cpq/dashboard`, `/cpq/quotes`, `/cpq/quotes/[id]`, `/cpq/catalog`, `/cpq/configure/[projectId]`.
- `apps/api` – NestJS API gateway / BFF  
  - Based on `phmz/nx-nest-react-monorepo-template` and `ack-nestjs-boilerplate-kafka` structure.  
  - Hosts tRPC routers (`configurator`, `cpq`, `catalogAdmin`, `copilot`, `ui`, `auth`, `tenancy`) via `libs/shared-trpc`.

- `services/*` – domain microservices (all stubbed but compiling)  
  - `identity-tenancy-service`, `catalog-rules-service`, `param-kernel-service`,  
    `configurator-session-service`, `cpq-pricing-service`, `orders-payments-service`,  
    `cad-cam-dfm-service` (Nest + Rust), `manufacturing-scheduling-service`,  
    `optimization-engine-service` (FastAPI), `workflow-orchestration-service` (Temporal TS skeleton),  
    `ai-orchestration-service`, `integrations/*`, `notifications-docs-service`, `analytics-telemetry-service`.

- `libs/*` – shared TypeScript domain + infra libraries (Nx libs)  
  - `shared-types` – canonical domain model (identity, projects, parametric state, catalog, CPQ, BOM/CNC, AI, UI).  
  - `shared-trpc` – tRPC router definitions + client helpers matching `data-contracts-tRPC-gRPC-latency.md`.  
  - `shared-events`, `shared-config`, `shared-auth`, `shared-validation`, `shared-kafka`.  
  - `domain-*` libs for catalog, configuration, CPQ, manufacturing logic (stubs).  
  - `instrumentation-otel` – OpenTelemetry wiring placeholder.

- `packages/*` – 3D engine, WASM kernel, UI kit, SDK, proto defs, Python lib  
  - `ui-kit` – shadcn-style design system shell (shared layout component).  
  - `3d-engine` – API surface for `createKitchenScene` / `updateSceneFromState` (Babylon/bp800 integration later).  
  - `configurator-sdk` – `<kitchen-configurator>` web component + host API.  
  - `geometry-kernel` – Rust crate skeleton for parametric kernel (using wasm-pack/opencascade.js patterns later).  
  - `proto-defs` – `.proto` specs for identity, parametric kernel, optimization, CPQ, CAD/CAM, workflow, AI.  
  - `python-libs/layout-optimizer-lib` – shared Python lib for OR-Tools models.

- `infra/*` – deployment & platform scaffolding  
  - `infra/k8s/base` – namespace + Kafka/Temporal/Postgres config stubs.  
  - `infra/k8s/services` – per-service Deployment stubs.  
  - `infra/k8s/ingress` – `gateway-ingress.yaml`.  
  - `infra/terraform` – `main.tf` + `modules/{network,cluster,databases}` placeholders.  
  - `infra/observability` – README for Prometheus/Grafana/Loki layout.

- `tools/*` – scripts & Nx plugins  
  - `tools/scripts/dev-seed.sh` – dev DB seed placeholder.  
  - `tools/scripts/generate-protos.cjs` – proto codegen stub (hooks `packages/proto-defs`).  
  - `tools/scripts/check-latency-budgets.ts` – CI hook for latency budgets from `data-contracts-tRPC-gRPC-latency.md`.  
  - `tools/nx-plugins/*` – reserved for custom generators/executors.

External donor templates are cloned into `external-templates/` and treated as reference only:

- `external-templates/platforms` – Vercel Platforms multi-tenant shell (middleware/util patterns reused).  
- `external-templates/next-shadcn-admin-dashboard` – Studio Admin UI baseline.  
- `external-templates/nx-nest-react-monorepo-template` – Nx+Nest+React workspace reference.  
- `external-templates/{Babylon.js,react-babylonjs,bp800}` – 3D engine + React bindings.  
- `external-templates/{opencascade.js,wasm-pack-template}` – CAD/WASM kernel baselines.  
- `external-templates/{ack-nestjs-boilerplate-kafka,fastapi-microservice-template,fastapi-langgraph-agent-production-ready-template,temporalio/samples-typescript}` – backend microservice + agentic + workflow patterns.

`kitchen-cpq-platform` is the single source of truth; upstream templates are not used as submodules.

---

## 4. Getting started (Step 1 skeleton)

Prereqs:

- **Node 20.x only** (use `nvm use` with `.nvmrc`, CI is pinned to Node 20)  
- pnpm 9.x

Install dependencies (ensuring Node 20 is the active runtime, e.g. via `nvm use 20`):

```bash
pnpm install
```

Build all current apps/services/libs via Nx:

```bash
node_modules/.bin/nx run-many --target=build --all
```

All build targets either type-check (`apps/api`, TS services, `libs/shared-types`) or are explicit stubs (`frontend`, 3D engine, Python/Rust packages) that complete successfully.

---

This completes **Step 1 – Foundational Platform & Monorepo**: the workspace, core projects, shared types, proto contracts, and infra/tooling skeleton are wired and compiling, ready for parametric engines, 3D integration, CPQ logic, and workflows in subsequent steps.
