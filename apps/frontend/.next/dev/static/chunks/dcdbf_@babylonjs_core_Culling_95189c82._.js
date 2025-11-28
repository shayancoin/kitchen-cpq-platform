(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoundingBox",
    ()=>BoundingBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
;
;
;
class BoundingBox {
    /**
     * Creates a new bounding box
     * @param min defines the minimum vector (in local space)
     * @param max defines the maximum vector (in local space)
     * @param worldMatrix defines the new world matrix
     */ constructor(min, max, worldMatrix){
        /**
         * Gets the 8 vectors representing the bounding box in local space
         */ this.vectors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(8, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero);
        /**
         * Gets the center of the bounding box in local space
         */ this.center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets the center of the bounding box in world space
         */ this.centerWorld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets half the size of the extent in local space. Multiply by 2 to obtain the full size of the box!
         */ this.extendSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets half the size of the extent in world space. Multiply by 2 to obtain the full size of the box!
         */ this.extendSizeWorld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets the OBB (object bounding box) directions
         */ this.directions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero);
        /**
         * Gets the 8 vectors representing the bounding box in world space
         */ this.vectorsWorld = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(8, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero);
        /**
         * Gets the minimum vector in world space
         */ this.minimumWorld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets the maximum vector in world space
         */ this.maximumWorld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets the minimum vector in local space
         */ this.minimum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets the maximum vector in local space
         */ this.maximum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /** @internal */ this._drawWrapperFront = null;
        /** @internal */ this._drawWrapperBack = null;
        this.reConstruct(min, max, worldMatrix);
    }
    // Methods
    /**
     * Recreates the entire bounding box from scratch as if we call the constructor in place
     * @param min defines the new minimum vector (in local space)
     * @param max defines the new maximum vector (in local space)
     * @param worldMatrix defines the new world matrix
     */ reConstruct(min, max, worldMatrix) {
        const minX = min.x, minY = min.y, minZ = min.z, maxX = max.x, maxY = max.y, maxZ = max.z;
        const vectors = this.vectors;
        this.minimum.copyFromFloats(minX, minY, minZ);
        this.maximum.copyFromFloats(maxX, maxY, maxZ);
        vectors[0].copyFromFloats(minX, minY, minZ);
        vectors[1].copyFromFloats(maxX, maxY, maxZ);
        vectors[2].copyFromFloats(maxX, minY, minZ);
        vectors[3].copyFromFloats(minX, maxY, minZ);
        vectors[4].copyFromFloats(minX, minY, maxZ);
        vectors[5].copyFromFloats(maxX, maxY, minZ);
        vectors[6].copyFromFloats(minX, maxY, maxZ);
        vectors[7].copyFromFloats(maxX, minY, maxZ);
        // OBB
        max.addToRef(min, this.center).scaleInPlace(0.5);
        max.subtractToRef(min, this.extendSize).scaleInPlace(0.5);
        this._worldMatrix = worldMatrix || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly;
        this._update(this._worldMatrix);
    }
    /**
     * Scale the current bounding box by applying a scale factor
     * @param factor defines the scale factor to apply
     * @returns the current bounding box
     */ scale(factor) {
        const tmpVectors = BoundingBox._TmpVector3;
        const diff = this.maximum.subtractToRef(this.minimum, tmpVectors[0]);
        const len = diff.length();
        diff.normalizeFromLength(len);
        const distance = len * factor;
        const newRadius = diff.scaleInPlace(distance * 0.5);
        const min = this.center.subtractToRef(newRadius, tmpVectors[1]);
        const max = this.center.addToRef(newRadius, tmpVectors[2]);
        this.reConstruct(min, max, this._worldMatrix);
        return this;
    }
    /**
     * Gets the world matrix of the bounding box
     * @returns a matrix
     */ getWorldMatrix() {
        return this._worldMatrix;
    }
    /**
     * @internal
     */ _update(world) {
        const minWorld = this.minimumWorld;
        const maxWorld = this.maximumWorld;
        const directions = this.directions;
        const vectorsWorld = this.vectorsWorld;
        const vectors = this.vectors;
        if (!world.isIdentity()) {
            minWorld.setAll(Number.MAX_VALUE);
            maxWorld.setAll(-Number.MAX_VALUE);
            for(let index = 0; index < 8; ++index){
                const v = vectorsWorld[index];
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(vectors[index], world, v);
                minWorld.minimizeInPlace(v);
                maxWorld.maximizeInPlace(v);
            }
            // Extend
            maxWorld.subtractToRef(minWorld, this.extendSizeWorld).scaleInPlace(0.5);
            maxWorld.addToRef(minWorld, this.centerWorld).scaleInPlace(0.5);
        } else {
            minWorld.copyFrom(this.minimum);
            maxWorld.copyFrom(this.maximum);
            for(let index = 0; index < 8; ++index){
                vectorsWorld[index].copyFrom(vectors[index]);
            }
            // Extend
            this.extendSizeWorld.copyFrom(this.extendSize);
            this.centerWorld.copyFrom(this.center);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(world.m, 0, directions[0]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(world.m, 4, directions[1]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(world.m, 8, directions[2]);
        this._worldMatrix = world;
    }
    /**
     * Tests if the bounding box is intersecting the frustum planes
     * @param frustumPlanes defines the frustum planes to test
     * @returns true if there is an intersection
     */ isInFrustum(frustumPlanes) {
        return BoundingBox.IsInFrustum(this.vectorsWorld, frustumPlanes);
    }
    /**
     * Tests if the bounding box is entirely inside the frustum planes
     * @param frustumPlanes defines the frustum planes to test
     * @returns true if there is an inclusion
     */ isCompletelyInFrustum(frustumPlanes) {
        return BoundingBox.IsCompletelyInFrustum(this.vectorsWorld, frustumPlanes);
    }
    /**
     * Tests if a point is inside the bounding box
     * @param point defines the point to test
     * @returns true if the point is inside the bounding box
     */ intersectsPoint(point) {
        const min = this.minimumWorld;
        const max = this.maximumWorld;
        const minX = min.x, minY = min.y, minZ = min.z, maxX = max.x, maxY = max.y, maxZ = max.z;
        const pointX = point.x, pointY = point.y, pointZ = point.z;
        const delta = -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        if (maxX - pointX < delta || delta > pointX - minX) {
            return false;
        }
        if (maxY - pointY < delta || delta > pointY - minY) {
            return false;
        }
        if (maxZ - pointZ < delta || delta > pointZ - minZ) {
            return false;
        }
        return true;
    }
    /**
     * Tests if the bounding box intersects with a bounding sphere
     * @param sphere defines the sphere to test
     * @returns true if there is an intersection
     */ intersectsSphere(sphere) {
        return BoundingBox.IntersectsSphere(this.minimumWorld, this.maximumWorld, sphere.centerWorld, sphere.radiusWorld);
    }
    /**
     * Tests if the bounding box intersects with a box defined by a min and max vectors
     * @param min defines the min vector to use
     * @param max defines the max vector to use
     * @returns true if there is an intersection
     */ intersectsMinMax(min, max) {
        const myMin = this.minimumWorld;
        const myMax = this.maximumWorld;
        const myMinX = myMin.x, myMinY = myMin.y, myMinZ = myMin.z, myMaxX = myMax.x, myMaxY = myMax.y, myMaxZ = myMax.z;
        const minX = min.x, minY = min.y, minZ = min.z, maxX = max.x, maxY = max.y, maxZ = max.z;
        if (myMaxX < minX || myMinX > maxX) {
            return false;
        }
        if (myMaxY < minY || myMinY > maxY) {
            return false;
        }
        if (myMaxZ < minZ || myMinZ > maxZ) {
            return false;
        }
        return true;
    }
    /**
     * Disposes the resources of the class
     */ dispose() {
        this._drawWrapperFront?.dispose();
        this._drawWrapperBack?.dispose();
    }
    // Statics
    /**
     * Tests if two bounding boxes are intersections
     * @param box0 defines the first box to test
     * @param box1 defines the second box to test
     * @returns true if there is an intersection
     */ static Intersects(box0, box1) {
        return box0.intersectsMinMax(box1.minimumWorld, box1.maximumWorld);
    }
    /**
     * Tests if a bounding box defines by a min/max vectors intersects a sphere
     * @param minPoint defines the minimum vector of the bounding box
     * @param maxPoint defines the maximum vector of the bounding box
     * @param sphereCenter defines the sphere center
     * @param sphereRadius defines the sphere radius
     * @returns true if there is an intersection
     */ static IntersectsSphere(minPoint, maxPoint, sphereCenter, sphereRadius) {
        const vector = BoundingBox._TmpVector3[0];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].ClampToRef(sphereCenter, minPoint, maxPoint, vector);
        const num = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(sphereCenter, vector);
        return num <= sphereRadius * sphereRadius;
    }
    /**
     * Tests if a bounding box defined with 8 vectors is entirely inside frustum planes
     * @param boundingVectors defines an array of 8 vectors representing a bounding box
     * @param frustumPlanes defines the frustum planes to test
     * @returns true if there is an inclusion
     */ static IsCompletelyInFrustum(boundingVectors, frustumPlanes) {
        for(let p = 0; p < 6; ++p){
            const frustumPlane = frustumPlanes[p];
            for(let i = 0; i < 8; ++i){
                if (frustumPlane.dotCoordinate(boundingVectors[i]) < 0) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Tests if a bounding box defined with 8 vectors intersects frustum planes
     * @param boundingVectors defines an array of 8 vectors representing a bounding box
     * @param frustumPlanes defines the frustum planes to test
     * @returns true if there is an intersection
     */ static IsInFrustum(boundingVectors, frustumPlanes) {
        for(let p = 0; p < 6; ++p){
            let canReturnFalse = true;
            const frustumPlane = frustumPlanes[p];
            for(let i = 0; i < 8; ++i){
                if (frustumPlane.dotCoordinate(boundingVectors[i]) >= 0) {
                    canReturnFalse = false;
                    break;
                }
            }
            if (canReturnFalse) {
                return false;
            }
        }
        return true;
    }
}
BoundingBox._TmpVector3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero); //# sourceMappingURL=boundingBox.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingSphere.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoundingSphere",
    ()=>BoundingSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
;
class BoundingSphere {
    /**
     * Creates a new bounding sphere
     * @param min defines the minimum vector (in local space)
     * @param max defines the maximum vector (in local space)
     * @param worldMatrix defines the new world matrix
     */ constructor(min, max, worldMatrix){
        /**
         * Gets the center of the bounding sphere in local space
         */ this.center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets the center of the bounding sphere in world space
         */ this.centerWorld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets the minimum vector in local space
         */ this.minimum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Gets the maximum vector in local space
         */ this.maximum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this.reConstruct(min, max, worldMatrix);
    }
    /**
     * Recreates the entire bounding sphere from scratch as if we call the constructor in place
     * @param min defines the new minimum vector (in local space)
     * @param max defines the new maximum vector (in local space)
     * @param worldMatrix defines the new world matrix
     */ reConstruct(min, max, worldMatrix) {
        this.minimum.copyFrom(min);
        this.maximum.copyFrom(max);
        const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(min, max);
        max.addToRef(min, this.center).scaleInPlace(0.5);
        this.radius = distance * 0.5;
        this._update(worldMatrix || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly);
    }
    /**
     * Scale the current bounding sphere by applying a scale factor
     * @param factor defines the scale factor to apply
     * @returns the current bounding box
     */ scale(factor) {
        const newRadius = this.radius * factor;
        const tmpVectors = BoundingSphere._TmpVector3;
        const tempRadiusVector = tmpVectors[0].setAll(newRadius);
        const min = this.center.subtractToRef(tempRadiusVector, tmpVectors[1]);
        const max = this.center.addToRef(tempRadiusVector, tmpVectors[2]);
        this.reConstruct(min, max, this._worldMatrix);
        return this;
    }
    /**
     * Gets the world matrix of the bounding box
     * @returns a matrix
     */ getWorldMatrix() {
        return this._worldMatrix;
    }
    // Methods
    /**
     * @internal
     */ _update(worldMatrix) {
        if (!worldMatrix.isIdentity()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this.center, worldMatrix, this.centerWorld);
            const tempVector = BoundingSphere._TmpVector3[0];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalFromFloatsToRef(1.0, 1.0, 1.0, worldMatrix, tempVector);
            this.radiusWorld = Math.max(Math.abs(tempVector.x), Math.abs(tempVector.y), Math.abs(tempVector.z)) * this.radius;
        } else {
            this.centerWorld.copyFrom(this.center);
            this.radiusWorld = this.radius;
        }
    }
    /**
     * Tests if the bounding sphere is intersecting the frustum planes
     * @param frustumPlanes defines the frustum planes to test
     * @returns true if there is an intersection
     */ isInFrustum(frustumPlanes) {
        const center = this.centerWorld;
        const radius = this.radiusWorld;
        for(let i = 0; i < 6; i++){
            if (frustumPlanes[i].dotCoordinate(center) <= -radius) {
                return false;
            }
        }
        return true;
    }
    /**
     * Tests if the bounding sphere center is in between the frustum planes.
     * Used for optimistic fast inclusion.
     * @param frustumPlanes defines the frustum planes to test
     * @returns true if the sphere center is in between the frustum planes
     */ isCenterInFrustum(frustumPlanes) {
        const center = this.centerWorld;
        for(let i = 0; i < 6; i++){
            if (frustumPlanes[i].dotCoordinate(center) < 0) {
                return false;
            }
        }
        return true;
    }
    /**
     * Tests if a point is inside the bounding sphere
     * @param point defines the point to test
     * @returns true if the point is inside the bounding sphere
     */ intersectsPoint(point) {
        const squareDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(this.centerWorld, point);
        if (this.radiusWorld * this.radiusWorld < squareDistance) {
            return false;
        }
        return true;
    }
    // Statics
    /**
     * Checks if two sphere intersect
     * @param sphere0 sphere 0
     * @param sphere1 sphere 1
     * @returns true if the spheres intersect
     */ static Intersects(sphere0, sphere1) {
        const squareDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(sphere0.centerWorld, sphere1.centerWorld);
        const radiusSum = sphere0.radiusWorld + sphere1.radiusWorld;
        if (radiusSum * radiusSum < squareDistance) {
            return false;
        }
        return true;
    }
    /**
     * Creates a sphere from a center and a radius
     * @param center The center
     * @param radius radius
     * @param matrix Optional worldMatrix
     * @returns The sphere
     */ static CreateFromCenterAndRadius(center, radius, matrix) {
        this._TmpVector3[0].copyFrom(center);
        this._TmpVector3[1].copyFromFloats(0, 0, radius);
        this._TmpVector3[2].copyFrom(center);
        this._TmpVector3[0].addInPlace(this._TmpVector3[1]);
        this._TmpVector3[2].subtractInPlace(this._TmpVector3[1]);
        const sphere = new BoundingSphere(this._TmpVector3[0], this._TmpVector3[2]);
        if (matrix) {
            sphere._worldMatrix = matrix;
        } else {
            sphere._worldMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        }
        return sphere;
    }
}
BoundingSphere._TmpVector3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero); //# sourceMappingURL=boundingSphere.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingInfo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoundingInfo",
    ()=>BoundingInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingSphere.js [app-client] (ecmascript)");
;
;
;
;
const _Result0 = {
    min: 0,
    max: 0
};
const _Result1 = {
    min: 0,
    max: 0
};
const ComputeBoxExtents = (axis, box, result)=>{
    const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(box.centerWorld, axis);
    const r0 = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(box.directions[0], axis)) * box.extendSize.x;
    const r1 = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(box.directions[1], axis)) * box.extendSize.y;
    const r2 = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(box.directions[2], axis)) * box.extendSize.z;
    const r = r0 + r1 + r2;
    result.min = p - r;
    result.max = p + r;
};
const AxisOverlap = (axis, box0, box1)=>{
    ComputeBoxExtents(axis, box0, _Result0);
    ComputeBoxExtents(axis, box1, _Result1);
    return !(_Result0.min > _Result1.max || _Result1.min > _Result0.max);
};
class BoundingInfo {
    /**
     * Constructs bounding info
     * @param minimum min vector of the bounding box/sphere
     * @param maximum max vector of the bounding box/sphere
     * @param worldMatrix defines the new world matrix
     */ constructor(minimum, maximum, worldMatrix){
        this._isLocked = false;
        this.boundingBox = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"](minimum, maximum, worldMatrix);
        this.boundingSphere = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingSphere"](minimum, maximum, worldMatrix);
    }
    /**
     * Recreates the entire bounding info from scratch as if we call the constructor in place
     * @param min defines the new minimum vector (in local space)
     * @param max defines the new maximum vector (in local space)
     * @param worldMatrix defines the new world matrix
     */ reConstruct(min, max, worldMatrix) {
        this.boundingBox.reConstruct(min, max, worldMatrix);
        this.boundingSphere.reConstruct(min, max, worldMatrix);
    }
    /**
     * min vector of the bounding box/sphere
     */ get minimum() {
        return this.boundingBox.minimum;
    }
    /**
     * max vector of the bounding box/sphere
     */ get maximum() {
        return this.boundingBox.maximum;
    }
    /**
     * If the info is locked and won't be updated to avoid perf overhead
     */ get isLocked() {
        return this._isLocked;
    }
    set isLocked(value) {
        this._isLocked = value;
    }
    // Methods
    /**
     * Updates the bounding sphere and box
     * @param world world matrix to be used to update
     */ update(world) {
        if (this._isLocked) {
            return;
        }
        this.boundingBox._update(world);
        this.boundingSphere._update(world);
    }
    /**
     * Recreate the bounding info to be centered around a specific point given a specific extend.
     * @param center New center of the bounding info
     * @param extend New extend of the bounding info
     * @returns the current bounding info
     */ centerOn(center, extend) {
        const minimum = BoundingInfo._TmpVector3[0].copyFrom(center).subtractInPlace(extend);
        const maximum = BoundingInfo._TmpVector3[1].copyFrom(center).addInPlace(extend);
        this.boundingBox.reConstruct(minimum, maximum, this.boundingBox.getWorldMatrix());
        this.boundingSphere.reConstruct(minimum, maximum, this.boundingBox.getWorldMatrix());
        return this;
    }
    /**
     * Grows the bounding info to include the given point.
     * @param point The point that will be included in the current bounding info (in local space)
     * @returns the current bounding info
     */ encapsulate(point) {
        const minimum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Minimize(this.minimum, point);
        const maximum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Maximize(this.maximum, point);
        this.reConstruct(minimum, maximum, this.boundingBox.getWorldMatrix());
        return this;
    }
    /**
     * Grows the bounding info to encapsulate the given bounding info.
     * @param toEncapsulate The bounding info that will be encapsulated in the current bounding info
     * @returns the current bounding info
     */ encapsulateBoundingInfo(toEncapsulate) {
        const invw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        this.boundingBox.getWorldMatrix().invertToRef(invw);
        const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(toEncapsulate.boundingBox.minimumWorld, invw, v);
        this.encapsulate(v);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(toEncapsulate.boundingBox.maximumWorld, invw, v);
        this.encapsulate(v);
        return this;
    }
    /**
     * Scale the current bounding info by applying a scale factor
     * @param factor defines the scale factor to apply
     * @returns the current bounding info
     */ scale(factor) {
        this.boundingBox.scale(factor);
        this.boundingSphere.scale(factor);
        return this;
    }
    /**
     * Returns `true` if the bounding info is within the frustum defined by the passed array of planes.
     * @param frustumPlanes defines the frustum to test
     * @param strategy defines the strategy to use for the culling (default is BABYLON.AbstractMesh.CULLINGSTRATEGY_STANDARD)
     * The different strategies available are:
     * * BABYLON.AbstractMesh.CULLINGSTRATEGY_STANDARD most accurate but slower @see https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh#CULLINGSTRATEGY_STANDARD
     * * BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY faster but less accurate @see https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh#CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
     * * BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION can be faster if always visible @see https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh#CULLINGSTRATEGY_OPTIMISTIC_INCLUSION
     * * BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY can be faster if always visible @see https://doc.babylonjs.com/typedoc/classes/BABYLON.AbstractMesh#CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY
     * @returns true if the bounding info is in the frustum planes
     */ isInFrustum(frustumPlanes, strategy = 0) {
        const inclusionTest = strategy === 2 || strategy === 3;
        if (inclusionTest) {
            if (this.boundingSphere.isCenterInFrustum(frustumPlanes)) {
                return true;
            }
        }
        if (!this.boundingSphere.isInFrustum(frustumPlanes)) {
            return false;
        }
        const bSphereOnlyTest = strategy === 1 || strategy === 3;
        if (bSphereOnlyTest) {
            return true;
        }
        return this.boundingBox.isInFrustum(frustumPlanes);
    }
    /**
     * Gets the world distance between the min and max points of the bounding box
     */ get diagonalLength() {
        const boundingBox = this.boundingBox;
        const diag = boundingBox.maximumWorld.subtractToRef(boundingBox.minimumWorld, BoundingInfo._TmpVector3[0]);
        return diag.length();
    }
    /**
     * Checks if a cullable object (mesh...) is in the camera frustum
     * Unlike isInFrustum this checks the full bounding box
     * @param frustumPlanes Camera near/planes
     * @returns true if the object is in frustum otherwise false
     */ isCompletelyInFrustum(frustumPlanes) {
        return this.boundingBox.isCompletelyInFrustum(frustumPlanes);
    }
    /**
     * @internal
     */ _checkCollision(collider) {
        return collider._canDoCollision(this.boundingSphere.centerWorld, this.boundingSphere.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld);
    }
    /**
     * Checks if a point is inside the bounding box and bounding sphere or the mesh
     * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/mesh_intersect
     * @param point the point to check intersection with
     * @returns if the point intersects
     */ intersectsPoint(point) {
        if (!this.boundingSphere.centerWorld) {
            return false;
        }
        if (!this.boundingSphere.intersectsPoint(point)) {
            return false;
        }
        if (!this.boundingBox.intersectsPoint(point)) {
            return false;
        }
        return true;
    }
    /**
     * Checks if another bounding info intersects the bounding box and bounding sphere or the mesh
     * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/mesh_intersect
     * @param boundingInfo the bounding info to check intersection with
     * @param precise if the intersection should be done using OBB
     * @returns if the bounding info intersects
     */ intersects(boundingInfo, precise) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingSphere"].Intersects(this.boundingSphere, boundingInfo.boundingSphere)) {
            return false;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"].Intersects(this.boundingBox, boundingInfo.boundingBox)) {
            return false;
        }
        if (!precise) {
            return true;
        }
        const box0 = this.boundingBox;
        const box1 = boundingInfo.boundingBox;
        if (!AxisOverlap(box0.directions[0], box0, box1)) {
            return false;
        }
        if (!AxisOverlap(box0.directions[1], box0, box1)) {
            return false;
        }
        if (!AxisOverlap(box0.directions[2], box0, box1)) {
            return false;
        }
        if (!AxisOverlap(box1.directions[0], box0, box1)) {
            return false;
        }
        if (!AxisOverlap(box1.directions[1], box0, box1)) {
            return false;
        }
        if (!AxisOverlap(box1.directions[2], box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[0], box1.directions[0]), box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[0], box1.directions[1]), box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[0], box1.directions[2]), box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[1], box1.directions[0]), box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[1], box1.directions[1]), box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[1], box1.directions[2]), box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[2], box1.directions[0]), box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[2], box1.directions[1]), box0, box1)) {
            return false;
        }
        if (!AxisOverlap(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(box0.directions[2], box1.directions[2]), box0, box1)) {
            return false;
        }
        return true;
    }
}
BoundingInfo._TmpVector3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero); //# sourceMappingURL=boundingInfo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddRayExtensions",
    ()=>AddRayExtensions,
    "CreatePickingRay",
    ()=>CreatePickingRay,
    "CreatePickingRayInCameraSpace",
    ()=>CreatePickingRayInCameraSpace,
    "CreatePickingRayInCameraSpaceToRef",
    ()=>CreatePickingRayInCameraSpaceToRef,
    "CreatePickingRayToRef",
    ()=>CreatePickingRayToRef,
    "GetForwardRay",
    ()=>GetForwardRay,
    "GetForwardRayToRef",
    ()=>GetForwardRayToRef,
    "MultiPick",
    ()=>MultiPick,
    "MultiPickWithRay",
    ()=>MultiPickWithRay,
    "Pick",
    ()=>Pick,
    "PickWithBoundingInfo",
    ()=>PickWithBoundingInfo,
    "PickWithRay",
    ()=>PickWithRay,
    "PickingCustomization",
    ()=>PickingCustomization,
    "Ray",
    ()=>Ray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$intersectionInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Collisions/intersectionInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Collisions/pickingInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$import$2e$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/import.helper.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const PickingCustomization = {
    internalPickerForMesh: undefined
};
class Ray {
    /**
     * Creates a new ray
     * @param origin origin point
     * @param direction direction
     * @param length length of the ray
     * @param epsilon The epsilon value to use when calculating the ray/triangle intersection (default: Epsilon from math constants)
     */ constructor(/** origin point */ origin, /** direction */ direction, /** [Number.MAX_VALUE] length of the ray */ length = Number.MAX_VALUE, /** [Epsilon] The epsilon value to use when calculating the ray/triangle intersection (default: Epsilon from math constants) */ epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]){
        this.origin = origin;
        this.direction = direction;
        this.length = length;
        this.epsilon = epsilon;
    }
    // Methods
    /**
     * Clone the current ray
     * @returns a new ray
     */ clone() {
        return new Ray(this.origin.clone(), this.direction.clone(), this.length);
    }
    /**
     * Checks if the ray intersects a box
     * This does not account for the ray length by design to improve perfs.
     * @param minimum bound of the box
     * @param maximum bound of the box
     * @param intersectionTreshold extra extend to be added to the box in all direction
     * @returns if the box was hit
     */ intersectsBoxMinMax(minimum, maximum, intersectionTreshold = 0) {
        const newMinimum = Ray._TmpVector3[0].copyFromFloats(minimum.x - intersectionTreshold, minimum.y - intersectionTreshold, minimum.z - intersectionTreshold);
        const newMaximum = Ray._TmpVector3[1].copyFromFloats(maximum.x + intersectionTreshold, maximum.y + intersectionTreshold, maximum.z + intersectionTreshold);
        let d = 0.0;
        let maxValue = Number.MAX_VALUE;
        let inv;
        let min;
        let max;
        let temp;
        if (Math.abs(this.direction.x) < 0.0000001) {
            if (this.origin.x < newMinimum.x || this.origin.x > newMaximum.x) {
                return false;
            }
        } else {
            inv = 1.0 / this.direction.x;
            min = (newMinimum.x - this.origin.x) * inv;
            max = (newMaximum.x - this.origin.x) * inv;
            if (max === -Infinity) {
                max = Infinity;
            }
            if (min > max) {
                temp = min;
                min = max;
                max = temp;
            }
            d = Math.max(min, d);
            maxValue = Math.min(max, maxValue);
            if (d > maxValue) {
                return false;
            }
        }
        if (Math.abs(this.direction.y) < 0.0000001) {
            if (this.origin.y < newMinimum.y || this.origin.y > newMaximum.y) {
                return false;
            }
        } else {
            inv = 1.0 / this.direction.y;
            min = (newMinimum.y - this.origin.y) * inv;
            max = (newMaximum.y - this.origin.y) * inv;
            if (max === -Infinity) {
                max = Infinity;
            }
            if (min > max) {
                temp = min;
                min = max;
                max = temp;
            }
            d = Math.max(min, d);
            maxValue = Math.min(max, maxValue);
            if (d > maxValue) {
                return false;
            }
        }
        if (Math.abs(this.direction.z) < 0.0000001) {
            if (this.origin.z < newMinimum.z || this.origin.z > newMaximum.z) {
                return false;
            }
        } else {
            inv = 1.0 / this.direction.z;
            min = (newMinimum.z - this.origin.z) * inv;
            max = (newMaximum.z - this.origin.z) * inv;
            if (max === -Infinity) {
                max = Infinity;
            }
            if (min > max) {
                temp = min;
                min = max;
                max = temp;
            }
            d = Math.max(min, d);
            maxValue = Math.min(max, maxValue);
            if (d > maxValue) {
                return false;
            }
        }
        return true;
    }
    /**
     * Checks if the ray intersects a box
     * This does not account for the ray length by design to improve perfs.
     * @param box the bounding box to check
     * @param intersectionTreshold extra extend to be added to the BoundingBox in all direction
     * @returns if the box was hit
     */ intersectsBox(box, intersectionTreshold = 0) {
        return this.intersectsBoxMinMax(box.minimum, box.maximum, intersectionTreshold);
    }
    /**
     * If the ray hits a sphere
     * @param sphere the bounding sphere to check
     * @param intersectionTreshold extra extend to be added to the BoundingSphere in all direction
     * @returns true if it hits the sphere
     */ intersectsSphere(sphere, intersectionTreshold = 0) {
        const x = sphere.center.x - this.origin.x;
        const y = sphere.center.y - this.origin.y;
        const z = sphere.center.z - this.origin.z;
        const pyth = x * x + y * y + z * z;
        const radius = sphere.radius + intersectionTreshold;
        const rr = radius * radius;
        if (pyth <= rr) {
            return true;
        }
        const dot = x * this.direction.x + y * this.direction.y + z * this.direction.z;
        if (dot < 0.0) {
            return false;
        }
        const temp = pyth - dot * dot;
        return temp <= rr;
    }
    /**
     * If the ray hits a triange
     * @param vertex0 triangle vertex
     * @param vertex1 triangle vertex
     * @param vertex2 triangle vertex
     * @returns intersection information if hit
     */ intersectsTriangle(vertex0, vertex1, vertex2) {
        const edge1 = Ray._TmpVector3[0];
        const edge2 = Ray._TmpVector3[1];
        const pvec = Ray._TmpVector3[2];
        const tvec = Ray._TmpVector3[3];
        const qvec = Ray._TmpVector3[4];
        vertex1.subtractToRef(vertex0, edge1);
        vertex2.subtractToRef(vertex0, edge2);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(this.direction, edge2, pvec);
        const det = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(edge1, pvec);
        if (det === 0) {
            return null;
        }
        const invdet = 1 / det;
        this.origin.subtractToRef(vertex0, tvec);
        const bv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(tvec, pvec) * invdet;
        if (bv < -this.epsilon || bv > 1.0 + this.epsilon) {
            return null;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(tvec, edge1, qvec);
        const bw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(this.direction, qvec) * invdet;
        if (bw < -this.epsilon || bv + bw > 1.0 + this.epsilon) {
            return null;
        }
        //check if the distance is longer than the predefined length.
        const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(edge2, qvec) * invdet;
        if (distance > this.length || distance < 0) {
            return null;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$intersectionInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntersectionInfo"](1 - bv - bw, bv, distance);
    }
    /**
     * Checks if ray intersects a plane
     * @param plane the plane to check
     * @returns the distance away it was hit
     */ intersectsPlane(plane) {
        let distance;
        const result1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(plane.normal, this.direction);
        if (Math.abs(result1) < 9.99999997475243e-7) {
            return null;
        } else {
            const result2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(plane.normal, this.origin);
            distance = (-plane.d - result2) / result1;
            if (distance < 0.0) {
                if (distance < -9.99999997475243e-7) {
                    return null;
                } else {
                    return 0;
                }
            }
            return distance;
        }
    }
    /**
     * Calculate the intercept of a ray on a given axis
     * @param axis to check 'x' | 'y' | 'z'
     * @param offset from axis interception (i.e. an offset of 1y is intercepted above ground)
     * @returns a vector containing the coordinates where 'axis' is equal to zero (else offset), or null if there is no intercept.
     */ intersectsAxis(axis, offset = 0) {
        switch(axis){
            case "y":
                {
                    const t = (this.origin.y - offset) / this.direction.y;
                    if (t > 0) {
                        return null;
                    }
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this.origin.x + this.direction.x * -t, offset, this.origin.z + this.direction.z * -t);
                }
            case "x":
                {
                    const t = (this.origin.x - offset) / this.direction.x;
                    if (t > 0) {
                        return null;
                    }
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](offset, this.origin.y + this.direction.y * -t, this.origin.z + this.direction.z * -t);
                }
            case "z":
                {
                    const t = (this.origin.z - offset) / this.direction.z;
                    if (t > 0) {
                        return null;
                    }
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](this.origin.x + this.direction.x * -t, this.origin.y + this.direction.y * -t, offset);
                }
            default:
                return null;
        }
    }
    /**
     * Checks if ray intersects a mesh. The ray is defined in WORLD space. A mesh triangle can be picked both from its front and back sides,
     * irrespective of orientation.
     * @param mesh the mesh to check
     * @param fastCheck defines if the first intersection will be used (and not the closest)
     * @param trianglePredicate defines an optional predicate used to select faces when a mesh intersection is detected
     * @param onlyBoundingInfo defines a boolean indicating if picking should only happen using bounding info (false by default)
     * @param worldToUse defines the world matrix to use to get the world coordinate of the intersection point
     * @param skipBoundingInfo a boolean indicating if we should skip the bounding info check
     * @returns picking info of the intersection
     */ intersectsMesh(mesh, fastCheck, trianglePredicate, onlyBoundingInfo = false, worldToUse, skipBoundingInfo = false) {
        const tm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        mesh.getWorldMatrix().invertToRef(tm);
        if (this._tmpRay) {
            Ray.TransformToRef(this, tm, this._tmpRay);
        } else {
            this._tmpRay = Ray.Transform(this, tm);
        }
        return mesh.intersects(this._tmpRay, fastCheck, trianglePredicate, onlyBoundingInfo, worldToUse, skipBoundingInfo);
    }
    /**
     * Checks if ray intersects a mesh
     * @param meshes the meshes to check
     * @param fastCheck defines if the first intersection will be used (and not the closest)
     * @param results array to store result in
     * @returns Array of picking infos
     */ intersectsMeshes(meshes, fastCheck, results) {
        if (results) {
            results.length = 0;
        } else {
            results = [];
        }
        for(let i = 0; i < meshes.length; i++){
            const pickInfo = this.intersectsMesh(meshes[i], fastCheck);
            if (pickInfo.hit) {
                results.push(pickInfo);
            }
        }
        results.sort(this._comparePickingInfo);
        return results;
    }
    _comparePickingInfo(pickingInfoA, pickingInfoB) {
        if (pickingInfoA.distance < pickingInfoB.distance) {
            return -1;
        } else if (pickingInfoA.distance > pickingInfoB.distance) {
            return 1;
        } else {
            return 0;
        }
    }
    /**
     * Intersection test between the ray and a given segment within a given tolerance (threshold)
     * @param sega the first point of the segment to test the intersection against
     * @param segb the second point of the segment to test the intersection against
     * @param threshold the tolerance margin, if the ray doesn't intersect the segment but is close to the given threshold, the intersection is successful
     * @returns the distance from the ray origin to the intersection point if there's intersection, or -1 if there's no intersection
     */ intersectionSegment(sega, segb, threshold) {
        const o = this.origin;
        const u = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        const rsegb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        const v = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        const w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
        segb.subtractToRef(sega, u);
        this.direction.scaleToRef(Ray._Rayl, v);
        o.addToRef(v, rsegb);
        sega.subtractToRef(o, w);
        const a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(u, u); // always >= 0
        const b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(u, v);
        const c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(v, v); // always >= 0
        const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(u, w);
        const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(v, w);
        const discriminant = a * c - b * b; // always >= 0
        let sN, sD = discriminant; // sc = sN / sD, default sD = D >= 0
        let tN, tD = discriminant; // tc = tN / tD, default tD = D >= 0
        // compute the line parameters of the two closest points
        if (discriminant < Ray._Smallnum) {
            // the lines are almost parallel
            sN = 0.0; // force using point P0 on segment S1
            sD = 1.0; // to prevent possible division by 0.0 later
            tN = e;
            tD = c;
        } else {
            // get the closest points on the infinite lines
            sN = b * e - c * d;
            tN = a * e - b * d;
            if (sN < 0.0) {
                // sc < 0 => the s=0 edge is visible
                sN = 0.0;
                tN = e;
                tD = c;
            } else if (sN > sD) {
                // sc > 1 => the s=1 edge is visible
                sN = sD;
                tN = e + b;
                tD = c;
            }
        }
        if (tN < 0.0) {
            // tc < 0 => the t=0 edge is visible
            tN = 0.0;
            // recompute sc for this edge
            if (-d < 0.0) {
                sN = 0.0;
            } else if (-d > a) {
                sN = sD;
            } else {
                sN = -d;
                sD = a;
            }
        } else if (tN > tD) {
            // tc > 1 => the t=1 edge is visible
            tN = tD;
            // recompute sc for this edge
            if (-d + b < 0.0) {
                sN = 0;
            } else if (-d + b > a) {
                sN = sD;
            } else {
                sN = -d + b;
                sD = a;
            }
        }
        // finally do the division to get sc and tc
        const sc = Math.abs(sN) < Ray._Smallnum ? 0.0 : sN / sD;
        const tc = Math.abs(tN) < Ray._Smallnum ? 0.0 : tN / tD;
        // get the difference of the two closest points
        const qtc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[4];
        v.scaleToRef(tc, qtc);
        const qsc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[5];
        u.scaleToRef(sc, qsc);
        qsc.addInPlace(w);
        const dP = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[6];
        qsc.subtractToRef(qtc, dP); // = S1(sc) - S2(tc)
        const isIntersected = tc > 0 && tc <= this.length && dP.lengthSquared() < threshold * threshold; // return intersection result
        if (isIntersected) {
            return qsc.length();
        }
        return -1;
    }
    /**
     * Update the ray from viewport position
     * @param x position
     * @param y y position
     * @param viewportWidth viewport width
     * @param viewportHeight viewport height
     * @param world world matrix
     * @param view view matrix
     * @param projection projection matrix
     * @param enableDistantPicking defines if picking should handle large values for mesh position/scaling (false by default)
     * @returns this ray updated
     */ update(x, y, viewportWidth, viewportHeight, world, view, projection, enableDistantPicking = false) {
        if (enableDistantPicking) {
            // With world matrices having great values (like 8000000000 on 1 or more scaling or position axis),
            // multiplying view/projection/world and doing invert will result in loss of float precision in the matrix.
            // One way to fix it is to compute the ray with world at identity then transform the ray in object space.
            // This is slower (2 matrix inverts instead of 1) but precision is preserved.
            // This is hidden behind `EnableDistantPicking` flag (default is false)
            if (!Ray._RayDistant) {
                Ray._RayDistant = Ray.Zero();
            }
            Ray._RayDistant.unprojectRayToRef(x, y, viewportWidth, viewportHeight, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly, view, projection);
            const tm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
            world.invertToRef(tm);
            Ray.TransformToRef(Ray._RayDistant, tm, this);
        } else {
            this.unprojectRayToRef(x, y, viewportWidth, viewportHeight, world, view, projection);
        }
        return this;
    }
    // Statics
    /**
     * Creates a ray with origin and direction of 0,0,0
     * @returns the new ray
     */ static Zero() {
        return new Ray(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero());
    }
    /**
     * Creates a new ray from screen space and viewport
     * @param x position
     * @param y y position
     * @param viewportWidth viewport width
     * @param viewportHeight viewport height
     * @param world world matrix
     * @param view view matrix
     * @param projection projection matrix
     * @returns new ray
     */ static CreateNew(x, y, viewportWidth, viewportHeight, world, view, projection) {
        const result = Ray.Zero();
        return result.update(x, y, viewportWidth, viewportHeight, world, view, projection);
    }
    /**
     * Function will create a new transformed ray starting from origin and ending at the end point. Ray's length will be set, and ray will be
     * transformed to the given world matrix.
     * @param origin The origin point
     * @param end The end point
     * @param world a matrix to transform the ray to. Default is the identity matrix.
     * @returns the new ray
     */ static CreateNewFromTo(origin, end, world = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly) {
        const result = new Ray(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
        return Ray.CreateFromToToRef(origin, end, result, world);
    }
    /**
     * Function will update a transformed ray starting from origin and ending at the end point. Ray's length will be set, and ray will be
     * transformed to the given world matrix.
     * @param origin The origin point
     * @param end The end point
     * @param result the object to store the result
     * @param world a matrix to transform the ray to. Default is the identity matrix.
     * @returns the ref ray
     */ static CreateFromToToRef(origin, end, result, world = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly) {
        result.origin.copyFrom(origin);
        const direction = end.subtractToRef(origin, result.direction);
        const length = Math.sqrt(direction.x * direction.x + direction.y * direction.y + direction.z * direction.z);
        result.length = length;
        result.direction.normalize();
        return Ray.TransformToRef(result, world, result);
    }
    /**
     * Transforms a ray by a matrix
     * @param ray ray to transform
     * @param matrix matrix to apply
     * @returns the resulting new ray
     */ static Transform(ray, matrix) {
        const result = new Ray(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
        Ray.TransformToRef(ray, matrix, result);
        return result;
    }
    /**
     * Transforms a ray by a matrix
     * @param ray ray to transform
     * @param matrix matrix to apply
     * @param result ray to store result in
     * @returns the updated result ray
     */ static TransformToRef(ray, matrix, result) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(ray.origin, matrix, result.origin);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(ray.direction, matrix, result.direction);
        result.length = ray.length;
        result.epsilon = ray.epsilon;
        const dir = result.direction;
        const len = dir.length();
        if (!(len === 0 || len === 1)) {
            const num = 1.0 / len;
            dir.x *= num;
            dir.y *= num;
            dir.z *= num;
            result.length *= len;
        }
        return result;
    }
    /**
     * Unproject a ray from screen space to object space
     * @param sourceX defines the screen space x coordinate to use
     * @param sourceY defines the screen space y coordinate to use
     * @param viewportWidth defines the current width of the viewport
     * @param viewportHeight defines the current height of the viewport
     * @param world defines the world matrix to use (can be set to Identity to go to world space)
     * @param view defines the view matrix to use
     * @param projection defines the projection matrix to use
     */ unprojectRayToRef(sourceX, sourceY, viewportWidth, viewportHeight, world, view, projection) {
        const matrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        world.multiplyToRef(view, matrix);
        matrix.multiplyToRef(projection, matrix);
        matrix.invert();
        const engine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine;
        const nearScreenSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        nearScreenSource.x = sourceX / viewportWidth * 2 - 1;
        nearScreenSource.y = -(sourceY / viewportHeight * 2 - 1);
        nearScreenSource.z = engine?.useReverseDepthBuffer ? 1 : engine?.isNDCHalfZRange ? 0 : -1;
        // far Z need to be close but < to 1 or camera projection matrix with maxZ = 0 will NaN
        const farScreenSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].copyFromFloats(nearScreenSource.x, nearScreenSource.y, 1.0 - 1e-8);
        const nearVec3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        const farVec3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(nearScreenSource, matrix, nearVec3);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(farScreenSource, matrix, farVec3);
        this.origin.copyFrom(nearVec3);
        farVec3.subtractToRef(nearVec3, this.direction);
        this.direction.normalize();
    }
}
Ray._TmpVector3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero);
Ray._RayDistant = Ray.Zero();
Ray._Smallnum = 0.00000001;
Ray._Rayl = 10e8;
function CreatePickingRay(scene, x, y, world, camera, cameraViewSpace = false) {
    const result = Ray.Zero();
    CreatePickingRayToRef(scene, x, y, world, result, camera, cameraViewSpace);
    return result;
}
function CreatePickingRayToRef(scene, x, y, world, result, camera, cameraViewSpace = false, enableDistantPicking = false) {
    const engine = scene.getEngine();
    if (!camera && !(camera = scene.activeCamera)) {
        return scene;
    }
    const cameraViewport = camera.viewport;
    const renderHeight = engine.getRenderHeight();
    const { x: vx, y: vy, width, height } = cameraViewport.toGlobal(engine.getRenderWidth(), renderHeight);
    // Moving coordinates to local viewport world
    const levelInv = 1 / engine.getHardwareScalingLevel();
    x = x * levelInv - vx;
    y = y * levelInv - (renderHeight - vy - height);
    result.update(x, y, width, height, world ? world : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly, cameraViewSpace ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly : camera.getViewMatrix(), camera.getProjectionMatrix(), enableDistantPicking);
    return scene;
}
function CreatePickingRayInCameraSpace(scene, x, y, camera) {
    const result = Ray.Zero();
    CreatePickingRayInCameraSpaceToRef(scene, x, y, result, camera);
    return result;
}
function CreatePickingRayInCameraSpaceToRef(scene, x, y, result, camera) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickingInfo"]) {
        return scene;
    }
    const engine = scene.getEngine();
    if (!camera && !(camera = scene.activeCamera)) {
        throw new Error("Active camera not set");
    }
    const cameraViewport = camera.viewport;
    const renderHeight = engine.getRenderHeight();
    const { x: vx, y: vy, width, height } = cameraViewport.toGlobal(engine.getRenderWidth(), renderHeight);
    const identity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
    // Moving coordinates to local viewport world
    const levelInv = 1 / engine.getHardwareScalingLevel();
    x = x * levelInv - vx;
    y = y * levelInv - (renderHeight - vy - height);
    result.update(x, y, width, height, identity, identity, camera.getProjectionMatrix());
    return scene;
}
function InternalPickForMesh(pickingInfo, rayFunction, mesh, world, fastCheck, onlyBoundingInfo, trianglePredicate, skipBoundingInfo) {
    const ray = rayFunction(world, mesh.enableDistantPicking);
    const result = mesh.intersects(ray, fastCheck, trianglePredicate, onlyBoundingInfo, world, skipBoundingInfo);
    if (!result || !result.hit) {
        return null;
    }
    if (!fastCheck && pickingInfo != null && result.distance >= pickingInfo.distance) {
        return null;
    }
    return result;
}
function InternalPick(scene, rayFunction, predicate, fastCheck, onlyBoundingInfo, trianglePredicate) {
    let pickingInfo = null;
    const computeWorldMatrixForCamera = !!(scene.activeCameras && scene.activeCameras.length > 1 && scene.cameraToUseForPointers !== scene.activeCamera);
    const currentCamera = scene.cameraToUseForPointers || scene.activeCamera;
    const picker = PickingCustomization.internalPickerForMesh || InternalPickForMesh;
    for(let meshIndex = 0; meshIndex < scene.meshes.length; meshIndex++){
        const mesh = scene.meshes[meshIndex];
        if (predicate) {
            if (!predicate(mesh, -1)) {
                continue;
            }
        } else if (!mesh.isEnabled() || !mesh.isVisible || !mesh.isPickable) {
            continue;
        }
        const forceCompute = computeWorldMatrixForCamera && mesh.isWorldMatrixCameraDependent();
        const world = mesh.computeWorldMatrix(forceCompute, currentCamera);
        if (mesh.hasThinInstances && mesh.thinInstanceEnablePicking) {
            // first check if the ray intersects the whole bounding box/sphere of the mesh
            const result = picker(pickingInfo, rayFunction, mesh, world, true, true, trianglePredicate);
            if (result) {
                if (onlyBoundingInfo) {
                    // the user only asked for a bounding info check so we can return
                    return result;
                }
                const tmpMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
                const thinMatrices = mesh.thinInstanceGetWorldMatrices();
                for(let index = 0; index < thinMatrices.length; index++){
                    if (predicate && !predicate(mesh, index)) {
                        continue;
                    }
                    const thinMatrix = thinMatrices[index];
                    thinMatrix.multiplyToRef(world, tmpMatrix);
                    const result = picker(pickingInfo, rayFunction, mesh, tmpMatrix, fastCheck, onlyBoundingInfo, trianglePredicate, true);
                    if (result) {
                        pickingInfo = result;
                        pickingInfo.thinInstanceIndex = index;
                        if (fastCheck) {
                            return pickingInfo;
                        }
                    }
                }
            }
        } else {
            const result = picker(pickingInfo, rayFunction, mesh, world, fastCheck, onlyBoundingInfo, trianglePredicate);
            if (result) {
                pickingInfo = result;
                if (fastCheck) {
                    return pickingInfo;
                }
            }
        }
    }
    return pickingInfo || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickingInfo"]();
}
function InternalMultiPick(scene, rayFunction, predicate, trianglePredicate) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickingInfo"]) {
        return null;
    }
    const pickingInfos = [];
    const computeWorldMatrixForCamera = !!(scene.activeCameras && scene.activeCameras.length > 1 && scene.cameraToUseForPointers !== scene.activeCamera);
    const currentCamera = scene.cameraToUseForPointers || scene.activeCamera;
    const picker = PickingCustomization.internalPickerForMesh || InternalPickForMesh;
    for(let meshIndex = 0; meshIndex < scene.meshes.length; meshIndex++){
        const mesh = scene.meshes[meshIndex];
        if (predicate) {
            if (!predicate(mesh, -1)) {
                continue;
            }
        } else if (!mesh.isEnabled() || !mesh.isVisible || !mesh.isPickable) {
            continue;
        }
        const forceCompute = computeWorldMatrixForCamera && mesh.isWorldMatrixCameraDependent();
        const world = mesh.computeWorldMatrix(forceCompute, currentCamera);
        if (mesh.hasThinInstances && mesh.thinInstanceEnablePicking) {
            const result = picker(null, rayFunction, mesh, world, true, true, trianglePredicate);
            if (result) {
                const tmpMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
                const thinMatrices = mesh.thinInstanceGetWorldMatrices();
                for(let index = 0; index < thinMatrices.length; index++){
                    if (predicate && !predicate(mesh, index)) {
                        continue;
                    }
                    const thinMatrix = thinMatrices[index];
                    thinMatrix.multiplyToRef(world, tmpMatrix);
                    const result = picker(null, rayFunction, mesh, tmpMatrix, false, false, trianglePredicate, true);
                    if (result) {
                        result.thinInstanceIndex = index;
                        pickingInfos.push(result);
                    }
                }
            }
        } else {
            const result = picker(null, rayFunction, mesh, world, false, false, trianglePredicate);
            if (result) {
                pickingInfos.push(result);
            }
        }
    }
    return pickingInfos;
}
function PickWithBoundingInfo(scene, x, y, predicate, fastCheck, camera) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickingInfo"]) {
        return null;
    }
    const result = InternalPick(scene, (world)=>{
        if (!scene._tempPickingRay) {
            scene._tempPickingRay = Ray.Zero();
        }
        CreatePickingRayToRef(scene, x, y, world, scene._tempPickingRay, camera || null);
        return scene._tempPickingRay;
    }, predicate, fastCheck, true);
    if (result) {
        result.ray = CreatePickingRay(scene, x, y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity(), camera || null);
    }
    return result;
}
function Pick(scene, x, y, predicate, fastCheck, camera, trianglePredicate, _enableDistantPicking = false) {
    const result = InternalPick(scene, (world, enableDistantPicking)=>{
        if (!scene._tempPickingRay) {
            scene._tempPickingRay = Ray.Zero();
        }
        CreatePickingRayToRef(scene, x, y, world, scene._tempPickingRay, camera || null, false, enableDistantPicking);
        return scene._tempPickingRay;
    }, predicate, fastCheck, false, trianglePredicate);
    if (result) {
        result.ray = CreatePickingRay(scene, x, y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity(), camera || null);
    }
    return result;
}
function PickWithRay(scene, ray, predicate, fastCheck, trianglePredicate) {
    const result = InternalPick(scene, (world)=>{
        if (!scene._pickWithRayInverseMatrix) {
            scene._pickWithRayInverseMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        }
        world.invertToRef(scene._pickWithRayInverseMatrix);
        if (!scene._cachedRayForTransform) {
            scene._cachedRayForTransform = Ray.Zero();
        }
        Ray.TransformToRef(ray, scene._pickWithRayInverseMatrix, scene._cachedRayForTransform);
        return scene._cachedRayForTransform;
    }, predicate, fastCheck, false, trianglePredicate);
    if (result) {
        result.ray = ray;
    }
    return result;
}
function MultiPick(scene, x, y, predicate, camera, trianglePredicate) {
    return InternalMultiPick(scene, (world)=>CreatePickingRay(scene, x, y, world, camera || null), predicate, trianglePredicate);
}
function MultiPickWithRay(scene, ray, predicate, trianglePredicate) {
    return InternalMultiPick(scene, (world)=>{
        if (!scene._pickWithRayInverseMatrix) {
            scene._pickWithRayInverseMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        }
        world.invertToRef(scene._pickWithRayInverseMatrix);
        if (!scene._cachedRayForTransform) {
            scene._cachedRayForTransform = Ray.Zero();
        }
        Ray.TransformToRef(ray, scene._pickWithRayInverseMatrix, scene._cachedRayForTransform);
        return scene._cachedRayForTransform;
    }, predicate, trianglePredicate);
}
function GetForwardRay(camera, length = 100, transform, origin) {
    return GetForwardRayToRef(camera, new Ray(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), length), length, transform, origin);
}
function GetForwardRayToRef(camera, refRay, length = 100, transform, origin) {
    if (!transform) {
        transform = camera.getWorldMatrix();
    }
    refRay.length = length;
    if (origin) {
        refRay.origin.copyFrom(origin);
    } else {
        refRay.origin.copyFrom(camera.position);
    }
    const forward = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
    forward.set(0, 0, camera._scene.useRightHandedSystem ? -1 : 1);
    const worldForward = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(forward, transform, worldForward);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].NormalizeToRef(worldForward, refRay.direction);
    return refRay;
}
function AddRayExtensions(sceneClass, cameraClass) {
    if (cameraClass) {
        cameraClass.prototype.getForwardRay = function(length = 100, transform, origin) {
            return GetForwardRayToRef(this, new Ray(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), length), length, transform, origin);
        };
        cameraClass.prototype.getForwardRayToRef = function(refRay, length = 100, transform, origin) {
            return GetForwardRayToRef(this, refRay, length, transform, origin);
        };
    }
    if (!sceneClass) {
        return;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$import$2e$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ImportHelper"]._IsPickingAvailable = true;
    sceneClass.prototype.createPickingRay = function(x, y, world, camera, cameraViewSpace = false) {
        return CreatePickingRay(this, x, y, world, camera, cameraViewSpace);
    };
} //# sourceMappingURL=ray.core.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-client] (ecmascript)");
;
;
;
;
// Picking
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddRayExtensions"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.createPickingRayToRef = function(x, y, world, result, camera, cameraViewSpace = false, enableDistantPicking = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayToRef"])(this, x, y, world, result, camera, cameraViewSpace, enableDistantPicking);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.createPickingRayInCameraSpace = function(x, y, camera) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpace"])(this, x, y, camera);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.createPickingRayInCameraSpaceToRef = function(x, y, result, camera) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpaceToRef"])(this, x, y, result, camera);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.pickWithBoundingInfo = function(x, y, predicate, fastCheck, camera) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickWithBoundingInfo"])(this, x, y, predicate, fastCheck, camera);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.pick = function(x, y, predicate, fastCheck, camera, trianglePredicate, _enableDistantPicking = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pick"])(this, x, y, predicate, fastCheck, camera, trianglePredicate, _enableDistantPicking);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.pickWithRay = function(ray, predicate, fastCheck, trianglePredicate) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickWithRay"])(this, ray, predicate, fastCheck, trianglePredicate);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.multiPick = function(x, y, predicate, camera, trianglePredicate) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiPick"])(this, x, y, predicate, camera, trianglePredicate);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.multiPickWithRay = function(ray, predicate, trianglePredicate) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiPickWithRay"])(this, ray, predicate, trianglePredicate);
}; //# sourceMappingURL=ray.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/boundingInfoHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoundingInfoHelper",
    ()=>BoundingInfoHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
