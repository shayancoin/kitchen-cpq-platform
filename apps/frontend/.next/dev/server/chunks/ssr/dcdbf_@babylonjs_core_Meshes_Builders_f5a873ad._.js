module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreatePlane",
    ()=>CreatePlane,
    "CreatePlaneVertexData",
    ()=>CreatePlaneVertexData,
    "PlaneBuilder",
    ()=>PlaneBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
function CreatePlaneVertexData(options) {
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    const width = options.width !== undefined ? options.width : options.size !== undefined ? options.size : 1;
    const height = options.height !== undefined ? options.height : options.size !== undefined ? options.size : 1;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    // Vertices
    const halfWidth = width / 2.0;
    const halfHeight = height / 2.0;
    positions.push(-halfWidth, -halfHeight, 0);
    normals.push(0, 0, -1.0);
    uvs.push(0.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 : 0.0);
    positions.push(halfWidth, -halfHeight, 0);
    normals.push(0, 0, -1.0);
    uvs.push(1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 : 0.0);
    positions.push(halfWidth, halfHeight, 0);
    normals.push(0, 0, -1.0);
    uvs.push(1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 0.0 : 1.0);
    positions.push(-halfWidth, halfHeight, 0);
    normals.push(0, 0, -1.0);
    uvs.push(0.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 0.0 : 1.0);
    // Indices
    indices.push(0);
    indices.push(1);
    indices.push(2);
    indices.push(0);
    indices.push(2);
    indices.push(3);
    // Sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreatePlane(name, options = {}, scene = null) {
    const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    plane._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreatePlaneVertexData(options);
    vertexData.applyToMesh(plane, options.updatable);
    if (options.sourcePlane) {
        plane.translate(options.sourcePlane.normal, -options.sourcePlane.d);
        plane.setDirection(options.sourcePlane.normal.scale(-1));
    }
    return plane;
}
const PlaneBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreatePlane
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreatePlane = CreatePlaneVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreatePlane = (name, size, scene, updatable, sideOrientation)=>{
    const options = {
        size,
        width: size,
        height: size,
        sideOrientation,
        updatable
    };
    return CreatePlane(name, options, scene);
}; //# sourceMappingURL=planeBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/groundBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateGround",
    ()=>CreateGround,
    "CreateGroundFromHeightMap",
    ()=>CreateGroundFromHeightMap,
    "CreateGroundFromHeightMapVertexData",
    ()=>CreateGroundFromHeightMapVertexData,
    "CreateGroundVertexData",
    ()=>CreateGroundVertexData,
    "CreateTiledGround",
    ()=>CreateTiledGround,
    "CreateTiledGroundVertexData",
    ()=>CreateTiledGroundVertexData,
    "GroundBuilder",
    ()=>GroundBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$groundMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/groundMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function CreateGroundVertexData(options) {
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    let row, col;
    const width = options.width || options.size || 1;
    const height = options.height || options.size || 1;
    const subdivisionsX = (options.subdivisionsX || options.subdivisions || 1) | 0;
    const subdivisionsY = (options.subdivisionsY || options.subdivisions || 1) | 0;
    for(row = 0; row <= subdivisionsY; row++){
        for(col = 0; col <= subdivisionsX; col++){
            const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](col * width / subdivisionsX - width / 2.0, 0, (subdivisionsY - row) * height / subdivisionsY - height / 2.0);
            const normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.0, 0);
            positions.push(position.x, position.y, position.z);
            normals.push(normal.x, normal.y, normal.z);
            uvs.push(col / subdivisionsX, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? row / subdivisionsY : 1.0 - row / subdivisionsY);
        }
    }
    for(row = 0; row < subdivisionsY; row++){
        for(col = 0; col < subdivisionsX; col++){
            indices.push(col + 1 + (row + 1) * (subdivisionsX + 1));
            indices.push(col + 1 + row * (subdivisionsX + 1));
            indices.push(col + row * (subdivisionsX + 1));
            indices.push(col + (row + 1) * (subdivisionsX + 1));
            indices.push(col + 1 + (row + 1) * (subdivisionsX + 1));
            indices.push(col + row * (subdivisionsX + 1));
        }
    }
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateTiledGroundVertexData(options) {
    const xmin = options.xmin !== undefined && options.xmin !== null ? options.xmin : -1.0;
    const zmin = options.zmin !== undefined && options.zmin !== null ? options.zmin : -1.0;
    const xmax = options.xmax !== undefined && options.xmax !== null ? options.xmax : 1.0;
    const zmax = options.zmax !== undefined && options.zmax !== null ? options.zmax : 1.0;
    const subdivisions = options.subdivisions || {
        w: 1,
        h: 1
    };
    const precision = options.precision || {
        w: 1,
        h: 1
    };
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    let row, col, tileRow, tileCol;
    subdivisions.h = subdivisions.h < 1 ? 1 : subdivisions.h;
    subdivisions.w = subdivisions.w < 1 ? 1 : subdivisions.w;
    precision.w = precision.w < 1 ? 1 : precision.w;
    precision.h = precision.h < 1 ? 1 : precision.h;
    const tileSize = {
        w: (xmax - xmin) / subdivisions.w,
        h: (zmax - zmin) / subdivisions.h
    };
    function applyTile(xTileMin, zTileMin, xTileMax, zTileMax) {
        // Indices
        const base = positions.length / 3;
        const rowLength = precision.w + 1;
        for(row = 0; row < precision.h; row++){
            for(col = 0; col < precision.w; col++){
                const square = [
                    base + col + row * rowLength,
                    base + (col + 1) + row * rowLength,
                    base + (col + 1) + (row + 1) * rowLength,
                    base + col + (row + 1) * rowLength
                ];
                indices.push(square[1]);
                indices.push(square[2]);
                indices.push(square[3]);
                indices.push(square[0]);
                indices.push(square[1]);
                indices.push(square[3]);
            }
        }
        // Position, normals and uvs
        const position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        const normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1.0, 0);
        for(row = 0; row <= precision.h; row++){
            position.z = row * (zTileMax - zTileMin) / precision.h + zTileMin;
            for(col = 0; col <= precision.w; col++){
                position.x = col * (xTileMax - xTileMin) / precision.w + xTileMin;
                position.y = 0;
                positions.push(position.x, position.y, position.z);
                normals.push(normal.x, normal.y, normal.z);
                uvs.push(col / precision.w, row / precision.h);
            }
        }
    }
    for(tileRow = 0; tileRow < subdivisions.h; tileRow++){
        for(tileCol = 0; tileCol < subdivisions.w; tileCol++){
            applyTile(xmin + tileCol * tileSize.w, zmin + tileRow * tileSize.h, xmin + (tileCol + 1) * tileSize.w, zmin + (tileRow + 1) * tileSize.h);
        }
    }
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateGroundFromHeightMapVertexData(options) {
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    let row, col;
    const filter = options.colorFilter || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.3, 0.59, 0.11);
    const alphaFilter = options.alphaFilter || 0.0;
    let invert = false;
    if (options.minHeight > options.maxHeight) {
        invert = true;
        const temp = options.maxHeight;
        options.maxHeight = options.minHeight;
        options.minHeight = temp;
    }
    // Vertices
    for(row = 0; row <= options.subdivisions; row++){
        for(col = 0; col <= options.subdivisions; col++){
            const position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](col * options.width / options.subdivisions - options.width / 2.0, 0, (options.subdivisions - row) * options.height / options.subdivisions - options.height / 2.0);
            // Compute height
            const heightMapX = (position.x + options.width / 2) / options.width * (options.bufferWidth - 1) | 0;
            const heightMapY = (1.0 - (position.z + options.height / 2) / options.height) * (options.bufferHeight - 1) | 0;
            const pos = (heightMapX + heightMapY * options.bufferWidth) * 4;
            let r = options.buffer[pos] / 255.0;
            let g = options.buffer[pos + 1] / 255.0;
            let b = options.buffer[pos + 2] / 255.0;
            const a = options.buffer[pos + 3] / 255.0;
            if (invert) {
                r = 1.0 - r;
                g = 1.0 - g;
                b = 1.0 - b;
            }
            const gradient = r * filter.r + g * filter.g + b * filter.b;
            // If our alpha channel is not within our filter then we will assign a 'special' height
            // Then when building the indices, we will ignore any vertex that is using the special height
            if (a >= alphaFilter) {
                position.y = options.minHeight + (options.maxHeight - options.minHeight) * gradient;
            } else {
                position.y = options.minHeight - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Epsilon"]; // We can't have a height below minHeight, normally.
            }
            if (options.heightBuffer) {
                // set the height buffer information in row major order.
                options.heightBuffer[row * (options.subdivisions + 1) + col] = position.y;
            }
            // Add  vertex
            positions.push(position.x, position.y, position.z);
            normals.push(0, 0, 0);
            uvs.push(col / options.subdivisions, 1.0 - row / options.subdivisions);
        }
    }
    // Indices
    for(row = 0; row < options.subdivisions; row++){
        for(col = 0; col < options.subdivisions; col++){
            // Calculate Indices
            const idx1 = col + 1 + (row + 1) * (options.subdivisions + 1);
            const idx2 = col + 1 + row * (options.subdivisions + 1);
            const idx3 = col + row * (options.subdivisions + 1);
            const idx4 = col + (row + 1) * (options.subdivisions + 1);
            // Check that all indices are visible (based on our special height)
            // Only display the vertex if all Indices are visible
            // Positions are stored x,y,z for each vertex, hence the * 3 and + 1 for height
            const isVisibleIdx1 = positions[idx1 * 3 + 1] >= options.minHeight;
            const isVisibleIdx2 = positions[idx2 * 3 + 1] >= options.minHeight;
            const isVisibleIdx3 = positions[idx3 * 3 + 1] >= options.minHeight;
            if (isVisibleIdx1 && isVisibleIdx2 && isVisibleIdx3) {
                indices.push(idx1);
                indices.push(idx2);
                indices.push(idx3);
            }
            const isVisibleIdx4 = positions[idx4 * 3 + 1] >= options.minHeight;
            if (isVisibleIdx4 && isVisibleIdx1 && isVisibleIdx3) {
                indices.push(idx4);
                indices.push(idx1);
                indices.push(idx3);
            }
        }
    }
    // Normals
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ComputeNormals(positions, indices, normals);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateGround(name, options = {}, scene) {
    const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$groundMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GroundMesh"](name, scene);
    ground._setReady(false);
    ground._subdivisionsX = options.subdivisionsX || options.subdivisions || 1;
    ground._subdivisionsY = options.subdivisionsY || options.subdivisions || 1;
    ground._width = options.width || 1;
    ground._height = options.height || 1;
    ground._maxX = ground._width / 2;
    ground._maxZ = ground._height / 2;
    ground._minX = -ground._maxX;
    ground._minZ = -ground._maxZ;
    const vertexData = CreateGroundVertexData(options);
    vertexData.applyToMesh(ground, options.updatable);
    ground._setReady(true);
    return ground;
}
function CreateTiledGround(name, options, scene = null) {
    const tiledGround = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    const vertexData = CreateTiledGroundVertexData(options);
    vertexData.applyToMesh(tiledGround, options.updatable);
    return tiledGround;
}
function CreateGroundFromHeightMap(name, url, options = {}, scene = null) {
    const width = options.width || 10.0;
    const height = options.height || 10.0;
    const subdivisions = options.subdivisions || 1 | 0;
    const minHeight = options.minHeight || 0.0;
    const maxHeight = options.maxHeight || 1.0;
    const filter = options.colorFilter || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.3, 0.59, 0.11);
    const alphaFilter = options.alphaFilter || 0.0;
    const updatable = options.updatable;
    const onReady = options.onReady;
    scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
    const ground = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$groundMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GroundMesh"](name, scene);
    ground._subdivisionsX = subdivisions;
    ground._subdivisionsY = subdivisions;
    ground._width = width;
    ground._height = height;
    ground._maxX = ground._width / 2.0;
    ground._maxZ = ground._height / 2.0;
    ground._minX = -ground._maxX;
    ground._minZ = -ground._maxZ;
    ground._setReady(false);
    let heightBuffer;
    if (options.passHeightBufferInCallback) {
        heightBuffer = new Float32Array((subdivisions + 1) * (subdivisions + 1));
    }
    const onBufferLoaded = (buffer, bufferWidth, bufferHeight)=>{
        const vertexData = CreateGroundFromHeightMapVertexData({
            width: width,
            height: height,
            subdivisions: subdivisions,
            minHeight: minHeight,
            maxHeight: maxHeight,
            colorFilter: filter,
            buffer: buffer,
            bufferWidth: bufferWidth,
            bufferHeight: bufferHeight,
            alphaFilter: alphaFilter,
            heightBuffer
        });
        vertexData.applyToMesh(ground, updatable);
        //execute ready callback, if set
        if (onReady) {
            onReady(ground, heightBuffer);
        }
        ground._setReady(true);
    };
    if (typeof url === "string") {
        const onload = (img)=>{
            const bufferWidth = img.width;
            const bufferHeight = img.height;
            if (scene.isDisposed) {
                return;
            }
            const buffer = scene?.getEngine().resizeImageBitmap(img, bufferWidth, bufferHeight);
            onBufferLoaded(buffer, bufferWidth, bufferHeight);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].LoadImage(url, onload, options.onError ? options.onError : ()=>{}, scene.offlineProvider);
    } else {
        onBufferLoaded(url.data, url.width, url.height);
    }
    return ground;
}
const GroundBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateGround,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateGroundFromHeightMap,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateTiledGround
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateGround = CreateGroundVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateTiledGround = CreateTiledGroundVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateGroundFromHeightMap = CreateGroundFromHeightMapVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateGround = (name, width, height, subdivisions, scene, updatable)=>{
    const options = {
        width,
        height,
        subdivisions,
        updatable
    };
    return CreateGround(name, options, scene);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateTiledGround = (name, xmin, zmin, xmax, zmax, subdivisions, precision, scene, updatable)=>{
    const options = {
        xmin,
        zmin,
        xmax,
        zmax,
        subdivisions,
        precision,
        updatable
    };
    return CreateTiledGround(name, options, scene);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateGroundFromHeightMap = (name, url, width, height, subdivisions, minHeight, maxHeight, scene, updatable, onReady, alphaFilter)=>{
    const options = {
        width,
        height,
        subdivisions,
        minHeight,
        maxHeight,
        updatable,
        onReady,
        alphaFilter
    };
    return CreateGroundFromHeightMap(name, url, options, scene);
}; //# sourceMappingURL=groundBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateTorus",
    ()=>CreateTorus,
    "CreateTorusVertexData",
    ()=>CreateTorusVertexData,
    "TorusBuilder",
    ()=>TorusBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
function CreateTorusVertexData(options) {
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    const diameter = options.diameter || 1;
    const thickness = options.thickness || 0.5;
    const tessellation = (options.tessellation || 16) | 0;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    const stride = tessellation + 1;
    for(let i = 0; i <= tessellation; i++){
        const u = i / tessellation;
        const outerAngle = i * Math.PI * 2.0 / tessellation - Math.PI / 2.0;
        const transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Translation(diameter / 2.0, 0, 0).multiply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationY(outerAngle));
        for(let j = 0; j <= tessellation; j++){
            const v = 1 - j / tessellation;
            const innerAngle = j * Math.PI * 2.0 / tessellation + Math.PI;
            const dx = Math.cos(innerAngle);
            const dy = Math.sin(innerAngle);
            // Create a vertex.
            let normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](dx, dy, 0);
            let position = normal.scale(thickness / 2);
            const textureCoordinate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](u, v);
            position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(position, transform);
            normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormal(normal, transform);
            positions.push(position.x, position.y, position.z);
            normals.push(normal.x, normal.y, normal.z);
            uvs.push(textureCoordinate.x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - textureCoordinate.y : textureCoordinate.y);
            // And create indices for two triangles.
            const nextI = (i + 1) % stride;
            const nextJ = (j + 1) % stride;
            indices.push(i * stride + j);
            indices.push(i * stride + nextJ);
            indices.push(nextI * stride + j);
            indices.push(i * stride + nextJ);
            indices.push(nextI * stride + nextJ);
            indices.push(nextI * stride + j);
        }
    }
    // Sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateTorus(name, options = {}, scene) {
    const torus = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    torus._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateTorusVertexData(options);
    vertexData.applyToMesh(torus, options.updatable);
    return torus;
}
const TorusBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateTorus
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateTorus = CreateTorusVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateTorus = (name, diameter, thickness, tessellation, scene, updatable, sideOrientation)=>{
    const options = {
        diameter,
        thickness,
        tessellation,
        sideOrientation,
        updatable
    };
    return CreateTorus(name, options, scene);
}; //# sourceMappingURL=torusBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateCylinder",
    ()=>CreateCylinder,
    "CreateCylinderVertexData",
    ()=>CreateCylinderVertexData,
    "CylinderBuilder",
    ()=>CylinderBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function CreateCylinderVertexData(options) {
    const height = options.height || 2;
    let diameterTop = options.diameterTop === 0 ? 0 : options.diameterTop || options.diameter || 1;
    let diameterBottom = options.diameterBottom === 0 ? 0 : options.diameterBottom || options.diameter || 1;
    diameterTop = diameterTop || 0.00001; // Prevent broken normals
    diameterBottom = diameterBottom || 0.00001; // Prevent broken normals
    const tessellation = (options.tessellation || 24) | 0;
    const subdivisions = (options.subdivisions || 1) | 0;
    const hasRings = options.hasRings ? true : false;
    const enclose = options.enclose ? true : false;
    const cap = options.cap === 0 ? 0 : options.cap || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_ALL;
    const arc = options.arc && (options.arc <= 0 || options.arc > 1) ? 1.0 : options.arc || 1.0;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    const faceUV = options.faceUV || new Array(3);
    const faceColors = options.faceColors;
    // default face colors and UV if undefined
    const quadNb = arc !== 1 && enclose ? 2 : 0;
    const ringNb = hasRings ? subdivisions : 1;
    const surfaceNb = 2 + (1 + quadNb) * ringNb;
    let f;
    for(f = 0; f < surfaceNb; f++){
        if (faceColors && faceColors[f] === undefined) {
            faceColors[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
        }
    }
    for(f = 0; f < surfaceNb; f++){
        if (faceUV && faceUV[f] === undefined) {
            faceUV[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 1, 1);
        }
    }
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    const colors = [];
    const angleStep = Math.PI * 2 * arc / tessellation;
    let angle;
    let h;
    let radius;
    const tan = (diameterBottom - diameterTop) / 2 / height;
    const ringVertex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    const ringNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    const ringFirstVertex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    const ringFirstNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    const quadNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    const y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"].Y;
    // positions, normals, uvs
    let i;
    let j;
    let r;
    let ringIdx = 1;
    let s = 1; // surface index
    let cs = 0;
    let v = 0;
    for(i = 0; i <= subdivisions; i++){
        h = i / subdivisions;
        radius = (h * (diameterTop - diameterBottom) + diameterBottom) / 2;
        ringIdx = hasRings && i !== 0 && i !== subdivisions ? 2 : 1;
        for(r = 0; r < ringIdx; r++){
            if (hasRings) {
                s += r;
            }
            if (enclose) {
                s += 2 * r;
            }
            for(j = 0; j <= tessellation; j++){
                angle = j * angleStep;
                // position
                ringVertex.x = Math.cos(-angle) * radius;
                ringVertex.y = -height / 2 + h * height;
                ringVertex.z = Math.sin(-angle) * radius;
                // normal
                if (diameterTop === 0 && i === subdivisions) {
                    // if no top cap, reuse former normals
                    ringNormal.x = normals[normals.length - (tessellation + 1) * 3];
                    ringNormal.y = normals[normals.length - (tessellation + 1) * 3 + 1];
                    ringNormal.z = normals[normals.length - (tessellation + 1) * 3 + 2];
                } else {
                    ringNormal.x = ringVertex.x;
                    ringNormal.z = ringVertex.z;
                    ringNormal.y = Math.sqrt(ringNormal.x * ringNormal.x + ringNormal.z * ringNormal.z) * tan;
                    ringNormal.normalize();
                }
                // keep first ring vertex values for enclose
                if (j === 0) {
                    ringFirstVertex.copyFrom(ringVertex);
                    ringFirstNormal.copyFrom(ringNormal);
                }
                positions.push(ringVertex.x, ringVertex.y, ringVertex.z);
                normals.push(ringNormal.x, ringNormal.y, ringNormal.z);
                if (hasRings) {
                    v = cs !== s ? faceUV[s].y : faceUV[s].w;
                } else {
                    v = faceUV[s].y + (faceUV[s].w - faceUV[s].y) * h;
                }
                uvs.push(faceUV[s].x + (faceUV[s].z - faceUV[s].x) * j / tessellation, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
                if (faceColors) {
                    colors.push(faceColors[s].r, faceColors[s].g, faceColors[s].b, faceColors[s].a);
                }
            }
            // if enclose, add four vertices and their dedicated normals
            if (arc !== 1 && enclose) {
                positions.push(ringVertex.x, ringVertex.y, ringVertex.z);
                positions.push(0, ringVertex.y, 0);
                positions.push(0, ringVertex.y, 0);
                positions.push(ringFirstVertex.x, ringFirstVertex.y, ringFirstVertex.z);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(y, ringNormal, quadNormal);
                quadNormal.normalize();
                normals.push(quadNormal.x, quadNormal.y, quadNormal.z, quadNormal.x, quadNormal.y, quadNormal.z);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(ringFirstNormal, y, quadNormal);
                quadNormal.normalize();
                normals.push(quadNormal.x, quadNormal.y, quadNormal.z, quadNormal.x, quadNormal.y, quadNormal.z);
                if (hasRings) {
                    v = cs !== s ? faceUV[s + 1].y : faceUV[s + 1].w;
                } else {
                    v = faceUV[s + 1].y + (faceUV[s + 1].w - faceUV[s + 1].y) * h;
                }
                uvs.push(faceUV[s + 1].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
                uvs.push(faceUV[s + 1].z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
                if (hasRings) {
                    v = cs !== s ? faceUV[s + 2].y : faceUV[s + 2].w;
                } else {
                    v = faceUV[s + 2].y + (faceUV[s + 2].w - faceUV[s + 2].y) * h;
                }
                uvs.push(faceUV[s + 2].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
                uvs.push(faceUV[s + 2].z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
                if (faceColors) {
                    colors.push(faceColors[s + 1].r, faceColors[s + 1].g, faceColors[s + 1].b, faceColors[s + 1].a);
                    colors.push(faceColors[s + 1].r, faceColors[s + 1].g, faceColors[s + 1].b, faceColors[s + 1].a);
                    colors.push(faceColors[s + 2].r, faceColors[s + 2].g, faceColors[s + 2].b, faceColors[s + 2].a);
                    colors.push(faceColors[s + 2].r, faceColors[s + 2].g, faceColors[s + 2].b, faceColors[s + 2].a);
                }
            }
            if (cs !== s) {
                cs = s;
            }
        }
    }
    // indices
    const e = arc !== 1 && enclose ? tessellation + 4 : tessellation; // correction of number of iteration if enclose
    i = 0;
    for(s = 0; s < subdivisions; s++){
        let i0 = 0;
        let i1 = 0;
        let i2 = 0;
        let i3 = 0;
        for(j = 0; j < tessellation; j++){
            i0 = i * (e + 1) + j;
            i1 = (i + 1) * (e + 1) + j;
            i2 = i * (e + 1) + (j + 1);
            i3 = (i + 1) * (e + 1) + (j + 1);
            indices.push(i0, i1, i2);
            indices.push(i3, i2, i1);
        }
        if (arc !== 1 && enclose) {
            // if enclose, add two quads
            indices.push(i0 + 2, i1 + 2, i2 + 2);
            indices.push(i3 + 2, i2 + 2, i1 + 2);
            indices.push(i0 + 4, i1 + 4, i2 + 4);
            indices.push(i3 + 4, i2 + 4, i1 + 4);
        }
        i = hasRings ? i + 2 : i + 1;
    }
    // Caps
    const createCylinderCap = (isTop)=>{
        const radius = isTop ? diameterTop / 2 : diameterBottom / 2;
        if (radius === 0) {
            return;
        }
        // Cap positions, normals & uvs
        let angle;
        let circleVector;
        let i;
        const u = isTop ? faceUV[surfaceNb - 1] : faceUV[0];
        let c = null;
        if (faceColors) {
            c = isTop ? faceColors[surfaceNb - 1] : faceColors[0];
        }
        // cap center
        const vbase = positions.length / 3;
        const offset = isTop ? height / 2 : -height / 2;
        const center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, offset, 0);
        positions.push(center.x, center.y, center.z);
        normals.push(0, isTop ? 1 : -1, 0);
        const v = u.y + (u.w - u.y) * 0.5;
        uvs.push(u.x + (u.z - u.x) * 0.5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
        if (c) {
            colors.push(c.r, c.g, c.b, c.a);
        }
        const textureScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0.5, 0.5);
        for(i = 0; i <= tessellation; i++){
            angle = Math.PI * 2 * i * arc / tessellation;
            const cos = Math.cos(-angle);
            const sin = Math.sin(-angle);
            circleVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](cos * radius, offset, sin * radius);
            const textureCoordinate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](cos * textureScale.x + 0.5, sin * textureScale.y + 0.5);
            positions.push(circleVector.x, circleVector.y, circleVector.z);
            normals.push(0, isTop ? 1 : -1, 0);
            const v = u.y + (u.w - u.y) * textureCoordinate.y;
            uvs.push(u.x + (u.z - u.x) * textureCoordinate.x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
            if (c) {
                colors.push(c.r, c.g, c.b, c.a);
            }
        }
        // Cap indices
        for(i = 0; i < tessellation; i++){
            if (!isTop) {
                indices.push(vbase);
                indices.push(vbase + (i + 1));
                indices.push(vbase + (i + 2));
            } else {
                indices.push(vbase);
                indices.push(vbase + (i + 2));
                indices.push(vbase + (i + 1));
            }
        }
    };
    // add caps to geometry based on cap parameter
    if (cap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_START || cap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_ALL) {
        createCylinderCap(false);
    }
    if (cap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_END || cap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_ALL) {
        createCylinderCap(true);
    }
    // Sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    if (faceColors) {
        vertexData.colors = colors;
    }
    return vertexData;
}
function CreateCylinder(name, options = {}, scene) {
    const cylinder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    cylinder._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateCylinderVertexData(options);
    vertexData.applyToMesh(cylinder, options.updatable);
    return cylinder;
}
const CylinderBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateCylinder
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateCylinder = CreateCylinderVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateCylinder = (name, height, diameterTop, diameterBottom, tessellation, subdivisions, scene, updatable, sideOrientation)=>{
    if (scene === undefined || !(scene instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"])) {
        if (scene !== undefined) {
            sideOrientation = updatable || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].DEFAULTSIDE;
            updatable = scene;
        }
        scene = subdivisions;
        subdivisions = 1;
    }
    const options = {
        height,
        diameterTop,
        diameterBottom,
        tessellation,
        subdivisions,
        sideOrientation,
        updatable
    };
    return CreateCylinder(name, options, scene);
}; //# sourceMappingURL=cylinderBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/boxBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoxBuilder",
    ()=>BoxBuilder,
    "CreateBox",
    ()=>CreateBox,
    "CreateBoxVertexData",
    ()=>CreateBoxVertexData,
    "CreateSegmentedBoxVertexData",
    ()=>CreateSegmentedBoxVertexData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/groundBuilder.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function CreateBoxVertexData(options) {
    const nbFaces = 6;
    let indices = [
        0,
        1,
        2,
        0,
        2,
        3,
        4,
        5,
        6,
        4,
        6,
        7,
        8,
        9,
        10,
        8,
        10,
        11,
        12,
        13,
        14,
        12,
        14,
        15,
        16,
        17,
        18,
        16,
        18,
        19,
        20,
        21,
        22,
        20,
        22,
        23
    ];
    const normals = [
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0,
        0,
        -1,
        0
    ];
    const uvs = [];
    let positions = [];
    const width = options.width || options.size || 1;
    const height = options.height || options.size || 1;
    const depth = options.depth || options.size || 1;
    const wrap = options.wrap || false;
    let topBaseAt = options.topBaseAt === void 0 ? 1 : options.topBaseAt;
    let bottomBaseAt = options.bottomBaseAt === void 0 ? 0 : options.bottomBaseAt;
    topBaseAt = (topBaseAt + 4) % 4; // places values as 0 to 3
    bottomBaseAt = (bottomBaseAt + 4) % 4; // places values as 0 to 3
    const topOrder = [
        2,
        0,
        3,
        1
    ];
    const bottomOrder = [
        2,
        0,
        1,
        3
    ];
    let topIndex = topOrder[topBaseAt];
    let bottomIndex = bottomOrder[bottomBaseAt];
    let basePositions = [
        1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        1,
        -1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1,
        1,
        1,
        1,
        -1,
        1,
        1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1
    ];
    if (wrap) {
        indices = [
            2,
            3,
            0,
            2,
            0,
            1,
            4,
            5,
            6,
            4,
            6,
            7,
            9,
            10,
            11,
            9,
            11,
            8,
            12,
            14,
            15,
            12,
            13,
            14
        ];
        basePositions = [
            -1,
            1,
            1,
            1,
            1,
            1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            -1,
            -1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1,
            1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            -1,
            -1
        ];
        let topFaceBase = [
            [
                1,
                1,
                1
            ],
            [
                -1,
                1,
                1
            ],
            [
                -1,
                1,
                -1
            ],
            [
                1,
                1,
                -1
            ]
        ];
        let bottomFaceBase = [
            [
                -1,
                -1,
                1
            ],
            [
                1,
                -1,
                1
            ],
            [
                1,
                -1,
                -1
            ],
            [
                -1,
                -1,
                -1
            ]
        ];
        const topFaceOrder = [
            17,
            18,
            19,
            16
        ];
        const bottomFaceOrder = [
            22,
            23,
            20,
            21
        ];
        while(topIndex > 0){
            topFaceBase.unshift(topFaceBase.pop());
            topFaceOrder.unshift(topFaceOrder.pop());
            topIndex--;
        }
        while(bottomIndex > 0){
            bottomFaceBase.unshift(bottomFaceBase.pop());
            bottomFaceOrder.unshift(bottomFaceOrder.pop());
            bottomIndex--;
        }
        topFaceBase = topFaceBase.flat();
        bottomFaceBase = bottomFaceBase.flat();
        basePositions = basePositions.concat(topFaceBase).concat(bottomFaceBase);
        indices.push(topFaceOrder[0], topFaceOrder[2], topFaceOrder[3], topFaceOrder[0], topFaceOrder[1], topFaceOrder[2]);
        indices.push(bottomFaceOrder[0], bottomFaceOrder[2], bottomFaceOrder[3], bottomFaceOrder[0], bottomFaceOrder[1], bottomFaceOrder[2]);
    }
    const scaleArray = [
        width / 2,
        height / 2,
        depth / 2
    ];
    positions = basePositions.reduce((accumulator, currentValue, currentIndex)=>accumulator.concat(currentValue * scaleArray[currentIndex % 3]), []);
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    const faceUV = options.faceUV || new Array(6);
    const faceColors = options.faceColors;
    const colors = [];
    // default face colors and UV if undefined
    for(let f = 0; f < 6; f++){
        if (faceUV[f] === undefined) {
            faceUV[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 1, 1);
        }
        if (faceColors && faceColors[f] === undefined) {
            faceColors[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
        }
    }
    // Create each face in turn.
    for(let index = 0; index < nbFaces; index++){
        uvs.push(faceUV[index].z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - faceUV[index].w : faceUV[index].w);
        uvs.push(faceUV[index].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - faceUV[index].w : faceUV[index].w);
        uvs.push(faceUV[index].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - faceUV[index].y : faceUV[index].y);
        uvs.push(faceUV[index].z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - faceUV[index].y : faceUV[index].y);
        if (faceColors) {
            for(let c = 0; c < 4; c++){
                colors.push(faceColors[index].r, faceColors[index].g, faceColors[index].b, faceColors[index].a);
            }
        }
    }
    // sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    if (faceColors) {
        const totalColors = sideOrientation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DOUBLESIDE ? colors.concat(colors) : colors;
        vertexData.colors = totalColors;
    }
    return vertexData;
}
function CreateSegmentedBoxVertexData(options) {
    const width = options.width || options.size || 1;
    const height = options.height || options.size || 1;
    const depth = options.depth || options.size || 1;
    const widthSegments = (options.widthSegments || options.segments || 1) | 0;
    const heightSegments = (options.heightSegments || options.segments || 1) | 0;
    const depthSegments = (options.depthSegments || options.segments || 1) | 0;
    const rotationMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
    const translationMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
    const transformMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
    const bottomPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundVertexData"])({
        width: width,
        height: depth,
        subdivisionsX: widthSegments,
        subdivisionsY: depthSegments
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(0, -height / 2, 0, translationMatrix);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationZToRef(Math.PI, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    bottomPlane.transform(transformMatrix);
    const topPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundVertexData"])({
        width: width,
        height: depth,
        subdivisionsX: widthSegments,
        subdivisionsY: depthSegments
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(0, height / 2, 0, transformMatrix);
    topPlane.transform(transformMatrix);
    const negXPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundVertexData"])({
        width: height,
        height: depth,
        subdivisionsX: heightSegments,
        subdivisionsY: depthSegments
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(-width / 2, 0, 0, translationMatrix);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationZToRef(Math.PI / 2, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    negXPlane.transform(transformMatrix);
    const posXPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundVertexData"])({
        width: height,
        height: depth,
        subdivisionsX: heightSegments,
        subdivisionsY: depthSegments
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(width / 2, 0, 0, translationMatrix);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationZToRef(-Math.PI / 2, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    posXPlane.transform(transformMatrix);
    const negZPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundVertexData"])({
        width: width,
        height: height,
        subdivisionsX: widthSegments,
        subdivisionsY: heightSegments
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(0, 0, -depth / 2, translationMatrix);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationXToRef(-Math.PI / 2, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    negZPlane.transform(transformMatrix);
    const posZPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundVertexData"])({
        width: width,
        height: height,
        subdivisionsX: widthSegments,
        subdivisionsY: heightSegments
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(0, 0, depth / 2, translationMatrix);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationXToRef(Math.PI / 2, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    posZPlane.transform(transformMatrix);
    // Result
    bottomPlane.merge([
        topPlane,
        posXPlane,
        negXPlane,
        negZPlane,
        posZPlane
    ], true);
    return bottomPlane;
}
function CreateBox(name, options = {}, scene = null) {
    const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    box._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateBoxVertexData(options);
    vertexData.applyToMesh(box, options.updatable);
    return box;
}
const BoxBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateBox
};
// Side effects
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateBox = CreateBoxVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateBox = (name, size, scene = null, updatable, sideOrientation)=>{
    const options = {
        size,
        sideOrientation,
        updatable
    };
    return CreateBox(name, options, scene);
}; //# sourceMappingURL=boxBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateSphere",
    ()=>CreateSphere,
    "CreateSphereVertexData",
    ()=>CreateSphereVertexData,
    "SphereBuilder",
    ()=>SphereBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
function CreateSphereVertexData(options) {
    const segments = (options.segments || 32) | 0;
    const diameterX = options.diameterX || options.diameter || 1;
    const diameterY = options.diameterY || options.diameter || 1;
    const diameterZ = options.diameterZ || options.diameter || 1;
    const arc = options.arc && (options.arc <= 0 || options.arc > 1) ? 1.0 : options.arc || 1.0;
    const slice = options.slice && options.slice <= 0 ? 1.0 : options.slice || 1.0;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    const dedupTopBottomIndices = !!options.dedupTopBottomIndices;
    const radius = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](diameterX / 2, diameterY / 2, diameterZ / 2);
    const totalZRotationSteps = 2 + segments;
    const totalYRotationSteps = 2 * totalZRotationSteps;
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    for(let zRotationStep = 0; zRotationStep <= totalZRotationSteps; zRotationStep++){
        const normalizedZ = zRotationStep / totalZRotationSteps;
        const angleZ = normalizedZ * Math.PI * slice;
        for(let yRotationStep = 0; yRotationStep <= totalYRotationSteps; yRotationStep++){
            const normalizedY = yRotationStep / totalYRotationSteps;
            const angleY = normalizedY * Math.PI * 2 * arc;
            const rotationZ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationZ(-angleZ);
            const rotationY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationY(angleY);
            const afterRotZ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up(), rotationZ);
            const complete = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(afterRotZ, rotationY);
            const vertex = complete.multiply(radius);
            const normal = complete.divide(radius).normalize();
            positions.push(vertex.x, vertex.y, vertex.z);
            normals.push(normal.x, normal.y, normal.z);
            uvs.push(normalizedY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - normalizedZ : normalizedZ);
        }
        if (zRotationStep > 0) {
            const verticesCount = positions.length / 3;
            for(let firstIndex = verticesCount - 2 * (totalYRotationSteps + 1); firstIndex + totalYRotationSteps + 2 < verticesCount; firstIndex++){
                if (dedupTopBottomIndices) {
                    if (zRotationStep > 1) {
                        indices.push(firstIndex);
                        indices.push(firstIndex + 1);
                        indices.push(firstIndex + totalYRotationSteps + 1);
                    }
                    if (zRotationStep < totalZRotationSteps || slice < 1.0) {
                        indices.push(firstIndex + totalYRotationSteps + 1);
                        indices.push(firstIndex + 1);
                        indices.push(firstIndex + totalYRotationSteps + 2);
                    }
                } else {
                    indices.push(firstIndex);
                    indices.push(firstIndex + 1);
                    indices.push(firstIndex + totalYRotationSteps + 1);
                    indices.push(firstIndex + totalYRotationSteps + 1);
                    indices.push(firstIndex + 1);
                    indices.push(firstIndex + totalYRotationSteps + 2);
                }
            }
        }
    }
    // Sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateSphere(name, options = {}, scene = null) {
    const sphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    sphere._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateSphereVertexData(options);
    vertexData.applyToMesh(sphere, options.updatable);
    return sphere;
}
const SphereBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateSphere
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateSphere = CreateSphereVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateSphere = (name, segments, diameter, scene, updatable, sideOrientation)=>{
    const options = {
        segments: segments,
        diameterX: diameter,
        diameterY: diameter,
        diameterZ: diameter,
        sideOrientation: sideOrientation,
        updatable: updatable
    };
    return CreateSphere(name, options, scene);
}; //# sourceMappingURL=sphereBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/capsuleBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CapsuleBuilder",
    ()=>CapsuleBuilder,
    "CreateCapsule",
    ()=>CreateCapsule,
    "CreateCapsuleVertexData",
    ()=>CreateCapsuleVertexData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
function CreateCapsuleVertexData(options = {
    subdivisions: 2,
    tessellation: 16,
    height: 1,
    radius: 0.25,
    capSubdivisions: 6
}) {
    const subdivisions = Math.max(options.subdivisions ? options.subdivisions : 2, 1) | 0;
    const tessellation = Math.max(options.tessellation ? options.tessellation : 16, 3) | 0;
    const height = Math.max(options.height ? options.height : 1, 0);
    const radius = Math.max(options.radius ? options.radius : 0.25, 0);
    const capDetail = Math.max(options.capSubdivisions ? options.capSubdivisions : 6, 1) | 0;
    const radialSegments = tessellation;
    const heightSegments = subdivisions;
    const radiusTop = Math.max(options.radiusTop ? options.radiusTop : radius, 0);
    const radiusBottom = Math.max(options.radiusBottom ? options.radiusBottom : radius, 0);
    const heightMinusCaps = height - (radiusTop + radiusBottom);
    const thetaStart = 0.0;
    const thetaLength = 2.0 * Math.PI;
    const capsTopSegments = Math.max(options.topCapSubdivisions ? options.topCapSubdivisions : capDetail, 1);
    const capsBottomSegments = Math.max(options.bottomCapSubdivisions ? options.bottomCapSubdivisions : capDetail, 1);
    const alpha = Math.acos((radiusBottom - radiusTop) / height);
    let indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];
    let index = 0;
    const indexArray = [], halfHeight = heightMinusCaps * 0.5;
    const pi2 = Math.PI * 0.5;
    let x, y;
    const normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    const vertex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    const cosAlpha = Math.cos(alpha);
    const sinAlpha = Math.sin(alpha);
    const coneLength = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](radiusTop * sinAlpha, halfHeight + radiusTop * cosAlpha).subtract(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](radiusBottom * sinAlpha, -halfHeight + radiusBottom * cosAlpha)).length();
    // Total length for v texture coord
    const vl = radiusTop * alpha + coneLength + radiusBottom * (pi2 - alpha);
    let v = 0;
    for(y = 0; y <= capsTopSegments; y++){
        const indexRow = [];
        const a = pi2 - alpha * (y / capsTopSegments);
        v += radiusTop * alpha / capsTopSegments;
        const cosA = Math.cos(a);
        const sinA = Math.sin(a);
        // calculate the radius of the current row
        const _radius = cosA * radiusTop;
        for(x = 0; x <= radialSegments; x++){
            const u = x / radialSegments;
            const theta = u * thetaLength + thetaStart;
            const sinTheta = Math.sin(theta);
            const cosTheta = Math.cos(theta);
            // vertex
            vertex.x = _radius * sinTheta;
            vertex.y = halfHeight + sinA * radiusTop;
            vertex.z = _radius * cosTheta;
            vertices.push(vertex.x, vertex.y, vertex.z);
            // normal
            normal.set(cosA * sinTheta, sinA, cosA * cosTheta);
            normals.push(normal.x, normal.y, normal.z);
            // uv
            uvs.push(u, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? v / vl : 1 - v / vl);
            // save index of vertex in respective row
            indexRow.push(index);
            // increase index
            index++;
        }
        // now save vertices of the row in our index array
        indexArray.push(indexRow);
    }
    const coneHeight = height - radiusTop - radiusBottom + cosAlpha * radiusTop - cosAlpha * radiusBottom;
    const slope = sinAlpha * (radiusBottom - radiusTop) / coneHeight;
    for(y = 1; y <= heightSegments; y++){
        const indexRow = [];
        v += coneLength / heightSegments;
        // calculate the radius of the current row
        const _radius = sinAlpha * (y * (radiusBottom - radiusTop) / heightSegments + radiusTop);
        for(x = 0; x <= radialSegments; x++){
            const u = x / radialSegments;
            const theta = u * thetaLength + thetaStart;
            const sinTheta = Math.sin(theta);
            const cosTheta = Math.cos(theta);
            // vertex
            vertex.x = _radius * sinTheta;
            vertex.y = halfHeight + cosAlpha * radiusTop - y * coneHeight / heightSegments;
            vertex.z = _radius * cosTheta;
            vertices.push(vertex.x, vertex.y, vertex.z);
            // normal
            normal.set(sinTheta, slope, cosTheta).normalize();
            normals.push(normal.x, normal.y, normal.z);
            // uv
            uvs.push(u, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? v / vl : 1 - v / vl);
            // save index of vertex in respective row
            indexRow.push(index);
            // increase index
            index++;
        }
        // now save vertices of the row in our index array
        indexArray.push(indexRow);
    }
    for(y = 1; y <= capsBottomSegments; y++){
        const indexRow = [];
        const a = pi2 - alpha - (Math.PI - alpha) * (y / capsBottomSegments);
        v += radiusBottom * alpha / capsBottomSegments;
        const cosA = Math.cos(a);
        const sinA = Math.sin(a);
        // calculate the radius of the current row
        const _radius = cosA * radiusBottom;
        for(x = 0; x <= radialSegments; x++){
            const u = x / radialSegments;
            const theta = u * thetaLength + thetaStart;
            const sinTheta = Math.sin(theta);
            const cosTheta = Math.cos(theta);
            // vertex
            vertex.x = _radius * sinTheta;
            vertex.y = -halfHeight + sinA * radiusBottom;
            vertex.z = _radius * cosTheta;
            vertices.push(vertex.x, vertex.y, vertex.z);
            // normal
            normal.set(cosA * sinTheta, sinA, cosA * cosTheta);
            normals.push(normal.x, normal.y, normal.z);
            // uv
            uvs.push(u, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? v / vl : 1 - v / vl);
            // save index of vertex in respective row
            indexRow.push(index);
            // increase index
            index++;
        }
        // now save vertices of the row in our index array
        indexArray.push(indexRow);
    }
    // generate indices
    for(x = 0; x < radialSegments; x++){
        for(y = 0; y < capsTopSegments + heightSegments + capsBottomSegments; y++){
            // we use the index array to access the correct indices
            const i1 = indexArray[y][x];
            const i2 = indexArray[y + 1][x];
            const i3 = indexArray[y + 1][x + 1];
            const i4 = indexArray[y][x + 1];
            // face one
            indices.push(i1);
            indices.push(i2);
            indices.push(i4);
            // face two
            indices.push(i2);
            indices.push(i3);
            indices.push(i4);
        }
    }
    indices = indices.reverse();
    if (options.orientation && !options.orientation.equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up())) {
        const m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        options.orientation.clone().scale(Math.PI * 0.5).cross(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up()).toQuaternion().toRotationMatrix(m);
        const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        for(let i = 0; i < vertices.length; i += 3){
            v.set(vertices[i], vertices[i + 1], vertices[i + 2]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(v.clone(), m, v);
            vertices[i] = v.x;
            vertices[i + 1] = v.y;
            vertices[i + 2] = v.z;
        }
    }
    const vDat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vDat.positions = vertices;
    vDat.normals = normals;
    vDat.uvs = uvs;
    vDat.indices = indices;
    return vDat;
}
function CreateCapsule(name, options = {
    orientation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up(),
    subdivisions: 2,
    tessellation: 16,
    height: 1,
    radius: 0.25,
    capSubdivisions: 6,
    updatable: false
}, scene = null) {
    const capsule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    const vertexData = CreateCapsuleVertexData(options);
    vertexData.applyToMesh(capsule, options.updatable);
    return capsule;
}
const CapsuleBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateCapsule
};
/**
 * Creates a capsule or a pill mesh
 * @param name defines the name of the mesh.
 * @param options the constructors options used to shape the mesh.
 * @param scene defines the scene the mesh is scoped to.
 * @returns the capsule mesh
 * @see https://doc.babylonjs.com/how_to/capsule_shape
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateCapsule = (name, options, scene)=>{
    return CreateCapsule(name, options, scene);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateCapsule = CreateCapsuleVertexData; //# sourceMappingURL=capsuleBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/ribbonBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateRibbon",
    ()=>CreateRibbon,
    "CreateRibbonVertexData",
    ()=>CreateRibbonVertexData,
    "RibbonBuilder",
    ()=>RibbonBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
;
function CreateRibbonVertexData(options) {
    let pathArray = options.pathArray;
    const closeArray = options.closeArray || false;
    const closePath = options.closePath || false;
    const invertUV = options.invertUV || false;
    const defaultOffset = Math.floor(pathArray[0].length / 2);
    let offset = options.offset || defaultOffset;
    offset = offset > defaultOffset ? defaultOffset : Math.floor(offset); // offset max allowed : defaultOffset
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    const customUV = options.uvs;
    const customColors = options.colors;
    const positions = [];
    const indices = [];
    const normals = [];
    const uvs = [];
    const us = []; // us[path_id] = [uDist1, uDist2, uDist3 ... ] distances between points on path path_id
    const vs = []; // vs[i] = [vDist1, vDist2, vDist3, ... ] distances between points i of consecutive paths from pathArray
    const uTotalDistance = []; // uTotalDistance[p] : total distance of path p
    const vTotalDistance = []; //  vTotalDistance[i] : total distance between points i of first and last path from pathArray
    let minlg; // minimal length among all paths from pathArray
    const lg = []; // array of path lengths : nb of vertex per path
    const idx = []; // array of path indexes : index of each path (first vertex) in the total vertex number
    let p; // path iterator
    let i; // point iterator
    let j; // point iterator
    // if single path in pathArray
    if (pathArray.length < 2) {
        const ar1 = [];
        const ar2 = [];
        for(i = 0; i < pathArray[0].length - offset; i++){
            ar1.push(pathArray[0][i]);
            ar2.push(pathArray[0][i + offset]);
        }
        pathArray = [
            ar1,
            ar2
        ];
    }
    // positions and horizontal distances (u)
    let idc = 0;
    const closePathCorr = closePath ? 1 : 0; // the final index will be +1 if closePath
    const closeArrayCorr = closeArray ? 1 : 0;
    let path;
    let l;
    minlg = pathArray[0].length;
    let vectlg;
    let dist;
    for(p = 0; p < pathArray.length + closeArrayCorr; p++){
        uTotalDistance[p] = 0;
        us[p] = [
            0
        ];
        path = p === pathArray.length ? pathArray[0] : pathArray[p];
        l = path.length;
        minlg = minlg < l ? minlg : l;
        j = 0;
        while(j < l){
            positions.push(path[j].x, path[j].y, path[j].z);
            if (j > 0) {
                vectlg = path[j].subtract(path[j - 1]).length();
                dist = vectlg + uTotalDistance[p];
                us[p].push(dist);
                uTotalDistance[p] = dist;
            }
            j++;
        }
        if (closePath) {
            // an extra hidden vertex is added in the "positions" array
            j--;
            positions.push(path[0].x, path[0].y, path[0].z);
            vectlg = path[j].subtract(path[0]).length();
            dist = vectlg + uTotalDistance[p];
            us[p].push(dist);
            uTotalDistance[p] = dist;
        }
        lg[p] = l + closePathCorr;
        idx[p] = idc;
        idc += l + closePathCorr;
    }
    // vertical distances (v)
    let path1;
    let path2;
    let vertex1 = null;
    let vertex2 = null;
    for(i = 0; i < minlg + closePathCorr; i++){
        vTotalDistance[i] = 0;
        vs[i] = [
            0
        ];
        for(p = 0; p < pathArray.length - 1 + closeArrayCorr; p++){
            path1 = pathArray[p];
            path2 = p === pathArray.length - 1 ? pathArray[0] : pathArray[p + 1];
            if (i === minlg) {
                // closePath
                vertex1 = path1[0];
                vertex2 = path2[0];
            } else {
                vertex1 = path1[i];
                vertex2 = path2[i];
            }
            vectlg = vertex2.subtract(vertex1).length();
            dist = vectlg + vTotalDistance[i];
            vs[i].push(dist);
            vTotalDistance[i] = dist;
        }
    }
    // uvs
    let u;
    let v;
    if (customUV) {
        for(p = 0; p < customUV.length; p++){
            uvs.push(customUV[p].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - customUV[p].y : customUV[p].y);
        }
    } else {
        for(p = 0; p < pathArray.length + closeArrayCorr; p++){
            for(i = 0; i < minlg + closePathCorr; i++){
                u = uTotalDistance[p] != 0.0 ? us[p][i] / uTotalDistance[p] : 0.0;
                v = vTotalDistance[i] != 0.0 ? vs[i][p] / vTotalDistance[i] : 0.0;
                if (invertUV) {
                    uvs.push(v, u);
                } else {
                    uvs.push(u, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - v : v);
                }
            }
        }
    }
    // indices
    p = 0; // path index
    let pi = 0; // positions array index
    let l1 = lg[p] - 1; // path1 length
    let l2 = lg[p + 1] - 1; // path2 length
    let min = l1 < l2 ? l1 : l2; // current path stop index
    let shft = idx[1] - idx[0]; // shift
    const path1nb = lg.length - 1; // number of path1 to iterate on
    while(pi <= min && p < path1nb){
        //  stay under min and don't go over next to last path
        // draw two triangles between path1 (p1) and path2 (p2) : (p1.pi, p2.pi, p1.pi+1) and (p2.pi+1, p1.pi+1, p2.pi) clockwise
        indices.push(pi, pi + shft, pi + 1);
        indices.push(pi + shft + 1, pi + 1, pi + shft);
        pi += 1;
        if (pi === min) {
            // if end of one of two consecutive paths reached, go to next existing path
            p++;
            shft = idx[p + 1] - idx[p];
            l1 = lg[p] - 1;
            l2 = lg[p + 1] - 1;
            pi = idx[p];
            min = l1 < l2 ? l1 + pi : l2 + pi;
        }
    }
    // normals
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ComputeNormals(positions, indices, normals);
    if (closePath) {
        // update both the first and last vertex normals to their average value
        let indexFirst = 0;
        let indexLast = 0;
        for(p = 0; p < pathArray.length; p++){
            indexFirst = idx[p] * 3;
            if (p + 1 < pathArray.length) {
                indexLast = (idx[p + 1] - 1) * 3;
            } else {
                indexLast = normals.length - 3;
            }
            normals[indexFirst] = (normals[indexFirst] + normals[indexLast]) * 0.5;
            normals[indexFirst + 1] = (normals[indexFirst + 1] + normals[indexLast + 1]) * 0.5;
            normals[indexFirst + 2] = (normals[indexFirst + 2] + normals[indexLast + 2]) * 0.5;
            const l = Math.sqrt(normals[indexFirst] * normals[indexFirst] + normals[indexFirst + 1] * normals[indexFirst + 1] + normals[indexFirst + 2] * normals[indexFirst + 2]);
            normals[indexFirst] /= l;
            normals[indexFirst + 1] /= l;
            normals[indexFirst + 2] /= l;
            normals[indexLast] = normals[indexFirst];
            normals[indexLast + 1] = normals[indexFirst + 1];
            normals[indexLast + 2] = normals[indexFirst + 2];
        }
    }
    if (closeArray) {
        let indexFirst = idx[0] * 3;
        let indexLast = idx[pathArray.length] * 3;
        for(i = 0; i < minlg + closePathCorr; i++){
            normals[indexFirst] = (normals[indexFirst] + normals[indexLast]) * 0.5;
            normals[indexFirst + 1] = (normals[indexFirst + 1] + normals[indexLast + 1]) * 0.5;
            normals[indexFirst + 2] = (normals[indexFirst + 2] + normals[indexLast + 2]) * 0.5;
            const l = Math.sqrt(normals[indexFirst] * normals[indexFirst] + normals[indexFirst + 1] * normals[indexFirst + 1] + normals[indexFirst + 2] * normals[indexFirst + 2]);
            normals[indexFirst] /= l;
            normals[indexFirst + 1] /= l;
            normals[indexFirst + 2] /= l;
            normals[indexLast] = normals[indexFirst];
            normals[indexLast + 1] = normals[indexFirst + 1];
            normals[indexLast + 2] = normals[indexFirst + 2];
            indexFirst += 3;
            indexLast += 3;
        }
    }
    // sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Colors
    let colors = null;
    if (customColors) {
        colors = new Float32Array(customColors.length * 4);
        for(let c = 0; c < customColors.length; c++){
            colors[c * 4] = customColors[c].r;
            colors[c * 4 + 1] = customColors[c].g;
            colors[c * 4 + 2] = customColors[c].b;
            colors[c * 4 + 3] = customColors[c].a;
        }
    }
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    const positions32 = new Float32Array(positions);
    const normals32 = new Float32Array(normals);
    const uvs32 = new Float32Array(uvs);
    vertexData.indices = indices;
    vertexData.positions = positions32;
    vertexData.normals = normals32;
    vertexData.uvs = uvs32;
    if (colors) {
        vertexData.set(colors, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
    }
    if (closePath) {
        vertexData._idx = idx;
    }
    return vertexData;
}
function CreateRibbon(name, options, scene = null) {
    const pathArray = options.pathArray;
    const closeArray = options.closeArray;
    const closePath = options.closePath;
    const sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    const instance = options.instance;
    const updatable = options.updatable;
    if (instance) {
        // existing ribbon instance update
        // positionFunction : ribbon case
        // only pathArray and sideOrientation parameters are taken into account for positions update
        const minimum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].setAll(Number.MAX_VALUE);
        const maximum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].setAll(-Number.MAX_VALUE);
        const positionFunction = (positions)=>{
            let minlg = pathArray[0].length;
            const mesh = instance;
            let i = 0;
            const ns = mesh._originalBuilderSideOrientation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].DOUBLESIDE ? 2 : 1;
            for(let si = 1; si <= ns; ++si){
                for(let p = 0; p < pathArray.length; ++p){
                    const path = pathArray[p];
                    const l = path.length;
                    minlg = minlg < l ? minlg : l;
                    for(let j = 0; j < minlg; ++j){
                        const pathPoint = path[j];
                        positions[i] = pathPoint.x;
                        positions[i + 1] = pathPoint.y;
                        positions[i + 2] = pathPoint.z;
                        minimum.minimizeInPlaceFromFloats(pathPoint.x, pathPoint.y, pathPoint.z);
                        maximum.maximizeInPlaceFromFloats(pathPoint.x, pathPoint.y, pathPoint.z);
                        i += 3;
                    }
                    if (mesh._creationDataStorage && mesh._creationDataStorage.closePath) {
                        const pathPoint = path[0];
                        positions[i] = pathPoint.x;
                        positions[i + 1] = pathPoint.y;
                        positions[i + 2] = pathPoint.z;
                        i += 3;
                    }
                }
            }
        };
        const positions = instance.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
        positionFunction(positions);
        if (instance.hasBoundingInfo) {
            instance.getBoundingInfo().reConstruct(minimum, maximum, instance._worldMatrix);
        } else {
            instance.buildBoundingInfo(minimum, maximum, instance._worldMatrix);
        }
        instance.updateVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, positions, false, false);
        if (options.colors) {
            const colors = instance.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
            for(let c = 0, colorIndex = 0; c < options.colors.length; c++, colorIndex += 4){
                const color = options.colors[c];
                colors[colorIndex] = color.r;
                colors[colorIndex + 1] = color.g;
                colors[colorIndex + 2] = color.b;
                colors[colorIndex + 3] = color.a;
            }
            instance.updateVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind, colors, false, false);
        }
        if (options.uvs) {
            const uvs = instance.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
            for(let i = 0; i < options.uvs.length; i++){
                uvs[i * 2] = options.uvs[i].x;
                uvs[i * 2 + 1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - options.uvs[i].y : options.uvs[i].y;
            }
            instance.updateVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind, uvs, false, false);
        }
        if (!instance.areNormalsFrozen || instance.isFacetDataEnabled) {
            const indices = instance.getIndices();
            const normals = instance.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
            const params = instance.isFacetDataEnabled ? instance.getFacetDataParameters() : null;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ComputeNormals(positions, indices, normals, params);
            if (instance._creationDataStorage && instance._creationDataStorage.closePath) {
                let indexFirst = 0;
                let indexLast = 0;
                for(let p = 0; p < pathArray.length; p++){
                    indexFirst = instance._creationDataStorage.idx[p] * 3;
                    if (p + 1 < pathArray.length) {
                        indexLast = (instance._creationDataStorage.idx[p + 1] - 1) * 3;
                    } else {
                        indexLast = normals.length - 3;
                    }
                    normals[indexFirst] = (normals[indexFirst] + normals[indexLast]) * 0.5;
                    normals[indexFirst + 1] = (normals[indexFirst + 1] + normals[indexLast + 1]) * 0.5;
                    normals[indexFirst + 2] = (normals[indexFirst + 2] + normals[indexLast + 2]) * 0.5;
                    normals[indexLast] = normals[indexFirst];
                    normals[indexLast + 1] = normals[indexFirst + 1];
                    normals[indexLast + 2] = normals[indexFirst + 2];
                }
            }
            if (!instance.areNormalsFrozen) {
                instance.updateVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind, normals, false, false);
            }
        }
        return instance;
    } else {
        // new ribbon creation
        const ribbon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
        ribbon._originalBuilderSideOrientation = sideOrientation;
        ribbon._creationDataStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreationDataStorage"]();
        const vertexData = CreateRibbonVertexData(options);
        if (closePath) {
            ribbon._creationDataStorage.idx = vertexData._idx;
        }
        ribbon._creationDataStorage.closePath = closePath;
        ribbon._creationDataStorage.closeArray = closeArray;
        vertexData.applyToMesh(ribbon, updatable);
        return ribbon;
    }
}
const RibbonBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateRibbon
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateRibbon = CreateRibbonVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateRibbon = (name, pathArray, closeArray = false, closePath, offset, scene, updatable = false, sideOrientation, instance)=>{
    return CreateRibbon(name, {
        pathArray: pathArray,
        closeArray: closeArray,
        closePath: closePath,
        offset: offset,
        updatable: updatable,
        sideOrientation: sideOrientation,
        instance: instance
    }, scene);
}; //# sourceMappingURL=ribbonBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/discBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateDisc",
    ()=>CreateDisc,
    "CreateDiscVertexData",
    ()=>CreateDiscVertexData,
    "DiscBuilder",
    ()=>DiscBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
function CreateDiscVertexData(options) {
    const positions = [];
    const indices = [];
    const normals = [];
    const uvs = [];
    const radius = options.radius || 0.5;
    const tessellation = options.tessellation || 64;
    const arc = options.arc && (options.arc <= 0 || options.arc > 1) ? 1.0 : options.arc || 1.0;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    // positions and uvs
    positions.push(0, 0, 0); // disc center first
    uvs.push(0.5, 0.5);
    const theta = Math.PI * 2 * arc;
    const step = arc === 1 ? theta / tessellation : theta / (tessellation - 1);
    let a = 0;
    for(let t = 0; t < tessellation; t++){
        const x = Math.cos(a);
        const y = Math.sin(a);
        const u = (x + 1) / 2;
        const v = (1 - y) / 2;
        positions.push(radius * x, radius * y, 0);
        uvs.push(u, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
        a += step;
    }
    if (arc === 1) {
        positions.push(positions[3], positions[4], positions[5]); // close the circle
        uvs.push(uvs[2], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - uvs[3] : uvs[3]);
    }
    //indices
    const vertexNb = positions.length / 3;
    for(let i = 1; i < vertexNb - 1; i++){
        indices.push(i + 1, 0, i);
    }
    // result
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ComputeNormals(positions, indices, normals);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateDisc(name, options = {}, scene = null) {
    const disc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    disc._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateDiscVertexData(options);
    vertexData.applyToMesh(disc, options.updatable);
    return disc;
}
const DiscBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateDisc
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateDisc = CreateDiscVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateDisc = (name, radius, tessellation, scene = null, updatable, sideOrientation)=>{
    const options = {
        radius,
        tessellation,
        sideOrientation,
        updatable
    };
    return CreateDisc(name, options, scene);
}; //# sourceMappingURL=discBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tiledPlaneBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateTiledPlane",
    ()=>CreateTiledPlane,
    "CreateTiledPlaneVertexData",
    ()=>CreateTiledPlaneVertexData,
    "TiledPlaneBuilder",
    ()=>TiledPlaneBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
;
;
function CreateTiledPlaneVertexData(options) {
    const flipTile = options.pattern || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_FLIP;
    const tileWidth = options.tileWidth || options.tileSize || 1;
    const tileHeight = options.tileHeight || options.tileSize || 1;
    const alignH = options.alignHorizontal || 0;
    const alignV = options.alignVertical || 0;
    const width = options.width || options.size || 1;
    const tilesX = Math.floor(width / tileWidth);
    let offsetX = width - tilesX * tileWidth;
    const height = options.height || options.size || 1;
    const tilesY = Math.floor(height / tileHeight);
    let offsetY = height - tilesY * tileHeight;
    const halfWidth = tileWidth * tilesX / 2;
    const halfHeight = tileHeight * tilesY / 2;
    let adjustX = 0;
    let adjustY = 0;
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    //Part Tiles
    if (offsetX > 0 || offsetY > 0) {
        startX = -halfWidth;
        startY = -halfHeight;
        endX = halfWidth;
        endY = halfHeight;
        switch(alignH){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CENTER:
                offsetX /= 2;
                startX -= offsetX;
                endX += offsetX;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].LEFT:
                endX += offsetX;
                adjustX = -offsetX / 2;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].RIGHT:
                startX -= offsetX;
                adjustX = offsetX / 2;
                break;
        }
        switch(alignV){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CENTER:
                offsetY /= 2;
                startY -= offsetY;
                endY += offsetY;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].BOTTOM:
                endY += offsetY;
                adjustY = -offsetY / 2;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].TOP:
                startY -= offsetY;
                adjustY = offsetY / 2;
                break;
        }
    }
    const positions = [];
    const normals = [];
    const uvBase = [];
    uvBase[0] = [
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1
    ];
    uvBase[1] = [
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1
    ];
    if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW) {
        uvBase[1] = [
            1,
            1,
            0,
            1,
            0,
            0,
            1,
            0
        ];
    }
    if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW) {
        uvBase[1] = [
            1,
            0,
            0,
            0,
            0,
            1,
            1,
            1
        ];
    }
    if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
        uvBase[1] = [
            0,
            1,
            1,
            1,
            1,
            0,
            0,
            0
        ];
    }
    let uvs = [];
    const colors = [];
    const indices = [];
    let index = 0;
    for(let y = 0; y < tilesY; y++){
        for(let x = 0; x < tilesX; x++){
            positions.push(-halfWidth + x * tileWidth + adjustX, -halfHeight + y * tileHeight + adjustY, 0);
            positions.push(-halfWidth + (x + 1) * tileWidth + adjustX, -halfHeight + y * tileHeight + adjustY, 0);
            positions.push(-halfWidth + (x + 1) * tileWidth + adjustX, -halfHeight + (y + 1) * tileHeight + adjustY, 0);
            positions.push(-halfWidth + x * tileWidth + adjustX, -halfHeight + (y + 1) * tileHeight + adjustY, 0);
            indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE) {
                uvs = uvs.concat(uvBase[(x % 2 + y % 2) % 2]);
            } else if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                uvs = uvs.concat(uvBase[y % 2]);
            } else {
                uvs = uvs.concat(uvBase[0]);
            }
            colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
            normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
            index += 4;
        }
    }
    //Part Tiles
    if (offsetX > 0 || offsetY > 0) {
        const partialBottomRow = offsetY > 0 && (alignV === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CENTER || alignV === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].TOP);
        const partialTopRow = offsetY > 0 && (alignV === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CENTER || alignV === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].BOTTOM);
        const partialLeftCol = offsetX > 0 && (alignH === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CENTER || alignH === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].RIGHT);
        const partialRightCol = offsetX > 0 && (alignH === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CENTER || alignH === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].LEFT);
        let uvPart = [];
        let a, b, c, d;
        //corners
        if (partialBottomRow && partialLeftCol) {
            //bottom left corner
            positions.push(startX + adjustX, startY + adjustY, 0);
            positions.push(-halfWidth + adjustX, startY + adjustY, 0);
            positions.push(-halfWidth + adjustX, startY + offsetY + adjustY, 0);
            positions.push(startX + adjustX, startY + offsetY + adjustY, 0);
            indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
            index += 4;
            a = 1 - offsetX / tileWidth;
            b = 1 - offsetY / tileHeight;
            c = 1;
            d = 1;
            uvPart = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW) {
                uvPart = [
                    1 - a,
                    1 - b,
                    1 - c,
                    1 - b,
                    1 - c,
                    1 - d,
                    1 - a,
                    1 - d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW) {
                uvPart = [
                    1 - a,
                    b,
                    1 - c,
                    b,
                    1 - c,
                    d,
                    1 - a,
                    d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                uvPart = [
                    a,
                    1 - b,
                    c,
                    1 - b,
                    c,
                    1 - d,
                    a,
                    1 - d
                ];
            }
            uvs = uvs.concat(uvPart);
            colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
            normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
        }
        if (partialBottomRow && partialRightCol) {
            //bottom right corner
            positions.push(halfWidth + adjustX, startY + adjustY, 0);
            positions.push(endX + adjustX, startY + adjustY, 0);
            positions.push(endX + adjustX, startY + offsetY + adjustY, 0);
            positions.push(halfWidth + adjustX, startY + offsetY + adjustY, 0);
            indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
            index += 4;
            a = 0;
            b = 1 - offsetY / tileHeight;
            c = offsetX / tileWidth;
            d = 1;
            uvPart = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE && tilesX % 2 === 0) {
                uvPart = [
                    1 - a,
                    1 - b,
                    1 - c,
                    1 - b,
                    1 - c,
                    1 - d,
                    1 - a,
                    1 - d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE && tilesX % 2 === 0) {
                uvPart = [
                    1 - a,
                    b,
                    1 - c,
                    b,
                    1 - c,
                    d,
                    1 - a,
                    d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE && tilesX % 2 === 0) {
                uvPart = [
                    a,
                    1 - b,
                    c,
                    1 - b,
                    c,
                    1 - d,
                    a,
                    1 - d
                ];
            }
            uvs = uvs.concat(uvPart);
            colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
            normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
        }
        if (partialTopRow && partialLeftCol) {
            //top left corner
            positions.push(startX + adjustX, halfHeight + adjustY, 0);
            positions.push(-halfWidth + adjustX, halfHeight + adjustY, 0);
            positions.push(-halfWidth + adjustX, endY + adjustY, 0);
            positions.push(startX + adjustX, endY + adjustY, 0);
            indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
            index += 4;
            a = 1 - offsetX / tileWidth;
            b = 0;
            c = 1;
            d = offsetY / tileHeight;
            uvPart = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW && tilesY % 2 === 1 || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE && tilesY % 1 === 0) {
                uvPart = [
                    1 - a,
                    1 - b,
                    1 - c,
                    1 - b,
                    1 - c,
                    1 - d,
                    1 - a,
                    1 - d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW && tilesY % 2 === 1 || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE && tilesY % 2 === 0) {
                uvPart = [
                    1 - a,
                    b,
                    1 - c,
                    b,
                    1 - c,
                    d,
                    1 - a,
                    d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW && tilesY % 2 === 1 || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE && tilesY % 2 === 0) {
                uvPart = [
                    a,
                    1 - b,
                    c,
                    1 - b,
                    c,
                    1 - d,
                    a,
                    1 - d
                ];
            }
            uvs = uvs.concat(uvPart);
            colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
            normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
        }
        if (partialTopRow && partialRightCol) {
            //top right corner
            positions.push(halfWidth + adjustX, halfHeight + adjustY, 0);
            positions.push(endX + adjustX, halfHeight + adjustY, 0);
            positions.push(endX + adjustX, endY + adjustY, 0);
            positions.push(halfWidth + adjustX, endY + adjustY, 0);
            indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
            index += 4;
            a = 0;
            b = 0;
            c = offsetX / tileWidth;
            d = offsetY / tileHeight;
            uvPart = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW && tilesY % 2 === 1 || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE && (tilesY + tilesX) % 2 === 1) {
                uvPart = [
                    1 - a,
                    1 - b,
                    1 - c,
                    1 - b,
                    1 - c,
                    1 - d,
                    1 - a,
                    1 - d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW && tilesY % 2 === 1 || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE && (tilesY + tilesX) % 2 === 1) {
                uvPart = [
                    1 - a,
                    b,
                    1 - c,
                    b,
                    1 - c,
                    d,
                    1 - a,
                    d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW && tilesY % 2 === 1 || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE && (tilesY + tilesX) % 2 === 1) {
                uvPart = [
                    a,
                    1 - b,
                    c,
                    1 - b,
                    c,
                    1 - d,
                    a,
                    1 - d
                ];
            }
            uvs = uvs.concat(uvPart);
            colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
            normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
        }
        //part rows
        if (partialBottomRow) {
            const uvBaseBR = [];
            a = 0;
            b = 1 - offsetY / tileHeight;
            c = 1;
            d = 1;
            uvBaseBR[0] = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            uvBaseBR[1] = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW) {
                uvBaseBR[1] = [
                    1 - a,
                    1 - b,
                    1 - c,
                    1 - b,
                    1 - c,
                    1 - d,
                    1 - a,
                    1 - d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW) {
                uvBaseBR[1] = [
                    1 - a,
                    b,
                    1 - c,
                    b,
                    1 - c,
                    d,
                    1 - a,
                    d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                uvBaseBR[1] = [
                    a,
                    1 - b,
                    c,
                    1 - b,
                    c,
                    1 - d,
                    a,
                    1 - d
                ];
            }
            for(let x = 0; x < tilesX; x++){
                positions.push(-halfWidth + x * tileWidth + adjustX, startY + adjustY, 0);
                positions.push(-halfWidth + (x + 1) * tileWidth + adjustX, startY + adjustY, 0);
                positions.push(-halfWidth + (x + 1) * tileWidth + adjustX, startY + offsetY + adjustY, 0);
                positions.push(-halfWidth + x * tileWidth + adjustX, startY + offsetY + adjustY, 0);
                indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
                index += 4;
                if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE) {
                    uvs = uvs.concat(uvBaseBR[(x + 1) % 2]);
                } else if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                    uvs = uvs.concat(uvBaseBR[1]);
                } else {
                    uvs = uvs.concat(uvBaseBR[0]);
                }
                colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
                normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
            }
        }
        if (partialTopRow) {
            const uvBaseTR = [];
            a = 0;
            b = 0;
            c = 1;
            d = offsetY / tileHeight;
            uvBaseTR[0] = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            uvBaseTR[1] = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW) {
                uvBaseTR[1] = [
                    1 - a,
                    1 - b,
                    1 - c,
                    1 - b,
                    1 - c,
                    1 - d,
                    1 - a,
                    1 - d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW) {
                uvBaseTR[1] = [
                    1 - a,
                    b,
                    1 - c,
                    b,
                    1 - c,
                    d,
                    1 - a,
                    d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                uvBaseTR[1] = [
                    a,
                    1 - b,
                    c,
                    1 - b,
                    c,
                    1 - d,
                    a,
                    1 - d
                ];
            }
            for(let x = 0; x < tilesX; x++){
                positions.push(-halfWidth + x * tileWidth + adjustX, endY - offsetY + adjustY, 0);
                positions.push(-halfWidth + (x + 1) * tileWidth + adjustX, endY - offsetY + adjustY, 0);
                positions.push(-halfWidth + (x + 1) * tileWidth + adjustX, endY + adjustY, 0);
                positions.push(-halfWidth + x * tileWidth + adjustX, endY + adjustY, 0);
                indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
                index += 4;
                if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE) {
                    uvs = uvs.concat(uvBaseTR[(x + tilesY) % 2]);
                } else if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                    uvs = uvs.concat(uvBaseTR[tilesY % 2]);
                } else {
                    uvs = uvs.concat(uvBaseTR[0]);
                }
                colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
                normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
            }
        }
        if (partialLeftCol) {
            const uvBaseLC = [];
            a = 1 - offsetX / tileWidth;
            b = 0;
            c = 1;
            d = 1;
            uvBaseLC[0] = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            uvBaseLC[1] = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW) {
                uvBaseLC[1] = [
                    1 - a,
                    1 - b,
                    1 - c,
                    1 - b,
                    1 - c,
                    1 - d,
                    1 - a,
                    1 - d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW) {
                uvBaseLC[1] = [
                    1 - a,
                    b,
                    1 - c,
                    b,
                    1 - c,
                    d,
                    1 - a,
                    d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                uvBaseLC[1] = [
                    a,
                    1 - b,
                    c,
                    1 - b,
                    c,
                    1 - d,
                    a,
                    1 - d
                ];
            }
            for(let y = 0; y < tilesY; y++){
                positions.push(startX + adjustX, -halfHeight + y * tileHeight + adjustY, 0);
                positions.push(startX + offsetX + adjustX, -halfHeight + y * tileHeight + adjustY, 0);
                positions.push(startX + offsetX + adjustX, -halfHeight + (y + 1) * tileHeight + adjustY, 0);
                positions.push(startX + adjustX, -halfHeight + (y + 1) * tileHeight + adjustY, 0);
                indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
                index += 4;
                if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE) {
                    uvs = uvs.concat(uvBaseLC[(y + 1) % 2]);
                } else if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                    uvs = uvs.concat(uvBaseLC[y % 2]);
                } else {
                    uvs = uvs.concat(uvBaseLC[0]);
                }
                colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
                normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
            }
        }
        if (partialRightCol) {
            const uvBaseRC = [];
            a = 0;
            b = 0;
            c = offsetX / tileHeight;
            d = 1;
            uvBaseRC[0] = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            uvBaseRC[1] = [
                a,
                b,
                c,
                b,
                c,
                d,
                a,
                d
            ];
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW) {
                uvBaseRC[1] = [
                    1 - a,
                    1 - b,
                    1 - c,
                    1 - b,
                    1 - c,
                    1 - d,
                    1 - a,
                    1 - d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW) {
                uvBaseRC[1] = [
                    1 - a,
                    b,
                    1 - c,
                    b,
                    1 - c,
                    d,
                    1 - a,
                    d
                ];
            }
            if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                uvBaseRC[1] = [
                    a,
                    1 - b,
                    c,
                    1 - b,
                    c,
                    1 - d,
                    a,
                    1 - d
                ];
            }
            for(let y = 0; y < tilesY; y++){
                positions.push(endX - offsetX + adjustX, -halfHeight + y * tileHeight + adjustY, 0);
                positions.push(endX + adjustX, -halfHeight + y * tileHeight + adjustY, 0);
                positions.push(endX + adjustX, -halfHeight + (y + 1) * tileHeight + adjustY, 0);
                positions.push(endX - offsetX + adjustX, -halfHeight + (y + 1) * tileHeight + adjustY, 0);
                indices.push(index, index + 1, index + 3, index + 1, index + 2, index + 3);
                index += 4;
                if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_TILE || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_TILE) {
                    uvs = uvs.concat(uvBaseRC[(y + tilesX) % 2]);
                } else if (flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ROTATE_ROW || flipTile === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].FLIP_N_ROTATE_ROW) {
                    uvs = uvs.concat(uvBaseRC[y % 2]);
                } else {
                    uvs = uvs.concat(uvBaseRC[0]);
                }
                colors.push(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
                normals.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
            }
        }
    }
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    // sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    const totalColors = sideOrientation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DOUBLESIDE ? colors.concat(colors) : colors;
    vertexData.colors = totalColors;
    return vertexData;
}
function CreateTiledPlane(name, options, scene = null) {
    const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    plane._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateTiledPlaneVertexData(options);
    vertexData.applyToMesh(plane, options.updatable);
    return plane;
}
const TiledPlaneBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateTiledPlane
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateTiledPlane = CreateTiledPlaneVertexData; //# sourceMappingURL=tiledPlaneBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tiledBoxBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateTiledBox",
    ()=>CreateTiledBox,
    "CreateTiledBoxVertexData",
    ()=>CreateTiledBoxVertexData,
    "TiledBoxBuilder",
    ()=>TiledBoxBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tiledPlaneBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const OP_ADD = 1;
const OP_SUB = -1;
function CreateTiledBoxVertexData(options) {
    const nbFaces = 6;
    const faceUV = options.faceUV || new Array(6);
    const faceColors = options.faceColors;
    const flipTile = options.pattern || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_FLIP;
    const width = options.width || options.size || 1;
    const height = options.height || options.size || 1;
    const depth = options.depth || options.size || 1;
    const tileWidth = options.tileWidth || options.tileSize || 1;
    const tileHeight = options.tileHeight || options.tileSize || 1;
    const alignH = options.alignHorizontal || 0;
    const alignV = options.alignVertical || 0;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    // default face colors and UV if undefined
    for(let f = 0; f < nbFaces; f++){
        if (faceUV[f] === undefined) {
            faceUV[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 1, 1);
        }
        if (faceColors && faceColors[f] === undefined) {
            faceColors[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
        }
    }
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const halfDepth = depth / 2;
    const faceVertexData = [];
    for(let f = 0; f < 2; f++){
        //front and back
        faceVertexData[f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledPlaneVertexData"])({
            pattern: flipTile,
            tileWidth: tileWidth,
            tileHeight: tileHeight,
            width: width,
            height: height,
            alignVertical: alignV,
            alignHorizontal: alignH,
            sideOrientation: sideOrientation
        });
    }
    for(let f = 2; f < 4; f++){
        //sides
        faceVertexData[f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledPlaneVertexData"])({
            pattern: flipTile,
            tileWidth: tileWidth,
            tileHeight: tileHeight,
            width: depth,
            height: height,
            alignVertical: alignV,
            alignHorizontal: alignH,
            sideOrientation: sideOrientation
        });
    }
    let baseAlignV = alignV;
    if (alignV === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].BOTTOM) {
        baseAlignV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].TOP;
    } else if (alignV === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].TOP) {
        baseAlignV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].BOTTOM;
    }
    for(let f = 4; f < 6; f++){
        //top and bottom
        faceVertexData[f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledPlaneVertexData"])({
            pattern: flipTile,
            tileWidth: tileWidth,
            tileHeight: tileHeight,
            width: width,
            height: depth,
            alignVertical: baseAlignV,
            alignHorizontal: alignH,
            sideOrientation: sideOrientation
        });
    }
    const positions = [];
    const normals = [];
    let uvs = [];
    let indices = [];
    const colors = [];
    const facePositions = [];
    const faceNormals = [];
    const newFaceUV = [];
    let lu = 0;
    let li = 0;
    for(let f = 0; f < nbFaces; f++){
        const len = faceVertexData[f].positions.length;
        facePositions[f] = [];
        faceNormals[f] = [];
        for(let p = 0; p < len / 3; p++){
            facePositions[f].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](faceVertexData[f].positions[3 * p], faceVertexData[f].positions[3 * p + 1], faceVertexData[f].positions[3 * p + 2]));
            faceNormals[f].push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](faceVertexData[f].normals[3 * p], faceVertexData[f].normals[3 * p + 1], faceVertexData[f].normals[3 * p + 2]));
        }
        // uvs
        lu = faceVertexData[f].uvs.length;
        newFaceUV[f] = [];
        for(let i = 0; i < lu; i += 2){
            newFaceUV[f][i] = faceUV[f].x + (faceUV[f].z - faceUV[f].x) * faceVertexData[f].uvs[i];
            newFaceUV[f][i + 1] = faceUV[f].y + (faceUV[f].w - faceUV[f].y) * faceVertexData[f].uvs[i + 1];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"]) {
                newFaceUV[f][i + 1] = 1.0 - newFaceUV[f][i + 1];
            }
        }
        uvs = uvs.concat(newFaceUV[f]);
        indices = indices.concat(faceVertexData[f].indices.map((x)=>x + li));
        li += facePositions[f].length;
        if (faceColors) {
            const color = faceColors[f];
            for(let p = 0; p < facePositions[f].length; p++){
                colors.push(color.r, color.g, color.b, color.a);
            }
        }
    }
    // Define transforms for each face
    const faceTransforms = [
        // FRONT
        {
            m: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationY(Math.PI),
            t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, halfDepth),
            op: OP_ADD
        },
        // BACK
        {
            m: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity(),
            t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, halfDepth),
            op: OP_SUB
        },
        // RIGHT
        {
            m: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationY(-Math.PI / 2),
            t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](halfWidth, 0, 0),
            op: OP_ADD
        },
        // LEFT
        {
            m: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationY(Math.PI / 2),
            t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](halfWidth, 0, 0),
            op: OP_SUB
        },
        // TOP
        {
            m: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationX(Math.PI / 2),
            t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, halfHeight, 0),
            op: OP_ADD
        },
        // BOTTOM
        {
            m: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationX(-Math.PI / 2),
            t: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, halfHeight, 0),
            op: OP_SUB
        }
    ];
    // Assemble positions and normals
    for(let f = 0; f < nbFaces; f++){
        const { m, t, op } = faceTransforms[f];
        for (const v of facePositions[f]){
            const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, m);
            const final = op === OP_ADD ? p.add(t) : p.subtract(t);
            positions.push(final.x, final.y, final.z);
        }
        for (const n of faceNormals[f]){
            const nn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormal(n, m);
            normals.push(nn.x, nn.y, nn.z);
        }
    }
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    if (faceColors) {
        const totalColors = sideOrientation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DOUBLESIDE ? colors.concat(colors) : colors;
        vertexData.colors = totalColors;
    }
    return vertexData;
}
function CreateTiledBox(name, options, scene = null) {
    const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    box._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateTiledBoxVertexData(options);
    vertexData.applyToMesh(box, options.updatable);
    return box;
}
const TiledBoxBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateTiledBox
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateTiledBox = CreateTiledBoxVertexData; //# sourceMappingURL=tiledBoxBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusKnotBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateTorusKnot",
    ()=>CreateTorusKnot,
    "CreateTorusKnotVertexData",
    ()=>CreateTorusKnotVertexData,
    "TorusKnotBuilder",
    ()=>TorusKnotBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
function CreateTorusKnotVertexData(options) {
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    const radius = options.radius || 2;
    const tube = options.tube || 0.5;
    const radialSegments = options.radialSegments || 32;
    const tubularSegments = options.tubularSegments || 32;
    const p = options.p || 2;
    const q = options.q || 3;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    // Helper
    const getPos = (angle)=>{
        const cu = Math.cos(angle);
        const su = Math.sin(angle);
        const quOverP = q / p * angle;
        const cs = Math.cos(quOverP);
        const tx = radius * (2 + cs) * 0.5 * cu;
        const ty = radius * (2 + cs) * su * 0.5;
        const tz = radius * Math.sin(quOverP) * 0.5;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](tx, ty, tz);
    };
    // Vertices
    let i;
    let j;
    for(i = 0; i <= radialSegments; i++){
        const modI = i % radialSegments;
        const u = modI / radialSegments * 2 * p * Math.PI;
        const p1 = getPos(u);
        const p2 = getPos(u + 0.01);
        const tang = p2.subtract(p1);
        let n = p2.add(p1);
        const bitan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(tang, n);
        n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(bitan, tang);
        bitan.normalize();
        n.normalize();
        for(j = 0; j < tubularSegments; j++){
            const modJ = j % tubularSegments;
            const v = modJ / tubularSegments * 2 * Math.PI;
            const cx = -tube * Math.cos(v);
            const cy = tube * Math.sin(v);
            positions.push(p1.x + cx * n.x + cy * bitan.x);
            positions.push(p1.y + cx * n.y + cy * bitan.y);
            positions.push(p1.z + cx * n.z + cy * bitan.z);
            uvs.push(i / radialSegments);
            uvs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - j / tubularSegments : j / tubularSegments);
        }
    }
    for(i = 0; i < radialSegments; i++){
        for(j = 0; j < tubularSegments; j++){
            const jNext = (j + 1) % tubularSegments;
            const a = i * tubularSegments + j;
            const b = (i + 1) * tubularSegments + j;
            const c = (i + 1) * tubularSegments + jNext;
            const d = i * tubularSegments + jNext;
            indices.push(d);
            indices.push(b);
            indices.push(a);
            indices.push(d);
            indices.push(c);
            indices.push(b);
        }
    }
    // Normals
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ComputeNormals(positions, indices, normals);
    // Sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateTorusKnot(name, options = {}, scene) {
    const torusKnot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    torusKnot._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateTorusKnotVertexData(options);
    vertexData.applyToMesh(torusKnot, options.updatable);
    return torusKnot;
}
const TorusKnotBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateTorusKnot
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateTorusKnot = CreateTorusKnotVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateTorusKnot = (name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable, sideOrientation)=>{
    const options = {
        radius,
        tube,
        radialSegments,
        tubularSegments,
        p,
        q,
        sideOrientation,
        updatable
    };
    return CreateTorusKnot(name, options, scene);
}; //# sourceMappingURL=torusKnotBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "CreateDashedLines",
    ()=>CreateDashedLines,
    "CreateDashedLinesVertexData",
    ()=>CreateDashedLinesVertexData,
    "CreateLineSystem",
    ()=>CreateLineSystem,
    "CreateLineSystemVertexData",
    ()=>CreateLineSystemVertexData,
    "CreateLines",
    ()=>CreateLines,
    "LinesBuilder",
    ()=>LinesBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$linesMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/linesMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function CreateLineSystemVertexData(options) {
    const indices = [];
    const positions = [];
    const lines = options.lines;
    const colors = options.colors;
    const vertexColors = [];
    let idx = 0;
    for(let l = 0; l < lines.length; l++){
        const points = lines[l];
        for(let index = 0; index < points.length; index++){
            const { x, y, z } = points[index];
            positions.push(x, y, z);
            if (colors) {
                const color = colors[l];
                const { r, g, b, a } = color[index];
                vertexColors.push(r, g, b, a);
            }
            if (index > 0) {
                indices.push(idx - 1);
                indices.push(idx);
            }
            idx++;
        }
    }
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    if (colors) {
        vertexData.colors = vertexColors;
    }
    return vertexData;
}
function CreateDashedLinesVertexData(options) {
    const dashSize = options.dashSize || 3;
    const gapSize = options.gapSize || 1;
    const dashNb = options.dashNb || 200;
    const points = options.points;
    const positions = [];
    const indices = [];
    const curvect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    let lg = 0;
    let nb = 0;
    let shft = 0;
    let dashshft = 0;
    let curshft = 0;
    let idx = 0;
    let i = 0;
    for(i = 0; i < points.length - 1; i++){
        points[i + 1].subtractToRef(points[i], curvect);
        lg += curvect.length();
    }
    shft = lg / dashNb;
    dashshft = dashSize * shft / (dashSize + gapSize);
    for(i = 0; i < points.length - 1; i++){
        points[i + 1].subtractToRef(points[i], curvect);
        nb = Math.floor(curvect.length() / shft);
        curvect.normalize();
        for(let j = 0; j < nb; j++){
            curshft = shft * j;
            positions.push(points[i].x + curshft * curvect.x, points[i].y + curshft * curvect.y, points[i].z + curshft * curvect.z);
            positions.push(points[i].x + (curshft + dashshft) * curvect.x, points[i].y + (curshft + dashshft) * curvect.y, points[i].z + (curshft + dashshft) * curvect.z);
            indices.push(idx, idx + 1);
            idx += 2;
        }
    }
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.positions = positions;
    vertexData.indices = indices;
    return vertexData;
}
function CreateLineSystem(name, options, scene = null) {
    const instance = options.instance;
    const lines = options.lines;
    const colors = options.colors;
    if (instance) {
        // lines update
        const positions = instance.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
        let vertexColor;
        let lineColors;
        if (colors) {
            vertexColor = instance.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
        }
        let i = 0;
        let c = 0;
        for(let l = 0; l < lines.length; l++){
            const points = lines[l];
            for(let p = 0; p < points.length; p++){
                positions[i] = points[p].x;
                positions[i + 1] = points[p].y;
                positions[i + 2] = points[p].z;
                if (colors && vertexColor) {
                    lineColors = colors[l];
                    vertexColor[c] = lineColors[p].r;
                    vertexColor[c + 1] = lineColors[p].g;
                    vertexColor[c + 2] = lineColors[p].b;
                    vertexColor[c + 3] = lineColors[p].a;
                    c += 4;
                }
                i += 3;
            }
        }
        instance.updateVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, positions, false, false);
        if (colors && vertexColor) {
            instance.updateVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind, vertexColor, false, false);
        }
        instance.refreshBoundingInfo();
        return instance;
    }
    // line system creation
    const useVertexColor = colors ? true : false;
    const lineSystem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$linesMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinesMesh"](name, scene, null, undefined, undefined, useVertexColor, options.useVertexAlpha, options.material);
    const vertexData = CreateLineSystemVertexData(options);
    vertexData.applyToMesh(lineSystem, options.updatable);
    return lineSystem;
}
function CreateLines(name, options, scene = null) {
    const colors = options.colors ? [
        options.colors
    ] : null;
    const lines = CreateLineSystem(name, {
        lines: [
            options.points
        ],
        updatable: options.updatable,
        instance: options.instance,
        colors: colors,
        useVertexAlpha: options.useVertexAlpha,
        material: options.material
    }, scene);
    return lines;
}
function CreateDashedLines(name, options, scene = null) {
    const points = options.points;
    const instance = options.instance;
    const gapSize = options.gapSize || 1;
    const dashSize = options.dashSize || 3;
    if (instance) {
        //  dashed lines update
        const positionFunction = (positions)=>{
            const curvect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            const nbSeg = positions.length / 6;
            let lg = 0;
            let nb = 0;
            let shft = 0;
            let dashshft = 0;
            let curshft = 0;
            let p = 0;
            let i = 0;
            let j = 0;
            for(i = 0; i < points.length - 1; i++){
                points[i + 1].subtractToRef(points[i], curvect);
                lg += curvect.length();
            }
            shft = lg / nbSeg;
            const dashSize = instance._creationDataStorage.dashSize;
            const gapSize = instance._creationDataStorage.gapSize;
            dashshft = dashSize * shft / (dashSize + gapSize);
            for(i = 0; i < points.length - 1; i++){
                points[i + 1].subtractToRef(points[i], curvect);
                nb = Math.floor(curvect.length() / shft);
                curvect.normalize();
                j = 0;
                while(j < nb && p < positions.length){
                    curshft = shft * j;
                    positions[p] = points[i].x + curshft * curvect.x;
                    positions[p + 1] = points[i].y + curshft * curvect.y;
                    positions[p + 2] = points[i].z + curshft * curvect.z;
                    positions[p + 3] = points[i].x + (curshft + dashshft) * curvect.x;
                    positions[p + 4] = points[i].y + (curshft + dashshft) * curvect.y;
                    positions[p + 5] = points[i].z + (curshft + dashshft) * curvect.z;
                    p += 6;
                    j++;
                }
            }
            while(p < positions.length){
                positions[p] = points[i].x;
                positions[p + 1] = points[i].y;
                positions[p + 2] = points[i].z;
                p += 3;
            }
        };
        if (options.dashNb || options.dashSize || options.gapSize || options.useVertexAlpha || options.material) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored.");
        }
        instance.updateMeshPositions(positionFunction, false);
        return instance;
    }
    // dashed lines creation
    const dashedLines = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$linesMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinesMesh"](name, scene, null, undefined, undefined, undefined, options.useVertexAlpha, options.material);
    const vertexData = CreateDashedLinesVertexData(options);
    vertexData.applyToMesh(dashedLines, options.updatable);
    dashedLines._creationDataStorage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CreationDataStorage"]();
    dashedLines._creationDataStorage.dashSize = dashSize;
    dashedLines._creationDataStorage.gapSize = gapSize;
    return dashedLines;
}
const LinesBuilder = {
    CreateDashedLines,
    CreateLineSystem,
    CreateLines
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateLineSystem = CreateLineSystemVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateDashedLines = CreateDashedLinesVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateLines = (name, points, scene = null, updatable = false, instance = null)=>{
    const options = {
        points,
        updatable,
        instance
    };
    return CreateLines(name, options, scene);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateDashedLines = (name, points, dashSize, gapSize, dashNb, scene = null, updatable, instance)=>{
    const options = {
        points,
        dashSize,
        gapSize,
        dashNb,
        updatable,
        instance
    };
    return CreateDashedLines(name, options, scene);
}; //# sourceMappingURL=linesBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polygonBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreatePolygon",
    ()=>CreatePolygon,
    "CreatePolygonVertexData",
    ()=>CreatePolygonVertexData,
    "ExtrudePolygon",
    ()=>ExtrudePolygon,
    "PolygonBuilder",
    ()=>PolygonBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$polygonMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/polygonMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function CreatePolygonVertexData(polygon, sideOrientation, fUV, fColors, frontUVs, backUVs, wrp) {
    const faceUV = fUV || new Array(3);
    const faceColors = fColors;
    const colors = [];
    const wrap = wrp || false;
    // default face colors and UV if undefined
    for(let f = 0; f < 3; f++){
        if (faceUV[f] === undefined) {
            faceUV[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 1, 1);
        }
        if (faceColors && faceColors[f] === undefined) {
            faceColors[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
        }
    }
    const positions = polygon.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
    const normals = polygon.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
    const uvs = polygon.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
    const indices = polygon.getIndices();
    const startIndex = positions.length / 9;
    let disp = 0;
    let distX = 0;
    let distZ = 0;
    let dist = 0;
    let totalLen = 0;
    const cumulate = [
        0
    ];
    if (wrap) {
        for(let idx = startIndex; idx < positions.length / 3; idx += 4){
            distX = positions[3 * (idx + 2)] - positions[3 * idx];
            distZ = positions[3 * (idx + 2) + 2] - positions[3 * idx + 2];
            dist = Math.sqrt(distX * distX + distZ * distZ);
            totalLen += dist;
            cumulate.push(totalLen);
        }
    }
    // set face colours and textures
    let idx = 0;
    let face = 0;
    for(let index = 0; index < normals.length; index += 3){
        //Edge Face  no. 1
        if (Math.abs(normals[index + 1]) < 0.001) {
            face = 1;
        }
        //Top Face  no. 0
        if (Math.abs(normals[index + 1] - 1) < 0.001) {
            face = 0;
        }
        //Bottom Face  no. 2
        if (Math.abs(normals[index + 1] + 1) < 0.001) {
            face = 2;
        }
        idx = index / 3;
        if (face === 1) {
            disp = idx - startIndex;
            if (disp % 4 < 1.5) {
                if (wrap) {
                    uvs[2 * idx] = faceUV[face].x + (faceUV[face].z - faceUV[face].x) * cumulate[Math.floor(disp / 4)] / totalLen;
                } else {
                    uvs[2 * idx] = faceUV[face].x;
                }
            } else {
                if (wrap) {
                    uvs[2 * idx] = faceUV[face].x + (faceUV[face].z - faceUV[face].x) * cumulate[Math.floor(disp / 4) + 1] / totalLen;
                } else {
                    uvs[2 * idx] = faceUV[face].z;
                }
            }
            if (disp % 2 === 0) {
                uvs[2 * idx + 1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - faceUV[face].w : faceUV[face].w;
            } else {
                uvs[2 * idx + 1] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - faceUV[face].y : faceUV[face].y;
            }
        } else {
            uvs[2 * idx] = (1 - uvs[2 * idx]) * faceUV[face].x + uvs[2 * idx] * faceUV[face].z;
            uvs[2 * idx + 1] = (1 - uvs[2 * idx + 1]) * faceUV[face].y + uvs[2 * idx + 1] * faceUV[face].w;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"]) {
                uvs[2 * idx + 1] = 1.0 - uvs[2 * idx + 1];
            }
        }
        if (faceColors) {
            colors.push(faceColors[face].r, faceColors[face].g, faceColors[face].b, faceColors[face].a);
        }
    }
    // sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, frontUVs, backUVs);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    if (faceColors) {
        const totalColors = sideOrientation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DOUBLESIDE ? colors.concat(colors) : colors;
        vertexData.colors = totalColors;
    }
    return vertexData;
}
function CreatePolygon(name, options, scene = null, earcutInjection = earcut) {
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    const shape = options.shape;
    const holes = options.holes || [];
    const depth = options.depth || 0;
    const smoothingThreshold = options.smoothingThreshold || 2;
    const contours = [];
    let hole = [];
    for(let i = 0; i < shape.length; i++){
        contours[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](shape[i].x, shape[i].z);
    }
    const epsilon = 0.00000001;
    if (contours[0].equalsWithEpsilon(contours[contours.length - 1], epsilon)) {
        contours.pop();
    }
    const polygonTriangulation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$polygonMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolygonMeshBuilder"](name, contours, scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, earcutInjection);
    for(let hNb = 0; hNb < holes.length; hNb++){
        hole = [];
        for(let hPoint = 0; hPoint < holes[hNb].length; hPoint++){
            hole.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](holes[hNb][hPoint].x, holes[hNb][hPoint].z));
        }
        polygonTriangulation.addHole(hole);
    }
    //updatability is set during applyToMesh; setting to true in triangulation build produces errors
    const polygon = polygonTriangulation.build(false, depth, smoothingThreshold);
    polygon._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreatePolygonVertexData(polygon, options.sideOrientation, options.faceUV, options.faceColors, options.frontUVs, options.backUVs, options.wrap);
    vertexData.applyToMesh(polygon, options.updatable);
    return polygon;
}
function ExtrudePolygon(name, options, scene = null, earcutInjection = earcut) {
    return CreatePolygon(name, options, scene, earcutInjection);
}
const PolygonBuilder = {
    ExtrudePolygon,
    CreatePolygon
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreatePolygon = CreatePolygonVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreatePolygon = (name, shape, scene, holes, updatable, sideOrientation, earcutInjection = earcut)=>{
    const options = {
        shape: shape,
        holes: holes,
        updatable: updatable,
        sideOrientation: sideOrientation
    };
    return CreatePolygon(name, options, scene, earcutInjection);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ExtrudePolygon = (name, shape, depth, scene, holes, updatable, sideOrientation, earcutInjection = earcut)=>{
    const options = {
        shape: shape,
        holes: holes,
        depth: depth,
        updatable: updatable,
        sideOrientation: sideOrientation
    };
    return ExtrudePolygon(name, options, scene, earcutInjection);
}; //# sourceMappingURL=polygonBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/shapeBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExtrudeShape",
    ()=>ExtrudeShape,
    "ExtrudeShapeCustom",
    ()=>ExtrudeShapeCustom,
    "ShapeBuilder",
    ()=>ShapeBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/ribbonBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.path.js [app-ssr] (ecmascript)");
;
;
;
;
function ExtrudeShape(name, options, scene = null) {
    const path = options.path;
    const shape = options.shape;
    const scale = options.scale || 1;
    const rotation = options.rotation || 0;
    const cap = options.cap === 0 ? 0 : options.cap || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP;
    const updatable = options.updatable;
    const sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    const instance = options.instance || null;
    const invertUV = options.invertUV || false;
    const closeShape = options.closeShape || false;
    const closePath = options.closePath || false;
    const capFunction = options.capFunction || null;
    return ExtrudeShapeGeneric(name, shape, path, scale, rotation, null, null, closePath, closeShape, cap, false, scene, updatable ? true : false, sideOrientation, instance, invertUV, options.frontUVs || null, options.backUVs || null, options.firstNormal || null, options.adjustFrame ? true : false, capFunction);
}
function ExtrudeShapeCustom(name, options, scene = null) {
    const path = options.path;
    const shape = options.shape;
    const scaleFunction = options.scaleFunction || (()=>{
        return 1;
    });
    const rotationFunction = options.rotationFunction || (()=>{
        return 0;
    });
    const ribbonCloseArray = options.closePath || options.ribbonCloseArray || false;
    const ribbonClosePath = options.closeShape || options.ribbonClosePath || false;
    const cap = options.cap === 0 ? 0 : options.cap || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP;
    const updatable = options.updatable;
    const firstNormal = options.firstNormal || null;
    const adjustFrame = options.adjustFrame || false;
    const sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    const instance = options.instance;
    const invertUV = options.invertUV || false;
    const capFunction = options.capFunction || null;
    return ExtrudeShapeGeneric(name, shape, path, null, null, scaleFunction, rotationFunction, ribbonCloseArray, ribbonClosePath, cap, true, scene, updatable ? true : false, sideOrientation, instance || null, invertUV, options.frontUVs || null, options.backUVs || null, firstNormal, adjustFrame, capFunction || null);
}
function ExtrudeShapeGeneric(name, shape, curve, scale, rotation, scaleFunction, rotateFunction, rbCA, rbCP, cap, custom, scene, updtbl, side, instance, invertUV, frontUVs, backUVs, firstNormal, adjustFrame, capFunction) {
    // extrusion geometry
    const extrusionPathArray = (shape, curve, path3D, shapePaths, scale, rotation, scaleFunction, rotateFunction, cap, custom, adjustFrame)=>{
        const tangents = path3D.getTangents();
        const normals = path3D.getNormals();
        const binormals = path3D.getBinormals();
        const distances = path3D.getDistances();
        if (adjustFrame) {
            /* fix tangents,normals, binormals */ for(let i = 0; i < tangents.length; i++){
                if (tangents[i].x == 0 && tangents[i].y == 0 && tangents[i].z == 0) {
                    tangents[i].copyFrom(tangents[i - 1]);
                }
                if (normals[i].x == 0 && normals[i].y == 0 && normals[i].z == 0) {
                    normals[i].copyFrom(normals[i - 1]);
                }
                if (binormals[i].x == 0 && binormals[i].y == 0 && binormals[i].z == 0) {
                    binormals[i].copyFrom(binormals[i - 1]);
                }
                if (i > 0) {
                    let v = tangents[i - 1];
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(v, tangents[i]) < 0) {
                        tangents[i].scaleInPlace(-1);
                    }
                    v = normals[i - 1];
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(v, normals[i]) < 0) {
                        normals[i].scaleInPlace(-1);
                    }
                    v = binormals[i - 1];
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(v, binormals[i]) < 0) {
                        binormals[i].scaleInPlace(-1);
                    }
                }
            }
        }
        let angle = 0;
        const returnScale = ()=>{
            return scale !== null ? scale : 1;
        };
        const returnRotation = ()=>{
            return rotation !== null ? rotation : 0;
        };
        const rotate = custom && rotateFunction ? rotateFunction : returnRotation;
        const scl = custom && scaleFunction ? scaleFunction : returnScale;
        let index = cap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP || cap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_END ? 0 : 2;
        const rotationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        for(let i = 0; i < curve.length; i++){
            const shapePath = [];
            const angleStep = rotate(i, distances[i]);
            const scaleRatio = scl(i, distances[i]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationAxisToRef(tangents[i], angle, rotationMatrix);
            for(let p = 0; p < shape.length; p++){
                const planed = tangents[i].scale(shape[p].z).add(normals[i].scale(shape[p].x)).add(binormals[i].scale(shape[p].y));
                const rotated = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(planed, rotationMatrix, rotated);
                rotated.scaleInPlace(scaleRatio).addInPlace(curve[i]);
                shapePath[p] = rotated;
            }
            shapePaths[index] = shapePath;
            angle += angleStep;
            index++;
        }
        // cap
        const defaultCapPath = (shapePath)=>{
            const pointCap = Array();
            const barycenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            let i;
            for(i = 0; i < shapePath.length; i++){
                barycenter.addInPlace(shapePath[i]);
            }
            barycenter.scaleInPlace(1.0 / shapePath.length);
            for(i = 0; i < shapePath.length; i++){
                pointCap.push(barycenter);
            }
            return pointCap;
        };
        const capPath = capFunction || defaultCapPath;
        switch(cap){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP:
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_START:
                shapePaths[0] = capPath(shapePaths[2]);
                shapePaths[1] = shapePaths[2];
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_END:
                shapePaths[index] = shapePaths[index - 1];
                shapePaths[index + 1] = capPath(shapePaths[index - 1]);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_ALL:
                shapePaths[0] = capPath(shapePaths[2]);
                shapePaths[1] = shapePaths[2];
                shapePaths[index] = shapePaths[index - 1];
                shapePaths[index + 1] = capPath(shapePaths[index - 1]);
                break;
            default:
                break;
        }
        return shapePaths;
    };
    let path3D;
    let pathArray;
    if (instance) {
        // instance update
        const storage = instance._creationDataStorage;
        path3D = firstNormal ? storage.path3D.update(curve, firstNormal) : storage.path3D.update(curve);
        pathArray = extrusionPathArray(shape, curve, storage.path3D, storage.pathArray, scale, rotation, scaleFunction, rotateFunction, storage.cap, custom, adjustFrame);
        instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateRibbon"])("", {
            pathArray,
            closeArray: false,
            closePath: false,
            offset: 0,
            updatable: false,
            sideOrientation: 0,
            instance
        }, scene || undefined);
        return instance;
    }
    // extruded shape creation
    path3D = firstNormal ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Path3D"](curve, firstNormal) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Path3D"](curve);
    const newShapePaths = new Array();
    cap = cap < 0 || cap > 3 ? 0 : cap;
    pathArray = extrusionPathArray(shape, curve, path3D, newShapePaths, scale, rotation, scaleFunction, rotateFunction, cap, custom, adjustFrame);
    const extrudedGeneric = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateRibbon"])(name, {
        pathArray: pathArray,
        closeArray: rbCA,
        closePath: rbCP,
        updatable: updtbl,
        sideOrientation: side,
        invertUV: invertUV,
        frontUVs: frontUVs || undefined,
        backUVs: backUVs || undefined
    }, scene);
    extrudedGeneric._creationDataStorage.pathArray = pathArray;
    extrudedGeneric._creationDataStorage.path3D = path3D;
    extrudedGeneric._creationDataStorage.cap = cap;
    return extrudedGeneric;
}
const ShapeBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ExtrudeShape,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ExtrudeShapeCustom
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ExtrudeShape = (name, shape, path, scale, rotation, cap, scene = null, updatable, sideOrientation, instance)=>{
    const options = {
        shape: shape,
        path: path,
        scale: scale,
        rotation: rotation,
        cap: cap === 0 ? 0 : cap || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP,
        sideOrientation: sideOrientation,
        instance: instance,
        updatable: updatable
    };
    return ExtrudeShape(name, options, scene);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].ExtrudeShapeCustom = (name, shape, path, scaleFunction, rotationFunction, ribbonCloseArray, ribbonClosePath, cap, scene, updatable, sideOrientation, instance)=>{
    const options = {
        shape: shape,
        path: path,
        scaleFunction: scaleFunction,
        rotationFunction: rotationFunction,
        ribbonCloseArray: ribbonCloseArray,
        ribbonClosePath: ribbonClosePath,
        cap: cap === 0 ? 0 : cap || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP,
        sideOrientation: sideOrientation,
        instance: instance,
        updatable: updatable
    };
    return ExtrudeShapeCustom(name, options, scene);
}; //# sourceMappingURL=shapeBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/latheBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateLathe",
    ()=>CreateLathe,
    "LatheBuilder",
    ()=>LatheBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/ribbonBuilder.js [app-ssr] (ecmascript)");
