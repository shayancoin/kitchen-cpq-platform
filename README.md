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

