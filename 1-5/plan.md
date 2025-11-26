## **Step 1 — Foundational Platform & Monorepo**

### **Executive Summary**

Create a single Nx monorepo that hosts:

* Next.js multi‑tenant web shell (all portals),

* NestJS backend services,

* shared type libraries and 3D/geometry packages,

so every app shares canonical types for configuration, BOM, and CNC artifacts.

### **Integration Strategy Recommendation**

Use an Nx monorepo template for NestJS+React as the base, then transplant:

* Vercel Platforms Starter Kit → multi‑tenant web shell.

* Open SaaS/BoxyHQ patterns → auth, orgs, billing.

* tRPC patterns from T3 stack → type‑safe internal APIs.

### **Recommended Approach**

* Base repo: `phmz/nx-nest-react-monorepo-template` for Nx \+ NestJS \+ React \+ shared types. ([GitHub](https://github.com/phmz/nx-nest-react-monorepo-template?utm_source=chatgpt.com), https://github.com/phmz/nx-nest-react-monorepo-template?utm\_source=chatgpt.com)

* Replace its frontend app with `vercel/platforms` (multi‑tenant Next.js App Router) (https://github.com/vercel/platforms.git).

* Lift auth/tenant/org/billing patterns from a SaaS starter (e.g. Open SaaS, BoxyHQ) into shared NestJS auth services \+ DB schema.

### **Surgical Integration Plan**

1. **Initialize Monorepo**

   * Fork `phmz/nx-nest-react-monorepo-template (https://github.com/phmz/nx-nest-react-monorepo-template.git)`.

   * Add libs:

     * `libs/shared-types`: TypeScript domain model for:

       * `ConfigState` (Sᴰ‑³ᴰ),

       * `Quote` (Q),

       * `Bom` (B),

       * `CncProgram` (D\_CNC),

       * catalog versions (C\_version).

     * `libs/shared-utils`, `libs/shared-config`.

2. **Multi‑Tenant Web Shell**

   * Drop in `vercel/platforms` app into `apps/web` and adapt its tenant resolution (subdomain/path) to your auth DB.

   * Define portals:

     * `/app/consumer`, `/app/dealer`, `/app/manufacturer`, `/app/admin`.

3. **Identity & SaaS Plumbing**

   * From Open SaaS / BoxyHQ:

     * Implement user, org/tenant, role, and subscription tables.

     * Implement SSO \+ password auth flows.

   * Expose auth as a NestJS `auth-service` using Nx library wiring.

4. **Internal RPC**

   * Adopt tRPC patterns (from T3) inside the BFF/gateway so the Next.js app calls backend through strongly‑typed routers, backed by NestJS handlers.

5. **Infra Skeleton**

   * Use manifests from `microservices-demo` / eShopOnContainers for:

     * K8s namespaces, ingress, service mesh, CI/CD baseline.

### **The Engines Integration**

Not yet: this step is all structure. It defines shared types used later by geometry, optimization, CAD, CPQ, and CNC.

### **“The UI” Integration**

* Next.js 16 App Router \+ Tailwind 4 \+ shadcn/ui scaffolding is wired but mostly empty; later we overlay Studio Admin and the configurator.

### **Key Component Transplants**

* `phmz/nx-nest-react-monorepo-template` — Nx \+ NestJS \+ React skeleton. ([GitHub](https://github.com/phmz/nx-nest-react-monorepo-template?utm_source=chatgpt.com))

* `vercel/platforms` — multi‑tenant shell.

* Open SaaS / BoxyHQ SaaS starter — auth \+ multi‑tenant SaaS patterns.

* Microservices reference apps (Online Boutique, Sock Shop, eShopOnContainers) for infra/CI patterns.

### **“The Flow” — Golden Path Integration**

* User hits `*.yourdomain.com` → tenant resolver (Platforms).

* Auth guard enforces user+tenant.

* Nav exposes core domains: *Design*, *Catalog*, *CPQ*, *Manufacturing*, *Admin*.  
   At this point, the app routes correctly by tenant and identity, but has stub content.

### **Technical Implementation Priorities**

1. Canonical TS types for `Sᴰ‑³ᴰ`, Q, B, D\_CNC, and catalog snapshots.

2. Nx affected‑graph \+ lint/test \+ build pipelines.

3. K8s manifests \+ Terraform for the base cluster and Postgres.

### **Deliverables**

* Monorepo with:

  * Tenant‑aware Next.js shell.

  * NestJS API gateway.

  * Shared domain types & basic auth wired.

### **Performance**

* Baseline P95 latency for:

  * Tenant resolution \+ initial HTML render \< 150 ms from edge.

* SSR via Next.js 16 / Turbopack tuned.

### **UX Coherence**

* Single shell navigation across portals.

* Tenant branding (logo, colors) applied on all routes.

### **Expected Outcomes**

You now have a cloud‑native skeleton with shared domain language, ready to receive geometry engines, CPQ, and CAD/CNC services without structural refactors.

---

## **Step 2 — Parametric & Geometric Kernel \+ 3D Engine**

### **Executive Summary**

Wire the deterministic geometry core:

* Rust/WASM parametric kernel (OpenCascade),

* OR‑Tools optimization engine,

* Babylon.js 8 WebGPU 3D viewer,

behind a low‑latency BFF so every change in the UI yields a validated, canonical state in ≤50–100 ms.

### **Integration Strategy Recommendation**

Split concerns:

* **Geometry & constraints:** Rust \+ OCCT → WASM \+ native.

* **Topological optimization:** OR‑Tools CP‑SAT in FastAPI microservice.

* **3D viewer:** Babylon.js 8, packaged as a micro‑frontend.

These are accessed via a thin Configurator Session BFF (NestJS) with Redis caching.

### **Recommended Approach**

* Geometry kernel: use `rustwasm/wasm-pack-template` to build a `geometry-kernel` crate compiled to WASM \+ Node.

* CAD kernel: `donalffons/opencascade.js` for OCCT in JS/WASM or as inspiration for a native OCCT service.

* Optimization engine: CP‑SAT based on `d-krupke/cpsat-primer` inside a `fastapi-microservice-template` service.

* 3D engine: Babylon.js 8 WebGPU template `eldinor/bp800` plus `turborepo-nextjs-babylonjs` pattern for a separate 3D package.

### **Surgical Integration Plan**

1. **Rust/WASM Geometry Kernel**

   * Create `libs/geometry-kernel` using `wasm-pack-template`.

   * Implement:

     * Param evaluation (`applyDelta`),

     * constraint checks (NKBA rules, clearances, collision),

     * mesh generation pipeline that feeds Babylon glTF buffers.

2. **Parametric Kernel Service**

   * NestJS service `param-kernel-service` wrapping the Rust library (via NAPI or gRPC).

   * Expose APIs: `validateDesign`, `computeLayoutPreview`, `exportBrep`.

3. **Optimization Engine**

   * Clone `onlythompson/fastapi-microservice-template` → `layout-optimizer-service`.

   * Add OR‑Tools CP‑SAT models following `cpsat-primer`:

     * Discrete cabinet placement,

     * work‑triangle \+ zones constraints,

     * multi‑objective cost function (storage, counter area, walkway penalties).

4. **Configurator Session BFF**

   * NestJS `configurator-bff`:

     * HTTP/tRPC surface for the 3D app: `mutateParameters`, `runOptimization`, `getLayoutGallery`.

     * Calls Rust kernel \+ FastAPI engine via gRPC/HTTP.

     * Uses Redis for active sessions \+ pre‑computed layouts.

5. **3D Micro‑Frontend**

   * In Nx, create `packages/3d-engine` based on `eldinor/bp800` \+ `turborepo-nextjs-babylonjs`.

   * Export `createKitchenScene(canvas, initialState)`.

   * Wrap into a React component used by the Next.js app routes.

### **The Engines Integration**

* Geometry/parametric engine: Rust/WASM \+ OCCT.

* Optimization engine: Python/FastAPI \+ OR‑Tools CP‑SAT.

* CAD/B‑rep for exports: OCCT via `opencascade.js` or native service.

### **“The UI” Integration**

* The Babylon.js viewer is embedded in a three‑pane layout:

  * Left: parameters & constraints.

  * Center: 3D scene (Babylon).

  * Right: quote/pricing summary or AI copilot (later steps).

### **Key Component Transplants**

* `rustwasm/wasm-pack-template` → `geometry-kernel`.

* `donalffons/opencascade.js` examples → CAD/B‑rep ops & exports.

* `fastapi-microservice-template` \+ `d-krupke/cpsat-primer` → optimization microservice.

* `eldinor/bp800` \+ `turborepo-nextjs-babylonjs` → WebGPU 3D package.

### **“The Flow” — Golden Path Integration**

* User tweaks a parameter → Next.js sends Δparams to BFF.

* BFF → Rust kernel: compute new geometry, validate constraints; optional call to CP‑SAT for variant layouts.

* Kernel returns canonical state; BFF pushes updated state to viewer; Babylon updates meshes.  
   Target: `State × ΔParams → State'` in \<50 ms on P95 path.

### **Technical Implementation Priorities**

1. gRPC/HTTP contracts between BFF, geometry, optimization services.

2. Redis session model keyed by (tenant, user, project).

3. Benchmark geometry/optimization latency; adjust grid/heuristics to hit 50–100 ms bounds.

### **Deliverables**

* Running 3D configurator backed by deterministic parametric kernel and optimization engine, accessible at `/app/*/configure/:projectId`.

### **Performance**

* P95 latency for param change \< 100 ms.

* 60 FPS rendering in Babylon for typical scenes (instancing and LOD tuned).

### **UX Coherence**

* Immediate visual feedback on every change.

* Consistent error/constraint indicators (badges, overlays) using shared design system.

### **Expected Outcomes**

The platform now has a mathematically constrained configurator whose geometry, pricing hooks, and forthcoming CAD/CNC outputs all derive from the same canonical parametric state.

---

## **Step 3 — Data, Catalog & Workflow Orchestration**

### **Executive Summary**

Connect catalog/rules, CPQ, CAD/CAM, and manufacturing via:

* a versioned Catalog & Rules service,

* Kafka event bus,

* Temporal workflows for the Sale→Factory chain,

so every quote, BOM and CNC program is traceable to a catalog snapshot.

### **Integration Strategy Recommendation**

Use:

* NestJS \+ Kafka boilerplate for core microservices,

* Temporal TS samples for durable workflows,

all driven by immutable catalog snapshots published on Kafka.

### **Recommended Approach**

* Base microservice boilerplate: `ack-nestjs-boilerplate-kafka` (or similar) for NestJS+Kafka.

* Workflow engine: Temporal TS samples (`temporalio/samples-typescript`) as starting point for order & manufacturing workflows.

### **Surgical Integration Plan**

1. **Catalog & Rules Service**

   * NestJS service using `ack-nestjs-boilerplate-kafka`.

   * Postgres schema for:

     * product families, options, constraints,

     * rule DSL blobs,

     * published snapshots (C\_version) with hash.

   * On publish: emit `catalog.snapshot.published` with snapshot ID \+ location.

2. **CPQ & Manufacturing Services**

   * CPQ service: price configurations against the current or explicit C\_version.

   * Manufacturing service: consume configuration \+ C\_version and call CAD/CAM & nesting.  
      Both use the NestJS+Kafka boilerplate to subscribe/emit events (`quote.confirmed`, `manufacturing.job.created`, etc.).

3. **Workflow Orchestration (Temporal)**

   * `workflow-service` based on `temporalio/samples-typescript`.

   * Workflows:

     * `QuoteWorkflow` (draft→approved→accepted),

     * `KitchenOrderWorkflow` (accepted→manufacturing→shipment).

   * Activities call CPQ, CAD/CAM, nesting, ERP connector.

4. **Event Topology**

   * Define canonical events:

     * `configuration.validated`, `quote.created`, `quote.confirmed`,  
        `order.placed`, `bom.generated`, `cnc.ready`, `shipment.dispatched`.

   * Kafka topics with schema registry; Temporal workers consume events that start or advance workflows.

5. **CAD/CAM & DFM Service**

   * Service (NestJS \+ Rust/OCCT) for BOM, cut‑lists, and CNC program generation.

   * Triggered as a Temporal activity; emits `cnc.output.generated` with S3 URLs \+ metadata.

### **The Engines Integration**

* CAD/CAM uses OCCT (from Step 2\) to generate B‑rep, then BOM and D\_CNC; all keyed by C\_version and configuration hash.

### **“The UI” Integration**

* Studio Admin dashboards (Step 5\) use TanStack Query to query:

  * Temporal workflow states,

  * Kafka‑derived analytics (via a reporting service),

  * for Manufacturing, Orders, and CPQ.

### **Key Component Transplants**

* `ack-nestjs-boilerplate-kafka` → all domain microservices with Kafka transport.

* `temporalio/samples-typescript` → workflow service.

* Kafka \+ K8s patterns from Online Boutique/Sock Shop/eShopOnContainers.

### **“The Flow” — Golden Path Integration**

* Final config snapshot (Sᴰ‑³ᴰ, C\_version) is confirmed in the configurator.

* CPQ service prices and emits `quote.confirmed`.

* Temporal `KitchenOrderWorkflow` starts:

  * CPQ → CAD/BOM → nesting → CNC → ERP/MES connectors.

* UI shows asynchronous progress to the user; interactive front‑end is never blocked.

### **Technical Implementation Priorities**

1. Event schemas & versioning for all key events.

2. Idempotent Temporal activities to tolerate retries.

3. ERP/MES connector stubs with XML/JSON contracts for BOM, routing, CNC.

### **Deliverables**

* Deployed Kafka cluster and Temporal cluster.

* Catalog, CPQ, Manufacturing, CAD/CAM services emitting/consuming events.

* Workflows for quote \+ order fulfillment.

### **Performance**

* Long‑running job runtime is asynchronous; front‑end P95 latency for reads stays \<150 ms.

* Workflows handle machine‑scale jobs but don’t affect interactive path budgets.

### **UX Coherence**

* Manufacturing and CPQ sections show live workflow states with consistent status labels and progress indicators.

### **Expected Outcomes**

End‑to‑end “sale → factory” path is deterministic and auditable; every CNC program is anchored to a specific catalog version and configuration.

---

## **Step 4 — Semantic–Deterministic AI/Agent Layer**

### **Executive Summary**

Add an AI layer that:

* translates natural language \+ sketches into structured design parameters,

* orchestrates tools (parametric kernel, CP‑SAT, CAD/CAM),

while *never* directly deciding prices, BOM or CNC—those remain deterministic.

### **Integration Strategy Recommendation**

Use a dedicated AI/agent orchestration service:

* LangGraph/LangChain multi‑agent graph,

* tools that call your existing engines,

* Vision‑Language Models for perception (floor plans / photos).

### **Recommended Approach**

* Language/agent runtime: Python or TypeScript service built on existing FastAPI microservice template (Python) or NestJS \+ Node.

* Agent framework: LangGraph or LangChain “tool‑calling agents” with RAG.

* Serving: vLLM/TGI or managed APIs for large models; WebLLM for in‑browser small models.

### **Surgical Integration Plan**

1. **AI Orchestration Service**

   * New app `ai-agent-service` (FastAPI or NestJS).

   * Endpoints:

     * `/design/interpret-intent`,

     * `/design/chat`,

     * `/manufacturing/analyst`.

2. **Tool Layer**

   * Tools expose deterministic APIs:

     * `paramEngine.applyDelta`,

     * `optimizer.solveLayout`,

     * `cadService.generateCadMacro`,

     * `pricingService.simulateChange`.

3. **Agent Graph**

   * Planner agent: maps NL → param vectors & high‑level actions.

   * Geometry agent: edits CAD/param state via tools.

   * Manufacturing agent: reasons about batching, scheduling, but only proposes plans that workflows then enact.

4. **Perception**

   * Integrate a VLM (e.g. blueprint/photo→room extraction) into Step P1: process uploads into a structured room model passed to the parametric kernel.

5. **Guardrails**

   * Static checks for CAD macro code,

   * pre‑execution validation via parametric kernel,

   * no direct DB writes or CNC file emission by LLMs.

### **The Engines Integration**

* All AI actions are mediated through tools that call:

  * parametric kernel,

  * optimization engine,

  * CAD/CAM,

  * CPQ.  
     They *never* bypass constraints or write raw manufacturing data.

### **“The UI” Integration**

* Right‑rail AI Copilot panel in the configurator routes to `ai-agent-service`:

  * Chat UX using Vercel AI SDK patterns (streamed responses),

  * Quick‑actions (“make this layout more family‑friendly”, etc.).

* WebLLM‑powered local hints for tooltips and micro‑suggestions when offline.

### **Key Component Transplants**

* LangGraph / LangChain agent frameworks.

* vLLM/TGI for OSS model serving.

* Vercel AI SDK for the front‑end chat experience.

### **“The Flow” — Golden Path Integration**

* User types NL instruction in Copilot → planner agent interprets → calls tools via `ai-agent-service` → engines update canonical state → 3D view \+ pricing panel reflect change.  
   Latency targets:

* local hints \<200 ms,

* full AI design suggestions \<3 s (async update with spinner).

### **Technical Implementation Priorities**

1. Tool definitions \+ schema; strict type contracts with engines.

2. Safety/validation layer around CAD and layout commands.

3. RAG corpus of catalog/rules/guidelines for grounded answers.

### **Deliverables**

* AI Copilot wired into configurator.

* NL→parametric spec conversion.

* AI‑assisted rule authoring in LayEdit‑style catalog editor (with tests generated and run against parametric kernel).

### **Performance**

* No AI call is on the hard 50 ms path; everything is async from the configurator’s point of view.

* Resource‑heavy LLM operations are batched and monitored separately.

### **UX Coherence**

* Copilot feels additive, not magical: every AI change is visible, explainable, and undoable.

* Messages explicitly show which deterministic tools were invoked.

### **Expected Outcomes**

AI becomes a semantic interface over your deterministic engines, increasing throughput and accessibility without compromising correctness or manufacturability.

---

## **Step 5 — Frontend Synthesis, CPQ UI & Design System**

### **Executive Summary**

Fuse everything into a coherent UI:

* Admin \+ dealer \+ manufacturer CPQ dashboards,

* embedded 3D configurator,

* consistent shadcn‑based design system,

so the entire CPQ \+ CAD‑to‑CNC experience feels like a single, high‑performance product.

### **Integration Strategy Recommendation**

Use a modern Next.js/shadcn admin template as the shell:

* Vercel’s Studio Admin (Next.js 16 \+ shadcn \+ Tailwind 4 \+ TanStack Table). ([Vercel](https://vercel.com/templates/next.js/next-js-and-shadcn-ui-admin-dashboard?utm_source=chatgpt.com))

Embed the configurator micro‑frontend inside dedicated routes and enforce a single design system across portals.

### **Recommended Approach**

* Clone/fork Vercel’s “Next.js & shadcn/ui Admin Dashboard — Studio Admin” as your main UI app in the Nx monorepo. ([Vercel](https://vercel.com/templates/next.js/next-js-and-shadcn-ui-admin-dashboard?utm_source=chatgpt.com))

* Map CPQ/Design flows onto its CRM/Finance dashboards and data tables.

* Keep 3D configurator as separate package (`3d-engine`) consumed by the Studio Admin app.

### **Surgical Integration Plan**

1. **UI Shell**

   * Replace Step‑1 placeholder frontend with Studio Admin template.

   * Integrate tenant resolution \+ auth from Step 1 into Studio Admin layouts.

2. **Design System**

   * Centralize shadcn/ui component exports in `libs/ui`.

   * Enforce Tailwind 4 theme tokens (colors, radii, typography) across apps.

   * Add “constraint state” tokens (valid/warn/error) reused in configurator \+ catalog \+ manufacturing views.

3. **Core Screens**

   * `/cpq/dashboard`: pipeline KPIs, margin charts, open quotes.

   * `/cpq/quotes/:id`: TanStack Table line‑items \+ side panel with 3D preview and config summary.

   * `/cpq/configure/:projectId`: full three‑pane configurator route.

   * `/catalog/*`: LayEdit‑style catalog \+ rules editors with embedded 3D preview.

   * `/manufacturing/*`: order status, job queues, workflow states.

4. **Configurator Embedding**

   * In `/cpq/configure/[projectId]`, mount `<KitchenConfigurator />` from `3d-engine`:

     * It talks only to `configurator-bff`.

     * Studio Admin provides chrome (sidebar, header, panels).

5. **CPQ Flow Integration**

   * Connect UI actions to CPQ service:

     * “Price now”, “Save quote”, “Send for approval”.

     * Show margin/discount columns in TanStack tables with live recalculation.

### **The Engines Integration**

* Configurator UI → BFF → geometry/optimization/CAD.

* Quote UI → CPQ service → workflows.

* Catalog UI → Catalog & Rules service → Kafka snapshots.  
   All engines are invoked via typed hooks (TanStack Query \+ tRPC).

### **“The UI” Integration**

This step *is* the UI:

* Studio Admin for shell/dashboards.

* 3D micro‑frontend for design.

* AI Copilot panel integrated as a right‑hand column where appropriate (configure, catalog, manufacturing analysis).

### **Key Component Transplants**

* Vercel Studio Admin template (Next.js \+ shadcn \+ TanStack Table). ([Vercel](https://vercel.com/templates/next.js/next-js-and-shadcn-ui-admin-dashboard?utm_source=chatgpt.com))

* (Optional) Shadboard or other shadcn dashboards for additional layout patterns. ([All ShadCN](https://allshadcn.com/templates/shadboard/?utm_source=chatgpt.com))

* `3d-engine` package from Step 2\.

### **“The Flow” — Golden Path Integration**

* Dealer logs in → `/cpq/dashboard` shows their pipeline.

* Opens a quote → jumps into `/cpq/configure/:projectId` with 3D state loaded.

* Iterates on design (Step 2 engines) → “Price quote” → CPQ service; if accepted, “Send to production” triggers Step 3 Temporal workflows.

* AI Copilot is available throughout but never blocks deterministic actions.

### **Technical Implementation Priorities**

1. Align all routes and data hooks with BFF/microservice APIs.

2. Implement global loading/error UX with consistent patterns.

3. Visual regression tests for 3D views \+ key dashboards.

### **Deliverables**

* Fully functional CPQ web app with:

  * dashboards,

  * configurator,

  * catalog tooling,

  * manufacturing views.

### **Performance**

* P95 navigation \+ data fetch \< 200 ms for dashboards.

* Configurator interactions unchanged from Step 2 (\<100 ms), as shell adds only light chrome.

### **UX Coherence**

* Single visual language (shadcn \+ Tailwind tokens).

* Identical mental model for statuses, constraints, and flows across design, CPQ, and manufacturing.

### **Expected Outcomes**

You end up with a production‑grade, visually coherent, high‑performance 3D CPQ \+ CAD‑to‑CNC platform, assembled from proven OSS starters instead of bespoke scaffolding—ready to harden and iterate rather than still “under construction.”