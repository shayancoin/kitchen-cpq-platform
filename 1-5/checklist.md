Here’s a concrete, “give this to an engineer” checklist and issue plan, wired to the architecture you already defined.

I’ll assume a single **Nx/Turborepo monorepo** with TypeScript as the dominant language, Rust/Python for heavy compute, and the OSS kit we already picked (Vercel Platforms \+ Studio Admin, NestJS microservices, Rust/WASM kernel, OR‑Tools, OCCT, Temporal, Kafka, Postgres, Redis, K8s).

---

## **0\. Monorepo layout (anchor for all checklists)**

kitchen-platform/  
  apps/  
    studio-web/           \# CPQ \+ CRM console (Next.js \+ Studio Admin)  
    configurator-3d/      \# 3D kitchen planner (Next.js \+ Babylon)  
    layedit-admin/        \# Catalog & rule editor  
    ops-console/          \# Manufacturing / CNC / job-status console  
  services/  
    bff-configurator/     \# Low-latency BFF for configurator sessions  
    catalog-rules-service/  
    cpq-service/  
    order-service/  
    manufacturing-service/  
    cad-cam-service/  
    optimizer-service/  
    ai-agent-service/  
    workflow-service/     \# Temporal workers  
    integrations/  
      crm-salesforce/  
      erp-sap/  
  packages/  
    shared-types/  
    ui-kit/  
    param-kernel-wasm/  
    client-sdk/  
    events-schema/  
  infra/  
    k8s/  
    terraform/  
    ci-cd/  
    observability/

This matches the structure you already outlined (apps/services/packages with shared types and param kernel) and the five integration phases: monorepo, engines, data+workflows, AI, and UX.

---

## **1\. Per‑folder engineering checklist (+ architecture notes)**

### **1.1 `apps/studio-web` – CPQ \+ CRM console**

**Primary user flows**

* Sales / dealer:

  * View pipelines, customers, quotes.

  * Open a quote → launch 3D configurator → sync price/margin.

  * Send for approval, export proposal, push to CRM/ERP.

* Admin:

  * Manage users, roles, tenants, price lists, approval policies.

**Stack & architecture**

* Next.js 16 \+ React 19, **Studio Admin** UI template (shadcn, Tailwind v4, TanStack Table, RHF, Zod).

* Uses `tRPC` client to talk to `bff-configurator` and CPQ APIs.

**Checklist**

* Fork Vercel Studio Admin template into `apps/studio-web`.

* Replace placeholder dashboards with:

  * `/cpq/dashboard` – overview of active quotes, margin, conversion.

  * `/cpq/quotes` – quotes data table (TanStack Table).

  * `/cpq/quotes/[id]` – quote detail page with:

    * Embedded 3D configurator iframe/route.

    * Live CPQ table (line items, discounts, margin).

  * `/cpq/catalog` – catalog admin views (delegated to LayEdit app).

* Integrate multi‑tenant routing from `vercel/platforms` (subdomain or path based tenant).

* Wire auth/session to monorepo identity (from SaaS boilerplate patterns).

* Implement RBAC guards on routes (dealer vs manufacturer vs admin).

* Add CPQ‑specific components:

  * Quote timeline (status, approvals, revisions).

  * Margin & discount visualization widgets.

  * Diff view (“version A vs B”) using two table instances.

**ML / AI**

* “Sales copilot” panel:

  * Tool‑calling client to `ai-agent-service` with quote \+ customer context.

  * Actions: suggest alternates, explain price deltas, generate email/proposal text.

**Data & API**

* Consume `tRPC` endpoints: `cpq.getQuote`, `cpq.updateLineItem`, `cpq.getScenarios`.

* Subscribe to quote events via WebSocket/SSE (for async recompute status).

**DevEx / CI**

* Storybook or Ladle stories for CPQ components.

* Visual regression tests on critical dashboards.

* E2E tests (Playwright/Cypress) for quote flow: open → configure → approve → send to ERP.

---

### **1.2 `apps/configurator-3d` – Babylon-based planner**

**Primary user flows** (P1–P4 from your user‑flow doc)

1. Parametric initialization (room, constraints).

2. Topological optimization (engine suggests layouts).

3. Dimensional constraint satisfaction (fine‑tune cabinets).

4. CPQ view (live pricing, scenarios).

5. Final review → submit to order.

**Stack & architecture**

* Next.js app (or SPA) embedding Babylon.js 8 WebGPU template (`bp800` / turborepo‑nextjs‑babylon pattern).

* Scene logic uses `packages/param-kernel-wasm` for geometry \+ constraints.