class BoundingInfoHelper {
    /**
     * Creates a new BoundingInfoHelper
     * @param engine defines the engine to use
     */ constructor(engine){
        this._engine = engine;
    }
    async _initializePlatformAsync() {
        if (!this._platform) {
            if (this._engine.getCaps().supportComputeShaders) {
                const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/computeShaderBoundingHelper.js [app-client] (ecmascript, async loader)");
                this._platform = new module.ComputeShaderBoundingHelper(this._engine);
            } else if (this._engine.getCaps().supportTransformFeedbacks) {
                const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/transformFeedbackBoundingHelper.js [app-client] (ecmascript, async loader)");
                this._platform = new module.TransformFeedbackBoundingHelper(this._engine);
            } else {
                throw new Error("Your engine does not support Compute Shaders or Transform Feedbacks");
            }
        }
    }
    /**
     * Compute the bounding info of a mesh / array of meshes using shaders
     * @param target defines the mesh(es) to update
     * @returns a promise that resolves when the bounding info is/are computed
     */ async computeAsync(target) {
        await this._initializePlatformAsync();
        return await this._platform.processAsync(target);
    }
    /**
     * Register a mesh / array of meshes to be processed per batch
     * This method must be called before calling batchProcess (which can be called several times) and batchFetchResultsAsync
     * @param target defines the mesh(es) to be processed per batch
     * @returns a promise that resolves when the initialization is done
     */ async batchInitializeAsync(target) {
        await this._initializePlatformAsync();
        return await this._platform.registerMeshListAsync(target);
    }
    /**
     * Processes meshes registered with batchRegisterAsync
     * If called multiple times, the second, third, etc calls will perform a union of the bounding boxes calculated in the previous calls
     */ batchProcess() {
        if (this._platform === null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Helper is not initialized. Skipping batch.");
            return;
        }
        this._platform.processMeshList();
    }
    /**
     * Update the bounding info of the meshes registered with batchRegisterAsync, after batchProcess has been called once or several times
     * @returns a promise that resolves when the bounding info is/are computed
     */ async batchFetchResultsAsync() {
        await this._initializePlatformAsync();
        return await this._platform.fetchResultsForMeshListAsync();
    }
    /**
     * Dispose and release associated resources
     */ dispose() {
        if (this._platform) {
            this._platform.dispose();
        }
    }
} //# sourceMappingURL=boundingInfoHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/transformFeedbackBoundingHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransformFeedbackBoundingHelper",
    ()=>TransformFeedbackBoundingHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$gpuTransform$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/gpuTransform.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$gpuTransform$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/gpuTransform.fragment.js [app-client] (ecmascript)");
