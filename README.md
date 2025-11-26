# kitchen-cpq-platform

As of November 26 2025, propose the optimal tech stack for a frontier end-to-end web platform using advanced 3D graphics and UI libraries to provide real-time generative and parametric kitchen design visualization. 

More context on the application:

Frontier end-to-end web platform (with microservices, APIs, and databases in the cloud) platform using advanced 3D graphics and UI libraries to provide real-time generative and parametric kitchen design visualization. Babylon.js for 3D rendering in the browser. The back-end of the web platform  to utilize a microservices architecture. In summary, the web solution combines a React/TypeScript front-end with a cloud-native back-end. Fully integrated platform connecting the entire configure-price-quote and production process in one system. In practice, this means the web client communicates with cloud services that manage pricing rules, catalog data, order processing, and CNC output generation.

**CRM & Sales Platforms:** On the customer-facing side, integrates with CRM and e-commerce platforms. Manufacturers can embed the web configurator on their website, allowing end-consumers or dealers to configure products online with real-time pricing and visuals.Upon completion, the system can either direct the user to a nearby retailer or enable online checkout. All the while, the configuration and customer info can feed into a CRM or sales order system. This connectivity ensures that data like customer selections, quotes, and orders captured are not siloed – they can create or update records in CRM platforms (for follow-up, customer info) and e-commerce/online store systems for a smooth purchase process.

**Manufacturing & CAD Outputs:** built to bridge sales with manufacturing (“design-to-manufacturing”). It automatically generates detailed manufacturing data from the design: complete Bills of Materials, parts lists, cut lists, technical drawings, and CNC machine programs are produced in the background as the user configures a product. These outputs can be sent directly to production equipment. For instance, the platform can directly integrate with CNC machinery, exporting the necessary machine code or nesting information to drive cutting and fabrication without manual intervention. In many cases, manufacturers use this platform to eliminate separate CAD drafting – the system’s CAD automation functionality auto-generates accurate 2D/3D drawings and CAD files for each custom configuration. The integration to production can extend to robotics and IoT on the shop floor as well (as part of the broader smart factory vision).

**Other Design/Visualization Tools:** a self-contained design tool with a powerful parametric graphics engine, so it typically replaces the need for separate CAD software in the sales process. It is not described as integrating with general-purpose CAD systems like AutoCAD or SolidWorks; instead, it provides its own design interface and rendering. However, it does support modern visualization enhancements – for example, some case studies mention using 3CAD alongside AR (Augmented Reality) to deliver immersive customer experiences (e.g. allowing customers to visualize configured furniture in their space via AR). Data can be consumed by AR/VR presentation tools, though those are likely implemented as add-ons rather than open integrations.

Overall, integration capabilities cover the full spectrum: front-office to back-office. It connects web front-ends, sales tools, and CRM on one side, through to ERP, inventory, and CNC/production systems on the other, all in real time. This “single system from sale to factory” approach is a key selling point.

**APIs and SDKs:** delivered as a turnkey solution rather than a platform for third-party developers.

