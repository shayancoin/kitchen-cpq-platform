## **1\. Monorepo root**

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
  turbo.json              \# if you layer Turborepo over Nx for build orchestration  
  README.md

* **Nx root** is based on `phmz/nx-nest-react-monorepo-template` (apps/libs layout).

* Workspace uses **pnpm** workspaces, TypeScript path aliases from `tsconfig.base.json`.

---

## **2\. `apps/` – user‑facing web apps (Next.js \+ BFF)**

kitchen-cpq-platform/  
  apps/  
    frontend/                  \# Next.js 16 \+ React 19 multi-tenant CPQ portal  
      app/                     \# App Router routes  
        (public)/  
        (consumer)/  
        (dealer)/  
        (admin)/  
        cpq/  
          dashboard/  
          quotes/  
          catalog/  
          configure/  
            \[projectId\]/  
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

    api/                       \# NestJS API gateway / tRPC BFF (Nx "api" app)  
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

**Origins / intent**

* `apps/frontend` \= **Studio Admin** dashboard template fused with **vercel/platforms** multi‑tenant routing.

  * All CPQ screens, catalog tools, manufacturing dashboards, etc., are **route groups** inside this single app (`/cpq`, `/catalog`, `/manufacturing`, `/admin`).

* `apps/api` \= NestJS BFF/gateway; tRPC patterns ported from `create-t3-app` for type‑safe frontend↔backend RPC.

---

## **3\. `services/` – domain microservices (NestJS, FastAPI, Temporal, Rust)**

Each folder is its own deployable service (Docker image), but still managed by Nx where TypeScript. Names match the domain decomposition already defined.

kitchen-cpq-platform/  
  services/  
    identity-tenancy-service/          \# NestJS, auth \+ tenants, RBAC  
      src/  
        main.ts  
        app.module.ts  
        users/  
        tenants/  
        roles/  
      package.json

    catalog-rules-service/             \# NestJS, Catalog & Rules (LayEdit backend)  
      src/  
        main.ts  
        app.module.ts  
        catalog/  
        rules/  
        pricing/  
        snapshots/                     \# emits catalog version artifacts  
        infra/  
          postgres/  
          kafka/  
      package.json

    param-kernel-service/              \# NestJS \+ Rust FFI (Parametric Kernel & Layout)  
      src/  
        main.ts  
        app.module.ts  
        kernel/  
        constraints/  
        layout/  
        adapters/  
          wasm-geometry-kernel/        \# bindings into packages/geometry-kernel  
      Cargo.toml                       \# for embedded Rust lib (if co-located)  
      package.json

    configurator-session-service/      \# NestJS BFF for 3D app (CFG-BFF)  
      src/  
        main.ts  
        app.module.ts  
        sessions/  
        mutations/  
        validation/  
        cache/                         \# Redis session cache  
        adapters/  
          kernel-client/  
          cpq-client/  
          optimizer-client/  
      package.json

    cpq-pricing-service/               \# NestJS, Pricing & CPQ  
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

    orders-payments-service/           \# NestJS, Orders & payments (or MedusaJS integration)  
      src/  
        main.ts  
        app.module.ts  
        orders/  
        payments/  
        fulfillment/  
        adapters/  
          commerce-engine/             \# MedusaJS / other  
      package.json

    cad-cam-dfm-service/               \# Rust / Nest hybrid, CAD/CAM & DFM  
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

    manufacturing-scheduling-service/  \# NestJS, Manufacturing, scheduling, MES/ERP bridge  
      src/  
        main.ts  
        app.module.ts  
        work-orders/  
        machines/  
        schedules/  
        telemetry/  
      package.json

    optimization-engine-service/       \# FastAPI \+ OR-Tools (Layout Optimizer)  
      app/  
        main.py  
        routers/  
          layouts.py  
        core/  
          solver.py  
          models.py  
        infra/  
          redis\_cache.py  
      pyproject.toml

    workflow-orchestration-service/    \# Temporal TypeScript workers  
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

    ai-orchestration-service/          \# LangGraph / LangChain agentic service  
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
      crm-service/                     \# NestJS; Salesforce/HubSpot connectors  
        src/  
          main.ts  
          app.module.ts  
          salesforce/  
          hubspot/  
        package.json

      erp-service/                     \# NestJS; SAP/NetSuite/etc.  
        src/  
          main.ts  
          app.module.ts  
          sap/  
          netsuite/  
        package.json

      ecommerce-service/               \# NestJS; Shopify/Magento/Medusa adapters  
        src/  
          main.ts  
          app.module.ts  
          shopify/  
          magento/  
          medusa/  
        package.json

    notifications-docs-service/        \# NestJS or Node, PDFs & email  
      src/  
        main.ts  
        app.module.ts  
        documents/                     \# quote PDFs, drawings packaging  
        email/  
        sms/  
      package.json

    analytics-telemetry-service/       \# ClickHouse/Timescale metrics aggregation  
      src/  
        main.ts  
        app.module.ts  
        ingestion/  
        queries/  
      package.json

