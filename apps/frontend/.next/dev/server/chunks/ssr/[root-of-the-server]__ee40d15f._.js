module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/frontend/app/cpq/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/frontend/app/cpq/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/libs/shared-trpc/src/client/createClient.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTrpcClient",
    ()=>createTrpcClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$10$2e$45$2e$2_$40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+client@10.45.2_@trpc+server@10.45.2/node_modules/@trpc/client/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$10$2e$45$2e$2_$40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$httpBatchLink$2d$d0f9eac9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__h__as__httpBatchLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+client@10.45.2_@trpc+server@10.45.2/node_modules/@trpc/client/dist/httpBatchLink-d0f9eac9.mjs [app-rsc] (ecmascript) <export h as httpBatchLink>");
;
const createTrpcClient = (options = {})=>{
    const url = `${options.baseUrl ?? 'http://localhost:3001'}/trpc`;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$10$2e$45$2e$2_$40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createTRPCProxyClient"])({
        transformer: undefined,
        links: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$10$2e$45$2e$2_$40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$httpBatchLink$2d$d0f9eac9$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__h__as__httpBatchLink$3e$__["httpBatchLink"])({
                url,
                fetch: (input, init)=>fetch(input, {
                        ...init,
                        credentials: 'include'
                    }),
                headers () {
                    // If running in the browser and a token cookie exists, attach Authorization for parity with server-side usage.
                    const cookieHeader = typeof document !== 'undefined' ? document.cookie.split(';').map((c)=>c.trim()).find((c)=>c.startsWith('auth_token=')) : undefined;
                    const token = cookieHeader?.split('=')[1];
                    return token ? {
                        ...options.headers,
                        authorization: `Bearer ${token}`
                    } : options.headers ?? {};
                }
            })
        ]
    });
};
}),
"[project]/libs/shared-trpc/src/trpc.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCallerFactory",
    ()=>createCallerFactory,
    "mergeRouters",
    ()=>mergeRouters,
    "protectedProcedure",
    ()=>protectedProcedure,
    "publicProcedure",
    ()=>publicProcedure,
    "router",
    ()=>router
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@10.45.2/node_modules/@trpc/server/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$TRPCError$2d$98d44758$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__TRPCError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@10.45.2/node_modules/@trpc/server/dist/TRPCError-98d44758.mjs [app-rsc] (ecmascript) <export T as TRPCError>");
;
const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initTRPC"].context().create();
const enforceAuth = t.middleware(({ ctx, next })=>{
    if (!ctx?.userId || !ctx?.tenantId) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$TRPCError$2d$98d44758$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__TRPCError$3e$__["TRPCError"]({
            code: 'UNAUTHORIZED',
            message: 'Missing auth context'
        });
    }
    return next({
        ctx
    });
});
const router = t.router;
const mergeRouters = t.mergeRouters;
const publicProcedure = t.procedure;
const protectedProcedure = t.procedure.use(enforceAuth);
const createCallerFactory = t.createCallerFactory;
}),
"[project]/libs/shared-validation/src/config.schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigSchema",
    ()=>ConfigSchema,
    "NodeEnvSchema",
    ()=>NodeEnvSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const NodeEnvSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'development',
    'production',
    'test',
    'staging'
]);
const ConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    nodeEnv: NodeEnvSchema.default('development'),
    database: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        host: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('localhost'),
        port: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(5432),
        user: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('postgres'),
        password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('postgres'),
        database: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('kitchen_cpq')
    }),
    auth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        jwtSecret: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('dev-secret'),
        jwtIssuer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('kitchen-cpq-platform'),
        jwtAudience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('kitchen-cpq-clients')
    })
});
}),
"[project]/libs/shared-validation/src/cabinet.schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cabinetFieldUpdateSchema",
    ()=>cabinetFieldUpdateSchema,
    "mutableCabinetKeySchema",
    ()=>mutableCabinetKeySchema,
    "parseCabinetField",
    ()=>parseCabinetField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const mutableCabinetKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'position',
    'elevation',
    'width',
    'depth',
    'height',
    'rotationDeg',
    'sku',
    'kind'
]);
const numericField = (min, max)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().finite().min(min).max(max);
const cabinetFieldUpdateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('key', [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('position'),
        value: numericField(0, 20_000)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('elevation'),
        value: numericField(0, 3_000)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('width'),
        value: numericField(100, 3_000)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('depth'),
        value: numericField(100, 1_200)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('height'),
        value: numericField(100, 3_000)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('rotationDeg'),
        value: numericField(-360, 360)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('sku'),
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(128)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        key: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('kind'),
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(64)
    })
]);
const parseCabinetField = (key, value)=>{
    const parsed = cabinetFieldUpdateSchema.parse({
        key,
        value
    });
    return parsed.value;
};
}),
"[project]/libs/shared-validation/src/catalog.schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CatalogPayloadSchema",
    ()=>CatalogPayloadSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const CatalogPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional(),
    families: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).optional(),
    skus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).optional(),
    options: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).optional()
}).passthrough();
}),
"[project]/libs/shared-validation/src/ai.schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentToolCallSchema",
    ()=>AgentToolCallSchema,
    "CopilotChatRequestSchema",
    ()=>CopilotChatRequestSchema,
    "CopilotMessageSchema",
    ()=>CopilotMessageSchema,
    "CopilotPlanResponseSchema",
    ()=>CopilotPlanResponseSchema,
    "ParamDeltaSchema",
    ()=>ParamDeltaSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
