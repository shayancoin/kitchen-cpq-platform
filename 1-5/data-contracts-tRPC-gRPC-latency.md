Here’s a spec you can hand straight to the team. I’ll treat each of the **5 integration Steps** as an epic, and for each one spell out:

* canonical **data contracts** (TS \+ proto‑style),

* **tRPC** surface (browser ↔ BFF / gateway),

* **gRPC** surface (service ↔ service),

* explicit **latency budgets per call** (P95).

All types live in a shared `libs/shared-types` package in the Nx monorepo, as already planned.

---

## **Epic 1 — Foundational Platform & Shared Types**

Scope: monorepo skeleton, identity/tenancy, multi‑tenant Next shell, tRPC wiring.

### **1.1 Core domain types (shared-types)**

**Primitive aliases**

// libs/shared-types/src/primitives.ts  
export type ULID \= string;  
export type ISODateTime \= string;   // RFC3339  
export type CurrencyCode \= string;  // "EUR" | "USD" | ...  
export type Millimeter \= number;  
export type Degree \= number;

**Identity & tenancy**

// libs/shared-types/src/identity.ts  
export interface TenantIdBrand { readonly \_brand: 'TenantId'; }  
export type TenantId \= string & TenantIdBrand;

export interface UserIdBrand { readonly \_brand: 'UserId'; }  
export type UserId \= string & UserIdBrand;

export type Role \= 'consumer' | 'dealer' | 'catalog\_engineer' | 'manufacturing\_engineer' | 'admin';

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
  roles: Role\[\];  
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

**Project / configuration identity**

// libs/shared-types/src/projects.ts  
export interface ProjectIdBrand { readonly \_brand: 'ProjectId'; }  
export type ProjectId \= string & ProjectIdBrand;

export interface CatalogVersionIdBrand { readonly \_brand: 'CatalogVersionId'; }  
export type CatalogVersionId \= string & CatalogVersionIdBrand;

export type ProjectStatus \= 'draft' | 'quoted' | 'ordered' | 'archived';

export interface Project {  
  id: ProjectId;  
  tenantId: TenantId;  
  ownerId: UserId;  
  status: ProjectStatus;  
  catalogVersionId: CatalogVersionId;  
  createdAt: ISODateTime;  
  updatedAt: ISODateTime;  
}

### **1.2 tRPC surface (Next.js ↔ API gateway/BFF)**

Gateway app: `apps/api` (NestJS) exposes a tRPC router (via `@trpc/server` \+ Nest adapter) as planned.

**`auth` router**

// apps/api/src/trpc/routers/auth.ts  
export const authRouter \= t.router({  
  getSession: t.procedure  
    .query(() \=\> Session | null),

  loginWithOAuthCallback: t.procedure  
    .input(z.object({ code: z.string(), state: z.string().optional() }))  
    .mutation(() \=\> Session),

  logout: t.procedure  
    .mutation(() \=\> { success: true }),  
});

**`tenancy` router**

export const tenancyRouter \= t.router({  
  getCurrentTenant: t.procedure  
    .query(() \=\> Tenant),

  listTenantsForUser: t.procedure  
    .query(() \=\> Tenant\[\]),  
});

### **1.3 gRPC surface (gateway ↔ Identity service)**

Identity service is a NestJS microservice (pattern from `ack-nestjs-boilerplate-kafka`) with a gRPC transport for token validation.

**Proto**

// identity.proto  
syntax \= "proto3";

package identity.v1;

message ValidateTokenRequest {  
  string jwt \= 1;  
}

message ValidateTokenResponse {  
  bool valid \= 1;  
  string user\_id \= 2;  
  string tenant\_id \= 3;  
  repeated string roles \= 4;  
  string expires\_at \= 5; // ISO datetime  
}

service IdentityService {  
  rpc ValidateToken(ValidateTokenRequest) returns (ValidateTokenResponse);  
}

Gateway calls `ValidateToken` on each incoming request (or uses local cache).

### **1.4 Latency budgets (Epic 1\)**

Goal: identity \+ initial shell load P95 \< **50 ms** backend time.

Per‑call P95 budgets (server side, excluding browser rendering):

