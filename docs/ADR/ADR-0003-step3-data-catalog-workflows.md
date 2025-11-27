# ADR-0003: Data, Catalog & Workflow Orchestration (Step 3)

## Context
- Epic 3 in `data-contracts-tRPC-gRPC-latency.md` mandates immutable catalog snapshots, CPQ pricing pinned to `CatalogSnapshotRef`, CAD/CAM outputs keyed by the same snapshot, and Temporal/Kafka to orchestrate the sale→factory path.
- Step 3 requires a deterministic audit trail: every quote, BOM, and CNC artifact must be traceable to `C_version` and configuration hash, with workflow resilience handled by Temporal and Kafka events.
- OSS donors: `ack-nestjs-boilerplate-kafka` for NestJS+Kafka wiring and `temporalio/samples-typescript` for workflow structure; both are mirrored via lightweight stubs to keep local dev deterministic.

## Decisions
1. **Canonical event and topic registry**  
   - `libs/shared-events` now defines the event contract set (`catalog.snapshot.published`, `quote.created/confirmed/priced`, `bom.generated`, `cadcam.cnc.output.generated`, `manufacturing.job.{created,completed}`, `shipment.dispatched`, etc.) with a JSON-schema-like registry.  
   - `libs/shared-kafka` adds typed topics and an in-memory broker for dev; producers/consumers map events→topics via `topicMap`.
2. **Domain guards for catalog/CPQ/manufacturing**  
   - `libs/domain-catalog` builds and hashes catalog versions/snapshot refs and exposes a rules engine placeholder.  
   - `libs/domain-cpq` enforces catalog snapshot invariants (no reprice against a newer catalog without explicit override) and provides a deterministic pricing engine + in-memory repo.  
   - `libs/domain-manufacturing` adds manufacturing job shapes and a scheduler stub tied to `CatalogSnapshotRef`.
3. **Service scaffolds (NestJS)**  
   - `services/catalog-rules-service`: CRUD for drafts/rules, snapshot publish emits `catalog.snapshot.published` with hash/payloadUri; in-memory draft store simulates Postgres schema.  
   - `services/cpq-pricing-service`: HTTP surface for quote create/recompute/confirm pinned to `CatalogSnapshotRef`, emits quote events, and enforces catalog mismatch guardrails.  
   - `services/cad-cam-dfm-service`: Generates stub BOM, cut list, and CNC outputs, stores last result per project, and emits `bom.generated` + `cadcam.cnc.output.generated`.  
   - `services/manufacturing-scheduling-service`: Creates/summarizes jobs keyed by quote/project/C_version and emits `manufacturing.job.*`.
4. **Workflow orchestration (Temporal-aligned stubs)**  
   - `services/workflow-orchestration-service` adds Temporal-like shims, activities (CPQ recompute, CAD/CAM generation, manufacturing job create), and workflows (`QuoteWorkflow`, `KitchenOrderWorkflow`).  
   - Kafka bridge in the worker listens for `quote.confirmed` to kick off the order workflow; metrics server retained.  
   - Protos extended (`catalog.proto`, `cpq.proto`, `workflow/v1/workflow.proto`) to carry `catalog_version_id/hash` where relevant.
5. **UI + reporting hooks**  
   - `apps/api` adds `/api/status/orders/:projectId` and `/api/status/manufacturing` reporting endpoints (stubs) for workflow/manufacturing timelines.  
   - `apps/frontend` wraps the app in TanStack Query and adds `/orders` and `/manufacturing` pages that poll the reporting endpoints for status timelines.

## Consequences
- Deterministic event vocabulary exists across services, enabling Kafka topic alignment and schema evolution.  
- Catalog snapshots and CPQ pricing now enforce `CatalogSnapshotRef` invariants in domain + service layers, preventing silent reprice drift.  
- Temporal worker can run in dev without the real runtime, while still expressing the intended CPQ → CAD/CAM → manufacturing orchestration.  
- Frontend + API stubs make the workflow/manufacturing status visible, unblocking demo and integration tests even before real Kafka/Temporal wiring is live.  
- Dependencies such as `@tanstack/react-query` were added to support UI polling; pnpm install should be run to hydrate them (local pnpm corepack issue noted separately).