;
const CopilotMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const ParamDeltaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
    ])
});
const AgentToolCallSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    toolName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'paramEngine.applyDelta',
        'optimizer.solveLayout',
        'cadService.generateCadMacro',
        'pricingService.simulateChange'
    ]),
    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'pending',
        'running',
        'succeeded',
        'failed'
    ]),
    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown().optional(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const CopilotChatRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    history: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(CopilotMessageSchema).optional(),
    goals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown().optional(),
    parametricState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown().optional()
});
const CopilotPlanResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    reply: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    proposedDeltas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ParamDeltaSchema).optional(),
    toolCalls: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(AgentToolCallSchema).default([]),
    validatedState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown().optional(),
    constraintSummary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown().optional(),
    warnings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
}),
"[project]/libs/shared-validation/src/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$config$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-validation/src/config.schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$cabinet$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-validation/src/cabinet.schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$catalog$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-validation/src/catalog.schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$ai$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-validation/src/ai.schema.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/libs/shared-trpc/src/routers/index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiRouter",
    ()=>aiRouter,
    "appRouter",
    ()=>appRouter,
    "authRouter",
    ()=>authRouter,
    "catalogAdminRouter",
    ()=>catalogAdminRouter,
    "configuratorRouter",
    ()=>configuratorRouter,
    "copilotRouter",
    ()=>copilotRouter,
    "cpqRouter",
    ()=>cpqRouter,
    "reportingRouter",
    ()=>reportingRouter,
    "tenancyRouter",
    ()=>tenancyRouter,
    "uiRouter",
    ()=>uiRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@10.45.2/node_modules/@trpc/server/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$TRPCError$2d$98d44758$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__TRPCError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@10.45.2/node_modules/@trpc/server/dist/TRPCError-98d44758.mjs [app-rsc] (ecmascript) <export T as TRPCError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@10.45.2/node_modules/@trpc/server/dist/observable/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2d$ade1bad8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__observable$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+server@10.45.2/node_modules/@trpc/server/dist/observable-ade1bad8.mjs [app-rsc] (ecmascript) <export o as observable>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-trpc/src/trpc.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/libs/shared-validation/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$cabinet$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-validation/src/cabinet.schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$ai$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-validation/src/ai.schema.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const nowIso = ()=>new Date().toISOString();