;
;
;
function CreateLathe(name, options, scene = null) {
    const arc = options.arc ? options.arc <= 0 || options.arc > 1 ? 1.0 : options.arc : 1.0;
    const closed = options.closed === undefined ? true : options.closed;
    const shape = options.shape;
    const radius = options.radius || 1;
    const tessellation = options.tessellation || 64;
    const clip = options.clip || 0;
    const updatable = options.updatable;
    const sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    const cap = options.cap || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP;
    const pi2 = Math.PI * 2;
    const paths = [];
    const invertUV = options.invertUV || false;
    let i = 0;
    let p = 0;
    const step = pi2 / tessellation * arc;
    let rotated;
    let path;
    for(i = 0; i <= tessellation - clip; i++){
        path = [];
        if (cap == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_START || cap == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_ALL) {
            path.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, shape[0].y, 0));
            path.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(i * step) * shape[0].x * radius, shape[0].y, Math.sin(i * step) * shape[0].x * radius));
        }
        for(p = 0; p < shape.length; p++){
            rotated = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(i * step) * shape[p].x * radius, shape[p].y, Math.sin(i * step) * shape[p].x * radius);
            path.push(rotated);
        }
        if (cap == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_END || cap == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_ALL) {
            path.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](Math.cos(i * step) * shape[shape.length - 1].x * radius, shape[shape.length - 1].y, Math.sin(i * step) * shape[shape.length - 1].x * radius));
            path.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, shape[shape.length - 1].y, 0));
        }
        paths.push(path);
    }
    // lathe ribbon
    const lathe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateRibbon"])(name, {
        pathArray: paths,
        closeArray: closed,
        sideOrientation: sideOrientation,
        updatable: updatable,
        invertUV: invertUV,
        frontUVs: options.frontUVs,
        backUVs: options.backUVs
    }, scene);
    return lathe;
}
const LatheBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateLathe
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateLathe = (name, shape, radius, tessellation, scene, updatable, sideOrientation)=>{
    const options = {
        shape: shape,
        radius: radius,
        tessellation: tessellation,
        sideOrientation: sideOrientation,
        updatable: updatable
    };
    return CreateLathe(name, options, scene);
}; //# sourceMappingURL=latheBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tubeBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateTube",
    ()=>CreateTube,
    "TubeBuilder",
    ()=>TubeBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/ribbonBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.path.js [app-ssr] (ecmascript)");