* Talks only to `bff-configurator` (tRPC/HTTP) for validation, pricing and optimization requests.

**Checklist**

* Create app from Next.js \+ Babylon starter (merge `bp800` into `configurator-3d`).

* Implement core layout:

  * Left: param controls (room dimensions, goals, presets).

  * Center: 3D view \+ 2D top plan (Babylon canvas).

  * Right: CPQ panel \+ Design Copilot chat.

* Integrate WASM kernel:

  * Load `param-kernel-wasm` in WebWorker.

  * Define message protocol: `applyDelta`, `solveConstraints`, `getMeshData`.

* Hook param deltas → BFF mutations:

  * `mutateParams` (sync, target \< 50 ms).

  * `requestLayoutOptimization` (sync 50–100 ms) for layout gallery.

* Implement NKBA constraint overlays: aisle widths, triangles, landings.

**ML / AI**

* Client integration to `ai-agent-service` for:

  * Natural‑language → param spec (e.g. “minimalist, big island, family friendly”).

  * Design copilot commands (chat → tool calls).

**Data & API**

* State machine for session:

  * `INIT_ROOM` → `LAYOUT_SELECTION` → `REFINEMENT` → `CPQ` → `REVIEW`.

* Persist checkpoints via BFF: session snapshots stored in Redis \+ Postgres.

**DevEx / CI**

* 3D visual regression harness (headless Babylon render of canonical scenes).

* Performance tests for interaction latency (camera, drag operations).

---

### **1.3 `apps/layedit-admin` – Catalog & rules editor**

**User flows** (LayEdit analogue)

* Product expert:

  * Create/edit catalog items, param domains, constraints.

  * Author rule DSL via Monaco editor.

  * Run test suites (auto‑generated rooms) before publishing a new catalog version.

**Stack**

* Next.js 16 \+ React 19; `ui-kit` \+ Monaco \+ embedded Babylon viewport for preview.

**Checklist**

* Scaffold app from Studio Admin’s “admin” sections.

* Implement entities:

  * Families, SKUs, param domains (width/height/depth ranges, finishes).

  * Rules DSL editor with syntax highlighting \+ LSP (schema from `packages/shared-types`).

* Connect to `catalog-rules-service`:

  * CRUD drafts.

  * “Validate” → runs rule tests in background (Temporal activity).

  * “Publish” → emits versioned snapshot event to Kafka.

**ML / AI**

* NL → rule DSL helper:

  * Call `ai-agent-service` tool `draftRuleFromText`.

* Test generator:

  * Call `ai-agent-service` tool `generateEdgeCaseRooms` → feed to kernel for automated regression.

---

### **1.4 `apps/ops-console` – Manufacturing & CNC dashboard**

**User flows**

* Production engineer views:

  * Job queue, CNC job details, nesting sheets, machine status.

  * Exceptions (failed simulations, rule violations, long jobs).

* Can re‑batch jobs and push back to manufacturing service.

**Stack**

* Same UI stack as `studio-web` but bound to manufacturing topics.

**Checklist**

* Streams CNC & job events from Kafka into dashboards.

* Integrates with `manufacturing-service` & `workflow-service` for re‑runs, re‑schedules.

* Viewers for generated artifacts (PDF drawings, nesting images).

---

### **1.5 `services/bff-configurator`**

**Purpose & user flows**

* Single low‑latency entrypoint for configurator app:

  * `mutateParams`, `validateDesign`, `priceSnapshot`, `optimizeLayout`.

**Stack**

* NestJS (or lightweight Node) BFF with tRPC \+ Redis cache.

**Checklist**

* Scaffold service from Nx NestJS template.

* Implement tRPC router for:

  * `getSession`, `mutateParams(delta)`, `getLayouts`, `getPrice`.

* Store active session state in Redis; canonical snapshot periodically in Postgres.

* Synchronous calls:

  * Param kernel (gRPC or HTTP to optimizer/param services).

  * CPQ service for quick re‑price path (with Redis cache).

* Enforce P95 \< 100 ms on mutation endpoints (perf tests).

**ML / AI**

* None on critical path; just orchestrates other services.

---

### **1.6 `services/catalog-rules-service`**

**Purpose**

* Canonical catalog & rules store with immutable versioned snapshots.

**Stack**

* NestJS \+ Postgres \+ Kafka.

**Checklist**

* Start from `ack-nestjs-boilerplate-kafka` template.

* Schema:

  * `catalogs`, `rules`, `parameter_domains`, `versions`, `test_suites`.

* Implement:

  * Draft lifecycle: create/update/delete.

  * Publish pipeline: lock draft, run validation, persist immutable snapshot row, emit `catalog.version.published` event with hash/UUID.