const AI_BASE = process.env.AI_AGENT_URL ?? 'http://localhost:3017';
const presetBranding = {
    default: {
        primaryColor: '#0f172a',
        accentColor: '#2563eb',
        surfaceColor: '#ffffff',
        subtleBorderColor: '#e2e8f0',
        navGradient: 'linear-gradient(180deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)',
        constraintTokens: {
            ok: '#16a34a',
            warning: '#f59e0b',
            error: '#dc2626'
        },
        preset: 'default'
    },
    tangerine: {
        primaryColor: '#0f172a',
        accentColor: '#f97316',
        surfaceColor: '#0b1220',
        subtleBorderColor: '#1f2937',
        navGradient: 'linear-gradient(180deg, #0b1220 0%, #111827 50%, #0b1220 100%)',
        constraintTokens: {
            ok: '#22c55e',
            warning: '#fbbf24',
            error: '#ef4444'
        },
        preset: 'tangerine',
        logoUrl: '/brand/tenant-logo.svg'
    },
    brutalist: {
        primaryColor: '#111111',
        accentColor: '#fde047',
        surfaceColor: '#ffffff',
        subtleBorderColor: '#111111',
        navGradient: 'linear-gradient(180deg, #000000 0%, #1f1f1f 60%, #0a0a0a 100%)',
        constraintTokens: {
            ok: '#15803d',
            warning: '#ca8a04',
            error: '#dc2626'
        },
        preset: 'brutalist'
    }
};
const buildBranding = (preset = 'tangerine')=>({
        ...presetBranding[preset]
    });
const resolveBaseEntities = (ctx)=>{
    const tenantId = ctx.tenantId ?? 'tenant-demo';
    const userId = ctx.userId ?? 'user-demo';
    const tenant = {
        id: tenantId,
        slug: 'tenant-demo',
        displayName: 'Demo Tenant',
        createdAt: nowIso(),
        isActive: true,
        branding: buildBranding('tangerine')
    };
    const user = {
        id: userId,
        tenantId,
        email: 'demo@example.com',
        displayName: 'Demo User',
        roles: [
            'dealer',
            'catalog_engineer',
            'manufacturing_engineer',
            'admin'
        ],
        createdAt: nowIso(),
        lastLoginAt: nowIso()
    };
    const session = ctx.session ?? {
        id: 'session-demo',
        userId,
        tenantId,
        issuedAt: nowIso(),
        expiresAt: nowIso(),
        jwt: 'stub.jwt.token'
    };
    return {
        tenant,
        user,
        session
    };
};
const baseConstraintSummary = {
    hasBlockingErrors: false,
    violations: []
};
const buildParametricState = (projectId, tenantId)=>({
        projectId,
        tenantId,
        catalogVersionId: 'catalog-001',
        room: {
            id: 'room-1',
            perimeter: [
                {
                    id: 'wall-1',
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 4000,
                        y: 0
                    },
                    height: 2700,
                    thickness: 150
                },
                {
                    id: 'wall-2',
                    start: {
                        x: 4000,
                        y: 0
                    },
                    end: {
                        x: 4000,
                        y: 3200
                    },
                    height: 2700,
                    thickness: 150
                }
            ],
            openings: [],
            ceilingHeight: 2700
        },
        cabinets: [
            {
                id: 'cab-1',
                sku: 'BASE-30',
                kind: 'base',
                roomId: 'room-1',
                wallId: 'wall-1',
                position: 0,
                elevation: 0,
                width: 762,
                depth: 610,
                height: 914,
                rotationDeg: 0,
                parameters: {}
            }
        ],
        constraints: baseConstraintSummary,
        updatedAt: nowIso()
    });