;
;
;
;
function CreateTube(name, options, scene = null) {
    const path = options.path;
    let instance = options.instance;
    let radius = 1.0;
    if (options.radius !== undefined) {
        radius = options.radius;
    } else if (instance) {
        radius = instance._creationDataStorage.radius;
    }
    const tessellation = options.tessellation || 64 | 0;
    const radiusFunction = options.radiusFunction || null;
    let cap = options.cap || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP;
    const invertUV = options.invertUV || false;
    const updatable = options.updatable;
    const sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    options.arc = options.arc && (options.arc <= 0.0 || options.arc > 1.0) ? 1.0 : options.arc || 1.0;
    // tube geometry
    const tubePathArray = (path, path3D, circlePaths, radius, tessellation, radiusFunction, cap, arc)=>{
        const tangents = path3D.getTangents();
        const normals = path3D.getNormals();
        const distances = path3D.getDistances();
        const pi2 = Math.PI * 2;
        const step = pi2 / tessellation * arc;
        const returnRadius = ()=>radius;
        const radiusFunctionFinal = radiusFunction || returnRadius;
        let circlePath;
        let rad;
        let normal;
        let rotated;
        const rotationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        let index = cap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP || cap === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_END ? 0 : 2;
        for(let i = 0; i < path.length; i++){
            rad = radiusFunctionFinal(i, distances[i]); // current radius
            circlePath = Array(); // current circle array
            normal = normals[i]; // current normal
            for(let t = 0; t < tessellation; t++){
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationAxisToRef(tangents[i], step * t, rotationMatrix);
                rotated = circlePath[t] ? circlePath[t] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(normal, rotationMatrix, rotated);
                rotated.scaleInPlace(rad).addInPlace(path[i]);
                circlePath[t] = rotated;
            }
            circlePaths[index] = circlePath;
            index++;
        }
        // cap
        const capPath = (nbPoints, pathIndex)=>{
            const pointCap = Array();
            for(let i = 0; i < nbPoints; i++){
                pointCap.push(path[pathIndex]);
            }
            return pointCap;
        };
        switch(cap){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].NO_CAP:
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_START:
                circlePaths[0] = capPath(tessellation, 0);
                circlePaths[1] = circlePaths[2].slice(0);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_END:
                circlePaths[index] = circlePaths[index - 1].slice(0);
                circlePaths[index + 1] = capPath(tessellation, path.length - 1);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CAP_ALL:
                circlePaths[0] = capPath(tessellation, 0);
                circlePaths[1] = circlePaths[2].slice(0);
                circlePaths[index] = circlePaths[index - 1].slice(0);
                circlePaths[index + 1] = capPath(tessellation, path.length - 1);
                break;
            default:
                break;
        }
        return circlePaths;
    };
    let path3D;
    let pathArray;
    if (instance) {
        // tube update
        const storage = instance._creationDataStorage;
        const arc = options.arc || storage.arc;
        path3D = storage.path3D.update(path);
        pathArray = tubePathArray(path, path3D, storage.pathArray, radius, storage.tessellation, radiusFunction, storage.cap, arc);
        instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateRibbon"])("", {
            pathArray: pathArray,
            instance: instance
        });
        // Update mode, no need to recreate the storage.
        storage.path3D = path3D;
        storage.pathArray = pathArray;
        storage.arc = arc;
        storage.radius = radius;
        return instance;
    }
    // tube creation
    path3D = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Path3D"](path);
    const newPathArray = new Array();
    cap = cap < 0 || cap > 3 ? 0 : cap;
    pathArray = tubePathArray(path, path3D, newPathArray, radius, tessellation, radiusFunction, cap, options.arc);
    const tube = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateRibbon"])(name, {
        pathArray: pathArray,
        closePath: true,
        closeArray: false,
        updatable: updatable,
        sideOrientation: sideOrientation,
        invertUV: invertUV,
        frontUVs: options.frontUVs,
        backUVs: options.backUVs
    }, scene);
    tube._creationDataStorage.pathArray = pathArray;
    tube._creationDataStorage.path3D = path3D;
    tube._creationDataStorage.tessellation = tessellation;
    tube._creationDataStorage.cap = cap;
    tube._creationDataStorage.arc = options.arc;
    tube._creationDataStorage.radius = radius;
    return tube;
}
const TubeBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateTube
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateTube = (name, path, radius, tessellation, radiusFunction, cap, scene, updatable, sideOrientation, instance)=>{
    const options = {
        path: path,
        radius: radius,
        tessellation: tessellation,
        radiusFunction: radiusFunction,
        arc: 1,
        cap: cap,
        updatable: updatable,
        sideOrientation: sideOrientation,
        instance: instance
    };
    return CreateTube(name, options, scene);
}; //# sourceMappingURL=tubeBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polyhedronBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreatePolyhedron",
    ()=>CreatePolyhedron,
    "CreatePolyhedronVertexData",
    ()=>CreatePolyhedronVertexData,
    "PolyhedronBuilder",
    ()=>PolyhedronBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
