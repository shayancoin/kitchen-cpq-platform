# ADR-0005: Step 5 — Frontend Synthesis, CPQ UI & Design System

## Context

- Step 5 requires a unified, high-density CPQ UI that fuses the Studio Admin shell with the Babylon configurator, AI Copilot, and shared design system across dealer, catalog, and manufacturing portals.
- Previous steps provided stubs for CPQ pages and a minimal UI kit; the shell was not yet consistent, and shared primitives were duplicated in the app.
- Latency budgets needed to include UI/BFF endpoints (constraint badge, summary bar, dashboard KPIs) and tenant branding had to be applied end-to-end.

## Decision

1. **Centralized design system**
   - Expanded `@kitchen-cpq/ui-kit` with `AppShell`, navigation, theme provider (tenant branding + Tangerine/Brutalist presets), TanStack `DataTable`, CPQ badges (`ConstraintBadge`, `MarginBadge`, `CpqSummaryBar`), manufacturing widgets (`BomTable`, `CncJobCard`), and layout helpers (`ThreePaneLayout`, `SectionHeader`).
   - Added lightweight stories in `packages/ui-kit/stories` for key components to exercise UI primitives without binding to the app.

2. **Routes rebuilt on the shared shell**
   - `/cpq/dashboard` now shows KPIs, constraint badge, and TanStack quote table backed by tRPC (`cpq.listQuotes`, `ui.getDashboardKpis`).
   - `/cpq/quotes` lists quotes with filters; `/cpq/quotes/[id]` is a three-pane layout (metadata + read-only Babylon preview + line items + margin/constraints).
   - `/cpq/configure/[projectId]` uses the three-pane layout (param form → Babylon viewer → AI Copilot rail) and relies solely on tRPC for state/mutations and summary bar.
   - `/catalog` provides a LayEdit-style DSL editor, parameter domain table, and catalog version table; `/manufacturing` shows Temporal/Kafka job cards + BOM preview.

3. **Tenant + RBAC experience**
   - `tenancy.getCurrentTenant` returns branding tokens applied via the UI kit theme provider; nav is filtered by user roles (`dealer`, `catalog_engineer`, `manufacturing_engineer`, `admin`).

4. **Performance + tests**
   - Updated `tools/scripts/latency-budgets.ts` and `latency-budgets.json` with UI/BFF endpoints (`cpq.listQuotes`, `cpq.getQuote`, `ui.getDashboardKpis`, `ui.getConstraintBadge`, `ui.getCpqSummaryBar`, `catalogAdmin.listCatalogVersions`, `reporting.getManufacturingJobs`, `auth.getCurrentUser`).
   - Added Playwright visual smoke tests for `/cpq/dashboard`, `/cpq/quotes/[id]`, `/cpq/configure/[projectId]` (opt-in via `RUN_VISUAL_REGRESSION`).

## Status

Accepted — implemented in Step 5.

## Consequences

- `apps/frontend` imports shared primitives only from `@kitchen-cpq/ui-kit`; shadcn-specific code stays centralized in the package.
- Babylon configurator and AI Copilot are visible in CPQ flows with consistent chrome; future catalog/manufacturing pages can reuse the same shell without bespoke styling.
- Latency budgets now cover the UI-facing endpoints; CI can gate regressions via `tools/scripts/check-latency-budgets.ts`.