const validateParameterValue = (value)=>{
    if (typeof value === 'string' || typeof value === 'boolean') return value;
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$TRPCError$2d$98d44758$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__TRPCError$3e$__["TRPCError"]({
        code: 'BAD_REQUEST',
        message: 'Invalid parameter value'
    });
};
const applyDeltas = (state, deltas)=>{
    const next = {
        ...state,
        cabinets: state.cabinets.map((c)=>({
                ...c
            })),
        updatedAt: nowIso()
    };
    for (const delta of deltas){
        if (delta.path.startsWith('cabinets.')) {
            const [, cabinetId, ...rest] = delta.path.split('.');
            const target = next.cabinets.find((c)=>c.id === cabinetId);
            if (!target || rest.length === 0) continue;
            const [first, ...paramParts] = rest;
            if (first === 'parameters') {
                const paramKey = paramParts.join('.');
                if (paramKey) {
                    target.parameters[paramKey] = validateParameterValue(delta.value);
                }
                continue;
            }
            if (first && __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$cabinet$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mutableCabinetKeySchema"].safeParse(first).success) {
                const key = first;
                try {
                    const validated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$cabinet$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCabinetField"])(key, delta.value);
                    target[key] = validated;
                } catch (err) {
                    if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$ZodError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodError"]) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$TRPCError$2d$98d44758$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__TRPCError$3e$__["TRPCError"]({
                            code: 'BAD_REQUEST',
                            message: err.errors.map((e)=>e.message).join('; ')
                        });
                    }
                    throw err;
                }
            }
        }
    }
    return next;
};
const createQuoteSummary = (state)=>{
    const subtotal = state.cabinets.reduce((acc, cabinet)=>acc + cabinet.width * 0.5, 0);
    const tax = subtotal * 0.07;
    const total = subtotal + tax;
    const catalogVersion = {
        id: state.catalogVersionId,
        hash: 'demo-hash'
    };
    return {
        id: `quote-${state.projectId}`,
        projectId: state.projectId,
        tenantId: state.tenantId,
        status: 'draft',
        currency: 'USD',
        subtotal,
        tax,
        total,
        marginPercent: 22,
        createdAt: nowIso(),
        updatedAt: nowIso(),
        catalogVersion,
        lineItems: state.cabinets.map((cabinet)=>({
                id: cabinet.id,
                sku: cabinet.sku,
                description: `Cabinet ${cabinet.sku}`,
                quantity: 1,
                unitPrice: cabinet.width * 0.5,
                listPrice: cabinet.width * 0.5,
                netPrice: cabinet.width * 0.5,
                currency: 'USD',
                marginPercent: 22,
                configurationRef: {
                    projectId: state.projectId,
                    cabinetInstanceId: cabinet.id
                }
            }))
    };
};
const toPriceSnapshot = (quote)=>({
        currency: quote.currency,
        total: quote.total,
        subtotal: quote.subtotal,
        tax: quote.tax,
        marginPercent: quote.marginPercent,
        updatedAt: quote.updatedAt
    });