;
;
;
;
;
;
class TransformFeedbackBoundingHelper {
    /**
     * Creates a new TransformFeedbackBoundingHelper
     * @param engine defines the engine to use
     */ constructor(engine){
        this._buffers = {};
        this._effects = {};
        this._meshListCounter = 0;
        this._engine = engine;
    }
    /** @internal */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    processAsync(meshes) {
        if (!Array.isArray(meshes)) {
            meshes = [
                meshes
            ];
        }
        this._meshListCounter = 0;
        this._processMeshList(meshes);
        return Promise.resolve();
    }
    _processMeshList(meshes) {
        const parallelShaderCompile = this._engine.getCaps().parallelShaderCompile;
        this._engine.getCaps().parallelShaderCompile = undefined;
        for(let i = 0; i < meshes.length; ++i){
            const mesh = meshes[i];
            const vertexCount = mesh.getTotalVertices();
            if (vertexCount === 0 || !mesh.getVertexBuffer || !mesh.getVertexBuffer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind)) {
                continue;
            }
            // Get correct effect
            let computeEffect;
            const defines = [];
            const attribs = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
            ];
            // Bones
            if (mesh && mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind);
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind);
                if (mesh.numBoneInfluencers > 4) {
                    attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesExtraKind);
                    attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsExtraKind);
                }
                defines.push("#define NUM_BONE_INFLUENCERS " + mesh.numBoneInfluencers);
                defines.push("#define BONETEXTURE " + mesh.skeleton.isUsingTextureForMatrices);
                defines.push("#define BonesPerMesh " + (mesh.skeleton.bones.length + 1));
            } else {
                defines.push("#define NUM_BONE_INFLUENCERS 0");
            }
            // Morph
            const numMorphInfluencers = mesh.morphTargetManager ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesAndAttributesForMorphTargets"])(mesh.morphTargetManager, defines, attribs, mesh, true, false, false, false, false, false // useColorMorph
            ) : 0;
            // Baked Vertex Animation
            const bvaManager = mesh.bakedVertexAnimationManager;
            if (bvaManager && bvaManager.isEnabled) {
                defines.push("#define BAKED_VERTEX_ANIMATION_TEXTURE");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBakedVertexAnimation"])(attribs, mesh, defines);
            }
            const join = defines.join("\n");
            if (!this._effects[join]) {
                const uniforms = [
                    "boneTextureWidth",
                    "mBones",
                    "morphTargetInfluences",
                    "morphTargetCount",
                    "morphTargetTextureInfo",
                    "morphTargetTextureIndices",
                    "bakedVertexAnimationSettings",
                    "bakedVertexAnimationTextureSizeInverted",
                    "bakedVertexAnimationTime"
                ];
                const samplers = [
                    "boneSampler",
                    "morphTargets",
                    "bakedVertexAnimationTexture"
                ];
                const computeEffectOptions = {
                    attributes: attribs,
                    uniformsNames: uniforms,
                    uniformBuffersNames: [],
                    samplers: samplers,
                    defines: join,
                    fallbacks: null,
                    onCompiled: null,
                    onError: null,
                    indexParameters: {
                        maxSimultaneousMorphTargets: numMorphInfluencers
                    },
                    maxSimultaneousLights: 0,
                    transformFeedbackVaryings: [
                        "outPosition"
                    ]
                };
                computeEffect = this._engine.createEffect("gpuTransform", computeEffectOptions, this._engine);
                this._effects[join] = computeEffect;
            } else {
                computeEffect = this._effects[join];
            }
            this._compute(mesh, computeEffect);
        }
        this._engine.getCaps().parallelShaderCompile = parallelShaderCompile;
    }
    _compute(mesh, effect) {
        const engine = this._engine;
        // Buffer
        let targetBuffer;
        const vertexCount = mesh.getTotalVertices();
        if (!this._buffers[mesh.uniqueId]) {
            const targetData = new Float32Array(vertexCount * 3);
            targetBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](mesh.getEngine(), targetData, true, 3);
            this._buffers[mesh.uniqueId] = targetBuffer;
        } else {
            targetBuffer = this._buffers[mesh.uniqueId];
        }
        // Bind
        effect.getEngine().enableEffect(effect);
        mesh._bindDirect(effect, null, true);
        // Bones
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindBonesParameters"])(mesh, effect);
        // Morph targets
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"])(mesh, effect);
        if (mesh.morphTargetManager && mesh.morphTargetManager.isUsingTextureForTargets) {
            mesh.morphTargetManager._bind(effect);
        }
        // BVA
        const bvaManager = mesh.bakedVertexAnimationManager;
        if (bvaManager && bvaManager.isEnabled) {
            mesh.bakedVertexAnimationManager?.bind(effect, false);
        }
        // Update
        const arrayBuffer = targetBuffer.getData();
        engine.bindTransformFeedbackBuffer(targetBuffer.getBuffer());
        engine.setRasterizerState(false);
        engine.beginTransformFeedback(true);
        engine.drawArraysType(2, 0, vertexCount);
        engine.endTransformFeedback();
        engine.setRasterizerState(true);
        engine.readTransformFeedbackBuffer(arrayBuffer);
        engine.bindTransformFeedbackBuffer(null);
        // Update mesh
        if (this._meshListCounter === 0) {
            mesh._refreshBoundingInfo(arrayBuffer, null);
        } else {
            const bb = mesh.getBoundingInfo().boundingBox;
            const extend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMinAndMax"])(arrayBuffer, 0, vertexCount);
            TransformFeedbackBoundingHelper._Min.copyFrom(bb.minimum).minimizeInPlace(extend.minimum);
            TransformFeedbackBoundingHelper._Max.copyFrom(bb.maximum).maximizeInPlace(extend.maximum);
            mesh._refreshBoundingInfoDirect({
                minimum: TransformFeedbackBoundingHelper._Min,
                maximum: TransformFeedbackBoundingHelper._Max
            });
        }
    }
    /** @internal */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    registerMeshListAsync(meshes) {
        if (!Array.isArray(meshes)) {
            meshes = [
                meshes
            ];
        }
        this._meshList = meshes;
        this._meshListCounter = 0;
        return Promise.resolve();
    }
    /** @internal */ processMeshList() {
        if (this._meshList.length === 0) {
            return;
        }
        this._processMeshList(this._meshList);
        this._meshListCounter++;
    }
    /** @internal */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    fetchResultsForMeshListAsync() {
        this._meshListCounter = 0;
        return Promise.resolve();
    }
    /** @internal */ dispose() {
        for(const key in this._buffers){
            this._buffers[key].dispose();
        }
        this._buffers = {};
        this._effects = {};
        this._engine = null;
    }
}
TransformFeedbackBoundingHelper._Min = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
TransformFeedbackBoundingHelper._Max = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](); //# sourceMappingURL=transformFeedbackBoundingHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/computeShaderBoundingHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputeShaderBoundingHelper",
    ()=>ComputeShaderBoundingHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compute$2f$computeShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compute/computeShader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$storageBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/storageBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$boundingInfo$2e$compute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/boundingInfo.compute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/timingTools.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class ComputeShaderBoundingHelper {
    /**
     * Creates a new ComputeShaderBoundingHelper
     * @param engine defines the engine to use
     */ constructor(engine){
        this._computeShadersCache = {};
        this._positionBuffers = {};
        this._indexBuffers = {};
        this._weightBuffers = {};
        this._indexExtraBuffers = {};
        this._weightExtraBuffers = {};
        this._morphTargetInfluenceBuffers = {};
        this._morphTargetTextureIndexBuffers = {};
        this._ubos = [];
        this._uboIndex = 0;
        this._processedMeshes = [];
        this._computeShaders = [];
        this._uniqueComputeShaders = new Set();
        this._resultBuffers = [];
        this._engine = engine;
    }
    _getComputeShader(defines, hasBones, hasMorphs) {
        let computeShader;
        const join = defines.join("\n");
        if (!this._computeShadersCache[join]) {
            const bindingsMapping = {
                positionBuffer: {
                    group: 0,
                    binding: 0
                },
                resultBuffer: {
                    group: 0,
                    binding: 1
                },
                settings: {
                    group: 0,
                    binding: 7
                }
            };
            if (hasBones) {
                bindingsMapping.boneSampler = {
                    group: 0,
                    binding: 2
                };
                bindingsMapping.indexBuffer = {
                    group: 0,
                    binding: 3
                };
                bindingsMapping.weightBuffer = {
                    group: 0,
                    binding: 4
                };
                bindingsMapping.indexExtraBuffer = {
                    group: 0,
                    binding: 5
                };
                bindingsMapping.weightExtraBuffer = {
                    group: 0,
                    binding: 6
                };
            }
            if (hasMorphs) {
                bindingsMapping.morphTargets = {
                    group: 0,
                    binding: 8
                };
                bindingsMapping.morphTargetInfluences = {
                    group: 0,
                    binding: 9
                };
                bindingsMapping.morphTargetTextureIndices = {
                    group: 0,
                    binding: 10
                };
            }
            computeShader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compute$2f$computeShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeShader"](`boundingInfoCompute${hasBones ? "_bones" : ""}${hasMorphs ? "_morphs" : ""}`, this._engine, "boundingInfo", {
                bindingsMapping,
                defines: defines
            });
            this._computeShadersCache[join] = computeShader;
        } else {
            computeShader = this._computeShadersCache[join];
        }
        return computeShader;
    }
    _getUBO() {
        if (this._uboIndex >= this._ubos.length) {
            const ubo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniformBuffer"](this._engine);
            ubo.addFloat3("morphTargetTextureInfo", 0, 0, 0);
            ubo.addUniform("morphTargetCount", 1);
            ubo.addUniform("indexResult", 1);
            this._ubos.push(ubo);
        }
        return this._ubos[this._uboIndex++];
    }
    _extractDataAndLink(computeShader, mesh, kind, stride, name, storageUnit) {
        let buffer;
        const vertexCount = mesh.getTotalVertices();
        if (!storageUnit[mesh.uniqueId]) {
            const dataArray = mesh.getVertexBuffer(kind)?.getFloatData(vertexCount);
            buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$storageBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageBuffer"](this._engine, Float32Array.BYTES_PER_ELEMENT * vertexCount * stride);
            buffer.update(dataArray);
            storageUnit[mesh.uniqueId] = buffer;
        } else {
            buffer = storageUnit[mesh.uniqueId];
        }
        computeShader.setStorageBuffer(name, buffer);
    }
    _prepareStorage(computeShader, name, id, storageUnit, numInfluencers, data) {
        let buffer;
        if (!storageUnit[id]) {
            buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$storageBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageBuffer"](this._engine, Float32Array.BYTES_PER_ELEMENT * numInfluencers);
            storageUnit[id] = buffer;
        } else {
            buffer = storageUnit[id];
        }
        buffer.update(data);
        computeShader.setStorageBuffer(name, buffer);
    }
    /** @internal */ async processAsync(meshes) {
        await this.registerMeshListAsync(meshes);
        this.processMeshList();
        await this.fetchResultsForMeshListAsync();
    }
    /** @internal */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    registerMeshListAsync(meshes) {
        this._disposeForMeshList();
        if (!Array.isArray(meshes)) {
            meshes = [
                meshes
            ];
        }
        let maxNumInfluencers = 0;
        for(let i = 0; i < meshes.length; i++){
            const mesh = meshes[i];
            const vertexCount = mesh.getTotalVertices();
            if (vertexCount === 0 || !mesh.getVertexBuffer || !mesh.getVertexBuffer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind)) {
                continue;
            }
            this._processedMeshes.push(mesh);
            const manager = mesh.morphTargetManager;
            if (manager && manager.supportsPositions) {
                maxNumInfluencers = Math.max(maxNumInfluencers, manager.numTargets);
            }
        }
        for(let i = 0; i < this._processedMeshes.length; i++){
            const mesh = this._processedMeshes[i];
            let defines = [
                ""
            ];
            let hasBones = false;
            if (mesh && mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton) {
                defines.push("#define NUM_BONE_INFLUENCERS " + mesh.numBoneInfluencers);
                hasBones = true;
            }
            const computeShaderWithoutMorph = this._getComputeShader(defines, hasBones, false);
            this._uniqueComputeShaders.add(computeShaderWithoutMorph);
            const manager = mesh.morphTargetManager;
            if (manager && manager.supportsPositions) {
                defines = defines.slice();
                defines.push("#define MORPHTARGETS");
                defines.push("#define NUM_MORPH_INFLUENCERS " + maxNumInfluencers);
                const computeShaderWithMorph = this._getComputeShader(defines, hasBones, true);
                this._uniqueComputeShaders.add(computeShaderWithMorph);
                this._computeShaders.push([
                    computeShaderWithoutMorph,
                    computeShaderWithMorph
                ]);
            } else {
                this._computeShaders.push([
                    computeShaderWithoutMorph,
                    computeShaderWithoutMorph
                ]);
            }
            // Pre-build the ubos, as they won't change if there's no morph targets
            const ubo = this._getUBO();
            ubo.updateUInt("indexResult", i);
            ubo.update();
        }
        return new Promise((resolve)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_RetryWithInterval"])(()=>{
                const iterator = this._uniqueComputeShaders.keys();
                for(let key = iterator.next(); key.done !== true; key = iterator.next()){
                    const computeShader = key.value;
                    if (!computeShader.isReady()) {
                        return false;
                    }
                }
                return true;
            }, resolve);
        });
    }
    /** @internal */ processMeshList() {
        if (this._processedMeshes.length === 0) {
            return;
        }
        this._uboIndex = 0;
        const resultDataSize = 8 * this._processedMeshes.length;
        const resultData = new Float32Array(resultDataSize);
        const resultBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$storageBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageBuffer"](this._engine, Float32Array.BYTES_PER_ELEMENT * resultDataSize);
        this._resultBuffers.push(resultBuffer);
        for(let i = 0; i < this._processedMeshes.length; i++){
            resultData[i * 8 + 0] = Number.POSITIVE_INFINITY;
            resultData[i * 8 + 1] = Number.POSITIVE_INFINITY;
            resultData[i * 8 + 2] = Number.POSITIVE_INFINITY;
            resultData[i * 8 + 3] = Number.NEGATIVE_INFINITY;
            resultData[i * 8 + 4] = Number.NEGATIVE_INFINITY;
            resultData[i * 8 + 5] = Number.NEGATIVE_INFINITY;
        }
        resultBuffer.update(resultData);
        for(let i = 0; i < this._processedMeshes.length; i++){
            const mesh = this._processedMeshes[i];
            const vertexCount = mesh.getTotalVertices();
            const [computeShaderWithoutMorph, computeShaderWithMorph] = this._computeShaders[i];
            const manager = mesh.morphTargetManager;
            const hasMorphs = manager && manager.numInfluencers > 0 && manager.supportsPositions;
            const computeShader = hasMorphs ? computeShaderWithMorph : computeShaderWithoutMorph;
            this._extractDataAndLink(computeShader, mesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, 3, "positionBuffer", this._positionBuffers);
            // Bones
            if (mesh && mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton && mesh.skeleton.useTextureToStoreBoneMatrices) {
                this._extractDataAndLink(computeShader, mesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind, 4, "indexBuffer", this._indexBuffers);
                this._extractDataAndLink(computeShader, mesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind, 4, "weightBuffer", this._weightBuffers);
                const boneSampler = mesh.skeleton.getTransformMatrixTexture(mesh);
                computeShader.setTexture("boneSampler", boneSampler, false);
                if (mesh.numBoneInfluencers > 4) {
                    this._extractDataAndLink(computeShader, mesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesExtraKind, 4, "indexExtraBuffer", this._indexExtraBuffers);
                    this._extractDataAndLink(computeShader, mesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsExtraKind, 4, "weightExtraBuffer", this._weightExtraBuffers);
                }
            }
            const ubo = this._getUBO();
            // Morphs
            if (hasMorphs) {
                const morphTargets = manager._targetStoreTexture;
                computeShader.setTexture("morphTargets", morphTargets, false);
                this._prepareStorage(computeShader, "morphTargetInfluences", mesh.uniqueId, this._morphTargetInfluenceBuffers, manager.numInfluencers, manager.influences);
                this._prepareStorage(computeShader, "morphTargetTextureIndices", mesh.uniqueId, this._morphTargetTextureIndexBuffers, manager.numInfluencers, manager._morphTargetTextureIndices);
                ubo.updateFloat3("morphTargetTextureInfo", manager._textureVertexStride, manager._textureWidth, manager._textureHeight);
                ubo.updateFloat("morphTargetCount", manager.numInfluencers);
                ubo.update();
            }
            computeShader.setStorageBuffer("resultBuffer", resultBuffer);
            computeShader.setUniformBuffer("settings", ubo);
            // Dispatch
            computeShader.dispatch(Math.ceil(vertexCount / 256));
            this._engine.flushFramebuffer();
        }
    }
    /** @internal */ async fetchResultsForMeshListAsync() {
        return await new Promise((resolve)=>{
            const buffers = [];
            let size = 0;
            for(let i = 0; i < this._resultBuffers.length; i++){
                const buffer = this._resultBuffers[i].getBuffer();
                buffers.push(buffer);
                size += buffer.capacity;
            }
            const resultData = new Float32Array(size / Float32Array.BYTES_PER_ELEMENT);
            const minimum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            const maximum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            const minmax = {
                minimum,
                maximum
            };
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this._engine.readFromMultipleStorageBuffers(buffers, 0, undefined, resultData, true).then(()=>{
                let resultDataOffset = 0;
                for(let j = 0; j < this._resultBuffers.length; j++){
                    for(let i = 0; i < this._processedMeshes.length; i++){
                        const mesh = this._processedMeshes[i];
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(resultData, resultDataOffset + i * 8, minimum);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(resultData, resultDataOffset + i * 8 + 3, maximum);
                        if (j > 0) {
                            minimum.minimizeInPlace(mesh.getBoundingInfo().minimum);
                            maximum.maximizeInPlace(mesh.getBoundingInfo().maximum);
                        }
                        mesh._refreshBoundingInfoDirect(minmax);
                    }
                    resultDataOffset += 8 * this._processedMeshes.length;
                }
                for (const resultBuffer of this._resultBuffers){
                    resultBuffer.dispose();
                }
                this._resultBuffers = [];
                this._uboIndex = 0;
                resolve();
            });
        });
    }
    _disposeCache(storageUnit) {
        for(const key in storageUnit){
            storageUnit[key].dispose();
        }
    }
    _disposeForMeshList() {
        for (const resultBuffer of this._resultBuffers){
            resultBuffer.dispose();
        }
        this._resultBuffers = [];
        this._processedMeshes = [];
        this._computeShaders = [];
        this._uniqueComputeShaders = new Set();
    }
    /** @internal */ dispose() {
        this._disposeCache(this._positionBuffers);
        this._positionBuffers = {};
        this._disposeCache(this._indexBuffers);
        this._indexBuffers = {};
        this._disposeCache(this._weightBuffers);
        this._weightBuffers = {};
        this._disposeCache(this._morphTargetInfluenceBuffers);
        this._morphTargetInfluenceBuffers = {};
        this._disposeCache(this._morphTargetTextureIndexBuffers);
        this._morphTargetTextureIndexBuffers = {};
        for (const ubo of this._ubos){
            ubo.dispose();
        }
        this._ubos = [];
        this._computeShadersCache = {};
        this._engine = undefined;
        this._disposeForMeshList();
    }
} //# sourceMappingURL=computeShaderBoundingHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octreeBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OctreeBlock",
    ()=>OctreeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingBox.js [app-client] (ecmascript)");