;
function CreatePolyhedronVertexData(options) {
    // provided polyhedron types :
    // 0 : Tetrahedron, 1 : Octahedron, 2 : Dodecahedron, 3 : Icosahedron, 4 : Rhombicuboctahedron, 5 : Triangular Prism, 6 : Pentagonal Prism, 7 : Hexagonal Prism, 8 : Square Pyramid (J1)
    // 9 : Pentagonal Pyramid (J2), 10 : Triangular Dipyramid (J12), 11 : Pentagonal Dipyramid (J13), 12 : Elongated Square Dipyramid (J15), 13 : Elongated Pentagonal Dipyramid (J16), 14 : Elongated Pentagonal Cupola (J20)
    const polyhedra = [];
    polyhedra[0] = {
        vertex: [
            [
                0,
                0,
                1.732051
            ],
            [
                1.632993,
                0,
                -0.5773503
            ],
            [
                -0.8164966,
                1.414214,
                -0.5773503
            ],
            [
                -0.8164966,
                -1.414214,
                -0.5773503
            ]
        ],
        face: [
            [
                0,
                1,
                2
            ],
            [
                0,
                2,
                3
            ],
            [
                0,
                3,
                1
            ],
            [
                1,
                3,
                2
            ]
        ]
    };
    polyhedra[1] = {
        vertex: [
            [
                0,
                0,
                1.414214
            ],
            [
                1.414214,
                0,
                0
            ],
            [
                0,
                1.414214,
                0
            ],
            [
                -1.414214,
                0,
                0
            ],
            [
                0,
                -1.414214,
                0
            ],
            [
                0,
                0,
                -1.414214
            ]
        ],
        face: [
            [
                0,
                1,
                2
            ],
            [
                0,
                2,
                3
            ],
            [
                0,
                3,
                4
            ],
            [
                0,
                4,
                1
            ],
            [
                1,
                4,
                5
            ],
            [
                1,
                5,
                2
            ],
            [
                2,
                5,
                3
            ],
            [
                3,
                5,
                4
            ]
        ]
    };
    polyhedra[2] = {
        vertex: [
            [
                0,
                0,
                1.070466
            ],
            [
                0.7136442,
                0,
                0.7978784
            ],
            [
                -0.3568221,
                0.618034,
                0.7978784
            ],
            [
                -0.3568221,
                -0.618034,
                0.7978784
            ],
            [
                0.7978784,
                0.618034,
                0.3568221
            ],
            [
                0.7978784,
                -0.618034,
                0.3568221
            ],
            [
                -0.9341724,
                0.381966,
                0.3568221
            ],
            [
                0.1362939,
                1,
                0.3568221
            ],
            [
                0.1362939,
                -1,
                0.3568221
            ],
            [
                -0.9341724,
                -0.381966,
                0.3568221
            ],
            [
                0.9341724,
                0.381966,
                -0.3568221
            ],
            [
                0.9341724,
                -0.381966,
                -0.3568221
            ],
            [
                -0.7978784,
                0.618034,
                -0.3568221
            ],
            [
                -0.1362939,
                1,
                -0.3568221
            ],
            [
                -0.1362939,
                -1,
                -0.3568221
            ],
            [
                -0.7978784,
                -0.618034,
                -0.3568221
            ],
            [
                0.3568221,
                0.618034,
                -0.7978784
            ],
            [
                0.3568221,
                -0.618034,
                -0.7978784
            ],
            [
                -0.7136442,
                0,
                -0.7978784
            ],
            [
                0,
                0,
                -1.070466
            ]
        ],
        face: [
            [
                0,
                1,
                4,
                7,
                2
            ],
            [
                0,
                2,
                6,
                9,
                3
            ],
            [
                0,
                3,
                8,
                5,
                1
            ],
            [
                1,
                5,
                11,
                10,
                4
            ],
            [
                2,
                7,
                13,
                12,
                6
            ],
            [
                3,
                9,
                15,
                14,
                8
            ],
            [
                4,
                10,
                16,
                13,
                7
            ],
            [
                5,
                8,
                14,
                17,
                11
            ],
            [
                6,
                12,
                18,
                15,
                9
            ],
            [
                10,
                11,
                17,
                19,
                16
            ],
            [
                12,
                13,
                16,
                19,
                18
            ],
            [
                14,
                15,
                18,
                19,
                17
            ]
        ]
    };
    polyhedra[3] = {
        vertex: [
            [
                0,
                0,
                1.175571
            ],
            [
                1.051462,
                0,
                0.5257311
            ],
            [
                0.3249197,
                1,
                0.5257311
            ],
            [
                -0.8506508,
                0.618034,
                0.5257311
            ],
            [
                -0.8506508,
                -0.618034,
                0.5257311
            ],
            [
                0.3249197,
                -1,
                0.5257311
            ],
            [
                0.8506508,
                0.618034,
                -0.5257311
            ],
            [
                0.8506508,
                -0.618034,
                -0.5257311
            ],
            [
                -0.3249197,
                1,
                -0.5257311
            ],
            [
                -1.051462,
                0,
                -0.5257311
            ],
            [
                -0.3249197,
                -1,
                -0.5257311
            ],
            [
                0,
                0,
                -1.175571
            ]
        ],
        face: [
            [
                0,
                1,
                2
            ],
            [
                0,
                2,
                3
            ],
            [
                0,
                3,
                4
            ],
            [
                0,
                4,
                5
            ],
            [
                0,
                5,
                1
            ],
            [
                1,
                5,
                7
            ],
            [
                1,
                7,
                6
            ],
            [
                1,
                6,
                2
            ],
            [
                2,
                6,
                8
            ],
            [
                2,
                8,
                3
            ],
            [
                3,
                8,
                9
            ],
            [
                3,
                9,
                4
            ],
            [
                4,
                9,
                10
            ],
            [
                4,
                10,
                5
            ],
            [
                5,
                10,
                7
            ],
            [
                6,
                7,
                11
            ],
            [
                6,
                11,
                8
            ],
            [
                7,
                10,
                11
            ],
            [
                8,
                11,
                9
            ],
            [
                9,
                11,
                10
            ]
        ]
    };
    polyhedra[4] = {
        vertex: [
            [
                0,
                0,
                1.070722
            ],
            [
                0.7148135,
                0,
                0.7971752
            ],
            [
                -0.104682,
                0.7071068,
                0.7971752
            ],
            [
                -0.6841528,
                0.2071068,
                0.7971752
            ],
            [
                -0.104682,
                -0.7071068,
                0.7971752
            ],
            [
                0.6101315,
                0.7071068,
                0.5236279
            ],
            [
                1.04156,
                0.2071068,
                0.1367736
            ],
            [
                0.6101315,
                -0.7071068,
                0.5236279
            ],
            [
                -0.3574067,
                1,
                0.1367736
            ],
            [
                -0.7888348,
                -0.5,
                0.5236279
            ],
            [
                -0.9368776,
                0.5,
                0.1367736
            ],
            [
                -0.3574067,
                -1,
                0.1367736
            ],
            [
                0.3574067,
                1,
                -0.1367736
            ],
            [
                0.9368776,
                -0.5,
                -0.1367736
            ],
            [
                0.7888348,
                0.5,
                -0.5236279
            ],
            [
                0.3574067,
                -1,
                -0.1367736
            ],
            [
                -0.6101315,
                0.7071068,
                -0.5236279
            ],
            [
                -1.04156,
                -0.2071068,
                -0.1367736
            ],
            [
                -0.6101315,
                -0.7071068,
                -0.5236279
            ],
            [
                0.104682,
                0.7071068,
                -0.7971752
            ],
            [
                0.6841528,
                -0.2071068,
                -0.7971752
            ],
            [
                0.104682,
                -0.7071068,
                -0.7971752
            ],
            [
                -0.7148135,
                0,
                -0.7971752
            ],
            [
                0,
                0,
                -1.070722
            ]
        ],
        face: [
            [
                0,
                2,
                3
            ],
            [
                1,
                6,
                5
            ],
            [
                4,
                9,
                11
            ],
            [
                7,
                15,
                13
            ],
            [
                8,
                16,
                10
            ],
            [
                12,
                14,
                19
            ],
            [
                17,
                22,
                18
            ],
            [
                20,
                21,
                23
            ],
            [
                0,
                1,
                5,
                2
            ],
            [
                0,
                3,
                9,
                4
            ],
            [
                0,
                4,
                7,
                1
            ],
            [
                1,
                7,
                13,
                6
            ],
            [
                2,
                5,
                12,
                8
            ],
            [
                2,
                8,
                10,
                3
            ],
            [
                3,
                10,
                17,
                9
            ],
            [
                4,
                11,
                15,
                7
            ],
            [
                5,
                6,
                14,
                12
            ],
            [
                6,
                13,
                20,
                14
            ],
            [
                8,
                12,
                19,
                16
            ],
            [
                9,
                17,
                18,
                11
            ],
            [
                10,
                16,
                22,
                17
            ],
            [
                11,
                18,
                21,
                15
            ],
            [
                13,
                15,
                21,
                20
            ],
            [
                14,
                20,
                23,
                19
            ],
            [
                16,
                19,
                23,
                22
            ],
            [
                18,
                22,
                23,
                21
            ]
        ]
    };
    polyhedra[5] = {
        vertex: [
            [
                0,
                0,
                1.322876
            ],
            [
                1.309307,
                0,
                0.1889822
            ],
            [
                -0.9819805,
                0.8660254,
                0.1889822
            ],
            [
                0.1636634,
                -1.299038,
                0.1889822
            ],
            [
                0.3273268,
                0.8660254,
                -0.9449112
            ],
            [
                -0.8183171,
                -0.4330127,
                -0.9449112
            ]
        ],
        face: [
            [
                0,
                3,
                1
            ],
            [
                2,
                4,
                5
            ],
            [
                0,
                1,
                4,
                2
            ],
            [
                0,
                2,
                5,
                3
            ],
            [
                1,
                3,
                5,
                4
            ]
        ]
    };
    polyhedra[6] = {
        vertex: [
            [
                0,
                0,
                1.159953
            ],
            [
                1.013464,
                0,
                0.5642542
            ],
            [
                -0.3501431,
                0.9510565,
                0.5642542
            ],
            [
                -0.7715208,
                -0.6571639,
                0.5642542
            ],
            [
                0.6633206,
                0.9510565,
                -0.03144481
            ],
            [
                0.8682979,
                -0.6571639,
                -0.3996071
            ],
            [
                -1.121664,
                0.2938926,
                -0.03144481
            ],
            [
                -0.2348831,
                -1.063314,
                -0.3996071
            ],
            [
                0.5181548,
                0.2938926,
                -0.9953061
            ],
            [
                -0.5850262,
                -0.112257,
                -0.9953061
            ]
        ],
        face: [
            [
                0,
                1,
                4,
                2
            ],
            [
                0,
                2,
                6,
                3
            ],
            [
                1,
                5,
                8,
                4
            ],
            [
                3,
                6,
                9,
                7
            ],
            [
                5,
                7,
                9,
                8
            ],
            [
                0,
                3,
                7,
                5,
                1
            ],
            [
                2,
                4,
                8,
                9,
                6
            ]
        ]
    };
    polyhedra[7] = {
        vertex: [
            [
                0,
                0,
                1.118034
            ],
            [
                0.8944272,
                0,
                0.6708204
            ],
            [
                -0.2236068,
                0.8660254,
                0.6708204
            ],
            [
                -0.7826238,
                -0.4330127,
                0.6708204
            ],
            [
                0.6708204,
                0.8660254,
                0.2236068
            ],
            [
                1.006231,
                -0.4330127,
                -0.2236068
            ],
            [
                -1.006231,
                0.4330127,
                0.2236068
            ],
            [
                -0.6708204,
                -0.8660254,
                -0.2236068
            ],
            [
                0.7826238,
                0.4330127,
                -0.6708204
            ],
            [
                0.2236068,
                -0.8660254,
                -0.6708204
            ],
            [
                -0.8944272,
                0,
                -0.6708204
            ],
            [
                0,
                0,
                -1.118034
            ]
        ],
        face: [
            [
                0,
                1,
                4,
                2
            ],
            [
                0,
                2,
                6,
                3
            ],
            [
                1,
                5,
                8,
                4
            ],
            [
                3,
                6,
                10,
                7
            ],
            [
                5,
                9,
                11,
                8
            ],
            [
                7,
                10,
                11,
                9
            ],
            [
                0,
                3,
                7,
                9,
                5,
                1
            ],
            [
                2,
                4,
                8,
                11,
                10,
                6
            ]
        ]
    };
    polyhedra[8] = {
        vertex: [
            [
                -0.729665,
                0.670121,
                0.319155
            ],
            [
                -0.655235,
                -0.29213,
                -0.754096
            ],
            [
                -0.093922,
                -0.607123,
                0.537818
            ],
            [
                0.702196,
                0.595691,
                0.485187
            ],
            [
                0.776626,
                -0.36656,
                -0.588064
            ]
        ],
        face: [
            [
                1,
                4,
                2
            ],
            [
                0,
                1,
                2
            ],
            [
                3,
                0,
                2
            ],
            [
                4,
                3,
                2
            ],
            [
                4,
                1,
                0,
                3
            ]
        ]
    };
    polyhedra[9] = {
        vertex: [
            [
                -0.868849,
                -0.100041,
                0.61257
            ],
            [
                -0.329458,
                0.976099,
                0.28078
            ],
            [
                -0.26629,
                -0.013796,
                -0.477654
            ],
            [
                -0.13392,
                -1.034115,
                0.229829
            ],
            [
                0.738834,
                0.707117,
                -0.307018
            ],
            [
                0.859683,
                -0.535264,
                -0.338508
            ]
        ],
        face: [
            [
                3,
                0,
                2
            ],
            [
                5,
                3,
                2
            ],
            [
                4,
                5,
                2
            ],
            [
                1,
                4,
                2
            ],
            [
                0,
                1,
                2
            ],
            [
                0,
                3,
                5,
                4,
                1
            ]
        ]
    };
    polyhedra[10] = {
        vertex: [
            [
                -0.610389,
                0.243975,
                0.531213
            ],
            [
                -0.187812,
                -0.48795,
                -0.664016
            ],
            [
                -0.187812,
                0.9759,
                -0.664016
            ],
            [
                0.187812,
                -0.9759,
                0.664016
            ],
            [
                0.798201,
                0.243975,
                0.132803
            ]
        ],
        face: [
            [
                1,
                3,
                0
            ],
            [
                3,
                4,
                0
            ],
            [
                3,
                1,
                4
            ],
            [
                0,
                2,
                1
            ],
            [
                0,
                4,
                2
            ],
            [
                2,
                4,
                1
            ]
        ]
    };
    polyhedra[11] = {
        vertex: [
            [
                -1.028778,
                0.392027,
                -0.048786
            ],
            [
                -0.640503,
                -0.646161,
                0.621837
            ],
            [
                -0.125162,
                -0.395663,
                -0.540059
            ],
            [
                0.004683,
                0.888447,
                -0.651988
            ],
            [
                0.125161,
                0.395663,
                0.540059
            ],
            [
                0.632925,
                -0.791376,
                0.433102
            ],
            [
                1.031672,
                0.157063,
                -0.354165
            ]
        ],
        face: [
            [
                3,
                2,
                0
            ],
            [
                2,
                1,
                0
            ],
            [
                2,
                5,
                1
            ],
            [
                0,
                4,
                3
            ],
            [
                0,
                1,
                4
            ],
            [
                4,
                1,
                5
            ],
            [
                2,
                3,
                6
            ],
            [
                3,
                4,
                6
            ],
            [
                5,
                2,
                6
            ],
            [
                4,
                5,
                6
            ]
        ]
    };
    polyhedra[12] = {
        vertex: [
            [
                -0.669867,
                0.334933,
                -0.529576
            ],
            [
                -0.669867,
                0.334933,
                0.529577
            ],
            [
                -0.4043,
                1.212901,
                0
            ],
            [
                -0.334933,
                -0.669867,
                -0.529576
            ],
            [
                -0.334933,
                -0.669867,
                0.529577
            ],
            [
                0.334933,
                0.669867,
                -0.529576
            ],
            [
                0.334933,
                0.669867,
                0.529577
            ],
            [
                0.4043,
                -1.212901,
                0
            ],
            [
                0.669867,
                -0.334933,
                -0.529576
            ],
            [
                0.669867,
                -0.334933,
                0.529577
            ]
        ],
        face: [
            [
                8,
                9,
                7
            ],
            [
                6,
                5,
                2
            ],
            [
                3,
                8,
                7
            ],
            [
                5,
                0,
                2
            ],
            [
                4,
                3,
                7
            ],
            [
                0,
                1,
                2
            ],
            [
                9,
                4,
                7
            ],
            [
                1,
                6,
                2
            ],
            [
                9,
                8,
                5,
                6
            ],
            [
                8,
                3,
                0,
                5
            ],
            [
                3,
                4,
                1,
                0
            ],
            [
                4,
                9,
                6,
                1
            ]
        ]
    };
    polyhedra[13] = {
        vertex: [
            [
                -0.931836,
                0.219976,
                -0.264632
            ],
            [
                -0.636706,
                0.318353,
                0.692816
            ],
            [
                -0.613483,
                -0.735083,
                -0.264632
            ],
            [
                -0.326545,
                0.979634,
                0
            ],
            [
                -0.318353,
                -0.636706,
                0.692816
            ],
            [
                -0.159176,
                0.477529,
                -0.856368
            ],
            [
                0.159176,
                -0.477529,
                -0.856368
            ],
            [
                0.318353,
                0.636706,
                0.692816
            ],
            [
                0.326545,
                -0.979634,
                0
            ],
            [
                0.613482,
                0.735082,
                -0.264632
            ],
            [
                0.636706,
                -0.318353,
                0.692816
            ],
            [
                0.931835,
                -0.219977,
                -0.264632
            ]
        ],
        face: [
            [
                11,
                10,
                8
            ],
            [
                7,
                9,
                3
            ],
            [
                6,
                11,
                8
            ],
            [
                9,
                5,
                3
            ],
            [
                2,
                6,
                8
            ],
            [
                5,
                0,
                3
            ],
            [
                4,
                2,
                8
            ],
            [
                0,
                1,
                3
            ],
            [
                10,
                4,
                8
            ],
            [
                1,
                7,
                3
            ],
            [
                10,
                11,
                9,
                7
            ],
            [
                11,
                6,
                5,
                9
            ],
            [
                6,
                2,
                0,
                5
            ],
            [
                2,
                4,
                1,
                0
            ],
            [
                4,
                10,
                7,
                1
            ]
        ]
    };
    polyhedra[14] = {
        vertex: [
            [
                -0.93465,
                0.300459,
                -0.271185
            ],
            [
                -0.838689,
                -0.260219,
                -0.516017
            ],
            [
                -0.711319,
                0.717591,
                0.128359
            ],
            [
                -0.710334,
                -0.156922,
                0.080946
            ],
            [
                -0.599799,
                0.556003,
                -0.725148
            ],
            [
                -0.503838,
                -0.004675,
                -0.969981
            ],
            [
                -0.487004,
                0.26021,
                0.48049
            ],
            [
                -0.460089,
                -0.750282,
                -0.512622
            ],
            [
                -0.376468,
                0.973135,
                -0.325605
            ],
            [
                -0.331735,
                -0.646985,
                0.084342
            ],
            [
                -0.254001,
                0.831847,
                0.530001
            ],
            [
                -0.125239,
                -0.494738,
                -0.966586
            ],
            [
                0.029622,
                0.027949,
                0.730817
            ],
            [
                0.056536,
                -0.982543,
                -0.262295
            ],
            [
                0.08085,
                1.087391,
                0.076037
            ],
            [
                0.125583,
                -0.532729,
                0.485984
            ],
            [
                0.262625,
                0.599586,
                0.780328
            ],
            [
                0.391387,
                -0.726999,
                -0.716259
            ],
            [
                0.513854,
                -0.868287,
                0.139347
            ],
            [
                0.597475,
                0.85513,
                0.326364
            ],
            [
                0.641224,
                0.109523,
                0.783723
            ],
            [
                0.737185,
                -0.451155,
                0.538891
            ],
            [
                0.848705,
                -0.612742,
                -0.314616
            ],
            [
                0.976075,
                0.365067,
                0.32976
            ],
            [
                1.072036,
                -0.19561,
                0.084927
            ]
        ],
        face: [
            [
                15,
                18,
                21
            ],
            [
                12,
                20,
                16
            ],
            [
                6,
                10,
                2
            ],
            [
                3,
                0,
                1
            ],
            [
                9,
                7,
                13
            ],
            [
                2,
                8,
                4,
                0
            ],
            [
                0,
                4,
                5,
                1
            ],
            [
                1,
                5,
                11,
                7
            ],
            [
                7,
                11,
                17,
                13
            ],
            [
                13,
                17,
                22,
                18
            ],
            [
                18,
                22,
                24,
                21
            ],
            [
                21,
                24,
                23,
                20
            ],
            [
                20,
                23,
                19,
                16
            ],
            [
                16,
                19,
                14,
                10
            ],
            [
                10,
                14,
                8,
                2
            ],
            [
                15,
                9,
                13,
                18
            ],
            [
                12,
                15,
                21,
                20
            ],
            [
                6,
                12,
                16,
                10
            ],
            [
                3,
                6,
                2,
                0
            ],
            [
                9,
                3,
                1,
                7
            ],
            [
                9,
                15,
                12,
                6,
                3
            ],
            [
                22,
                17,
                11,
                5,
                4,
                8,
                14,
                19,
                23,
                24
            ]
        ]
    };
    const type = options.type && (options.type < 0 || options.type >= polyhedra.length) ? 0 : options.type || 0;
    const size = options.size;
    const sizeX = options.sizeX || size || 1;
    const sizeY = options.sizeY || size || 1;
    const sizeZ = options.sizeZ || size || 1;
    const data = options.custom || polyhedra[type];
    const nbfaces = data.face.length;
    const faceUV = options.faceUV || new Array(nbfaces);
    const faceColors = options.faceColors;
    const flat = options.flat === undefined ? true : options.flat;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    const positions = [];
    const indices = [];
    const normals = [];
    const uvs = [];
    const colors = [];
    let index = 0;
    let faceIdx = 0; // face cursor in the array "indexes"
    const indexes = [];
    let i = 0;
    let f = 0;
    let u, v, ang, x, y, tmp;
    // default face colors and UV if undefined
    if (flat) {
        for(f = 0; f < nbfaces; f++){
            if (faceColors && faceColors[f] === undefined) {
                faceColors[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
            }
            if (faceUV && faceUV[f] === undefined) {
                faceUV[f] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 1, 1);
            }
        }
    }
    if (!flat) {
        for(i = 0; i < data.vertex.length; i++){
            positions.push(data.vertex[i][0] * sizeX, data.vertex[i][1] * sizeY, data.vertex[i][2] * sizeZ);
            uvs.push(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 : 0);
        }
        for(f = 0; f < nbfaces; f++){
            for(i = 0; i < data.face[f].length - 2; i++){
                indices.push(data.face[f][0], data.face[f][i + 2], data.face[f][i + 1]);
            }
        }
    } else {
        for(f = 0; f < nbfaces; f++){
            const fl = data.face[f].length; // number of vertices of the current face
            ang = 2 * Math.PI / fl;
            x = 0.5 * Math.tan(ang / 2);
            y = 0.5;
            // positions, uvs, colors
            for(i = 0; i < fl; i++){
                // positions
                positions.push(data.vertex[data.face[f][i]][0] * sizeX, data.vertex[data.face[f][i]][1] * sizeY, data.vertex[data.face[f][i]][2] * sizeZ);
                indexes.push(index);
                index++;
                // uvs
                u = faceUV[f].x + (faceUV[f].z - faceUV[f].x) * (0.5 + x);
                v = faceUV[f].y + (faceUV[f].w - faceUV[f].y) * (y - 0.5);
                uvs.push(u, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - v : v);
                tmp = x * Math.cos(ang) - y * Math.sin(ang);
                y = x * Math.sin(ang) + y * Math.cos(ang);
                x = tmp;
                // colors
                if (faceColors) {
                    colors.push(faceColors[f].r, faceColors[f].g, faceColors[f].b, faceColors[f].a);
                }
            }
            // indices from indexes
            for(i = 0; i < fl - 2; i++){
                indices.push(indexes[0 + faceIdx], indexes[i + 2 + faceIdx], indexes[i + 1 + faceIdx]);
            }
            faceIdx += fl;
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].ComputeNormals(positions, indices, normals);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.positions = positions;
    vertexData.indices = indices;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    if (faceColors && flat) {
        vertexData.colors = colors;
    }
    return vertexData;
}
function CreatePolyhedron(name, options = {}, scene = null) {
    const polyhedron = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    polyhedron._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreatePolyhedronVertexData(options);
    vertexData.applyToMesh(polyhedron, options.updatable);
    return polyhedron;
}
const PolyhedronBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreatePolyhedron
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreatePolyhedron = CreatePolyhedronVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreatePolyhedron = (name, options, scene)=>{
    return CreatePolyhedron(name, options, scene);
}; //# sourceMappingURL=polyhedronBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/icoSphereBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateIcoSphere",
    ()=>CreateIcoSphere,
    "CreateIcoSphereVertexData",
    ()=>CreateIcoSphereVertexData,
    "IcoSphereBuilder",
    ()=>IcoSphereBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
function CreateIcoSphereVertexData(options) {
    const sideOrientation = options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    const radius = options.radius || 1;
    const flat = options.flat === undefined ? true : options.flat;
    const subdivisions = (options.subdivisions || 4) | 0;
    const radiusX = options.radiusX || radius;
    const radiusY = options.radiusY || radius;
    const radiusZ = options.radiusZ || radius;
    const t = (1 + Math.sqrt(5)) / 2;
    // 12 vertex x,y,z
    const icoVertices = [
        -1,
        t,
        -0,
        1,
        t,
        0,
        -1,
        -t,
        0,
        1,
        -t,
        0,
        0,
        -1,
        -t,
        0,
        1,
        -t,
        0,
        -1,
        t,
        0,
        1,
        t,
        t,
        0,
        1,
        t,
        0,
        -1,
        -t,
        0,
        1,
        -t,
        0,
        -1
    ];
    // index of 3 vertex makes a face of icopshere
    const icoIndices = [
        0,
        11,
        5,
        0,
        5,
        1,
        0,
        1,
        7,
        0,
        7,
        10,
        12,
        22,
        23,
        1,
        5,
        20,
        5,
        11,
        4,
        23,
        22,
        13,
        22,
        18,
        6,
        7,
        1,
        8,
        14,
        21,
        4,
        14,
        4,
        2,
        16,
        13,
        6,
        15,
        6,
        19,
        3,
        8,
        9,
        4,
        21,
        5,
        13,
        17,
        23,
        6,
        13,
        22,
        19,
        6,
        18,
        9,
        8,
        1
    ];
    // vertex for uv have aliased position, not for UV
    const verticesUnaliasId = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        // vertex alias
        0,
        2,
        3,
        3,
        3,
        4,
        7,
        8,
        9,
        9,
        10,
        11
    ];
    // uv as integer step (not pixels !)
    const icoVertexuv = [
        5,
        1,
        3,
        1,
        6,
        4,
        0,
        0,
        5,
        3,
        4,
        2,
        2,
        2,
        4,
        0,
        2,
        0,
        1,
        1,
        6,
        0,
        6,
        2,
        // vertex alias (for same vertex on different faces)
        0,
        4,
        3,
        3,
        4,
        4,
        3,
        1,
        4,
        2,
        4,
        4,
        0,
        2,
        1,
        1,
        2,
        2,
        3,
        3,
        1,
        3,
        2,
        4
    ];
    // Vertices[0, 1, ...9, A, B] : position on UV plane
    // '+' indicate duplicate position to be fixed (3,9:0,2,3,4,7,8,A,B)
    // First island of uv mapping
    // v = 4h          3+  2
    // v = 3h        9+  4
    // v = 2h      9+  5   B
    // v = 1h    9   1   0
    // v = 0h  3   8   7   A
    //     u = 0 1 2 3 4 5 6  *a
    // Second island of uv mapping
    // v = 4h  0+  B+  4+
    // v = 3h    A+  2+
    // v = 2h  7+  6   3+
    // v = 1h    8+  3+
    // v = 0h
    //     u = 0 1 2 3 4 5 6  *a
    // Face layout on texture UV mapping
    // ============
    // \ 4  /\ 16 /   ======
    //  \  /  \  /   /\ 11 /
    //   \/ 7  \/   /  \  /
    //    =======  / 10 \/
    //   /\ 17 /\  =======
    //  /  \  /  \ \ 15 /\
    // / 8  \/ 12 \ \  /  \
    // ============  \/ 6  \
    // \ 18 /\  ============
    //  \  /  \ \ 5  /\ 0  /
    //   \/ 13 \ \  /  \  /
    //   =======  \/ 1  \/
    //       =============
    //      /\ 19 /\  2 /\
    //     /  \  /  \  /  \
    //    / 14 \/ 9  \/  3 \
    //   ===================
    // uv step is u:1 or 0.5, v:cos(30)=sqrt(3)/2, ratio approx is 84/97
    const ustep = 138 / 1024;
    const vstep = 239 / 1024;
    const uoffset = 60 / 1024;
    const voffset = 26 / 1024;
    // Second island should have margin, not to touch the first island
    // avoid any borderline artefact in pixel rounding
    const islandUoffset = -40 / 1024;
    const islandVoffset = +20 / 1024;
    // face is either island 0 or 1 :
    // second island is for faces : [4, 7, 8, 12, 13, 16, 17, 18]
    const island = [
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        1,
        0,
        0,
        0,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0
    ];
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    let currentIndice = 0;
    // prepare array of 3 vector (empty) (to be worked in place, shared for each face)
    const faceVertexPos = new Array(3);
    const faceVertexUv = new Array(3);
    let v012;
    for(v012 = 0; v012 < 3; v012++){
        faceVertexPos[v012] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        faceVertexUv[v012] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero();
    }
    // create all with normals
    for(let face = 0; face < 20; face++){
        // 3 vertex per face
        for(v012 = 0; v012 < 3; v012++){
            // look up vertex 0,1,2 to its index in 0 to 11 (or 23 including alias)
            const vId = icoIndices[3 * face + v012];
            // vertex have 3D position (x,y,z)
            faceVertexPos[v012].copyFromFloats(icoVertices[3 * verticesUnaliasId[vId]], icoVertices[3 * verticesUnaliasId[vId] + 1], icoVertices[3 * verticesUnaliasId[vId] + 2]);
            // Normalize to get normal
            faceVertexPos[v012].normalize();
            // uv Coordinates from vertex ID
            faceVertexUv[v012].copyFromFloats(icoVertexuv[2 * vId] * ustep + uoffset + island[face] * islandUoffset, icoVertexuv[2 * vId + 1] * vstep + voffset + island[face] * islandVoffset);
        }
        // Subdivide the face (interpolate pos, norm, uv)
        // - pos is linear interpolation, then projected to sphere (converge polyhedron to sphere)
        // - norm is linear interpolation of vertex corner normal
        //   (to be checked if better to re-calc from face vertex, or if approximation is OK ??? )
        // - uv is linear interpolation
        //
        // Topology is as below for sub-divide by 2
        // vertex shown as v0,v1,v2
        // interp index is i1 to progress in range [v0,v1[
        // interp index is i2 to progress in range [v0,v2[
        // face index as  (i1,i2)  for /\  : (i1,i2),(i1+1,i2),(i1,i2+1)
        //            and (i1,i2)' for \/  : (i1+1,i2),(i1+1,i2+1),(i1,i2+1)
        //
        //
        //                    i2    v2
        //                    ^    ^
        //                   /    / \
        //                  /    /   \
        //                 /    /     \
        //                /    / (0,1) \
        //               /    #---------\
        //              /    / \ (0,0)'/ \
        //             /    /   \     /   \
        //            /    /     \   /     \
        //           /    / (0,0) \ / (1,0) \
        //          /    #---------#---------\
        //              v0                    v1
        //
        //              --------------------> i1
        //
        // interp of (i1,i2):
        //  along i2 :  x0=lerp(v0,v2, i2/S) <---> x1=lerp(v1,v2, i2/S)
        //  along i1 :  lerp(x0,x1, i1/(S-i2))
        //
        // centroid of triangle is needed to get help normal computation
        //  (c1,c2) are used for centroid location
        const interpVertex = (i1, i2, c1, c2)=>{
            // vertex is interpolated from
            //   - face_vertex_pos[0..2]
            //   - face_vertex_uv[0..2]
            const posX0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(faceVertexPos[0], faceVertexPos[2], i2 / subdivisions);
            const posX1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(faceVertexPos[1], faceVertexPos[2], i2 / subdivisions);
            const posInterp = subdivisions === i2 ? faceVertexPos[2] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(posX0, posX1, i1 / (subdivisions - i2));
            posInterp.normalize();
            let vertexNormal;
            if (flat) {
                // in flat mode, recalculate normal as face centroid normal
                const centroidX0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(faceVertexPos[0], faceVertexPos[2], c2 / subdivisions);
                const centroidX1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(faceVertexPos[1], faceVertexPos[2], c2 / subdivisions);
                vertexNormal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(centroidX0, centroidX1, c1 / (subdivisions - c2));
            } else {
                // in smooth mode, recalculate normal from each single vertex position
                vertexNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](posInterp.x, posInterp.y, posInterp.z);
            }
            // Vertex normal need correction due to X,Y,Z radius scaling
            vertexNormal.x /= radiusX;
            vertexNormal.y /= radiusY;
            vertexNormal.z /= radiusZ;
            vertexNormal.normalize();
            const uvX0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Lerp(faceVertexUv[0], faceVertexUv[2], i2 / subdivisions);
            const uvX1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Lerp(faceVertexUv[1], faceVertexUv[2], i2 / subdivisions);
            const uvInterp = subdivisions === i2 ? faceVertexUv[2] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Lerp(uvX0, uvX1, i1 / (subdivisions - i2));
            positions.push(posInterp.x * radiusX, posInterp.y * radiusY, posInterp.z * radiusZ);
            normals.push(vertexNormal.x, vertexNormal.y, vertexNormal.z);
            uvs.push(uvInterp.x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1.0 - uvInterp.y : uvInterp.y);
            // push each vertex has member of a face
            // Same vertex can belong to multiple face, it is pushed multiple time (duplicate vertex are present)
            indices.push(currentIndice);
            currentIndice++;
        };
        for(let i2 = 0; i2 < subdivisions; i2++){
            for(let i1 = 0; i1 + i2 < subdivisions; i1++){
                // face : (i1,i2)  for /\  :
                // interp for : (i1,i2),(i1+1,i2),(i1,i2+1)
                interpVertex(i1, i2, i1 + 1.0 / 3, i2 + 1.0 / 3);
                interpVertex(i1 + 1, i2, i1 + 1.0 / 3, i2 + 1.0 / 3);
                interpVertex(i1, i2 + 1, i1 + 1.0 / 3, i2 + 1.0 / 3);
                if (i1 + i2 + 1 < subdivisions) {
                    // face : (i1,i2)' for \/  :
                    // interp for (i1+1,i2),(i1+1,i2+1),(i1,i2+1)
                    interpVertex(i1 + 1, i2, i1 + 2.0 / 3, i2 + 2.0 / 3);
                    interpVertex(i1 + 1, i2 + 1, i1 + 2.0 / 3, i2 + 2.0 / 3);
                    interpVertex(i1, i2 + 1, i1 + 2.0 / 3, i2 + 2.0 / 3);
                }
            }
        }
    }
    // Sides
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Result
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateIcoSphere(name, options = {}, scene = null) {
    const sphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    sphere._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateIcoSphereVertexData(options);
    vertexData.applyToMesh(sphere, options.updatable);
    return sphere;
}
const IcoSphereBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateIcoSphere
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].CreateIcoSphere = CreateIcoSphereVertexData;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateIcoSphere = (name, options, scene)=>{
    return CreateIcoSphere(name, options, scene);
}; //# sourceMappingURL=icoSphereBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/decalBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateDecal",
    ()=>CreateDecal,
    "DecalBuilder",
    ()=>DecalBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const XpAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
const XnAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-1, 0, 0);
const YpAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0);
const YnAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0);
const ZpAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1);
const ZnAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
/** @internal */ class DecalVertex {
    constructor(position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up(), uv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero(), vertexIdx = 0, vertexIdxForBones = 0, localPositionOverride = null, localNormalOverride = null, matrixIndicesOverride = null, matrixWeightsOverride = null){
        this.position = position;
        this.normal = normal;
        this.uv = uv;
        this.vertexIdx = vertexIdx;
        this.vertexIdxForBones = vertexIdxForBones;
        this.localPositionOverride = localPositionOverride;
        this.localNormalOverride = localNormalOverride;
        this.matrixIndicesOverride = matrixIndicesOverride;
        this.matrixWeightsOverride = matrixWeightsOverride;
    }
    clone() {
        return new DecalVertex(this.position.clone(), this.normal.clone(), this.uv.clone(), this.vertexIdx, this.vertexIdxForBones, this.localPositionOverride?.slice(), this.localNormalOverride?.slice(), this.matrixIndicesOverride?.slice(), this.matrixWeightsOverride?.slice());
    }
}
function CreateDecal(name, sourceMesh, options) {
    const hasSkeleton = !!sourceMesh.skeleton;
    const hasMorphTargets = !!sourceMesh.morphTargetManager?.numTargets;
    const useLocalComputation = options.localMode || hasSkeleton;
    const indices = sourceMesh.getIndices();
    const positions = hasSkeleton || hasMorphTargets ? sourceMesh.getPositionData(true, true) : sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
    const normals = hasSkeleton || hasMorphTargets ? sourceMesh.getNormalsData(true, true) : sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
    const localPositions = useLocalComputation ? hasSkeleton ? sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind) : positions : null;
    const localNormals = useLocalComputation ? hasSkeleton ? sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind) : normals : null;
    const uvs = sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
    const matIndices = hasSkeleton ? sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind) : null;
    const matWeights = hasSkeleton ? sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind) : null;
    const matIndicesExtra = hasSkeleton ? sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesExtraKind) : null;
    const matWeightsExtra = hasSkeleton ? sourceMesh.getVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsExtraKind) : null;
    const position = options.position || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    let normal = options.normal || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up();
    const size = options.size || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].One();
    const angle = options.angle || 0;
    // Getting correct rotation
    if (!normal) {
        const target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1);
        const camera = sourceMesh.getScene().activeCamera;
        const cameraWorldTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(target, camera.getWorldMatrix());
        normal = camera.globalPosition.subtract(cameraWorldTarget);
    }
    const yaw = -Math.atan2(normal.z, normal.x) - Math.PI / 2;
    const len = Math.sqrt(normal.x * normal.x + normal.z * normal.z);
    const pitch = Math.atan2(normal.y, len);
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.indices = [];
    vertexData.positions = [];
    vertexData.normals = [];
    vertexData.uvs = [];
    vertexData.matricesIndices = hasSkeleton ? [] : null;
    vertexData.matricesWeights = hasSkeleton ? [] : null;
    vertexData.matricesIndicesExtra = matIndicesExtra ? [] : null;
    vertexData.matricesWeightsExtra = matWeightsExtra ? [] : null;
    let currentVertexDataIndex = 0;
    const extractDecalVector3 = (indexId, transformMatrix)=>{
        const result = new DecalVertex();
        if (!indices || !positions || !normals) {
            return result;
        }
        const vertexId = indices[indexId];
        result.vertexIdx = vertexId * 3;
        result.vertexIdxForBones = vertexId * 4;
        // Send vector to decal local world
        result.position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](positions[vertexId * 3], positions[vertexId * 3 + 1], positions[vertexId * 3 + 2]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(result.position, transformMatrix, result.position);
        // Get normal
        result.normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](normals[vertexId * 3], normals[vertexId * 3 + 1], normals[vertexId * 3 + 2]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(result.normal, transformMatrix, result.normal);
        if (options.captureUVS && uvs) {
            const v = uvs[vertexId * 2 + 1];
            result.uv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](uvs[vertexId * 2], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
        }
        return result;
    };
    const emptyArray = [
        0,
        0,
        0,
        0
    ];
    // Inspired by https://github.com/mrdoob/three.js/blob/eee231960882f6f3b6113405f524956145148146/examples/js/geometries/DecalGeometry.js
    const clip = (vertices, axis)=>{
        if (vertices.length === 0) {
            return vertices;
        }
        const clipSize = 0.5 * Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(size, axis));
        const indexOf = (arr, val, start, num)=>{
            for(let i = 0; i < num; ++i){
                if (arr[start + i] === val) {
                    return start + i;
                }
            }
            return -1;
        };
        const clipVertices = (v0, v1)=>{
            const clipFactor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].GetClipFactor(v0.position, v1.position, axis, clipSize);
            let indices = emptyArray;
            let weights = emptyArray;
            if (matIndices && matWeights) {
                const mat0Index = v0.matrixIndicesOverride ? 0 : v0.vertexIdxForBones;
                const v0Indices = v0.matrixIndicesOverride ?? matIndices;
                const v0Weights = v0.matrixWeightsOverride ?? matWeights;
                const mat1Index = v1.matrixIndicesOverride ? 0 : v1.vertexIdxForBones;
                const v1Indices = v1.matrixIndicesOverride ?? matIndices;
                const v1Weights = v1.matrixWeightsOverride ?? matWeights;
                indices = [
                    0,
                    0,
                    0,
                    0
                ];
                weights = [
                    0,
                    0,
                    0,
                    0
                ];
                let index = 0;
                for(let i = 0; i < 4; ++i){
                    if (v0Weights[mat0Index + i] > 0) {
                        const idx = indexOf(v1Indices, v0Indices[mat0Index + i], mat1Index, 4);
                        indices[index] = v0Indices[mat0Index + i];
                        weights[index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lerp"])(v0Weights[mat0Index + i], idx >= 0 ? v1Weights[idx] : 0, clipFactor);
                        index++;
                    }
                }
                for(let i = 0; i < 4 && index < 4; ++i){
                    const ind = v1Indices[mat1Index + i];
                    if (indexOf(v0Indices, ind, mat0Index, 4) !== -1) {
                        continue;
                    }
                    indices[index] = ind;
                    weights[index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lerp"])(0, v1Weights[mat1Index + i], clipFactor);
                    index++;
                }
                const sumw = weights[0] + weights[1] + weights[2] + weights[3];
                weights[0] /= sumw;
                weights[1] /= sumw;
                weights[2] /= sumw;
                weights[3] /= sumw;
            }
            const v0LocalPositionX = v0.localPositionOverride ? v0.localPositionOverride[0] : localPositions?.[v0.vertexIdx] ?? 0;
            const v0LocalPositionY = v0.localPositionOverride ? v0.localPositionOverride[1] : localPositions?.[v0.vertexIdx + 1] ?? 0;
            const v0LocalPositionZ = v0.localPositionOverride ? v0.localPositionOverride[2] : localPositions?.[v0.vertexIdx + 2] ?? 0;
            const v1LocalPositionX = v1.localPositionOverride ? v1.localPositionOverride[0] : localPositions?.[v1.vertexIdx] ?? 0;
            const v1LocalPositionY = v1.localPositionOverride ? v1.localPositionOverride[1] : localPositions?.[v1.vertexIdx + 1] ?? 0;
            const v1LocalPositionZ = v1.localPositionOverride ? v1.localPositionOverride[2] : localPositions?.[v1.vertexIdx + 2] ?? 0;
            const v0LocalNormalX = v0.localNormalOverride ? v0.localNormalOverride[0] : localNormals?.[v0.vertexIdx] ?? 0;
            const v0LocalNormalY = v0.localNormalOverride ? v0.localNormalOverride[1] : localNormals?.[v0.vertexIdx + 1] ?? 0;
            const v0LocalNormalZ = v0.localNormalOverride ? v0.localNormalOverride[2] : localNormals?.[v0.vertexIdx + 2] ?? 0;
            const v1LocalNormalX = v1.localNormalOverride ? v1.localNormalOverride[0] : localNormals?.[v1.vertexIdx] ?? 0;
            const v1LocalNormalY = v1.localNormalOverride ? v1.localNormalOverride[1] : localNormals?.[v1.vertexIdx + 1] ?? 0;
            const v1LocalNormalZ = v1.localNormalOverride ? v1.localNormalOverride[2] : localNormals?.[v1.vertexIdx + 2] ?? 0;
            const interpNormalX = v0LocalNormalX + (v1LocalNormalX - v0LocalNormalX) * clipFactor;
            const interpNormalY = v0LocalNormalY + (v1LocalNormalY - v0LocalNormalY) * clipFactor;
            const interpNormalZ = v0LocalNormalZ + (v1LocalNormalZ - v0LocalNormalZ) * clipFactor;
            const norm = Math.sqrt(interpNormalX * interpNormalX + interpNormalY * interpNormalY + interpNormalZ * interpNormalZ);
            return new DecalVertex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(v0.position, v1.position, clipFactor), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Lerp(v0.normal, v1.normal, clipFactor).normalize(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Lerp(v0.uv, v1.uv, clipFactor), -1, -1, localPositions ? [
                v0LocalPositionX + (v1LocalPositionX - v0LocalPositionX) * clipFactor,
                v0LocalPositionY + (v1LocalPositionY - v0LocalPositionY) * clipFactor,
                v0LocalPositionZ + (v1LocalPositionZ - v0LocalPositionZ) * clipFactor
            ] : null, localNormals ? [
                interpNormalX / norm,
                interpNormalY / norm,
                interpNormalZ / norm
            ] : null, indices, weights);
        };
        let clipResult = null;
        if (vertices.length > 3) {
            clipResult = [];
        }
        for(let index = 0; index < vertices.length; index += 3){
            let total = 0;
            let nV1 = null;
            let nV2 = null;
            let nV3 = null;
            let nV4 = null;
            const d1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(vertices[index].position, axis) - clipSize;
            const d2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(vertices[index + 1].position, axis) - clipSize;
            const d3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(vertices[index + 2].position, axis) - clipSize;
            const v1Out = d1 > 0;
            const v2Out = d2 > 0;
            const v3Out = d3 > 0;
            total = (v1Out ? 1 : 0) + (v2Out ? 1 : 0) + (v3Out ? 1 : 0);
            switch(total){
                case 0:
                    if (vertices.length > 3) {
                        clipResult.push(vertices[index]);
                        clipResult.push(vertices[index + 1]);
                        clipResult.push(vertices[index + 2]);
                    } else {
                        clipResult = vertices;
                    }
                    break;
                case 1:
                    clipResult = clipResult ?? new Array();
                    if (v1Out) {
                        nV1 = vertices[index + 1];
                        nV2 = vertices[index + 2];
                        nV3 = clipVertices(vertices[index], nV1);
                        nV4 = clipVertices(vertices[index], nV2);
                    }
                    if (v2Out) {
                        nV1 = vertices[index];
                        nV2 = vertices[index + 2];
                        nV3 = clipVertices(vertices[index + 1], nV1);
                        nV4 = clipVertices(vertices[index + 1], nV2);
                        clipResult.push(nV3);
                        clipResult.push(nV2.clone());
                        clipResult.push(nV1.clone());
                        clipResult.push(nV2.clone());
                        clipResult.push(nV3.clone());
                        clipResult.push(nV4);
                        break;
                    }
                    if (v3Out) {
                        nV1 = vertices[index];
                        nV2 = vertices[index + 1];
                        nV3 = clipVertices(vertices[index + 2], nV1);
                        nV4 = clipVertices(vertices[index + 2], nV2);
                    }
                    if (nV1 && nV2 && nV3 && nV4) {
                        clipResult.push(nV1.clone());
                        clipResult.push(nV2.clone());
                        clipResult.push(nV3);
                        clipResult.push(nV4);
                        clipResult.push(nV3.clone());
                        clipResult.push(nV2.clone());
                    }
                    break;
                case 2:
                    clipResult = clipResult ?? new Array();
                    if (!v1Out) {
                        nV1 = vertices[index].clone();
                        nV2 = clipVertices(nV1, vertices[index + 1]);
                        nV3 = clipVertices(nV1, vertices[index + 2]);
                        clipResult.push(nV1);
                        clipResult.push(nV2);
                        clipResult.push(nV3);
                    }
                    if (!v2Out) {
                        nV1 = vertices[index + 1].clone();
                        nV2 = clipVertices(nV1, vertices[index + 2]);
                        nV3 = clipVertices(nV1, vertices[index]);
                        clipResult.push(nV1);
                        clipResult.push(nV2);
                        clipResult.push(nV3);
                    }
                    if (!v3Out) {
                        nV1 = vertices[index + 2].clone();
                        nV2 = clipVertices(nV1, vertices[index]);
                        nV3 = clipVertices(nV1, vertices[index + 1]);
                        clipResult.push(nV1);
                        clipResult.push(nV2);
                        clipResult.push(nV3);
                    }
                    break;
                case 3:
                    break;
            }
        }
        return clipResult;
    };
    const sourceMeshAsMesh = sourceMesh instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"] ? sourceMesh : null;
    const matrixData = sourceMeshAsMesh?._thinInstanceDataStorage.matrixData;
    const numMatrices = sourceMeshAsMesh?.thinInstanceCount || 1;
    const thinInstanceMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
    thinInstanceMatrix.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly);
    for(let m = 0; m < numMatrices; ++m){
        if (sourceMeshAsMesh?.hasThinInstances && matrixData) {
            const ofst = m * 16;
            thinInstanceMatrix.setRowFromFloats(0, matrixData[ofst + 0], matrixData[ofst + 1], matrixData[ofst + 2], matrixData[ofst + 3]);
            thinInstanceMatrix.setRowFromFloats(1, matrixData[ofst + 4], matrixData[ofst + 5], matrixData[ofst + 6], matrixData[ofst + 7]);
            thinInstanceMatrix.setRowFromFloats(2, matrixData[ofst + 8], matrixData[ofst + 9], matrixData[ofst + 10], matrixData[ofst + 11]);
            thinInstanceMatrix.setRowFromFloats(3, matrixData[ofst + 12], matrixData[ofst + 13], matrixData[ofst + 14], matrixData[ofst + 15]);
        }
        // Matrix
        const decalWorldMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRoll(yaw, pitch, angle).multiply(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Translation(position.x, position.y, position.z));
        const inverseDecalWorldMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Invert(decalWorldMatrix);
        const meshWorldMatrix = sourceMesh.getWorldMatrix();
        const transformMatrix = thinInstanceMatrix.multiply(meshWorldMatrix).multiply(inverseDecalWorldMatrix);
        const oneFaceVertices = new Array(3);
        for(let index = 0; index < indices.length; index += 3){
            let faceVertices = oneFaceVertices;
            faceVertices[0] = extractDecalVector3(index, transformMatrix);
            faceVertices[1] = extractDecalVector3(index + 1, transformMatrix);
            faceVertices[2] = extractDecalVector3(index + 2, transformMatrix);
            if (options.cullBackFaces) {
                // If all the normals of the vertices of the face are pointing away from the view direction we discard the face.
                // As computations are done in the decal coordinate space, the viewDirection is (0,0,1), so when dot(vertexNormal, -viewDirection) <= 0 the vertex is culled
                if (-faceVertices[0].normal.z <= 0 && -faceVertices[1].normal.z <= 0 && -faceVertices[2].normal.z <= 0) {
                    continue;
                }
            }
            // Clip
            faceVertices = clip(faceVertices, XpAxis);
            if (!faceVertices) {
                continue;
            }
            faceVertices = clip(faceVertices, XnAxis);
            if (!faceVertices) {
                continue;
            }
            faceVertices = clip(faceVertices, YpAxis);
            if (!faceVertices) {
                continue;
            }
            faceVertices = clip(faceVertices, YnAxis);
            if (!faceVertices) {
                continue;
            }
            faceVertices = clip(faceVertices, ZpAxis);
            if (!faceVertices) {
                continue;
            }
            faceVertices = clip(faceVertices, ZnAxis);
            if (!faceVertices) {
                continue;
            }
            // Add UVs and get back to world
            for(let vIndex = 0; vIndex < faceVertices.length; vIndex++){
                const vertex = faceVertices[vIndex];
                //TODO check for Int32Array | Uint32Array | Uint16Array
                vertexData.indices.push(currentVertexDataIndex);
                if (useLocalComputation) {
                    if (vertex.localPositionOverride) {
                        vertexData.positions[currentVertexDataIndex * 3] = vertex.localPositionOverride[0];
                        vertexData.positions[currentVertexDataIndex * 3 + 1] = vertex.localPositionOverride[1];
                        vertexData.positions[currentVertexDataIndex * 3 + 2] = vertex.localPositionOverride[2];
                    } else if (localPositions) {
                        vertexData.positions[currentVertexDataIndex * 3] = localPositions[vertex.vertexIdx];
                        vertexData.positions[currentVertexDataIndex * 3 + 1] = localPositions[vertex.vertexIdx + 1];
                        vertexData.positions[currentVertexDataIndex * 3 + 2] = localPositions[vertex.vertexIdx + 2];
                    }
                    if (vertex.localNormalOverride) {
                        vertexData.normals[currentVertexDataIndex * 3] = vertex.localNormalOverride[0];
                        vertexData.normals[currentVertexDataIndex * 3 + 1] = vertex.localNormalOverride[1];
                        vertexData.normals[currentVertexDataIndex * 3 + 2] = vertex.localNormalOverride[2];
                    } else if (localNormals) {
                        vertexData.normals[currentVertexDataIndex * 3] = localNormals[vertex.vertexIdx];
                        vertexData.normals[currentVertexDataIndex * 3 + 1] = localNormals[vertex.vertexIdx + 1];
                        vertexData.normals[currentVertexDataIndex * 3 + 2] = localNormals[vertex.vertexIdx + 2];
                    }
                } else {
                    vertex.position.toArray(vertexData.positions, currentVertexDataIndex * 3);
                    vertex.normal.toArray(vertexData.normals, currentVertexDataIndex * 3);
                }
                if (vertexData.matricesIndices && vertexData.matricesWeights) {
                    if (vertex.matrixIndicesOverride) {
                        vertexData.matricesIndices[currentVertexDataIndex * 4] = vertex.matrixIndicesOverride[0];
                        vertexData.matricesIndices[currentVertexDataIndex * 4 + 1] = vertex.matrixIndicesOverride[1];
                        vertexData.matricesIndices[currentVertexDataIndex * 4 + 2] = vertex.matrixIndicesOverride[2];
                        vertexData.matricesIndices[currentVertexDataIndex * 4 + 3] = vertex.matrixIndicesOverride[3];
                    } else {
                        if (matIndices) {
                            vertexData.matricesIndices[currentVertexDataIndex * 4] = matIndices[vertex.vertexIdxForBones];
                            vertexData.matricesIndices[currentVertexDataIndex * 4 + 1] = matIndices[vertex.vertexIdxForBones + 1];
                            vertexData.matricesIndices[currentVertexDataIndex * 4 + 2] = matIndices[vertex.vertexIdxForBones + 2];
                            vertexData.matricesIndices[currentVertexDataIndex * 4 + 3] = matIndices[vertex.vertexIdxForBones + 3];
                        }
                        if (matIndicesExtra && vertexData.matricesIndicesExtra) {
                            vertexData.matricesIndicesExtra[currentVertexDataIndex * 4] = matIndicesExtra[vertex.vertexIdxForBones];
                            vertexData.matricesIndicesExtra[currentVertexDataIndex * 4 + 1] = matIndicesExtra[vertex.vertexIdxForBones + 1];
                            vertexData.matricesIndicesExtra[currentVertexDataIndex * 4 + 2] = matIndicesExtra[vertex.vertexIdxForBones + 2];
                            vertexData.matricesIndicesExtra[currentVertexDataIndex * 4 + 3] = matIndicesExtra[vertex.vertexIdxForBones + 3];
                        }
                    }
                    if (vertex.matrixWeightsOverride) {
                        vertexData.matricesWeights[currentVertexDataIndex * 4] = vertex.matrixWeightsOverride[0];
                        vertexData.matricesWeights[currentVertexDataIndex * 4 + 1] = vertex.matrixWeightsOverride[1];
                        vertexData.matricesWeights[currentVertexDataIndex * 4 + 2] = vertex.matrixWeightsOverride[2];
                        vertexData.matricesWeights[currentVertexDataIndex * 4 + 3] = vertex.matrixWeightsOverride[3];
                    } else {
                        if (matWeights) {
                            vertexData.matricesWeights[currentVertexDataIndex * 4] = matWeights[vertex.vertexIdxForBones];
                            vertexData.matricesWeights[currentVertexDataIndex * 4 + 1] = matWeights[vertex.vertexIdxForBones + 1];
                            vertexData.matricesWeights[currentVertexDataIndex * 4 + 2] = matWeights[vertex.vertexIdxForBones + 2];
                            vertexData.matricesWeights[currentVertexDataIndex * 4 + 3] = matWeights[vertex.vertexIdxForBones + 3];
                        }
                        if (matWeightsExtra && vertexData.matricesWeightsExtra) {
                            vertexData.matricesWeightsExtra[currentVertexDataIndex * 4] = matWeightsExtra[vertex.vertexIdxForBones];
                            vertexData.matricesWeightsExtra[currentVertexDataIndex * 4 + 1] = matWeightsExtra[vertex.vertexIdxForBones + 1];
                            vertexData.matricesWeightsExtra[currentVertexDataIndex * 4 + 2] = matWeightsExtra[vertex.vertexIdxForBones + 2];
                            vertexData.matricesWeightsExtra[currentVertexDataIndex * 4 + 3] = matWeightsExtra[vertex.vertexIdxForBones + 3];
                        }
                    }
                }
                if (!options.captureUVS) {
                    vertexData.uvs.push(0.5 + vertex.position.x / size.x);
                    const v = 0.5 + vertex.position.y / size.y;
                    vertexData.uvs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - v : v);
                } else {
                    vertex.uv.toArray(vertexData.uvs, currentVertexDataIndex * 2);
                }
                currentVertexDataIndex++;
            }
        }
    }
    // Avoid the "Setting vertex data kind 'XXX' with an empty array" warning when calling vertexData.applyToMesh
    if (vertexData.indices.length === 0) {
        vertexData.indices = null;
    }
    if (vertexData.positions.length === 0) {
        vertexData.positions = null;
    }
    if (vertexData.normals.length === 0) {
        vertexData.normals = null;
    }
    if (vertexData.uvs.length === 0) {
        vertexData.uvs = null;
    }
    if (vertexData.matricesIndices?.length === 0) {
        vertexData.matricesIndices = null;
    }
    if (vertexData.matricesWeights?.length === 0) {
        vertexData.matricesWeights = null;
    }
    if (vertexData.matricesIndicesExtra?.length === 0) {
        vertexData.matricesIndicesExtra = null;
    }
    if (vertexData.matricesWeightsExtra?.length === 0) {
        vertexData.matricesWeightsExtra = null;
    }
    // Return mesh
    const decal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, sourceMesh.getScene());
    vertexData.applyToMesh(decal);
    if (useLocalComputation) {
        decal.skeleton = sourceMesh.skeleton;
        decal.parent = sourceMesh;
    } else {
        decal.position = position.clone();
        decal.rotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](pitch, yaw, angle);
    }
    decal.computeWorldMatrix(true);
    decal.refreshBoundingInfo(true, true);
    return decal;
}
const DecalBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateDecal
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateDecal = (name, sourceMesh, position, normal, size, angle)=>{
    const options = {
        position,
        normal,
        size,
        angle
    };
    return CreateDecal(name, sourceMesh, options);
}; //# sourceMappingURL=decalBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/geodesicBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateGeodesic",
    ()=>CreateGeodesic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polyhedronBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geodesicMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/geodesicMesh.js [app-ssr] (ecmascript)");