**LayEdit & Catalog Tools:** a web app that runs in the browser to create and update the product catalogs. LayEdit is a web-based application where product experts define the parametric models, options, pricing rules, and configurations (essentially programming the “catalog”. 

Here’s the stack I’d pick today (2025‑11‑26) for a frontier, end‑to‑end, 3D kitchen CPQ + CAD‑to‑CNC platform like you described.

0. Design principles (what this stack is optimized for)
Target properties:
Latency: sub‑50 ms UI response for common operations, with 60 FPS 3D camera and <100 ms for “re‑layout + repricing” after a change.


Correctness: one canonical parametric model shared across: 3D viz, pricing, BOM, and CNC.


Throughput: O(10³–10⁴) concurrent active planners per region, with bursty peaks.


Changeability: catalogs and rules change faster than code; catalog tooling is first‑class.


End‑to‑end: same model drives CRM, ERP, CAD, CNC, IoT/robotics.


Everything below is chosen to optimize those constraints.

1. Front‑end & 3D layer
1.1 Core web stack
Framework:


React 19.2 – use the latest stable React 19 line (new compiler, improved concurrency APIs). (React)


Next.js 16 as the primary app shell / portal (SSR for marketing, app router, multi‑tenant portals), with the configurator itself as an embeddable “micro‑frontend” (see below). Next 16 ships Turbopack as default bundler for 2–5× faster builds and 10× faster HMR in large codebases, which matters with shared design systems and multiple apps. (Next.js)


Language:


TypeScript 5.9.x (latest 5.9.3 on npm) – aligns with React 19/Next 16, and the node20 module option matches modern Node runtimes. (Microsoft for Developers)


Why: React 19 + Next 16 + TS 5.9 is the “frontier” mainstream stack right now: highly supported, battle‑tested, and performance‑oriented.
1.2 3D engine & rendering
3D engine: Babylon.js 8.x (latest 8.38) (Babylon.js)


Mature WebGPU/WebGL engine, PBR, node material editor, physics, inspector, and great support for complex product configurators.


Babylon 8 focuses on performance optimizations and new features for advanced web graphics. (Babylon.js)


Concrete patterns:
Split rendering & logic:


Babylon scene + materials + camera in the main UI thread.


Geometry computation, collision, layout generation in Web Workers with WebAssembly (WASM) to avoid frame drops.


Scene complexity management:


Use instancing / cloning systems and LOD support in Babylon for repeated cabinet modules. (Babylon.js)


Pre‑bake static geometry (walls, windows) and keep only cabinets and dynamic components as updatable meshes.


Target frame budget: 60 FPS → ~16.7 ms per frame. You aim for:


≤ 6–7 ms rendering (GPU),


≤ 3–4 ms JS on main thread,


heavy layout/optimization offloaded to Workers/WASM.


1.3 UI framework & state
Component / design system:


Base: Radix UI + TailwindCSS (or UnoCSS) for low‑level primitives, plus a custom design system library.


State management:


TanStack Query for server state (pricing, catalogs, quote data).


Zustand or Jotai for local scene/UI state—simple, low overhead.


Type‑safe client→server calls:


tRPC v11 for internal frontend–backend RPC from React to the BFF/API services, giving fully type‑safe contracts without GraphQL boilerplate. (Medium)


1.4 Embeddable configurator
Goal: manufacturer websites, dealers, or white‑label e‑com sites can embed the same configurator.
Build the configurator as a standalone React+Babylon SPA packaged as:


a Web Component (custom element) or


a small JS SDK (<100 KB) loaded via <script src="...">, which bootstraps a React root into a container div.


Host the shell in Next.js 16, serve the configurator bundle off a CDN, and expose an SDK like:


createKitchenConfigurator({
  container: HTMLElement,
  tenantId: string,
  locale: string,
  authToken?: string,
  onQuoteReady?: (quoteId: string) => void,
});

This satisfies:
embeddability,


multi‑tenant theming,


clear performance boundaries (configurator bundle is separate from host site).



2. Parametric & generative design engine
This is the core IP. I’d treat it as a shared computational kernel, available both client‑side (WASM) and server‑side (for authoritative checks & manufacturing).
2.1 Geometry & CAD kernel
Core CAD kernel: Open CASCADE Technology (OCCT) in C++ as the solid‑modeling backbone.


OCCT is the only full‑scale open‑source 3D CAD/CAM/CAE kernel (LGPL), widely used in engineering applications. (opencascade.com)


Provides B‑rep modeling, Boolean ops, fillets, sectioning, healing, plus data exchange for STEP/IGES/IFC/OBJ/STL/glTF, which you’ll need for CAD outputs. (Wikipedia)


Deployment pattern:
Server‑side CAD service:


Written in C++ (OCCT), wrapped in Rust or C++17/20 microservice, compiled for Linux and deployed as a container.


Exposes a gRPC/HTTP API like:


POST /cad/generate-2d-drawings


POST /cad/generate-step-and-dxf


POST /cad/estimate-cnc-ops


Optional WASM build: OCCT can target WebAssembly; you can use a reduced kernel in‑browser for light operations (e.g. fast previews, section cuts, measurements), while heavy Booleans/offsets remain server‑side. (Wikipedia)


2.2 Parametric model & DSL
Internally define a declarative DSL for kitchen layouts:
Entities:


Walls W = {w₁, …, w_m}


Modules M = {m₁, …, m_n} with param vector pᵢ (width, height, depth, door type, handles, materials,…)


Constraints C = {c₁, …, c_k} (clearances, work triangles, appliance ergonomics, building codes)


The DSL compiles to:


A graph of constraints (nodes = parameters, edges = constraints),


A geometry graph which the engine evaluates into actual solids/meshes via OCCT and Babylon.


Implement the evaluator in Rust, then:
Compile to WASM for front‑end,


Run the same Rust code natively in a back‑end microservice.


Rust is ideal here: strong type system, memory safety, high performance, great WASM story.
2.3 Generative layout (optimization engine)
Formulate layout as a mixed‑integer problem:
Discretize walls into cells j = 1..J (grid step g, e.g. 10 mm).


Binary decision variable x_{i,j} = 1 iff module i starts at cell j.


Non‑overlap constraints:


[
 \forall j: \sum_{i} \sum_{k: j \in [k, k+w_i/g-1]} x_{i,k} \le 1
 ]
Ergonomic constraints: min distances to appliances, door swing, work triangle, etc. expressed as linear inequalities.


Objective example:


[
 \max \left( \alpha \cdot \text{storage_volume} + \beta \cdot \text{counter_area} - \gamma \cdot \text{filler_length} - \delta \cdot \text{walkway_penalty} \right)
 ]
Use Google OR‑Tools CP‑SAT (open‑source, high‑performance combinatorial optimizer) as the solver. (Google for Developers)
Stack:
Optimization microservice:


Implemented in Python or Rust:


Py: OR‑Tools has first‑class Python bindings, very productive for modeling. (Google for Developers)


Rust: call OR‑Tools via FFI if you want a single compiled language in the compute plane.


Exposes a gRPC API OptimizeLayout(problem_spec) → layout_solution, with strict time limit e.g. 50–100 ms per request.


For online use you:


Warm‑start from existing layouts,


Use aggressive time limits and accept near‑optimal solutions,


Precompute “canonical” layouts offline and choose from them for typical room shapes.


This gives a mathematically rigorous generative engine with predictable complexity and tunable performance.

3. Backend: microservices, APIs, and workflows
3.1 Service breakdown (domain‑oriented)
Each domain is a service (or small cluster):
Identity & Tenancy


Catalog & Rules (LayEdit backend)


Configurator / Session service (authoritative param + pricing validation)


Pricing & CPQ


Orders & Payments


Manufacturing / DFM & CNC


Integrations (CRM, ERP, e‑com)


CAD/CAM engine (OCCT)


Optimization engine (OR‑Tools)


Notification & Document service (quotes, PDFs, emails)


3.2 Backend tech choices
Primary backend language/framework:


Node.js (LTS) + NestJS for most domain services:


Nest is a TypeScript‑first framework tailored for microservices, with built‑in transports (TCP, Redis, Kafka, gRPC) and modularity. (NestJS Documentation)


TS end‑to‑end alignment with React/tRPC reduces cognitive load and schema drift.


High‑performance compute services:


Rust for:


DFM calculations (cut list optimization, nesting),


CNC toolpath generation,


Any CPU‑bound geometry or simulation that can’t fit in WASM performance budgets.


Workflow / orchestration:


Temporal for long‑running workflows (quote lifecycle, order–>payment–>manufacturing–>shipping). Temporal is an open‑source durable execution engine: workflows are crash‑proof and stateful without you hand‑rolling sagas & retries. (Temporal)


Examples:
A KitchenOrderWorkflow in Temporal coordinates:


Payment capture,


Final param validation,


BOM & CNC generation,


ERP/CRM synchronization,


Production job creation,


Notifications.


Temporal guarantees exactly‑once semantics for these chains even across failures, which is ideal for manufacturing orders.
3.3 API styles
Internal (front‑end ↔ BFF):


tRPC v11 between Next.js/React and a BFF service (Nest or standalone Node) – fully type‑safe RPC. (Medium)


Internal (service ↔ service):


gRPC for low‑latency binary calls between high‑traffic microservices (Configurator ↔ Optimization, Configurator ↔ CAD/DFM).


External (partners, CRM/ERP/e‑com):


REST/JSON and/or GraphQL:


REST for webhooks and simple integrations,


GraphQL for partner portals or custom dashboards.


3.4 Event‑driven backbone
Use an event‑driven architecture to decouple services:
Event bus: Apache Kafka or Redpanda (or managed Confluent Cloud / MSK) as the event log:


Well‑established for microservices and streaming; CNCF & Confluent emphasize Kafka‑style event buses as standard for event‑driven microservices in 2024–25. (Medium)


Typical topics:


catalog.updated, layout.optimized, quote.created, order.confirmed, manufacturing.job.created, shipment.dispatched, etc.


Autoscaling: use KEDA with Kubernetes to autoscale event consumers based on Kafka lag, as recommended for event‑driven microservices. (CNCF)


This lets you cleanly add new integrations (e.g. “whenever an order is confirmed, push to new ERP X”) by subscribing to events instead of touching existing services.

4. Data layer
You need multiple storage types; trying to make one DB do everything is where “optimal” dies.
4.1 OLTP (core transactions)
PostgreSQL 16 as the central OLTP store:


Orders, quotes, customers, user accounts, payments, manufacturing jobs.


Use logical replication / read replicas for analytics and reporting.


Schema design:


Strong relational modeling for financial and manufacturing entities.


Use JSONB for flexible per‑tenant metadata when needed.


4.2 Catalogs, rules, and configurations
Catalog DB: still Postgres, but logically separate cluster:


Tables for product families, param domains, constraints, rule revisions.


Immutable versioning of catalog/rule sets so quotes are reproducible under historic rules.


Search: OpenSearch or Meilisearch index for:


front‑end product search, filter, autocomplete,


rule/catalog lookup for LayEdit users.


4.3 Events and time‑series
Event store: Kafka as the streaming log (+ compacted topics for durable event sourcing).


Time‑series / observability metrics:


Prometheus + long‑term storage or ClickHouse / TimescaleDB for business metrics (design sessions, conversions, manufacturing throughput).


4.4 Files & CAD artifacts
Object storage: cloud‑native (S3 / GCS / Azure Blob) for:


GLB/glTF meshes, STEP/IGES/DXF, PDFs for drawings/quotes, CNC programs.


Use content‑addressable storage (hash‑based keys) to dedupe repeated geometry for identical modules.



5. Integrations: CRM, ERP, e‑com, CNC, IoT
5.1 CRM & sales platforms
Dedicated “CRM integration” microservices, one per platform:


Salesforce: via REST/Bulk/Streaming APIs.


Microsoft Dynamics, HubSpot, etc.


Triggered by events on Kafka (quote.created, order.confirmed).


Pattern: eventually consistent; CRM records are projections of core domain entities.


5.2 E‑commerce platforms
Embeddable configurator connects to:


Shopify / commercetools / custom e‑com via REST/GraphQL API.


Flow:


Configurator produces priced configuration with a canonical ID.


E‑com cart holds a pointer to that configuration rather than duplicating all data.


At checkout, backend re‑validates price & availability before finalizing order.


5.3 ERP & manufacturing systems
ERP connectors: SAP, MS Dynamics 365, Oracle, local manufacturing ERPs.


Consume manufacturing events (manufacturing.job.created) and push BOM, routing, and scheduling data.


CNC & robotics:


CNC integration through the Manufacturing / DFM service:


Generates G‑code or vendor‑specific NC from OCCT geometry and parametric model.


IoT / robotics integration via:


MQTT or OPC UA from dedicated “shop‑floor gateway” microservices.


The design keeps your platform a turnkey product (no public platform APIs), while still being deeply integrated with partners via well‑bounded connectors.

6. LayEdit‑style catalog & rules tooling
Treat catalog tooling as its own product:
Front‑end: Next.js 16 + React 19 + TS 5.9 (same stack)


Capabilities:


Visual editors for product trees, parameters, constraints.


Monaco‑based code editor for DSL/rule scripts with:


static analysis (linting, type checking),


test harness (sample rooms, auto‑generated cases),


preview in an embedded Babylon 3D viewport.


Runtime:


Ops against Catalog & Rules service.


Use Temporal workflows for publishing pipelines:


Draft → validation → review → staged environment → production.


This keeps high‑change business logic out of general code deployments and in a safe, auditable workflow.

7. Infrastructure, DevOps, and SRE
7.1 Cloud & orchestration
Cloud: any major (AWS/GCP/Azure); design for portability, but pick one for real deployments.


Orchestration: Kubernetes (EKS/GKE/AKS):


Each service as a container,


Horizontal Pod Autoscaler + KEDA for event‑driven scaling. (CNCF)


Service mesh: Istio or Linkerd for:


mTLS between services,


traffic policies, retries, circuit breaking,


uniform telemetry.


7.2 CI/CD & infra as code
CI: GitHub Actions / GitLab CI, with:


unit + integration tests,


visual regression for 3D scenes (snapshot renders),


property‑based tests for the parametric engine.


CD: Argo CD / Flux for GitOps deployment.


Infra as Code: Terraform or Pulumi describing:


K8s clusters, networks, databases, Kafka, object storage, Temporal cluster.


7.3 Observability
Tracing & metrics:


OpenTelemetry instrumentation in all services.


Prometheus + Grafana for metrics dashboards.


Tempo/Jaeger for distributed traces (especially Temporal workflows and cross‑service CPQ flows).


Logging: Loki / Elastic Stack.


You want SLOs like:
P95 latency: <150 ms for configuration changes that hit backend (pricing, BOM).


P99 latency: <500 ms for “generate CAD + CNC preview”.


Availability: 99.9%+ for configurator API.



8. Security & multi‑tenancy
AuthN & AuthZ:


OIDC provider (Auth0 / Azure AD / Keycloak) for identity.


Fine‑grained auth in backend via OPA / OpenFGA policies.


Zero‑trust network:


mTLS in mesh, no implicit trust by subnet (aligns with modern microservice/zero‑trust best practices). (Medium)


Data tenancy:


Either:


single shared DB with row‑level security per tenant, or


schema‑per‑tenant for large manufacturers.


Hard multi‑tenancy boundaries at the database and object storage levels.



9. Condensed “optimal stack” table
Client / 3D
React 19.2, Next.js 16, TypeScript 5.9.x (React)


Babylon.js 8.x for 3D, WebGPU/WebGL, plus WebAssembly + Web Workers for heavy geometry. (Babylon.js)


Radix UI + Tailwind, TanStack Query, Zustand/Jotai, tRPC v11. (Medium)


Parametric / CAD / Optimization
Parametric engine in Rust → WASM + native.


CAD kernel: Open CASCADE Technology (OCCT) C++ service. (opencascade.com)


Optimization: Google OR‑Tools CP‑SAT via Python/Rust microservice for generative layouts. (Google for Developers)


Backend / Services
Node.js + NestJS for domain microservices. (NestJS Documentation)


Rust for DFM/CNC and performance‑critical services.


gRPC for service‑to‑service, REST/GraphQL for external integrators.


Event backbone: Kafka/Redpanda with KEDA‑based scaling. (Medium)


Workflow engine: Temporal for durable orchestration. (Temporal)


Data & Infra
OLTP: PostgreSQL 16; catalog DB (also Postgres) + OpenSearch/Meilisearch.


Time‑series/analytics: Prometheus + ClickHouse/Timescale.


Event log: Kafka; object storage: S3/GCS/Azure Blob.


Kubernetes + service mesh (Istio/Linkerd), Argo CD, Terraform, full OpenTelemetry pipeline. (CNCF)

---


1. Monorepo + multi‑tenant SaaS baseline
1.1 Multi‑tenant Next.js shell (portals, admin, dealer UI)
Template: vercel/platforms – “Next.js Multi‑Tenant Example”
Full‑stack Next.js 15 + React 19 app that demonstrates subdomain‑based multi‑tenancy (tenant‑specific content per tenant.yourdomain.com).


Uses App Router, Tailwind 4, shadcn/ui, and Upstash Redis. (GitHub)


Why it’s ideal for you
Already solves the hard multi‑tenant UX problem (brandable portals for different manufacturers/dealers).


TS‑heavy, React 19‑native, and built for Vercel but deployable on any infra.


How I’d use it
Treat this as the “experience shell”:


/admin: manufacturer admin & LayEdit‑style catalog UI.


/dealer: dealer portal (quotes, orders).


/consumer: public configurator entry points.


Replace its Redis tenant store with Postgres (RLS) for stronger guarantees, keeping the subdomain routing logic as‑is.



1.2 Full‑stack SaaS boilerplate (auth, billing, teams)
You don’t want to reinvent auth, teams, billing, etc.
Template A: wasp-lang/open-saas
A free, open‑source SaaS starter built on React + Node.js + Prisma with Stripe/Lemon Squeezy, S3 uploads, email, admin dashboard, etc. (GitHub)


Template B (catalog of options): EinGuterWaran/awesome-opensource-boilerplates
Curated list of production‑ready SaaS boilerplates including:


Open SaaS (above),


BoxyHQ SaaS Starter Kit (enterprise SSO, audit logs, multi‑tenant),


Next.js SaaS Starter, Nextacular, Platforms Starter Kit, etc. (GitHub)


How I’d use them
Pick one SaaS boilerplate to seed your non‑3D concerns:


Use its auth, users, teams, subscription, email, settings.


Wire its front‑end pages into the vercel/platforms multi‑tenant shell (or vice‑versa).


Enforce a single identity model across all services (user, tenant, role), to avoid later schema hell.



1.3 Type‑safe full‑stack Next+tRPC baseline
Template: t3-oss/create-t3-app
CLI that scaffolds a typesafe Next.js app with tRPC, Prisma/Drizzle, NextAuth, Tailwind, etc.(GitHub)


Why still use it if you already have platforms + SaaS boilerplates?
Gives you battle‑tested tRPC wiring and end‑to‑end TS types; perfect for:


A BFF layer for your configurator,


Internal admin tools where tRPC’s type‑safety shines.


Integration pattern
Use create-t3-app once to learn and then port its tRPC patterns into your monorepo (with Nx or Turborepo) instead of running it as a separate app.



2. 3D configurator front‑end (Babylon.js + React/WebGPU)
You want a frontier WebGPU‑first Babylon setup that still plays nicely with React/Next.
2.1 Raw Babylon 8 + WebGPU + Vite template
Template: eldinor/bp800 (Babylon.js 8 + Vite 6 + TypeScript + Havok)
Maintained template explicitly updated for Babylon 8.0:


WebGPU engine by default, WebGL2 fallback.


Havok physics pre‑wired, FPS counter, inspector, default rendering pipeline (FXAA/MSAA). (Babylon.js)


How to use it
Treat this as the 3D engine package in your monorepo:


Keep its Vite setup and scene lifecycle as a pure TS library.


Expose a clean API like createKitchenScene(canvas, params) the rest of the platform calls.


You can mount its canvas inside your Next.js app (from vercel/platforms) via a simple React wrapper component.



2.2 Next.js + Babylon integration templates
Template A: nanlab-tech/turborepo-nextjs-babylonjs
Starter for Turborepo + Next.js + Babylon.js; separates 3D logic into its own package and exposes an API for the web interface. (Babylon.js)


Template B: sevaseva/babylonjs-nextjs (“smallest template” for Next+Babylon)
Minimal working Next.js + Babylon.js app, good for understanding SSR boundaries and bundling issues. (Babylon.js)


Template C: brianzinn/create-react-app-babylonjs + react-babylonjs
CRA starter showing how to integrate Babylon with React and Redux. (GitHub)


Recommended fusion
Use turborepo-nextjs-babylonjs for the overall pattern (web app + 3D package separation) and swap the 3D package to use bp800’s Babylon 8 WebGPU template internally.


Use react-babylonjs selectively for scenes where a declarative React graph buys you maintainability (UI‑heavy parts, overlays), and keep core performance‑critical scenes imperative.



3. Parametric & CAD kernel (Rust/WASM + OpenCascade)
You need a shared kernel that runs in browser and services.
3.1 Rust → WebAssembly baseline
Template: rustwasm/wasm-pack-template + wasm-bindgen guide
Template specifically for compiling Rust libraries to WebAssembly and publishing them to npm. (GitHub)


Usage
Use this to create a geometry-kernel crate:


Parameter evaluation,


Constraint solving (geometric, simple layout),


Mesh generation wrapper around your CAD engine.


You’ll get:


JS/TS bindings via wasm-bindgen,


An npm package you can import from both the Next.js app and Node services.


3.2 CAD/B‑REP & technical drawings
Template: donalffons/opencascade.js + OpenCascade WebAssembly docs
opencascade.js is a JS/WASM port of the OpenCascade CAD kernel with examples and docs (B‑REP, STEP, etc.).(GitHub)


How to use it
For browser‑side or server‑side CAD tasks that need exact geometry:


Build a cad-service using opencascade.js (browser or Node) or a native OCCT service.


Use the examples repo referenced in opencascade.js README as a boilerplate for B‑REP ops and STEP/DXF export.(GitHub)


Fusion pattern
Rust/WASM kernel handles parametric logic + lightweight geometry.


opencascade.js handles exact CAD + export:


WASM or native service depending on performance requirements.



4. Optimization / generative layout engine
4.1 CP‑SAT modeling baseline
Templates / references:
d-krupke/cpsat-primer (CP‑SAT primer repo) – practical intro and sample code for Google OR‑Tools CP‑SAT.(GitHub)


Official OR‑Tools CP‑SAT docs and examples (integer programming, CP) for Python/C++/Java/C#.(Google for Developers)


How to use them
Start with the primer’s examples as the boilerplate for your layout solver:


Rooms → integer grids,


Modules → integer variable sets with constraints,


Objective → mix of coverage, walkway penalties, ergonomic heuristics.


Wrap the solver into a microservice (Python + FastAPI or Rust) seeded by:


A FastAPI microservice template like onlythompson/fastapi-microservice-template for clean architecture + DDD structure. (GitHub)


This gives you:
High‑quality modeling patterns with CP‑SAT.


A clean microservice skeleton that can be plugged into your event‑driven backend.



5. Backend microservices & event‑driven stack
You want NestJS + Kafka + TS as the main backend surface, plus some Python/Rust services.
5.1 Nx monorepo for React + NestJS
Template: phmz/nx-nest-react-monorepo-template
Nx‑based monorepo with Nest.js API + React+Vite front‑end and a shared types library. (GitHub)


Why it’s useful
Encodes monorepo plumbing (Nx config, shared types, testing).


Gives you a place to plug:


vercel/platforms app (replace the sample React app),


NestJS microservices for CPQ, pricing, etc.


Also see the Arg Software “Nx + NestJS monorepo” boilerplate article, which describes a robust DDD+event‑driven setup built on Nx + Nest; even if you don’t copy the code, it’s a strong blueprint. (Medium)

5.2 NestJS + Kafka microservice boilerplates
Template A: andrechristikan/ack-nestjs-boilerplate-kafka
Hybrid NestJS v9 boilerplate with Kafka microservice, MongoDB, containerization and repository pattern. (GitHub)


Template B: toledompm/nestjs-kafka-microservice
Small demo with separate producer/consumer Nest services wired to Kafka via docker‑compose. (GitHub)


Why they matter
They show the canonical NestJS/Kafka configuration, aligned with Nest’s microservices Kafka transport docs.(NestJS Documentation)


Serve as copy‑pasteable baselines for:


CPQ service (consume configuration.updated, emit price.computed),


Manufacturing service (consume order.confirmed, emit bom.generated, cnc.job.created).



5.3 Event‑driven / microservices reference apps (infra & ops)
Template A: GoogleCloudPlatform/microservices-demo (“Online Boutique”)
Cloud‑first microservices demo with 10 services, showing Kubernetes, Istio, gRPC, etc., for an e‑com site. (GitHub)


Template B: microservices-demo/sock-shop (and forks)
Classic microservices demo (Shop microservices) with multiple languages in containers and K8s manifests. (GitHub)


Template C: dotnet-architecture/eShopOnContainers
.NET‑based microservices reference app with DDD, event bus, API gateways, etc. (Microsoft Learn)


Use them as:
Infra & deployment blueprints: K8s manifests, ingress, observability wiring.


Concrete patterns for:


service decomposition,


handling synchronous vs async calls,


cross‑service tracing.


You don’t reuse their business code, but you absolutely reuse their Kubernetes + Istio + CI/CD layout.

5.4 Python microservices baseline
For optimization, ML, etc.
Template: onlythompson/fastapi-microservice-template
Clean‑architecture FastAPI microservice template with DDD organization, tests, and deployment scaffolding. (GitHub)


Use it to build:
layout-optimizer-service (OR‑Tools CP‑SAT).


analytics-service if you do Python‑heavy data analysis.



6. Workflow orchestration (order, manufacturing, fulfillment)
6.1 Temporal TypeScript samples
Templates:
temporalio/samples-typescript – multiple TS sample projects; includes order fulfillment demos. (GitHub)


Why you want this
Temporal gives you durable workflows for:


Quote → payment → manufacturing → shipping.


The samples show how to structure TS workers, activities, and workflows, including a sample e‑commerce order fulfillment workflow. (Learn Temporal)


Integration
Create a workflow-service based on the samples:


Workflows: KitchenOrderWorkflow, QuoteWorkflow.


Activities call your NestJS services and your CAD/CNC engines.


You get exactly‑once semantics without hand‑rolling sagas.



7. Putting it together: concrete fusion plan
7.1 Monorepo skeleton
Use phmz/nx-nest-react-monorepo-template as the root:


Apps:


frontend → replace with vercel/platforms multi‑tenant Next app.


api → gateway/BFF service (NestJS).


Libs:


shared-types → your canonical domain types (configurations, BOM, CNC jobs). (GitHub)


Integrate turborepo-nextjs-babylonjs ideas:


Create a 3d-engine package based on bp800.


Expose a typed API for the Next front‑end to control the Babylon scene. (Babylon.js)


Add a geometry-kernel Rust/WASM package using wasm-pack-template and wasm-bindgen. (GitHub)


For SaaS plumbing (auth, billing, teams):


Either:


Lift patterns from open-saas (auth/billing flows, DB schema) into your monorepo, or


Host open-saas as a separate service and gradually merge. (GitHub)


7.2 Backend & events
Use ack-nestjs-boilerplate-kafka as the template for each NestJS microservice (CPQ, catalog, manufacturing):


Replace Mongo with Postgres, keep Kafka integration and repository pattern. (GitHub)


Stand up Kafka + KRaft and EDA patterns using:


NestJS Kafka docs, Node+Kafka articles, and the Nest/Kafka demo repos as patterns. (Telerik.com)


For Python optimization services:


Clone fastapi-microservice-template, wire in OR‑Tools CP‑SAT based on the CP‑SAT primer & official examples. (GitHub)


7.3 CAD & CNC
Create a cad-service:


Use opencascade.js examples as boilerplate for B‑REP modeling and STEP/DXF export. (GitHub)


Optionally, move heavy CAD generation off‑browser into a Node or C++ service using the same OCCT stack.


Build cnc-service as a NestJS/Rust hybrid:


Use NestJS microservice template for transport and wiring.


Implement nesting and G‑code generation in Rust within that service.


7.4 Workflows & infra
Spin up a Temporal cluster (locally via temporal server start-dev) and clone temporalio/samples-typescript as your workflow-service starting point. (GitHub)


For Kubernetes manifests, ingress, and observability:


Copy patterns from microservices-demo (Online Boutique) and optionally from Sock Shop / eShopOnContainers for more perspectives on event bus, DB per service, etc. (GitHub)



8. Sanity check: why this is “frontier” but realistic
WebGPU + Babylon 8 from bp800 keeps you at the frontier of browser 3D, with WebGL2 fallback and Havok physics ready. (Babylon.js)


React 19 + Next 15 from vercel/platforms plus tRPC from create-t3-app gives you the current top‑tier TS/React stack with multi‑tenancy and type‑safe APIs. (GitHub)


Rust/WASM with wasm-pack-template and opencascade.js is the most powerful open‑source combo for browser‑accessible CAD and parametric kernels right now. (GitHub)


NestJS + Kafka + Nx templates give you a modern TS microservice architecture that lines up with current event‑driven best practices and K8s‑style deployments. (GitHub)


Temporal TS samples and OR‑Tools CP‑SAT references give you durable workflows and industrial‑strength optimization primitives, both of which are proven in production scheduling / CPQ‑style domains. (GitHub)

---


1. Core AI stack decisions (once, used everywhere)
1.1 Model strategy
As of late 2025 you basically have three buckets:
Frontier proprietary LLMs (API):


OpenAI GPT‑5 family.(DataCamp)


Anthropic Claude Opus 4.5, current coding/agentic front‑runner.(The Verge)


Google Gemini 3 / 2.5 tier.(Codingscape)


Use these for hard reasoning tasks, CAD macro synthesis, rule authoring, and anything safety‑critical where you can afford server‑side calls.


Open(-weight) LLMs (server):


Llama/Mistral/Qwen/DeepSeek 70B‑ish models, which 2025 roundups put among the top open options.(DataCamp)


Host via vLLM / TGI for high‑throughput server inference.


Use for cheap bulk tasks: summarization, test generation, log analysis, “2nd opinion” cross‑checks.


In‑browser models (WebGPU):


WebLLM, an open‑source JS framework that runs LLMs entirely in the browser using WebGPU, OpenAI‑API compatible.(GitHub)


Research frameworks like WeInfer show WebGPU can give serious LLM throughput in the browser.(ACM Digital Library)


Use small models here (3B–8B) for on‑device assistants: quick hints, autocomplete, privacy‑sensitive local reasoning.


1.2 Design rules
LLM never the single point of truth.
 Engines (parametric solver, OR‑Tools, CAD kernel, CNC generator) remain the source of physics, geometry, and manufacturability. AI suggests; engines validate.


Tool‑calling everywhere.
 Every model interaction is wrapped in “tools/functions” that call:


paramEngine.applyDelta(...)


optimizer.solveLayout(...)


cadService.generateDrawings(...)


pricingService.price(...)
 mirroring current best practice for agentic LLM use.


Clear latency budgets.


Front‑end live editing: < 200 ms → no remote LLM; only local heuristics or in‑browser WebLLM.


“AI design suggestions”: 0.5–3 s → remote LLM is OK, run in background with progress UI.


Heavy workflows (BOM, CNC, ERP integration): async through Temporal.



2. Parametric & generative layout engines
2.1 Natural language → parametric spec
Where: parametric engine (Rust/WASM) + optimization engine (OR‑Tools).
AI role: translate messy human spec into clean param vectors + constraints.
Pipeline:
User says:
 “U‑shaped, lots of prep space near the window, handle‑less matte white, budget mid‑range.”


LLM (GPT‑5 / Claude 4.5) parses this into a typed spec:


{
  "layout": "U",
  "style": "minimal",
  "frontFinish": "matte_white",
  "handles": "handle_less",
  "budgetBand": "mid",
  "priorityWeights": {
    "prepArea": 0.35,
    "storage": 0.25,
    "applianceProximity": 0.20,
    "trafficFlow": 0.20
  }
}

You feed this into the CP‑SAT model as weights and bounds; the solver computes the actual cabinet placements.


Mathematically:
Let (x) encode cabinet choices and positions.


Let feature vector (f(x) = (\text{prepArea}, \text{storage}, \text{applianceProximity}, \text{trafficFlow})).


LLM gives weights (w).


Optimization problem:


[
 \max_x ; w^\top f(x) \quad \text{s.t.} \quad x \in \mathcal{F}
 ]
where (\mathcal{F}) is the feasible set from all geometric rules (clearances, codes, appliance constraints).
 LLM never decides feasibility; the solver does.
2.2 AI‑assisted “generative suggestions”
Where: optimization engine + layout service.
AI role: heuristic generator and critic for layouts.
Use OR‑Tools CP‑SAT as your ground truth solver, but seed it with candidate patterns or neighborhoods proposed by an LLM:


LLM suggests “put tall units on the blind wall vs around the fridge”.


Solver enforces constraints and optimizes in that neighbourhood.


Conversely, LLM can score or describe generated layouts (“this one sacrifices pantry space for an island; better for social cooking”).


This mirrors current research directions where LLMs assist, but CAD/optimization systems keep the final say.(SpringerLink)
2.3 Sketch / photo → parametric model
Where: parametric engine + front‑end.
AI role: perception front‑end for messy inputs.
Use a vision‑language model (VLM) to:


Read a rough sketch / hand‑drawn floor plan.


Infer wall lengths, doors, windows, plumbing locations.


Convert that into your canonical room model (walls with coordinates, openings, fixed appliances).


This is exactly the pattern in AI interior design tools that take photos/blueprints and output rendered layouts, just with your own param engine behind the scenes.(PA | Architecture and Technology)
Realism constraint: keep it “assistive”, always showing the user the detected geometry for confirmation and letting them correct anything off.

3. CAD & manufacturing engines
You already have a deterministic CAD/BOM pipeline (OCCT/FreeCAD, nesting, CNC). AI should sit on top as a “CAD co‑pilot”, not replace the kernel.
3.1 LLM‑assisted CAD macros
Recent work shows LLMs can drive real CAD APIs from sketches or text, generating scripts that create 3D models.(MIT News)
In your case:
Interpret high‑level change:
 “Make all base cabinets 780mm high except under the window; thicken the countertop where the hob is.”


LLM emits OCCT/FreeCAD script (or your CAD DSL):


for cab in all_base_cabinets():
    if is_under_window(cab): continue
    cab.set_height(780)

for top in worktops_near("hob", distance=600):
    top.set_thickness(40)

CAD service executes the script, but pre‑ and post‑checks:


Pre: static type checks on entities and operations.


Post: validate no interpenetration, clearances ok, manufacturing limits respected.


This closely matches the “LLM‑assisted CAD” framework described in recent engineering design research.(SpringerLink)
3.2 Agent to orchestrate engineering tools
There’s now work on LLM agents orchestrating FreeCAD, meshing tools and solvers for engineering workflows.(arXiv)
You can mirror that:
“Production‑engineer agent” with tools:


generateAssemblyFreeCAD(config),


runPanelNesting(config),


estimateLoadOnWallCabinets(config),


estimateCuttingTime(config).


Agent proposes process improvements or flags manufacturing risk:


“This layout needs non‑standard hinge drilling on 60% of doors; suggest alternative cabinet widths to improve standardization.”


Again, the hard physics is in your existing tools; AI only glues them and explains the consequences.
3.3 CNC & safety
For CNC:
Keep toolpath generation 100% deterministic (your own post‑processors).


Use AI for:


Explaining programs (“this run makes 24 panels, nested into 2 sheets”).


Detecting anomalies in G‑code or simulation logs (outlier detection + LLM explanation).


Optimizing batching/scheduling (predict runtime, group similar jobs).



4. Catalog & rule editing (LayEdit‑style app)
This is a perfect place for frontier AI: human‑authored rules + AI as compiler and QA.
4.1 Natural language → rule DSL
Based on LLM‑assisted CAD frameworks, you can translate text commands into formal rules.(SpringerLink)
Example:
“Under 2.4m ceilings, don’t propose 1050mm wall units unless the user explicitly selects ‘tall wall cabinets’.”
LLM turns that into a DSL snippet:
rule AvoidTallWallUnitsLowCeiling {
  when room.ceilingHeight < 2400mm
   and not userChoice.tallWallUnits
  then forbid cabinet where type == "wall" and height >= 1050mm
}

Flow:
Author enters English in LayEdit.


LLM (GPT‑5/Claude) proposes DSL + unit tests.


Catalog service:


Static‑checks the rule against schema.


Runs tests by calling the parametric engine in “headless” mode.


Human approves → rule versioned and published.


4.2 AI test generator & mutation testing
Have an open‑weight LLM generate negative and edge‑case rooms to stress‑test rules:
Tiny kitchens, weird pillar placements, sloped ceilings, partial walls, off‑grid angles.


You turn “rules” + “kitchen archetypes” into a Cartesian product and let the AI propose crazy variations. The param engine runs them; Temporal records violations; LLM summarizes the broken cases in human terms.
4.3 Catalog search & refactoring assistant
Within the catalog editor:
Semantic search over components:


“Show me all 600mm base cabinets with drawers and no handles.”


Refactoring assistance:


“These 12 rules are all variants of corner‑cabinet clearance. Consolidate them into one conditional rule.”


A local or open‑weight LLM is fine here; the underlying truth is in the catalog DB.

5. CPQ, CRM & business apps
5.1 CPQ co‑pilot
Where: CPQ microservice + dealer portal.
AI tasks:
Suggest alternative configurations that hit price/budget or margin targets:


“If we switch two cabinets to stock sizes, you save 7%.”


Explain price deltas:


“This peninsula adds 3.2 m² of countertop and two custom panels; that’s where the extra €900 comes from.”


Implementation:
LLM sees:


Current configuration (compact JSON),


BOM items, unit costs, discount rules,


Profile (budget, brand, dealer policies).


It can call tools:


simulateChange(delta) → new price + BOM,


getAlternativesFor(cabinetId).


LLM is never allowed to “just invent a price”; every number must come from the pricing service.
5.2 CRM/email & follow‑up assistant
After a design session, Temporal produces a timeline of events.


LLM summarizes it:


“Family with two kids, limited space, wants durable surfaces; interested in island but constrained by 2.9m wall.”


LLM drafts follow‑up emails, proposal texts, showroom appointment summaries.


Here the risk is low and LLMs excel; you can even use mid‑tier open models to save cost.(Inkeep)

6. Front‑end & UI/UX
6.1 Configurator “Design Copilot” (chat + tools)
Where: Next.js/Babylon configurator.
Pattern:
Right‑side “AI copilot” chat.


User can:


Type requests: “Make this more family‑friendly”, “Can I fit a 90cm range here?”.


Click scene elements; the engine passes context (selected cabinet, wall, collision info) into the LLM.


Implementation:
On each message:


Browser sends compact state summary: room dimensions, module list, selection, etc.


LLM chooses tool calls:


suggestLayoutChanges(goal)


checkClearanceAround(entity)


applyStylePreset(presetId)


Engine applies deltas; Babylon updates scene.


For quick, local questions (“what does this symbol mean?”), you can route to WebLLM running in browser, loaded with your docs.(GitHub)
6.2 Visual concept generation
To augment Babylon’s real‑time rendering, call image‑generation models for photo‑realistic stills:
Use an interior‑tuned diffusion model (or an API) like the many AI interior design tools now on the market.(PA | Architecture and Technology)


Prompt is built from:


Exact geometry (from param engine).


Style descriptors (Scandi/minimal/industrial).


Material palette.


You show:
Babylon preview for interactive editing.


Generated photo‑real images for marketing/sales mood.


Realism constraint: treat rendering as asynchronous (queue, progress bar) so you don’t block UI.
6.3 Multi‑modal onboarding
Initial step:
User uploads a photo of current kitchen or a floor plan.


VLM extracts:


Rough dimensions,


Door/window positions,


Appliance locations.


Result is a proposed base scene in Babylon, which user can tweak. This “scan → parametric model” pattern is exactly what consumer AI interior tools are doing already; you’re just making it integrated and parametric.(PA | Architecture and Technology)
6.4 Micro‑interactions & assistive UI
Smart hints: “Move this cabinet 50mm right to center under the window.”


Explanations: “This layout is invalid because the dishwasher door collides with the island; here are two fixes.”


Accessibility: voice‑driven operations (“move the sink to the left wall”, “show all dark wood options”).


Small on‑device models (WebLLM) can handle simple instruction → UI action mappings without hitting the server, improving latency and privacy.

7. Keeping it realistic (phased roadmap)
Phase 0 – Baseline, no AI
Parametric engine + optimization + CAD/CNC all deterministic.


Configurator & LayEdit built, but no AI.


Phase 1 – Low‑risk assistive AI
UI/UX:


Simple copilot chat in configurator (server LLM).


CRM/email summarization + drafting.


LayEdit:


Natural language → DSL drafts (human in the loop).


AI test‑case generator, but rules still curated manually.


These use LLMs as “word machines” and don’t affect correctness of geometry/pricing.
Phase 2 – Semi‑critical design assistance
Parametric/optimization:


NL → param spec → solver (as in §2.1).


LLM‑suggested heuristic layouts that still get hard‑validated.


CAD macros:


LLM generates OCCT/FreeCAD scripts, but you run strict static checks and geometric validations.


Here AI touches geometry, but always filtered by physics‑aware engines.
Phase 3 – Advanced agents & manufacturing analytics
Engineering agents:


LLM orchestrates CAD, nesting, simulation tools (FreeCAD, nesting solver, scheduling), à la computational‑engineering orchestration work.(arXiv)


Global optimization:


Use LLM to propose batching/scheduling policies across orders over days; check them with deterministic simulation.


You only roll this out once safety and explainability are solid.

8. Mapping back to your components
Quick matrix:
Component
AI Role (realistic)
Model tier
Parametric engine (Rust/WASM)
Interpret NL specs; propose layout heuristics; explain constraint violations
GPT‑5 / Claude; OSS
Optimization engine (CP‑SAT)
Generate objective weights; propose candidate layouts; describe trade‑offs
GPT‑5 / OSS LLM
CAD/BOM engine (OCCT/FreeCAD)
Generate macro scripts; refactor CAD features; explain geometry changes
GPT‑5 / Claude
CNC & manufacturing
Explain toolpaths; detect anomalies; optimize batching
OSS LLM + analytics
LayEdit/catalog tool
NL → rule DSL; generate tests; semantic catalog search
GPT‑5 / Claude + OSS
CPQ & pricing microservices
Suggest alternatives; explain pricing; generate offer narratives
GPT‑5 / OSS
CRM / Sales apps
Summaries, emails, opportunity notes
Any LLM
Configurator (React+Babylon)
Design copilot chat; local hints; voice commands; multi‑modal onboarding (photos/plans)
API + WebLLM + VLM
Dealer & internal UIs
Explain reports; suggest configurations; guide through complex forms
OSS / proprietary

---
1. What a CPQ UI needs (pulled from current CPQ literature)
Recent CPQ analysis (CSG 2025, NetSuite 2025) highlights capabilities that have direct UX implications:(CSG)
Real‑time margin visibility → dashboards & line‑item tables where margin columns recalc live.


Progressive order capture → multi‑step / multi‑version quote flows, good history and state handling.


Catalog‑driven architecture & zero‑code configuration → rich, filterable tables for catalog items, rule editors, “business‑user‑friendly” config screens.


In‑flight order change management → strong status/Timeline views, comparisons between versions.


CRM + CPQ convergence → views across customers, opportunities, quotes/pipelines, approvals.


So you’re basically after a CRM + finance dashboard + data-heavy admin UI that can host your more exotic 3D / parametric configurator views.

2. Recommended “frontier” UI template: Studio Admin
Template: “Next.js & shadcn/ui Admin Dashboard – Studio Admin” (Vercel template) (Vercel)
Why this one matches CPQ so well
Modern, future‑proof stack
Next.js 16 (App Router) + TypeScript.


Tailwind CSS v4.


shadcn/ui as component base.


TanStack Table for data‑grid‑style tables (critical for quote line items, margin columns, catalog).


Zod + React Hook Form for robust form flows; Zustand for UI state. (Vercel)


That’s exactly the stack you’d pick if you were designing a greenfield CPQ UI in late 2025.
It already resembles a CPQ/CRM console
From the feature list: (Vercel)
“Prebuilt dashboards (Default, CRM, Finance).”


Authentication flows & screens.


Role‑based access control (RBAC) with config‑driven UI, multi‑tenant support planned.


Flexible layouts (collapsible sidebar, variable content widths).


Theme presets (light/dark + Tangerine, Brutalist, etc).


For CPQ:
CRM dashboard → opportunities, accounts, pipeline, “quotes in progress”.


Finance dashboard → margin visibility, revenue impact per quote, discount analytics.


Default dashboard → you can turn this into “Exec view” for CPQ KPIs.


Data‑table and form heavy by design
CPQ UIs live or die on tables and forms:
Quote builder: line items, tiers, bundles → complex, editable table.


Catalog views: huge filterable lists with attributes.


Approvals: queues, status filters.


Studio Admin’s stack (TanStack Table + shadcn Table primitives + RHF + Zod) is designed for exactly that sort of data‑dense, form‑heavy admin experience. (Vercel)
You’d otherwise spend weeks just getting a good table/form UX up to this level.

3. How you’d turn Studio Admin into a CPQ UI
Keep the skeleton, rename the domains:
CRM Dashboard → “Sales & Quotes”


Pipeline by status (Draft / Proposed / Approved / Won / Lost).


Cards for “Quotes expiring this week”, “Quotes needing approval”, etc.


Finance Dashboard → “Margins & Profitability”


Real‑time margin visibility: per‑quote and aggregate charts.


Filters by segment/product line/country (aligning with the “real‑time margin” CPQ feature). (CSG)


Default Dashboard → “Overview”


Blend of counts (active quotes), revenue forecast, configuration error rate, manufacturing lead time, etc.


Map key CPQ flows onto existing UI patterns:
Quote builder


Use a TanStack Table–based editor for line items:


Columns: product, options, QTY, list price, discounts, net price, margin %, “generated from 3D design?” etc.


Side panel driven by Zustand for “selected quote line” → show 3D preview, parametric details.


Progressive order capture


Use tabs or steps (shadcn Tabs/Steps) to represent evolving quote versions.


Each version stores its state; Status + version timeline uses existing “activity / finance” patterns.


Catalog / rules administration (LayEdit‑style)


Use existing admin forms + tables for:


Product families, options, constraints (catalog-driven architecture). (CSG)


Add a “Rules” view where each rule row opens a detail page with rich form + JSON view.


Approvals & in‑flight changes


Approvals inbox → use CRM/Finance table patterns with filters & quick actions.


In‑flight order changes: timeline component + diff view (two TanStack Tables side by side for “before vs after”).


3D configurator integration


Reserve a route like /cpq/configure/[projectId] that:


Uses Studio Admin’s layout (sidebar, header).


Embeds your Babylon.js/R3F configurator in the main content pane.


Uses an adjacent pane for pricing & margin summary powered by CPQ backend.


Because Studio Admin was built to keep layout & theme flexible (collapsible sidebar, different width modes, theme presets), you can adapt the visual density to a CPQ app (more data, less chrome). (Vercel)

4. What else I looked at (and why they’re secondary)
Next.js SaaS Starter (Vercel / nextjs/saas-starter)
Official Next.js SaaS starter: auth, Stripe, subscription, user/team CRUD, activity logging, shadcn UI. (Vercel)


Great when you need SaaS plumbing more than a sophisticated dashboard layout.


For you, this is a strong candidate for the overall SaaS shell (if you weren’t already using BoxyHQ), but its dashboards are intentionally minimal. Studio Admin is a better pure UI template for CPQ dashboards; Next.js SaaS Starter is a good platform starter.
ixartz/SaaS-Boilerplate
Next.js + Tailwind + shadcn UI, with auth, multi‑tenancy, roles & permissions, logging, Sentry, testing, etc. (GitHub)


Again: excellent SaaS starter, but not a purpose‑designed dashboard UX; you’d still be composing a lot of high‑density screens yourself.
CPQ‑specific OSS (SwiftCPQ, openCPQ)
SwiftCPQ – full open-source CPQ/proposal tool with an “intuitive editor”, product catalogue, pricing tools, PDF templates, etc.(GitHub)


openCPQ – older React/JS toolkit for product configuration in the browser.


Both are interesting architecturally (especially openCPQ for browser‑side config engine), but:
UI/stack is not “frontier” by 2025 standards.


They are full applications, not clean drop‑in UI templates.


I’d treat them as reference implementations, not your primary UI starting point.

5. Concrete recommendation
If the goal is one frontier UI template to build your CPQ web app on:
Clone/fork Vercel’s “Next.js & shadcn/ui Admin Dashboard (Studio Admin)” and treat it as your CPQ UI shell. (Vercel)


Then:
Plug it into your existing SaaS/auth base (BoxyHQ or Next.js SaaS Starter).


Replace CRM/Finance dashboards with lineage‑aware CPQ dashboards (quotes, margins, approvals).


Use TanStack Table for quotes, catalog and approval queues.


Embed the 3D/parametric configurator and agentic flows into dedicated routes that reuse the same layout.

---

1. End‑to‑end user flows
Think in three “tracks” that all share the same parametric core:
Sales track – consumer/dealer configuring & pricing a kitchen


Engineering track – catalog + rules authoring, DFM & CNC review


Operations track – order, manufacturing, CNC, and feedback


I’ll describe flows at the task level, mapped onto your four kernel phases: Parametric Init → Topological Optimization → Dimensional Constraints → Parametric Output.
1.1 Consumer / dealer flow (3D CPQ)
Goal: “I design a kitchen, see price and lead time, and place an order that is guaranteed manufacturable.”
Step 0 – Entry & context
Entry points:


Manufacturer site (embedded configurator),


Dealer portal,


Shared proposal link.


System collects:


Persona (consumer vs dealer),


Locale/currency,


Brand/configuration template.


UI: lightweight Welcome modal → choose “Start from room scan / blueprint / empty room / preset layout”.

Step 1 – Parametric initialization (room & constraints)
Inputs:
Room geometry:


Upload floorplan → VLM extracts walls/doors/windows.


Or manual drawing (point‑and‑click walls with live dimension labels).


Hard constraints:


Ceiling height, structural elements (columns, beams),


Plumbing/gas/electrical points,


Agents/codes (NKBA clearances, local regs) baked into constraints.


UX details:
Canvas: 2D top‑down, snap‑to‑grid drawing; numeric boxes for exact lengths; zoomable.


Sidebar: “Room” panel with:


Width/length/height inputs (text + slider),


Toggles for sloped ceilings, soffits,


Doors/windows list with param chips.


Optimization constraint: changes here must re‑solve and update 3D in <100–150 ms for perception of direct manipulation.

Step 2 – Topological optimization (layout generator)
You now place appliance centers and let the engine propose layouts.
Inputs:
Required appliances (cooktop/oven, sink, fridge, etc).


“Design goals” (sliders or presets):


Storage vs openness, island preference, budget band.


Engine actions:
Solve for one or more layouts satisfying:


Work triangle constraints (each leg 1.2–2.7 m, perimeter 4–8 m).


No major traffic paths crossing triangle.


Island/peninsula intersection < 305 mm with triangle legs, etc.


UX pattern:
Layout gallery: 2–4 “candidate layouts” displayed as cards:


Thumbnail 2D, small 3D, and key metric chips (prep area, storage, walking distance).


Main viewport: selected layout shown in 3D (Babylon) with synchronized 2D plan.


User picks a candidate → becomes the active layout for further refinement.

Step 3 – Dimensional constraint satisfaction (fine tuning)
Now we’re editing at cabinet granularity while maintaining constraints.
Controls:
Drag‑and‑drop modules in 2D or 3D:


Snap to wall grid,


Collision & clearance overlays,


NKBA guidance (work aisles, landing zones) visualized as colored bands.


Property panel for selected element:


Width/height/depth (slider + numeric),


Door style, handle, material, appliance integration.


Constraint engine:
Hard constraints (safety, code, manufacturability) are enforced:


Violations show as inline errors + on‑canvas highlights,


Adjustments auto-snap to nearest valid state.


AI assist (optional but powerful):
 Side “Design Copilot” chat: “Make this more family‑friendly” → param deltas & layout tweaks applied via tools; engine validates physics & manufacturability.

Step 4 – CPQ: pricing, options, scenarios
Quote view:
Right panel or bottom drawer: live CPQ table with TanStack Table‑style grid:


Line items (modules, tops, appliances),


Unit/list/net price, discounts, margin %, lead time.


Scenario tabs: Base / Variant A / Variant B – each storing a delta set on the same param model.


Interactions:
Changing a module or material triggers:


Re‑price (CP‑SAT CPQ engine) and recomputation of margins,


BOM and cut‑list preview updates async (but fast enough to feel live for most changes).


Dealer‑only features:
Discount controls (within policy),


Approval requests (“Send to manager for special discount”),


Customer‑facing quote PDF/HTML generation.



Step 5 – Final review & order → manufacturing
Review page:
3D walkthrough, 2D plan, elevations.


KPIs: total price, tax, margin, delivery window.


Manufacturing checklist (auto‑computed):


Status icons for BOM, cut list, CNC program validity, code checks.


Actions:
Consumer: “Request quote” or “Place order”.


Dealer: “Confirm order & send to production”.


Behind the scenes, this finalizes parametric snapshot → triggers BOM/CNC workflows via Temporal and pushes to ERP.

1.2 Catalog / rules authoring (LayEdit‑like)
Goal: “I define products, parameters, and rules that power everything above.”
High‑level steps (each has its own UI):
Catalog structure – families, series, SKUs, variants.


Parametric model definitions – dimensions, dependencies, default constraints.


Rules & constraints – NKBA‑style ergonomics, brand rules, pricing.


Publishing – draft → test → staging → production.


UX:
Left nav: Catalog / Parameters / Rules / Tests / Versions.


Primary surfaces:


Data tables (catalog lists),


Form‑heavy edit panels (parameters),


Code editor (rule DSL) + tests.


AI can assist in:
NL → rule DSL,


Auto‑test generation, but everything passes through deterministic validators.



1.3 Engineering & manufacturing flow (CAD→CNC)
Goal: “I trust that every configured kitchen can be manufactured; I can inspect and tweak as needed.”
Steps:
Order intake dashboard


Queue of orders with design, complexity and risk scores.


Engineering view


3D CAD preview (OCCT/FreeCAD mesh),


2D drawings,


BOM & hardware list,


“DFM warnings” panel (unsupported spans, tight clearances).


Nesting & CNC


Sheet nesting preview,


G‑code simulation summary,


Machine cell assignment & schedule.


Feedback loop


Engineers mark issues; system pushes constraints back into Rules service.


These sit in a separate “Operations” section but reuse the same design system patterns.

2. Frontend UI/UX
We’ll assume the Studio Admin Next.js + shadcn admin template as the UI shell (CRM/finance dashboards, RBAC, TanStack Table) and your existing Next 16 + Babylon stack as the configurator.
2.1 Global layout & IA
Top‑level navigation (sidebar):
Dashboard


Overview, Sales & Quotes, Manufacturing KPIs.


Design


Configurator (3D),


Projects (saved designs).


Catalog


Products, Parameters, Rules, Tests.


CPQ


Quotes, Price lists, Discounts & approvals.


Manufacturing


Orders, Nesting, CNC Jobs.


Admin


Tenants, Users, Roles, Integrations.


Use collapsible groups for Sales / Engineering / Ops.
Viewport pattern:
Shell: Studio Admin app layout (sidebar + top bar with search, notifications, user menu).


Content: for configuration/authoring screens, a 3‑pane layout:


Left rail: stepper / tree (Rooms, Layout, Cabinets, Surfaces, Appliances, Review).


Center: main canvas (2D/3D editor, rule editor, or data table).


Right rail: context panel (properties / AI copilot / logs).



2.2 Configurator screen (core UI)
Center: Babylon 3D + 2D toggle
Tabs: [3D View] [2D Plan] [Elevation]


Babylon canvas fills most of the width; 60 FPS target; interactions:


Orbit/pan/zoom orbit controls,


Click‑select modules → highlight in both 3D & table,


View modes: realistic, clay, constraints overlay.


Bottom: CPQ summary bar
Sticky bar with:


Total price, monthly cost, lead time,


“Design validity” pill (All constraints satisfied / 2 issues),


Call to action (Save, Request quote, Order).


Right: Param & copilot panel
Tabs:


Parameters – structured controls for selected entity and global options:


Numeric inputs (with slider + direct entry),


Dropdowns for materials, door styles, worktops,


Non‑linear slider scales for clustered values (e.g., budget).


Bill of Materials – condensed table for current selection or entire design.


Copilot – chat interface with tool‑calling; proposals appear as diffs you can accept/reject.


Left: Guided steps
Vertical stepper:


Room & constraints


Layout


Cabinets & storage


Surfaces & style


Appliances & lighting


Price & review


Stepping backwards reuses cached solutions to keep latency down; stepping forwards triggers validations and partial recompute.

2.3 CPQ dashboards
Using Studio Admin’s CRM and Finance dashboards as base:
Sales & Quotes (CRM dashboard):


Pipeline stages as Kanban,


Cards with thumbnails of designs, quote value, margin band, probability.


Margins & Profitability (Finance dashboard):


Line charts: margin over time, discount usage,


Heat maps by product line / dealer / region.


Clicking a quote row deep‑links into the configurator in read‑only mode, with “Fork as new quote” action.

2.4 Catalog & rules editor UX
Catalog grid: large table with filters, pinned columns, row grouping (TanStack).


Entity edit page: split layout:


Left: form sections (General, Dimensions, Options, Pricing).


Right: embedded mini‑configurator showing this component in context.


Rule editor:


Monaco‑based code editor with DSL syntax + linting.


Below: tests view – list of generated test rooms + pass/fail; clicking shows miniature 2D plan and explanation (possibly AI‑generated).



2.5 Manufacturing views
Orders list: table with status, risk, “DFM warnings” count.


Order detail: tabbed:


[Summary] – BOM, costs, route, lead time.


[Drawings] – embedded PDF / vector viewer.


[Nesting] – SVG/Canvas of sheet layouts with part IDs.


[CNC] – job list, machine assignment, simulation snapshot or video.


All reuse the same typography, color tokens, and shell; only content changes.

3. Design system
Use a single design system shared across configurator, CPQ, catalog and ops tools. Built on shadcn/Radix primitives, Tailwind 4 tokens, and Babylon‑aware 3D overlays.
3.1 Foundations (tokens)
Color:
Neutral greys for background/surfaces.


Accent palette per tenant (brand theme), configured by token set.


Semantic colors:


success – valid design / manufacturable,


warning – soft constraint issues,


danger – hard violations (code/DFM).


Typography:
Single sans‑serif family; sizes scaled for data‑dense UIs.


Consistent usage:


Title (H1/H2) for page,


H3/H4 for section headers,


Label / Body / Mono for form & code.


Spacing & grid:
4‑pt base spacing, responsive layout grids (12‑col desktop, 6‑col tablet, stacked mobile).


Strict vertical rhythm in catalog/CPQ screens; more flexible in configurator.


Motion:
Micro‑animations ≤ 150 ms; no heavy transitions on critical flow (rendering must dominate frame budget).


Use opacity/scale transitions on panels, not transforms that fight Babylon’s render loop.



3.2 Components critical for CPQ + 3D
Core primitives:
Buttons, dropdowns, segmented controls, tabs, steppers, dialogs – from shadcn/ui, themed via tokens.


Domain‑specific components:
RoomEditor – 2D canvas with wall/door/window tools, dimension overlays.


LayoutCard – thumbnail, metrics, choose/apply.


ConfigStepper – vertical step list with completion and error badges.


QuoteTable – TanStack Table wrapper with:


Editable cells, inline validation,


Grouping by area or product type,


Pinned margin columns.


ConstraintBadge – summarises violated constraints; clicking highlights them in 3D.


ParamSlider – combined slider + numeric input, supports non‑linear scales (e.g. log scale for budget).


RuleEditor – Monaco + test list + status bar.


AIChatPanel – message list with inline preview of suggested changes and “Apply / Diff” actions.


3D overlays:
Babylon HUD elements for:


Distance arrows & labels,


Clearance “heatmaps” (green/amber/red bands),


Error glyphs (collisions, code violations).


These overlays follow the same color tokens and typography, rendered on a 2D overlay layer to avoid z‑fighting.

3.3 Interaction rules & performance constraints
Tie UX to quantifiable performance:
Frame budget: 16.7 ms (60 FPS). Target:


≤ 7 ms GPU,


≤ 4 ms JS per frame,


Heavy computation offloaded to Web Workers/WASM.


Latency budgets:


Direct manipulations (dragging cabinets) → 50–100 ms end‑to‑end.


Re‑price/re‑layout on small change → <150 ms.


Full regeneration (new layout suggestion, BOM/CNC) → async with progress, P95 <2–3 s.


Error surfaces:


Never silently “fix” designs; show constraint conflicts clearly and explain them.


Make manufacturability a first‑class status (like tests in CI): green (OK), amber (warnings), red (blocking).



3.4 Multi‑tenant branding
Allow each manufacturer/dealer to “skin” the platform without breaking UX:
Theme object: colors, logo, typography variant, accent shape (rounded vs sharp).


Light/dark modes per tenant.


3D environment presets (HDRIs, floor textures) keyed to brand.


All implemented via tokens so functionality stays identical.

3.5 Documentation & storybook
Maintain a Storybook / Ladle instance for all components, including domain ones (RoomEditor, QuoteTable, RuleEditor).


Provide usage recipes:


“Building a configurator step”


“Adding a CPQ table to a new page”


“Embedding manufacturing cards into a dashboard”


This keeps design system and UX consistent as more teams add features.

---



1. Structural & Modular Architecture
1.1 Macro structure
Three planes:
Experience plane (UX)


Multi‑tenant web portal (Studio‑Admin‑style Next.js app) for consumers, dealers, catalog engineers, and production.


Embeddable 3D configurator (React + Babylon) that can be dropped into manufacturer / retailer sites.


Compute / domain plane


A set of coarse‑grained microservices (MSA) organized by business capability and data ownership, talking via an event bus (EDA) and a few synchronous RPC edges.


Data plane


Polyglot persistence (Postgres, search, time‑series, object storage, vector store) + Kafka event log.


This is deliberately the opposite of 3CAD’s historical “fat client + SQL Server monolith” model and matches their more recent web platform evolution, but in open tech.
1.2 Domain‑oriented service decomposition
Minimal set of high‑value services:
Identity & Tenancy Service


Users, tenants, roles, RBAC; OIDC integration.


Issues tokens with tenant + role claims for other services.


Catalog & Rules Service (LayEdit backend)


Owns: product families, param domains, constraints, price lists, rule DSL.


Provides versioned, immutable “catalog snapshots” used by CPQ and configurator.


Parametric Kernel & Layout Service


Owns: canonical parametric representation of kitchen designs.


Evaluates constraints (NKBA, accessibility, manufacturability), generates topological layouts (via OR‑Tools), and maintains design state.


Configurator Session Service (BFF for 3D app)


Low‑latency API used only by the configurator UI:


mutateParameters, getSessionState, requestLayoutVariants, validateDesign.


Co‑locates with Parametric Kernel for minimal hops on the critical path.


CPQ & Pricing Service


Line‑item pricing, discounts, approvals, margin policies.


Emits quotes / versions; consumes catalog snapshots.


CAD/CAM & DFM Service


Owns: parametric CAD model generation (OCCT), 2D drawings, STEP/DXF, cut lists, nesting, CNC programs.


Deterministic, CPU‑intensive; no UI, everything API‑driven.


Manufacturing & Scheduling Service


Turns accepted orders into manufacturing jobs, machine assignments, and schedules; interfaces with ERP/MES/CNC and shop‑floor IoT.


Integrations Hub


CRM, ERP, e‑commerce connectors; each major platform (Salesforce, SAP, Shopify, etc.) gets its own sub‑service consuming events like order.confirmed, bom.generated.


AI / Agent Orchestration Service


Hosts agent graphs (LangGraph‑style), tools for param engine, CAD, CPQ, catalog; exposes a clean HTTP/gRPC API for “copilot” features.


Analytics & Telemetry Service


Aggregates KPIs, usage, error rates, performance metrics over Kafka events.


1.3 Interaction patterns & latency budgeting
Define a critical interactive path for “user tweaks cabinet → UI, constraints, and price update”:
Path: Browser → Configurator BFF → Parametric Kernel → CPQ → BFF → Browser.


Let the per‑service P95 latencies be (L_{\text{BFF}}, L_{\text{kernel}}, L_{\text{CPQ}}), plus network overhead (L_{\text{net}}). You want:
[
 L_{\text{total}} = L_{\text{BFF}} + L_{\text{kernel}} + L_{\text{CPQ}} + L_{\text{net}} \le 150\ \text{ms}
 ]
to stay within sub‑200 ms HCI thresholds.
Design implication:
BFF + kernel are co‑located and avoid extra service hops.


CPQ calls for “per‑item micro‑diffs” are highly cached or pre‑batched.


Everything else (CAD generation, BOM, CNC, ERP sync) runs off the critical path via events & workflows (Temporal).


Overall system latency budget ( \mathcal{L}_{\text{Total}} ) is partitioned as an allocation vector over these microservices; you’re effectively solving:
[
 \min_{L_i} \ \mathcal{L}{P95} \quad \text{s.t.} \quad \sum{i \in \text{path}} L_i \le \mathcal{L}_{\text{Total}}
 ]
subject to capacity constraints, with queue depth / autoscaling tuned to keep (L_i) inside its allotment under load.
1.4 Event‑driven workflows
Event bus (Kafka/Redpanda):


Topics: configuration.updated, quote.created, quote.approved, order.confirmed, bom.generated, cnc.job.created, shipment.dispatched, etc.


Workflow engine (Temporal):


KitchenOrderWorkflow coordinates payment → final validation → BOM/CNC → ERP → notifications, with exactly‑once semantics.


This combination gives you both fine‑grained microservices and coarse‑grained durable workflows for sale‑to‑factory chains, matching the “single system from sale to CNC” promise that 3CAD pitches, but with explicit isolation and observability.

2. Runtime, Framework, and Dependency Stack
Think in three strata: browser, compute services, platform/infra.
2.1 Browser / front‑end
Core


React 19 + Next.js 16 (App Router), TypeScript 5.9.


Tailwind 4 + shadcn/ui + Radix UI primitives → custom design system.


3D & UI composition


Babylon.js 8 (WebGPU‑first, WebGL2 fallback) for 3D scene; react-babylonjs only where declarative mapping helps, keep hot paths imperative.


Viewport is a React component with a thin imperative bridge to Babylon scenes.


State & data fetching


TanStack Query for server state (pricing, sessions, quotes).


Zustand / Jotai for local scene and UI state.


Typed transport


tRPC v11 from Next to Configurator BFF & other internal services.


Parametric kernel client


Rust → WASM module for fast constraint checks and light geometry, loaded as an npm package and used directly in the browser for instant feedback.


2.2 Compute / domain services
General business services (identity, CPQ, orders, manufacturing, integrations)


Node.js LTS + NestJS microservices (HTTP/gRPC/Kafka transports).


Parametric Kernel & Layout


Rust library (constraint graph, geometric ops, param evaluation).


Compiled:


to WASM for front‑end,


to native for the Parametric Kernel service (Rust or Rust‑wrapped NestJS microservice).


Optimization engine


Google OR‑Tools CP‑SAT in Python or Rust microservice for layout, packing, and scheduling; strict CPU‑time limits (e.g. 50–100 ms for interactive layout, seconds for batch).


CAD/CAM & DFM


OCCT (Open Cascade Technology) C++ service for exact CAD, drawings, STEP/DXF export.


Rust or C++ nested microservice for nesting, toolpath generation, and machining time estimation.


AI / agent orchestration


FastAPI + LangGraph / LangChain microservice, using vLLM/TGI to host open‑weight models; external calls to GPT‑class models for frontier tasks.


2.3 Platform / infra runtime
Kubernetes (EKS/GKE/AKS) for container orchestration; Istio/Linkerd for service mesh.


Kafka/Redpanda for event bus; Redis for caching; Temporal for workflows.



3. ML / AI Architecture
Design principle: AI is an assistive, semantic layer on top of deterministic engines (parametric solver, OR‑Tools, CAD/CAM, CPQ), never the source of truth for geometry, price, or CNC.
3.1 Model tiers
Tier 1 – Frontier hosted LLMs (API)


GPT‑class / Claude‑class for complex reasoning: NL → param spec, rule synthesis, CAD macros, explanations.


Tier 2 – Self‑hosted open‑weight models


Llama/Mistral/Qwen equivalents on vLLM/TGI for bulk tasks: summarization, test generation, log analysis, semantic search.


Tier 3 – In‑browser models (WebGPU)


WebLLM‑style 3B–8B models for local hints and low‑latency “UI copilots” that don’t touch the network.


3.2 Tool‑centric agent graphs
Single AI Orchestration Service exposing:
Tools for parametric kernel: applyDelta, suggestLayout, explainConstraintViolation.


Tools for optimization: solveLayoutWithWeights, optimizeTriangle, repackNesting.


Tools for CAD/CAM: generateCADMacro, createSectionView, simulateToolpath.


Tools for catalog & rules: compileRuleDSL, runRuleTests, suggestRefactor.


Tools for CPQ: computePriceDelta, enumerateCheaperAlternatives, explainPricing.


Agents:
Design Copilot – drives kernel + optimizer to answer “make this more family friendly”, returns proposed deltas plus textual explanation.


Rule Authoring Copilot – turns NL into DSL, synthesizes tests, runs them via Catalog service.


CAD Co‑pilot – generates CAD macros for OCCT/FreeCAD, with pre/post static + geometric checks.


Manufacturing Analyst – looks at order portfolios, nesting, machine telemetry; suggests batching and detects anomalies.


3.3 Generative layout & multi‑objective optimization
We formalize layout as a multi‑objective optimization problem:
Decision vars (x): module identities and positions.


Objective vector (f(x) = (\text{storage}, \text{prepArea}, \text{ergonomicScore}, \text{materialCost}, \text{manufacturability})).


The AI layer:
Maps a user’s qualitative goals into weight vectors (w) or explicit constraints.


Helps explore the Pareto front of feasible solutions (f(x)) while OR‑Tools ensures constraint satisfaction.


For interactive use, you shrink the search to a reduced design space (\mathcal{D}^* \subset \mathcal{D}) pre‑sampled offline (or via surrogate models) so that each online call converges under the 150–300 ms latency budget.
3.4 Perception & NL front‑ends
Blueprint / photo → room model


VLM detects walls, doors, windows, fixtures; outputs structured room geometry consumed by the parametric kernel.


NL → param spec / rule / query


“U‑shaped, big island, mid‑budget” → param JSON;


“Don’t allow wall units above 2.2 m in low ceilings” → rule DSL + tests.


All outputs go through strict type & constraint validation before they touch shared state.

4. Data, Persistence, and API Surface
4.1 Polyglot persistence
Relational OLTP (Postgres 16)
Core DB: users, tenants, quotes, orders, manufacturing jobs, payments.


Catalog DB: product families, parameters, constraints, rule versions (separate cluster for safety and scaling).


Search & analytics
OpenSearch / Meilisearch for catalog & rule search.


ClickHouse/Timescale or Prometheus + long‑term storage for time‑series (usage, SLOs, throughput).


Event log
Kafka as durable log for domain events; topics compacted where appropriate.


Object storage
S3/GCS/Azure for: glTF/GLB, STEP/DXF, PDFs, CNC programs, render outputs.


Content‑addressable keys (hashes) to dedupe repeated geometries.


Vector store
pgvector in Postgres or dedicated vector DB for semantic search over rules, docs, user sessions (driving AI assistants).


Caching
Redis cluster for:


Session shards,


Hot catalog slices,


Price lists,


Short‑lived layout solutions.


4.2 Data modeling principles
One canonical parametric design per project, versioned; all downstream artifacts (BOM, CAD, CNC, quotes) carry a pointer to that version.


Catalog & rules are immutable by version; quotes refer to the catalog version used to compute them for reproducibility.


Strict tenant scoping (schema/DB‑per‑tenant or RLS) for manufacturers, mirroring 3CAD’s per‑catalog DBs but with modern multi‑tenant design rather than raw SQL Server instances.


4.3 API surface
Internal APIs
tRPC from front‑end → Configurator BFF; type‑safe, no over‑fetching.


gRPC between high‑traffic services (Kernel, Optimization, CAD/CAM) for low‑latency binary calls.


External / partner APIs
GraphQL for partner dashboards and custom front‑ends: flexible querying over quotes, orders, catalogs.


REST + webhooks for ERP/CRM/e‑com; resource naming and plural paths kept conventional (/orders, /quotes, /jobs).


Contracts & versioning
Shared Protobuf/JSON‑schema library in the monorepo for all event and RPC schemas; changes gated by backward‑compat checks in CI.



5. DevEx, Tooling, and CI/CD
5.1 Monorepo & developer ergonomics
Monorepo: Nx or Turborepo organizing:


apps/ – Next portal, configurator SPA, LayEdit‑style admin.


services/ – NestJS services, Rust/Go compute services, FastAPI AI service.


packages/ – shared types, design system, param kernel WASM, client SDKs.


Language alignment:


TypeScript across front‑end and general services; Rust in hot loops; Python only where OR‑Tools or specific ML libs demand it.


Tooling:


VSCode devcontainers, task runners (turbo, nx), make targets for local clusters (docker‑compose for Kafka/Postgres/Temporal).


5.2 Testing strategy (with performance as a first‑class spec)
Layers:
Unit tests


TS/Jest for services.


Rust unit tests for kernel invariants (constraints, geometry).


Property‑based / metamorphic tests


For parametric kernel & optimization: random rooms and mutations; invariants like “no collisions”, “clearances ≥ threshold”, “triangle within [13, 26] ft perimeter” must hold.


Integration tests


Service‑to‑service interactions, event flows, Temporal workflows with in‑memory Kafka/Temporal.


3D visual regression


Snapshot renders of canonical scenes (Babylon headless) to catch rendering bugs across releases.


Performance & latency tests


k6/Locust/Gatling scenarios that simulate configurator sessions and order flows; measure P95/P99 latencies vs budgets.


Rule/catalog regression


Every catalog/rule change runs a battery of auto‑generated test kitchens to ensure no catastrophic constraint regressions.


5.3 CI/CD pipeline
CI (GitHub Actions / GitLab CI)


Steps: lint → type‑check → unit & integration tests → visual regression → perf smoke tests.


Latency budgets encoded as tests (fail build if P95 exceeds threshold).


CD (Argo CD / Flux, GitOps)


Declarative K8s manifests in Git; PR‑based env changes.


Canary / progressive delivery for critical services (Configurator BFF, Kernel, CPQ).


5.4 Observability & SRE
OpenTelemetry instrumentation across all services; traces propagate through gRPC, HTTP, Kafka, and Temporal.


Metrics: Prometheus + Grafana dashboards for:


Per‑service latency histograms, error rates, throughput.


Business KPIs (design completion rates, BOM generation times, CNC throughput).


Logging: Loki / Elastic for structured JSON logs; correlation IDs per design/quote/order.


SLOs & alerting:


SLOs like “95% of configurator actions < 150 ms” and “99% of BOM generations < 5 s” baked into alerts.



---

--------------------------------------------------------------------------------

(1) Structural & Modular Architecture
The structural design must adhere to a highly decomposed Microservices Architecture (MSA), augmented by an Event-Driven Architecture (EDA) for asynchronous, high-throughput communication. This architecture provides necessary fault isolation and agile deployment for components with disparate computational demands.
Architectural Planes
1. Experience Plane (UX): Includes the multi-tenant web portal for consumers, dealers, catalog engineers, and production staff, along with the embeddable 3D configurator micro-frontend.
2. Compute / Domain Plane: Consists of specialized microservices organized by business capability and data ownership, communicating primarily via an event bus.
3. Platform / Infra Plane: Manages orchestration, state, and foundational services (e.g., Kubernetes, Kafka, Temporal).
Foundational Services Decomposition (Proof of Isolation)
A rigorous decomposition isolates deterministic, latency-critical operations from complex reasoning tasks:
Service Component
Primary Responsibility
Critical Constraint
Parametric Kernel & Layout Service
Canonical parametric representation of designs; constraint satisfaction logic
High Availability (for real-time configuration); Deterministic execution
Catalog & Rules Service
Versioned product families, parameter domains (param
domains
​
), configuration rules, price lists
Immutability and Consistency (single source of truth for pricing/BOM)
CAD/CAM & DFM Service
Generation of non-geometric manufacturing outputs (BOMs, cut lists, CNC programs)
High Throughput (CPU-intensive batch processing); Deterministic output
CPQ & Pricing Service
Line-item pricing calculation, discount logic, quote generation
Low Latency (for real-time pricing updates)
Workflow Orchestration (Temporal/LangGraph)
Managing coarse-grained, long-running processes (Sale → Factory chain)
Resiliency and Exactly-Once Semantics
Configurator Session Service (BFF)
Low-latency API layer for the 3D application only (mutateParameters, validateDesign)
Ultra-Low Latency (Minimizing network hops on critical path)


--------------------------------------------------------------------------------

(2) Runtime, Framework, and Dependency Stack
The selection of the runtime and framework is driven by the necessity for low-latency data access and high-performance computation across the heterogeneous environment (browser, cloud CPUs/GPUs).
Front-End Stack (Latency Optimization)
1. Core Web Stack: Utilizes React 19 and Next.js 16 (specifically leveraging the App Router and SSR capabilities for multi-tenant portals). This selection prioritizes modern, performance-oriented compilation (e.g., Next 16 with Turbopack provides 2−5× faster builds).
2. 3D Engine: Babylon.js 8.x for real-time WebGL/WebGPU rendering. Babylon.js is preferred for production due to its reliable, predictable frame times and built-in tooling (Inspector) crucial for performance optimization.
Back-End Compute Stack (Computational Efficiency)
1. Parametric Geometry Kernel: Open Cascade Technology (OCCT) C++ service for exact geometric modeling, supporting boundary representation (B-rep) models and complex geometric algorithms (Boolean operations, fillets, shape healing). The kernel should be wrapped via Rust/WebAssembly (WASM) for efficient parametric evaluation and constraint checking, enabling speed and resource efficiency both server-side and potentially client-side.
2. Optimization Solver: Google OR-Tools (CP-SAT solver), deployed as a dedicated microservice, is mandated for complex topological problems (e.g., optimally positioning R, S, C vertices subject to constraints like P
W.T.
​
≤8 m). Strict CPU-time limits (≤100 ms for interactive queries) must be enforced.
3. API Services: High-efficiency language runtimes such as FastAPI (Python) or NestJS (TypeScript) for robust, scalable API development.
4. LLM Serving: Locally hosted (via Ollama) or optimized frameworks like vLLM (with Paged Attention) or HuggingFace TGI for inference, treating LLM serving as a specialized High-Performance Computing (HPC) problem to ensure high throughput and memory efficiency.

--------------------------------------------------------------------------------

(3) ML / AI Architecture
The ML/AI architecture must be rooted in the principle that AI is an assistive, tool-augmented semantic layer that orchestrates and interprets inputs for the deterministic parametric, optimization, and CAD engines. The design utilizes a multi-agent framework orchestrated by LangGraph/LangChain.
AI Specializations and Proof Points
1. Intent Translation (NL→Parametric Spec): Frontier Large Language Models (LLMs) (e.g., GPT-5 or Claude 4.5) are used for complex reasoning and translation of abstract user intent (e.g., design goals or style preferences) into structured parameter vectors and constraints (JSON format). This process mitigates the complexity of traditional CAD workflows characterized by intricate command sequences.
2. Perception and Multimodality: Vision-Language Models (VLMs) (e.g., components integrated in Seek-CAD or CAD-Assistant) act as a perception front-end, processing rough sketches, photos, or architectural maps. The VLM translates visual input (e.g., wall segments, window placements) into the canonical geometric data structure required by the Parametric Kernel.
3. Generative Exploration and Optimization: AI guides the search for optimal designs by generating objective function weights (e.g., w
storage
​
,w
cost
​
) or proposing candidate layouts, which are then mathematically validated by the deterministic OR-Tools solver. This facilitates the interactive exploration of the Pareto Front of design trade-offs.
4. Agentic CAD Tool Orchestration: Specialized LLM agents (e.g., Geometry Agent, File Agent) leverage tool-augmentation paradigms to call executable functions (e.g., generateAssemblyFreeCAD(config), runPanelNesting(config)), allowing the agent to assess the impact of generated CAD commands on geometry and adapt subsequent actions, addressing VLLMs' inherent weaknesses in geometric reasoning and predicting command effects.
5. Self-Refinement and Fidelity: Iterative refinement loops, such as those used in Seek-CAD and CADCodeVerify, are mandatory. A VLM (e.g., Gemini-2.0) evaluates step-wise renderings of the generated CAD code against the Chain-of-Thought (CoT) reasoning to detect discrepancies in geometric fidelity, ensuring compliance (e.g., ≤7.30% reduction in Point Cloud distance).

--------------------------------------------------------------------------------

(4) Data, Persistence, and API Surface
Data architecture must prioritize data consistency, velocity, and durability across the configuration lifecycle.
Data Consistency Foundation
The centralized Catalog/Rules service must publish immutable, versioned catalog snapshots to guarantee that the 3D visualization, the CPQ engine, and the CAD/CAM service operate on the exact same definition of parts, parameters, and prices.
Polyglot Persistence Strategy
1. Relational/Transactional Store (PostgreSQL/SQL Server): For complex structured data requiring strong consistency (e.g., order records, user management, immutable catalog versions).
2. In-Memory Store (Redis): Dedicated to ultra-low latency feature lookups, session state, and caching of computed results (e.g., popular configurations, real-time pricing lookups). This minimizes latency ≤100 ms on the critical path.
3. Event Stream (Kafka/Redpanda): Serves as the central Event Bus, logging all major state transitions (e.g., ConfigurationUpdated, QuoteGenerated) and facilitating asynchronous communication between services.
4. Vector Store: Essential for grounding LLM agents, storing design knowledge, compliance rules, and a RAG corpus of past CAD models/code for zero-shot guidance (e.g., similar to the local CAD corpus used in Seek-CAD).
API Surface Mapping
The APIs must be rigorously formalized to maintain performance isolation: \text{API}{\text{CFG-BFF}}: \text{State} \times \Delta \text{Params} \to \text{State}' \times T{\text{latency}} < 50 \text{ ms} \text{API}{\text{CAD-DFM}}: \text{Config}{\text{JSON}} \to \left{ \text{BOM}, \text{CutList}, \text{CNC}_{\text{G-Code}} \right} The Configurator Session Service provides the low-latency BFF (Backend for Frontend) API layer, while the CAD/CAM Service provides the high-throughput API for manufacturing outputs.

--------------------------------------------------------------------------------

(5) DevEx, Tooling, and CI/CD
Performance management must be established as an upstream (Shift-Left) discipline and integrated into the continuous delivery pipeline.
Continuous Quality Assurance Framework
The CI/CD pipeline must enforce deterministic results and proactively manage the latency budget.
1. Deterministic Output Validation: All critical downstream components (CAD/CAM, CNC toolpath generation) must be 100% deterministic. The pipeline must execute G-code simulations and validation checks automatically before release or execution.
2. Latency Budget Enforcement: Continuous performance testing (stress and load testing) must be mandated within the CI/CD workflow, integrating Latency Budget Frameworks to ensure performance metrics (e.g., response time, throughput) adhere to target constraints. Bottlenecks must be detected and remediated early.
3. MLOps Integration (HPC Context): The deployment of LLM and VLM components must follow robust MLOps protocols, including automated CI/CD for model deployment, comprehensive model monitoring for drift detection, and leveraging specialized HPC optimization tools (e.g., DeepSpeed/vLLM) to manage GPU memory and inference latency.
4. AI-Assisted Engineering Tooling: Tools should leverage LLMs/VLMs to assist in non-deterministic tasks, such as generating unit tests and adversarial inputs (e.g., simulating tiny kitchens or complex geometric anomalies) to stress-test the rules engine, thereby increasing the overall robustness of the parametric model. The generated outputs (e.g., CAD code from Agentic CAD) must be validated against a 100% valid syntax rate.
5. Hardware-Software Co-design: The architecture must acknowledge and utilize hardware-aware architectural choices, such as prioritizing data residency on high-speed memory (HBM/GPU) and utilizing techniques like zero-copy I/O to mitigate the performance bottleneck associated with data movement. This necessity is confirmed by exascale systems like Frontier, which rely on deep integration between AMD CPUs/GPUs and the ROCm/HIP software stack.

--------------------------------------------------------------------------------

Proactive Follow-up for Deep Analysis
To maximize the depth of this analysis, we must consider the non-trivial interaction between the constrained layout optimization and the real-time pricing system.
Deep Analysis Question 1: Given the necessity for the Parametric Kernel to output topologically constrained configurations (Phase II) and the CPQ Service to provide real-time pricing based on component Bills of Materials (BOM), how is the computational complexity of the O(NP-hard) constrained layout problem managed to satisfy the ultra-low latency requirement (T
latency
​
≤100 ms) of the interactive Configurator Session Service? Specifically, articulate the mathematical mechanism that enables this speed.
Deep Analysis Question 2: The architecture mandates the isolation of the geometric kernel (OCCT/Rust) from the semantic AI layer (LLM/VLM). How is the required information fidelity—specifically the retention of parametric and feature-based history (P2 in §I.B of the conceptual flow)—maintained when moving between the high-level NL intent, the geometric kernel, and the downstream CNC outputs? Provide a formal model for linking the input intention S
D-3D
​
to the final manufacturing data D
CNC
​
.


---

The definition of the optimal frontier platform mandates a strategic architectural commitment to deterministic execution, pervasive constraint satisfaction, and the minimization of computational latency, as formalized by the multi-objective Pareto optimization goal O
system
​
. The user flow, UI/UX, and underlying design system must be engineered to optimize these constraints, seamlessly bridging high-fidelity human-computer interaction (HCI) with manufacturing precision.
(1) Optimal Frontier User Flow: Phased Precision and Parametric Synthesis
The ideal workflow proceeds as a rigorous, systematic four-phase process, transitioning from abstract spatial constraints (P
1
​
) to dimensionally guaranteed manufacturing outputs (P
4
​
). This process parallels engineering optimization, applied to the minimization of operator movement and workflow inefficiency.
Phase
Objective (Optimization Focus)
Operational Principles and Proof Points
Supporting Constraints (NKBA/Geometric)
P
1
​
: Parametric Initialization
Define the constrained problem space and capture design intent.
Utilize multimodal input (VLM translation of floorplan/sketch) or manual drawing (snap-to-grid/numeric input) to define architectural boundaries.
Minimum work aisle width ≥42" (one cook) or ≥48" (multiple cooks). Doorways must yield a clear opening of ≥32".
P
2
​
: Topological Optimization
Establish foundational geometric relationships and validate the Work Triangle (W.T.) heuristic. AI agents generate optimal layout candidates based on qualitative user goals (e.g., storage vs. budget).
System solves for configurations satisfying constraint inequality. User selects from a Layout Gallery showing candidate solutions, small 3D views, and key metric chips (e.g., prep area).
Leg lengths L
i
​
must satisfy 1.2 m≤L
i
​
≤2.7 m. Perimeter P
W.T.
​
must satisfy 4 m≤P
W.T.
​
≤8 m. Major traffic must not intersect the W.T..
P
3
​
: Dimensional Constraint Satisfaction
Fine-tune the layout at cabinet granularity, ensuring micro-level ergonomic compliance and safety.
User drags-and-drops modules in 2D or 3D view; the system maintains constraints. AI Copilot assists by suggesting parametric deltas based on natural language intent (e.g., "Make this more family-friendly").
Verification of minimum counter landing areas: 36" continuous prep area adjacent to the sink; ≥12" on one side and ≥15" on the other side of the cooktop. Dishwasher nearest edge must be within 36" of the sink edge.
P
4
​
: Parametric Output Generation (CPQ → CNC)
Synthesize the final, validated design into an editable engineering artifact and generate manufacturing data.
Final design state is captured as an immutable parametric snapshot. This snapshot triggers asynchronous generation of all downstream artifacts (BOM, Cut List, CNC programs).
Output is quantitatively assessed for quality: Collision Rate (C
obj
​
→0), Out-of-Boundary Ratio (OOB) minimization, and Navigability (N) maximization. The output must retain feature-based history.

(2) Frontend UI/UX: Precision Controls and High-Performance Visualization
The UI/UX must be predicated on ultra-low latency, minimizing user-perceived lag by maintaining strict latency budgets.
Core Technology Stack (Latency Optimization)
The core web stack should utilize React 19 and Next.js 16 (leveraging Turbopack for faster builds) as the primary shell, with the configurator embedded as a micro-frontend. The 3D layer must use a high-performance, WebGL/WebGPU-based framework such as Babylon.js.
• Performance Target: Sub-50 ms UI response for common operations; 60 FPS target for the 3D canvas. Heavy layout and optimization tasks must be offloaded to Web Workers or WebAssembly (WASM) to maintain the target frame budget.
Interaction Design and Visualization
1. High-Level Information Architecture (IA): The platform should adopt a multi-tenant portal structure with top-level navigation clearly segmented into specialized domains: Design (3D Configurator), Catalog (Rules Authoring), CPQ (Quotes, Price lists), and Manufacturing (Orders, CNC Jobs).
2. Layout Paradigm: Critical configuration and authoring screens must utilize a rigorous three-pane layout:
    ◦ Left Rail: Hierarchical stepper (for P
1
​
to P
4
​
flow), providing navigation and error badges.
    ◦ Center Canvas: The main Babylon.js/R3F 3D editor, supporting tabs for [3D View], [2D Plan], and [Elevation]. The viewport should fill most of the width.
    ◦ Right Rail: Context panel displaying parameter controls, dynamic quote line items, and the AI Copilot Chat Panel.
3. Precision Interaction: To facilitate expert use, the interface must support precision controls: numeric inputs with accompanying sliders (ParamSlider). Crucially, the UI must expose a Feature-Based Selection Mechanism that allows users to mimic human CAD engineers by explicitly selecting specific topological entities (faces, edges) for applying advanced features like fillet, chamfer, or mirror operations.
4. Real-Time Feedback: A sticky CPQ summary bar at the bottom must display live computed total price, lead time, and a quantitative "Design Validity" status (e.g., ConstraintBadge). The 3D viewport must utilize overlays, such as clearance "heatmaps" (green/amber/red bands) and error glyphs for collisions, rendered on a 2D overlay layer to avoid Z-fighting.
(3) Design System: Parametric Core and DevEx Optimization
The design system serves as the foundational constraint layer, ensuring consistency, interoperability, and testability across all domain services (CPQ, CAD/CAM, Catalog).
Parametric and Data Consistency Foundation
1. Canonical Model Centrality: The architecture must be rooted in the principle of one canonical parametric model that drives visualization, pricing, Bill of Materials (BOM), and CNC output generation (F
correctness
​
constraint).
2. Catalog Immutability: The Catalog & Rules Service must publish immutable, versioned catalog snapshots. All quotes and manufacturing outputs must carry a pointer to the specific catalog version used, ensuring computational reproducibility.
3. Feature-Based History: The system must record and utilize the parametric and historical feature-based model, which stores the sequence of modeling operations (features) and associated HCI metadata (selection mechanisms). This history is essential for editability and redesign by engineers.
Runtime and Tooling Stack
1. UI Component Layer: Build using low-level primitives like Radix UI and Tailwind CSS or similar systems (e.g., shadcn/ui) to ensure performance and flexibility.
2. Data Hydration/State: Utilize TanStack Query for fetching and caching server state (pricing, catalogs) and Zustand/Jotai for minimal-overhead local scene management. Use tRPC for type-safe internal front-end to Backend-for-Frontend (BFF) communication.
3. CI/CD and Performance Engineering: Performance management must be a proactive "Shift-Left" discipline. The Continuous Integration/Continuous Deployment (CI/CD) pipeline must mandate:
    ◦ Latency Budget Enforcement: Continuous performance testing must be integrated to ensure all key operations adhere to target constraints.
    ◦ Deterministic Output Validation: The pipeline must enforce 100% deterministic results for all critical downstream processes (CAD/CAM, CNC toolpath generation).
    ◦ AI-Assisted Tooling: Provide tools leveraging LLMs/VLMs for generating unit tests and adversarial inputs (e.g., simulating complex geometric anomalies) to stress-test the rules engine, thereby increasing robustness and verifying 100% valid syntax rate.
4. Specialized Tooling: For non-design roles, modular tools include the RuleEditor (Monaco editor + test list) for catalog definition, and manufacturing dashboards displaying metrics, DFM warnings, nesting previews, and CNC job statuses.

--------------------------------------------------------------------------------

Deep Analysis Follow-up (Recap of Prior Commitment)
The rigorous definition of the frontier architecture requires formal examination of the latency constraints introduced by combinatorial search and the information fidelity required across the deterministic/semantic boundary. The previously committed questions remain critical to fully securing this blueprint:
Deep Analysis Question 1 (Latency): Given the necessity for the Parametric Kernel to output topologically constrained configurations (Phase II) and the CPQ Service to provide real-time pricing based on component Bills of Materials (BOM), how is the computational complexity of the O(NP-hard) constrained layout problem managed to satisfy the ultra-low latency requirement (T
latency
​
≤100 ms) of the interactive Configurator Session Service? Specifically, articulate the mathematical mechanism that enables this speed.
Deep Analysis Question 2 (Fidelity): The architecture mandates the isolation of the geometric kernel (OCCT/Rust) from the semantic AI layer (LLM/VLM). How is the required information fidelity—specifically the retention of parametric and feature-based history (P2 in §I.B of the conceptual flow)—maintained when moving between the high-level NL intent, the geometric kernel, and the downstream CNC outputs? Provide a formal model for linking the input intention S
D-3D
​
to the final manufacturing data D
CNC
​
.

---

The integration strategy for a frontier, high-performance end-to-end 3D kitchen CPQ + CAD-to-CNC platform must be architecturally rigorous, prioritizing deterministic data flow, latency partitioning, and fault-tolerant orchestration. This strategy transforms the high-level architectural blueprint into a functional, resilient system capable of achieving the foundational optimization objective O
system
​
(minimizing latency, maximizing correctness).
We define the integration strategy recommendation across five critical vectors: Data Consistency, Workflow Orchestration, Real-Time Latency Partitioning, Enterprise System Interoperability, and the Semantic-Deterministic Bridge.

--------------------------------------------------------------------------------

I. Data Consistency and the Canonical Model Invariant
The paramount integration requirement is guaranteeing that all downstream services operate on a single, consistent canonical model of the configured product, satisfying the functional correctness constraint (F
correctness
​
).
Strategy: Immutable, Versioned Catalog Core
The Catalog & Rules Service must function as the definitive Single Source of Truth, communicating changes not via mutable transactions, but through immutable, versioned snapshots.
1. Catalog Snapshot Generation: Upon validation and approval (e.g., via a dedicated LayEdit tool flow), the complete definition of all parameterized products, constraints, and pricing rules is serialized into an atomic, versioned artifact (C
version
​
).
2. Snapshot Distribution: This C
version
​
is propagated asynchronously to all dependent services (CPQ, Parametric Kernel, CAD/CAM) via the Event Stream (Kafka).
3. Cross-System Invariant: Every subsequent derived output—the Quote (Q), the Bill of Materials (B), and the CNC program (D
CNC
​
)—must contain a cryptographic pointer (Hash or UUID) back to the specific canonical configuration state (S
D-3D
​
) and the Catalog Version (C
version
​
) used for its generation.
F
correctness
​
⟹∀ Artifact A
i
​
∈{Q,B,D
CNC
​
}:A
i
​
=f(S
D-3D
​
,C
version
​
)
II. Workflow Orchestration for End-to-End Resilience
The process spanning configuration (front-office) to manufacturing (back-office) is a long-running, fault-intolerant sequence (Sale → Factory). This necessitates a dedicated, resilient orchestration layer.
Strategy: Temporal-Based Workflow Management
The platform must implement a dedicated Workflow Orchestration Service (e.g., Temporal or LangGraph) to manage coarse-grained processes, guaranteeing resilience and exactly-once semantics across service failures.
1. Order Fulfillment Chain: Define workflows that span microservices:
    ◦ OrderPlacementWorkflow: Captures the final validated configuration (P
4
​
snapshot).
    ◦ ManufacturingJobWorkflow: Executes asynchronous, CPU-intensive tasks: calling the CPQ Service for final costing, calling the CAD/CAM Service for BOM generation, nesting optimization, and CNC G-code generation.
2. Asynchronous Integration: The Workflow Orchestration layer interacts with transactional or compute-heavy services via idempotent activities, allowing for retry logic, compensation, and visibility into the state of the long-running job. This decouples the low-latency UI from the high-throughput manufacturing pipeline.
3. LLM Agent Integration: Agentic systems (orchestrated by LangGraph) are conceptually integrated as planning or reasoning steps within the workflow. For example, the Manufacturing Analyst Agent might be invoked as a step to suggest batching strategies based on current machine telemetry before the final CNC job is scheduled.
III. Real-Time Latency Partitioning
Achieving the sub-50 ms interactive latency target requires strict segregation of the high-latency, deterministic compute (like parametric evaluation) from the real-time UI data layer.
Strategy: Backend-for-Frontend (BFF) with Low-Latency Caching
A dedicated Configurator Session Service (BFF) must shield the 3D application from upstream complexity and utilize in-memory storage for critical path data.
1. BFF Isolation: The BFF is the only entry point for the 3D application, defining a minimal, ultra-low latency API surface for state mutation and validation (e.g., mutateParameters, validateDesign).
2. In-Memory State Management: Utilize an In-Memory Store (Redis) to cache active configuration session state, pre-computed pricing deltas, and common lookups (e.g., material compatibility lists). This minimizes latency ≤100 ms on the critical path, ensuring smooth visualization and real-time feedback.
3. Micro-Frontend Embedding: The core 3D configurator, utilizing React 19 and Babylon.js, is integrated as an embeddable micro-frontend within the Next.js shell. This allows independent scaling and iteration of the visual layer while consuming the stabilized BFF API.
IV. Enterprise System Interoperability (Front-Office ↔ Back-Office)
The platform must seamlessly connect the front-office sales experience (CRM/E-commerce) with the back-office production systems (ERP/MES) to achieve the design-to-manufacturing promise.
Strategy: API-Driven Connectors and Standardized Data Exchange
1. CRM/E-commerce Integration: APIs are necessary to connect to CRMs (e.g., Salesforce) and E-commerce platforms (e.g., Shopify). The system ensures configuration and customer data feed into CRM for lead tracking and sales follow-up. The end-customer can finalize a quote and order directly through the platform or embeddable configurator.
2. ERP/MES Integration: The definitive outputs of the configuration process (Phase P
4
​
) must be delivered to ERP (for finance/purchasing) and MES (for scheduling/execution).
    ◦ Data delivered must be structured and validated, including: fully resolved Bills of Material (B), routings, cut lists, and production orders.
    ◦ Platforms like Configure One and Tacton demonstrate this required integration, often involving automated generation of drawings and BOMs linked directly to the configuration.
3. CAD-to-CNC Pipeline Integration: The final manufacturing data (D
CNC
​
) must be automatically generated and routed to machine management systems (e.g., Microvellum, PolyBoard). This output includes CNC machine programs (G-code) and nesting information to drive fabrication without manual intervention.
V. The Semantic-Deterministic Bridge (AI Integration)
AI agents must be integrated as intelligent intermediaries that translate ambiguous, high-level natural language (NL) design intent into precise, structured, executable commands for the deterministic physical engines (Parametric Kernel, OR-Tools, CAD/CAM).
Strategy: Tool-Augmented Multi-Agent Orchestration
1. Intent Translation: Frontier LLMs (Tier 1, GPT-class) are used for complex reasoning to translate abstract NL instructions (input intention S
D-3D
​
) into structured parameter vectors (
p

​
) and domain-specific constraints (JSON format).
2. Tool Augmentation and Execution: LLM agents (Geometry Agent, File Agent) are orchestrated via LangGraph/LangChain to call specific, deterministic tools that interface with the Parametric Kernel and CAD layer.
    ◦ Example Tools: validateDesign(config), solveLayoutWithWeights(goals), generateCADMacro(config).
3. Deterministic Integrity: The integration design strictly forbids LLMs from generating final price, BOM, or CNC code directly. The AI layer generates proposals (
p

​
proposed
​
) and executable code segments (C
code
​
) which are executed and validated by the deterministic physical engines (e.g., FreeCAD/OCCT, OR-Tools solver).
This integration blueprint ensures that the power of generative AI is leveraged for semantic flexibility and human-centric interaction (reducing the technical barrier of traditional CAD workflows), while the system's core requirements for accuracy, safety, and manufacturability are preserved by the deterministic components of the architecture.

---

The implementation of a frontier, high-performance end-to-end 3D kitchen CPQ + CAD-to-CNC platform necessitates a highly structured integration strategy. This strategy is designed to rigorously adhere to the multi-objective optimization function O
system
​
, prioritizing sub-50 ms latency (T
latency
​
) and canonical data correctness (F
correctness
​
).
The following plan outlines five phases of integration, transitioning from foundational infrastructure synthesis to the deployment of complex domain-specific logic, explicitly leveraging cited frontier open-source templates to accelerate development velocity and guarantee adherence to high-performance engineering standards.

--------------------------------------------------------------------------------

Step 1: Foundational Platform Synthesis and Monorepo Structure
Executive Summary
This phase establishes the resilient, multi-tenant containerized environment and the unified source code repository (Monorepo), serving as the deterministic computational foundation. This integration ensures a single, coherent developer experience (DevEx) and enforces centralized canonical domain types (F
correctness
​
).
Integration Strategy Recommendation
Implement a Next.js+NestJS polyglot Monorepo structure orchestrated by NX or Turborepo, leveraging established SaaS boilerplates for identity management and multi-tenancy.
Recommended Approach
Adopt the phmz/nx-nest-react-monorepo-template as the skeleton, substituting its generic front-end with the multi-tenant architecture provided by the vercel/platforms template.
Surgical Integration Plan
1. Monorepo Initialization: Instantiate the phmz/nx-nest-react-monorepo-template. Define shared-types library for canonical configuration schema, Bills of Material (B), and CNC job structures.
2. SaaS Shell Integration: Replace the default Monorepo front-end application with the multi-tenant routing logic from the vercel/platforms example, ensuring all user flows (consumer, dealer, admin) are tenant-aware and segregated by subdomain or path.
3. Identity Management: Integrate the core identity model (users, tenants, roles) by lifting proven patterns from the wasp-lang/open-saas boilerplate. This ensures a robust Role-Based Access Control (RBAC) foundation across all derived microservices.
4. Type Coherence: Utilize tRPC (from a template like t3-oss/create-t3-app) within the BFF/Gateway services to ensure strict type safety (F
correctness
​
) between the React front-end and the core services.
The Engines Integration
(Not applicable in this step; focus is on structural initialization.)
"The UI" Integration
The shell will use the Next.js 16 + React 19 foundation, preparing the environment for shadcn/ui primitives to be layered over the multi-tenant shell.
Key Component Transplants:
• Monorepo: phmz/nx-nest-react-monorepo-template.
• Multi-Tenancy: vercel/platforms.
• SaaS Plumbing: wasp-lang/open-saas (Patterns for auth/billing).
"The Flow" - Golden Path Integration
Verification that the multi-tenant shell can correctly route a user to the appropriate portal (e.g., /dealer/quotes vs. /consumer/configure) and enforce identity claims based on the unified identity model.
Technical Implementation Priorities
1. Establish the shared domain types (B, D
CNC
​
, S
D-3D
​
).
2. Containerize the Monorepo structure using Kubernetes manifests (e.g., patterns from microservices-demo) and configure Terraform for Infrastructure as Code (IaC) deployment.
Deliverables
A deployable Monorepo containing the shell application and shared type definitions, enforcing type coherence (F
correctness
​
) across the stack.
Performance
Baseline latency measurement (T
latency
​
) for identity lookups and initial page load, targeting sub-50 ms via Next.js 16 SSR/Turbopack acceleration.
UX Coherence
Initial implementation of the global navigation structure (Design, Catalog, CPQ, Manufacturing) within the multi-tenant shell.
Expected Outcomes
A resilient, scalable, cloud-native foundation ready to receive domain logic microservices.

--------------------------------------------------------------------------------

Step 2: Parametric and Geometric Kernel Integration
Executive Summary
This phase integrates the core computational engines—the deterministic parametric kernel (Rust/WASM/OCCT) and the topological optimization solver (CP-SAT)—into dedicated, low-latency microservices, satisfying the latency constraint T
latency
​
≤100 ms for interactive queries.
Integration Strategy Recommendation
Decouple the high-performance computational geometry (OCCT) and constraint programming (CP-SAT) execution into specialized microservices written in high-efficiency languages (Rust/WASM and Python/FastAPI), communicating with the BFF via low-latency protocols.
Recommended Approach
Utilize the wasm-pack-template for the Rust/WASM geometry kernel and wrap the CP-SAT solver within a FastAPI microservice based on the fastapi-microservice-template.
Surgical Integration Plan
1. Geometry Kernel Implementation: Create a dedicated Rust library using wasm-pack-template to wrap core Open Cascade Technology (OCCT) functionality for Boolean operations and B-rep modeling. Compile this kernel to WASM for client-side parametric evaluation and server-side authoritative checks.
2. Parametric Kernel Service: Create the Parametric Kernel & Layout Service (NestJS/Rust hybrid). It hosts the authoritative geometry logic.
3. Optimization Solver Service: Instantiate the fastapi-microservice-template for the Optimization Engine. Implement the topological optimization logic (Work Triangle constraints, layout generation) using the OR-Tools CP-SAT solver, based on the d-krupke/cpsat-primer patterns.
4. BFF Integration: Co-locate the Configurator Session Service (BFF) (from Step 1) with the Parametric Kernel. This BFF receives ΔParams from the UI and synchronously calls the Parametric Kernel for validation and potentially the Optimization Engine for layout variants (Phase P
2
​
), minimizing network latency.
The Engines Integration
• Parametric Engine: Rust/WASM + OCCT.
• Optimization Engine: Python/FastAPI + OR-Tools CP-SAT.
"The UI" Integration
The Next.js front-end will integrate the Babylon.js 3D viewer (seeded by eldinor/bp800) as an embedded micro-frontend. This viewer transmits user actions (parameter changes) to the BFF and renders the resulting canonical parametric state, ensuring the visualization reflects the definitive source of truth.
Key Component Transplants:
• WASM Kernel: wasm-pack-template + opencascade.js examples.
• Layout Solver: fastapi-microservice-template + d-krupke/cpsat-primer.
• 3D Viewer: eldinor/bp800 (Babylon.js 8 + Vite).
"The Flow" - Golden Path Integration
Phase P
2
​
(Topological Optimization) is integrated here: user defines constraints (P
1
​
) → BFF calls Optimization Engine (sync call ≤100 ms) → Optimization Engine returns prioritized feasible layout solutions (Pareto Front candidates) → BFF updates 3D view with candidates in the Layout Gallery.
Technical Implementation Priorities
1. Establish gRPC or high-efficiency HTTP/JSON communication between the BFF and the specialized Python/Rust services.
2. Implement caching in Redis (leveraged from fastapi-microservice-template) within the BFF for frequently accessed configuration state and pre-computed design heuristics.
Deliverables
Deterministic Parametric Kernel exposed via a low-latency BFF API (targeting T
latency
​
<50 ms) and a dedicated OR-Tools layout solver microservice.
Performance
Verification of the target latency constraint: API
CFG-BFF
​
:State×ΔParams→State
′
×T
latency
​
<50 ms.
UX Coherence
The core three-pane layout is implemented, embedding the 3D Babylon viewer into the center canvas.
Expected Outcomes
Real-time, physically constrained geometric configuration feedback is enabled, guaranteeing computational precision.

--------------------------------------------------------------------------------

Step 3: Enterprise Data Consistency and Workflow Orchestration
Executive Summary
This phase integrates the canonical data source ($\text{Catalog & Rules}$) with the resilient workflow orchestration layer (Temporal/Kafka). This critical integration ensures F
correctness
​
by mandating that manufacturing outputs (D
CNC
​
) are traceable to an immutable catalog version, and long-running job failures are managed with exactly-once semantics.
Integration Strategy Recommendation
Adopt an Event-Driven Architecture (EDA) using Kafka as the central event bus for state transitions, and deploy Temporal for resiliently managing the Sale $\to$ Factory long-running job chain.
Recommended Approach
Deploy NestJS microservices, using the ack-nestjs-boilerplate-kafka template for event integration, and integrate Temporal workflows based on the temporalio/samples-typescript for orchestration.
Surgical Integration Plan
1. Catalog Service Deployment: Deploy the Catalog & Rules Service using the NestJS+Kafka template. This service persists its state in PostgreSQL (Transactional Store). Its primary output is the publication of immutable, versioned catalog snapshots to Kafka upon approval (Phase P
4
​
trigger).
2. Orchestration Deployment: Deploy the Workflow Orchestration Service using the temporalio/samples-typescript starter. Define the ManufacturingJobWorkflow activities to include sequential calls to: CPQ Service (for final costing), CAD/CAM Service (for BOM, Cut List generation), and Manufacturing Service (for scheduling).
3. Event Integration: All critical state changes (e.g., QuoteConfirmed, ConfigurationValidated) are published to Kafka. Temporal workers consume these events to trigger long-running workflows, decoupling the interactive front-office from the CPU-intensive back-office.
4. CAD/CAM Service Integration: Deploy the CAD/CAM & DFM Service as a high-throughput microservice. It consumes configuration snapshots via a Temporal Activity and generates D
CNC
​
outputs, storing them in S3 and emitting a CNCOutputGenerated event to Kafka.
The Engines Integration
The CAD/CAM service utilizes the deterministic OCCT kernel (via opencascade.js or native service) for boundary representation (B-rep) manipulation and output generation (D
CNC
​
).
"The UI" Integration
The Studio Admin UI shell (Step 5) integrates TanStack Query to hydrate status dashboards (e.g., Orders list, Manufacturing KPIs) by querying the Temporal workflow state and Kafka-derived analytics data.
Key Component Transplants:
• Microservices: ack-nestjs-boilerplate-kafka.
• Workflows: temporalio/samples-typescript.
• API/Gateway: phmz/nx-nest-react-monorepo-template API gateway.
"The Flow" - Golden Path Integration
The Sale→Factory flow: Final P
4
​
snapshot is confirmed → OrderPlacementWorkflow is triggered (Temporal) → ManufacturingJobWorkflow activities execute sequentially and resiliently (CPQ → BOM → Nesting → CNC program generation D
CNC
​
).
Technical Implementation Priorities
1. Formalize the XML/JSON data exchange schemas for ERP/MES integration (Phase P
4
​
outputs: B, cut lists, D
CNC
​
).
2. Implement idempotent activities within Temporal to handle retries and compensation logic across microservice failures, satisfying the resilience constraint C
failure
​
.
Deliverables
A fault-tolerant, event-driven integration layer capable of orchestrating complex, long-running manufacturing jobs.
Performance
Validation that the long-running job completion time (e.g., Order → CNC Program Ready) is managed asynchronously, ensuring the front-end interactive performance (T
latency
​
) is not blocked by CPU-intensive CAD/CAM generation.
UX Coherence
The Manufacturing and CPQ sections of the main application sidebar are functional, displaying real-time job status derived from Temporal/Kafka updates.
Expected Outcomes
The platform achieves deterministic data flow from the point of sale to the manufacturing floor (F
correctness
​
), enabling the “single system from sale to factory” objective.

--------------------------------------------------------------------------------

Step 4: Semantic-Deterministic Bridge Integration (AI/Agentic Layer)
Executive Summary
This phase integrates the semantic AI layer (LLM/VLM) as an assistive, tool-augmented layer that translates complex natural language intent (S
D-3D
​
) into precise, deterministic commands (
p

​
, C
code
​
) for the parametric and CAD engines. The objective is to democratize CAD interaction while preserving geometric integrity.
Integration Strategy Recommendation
Implement a Tool-Augmented Multi-Agent Orchestration using LangGraph to broker interactions between user intent and the deterministic core services (Parametric, Optimization, CAD/CAM).
Recommended Approach
Host the multi-agent system within a dedicated AI / Agent Orchestration Service (NestJS/Python hybrid). Agents utilize tool-calling paradigms to interact solely via the exposed APIs of the deterministic engines. Utilize OSS agent frameworks like LangGraph/LangChain.
Surgical Integration Plan
1. Agent Service Deployment: Deploy the AI / Agent Orchestration Service using a robust template suitable for Python/LLM integration (e.g., FastAPI microservice template or custom NestJS wrapper).
2. Tool Definition: Define executable tools corresponding to the deterministic APIs of the underlying services, such as paramEngine.applyDelta(
p

​
), optimizer.solveLayout(constraints), and cadService.generateCADMacro(C
code
​
).
3. Agent Orchestration: Implement LangGraph/LangChain workflows (or similar AutoGen-inspired scripts) where a Planner Agent (LLM, Tier 1/GPT-class) translates user intent (S
D-3D
​
) into structured parameters (
p

​
) and executable Python/CAD command segments (C
code
​
).
4. Deterministic Integrity Enforcement: Enforce the critical constraint: the AI layer generates C
code
​
or proposals (
p

​
proposed
​
), but the execution and validation of geometry, constraints, and pricing remains exclusively within the deterministic OCCT/CP-SAT/CPQ services.
5. Perception Integration: Integrate Vision-Language Models (VLMs) (e.g., components integrated in Seek-CAD) within the configuration flow (P
1
​
) to translate rough sketches or floorplans into canonical geometric constraints and wall entities.
The Engines Integration
The integration is defined by the tools layer. For CAD operations, the Geometry Agent calls tools that interface with the deterministic FreeCAD/OCCT engine, demonstrating Agentic CAD principles.
"The UI" Integration
The AI Copilot Chat Panel is implemented in the right rail of the three-pane layout. The front-end leverages Vercel AI SDK patterns for seamless stream integration with the AI / Agent Orchestration Service. Small WebLLM models (Tier 3) are optionally used in the browser for local hints to meet the T
latency
​
<200 ms budget for live editing.
Key Component Transplants:
• Agent Framework: LangChain/LangGraph or relevant multi-agent orchestration frameworks.
• LLM Serving: Optimized serving systems like vLLM or HuggingFace TGI for Tier 2 models, treating inference as an HPC specialty.
"The Flow" - Golden Path Integration
Intent Translation flow: User enters NL command in Copilot → Agent Planner translates NL to function call → Planner calls tool → Tool executes against Parametric Kernel → Kernel updates canonical state → 3D viewer rerenders.
Technical Implementation Priorities
1. Implement strict validation to ensure LLM-generated CAD code segments achieve a 100% valid syntax rate before execution.
2. Integrate the RAG corpus (Vector Store) for grounding agents in specific design knowledge and compliance rules.
Deliverables
A functional, robust Semantic-Deterministic Bridge layer supporting natural language interaction and tool-augmented reasoning.
Performance
Latency budget adherence for LLM calls: Front-end live editing<200 ms (local/cached); AI design suggestions<3 s (remote/async).
UX Coherence
The AI Copilot Chat Panel provides immediate visual feedback in the 3D canvas based on natural language instructions.
Expected Outcomes
The steep learning curve of traditional CAD workflows is mitigated, accelerating design iteration and feasibility analysis.

--------------------------------------------------------------------------------

Step 5: Frontend Synthesis and UX Coherence Guarantee
Executive Summary
The final synthesis guarantees a high-performance, expert-level user experience by fusing the administrative shell with the 3D configurator micro-frontend and rigorously enforcing the shared Design System across all portals and tooling.
Integration Strategy Recommendation
Use a canonical, high-density Admin Dashboard template (Studio Admin) as the UI shell, integrate the Babylon.js configurator via micro-frontend embedding, and enforce consistency via shared shadcn/ui primitives.
Recommended Approach
Clone the Vercel Studio Admin Dashboard template. This template provides the desired Next.js 16 stack, shadcn/ui primitives, and professional dashboard patterns (CRM, Finance) required for CPQ and manufacturing views.
Surgical Integration Plan
1. UI Shell Implementation: Instantiate the Studio Admin template into the Monorepo, designating it as the core UI application (replacing the generic front-end from Step 1).
2. Design System Enforcement: Adopt shadcn/ui and Tailwind CSS 4 as the single source for all UI components and styling. Define Semantic Colors for constraint validation (Success, Warning, Danger) used by the ConstraintBadge.
3. 3D Micro-Frontend Embedding: Embed the Babylon.js kernel (from Step 2) into the main content pane of dedicated routes (e.g., /cpq/configure/[projectId]), ensuring the surrounding shell (header, sidebar) remains consistent with the Studio Admin layout.
4. Specialized Tooling: Implement the LayEdit-style catalog tooling within the admin portal, utilizing Monaco-based editors for DSL/rule scripts and TanStack Table for managing quote line items and manufacturing order queues.
5. Real-Time Feedback Loop: Implement the sticky CPQ summary bar and the 3D viewport overlays (clearance heatmaps, collision glyphs). This requires the Configurator Session Service (BFF) to stream live pricing and constraint violation data back to the UI.
The Engines Integration
(Not applicable in this step; focus is on presentation and interaction.)
"The UI" Integration
The complete UI is realized by fusing the Studio Admin shell with the embedded Babylon.js configurator, ensuring a single, coherent user experience for all personas (Consumer, Dealer, Engineer, Operations).
Key Component Transplants:
• CPQ/Admin UX: Vercel Studio Admin Dashboard.
• UI Primitives: shadcn/ui / Radix UI.
• Data Grids: TanStack Table (for quotes/orders/BOMs).
"The Flow" - Golden Path Integration
The flow for Dimensional Constraint Satisfaction (P
3
​
) is guaranteed: User drags a cabinet → BFF checks against constraints (≤50 ms) → ConstraintBadge updates in real-time → CPQ summary bar reflects pricing change (live updates).
Technical Implementation Priorities
1. Finalize the Feature-Based Selection Mechanism within the 3D visualization layer, allowing users to select topological entities for applying CAD features, retaining the feature-based history (F
correctness
​
).
2. Mandate Latency Budget Enforcement within the CI/CD pipeline for all UI/BFF interactions (Shift-Left discipline).
Deliverables
A fully integrated, high-performance web platform exhibiting frontier UX, with a comprehensive, shared design system spanning all portals.
Performance
Maximum UX performance achieved by guaranteeing Sub-50 ms UI response and 60 FPS 3D rendering, validated by the integration of performance monitoring within the CI/CD environment.
UX Coherence
The three-pane layout is fully implemented, seamlessly blending complex 3D parametric control with real-time quote line items and AI Copilot assistance.
Expected Outcomes
The platform delivers a frictionless, precise design experience that meets industrial standards for speed and accuracy, validating the architectural synthesis.

--------------------------------------------------------------------------------

Deep Analysis Follow-up Commitment
To formally conclude the integration strategy, the architecture must rigorously address the previously defined complex constraints concerning latency and information fidelity:
Deep Analysis Question 1 (Latency): Given the necessity for the Parametric Kernel to output topologically constrained configurations (Phase II) and the CPQ Service to provide real-time pricing based on component Bills of Materials (BOM), how is the computational complexity of the O(NP-hard) constrained layout problem managed to satisfy the ultra-low latency requirement (T
latency
​
≤100 ms) of the interactive Configurator Session Service? Specifically, articulate the mathematical mechanism that enables this speed.
Deep Analysis Question 2 (Fidelity): The architecture mandates the isolation of the geometric kernel (OCCT/Rust) from the semantic AI layer (LLM/VLM). How is the required information fidelity—specifically the retention of parametric and feature-based history—maintained when moving between the high-level NL intent, the geometric kernel, and the downstream CNC outputs? Provide a formal model for linking the input intention S
D-3D
​
to the final manufacturing data D
CNC
​
.


---


Step 1 — Foundational Platform & Monorepo
Executive Summary
Create a single Nx monorepo that hosts:
Next.js multi‑tenant web shell (all portals),


NestJS backend services,


shared type libraries and 3D/geometry packages,


so every app shares canonical types for configuration, BOM, and CNC artifacts.
Integration Strategy Recommendation
Use an Nx monorepo template for NestJS+React as the base, then transplant:
Vercel Platforms Starter Kit → multi‑tenant web shell.


Open SaaS/BoxyHQ patterns → auth, orgs, billing.


tRPC patterns from T3 stack → type‑safe internal APIs.


Recommended Approach
Base repo: phmz/nx-nest-react-monorepo-template for Nx + NestJS + React + shared types. (GitHub, https://github.com/phmz/nx-nest-react-monorepo-template?utm_source=chatgpt.com)


Replace its frontend app with vercel/platforms (multi‑tenant Next.js App Router) (https://github.com/vercel/platforms.git).


Lift auth/tenant/org/billing patterns from a SaaS starter (e.g. Open SaaS, BoxyHQ) into shared NestJS auth services + DB schema.


Surgical Integration Plan
Initialize Monorepo


Fork phmz/nx-nest-react-monorepo-template (https://github.com/phmz/nx-nest-react-monorepo-template.git).


Add libs:


libs/shared-types: TypeScript domain model for:


ConfigState (Sᴰ‑³ᴰ),


Quote (Q),


Bom (B),


CncProgram (D_CNC),


catalog versions (C_version).


libs/shared-utils, libs/shared-config.


Multi‑Tenant Web Shell


Drop in vercel/platforms app into apps/web and adapt its tenant resolution (subdomain/path) to your auth DB.


Define portals:


/app/consumer, /app/dealer, /app/manufacturer, /app/admin.


Identity & SaaS Plumbing


From Open SaaS / BoxyHQ:


Implement user, org/tenant, role, and subscription tables.


Implement SSO + password auth flows.


Expose auth as a NestJS auth-service using Nx library wiring.


Internal RPC


Adopt tRPC patterns (from T3) inside the BFF/gateway so the Next.js app calls backend through strongly‑typed routers, backed by NestJS handlers.


Infra Skeleton


Use manifests from microservices-demo / eShopOnContainers for:


K8s namespaces, ingress, service mesh, CI/CD baseline.


The Engines Integration
Not yet: this step is all structure. It defines shared types used later by geometry, optimization, CAD, CPQ, and CNC.
“The UI” Integration
Next.js 16 App Router + Tailwind 4 + shadcn/ui scaffolding is wired but mostly empty; later we overlay Studio Admin and the configurator.


Key Component Transplants
phmz/nx-nest-react-monorepo-template — Nx + NestJS + React skeleton. (GitHub)


vercel/platforms — multi‑tenant shell.


Open SaaS / BoxyHQ SaaS starter — auth + multi‑tenant SaaS patterns.


Microservices reference apps (Online Boutique, Sock Shop, eShopOnContainers) for infra/CI patterns.


“The Flow” — Golden Path Integration
User hits *.yourdomain.com → tenant resolver (Platforms).


Auth guard enforces user+tenant.


Nav exposes core domains: Design, Catalog, CPQ, Manufacturing, Admin.
 At this point, the app routes correctly by tenant and identity, but has stub content.


Technical Implementation Priorities
Canonical TS types for Sᴰ‑³ᴰ, Q, B, D_CNC, and catalog snapshots.


Nx affected‑graph + lint/test + build pipelines.


K8s manifests + Terraform for the base cluster and Postgres.


Deliverables
Monorepo with:


Tenant‑aware Next.js shell.


NestJS API gateway.


Shared domain types & basic auth wired.


Performance
Baseline P95 latency for:


Tenant resolution + initial HTML render < 150 ms from edge.


SSR via Next.js 16 / Turbopack tuned.


UX Coherence
Single shell navigation across portals.


Tenant branding (logo, colors) applied on all routes.


Expected Outcomes
You now have a cloud‑native skeleton with shared domain language, ready to receive geometry engines, CPQ, and CAD/CNC services without structural refactors.

Step 2 — Parametric & Geometric Kernel + 3D Engine
Executive Summary
Wire the deterministic geometry core:
Rust/WASM parametric kernel (OpenCascade),


OR‑Tools optimization engine,


Babylon.js 8 WebGPU 3D viewer,


behind a low‑latency BFF so every change in the UI yields a validated, canonical state in ≤50–100 ms.
Integration Strategy Recommendation
Split concerns:
Geometry & constraints: Rust + OCCT → WASM + native.


Topological optimization: OR‑Tools CP‑SAT in FastAPI microservice.


3D viewer: Babylon.js 8, packaged as a micro‑frontend.


These are accessed via a thin Configurator Session BFF (NestJS) with Redis caching.
Recommended Approach
Geometry kernel: use rustwasm/wasm-pack-template to build a geometry-kernel crate compiled to WASM + Node.


CAD kernel: donalffons/opencascade.js for OCCT in JS/WASM or as inspiration for a native OCCT service.


Optimization engine: CP‑SAT based on d-krupke/cpsat-primer inside a fastapi-microservice-template service.


3D engine: Babylon.js 8 WebGPU template eldinor/bp800 plus turborepo-nextjs-babylonjs pattern for a separate 3D package.


Surgical Integration Plan
Rust/WASM Geometry Kernel


Create libs/geometry-kernel using wasm-pack-template.


Implement:


Param evaluation (applyDelta),


constraint checks (NKBA rules, clearances, collision),


mesh generation pipeline that feeds Babylon glTF buffers.


Parametric Kernel Service


NestJS service param-kernel-service wrapping the Rust library (via NAPI or gRPC).


Expose APIs: validateDesign, computeLayoutPreview, exportBrep.


Optimization Engine


Clone onlythompson/fastapi-microservice-template → layout-optimizer-service.


Add OR‑Tools CP‑SAT models following cpsat-primer:


Discrete cabinet placement,


work‑triangle + zones constraints,


multi‑objective cost function (storage, counter area, walkway penalties).


Configurator Session BFF


NestJS configurator-bff:


HTTP/tRPC surface for the 3D app: mutateParameters, runOptimization, getLayoutGallery.


Calls Rust kernel + FastAPI engine via gRPC/HTTP.


Uses Redis for active sessions + pre‑computed layouts.


3D Micro‑Frontend


In Nx, create packages/3d-engine based on eldinor/bp800 + turborepo-nextjs-babylonjs.


Export createKitchenScene(canvas, initialState).


Wrap into a React component used by the Next.js app routes.


The Engines Integration
Geometry/parametric engine: Rust/WASM + OCCT.


Optimization engine: Python/FastAPI + OR‑Tools CP‑SAT.


CAD/B‑rep for exports: OCCT via opencascade.js or native service.


“The UI” Integration
The Babylon.js viewer is embedded in a three‑pane layout:


Left: parameters & constraints.


Center: 3D scene (Babylon).


Right: quote/pricing summary or AI copilot (later steps).


Key Component Transplants
rustwasm/wasm-pack-template → geometry-kernel.


donalffons/opencascade.js examples → CAD/B‑rep ops & exports.


fastapi-microservice-template + d-krupke/cpsat-primer → optimization microservice.


eldinor/bp800 + turborepo-nextjs-babylonjs → WebGPU 3D package.


“The Flow” — Golden Path Integration
User tweaks a parameter → Next.js sends Δparams to BFF.


BFF → Rust kernel: compute new geometry, validate constraints; optional call to CP‑SAT for variant layouts.


Kernel returns canonical state; BFF pushes updated state to viewer; Babylon updates meshes.
 Target: State × ΔParams → State' in <50 ms on P95 path.


Technical Implementation Priorities
gRPC/HTTP contracts between BFF, geometry, optimization services.


Redis session model keyed by (tenant, user, project).


Benchmark geometry/optimization latency; adjust grid/heuristics to hit 50–100 ms bounds.


Deliverables
Running 3D configurator backed by deterministic parametric kernel and optimization engine, accessible at /app/*/configure/:projectId.


Performance
P95 latency for param change < 100 ms.


60 FPS rendering in Babylon for typical scenes (instancing and LOD tuned).


UX Coherence
Immediate visual feedback on every change.


Consistent error/constraint indicators (badges, overlays) using shared design system.


Expected Outcomes
The platform now has a mathematically constrained configurator whose geometry, pricing hooks, and forthcoming CAD/CNC outputs all derive from the same canonical parametric state.

Step 3 — Data, Catalog & Workflow Orchestration
Executive Summary
Connect catalog/rules, CPQ, CAD/CAM, and manufacturing via:
a versioned Catalog & Rules service,


Kafka event bus,


Temporal workflows for the Sale→Factory chain,


so every quote, BOM and CNC program is traceable to a catalog snapshot.
Integration Strategy Recommendation
Use:
NestJS + Kafka boilerplate for core microservices,


Temporal TS samples for durable workflows,


all driven by immutable catalog snapshots published on Kafka.
Recommended Approach
Base microservice boilerplate: ack-nestjs-boilerplate-kafka (or similar) for NestJS+Kafka.


Workflow engine: Temporal TS samples (temporalio/samples-typescript) as starting point for order & manufacturing workflows.


Surgical Integration Plan
Catalog & Rules Service


NestJS service using ack-nestjs-boilerplate-kafka.


Postgres schema for:


product families, options, constraints,


rule DSL blobs,


published snapshots (C_version) with hash.


On publish: emit catalog.snapshot.published with snapshot ID + location.


CPQ & Manufacturing Services


CPQ service: price configurations against the current or explicit C_version.


Manufacturing service: consume configuration + C_version and call CAD/CAM & nesting.
 Both use the NestJS+Kafka boilerplate to subscribe/emit events (quote.confirmed, manufacturing.job.created, etc.).


Workflow Orchestration (Temporal)


workflow-service based on temporalio/samples-typescript.


Workflows:


QuoteWorkflow (draft→approved→accepted),


KitchenOrderWorkflow (accepted→manufacturing→shipment).


Activities call CPQ, CAD/CAM, nesting, ERP connector.


Event Topology


Define canonical events:


configuration.validated, quote.created, quote.confirmed,
 order.placed, bom.generated, cnc.ready, shipment.dispatched.


Kafka topics with schema registry; Temporal workers consume events that start or advance workflows.


CAD/CAM & DFM Service


Service (NestJS + Rust/OCCT) for BOM, cut‑lists, and CNC program generation.


Triggered as a Temporal activity; emits cnc.output.generated with S3 URLs + metadata.


The Engines Integration
CAD/CAM uses OCCT (from Step 2) to generate B‑rep, then BOM and D_CNC; all keyed by C_version and configuration hash.


“The UI” Integration
Studio Admin dashboards (Step 5) use TanStack Query to query:


Temporal workflow states,


Kafka‑derived analytics (via a reporting service),


for Manufacturing, Orders, and CPQ.


Key Component Transplants
ack-nestjs-boilerplate-kafka → all domain microservices with Kafka transport.


temporalio/samples-typescript → workflow service.


Kafka + K8s patterns from Online Boutique/Sock Shop/eShopOnContainers.


“The Flow” — Golden Path Integration
Final config snapshot (Sᴰ‑³ᴰ, C_version) is confirmed in the configurator.


CPQ service prices and emits quote.confirmed.


Temporal KitchenOrderWorkflow starts:


CPQ → CAD/BOM → nesting → CNC → ERP/MES connectors.


UI shows asynchronous progress to the user; interactive front‑end is never blocked.


Technical Implementation Priorities
Event schemas & versioning for all key events.


Idempotent Temporal activities to tolerate retries.


ERP/MES connector stubs with XML/JSON contracts for BOM, routing, CNC.


Deliverables
Deployed Kafka cluster and Temporal cluster.


Catalog, CPQ, Manufacturing, CAD/CAM services emitting/consuming events.


Workflows for quote + order fulfillment.


Performance
Long‑running job runtime is asynchronous; front‑end P95 latency for reads stays <150 ms.


Workflows handle machine‑scale jobs but don’t affect interactive path budgets.


UX Coherence
Manufacturing and CPQ sections show live workflow states with consistent status labels and progress indicators.


Expected Outcomes
End‑to‑end “sale → factory” path is deterministic and auditable; every CNC program is anchored to a specific catalog version and configuration.

Step 4 — Semantic–Deterministic AI/Agent Layer
Executive Summary
Add an AI layer that:
translates natural language + sketches into structured design parameters,


orchestrates tools (parametric kernel, CP‑SAT, CAD/CAM),


while never directly deciding prices, BOM or CNC—those remain deterministic.
Integration Strategy Recommendation
Use a dedicated AI/agent orchestration service:
LangGraph/LangChain multi‑agent graph,


tools that call your existing engines,


Vision‑Language Models for perception (floor plans / photos).


Recommended Approach
Language/agent runtime: Python or TypeScript service built on existing FastAPI microservice template (Python) or NestJS + Node.


Agent framework: LangGraph or LangChain “tool‑calling agents” with RAG.


Serving: vLLM/TGI or managed APIs for large models; WebLLM for in‑browser small models.


Surgical Integration Plan
AI Orchestration Service


New app ai-agent-service (FastAPI or NestJS).


Endpoints:


/design/interpret-intent,


/design/chat,


/manufacturing/analyst.


Tool Layer


Tools expose deterministic APIs:


paramEngine.applyDelta,


optimizer.solveLayout,


cadService.generateCadMacro,


pricingService.simulateChange.


Agent Graph


Planner agent: maps NL → param vectors & high‑level actions.


Geometry agent: edits CAD/param state via tools.


Manufacturing agent: reasons about batching, scheduling, but only proposes plans that workflows then enact.


Perception


Integrate a VLM (e.g. blueprint/photo→room extraction) into Step P1: process uploads into a structured room model passed to the parametric kernel.


Guardrails


Static checks for CAD macro code,


pre‑execution validation via parametric kernel,


no direct DB writes or CNC file emission by LLMs.


The Engines Integration
All AI actions are mediated through tools that call:


parametric kernel,


optimization engine,


CAD/CAM,


CPQ.
 They never bypass constraints or write raw manufacturing data.


“The UI” Integration
Right‑rail AI Copilot panel in the configurator routes to ai-agent-service:


Chat UX using Vercel AI SDK patterns (streamed responses),


Quick‑actions (“make this layout more family‑friendly”, etc.).


WebLLM‑powered local hints for tooltips and micro‑suggestions when offline.


Key Component Transplants
LangGraph / LangChain agent frameworks.


vLLM/TGI for OSS model serving.


Vercel AI SDK for the front‑end chat experience.


“The Flow” — Golden Path Integration
User types NL instruction in Copilot → planner agent interprets → calls tools via ai-agent-service → engines update canonical state → 3D view + pricing panel reflect change.
 Latency targets:


local hints <200 ms,


full AI design suggestions <3 s (async update with spinner).


Technical Implementation Priorities
Tool definitions + schema; strict type contracts with engines.


Safety/validation layer around CAD and layout commands.


RAG corpus of catalog/rules/guidelines for grounded answers.


Deliverables
AI Copilot wired into configurator.


NL→parametric spec conversion.


AI‑assisted rule authoring in LayEdit‑style catalog editor (with tests generated and run against parametric kernel).


Performance
No AI call is on the hard 50 ms path; everything is async from the configurator’s point of view.


Resource‑heavy LLM operations are batched and monitored separately.


UX Coherence
Copilot feels additive, not magical: every AI change is visible, explainable, and undoable.


Messages explicitly show which deterministic tools were invoked.


Expected Outcomes
AI becomes a semantic interface over your deterministic engines, increasing throughput and accessibility without compromising correctness or manufacturability.

Step 5 — Frontend Synthesis, CPQ UI & Design System
Executive Summary
Fuse everything into a coherent UI:
Admin + dealer + manufacturer CPQ dashboards,


embedded 3D configurator,


consistent shadcn‑based design system,


so the entire CPQ + CAD‑to‑CNC experience feels like a single, high‑performance product.
Integration Strategy Recommendation
Use a modern Next.js/shadcn admin template as the shell:
Vercel’s Studio Admin (Next.js 16 + shadcn + Tailwind 4 + TanStack Table). (Vercel)


Embed the configurator micro‑frontend inside dedicated routes and enforce a single design system across portals.
Recommended Approach
Clone/fork Vercel’s “Next.js & shadcn/ui Admin Dashboard — Studio Admin” as your main UI app in the Nx monorepo. (Vercel)


Map CPQ/Design flows onto its CRM/Finance dashboards and data tables.


Keep 3D configurator as separate package (3d-engine) consumed by the Studio Admin app.


Surgical Integration Plan
UI Shell


Replace Step‑1 placeholder frontend with Studio Admin template.


Integrate tenant resolution + auth from Step 1 into Studio Admin layouts.


Design System


Centralize shadcn/ui component exports in libs/ui.


Enforce Tailwind 4 theme tokens (colors, radii, typography) across apps.


Add “constraint state” tokens (valid/warn/error) reused in configurator + catalog + manufacturing views.


Core Screens


/cpq/dashboard: pipeline KPIs, margin charts, open quotes.


/cpq/quotes/:id: TanStack Table line‑items + side panel with 3D preview and config summary.


/cpq/configure/:projectId: full three‑pane configurator route.


/catalog/*: LayEdit‑style catalog + rules editors with embedded 3D preview.


/manufacturing/*: order status, job queues, workflow states.


Configurator Embedding


In /cpq/configure/[projectId], mount <KitchenConfigurator /> from 3d-engine:


It talks only to configurator-bff.


Studio Admin provides chrome (sidebar, header, panels).


CPQ Flow Integration


Connect UI actions to CPQ service:


“Price now”, “Save quote”, “Send for approval”.


Show margin/discount columns in TanStack tables with live recalculation.


The Engines Integration
Configurator UI → BFF → geometry/optimization/CAD.


Quote UI → CPQ service → workflows.


Catalog UI → Catalog & Rules service → Kafka snapshots.
 All engines are invoked via typed hooks (TanStack Query + tRPC).


“The UI” Integration
This step is the UI:
Studio Admin for shell/dashboards.


3D micro‑frontend for design.


AI Copilot panel integrated as a right‑hand column where appropriate (configure, catalog, manufacturing analysis).


Key Component Transplants
Vercel Studio Admin template (Next.js + shadcn + TanStack Table). (Vercel)


(Optional) Shadboard or other shadcn dashboards for additional layout patterns. (All ShadCN)


3d-engine package from Step 2.


“The Flow” — Golden Path Integration
Dealer logs in → /cpq/dashboard shows their pipeline.


Opens a quote → jumps into /cpq/configure/:projectId with 3D state loaded.


Iterates on design (Step 2 engines) → “Price quote” → CPQ service; if accepted, “Send to production” triggers Step 3 Temporal workflows.


AI Copilot is available throughout but never blocks deterministic actions.


Technical Implementation Priorities
Align all routes and data hooks with BFF/microservice APIs.


Implement global loading/error UX with consistent patterns.


Visual regression tests for 3D views + key dashboards.


Deliverables
Fully functional CPQ web app with:


dashboards,


configurator,


catalog tooling,


manufacturing views.


Performance
P95 navigation + data fetch < 200 ms for dashboards.


Configurator interactions unchanged from Step 2 (<100 ms), as shell adds only light chrome.


UX Coherence
Single visual language (shadcn + Tailwind tokens).


Identical mental model for statuses, constraints, and flows across design, CPQ, and manufacturing.


Expected Outcomes
You end up with a production‑grade, visually coherent, high‑performance 3D CPQ + CAD‑to‑CNC platform, assembled from proven OSS starters instead of bespoke scaffolding—ready to harden and iterate rather than still “under construction.”

---

Here’s a concrete, “give this to an engineer” checklist and issue plan, wired to the architecture you already defined.
I’ll assume a single Nx/Turborepo monorepo with TypeScript as the dominant language, Rust/Python for heavy compute, and the OSS kit we already picked (Vercel Platforms + Studio Admin, NestJS microservices, Rust/WASM kernel, OR‑Tools, OCCT, Temporal, Kafka, Postgres, Redis, K8s).

0. Monorepo layout (anchor for all checklists)
kitchen-platform/
  apps/
    studio-web/           # CPQ + CRM console (Next.js + Studio Admin)
    configurator-3d/      # 3D kitchen planner (Next.js + Babylon)
    layedit-admin/        # Catalog & rule editor
    ops-console/          # Manufacturing / CNC / job-status console
  services/
    bff-configurator/     # Low-latency BFF for configurator sessions
    catalog-rules-service/
    cpq-service/
    order-service/
    manufacturing-service/
    cad-cam-service/
    optimizer-service/
    ai-agent-service/
    workflow-service/     # Temporal workers
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

1. Per‑folder engineering checklist (+ architecture notes)
1.1 apps/studio-web – CPQ + CRM console
Primary user flows
Sales / dealer:


View pipelines, customers, quotes.


Open a quote → launch 3D configurator → sync price/margin.


Send for approval, export proposal, push to CRM/ERP.


Admin:


Manage users, roles, tenants, price lists, approval policies.


Stack & architecture
Next.js 16 + React 19, Studio Admin UI template (shadcn, Tailwind v4, TanStack Table, RHF, Zod).


Uses tRPC client to talk to bff-configurator and CPQ APIs.


Checklist
Fork Vercel Studio Admin template into apps/studio-web.


Replace placeholder dashboards with:


/cpq/dashboard – overview of active quotes, margin, conversion.


/cpq/quotes – quotes data table (TanStack Table).


/cpq/quotes/[id] – quote detail page with:


Embedded 3D configurator iframe/route.


Live CPQ table (line items, discounts, margin).


/cpq/catalog – catalog admin views (delegated to LayEdit app).


Integrate multi‑tenant routing from vercel/platforms (subdomain or path based tenant).


Wire auth/session to monorepo identity (from SaaS boilerplate patterns).


Implement RBAC guards on routes (dealer vs manufacturer vs admin).


Add CPQ‑specific components:


Quote timeline (status, approvals, revisions).


Margin & discount visualization widgets.


Diff view (“version A vs B”) using two table instances.


ML / AI
“Sales copilot” panel:


Tool‑calling client to ai-agent-service with quote + customer context.


Actions: suggest alternates, explain price deltas, generate email/proposal text.


Data & API
Consume tRPC endpoints: cpq.getQuote, cpq.updateLineItem, cpq.getScenarios.


Subscribe to quote events via WebSocket/SSE (for async recompute status).


DevEx / CI
Storybook or Ladle stories for CPQ components.


Visual regression tests on critical dashboards.


E2E tests (Playwright/Cypress) for quote flow: open → configure → approve → send to ERP.



1.2 apps/configurator-3d – Babylon-based planner
Primary user flows (P1–P4 from your user‑flow doc)
Parametric initialization (room, constraints).


Topological optimization (engine suggests layouts).


Dimensional constraint satisfaction (fine‑tune cabinets).


CPQ view (live pricing, scenarios).


Final review → submit to order.


Stack & architecture
Next.js app (or SPA) embedding Babylon.js 8 WebGPU template (bp800 / turborepo‑nextjs‑babylon pattern).


Scene logic uses packages/param-kernel-wasm for geometry + constraints.


Talks only to bff-configurator (tRPC/HTTP) for validation, pricing and optimization requests.


Checklist
Create app from Next.js + Babylon starter (merge bp800 into configurator-3d).


Implement core layout:


Left: param controls (room dimensions, goals, presets).


Center: 3D view + 2D top plan (Babylon canvas).


Right: CPQ panel + Design Copilot chat.


Integrate WASM kernel:


Load param-kernel-wasm in WebWorker.


Define message protocol: applyDelta, solveConstraints, getMeshData.


Hook param deltas → BFF mutations:


mutateParams (sync, target < 50 ms).


requestLayoutOptimization (sync 50–100 ms) for layout gallery.


Implement NKBA constraint overlays: aisle widths, triangles, landings.


ML / AI
Client integration to ai-agent-service for:


Natural‑language → param spec (e.g. “minimalist, big island, family friendly”).


Design copilot commands (chat → tool calls).


Data & API
State machine for session:


INIT_ROOM → LAYOUT_SELECTION → REFINEMENT → CPQ → REVIEW.


Persist checkpoints via BFF: session snapshots stored in Redis + Postgres.


DevEx / CI
3D visual regression harness (headless Babylon render of canonical scenes).


Performance tests for interaction latency (camera, drag operations).



1.3 apps/layedit-admin – Catalog & rules editor
User flows (LayEdit analogue)
Product expert:


Create/edit catalog items, param domains, constraints.


Author rule DSL via Monaco editor.


Run test suites (auto‑generated rooms) before publishing a new catalog version.


Stack
Next.js 16 + React 19; ui-kit + Monaco + embedded Babylon viewport for preview.


Checklist
Scaffold app from Studio Admin’s “admin” sections.


Implement entities:


Families, SKUs, param domains (width/height/depth ranges, finishes).


Rules DSL editor with syntax highlighting + LSP (schema from packages/shared-types).


Connect to catalog-rules-service:


CRUD drafts.


“Validate” → runs rule tests in background (Temporal activity).


“Publish” → emits versioned snapshot event to Kafka.


ML / AI
NL → rule DSL helper:


Call ai-agent-service tool draftRuleFromText.


Test generator:


Call ai-agent-service tool generateEdgeCaseRooms → feed to kernel for automated regression.



1.4 apps/ops-console – Manufacturing & CNC dashboard
User flows
Production engineer views:


Job queue, CNC job details, nesting sheets, machine status.


Exceptions (failed simulations, rule violations, long jobs).


Can re‑batch jobs and push back to manufacturing service.


Stack
Same UI stack as studio-web but bound to manufacturing topics.


Checklist
Streams CNC & job events from Kafka into dashboards.


Integrates with manufacturing-service & workflow-service for re‑runs, re‑schedules.


Viewers for generated artifacts (PDF drawings, nesting images).



1.5 services/bff-configurator
Purpose & user flows
Single low‑latency entrypoint for configurator app:


mutateParams, validateDesign, priceSnapshot, optimizeLayout.


Stack
NestJS (or lightweight Node) BFF with tRPC + Redis cache.


Checklist
Scaffold service from Nx NestJS template.


Implement tRPC router for:


getSession, mutateParams(delta), getLayouts, getPrice.


Store active session state in Redis; canonical snapshot periodically in Postgres.


Synchronous calls:


Param kernel (gRPC or HTTP to optimizer/param services).


CPQ service for quick re‑price path (with Redis cache).


Enforce P95 < 100 ms on mutation endpoints (perf tests).


ML / AI
None on critical path; just orchestrates other services.



1.6 services/catalog-rules-service
Purpose
Canonical catalog & rules store with immutable versioned snapshots.


Stack
NestJS + Postgres + Kafka.


Checklist
Start from ack-nestjs-boilerplate-kafka template.


Schema:


catalogs, rules, parameter_domains, versions, test_suites.


Implement:


Draft lifecycle: create/update/delete.


Publish pipeline: lock draft, run validation, persist immutable snapshot row, emit catalog.version.published event with hash/UUID.


Expose APIs for:


GET /catalog/version/{id} (for CPQ, kernel, CAD).


POST /rules/validate (for LayEdit).


ML / AI
Endpoint for ai-agent-service to retrieve rule context.


Safe sandbox to run LLM‑generated rule mutations under tests only.



1.7 services/cpq-service
Purpose
Deterministic pricing & discount logic, CPQ scenarios, margin projections.


Stack
NestJS + Postgres, uses catalog snapshots & param model; may optionally use OR‑Tools for small combinatorial pricing (bundles).


Checklist
Schema: quotes, quote_lines, discount_policies, approval_rules.


Implement:


Price evaluation from param configuration + catalog version.


Multi‑scenario handling (Base / Variant A/B).


Margin computation & thresholds.


Events:


Emit quote.created, quote.updated, quote.approved.


Export canonical Quote object to workflow service for manufacturing.


ML / AI
CPQ assistant tools for ai-agent-service:


simulateChange(delta) → returns new prices.


explainDelta(oldQuote, newQuote) for sales copilot.



1.8 services/order-service
Classical domain service: orders, invoices, payments.


Uses standard NestJS CRUD + integration with payment gateway.


Emits order.placed, order.paid for workflows.



1.9 services/manufacturing-service
Purpose
Orchestrate manufacturing jobs, map BOMs to CNC jobs & routing.


Stack
NestJS + Postgres + Kafka.


Checklist
Receives quote.approved / order.paid events.


Calls cad-cam-service & optimizer-service for:


BOM, cut lists.


Nesting & G‑code.


Persists jobs, panels, sheets, toolpaths.


Emits job.created, job.completed, cnc.output.generated.



1.10 services/cad-cam-service
Purpose
Deterministic OCCT/FreeCAD B‑rep operations + CAD file generation.


Stack
Node/TS wrapper around OCCT (via opencascade.js) or native C++/Rust service.


Checklist
Implement API:


generate2DDrawings(configSnapshot).


generateSTEP_DXF(configSnapshot).


generateCNCPrograms(configSnapshot).


Ensure every artifact stores pointer to canonical configId + catalogVersion.


Robust geometry validation (no self‑intersections, clearances obeyed).



1.11 services/optimizer-service
Purpose
OR‑Tools CP‑SAT layout optimization (P2 topological optimization).


Stack
FastAPI (Python) + OR‑Tools, or Rust + OR‑Tools.


Checklist
Scaffold from FastAPI microservice template.


Implement CP‑SAT model for cabinet placement & appliance zones.


Implement time‑bounded solve (e.g. 50–100 ms) with warm starts.


Expose optimizeLayout(problemSpec) over gRPC/HTTP to bff-configurator.


ML / AI
Accept optional weight vector from AI (priorities for objectives) but solver enforces feasibility.



1.12 services/ai-agent-service
Purpose
Host LLM tools/agents for design copilot, CPQ copilot, catalog assistant, manufacturing advisor.


Stack
FastAPI/NestJS + LangGraph/LangChain; vLLM backend for OSS models.


Checklist
Define tools for:


nlToParamSpec, nlToRuleDSL, suggestLayoutHeuristics, explainPriceDelta, summarizeDesignSession.


Enforce tool‑only mutations (no unconstrained writes).


Log all prompts & outputs for evaluation.



1.13 services/workflow-service
Purpose
Temporal workers for Sale → Factory workflows.


Checklist
Scaffold from temporalio/samples-typescript.


Implement workflows:


OrderPlacementWorkflow.


ManufacturingJobWorkflow (CPQ → CAD/CAM → manufacturing).


Idempotent activities for each external call.



1.14 services/integrations/* (CRM/ERP)
Thin NestJS services based on Nest+Kafka boilerplate.


Consume domain events → call external APIs (Salesforce, SAP, etc.).


Provide webhooks for external systems to push updates back.



1.15 packages/shared-types
TS types + JSON Schemas + protobuf definitions for:


Param spec, catalog snapshot, quote, BOM, CNC job, events.



1.16 packages/param-kernel-wasm
Rust → WASM parametric kernel; constraint solving & lightweight meshing.



1.17 infra/*
K8s manifests (patterned from Online Boutique / Sock Shop).


Terraform/Pulumi modules for DBs, Kafka, Temporal, object storage.


Observability stack (OpenTelemetry, Prometheus, Grafana, Loki).



2. Issue breakdown: Epics → Stories (with architecture lenses)
I’ll group by epics that map to your 5‑step integration plan.

Epic E1 – Monorepo & foundational platform
Goal: Nx/Turbo monorepo, identity & tenancy, CI/CD + K8s baseline.
Stories
E1‑S1: Initialize Nx/Turborepo monorepo


Define apps/, services/, packages/ structure.


E1‑S2: Integrate vercel/platforms multi‑tenant routing into apps/studio-web.


E1‑S3: Implement shared identity model (users/tenants/roles) across services.


E1‑S4: Set up Postgres, Redis, Kafka, Temporal, object storage via Terraform.


E1‑S5: Baseline CI pipeline (lint, typecheck, unit tests).


E1‑S6: K8s deployment templates for core services.


Architecture dimensions
User flow: basic auth + tenant routing; no CPQ yet.


Structural: monorepo, microservices skeletons, event bus, workflow engine.


Runtime: Next.js, NestJS, Postgres, Kafka, Temporal, Redis, K8s.


ML/AI: none; infra only.


Data/API: core identity + tenancy schemas, tRPC gateway stub.


DevEx: devcontainers, task runners, CI scaffolding.



Epic E2 – Parametric kernel, optimization & BFF
Goal: Deterministic param kernel (Rust/WASM), OR‑Tools optimizer, low‑latency BFF and 3D app integration.
Stories
E2‑S1: Implement packages/param-kernel-wasm (room + cabinet model, constraints).


E2‑S2: Create services/optimizer-service with CP‑SAT layout solver.


E2‑S3: Implement services/bff-configurator tRPC API (mutateParams, getLayouts).


E2‑S4: Wire apps/configurator-3d to kernel + BFF; basic P1–P3 flows.


E2‑S5: Performance tests for P95 < 100 ms for param change → layout update.


Architecture dimensions
User flow: P1–P3 continuous design loop (init, layout, refinement).


Structural: kernel + optimizer as compute plane; BFF isolates UI; 3D app as micro‑frontend.


Runtime: Rust/WASM, Python OR‑Tools, NestJS, Babylon.js.


ML/AI: optional heuristic weights from ai-agent-service; solver remains ground truth.


Data/API: design sessions in Redis/Postgres; gRPC between BFF and optimizer/kernel; tRPC to front‑end.


DevEx: property‑based tests for invariants (no collisions, NKBA clearances).



Epic E3 – Catalog, rules, CPQ and data consistency
Goal: Immutable catalog core, CPQ engine, canonical model invariant.
Stories
E3‑S1: Implement catalog-rules-service with draft/publish + versioned snapshots.


E3‑S2: Build apps/layedit-admin for catalog/rule authoring & testing.


E3‑S3: Implement cpq-service (pricing, scenarios, approvals).


E3‑S4: Connect BFF/3D app to catalog/CPQ (pricing in P4).


E3‑S5: Ensure all artifacts (quotes, BOM, CNC) carry (configId, catalogVersion) pointers.


Architecture dimensions
User flow: business users update catalog; dealers price configurations; quotes created/approved.


Structural: catalog core feeding CPQ, kernel, CAD via snapshot events.


Runtime: NestJS + Postgres + Kafka.


ML/AI: LayEdit assistants for NL → rule DSL & test generation.


Data/API: versioned catalog models; GraphQL/REST for external exposure; events for snapshot distribution.


DevEx: rule regression test harness auto‑run on catalog publish.



Epic E4 – CAD/CAM, manufacturing & workflows
Goal: End‑to‑end Sale → Factory chain with Temporal orchestrating CAD, nesting and CNC.
Stories
E4‑S1: Implement cad-cam-service (drawings, STEP/DXF, CNC program generation).


E4‑S2: Implement manufacturing-service and job schemas.


E4‑S3: Implement workflow-service workflows (OrderPlacementWorkflow, ManufacturingJobWorkflow).


E4‑S4: Wire events: quote.approved / order.paid → workflow → jobs → CNC outputs.


E4‑S5: Ops console for job queue & CNC status in apps/ops-console.


Architecture dimensions
User flow: quote approved → manufacturing jobs created → CNC programs delivered → completion & tracking.


Structural: Temporal as durable execution layer; CAD/CAM and DFM as activities; manufacturing service as job orchestrator.


Runtime: OCCT, Rust/Node, NestJS, Temporal, K8s.


ML/AI: manufacturing agent to suggest batching, detect anomalies in CNC/logs, but always layered over deterministic simulation.


Data/API: CNC artifacts in object storage; job state in Postgres; events in Kafka.


DevEx: synthetic load tests for BOM/CNC generation throughput; visual diffing of generated drawings.



Epic E5 – AI layer & assistants
Goal: Realistic, assistive AI across design, catalog, CPQ, CRM, manufacturing.
Stories
E5‑S1: Stand up ai-agent-service with base tools for param, rules, CPQ & CAD.


E5‑S2: Design copilot in configurator (chat → tool calls).


E5‑S3: Catalog assistant in LayEdit (NL → rules + tests).


E5‑S4: Sales copilot in Studio web (explain prices, suggest alternatives, summarize sessions).


E5‑S5: Manufacturing advisor agent (batching, scheduling hints).


Architecture dimensions
User flow: optional AI layer that never bypasses deterministic engines.


Structural: AI service as sidecar; tools call existing services; no direct DB writes.


Runtime: vLLM/TGI + LangGraph/LangChain; WebLLM for in‑browser light tasks.


ML/AI: clear separation between semantic layer and physics/geometry layer; tool‑only architecture.


Data/API: compact state snapshots passed to AI; logs for eval.


DevEx: offline evaluation harness for prompts; red‑team tests for safety/correctness.



Epic E6 – UX coherence, performance, observability & SRE
Goal: Guarantee UX latency, visual consistency, and operational reliability.
Stories
E6‑S1: Implement latency budgets per critical path (UI P95 < 150 ms; BOM < 5 s; CNC < 30 s).


E6‑S2: Instrument all services with OpenTelemetry, set up Prometheus/Grafana dashboards.


E6‑S3: 3D visual regression pipeline for configurator.


E6‑S4: Performance test suite (k6/Locust) simulating configurator → CPQ → manufacturing flows.


E6‑S5: SLOs & alerting: configurator availability, quote latency, job failure rates.


Architecture dimensions
User flow: smooth, predictable response times through the full Sale → Factory path.


Structural: standardized observability cross‑cutting all microservices.


Runtime: Otel, Prometheus, Grafana, Loki, GitOps CD.


ML/AI: optional anomaly detection on metrics/logs using OSS LLMs/ML, but SLOs remain metric‑driven.


Data/API: time‑series in Prometheus/ClickHouse; trace IDs as first‑class correlation keys.


DevEx: fast feedback; perf regressions fail CI by design.




---


Epic 1 — Foundational Platform & Shared Types
Scope: monorepo skeleton, identity/tenancy, multi‑tenant Next shell, tRPC wiring.
1.1 Core domain types (shared-types)
Primitive aliases
// libs/shared-types/src/primitives.ts
export type ULID = string;
export type ISODateTime = string;   // RFC3339
export type CurrencyCode = string;  // "EUR" | "USD" | ...
export type Millimeter = number;
export type Degree = number;

Identity & tenancy
// libs/shared-types/src/identity.ts
export interface TenantIdBrand { readonly _brand: 'TenantId'; }
export type TenantId = string & TenantIdBrand;

export interface UserIdBrand { readonly _brand: 'UserId'; }
export type UserId = string & UserIdBrand;

export type Role = 'consumer' | 'dealer' | 'catalog_engineer' | 'manufacturing_engineer' | 'admin';

export interface Tenant {
  id: TenantId;
  slug: string;                // used in subdomain/path routing
  displayName: string;
  createdAt: ISODateTime;
  isActive: boolean;
}

export interface User {
  id: UserId;
  tenantId: TenantId;
  email: string;
  displayName: string;
  roles: Role[];
  createdAt: ISODateTime;
  lastLoginAt?: ISODateTime;
}

export interface Session {
  id: ULID;
  userId: UserId;
  tenantId: TenantId;
  issuedAt: ISODateTime;
  expiresAt: ISODateTime;
  jwt: string;                 // signed token with tenant & role claims
}

Project / configuration identity
// libs/shared-types/src/projects.ts
export interface ProjectIdBrand { readonly _brand: 'ProjectId'; }
export type ProjectId = string & ProjectIdBrand;

export interface CatalogVersionIdBrand { readonly _brand: 'CatalogVersionId'; }
export type CatalogVersionId = string & CatalogVersionIdBrand;

export type ProjectStatus = 'draft' | 'quoted' | 'ordered' | 'archived';

export interface Project {
  id: ProjectId;
  tenantId: TenantId;
  ownerId: UserId;
  status: ProjectStatus;
  catalogVersionId: CatalogVersionId;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
}

1.2 tRPC surface (Next.js ↔ API gateway/BFF)
Gateway app: apps/api (NestJS) exposes a tRPC router (via @trpc/server + Nest adapter) as planned.
auth router
// apps/api/src/trpc/routers/auth.ts
export const authRouter = t.router({
  getSession: t.procedure
    .query(() => Session | null),

  loginWithOAuthCallback: t.procedure
    .input(z.object({ code: z.string(), state: z.string().optional() }))
    .mutation(() => Session),

  logout: t.procedure
    .mutation(() => { success: true }),
});

tenancy router
export const tenancyRouter = t.router({
  getCurrentTenant: t.procedure
    .query(() => Tenant),

  listTenantsForUser: t.procedure
    .query(() => Tenant[]),
});

1.3 gRPC surface (gateway ↔ Identity service)
Identity service is a NestJS microservice (pattern from ack-nestjs-boilerplate-kafka) with a gRPC transport for token validation.
Proto
// identity.proto
syntax = "proto3";

package identity.v1;

message ValidateTokenRequest {
  string jwt = 1;
}

message ValidateTokenResponse {
  bool valid = 1;
  string user_id = 2;
  string tenant_id = 3;
  repeated string roles = 4;
  string expires_at = 5; // ISO datetime
}

service IdentityService {
  rpc ValidateToken(ValidateTokenRequest) returns (ValidateTokenResponse);
}

Gateway calls ValidateToken on each incoming request (or uses local cache).
1.4 Latency budgets (Epic 1)
Goal: identity + initial shell load P95 < 50 ms backend time.
Per‑call P95 budgets (server side, excluding browser rendering):
Call
Path
P95 budget
auth.getSession (tRPC)
Next → API → IdentityService
25 ms
tenancy.getCurrentTenant (tRPC)
Next → API → Postgres
20 ms
Initial page SSR data (user + tenant)
Next getServerSideProps → API
35 ms

Constraint:
[
 L_{\text{auth.getSession}}^{P95} + L_{\text{tenancy.getCurrentTenant}}^{P95} \le 45\text{ ms}
 ]
So that with network (~10–20 ms round‑trip) you’re still <70 ms backend+network, keeping total first meaningful paint within UX targets.

Epic 2 — Parametric & Geometric Kernel + Configurator BFF
Scope: canonical param state S_{D-3D}, param deltas, layout optimization, constraint validation, critical interactive path BFF↔Kernel↔CPQ.
2.1 Core geometry / param types
// libs/shared-types/src/geometry.ts

export interface Vector2 { x: Millimeter; y: Millimeter; }
export interface Vector3 { x: Millimeter; y: Millimeter; z: Millimeter; }

export interface WallSegment {
  id: ULID;
  start: Vector2;
  end: Vector2;
  height: Millimeter;
  thickness: Millimeter;
}

export interface Opening {
  id: ULID;
  kind: 'door' | 'window';
  positionOnWall: Millimeter;       // param along wall segment
  width: Millimeter;
  height: Millimeter;
  sillHeight: Millimeter;           // from floor
}

export interface RoomGeometry {
  id: ULID;
  perimeter: WallSegment[];
  openings: Opening[];
  ceilingHeight: Millimeter;
}

Cabinets / instances
// libs/shared-types/src/cabinets.ts
export type CabinetKind = 'base' | 'wall' | 'tall' | 'appliance';

export interface CabinetInstanceIdBrand { readonly _brand: 'CabinetInstanceId'; }
export type CabinetInstanceId = string & CabinetInstanceIdBrand;

export interface CabinetInstance {
  id: CabinetInstanceId;
  sku: string;
  kind: CabinetKind;
  roomId: ULID;
  wallId: ULID;
  position: Millimeter;      // along wall local axis
  elevation: Millimeter;     // from floor
  width: Millimeter;
  depth: Millimeter;
  height: Millimeter;
  rotationDeg: Degree;       // for islands/peninsulas
  parameters: Record<string, number | string | boolean>;
}

Constraint model
// libs/shared-types/src/constraints.ts
export type ConstraintSeverity = 'info' | 'warning' | 'error';

export type ConstraintCode =
  | 'NKBA_WORK_TRIANGLE'
  | 'NKBA_AISLE_WIDTH'
  | 'COLLISION'
  | 'OOB_ROOM'
  | 'DFM_PANEL_SIZE'
  | 'DFM_EDGE_CLEARANCE';

export interface ConstraintViolation {
  code: ConstraintCode;
  severity: ConstraintSeverity;
  message: string;
  affectedCabinetIds: CabinetInstanceId[];
  affectedGeometryIds: ULID[];
}

export interface ConstraintSummary {
  hasBlockingErrors: boolean;
  violations: ConstraintViolation[];
}

Canonical parametric state
// libs/shared-types/src/configuration.ts
import { RoomGeometry } from './geometry';
import { CabinetInstance } from './cabinets';
import { ConstraintSummary } from './constraints';
import { ProjectId, CatalogVersionId, TenantId } from './projects';

export interface ParametricState {
  projectId: ProjectId;
  tenantId: TenantId;
  catalogVersionId: CatalogVersionId;
  room: RoomGeometry;
  cabinets: CabinetInstance[];
  constraints: ConstraintSummary;
  updatedAt: ISODateTime;
}

Deltas & layout goals
export type ParamPath =
  | `room.perimeter.${string}.start`
  | `room.perimeter.${string}.end`
  | `cabinets.${CabinetInstanceId}.position`
  | `cabinets.${CabinetInstanceId}.width`
  | `cabinets.${CabinetInstanceId}.parameters.${string}`;

export interface ParamDelta {
  path: ParamPath;
  value: number | string | boolean;
}

export interface LayoutGoals {
  storageWeight: number;   // 0–1
  budgetWeight: number;
  opennessWeight: number;
  familyFriendlyWeight: number;
  prefersIsland: boolean;
}

Layout variant
export interface LayoutVariantIdBrand { readonly _brand: 'LayoutVariantId'; }
export type LayoutVariantId = string & LayoutVariantIdBrand;

export interface LayoutVariant {
  id: LayoutVariantId;
  label: string;                  // "Galley", "L-shaped", ...
  state: ParametricState;
  objectiveScores: {
    workTriangleScore: number;    // 0–1
    storageScore: number;
    budgetScore: number;
    ergonomicsScore: number;
  };
}

2.2 tRPC surface (Configurator BFF)
Router: configurator. This is the only surface consumed by the 3D configurator.
// apps/api/src/trpc/routers/configurator.ts
export const configuratorRouter = t.router({
  getSessionState: t.procedure
    .input(z.object({ projectId: z.string() }))
    .query(({ input }): { state: ParametricState } => { ... }),

  mutateParameters: t.procedure
    .input(z.object({
      projectId: z.string(),
      deltas: z.array(z.custom<ParamDelta>()),
    }))
    .mutation(({ input }): {
      state: ParametricState;
      constraintSummary: ConstraintSummary;
      // minimal pricing summary (no full CPQ table)
      priceDelta: {
        totalPrice: number;
        currency: CurrencyCode;
      };
    } => { ... }),

  requestLayoutVariants: t.procedure
    .input(z.object({
      projectId: z.string(),
      goals: z.custom<LayoutGoals>(),
    }))
    .mutation(({ input }): {
      variants: LayoutVariant[];
    } => { ... }),

  validateDesign: t.procedure
    .input(z.object({ projectId: z.string() }))
    .query(({ input }): ConstraintSummary => { ... }),
});

2.3 gRPC surfaces
2.3.1 Parametric Kernel Service (NestJS ↔ Rust/WASM)
// parametric_kernel.proto
syntax = "proto3";

package parametric.v1;

message ParamDelta {
  string path = 1;
  string value_json = 2; // encoded to allow union
}

message ApplyDeltaRequest {
  string project_id = 1;
  repeated ParamDelta deltas = 2;
}

message ConstraintViolation {
  string code = 1;
  string severity = 2;
  string message = 3;
  repeated string affected_cabinet_ids = 4;
  repeated string affected_geometry_ids = 5;
}

message ConstraintSummary {
  bool has_blocking_errors = 1;
  repeated ConstraintViolation violations = 2;
}

// Serialized ParametricState as canonical JSON (same schema as TS)
message ParametricStateJson {
  string json = 1;
}

message ApplyDeltaResponse {
  ParametricStateJson state = 1;
  ConstraintSummary constraints = 2;
}

message ValidateDesignRequest {
  string project_id = 1;
}

message ValidateDesignResponse {
  ConstraintSummary constraints = 1;
}

service ParametricKernelService {
  rpc ApplyDelta(ApplyDeltaRequest) returns (ApplyDeltaResponse);
  rpc ValidateDesign(ValidateDesignRequest) returns (ValidateDesignResponse);
}

2.3.2 Optimization Engine Service (FastAPI + OR‑Tools)
// optimization.proto
syntax = "proto3";

package optimization.v1;

message LayoutGoals {
  double storage_weight = 1;
  double budget_weight = 2;
  double openness_weight = 3;
  double family_friendly_weight = 4;
  bool prefers_island = 5;
}

message SuggestLayoutsRequest {
  string project_id = 1;
  LayoutGoals goals = 2;
  uint32 max_layouts = 3; // e.g. 4
}

message LayoutVariant {
  string id = 1;
  string label = 2;
  string state_json = 3; // ParametricState JSON
  double work_triangle_score = 4;
  double storage_score = 5;
  double budget_score = 6;
  double ergonomics_score = 7;
}

message SuggestLayoutsResponse {
  repeated LayoutVariant variants = 1;
}

service OptimizationService {
  rpc SuggestLayouts(SuggestLayoutsRequest) returns (SuggestLayoutsResponse);
}

2.4 Latency budgets (Epic 2)
Critical interactive path:
Browser → BFF → Parametric Kernel → CPQ → BFF → Browser with total P95 ≤ 150 ms for “drag cabinet → constraints + price update”.
Define P95 budgets:
Segment
P95 budget
Browser → BFF tRPC (network + API ingress)
20 ms
BFF internal logic (auth, session, Redis)
10 ms
BFF → ParametricKernelService.ApplyDelta gRPC
30 ms
BFF → CPQService.PriceDelta gRPC (see Epic 3)
30 ms
BFF response marshalling
10 ms
BFF → Browser (network)
20 ms

Sum: 120 ms budget on backend+network, leaving ~30 ms for render to stay <150 ms.
Formally:
[
 L_{\text{total}}^{P95} =
 L_{\text{net,req}} +
 L_{\text{BFF}} +
 L_{\text{kernel}} +
 L_{\text{CPQ}} +
 L_{\text{net,res}} \le 150\ \text{ms}
 ]
Optimization path (requestLayoutVariants) is allowed more:
P95 OptimizationService.SuggestLayouts ≤ 100 ms; call is user‑initiated (“Generate layouts”), not per‑drag, so overall ≤200–250 ms is acceptable for HCI.



Epic 3 — Catalog, CPQ, CAD/CAM, Workflow Orchestration
Scope: immutable catalog snapshots, CPQ, BOM/cut list/CNC, Temporal workflows, Kafka events.
3.1 Core data contracts
Catalog snapshots
// libs/shared-types/src/catalog.ts
export interface CatalogVersion {
  id: CatalogVersionId;
  tenantId: TenantId;
  label: string;
  createdAt: ISODateTime;
  createdBy: UserId;
  hash: string;           // cryptographic hash of payload
  payloadUri: string;     // S3 URI to snapshot JSON
}

export interface CatalogSnapshotRef {
  id: CatalogVersionId;
  hash: string;
}

Quote & CPQ
// libs/shared-types/src/cpq.ts
export interface QuoteIdBrand { readonly _brand: 'QuoteId'; }
export type QuoteId = string & QuoteIdBrand;

export type QuoteStatus = 'draft' | 'submitted' | 'approved' | 'rejected' | 'expired';

export interface QuoteLineItem {
  id: ULID;
  sku: string;
  description: string;
  quantity: number;
  unitPrice: number;
  listPrice: number;
  netPrice: number;
  currency: CurrencyCode;
  marginPercent: number;
  configurationRef: {
    projectId: ProjectId;
    cabinetInstanceId?: CabinetInstanceId;
  };
}

export interface QuoteSummary {
  id: QuoteId;
  projectId: ProjectId;
  tenantId: TenantId;
  status: QuoteStatus;
  currency: CurrencyCode;
  subtotal: number;
  tax: number;
  total: number;
  marginPercent: number;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
  catalogVersion: CatalogSnapshotRef;
  lineItems: QuoteLineItem[];
}

BOM, cut lists, CNC outputs
// libs/shared-types/src/manufacturing.ts
export interface BomItem {
  id: ULID;
  sku: string;
  description: string;
  quantity: number;
  uom: 'piece' | 'panel' | 'edge_m' | 'hardware';
}

export interface Bom {
  id: ULID;
  projectId: ProjectId;
  quoteId: QuoteId;
  items: BomItem[];
  generatedAt: ISODateTime;
  catalogVersion: CatalogSnapshotRef;
}

export interface CutListItem {
  id: ULID;
  panelSku: string;
  length: Millimeter;
  width: Millimeter;
  thickness: Millimeter;
  grainDirection: 'x' | 'y';
}

export interface CutList {
  id: ULID;
  projectId: ProjectId;
  bomId: ULID;
  items: CutListItem[];
  generatedAt: ISODateTime;
}

export interface CncProgram {
  id: ULID;
  projectId: ProjectId;
  machineId: string;
  gcodeUri: string;          // S3 URI to G-code
  nestingPreviewUri?: string; // image/3D preview
  generatedAt: ISODateTime;
}

3.2 tRPC surface (admin & CPQ UIs)
cpq router
export const cpqRouter = t.router({
  getQuoteForProject: t.procedure
    .input(z.object({ projectId: z.string() }))
    .query((): QuoteSummary | null => { ... }),

  recomputeQuote: t.procedure
    .input(z.object({ projectId: z.string() }))
    .mutation((): QuoteSummary => { ... }),

  applyDealerAdjustments: t.procedure
    .input(z.object({
      quoteId: z.string(),
      adjustments: z.array(z.object({
        lineItemId: z.string(),
        discountPercent: z.number().min(0).max(100),
      })),
    }))
    .mutation((): QuoteSummary => { ... }),
});

catalogAdmin router (LayEdit‑like)
export const catalogAdminRouter = t.router({
  listCatalogVersions: t.procedure
    .query((): CatalogVersion[] => { ... }),

  publishCatalogDraft: t.procedure
    .input(z.object({ draftId: z.string() }))
    .mutation((): CatalogVersion => { ... }),
});

3.3 gRPC surfaces
3.3.1 Catalog & Rules Service
// catalog.proto
syntax = "proto3";

package catalog.v1;

message CatalogVersion {
  string id = 1;
  string tenant_id = 2;
  string label = 3;
  string created_at = 4;
  string hash = 5;
  string payload_uri = 6;
}

message GetActiveCatalogRequest {
  string tenant_id = 1;
}

message GetActiveCatalogResponse {
  CatalogVersion version = 1;
}

service CatalogService {
  rpc GetActiveCatalog(GetActiveCatalogRequest) returns (GetActiveCatalogResponse);
}

Also publishes catalog.snapshot_published events on Kafka (not detailed here).
3.3.2 CPQ Service
// cpq.proto
syntax = "proto3";
import "parametric_state.proto"; // json blob if needed

package cpq.v1;

message PriceDeltaRequest {
  string project_id = 1;
}

message PriceDeltaResponse {
  double total_price = 1;
  string currency = 2;
}

message RecomputeQuoteRequest {
  string project_id = 1;
}

message QuoteLineItem {
  string id = 1;
  string sku = 2;
  string description = 3;
  double quantity = 4;
  double unit_price = 5;
  double list_price = 6;
  double net_price = 7;
  string currency = 8;
  double margin_percent = 9;
}

message QuoteSummary {
  string id = 1;
  string project_id = 2;
  string tenant_id = 3;
  string status = 4;
  string currency = 5;
  double subtotal = 6;
  double tax = 7;
  double total = 8;
  double margin_percent = 9;
  string catalog_version_id = 10;
  repeated QuoteLineItem line_items = 11;
}

service CpqService {
  rpc PriceDelta(PriceDeltaRequest) returns (PriceDeltaResponse);
  rpc RecomputeQuote(RecomputeQuoteRequest) returns (QuoteSummary);
}

3.3.3 CAD/CAM & DFM Service + Workflow Orchestration
cad_cam.proto:
syntax = "proto3";

package cadcam.v1;

message GenerateArtifactsRequest {
  string project_id = 1;
  string quote_id = 2;
}

message GenerateArtifactsResponse {
  string bom_id = 1;
  string cut_list_id = 2;
  string cnc_program_id = 3;
}

service CadCamService {
  rpc GenerateArtifacts(GenerateArtifactsRequest) returns (GenerateArtifactsResponse);
}

workflow.proto (Temporal worker’s gRPC front is internal; conceptually):
syntax = "proto3";

package workflow.v1;

message StartOrderWorkflowRequest {
  string project_id = 1;
  string quote_id = 2;
}

message StartOrderWorkflowResponse {
  string workflow_id = 1;
}

service WorkflowService {
  rpc StartOrderWorkflow(StartOrderWorkflowRequest) returns (StartOrderWorkflowResponse);
}

Temporal workers then call CpqService.RecomputeQuote and CadCamService.GenerateArtifacts as activities, and record status transitions.
3.4 Latency budgets (Epic 3)
Split into interactive CPQ vs background manufacturing.
Interactive CPQ
These sit close to the configurator; parts already assigned budget in Epic 2.
Call
P95 budget
Notes
CpqService.PriceDelta
30 ms
part of critical path
cpq.getQuoteForProject (tRPC)
80 ms
full quote grid, non‑per‑drag

Constraints:
PriceDelta must fit inside the 30 ms slice already allocated in Epic 2.


getQuoteForProject used when opening CPQ view; 80 ms P95 is fine for screen change.


Manufacturing / CAD/CAM
These are async via Temporal; budgets are in seconds, not ms.
Activity
P95 budget
CadCamService.GenerateArtifacts
≤ 30 s
Full ManufacturingJobWorkflow
≤ 180 s
Visibility of preliminary status badge
≤ 2 s

UI constraint: the front‑end always sees immediate acknowledgement from StartOrderWorkflow (< 200 ms end‑to‑end), while the heavy work completes in the background.

Epic 4 — Semantic–Deterministic Bridge (AI / Agentic Layer)
Scope: AI copilot, NL→param spec, tool‑calling into kernel/CAD/CPQ, guarantees that AI never becomes source of truth.
4.1 Data contracts
// libs/shared-types/src/ai.ts

export type CopilotRole = 'user' | 'assistant' | 'system' | 'tool';

export interface CopilotMessage {
  id: ULID;
  role: CopilotRole;
  content: string;
  createdAt: ISODateTime;
}

export interface ToolCall {
  id: ULID;
  toolName: string;
  argumentsJson: string;
}

export interface CopilotTurn {
  messages: CopilotMessage[];
  toolCalls?: ToolCall[];
}

export interface IntentParameters {
  projectId: ProjectId;
  // structured goal; e.g. "make more family-friendly"
  goals?: LayoutGoals;
  proposedDeltas?: ParamDelta[];
}

4.2 tRPC surface (copilot UI)
Router: copilot. UI streams tokens via SSE/WebSocket using Vercel AI SDK patterns.
export const copilotRouter = t.router({
  startSession: t.procedure
    .input(z.object({ projectId: z.string() }))
    .mutation((): { sessionId: ULID } => { ... }),

  streamCompletion: t.procedure
    .input(z.object({
      sessionId: z.string(),
      messages: z.array(z.custom<CopilotMessage>()),
    }))
    // Returns a stream (SSE) in implementation; here represented as a token source
    .subscription(() => /* AsyncIterable<{ token: string; toolCall?: ToolCall }> */ {}),

  applySuggestion: t.procedure
    .input(z.object({
      projectId: z.string(),
      deltas: z.array(z.custom<ParamDelta>()),
    }))
    .mutation(() => {
      // delegates to configurator.mutateParameters
      state: ParametricState;
      constraintSummary: ConstraintSummary;
    }),
});

4.3 gRPC / tool interfaces (AI Service ↔ deterministic engines)
The AI / Agent Orchestration Service doesn’t get special RPCs; it calls existing ones as tools:
Tool paramEngine.applyDelta → ParametricKernelService.ApplyDelta


Tool optimizer.solveLayout → OptimizationService.SuggestLayouts


Tool cpq.recomputeQuote → CpqService.RecomputeQuote


Tool cadcam.generateArtifacts → CadCamService.GenerateArtifacts


So you may define a minimal gRPC for AI service itself for observability:
// ai.proto
syntax = "proto3";

package ai.v1;

message CopilotEvent {
  string session_id = 1;
  string project_id = 2;
  string message_json = 3;
}

message Empty {}

service CopilotService {
  rpc LogEvent(CopilotEvent) returns (Empty);
}

(Actual LLM serving happens behind this boundary, likely HTTP internally.)
4.4 Latency budgets (Epic 4)
Two distinct UX modes: live editing hints and design suggestions.
Interaction type
Path
P95 budget
Live hint (small local LLM/WebLLM)
Browser only
< 200 ms
Cloud copilot first token
Browser → AI svc → LLM → stream
< 500 ms
Full copilot suggestion
Same as above
< 3 s
Applying suggestion to scene
Copilot → configurator.mutateParameters
uses Epic 2 budgets (≤150 ms)

Formally, for apply‑suggestion:
[
 L_{\text{applySuggestion}}^{P95} = L_{\text{AI-reason}}^{P95} + L_{\text{mutateParams}}^{P95}
 ]
You explicitly decouple:
L_{AI-reason} up to 3 s (non‑blocking; streaming),


L_{mutateParams} constrained by Epic 2 (≤150 ms), preserving deterministic UX invariants.



Epic 5 — Frontend Synthesis & UX Coherence
Scope: Studio‑Admin‑style shell, embedding Babylon configurator, shared design system, performance enforcement.
5.1 Design system / UI types
// libs/shared-types/src/ui.ts
export type ConstraintSeverityToken = 'ok' | 'warning' | 'error';

export interface ConstraintBadgePayload {
  severity: ConstraintSeverityToken;
  count: number;
  primaryMessage: string;
}

export interface CpqSummaryBarState {
  total: number;
  tax: number;
  marginPercent: number;
  currency: CurrencyCode;
  hasBlockingErrors: boolean;
}

These wire directly into the shadcn/ui primitives and the sticky CPQ bar.
5.2 tRPC surface (UI composition)
Mostly read‑optimized:
export const uiRouter = t.router({
  getConstraintBadge: t.procedure
    .input(z.object({ projectId: z.string() }))
    .query((): ConstraintBadgePayload => { ... }),

  getCpqSummaryBar: t.procedure
    .input(z.object({ projectId: z.string() }))
    .query((): CpqSummaryBarState => { ... }),
});

Implementation is a thin wrapper over:
configurator.validateDesign + transform → ConstraintBadgePayload,


cpq.getQuoteForProject + transform → CpqSummaryBarState.


5.3 Latency budgets (Epic 5)
These calls are part of the same critical path as Epic 2; budget them accordingly:
Call
P95 budget
Notes
ui.getConstraintBadge
40 ms
reuses ValidateDesign or cached summary
ui.getCpqSummaryBar
60 ms
reuses getQuoteForProject (cached)

The UX requirement is:
Drag cabinet → badge + CPQ bar update visibly in sync with 3D update.


So you either:


compute them as part of mutateParameters and cache,


or ensure combined call set still obeys L_total^{P95} ≤ 150 ms.



How to hand this to the team
Concretely, you can:
Create libs/shared-types with the TS interfaces exactly as above (modulo your preferred naming).


Generate proto files (identity.proto, parametric_kernel.proto, optimization.proto, cpq.proto, cad_cam.proto, workflow.proto, ai.proto) matching the shapes here.


Bind tRPC routers (auth, tenancy, configurator, cpq, catalogAdmin, copilot, ui) in apps/api.


In your performance test suite / CI, enforce the per‑endpoint P95 latency budgets here as explicit assertions (e.g. k6 / Artillery scripts run on each build), using the inequality constraints above as acceptance criteria.



---


1. Core SaaS / Multi‑tenant / Monorepo Shell
These are the structural backbone repos.
Multi‑tenant platform + SaaS shell
Vercel Platforms Starter Kit
 https://github.com/vercel/platforms (GitHub)
 Full‑stack Next.js multi‑tenant starter with domains, auth, orgs, and Postgres. Use as the outer shell for tenants (manufacturers, dealers, internal admin).


Studio Admin (Next.js + shadcn UI admin)
 https://github.com/arhamkhnz/next-shadcn-admin-dashboard (GitHub)
 Modern, minimal admin dashboard (Next.js 16, Tailwind v4, shadcn/ui). This becomes the CPQ back‑office UI (catalog, rules, orders, CNC jobs).


Open SaaS (SaaS starter, optional but useful)
 https://github.com/wasp-lang/open-saas (GitHub)
 Feature‑complete SaaS boilerplate (auth, billing, teams). Good reference for cross‑cutting SaaS concerns and Stripe/billing patterns.


Nx monorepo for Nest + React
 https://github.com/phmz/nx-nest-react-monorepo-template (GitHub)
 Nx template with Nest API + React client + shared types library. Use this as the workspace skeleton for your engines/services (CPQ rules, CAD, CNC, optimization).


Boilerplate index (reference, not a base)
 https://github.com/EinGuterWaran/awesome-opensource-boilerplates (GitHub)
 Curated list of SaaS boilerplates. Keep starred for inspiration; you don’t need to clone it into the main monorepo.


(You don’t really “clone” t3-oss/create-t3-app since it’s a CLI, but it’s still worth having installed once as a pattern reference.) (GitHub)

2. 3D Kitchen Configurator & Babylon Layer
These drive the real‑time generative parametric kitchen UI.
Core engine + React binding
Babylon.js core engine
 https://github.com/BabylonJS/Babylon.js (GitHub)
 Real‑time WebGL/WebGPU 3D engine (Apache‑2.0). Install via npm; clone the repo only if you plan to patch engine internals.


React‑Babylon bridge
 https://github.com/brianzinn/react-babylonjs (GitHub)
 Declarative React bindings for Babylon.js. This is the basis for your <KitchenScene />, param panels, and 3D layout components.


High‑performance Babylon starter
Babylon.js 8 + Vite + TS + Havok template
 https://github.com/eldinor/bp800 (Babylon.js)
 Babylon 8 + Vite 6 + TypeScript + Havok Physics, WebGPU by default. Use as the baseline for the 3D room/kitchen editor and performance‑tuned build config.


Extra reference starters (clone as “patterns”)
https://github.com/sevaseva/babylonjs-nextjs – example of Babylon + Next.js integration. (GitHub)


https://github.com/brianzinn/create-react-app-babylonjs – CRA starter showing React state + Babylon scenes. (GitHub)


(These are great for API usage and project layout, but bp800 + react‑babylonjs will likely be your main engine.)

3. Parametric Geometry / CAD‑to‑CNC Kernel
These repos underpin “CAD without CAD” and production outputs.
OpenCascade.js (CAD kernel compiled to JS)
 https://github.com/donalffons/opencascade.js (GitHub)
 WebAssembly build of OpenCascade: B‑rep, booleans, fillets, 2D/3D geometry operations.


OpenCascade.js examples
 https://github.com/donalffons/opencascade.js-examples (GitHub)
 Good for wiring up STEP/IGES import/export, geometry debugging, and viewer patterns.


Rust → WASM template for parametric engine
 https://github.com/rustwasm/wasm-pack-template (GitHub)
 Use as the base to build a Rust parametric solver compiled to WASM, exposing typed FFI for layout constraints, collision detection, simple nesting, etc.



4. CPQ / Rule‑based Configurator & Optimization
Optimization engine
OR‑Tools CP‑SAT primer
 https://github.com/d-krupke/cpsat-primer (D Krupke)
 Reference repo for Google OR‑Tools CP‑SAT models. Use for inspiration when building cut‑list optimization and panel nesting solvers.


Web CPQ configuration toolkit
openCPQ (React product‑configuration toolkit)
 https://github.com/webXcerpt/openCPQ (GitHub)
 In‑browser CPQ library with React components and rule engine; useful as a conceptual template for your catalog/rule modelling, even if you don’t adopt it 1:1.


openCPQ examples (optional reference clones)


https://github.com/webXcerpt/openCPQ-example-components (GitHub)


https://github.com/webXcerpt/openCPQ-example-optical-transport (GitHub)


Modern OSS CPQ / quoting app
SwiftCPQ (CPQ and proposal generator)
 https://github.com/christopher-talke/SwiftCPQ (AGPL‑3) (GitHub)
 Vue‑based CPQ/proposal tool; good for UX and data‑model inspiration. Because it’s AGPL‑3, treat it as reference only unless you’re comfortable with copyleft obligations.



5. AI / Agentic & Microservices Back‑end
These are the “brains” and glue for agentic workflows and microservices.
Agentic services (LangGraph, LLM orchestration)
FastAPI + LangGraph production agent template
 https://github.com/wassim249/fastapi-langgraph-agent-production-ready-template (GitHub)
 This is your frontier baseline for AI agents: FastAPI, LangGraph, Langfuse, pgvector, auth, observability, Docker, Prometheus/Grafana, etc. Ideal for:


CPQ reasoning agents (pricing, constraint explanation)


CNC validation / G‑code review agents


Workflow orchestrators between CPQ → CAD → CNC.


FastAPI microservice template (non‑agent services)
 https://github.com/onlythompson/fastapi-microservice-template (GitHub)
 Good base for non‑LLM microservices (BOM generator, CAM exporter, IoT endpoints).


FastAPI LLM microservice template (optional)
 https://github.com/onlythompson/llm-powered-microservice-template (GitHub)
 Alternative to the LangGraph template for simpler text‑in/text‑out LLM services.


NestJS event‑driven backend
Nx Nest + React monorepo template
 https://github.com/phmz/nx-nest-react-monorepo-template (already listed above, but you will actually use it here) (GitHub)


ACK NestJS Kafka boilerplate
 https://github.com/andrechristikan/ack-nestjs-boilerplate-kafka (GitHub)
 Hybrid NestJS HTTP + Kafka microservice boilerplate with MongoDB & repository pattern. Use it as the pattern for:


Order service


Production scheduling service


CNC job dispatcher.


Simple NestJS + Kafka microservice demo (reference)
 https://github.com/toledompm/nestjs-kafka-microservice (GitHub)


Workflow orchestration
Temporal TypeScript samples
 https://github.com/temporalio/samples-typescript (GitHub)
 Use as template for your CPQ → CAD → CNC durable workflows (quote creation, approval, job scheduling, re‑runs).


Microservice architecture references (read‑only)
Google Cloud microservices demo
 https://github.com/GoogleCloudPlatform/microservices-demo (GitHub)


Sock Shop microservices demo
 https://github.com/microservices-demo/microservices-demo (GitHub)


These give patterns for cross‑service communication, observability, and deployment. You don’t copy them directly; you reference the architecture.

6. Where the CPQ UI / Design System Comes From
Your “The UI” for CPQ/admin is essentially:
Studio Admin: next-shadcn-admin-dashboard – for dashboards, auth, layouts, theming. (GitHub)


Vercel Platforms: vercel/platforms – for multi‑tenant domain routing, org/tenant concept, and integration with Vercel AI SDK if desired. (GitHub)


React‑Babylon + bp800 – for the 3D configurator surface.


Those three are the UI and experience spine you’ll fuse in your integration plan.

7. Should You Fork/Clone These Before Kicking Off with GPT‑5.1‑Codex‑Max?
Short answer: yes, with some structure.
Step 1 – Fork into your own GitHub org
For every repo marked above (1–26):
Fork into your org (e.g. your-org/platforms, your-org/next-shadcn-admin-dashboard, etc.).


This:


Locks in versions and shields you from upstream breaking changes.


Lets GPT‑5.1‑Codex‑Max and your team open PRs against your forks.


Keeps licensing and IP clean (esp. AGPL ones like SwiftCPQ, which you should treat as reference‑only unless you intentionally adopt AGPL). (Talke)


Step 2 – Create a single “super‑monorepo” for integration
I’d create a new repo, e.g.:
your-org/kitchen-cpq-platform


Inside it, you can:
Use Nx (phmz template) as the base workspace.


Bring each relevant fork in as:


Either a git submodule (for large, mostly‑intact templates like platforms, next-shadcn-admin-dashboard, fastapi-langgraph-agent-production-ready-template), or


Copied/adapted code into Nx libs/apps (for bp800, OpenCascade examples, etc.).


From GPT‑5.1‑Codex‑Max’s point of view, it’s vastly easier to reason about and refactor a single monorepo checkout than 10–20 separate repos.
Step 3 – Actually clone to a working environment
Whether that’s your local machine, GitHub Codespaces, or another cloud dev environment, you do want:
The kitchen-cpq-platform monorepo cloned and bootstrapped (dependencies installed, basic Nx/Vite/Next dev servers runnable). (Wikipedia)


The key forks added as submodules or vendored in.


That way, when you hand control to GPT‑5.1‑Codex‑Max (or any other expert engineer/agent), they can:
See all the moving pieces in one workspace.


Implement the integration plan (engines, UI, workflows) without spending cycles on repo discovery and project bootstrapping.


Which ones are optional to clone?
If you want to minimize initial clutter:
Must‑clone / integrate early:


vercel/platforms


arhamkhnz/next-shadcn-admin-dashboard


phmz/nx-nest-react-monorepo-template


BabylonJS/Babylon.js (via npm, repo optional)


brianzinn/react-babylonjs


eldinor/bp800


donalffons/opencascade.js (+ examples)


rustwasm/wasm-pack-template


wassim249/fastapi-langgraph-agent-production-ready-template


onlythompson/fastapi-microservice-template


andrechristikan/ack-nestjs-boilerplate-kafka


temporalio/samples-typescript


Nice to clone as reference only:


openCPQ + examples


SwiftCPQ


GoogleCloudPlatform/microservices-demo, microservices-demo/microservices-demo


brianzinn/create-react-app-babylonjs, sevaseva/babylonjs-nextjs


wasp-lang/open-saas


EinGuterWaran/awesome-opensource-boilerplates

---


1. Monorepo root
kitchen-cpq-platform/
  apps/
  services/
  libs/
  packages/
  infra/
  tools/
  .github/
  nx.json
  package.json
  pnpm-workspace.yaml
  tsconfig.base.json
  turbo.json              # if you layer Turborepo over Nx for build orchestration
  README.md

Nx root is based on phmz/nx-nest-react-monorepo-template (apps/libs layout).


Workspace uses pnpm workspaces, TypeScript path aliases from tsconfig.base.json.



2. apps/ – user‑facing web apps (Next.js + BFF)
kitchen-cpq-platform/
  apps/
    frontend/                  # Next.js 16 + React 19 multi-tenant CPQ portal
      app/                     # App Router routes
        (public)/
        (consumer)/
        (dealer)/
        (admin)/
        cpq/
          dashboard/
          quotes/
          catalog/
          configure/
            [projectId]/
      src/
        components/
        hooks/
        lib/
        middleware/
      public/
      next.config.mjs
      tailwind.config.ts
      postcss.config.mjs
      package.json

    api/                       # NestJS API gateway / tRPC BFF (Nx "api" app)
      src/
        main.ts
        app.module.ts
        modules/
          trpc/
          auth/
          tenants/
          cpq-gateway/
          configurator-gateway/
        infra/
          grpc-clients/
          kafka/
          http/
      package.json

Origins / intent
apps/frontend = Studio Admin dashboard template fused with vercel/platforms multi‑tenant routing.


All CPQ screens, catalog tools, manufacturing dashboards, etc., are route groups inside this single app (/cpq, /catalog, /manufacturing, /admin).


apps/api = NestJS BFF/gateway; tRPC patterns ported from create-t3-app for type‑safe frontend↔backend RPC.



3. services/ – domain microservices (NestJS, FastAPI, Temporal, Rust)
Each folder is its own deployable service (Docker image), but still managed by Nx where TypeScript. Names match the domain decomposition already defined.
kitchen-cpq-platform/
  services/
    identity-tenancy-service/          # NestJS, auth + tenants, RBAC
      src/
        main.ts
        app.module.ts
        users/
        tenants/
        roles/
      package.json

    catalog-rules-service/             # NestJS, Catalog & Rules (LayEdit backend)
      src/
        main.ts
        app.module.ts
        catalog/
        rules/
        pricing/
        snapshots/                     # emits catalog version artifacts
        infra/
          postgres/
          kafka/
      package.json

    param-kernel-service/              # NestJS + Rust FFI (Parametric Kernel & Layout)
      src/
        main.ts
        app.module.ts
        kernel/
        constraints/
        layout/
        adapters/
          wasm-geometry-kernel/        # bindings into packages/geometry-kernel
      Cargo.toml                       # for embedded Rust lib (if co-located)
      package.json

    configurator-session-service/      # NestJS BFF for 3D app (CFG-BFF)
      src/
        main.ts
        app.module.ts
        sessions/
        mutations/
        validation/
        cache/                         # Redis session cache
        adapters/
          kernel-client/
          cpq-client/
          optimizer-client/
      package.json

    cpq-pricing-service/               # NestJS, Pricing & CPQ
      src/
        main.ts
        app.module.ts
        pricing/
        discounts/
        approvals/
        quotes/
        infra/
          postgres/
          kafka/
      package.json

    orders-payments-service/           # NestJS, Orders & payments (or MedusaJS integration)
      src/
        main.ts
        app.module.ts
        orders/
        payments/
        fulfillment/
        adapters/
          commerce-engine/             # MedusaJS / other
      package.json

    cad-cam-dfm-service/               # Rust / Nest hybrid, CAD/CAM & DFM
      nest/
        src/
          main.ts
          app.module.ts
          jobs/
          adapters/
            occt-worker/
            cnc-worker/
        package.json
      rust/
        src/
          lib.rs
          cad/
          cam/
          dfm/
        Cargo.toml

    manufacturing-scheduling-service/  # NestJS, Manufacturing, scheduling, MES/ERP bridge
      src/
        main.ts
        app.module.ts
        work-orders/
        machines/
        schedules/
        telemetry/
      package.json

    optimization-engine-service/       # FastAPI + OR-Tools (Layout Optimizer)
      app/
        main.py
        routers/
          layouts.py
        core/
          solver.py
          models.py
        infra/
          redis_cache.py
      pyproject.toml

    workflow-orchestration-service/    # Temporal TypeScript workers
      src/
        workflows/
          KitchenOrderWorkflow.ts
          ManufacturingJobWorkflow.ts
        activities/
          cpqActivities.ts
          cadCamActivities.ts
          manufacturingActivities.ts
        workers/
          index.ts
      package.json

    ai-orchestration-service/          # LangGraph / LangChain agentic service
      src/
        main.ts
        app.module.ts
        agents/
          geometry-agent/
          catalog-agent/
          manufacturing-analyst-agent/
        tools/
      package.json

    integrations/
      crm-service/                     # NestJS; Salesforce/HubSpot connectors
        src/
          main.ts
          app.module.ts
          salesforce/
          hubspot/
        package.json

      erp-service/                     # NestJS; SAP/NetSuite/etc.
        src/
          main.ts
          app.module.ts
          sap/
          netsuite/
        package.json

      ecommerce-service/               # NestJS; Shopify/Magento/Medusa adapters
        src/
          main.ts
          app.module.ts
          shopify/
          magento/
          medusa/
        package.json

    notifications-docs-service/        # NestJS or Node, PDFs & email
      src/
        main.ts
        app.module.ts
        documents/                     # quote PDFs, drawings packaging
        email/
        sms/
      package.json

    analytics-telemetry-service/       # ClickHouse/Timescale metrics aggregation
      src/
        main.ts
        app.module.ts
        ingestion/
        queries/
      package.json

NestJS services take their base structure (config, logging, Kafka modules) from ack-nestjs-boilerplate-kafka.


optimization-engine-service is instantiated from fastapi-microservice-template + OR‑Tools CP‑SAT patterns.


workflow-orchestration-service follows temporalio/samples-typescript.



4. libs/ – shared TypeScript domain + infra libraries (Nx libs)
These are Nx libraries imported by apps & services via TS path aliases (@kitchen-cpq/...). They enforce canonical types, events, and infra patterns.
kitchen-cpq-platform/
  libs/
    shared-types/                 # canonical types & schemas
      src/
        catalog.ts                # Product, Variant, Option, Rule
        configuration.ts          # Parametric state, constraints
        pricing.ts                # Price, Discount, Margin
        bom.ts                    # BOM, CutList, Routing
        cnc.ts                    # CNCJob, Toolpath, Machine
        workflow.ts               # Workflow IDs, states
        user.ts                   # User, Tenant, Role
        index.ts

    shared-events/                # Kafka topic contracts (typed payloads)
      src/
        topics.ts                 # topic names, enums
        events/
          configuration.updated.ts
          quote.created.ts
          order.confirmed.ts
          bom.generated.ts
          cnc.job.created.ts
        index.ts

    shared-config/                # env & config loader
      src/
        env.ts
        config.ts                 # per-service config helpers
        index.ts

    shared-auth/                  # JWT/OIDC helpers, RBAC guards
      src/
        tokens.ts
        guards.ts
        permissions.ts
        index.ts

    shared-validation/            # Zod schemas mirroring domain types
      src/
        catalog.schema.ts
        configuration.schema.ts
        pricing.schema.ts
        index.ts

    shared-trpc/                  # tRPC router definitions for CFG-BFF + frontend
      src/
        routers/
          configurator.ts
          cpq.ts
          projects.ts
        client/
          createClient.ts
        index.ts

    shared-kafka/                 # Kafka client & NestJS modules
      src/
        kafka.module.ts
        kafka.config.ts
        producers/
        consumers/
        index.ts

    domain-catalog/               # catalog & rules domain logic (pure TS)
      src/
        services/
          CatalogSnapshotBuilder.ts
          RuleEvaluator.ts
        index.ts

    domain-configuration/         # parametric configuration domain logic
      src/
        services/
          ConfigurationMerger.ts
          ConstraintChecker.ts
        index.ts

    domain-cpq/                   # pricing & quoting pure logic
      src/
        services/
          PriceCalculator.ts
          DiscountPolicy.ts
          MarginCalculator.ts
        index.ts

    domain-manufacturing/         # mapping config -> BOM / CNC contracts
      src/
        services/
          ManufacturingReadinessChecker.ts
          RoutingPlanner.ts
        index.ts

    instrumentation-otel/         # OpenTelemetry setup for all TS services
      src/
        tracing.ts
        metrics.ts
        logging.ts
        index.ts


5. packages/ – 3D engine, WASM geometry, UI kit, SDK, proto defs
These are language‑specific or cross‑stack packages not tied to Nx’s apps/libs semantics.
kitchen-cpq-platform/
  packages/
    ui-kit/                          # shadcn-based design system
      src/
        components/
          layout/
          navigation/
          data-table/
          form/
          cpq/
            QuoteTable.tsx
            MarginBadge.tsx
            ConstraintBadge.tsx
          manufacturing/
            BomTable.tsx
            CncJobCard.tsx
        theme/
          tokens.ts                  # Tailwind/shadcn tokens
        index.ts
      package.json

    3d-engine/                       # Babylon 8 WebGPU engine (from bp800)
      src/
        engine/
          createKitchenScene.ts
          updateConfiguration.ts
          selection.ts
        scenes/
          kitchenScene.ts
        workers/
          manifoldWorker.ts          # if using manifold-3d
        index.ts
      vite.config.mts
      package.json

    configurator-sdk/                # Embeddable <kitchen-configurator> web component
      src/
        index.ts                     # exports KitchenKit.init(...)
        web-component.ts
        host-api.ts
      package.json
      rollup.config.mjs

    geometry-kernel/                 # Rust → WASM parametric kernel (OCCT)
      src/
        lib.rs                       # Rust API boundary
        kernel/
        constraints/
      Cargo.toml
      pkg/                           # wasm-pack output (NPM package)
        package.json
        geometry_kernel_bg.wasm
        geometry_kernel.js

    proto-defs/                      # gRPC proto specs & generated stubs
      protos/
        configuration.proto
        kernel.proto
        cadcam.proto
        optimizer.proto
      gen/
        ts/
        py/
        rs/
      package.json

    python-libs/
      layout-optimizer-lib/          # shared between FastAPI service & notebooks
        src/
          layout_optimizer/
            model.py
            constraints.py
            solver.py
        pyproject.toml

Origins
ui-kit = shared design system from Studio Admin (shadcn/ui, TanStack Table, RHF, Zod), exported as a package so both apps/frontend and any future tools reuse identical components.


3d-engine = Babylon 8 + WebGPU from eldinor/bp800, extracted as a clean TS package; pattern inspired by turborepo-nextjs-babylonjs.


geometry-kernel = Rust/WASM kernel using wasm-pack-template + opencascade.js examples.


configurator-sdk = SDK (kitchen-kit.js) for third‑party sites to embed the configurator.



6. infra/ & tools/ – deployment, pipelines, Nx plugins
kitchen-cpq-platform/
  infra/
    k8s/
      base/
        namespace.yaml
        kafka/
        temporal/
        postgres/
      services/
        identity-tenancy/
        catalog-rules/
        param-kernel/
        configurator-session/
        cpq-pricing/
        cad-cam-dfm/
        optimization-engine/
        workflow-orchestration/
      ingress/
        gateway-ingress.yaml
    terraform/
      main.tf
      modules/
        network/
        cluster/
        databases/
    observability/
      prometheus/
      grafana/
      loki/
      dashboards/

  tools/
    scripts/
      dev-seed.sh
      generate-protos.ts
      check-latency-budgets.ts
    nx-plugins/
      project-generators/
      executors/

infra/k8s can follow patterns from the CNCF microservices demo (K8s + Istio + CI/CD layout) adapted to this service set.



How Codex‑Max should treat this
Each leaf under apps/, services/, libs/, packages/ is a project with its own project.json (Nx) or framework config (Next, Nest, FastAPI, Rust).


Frontend work is constrained to:


apps/frontend + packages/ui-kit + packages/3d-engine + packages/configurator-sdk.


Parametric + manufacturing compute is constrained to:


services/param-kernel-service, services/optimization-engine-service, services/cad-cam-dfm-service, packages/geometry-kernel, packages/proto-defs.


Integration boundaries are visible structurally:


BFF path = apps/frontend → apps/api → services/configurator-session-service → domain services, with types coming from libs/shared-types & libs/shared-trpc.

---







-