* NestJS services take their base structure (config, logging, Kafka modules) from `ack-nestjs-boilerplate-kafka`.

* `optimization-engine-service` is instantiated from `fastapi-microservice-template` \+ OR‑Tools CP‑SAT patterns.

* `workflow-orchestration-service` follows `temporalio/samples-typescript`.

---

## **4\. `libs/` – shared TypeScript domain \+ infra libraries (Nx libs)**

These are **Nx libraries** imported by apps & services via TS path aliases (`@kitchen-cpq/...`). They enforce canonical types, events, and infra patterns.

kitchen-cpq-platform/  
  libs/  
    shared-types/                 \# canonical types & schemas  
      src/  
        catalog.ts                \# Product, Variant, Option, Rule  
        configuration.ts          \# Parametric state, constraints  
        pricing.ts                \# Price, Discount, Margin  
        bom.ts                    \# BOM, CutList, Routing  
        cnc.ts                    \# CNCJob, Toolpath, Machine  
        workflow.ts               \# Workflow IDs, states  
        user.ts                   \# User, Tenant, Role  
        index.ts

    shared-events/                \# Kafka topic contracts (typed payloads)  
      src/  
        topics.ts                 \# topic names, enums  
        events/  
          configuration.updated.ts  
          quote.created.ts  
          order.confirmed.ts  
          bom.generated.ts  
          cnc.job.created.ts  
        index.ts

    shared-config/                \# env & config loader  
      src/  
        env.ts  
        config.ts                 \# per-service config helpers  
        index.ts

    shared-auth/                  \# JWT/OIDC helpers, RBAC guards  
      src/  
        tokens.ts  
        guards.ts  
        permissions.ts  
        index.ts

    shared-validation/            \# Zod schemas mirroring domain types  
      src/  
        catalog.schema.ts  
        configuration.schema.ts  
        pricing.schema.ts  
        index.ts

    shared-trpc/                  \# tRPC router definitions for CFG-BFF \+ frontend  
      src/  
        routers/  
          configurator.ts  
          cpq.ts  
          projects.ts  
        client/  
          createClient.ts  
        index.ts

    shared-kafka/                 \# Kafka client & NestJS modules  
      src/  
        kafka.module.ts  
        kafka.config.ts  
        producers/  
        consumers/  
        index.ts

    domain-catalog/               \# catalog & rules domain logic (pure TS)  
      src/  
        services/  
          CatalogSnapshotBuilder.ts  
          RuleEvaluator.ts  
        index.ts

    domain-configuration/         \# parametric configuration domain logic  
      src/  
        services/  
          ConfigurationMerger.ts  
          ConstraintChecker.ts  
        index.ts

    domain-cpq/                   \# pricing & quoting pure logic  
      src/  
        services/  
          PriceCalculator.ts  
          DiscountPolicy.ts  
          MarginCalculator.ts  
        index.ts

    domain-manufacturing/         \# mapping config \-\> BOM / CNC contracts  
      src/  
        services/  
          ManufacturingReadinessChecker.ts  
          RoutingPlanner.ts  
        index.ts

    instrumentation-otel/         \# OpenTelemetry setup for all TS services  
      src/  
        tracing.ts  
        metrics.ts  
        logging.ts  
        index.ts