| Call | Path | P95 budget |
| ----- | ----- | ----- |
| `auth.getSession` (tRPC) | Next → API → IdentityService | 25 ms |
| `tenancy.getCurrentTenant` (tRPC) | Next → API → Postgres | 20 ms |
| Initial page SSR data (user \+ tenant) | Next `getServerSideProps` → API | 35 ms |

Constraint:

\[  
 L\_{\\text{auth.getSession}}^{P95} \+ L\_{\\text{tenancy.getCurrentTenant}}^{P95} \\le 45\\text{ ms}  
 \]

So that with network (\~10–20 ms round‑trip) you’re still \<70 ms backend+network, keeping total first meaningful paint within UX targets.

---

## **Epic 2 — Parametric & Geometric Kernel \+ Configurator BFF**

Scope: canonical param state `S_{D-3D}`, param deltas, layout optimization, constraint validation, critical interactive path BFF↔Kernel↔CPQ.

### **2.1 Core geometry / param types**

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
  perimeter: WallSegment\[\];  
  openings: Opening\[\];  
  ceilingHeight: Millimeter;  
}

**Cabinets / instances**

// libs/shared-types/src/cabinets.ts  
export type CabinetKind \= 'base' | 'wall' | 'tall' | 'appliance';

export interface CabinetInstanceIdBrand { readonly \_brand: 'CabinetInstanceId'; }  
export type CabinetInstanceId \= string & CabinetInstanceIdBrand;

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
  parameters: Record\<string, number | string | boolean\>;  
}

**Constraint model**

// libs/shared-types/src/constraints.ts  
export type ConstraintSeverity \= 'info' | 'warning' | 'error';

export type ConstraintCode \=  
  | 'NKBA\_WORK\_TRIANGLE'  
  | 'NKBA\_AISLE\_WIDTH'  
  | 'COLLISION'  
  | 'OOB\_ROOM'  
  | 'DFM\_PANEL\_SIZE'  
  | 'DFM\_EDGE\_CLEARANCE';

export interface ConstraintViolation {  
  code: ConstraintCode;  
  severity: ConstraintSeverity;  
  message: string;  
  affectedCabinetIds: CabinetInstanceId\[\];  
  affectedGeometryIds: ULID\[\];  
}

export interface ConstraintSummary {  
  hasBlockingErrors: boolean;  
  violations: ConstraintViolation\[\];  
}

**Canonical parametric state**

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
  cabinets: CabinetInstance\[\];  
  constraints: ConstraintSummary;  
  updatedAt: ISODateTime;  
}

**Deltas & layout goals**

