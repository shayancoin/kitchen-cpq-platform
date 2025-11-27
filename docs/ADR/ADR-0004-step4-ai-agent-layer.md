# ADR-0004 — Step 4: Semantic–Deterministic AI/Agent Layer

## Status
Accepted — initial implementation landed.

## Context
- We need a semantic bridge from NL/sketch input to deterministic services (parametric kernel, optimization, CAD/CAM, CPQ) without allowing the AI to emit BOM/CNC or write directly to data stores.
- Latency budgets: no AI on the 50–150 ms interactive path; local hints <200 ms; full design suggestions <3 s.
- Safety: CAD macros must be syntax-checked; param deltas must respect schema; every AI action must be audit logged.

## Decision
- Stand up a FastAPI + LangGraph based `ai-orchestration-service` (Python) sourced from the `fastapi-langgraph-agent-production-ready-template`.
- Expose HTTP endpoints:
  - `POST /design/interpret-intent` — parse NL to structured deltas/actions (dry run).
  - `POST /design/chat` — tool-enabled chat that calls deterministic services.
  - `POST /manufacturing/analyst` — analyst stub that only recommends deterministic next steps.
- Implement tool registry wrappers:
  - `paramEngine.applyDelta` → Parametric Kernel Service (`/kernel/apply-delta`).
  - `optimizer.solveLayout` → Optimization Engine (`/suggest-layouts`).
  - `cadService.generateCadMacro` → CAD/CAM service (`/generate-macro`).
  - `pricingService.simulateChange` → CPQ pricing (`/simulate-change`).
- Guardrails:
  - Param paths limited to `room.*` and `cabinets.*`; values must be JSON-serializable.
  - CAD macro whitelist with prohibited CNC tokens (`M30`, `G53`, `DELETE`, etc.).
  - Explicit check that text cannot directly emit BOM/CNC content.
  - No DB writes in the AI service; all state changes flow through deterministic APIs.
- Audit logging:
  - JSONL log per NL request capturing chosen tools, parameters, and deterministic responses.
- Frontend copilot:
  - Right-rail “Design Copilot” on `/cpq/configure/[projectId]` that streams chat, shows tool invocations, and allows undo by replaying deterministic deltas.
- Latency governance:
  - Added AI endpoints to latency manifest with budgets (`interpretIntent` 800 ms, `chat` 3000 ms, `manufacturing.analyst` 1500 ms).

## Consequences
- Developers have a production-ready FastAPI agent surface with LangGraph planning while keeping deterministic engines as the source of truth.
- Safety defaults block raw CNC/BOM emission and unsafe CAD macros; violations return 400s and are logged.
- Frontend users can see which tools were invoked and revert AI-driven changes without manual resets.
- Future work: swap the heuristic planner with an LLM-backed one (when enabled via `AI_ENABLE_LLM_TOOLS`), add RAG grounding, and wire gRPC calls once proto stubs are generated.
