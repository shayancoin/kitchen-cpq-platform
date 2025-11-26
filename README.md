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

- UI interaction latency **T_latency ≤ 50 ms** for common operations.
- Layout + repricing recomputation **≤ 100 ms (P95)**.
- 60 FPS 3D camera, thousands of concurrent active planners per region.   

---

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

Canonical layout (summarized; see `folder-tree.md` for full tree):   

```txt
kitchen-cpq-platform/
  apps/
    frontend/        # Next.js 16 multi-tenant CPQ portal (Studio Admin + Platforms)
    api/             # NestJS API gateway / tRPC BFF

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

  libs/              # Shared TS domain & infra libs
    shared-types/            # ConfigState, Quote, Bom, CncProgram, etc.
    shared-validation/       # Zod schemas mirroring domain types
    shared-trpc/             # tRPC routers & client wiring
    shared-kafka/            # Kafka modules for NestJS
    domain-catalog/
    domain-configuration/
    domain-cpq/
    domain-manufacturing/
    instrumentation-otel/

  packages/          # Engine & SDK packages
    ui-kit/                  # shadcn-based design system (CPQ & manufacturing widgets)
    3d-engine/               # Babylon 8 WebGPU engine (bp800-derived)
    configurator-sdk/        # <kitchen-configurator> web component (KitchenKit.init)
    geometry-kernel/         # Rust→WASM parametric kernel (OCCT-based)
    proto-defs/              # gRPC proto files & generated stubs
    python-libs/
      layout-optimizer-lib/  # Shared OR-Tools layout models

  infra/
    k8s/                     # Base + per-service K8s manifests & ingress
    terraform/               # Cluster, databases, networking
    observability/           # Prometheus, Grafana, Loki, dashboards

  tools/                     # Nx plugins, scripts, codegen
  .github/                   # CI/CD workflows
  nx.json
  package.json
  pnpm-workspace.yaml
  tsconfig.base.json
  turbo.json
  README.md
````

---

## 4. Tech stack (by layer)

(See the more detailed architecture doc in `docs/3D kitchen CPQ + CAD-to-CNC platform.md`.)

### 4.1 Front‑end & 3D

* **Next.js 16 + React 19 + TypeScript 5.9**
* **UI**: Tailwind v4, shadcn/ui, TanStack Table, React Hook Form, Zod.
* **State**: TanStack Query (server state), Zustand/Jotai (local).
* **3D**: Babylon.js 8 (WebGPU/WebGL), optional `react-babylonjs` for declarative scenes.

### 4.2 Backend & services

* **Node 20, NestJS** for most microservices.
* **FastAPI + Python 3.12** for OR‑Tools optimization services.
* **Rust** for parametric kernel & CNC/nesting hot paths.
* **Temporal** for workflows (quotes, orders, manufacturing, fulfilment).
* **Kafka** for event‑driven comms; K8s + Helm for deployment.

### 4.3 Data & infra

* PostgreSQL 16 (OLTP), Redis for caching/session.
* Object storage (S3/Blob) for CAD artifacts & documents.
* Kubernetes cluster via Terraform; observability with Prometheus/Grafana/Loki.

---

## 5. Getting started (development)

> **Prerequisites**
>
> * Node.js 20.x
> * pnpm ≥ 9
> * Docker / Docker Compose
> * Rust toolchain (for `geometry-kernel`)
> * Python 3.12 + `poetry` or `uv` (for optimization services)
> * kubectl + kind/minikube if you want local K8s

### 5.1 Clone & install

```bash
# Clone your fork
git clone git@github.com:your-org/kitchen-cpq-platform.git
cd kitchen-cpq-platform

# Install Node deps
pnpm install

# (Optional) bootstrap Rust WASM package
cd packages/geometry-kernel
pnpm run build:wasm  # wraps `wasm-pack build` or similar
cd ../..
```

### 5.2 Start core services (local)

For quick local iteration you can run a “minimal spine”:

```bash
# In one terminal: Postgres + Kafka + misc infra
docker compose -f infra/docker-compose.dev.yml up -d   # if/when present

# BFF + frontend
pnpm nx serve api
pnpm nx serve frontend

# Optional: optimization service
pnpm nx serve optimization-engine-service

# Optional: workflow worker
pnpm nx serve workflow-orchestration-service
```

Once running, the main CPQ UI will typically be at:

* `http://localhost:3000` → multi‑tenant portal (Studio Admin shell).
* `http://localhost:3000/cpq/dashboard` → CPQ dashboard.
* `http://localhost:3000/cpq/configure/[projectId]` → 3D configurator route.

(Exact ports/routes may vary as the implementation is finalized; keep the README in sync with `apps/frontend` config.)

---

## 6. Key apps & services

### 6.1 Apps

* **`apps/frontend`**
  Next.js multi‑tenant CPQ portal (Studio Admin + Vercel Platforms). Hosts:

  * Consumer, dealer, and admin views.
  * CPQ dashboards, quote detail pages, catalog admin, and manufacturing consoles.
  * Embedded Babylon configurator in `/cpq/configure/[projectId]`.

* **`apps/api`**
  NestJS API gateway / BFF with tRPC routers for:

  * Configurator sessions (low latency).
  * CPQ operations (pricing, discounts, approvals).
  * Access to catalog, manufacturing, and workflow services.