export type ParamPath \=  
  | \`room.perimeter.${string}.start\`  
  | \`room.perimeter.${string}.end\`  
  | \`cabinets.${CabinetInstanceId}.position\`  
  | \`cabinets.${CabinetInstanceId}.width\`  
  | \`cabinets.${CabinetInstanceId}.parameters.${string}\`;

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

**Layout variant**

export interface LayoutVariantIdBrand { readonly \_brand: 'LayoutVariantId'; }  
export type LayoutVariantId \= string & LayoutVariantIdBrand;

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

### **2.2 tRPC surface (Configurator BFF)**

Router: `configurator`. This is the **only** surface consumed by the 3D configurator.

// apps/api/src/trpc/routers/configurator.ts  
export const configuratorRouter \= t.router({  
  getSessionState: t.procedure  
    .input(z.object({ projectId: z.string() }))  
    .query(({ input }): { state: ParametricState } \=\> { ... }),

  mutateParameters: t.procedure  
    .input(z.object({  
      projectId: z.string(),  
      deltas: z.array(z.custom\<ParamDelta\>()),  
    }))  
    .mutation(({ input }): {  
      state: ParametricState;  
      constraintSummary: ConstraintSummary;  
      // minimal pricing summary (no full CPQ table)  
      priceDelta: {  
        totalPrice: number;  
        currency: CurrencyCode;  
      };  
    } \=\> { ... }),

  requestLayoutVariants: t.procedure  
    .input(z.object({  
      projectId: z.string(),  
      goals: z.custom\<LayoutGoals\>(),  
    }))  
    .mutation(({ input }): {  
      variants: LayoutVariant\[\];  
    } \=\> { ... }),

  validateDesign: t.procedure  
    .input(z.object({ projectId: z.string() }))  
    .query(({ input }): ConstraintSummary \=\> { ... }),  
});

### **2.3 gRPC surfaces**

#### **2.3.1 Parametric Kernel Service (NestJS ↔ Rust/WASM)**

// parametric\_kernel.proto  
syntax \= "proto3";

package parametric.v1;

message ParamDelta {  
  string path \= 1;  
  string value\_json \= 2; // encoded to allow union  
}

message ApplyDeltaRequest {  
  string project\_id \= 1;  
  repeated ParamDelta deltas \= 2;  
}

message ConstraintViolation {  
  string code \= 1;  
  string severity \= 2;  
  string message \= 3;  
  repeated string affected\_cabinet\_ids \= 4;  
  repeated string affected\_geometry\_ids \= 5;  
}

message ConstraintSummary {  
  bool has\_blocking\_errors \= 1;  
  repeated ConstraintViolation violations \= 2;  
}

// Serialized ParametricState as canonical JSON (same schema as TS)  
message ParametricStateJson {  
  string json \= 1;  
}

message ApplyDeltaResponse {  
  ParametricStateJson state \= 1;  
  ConstraintSummary constraints \= 2;  
}

message ValidateDesignRequest {  
  string project\_id \= 1;  
}

message ValidateDesignResponse {  
  ConstraintSummary constraints \= 1;  
}

service ParametricKernelService {  
  rpc ApplyDelta(ApplyDeltaRequest) returns (ApplyDeltaResponse);  
  rpc ValidateDesign(ValidateDesignRequest) returns (ValidateDesignResponse);  
}

#### **2.3.2 Optimization Engine Service (FastAPI \+ OR‑Tools)**

// optimization.proto  
syntax \= "proto3";

package optimization.v1;

message LayoutGoals {  
  double storage\_weight \= 1;  
  double budget\_weight \= 2;  
  double openness\_weight \= 3;  
  double family\_friendly\_weight \= 4;  
  bool prefers\_island \= 5;  
}

message SuggestLayoutsRequest {  
  string project\_id \= 1;  
  LayoutGoals goals \= 2;  
  uint32 max\_layouts \= 3; // e.g. 4  
}

message LayoutVariant {  
  string id \= 1;  
  string label \= 2;  
  string state\_json \= 3; // ParametricState JSON  
  double work\_triangle\_score \= 4;  
  double storage\_score \= 5;  
  double budget\_score \= 6;  
  double ergonomics\_score \= 7;  
}

message SuggestLayoutsResponse {  
  repeated LayoutVariant variants \= 1;  
}

service OptimizationService {  
  rpc SuggestLayouts(SuggestLayoutsRequest) returns (SuggestLayoutsResponse);  
}

### **2.4 Latency budgets (Epic 2\)**

Critical interactive path:

`Browser → BFF → Parametric Kernel → CPQ → BFF → Browser` with total P95 ≤ **150 ms** for “drag cabinet → constraints \+ price update”.

Define P95 budgets:

| Segment | P95 budget |
| ----- | ----- |
| Browser → BFF tRPC (network \+ API ingress) | 20 ms |
| BFF internal logic (auth, session, Redis) | 10 ms |
| BFF → ParametricKernelService.ApplyDelta gRPC | 30 ms |
| BFF → CPQService.PriceDelta gRPC *(see Epic 3\)* | 30 ms |
| BFF response marshalling | 10 ms |
| BFF → Browser (network) | 20 ms |

Sum: **120 ms** budget on backend+network, leaving \~30 ms for render to stay \<150 ms.

Formally:

\[  
 L\_{\\text{total}}^{P95} \=  
 L\_{\\text{net,req}} \+  
 L\_{\\text{BFF}} \+  
 L\_{\\text{kernel}} \+  
 L\_{\\text{CPQ}} \+  
 L\_{\\text{net,res}} \\le 150\\ \\text{ms}  
 \]

Optimization path (`requestLayoutVariants`) is allowed more:

* P95 `OptimizationService.SuggestLayouts` ≤ **100 ms**; call is user‑initiated (“Generate layouts”), not per‑drag, so overall ≤200–250 ms is acceptable for HCI.

---

## **Epic 3 — Catalog, CPQ, CAD/CAM, Workflow Orchestration**

Scope: immutable catalog snapshots, CPQ, BOM/cut list/CNC, Temporal workflows, Kafka events.

### **3.1 Core data contracts**

**Catalog snapshots**

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

**Quote & CPQ**

// libs/shared-types/src/cpq.ts  
export interface QuoteIdBrand { readonly \_brand: 'QuoteId'; }  
export type QuoteId \= string & QuoteIdBrand;

export type QuoteStatus \= 'draft' | 'submitted' | 'approved' | 'rejected' | 'expired';

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
  lineItems: QuoteLineItem\[\];  
}

**BOM, cut lists, CNC outputs**

// libs/shared-types/src/manufacturing.ts  
export interface BomItem {  
  id: ULID;  
  sku: string;  
  description: string;  
  quantity: number;  
  uom: 'piece' | 'panel' | 'edge\_m' | 'hardware';  
}

export interface Bom {  
  id: ULID;  
  projectId: ProjectId;  
  quoteId: QuoteId;  
  items: BomItem\[\];  
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
  items: CutListItem\[\];  
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

### **3.2 tRPC surface (admin & CPQ UIs)**

**`cpq` router**

export const cpqRouter \= t.router({  
  getQuoteForProject: t.procedure  
    .input(z.object({ projectId: z.string() }))  
    .query((): QuoteSummary | null \=\> { ... }),

  recomputeQuote: t.procedure  
    .input(z.object({ projectId: z.string() }))  
    .mutation((): QuoteSummary \=\> { ... }),

  applyDealerAdjustments: t.procedure  
    .input(z.object({  
      quoteId: z.string(),  
      adjustments: z.array(z.object({  
        lineItemId: z.string(),  
        discountPercent: z.number().min(0).max(100),  
      })),  
    }))  
    .mutation((): QuoteSummary \=\> { ... }),  
});

**`catalogAdmin` router (LayEdit‑like)**

export const catalogAdminRouter \= t.router({  
  listCatalogVersions: t.procedure  
    .query((): CatalogVersion\[\] \=\> { ... }),

  publishCatalogDraft: t.procedure  
    .input(z.object({ draftId: z.string() }))  
    .mutation((): CatalogVersion \=\> { ... }),  
});

### **3.3 gRPC surfaces**

#### **3.3.1 Catalog & Rules Service**

// catalog.proto  
syntax \= "proto3";

package catalog.v1;

message CatalogVersion {  
  string id \= 1;  
  string tenant\_id \= 2;  
  string label \= 3;  
  string created\_at \= 4;  
  string hash \= 5;  
  string payload\_uri \= 6;  
}

message GetActiveCatalogRequest {  
  string tenant\_id \= 1;  
}

message GetActiveCatalogResponse {  
  CatalogVersion version \= 1;  
}

service CatalogService {  
  rpc GetActiveCatalog(GetActiveCatalogRequest) returns (GetActiveCatalogResponse);  
}

Also publishes `catalog.snapshot_published` events on Kafka (not detailed here).

#### **3.3.2 CPQ Service**

// cpq.proto  
syntax \= "proto3";  
import "parametric\_state.proto"; // json blob if needed

package cpq.v1;

message PriceDeltaRequest {  
  string project\_id \= 1;  
}

message PriceDeltaResponse {  
  double total\_price \= 1;  
  string currency \= 2;  
}

message RecomputeQuoteRequest {  
  string project\_id \= 1;  
}

message QuoteLineItem {  
  string id \= 1;  
  string sku \= 2;  
  string description \= 3;  
  double quantity \= 4;  
  double unit\_price \= 5;  
  double list\_price \= 6;  
  double net\_price \= 7;  
  string currency \= 8;  
  double margin\_percent \= 9;  
}

message QuoteSummary {  
  string id \= 1;  
  string project\_id \= 2;  
  string tenant\_id \= 3;  
  string status \= 4;  
  string currency \= 5;  
  double subtotal \= 6;  
  double tax \= 7;  
  double total \= 8;  
  double margin\_percent \= 9;  
  string catalog\_version\_id \= 10;  
  repeated QuoteLineItem line\_items \= 11;  
}

service CpqService {  
  rpc PriceDelta(PriceDeltaRequest) returns (PriceDeltaResponse);  
  rpc RecomputeQuote(RecomputeQuoteRequest) returns (QuoteSummary);  
}

#### **3.3.3 CAD/CAM & DFM Service \+ Workflow Orchestration**

`cad_cam.proto`:

syntax \= "proto3";

package cadcam.v1;

message GenerateArtifactsRequest {  
  string project\_id \= 1;  
  string quote\_id \= 2;  
}

message GenerateArtifactsResponse {  
  string bom\_id \= 1;  
  string cut\_list\_id \= 2;  
  string cnc\_program\_id \= 3;  
}

service CadCamService {  
  rpc GenerateArtifacts(GenerateArtifactsRequest) returns (GenerateArtifactsResponse);  
}

`workflow.proto` (Temporal worker’s gRPC front is internal; conceptually):

syntax \= "proto3";

package workflow.v1;

message StartOrderWorkflowRequest {  
  string project\_id \= 1;  
  string quote\_id \= 2;  
}

message StartOrderWorkflowResponse {  
  string workflow\_id \= 1;  
}

service WorkflowService {  
  rpc StartOrderWorkflow(StartOrderWorkflowRequest) returns (StartOrderWorkflowResponse);  
}

Temporal workers then call `CpqService.RecomputeQuote` and `CadCamService.GenerateArtifacts` as activities, and record status transitions.

### **3.4 Latency budgets (Epic 3\)**

Split into **interactive CPQ** vs **background manufacturing**.

**Interactive CPQ**

These sit close to the configurator; parts already assigned budget in Epic 2\.

| Call | P95 budget | Notes |
| ----- | ----- | ----- |
| `CpqService.PriceDelta` | 30 ms | part of critical path |
| `cpq.getQuoteForProject` (tRPC) | 80 ms | full quote grid, non‑per‑drag |

Constraints:

* `PriceDelta` **must** fit inside the 30 ms slice already allocated in Epic 2\.

* `getQuoteForProject` used when opening CPQ view; 80 ms P95 is fine for screen change.

**Manufacturing / CAD/CAM**

These are **async** via Temporal; budgets are in seconds, not ms.

| Activity | P95 budget |
| ----- | ----- |
| `CadCamService.GenerateArtifacts` | ≤ 30 s |
| Full `ManufacturingJobWorkflow` | ≤ 180 s |
| Visibility of preliminary status badge | ≤ 2 s |

UI constraint: the front‑end always sees **immediate** acknowledgement from `StartOrderWorkflow` (\< 200 ms end‑to‑end), while the heavy work completes in the background.

---

## **Epic 4 — Semantic–Deterministic Bridge (AI / Agentic Layer)**

Scope: AI copilot, NL→param spec, tool‑calling into kernel/CAD/CPQ, guarantees that AI never becomes source of truth.

### **4.1 Data contracts**

// libs/shared-types/src/ai.ts

export type CopilotRole \= 'user' | 'assistant' | 'system' | 'tool';

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
  messages: CopilotMessage\[\];  
  toolCalls?: ToolCall\[\];  
}

export interface IntentParameters {  
  projectId: ProjectId;  
  // structured goal; e.g. "make more family-friendly"  
  goals?: LayoutGoals;  
  proposedDeltas?: ParamDelta\[\];  
}

### **4.2 tRPC surface (copilot UI)**

Router: `copilot`. UI streams tokens via SSE/WebSocket using Vercel AI SDK patterns.

export const copilotRouter \= t.router({  
  startSession: t.procedure  
    .input(z.object({ projectId: z.string() }))  
    .mutation((): { sessionId: ULID } \=\> { ... }),

  streamCompletion: t.procedure  
    .input(z.object({  
      sessionId: z.string(),  
      messages: z.array(z.custom\<CopilotMessage\>()),  
    }))  
    // Returns a stream (SSE) in implementation; here represented as a token source  
    .subscription(() \=\> /\* AsyncIterable\<{ token: string; toolCall?: ToolCall }\> \*/ {}),

  applySuggestion: t.procedure  
    .input(z.object({  
      projectId: z.string(),  
      deltas: z.array(z.custom\<ParamDelta\>()),  
    }))  
    .mutation(() \=\> {  
      // delegates to configurator.mutateParameters  
      state: ParametricState;  
      constraintSummary: ConstraintSummary;  
    }),  
});

### **4.3 gRPC / tool interfaces (AI Service ↔ deterministic engines)**

The AI / Agent Orchestration Service doesn’t get special RPCs; it calls existing ones as **tools**:

* Tool `paramEngine.applyDelta` → `ParametricKernelService.ApplyDelta`

* Tool `optimizer.solveLayout` → `OptimizationService.SuggestLayouts`

* Tool `cpq.recomputeQuote` → `CpqService.RecomputeQuote`

* Tool `cadcam.generateArtifacts` → `CadCamService.GenerateArtifacts`

So you may define a minimal gRPC for AI service itself for observability:

// ai.proto  
syntax \= "proto3";

package ai.v1;

message CopilotEvent {  
  string session\_id \= 1;  
  string project\_id \= 2;  
  string message\_json \= 3;  
}

message Empty {}

service CopilotService {  
  rpc LogEvent(CopilotEvent) returns (Empty);  
}

(Actual LLM serving happens behind this boundary, likely HTTP internally.)

### **4.4 Latency budgets (Epic 4\)**

Two distinct UX modes: **live editing hints** and **design suggestions**.

| Interaction type | Path | P95 budget |
| ----- | ----- | ----- |
| Live hint (small local LLM/WebLLM) | Browser only | \< 200 ms |
| Cloud copilot first token | Browser → AI svc → LLM → stream | \< 500 ms |
| Full copilot suggestion | Same as above | \< 3 s |
| Applying suggestion to scene | Copilot → configurator.mutateParameters | uses Epic 2 budgets (≤150 ms) |

Formally, for apply‑suggestion:

\[  
 L\_{\\text{applySuggestion}}^{P95} \= L\_{\\text{AI-reason}}^{P95} \+ L\_{\\text{mutateParams}}^{P95}  
 \]

You explicitly **decouple**:

* `L_{AI-reason}` up to 3 s (non‑blocking; streaming),

* `L_{mutateParams}` constrained by Epic 2 (≤150 ms), preserving deterministic UX invariants.

---

## **Epic 5 — Frontend Synthesis & UX Coherence**

Scope: Studio‑Admin‑style shell, embedding Babylon configurator, shared design system, performance enforcement.

### **5.1 Design system / UI types**

// libs/shared-types/src/ui.ts  
export type ConstraintSeverityToken \= 'ok' | 'warning' | 'error';

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

### **5.2 tRPC surface (UI composition)**

Mostly read‑optimized:

export const uiRouter \= t.router({  
  getConstraintBadge: t.procedure  
    .input(z.object({ projectId: z.string() }))  
    .query((): ConstraintBadgePayload \=\> { ... }),

  getCpqSummaryBar: t.procedure  
    .input(z.object({ projectId: z.string() }))  
    .query((): CpqSummaryBarState \=\> { ... }),  
});

Implementation is a thin wrapper over:

* `configurator.validateDesign` \+ transform → `ConstraintBadgePayload`,

* `cpq.getQuoteForProject` \+ transform → `CpqSummaryBarState`.

### **5.3 Latency budgets (Epic 5\)**

These calls are part of the same critical path as Epic 2; budget them accordingly:

| Call | P95 budget | Notes |
| ----- | ----- | ----- |
| `ui.getConstraintBadge` | 40 ms | reuses `ValidateDesign` or cached summary |
| `ui.getCpqSummaryBar` | 60 ms | reuses `getQuoteForProject` (cached) |

The UX requirement is:

* Drag cabinet → badge \+ CPQ bar update **visibly in sync** with 3D update.

* So you either:

  * compute them as part of `mutateParameters` and cache,

  * or ensure combined call set still obeys `L_total^{P95} ≤ 150 ms`.

---

## **How to hand this to the team**

Concretely, you can:

1. **Create `libs/shared-types`** with the TS interfaces exactly as above (modulo your preferred naming).

2. **Generate proto files** (`identity.proto`, `parametric_kernel.proto`, `optimization.proto`, `cpq.proto`, `cad_cam.proto`, `workflow.proto`, `ai.proto`) matching the shapes here.

3. **Bind tRPC routers** (`auth`, `tenancy`, `configurator`, `cpq`, `catalogAdmin`, `copilot`, `ui`) in `apps/api`.

4. In your **performance test suite / CI**, enforce the per‑endpoint **P95 latency budgets** here as explicit assertions (e.g. k6 / Artillery scripts run on each build), using the inequality constraints above as acceptance criteria.