;
;
;
function CreateGeodesic(name, options, scene = null) {
    let m = options.m || 1;
    if (m !== Math.floor(m)) {
        m = Math.floor(m);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("m not an integer only floor(m) used");
    }
    let n = options.n || 0;
    if (n !== Math.floor(n)) {
        n = Math.floor(n);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("n not an integer only floor(n) used");
    }
    if (n > m) {
        const temp = n;
        n = m;
        m = temp;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("n > m therefore m and n swapped");
    }
    const primTri = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geodesicMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_PrimaryIsoTriangle"]();
    primTri.build(m, n);
    const geodesicData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geodesicMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeodesicData"].BuildGeodesicData(primTri);
    const geoOptions = {
        custom: geodesicData,
        size: options.size,
        sizeX: options.sizeX,
        sizeY: options.sizeY,
        sizeZ: options.sizeZ,
        faceUV: options.faceUV,
        faceColors: options.faceColors,
        flat: options.flat,
        updatable: options.updatable,
        sideOrientation: options.sideOrientation,
        frontUVs: options.frontUVs,
        backUVs: options.backUVs
    };
    const geodesic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePolyhedron"])(name, geoOptions, scene);
    return geodesic;
} //# sourceMappingURL=geodesicBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/goldbergBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateGoldberg",
    ()=>CreateGoldberg,
    "CreateGoldbergVertexData",
    ()=>CreateGoldbergVertexData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.vertexData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geodesicMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/geodesicMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$goldbergMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/goldbergMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function CreateGoldbergVertexData(options, goldbergData) {
    const size = options.size;
    const sizeX = options.sizeX || size || 1;
    const sizeY = options.sizeY || size || 1;
    const sizeZ = options.sizeZ || size || 1;
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"].DEFAULTSIDE;
    const positions = [];
    const indices = [];
    const normals = [];
    const uvs = [];
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for(let v = 0; v < goldbergData.vertex.length; v++){
        minX = Math.min(minX, goldbergData.vertex[v][0] * sizeX);
        maxX = Math.max(maxX, goldbergData.vertex[v][0] * sizeX);
        minY = Math.min(minY, goldbergData.vertex[v][1] * sizeY);
        maxY = Math.max(maxY, goldbergData.vertex[v][1] * sizeY);
    }
    let index = 0;
    for(let f = 0; f < goldbergData.face.length; f++){
        const verts = goldbergData.face[f];
        const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(goldbergData.vertex[verts[0]]);
        const b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(goldbergData.vertex[verts[2]]);
        const c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(goldbergData.vertex[verts[1]]);
        const ba = b.subtract(a);
        const ca = c.subtract(a);
        const norm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(ca, ba).normalize();
        for(let v = 0; v < verts.length; v++){
            normals.push(norm.x, norm.y, norm.z);
            const pdata = goldbergData.vertex[verts[v]];
            positions.push(pdata[0] * sizeX, pdata[1] * sizeY, pdata[2] * sizeZ);
            const vCoord = (pdata[1] * sizeY - minY) / (maxY - minY);
            uvs.push((pdata[0] * sizeX - minX) / (maxX - minX), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] ? 1 - vCoord : vCoord);
        }
        for(let v = 0; v < verts.length - 2; v++){
            indices.push(index, index + v + 2, index + v + 1);
        }
        index += verts.length;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]._ComputeSides(sideOrientation, positions, indices, normals, uvs);
    const vertexData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$vertexData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexData"]();
    vertexData.positions = positions;
    vertexData.indices = indices;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
