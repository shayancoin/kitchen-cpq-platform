module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/apps/frontend/src/lib/trpc-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTrpcClient",
    ()=>createTrpcClient,
    "trpc",
    ()=>trpc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$react$2d$query$40$10$2e$45$2e$2_$40$tanstack$2b$react$2d$query$40$4$2e$42$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$1_gccapntos5qwv4ta24vlfh54y4$2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+react-query@10.45.2_@tanstack+react-query@4.42.0_react-dom@19.2.0_react@19.2.0__react@1_gccapntos5qwv4ta24vlfh54y4/node_modules/@trpc/react-query/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$10$2e$45$2e$2_$40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+client@10.45.2_@trpc+server@10.45.2/node_modules/@trpc/client/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$10$2e$45$2e$2_$40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$httpBatchLink$2d$d0f9eac9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__h__as__httpBatchLink$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@trpc+client@10.45.2_@trpc+server@10.45.2/node_modules/@trpc/client/dist/httpBatchLink-d0f9eac9.mjs [app-ssr] (ecmascript) <export h as httpBatchLink>");
'use client';
;
;
const API_BASE = ("TURBOPACK compile-time value", "http://localhost:3003") ?? 'http://localhost:3001';
const getAuthHeaders = ()=>{
    if (typeof document === 'undefined') return undefined;
    const token = document.cookie.split(';').map((c)=>c.trim()).find((c)=>c.startsWith('auth_token='))?.split('=')[1];
    return token ? {
        authorization: `Bearer ${token}`
    } : undefined;
};
const trpc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$react$2d$query$40$10$2e$45$2e$2_$40$tanstack$2b$react$2d$query$40$4$2e$42$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$1_gccapntos5qwv4ta24vlfh54y4$2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createTRPCReact"])();
const createTrpcClient = ()=>trpc.createClient({
        links: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$client$40$10$2e$45$2e$2_$40$trpc$2b$server$40$10$2e$45$2e$2$2f$node_modules$2f40$trpc$2f$client$2f$dist$2f$httpBatchLink$2d$d0f9eac9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__h__as__httpBatchLink$3e$__["httpBatchLink"])({
                url: `${API_BASE}/trpc`,
                fetch (input, init) {
                    return fetch(input, {
                        ...init,
                        credentials: 'include'
                    });
                },
                headers () {
                    return getAuthHeaders();
                }
            })
        ]
    });
}),
"[project]/apps/frontend/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$41$2e$0$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$queryClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+query-core@4.41.0/node_modules/@tanstack/query-core/build/lib/queryClient.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$42$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$QueryClientProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@4.42.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/lib/trpc-client.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Providers({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$4$2e$41$2e$0$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$lib$2f$queryClient$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    refetchInterval: 4000,
                    refetchOnWindowFocus: false
                }
            }
        }));
    const [trpcClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTrpcClient"])());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$trpc$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trpc"].Provider, {
        client: trpcClient,
        queryClient: queryClient,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$4$2e$42$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$lib$2f$QueryClientProvider$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/frontend/app/providers.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/app/providers.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__98287748._.js.map