* Expose APIs for:

  * `GET /catalog/version/{id}` (for CPQ, kernel, CAD).

  * `POST /rules/validate` (for LayEdit).

**ML / AI**

* Endpoint for `ai-agent-service` to retrieve rule context.

* Safe sandbox to run LLM‑generated rule mutations under tests only.

---

### **1.7 `services/cpq-service`**

**Purpose**

* Deterministic pricing & discount logic, CPQ scenarios, margin projections.

**Stack**

* NestJS \+ Postgres, uses catalog snapshots & param model; may optionally use OR‑Tools for small combinatorial pricing (bundles).

**Checklist**

* Schema: `quotes`, `quote_lines`, `discount_policies`, `approval_rules`.

* Implement:

  * Price evaluation from param configuration \+ catalog version.

  * Multi‑scenario handling (Base / Variant A/B).

  * Margin computation & thresholds.

* Events:

  * Emit `quote.created`, `quote.updated`, `quote.approved`.

* Export canonical `Quote` object to workflow service for manufacturing.

**ML / AI**

* CPQ assistant tools for `ai-agent-service`:

  * `simulateChange(delta)` → returns new prices.

  * `explainDelta(oldQuote, newQuote)` for sales copilot.

---

### **1.8 `services/order-service`**

* Classical domain service: orders, invoices, payments.

* Uses standard NestJS CRUD \+ integration with payment gateway.

* Emits `order.placed`, `order.paid` for workflows.

---

### **1.9 `services/manufacturing-service`**

**Purpose**

* Orchestrate manufacturing jobs, map BOMs to CNC jobs & routing.

**Stack**

* NestJS \+ Postgres \+ Kafka.

**Checklist**

* Receives `quote.approved` / `order.paid` events.

* Calls `cad-cam-service` & `optimizer-service` for:

  * BOM, cut lists.

  * Nesting & G‑code.

* Persists `jobs`, `panels`, `sheets`, `toolpaths`.

* Emits `job.created`, `job.completed`, `cnc.output.generated`.

---

### **1.10 `services/cad-cam-service`**

**Purpose**

* Deterministic OCCT/FreeCAD B‑rep operations \+ CAD file generation.

**Stack**

* Node/TS wrapper around OCCT (via `opencascade.js`) or native C++/Rust service.

**Checklist**

* Implement API:

  * `generate2DDrawings(configSnapshot)`.

  * `generateSTEP_DXF(configSnapshot)`.

  * `generateCNCPrograms(configSnapshot)`.

* Ensure every artifact stores pointer to canonical `configId` \+ `catalogVersion`.

* Robust geometry validation (no self‑intersections, clearances obeyed).

---

### **1.11 `services/optimizer-service`**

**Purpose**

* OR‑Tools CP‑SAT layout optimization (P2 topological optimization).

**Stack**

* FastAPI (Python) \+ OR‑Tools, or Rust \+ OR‑Tools.

**Checklist**

* Scaffold from FastAPI microservice template.

* Implement CP‑SAT model for cabinet placement & appliance zones.

* Implement time‑bounded `solve` (e.g. 50–100 ms) with warm starts.

* Expose `optimizeLayout(problemSpec)` over gRPC/HTTP to `bff-configurator`.

**ML / AI**

* Accept optional weight vector from AI (priorities for objectives) but solver enforces feasibility.

---

### **1.12 `services/ai-agent-service`**

**Purpose**

* Host LLM tools/agents for design copilot, CPQ copilot, catalog assistant, manufacturing advisor.

**Stack**

* FastAPI/NestJS \+ LangGraph/LangChain; vLLM backend for OSS models.

**Checklist**

* Define tools for:

  * `nlToParamSpec`, `nlToRuleDSL`, `suggestLayoutHeuristics`, `explainPriceDelta`, `summarizeDesignSession`.

* Enforce tool‑only mutations (no unconstrained writes).

* Log all prompts & outputs for evaluation.

---

### **1.13 `services/workflow-service`**

**Purpose**

* Temporal workers for Sale → Factory workflows.

**Checklist**

* Scaffold from `temporalio/samples-typescript`.

* Implement workflows:

  * `OrderPlacementWorkflow`.

  * `ManufacturingJobWorkflow` (CPQ → CAD/CAM → manufacturing).

* Idempotent activities for each external call.

* Set explicit timeouts on all activities:

  * Compute-heavy (geometry/pricing): startToCloseTimeout 30s, scheduleToCloseTimeout 2m

  * I/O to remote services: startToCloseTimeout 10s, scheduleToCloseTimeout 30s

  * Cache lookups: startToCloseTimeout 3s, scheduleToCloseTimeout 10s