const buildQuoteList = (tenantId)=>{
    const projects = [
        {
            id: 'proj-galley',
            status: 'draft',
            margin: 0.22,
            factor: 1
        },
        {
            id: 'proj-island',
            status: 'submitted',
            margin: 0.18,
            factor: 1.2
        },
        {
            id: 'proj-builder',
            status: 'approved',
            margin: 0.24,
            factor: 1.4
        },
        {
            id: 'proj-manufacturing',
            status: 'submitted',
            margin: 0.2,
            factor: 1.1
        }
    ];
    return projects.map((p, idx)=>{
        const base = buildParametricState(p.id, tenantId);
        const quote = createQuoteSummary({
            ...base,
            projectId: p.id,
            updatedAt: nowIso()
        });
        const multiplier = p.factor + idx * 0.05;
        return {
            ...quote,
            status: p.status ?? 'draft',
            subtotal: quote.subtotal * multiplier,
            tax: quote.tax * multiplier,
            total: quote.total * multiplier,
            marginPercent: Math.round(p.margin * 100),
            updatedAt: nowIso()
        };
    });
};
const authRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    getSession: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publicProcedure"].query(({ ctx })=>{
        const { session } = resolveBaseEntities(ctx);
        return session;
    }),
    getCurrentUser: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].query(({ ctx })=>resolveBaseEntities(ctx).user),
    loginWithOAuthCallback: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })).mutation(({ ctx, input })=>{
        const { session, user, tenant } = resolveBaseEntities(ctx);
        return {
            ...session,
            id: `sess-${input.code}`,
            userId: user.id,
            tenantId: tenant.id,
            issuedAt: nowIso(),
            expiresAt: nowIso(),
            jwt: `stub.jwt.${input.code}`
        };
    }),
    logout: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publicProcedure"].mutation(()=>({
            success: true
        }))
});
const tenancyRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    getCurrentTenant: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].query(({ ctx })=>{
        return resolveBaseEntities(ctx).tenant;
    }),
    listTenantsForUser: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].query(({ ctx })=>{
        return [
            resolveBaseEntities(ctx).tenant
        ];
    })
});
const configuratorRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    getSessionState: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const state = buildParametricState(input.projectId, tenant.id);
        return {
            state
        };
    }),
    mutateParameters: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        deltas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            path: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
            ])
        }))
    })).mutation(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const state = buildParametricState(input.projectId, tenant.id);
        const updated = applyDeltas(state, input.deltas);
        return {
            state: updated,
            constraintSummary: updated.constraints,
            priceDelta: {
                totalPrice: updated.cabinets.length * 1000,
                currency: 'USD'
            }
        };
    }),
    requestLayoutVariants: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        goals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom()
    })).mutation(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const baseState = buildParametricState(input.projectId, tenant.id);
        const variants = [
            {
                id: 'variant-1',
                label: 'Galley',
                state: baseState,
                objectiveScores: {
                    workTriangleScore: 0.8,
                    storageScore: 0.6,
                    budgetScore: 0.7,
                    ergonomicsScore: 0.75
                }
            },
            {
                id: 'variant-2',
                label: 'Island',
                state: {
                    ...baseState,
                    updatedAt: nowIso()
                },
                objectiveScores: {
                    workTriangleScore: 0.7,
                    storageScore: 0.7,
                    budgetScore: 0.65,
                    ergonomicsScore: 0.72
                }
            }
        ];
        return {
            variants
        };
    }),
    validateDesign: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(()=>baseConstraintSummary)
});
const cpqRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    listQuotes: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].query(({ ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        return buildQuoteList(tenant.id);
    }),
    priceDelta: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        deltas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom()).optional()
    })).mutation(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const baseState = buildParametricState(input.projectId, tenant.id);
        const targetState = input.deltas && input.deltas.length > 0 ? applyDeltas(baseState, input.deltas) : baseState;
        const baselineQuote = createQuoteSummary(baseState);
        const targetQuote = createQuoteSummary(targetState);
        const totalDelta = targetQuote.total - baselineQuote.total;
        const subtotalDelta = (targetQuote.subtotal ?? targetQuote.total) - (baselineQuote.subtotal ?? baselineQuote.total);
        return {
            baseline: toPriceSnapshot(baselineQuote),
            current: toPriceSnapshot(targetQuote),
            delta: {
                currency: targetQuote.currency,
                totalDelta,
                subtotalDelta
            }
        };
    }),
    getQuote: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        quoteId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const quotes = buildQuoteList(tenant.id);
        return quotes.find((q)=>q.id === input.quoteId) ?? null;
    }),
    getQuoteForProject: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const state = buildParametricState(input.projectId, tenant.id);
        const quotes = buildQuoteList(tenant.id);
        const existing = quotes.find((q)=>q.projectId === input.projectId);
        return existing ?? createQuoteSummary(state);
    }),
    recomputeQuote: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).mutation(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const state = buildParametricState(input.projectId, tenant.id);
        return createQuoteSummary(state);
    }),
    applyDealerAdjustments: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        quoteId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        adjustments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            lineItemId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            discountPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100)
        }))
    })).mutation(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const state = buildParametricState(input.quoteId, tenant.id);
        const baseQuote = createQuoteSummary(state);
        const discountMultiplier = input.adjustments.length > 0 ? 1 - input.adjustments[0].discountPercent / 100 : 1;
        const subtotal = baseQuote.subtotal * discountMultiplier;
        const tax = subtotal * 0.07;
        return {
            ...baseQuote,
            subtotal,
            tax,
            total: subtotal + tax,
            updatedAt: nowIso()
        };
    })
});
const catalogAdminRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    listCatalogVersions: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].query(({ ctx })=>{
        const { tenant, user } = resolveBaseEntities(ctx);
        return [
            {
                id: 'catalog-001',
                tenantId: tenant.id,
                label: 'Baseline Kitchen Catalog',
                createdAt: nowIso(),
                createdBy: user.id,
                hash: 'hash-001',
                payloadUri: 's3://catalogs/catalog-001.json'
            }
        ];
    }),
    publishCatalogDraft: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        draftId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).mutation(({ input, ctx })=>{
        const { tenant, user } = resolveBaseEntities(ctx);
        return {
            id: input.draftId,
            tenantId: tenant.id,
            label: `Published ${input.draftId}`,
            createdAt: nowIso(),
            createdBy: user.id,
            hash: `hash-${input.draftId}`,
            payloadUri: `s3://catalogs/${input.draftId}.json`
        };
    })
});
const copilotRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    startSession: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).mutation(()=>{
        return {
            sessionId: `copilot-${Date.now()}`
        };
    }),
    streamCompletion: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        messages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom())
    })).subscription(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2d$ade1bad8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__observable$3e$__["observable"])((emit)=>{
            emit.next({
                token: 'stub-token'
            });
            emit.complete();
            return ()=>undefined;
        })),
    applySuggestion: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        deltas: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].custom())
    })).mutation(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const state = buildParametricState(input.projectId, tenant.id);
        const updated = applyDeltas(state, input.deltas);
        return {
            state: updated,
            constraintSummary: updated.constraints
        };
    })
});
const uiRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    getConstraintBadge: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(()=>({
            severity: baseConstraintSummary.hasBlockingErrors ? 'error' : 'ok',
            count: baseConstraintSummary.violations.length,
            primaryMessage: baseConstraintSummary.hasBlockingErrors ? 'Blocking constraints present' : 'All constraints satisfied'
        })),
    getDashboardKpis: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].query(({ ctx })=>{
        const quotes = buildQuoteList(resolveBaseEntities(ctx).tenant.id);
        const openQuotes = quotes.filter((q)=>q.status !== 'approved').length;
        const approved = quotes.filter((q)=>q.status === 'approved').length;
        const pipelineValue = quotes.reduce((acc, q)=>acc + q.total, 0);
        const conversionRate = quotes.length ? Math.round(approved / quotes.length * 100) : 0;
        const avgMargin = quotes.length ? Math.round(quotes.reduce((acc, q)=>acc + q.marginPercent, 0) / quotes.length) : 0;
        return {
            openQuotes,
            conversionRate,
            pipelineValue,
            avgMargin,
            revenueTrend: quotes.map((q)=>({
                    label: q.projectId,
                    value: Math.round(q.total)
                }))
        };
    }),
    getCpqSummaryBar: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(({ input, ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        const quote = createQuoteSummary(buildParametricState(input.projectId, tenant.id));
        return {
            total: quote.total,
            tax: quote.tax,
            marginPercent: quote.marginPercent,
            currency: quote.currency,
            hasBlockingErrors: baseConstraintSummary.hasBlockingErrors
        };
    }),
    getTenantBranding: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].query(({ ctx })=>{
        const { tenant } = resolveBaseEntities(ctx);
        return tenant.branding ?? buildBranding();
    })
});
const reportingRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    orderTimeline: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$25$2e$76$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'projectId is required')
    })).query(({ input })=>{
        const now = Date.now();
        return {
            projectId: input.projectId,
            timeline: [
                {
                    label: 'Quote confirmed',
                    at: new Date(now - 1000 * 60).toISOString()
                },
                {
                    label: 'CAD/CAM started',
                    at: new Date(now - 1000 * 30).toISOString()
                },
                {
                    label: 'Manufacturing scheduled',
                    at: new Date(now - 1000 * 10).toISOString()
                }
            ]
        };
    }),
    getManufacturingJobs: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].query(()=>{
        const now = Date.now();
        return {
            jobs: [
                {
                    id: 'job-stub',
                    tenantId: 'tenant-demo',
                    projectId: 'proj-demo',
                    quoteId: 'quote-demo',
                    catalogVersion: {
                        id: 'catalog-001',
                        hash: 'hash-001'
                    },
                    status: 'scheduled',
                    createdAt: new Date(now - 1000 * 60).toISOString(),
                    updatedAt: new Date(now - 1000 * 5).toISOString()
                }
            ]
        };
    })
});
const aiRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    designChat: __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$ai$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CopilotChatRequestSchema"]).mutation(async ({ input, ctx })=>{
        const headers = {
            'Content-Type': 'application/json'
        };
        const token = ctx.session?.jwt;
        if (token) headers.authorization = `Bearer ${token}`;
        const res = await fetch(`${AI_BASE}/design/chat`, {
            method: 'POST',
            headers,
            body: JSON.stringify(input)
        });
        if (!res.ok) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$TRPCError$2d$98d44758$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__TRPCError$3e$__["TRPCError"]({
                code: 'BAD_REQUEST',
                message: `AI request failed (${res.status})`
            });
        }
        const data = await res.json();
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$ai$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CopilotPlanResponseSchema"].safeParse(data);
        if (!parsed.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$TRPCError$2d$98d44758$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__TRPCError$3e$__["TRPCError"]({
                code: 'INTERNAL_SERVER_ERROR',
                message: `Invalid AI response: ${parsed.error.message}`
            });
        }
        const toolCallsParsed = __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$validation$2f$src$2f$ai$2e$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AgentToolCallSchema"].array().safeParse(parsed.data.toolCalls ?? []);
        if (!toolCallsParsed.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$TRPCError$2d$98d44758$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__T__as__TRPCError$3e$__["TRPCError"]({
                code: 'INTERNAL_SERVER_ERROR',
                message: `Invalid toolCalls: ${toolCallsParsed.error.message}`
            });
        }
        return {
            ...parsed.data,
            toolCalls: toolCallsParsed.data
        };
    })
});
const appRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["router"])({
    auth: authRouter,
    tenancy: tenancyRouter,
    configurator: configuratorRouter,
    cpq: cpqRouter,
    catalogAdmin: catalogAdminRouter,
    copilot: copilotRouter,
    ui: uiRouter,
    reporting: reportingRouter,
    ai: aiRouter
});
;
}),
"[project]/libs/shared-trpc/src/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$client$2f$createClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-trpc/src/client/createClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$routers$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-trpc/src/routers/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$trpc$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-trpc/src/trpc.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/apps/frontend/src/lib/trpc-server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTrpcClient",
    ()=>getTrpcClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/libs/shared-trpc/src/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$client$2f$createClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/shared-trpc/src/client/createClient.ts [app-rsc] (ecmascript)");