function CreateGoldberg(name, options, scene = null) {
    const size = options.size;
    const sizeX = options.sizeX || size || 1;
    const sizeY = options.sizeY || size || 1;
    const sizeZ = options.sizeZ || size || 1;
    let m = options.m || 1;
    if (m !== Math.floor(m)) {
        m = Math.floor(m);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("m not an integer only floor(m) used");
    }
    let n = options.n || 0;
    if (n !== Math.floor(n)) {
        n = Math.floor(n);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("n not an integer only floor(n) used");
    }
    if (n > m) {
        const temp = n;
        n = m;
        m = temp;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("n > m therefore m and n swapped");
    }
    const primTri = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geodesicMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_PrimaryIsoTriangle"]();
    primTri.build(m, n);
    const geodesicData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$geodesicMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeodesicData"].BuildGeodesicData(primTri);
    const goldbergData = geodesicData.toGoldbergPolyhedronData();
    const goldberg = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$goldbergMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoldbergMesh"](name, scene);
    options.sideOrientation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation);
    goldberg._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateGoldbergVertexData(options, goldbergData);
    vertexData.applyToMesh(goldberg, options.updatable);
    goldberg.goldbergData.nbSharedFaces = geodesicData.sharedNodes;
    goldberg.goldbergData.nbUnsharedFaces = geodesicData.poleNodes;
    goldberg.goldbergData.adjacentFaces = geodesicData.adjacentFaces;
    goldberg.goldbergData.nbFaces = goldberg.goldbergData.nbSharedFaces + goldberg.goldbergData.nbUnsharedFaces;
    goldberg.goldbergData.nbFacesAtPole = (goldberg.goldbergData.nbUnsharedFaces - 12) / 12;
    for(let f = 0; f < geodesicData.vertex.length; f++){
        goldberg.goldbergData.faceCenters.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(geodesicData.vertex[f]));
        goldberg.goldbergData.faceCenters[f].x *= sizeX;
        goldberg.goldbergData.faceCenters[f].y *= sizeY;
        goldberg.goldbergData.faceCenters[f].z *= sizeZ;
        goldberg.goldbergData.faceColors.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1));
    }
    for(let f = 0; f < goldbergData.face.length; f++){
        const verts = goldbergData.face[f];
        const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(goldbergData.vertex[verts[0]]);
        const b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(goldbergData.vertex[verts[2]]);
        const c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(goldbergData.vertex[verts[1]]);
        const ba = b.subtract(a);
        const ca = c.subtract(a);
        const norm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(ca, ba).normalize();
        const z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(ca, norm).normalize();
        goldberg.goldbergData.faceXaxis.push(ca.normalize());
        goldberg.goldbergData.faceYaxis.push(norm);
        goldberg.goldbergData.faceZaxis.push(z);
    }
    return goldberg;
} //# sourceMappingURL=goldbergBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/textBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateText",
    ()=>CreateText,
    "CreateTextShapePaths",
    ()=>CreateTextShapePaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.path.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polygonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polygonBuilder.js [app-ssr] (ecmascript)");