;
;
class OctreeBlock {
    /**
     * Creates a new block
     * @param minPoint defines the minimum vector (in world space) of the block's bounding box
     * @param maxPoint defines the maximum vector (in world space) of the block's bounding box
     * @param capacity defines the maximum capacity of this block (if capacity is reached the block will be split into sub blocks)
     * @param depth defines the current depth of this block in the octree
     * @param maxDepth defines the maximal depth allowed (beyond this value, the capacity is ignored)
     * @param creationFunc defines a callback to call when an element is added to the block
     */ constructor(minPoint, maxPoint, capacity, depth, maxDepth, creationFunc){
        /**
         * Gets the content of the current block
         */ this.entries = [];
        this._boundingVectors = new Array();
        this._capacity = capacity;
        this._depth = depth;
        this._maxDepth = maxDepth;
        this._creationFunc = creationFunc;
        this._minPoint = minPoint;
        this._maxPoint = maxPoint;
        this._boundingVectors.push(minPoint.clone());
        this._boundingVectors.push(maxPoint.clone());
        this._boundingVectors.push(minPoint.clone());
        this._boundingVectors[2].x = maxPoint.x;
        this._boundingVectors.push(minPoint.clone());
        this._boundingVectors[3].y = maxPoint.y;
        this._boundingVectors.push(minPoint.clone());
        this._boundingVectors[4].z = maxPoint.z;
        this._boundingVectors.push(maxPoint.clone());
        this._boundingVectors[5].z = minPoint.z;
        this._boundingVectors.push(maxPoint.clone());
        this._boundingVectors[6].x = minPoint.x;
        this._boundingVectors.push(maxPoint.clone());
        this._boundingVectors[7].y = minPoint.y;
    }
    // Property
    /**
     * Gets the maximum capacity of this block (if capacity is reached the block will be split into sub blocks)
     */ get capacity() {
        return this._capacity;
    }
    /**
     * Gets the minimum vector (in world space) of the block's bounding box
     */ get minPoint() {
        return this._minPoint;
    }
    /**
     * Gets the maximum vector (in world space) of the block's bounding box
     */ get maxPoint() {
        return this._maxPoint;
    }
    // Methods
    /**
     * Add a new element to this block
     * @param entry defines the element to add
     */ addEntry(entry) {
        if (this.blocks) {
            for(let index = 0; index < this.blocks.length; index++){
                const block = this.blocks[index];
                block.addEntry(entry);
            }
            return;
        }
        this._creationFunc(entry, this);
        if (this.entries.length > this.capacity && this._depth < this._maxDepth) {
            this.createInnerBlocks();
        }
    }
    /**
     * Remove an element from this block
     * @param entry defines the element to remove
     */ removeEntry(entry) {
        if (this.blocks) {
            for(let index = 0; index < this.blocks.length; index++){
                const block = this.blocks[index];
                block.removeEntry(entry);
            }
            return;
        }
        const entryIndex = this.entries.indexOf(entry);
        if (entryIndex > -1) {
            this.entries.splice(entryIndex, 1);
        }
    }
    /**
     * Add an array of elements to this block
     * @param entries defines the array of elements to add
     */ addEntries(entries) {
        for(let index = 0; index < entries.length; index++){
            const mesh = entries[index];
            this.addEntry(mesh);
        }
    }
    /**
     * Test if the current block intersects the frustum planes and if yes, then add its content to the selection array
     * @param frustumPlanes defines the frustum planes to test
     * @param selection defines the array to store current content if selection is positive
     * @param allowDuplicate defines if the selection array can contains duplicated entries
     */ select(frustumPlanes, selection, allowDuplicate) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"].IsInFrustum(this._boundingVectors, frustumPlanes)) {
            if (this.blocks) {
                for(let index = 0; index < this.blocks.length; index++){
                    const block = this.blocks[index];
                    block.select(frustumPlanes, selection, allowDuplicate);
                }
                return;
            }
            if (allowDuplicate) {
                selection.concat(this.entries);
            } else {
                selection.concatWithNoDuplicate(this.entries);
            }
        }
    }
    /**
     * Test if the current block intersect with the given bounding sphere and if yes, then add its content to the selection array
     * @param sphereCenter defines the bounding sphere center
     * @param sphereRadius defines the bounding sphere radius
     * @param selection defines the array to store current content if selection is positive
     * @param allowDuplicate defines if the selection array can contains duplicated entries
     */ intersects(sphereCenter, sphereRadius, selection, allowDuplicate) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"].IntersectsSphere(this._minPoint, this._maxPoint, sphereCenter, sphereRadius)) {
            if (this.blocks) {
                for(let index = 0; index < this.blocks.length; index++){
                    const block = this.blocks[index];
                    block.intersects(sphereCenter, sphereRadius, selection, allowDuplicate);
                }
                return;
            }
            if (allowDuplicate) {
                selection.concat(this.entries);
            } else {
                selection.concatWithNoDuplicate(this.entries);
            }
        }
    }
    /**
     * Test if the current block intersect with the given ray and if yes, then add its content to the selection array
     * @param ray defines the ray to test with
     * @param selection defines the array to store current content if selection is positive
     */ intersectsRay(ray, selection) {
        if (ray.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
            if (this.blocks) {
                for(let index = 0; index < this.blocks.length; index++){
                    const block = this.blocks[index];
                    block.intersectsRay(ray, selection);
                }
                return;
            }
            selection.concatWithNoDuplicate(this.entries);
        }
    }
    /**
     * Subdivide the content into child blocks (this block will then be empty)
     */ createInnerBlocks() {
        OctreeBlock._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc);
        this.entries.splice(0);
    }
    /**
     * @internal
     */ static _CreateBlocks(worldMin, worldMax, entries, maxBlockCapacity, currentDepth, maxDepth, target, creationFunc) {
        target.blocks = new Array();
        const blockSize = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((worldMax.x - worldMin.x) / 2, (worldMax.y - worldMin.y) / 2, (worldMax.z - worldMin.z) / 2);
        // Segmenting space
        for(let x = 0; x < 2; x++){
            for(let y = 0; y < 2; y++){
                for(let z = 0; z < 2; z++){
                    const localMin = worldMin.add(blockSize.multiplyByFloats(x, y, z));
                    const localMax = worldMin.add(blockSize.multiplyByFloats(x + 1, y + 1, z + 1));
                    const block = new OctreeBlock(localMin, localMax, maxBlockCapacity, currentDepth + 1, maxDepth, creationFunc);
                    block.addEntries(entries);
                    target.blocks.push(block);
                }
            }
        }
    }
} //# sourceMappingURL=octreeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Octree",
    ()=>Octree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/smartArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octreeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octreeBlock.js [app-client] (ecmascript)");
