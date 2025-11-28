(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__0652f093._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/apps/frontend/src/lib/utils.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "protocol",
    ()=>protocol,
    "rootDomain",
    ()=>rootDomain
]);
const protocol = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'http';
const rawRootDomain = (process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:3000').trim();
const rootDomainPattern = /^[a-z0-9.-]+(:[0-9]+)?$/i;
if (!rootDomainPattern.test(rawRootDomain)) {
    throw new Error(`Invalid NEXT_PUBLIC_ROOT_DOMAIN "${rawRootDomain}". Expected hostname like "example.com" or "example.com:3000".`);
}
const rootDomain = rawRootDomain;
}),
"[project]/apps/frontend/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.4_@babel+core@7.28.5_@opentelemetry+api@1.9.0_@playwright+test@1.57.0_babel-plugin-_mtygajf7wc73773hd4vvgqkli4/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/src/lib/utils.ts [middleware-edge] (ecmascript)");
;
;
function extractSubdomain(request) {
    const url = request.url;
    const host = request.headers.get('host') || '';
    const hostname = host.split(':')[0];
    if (url.includes('localhost') || url.includes('127.0.0.1')) {
        const fullUrlMatch = url.match(/https?:\/\/([^.]+)\.localhost/);
        if (fullUrlMatch && fullUrlMatch[1]) {
            return fullUrlMatch[1];
        }
        if (hostname.includes('.localhost')) {
            return hostname.split('.')[0];
        }
        return null;
    }
    const rootDomainFormatted = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["rootDomain"].split(':')[0];
    if (hostname.includes('---') && hostname.endsWith('.vercel.app')) {
        const parts = hostname.split('---');
        return parts.length > 0 ? parts[0] : null;
    }
    const isSubdomain = hostname !== rootDomainFormatted && hostname !== `www.${rootDomainFormatted}` && hostname.endsWith(`.${rootDomainFormatted}`);
    return isSubdomain ? hostname.replace(`.${rootDomainFormatted}`, '') : null;
}
function middleware(request) {
    const { pathname } = request.nextUrl;
    const subdomain = extractSubdomain(request);
    const authToken = request.cookies.get('auth_token')?.value;
    const requiresAuth = pathname.startsWith('/cpq') || pathname.startsWith('/(dealer)') || pathname.startsWith('/(admin)');
    if (subdomain) {
        if (pathname.startsWith('/admin')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url));
        }
        if (pathname === '/') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(new URL(`/s/${subdomain}`, request.url));
        }
    }
    if (requiresAuth && !authToken && pathname !== '/login') {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('next', pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$4_$40$babel$2b$core$40$7$2e$28$2e$5_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$57$2e$0_babel$2d$plugin$2d$_mtygajf7wc73773hd4vvgqkli4$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/((?!api|_next|[\\w-]+\\.[\\w]+).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0652f093._.js.map