* Apply exponential backoff retry: initialInterval 1s, backoffCoefficient 2.0, maxInterval 15s, maxAttempts 5

* Emit workflow.events to Kafka with schema {workflowId, workflowType, status, timestamp, projectId, tenantId}

* Use Temporal versioning APIs (patched/deprecatePatch) for all workflow changes to avoid breaking in-flight executions

---

### **1.14 `services/integrations/*` (CRM/ERP)**

* Thin NestJS services based on Nest+Kafka boilerplate.

* Consume domain events → call external APIs (Salesforce, SAP, etc.).

* Provide webhooks for external systems to push updates back.

---

### **1.15 `packages/shared-types`**

* TS types \+ JSON Schemas \+ protobuf definitions for:

  * Param spec, catalog snapshot, quote, BOM, CNC job, events.

---

### **1.16 `packages/param-kernel-wasm`**

* Rust → WASM parametric kernel; constraint solving & lightweight meshing.

---

### **1.17 `infra/*`**

* K8s manifests (patterned from Online Boutique / Sock Shop).

* Terraform/Pulumi modules for DBs, Kafka, Temporal, object storage.

* Observability stack (OpenTelemetry, Prometheus, Grafana, Loki).

---

## **2\. Issue breakdown: Epics → Stories (with architecture lenses)**

I’ll group by epics that map to your 5‑step integration plan.

---

### **Epic E1 – Monorepo & foundational platform**

**Goal:** Nx/Turbo monorepo, identity & tenancy, CI/CD \+ K8s baseline.

**Stories**

1. E1‑S1: Initialize Nx/Turborepo monorepo

   * Define `apps/`, `services/`, `packages/` structure.

2. E1‑S2: Integrate `vercel/platforms` multi‑tenant routing into `apps/studio-web`.

3. E1‑S3: Implement shared identity model (users/tenants/roles) across services.

4. E1‑S4: Set up Postgres, Redis, Kafka, Temporal, object storage via Terraform.

5. E1‑S5: Baseline CI pipeline (lint, typecheck, unit tests).

6. E1‑S6: K8s deployment templates for core services.

**Architecture dimensions**

* **User flow:** basic auth \+ tenant routing; no CPQ yet.

* **Structural:** monorepo, microservices skeletons, event bus, workflow engine.

* **Runtime:** Next.js, NestJS, Postgres, Kafka, Temporal, Redis, K8s.

* **ML/AI:** none; infra only.

* **Data/API:** core identity \+ tenancy schemas, tRPC gateway stub.

* **DevEx:** devcontainers, task runners, CI scaffolding.

---

### **Epic E2 – Parametric kernel, optimization & BFF**

**Goal:** Deterministic param kernel (Rust/WASM), OR‑Tools optimizer, low‑latency BFF and 3D app integration.

**Stories**

1. E2‑S1: Implement `packages/param-kernel-wasm` (room \+ cabinet model, constraints).

2. E2‑S2: Create `services/optimizer-service` with CP‑SAT layout solver.

3. E2‑S3: Implement `services/bff-configurator` tRPC API (`mutateParams`, `getLayouts`).

4. E2‑S4: Wire `apps/configurator-3d` to kernel \+ BFF; basic P1–P3 flows.

5. E2‑S5: Performance tests for P95 \< 100 ms for param change → layout update.

**Architecture dimensions**

* **User flow:** P1–P3 continuous design loop (init, layout, refinement).

* **Structural:** kernel \+ optimizer as compute plane; BFF isolates UI; 3D app as micro‑frontend.

* **Runtime:** Rust/WASM, Python OR‑Tools, NestJS, Babylon.js.

* **ML/AI:** optional heuristic weights from `ai-agent-service`; solver remains ground truth.

* **Data/API:** design sessions in Redis/Postgres; gRPC between BFF and optimizer/kernel; tRPC to front‑end.

* **DevEx:** property‑based tests for invariants (no collisions, NKBA clearances).

---

### **Epic E3 – Catalog, rules, CPQ and data consistency**

**Goal:** Immutable catalog core, CPQ engine, canonical model invariant.

**Stories**

1. E3‑S1: Implement `catalog-rules-service` with draft/publish \+ versioned snapshots.

2. E3‑S2: Build `apps/layedit-admin` for catalog/rule authoring & testing.

3. E3‑S3: Implement `cpq-service` (pricing, scenarios, approvals).

4. E3‑S4: Connect BFF/3D app to catalog/CPQ (pricing in P4).

5. E3‑S5: Ensure all artifacts (quotes, BOM, CNC) carry `(configId, catalogVersion)` pointers.