### 6.2 Services (domain microservices)

At a minimum:

* `identity-tenancy-service` – users, tenants, roles, auth, and RBAC.
* `catalog-rules-service` – product hierarchies, parameters, constraints, and rule versions (LayEdit‑style).
* `configurator-session-service` – authoritative configuration state + validation.
* `cpq-pricing-service` – pricing, discounts, margin, and quote lifecycle.
* `cad-cam-dfm-service` – CAD generation, DFM checks, and CNC contracts.
* `optimization-engine-service` – OR‑Tools CP‑SAT for layouts and nesting.
* `workflow-orchestration-service` – Temporal workers for order → manufacturing → fulfillment.
* `integrations/*` – CRM (Salesforce, HubSpot), ERP (SAP/D365), e‑com, etc.

---

## 7. Engines & SDK packages

### 7.1 `packages/3d-engine`

Babylon.js 8 engine wrapper:

* `engine/` – scene setup, camera, materials, selection, picking.
* `scenes/kitchenScene.ts` – canonical kitchen scene graph.
* `workers/manifoldWorker.ts` – optional manifold‑3d/geometry workers.
* Exposes a typed surface like:

```ts
import { createKitchenScene } from "@kitchen/3d-engine";

const api = await createKitchenScene(canvas, initialConfig);
// api.updateConfiguration(delta);
// api.highlightConstraintViolations(violations);
```

### 7.2 `packages/geometry-kernel`

Rust → WASM parametric kernel:

* Evaluates configuration parameters, constraints, and basic geometry.
* Shared between:

  * Front‑end (for fast feedback and snapping),
  * Backend (for authoritative validation and DFM checks).

### 7.3 `packages/configurator-sdk`

Embeddable web component and JS SDK:

* Custom element: `<kitchen-configurator></kitchen-configurator>`.
* JS API (example):

```ts
import { KitchenKit } from "@kitchen/configurator-sdk";

KitchenKit.init({
  container: "#configurator",
  apiKey: "pk_live_...",
  catalogId: "cat_kitchen_v1",
  onAddToCart: (item) => { /* host cart integration */ },
});
```

Designed to match the “turnkey” embed strategy outlined in the architecture doc.

### 7.4 `packages/ui-kit`

Shared UI library:

* shadcn primitives + CPQ/Manufacturing‑specific components:

  * `cpq/QuoteTable.tsx`, `MarginBadge.tsx`, `ConstraintBadge.tsx`
  * `manufacturing/BomTable.tsx`, `CncJobCard.tsx`
* Shared theme tokens under `theme/tokens.ts`.

---

## 8. Development workflow

### 8.1 Monorepo tooling

* **Nx** for app/service orchestration and dependency graph.
* **Turborepo** (optional) for parallel builds and caching.
* **pnpm** workspaces for dependency management.
* **.cursor/rules/** for Cursor project rules (backend/frontend architecture, code style, DB workflow, etc.).

Typical commands:

```bash
# List affected projects after a change
pnpm nx affected:graph

# Lint, test, and build everything
pnpm nx run-many --target=lint,test,build --all

# Run a specific service
pnpm nx serve cpq-pricing-service
```

### 8.2 Testing & quality

* Unit tests in each app/service (`*_spec.ts` / `*_test.ts`).
* End‑to‑end flows (config → quote → order → job) via Playwright or Cypress.
* Load/perf tests focused on:

  * Configurator session latency,
  * Quote recomputation time,
  * BOM & CNC pipeline throughput.

---

## 9. AI & agentic components (outline)

The repo is prepared (but not locked) for:

* **LangGraph / LangChain agents** orchestrating:

  * Catalog rule authoring,
  * CAD macro generation,
  * “Design copilot” in the configurator.
* AI is always **tool‑calling into deterministic engines** (parametric kernel, OR‑Tools, CAD, CPQ) rather than replacing them.

LLM model choices, prompts, and tools are defined in the `services/ai-agent-service` and related libs.

---

## 10. Roadmap / phases (summary)

Implementation is structured into phases (see `implementation.md` and `plan.md`):

1. **Monorepo & platform skeleton** – Nx, multi‑tenant Next.js shell, basic auth.
2. **Engines & geometry** – 3D engine, parametric kernel, CAD and optimization services.
3. **Data & workflows** – CPQ models, order pipeline, Temporal workflows, events.
4. **AI & catalog tooling** – LayEdit‑style catalog editor with AI assist.
5. **UX & polish** – CPQ dashboards, ops console, SDK polish, documentation.

---

## 11. Contributing

This repo is intended to be worked on both by humans and AI copilots (Cursor, GPT‑5.1‑Codex‑Max).

* Keep **domain types canonical** in `libs/shared-types`.
* Update **Zod schemas** and **tRPC routers** alongside any API change.
* Keep **folder structure and naming** consistent with `folder-tree.md` and the integration plan.
* When in doubt, prefer:

  * **Determinism over cleverness**,
  * **Type‑safety over shortcuts**,
  * **Latency and correctness** over additional features.

Please open issues/PRs describing:

* Which layer you’re touching (UI, engine, service, infra),
* Which invariants are affected (configuration correctness, pricing, manufacturing feasibility),
* Any performance implications against the stated budgets.

---

```
::contentReference[oaicite:29]{index=29}
```