;
;
;
;
;
// Shape functions
class ShapePath {
    /** Create the ShapePath used to support glyphs
     * @param resolution defines the resolution used to determine the number of points per curve (default is 4)
     */ constructor(resolution){
        this._paths = [];
        this._tempPaths = [];
        this._holes = [];
        this._resolution = resolution;
    }
    /** Move the virtual cursor to a coordinate
     * @param x defines the x coordinate
     * @param y defines the y coordinate
     */ moveTo(x, y) {
        this._currentPath = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Path2"](x, y);
        this._tempPaths.push(this._currentPath);
    }
    /** Draw a line from the virtual cursor to a given coordinate
     * @param x defines the x coordinate
     * @param y defines the y coordinate
     */ lineTo(x, y) {
        this._currentPath.addLineTo(x, y);
    }
    /** Create a quadratic curve from the virtual cursor to a given coordinate
     * @param cpx defines the x coordinate of the control point
     * @param cpy defines the y coordinate of the control point
     * @param x defines the x coordinate of the end point
     * @param y defines the y coordinate of the end point
     */ quadraticCurveTo(cpx, cpy, x, y) {
        this._currentPath.addQuadraticCurveTo(cpx, cpy, x, y, this._resolution);
    }
    /**
     * Create a bezier curve from the virtual cursor to a given coordinate
     * @param cpx1 defines the x coordinate of the first control point
     * @param cpy1 defines the y coordinate of the first control point
     * @param cpx2 defines the x coordinate of the second control point
     * @param cpy2 defines the y coordinate of the second control point
     * @param x defines the x coordinate of the end point
     * @param y defines the y coordinate of the end point
     */ bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x, y) {
        this._currentPath.addBezierCurveTo(cpx1, cpy1, cpx2, cpy2, x, y, this._resolution);
    }
    /** Extract holes based on CW / CCW */ extractHoles() {
        for (const path of this._tempPaths){
            if (path.area() > 0) {
                this._holes.push(path);
            } else {
                this._paths.push(path);
            }
        }
        if (!this._paths.length && this._holes.length) {
            const temp = this._holes;
            this._holes = this._paths;
            this._paths = temp;
        }
        this._tempPaths.length = 0;
    }
    /** Gets the list of paths */ get paths() {
        return this._paths;
    }
    /** Gets the list of holes */ get holes() {
        return this._holes;
    }
}
// Utility functions
function CreateShapePath(char, scale, offsetX, offsetY, resolution, fontData) {
    const glyph = fontData.glyphs[char] || fontData.glyphs["?"];
    if (!glyph) {
        // return if there is no glyph data
        return null;
    }
    const shapePath = new ShapePath(resolution);
    if (glyph.o) {
        const outline = glyph.o.split(" ");
        for(let i = 0, l = outline.length; i < l;){
            const action = outline[i++];
            switch(action){
                case "m":
                    {
                        // moveTo
                        const x = parseInt(outline[i++]) * scale + offsetX;
                        const y = parseInt(outline[i++]) * scale + offsetY;
                        shapePath.moveTo(x, y);
                        break;
                    }
                case "l":
                    {
                        // lineTo
                        const x = parseInt(outline[i++]) * scale + offsetX;
                        const y = parseInt(outline[i++]) * scale + offsetY;
                        shapePath.lineTo(x, y);
                        break;
                    }
                case "q":
                    {
                        // quadraticCurveTo
                        const cpx = parseInt(outline[i++]) * scale + offsetX;
                        const cpy = parseInt(outline[i++]) * scale + offsetY;
                        const cpx1 = parseInt(outline[i++]) * scale + offsetX;
                        const cpy1 = parseInt(outline[i++]) * scale + offsetY;
                        shapePath.quadraticCurveTo(cpx1, cpy1, cpx, cpy);
                        break;
                    }
                case "b":
                    {
                        // bezierCurveTo
                        const cpx = parseInt(outline[i++]) * scale + offsetX;
                        const cpy = parseInt(outline[i++]) * scale + offsetY;
                        const cpx1 = parseInt(outline[i++]) * scale + offsetX;
                        const cpy1 = parseInt(outline[i++]) * scale + offsetY;
                        const cpx2 = parseInt(outline[i++]) * scale + offsetX;
                        const cpy2 = parseInt(outline[i++]) * scale + offsetY;
                        shapePath.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, cpx, cpy);
                        break;
                    }
            }
        }
    }
    // Extract holes (based on clockwise data)
    shapePath.extractHoles();
    return {
        offsetX: glyph.ha * scale,
        shapePath: shapePath
    };
}
function CreateTextShapePaths(text, size, resolution, fontData) {
    const chars = Array.from(text);
    const scale = size / fontData.resolution;
    const lineHeight = (fontData.boundingBox.yMax - fontData.boundingBox.yMin + fontData.underlineThickness) * scale;
    const shapePaths = [];
    let offsetX = 0, offsetY = 0;
    for(let i = 0; i < chars.length; i++){
        const char = chars[i];
        if (char === "\n") {
            offsetX = 0;
            offsetY -= lineHeight;
        } else {
            const ret = CreateShapePath(char, scale, offsetX, offsetY, resolution, fontData);
            if (ret) {
                offsetX += ret.offsetX;
                shapePaths.push(ret.shapePath);
            }
        }
    }
    return shapePaths;
}
function CreateText(name, text, fontData, options = {
    size: 50,
    resolution: 8,
    depth: 1.0
}, scene = null, earcutInjection = earcut) {
    // First we need to generate the paths
    const shapePaths = CreateTextShapePaths(text, options.size || 50, options.resolution || 8, fontData);
    // And extrude them
    const meshes = [];
    let letterIndex = 0;
    for (const shapePath of shapePaths){
        if (!shapePath.paths.length) {
            continue;
        }
        const holes = shapePath.holes.slice(); // Copy it as we will update the copy
        for (const path of shapePath.paths){
            const holeVectors = [];
            const shapeVectors = [];
            const points = path.getPoints();
            for (const point of points){
                shapeVectors.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](point.x, 0, point.y)); // ExtrudePolygon expects data on the xz plane
            }
            // Holes
            const localHolesCopy = holes.slice();
            for (const hole of localHolesCopy){
                const points = hole.getPoints();
                let found = false;
                for (const point of points){
                    if (path.isPointInside(point)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    continue;
                }
                const holePoints = [];
                for (const point of points){
                    holePoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](point.x, 0, point.y)); // ExtrudePolygon expects data on the xz plane
                }
                holeVectors.push(holePoints);
                // Remove the hole as it was already used
                holes.splice(holes.indexOf(hole), 1);
            }
            // There is at least a hole but it was unaffected
            if (!holeVectors.length && holes.length) {
                for (const hole of holes){
                    const points = hole.getPoints();
                    const holePoints = [];
                    for (const point of points){
                        holePoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](point.x, 0, point.y)); // ExtrudePolygon expects data on the xz plane
                    }
                    holeVectors.push(holePoints);
                }
            }
            // Extrusion!
            const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polygonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudePolygon"])(name, {
                shape: shapeVectors,
                holes: holeVectors.length ? holeVectors : undefined,
                depth: options.depth || 1.0,
                faceUV: options.faceUV || options.perLetterFaceUV?.(letterIndex),
                faceColors: options.faceColors || options.perLetterFaceColors?.(letterIndex),
                sideOrientation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]._GetDefaultSideOrientation(options.sideOrientation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].DOUBLESIDE)
            }, scene, earcutInjection);
            meshes.push(mesh);
            letterIndex++;
        }
    }
    // Then we can merge everyone into one single mesh
    const newMesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].MergeMeshes(meshes, true, true);
    if (newMesh) {
        // Move pivot to desired center / bottom / center position
        const bbox = newMesh.getBoundingInfo().boundingBox;
        newMesh.position.x += -(bbox.minimumWorld.x + bbox.maximumWorld.x) / 2; // Mid X
        newMesh.position.y += -(bbox.minimumWorld.y + bbox.maximumWorld.y) / 2; // Mid Z as it will rotate
        newMesh.position.z += -(bbox.minimumWorld.z + bbox.maximumWorld.z) / 2 + bbox.extendSize.z; // Bottom Y as it will rotate
        newMesh.name = name;
        // Rotate 90° Up
        const pivot = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransformNode"]("pivot", scene);
        pivot.rotation.x = -Math.PI / 2;
        newMesh.parent = pivot;
        newMesh.bakeCurrentTransformIntoVertices();
        // Remove the pivot
        newMesh.parent = null;
        pivot.dispose();
    }
    return newMesh;
} //# sourceMappingURL=textBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/hemisphereBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateHemisphere",
    ()=>CreateHemisphere,
    "HemisphereBuilder",
    ()=>HemisphereBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$discBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/discBuilder.js [app-ssr] (ecmascript)");
;
;
;
function CreateHemisphere(name, options = {}, scene) {
    if (!options.diameter) {
        options.diameter = 1;
    }
    if (!options.segments) {
        options.segments = 16;
    }
    const halfSphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphere"])("", {
        slice: 0.5,
        diameter: options.diameter,
        segments: options.segments
    }, scene);
    const disc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$discBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateDisc"])("", {
        radius: options.diameter / 2,
        tessellation: options.segments * 3 + (4 - options.segments)
    }, scene);
    disc.rotation.x = -Math.PI / 2;
    disc.parent = halfSphere;
    const merged = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].MergeMeshes([
        disc,
        halfSphere
    ], true);
    merged.name = name;
    return merged;
}
const HemisphereBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateHemisphere
};
/**
 * Creates a hemispheric light
 * @param name
 * @param segments
 * @param diameter
 * @param scene
 * @returns the mesh
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"].CreateHemisphere = (name, segments, diameter, scene)=>{
    const options = {
        segments: segments,
        diameter: diameter
    };
    return CreateHemisphere(name, options, scene);
}; //# sourceMappingURL=hemisphereBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/greasedLineBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompleteGreasedLineColorTable",
    ()=>CompleteGreasedLineColorTable,
    "CompleteGreasedLineWidthTable",
    ()=>CompleteGreasedLineWidthTable,
    "CreateGreasedLine",
    ()=>CreateGreasedLine,
    "CreateGreasedLineMaterial",
    ()=>CreateGreasedLineMaterial,
    "GetPointsCount",
    ()=>GetPointsCount,
    "GreasedLineMeshColorDistribution",
    ()=>GreasedLineMeshColorDistribution,
    "GreasedLineMeshWidthDistribution",
    ()=>GreasedLineMeshWidthDistribution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$GreasedLine$2f$greasedLineMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/GreasedLine/greasedLineMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineSimpleMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/greasedLineTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$GreasedLine$2f$greasedLineRibbonMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/GreasedLine/greasedLineRibbonMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLinePluginMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineMaterialDefaults.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var GreasedLineMeshColorDistribution;
(function(GreasedLineMeshColorDistribution) {
    /**
     * Do no modify the color table
     */ GreasedLineMeshColorDistribution[GreasedLineMeshColorDistribution["COLOR_DISTRIBUTION_NONE"] = 0] = "COLOR_DISTRIBUTION_NONE";
    /**
     * Repeat the colors until the color table is full
     */ GreasedLineMeshColorDistribution[GreasedLineMeshColorDistribution["COLOR_DISTRIBUTION_REPEAT"] = 1] = "COLOR_DISTRIBUTION_REPEAT";
    /**
     * Distribute the colors evenly through the color table
     */ GreasedLineMeshColorDistribution[GreasedLineMeshColorDistribution["COLOR_DISTRIBUTION_EVEN"] = 2] = "COLOR_DISTRIBUTION_EVEN";
    /**
     * Put the colors to start of the color table a fill the rest with the default color
     */ GreasedLineMeshColorDistribution[GreasedLineMeshColorDistribution["COLOR_DISTRIBUTION_START"] = 3] = "COLOR_DISTRIBUTION_START";
    /**
     * Put the colors to the end of the color table and fill the rest with the default color
     */ GreasedLineMeshColorDistribution[GreasedLineMeshColorDistribution["COLOR_DISTRIBUTION_END"] = 4] = "COLOR_DISTRIBUTION_END";
    /**
     * Put the colors to start and to the end of the color table and fill the gap between with the default color
     */ GreasedLineMeshColorDistribution[GreasedLineMeshColorDistribution["COLOR_DISTRIBUTION_START_END"] = 5] = "COLOR_DISTRIBUTION_START_END";
})(GreasedLineMeshColorDistribution || (GreasedLineMeshColorDistribution = {}));
var GreasedLineMeshWidthDistribution;
(function(GreasedLineMeshWidthDistribution) {
    /**
     * Do no modify the width table
     */ GreasedLineMeshWidthDistribution[GreasedLineMeshWidthDistribution["WIDTH_DISTRIBUTION_NONE"] = 0] = "WIDTH_DISTRIBUTION_NONE";
    /**
     * Repeat the widths until the width table is full
     */ GreasedLineMeshWidthDistribution[GreasedLineMeshWidthDistribution["WIDTH_DISTRIBUTION_REPEAT"] = 1] = "WIDTH_DISTRIBUTION_REPEAT";
    /**
     * Distribute the widths evenly through the width table
     */ GreasedLineMeshWidthDistribution[GreasedLineMeshWidthDistribution["WIDTH_DISTRIBUTION_EVEN"] = 2] = "WIDTH_DISTRIBUTION_EVEN";
    /**
     * Put the widths to start of the width table a fill the rest with the default width
     */ GreasedLineMeshWidthDistribution[GreasedLineMeshWidthDistribution["WIDTH_DISTRIBUTION_START"] = 3] = "WIDTH_DISTRIBUTION_START";
    /**
     * Put the widths to the end of the width table and fill the rest with the default width
     */ GreasedLineMeshWidthDistribution[GreasedLineMeshWidthDistribution["WIDTH_DISTRIBUTION_END"] = 4] = "WIDTH_DISTRIBUTION_END";
    /**
     * Put the widths to start and to the end of the width table and fill the gap between with the default width
     */ GreasedLineMeshWidthDistribution[GreasedLineMeshWidthDistribution["WIDTH_DISTRIBUTION_START_END"] = 5] = "WIDTH_DISTRIBUTION_START_END";
})(GreasedLineMeshWidthDistribution || (GreasedLineMeshWidthDistribution = {}));
function CreateGreasedLineMaterial(name, options, scene) {
    scene = scene ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
    let material;
    switch(options.materialType){
        case 1 /* GreasedLineMeshMaterialType.MATERIAL_TYPE_PBR */ :
            material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRMaterial"](name, scene, options.forceGLSL);
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLinePluginMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLinePluginMaterial"](material, scene, options);
            break;
        case 2 /* GreasedLineMeshMaterialType.MATERIAL_TYPE_SIMPLE */ :
            material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineSimpleMaterial"](name, scene, options);
            break;
        default:
            material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"](name, scene, options.forceGLSL);
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLinePluginMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLinePluginMaterial"](material, scene, options);
            break;
    }
    return material;
}
function CreateGreasedLine(name, options, materialOptions, scene) {
    scene = scene ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
    let instance;
    const allPoints = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].ConvertPoints(options.points, options.pointsOptions);
    options.widthDistribution = options.widthDistribution ?? 3 /* GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START */ ;
    if (options.ribbonOptions) {
        options.ribbonOptions.facesMode = options.ribbonOptions.facesMode ?? 1 /* GreasedLineRibbonFacesMode.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING */ ;
        options.ribbonOptions.pointsMode = options.ribbonOptions.pointsMode ?? 0 /* GreasedLineRibbonPointsMode.POINTS_MODE_POINTS */ ;
        options.ribbonOptions.directionsAutoMode = options.ribbonOptions.directionsAutoMode ?? (options.ribbonOptions.directions ? 99 /* GreasedLineRibbonAutoDirectionMode.AUTO_DIRECTIONS_NONE */  : 0 /* GreasedLineRibbonAutoDirectionMode.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT */ );
    }
    materialOptions = materialOptions ?? {
        color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_COLOR
    };
    materialOptions.createAndAssignMaterial = materialOptions.createAndAssignMaterial ?? true;
    materialOptions.colorDistribution = materialOptions?.colorDistribution ?? 3 /* GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_START */ ;
    materialOptions.materialType = materialOptions.materialType ?? 0 /* GreasedLineMeshMaterialType.MATERIAL_TYPE_STANDARD */ ;
    const pointsCount = GetPointsCount(allPoints);
    const widths = CompleteGreasedLineWidthTable(pointsCount, options.widths ?? [], options.widthDistribution);
    const colors = materialOptions?.colors ? CompleteGreasedLineColorTable(pointsCount, materialOptions.colors, materialOptions.colorDistribution, materialOptions.color ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_COLOR) : undefined;
    // create new mesh if instance is not defined
    const initialGreasedLineOptions = {
        points: allPoints,
        updatable: options.updatable,
        widths,
        lazy: options.lazy,
        ribbonOptions: options.ribbonOptions,
        uvs: options.uvs,
        colorPointers: options.colorPointers
    };
    if (initialGreasedLineOptions.ribbonOptions) {
        if (initialGreasedLineOptions.ribbonOptions.pointsMode === 0 /* GreasedLineRibbonPointsMode.POINTS_MODE_POINTS */ ) {
            initialGreasedLineOptions.ribbonOptions.width = materialOptions.width ?? initialGreasedLineOptions.ribbonOptions.width ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_WIDTH;
        }
    }
    if (!options.instance) {
        instance = initialGreasedLineOptions.ribbonOptions ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$GreasedLine$2f$greasedLineRibbonMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineRibbonMesh"](name, scene, initialGreasedLineOptions) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$GreasedLine$2f$greasedLineMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMesh"](name, scene, initialGreasedLineOptions);
        if (materialOptions) {
            const initialMaterialOptions = {
                materialType: materialOptions.materialType,
                dashCount: materialOptions.dashCount,
                dashOffset: materialOptions.dashOffset,
                dashRatio: materialOptions.dashRatio,
                resolution: materialOptions.resolution,
                sizeAttenuation: materialOptions.sizeAttenuation,
                useColors: materialOptions.useColors,
                useDash: materialOptions.useDash,
                visibility: materialOptions.visibility,
                width: materialOptions.width,
                color: materialOptions.color,
                colorMode: materialOptions.colorMode,
                colorsSampling: materialOptions.colorsSampling,
                colorDistributionType: materialOptions.colorDistributionType,
                colors,
                cameraFacing: !options.ribbonOptions,
                colorsTexture: materialOptions.colorsTexture
            };
            if (materialOptions.createAndAssignMaterial) {
                const material = CreateGreasedLineMaterial(name, initialMaterialOptions, scene);
                instance.material = material;
                if (options.ribbonOptions?.facesMode === 1 /* GreasedLineRibbonFacesMode.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING */ ) {
                    material.backFaceCulling = false;
                }
            }
        }
    } else {
        // update the data on the mesh instance
        instance = options.instance;
        if (instance instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$GreasedLine$2f$greasedLineRibbonMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineRibbonMesh"]) {
            instance.addPoints(allPoints, initialGreasedLineOptions);
        } else {
            // add widths
            const currentWidths = instance.widths;
            if (currentWidths) {
                const newWidths = currentWidths.slice();
                for (const w of widths){
                    newWidths.push(w);
                }
                instance.widths = newWidths;
            } else {
                instance.widths = widths;
            }
            instance.addPoints(allPoints);
            // add UVs
            if (options.uvs) {
                const currentUVs = instance.uvs;
                if (currentUVs) {
                    const newUVs = new Float32Array(currentUVs.length + options.uvs.length);
                    newUVs.set(currentUVs, 0);
                    newUVs.set(options.uvs, currentUVs.length);
                    instance.uvs = newUVs;
                } else {
                    instance.uvs = options.uvs;
                }
            }
        }
    }
    // add colors
    // it will merge if any colors already on the instance
    if (colors && options.instance) {
        if (options.instance.greasedLineMaterial) {
            const currentColors = options.instance.greasedLineMaterial.colors;
            if (currentColors) {
                const newColors = currentColors.concat(colors);
                options.instance.greasedLineMaterial.setColors(newColors, instance.isLazy());
            }
        }
    }
    return instance;
}
function GetPointsCount(allPoints) {
    let pointCount = 0;
    for (const points of allPoints){
        pointCount += points.length / 3;
    }
    return pointCount;
}
function CompleteGreasedLineWidthTable(pointCount, widths, widthsDistribution, defaultWidthUpper = 1, defaultWidthLower = 1) {
    const missingCount = pointCount - widths.length / 2;
    const widthsData = [];
    if (missingCount < 0) {
        return widths.slice(0, pointCount * 2);
    }
    // is the width table shorter than the point table?
    if (missingCount > 0) {
        if (widths.length % 2 != 0) {
            widths.push(defaultWidthUpper);
        }
        // it is, fill in the missing elements
        if (widthsDistribution === 5 /* GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START_END */ ) {
            const halfCount = Math.floor(widths.length / 2);
            // start sector
            for(let i = 0, j = 0; i < halfCount - 1; i++){
                widthsData.push(widths[j++]);
                widthsData.push(widths[j++]);
            }
            // middle sector
            const widthL = widths[halfCount / 2];
            const widthU = widths[halfCount / 2 + 1];
            for(let i = 0; i < missingCount; i++){
                widthsData.push(widthU);
                widthsData.push(widthL);
            }
            // end sector
            for(let i = halfCount; i < widths.length; i += 2){
                widthsData.push(widths[i]);
                widthsData.push(widths[i + 1]);
            }
        } else if (widthsDistribution === 3 /* GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_START */ ) {
            // start sector
            for(let i = 0; i < widths.length; i += 2){
                widthsData.push(widths[i]);
                widthsData.push(widths[i + 1]);
            }
            // end sector
            for(let i = 0; i < missingCount; i++){
                widthsData.push(defaultWidthUpper);
                widthsData.push(defaultWidthLower);
            }
        } else if (widthsDistribution === 4 /* GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_END */ ) {
            // start sector
            for(let i = 0; i < missingCount; i++){
                widthsData.push(defaultWidthUpper);
                widthsData.push(defaultWidthLower);
            }
            // end sector
            for(let i = 0; i < widths.length; i += 2){
                widthsData.push(widths[i]);
                widthsData.push(widths[i + 1]);
            }
        } else if (widthsDistribution === 1 /* GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_REPEAT */ ) {
            let i = 0;
            for(let x = 0; x < pointCount; x++){
                widthsData.push(widths[i++]);
                widthsData.push(widths[i++]);
                if (i === widths.length) {
                    i = 0;
                }
            }
        } else if (widthsDistribution === 2 /* GreasedLineMeshWidthDistribution.WIDTH_DISTRIBUTION_EVEN */ ) {
            let j = 0;
            const widthsectorLength = widths.length / ((pointCount - 1) * 2);
            for(let x = 0; x < pointCount; x++){
                const i = Math.floor(j);
                widthsData.push(widths[i]);
                widthsData.push(widths[i + 1]);
                j += widthsectorLength;
            }
        }
    } else {
        for(let i = 0; i < widths.length; i++){
            widthsData.push(widths[i]);
        }
    }
    return widthsData;
}
function CompleteGreasedLineColorTable(pointCount, colors, colorDistribution, defaultColor) {
    pointCount = Math.max(colors.length, pointCount);
    const missingCount = pointCount - colors.length;
    if (missingCount < 0) {
        return colors.slice(0, pointCount);
    }
    const colorsData = [];
    // is the color table shorter than the point table?
    if (missingCount > 0) {
        // it is, fill in the missing elements
        if (colorDistribution === 5 /* GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_START_END */ ) {
            const halfCount = Math.floor(colors.length / 2);
            // start sector
            for(let i = 0; i < halfCount; i++){
                colorsData.push(colors[i]);
            }
            // middle sector
            for(let i = 0; i < missingCount - 1; i++){
                colorsData.push(defaultColor);
            }
            // end sector
            for(let i = halfCount; i < colors.length; i++){
                colorsData.push(colors[i]);
            }
        } else if (colorDistribution === 3 /* GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_START */ ) {
            // start sector
            for(let i = 0; i < colors.length; i++){
                colorsData.push(colors[i]);
            }
            // end sector
            for(let i = 0; i < missingCount; i++){
                colorsData.push(defaultColor);
            }
        } else if (colorDistribution === 4 /* GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_END */ ) {
            // start sector
            for(let i = 0; i < missingCount - 1; i++){
                colorsData.push(defaultColor);
            }
            // end sector
            for(let i = 0; i < colors.length; i++){
                colorsData.push(colors[i]);
            }
        } else if (colorDistribution === 1 /* GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_REPEAT */ ) {
            let i = 0;
            for(let x = 0; x < pointCount; x++){
                colorsData.push(colors[i]);
                i++;
                if (i === colors.length) {
                    i = 0;
                }
            }
        } else if (colorDistribution === 2 /* GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_EVEN */ ) {
            let j = 0;
            const colorSectorLength = colors.length / (pointCount - 1);
            for(let x = 0; x < pointCount - 1; x++){
                const i = Math.floor(j);
                colorsData.push(colors[i]);
                j += colorSectorLength;
            }
        } else if (colorDistribution === 0 /* GreasedLineMeshColorDistribution.COLOR_DISTRIBUTION_NONE */ ) {
            for(let i = 0; i < colors.length; i++){
                colorsData.push(colors[i]);
            }
        }
    } else {
        for(let i = 0; i < pointCount; i++){
            colorsData.push(colors[i]);
        }
    }
    return colorsData;
} //# sourceMappingURL=greasedLineBuilder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/boxBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledBoxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tiledBoxBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$discBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/discBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/ribbonBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$hemisphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/hemisphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusKnotBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusKnotBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polygonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polygonBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/shapeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$latheBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/latheBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tiledPlaneBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/groundBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tubeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tubeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polyhedronBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$geodesicBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/geodesicBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$goldbergBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/goldbergBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$decalBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/decalBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$icoSphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/icoSphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$capsuleBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/capsuleBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$textBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/textBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/greasedLineBuilder.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoxBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxBuilder"],
    "CapsuleBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$capsuleBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CapsuleBuilder"],
    "CompleteGreasedLineColorTable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompleteGreasedLineColorTable"],
    "CompleteGreasedLineWidthTable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompleteGreasedLineWidthTable"],
    "CreateBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateBox"],
    "CreateBoxVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateBoxVertexData"],
    "CreateCapsule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$capsuleBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateCapsule"],
    "CreateCapsuleVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$capsuleBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateCapsuleVertexData"],
    "CreateCylinder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateCylinder"],
    "CreateCylinderVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateCylinderVertexData"],
    "CreateDashedLines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateDashedLines"],
    "CreateDashedLinesVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateDashedLinesVertexData"],
    "CreateDecal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$decalBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateDecal"],
    "CreateDisc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$discBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateDisc"],
    "CreateDiscVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$discBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateDiscVertexData"],
    "CreateGeodesic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$geodesicBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGeodesic"],
    "CreateGoldberg",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$goldbergBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGoldberg"],
    "CreateGoldbergVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$goldbergBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGoldbergVertexData"],
    "CreateGreasedLine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGreasedLine"],
    "CreateGreasedLineMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGreasedLineMaterial"],
    "CreateGround",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGround"],
    "CreateGroundFromHeightMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundFromHeightMap"],
    "CreateGroundFromHeightMapVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundFromHeightMapVertexData"],
    "CreateGroundVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGroundVertexData"],
    "CreateHemisphere",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$hemisphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateHemisphere"],
    "CreateIcoSphere",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$icoSphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateIcoSphere"],
    "CreateIcoSphereVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$icoSphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateIcoSphereVertexData"],
    "CreateLathe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$latheBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateLathe"],
    "CreateLineSystem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateLineSystem"],
    "CreateLineSystemVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateLineSystemVertexData"],
    "CreateLines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateLines"],
    "CreatePlane",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePlane"],
    "CreatePlaneVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePlaneVertexData"],
    "CreatePolygon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polygonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePolygon"],
    "CreatePolygonVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polygonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePolygonVertexData"],
    "CreatePolyhedron",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePolyhedron"],
    "CreatePolyhedronVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePolyhedronVertexData"],
    "CreateRibbon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateRibbon"],
    "CreateRibbonVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateRibbonVertexData"],
    "CreateSegmentedBoxVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSegmentedBoxVertexData"],
    "CreateSphere",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphere"],
    "CreateSphereVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphereVertexData"],
    "CreateText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$textBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateText"],
    "CreateTextShapePaths",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$textBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTextShapePaths"],
    "CreateTiledBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledBoxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledBox"],
    "CreateTiledBoxVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledBoxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledBoxVertexData"],
    "CreateTiledGround",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledGround"],
    "CreateTiledGroundVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledGroundVertexData"],
    "CreateTiledPlane",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledPlane"],
    "CreateTiledPlaneVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTiledPlaneVertexData"],
    "CreateTorus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTorus"],
    "CreateTorusKnot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusKnotBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTorusKnot"],
    "CreateTorusKnotVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusKnotBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTorusKnotVertexData"],
    "CreateTorusVertexData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTorusVertexData"],
    "CreateTube",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tubeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTube"],
    "CylinderBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CylinderBuilder"],
    "DecalBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$decalBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecalBuilder"],
    "DiscBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$discBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiscBuilder"],
    "ExtrudePolygon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polygonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudePolygon"],
    "ExtrudeShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeShape"],
    "ExtrudeShapeCustom",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtrudeShapeCustom"],
    "GetPointsCount",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetPointsCount"],
    "GreasedLineMeshColorDistribution",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMeshColorDistribution"],
    "GreasedLineMeshWidthDistribution",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMeshWidthDistribution"],
    "GroundBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GroundBuilder"],
    "HemisphereBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$hemisphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HemisphereBuilder"],
    "IcoSphereBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$icoSphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IcoSphereBuilder"],
    "LatheBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$latheBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LatheBuilder"],
    "LinesBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinesBuilder"],
    "PlaneBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneBuilder"],
    "PolygonBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polygonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolygonBuilder"],
    "PolyhedronBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolyhedronBuilder"],
    "RibbonBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RibbonBuilder"],
    "ShapeBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeBuilder"],
    "SphereBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphereBuilder"],
    "TiledBoxBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledBoxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TiledBoxBuilder"],
    "TiledPlaneBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TiledPlaneBuilder"],
    "TorusBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusBuilder"],
    "TorusKnotBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusKnotBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TorusKnotBuilder"],
    "TubeBuilder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tubeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TubeBuilder"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$boxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/boxBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledBoxBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tiledBoxBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$discBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/discBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$ribbonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/ribbonBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$hemisphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/hemisphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusKnotBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusKnotBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polygonBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polygonBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$shapeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/shapeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$latheBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/latheBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tiledPlaneBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tiledPlaneBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/groundBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$tubeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/tubeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$polyhedronBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/polyhedronBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$geodesicBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/geodesicBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$goldbergBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/goldbergBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$decalBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/decalBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$icoSphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/icoSphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$capsuleBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/capsuleBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$textBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/textBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$greasedLineBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/greasedLineBuilder.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Meshes_Builders_f5a873ad._.js.map