**Architecture dimensions**

* **User flow:** business users update catalog; dealers price configurations; quotes created/approved.

* **Structural:** catalog core feeding CPQ, kernel, CAD via snapshot events.

* **Runtime:** NestJS \+ Postgres \+ Kafka.

* **ML/AI:** LayEdit assistants for NL → rule DSL & test generation.

* **Data/API:** versioned catalog models; GraphQL/REST for external exposure; events for snapshot distribution.

* **DevEx:** rule regression test harness auto‑run on catalog publish.

---

### **Epic E4 – CAD/CAM, manufacturing & workflows**

**Goal:** End‑to‑end Sale → Factory chain with Temporal orchestrating CAD, nesting and CNC.

**Stories**

1. E4‑S1: Implement `cad-cam-service` (drawings, STEP/DXF, CNC program generation).

2. E4‑S2: Implement `manufacturing-service` and job schemas.

3. E4‑S3: Implement `workflow-service` workflows (`OrderPlacementWorkflow`, `ManufacturingJobWorkflow`).

4. E4‑S4: Wire events: `quote.approved` / `order.paid` → workflow → jobs → CNC outputs.

5. E4‑S5: Ops console for job queue & CNC status in `apps/ops-console`.

**Architecture dimensions**

* **User flow:** quote approved → manufacturing jobs created → CNC programs delivered → completion & tracking.

* **Structural:** Temporal as durable execution layer; CAD/CAM and DFM as activities; manufacturing service as job orchestrator.

* **Runtime:** OCCT, Rust/Node, NestJS, Temporal, K8s.

* **ML/AI:** manufacturing agent to suggest batching, detect anomalies in CNC/logs, but always layered over deterministic simulation.

* **Data/API:** CNC artifacts in object storage; job state in Postgres; events in Kafka.

* **DevEx:** synthetic load tests for BOM/CNC generation throughput; visual diffing of generated drawings.

---

### **Epic E5 – AI layer & assistants**

**Goal:** Realistic, assistive AI across design, catalog, CPQ, CRM, manufacturing.

**Stories**

1. E5‑S1: Stand up `ai-agent-service` with base tools for param, rules, CPQ & CAD.

2. E5‑S2: Design copilot in configurator (chat → tool calls).

3. E5‑S3: Catalog assistant in LayEdit (NL → rules \+ tests).

4. E5‑S4: Sales copilot in Studio web (explain prices, suggest alternatives, summarize sessions).

5. E5‑S5: Manufacturing advisor agent (batching, scheduling hints).

**Architecture dimensions**

### **Epic E6 – UX coherence, performance, observability & SRE**

**Goal:** Guarantee UX latency, visual consistency, and operational reliability.

**Stories**

1. E6‑S1: Implement latency budgets per critical path (UI P95 \< 150 ms; BOM \< 5 s; CNC \< 30 s).

2. E6‑S2: Instrument all services with OpenTelemetry, set up Prometheus/Grafana dashboards.

3. E6‑S3: 3D visual regression pipeline for configurator.

4. E6‑S4: Performance test suite (k6/Locust) simulating configurator → CPQ → manufacturing flows.

5. E6‑S5: SLOs & alerting: configurator availability, quote latency, job failure rates.

6. E6‑S6: Replace all console.log with structured logger from `libs/instrumentation-otel`; ensure trace_id/span_id correlation.

7. E6‑S7: Implement CI checks to detect local type clones (scan for duplicate type/interface names matching `libs/shared-types` canonical types).

**Architecture dimensions**

* **User flow:** smooth, predictable response times through the full Sale → Factory path.

* **Structural:** standardized observability cross‑cutting all microservices.

* **Runtime:** Otel, Prometheus, Grafana, Loki, GitOps CD.

* **ML/AI:** optional anomaly detection on metrics/logs using OSS LLMs/ML, but SLOs remain metric‑driven.

* **Data/API:** time‑series in Prometheus/ClickHouse; trace IDs as first‑class correlation keys.

* **DevEx:** fast feedback; perf regressions fail CI by design.

**Architecture dimensions**

* **User flow:** smooth, predictable response times through the full Sale → Factory path.

* **Structural:** standardized observability cross‑cutting all microservices.

* **Runtime:** Otel, Prometheus, Grafana, Loki, GitOps CD.

* **ML/AI:** optional anomaly detection on metrics/logs using OSS LLMs/ML, but SLOs remain metric‑driven.

* **Data/API:** time‑series in Prometheus/ClickHouse; trace IDs as first‑class correlation keys.

* **DevEx:** fast feedback; perf regressions fail CI by design.

---