;
;
class Octree {
    /**
     * Creates a octree
     * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees
     * @param creationFunc function to be used to instantiate the octree
     * @param maxBlockCapacity defines the maximum number of meshes you want on your octree's leaves (default: 64)
     * @param maxDepth defines the maximum depth (sub-levels) for your octree. Default value is 2, which means 8 8 8 = 512 blocks :) (This parameter takes precedence over capacity.)
     */ constructor(creationFunc, maxBlockCapacity, /** [2] Defines the maximum depth (sub-levels) for your octree. Default value is 2, which means 8 8 8 = 512 blocks :) (This parameter takes precedence over capacity.) */ maxDepth = 2){
        this.maxDepth = maxDepth;
        /**
         * Content stored in the octree
         */ this.dynamicContent = [];
        this._maxBlockCapacity = maxBlockCapacity || 64;
        this._selectionContent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartArrayNoDuplicate"](1024);
        this._creationFunc = creationFunc;
    }
    // Methods
    /**
     * Updates the octree by adding blocks for the passed in meshes within the min and max world parameters
     * @param worldMin worldMin for the octree blocks var blockSize = new Vector3((worldMax.x - worldMin.x) / 2, (worldMax.y - worldMin.y) / 2, (worldMax.z - worldMin.z) / 2);
     * @param worldMax worldMax for the octree blocks var blockSize = new Vector3((worldMax.x - worldMin.x) / 2, (worldMax.y - worldMin.y) / 2, (worldMax.z - worldMin.z) / 2);
     * @param entries meshes to be added to the octree blocks
     */ update(worldMin, worldMax, entries) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octreeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctreeBlock"]._CreateBlocks(worldMin, worldMax, entries, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc);
    }
    /**
     * Adds a mesh to the octree
     * @param entry Mesh to add to the octree
     */ addMesh(entry) {
        for(let index = 0; index < this.blocks.length; index++){
            const block = this.blocks[index];
            block.addEntry(entry);
        }
    }
    /**
     * Remove an element from the octree
     * @param entry defines the element to remove
     */ removeMesh(entry) {
        for(let index = 0; index < this.blocks.length; index++){
            const block = this.blocks[index];
            block.removeEntry(entry);
        }
    }
    /**
     * Selects an array of meshes within the frustum
     * @param frustumPlanes The frustum planes to use which will select all meshes within it
     * @param allowDuplicate If duplicate objects are allowed in the resulting object array
     * @returns array of meshes within the frustum
     */ select(frustumPlanes, allowDuplicate) {
        this._selectionContent.reset();
        for(let index = 0; index < this.blocks.length; index++){
            const block = this.blocks[index];
            block.select(frustumPlanes, this._selectionContent, allowDuplicate);
        }
        if (allowDuplicate) {
            this._selectionContent.concat(this.dynamicContent);
        } else {
            this._selectionContent.concatWithNoDuplicate(this.dynamicContent);
        }
        return this._selectionContent;
    }
    /**
     * Test if the octree intersect with the given bounding sphere and if yes, then add its content to the selection array
     * @param sphereCenter defines the bounding sphere center
     * @param sphereRadius defines the bounding sphere radius
     * @param allowDuplicate defines if the selection array can contains duplicated entries
     * @returns an array of objects that intersect the sphere
     */ intersects(sphereCenter, sphereRadius, allowDuplicate) {
        this._selectionContent.reset();
        for(let index = 0; index < this.blocks.length; index++){
            const block = this.blocks[index];
            block.intersects(sphereCenter, sphereRadius, this._selectionContent, allowDuplicate);
        }
        if (allowDuplicate) {
            this._selectionContent.concat(this.dynamicContent);
        } else {
            this._selectionContent.concatWithNoDuplicate(this.dynamicContent);
        }
        return this._selectionContent;
    }
    /**
     * Test if the octree intersect with the given ray and if yes, then add its content to resulting array
     * @param ray defines the ray to test with
     * @returns array of intersected objects
     */ intersectsRay(ray) {
        this._selectionContent.reset();
        for(let index = 0; index < this.blocks.length; index++){
            const block = this.blocks[index];
            block.intersectsRay(ray, this._selectionContent);
        }
        this._selectionContent.concatWithNoDuplicate(this.dynamicContent);
        return this._selectionContent;
    }
}
/**
 * Adds a mesh into the octree block if it intersects the block
 * @param entry defines the mesh to try to add to the block
 * @param block defines the block where the mesh should be added
 */ Octree.CreationFuncForMeshes = (entry, block)=>{
    const boundingInfo = entry.getBoundingInfo();
    if (!entry.isBlocked && boundingInfo.boundingBox.intersectsMinMax(block.minPoint, block.maxPoint)) {
        block.entries.push(entry);
    }
};
/**
 * Adds a submesh into the octree block if it intersects the block
 * @param entry defines the submesh to try to add to the block
 * @param block defines the block where the submesh should be added
 */ Octree.CreationFuncForSubMeshes = (entry, block)=>{
    const boundingInfo = entry.getBoundingInfo();
    if (boundingInfo.boundingBox.intersectsMinMax(block.minPoint, block.maxPoint)) {
        block.entries.push(entry);
    }
}; //# sourceMappingURL=octree.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octreeSceneComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OctreeSceneComponent",
    ()=>OctreeSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/abstractMesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.createOrUpdateSelectionOctree = function(maxCapacity = 64, maxDepth = 2) {
    let component = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_OCTREE);
    if (!component) {
        component = new OctreeSceneComponent(this);
        this._addComponent(component);
    }
    if (!this._selectionOctree) {
        this._selectionOctree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Octree"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Octree"].CreationFuncForMeshes, maxCapacity, maxDepth);
    }
    const worldExtends = this.getWorldExtends();
    // Update octree
    this._selectionOctree.update(worldExtends.min, worldExtends.max, this.meshes);
    return this._selectionOctree;
};
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype, "selectionOctree", {
    get: function() {
        return this._selectionOctree;
    },
    enumerable: true,
    configurable: true
});
/**
 * This function will create an octree to help to select the right submeshes for rendering, picking and collision computations.
 * Please note that you must have a decent number of submeshes to get performance improvements when using an octree
 * @param maxCapacity defines the maximum size of each block (64 by default)
 * @param maxDepth defines the maximum depth to use (no more than 2 levels by default)
 * @returns the new octree
 * @see https://www.babylonjs-playground.com/#NA4OQ#12
 * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype.createOrUpdateSubmeshesOctree = function(maxCapacity = 64, maxDepth = 2) {
    const scene = this.getScene();
    let component = scene._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_OCTREE);
    if (!component) {
        component = new OctreeSceneComponent(scene);
        scene._addComponent(component);
    }
    if (!this._submeshesOctree) {
        this._submeshesOctree = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Octree"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Octree"].CreationFuncForSubMeshes, maxCapacity, maxDepth);
    }
    this.computeWorldMatrix(true);
    const boundingInfo = this.getBoundingInfo();
    // Update octree
    const bbox = boundingInfo.boundingBox;
    this._submeshesOctree.update(bbox.minimumWorld, bbox.maximumWorld, this.subMeshes);
    return this._submeshesOctree;
};
class OctreeSceneComponent {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */ constructor(scene){
        /**
         * The component name help to identify the component in the list of scene components.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_OCTREE;
        /**
         * Indicates if the meshes have been checked to make sure they are isEnabled()
         */ this.checksIsEnabled = true;
        this._tempRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1));
        scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!scene) {
            return;
        }
        this.scene = scene;
        this.scene.getActiveMeshCandidates = ()=>this.getActiveMeshCandidates();
        this.scene.getActiveSubMeshCandidates = (mesh)=>this.getActiveSubMeshCandidates(mesh);
        this.scene.getCollidingSubMeshCandidates = (mesh, collider)=>this.getCollidingSubMeshCandidates(mesh, collider);
        this.scene.getIntersectingSubMeshCandidates = (mesh, localRay)=>this.getIntersectingSubMeshCandidates(mesh, localRay);
    }
    /**
     * Registers the component in a given scene
     */ register() {
        this.scene.onMeshRemovedObservable.add((mesh)=>{
            const sceneOctree = this.scene.selectionOctree;
            if (sceneOctree !== undefined && sceneOctree !== null) {
                const index = sceneOctree.dynamicContent.indexOf(mesh);
                if (index !== -1) {
                    sceneOctree.dynamicContent.splice(index, 1);
                }
            }
        });
        this.scene.onMeshImportedObservable.add((mesh)=>{
            const sceneOctree = this.scene.selectionOctree;
            if (sceneOctree !== undefined && sceneOctree !== null) {
                sceneOctree.addMesh(mesh);
            }
        });
    }
    /**
     * Return the list of active meshes
     * @returns the list of active meshes
     */ getActiveMeshCandidates() {
        return this.scene._selectionOctree?.select(this.scene.frustumPlanes) || this.scene._getDefaultMeshCandidates();
    }
    /**
     * Return the list of active sub meshes
     * @param mesh The mesh to get the candidates sub meshes from
     * @returns the list of active sub meshes
     */ getActiveSubMeshCandidates(mesh) {
        if (mesh._submeshesOctree && mesh.useOctreeForRenderingSelection) {
            const intersections = mesh._submeshesOctree.select(this.scene.frustumPlanes);
            return intersections;
        }
        return this.scene._getDefaultSubMeshCandidates(mesh);
    }
    /**
     * Return the list of sub meshes intersecting with a given local ray
     * @param mesh defines the mesh to find the submesh for
     * @param localRay defines the ray in local space
     * @returns the list of intersecting sub meshes
     */ getIntersectingSubMeshCandidates(mesh, localRay) {
        if (mesh._submeshesOctree && mesh.useOctreeForPicking) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"].TransformToRef(localRay, mesh.getWorldMatrix(), this._tempRay);
            const intersections = mesh._submeshesOctree.intersectsRay(this._tempRay);
            return intersections;
        }
        return this.scene._getDefaultSubMeshCandidates(mesh);
    }
    /**
     * Return the list of sub meshes colliding with a collider
     * @param mesh defines the mesh to find the submesh for
     * @param collider defines the collider to evaluate the collision against
     * @returns the list of colliding sub meshes
     */ getCollidingSubMeshCandidates(mesh, collider) {
        if (mesh._submeshesOctree && mesh.useOctreeForCollisions) {
            const radius = collider._velocityWorldLength + Math.max(collider._radius.x, collider._radius.y, collider._radius.z);
            const intersections = mesh._submeshesOctree.intersects(collider._basePointWorld, radius);
            return intersections;
        }
        return this.scene._getDefaultSubMeshCandidates(mesh);
    }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ rebuild() {
    // Nothing to do here.
    }
    /**
     * Disposes the component and the associated resources.
     */ dispose() {
    // Nothing to do here.
    }
} //# sourceMappingURL=octreeSceneComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octreeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octreeBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octreeSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octreeSceneComponent.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$boundingInfoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/boundingInfoHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$transformFeedbackBoundingHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/transformFeedbackBoundingHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$computeShaderBoundingHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/computeShaderBoundingHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingSphere.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Octree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Octree"],
    "OctreeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octreeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctreeBlock"],
    "OctreeSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octreeSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctreeSceneComponent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octreeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octreeBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$octreeSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/octreeSceneComponent.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddRayExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddRayExtensions"],
    "CreatePickingRay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRay"],
    "CreatePickingRayInCameraSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpace"],
    "CreatePickingRayInCameraSpaceToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpaceToRef"],
    "CreatePickingRayToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayToRef"],
    "GetForwardRay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetForwardRay"],
    "GetForwardRayToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetForwardRayToRef"],
    "MultiPick",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiPick"],
    "MultiPickWithRay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiPickWithRay"],
    "Pick",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pick"],
    "PickWithBoundingInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickWithBoundingInfo"],
    "PickWithRay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickWithRay"],
    "PickingCustomization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickingCustomization"],
    "Ray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddRayExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddRayExtensions"],
    "BoundingBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"],
    "BoundingInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingInfo"],
    "BoundingInfoHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$boundingInfoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingInfoHelper"],
    "BoundingSphere",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingSphere"],
    "ComputeShaderBoundingHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$computeShaderBoundingHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeShaderBoundingHelper"],
    "CreatePickingRay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRay"],
    "CreatePickingRayInCameraSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpace"],
    "CreatePickingRayInCameraSpaceToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpaceToRef"],
    "CreatePickingRayToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePickingRayToRef"],
    "GetForwardRay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetForwardRay"],
    "GetForwardRayToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetForwardRayToRef"],
    "MultiPick",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiPick"],
    "MultiPickWithRay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiPickWithRay"],
    "Octree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Octree"],
    "OctreeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctreeBlock"],
    "OctreeSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OctreeSceneComponent"],
    "Pick",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pick"],
    "PickWithBoundingInfo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickWithBoundingInfo"],
    "PickWithRay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickWithRay"],
    "PickingCustomization",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickingCustomization"],
    "Ray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"],
    "TransformFeedbackBoundingHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$transformFeedbackBoundingHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformFeedbackBoundingHelper"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$boundingInfoHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/boundingInfoHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$transformFeedbackBoundingHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/transformFeedbackBoundingHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Helper$2f$computeShaderBoundingHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Helper/computeShaderBoundingHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingSphere.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$Octrees$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/Octrees/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Culling_95189c82._.js.map