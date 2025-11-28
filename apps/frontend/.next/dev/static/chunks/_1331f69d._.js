(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/3d-engine/src/engine/updateConfiguration.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateSceneFromState",
    ()=>updateSceneFromState
]);
const cabinetColor = {
    r: 0.8,
    g: 0.72,
    b: 0.65
};
let babylonCache = null;
async function updateSceneFromState(handle, state) {
    if (!handle.scene || !handle.engine || !handle.cabinets) {
        // Fallback: draw basic 2D rectangles
        const ctx = handle.canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, handle.canvas.width, handle.canvas.height);
            ctx.fillStyle = '#f5f5f5';
            ctx.fillRect(0, 0, handle.canvas.width, handle.canvas.height);
            ctx.fillStyle = '#c7b299';
            state.cabinets.forEach((cab)=>{
                ctx.fillRect(10 + cab.position * 0.05, 50, cab.width * 0.05, 40);
            });
        }
        return;
    }
    if (!babylonCache) {
        babylonCache = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/index.js [app-client] (ecmascript, async loader)");
    }
    const babylon = babylonCache;
    const { MeshBuilder, Color3, StandardMaterial } = babylon;
    const existing = handle.cabinets ?? new Map();
    handle.cabinets = existing;
    if (!handle.cabinetBaseMesh) {
        handle.cabinetBaseMesh = MeshBuilder.CreateBox('cabinet-base', {
            size: 1
        }, handle.scene);
        handle.cabinetBaseMesh.isVisible = false;
    }
    if (!handle.cabinetMaterial) {
        const mat = new StandardMaterial('cabinet-mat', handle.scene);
        mat.diffuseColor = new Color3(cabinetColor.r, cabinetColor.g, cabinetColor.b);
        handle.cabinetMaterial = mat;
    }
    handle.cabinetBaseMesh.material = handle.cabinetMaterial;
    // Remove meshes that no longer exist
    for (const [id, mesh] of existing.entries()){
        if (!state.cabinets.find((c)=>c.id === id)) {
            mesh.dispose();
            existing.delete(id);
        }
    }
    for (const cab of state.cabinets){
        let mesh = existing.get(cab.id);
        if (!mesh) {
            const instance = handle.cabinetBaseMesh.createInstance(`cab-${cab.id}`);
            instance.material = handle.cabinetMaterial;
            mesh = instance;
            existing.set(cab.id, mesh);
        }
        mesh.scaling.x = cab.width;
        mesh.scaling.y = cab.height;
        mesh.scaling.z = cab.depth;
        mesh.position.x = cab.position + cab.width / 2;
        mesh.position.y = cab.height / 2;
        mesh.position.z = cab.depth / 2;
        mesh.rotation.y = cab.rotationDeg * Math.PI / 180;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/3d-engine/src/engine/createKitchenScene.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createKitchenScene",
    ()=>createKitchenScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$engine$2f$updateConfiguration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/3d-engine/src/engine/updateConfiguration.ts [app-client] (ecmascript)");
;
async function loadBabylon() {
    try {
        // Dynamic import so tests without Babylon can still run.
        const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/index.js [app-client] (ecmascript, async loader)");
        return module;
    } catch (err) {
        console.warn('Babylon.js not available, falling back to canvas stub', err);
        return null;
    }
}
async function createKitchenScene(canvas, initialState) {
    const babylon = await loadBabylon();
    const handle = {
        id: `scene-${Date.now()}`,
        canvas,
        cabinets: new Map()
    };
    if (!babylon) {
        // Simple 2D fallback render.
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = '#f5f5f5';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        return handle;
    }
    const { Engine, Scene, HemisphericLight, Vector3, ArcRotateCamera, MeshBuilder, Color3, StandardMaterial } = babylon;
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera('camera', Math.PI / 2, Math.PI / 3, 6000, new Vector3(0, 1000, 0), scene);
    camera.attachControl(canvas, true);
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);
    light.intensity = 0.8;
    // Floor plane
    const floor = MeshBuilder.CreateGround('floor', {
        width: 5000,
        height: 5000,
        subdivisions: 1
    }, scene);
    floor.position.y = 0;
    floor.receiveShadows = true;
    // Walls (simple boxes)
    const wallMaterial = new StandardMaterial('wall-mat', scene);
    wallMaterial.diffuseColor = new Color3(0.95, 0.95, 0.95);
    for (const wall of initialState.room.perimeter){
        const dx = wall.end.x - wall.start.x;
        const dy = wall.end.y - wall.start.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        if (length < 1) {
            continue;
        }
        const wallMesh = MeshBuilder.CreateBox(`wall-${wall.id}`, {
            width: length,
            height: wall.height,
            depth: wall.thickness
        }, scene);
        wallMesh.position.x = wall.start.x + dx / 2;
        wallMesh.position.z = wall.start.y + dy / 2;
        wallMesh.position.y = wall.height / 2;
        wallMesh.rotation.y = Math.atan2(dy, dx);
        wallMesh.material = wallMaterial;
    }
    // Shared cabinet material and base mesh (unit cube) to enable instancing.
    const cabinetMaterial = new StandardMaterial('cabinet-mat', scene);
    cabinetMaterial.diffuseColor = new Color3(0.8, 0.72, 0.65);
    const cabinetBaseMesh = MeshBuilder.CreateBox('cabinet-base', {
        size: 1
    }, scene);
    cabinetBaseMesh.material = cabinetMaterial;
    cabinetBaseMesh.isVisible = false; // use only for instances
    handle.engine = engine;
    handle.scene = scene;
    handle.cabinets = new Map();
    handle.cabinetMaterial = cabinetMaterial;
    handle.cabinetBaseMesh = cabinetBaseMesh;
    handle.dispose = ()=>{
        scene.dispose();
        engine.dispose();
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$engine$2f$updateConfiguration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSceneFromState"])(handle, initialState);
    engine.runRenderLoop(()=>{
        scene.render();
    });
    return handle;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/3d-engine/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$engine$2f$createKitchenScene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/3d-engine/src/engine/createKitchenScene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$engine$2f$updateConfiguration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/3d-engine/src/engine/updateConfiguration.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/layout/Shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shell",
    ()=>Shell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Shell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col bg-gray-50 text-slate-900",
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/layout/Shell.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Shell;
var _c;
__turbopack_context__.k.register(_c, "Shell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/theme/TenantThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TenantThemeProvider",
    ()=>TenantThemeProvider,
    "resolveBranding",
    ()=>resolveBranding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
const fallbackBranding = {
    primaryColor: '#0f172a',
    accentColor: '#2563eb',
    surfaceColor: '#ffffff',
    subtleBorderColor: '#e2e8f0',
    navGradient: 'linear-gradient(180deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)',
    constraintTokens: {
        ok: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444'
    },
    preset: 'default'
};
const presetOverrides = {
    default: {},
    tangerine: {
        accentColor: '#f97316',
        surfaceColor: '#0b1220',
        subtleBorderColor: '#1f2937',
        navGradient: 'linear-gradient(180deg, #0b1220 0%, #111827 50%, #0b1220 100%)'
    },
    brutalist: {
        accentColor: '#fde047',
        primaryColor: '#111111',
        surfaceColor: '#ffffff',
        subtleBorderColor: '#111111',
        navGradient: 'linear-gradient(180deg, #000000 0%, #1f1f1f 60%, #0a0a0a 100%)'
    }
};
const resolveBranding = (branding)=>{
    const preset = branding?.preset ?? 'default';
    return {
        ...fallbackBranding,
        ...presetOverrides[preset] ?? {},
        ...branding,
        preset
    };
};
function TenantThemeProvider({ branding, mode = 'light', children }) {
    const tokens = resolveBranding(branding);
    const style = {
        '--brand-primary': tokens.primaryColor,
        '--brand-accent': tokens.accentColor,
        '--brand-surface': tokens.surfaceColor ?? fallbackBranding.surfaceColor,
        '--brand-surface-muted': tokens.surfaceColor ? `color-mix(in srgb, ${tokens.surfaceColor} 92%, #ffffff)` : '#f8fafc',
        '--brand-border-subtle': tokens.subtleBorderColor ?? fallbackBranding.subtleBorderColor,
        '--constraint-ok': tokens.constraintTokens?.ok ?? fallbackBranding.constraintTokens?.ok,
        '--constraint-warning': tokens.constraintTokens?.warning ?? fallbackBranding.constraintTokens?.warning,
        '--constraint-error': tokens.constraintTokens?.error ?? fallbackBranding.constraintTokens?.error
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('min-h-screen text-[var(--brand-primary,#0f172a)]', mode === 'dark' ? 'bg-[#0b1220] text-slate-50' : 'bg-slate-50'),
        "data-theme": tokens.preset ?? 'default',
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/theme/TenantThemeProvider.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = TenantThemeProvider;
var _c;
__turbopack_context__.k.register(_c, "TenantThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/primitives/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
const variantClasses = {
    primary: 'bg-[var(--brand-accent,#2563eb)] text-white hover:bg-opacity-90 focus-visible:outline-[var(--brand-accent,#2563eb)]',
    ghost: 'text-[var(--brand-primary,#0f172a)] hover:bg-[var(--brand-surface-muted,#f8fafc)] focus-visible:outline-[var(--brand-primary,#0f172a)]',
    outline: 'border border-[color-mix(in_srgb,var(--brand-primary,#0f172a)_12%,#d5d9e3)] text-[var(--brand-primary,#0f172a)] hover:bg-[var(--brand-surface-muted,#f8fafc)] focus-visible:outline-[var(--brand-accent,#2563eb)]',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600'
};
function Button({ children, variant = 'primary', loading, className, disabled, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, variantClasses[variant], disabled || loading ? 'opacity-60' : '', className),
        disabled: disabled || loading,
        ...props,
        children: [
            loading ? '…' : null,
            children
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui-kit/src/components/primitives/Button.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/layout/AppShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShell",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$theme$2f$TenantThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/theme/TenantThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DefaultLink = ({ href, className, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = DefaultLink;
function AppShell({ navItems, user, tenantName, branding, topbarContent, linkComponent: LinkComponent = DefaultLink, onSignOut, children }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const userRoles = user?.roles ?? [];
    const allowedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppShell.useMemo[allowedItems]": ()=>{
            if (!userRoles.length) return navItems;
            return navItems.filter({
                "AppShell.useMemo[allowedItems]": (item)=>!item.roles || item.roles.some({
                        "AppShell.useMemo[allowedItems]": (role)=>userRoles.includes(role)
                    }["AppShell.useMemo[allowedItems]"])
            }["AppShell.useMemo[allowedItems]"]);
        }
    }["AppShell.useMemo[allowedItems]"], [
        navItems,
        userRoles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$theme$2f$TenantThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TenantThemeProvider"], {
        branding: branding,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen bg-[var(--brand-surface,#f8fafc)] text-[var(--brand-primary,#0f172a)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed inset-y-0 left-0 z-20 w-64 transform border-r border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-[var(--brand-surface,#0b1220)]/95 backdrop-blur transition-transform lg:translate-x-0', open ? 'translate-x-0' : '-translate-x-full'),
                    style: branding?.navGradient ? {
                        backgroundImage: branding.navGradient
                    } : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 px-4 py-4 text-sm font-semibold text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-9 w-9 rounded-lg bg-[color-mix(in_srgb,var(--brand-accent,#f97316)_70%,#0f172a)]"
                                }, void 0, false, {
                                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs uppercase tracking-[0.08em] text-slate-300",
                                            children: tenantName ?? 'Tenant'
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base font-semibold text-white",
                                            children: "Kitchen CPQ"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "mt-2 space-y-1 px-3",
                            children: allowedItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkComponent, {
                                    href: item.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-100 hover:bg-white/10', 'transition-colors'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                item.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 32
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        item.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-300",
                                            children: item.badge
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                            lineNumber: 91,
                                            columnNumber: 31
                                        }, this) : null
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-auto hidden px-3 pb-4 pt-6 lg:block",
                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: user.name
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    user.email ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-300",
                                        children: user.email
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                        lineNumber: 99,
                                        columnNumber: 31
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-400",
                                        children: user.roles.join(', ')
                                    }, void 0, false, {
                                        fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-screen flex-1 flex-col lg:pl-64",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            className: "sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-[var(--brand-surface,#ffffff)]/95 px-4 py-3 backdrop-blur",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "rounded-md border border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] px-2 py-1 text-sm font-semibold text-[var(--brand-primary,#0f172a)] lg:hidden",
                                            onClick: ()=>setOpen((prev)=>!prev),
                                            children: open ? 'Close' : 'Menu'
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden text-sm font-semibold text-[var(--brand-primary,#0f172a)] sm:block",
                                            children: tenantName ?? 'Kitchen CPQ'
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        topbarContent,
                                        onSignOut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            onClick: onSignOut,
                                            className: "hidden sm:inline-flex",
                                            children: "Sign out"
                                        }, void 0, false, {
                                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1 bg-[var(--brand-surface-muted,#f8fafc)] px-4 pb-10 pt-6",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/layout/AppShell.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(AppShell, "EyPiOFTJi1CIEGKbeHrhXQHXZBQ=");
_c1 = AppShell;
var _c, _c1;
__turbopack_context__.k.register(_c, "DefaultLink");
__turbopack_context__.k.register(_c1, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
function SectionHeader({ label, title, description, actions, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs uppercase tracking-[0.08em] text-slate-500",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx",
                        lineNumber: 16,
                        columnNumber: 18
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-semibold text-[var(--brand-primary,#0f172a)]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-600 max-w-2xl",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx",
                        lineNumber: 18,
                        columnNumber: 24
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            actions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: actions
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx",
                lineNumber: 20,
                columnNumber: 18
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/layout/ThreePane.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreePaneLayout",
    ()=>ThreePaneLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
function ThreePaneLayout({ left, center, right, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('grid gap-4 lg:grid-cols-[320px_1fr_360px] xl:grid-cols-[360px_1fr_400px]', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: left
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/layout/ThreePane.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: center
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/layout/ThreePane.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: right
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/layout/ThreePane.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui-kit/src/components/layout/ThreePane.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ThreePaneLayout;
var _c;
__turbopack_context__.k.register(_c, "ThreePaneLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/primitives/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
function Card({ title, subtitle, actions, className, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-xl border border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-[var(--brand-surface,#ffffff)] shadow-sm', className),
        children: [
            (title || actions) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-2 border-b border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-[var(--brand-primary,#0f172a)]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/packages/ui-kit/src/components/primitives/Card.tsx",
                                lineNumber: 22,
                                columnNumber: 22
                            }, this) : null,
                            subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-slate-500",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/packages/ui-kit/src/components/primitives/Card.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/ui-kit/src/components/primitives/Card.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    actions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: actions
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/primitives/Card.tsx",
                        lineNumber: 25,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui-kit/src/components/primitives/Card.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 text-sm text-slate-800",
                children: children
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/primitives/Card.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui-kit/src/components/primitives/Card.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/primitives/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
const toneClasses = {
    neutral: 'bg-slate-100 text-slate-800 border border-slate-200',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    warning: 'bg-amber-50 text-amber-800 border border-amber-100',
    error: 'bg-red-50 text-red-700 border border-red-100',
    info: 'bg-blue-50 text-blue-700 border border-blue-100'
};
function Badge({ tone = 'neutral', className, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold', toneClasses[tone], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/primitives/Badge.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/primitives/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
function Input({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full rounded-md border border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-white px-3 py-2 text-sm text-[var(--brand-primary,#0f172a)] shadow-inner focus:border-[var(--brand-accent,#2563eb)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-accent,#2563eb)_40%,transparent)]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/primitives/Input.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/primitives/TextArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextArea",
    ()=>TextArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
function TextArea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full rounded-md border border-[color-mix(in_srgb,var(--brand-border-subtle,#e2e8f0)_80%,transparent)] bg-white px-3 py-2 text-sm text-[var(--brand-primary,#0f172a)] shadow-inner focus:border-[var(--brand-accent,#2563eb)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand-accent,#2563eb)_40%,transparent)]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/primitives/TextArea.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = TextArea;
var _c;
__turbopack_context__.k.register(_c, "TextArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/primitives/Skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('animate-pulse rounded-md bg-slate-200', className)
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/primitives/Skeleton.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Skeleton;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/data/DataTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$table$40$8$2e$21$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-table@8.21.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$table$2d$core$40$8$2e$21$2e$3$2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+table-core@8.21.3/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DataTable({ data, columns, loading, emptyState, onRowClick, dense }) {
    _s();
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$table$40$8$2e$21$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$table$2d$core$40$8$2e$21$2e$3$2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])()
    });
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600",
            children: "Loading…"
        }, void 0, false, {
            fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
            lineNumber: 20,
            columnNumber: 12
        }, this);
    }
    if (!data.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500",
            children: emptyState ?? 'No records found.'
        }, void 0, false, {
            fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full border-collapse text-left text-sm', dense ? 'text-xs' : 'text-sm'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-50 text-xs uppercase tracking-wide text-slate-500",
                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-3 py-2",
                                    children: header.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$table$40$8$2e$21$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                }, header.id, false, {
                                    fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this))
                        }, headerGroup.id, false, {
                            fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "divide-y divide-slate-100",
                    children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('hover:bg-slate-50', onRowClick ? 'cursor-pointer' : ''),
                            onClick: ()=>onRowClick ? onRowClick(row.original) : undefined,
                            children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-3 py-2 align-middle",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$table$40$8$2e$21$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                }, cell.id, false, {
                                    fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this))
                        }, row.id, false, {
                            fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/data/DataTable.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(DataTable, "+qfJc9U8evODZQ8bBg9G2KVouAc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$table$40$8$2e$21$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = DataTable;
var _c;
__turbopack_context__.k.register(_c, "DataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/cpq/MarginBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstraintBadge",
    ()=>ConstraintBadge,
    "MarginBadge",
    ()=>MarginBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Badge.tsx [app-client] (ecmascript)");
;
;
function MarginBadge({ value }) {
    let tone = 'neutral';
    if (value >= 22) tone = 'success';
    else if (value >= 15) tone = 'warning';
    else tone = 'error';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        tone: tone,
        children: [
            value.toFixed(0),
            "% margin"
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui-kit/src/components/cpq/MarginBadge.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = MarginBadge;
function ConstraintBadge({ severity, count, label }) {
    const tone = severity === 'error' ? 'error' : severity === 'warning' ? 'warning' : 'success';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        tone: tone,
        children: label ?? `${count ?? 0} constraints`
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/cpq/MarginBadge.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c1 = ConstraintBadge;
var _c, _c1;
__turbopack_context__.k.register(_c, "MarginBadge");
__turbopack_context__.k.register(_c1, "ConstraintBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/cpq/QuoteTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteTable",
    ()=>QuoteTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$data$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/data/DataTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/cpq/MarginBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const statusTone = {
    draft: 'neutral',
    submitted: 'info',
    approved: 'success',
    rejected: 'error',
    expired: 'warning'
};
function QuoteTable({ quotes, loading = false, onSelect }) {
    _s();
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuoteTable.useMemo[columns]": ()=>[
                {
                    accessorKey: 'id',
                    header: 'Quote'
                },
                {
                    accessorKey: 'projectId',
                    header: 'Project'
                },
                {
                    accessorKey: 'status',
                    header: 'Status',
                    cell: {
                        "QuoteTable.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                tone: statusTone[row.original.status],
                                children: row.original.status
                            }, void 0, false, {
                                fileName: "[project]/packages/ui-kit/src/components/cpq/QuoteTable.tsx",
                                lineNumber: 32,
                                columnNumber: 28
                            }, this)
                    }["QuoteTable.useMemo[columns]"]
                },
                {
                    accessorKey: 'total',
                    header: 'Amount',
                    cell: {
                        "QuoteTable.useMemo[columns]": ({ row })=>`${row.original.currency} ${row.original.total.toFixed(2)}`
                    }["QuoteTable.useMemo[columns]"]
                },
                {
                    accessorKey: 'marginPercent',
                    header: 'Margin',
                    cell: {
                        "QuoteTable.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarginBadge"], {
                                value: row.original.marginPercent
                            }, void 0, false, {
                                fileName: "[project]/packages/ui-kit/src/components/cpq/QuoteTable.tsx",
                                lineNumber: 42,
                                columnNumber: 28
                            }, this)
                    }["QuoteTable.useMemo[columns]"]
                },
                {
                    accessorKey: 'updatedAt',
                    header: 'Updated',
                    cell: {
                        "QuoteTable.useMemo[columns]": ({ row })=>new Date(row.original.updatedAt).toLocaleString()
                    }["QuoteTable.useMemo[columns]"]
                }
            ]
    }["QuoteTable.useMemo[columns]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$data$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
        data: quotes,
        columns: columns,
        loading: loading,
        onRowClick: (row)=>onSelect?.(row.id)
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/cpq/QuoteTable.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
_s(QuoteTable, "erkfbBpUuAY09jdvhSOqc0XsEHQ=");
_c = QuoteTable;
var _c;
__turbopack_context__.k.register(_c, "QuoteTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/cpq/CpqSummaryBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CpqSummaryBar",
    ()=>CpqSummaryBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/cpq/MarginBadge.tsx [app-client] (ecmascript)");
;
;
function CpqSummaryBar({ state }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg font-semibold text-[var(--brand-primary,#0f172a)]",
                children: [
                    state.currency,
                    " ",
                    state.total.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui-kit/src/components/cpq/CpqSummaryBar.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-slate-500",
                children: [
                    "Tax ",
                    state.currency,
                    " ",
                    state.tax.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui-kit/src/components/cpq/CpqSummaryBar.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarginBadge"], {
                value: state.marginPercent
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/cpq/CpqSummaryBar.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstraintBadge"], {
                severity: state.hasBlockingErrors ? 'error' : 'ok',
                label: state.hasBlockingErrors ? 'Blocking constraints' : 'Constraints clear'
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/cpq/CpqSummaryBar.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui-kit/src/components/cpq/CpqSummaryBar.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = CpqSummaryBar;
var _c;
__turbopack_context__.k.register(_c, "CpqSummaryBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/auth/LoginForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function LoginForm({ defaultEmail = '', defaultTenantId = '', loading = false, error, onSubmit }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultEmail);
    const [tenantId, setTenantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTenantId);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        await onSubmit({
            email,
            tenantId
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500",
                        children: "Kitchen CPQ"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-slate-900",
                        children: "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-slate-700",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "w-full rounded-md border border-slate-200 px-3 py-2 text-sm",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        type: "email",
                        name: "email",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-slate-700",
                        children: "Tenant"
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "w-full rounded-md border border-slate-200 px-3 py-2 text-sm",
                        value: tenantId,
                        onChange: (e)=>setTenantId(e.target.value),
                        name: "tenant",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                lineNumber: 56,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                className: "w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60",
                children: loading ? 'Signing in…' : 'Sign in'
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-500",
                children: "Issues a short-lived JWT from the API and stores it in an auth_token cookie for tRPC calls."
            }, void 0, false, {
                fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/ui-kit/src/components/auth/LoginForm.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "czXIwR8fSqypxNWsF88Yel72oh0=");
_c = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/manufacturing/BomTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BomTable",
    ()=>BomTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$data$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/data/DataTable.tsx [app-client] (ecmascript)");
;
;
const columns = [
    {
        accessorKey: 'sku',
        header: 'SKU'
    },
    {
        accessorKey: 'description',
        header: 'Description'
    },
    {
        accessorKey: 'quantity',
        header: 'Qty',
        cell: ({ getValue })=>Number(getValue()).toFixed(0)
    },
    {
        accessorKey: 'uom',
        header: 'UoM'
    }
];
function BomTable({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$data$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
        data: items,
        columns: columns,
        dense: true,
        emptyState: "No BOM items"
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/manufacturing/BomTable.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = BomTable;
var _c;
__turbopack_context__.k.register(_c, "BomTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CncJobCard",
    ()=>CncJobCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Card.tsx [app-client] (ecmascript)");
;
;
;
const statusTone = {
    pending: 'warning',
    scheduled: 'info',
    in_progress: 'info',
    completed: 'success',
    failed: 'error'
};
function CncJobCard({ job }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        title: `Job ${job.id}`,
        subtitle: `Project ${job.projectId}`,
        actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            tone: statusTone[job.status],
            children: job.status.replace('_', ' ')
        }, void 0, false, {
            fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
            lineNumber: 18,
            columnNumber: 16
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
            className: "grid grid-cols-2 gap-3 text-xs text-slate-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                            className: "text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Catalog"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            className: "font-semibold text-[var(--brand-primary,#0f172a)]",
                            children: job.catalogVersion.id
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                            className: "text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Updated"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            className: "font-semibold text-[var(--brand-primary,#0f172a)]",
                            children: new Date(job.updatedAt).toLocaleTimeString()
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                job.notes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                            className: "text-[11px] uppercase tracking-wide text-slate-500",
                            children: "Notes"
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            className: "text-slate-700",
                            children: job.notes
                        }, void 0, false, {
                            fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = CncJobCard;
var _c;
__turbopack_context__.k.register(_c, "CncJobCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/components/charts/KpiCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KpiCard",
    ()=>KpiCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Card.tsx [app-client] (ecmascript)");
;
;
function KpiCard({ label, value, delta, trend }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        title: label,
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl font-semibold text-[var(--brand-primary,#0f172a)]",
                    children: value
                }, void 0, false, {
                    fileName: "[project]/packages/ui-kit/src/components/charts/KpiCard.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                delta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-slate-500",
                    children: delta
                }, void 0, false, {
                    fileName: "[project]/packages/ui-kit/src/components/charts/KpiCard.tsx",
                    lineNumber: 17,
                    columnNumber: 18
                }, this) : null,
                trend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniTrend, {
                    data: trend
                }, void 0, false, {
                    fileName: "[project]/packages/ui-kit/src/components/charts/KpiCard.tsx",
                    lineNumber: 18,
                    columnNumber: 18
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/packages/ui-kit/src/components/charts/KpiCard.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/charts/KpiCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = KpiCard;
function MiniTrend({ data }) {
    const max = Math.max(...data.map((d)=>d.value), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-end gap-1",
        children: data.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full rounded-sm bg-[var(--brand-accent,#f97316)]",
                    style: {
                        height: `${point.value / max * 48 || 4}px`
                    },
                    title: `${point.label}: ${point.value}`
                }, void 0, false, {
                    fileName: "[project]/packages/ui-kit/src/components/charts/KpiCard.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, point.label, false, {
                fileName: "[project]/packages/ui-kit/src/components/charts/KpiCard.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/packages/ui-kit/src/components/charts/KpiCard.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = MiniTrend;
var _c, _c1;
__turbopack_context__.k.register(_c, "KpiCard");
__turbopack_context__.k.register(_c1, "MiniTrend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui-kit/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$Shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/layout/Shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/layout/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$ThreePane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/layout/ThreePane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$TextArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/TextArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$data$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/data/DataTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$QuoteTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/cpq/QuoteTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/cpq/MarginBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$CpqSummaryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/cpq/CpqSummaryBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$auth$2f$LoginForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/auth/LoginForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$manufacturing$2f$BomTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/manufacturing/BomTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$manufacturing$2f$CncJobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/manufacturing/CncJobCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$charts$2f$KpiCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/charts/KpiCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$theme$2f$TenantThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/theme/TenantThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/utils/cn.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/frontend/src/lib/nav.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mainNavItems",
    ()=>mainNavItems
]);
const mainNavItems = [
    {
        label: 'Dashboard',
        href: '/cpq/dashboard',
        roles: [
            'dealer',
            'admin'
        ]
    },
    {
        label: 'Quotes',
        href: '/cpq/quotes',
        roles: [
            'dealer',
            'admin'
        ]
    },
    {
        label: 'Configure',
        href: '/cpq/configure/demo-project',
        roles: [
            'dealer'
        ]
    },
    {
        label: 'Catalog',
        href: '/catalog',
        roles: [
            'catalog_engineer',
            'admin'
        ]
    },
    {
        label: 'Manufacturing',
        href: '/manufacturing',
        roles: [
            'manufacturing_engineer',
            'admin'
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/frontend/src/components/AppChrome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppChrome",
    ()=>AppChrome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/layout/AppShell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/lib/trpc-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/lib/nav.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AppChrome({ children }) {
    _s();
    const { data: tenant, isLoading: tenantLoading } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trpc"].tenancy.getCurrentTenant.useQuery();
    const { data: user, isLoading: userLoading } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trpc"].auth.getCurrentUser.useQuery();
    if (tenantLoading || userLoading || !tenant || !user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50 p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-10 w-40"
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/src/components/AppChrome.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-32 w-full"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/src/components/AppChrome.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-32 w-full"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/src/components/AppChrome.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-32 w-full"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/src/components/AppChrome.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/src/components/AppChrome.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/frontend/src/components/AppChrome.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$AppShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShell"], {
        navItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$nav$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainNavItems"],
        tenantName: tenant.displayName,
        branding: tenant.branding,
        user: {
            name: user.displayName,
            email: user.email,
            roles: user.roles
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/frontend/src/components/AppChrome.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(AppChrome, "GI63dxxep+mdmfCdDLJc01CiS8I=");
_c = AppChrome;
var _c;
__turbopack_context__.k.register(_c, "AppChrome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteDetailClient",
    ()=>QuoteDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/3d-engine/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$engine$2f$createKitchenScene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/3d-engine/src/engine/createKitchenScene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$engine$2f$updateConfiguration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/3d-engine/src/engine/updateConfiguration.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/primitives/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/cpq/MarginBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$CpqSummaryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/cpq/CpqSummaryBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$data$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/data/DataTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/layout/SectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$ThreePane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui-kit/src/components/layout/ThreePane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/lib/trpc-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$components$2f$AppChrome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/components/AppChrome.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function QuoteDetailClient({ quote, state }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const constraintSummary = state.constraints ?? undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteDetailClient.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas || sceneRef.current) return;
            ({
                "QuoteDetailClient.useEffect": async ()=>{
                    sceneRef.current = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$engine$2f$createKitchenScene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createKitchenScene"])(canvas, state);
                }
            })["QuoteDetailClient.useEffect"]();
            return ({
                "QuoteDetailClient.useEffect": ()=>{
                    sceneRef.current?.dispose?.();
                    sceneRef.current = null;
                }
            })["QuoteDetailClient.useEffect"];
        }
    }["QuoteDetailClient.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuoteDetailClient.useEffect": ()=>{
            if (!sceneRef.current) return;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$3d$2d$engine$2f$src$2f$engine$2f$updateConfiguration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSceneFromState"])(sceneRef.current, state);
        }
    }["QuoteDetailClient.useEffect"], [
        state
    ]);
    const initialSummary = {
        total: quote.total,
        tax: quote.tax,
        marginPercent: quote.marginPercent,
        currency: quote.currency,
        hasBlockingErrors: constraintSummary?.hasBlockingErrors ?? false
    };
    const { data: summary } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trpc"].ui.getCpqSummaryBar.useQuery({
        projectId: quote.projectId
    }, {
        initialData: initialSummary,
        refetchInterval: 4000
    });
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuoteDetailClient.useMemo[columns]": ()=>[
                {
                    accessorKey: 'sku',
                    header: 'SKU'
                },
                {
                    accessorKey: 'description',
                    header: 'Description'
                },
                {
                    accessorKey: 'quantity',
                    header: 'Qty',
                    cell: {
                        "QuoteDetailClient.useMemo[columns]": ({ row })=>row.original.quantity.toFixed(0)
                    }["QuoteDetailClient.useMemo[columns]"]
                },
                {
                    accessorKey: 'unitPrice',
                    header: 'Unit',
                    cell: {
                        "QuoteDetailClient.useMemo[columns]": ({ row })=>row.original.unitPrice.toFixed(2)
                    }["QuoteDetailClient.useMemo[columns]"]
                },
                {
                    accessorKey: 'marginPercent',
                    header: 'Margin',
                    cell: {
                        "QuoteDetailClient.useMemo[columns]": ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarginBadge"], {
                                value: row.original.marginPercent
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                lineNumber: 71,
                                columnNumber: 28
                            }, this)
                    }["QuoteDetailClient.useMemo[columns]"]
                }
            ]
    }["QuoteDetailClient.useMemo[columns]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$components$2f$AppChrome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppChrome"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$SectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                    label: "Quote",
                    title: `Quote ${quote.id}`,
                    description: `Project ${quote.projectId} · Catalog ${quote.catalogVersion.id}`,
                    actions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: ()=>router.push('/cpq/quotes'),
                                children: "Back to quotes"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                children: "Send for approval"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$layout$2f$ThreePane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThreePaneLayout"], {
                    left: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Metadata",
                                subtitle: "Scenario tabs placeholder",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    className: "space-y-2 text-sm text-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    className: "font-semibold capitalize",
                                                    children: quote.status
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Margin"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarginBadge"], {
                                                        value: quote.marginPercent
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 23
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    children: "Updated"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: new Date(quote.updatedAt).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Constraints",
                                subtitle: "From kernel validation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$MarginBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstraintBadge"], {
                                        severity: constraintSummary?.hasBlockingErrors ? 'error' : 'ok',
                                        count: constraintSummary?.violations?.length ?? 0,
                                        label: constraintSummary?.hasBlockingErrors ? 'Blocking' : 'No blockers'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, void 0),
                                    constraintSummary?.violations?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1 text-xs text-red-700",
                                        children: constraintSummary.violations.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: v.message
                                            }, v.code, false, {
                                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                                lineNumber: 124,
                                                columnNumber: 23
                                            }, void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                        lineNumber: 122,
                                        columnNumber: 19
                                    }, void 0) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, void 0),
                            summary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Summary",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$cpq$2f$CpqSummaryBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CpqSummaryBar"], {
                                    state: summary
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                    lineNumber: 131,
                                    columnNumber: 19
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                lineNumber: 130,
                                columnNumber: 17
                            }, void 0) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, void 0),
                    center: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        title: "3D preview",
                        subtitle: "Read-only from parametric state",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            width: 800,
                            height: 480,
                            className: "h-[360px] w-full rounded-lg border border-slate-200"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                            lineNumber: 138,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, void 0),
                    right: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Line items",
                                subtitle: "Editable in CPQ service",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$data$2f$DataTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                                    data: quote.lineItems,
                                    columns: columns,
                                    dense: true
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2d$kit$2f$src$2f$components$2f$primitives$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Actions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm text-slate-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "• Price now"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "• Send for approval"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "• Hand off to manufacturing"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/cpq/quotes/[id]/QuoteDetailClient.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(QuoteDetailClient, "dQYqrlBmGdEB8BkRJeKoXnuiVvs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = QuoteDetailClient;
var _c;
__turbopack_context__.k.register(_c, "QuoteDetailClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1331f69d._.js.map