---

## **5\. `packages/` – 3D engine, WASM geometry, UI kit, SDK, proto defs**

These are **language‑specific or cross‑stack packages** not tied to Nx’s apps/libs semantics.

kitchen-cpq-platform/  
  packages/  
    ui-kit/                          \# shadcn-based design system  
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
          tokens.ts                  \# Tailwind/shadcn tokens  
        index.ts  
      package.json

    3d-engine/                       \# Babylon 8 WebGPU engine (from bp800)  
      src/  
        engine/  
          createKitchenScene.ts  
          updateConfiguration.ts  
          selection.ts  
        scenes/  
          kitchenScene.ts  
        workers/  
          manifoldWorker.ts          \# if using manifold-3d  
        index.ts  
      vite.config.mts  
      package.json

    configurator-sdk/                \# Embeddable \<kitchen-configurator\> web component  
      src/  
        index.ts                     \# exports KitchenKit.init(...)  
        web-component.ts  
        host-api.ts  
      package.json  
      rollup.config.mjs

    geometry-kernel/                 \# Rust → WASM parametric kernel (OCCT)  
      src/  
        lib.rs                       \# Rust API boundary  
        kernel/  
        constraints/  
      Cargo.toml  
      pkg/                           \# wasm-pack output (NPM package)  
        package.json  
        geometry\_kernel\_bg.wasm  
        geometry\_kernel.js

    proto-defs/                      \# gRPC proto specs & generated stubs  
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
      layout-optimizer-lib/          \# shared between FastAPI service & notebooks  
        src/  
          layout\_optimizer/  
            model.py  
            constraints.py  
            solver.py  
        pyproject.toml

**Origins**

* `ui-kit` \= shared design system from Studio Admin (shadcn/ui, TanStack Table, RHF, Zod), exported as a package so both `apps/frontend` and any future tools reuse identical components.

* `3d-engine` \= Babylon 8 \+ WebGPU from `eldinor/bp800`, extracted as a clean TS package; pattern inspired by `turborepo-nextjs-babylonjs`.

* `geometry-kernel` \= Rust/WASM kernel using `wasm-pack-template` \+ opencascade.js examples.

* `configurator-sdk` \= SDK (`kitchen-kit.js`) for third‑party sites to embed the configurator.

---

## **6\. `infra/` & `tools/` – deployment, pipelines, Nx plugins**

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

* `infra/k8s` can follow patterns from the CNCF microservices demo (K8s \+ Istio \+ CI/CD layout) adapted to this service set.

---

### **How Codex‑Max should treat this**

* **Each leaf under `apps/`, `services/`, `libs/`, `packages/` is a project** with its own `project.json` (Nx) or framework config (Next, Nest, FastAPI, Rust).

* Frontend work is constrained to:

  * `apps/frontend` \+ `packages/ui-kit` \+ `packages/3d-engine` \+ `packages/configurator-sdk`.

* Parametric \+ manufacturing compute is constrained to:

  * `services/param-kernel-service`, `services/optimization-engine-service`, `services/cad-cam-dfm-service`, `packages/geometry-kernel`, `packages/proto-defs`.

* Integration boundaries are visible structurally:

  * BFF path \= `apps/frontend` → `apps/api` → `services/configurator-session-service` → domain services, with types coming from `libs/shared-types` & `libs/shared-trpc`.

If you like, next step I can do is walk one golden path (“user tweaks a cabinet → 3D update → CPQ update → BOM/CNC readiness flags”) and explicitly map **which folders** Codex touches in what order for that flow.