;
;
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:3003") ?? 'http://localhost:3001';
const getTrpcClient = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get('auth_token')?.value;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$shared$2d$trpc$2f$src$2f$client$2f$createClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTrpcClient"])({
        baseUrl: API_BASE,
        headers: token ? {
            authorization: `Bearer ${token}`
        } : undefined
    });
};
}),
"[project]/apps/frontend/app/cpq/dashboard/DashboardClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "DashboardClient",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DashboardClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DashboardClient() from the server but DashboardClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/frontend/app/cpq/dashboard/DashboardClient.tsx <module evaluation>", "DashboardClient");
}),
"[project]/apps/frontend/app/cpq/dashboard/DashboardClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "DashboardClient",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DashboardClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DashboardClient() from the server but DashboardClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/frontend/app/cpq/dashboard/DashboardClient.tsx", "DashboardClient");
}),
"[project]/apps/frontend/app/cpq/dashboard/DashboardClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$app$2f$cpq$2f$dashboard$2f$DashboardClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/app/cpq/dashboard/DashboardClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$app$2f$cpq$2f$dashboard$2f$DashboardClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/frontend/app/cpq/dashboard/DashboardClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$app$2f$cpq$2f$dashboard$2f$DashboardClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/frontend/app/cpq/dashboard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CpqDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/lib/trpc-server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$app$2f$cpq$2f$dashboard$2f$DashboardClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/app/cpq/dashboard/DashboardClient.tsx [app-rsc] (ecmascript)");
;
;
;
async function CpqDashboardPage() {
    const trpc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTrpcClient"])();
    const [kpis, badge, quotes] = await Promise.all([
        trpc.ui.getDashboardKpis.query(),
        trpc.ui.getConstraintBadge.query({
            projectId: 'demo-project'
        }),
        trpc.cpq.listQuotes.query()
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$app$2f$cpq$2f$dashboard$2f$DashboardClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DashboardClient"], {
        initialKpis: kpis,
        initialBadge: badge,
        initialQuotes: quotes
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/cpq/dashboard/page.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
}),
"[project]/apps/frontend/app/cpq/dashboard/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/frontend/app/cpq/dashboard/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ee40d15f._.js.map