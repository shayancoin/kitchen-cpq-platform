module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphInteger",
    ()=>FlowGraphInteger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
class FlowGraphInteger {
    constructor(value){
        this.value = this._toInt(value);
    }
    /**
     * Converts a float to an integer.
     * @param n the float to convert
     * @returns the result of n | 0 - converting it to a int
     */ _toInt(n) {
        return n | 0;
    }
    /**
     * Adds two integers together.
     * @param other the other integer to add
     * @returns a FlowGraphInteger with the result of the addition
     */ add(other) {
        return new FlowGraphInteger(this.value + other.value);
    }
    /**
     * Subtracts two integers.
     * @param other the other integer to subtract
     * @returns a FlowGraphInteger with the result of the subtraction
     */ subtract(other) {
        return new FlowGraphInteger(this.value - other.value);
    }
    /**
     * Multiplies two integers.
     * @param other the other integer to multiply
     * @returns a FlowGraphInteger with the result of the multiplication
     */ multiply(other) {
        return new FlowGraphInteger(Math.imul(this.value, other.value));
    }
    /**
     * Divides two integers.
     * @param other the other integer to divide
     * @returns a FlowGraphInteger with the result of the division
     */ divide(other) {
        return new FlowGraphInteger(this.value / other.value);
    }
    /**
     * The class name of this type.
     * @returns
     */ getClassName() {
        return FlowGraphInteger.ClassName;
    }
    /**
     * Compares two integers for equality.
     * @param other the other integer to compare
     * @returns
     */ equals(other) {
        return this.value === other.value;
    }
    /**
     * Parses a FlowGraphInteger from a serialization object.
     * @param value te number to parse
     * @returns
     */ static FromValue(value) {
        return new FlowGraphInteger(value);
    }
    toString() {
        return this.value.toString();
    }
}
FlowGraphInteger.ClassName = "FlowGraphInteger";
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphInteger", FlowGraphInteger); //# sourceMappingURL=flowGraphInteger.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphMatrix.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphMatrix2D",
    ()=>FlowGraphMatrix2D,
    "FlowGraphMatrix3D",
    ()=>FlowGraphMatrix3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
class FlowGraphMatrix2D {
    constructor(m = [
        1,
        0,
        0,
        1
    ]){
        this._m = m;
    }
    get m() {
        return this._m;
    }
    transformVector(v) {
        return this.transformVectorToRef(v, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]());
    }
    transformVectorToRef(v, result) {
        result.x = v.x * this._m[0] + v.y * this._m[1];
        result.y = v.x * this._m[2] + v.y * this._m[3];
        return result;
    }
    asArray() {
        return this.toArray();
    }
    toArray(emptyArray = []) {
        for(let i = 0; i < 4; i++){
            emptyArray[i] = this._m[i];
        }
        return emptyArray;
    }
    fromArray(array) {
        for(let i = 0; i < 4; i++){
            this._m[i] = array[i];
        }
        return this;
    }
    multiplyToRef(other, result) {
        const otherMatrix = other._m;
        const thisMatrix = this._m;
        const r = result._m;
        // other * this
        r[0] = otherMatrix[0] * thisMatrix[0] + otherMatrix[1] * thisMatrix[2];
        r[1] = otherMatrix[0] * thisMatrix[1] + otherMatrix[1] * thisMatrix[3];
        r[2] = otherMatrix[2] * thisMatrix[0] + otherMatrix[3] * thisMatrix[2];
        r[3] = otherMatrix[2] * thisMatrix[1] + otherMatrix[3] * thisMatrix[3];
        return result;
    }
    multiply(other) {
        return this.multiplyToRef(other, new FlowGraphMatrix2D());
    }
    divideToRef(other, result) {
        const m = this._m;
        const o = other._m;
        const r = result._m;
        r[0] = m[0] / o[0];
        r[1] = m[1] / o[1];
        r[2] = m[2] / o[2];
        r[3] = m[3] / o[3];
        return result;
    }
    divide(other) {
        return this.divideToRef(other, new FlowGraphMatrix2D());
    }
    addToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] + o[0];
        r[1] = m[1] + o[1];
        r[2] = m[2] + o[2];
        r[3] = m[3] + o[3];
        return result;
    }
    add(other) {
        return this.addToRef(other, new FlowGraphMatrix2D());
    }
    subtractToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] - o[0];
        r[1] = m[1] - o[1];
        r[2] = m[2] - o[2];
        r[3] = m[3] - o[3];
        return result;
    }
    subtract(other) {
        return this.subtractToRef(other, new FlowGraphMatrix2D());
    }
    transpose() {
        const m = this._m;
        return new FlowGraphMatrix2D([
            m[0],
            m[2],
            m[1],
            m[3]
        ]);
    }
    determinant() {
        const m = this._m;
        return m[0] * m[3] - m[1] * m[2];
    }
    inverse() {
        const det = this.determinant();
        if (det === 0) {
            throw new Error("Matrix is not invertible");
        }
        const m = this._m;
        const invDet = 1 / det;
        return new FlowGraphMatrix2D([
            m[3] * invDet,
            -m[1] * invDet,
            -m[2] * invDet,
            m[0] * invDet
        ]);
    }
    equals(other, epsilon = 0) {
        const m = this._m;
        const o = other.m;
        if (epsilon === 0) {
            return m[0] === o[0] && m[1] === o[1] && m[2] === o[2] && m[3] === o[3];
        }
        return Math.abs(m[0] - o[0]) < epsilon && Math.abs(m[1] - o[1]) < epsilon && Math.abs(m[2] - o[2]) < epsilon && Math.abs(m[3] - o[3]) < epsilon;
    }
    getClassName() {
        return "FlowGraphMatrix2D";
    }
    toString() {
        return `FlowGraphMatrix2D(${this._m.join(", ")})`;
    }
}
class FlowGraphMatrix3D {
    constructor(array = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
    ]){
        this._m = array;
    }
    get m() {
        return this._m;
    }
    transformVector(v) {
        return this.transformVectorToRef(v, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    }
    transformVectorToRef(v, result) {
        const m = this._m;
        result.x = v.x * m[0] + v.y * m[1] + v.z * m[2];
        result.y = v.x * m[3] + v.y * m[4] + v.z * m[5];
        result.z = v.x * m[6] + v.y * m[7] + v.z * m[8];
        return result;
    }
    multiplyToRef(other, result) {
        const otherMatrix = other._m;
        const thisMatrix = this._m;
        const r = result.m;
        r[0] = otherMatrix[0] * thisMatrix[0] + otherMatrix[1] * thisMatrix[3] + otherMatrix[2] * thisMatrix[6];
        r[1] = otherMatrix[0] * thisMatrix[1] + otherMatrix[1] * thisMatrix[4] + otherMatrix[2] * thisMatrix[7];
        r[2] = otherMatrix[0] * thisMatrix[2] + otherMatrix[1] * thisMatrix[5] + otherMatrix[2] * thisMatrix[8];
        r[3] = otherMatrix[3] * thisMatrix[0] + otherMatrix[4] * thisMatrix[3] + otherMatrix[5] * thisMatrix[6];
        r[4] = otherMatrix[3] * thisMatrix[1] + otherMatrix[4] * thisMatrix[4] + otherMatrix[5] * thisMatrix[7];
        r[5] = otherMatrix[3] * thisMatrix[2] + otherMatrix[4] * thisMatrix[5] + otherMatrix[5] * thisMatrix[8];
        r[6] = otherMatrix[6] * thisMatrix[0] + otherMatrix[7] * thisMatrix[3] + otherMatrix[8] * thisMatrix[6];
        r[7] = otherMatrix[6] * thisMatrix[1] + otherMatrix[7] * thisMatrix[4] + otherMatrix[8] * thisMatrix[7];
        r[8] = otherMatrix[6] * thisMatrix[2] + otherMatrix[7] * thisMatrix[5] + otherMatrix[8] * thisMatrix[8];
        return result;
    }
    multiply(other) {
        return this.multiplyToRef(other, new FlowGraphMatrix3D());
    }
    divideToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] / o[0];
        r[1] = m[1] / o[1];
        r[2] = m[2] / o[2];
        r[3] = m[3] / o[3];
        r[4] = m[4] / o[4];
        r[5] = m[5] / o[5];
        r[6] = m[6] / o[6];
        r[7] = m[7] / o[7];
        r[8] = m[8] / o[8];
        return result;
    }
    divide(other) {
        return this.divideToRef(other, new FlowGraphMatrix3D());
    }
    addToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] + o[0];
        r[1] = m[1] + o[1];
        r[2] = m[2] + o[2];
        r[3] = m[3] + o[3];
        r[4] = m[4] + o[4];
        r[5] = m[5] + o[5];
        r[6] = m[6] + o[6];
        r[7] = m[7] + o[7];
        r[8] = m[8] + o[8];
        return result;
    }
    add(other) {
        return this.addToRef(other, new FlowGraphMatrix3D());
    }
    subtractToRef(other, result) {
        const m = this._m;
        const o = other.m;
        const r = result.m;
        r[0] = m[0] - o[0];
        r[1] = m[1] - o[1];
        r[2] = m[2] - o[2];
        r[3] = m[3] - o[3];
        r[4] = m[4] - o[4];
        r[5] = m[5] - o[5];
        r[6] = m[6] - o[6];
        r[7] = m[7] - o[7];
        r[8] = m[8] - o[8];
        return result;
    }
    subtract(other) {
        return this.subtractToRef(other, new FlowGraphMatrix3D());
    }
    toArray(emptyArray = []) {
        for(let i = 0; i < 9; i++){
            emptyArray[i] = this._m[i];
        }
        return emptyArray;
    }
    asArray() {
        return this.toArray();
    }
    fromArray(array) {
        for(let i = 0; i < 9; i++){
            this._m[i] = array[i];
        }
        return this;
    }
    transpose() {
        const m = this._m;
        return new FlowGraphMatrix3D([
            m[0],
            m[3],
            m[6],
            m[1],
            m[4],
            m[7],
            m[2],
            m[5],
            m[8]
        ]);
    }
    determinant() {
        const m = this._m;
        return m[0] * (m[4] * m[8] - m[5] * m[7]) - m[1] * (m[3] * m[8] - m[5] * m[6]) + m[2] * (m[3] * m[7] - m[4] * m[6]);
    }
    inverse() {
        const det = this.determinant();
        if (det === 0) {
            throw new Error("Matrix is not invertible");
        }
        const m = this._m;
        const invDet = 1 / det;
        return new FlowGraphMatrix3D([
            (m[4] * m[8] - m[5] * m[7]) * invDet,
            (m[2] * m[7] - m[1] * m[8]) * invDet,
            (m[1] * m[5] - m[2] * m[4]) * invDet,
            (m[5] * m[6] - m[3] * m[8]) * invDet,
            (m[0] * m[8] - m[2] * m[6]) * invDet,
            (m[2] * m[3] - m[0] * m[5]) * invDet,
            (m[3] * m[7] - m[4] * m[6]) * invDet,
            (m[1] * m[6] - m[0] * m[7]) * invDet,
            (m[0] * m[4] - m[1] * m[3]) * invDet
        ]);
    }
    equals(other, epsilon = 0) {
        const m = this._m;
        const o = other.m;
        // performance shortcut
        if (epsilon === 0) {
            return m[0] === o[0] && m[1] === o[1] && m[2] === o[2] && m[3] === o[3] && m[4] === o[4] && m[5] === o[5] && m[6] === o[6] && m[7] === o[7] && m[8] === o[8];
        }
        return Math.abs(m[0] - o[0]) < epsilon && Math.abs(m[1] - o[1]) < epsilon && Math.abs(m[2] - o[2]) < epsilon && Math.abs(m[3] - o[3]) < epsilon && Math.abs(m[4] - o[4]) < epsilon && Math.abs(m[5] - o[5]) < epsilon && Math.abs(m[6] - o[6]) < epsilon && Math.abs(m[7] - o[7]) < epsilon && Math.abs(m[8] - o[8]) < epsilon;
    }
    getClassName() {
        return "FlowGraphMatrix3D";
    }
    toString() {
        return `FlowGraphMatrix3D(${this._m.join(", ")})`;
    }
} //# sourceMappingURL=flowGraphMatrix.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphTypes",
    ()=>FlowGraphTypes,
    "RichType",
    ()=>RichType,
    "RichTypeAny",
    ()=>RichTypeAny,
    "RichTypeBoolean",
    ()=>RichTypeBoolean,
    "RichTypeColor3",
    ()=>RichTypeColor3,
    "RichTypeColor4",
    ()=>RichTypeColor4,
    "RichTypeFlowGraphInteger",
    ()=>RichTypeFlowGraphInteger,
    "RichTypeMatrix",
    ()=>RichTypeMatrix,
    "RichTypeMatrix2D",
    ()=>RichTypeMatrix2D,
    "RichTypeMatrix3D",
    ()=>RichTypeMatrix3D,
    "RichTypeNumber",
    ()=>RichTypeNumber,
    "RichTypeQuaternion",
    ()=>RichTypeQuaternion,
    "RichTypeString",
    ()=>RichTypeString,
    "RichTypeVector2",
    ()=>RichTypeVector2,
    "RichTypeVector3",
    ()=>RichTypeVector3,
    "RichTypeVector4",
    ()=>RichTypeVector4,
    "getAnimationTypeByFlowGraphType",
    ()=>getAnimationTypeByFlowGraphType,
    "getRichTypeByAnimationType",
    ()=>getRichTypeByAnimationType,
    "getRichTypeByFlowGraphType",
    ()=>getRichTypeByFlowGraphType,
    "getRichTypeFromValue",
    ()=>getRichTypeFromValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphMatrix.js [app-ssr] (ecmascript)");
;
;
;
;
var FlowGraphTypes;
(function(FlowGraphTypes) {
    FlowGraphTypes["Any"] = "any";
    FlowGraphTypes["String"] = "string";
    FlowGraphTypes["Number"] = "number";
    FlowGraphTypes["Boolean"] = "boolean";
    FlowGraphTypes["Object"] = "object";
    FlowGraphTypes["Integer"] = "FlowGraphInteger";
    FlowGraphTypes["Vector2"] = "Vector2";
    FlowGraphTypes["Vector3"] = "Vector3";
    FlowGraphTypes["Vector4"] = "Vector4";
    FlowGraphTypes["Quaternion"] = "Quaternion";
    FlowGraphTypes["Matrix"] = "Matrix";
    FlowGraphTypes["Matrix2D"] = "Matrix2D";
    FlowGraphTypes["Matrix3D"] = "Matrix3D";
    FlowGraphTypes["Color3"] = "Color3";
    FlowGraphTypes["Color4"] = "Color4";
})(FlowGraphTypes || (FlowGraphTypes = {}));
class RichType {
    constructor(/**
     * The name given to the type.
     */ typeName, /**
     * The default value of the type.
     */ defaultValue, /**
     * [-1] The ANIMATIONTYPE of the type, if available
     */ animationType = -1){
        this.typeName = typeName;
        this.defaultValue = defaultValue;
        this.animationType = animationType;
    }
    /**
     * Serializes this rich type into a serialization object.
     * @param serializationObject the object to serialize to
     */ serialize(serializationObject) {
        serializationObject.typeName = this.typeName;
        serializationObject.defaultValue = this.defaultValue;
    }
}
const RichTypeAny = new RichType("any" /* FlowGraphTypes.Any */ , undefined);
const RichTypeString = new RichType("string" /* FlowGraphTypes.String */ , "");
const RichTypeNumber = new RichType("number" /* FlowGraphTypes.Number */ , 0, 0);
const RichTypeBoolean = new RichType("boolean" /* FlowGraphTypes.Boolean */ , false);
const RichTypeVector2 = new RichType("Vector2" /* FlowGraphTypes.Vector2 */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero(), 5);
const RichTypeVector3 = new RichType("Vector3" /* FlowGraphTypes.Vector3 */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), 1);
const RichTypeVector4 = new RichType("Vector4" /* FlowGraphTypes.Vector4 */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"].Zero());
const RichTypeMatrix = new RichType("Matrix" /* FlowGraphTypes.Matrix */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity(), 3);
const RichTypeMatrix2D = new RichType("Matrix2D" /* FlowGraphTypes.Matrix2D */ , new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"]());
const RichTypeMatrix3D = new RichType("Matrix3D" /* FlowGraphTypes.Matrix3D */ , new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"]());
const RichTypeColor3 = new RichType("Color3" /* FlowGraphTypes.Color3 */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].Black(), 4);
const RichTypeColor4 = new RichType("Color4" /* FlowGraphTypes.Color4 */ , new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0), 7);
const RichTypeQuaternion = new RichType("Quaternion" /* FlowGraphTypes.Quaternion */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity(), 2);
RichTypeQuaternion.typeTransformer = (value)=>{
    if (value.getClassName) {
        if (value.getClassName() === "Vector4" /* FlowGraphTypes.Vector4 */ ) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromArray(value.asArray());
        } else if (value.getClassName() === "Vector3" /* FlowGraphTypes.Vector3 */ ) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerVector(value);
        } else if (value.getClassName() === "Matrix" /* FlowGraphTypes.Matrix */ ) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrix(value);
        }
    }
    return value;
};
const RichTypeFlowGraphInteger = new RichType("FlowGraphInteger" /* FlowGraphTypes.Integer */ , new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](0), 0);
function getRichTypeFromValue(value) {
    const anyValue = value;
    switch(typeof value){
        case "string" /* FlowGraphTypes.String */ :
            return RichTypeString;
        case "number" /* FlowGraphTypes.Number */ :
            return RichTypeNumber;
        case "boolean" /* FlowGraphTypes.Boolean */ :
            return RichTypeBoolean;
        case "object" /* FlowGraphTypes.Object */ :
            if (anyValue.getClassName) {
                switch(anyValue.getClassName()){
                    case "Vector2" /* FlowGraphTypes.Vector2 */ :
                        return RichTypeVector2;
                    case "Vector3" /* FlowGraphTypes.Vector3 */ :
                        return RichTypeVector3;
                    case "Vector4" /* FlowGraphTypes.Vector4 */ :
                        return RichTypeVector4;
                    case "Matrix" /* FlowGraphTypes.Matrix */ :
                        return RichTypeMatrix;
                    case "Color3" /* FlowGraphTypes.Color3 */ :
                        return RichTypeColor3;
                    case "Color4" /* FlowGraphTypes.Color4 */ :
                        return RichTypeColor4;
                    case "Quaternion" /* FlowGraphTypes.Quaternion */ :
                        return RichTypeQuaternion;
                    case "FlowGraphInteger" /* FlowGraphTypes.Integer */ :
                        return RichTypeFlowGraphInteger;
                    case "Matrix2D" /* FlowGraphTypes.Matrix2D */ :
                        return RichTypeMatrix2D;
                    case "Matrix3D" /* FlowGraphTypes.Matrix3D */ :
                        return RichTypeMatrix3D;
                }
            }
            return RichTypeAny;
        default:
            return RichTypeAny;
    }
}
function getRichTypeByFlowGraphType(flowGraphType) {
    switch(flowGraphType){
        case "string" /* FlowGraphTypes.String */ :
            return RichTypeString;
        case "number" /* FlowGraphTypes.Number */ :
            return RichTypeNumber;
        case "boolean" /* FlowGraphTypes.Boolean */ :
            return RichTypeBoolean;
        case "Vector2" /* FlowGraphTypes.Vector2 */ :
            return RichTypeVector2;
        case "Vector3" /* FlowGraphTypes.Vector3 */ :
            return RichTypeVector3;
        case "Vector4" /* FlowGraphTypes.Vector4 */ :
            return RichTypeVector4;
        case "Matrix" /* FlowGraphTypes.Matrix */ :
            return RichTypeMatrix;
        case "Color3" /* FlowGraphTypes.Color3 */ :
            return RichTypeColor3;
        case "Color4" /* FlowGraphTypes.Color4 */ :
            return RichTypeColor4;
        case "Quaternion" /* FlowGraphTypes.Quaternion */ :
            return RichTypeQuaternion;
        case "FlowGraphInteger" /* FlowGraphTypes.Integer */ :
            return RichTypeFlowGraphInteger;
        case "Matrix2D" /* FlowGraphTypes.Matrix2D */ :
            return RichTypeMatrix2D;
        case "Matrix3D" /* FlowGraphTypes.Matrix3D */ :
            return RichTypeMatrix3D;
        default:
            return RichTypeAny;
    }
}
function getAnimationTypeByFlowGraphType(flowGraphType) {
    switch(flowGraphType){
        case "number" /* FlowGraphTypes.Number */ :
            return 0;
        case "Vector2" /* FlowGraphTypes.Vector2 */ :
            return 5;
        case "Vector3" /* FlowGraphTypes.Vector3 */ :
            return 1;
        case "Matrix" /* FlowGraphTypes.Matrix */ :
            return 3;
        case "Color3" /* FlowGraphTypes.Color3 */ :
            return 4;
        case "Color4" /* FlowGraphTypes.Color4 */ :
            return 7;
        case "Quaternion" /* FlowGraphTypes.Quaternion */ :
            return 2;
        default:
            return 0;
    }
}
function getRichTypeByAnimationType(animationType) {
    switch(animationType){
        case 0:
            return RichTypeNumber;
        case 5:
            return RichTypeVector2;
        case 1:
            return RichTypeVector3;
        case 3:
            return RichTypeMatrix;
        case 4:
            return RichTypeColor3;
        case 7:
            return RichTypeColor4;
        case 2:
            return RichTypeQuaternion;
        default:
            return RichTypeAny;
    }
} //# sourceMappingURL=flowGraphRichTypes.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/serialization.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultValueParseFunction",
    ()=>defaultValueParseFunction,
    "defaultValueSerializationFunction",
    ()=>defaultValueSerializationFunction,
    "needsPathConverter",
    ()=>needsPathConverter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphMatrix.js [app-ssr] (ecmascript)");
;
;
;
;
;
function IsMeshClassName(className) {
    return className === "Mesh" || className === "AbstractMesh" || className === "GroundMesh" || className === "InstanceMesh" || className === "LinesMesh" || className === "GoldbergMesh" || className === "GreasedLineMesh" || className === "TrailMesh";
}
function IsVectorClassName(className) {
    return className === "Vector2" /* FlowGraphTypes.Vector2 */  || className === "Vector3" /* FlowGraphTypes.Vector3 */  || className === "Vector4" /* FlowGraphTypes.Vector4 */  || className === "Quaternion" /* FlowGraphTypes.Quaternion */  || className === "Color3" /* FlowGraphTypes.Color3 */  || className === "Color4" /* FlowGraphTypes.Color4 */ ;
}
function IsMatrixClassName(className) {
    return className === "Matrix" /* FlowGraphTypes.Matrix */  || className === "Matrix2D" /* FlowGraphTypes.Matrix2D */  || className === "Matrix3D" /* FlowGraphTypes.Matrix3D */ ;
}
function IsAnimationGroupClassName(className) {
    return className === "AnimationGroup";
}
function ParseVector(className, value, flipHandedness = false) {
    if (className === "Vector2" /* FlowGraphTypes.Vector2 */ ) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].FromArray(value);
    } else if (className === "Vector3" /* FlowGraphTypes.Vector3 */ ) {
        if (flipHandedness) {
            value[2] *= -1;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(value);
    } else if (className === "Vector4" /* FlowGraphTypes.Vector4 */ ) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"].FromArray(value);
    } else if (className === "Quaternion" /* FlowGraphTypes.Quaternion */ ) {
        if (flipHandedness) {
            value[2] *= -1;
            value[3] *= -1;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromArray(value);
    } else if (className === "Color3" /* FlowGraphTypes.Color3 */ ) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](value[0], value[1], value[2]);
    } else if (className === "Color4" /* FlowGraphTypes.Color4 */ ) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](value[0], value[1], value[2], value[3]);
    } else {
        throw new Error(`Unknown vector class name ${className}`);
    }
}
function defaultValueSerializationFunction(key, value, serializationObject) {
    const className = value?.getClassName?.() ?? "";
    if (IsVectorClassName(className) || IsMatrixClassName(className)) {
        serializationObject[key] = {
            value: value.asArray(),
            className
        };
    } else if (className === "FlowGraphInteger" /* FlowGraphTypes.Integer */ ) {
        serializationObject[key] = {
            value: value.value,
            className
        };
    } else {
        if (className && (value.id || value.name)) {
            serializationObject[key] = {
                id: value.id,
                name: value.name,
                className
            };
        } else {
            // only if it is not an object
            if (typeof value !== "object") {
                serializationObject[key] = value;
            } else {
                throw new Error(`Could not serialize value ${value}`);
            }
        }
    }
}
function defaultValueParseFunction(key, serializationObject, assetsContainer, scene) {
    const intermediateValue = serializationObject[key];
    let finalValue;
    const className = intermediateValue?.type ?? intermediateValue?.className;
    if (IsMeshClassName(className)) {
        let nodes = scene.meshes.filter((m)=>intermediateValue.id ? m.id === intermediateValue.id : m.name === intermediateValue.name);
        if (nodes.length === 0) {
            nodes = scene.transformNodes.filter((m)=>intermediateValue.id ? m.id === intermediateValue.id : m.name === intermediateValue.name);
        }
        finalValue = intermediateValue.uniqueId ? nodes.find((m)=>m.uniqueId === intermediateValue.uniqueId) : nodes[0];
    } else if (IsVectorClassName(className)) {
        finalValue = ParseVector(className, intermediateValue.value);
    } else if (IsAnimationGroupClassName(className)) {
        // do not use the scene.getAnimationGroupByName because it is possible that two AGs will have the same name
        const ags = scene.animationGroups.filter((ag)=>ag.name === intermediateValue.name);
        // uniqueId changes on each load. this is used for the glTF loader, that uses serialization after the scene was loaded.
        finalValue = ags.length === 1 ? ags[0] : ags.find((ag)=>ag.uniqueId === intermediateValue.uniqueId);
    } else if (className === "Matrix" /* FlowGraphTypes.Matrix */ ) {
        finalValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArray(intermediateValue.value);
    } else if (className === "Matrix2D" /* FlowGraphTypes.Matrix2D */ ) {
        finalValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"](intermediateValue.value);
    } else if (className === "Matrix3D" /* FlowGraphTypes.Matrix3D */ ) {
        finalValue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"](intermediateValue.value);
    } else if (className === "FlowGraphInteger" /* FlowGraphTypes.Integer */ ) {
        finalValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"].FromValue(intermediateValue.value);
    } else if (className === "number" /* FlowGraphTypes.Number */  || className === "string" /* FlowGraphTypes.String */  || className === "boolean" /* FlowGraphTypes.Boolean */ ) {
        finalValue = intermediateValue.value[0];
    } else if (intermediateValue && intermediateValue.value !== undefined) {
        finalValue = intermediateValue.value;
    } else {
        if (Array.isArray(intermediateValue)) {
            // configuration data of an event
            finalValue = intermediateValue.reduce((acc, val)=>{
                if (!val.eventData) {
                    return acc;
                }
                acc[val.id] = {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(val.type)
                };
                if (typeof val.value !== "undefined") {
                    acc[val.id].value = defaultValueParseFunction("value", val, assetsContainer, scene);
                }
                return acc;
            }, {});
        } else {
            finalValue = intermediateValue;
        }
    }
    return finalValue;
}
function needsPathConverter(className) {
    // I am not using the ClassName property here because it was causing a circular dependency
    // that jest didn't like!
    return className === "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ ;
} //# sourceMappingURL=serialization.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAssetsContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The type of the assets that flow graph supports
 */ __turbopack_context__.s([
    "FlowGraphAssetType",
    ()=>FlowGraphAssetType,
    "GetFlowGraphAssetWithType",
    ()=>GetFlowGraphAssetWithType
]);
var FlowGraphAssetType;
(function(FlowGraphAssetType) {
    FlowGraphAssetType["Animation"] = "Animation";
    FlowGraphAssetType["AnimationGroup"] = "AnimationGroup";
    FlowGraphAssetType["Mesh"] = "Mesh";
    FlowGraphAssetType["Material"] = "Material";
    FlowGraphAssetType["Camera"] = "Camera";
    FlowGraphAssetType["Light"] = "Light";
// Further asset types will be added here when needed.
})(FlowGraphAssetType || (FlowGraphAssetType = {}));
function GetFlowGraphAssetWithType(assetsContext, type, index, useIndexAsUniqueId) {
    switch(type){
        case "Animation" /* FlowGraphAssetType.Animation */ :
            return useIndexAsUniqueId ? assetsContext.animations.find((a)=>a.uniqueId === index) ?? null : assetsContext.animations[index] ?? null;
        case "AnimationGroup" /* FlowGraphAssetType.AnimationGroup */ :
            return useIndexAsUniqueId ? assetsContext.animationGroups.find((a)=>a.uniqueId === index) ?? null : assetsContext.animationGroups[index] ?? null;
        case "Mesh" /* FlowGraphAssetType.Mesh */ :
            return useIndexAsUniqueId ? assetsContext.meshes.find((a)=>a.uniqueId === index) ?? null : assetsContext.meshes[index] ?? null;
        case "Material" /* FlowGraphAssetType.Material */ :
            return useIndexAsUniqueId ? assetsContext.materials.find((a)=>a.uniqueId === index) ?? null : assetsContext.materials[index] ?? null;
        case "Camera" /* FlowGraphAssetType.Camera */ :
            return useIndexAsUniqueId ? assetsContext.cameras.find((a)=>a.uniqueId === index) ?? null : assetsContext.cameras[index] ?? null;
        case "Light" /* FlowGraphAssetType.Light */ :
            return useIndexAsUniqueId ? assetsContext.lights.find((a)=>a.uniqueId === index) ?? null : assetsContext.lights[index] ?? null;
        default:
            return null;
    }
} //# sourceMappingURL=flowGraphAssetsContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphLogger.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphAction",
    ()=>FlowGraphAction,
    "FlowGraphLogger",
    ()=>FlowGraphLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
var FlowGraphAction;
(function(FlowGraphAction) {
    FlowGraphAction["ExecuteBlock"] = "ExecuteBlock";
    FlowGraphAction["ExecuteEvent"] = "ExecuteEvent";
    FlowGraphAction["TriggerConnection"] = "TriggerConnection";
    FlowGraphAction["ContextVariableSet"] = "ContextVariableSet";
    FlowGraphAction["GlobalVariableSet"] = "GlobalVariableSet";
    FlowGraphAction["GlobalVariableDelete"] = "GlobalVariableDelete";
    FlowGraphAction["GlobalVariableGet"] = "GlobalVariableGet";
    FlowGraphAction["AddConnection"] = "AddConnection";
    FlowGraphAction["GetConnectionValue"] = "GetConnectionValue";
    FlowGraphAction["SetConnectionValue"] = "SetConnectionValue";
    FlowGraphAction["ActivateSignal"] = "ActivateSignal";
    FlowGraphAction["ContextVariableGet"] = "ContextVariableGet";
})(FlowGraphAction || (FlowGraphAction = {}));
class FlowGraphLogger {
    constructor(){
        /**
         * Whether to log to the console.
         */ this.logToConsole = false;
        /**
         * The log cache of the flow graph.
         * Each item is a logged item, in order of execution.
         */ this.log = [];
    }
    addLogItem(item) {
        if (!item.time) {
            item.time = Date.now();
        }
        this.log.push(item);
        if (this.logToConsole) {
            const value = item.payload?.value;
            if (typeof value === "object" && value.getClassName) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`[FGLog] ${item.className}:${item.uniqueId.split("-")[0]} ${item.action} - ${JSON.stringify(value.getClassName())}: ${value.toString()}`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`[FGLog] ${item.className}:${item.uniqueId.split("-")[0]} ${item.action} - ${JSON.stringify(item.payload)}`);
            }
        }
    }
    getItemsOfType(action) {
        return this.log.filter((i)=>i.action === action);
    }
} //# sourceMappingURL=flowGraphLogger.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphContext",
    ()=>FlowGraphContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/guid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAssetsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAssetsContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphLogger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class FlowGraphContext {
    /**
     * Enable logging on this context
     */ get enableLogging() {
        return this._enableLogging;
    }
    set enableLogging(value) {
        if (this._enableLogging === value) {
            return;
        }
        this._enableLogging = value;
        if (this._enableLogging) {
            this.logger = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLogger"]();
            this.logger.logToConsole = true;
        } else {
            this.logger = null;
        }
    }
    constructor(params){
        /**
         * A randomly generated GUID for each context.
         */ this.uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomGUID"])();
        /**
         * These are the variables defined by a user.
         */ this._userVariables = {};
        /**
         * These are the variables set by the blocks.
         */ this._executionVariables = {};
        /**
         * A context-specific global variables, available to all blocks in the context.
         */ this._globalContextVariables = {};
        /**
         * These are the values for the data connection points
         */ this._connectionValues = {};
        /**
         * These are blocks that have currently pending tasks/listeners that need to be cleaned up.
         */ this._pendingBlocks = [];
        /**
         * A monotonically increasing ID for each execution.
         * Incremented for every block executed.
         */ this._executionId = 0;
        /**
         * Observable that is triggered when a node is executed.
         */ this.onNodeExecutedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Whether to treat data as right-handed.
         * This is used when serializing data from a right-handed system, while running the context in a left-handed system, for example in glTF parsing.
         * Default is false.
         */ this.treatDataAsRightHanded = false;
        this._enableLogging = false;
        this._configuration = params;
        this.assetsContext = params.assetsContext ?? params.scene;
    }
    /**
     * Check if a user-defined variable is defined.
     * @param name the name of the variable
     * @returns true if the variable is defined
     */ hasVariable(name) {
        return name in this._userVariables;
    }
    /**
     * Set a user-defined variable.
     * @param name the name of the variable
     * @param value the value of the variable
     */ setVariable(name, value) {
        this._userVariables[name] = value;
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "ContextVariableSet" /* FlowGraphAction.ContextVariableSet */ ,
            payload: {
                name,
                value
            }
        });
    }
    /**
     * Get an assets from the assets context based on its type and index in the array
     * @param type The type of the asset
     * @param index The index of the asset
     * @returns The asset or null if not found
     */ getAsset(type, index) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAssetsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetFlowGraphAssetWithType"])(this.assetsContext, type, index);
    }
    /**
     * Get a user-defined variable.
     * @param name the name of the variable
     * @returns the value of the variable
     */ getVariable(name) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "ContextVariableGet" /* FlowGraphAction.ContextVariableGet */ ,
            payload: {
                name,
                value: this._userVariables[name]
            }
        });
        return this._userVariables[name];
    }
    /**
     * Gets all user variables map
     */ get userVariables() {
        return this._userVariables;
    }
    /**
     * Get the scene that the context belongs to.
     * @returns the scene
     */ getScene() {
        return this._configuration.scene;
    }
    _getUniqueIdPrefixedName(obj, name) {
        return `${obj.uniqueId}_${name}`;
    }
    /**
     * @internal
     * @param name name of the variable
     * @param defaultValue default value to return if the variable is not defined
     * @returns the variable value or the default value if the variable is not defined
     */ _getGlobalContextVariable(name, defaultValue) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "GlobalVariableGet" /* FlowGraphAction.GlobalVariableGet */ ,
            payload: {
                name,
                defaultValue,
                possibleValue: this._globalContextVariables[name]
            }
        });
        if (this._hasGlobalContextVariable(name)) {
            return this._globalContextVariables[name];
        } else {
            return defaultValue;
        }
    }
    /**
     * Set a global context variable
     * @internal
     * @param name the name of the variable
     * @param value the value of the variable
     */ _setGlobalContextVariable(name, value) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "GlobalVariableSet" /* FlowGraphAction.GlobalVariableSet */ ,
            payload: {
                name,
                value
            }
        });
        this._globalContextVariables[name] = value;
    }
    /**
     * Delete a global context variable
     * @internal
     * @param name the name of the variable
     */ _deleteGlobalContextVariable(name) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "GlobalVariableDelete" /* FlowGraphAction.GlobalVariableDelete */ ,
            payload: {
                name
            }
        });
        delete this._globalContextVariables[name];
    }
    /**
     * Check if a global context variable is defined
     * @internal
     * @param name the name of the variable
     * @returns true if the variable is defined
     */ _hasGlobalContextVariable(name) {
        return name in this._globalContextVariables;
    }
    /**
     * Set an internal execution variable
     * @internal
     * @param name
     * @param value
     */ _setExecutionVariable(block, name, value) {
        this._executionVariables[this._getUniqueIdPrefixedName(block, name)] = value;
    }
    /**
     * Get an internal execution variable
     * @internal
     * @param name
     * @returns
     */ _getExecutionVariable(block, name, defaultValue) {
        if (this._hasExecutionVariable(block, name)) {
            return this._executionVariables[this._getUniqueIdPrefixedName(block, name)];
        } else {
            return defaultValue;
        }
    }
    /**
     * Delete an internal execution variable
     * @internal
     * @param block
     * @param name
     */ _deleteExecutionVariable(block, name) {
        delete this._executionVariables[this._getUniqueIdPrefixedName(block, name)];
    }
    /**
     * Check if an internal execution variable is defined
     * @internal
     * @param block
     * @param name
     * @returns
     */ _hasExecutionVariable(block, name) {
        return this._getUniqueIdPrefixedName(block, name) in this._executionVariables;
    }
    /**
     * Check if a connection value is defined
     * @internal
     * @param connectionPoint
     * @returns
     */ _hasConnectionValue(connectionPoint) {
        return connectionPoint.uniqueId in this._connectionValues;
    }
    /**
     * Set a connection value
     * @internal
     * @param connectionPoint
     * @param value
     */ _setConnectionValue(connectionPoint, value) {
        this._connectionValues[connectionPoint.uniqueId] = value;
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "SetConnectionValue" /* FlowGraphAction.SetConnectionValue */ ,
            payload: {
                connectionPointId: connectionPoint.uniqueId,
                value
            }
        });
    }
    /**
     * Set a connection value by key
     * @internal
     * @param key the key of the connection value
     * @param value the value of the connection
     */ _setConnectionValueByKey(key, value) {
        this._connectionValues[key] = value;
    }
    /**
     * Get a connection value
     * @internal
     * @param connectionPoint
     * @returns
     */ _getConnectionValue(connectionPoint) {
        this.logger?.addLogItem({
            time: Date.now(),
            className: this.getClassName(),
            uniqueId: this.uniqueId,
            action: "GetConnectionValue" /* FlowGraphAction.GetConnectionValue */ ,
            payload: {
                connectionPointId: connectionPoint.uniqueId,
                value: this._connectionValues[connectionPoint.uniqueId]
            }
        });
        return this._connectionValues[connectionPoint.uniqueId];
    }
    /**
     * Get the configuration
     * @internal
     * @param name
     * @param value
     */ get configuration() {
        return this._configuration;
    }
    /**
     * Check if there are any pending blocks in this context
     * @returns true if there are pending blocks
     */ get hasPendingBlocks() {
        return this._pendingBlocks.length > 0;
    }
    /**
     * Add a block to the list of blocks that have pending tasks.
     * @internal
     * @param block
     */ _addPendingBlock(block) {
        // check if block is already in the array
        if (this._pendingBlocks.includes(block)) {
            return;
        }
        this._pendingBlocks.push(block);
        // sort pending blocks by priority
        this._pendingBlocks.sort((a, b)=>a.priority - b.priority);
    }
    /**
     * Remove a block from the list of blocks that have pending tasks.
     * @internal
     * @param block
     */ _removePendingBlock(block) {
        const index = this._pendingBlocks.indexOf(block);
        if (index !== -1) {
            this._pendingBlocks.splice(index, 1);
        }
    }
    /**
     * Clear all pending blocks.
     * @internal
     */ _clearPendingBlocks() {
        for (const block of this._pendingBlocks){
            block._cancelPendingTasks(this);
        }
        this._pendingBlocks.length = 0;
    }
    /**
     * @internal
     * Function that notifies the node executed observable
     * @param node
     */ _notifyExecuteNode(node) {
        this.onNodeExecutedObservable.notifyObservers(node);
        this.logger?.addLogItem({
            time: Date.now(),
            className: node.getClassName(),
            uniqueId: node.uniqueId,
            action: "ExecuteBlock" /* FlowGraphAction.ExecuteBlock */ 
        });
    }
    _notifyOnTick(framePayload) {
        // set the values as global variables
        this._setGlobalContextVariable("timeSinceStart", framePayload.timeSinceStart);
        this._setGlobalContextVariable("deltaTime", framePayload.deltaTime);
        // iterate the pending blocks and run each one's onFrame function
        for (const block of this._pendingBlocks){
            block._executeOnTick?.(this);
        }
    }
    /**
     * @internal
     */ _increaseExecutionId() {
        this._executionId++;
    }
    /**
     * A monotonically increasing ID for each execution.
     * Incremented for every block executed.
     */ get executionId() {
        return this._executionId;
    }
    /**
     * Serializes a context
     * @param serializationObject the object to write the values in
     * @param valueSerializationFunction a function to serialize complex values
     */ serialize(serializationObject = {}, valueSerializationFunction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultValueSerializationFunction"]) {
        serializationObject.uniqueId = this.uniqueId;
        serializationObject._userVariables = {};
        for(const key in this._userVariables){
            valueSerializationFunction(key, this._userVariables[key], serializationObject._userVariables);
        }
        serializationObject._connectionValues = {};
        for(const key in this._connectionValues){
            valueSerializationFunction(key, this._connectionValues[key], serializationObject._connectionValues);
        }
        // serialize assets context, if not scene
        if (this.assetsContext !== this.getScene()) {
            serializationObject._assetsContext = {
                meshes: this.assetsContext.meshes.map((m)=>m.id),
                materials: this.assetsContext.materials.map((m)=>m.id),
                textures: this.assetsContext.textures.map((m)=>m.name),
                animations: this.assetsContext.animations.map((m)=>m.name),
                lights: this.assetsContext.lights.map((m)=>m.id),
                cameras: this.assetsContext.cameras.map((m)=>m.id),
                sounds: this.assetsContext.sounds?.map((m)=>m.name),
                skeletons: this.assetsContext.skeletons.map((m)=>m.id),
                particleSystems: this.assetsContext.particleSystems.map((m)=>m.name),
                geometries: this.assetsContext.geometries.map((m)=>m.id),
                multiMaterials: this.assetsContext.multiMaterials.map((m)=>m.id),
                transformNodes: this.assetsContext.transformNodes.map((m)=>m.id)
            };
        }
    }
    /**
     * @returns the class name of the object.
     */ getClassName() {
        return "FlowGraphContext";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], FlowGraphContext.prototype, "uniqueId", void 0); //# sourceMappingURL=flowGraphContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphConnection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphConnection",
    ()=>FlowGraphConnection,
    "FlowGraphConnectionType",
    ()=>FlowGraphConnectionType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/guid.js [app-ssr] (ecmascript)");
;
var FlowGraphConnectionType;
(function(FlowGraphConnectionType) {
    FlowGraphConnectionType[FlowGraphConnectionType["Input"] = 0] = "Input";
    FlowGraphConnectionType[FlowGraphConnectionType["Output"] = 1] = "Output";
})(FlowGraphConnectionType || (FlowGraphConnectionType = {}));
class FlowGraphConnection {
    constructor(name, _connectionType, /* @internal */ _ownerBlock){
        this._ownerBlock = _ownerBlock;
        /** @internal */ this._connectedPoint = [];
        /**
         * A uniquely identifying string for the connection.
         */ this.uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomGUID"])();
        /**
         * Used for parsing connections.
         * @internal
         */ // disable warning as this is used for parsing
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.connectedPointIds = [];
        this.name = name;
        this._connectionType = _connectionType;
    }
    /**
     * The type of the connection
     */ get connectionType() {
        return this._connectionType;
    }
    /**
     * @internal
     * Override this to indicate if a point can connect to more than one point.
     */ _isSingularConnection() {
        return true;
    }
    /**
     * Returns if a point is connected to any other point.
     * @returns boolean indicating if the point is connected.
     */ isConnected() {
        return this._connectedPoint.length > 0;
    }
    /**
     * Connects two connections together.
     * @param point the connection to connect to.
     */ connectTo(point) {
        if (this._connectionType === point._connectionType) {
            throw new Error(`Cannot connect two points of type ${this.connectionType}`);
        }
        if (this._isSingularConnection() && this._connectedPoint.length > 0 || point._isSingularConnection() && point._connectedPoint.length > 0) {
            throw new Error("Max number of connections for point reached");
        }
        this._connectedPoint.push(point);
        point._connectedPoint.push(this);
    }
    /**
     * Disconnects two connections.
     * @param point the connection to disconnect from.
     * @param removeFromLocal if true, the connection will be removed from the local connection list.
     */ disconnectFrom(point, removeFromLocal = true) {
        const indexLocal = this._connectedPoint.indexOf(point);
        const indexConnected = point._connectedPoint.indexOf(this);
        if (indexLocal === -1 || indexConnected === -1) {
            return;
        }
        if (removeFromLocal) {
            this._connectedPoint.splice(indexLocal, 1);
        }
        point._connectedPoint.splice(indexConnected, 1);
    }
    /**
     * Disconnects all connected points.
     */ disconnectFromAll() {
        for (const point of this._connectedPoint){
            this.disconnectFrom(point, false);
        }
        this._connectedPoint.length = 0;
    }
    dispose() {
        for (const point of this._connectedPoint){
            this.disconnectFrom(point);
        }
    }
    /**
     * Saves the connection to a JSON object.
     * @param serializationObject the object to serialize to.
     */ serialize(serializationObject = {}) {
        serializationObject.uniqueId = this.uniqueId;
        serializationObject.name = this.name;
        serializationObject._connectionType = this._connectionType;
        serializationObject.connectedPointIds = [];
        serializationObject.className = this.getClassName();
        for (const point of this._connectedPoint){
            serializationObject.connectedPointIds.push(point.uniqueId);
        }
    }
    /**
     * @returns class name of the connection.
     */ getClassName() {
        return "FGConnection";
    }
    /**
     * Deserialize from a object into this
     * @param serializationObject the object to deserialize from.
     */ deserialize(serializationObject) {
        this.uniqueId = serializationObject.uniqueId;
        this.name = serializationObject.name;
        this._connectionType = serializationObject._connectionType;
        this.connectedPointIds = serializationObject.connectedPointIds;
    }
} //# sourceMappingURL=flowGraphConnection.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphDataConnection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphDataConnection",
    ()=>FlowGraphDataConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/serialization.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphDataConnection extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConnection"] {
    /**
     * Create a new data connection point.
     * @param name the name of the connection
     * @param connectionType the type of the connection
     * @param ownerBlock the block that owns this connection
     * @param richType the type of the data in this block
     * @param _defaultValue the default value of the connection
     * @param _optional if the connection is optional
     */ constructor(name, connectionType, ownerBlock, /**
     * the type of the data in this block
     */ richType, /**
     * [any] the default value of the connection
     */ _defaultValue = richType.defaultValue, /**
     * [false] if the connection is optional
     */ _optional = false){
        super(name, connectionType, ownerBlock);
        this.richType = richType;
        this._defaultValue = _defaultValue;
        this._optional = _optional;
        this._isDisabled = false;
        /**
         * This is used for debugging purposes! It is the last value that was set to this connection with ANY context.
         * Do not use this value for anything else, as it might be wrong if used in a different context.
         */ this._lastValue = null;
        /**
         * a data transformer function, if needed.
         * This can be used, for example, to force seconds into milliseconds output, if it makes sense in your case.
         */ this.dataTransformer = null;
        /**
         * An observable that is triggered when the value of the connection changes.
         */ this.onValueChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
    }
    /**
     * Whether or not the connection is optional.
     * Currently only used for UI control.
     */ get optional() {
        return this._optional;
    }
    /**
     * is this connection disabled
     * If the connection is disabled you will not be able to connect anything to it.
     */ get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(value) {
        if (this._isDisabled === value) {
            return;
        }
        this._isDisabled = value;
        if (this._isDisabled) {
            this.disconnectFromAll();
        }
    }
    /**
     * An output data block can connect to multiple input data blocks,
     * but an input data block can only connect to one output data block.
     * @returns true if the connection is singular
     */ _isSingularConnection() {
        return this.connectionType === 0 /* FlowGraphConnectionType.Input */ ;
    }
    /**
     * Set the value of the connection in a specific context.
     * @param value the value to set
     * @param context the context to which the value is set
     */ setValue(value, context) {
        // check if the value is different
        if (context._getConnectionValue(this) === value) {
            return;
        }
        context._setConnectionValue(this, value);
        this.onValueChangedObservable.notifyObservers(value);
    }
    /**
     * Reset the value of the connection to the default value.
     * @param context the context in which the value is reset
     */ resetToDefaultValue(context) {
        context._setConnectionValue(this, this._defaultValue);
    }
    /**
     * Connect this point to another point.
     * @param point the point to connect to.
     */ connectTo(point) {
        if (this._isDisabled) {
            return;
        }
        super.connectTo(point);
    }
    _getValueOrDefault(context) {
        const val = context._getConnectionValue(this) ?? this._defaultValue;
        return this.dataTransformer ? this.dataTransformer(val) : val;
    }
    /**
     * Gets the value of the connection in a specific context.
     * @param context the context from which the value is retrieved
     * @returns the value of the connection
     */ getValue(context) {
        if (this.connectionType === 1 /* FlowGraphConnectionType.Output */ ) {
            context._notifyExecuteNode(this._ownerBlock);
            this._ownerBlock._updateOutputs(context);
            const value = this._getValueOrDefault(context);
            this._lastValue = value;
            return this.richType.typeTransformer ? this.richType.typeTransformer(value) : value;
        }
        const value = !this.isConnected() ? this._getValueOrDefault(context) : this._connectedPoint[0].getValue(context);
        this._lastValue = value;
        return this.richType.typeTransformer ? this.richType.typeTransformer(value) : value;
    }
    /**
     * @internal
     */ _getLastValue() {
        return this._lastValue;
    }
    /**
     * @returns class name of the object.
     */ getClassName() {
        return "FlowGraphDataConnection";
    }
    /**
     * Serializes this object.
     * @param serializationObject the object to serialize to
     */ serialize(serializationObject = {}) {
        super.serialize(serializationObject);
        serializationObject.richType = {};
        this.richType.serialize(serializationObject.richType);
        serializationObject.optional = this._optional;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultValueSerializationFunction"])("defaultValue", this._defaultValue, serializationObject);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphDataConnection", FlowGraphDataConnection); //# sourceMappingURL=flowGraphDataConnection.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphBlock",
    ()=>FlowGraphBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/guid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphDataConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphDataConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/serialization.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphBlock {
    /** Constructor is protected so only subclasses can be instantiated
     * @param config optional configuration for this block
     * @internal - do not use directly. Extend this class instead.
     */ constructor(/**
     * the configuration of the block
     */ config){
        this.config = config;
        /**
         * A randomly generated GUID for each block.
         */ this.uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomGUID"])();
        this.name = this.config?.name ?? this.getClassName();
        this.dataInputs = [];
        this.dataOutputs = [];
    }
    /**
     * @internal
     * This function is called when the block needs to update its output flows.
     * @param _context the context in which it is running
     */ _updateOutputs(_context) {
    // empty by default, overridden in data blocks
    }
    /**
     * Registers a data input on the block.
     * @param name the name of the input
     * @param richType the type of the input
     * @param defaultValue optional default value of the input. If not set, the rich type's default value will be used.
     * @returns the created connection
     */ registerDataInput(name, richType, defaultValue) {
        const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphDataConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDataConnection"](name, 0 /* FlowGraphConnectionType.Input */ , this, richType, defaultValue);
        this.dataInputs.push(input);
        return input;
    }
    /**
     * Registers a data output on the block.
     * @param name the name of the input
     * @param richType the type of the input
     * @param defaultValue optional default value of the input. If not set, the rich type's default value will be used.
     * @returns the created connection
     */ registerDataOutput(name, richType, defaultValue) {
        const output = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphDataConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDataConnection"](name, 1 /* FlowGraphConnectionType.Output */ , this, richType, defaultValue);
        this.dataOutputs.push(output);
        return output;
    }
    /**
     * Given the name of a data input, returns the connection if it exists
     * @param name the name of the input
     * @returns the connection if it exists, undefined otherwise
     */ getDataInput(name) {
        return this.dataInputs.find((i)=>i.name === name);
    }
    /**
     * Given the name of a data output, returns the connection if it exists
     * @param name the name of the output
     * @returns the connection if it exists, undefined otherwise
     */ getDataOutput(name) {
        return this.dataOutputs.find((i)=>i.name === name);
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     * @param _valueSerializeFunction a function that serializes a specific value
     */ serialize(serializationObject = {}, _valueSerializeFunction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultValueSerializationFunction"]) {
        serializationObject.uniqueId = this.uniqueId;
        serializationObject.config = {};
        if (this.config) {
            const config = this.config;
            const keys = Object.keys(config);
            for (const key of keys){
                _valueSerializeFunction(key, config[key], serializationObject.config);
            }
        }
        serializationObject.dataInputs = [];
        serializationObject.dataOutputs = [];
        serializationObject.className = this.getClassName();
        for (const input of this.dataInputs){
            const serializedInput = {};
            input.serialize(serializedInput);
            serializationObject.dataInputs.push(serializedInput);
        }
        for (const output of this.dataOutputs){
            const serializedOutput = {};
            output.serialize(serializedOutput);
            serializationObject.dataOutputs.push(serializedOutput);
        }
    }
    /**
     * Deserializes this block
     * @param _serializationObject the object to deserialize from
     */ deserialize(_serializationObject) {
    // no-op by default
    }
    _log(context, action, payload) {
        context.logger?.addLogItem({
            action,
            payload,
            className: this.getClassName(),
            uniqueId: this.uniqueId
        });
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return "FlowGraphBlock";
    }
} //# sourceMappingURL=flowGraphBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphSignalConnection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSignalConnection",
    ()=>FlowGraphSignalConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
class FlowGraphSignalConnection extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConnection"] {
    constructor(){
        super(...arguments);
        /**
         * The priority of the signal. Signals with higher priority will be executed first.
         * Set priority before adding the connection as sorting happens only when the connection is added.
         */ this.priority = 0;
    }
    _isSingularConnection() {
        return false;
    }
    connectTo(point) {
        super.connectTo(point);
        // sort according to priority to handle execution order
        this._connectedPoint.sort((a, b)=>b.priority - a.priority);
    }
    /**
     * @internal
     */ _activateSignal(context) {
        context.logger?.addLogItem({
            action: "ActivateSignal" /* FlowGraphAction.ActivateSignal */ ,
            className: this._ownerBlock.getClassName(),
            uniqueId: this._ownerBlock.uniqueId,
            payload: {
                connectionType: this.connectionType,
                name: this.name
            }
        });
        if (this.connectionType === 0 /* FlowGraphConnectionType.Input */ ) {
            context._notifyExecuteNode(this._ownerBlock);
            this._ownerBlock._execute(context, this);
            context._increaseExecutionId();
        } else {
            for (const connectedPoint of this._connectedPoint){
                connectedPoint._activateSignal(context);
            }
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSignalConnection", FlowGraphSignalConnection); //# sourceMappingURL=flowGraphSignalConnection.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphExecutionBlock",
    ()=>FlowGraphExecutionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphSignalConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphSignalConnection.js [app-ssr] (ecmascript)");
;
;
class FlowGraphExecutionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(config){
        super(config);
        /**
         * The priority of the block. Higher priority blocks will be executed first.
         * Note that priority cannot be change AFTER the block was added as sorting happens when the block is added to the execution queue.
         */ this.priority = 0;
        this.signalInputs = [];
        this.signalOutputs = [];
        this.in = this._registerSignalInput("in");
        this.error = this._registerSignalOutput("error");
    }
    _registerSignalInput(name) {
        const input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphSignalConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSignalConnection"](name, 0 /* FlowGraphConnectionType.Input */ , this);
        this.signalInputs.push(input);
        return input;
    }
    _registerSignalOutput(name) {
        const output = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphSignalConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSignalConnection"](name, 1 /* FlowGraphConnectionType.Output */ , this);
        this.signalOutputs.push(output);
        return output;
    }
    _unregisterSignalInput(name) {
        const index = this.signalInputs.findIndex((input)=>input.name === name);
        if (index !== -1) {
            this.signalInputs[index].dispose();
            this.signalInputs.splice(index, 1);
        }
    }
    _unregisterSignalOutput(name) {
        const index = this.signalOutputs.findIndex((output)=>output.name === name);
        if (index !== -1) {
            this.signalOutputs[index].dispose();
            this.signalOutputs.splice(index, 1);
        }
    }
    _reportError(context, error) {
        this.error.payload = typeof error === "string" ? new Error(error) : error;
        this.error._activateSignal(context);
    }
    /**
     * Given a name of a signal input, return that input if it exists
     * @param name the name of the input
     * @returns if the input exists, the input. Otherwise, undefined.
     */ getSignalInput(name) {
        return this.signalInputs.find((input)=>input.name === name);
    }
    /**
     * Given a name of a signal output, return that input if it exists
     * @param name the name of the input
     * @returns if the input exists, the input. Otherwise, undefined.
     */ getSignalOutput(name) {
        return this.signalOutputs.find((output)=>output.name === name);
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize in
     */ serialize(serializationObject = {}) {
        super.serialize(serializationObject);
        serializationObject.signalInputs = [];
        serializationObject.signalOutputs = [];
        for (const input of this.signalInputs){
            const serializedInput = {};
            input.serialize(serializedInput);
            serializationObject.signalInputs.push(serializedInput);
        }
        for (const output of this.signalOutputs){
            const serializedOutput = {};
            output.serialize(serializedOutput);
            serializationObject.signalOutputs.push(serializedOutput);
        }
    }
    /**
     * Deserializes from an object
     * @param serializationObject the object to deserialize from
     */ deserialize(serializationObject) {
        for(let i = 0; i < serializationObject.signalInputs.length; i++){
            const signalInput = this.getSignalInput(serializationObject.signalInputs[i].name);
            if (signalInput) {
                signalInput.deserialize(serializationObject.signalInputs[i]);
            } else {
                throw new Error("Could not find signal input with name " + serializationObject.signalInputs[i].name + " in block " + serializationObject.className);
            }
        }
        for(let i = 0; i < serializationObject.signalOutputs.length; i++){
            const signalOutput = this.getSignalOutput(serializationObject.signalOutputs[i].name);
            if (signalOutput) {
                signalOutput.deserialize(serializationObject.signalOutputs[i]);
            } else {
                throw new Error("Could not find signal output with name " + serializationObject.signalOutputs[i].name + " in block " + serializationObject.className);
            }
        }
    }
    /**
     * @returns the class name
     */ getClassName() {
        return "FlowGraphExecutionBlock";
    }
} //# sourceMappingURL=flowGraphExecutionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphSceneEventCoordinator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSceneEventCoordinator",
    ()=>FlowGraphSceneEventCoordinator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
;
;
class FlowGraphSceneEventCoordinator {
    constructor(scene){
        /**
         * register to this observable to get flow graph event notifications.
         */ this.onEventTriggeredObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Was scene-ready already triggered?
         */ this.sceneReadyTriggered = false;
        this._pointerUnderMeshState = {};
        this._startingTime = 0;
        this._scene = scene;
        this._initialize();
    }
    _initialize() {
        this._sceneReadyObserver = this._scene.onReadyObservable.add(()=>{
            if (!this.sceneReadyTriggered) {
                this.onEventTriggeredObservable.notifyObservers({
                    type: "SceneReady" /* FlowGraphEventType.SceneReady */ 
                });
                this.sceneReadyTriggered = true;
            }
        });
        this._sceneDisposeObserver = this._scene.onDisposeObservable.add(()=>{
            this.onEventTriggeredObservable.notifyObservers({
                type: "SceneDispose" /* FlowGraphEventType.SceneDispose */ 
            });
        });
        this._sceneOnBeforeRenderObserver = this._scene.onBeforeRenderObservable.add(()=>{
            const deltaTime = this._scene.getEngine().getDeltaTime() / 1000; // set in seconds
            this.onEventTriggeredObservable.notifyObservers({
                type: "SceneBeforeRender" /* FlowGraphEventType.SceneBeforeRender */ ,
                payload: {
                    timeSinceStart: this._startingTime,
                    deltaTime
                }
            });
            this._startingTime += deltaTime;
        });
        this._meshPickedObserver = this._scene.onPointerObservable.add((pointerInfo)=>{
            this.onEventTriggeredObservable.notifyObservers({
                type: "MeshPick" /* FlowGraphEventType.MeshPick */ ,
                payload: pointerInfo
            });
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERPICK); // should it be pointerdown?
        this._meshUnderPointerObserver = this._scene.onMeshUnderPointerUpdatedObservable.add((data)=>{
            // check if the data has changed. Check the state of the last change and see if it is a mesh or null.
            // if it is a mesh and the previous state was null, trigger over event. If it is null and the previous state was a mesh, trigger out event.
            // if it is a mesh and the previous state was a mesh, trigger out from the old mesh and over the new mesh
            // if it is null and the previous state was null, do nothing.
            const pointerId = data.pointerId;
            const mesh = data.mesh;
            const previousState = this._pointerUnderMeshState[pointerId];
            if (!previousState && mesh) {
                this.onEventTriggeredObservable.notifyObservers({
                    type: "PointerOver" /* FlowGraphEventType.PointerOver */ ,
                    payload: {
                        pointerId,
                        mesh
                    }
                });
            } else if (previousState && !mesh) {
                this.onEventTriggeredObservable.notifyObservers({
                    type: "PointerOut" /* FlowGraphEventType.PointerOut */ ,
                    payload: {
                        pointerId,
                        mesh: previousState
                    }
                });
            } else if (previousState && mesh && previousState !== mesh) {
                this.onEventTriggeredObservable.notifyObservers({
                    type: "PointerOut" /* FlowGraphEventType.PointerOut */ ,
                    payload: {
                        pointerId,
                        mesh: previousState,
                        over: mesh
                    }
                });
                this.onEventTriggeredObservable.notifyObservers({
                    type: "PointerOver" /* FlowGraphEventType.PointerOver */ ,
                    payload: {
                        pointerId,
                        mesh,
                        out: previousState
                    }
                });
            }
            this._pointerUnderMeshState[pointerId] = mesh;
        }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE);
    }
    dispose() {
        this._sceneDisposeObserver?.remove();
        this._sceneReadyObserver?.remove();
        this._sceneOnBeforeRenderObserver?.remove();
        this._meshPickedObserver?.remove();
        this._meshUnderPointerObserver?.remove();
        this.onEventTriggeredObservable.clear();
    }
} //# sourceMappingURL=flowGraphSceneEventCoordinator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 * Returns if mesh1 is a descendant of mesh2
 * @param mesh1
 * @param mesh2
 * @returns
 */ __turbopack_context__.s([
    "_AreSameIntegerClass",
    ()=>_AreSameIntegerClass,
    "_AreSameMatrixClass",
    ()=>_AreSameMatrixClass,
    "_AreSameVectorOrQuaternionClass",
    ()=>_AreSameVectorOrQuaternionClass,
    "_GetClassNameOf",
    ()=>_GetClassNameOf,
    "_IsDescendantOf",
    ()=>_IsDescendantOf,
    "getNumericValue",
    ()=>getNumericValue,
    "isNumeric",
    ()=>isNumeric
]);
function _IsDescendantOf(mesh1, mesh2) {
    return !!(mesh1.parent && (mesh1.parent === mesh2 || _IsDescendantOf(mesh1.parent, mesh2)));
}
function _GetClassNameOf(v) {
    if (v.getClassName) {
        return v.getClassName();
    }
    return;
}
function _AreSameVectorOrQuaternionClass(className, className2) {
    return className === className2 && (className === "Vector2" /* FlowGraphTypes.Vector2 */  || className === "Vector3" /* FlowGraphTypes.Vector3 */  || className === "Vector4" /* FlowGraphTypes.Vector4 */  || className === "Quaternion" /* FlowGraphTypes.Quaternion */ );
}
function _AreSameMatrixClass(className, className2) {
    return className === className2 && (className === "Matrix" /* FlowGraphTypes.Matrix */  || className === "Matrix2D" /* FlowGraphTypes.Matrix2D */  || className === "Matrix3D" /* FlowGraphTypes.Matrix3D */ );
}
function _AreSameIntegerClass(className, className2) {
    return className === "FlowGraphInteger" && className2 === "FlowGraphInteger";
}
function isNumeric(a, validIfNaN) {
    const isNumeric = typeof a === "number" || typeof a?.value === "number";
    if (isNumeric && !validIfNaN) {
        return !isNaN(getNumericValue(a));
    }
    return isNumeric;
}
function getNumericValue(a) {
    return typeof a === "number" ? a : a.value;
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraph.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraph",
    ()=>FlowGraph,
    "FlowGraphState",
    ()=>FlowGraphState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphSceneEventCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphSceneEventCoordinator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
var FlowGraphState;
(function(FlowGraphState) {
    /**
     * The graph is stopped
     */ FlowGraphState[FlowGraphState["Stopped"] = 0] = "Stopped";
    /**
     * The graph is running
     */ FlowGraphState[FlowGraphState["Started"] = 1] = "Started";
})(FlowGraphState || (FlowGraphState = {}));
class FlowGraph {
    /**
     * The state of the graph
     */ get state() {
        return this._state;
    }
    /**
     * The state of the graph
     */ set state(value) {
        this._state = value;
        this.onStateChangedObservable.notifyObservers(value);
    }
    /**
     * Construct a Flow Graph
     * @param params construction parameters. currently only the scene
     */ constructor(params){
        /**
         * An observable that is triggered when the state of the graph changes.
         */ this.onStateChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /** @internal */ this._eventBlocks = {
            ["SceneReady" /* FlowGraphEventType.SceneReady */ ]: [],
            ["SceneDispose" /* FlowGraphEventType.SceneDispose */ ]: [],
            ["SceneBeforeRender" /* FlowGraphEventType.SceneBeforeRender */ ]: [],
            ["MeshPick" /* FlowGraphEventType.MeshPick */ ]: [],
            ["PointerDown" /* FlowGraphEventType.PointerDown */ ]: [],
            ["PointerUp" /* FlowGraphEventType.PointerUp */ ]: [],
            ["PointerMove" /* FlowGraphEventType.PointerMove */ ]: [],
            ["PointerOver" /* FlowGraphEventType.PointerOver */ ]: [],
            ["PointerOut" /* FlowGraphEventType.PointerOut */ ]: [],
            ["SceneAfterRender" /* FlowGraphEventType.SceneAfterRender */ ]: [],
            ["NoTrigger" /* FlowGraphEventType.NoTrigger */ ]: []
        };
        this._executionContexts = [];
        /**
         * The state of the graph
         */ this._state = 0 /* FlowGraphState.Stopped */ ;
        this._scene = params.scene;
        this._sceneEventCoordinator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphSceneEventCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSceneEventCoordinator"](this._scene);
        this._coordinator = params.coordinator;
        this._eventObserver = this._sceneEventCoordinator.onEventTriggeredObservable.add((event)=>{
            for (const context of this._executionContexts){
                const order = this._getContextualOrder(event.type, context);
                for (const block of order){
                    // iterate contexts
                    if (!block._executeEvent(context, event.payload)) {
                        break;
                    }
                }
            }
            // custom behavior(s) of specific events
            switch(event.type){
                case "SceneReady" /* FlowGraphEventType.SceneReady */ :
                    this._sceneEventCoordinator.sceneReadyTriggered = true;
                    break;
                case "SceneBeforeRender" /* FlowGraphEventType.SceneBeforeRender */ :
                    for (const context of this._executionContexts){
                        context._notifyOnTick(event.payload);
                    }
                    break;
                case "SceneDispose" /* FlowGraphEventType.SceneDispose */ :
                    this.dispose();
                    break;
            }
        });
    }
    /**
     * Create a context. A context represents one self contained execution for the graph, with its own variables.
     * @returns the context, where you can get and set variables
     */ createContext() {
        const context = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphContext"]({
            scene: this._scene,
            coordinator: this._coordinator
        });
        this._executionContexts.push(context);
        return context;
    }
    /**
     * Returns the execution context at a given index
     * @param index the index of the context
     * @returns the execution context at that index
     */ getContext(index) {
        return this._executionContexts[index];
    }
    /**
     * Add an event block. When the graph is started, it will start listening to events
     * from the block and execute the graph when they are triggered.
     * @param block the event block to be added
     */ addEventBlock(block) {
        if (block.type === "PointerOver" /* FlowGraphEventType.PointerOver */  || block.type === "PointerOut" /* FlowGraphEventType.PointerOut */ ) {
            this._scene.constantlyUpdateMeshUnderPointer = true;
        }
        // don't add if NoTrigger, but still start the pending tasks
        if (block.type !== "NoTrigger" /* FlowGraphEventType.NoTrigger */ ) {
            this._eventBlocks[block.type].push(block);
        }
        // if already started, sort and add to the pending
        if (this.state === 1 /* FlowGraphState.Started */ ) {
            for (const context of this._executionContexts){
                block._startPendingTasks(context);
            }
        } else {
            this.onStateChangedObservable.addOnce((state)=>{
                if (state === 1 /* FlowGraphState.Started */ ) {
                    for (const context of this._executionContexts){
                        block._startPendingTasks(context);
                    }
                }
            });
        }
    }
    /**
     * Starts the flow graph. Initializes the event blocks and starts listening to events.
     */ start() {
        if (this.state === 1 /* FlowGraphState.Started */ ) {
            return;
        }
        if (this._executionContexts.length === 0) {
            this.createContext();
        }
        this.onStateChangedObservable.add((state)=>{
            if (state === 1 /* FlowGraphState.Started */ ) {
                this._startPendingEvents();
                // the only event we need to check is the scene ready event. If the scene is already ready when the graph starts, we should start the pending tasks.
                if (this._scene.isReady(true)) {
                    this._sceneEventCoordinator.onEventTriggeredObservable.notifyObservers({
                        type: "SceneReady" /* FlowGraphEventType.SceneReady */ 
                    });
                }
            }
        });
        this.state = 1 /* FlowGraphState.Started */ ;
    }
    _startPendingEvents() {
        for (const context of this._executionContexts){
            for(const type in this._eventBlocks){
                const order = this._getContextualOrder(type, context);
                for (const block of order){
                    block._startPendingTasks(context);
                }
            }
        }
    }
    _getContextualOrder(type, context) {
        const order = this._eventBlocks[type].sort((a, b)=>b.initPriority - a.initPriority);
        if (type === "MeshPick" /* FlowGraphEventType.MeshPick */ ) {
            const meshPickOrder = [];
            for (const block1 of order){
                // If the block is a mesh pick, guarantee that picks of children meshes come before picks of parent meshes
                const mesh1 = block1.asset.getValue(context);
                let i = 0;
                for(; i < order.length; i++){
                    const block2 = order[i];
                    const mesh2 = block2.asset.getValue(context);
                    if (mesh1 && mesh2 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_IsDescendantOf"])(mesh1, mesh2)) {
                        break;
                    }
                }
                meshPickOrder.splice(i, 0, block1);
            }
            return meshPickOrder;
        }
        return order;
    }
    /**
     * Disposes of the flow graph. Cancels any pending tasks and removes all event listeners.
     */ dispose() {
        if (this.state === 0 /* FlowGraphState.Stopped */ ) {
            return;
        }
        this.state = 0 /* FlowGraphState.Stopped */ ;
        for (const context of this._executionContexts){
            context._clearPendingBlocks();
        }
        this._executionContexts.length = 0;
        for(const type in this._eventBlocks){
            this._eventBlocks[type].length = 0;
        }
        this._eventObserver?.remove();
        this._sceneEventCoordinator.dispose();
    }
    /**
     * Executes a function in all blocks of a flow graph, starting with the event blocks.
     * @param visitor the function to execute.
     */ visitAllBlocks(visitor) {
        const visitList = [];
        const idsAddedToVisitList = new Set();
        for(const type in this._eventBlocks){
            for (const block of this._eventBlocks[type]){
                visitList.push(block);
                idsAddedToVisitList.add(block.uniqueId);
            }
        }
        while(visitList.length > 0){
            const block = visitList.pop();
            visitor(block);
            for (const dataIn of block.dataInputs){
                for (const connection of dataIn._connectedPoint){
                    if (!idsAddedToVisitList.has(connection._ownerBlock.uniqueId)) {
                        visitList.push(connection._ownerBlock);
                        idsAddedToVisitList.add(connection._ownerBlock.uniqueId);
                    }
                }
            }
            if (block instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"]) {
                for (const signalOut of block.signalOutputs){
                    for (const connection of signalOut._connectedPoint){
                        if (!idsAddedToVisitList.has(connection._ownerBlock.uniqueId)) {
                            visitList.push(connection._ownerBlock);
                            idsAddedToVisitList.add(connection._ownerBlock.uniqueId);
                        }
                    }
                }
            }
        }
    }
    /**
     * Serializes a graph
     * @param serializationObject the object to write the values in
     * @param valueSerializeFunction a function to serialize complex values
     */ serialize(serializationObject = {}, valueSerializeFunction) {
        serializationObject.allBlocks = [];
        this.visitAllBlocks((block)=>{
            const serializedBlock = {};
            block.serialize(serializedBlock);
            serializationObject.allBlocks.push(serializedBlock);
        });
        serializationObject.executionContexts = [];
        for (const context of this._executionContexts){
            const serializedContext = {};
            context.serialize(serializedContext, valueSerializeFunction);
            serializationObject.executionContexts.push(serializedContext);
        }
    }
} //# sourceMappingURL=flowGraph.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphExecutionBlockWithOutSignal",
    ()=>FlowGraphExecutionBlockWithOutSignal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
;
class FlowGraphExecutionBlockWithOutSignal extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"] {
    constructor(config){
        super(config);
        this.out = this._registerSignalOutput("out");
    }
} //# sourceMappingURL=flowGraphExecutionBlockWithOutSignal.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAsyncExecutionBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphAsyncExecutionBlock",
    ()=>FlowGraphAsyncExecutionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
;
class FlowGraphAsyncExecutionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config, events){
        super(config);
        this._eventsSignalOutputs = {};
        this.done = this._registerSignalOutput("done");
        if (events) {
            for (const eventName of events){
                this._eventsSignalOutputs[eventName] = this._registerSignalOutput(eventName + "Event");
            }
        }
    }
    /**
     * @internal
     * This function can be overridden to execute any
     * logic that should be executed on every frame
     * while the async task is pending.
     * @param context the context in which it is running
     */ _executeOnTick(_context) {}
    /**
     * @internal
     * @param context
     */ _startPendingTasks(context) {
        if (context._getExecutionVariable(this, "_initialized", false)) {
            this._cancelPendingTasks(context);
            this._resetAfterCanceled(context);
        }
        this._preparePendingTasks(context);
        context._addPendingBlock(this);
        this.out._activateSignal(context);
        context._setExecutionVariable(this, "_initialized", true);
    }
    _resetAfterCanceled(context) {
        context._deleteExecutionVariable(this, "_initialized");
        context._removePendingBlock(this);
    }
} //# sourceMappingURL=flowGraphAsyncExecutionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphEventBlock",
    ()=>FlowGraphEventBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAsyncExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAsyncExecutionBlock.js [app-ssr] (ecmascript)");
;
class FlowGraphEventBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAsyncExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsyncExecutionBlock"] {
    constructor(){
        super(...arguments);
        /**
         * the priority of initialization of this block.
         * For example, scene start should have a negative priority because it should be initialized last.
         */ this.initPriority = 0;
        /**
         * The type of the event
         */ this.type = "NoTrigger" /* FlowGraphEventType.NoTrigger */ ;
    }
    /**
     * @internal
     */ _execute(context) {
        context._notifyExecuteNode(this);
        this.done._activateSignal(context);
    }
} //# sourceMappingURL=flowGraphEventBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphCoordinator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphCoordinator",
    ()=>FlowGraphCoordinator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphCoordinator {
    constructor(/**
     * the configuration of the block
     */ config){
        this.config = config;
        /**
         * When set to true (default) custom events will be dispatched synchronously.
         * This means that the events will be dispatched immediately when they are triggered.
         */ this.dispatchEventsSynchronously = true;
        this._flowGraphs = [];
        this._customEventsMap = new Map();
        this._eventExecutionCounter = new Map();
        this._executeOnNextFrame = [];
        this._eventUniqueId = 0;
        // When the scene is disposed, dispose all graphs currently running on it.
        this._disposeObserver = this.config.scene.onDisposeObservable.add(()=>{
            this.dispose();
        });
        this._onBeforeRenderObserver = this.config.scene.onBeforeRenderObservable.add(()=>{
            // Reset the event execution counter at the beginning of each frame.
            this._eventExecutionCounter.clear();
            // duplicate the _executeOnNextFrame array to avoid modifying it while iterating over it
            const executeOnNextFrame = this._executeOnNextFrame.slice(0);
            if (executeOnNextFrame.length) {
                // Execute the events that were triggered on the next frame.
                for (const event of executeOnNextFrame){
                    this.notifyCustomEvent(event.id, event.data, false);
                    // remove the event from the array
                    const index = this._executeOnNextFrame.findIndex((e)=>e.uniqueId === event.uniqueId);
                    if (index !== -1) {
                        this._executeOnNextFrame.splice(index, 1);
                    }
                }
            }
        });
        // Add itself to the SceneCoordinators list for the Inspector.
        const coordinators = FlowGraphCoordinator.SceneCoordinators.get(this.config.scene) ?? [];
        coordinators.push(this);
    }
    /**
     * Creates a new flow graph and adds it to the list of existing flow graphs
     * @returns a new flow graph
     */ createGraph() {
        const graph = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraph"]({
            scene: this.config.scene,
            coordinator: this
        });
        this._flowGraphs.push(graph);
        return graph;
    }
    /**
     * Removes a flow graph from the list of existing flow graphs and disposes it
     * @param graph the graph to remove
     */ removeGraph(graph) {
        const index = this._flowGraphs.indexOf(graph);
        if (index !== -1) {
            graph.dispose();
            this._flowGraphs.splice(index, 1);
        }
    }
    /**
     * Starts all graphs
     */ start() {
        for (const graph of this._flowGraphs){
            graph.start();
        }
    }
    /**
     * Disposes all graphs
     */ dispose() {
        for (const graph of this._flowGraphs){
            graph.dispose();
        }
        this._flowGraphs.length = 0;
        this._disposeObserver?.remove();
        this._onBeforeRenderObserver?.remove();
        // Remove itself from the SceneCoordinators list for the Inspector.
        const coordinators = FlowGraphCoordinator.SceneCoordinators.get(this.config.scene) ?? [];
        const index = coordinators.indexOf(this);
        if (index !== -1) {
            coordinators.splice(index, 1);
        }
    }
    /**
     * Serializes this coordinator to a JSON object.
     * @param serializationObject the object to serialize to
     * @param valueSerializeFunction the function to use to serialize the value
     */ serialize(serializationObject, valueSerializeFunction) {
        serializationObject._flowGraphs = [];
        for (const graph of this._flowGraphs){
            const serializedGraph = {};
            graph.serialize(serializedGraph, valueSerializeFunction);
            serializationObject._flowGraphs.push(serializedGraph);
        }
        serializationObject.dispatchEventsSynchronously = this.dispatchEventsSynchronously;
    }
    /**
     * Gets the list of flow graphs
     */ get flowGraphs() {
        return this._flowGraphs;
    }
    /**
     * Get an observable that will be notified when the event with the given id is fired.
     * @param id the id of the event
     * @returns the observable for the event
     */ getCustomEventObservable(id) {
        let observable = this._customEventsMap.get(id);
        if (!observable) {
            // receive event is initialized before scene start, so no need to notify if triggered. but possible!
            observable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
            this._customEventsMap.set(id, observable);
        }
        return observable;
    }
    /**
     * Notifies the observable for the given event id with the given data.
     * @param id the id of the event
     * @param data the data to send with the event
     * @param async if true, the event will be dispatched asynchronously
     */ notifyCustomEvent(id, data, async = !this.dispatchEventsSynchronously) {
        if (async) {
            this._executeOnNextFrame.push({
                id,
                data,
                uniqueId: this._eventUniqueId++
            });
            return;
        }
        // check if we are not exceeding the max number of events
        if (this._eventExecutionCounter.has(id)) {
            const count = this._eventExecutionCounter.get(id);
            this._eventExecutionCounter.set(id, count + 1);
            if (count >= FlowGraphCoordinator.MaxEventTypeExecutionPerFrame) {
                if (count === FlowGraphCoordinator.MaxEventTypeExecutionPerFrame) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`FlowGraphCoordinator: Too many executions of event "${id}".`);
                }
                return;
            }
        } else {
            this._eventExecutionCounter.set(id, 1);
        }
        const observable = this._customEventsMap.get(id);
        if (observable) {
            observable.notifyObservers(data);
        }
    }
}
/**
 * The maximum number of events per type.
 * This is used to limit the number of events that can be created in a single scene.
 * This is to prevent infinite loops.
 */ FlowGraphCoordinator.MaxEventsPerType = 30;
/**
 * The maximum number of execution of a specific event in a single frame.
 */ FlowGraphCoordinator.MaxEventTypeExecutionPerFrame = 30;
/**
 * @internal
 * A list of all the coordinators per scene. Will be used by the inspector
 */ FlowGraphCoordinator.SceneCoordinators = new Map(); //# sourceMappingURL=flowGraphCoordinator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/typeDefinitions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=typeDefinitions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/flowGraphBlockFactory.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Any external module that wishes to add a new block to the flow graph can add to this object using the helper function.
 */ __turbopack_context__.s([
    "addToBlockFactory",
    ()=>addToBlockFactory,
    "blockFactory",
    ()=>blockFactory
]);
const CustomBlocks = {};
function addToBlockFactory(module, blockName, factory) {
    CustomBlocks[`${module}/${blockName}`] = factory;
}
function blockFactory(blockName) {
    switch(blockName){
        case "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphPlayAnimationBlock;
        case "FlowGraphStopAnimationBlock" /* FlowGraphBlockNames.StopAnimation */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphStopAnimationBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphStopAnimationBlock;
        case "FlowGraphPauseAnimationBlock" /* FlowGraphBlockNames.PauseAnimation */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPauseAnimationBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphPauseAnimationBlock;
        case "FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphInterpolationBlock;
        case "FlowGraphSceneReadyEventBlock" /* FlowGraphBlockNames.SceneReadyEvent */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSceneReadyEventBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphSceneReadyEventBlock;
        case "FlowGraphSceneTickEventBlock" /* FlowGraphBlockNames.SceneTickEvent */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSceneTickEventBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphSceneTickEventBlock;
        case "FlowGraphSendCustomEventBlock" /* FlowGraphBlockNames.SendCustomEvent */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphSendCustomEventBlock;
        case "FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphReceiveCustomEventBlock;
        case "FlowGraphMeshPickEventBlock" /* FlowGraphBlockNames.MeshPickEvent */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphMeshPickEventBlock;
        case "FlowGraphEBlock" /* FlowGraphBlockNames.E */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphEBlock;
        case "FlowGraphPIBlock" /* FlowGraphBlockNames.PI */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphPiBlock;
        case "FlowGraphInfBlock" /* FlowGraphBlockNames.Inf */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphInfBlock;
        case "FlowGraphNaNBlock" /* FlowGraphBlockNames.NaN */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphNaNBlock;
        case "FlowGraphRandomBlock" /* FlowGraphBlockNames.Random */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphRandomBlock;
        case "FlowGraphAddBlock" /* FlowGraphBlockNames.Add */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAddBlock;
        case "FlowGraphSubtractBlock" /* FlowGraphBlockNames.Subtract */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphSubtractBlock;
        case "FlowGraphMultiplyBlock" /* FlowGraphBlockNames.Multiply */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphMultiplyBlock;
        case "FlowGraphDivideBlock" /* FlowGraphBlockNames.Divide */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphDivideBlock;
        case "FlowGraphAbsBlock" /* FlowGraphBlockNames.Abs */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAbsBlock;
        case "FlowGraphSignBlock" /* FlowGraphBlockNames.Sign */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphSignBlock;
        case "FlowGraphTruncBlock" /* FlowGraphBlockNames.Trunc */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphTruncBlock;
        case "FlowGraphFloorBlock" /* FlowGraphBlockNames.Floor */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphFloorBlock;
        case "FlowGraphCeilBlock" /* FlowGraphBlockNames.Ceil */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCeilBlock;
        case "FlowGraphRoundBlock" /* FlowGraphBlockNames.Round */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphRoundBlock;
        case "FlowGraphFractBlock" /* FlowGraphBlockNames.Fraction */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphFractionBlock;
        case "FlowGraphNegationBlock" /* FlowGraphBlockNames.Negation */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphNegationBlock;
        case "FlowGraphModuloBlock" /* FlowGraphBlockNames.Modulo */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphModuloBlock;
        case "FlowGraphMinBlock" /* FlowGraphBlockNames.Min */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphMinBlock;
        case "FlowGraphMaxBlock" /* FlowGraphBlockNames.Max */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphMaxBlock;
        case "FlowGraphClampBlock" /* FlowGraphBlockNames.Clamp */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphClampBlock;
        case "FlowGraphSaturateBlock" /* FlowGraphBlockNames.Saturate */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphSaturateBlock;
        case "FlowGraphMathInterpolationBlock" /* FlowGraphBlockNames.MathInterpolation */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphMathInterpolationBlock;
        case "FlowGraphEqualityBlock" /* FlowGraphBlockNames.Equality */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphEqualityBlock;
        case "FlowGraphLessThanBlock" /* FlowGraphBlockNames.LessThan */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphLessThanBlock;
        case "FlowGraphLessThanOrEqualBlock" /* FlowGraphBlockNames.LessThanOrEqual */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphLessThanOrEqualBlock;
        case "FlowGraphGreaterThanBlock" /* FlowGraphBlockNames.GreaterThan */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphGreaterThanBlock;
        case "FlowGraphGreaterThanOrEqualBlock" /* FlowGraphBlockNames.GreaterThanOrEqual */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphGreaterThanOrEqualBlock;
        case "FlowGraphIsNaNBlock" /* FlowGraphBlockNames.IsNaN */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphIsNanBlock;
        case "FlowGraphIsInfBlock" /* FlowGraphBlockNames.IsInfinity */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphIsInfinityBlock;
        case "FlowGraphDegToRadBlock" /* FlowGraphBlockNames.DegToRad */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphDegToRadBlock;
        case "FlowGraphRadToDegBlock" /* FlowGraphBlockNames.RadToDeg */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphRadToDegBlock;
        case "FlowGraphSinBlock" /* FlowGraphBlockNames.Sin */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphSinBlock;
        case "FlowGraphCosBlock" /* FlowGraphBlockNames.Cos */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCosBlock;
        case "FlowGraphTanBlock" /* FlowGraphBlockNames.Tan */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphTanBlock;
        case "FlowGraphASinBlock" /* FlowGraphBlockNames.Asin */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAsinBlock;
        case "FlowGraphACosBlock" /* FlowGraphBlockNames.Acos */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAcosBlock;
        case "FlowGraphATanBlock" /* FlowGraphBlockNames.Atan */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAtanBlock;
        case "FlowGraphATan2Block" /* FlowGraphBlockNames.Atan2 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAtan2Block;
        case "FlowGraphSinhBlock" /* FlowGraphBlockNames.Sinh */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphSinhBlock;
        case "FlowGraphCoshBlock" /* FlowGraphBlockNames.Cosh */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCoshBlock;
        case "FlowGraphTanhBlock" /* FlowGraphBlockNames.Tanh */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphTanhBlock;
        case "FlowGraphASinhBlock" /* FlowGraphBlockNames.Asinh */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAsinhBlock;
        case "FlowGraphACoshBlock" /* FlowGraphBlockNames.Acosh */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAcoshBlock;
        case "FlowGraphATanhBlock" /* FlowGraphBlockNames.Atanh */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAtanhBlock;
        case "FlowGraphExponentialBlock" /* FlowGraphBlockNames.Exponential */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphExpBlock;
        case "FlowGraphLogBlock" /* FlowGraphBlockNames.Log */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphLogBlock;
        case "FlowGraphLog2Block" /* FlowGraphBlockNames.Log2 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphLog2Block;
        case "FlowGraphLog10Block" /* FlowGraphBlockNames.Log10 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphLog10Block;
        case "FlowGraphSquareRootBlock" /* FlowGraphBlockNames.SquareRoot */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphSquareRootBlock;
        case "FlowGraphPowerBlock" /* FlowGraphBlockNames.Power */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphPowerBlock;
        case "FlowGraphCubeRootBlock" /* FlowGraphBlockNames.CubeRoot */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCubeRootBlock;
        case "FlowGraphBitwiseAndBlock" /* FlowGraphBlockNames.BitwiseAnd */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphBitwiseAndBlock;
        case "FlowGraphBitwiseOrBlock" /* FlowGraphBlockNames.BitwiseOr */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphBitwiseOrBlock;
        case "FlowGraphBitwiseNotBlock" /* FlowGraphBlockNames.BitwiseNot */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphBitwiseNotBlock;
        case "FlowGraphBitwiseXorBlock" /* FlowGraphBlockNames.BitwiseXor */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphBitwiseXorBlock;
        case "FlowGraphBitwiseLeftShiftBlock" /* FlowGraphBlockNames.BitwiseLeftShift */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphBitwiseLeftShiftBlock;
        case "FlowGraphBitwiseRightShiftBlock" /* FlowGraphBlockNames.BitwiseRightShift */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphBitwiseRightShiftBlock;
        case "FlowGraphLengthBlock" /* FlowGraphBlockNames.Length */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphLengthBlock;
        case "FlowGraphNormalizeBlock" /* FlowGraphBlockNames.Normalize */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphNormalizeBlock;
        case "FlowGraphDotBlock" /* FlowGraphBlockNames.Dot */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphDotBlock;
        case "FlowGraphCrossBlock" /* FlowGraphBlockNames.Cross */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCrossBlock;
        case "FlowGraphRotate2DBlock" /* FlowGraphBlockNames.Rotate2D */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphRotate2DBlock;
        case "FlowGraphRotate3DBlock" /* FlowGraphBlockNames.Rotate3D */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphRotate3DBlock;
        case "FlowGraphTransposeBlock" /* FlowGraphBlockNames.Transpose */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphTransposeBlock;
        case "FlowGraphDeterminantBlock" /* FlowGraphBlockNames.Determinant */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphDeterminantBlock;
        case "FlowGraphInvertMatrixBlock" /* FlowGraphBlockNames.InvertMatrix */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphInvertMatrixBlock;
        case "FlowGraphMatrixMultiplicationBlock" /* FlowGraphBlockNames.MatrixMultiplication */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphMatrixMultiplicationBlock;
        case "FlowGraphBranchBlock" /* FlowGraphBlockNames.Branch */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphBranchBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphBranchBlock;
        case "FlowGraphSetDelayBlock" /* FlowGraphBlockNames.SetDelay */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSetDelayBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphSetDelayBlock;
        case "FlowGraphCancelDelayBlock" /* FlowGraphBlockNames.CancelDelay */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCancelDelayBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphCancelDelayBlock;
        case "FlowGraphCallCounterBlock" /* FlowGraphBlockNames.CallCounter */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCounterBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphCallCounterBlock;
        case "FlowGraphDebounceBlock" /* FlowGraphBlockNames.Debounce */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDebounceBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphDebounceBlock;
        case "FlowGraphThrottleBlock" /* FlowGraphBlockNames.Throttle */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphThrottleBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphThrottleBlock;
        case "FlowGraphDoNBlock" /* FlowGraphBlockNames.DoN */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphDoNBlock;
        case "FlowGraphFlipFlopBlock" /* FlowGraphBlockNames.FlipFlop */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphFlipFlopBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphFlipFlopBlock;
        case "FlowGraphForLoopBlock" /* FlowGraphBlockNames.ForLoop */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphForLoopBlock;
        case "FlowGraphMultiGateBlock" /* FlowGraphBlockNames.MultiGate */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphMultiGateBlock;
        case "FlowGraphSequenceBlock" /* FlowGraphBlockNames.Sequence */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphSequenceBlock;
        case "FlowGraphSwitchBlock" /* FlowGraphBlockNames.Switch */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSwitchBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphSwitchBlock;
        case "FlowGraphWaitAllBlock" /* FlowGraphBlockNames.WaitAll */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphWaitAllBlock;
        case "FlowGraphWhileLoopBlock" /* FlowGraphBlockNames.WhileLoop */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphWhileLoopBlock;
        case "FlowGraphConsoleLogBlock" /* FlowGraphBlockNames.ConsoleLog */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphConsoleLogBlock;
        case "FlowGraphConditionalBlock" /* FlowGraphBlockNames.Conditional */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConditionalDataBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphConditionalDataBlock;
        case "FlowGraphConstantBlock" /* FlowGraphBlockNames.Constant */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConstantBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphConstantBlock;
        case "FlowGraphTransformCoordinatesSystemBlock" /* FlowGraphBlockNames.TransformCoordinatesSystem */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphTransformCoordinatesSystemBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphTransformCoordinatesSystemBlock;
        case "FlowGraphGetAssetBlock" /* FlowGraphBlockNames.GetAsset */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphGetAssetBlock;
        case "FlowGraphGetPropertyBlock" /* FlowGraphBlockNames.GetProperty */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphGetPropertyBlock;
        case "FlowGraphSetPropertyBlock" /* FlowGraphBlockNames.SetProperty */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphSetPropertyBlock;
        case "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphGetVariableBlock;
        case "FlowGraphSetVariableBlock" /* FlowGraphBlockNames.SetVariable */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphSetVariableBlock;
        case "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphJsonPointerParserBlock;
        case "FlowGraphLeadingZerosBlock" /* FlowGraphBlockNames.LeadingZeros */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphLeadingZerosBlock;
        case "FlowGraphTrailingZerosBlock" /* FlowGraphBlockNames.TrailingZeros */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphTrailingZerosBlock;
        case "FlowGraphOneBitsCounterBlock" /* FlowGraphBlockNames.OneBitsCounter */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphOneBitsCounterBlock;
        case "FlowGraphCombineVector2Block" /* FlowGraphBlockNames.CombineVector2 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCombineVector2Block;
        case "FlowGraphCombineVector3Block" /* FlowGraphBlockNames.CombineVector3 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCombineVector3Block;
        case "FlowGraphCombineVector4Block" /* FlowGraphBlockNames.CombineVector4 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCombineVector4Block;
        case "FlowGraphCombineMatrixBlock" /* FlowGraphBlockNames.CombineMatrix */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphCombineMatrixBlock;
        case "FlowGraphExtractVector2Block" /* FlowGraphBlockNames.ExtractVector2 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphExtractVector2Block;
        case "FlowGraphExtractVector3Block" /* FlowGraphBlockNames.ExtractVector3 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphExtractVector3Block;
        case "FlowGraphExtractVector4Block" /* FlowGraphBlockNames.ExtractVector4 */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphExtractVector4Block;
        case "FlowGraphExtractMatrixBlock" /* FlowGraphBlockNames.ExtractMatrix */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphExtractMatrixBlock;
        case "FlowGraphTransformVectorBlock" /* FlowGraphBlockNames.TransformVector */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphTransformBlock;
        case "FlowGraphTransformCoordinatesBlock" /* FlowGraphBlockNames.TransformCoordinates */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphTransformCoordinatesBlock;
        case "FlowGraphConjugateBlock" /* FlowGraphBlockNames.Conjugate */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphConjugateBlock;
        case "FlowGraphAngleBetweenBlock" /* FlowGraphBlockNames.AngleBetween */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAngleBetweenBlock;
        case "FlowGraphQuaternionFromAxisAngleBlock" /* FlowGraphBlockNames.QuaternionFromAxisAngle */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphQuaternionFromAxisAngleBlock;
        case "FlowGraphAxisAngleFromQuaternionBlock" /* FlowGraphBlockNames.AxisAngleFromQuaternion */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphAxisAngleFromQuaternionBlock;
        case "FlowGraphQuaternionFromDirectionsBlock" /* FlowGraphBlockNames.QuaternionFromDirections */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphQuaternionFromDirectionsBlock;
        case "FlowGraphMatrixDecompose" /* FlowGraphBlockNames.MatrixDecompose */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphMatrixDecomposeBlock;
        case "FlowGraphMatrixCompose" /* FlowGraphBlockNames.MatrixCompose */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphMatrixComposeBlock;
        case "FlowGraphBooleanToFloat" /* FlowGraphBlockNames.BooleanToFloat */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphBooleanToFloat;
        case "FlowGraphBooleanToInt" /* FlowGraphBlockNames.BooleanToInt */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphBooleanToInt;
        case "FlowGraphFloatToBoolean" /* FlowGraphBlockNames.FloatToBoolean */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphFloatToBoolean;
        case "FlowGraphIntToBoolean" /* FlowGraphBlockNames.IntToBoolean */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphIntToBoolean;
        case "FlowGraphIntToFloat" /* FlowGraphBlockNames.IntToFloat */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphIntToFloat;
        case "FlowGraphFloatToInt" /* FlowGraphBlockNames.FloatToInt */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript, async loader)")).FlowGraphFloatToInt;
        case "FlowGraphEasingBlock" /* FlowGraphBlockNames.Easing */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphEasingBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphEasingBlock;
        case "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphBezierCurveEasingBlock;
        case "FlowGraphPointerOverEventBlock" /* FlowGraphBlockNames.PointerOverEvent */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphPointerOverEventBlock;
        case "FlowGraphPointerOutEventBlock" /* FlowGraphBlockNames.PointerOutEvent */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphPointerOutEventBlock;
        case "FlowGraphContextBlock" /* FlowGraphBlockNames.Context */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphContextBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphContextBlock;
        case "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphArrayIndexBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphArrayIndexBlock;
        case "FlowGraphCodeExecutionBlock" /* FlowGraphBlockNames.CodeExecution */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphCodeExecutionBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphCodeExecutionBlock;
        case "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphIndexOfBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphIndexOfBlock;
        case "FlowGraphFunctionReference" /* FlowGraphBlockNames.FunctionReference */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphFunctionReferenceBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphFunctionReferenceBlock;
        case "FlowGraphDataSwitchBlock" /* FlowGraphBlockNames.DataSwitch */ :
            return async ()=>(await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.js [app-ssr] (ecmascript, async loader)")).FlowGraphDataSwitchBlock;
        default:
            // check if the block is a custom block
            if (CustomBlocks[blockName]) {
                return CustomBlocks[blockName];
            }
            throw new Error(`Unknown block name ${blockName}`);
    }
} //# sourceMappingURL=flowGraphBlockFactory.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphParser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetDataOutConnectionByUniqueId",
    ()=>GetDataOutConnectionByUniqueId,
    "GetSignalInConnectionByUniqueId",
    ()=>GetSignalInConnectionByUniqueId,
    "ParseBlockAsync",
    ()=>ParseBlockAsync,
    "ParseCoordinatorAsync",
    ()=>ParseCoordinatorAsync,
    "ParseFlowGraph",
    ()=>ParseFlowGraph,
    "ParseFlowGraphAsync",
    ()=>ParseFlowGraphAsync,
    "ParseFlowGraphBlockWithClassType",
    ()=>ParseFlowGraphBlockWithClassType,
    "ParseFlowGraphContext",
    ()=>ParseFlowGraphContext,
    "ParseGraphConnectionWithClassType",
    ()=>ParseGraphConnectionWithClassType,
    "ParseGraphDataConnection",
    ()=>ParseGraphDataConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/flowGraphBlockFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphCoordinator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function GetDataOutConnectionByUniqueId(blocks, uniqueId) {
    for (const block of blocks){
        for (const dataOut of block.dataOutputs){
            if (dataOut.uniqueId === uniqueId) {
                return dataOut;
            }
        }
    }
    throw new Error("Could not find data out connection with unique id " + uniqueId);
}
function GetSignalInConnectionByUniqueId(blocks, uniqueId) {
    for (const block of blocks){
        if (block instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"]) {
            for (const signalIn of block.signalInputs){
                if (signalIn.uniqueId === uniqueId) {
                    return signalIn;
                }
            }
        }
    }
    throw new Error("Could not find signal in connection with unique id " + uniqueId);
}
async function ParseCoordinatorAsync(serializedObject, options) {
    const valueParseFunction = options.valueParseFunction ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultValueParseFunction"];
    const coordinator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCoordinator"]({
        scene: options.scene
    });
    if (serializedObject.dispatchEventsSynchronously) {
        coordinator.dispatchEventsSynchronously = serializedObject.dispatchEventsSynchronously;
    }
    await options.scene.whenReadyAsync();
    // if custom default values are defined, set them in the global context
    if (serializedObject._defaultValues) {
        for(const key in serializedObject._defaultValues){
            // key is the FlowGraphType, value is the default value
            const value = serializedObject._defaultValues[key];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(key).defaultValue = value;
        }
    }
    // async-parse the flow graphs. This can be done in parallel
    await Promise.all(serializedObject._flowGraphs?.map(async (serializedGraph)=>await ParseFlowGraphAsync(serializedGraph, {
            coordinator,
            valueParseFunction,
            pathConverter: options.pathConverter
        })));
    return coordinator;
}
async function ParseFlowGraphAsync(serializationObject, options) {
    // get all classes types needed for the blocks using the block factory
    const resolvedClasses = await Promise.all(serializationObject.allBlocks.map(async (serializedBlock)=>{
        const classFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockFactory"])(serializedBlock.className);
        return await classFactory();
    }));
    // async will be used when we start using the block async factory
    return ParseFlowGraph(serializationObject, options, resolvedClasses);
}
function ParseFlowGraph(serializationObject, options, resolvedClasses) {
    const graph = options.coordinator.createGraph();
    const blocks = [];
    const valueParseFunction = options.valueParseFunction ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultValueParseFunction"];
    // Parse all blocks
    // for (const serializedBlock of serializationObject.allBlocks) {
    for(let i = 0; i < serializationObject.allBlocks.length; i++){
        const serializedBlock = serializationObject.allBlocks[i];
        const block = ParseFlowGraphBlockWithClassType(serializedBlock, {
            scene: options.coordinator.config.scene,
            pathConverter: options.pathConverter,
            assetsContainer: options.coordinator.config.scene,
            valueParseFunction
        }, resolvedClasses[i]);
        blocks.push(block);
        if (block instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEventBlock"]) {
            graph.addEventBlock(block);
        }
    }
    // After parsing all blocks, connect them
    for (const block of blocks){
        for (const dataIn of block.dataInputs){
            for (const serializedConnection of dataIn.connectedPointIds){
                const connection = GetDataOutConnectionByUniqueId(blocks, serializedConnection);
                dataIn.connectTo(connection);
            }
        }
        if (block instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"]) {
            for (const signalOut of block.signalOutputs){
                for (const serializedConnection of signalOut.connectedPointIds){
                    const connection = GetSignalInConnectionByUniqueId(blocks, serializedConnection);
                    signalOut.connectTo(connection);
                }
            }
        }
    }
    for (const serializedContext of serializationObject.executionContexts){
        ParseFlowGraphContext(serializedContext, {
            graph,
            valueParseFunction
        }, serializationObject.rightHanded);
    }
    return graph;
}
function ParseFlowGraphContext(serializationObject, options, rightHanded) {
    const result = options.graph.createContext();
    if (serializationObject.enableLogging) {
        result.enableLogging = true;
    }
    result.treatDataAsRightHanded = rightHanded || false;
    const valueParseFunction = options.valueParseFunction ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultValueParseFunction"];
    result.uniqueId = serializationObject.uniqueId;
    const scene = result.getScene();
    // check if assets context is available
    if (serializationObject._assetsContext) {
        const ac = serializationObject._assetsContext;
        const assetsContext = {
            meshes: ac.meshes?.map((m)=>scene.getMeshById(m)),
            lights: ac.lights?.map((l)=>scene.getLightByName(l)),
            cameras: ac.cameras?.map((c)=>scene.getCameraByName(c)),
            materials: ac.materials?.map((m)=>scene.getMaterialById(m)),
            textures: ac.textures?.map((t)=>scene.getTextureByName(t)),
            animations: ac.animations?.map((a)=>scene.animations.find((anim)=>anim.name === a)),
            skeletons: ac.skeletons?.map((s)=>scene.getSkeletonByName(s)),
            particleSystems: ac.particleSystems?.map((ps)=>scene.getParticleSystemById(ps)),
            animationGroups: ac.animationGroups?.map((ag)=>scene.getAnimationGroupByName(ag)),
            transformNodes: ac.transformNodes?.map((tn)=>scene.getTransformNodeById(tn)),
            rootNodes: [],
            multiMaterials: [],
            morphTargetManagers: [],
            geometries: [],
            actionManagers: [],
            environmentTexture: null,
            postProcesses: [],
            sounds: null,
            effectLayers: [],
            layers: [],
            reflectionProbes: [],
            lensFlareSystems: [],
            proceduralTextures: [],
            getNodes: function() {
                throw new Error("Function not implemented.");
            }
        };
        result.assetsContext = assetsContext;
    }
    for(const key in serializationObject._userVariables){
        const value = valueParseFunction(key, serializationObject._userVariables, result.assetsContext, scene);
        result.userVariables[key] = value;
    }
    for(const key in serializationObject._connectionValues){
        const value = valueParseFunction(key, serializationObject._connectionValues, result.assetsContext, scene);
        result._setConnectionValueByKey(key, value);
    }
    return result;
}
async function ParseBlockAsync(serializationObject, parseOptions) {
    const classFactory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockFactory"])(serializationObject.className);
    const classType = await classFactory();
    return ParseFlowGraphBlockWithClassType(serializationObject, parseOptions, classType);
}
function ParseFlowGraphBlockWithClassType(serializationObject, parseOptions, classType) {
    const parsedConfig = {};
    const valueParseFunction = parseOptions.valueParseFunction ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultValueParseFunction"];
    if (serializationObject.config) {
        for(const key in serializationObject.config){
            parsedConfig[key] = valueParseFunction(key, serializationObject.config, parseOptions.assetsContainer || parseOptions.scene, parseOptions.scene);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["needsPathConverter"])(serializationObject.className)) {
        if (!parseOptions.pathConverter) {
            throw new Error("Path converter is required for this block");
        }
        parsedConfig.pathConverter = parseOptions.pathConverter;
    }
    const obj = new classType(parsedConfig);
    obj.uniqueId = serializationObject.uniqueId;
    for(let i = 0; i < serializationObject.dataInputs.length; i++){
        const dataInput = obj.getDataInput(serializationObject.dataInputs[i].name);
        if (dataInput) {
            dataInput.deserialize(serializationObject.dataInputs[i]);
        } else {
            throw new Error("Could not find data input with name " + serializationObject.dataInputs[i].name + " in block " + serializationObject.className);
        }
    }
    for(let i = 0; i < serializationObject.dataOutputs.length; i++){
        const dataOutput = obj.getDataOutput(serializationObject.dataOutputs[i].name);
        if (dataOutput) {
            dataOutput.deserialize(serializationObject.dataOutputs[i]);
        } else {
            throw new Error("Could not find data output with name " + serializationObject.dataOutputs[i].name + " in block " + serializationObject.className);
        }
    }
    obj.metadata = serializationObject.metadata;
    obj.deserialize && obj.deserialize(serializationObject);
    return obj;
}
function ParseGraphConnectionWithClassType(serializationObject = {}, ownerBlock, classType) {
    const connection = new classType(serializationObject.name, serializationObject._connectionType, ownerBlock);
    connection.deserialize(serializationObject);
    return connection;
}
function ParseGraphDataConnection(serializationObject, ownerBlock, classType) {
    const richType = ParseRichType(serializationObject.richType);
    const defaultValue = serializationObject.defaultValue;
    const connection = new classType(serializationObject.name, serializationObject._connectionType, ownerBlock, richType, defaultValue, !!serializationObject._optional);
    connection.deserialize(serializationObject);
    return connection;
}
/**
 * Parses a rich type from a serialization object.
 * @param serializationObject a serialization object
 * @returns the parsed rich type
 */ function ParseRichType(serializationObject) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichType"](serializationObject.typeName, serializationObject.defaultValue);
} //# sourceMappingURL=flowGraphParser.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphPathConverter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @deprecated Avoid using this on the flow-graph (glTF only)
 * A path converter that converts a path on the flow graph context variables to an object accessor.
 */ __turbopack_context__.s([
    "FlowGraphPathConverter",
    ()=>FlowGraphPathConverter
]);
class FlowGraphPathConverter {
    constructor(_context, _separator = "/"){
        this._context = _context;
        this._separator = _separator;
    }
    convert(path) {
        const parts = path.split(this._separator);
        if (parts.length < 2) {
            throw new Error(`Path ${path} is invalid`);
        }
        let currentObject = this._context.getVariable(parts[0]);
        const property = parts[parts.length - 1];
        for(let i = 1; i < parts.length - 1; i++){
            currentObject = currentObject[parts[i]];
        }
        return {
            object: currentObject,
            info: {
                type: "object",
                get: ()=>currentObject[property],
                set: (value)=>currentObject[property] = value,
                getTarget: ()=>currentObject,
                getPropertyName: [
                    ()=>property
                ]
            }
        };
    }
} //# sourceMappingURL=flowGraphPathConverter.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphPathConverterComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphPathConverterComponent",
    ()=>FlowGraphPathConverterComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
;
;
const PathHasTemplatesRegex = new RegExp(/\/\{(\w+)\}(?=\/|$)/g);
class FlowGraphPathConverterComponent {
    constructor(path, ownerBlock){
        this.path = path;
        this.ownerBlock = ownerBlock;
        /**
         * The templated inputs for the provided path.
         */ this.templatedInputs = [];
        let match = PathHasTemplatesRegex.exec(path);
        const templateSet = new Set();
        while(match){
            const [, matchGroup] = match;
            if (templateSet.has(matchGroup)) {
                throw new Error("Duplicate template variable detected.");
            }
            templateSet.add(matchGroup);
            this.templatedInputs.push(ownerBlock.registerDataInput(matchGroup, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](0)));
            match = PathHasTemplatesRegex.exec(path);
        }
    }
    /**
     * Get the accessor for the path.
     * @param pathConverter the path converter to use to convert the path to an object accessor.
     * @param context the context to use.
     * @returns the accessor for the path.
     * @throws if the value for a templated input is invalid.
     */ getAccessor(pathConverter, context) {
        let finalPath = this.path;
        for (const templatedInput of this.templatedInputs){
            const valueToReplace = templatedInput.getValue(context).value;
            if (typeof valueToReplace !== "number" || valueToReplace < 0) {
                throw new Error("Invalid value for templated input.");
            }
            finalPath = finalPath.replace(`{${templatedInput.name}}`, valueToReplace.toString());
        }
        return pathConverter.convert(finalPath);
    }
} //# sourceMappingURL=flowGraphPathConverterComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphConsoleLogBlock",
    ()=>FlowGraphConsoleLogBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphConsoleLogBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config){
        super(config);
        this.message = this.registerDataInput("message", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.logType = this.registerDataInput("logType", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], "log");
        if (config?.messageTemplate) {
            const matches = this._getTemplateMatches(config.messageTemplate);
            for (const match of matches){
                this.registerDataInput(match, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
            }
        }
    }
    /**
     * @internal
     */ _execute(context) {
        const typeValue = this.logType.getValue(context);
        const messageValue = this._getMessageValue(context);
        if (typeValue === "warn") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(messageValue);
        } else if (typeValue === "error") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(messageValue);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(messageValue);
        }
        // activate the output flow block
        this.out._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphConsoleLogBlock" /* FlowGraphBlockNames.ConsoleLog */ ;
    }
    _getMessageValue(context) {
        if (this.config?.messageTemplate) {
            let template = this.config.messageTemplate;
            const matches = this._getTemplateMatches(template);
            for (const match of matches){
                const value = this.getDataInput(match)?.getValue(context);
                if (value !== undefined) {
                    // replace all
                    template = template.replace(new RegExp(`\\{${match}\\}`, "g"), value.toString());
                }
            }
            return template;
        } else {
            return this.message.getValue(context);
        }
    }
    _getTemplateMatches(template) {
        const regex = /\{([^}]+)\}/g;
        const matches = [];
        let match;
        while((match = regex.exec(template)) !== null){
            matches.push(match[1]);
        }
        return matches;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphConsoleLogBlock" /* FlowGraphBlockNames.ConsoleLog */ , FlowGraphConsoleLogBlock); //# sourceMappingURL=flowGraphConsoleLogBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphBranchBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphBranchBlock",
    ()=>FlowGraphBranchBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphBranchBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"] {
    constructor(config){
        super(config);
        this.condition = this.registerDataInput("condition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"]);
        this.onTrue = this._registerSignalOutput("onTrue");
        this.onFalse = this._registerSignalOutput("onFalse");
    }
    _execute(context) {
        if (this.condition.getValue(context)) {
            this.onTrue._activateSignal(context);
        } else {
            this.onFalse._activateSignal(context);
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphBranchBlock" /* FlowGraphBlockNames.Branch */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBranchBlock" /* FlowGraphBlockNames.Branch */ , FlowGraphBranchBlock); //# sourceMappingURL=flowGraphBranchBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphDoNBlock",
    ()=>FlowGraphDoNBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphDoNBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(/**
     * [Object] the configuration of the block
     */ config = {}){
        super(config);
        this.config = config;
        this.config.startIndex = config.startIndex ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](0);
        this.reset = this._registerSignalInput("reset");
        this.maxExecutions = this.registerDataInput("maxExecutions", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"]);
        this.executionCount = this.registerDataOutput("executionCount", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](0));
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.reset) {
            this.executionCount.setValue(this.config.startIndex, context);
        } else {
            const currentCountValue = this.executionCount.getValue(context);
            if (currentCountValue.value < this.maxExecutions.getValue(context).value) {
                this.executionCount.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](currentCountValue.value + 1), context);
                this.out._activateSignal(context);
            }
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphDoNBlock" /* FlowGraphBlockNames.DoN */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphDoNBlock" /* FlowGraphBlockNames.DoN */ , FlowGraphDoNBlock); //# sourceMappingURL=flowGraphDoNBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphForLoopBlock",
    ()=>FlowGraphForLoopBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
;
;
;
;
;
class FlowGraphForLoopBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config){
        super(config);
        this.startIndex = this.registerDataInput("startIndex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], 0);
        this.endIndex = this.registerDataInput("endIndex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.step = this.registerDataInput("step", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], 1);
        this.index = this.registerDataOutput("index", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(config?.initialIndex ?? 0)));
        this.executionFlow = this._registerSignalOutput("executionFlow");
        this.completed = this._registerSignalOutput("completed");
        this._unregisterSignalOutput("out");
    }
    /**
     * @internal
     */ _execute(context) {
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(this.startIndex.getValue(context));
        const step = this.step.getValue(context);
        let endIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(this.endIndex.getValue(context));
        for(let i = index; i < endIndex; i += step){
            this.index.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](i), context);
            this.executionFlow._activateSignal(context);
            endIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(this.endIndex.getValue(context));
            if (i > FlowGraphForLoopBlock.MaxLoopIterations * step) {
                break;
            }
        }
        if (this.config?.incrementIndexWhenLoopDone) {
            this.index.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(this.index.getValue(context)) + step), context);
        }
        this.completed._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphForLoopBlock" /* FlowGraphBlockNames.ForLoop */ ;
    }
}
/**
 * The maximum number of iterations allowed for the loop.
 * If the loop exceeds this number, it will stop. This number is configurable to avoid infinite loops.
 */ FlowGraphForLoopBlock.MaxLoopIterations = 1000;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphForLoopBlock" /* FlowGraphBlockNames.ForLoop */ , FlowGraphForLoopBlock); //# sourceMappingURL=flowGraphForLoopBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphThrottleBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphThrottleBlock",
    ()=>FlowGraphThrottleBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphThrottleBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config){
        super(config);
        this.reset = this._registerSignalInput("reset");
        this.duration = this.registerDataInput("duration", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.lastRemainingTime = this.registerDataOutput("lastRemainingTime", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], NaN);
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.reset) {
            this.lastRemainingTime.setValue(NaN, context);
            context._setExecutionVariable(this, "lastRemainingTime", NaN);
            context._setExecutionVariable(this, "timestamp", 0);
            return;
        }
        // in seconds
        const durationValue = this.duration.getValue(context);
        if (durationValue <= 0 || isNaN(durationValue) || !isFinite(durationValue)) {
            return this._reportError(context, "Invalid duration in Throttle block");
        }
        const lastRemainingTime = context._getExecutionVariable(this, "lastRemainingTime", NaN);
        // Using Date.now() to get ms since epoch. not using performance.now() because its precision is not needed here
        const currentTime = Date.now();
        if (isNaN(lastRemainingTime)) {
            this.lastRemainingTime.setValue(0, context);
            context._setExecutionVariable(this, "lastRemainingTime", 0);
            context._setExecutionVariable(this, "timestamp", currentTime);
            // according to glTF interactivity specs
            return this.out._activateSignal(context);
        } else {
            const elapsedTime = currentTime - context._getExecutionVariable(this, "timestamp", 0);
            // duration is in seconds, so we need to multiply by 1000
            const durationInMs = durationValue * 1000;
            if (durationInMs <= elapsedTime) {
                this.lastRemainingTime.setValue(0, context);
                context._setExecutionVariable(this, "lastRemainingTime", 0);
                context._setExecutionVariable(this, "timestamp", currentTime);
                return this.out._activateSignal(context);
            } else {
                const remainingTime = durationInMs - elapsedTime;
                // output is in seconds
                this.lastRemainingTime.setValue(remainingTime / 1000, context);
                context._setExecutionVariable(this, "lastRemainingTime", remainingTime);
            }
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphThrottleBlock" /* FlowGraphBlockNames.Throttle */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphThrottleBlock" /* FlowGraphBlockNames.Throttle */ , FlowGraphThrottleBlock); //# sourceMappingURL=flowGraphThrottleBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphMultiGateBlock",
    ()=>FlowGraphMultiGateBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphMultiGateBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        /**
         * Output connections: The output signals.
         */ this.outputSignals = [];
        this.reset = this._registerSignalInput("reset");
        this.lastIndex = this.registerDataOutput("lastIndex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](-1));
        this.setNumberOfOutputSignals(config?.outputSignalCount);
    }
    _getNextIndex(indexesUsed) {
        // find the next index available from the indexes used array
        // if all outputs were used, reset the indexes used array if we are in a loop multi gate
        if (!indexesUsed.includes(false)) {
            if (this.config.isLoop) {
                indexesUsed.fill(false);
            }
        }
        if (!this.config.isRandom) {
            return indexesUsed.indexOf(false);
        } else {
            const unusedIndexes = indexesUsed.map((used, index)=>used ? -1 : index).filter((index)=>index !== -1);
            return unusedIndexes.length ? unusedIndexes[Math.floor(Math.random() * unusedIndexes.length)] : -1;
        }
    }
    /**
     * Sets the block's output signals. Would usually be passed from the constructor but can be changed afterwards.
     * @param numberOutputSignals the number of output flows
     */ setNumberOfOutputSignals(numberOutputSignals = 1) {
        // check the size of the outFlow Array, see if it is not larger than needed
        while(this.outputSignals.length > numberOutputSignals){
            const flow = this.outputSignals.pop();
            if (flow) {
                flow.disconnectFromAll();
                this._unregisterSignalOutput(flow.name);
            }
        }
        while(this.outputSignals.length < numberOutputSignals){
            this.outputSignals.push(this._registerSignalOutput(`out_${this.outputSignals.length}`));
        }
    }
    _execute(context, callingSignal) {
        // set the state(s) of the block
        if (!context._hasExecutionVariable(this, "indexesUsed")) {
            context._setExecutionVariable(this, "indexesUsed", this.outputSignals.map(()=>false));
        }
        if (callingSignal === this.reset) {
            context._deleteExecutionVariable(this, "indexesUsed");
            this.lastIndex.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](-1), context);
            return;
        }
        const indexesUsed = context._getExecutionVariable(this, "indexesUsed", []);
        const nextIndex = this._getNextIndex(indexesUsed);
        if (nextIndex > -1) {
            this.lastIndex.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](nextIndex), context);
            indexesUsed[nextIndex] = true;
            context._setExecutionVariable(this, "indexesUsed", indexesUsed);
            this.outputSignals[nextIndex]._activateSignal(context);
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphMultiGateBlock" /* FlowGraphBlockNames.MultiGate */ ;
    }
    /**
     * Serializes the block.
     * @param serializationObject the object to serialize to.
     */ serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.config.outputSignalCount = this.config.outputSignalCount;
        serializationObject.config.isRandom = this.config.isRandom;
        serializationObject.config.loop = this.config.isLoop;
        serializationObject.config.startIndex = this.config.startIndex;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMultiGateBlock" /* FlowGraphBlockNames.MultiGate */ , FlowGraphMultiGateBlock); //# sourceMappingURL=flowGraphMultiGateBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSwitchBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSwitchBlock",
    ()=>FlowGraphSwitchBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphSwitchBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        /**
         * The default case to execute if no other case is found.
         */ this.default = this._registerSignalOutput("default");
        this._caseToOutputFlow = new Map();
        this.case = this.registerDataInput("case", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        // iterate the set not using for of
        const array = this.config.cases || [];
        for (const caseValue of array){
            this._caseToOutputFlow.set(caseValue, this._registerSignalOutput(`out_${caseValue}`));
        }
    }
    _execute(context, _callingSignal) {
        const selectionValue = this.case.getValue(context);
        let outputFlow;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumeric"])(selectionValue)) {
            outputFlow = this._getOutputFlowForCase((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(selectionValue));
        } else {
            outputFlow = this._getOutputFlowForCase(selectionValue);
        }
        if (outputFlow) {
            outputFlow._activateSignal(context);
        } else {
            this.default._activateSignal(context);
        }
    }
    /**
     * Adds a new case to the switch block.
     * @param newCase the new case to add.
     */ addCase(newCase) {
        if (this.config.cases.includes(newCase)) {
            return;
        }
        this.config.cases.push(newCase);
        this._caseToOutputFlow.set(newCase, this._registerSignalOutput(`out_${newCase}`));
    }
    /**
     * Removes a case from the switch block.
     * @param caseToRemove the case to remove.
     */ removeCase(caseToRemove) {
        if (!this.config.cases.includes(caseToRemove)) {
            return;
        }
        const index = this.config.cases.indexOf(caseToRemove);
        this.config.cases.splice(index, 1);
        this._caseToOutputFlow.delete(caseToRemove);
    }
    /**
     * @internal
     */ _getOutputFlowForCase(caseValue) {
        return this._caseToOutputFlow.get(caseValue);
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphSwitchBlock" /* FlowGraphBlockNames.Switch */ ;
    }
    /**
     * Serialize the block to a JSON representation.
     * @param serializationObject the object to serialize to.
     */ serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.cases = this.config.cases;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSwitchBlock" /* FlowGraphBlockNames.Switch */ , FlowGraphSwitchBlock); //# sourceMappingURL=flowGraphSwitchBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphWaitAllBlock",
    ()=>FlowGraphWaitAllBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphWaitAllBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        /**
         * An array of input signals
         */ this.inFlows = [];
        this._cachedActivationState = [];
        this.reset = this._registerSignalInput("reset");
        this.completed = this._registerSignalOutput("completed");
        this.remainingInputs = this.registerDataOutput("remainingInputs", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](this.config.inputSignalCount || 0));
        // The first inFlow is the default input signal all execution blocks have
        for(let i = 0; i < this.config.inputSignalCount; i++){
            this.inFlows.push(this._registerSignalInput(`in_${i}`));
        }
        // no need for in
        this._unregisterSignalInput("in");
    }
    _getCurrentActivationState(context) {
        const activationState = this._cachedActivationState;
        activationState.length = 0;
        if (!context._hasExecutionVariable(this, "activationState")) {
            for(let i = 0; i < this.config.inputSignalCount; i++){
                activationState.push(false);
            }
        } else {
            const contextActivationState = context._getExecutionVariable(this, "activationState", []);
            for(let i = 0; i < contextActivationState.length; i++){
                activationState.push(contextActivationState[i]);
            }
        }
        return activationState;
    }
    _execute(context, callingSignal) {
        const activationState = this._getCurrentActivationState(context);
        if (callingSignal === this.reset) {
            for(let i = 0; i < this.config.inputSignalCount; i++){
                activationState[i] = false;
            }
        } else {
            const index = this.inFlows.indexOf(callingSignal);
            if (index >= 0) {
                activationState[index] = true;
            }
        }
        this.remainingInputs.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](activationState.filter((v)=>!v).length), context);
        context._setExecutionVariable(this, "activationState", activationState.slice());
        if (!activationState.includes(false)) {
            this.completed._activateSignal(context);
            for(let i = 0; i < this.config.inputSignalCount; i++){
                activationState[i] = false;
            }
        } else {
            callingSignal !== this.reset && this.out._activateSignal(context);
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphWaitAllBlock" /* FlowGraphBlockNames.WaitAll */ ;
    }
    /**
     * Serializes this block into a object
     * @param serializationObject the object to serialize to
     */ serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.config.inputFlows = this.config.inputSignalCount;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphWaitAllBlock" /* FlowGraphBlockNames.WaitAll */ , FlowGraphWaitAllBlock); //# sourceMappingURL=flowGraphWaitAllBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCounterBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphCallCounterBlock",
    ()=>FlowGraphCallCounterBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphCallCounterBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config){
        super(config);
        this.count = this.registerDataOutput("count", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.reset = this._registerSignalInput("reset");
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.reset) {
            context._setExecutionVariable(this, "count", 0);
            this.count.setValue(0, context);
            return;
        }
        const countValue = context._getExecutionVariable(this, "count", 0) + 1;
        context._setExecutionVariable(this, "count", countValue);
        this.count.setValue(countValue, context);
        this.out._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphCallCounterBlock" /* FlowGraphBlockNames.CallCounter */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCallCounterBlock" /* FlowGraphBlockNames.CallCounter */ , FlowGraphCallCounterBlock); //# sourceMappingURL=flowGraphCounterBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphWhileLoopBlock",
    ()=>FlowGraphWhileLoopBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphWhileLoopBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        this.condition = this.registerDataInput("condition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"]);
        this.executionFlow = this._registerSignalOutput("executionFlow");
        this.completed = this._registerSignalOutput("completed");
        // unregister "out" signal
        this._unregisterSignalOutput("out");
    }
    _execute(context, _callingSignal) {
        let conditionValue = this.condition.getValue(context);
        if (this.config?.doWhile && !conditionValue) {
            this.executionFlow._activateSignal(context);
        }
        let i = 0;
        while(conditionValue){
            this.executionFlow._activateSignal(context);
            ++i;
            if (i >= FlowGraphWhileLoopBlock.MaxLoopCount) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("FlowGraphWhileLoopBlock: Max loop count reached. Breaking.");
                break;
            }
            conditionValue = this.condition.getValue(context);
        }
        // out is not triggered - completed is triggered
        this.completed._activateSignal(context);
    }
    getClassName() {
        return "FlowGraphWhileLoopBlock" /* FlowGraphBlockNames.WhileLoop */ ;
    }
}
/**
 * The maximum number of iterations allowed in a loop.
 * This can be set to avoid an infinite loop.
 */ FlowGraphWhileLoopBlock.MaxLoopCount = 1000;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphWhileLoopBlock" /* FlowGraphBlockNames.WhileLoop */ , FlowGraphWhileLoopBlock); //# sourceMappingURL=flowGraphWhileLoopBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDebounceBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphDebounceBlock",
    ()=>FlowGraphDebounceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphDebounceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config){
        super(config);
        this.count = this.registerDataInput("count", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.reset = this._registerSignalInput("reset");
        this.currentCount = this.registerDataOutput("currentCount", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.reset) {
            context._setExecutionVariable(this, "debounceCount", 0);
            return;
        }
        const count = this.count.getValue(context);
        const currentCount = context._getExecutionVariable(this, "debounceCount", 0);
        const newCount = currentCount + 1;
        this.currentCount.setValue(newCount, context);
        context._setExecutionVariable(this, "debounceCount", newCount);
        if (newCount >= count) {
            this.out._activateSignal(context);
            context._setExecutionVariable(this, "debounceCount", 0);
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphDebounceBlock" /* FlowGraphBlockNames.Debounce */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphDebounceBlock" /* FlowGraphBlockNames.Debounce */ , FlowGraphDebounceBlock); //# sourceMappingURL=flowGraphDebounceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphFlipFlopBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphFlipFlopBlock",
    ()=>FlowGraphFlipFlopBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphFlipFlopBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"] {
    constructor(config){
        super(config);
        this.onOn = this._registerSignalOutput("onOn");
        this.onOff = this._registerSignalOutput("onOff");
        this.value = this.registerDataOutput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"]);
    }
    _execute(context, _callingSignal) {
        let value = context._getExecutionVariable(this, "value", typeof this.config?.startValue === "boolean" ? !this.config.startValue : false);
        value = !value;
        context._setExecutionVariable(this, "value", value);
        this.value.setValue(value, context);
        if (value) {
            this.onOn._activateSignal(context);
        } else {
            this.onOff._activateSignal(context);
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphFlipFlopBlock" /* FlowGraphBlockNames.FlipFlop */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphFlipFlopBlock" /* FlowGraphBlockNames.FlipFlop */ , FlowGraphFlipFlopBlock); //# sourceMappingURL=flowGraphFlipFlopBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSequenceBlock",
    ()=>FlowGraphSequenceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
;
;
class FlowGraphSequenceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        /**
         * The output flows.
         */ this.executionSignals = [];
        this.setNumberOfOutputSignals(this.config.outputSignalCount);
    }
    _execute(context) {
        for(let i = 0; i < this.executionSignals.length; i++){
            this.executionSignals[i]._activateSignal(context);
        }
    }
    /**
     * Sets the block's output flows. Would usually be passed from the constructor but can be changed afterwards.
     * @param outputSignalCount the number of output flows
     */ setNumberOfOutputSignals(outputSignalCount = 1) {
        // check the size of the outFlow Array, see if it is not larger than needed
        while(this.executionSignals.length > outputSignalCount){
            const flow = this.executionSignals.pop();
            if (flow) {
                flow.disconnectFromAll();
                this._unregisterSignalOutput(flow.name);
            }
        }
        while(this.executionSignals.length < outputSignalCount){
            this.executionSignals.push(this._registerSignalOutput(`out_${this.executionSignals.length}`));
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphSequenceBlock" /* FlowGraphBlockNames.Sequence */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSequenceBlock" /* FlowGraphBlockNames.Sequence */ , FlowGraphSequenceBlock); //# sourceMappingURL=flowGraphSequenceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSetDelayBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSetDelayBlock",
    ()=>FlowGraphSetDelayBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAsyncExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAsyncExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/timer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class FlowGraphSetDelayBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAsyncExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsyncExecutionBlock"] {
    constructor(config){
        super(config);
        this.cancel = this._registerSignalInput("cancel");
        this.duration = this.registerDataInput("duration", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.lastDelayIndex = this.registerDataOutput("lastDelayIndex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](-1));
    }
    _preparePendingTasks(context) {
        const duration = this.duration.getValue(context);
        if (duration < 0 || isNaN(duration) || !isFinite(duration)) {
            return this._reportError(context, "Invalid duration in SetDelay block");
        }
        // active delays are global to the context
        const activeDelays = context._getGlobalContextVariable("activeDelays", 0);
        if (activeDelays >= FlowGraphSetDelayBlock.MaxParallelDelayCount) {
            return this._reportError(context, "Max parallel delays reached");
        }
        // get the last global delay index
        const lastDelayIndex = context._getGlobalContextVariable("lastDelayIndex", -1);
        // these are block-specific and not global
        const timers = context._getExecutionVariable(this, "pendingDelays", []);
        const scene = context.configuration.scene;
        const timer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdvancedTimer"]({
            timeout: duration * 1000,
            contextObservable: scene.onBeforeRenderObservable,
            onEnded: ()=>this._onEnded(timer, context)
        });
        timer.start();
        const newIndex = lastDelayIndex + 1;
        this.lastDelayIndex.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](newIndex), context);
        context._setGlobalContextVariable("lastDelayIndex", newIndex);
        timers[newIndex] = timer;
        context._setExecutionVariable(this, "pendingDelays", timers);
        this._updateGlobalTimers(context);
    }
    _cancelPendingTasks(context) {
        const timers = context._getExecutionVariable(this, "pendingDelays", []);
        for (const timer of timers){
            timer?.dispose();
        }
        context._deleteExecutionVariable(this, "pendingDelays");
        this.lastDelayIndex.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](-1), context);
        this._updateGlobalTimers(context);
    }
    _execute(context, callingSignal) {
        if (callingSignal === this.cancel) {
            this._cancelPendingTasks(context);
            return;
        } else {
            this._preparePendingTasks(context);
            this.out._activateSignal(context);
        }
    }
    getClassName() {
        return "FlowGraphSetDelayBlock" /* FlowGraphBlockNames.SetDelay */ ;
    }
    _onEnded(timer, context) {
        const timers = context._getExecutionVariable(this, "pendingDelays", []);
        const index = timers.indexOf(timer);
        if (index !== -1) {
            timers.splice(index, 1);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("FlowGraphTimerBlock: Timer ended but was not found in the running timers list");
        }
        context._removePendingBlock(this);
        this.done._activateSignal(context);
        this._updateGlobalTimers(context);
    }
    _updateGlobalTimers(context) {
        const timers = context._getExecutionVariable(this, "pendingDelays", []);
        const globalTimers = context._getGlobalContextVariable("pendingDelays", []);
        // there should NEVER be the same index in the global and local timers, unless they are equal
        for(let i = 0; i < timers.length; i++){
            if (!timers[i]) {
                continue;
            }
            const timer = timers[i];
            if (globalTimers[i] && globalTimers[i] !== timer) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("FlowGraphTimerBlock: Timer ended but was not found in the running timers list");
            } else {
                globalTimers[i] = timer;
            }
        }
        context._setGlobalContextVariable("pendingDelays", globalTimers);
    }
}
/**
 * The maximum number of parallel delays that can be set per node.
 */ FlowGraphSetDelayBlock.MaxParallelDelayCount = 100;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSetDelayBlock" /* FlowGraphBlockNames.SetDelay */ , FlowGraphSetDelayBlock); //# sourceMappingURL=flowGraphSetDelayBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCancelDelayBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphCancelDelayBlock",
    ()=>FlowGraphCancelDelayBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphCancelDelayBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config){
        super(config);
        this.delayIndex = this.registerDataInput("delayIndex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"]);
    }
    _execute(context, _callingSignal) {
        const delayIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(this.delayIndex.getValue(context));
        if (delayIndex <= 0 || isNaN(delayIndex) || !isFinite(delayIndex)) {
            return this._reportError(context, "Invalid delay index");
        }
        const timers = context._getGlobalContextVariable("pendingDelays", []);
        const timer = timers[delayIndex];
        if (timer) {
            timer.dispose();
        // not removing it from the array. Disposing it will clear all of its resources
        }
        // activate the out output flow
        this.out._activateSignal(context);
    }
    getClassName() {
        return "FlowGraphCancelDelayBlock" /* FlowGraphBlockNames.CancelDelay */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCancelDelayBlock" /* FlowGraphBlockNames.CancelDelay */ , FlowGraphCancelDelayBlock); //# sourceMappingURL=flowGraphCancelDelayBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphBranchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphBranchBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphDoNBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphForLoopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphThrottleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphThrottleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphMultiGateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSwitchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSwitchBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphWaitAllBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphCounterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCounterBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphWhileLoopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphDebounceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDebounceBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphFlipFlopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphFlipFlopBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSequenceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSetDelayBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSetDelayBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphCancelDelayBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCancelDelayBlock.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphPlayAnimationBlock",
    ()=>FlowGraphPlayAnimationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAsyncExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAsyncExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationGroup.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphPlayAnimationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAsyncExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsyncExecutionBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config, [
            "animationLoop",
            "animationEnd",
            "animationGroupLoop"
        ]);
        this.config = config;
        this.speed = this.registerDataInput("speed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.loop = this.registerDataInput("loop", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"]);
        this.from = this.registerDataInput("from", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], 0);
        this.to = this.registerDataInput("to", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.currentFrame = this.registerDataOutput("currentFrame", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.currentTime = this.registerDataOutput("currentTime", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.currentAnimationGroup = this.registerDataOutput("currentAnimationGroup", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.animationGroup = this.registerDataInput("animationGroup", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config?.animationGroup);
        this.animation = this.registerDataInput("animation", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.object = this.registerDataInput("object", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    /**
     * @internal
     * @param context
     */ _preparePendingTasks(context) {
        const ag = this.animationGroup.getValue(context);
        const animation = this.animation.getValue(context);
        if (!ag && !animation) {
            return this._reportError(context, "No animation or animation group provided");
        } else {
            // if an animation group was already created, dispose it and create a new one
            const currentAnimationGroup = this.currentAnimationGroup.getValue(context);
            if (currentAnimationGroup && currentAnimationGroup !== ag) {
                currentAnimationGroup.dispose();
            }
            let animationGroupToUse = ag;
            // check which animation to use. If no animationGroup was defined and an animation was provided, use the animation
            if (animation && !animationGroupToUse) {
                const target = this.object.getValue(context);
                if (!target) {
                    return this._reportError(context, "No target object provided");
                }
                const animationsArray = Array.isArray(animation) ? animation : [
                    animation
                ];
                const name = animationsArray[0].name;
                animationGroupToUse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroup$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimationGroup"]("flowGraphAnimationGroup-" + name + "-" + target.name, context.configuration.scene);
                let isInterpolation = false;
                const interpolationAnimations = context._getGlobalContextVariable("interpolationAnimations", []);
                for (const anim of animationsArray){
                    animationGroupToUse.addTargetedAnimation(anim, target);
                    if (interpolationAnimations.indexOf(anim.uniqueId) !== -1) {
                        isInterpolation = true;
                    }
                }
                if (isInterpolation) {
                    this._checkInterpolationDuplications(context, animationsArray, target);
                }
            }
            // not accepting 0
            const speed = this.speed.getValue(context) || 1;
            const from = this.from.getValue(context) ?? 0;
            // not accepting 0
            const to = this.to.getValue(context) || animationGroupToUse.to;
            const loop = !isFinite(to) || this.loop.getValue(context);
            this.currentAnimationGroup.setValue(animationGroupToUse, context);
            const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
            // check if it already running
            if (currentlyRunningAnimationGroups.indexOf(animationGroupToUse.uniqueId) !== -1) {
                animationGroupToUse.stop();
            }
            try {
                animationGroupToUse.start(loop, speed, from, to);
                animationGroupToUse.onAnimationGroupEndObservable.add(()=>this._onAnimationGroupEnd(context));
                animationGroupToUse.onAnimationEndObservable.add(()=>this._eventsSignalOutputs["animationEnd"]._activateSignal(context));
                animationGroupToUse.onAnimationLoopObservable.add(()=>this._eventsSignalOutputs["animationLoop"]._activateSignal(context));
                animationGroupToUse.onAnimationGroupLoopObservable.add(()=>this._eventsSignalOutputs["animationGroupLoop"]._activateSignal(context));
                currentlyRunningAnimationGroups.push(animationGroupToUse.uniqueId);
                context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunningAnimationGroups);
            } catch (e) {
                this._reportError(context, e);
            }
        }
    }
    _reportError(context, error) {
        super._reportError(context, error);
        this.currentFrame.setValue(-1, context);
        this.currentTime.setValue(-1, context);
    }
    /**
     * @internal
     */ _executeOnTick(_context) {
        const ag = this.currentAnimationGroup.getValue(_context);
        if (ag) {
            this.currentFrame.setValue(ag.getCurrentFrame(), _context);
            this.currentTime.setValue(ag.animatables[0]?.elapsedTime ?? 0, _context);
        }
    }
    _execute(context) {
        this._startPendingTasks(context);
    }
    _onAnimationGroupEnd(context) {
        this._removeFromCurrentlyRunning(context, this.currentAnimationGroup.getValue(context));
        this._resetAfterCanceled(context);
        this.done._activateSignal(context);
    }
    /**
     * The idea behind this function is to check every running animation group and check if the targeted animations it uses are interpolation animations.
     * If they are, we want to see that they don't collide with the current interpolation animations that are starting to play.
     * If they do, we want to stop the already-running animation group.
     * @internal
     */ _checkInterpolationDuplications(context, animation, target) {
        const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        for (const uniqueId of currentlyRunningAnimationGroups){
            const ag = context.assetsContext.animationGroups.find((ag)=>ag.uniqueId === uniqueId);
            if (ag) {
                for (const anim of ag.targetedAnimations){
                    for (const animToCheck of animation){
                        if (anim.animation.targetProperty === animToCheck.targetProperty && anim.target === target) {
                            this._stopAnimationGroup(context, ag);
                        }
                    }
                }
            }
        }
    }
    _stopAnimationGroup(context, animationGroup) {
        // stop, while skipping the on AnimationEndObservable to avoid the "done" signal
        animationGroup.stop(true);
        animationGroup.dispose();
        this._removeFromCurrentlyRunning(context, animationGroup);
    }
    _removeFromCurrentlyRunning(context, animationGroup) {
        const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        const idx = currentlyRunningAnimationGroups.indexOf(animationGroup.uniqueId);
        if (idx !== -1) {
            currentlyRunningAnimationGroups.splice(idx, 1);
            context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunningAnimationGroups);
        }
    }
    /**
     * @internal
     * Stop any currently running animations.
     */ _cancelPendingTasks(context) {
        const ag = this.currentAnimationGroup.getValue(context);
        if (ag) {
            this._stopAnimationGroup(context, ag);
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphPlayAnimationBlock" /* FlowGraphBlockNames.PlayAnimation */ , FlowGraphPlayAnimationBlock); //# sourceMappingURL=flowGraphPlayAnimationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphStopAnimationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphStopAnimationBlock",
    ()=>FlowGraphStopAnimationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAsyncExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAsyncExecutionBlock.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphStopAnimationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAsyncExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsyncExecutionBlock"] {
    constructor(config){
        super(config);
        this.animationGroup = this.registerDataInput("animationGroup", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.stopAtFrame = this.registerDataInput("stopAtFrame", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], -1);
    }
    _preparePendingTasks(context) {
        const animationToStopValue = this.animationGroup.getValue(context);
        const stopAtFrame = this.stopAtFrame.getValue(context) ?? -1;
        // get the context variable
        const pendingStopAnimations = context._getGlobalContextVariable("pendingStopAnimations", []);
        // add the animation to the list
        pendingStopAnimations.push({
            uniqueId: animationToStopValue.uniqueId,
            stopAtFrame
        });
        // set the global context variable
        context._setGlobalContextVariable("pendingStopAnimations", pendingStopAnimations);
    }
    _cancelPendingTasks(context) {
        // remove the animation from the list
        const animationToStopValue = this.animationGroup.getValue(context);
        const pendingStopAnimations = context._getGlobalContextVariable("pendingStopAnimations", []);
        for(let i = 0; i < pendingStopAnimations.length; i++){
            if (pendingStopAnimations[i].uniqueId === animationToStopValue.uniqueId) {
                pendingStopAnimations.splice(i, 1);
                // set the global context variable
                context._setGlobalContextVariable("pendingStopAnimations", pendingStopAnimations);
                break;
            }
        }
    }
    _execute(context) {
        const animationToStopValue = this.animationGroup.getValue(context);
        const stopTime = this.stopAtFrame.getValue(context) ?? -1;
        // check the values
        if (!animationToStopValue) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("No animation group provided to stop.");
            return this._reportError(context, "No animation group provided to stop.");
        }
        if (isNaN(stopTime)) {
            return this._reportError(context, "Invalid stop time.");
        }
        if (stopTime > 0) {
            this._startPendingTasks(context);
        } else {
            this._stopAnimation(animationToStopValue, context);
        }
        // note that out will not be triggered in case of an error
        this.out._activateSignal(context);
    }
    _executeOnTick(context) {
        const animationToStopValue = this.animationGroup.getValue(context);
        // check each frame if any animation should be stopped
        const pendingStopAnimations = context._getGlobalContextVariable("pendingStopAnimations", []);
        for(let i = 0; i < pendingStopAnimations.length; i++){
            // compare the uniqueId to the animation to stop
            if (pendingStopAnimations[i].uniqueId === animationToStopValue.uniqueId) {
                // check if the current frame is AFTER the stopAtFrame
                if (animationToStopValue.getCurrentFrame() >= pendingStopAnimations[i].stopAtFrame) {
                    // stop the animation
                    this._stopAnimation(animationToStopValue, context);
                    // remove the animation from the list
                    pendingStopAnimations.splice(i, 1);
                    // set the global context variable
                    context._setGlobalContextVariable("pendingStopAnimations", pendingStopAnimations);
                    this.done._activateSignal(context);
                    context._removePendingBlock(this);
                    break;
                }
            }
        }
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphStopAnimationBlock" /* FlowGraphBlockNames.StopAnimation */ ;
    }
    _stopAnimation(animationGroup, context) {
        const currentlyRunning = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        const index = currentlyRunning.indexOf(animationGroup.uniqueId);
        if (index !== -1) {
            animationGroup.stop();
            currentlyRunning.splice(index, 1);
            // update the global context variable
            context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunning);
        } else {
        // Logger.Warn("Trying to stop an animation that is not running.");
        // no-op for now. Probably no need to log anything here.
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphStopAnimationBlock" /* FlowGraphBlockNames.StopAnimation */ , FlowGraphStopAnimationBlock); //# sourceMappingURL=flowGraphStopAnimationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPauseAnimationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphPauseAnimationBlock",
    ()=>FlowGraphPauseAnimationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphPauseAnimationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config){
        super(config);
        this.animationToPause = this.registerDataInput("animationToPause", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _execute(context) {
        const animationToPauseValue = this.animationToPause.getValue(context);
        animationToPauseValue.pause();
        this.out._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphPauseAnimationBlock" /* FlowGraphBlockNames.PauseAnimation */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphPauseAnimationBlock" /* FlowGraphBlockNames.PauseAnimation */ , FlowGraphPauseAnimationBlock); //# sourceMappingURL=flowGraphPauseAnimationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphInterpolationBlock",
    ()=>FlowGraphInterpolationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphInterpolationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(config = {}){
        super(config);
        /**
         * The keyframes to interpolate between.
         * Each keyframe has a duration input and a value input.
         */ this.keyFrames = [];
        const type = typeof config?.animationType === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config.animationType) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByAnimationType"])(config?.animationType ?? 0);
        const numberOfKeyFrames = config?.keyFramesCount ?? 1;
        const duration = this.registerDataInput(`duration_0`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], 0);
        const value = this.registerDataInput(`value_0`, type);
        this.keyFrames.push({
            duration,
            value
        });
        for(let i = 1; i < numberOfKeyFrames + 1; i++){
            const duration = this.registerDataInput(`duration_${i}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], i === numberOfKeyFrames ? config.duration : undefined);
            const value = this.registerDataInput(`value_${i}`, type);
            this.keyFrames.push({
                duration,
                value
            });
        }
        this.initialValue = this.keyFrames[0].value;
        this.endValue = this.keyFrames[numberOfKeyFrames].value;
        this.easingFunction = this.registerDataInput("easingFunction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.animation = this.registerDataOutput("animation", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.propertyName = this.registerDataInput("propertyName", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config?.propertyName);
        this.customBuildAnimation = this.registerDataInput("customBuildAnimation", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _updateOutputs(context) {
        const interpolationAnimations = context._getGlobalContextVariable("interpolationAnimations", []);
        const propertyName = this.propertyName.getValue(context);
        const easingFunction = this.easingFunction.getValue(context);
        const animation = this._createAnimation(context, propertyName, easingFunction);
        // If an old animation exists, it will be ignored here.
        // This is because if the animation is running and they both have the same target, the old will be stopped.
        // This doesn't happen here, it happens in the play animation block.
        this.animation.setValue(animation, context);
        // to make sure no 2 interpolations are running on the same target, we will mark the animation in the context
        if (Array.isArray(animation)) {
            for (const anim of animation){
                interpolationAnimations.push(anim.uniqueId);
            }
        } else {
            interpolationAnimations.push(animation.uniqueId);
        }
        context._setGlobalContextVariable("interpolationAnimations", interpolationAnimations);
    }
    _createAnimation(context, propertyName, easingFunction) {
        const type = this.initialValue.richType;
        const keys = [];
        // add initial value
        const currentValue = this.initialValue.getValue(context) || type.defaultValue;
        keys.push({
            frame: 0,
            value: currentValue
        });
        const numberOfKeyFrames = this.config?.numberOfKeyFrames ?? 1;
        for(let i = 1; i < numberOfKeyFrames + 1; i++){
            const duration = this.keyFrames[i].duration?.getValue(context);
            let value = this.keyFrames[i].value?.getValue(context);
            if (i === numberOfKeyFrames - 1) {
                value = value || type.defaultValue;
            }
            if (duration !== undefined && value) {
                // convert duration to frames, based on 60 fps
                keys.push({
                    frame: duration * 60,
                    value
                });
            }
        }
        const customBuildAnimation = this.customBuildAnimation.getValue(context);
        if (customBuildAnimation) {
            return customBuildAnimation(null, null, context)(keys, 60, type.animationType, easingFunction);
        }
        if (typeof propertyName === "string") {
            const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].CreateAnimation(propertyName, type.animationType, 60, easingFunction);
            animation.setKeys(keys);
            return [
                animation
            ];
        } else {
            const animations = propertyName.map((name)=>{
                const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].CreateAnimation(name, type.animationType, 60, easingFunction);
                animation.setKeys(keys);
                return animation;
            });
            return animations;
        }
    }
    getClassName() {
        return "FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphInterpolationBlock" /* FlowGraphBlockNames.ValueInterpolation */ , FlowGraphInterpolationBlock); // #L54P2C
 //# sourceMappingURL=flowGraphInterpolationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphEasingBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasingFunctionType",
    ()=>EasingFunctionType,
    "FlowGraphEasingBlock",
    ()=>FlowGraphEasingBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
var EasingFunctionType;
(function(EasingFunctionType) {
    EasingFunctionType[EasingFunctionType["CircleEase"] = 0] = "CircleEase";
    EasingFunctionType[EasingFunctionType["BackEase"] = 1] = "BackEase";
    EasingFunctionType[EasingFunctionType["BounceEase"] = 2] = "BounceEase";
    EasingFunctionType[EasingFunctionType["CubicEase"] = 3] = "CubicEase";
    EasingFunctionType[EasingFunctionType["ElasticEase"] = 4] = "ElasticEase";
    EasingFunctionType[EasingFunctionType["ExponentialEase"] = 5] = "ExponentialEase";
    EasingFunctionType[EasingFunctionType["PowerEase"] = 6] = "PowerEase";
    EasingFunctionType[EasingFunctionType["QuadraticEase"] = 7] = "QuadraticEase";
    EasingFunctionType[EasingFunctionType["QuarticEase"] = 8] = "QuarticEase";
    EasingFunctionType[EasingFunctionType["QuinticEase"] = 9] = "QuinticEase";
    EasingFunctionType[EasingFunctionType["SineEase"] = 10] = "SineEase";
    EasingFunctionType[EasingFunctionType["BezierCurveEase"] = 11] = "BezierCurveEase";
})(EasingFunctionType || (EasingFunctionType = {}));
/**
 * @internal
 * Creates an easing function object based on the type and parameters provided.
 * This is not tree-shaking friendly, so if you need cubic bezier, use the dedicated bezier block.
 * @param type The type of the easing function.
 * @param controlPoint1 The first control point for the bezier curve.
 * @param controlPoint2 The second control point for the bezier curve.
 * @returns The easing function object.
 */ function CreateEasingFunction(type, ...parameters) {
    switch(type){
        case 11 /* EasingFunctionType.BezierCurveEase */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BezierCurveEase"](...parameters);
        case 0 /* EasingFunctionType.CircleEase */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CircleEase"]();
        case 1 /* EasingFunctionType.BackEase */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackEase"](...parameters);
        case 2 /* EasingFunctionType.BounceEase */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BounceEase"](...parameters);
        case 3 /* EasingFunctionType.CubicEase */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CubicEase"]();
        case 4 /* EasingFunctionType.ElasticEase */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElasticEase"](...parameters);
        case 5 /* EasingFunctionType.ExponentialEase */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExponentialEase"](...parameters);
        default:
            throw new Error("Easing type not yet implemented");
    }
}
class FlowGraphEasingBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        /**
         * Internal cache of reusable easing functions.
         * key is type-mode-properties
         */ this._easingFunctions = {};
        this.type = this.registerDataInput("type", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], 11);
        this.mode = this.registerDataInput("mode", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], 0);
        this.parameters = this.registerDataInput("parameters", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], [
            1,
            0,
            0,
            1
        ]);
        this.easingFunction = this.registerDataOutput("easingFunction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _updateOutputs(context) {
        const type = this.type.getValue(context);
        const mode = this.mode.getValue(context);
        const parameters = this.parameters.getValue(context);
        if (type === undefined || mode === undefined) {
            return;
        }
        const key = `${type}-${mode}-${parameters.join("-")}`;
        if (!this._easingFunctions[key]) {
            const easing = CreateEasingFunction(type, ...parameters);
            easing.setEasingMode(mode);
            this._easingFunctions[key] = easing;
        }
        this.easingFunction.setValue(this._easingFunctions[key], context);
    }
    getClassName() {
        return "FlowGraphEasingBlock" /* FlowGraphBlockNames.Easing */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphEasingBlock" /* FlowGraphBlockNames.Easing */ , FlowGraphEasingBlock); //# sourceMappingURL=flowGraphEasingBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphBezierCurveEasingBlock",
    ()=>FlowGraphBezierCurveEasingBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphBezierCurveEasingBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        /**
         * Internal cache of reusable easing functions.
         * key is type-mode-properties
         */ this._easingFunctions = {};
        this.mode = this.registerDataInput("mode", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], 0);
        this.controlPoint1 = this.registerDataInput("controlPoint1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector2"]);
        this.controlPoint2 = this.registerDataInput("controlPoint2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector2"]);
        this.easingFunction = this.registerDataOutput("easingFunction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _updateOutputs(context) {
        const mode = this.mode.getValue(context);
        const controlPoint1 = this.controlPoint1.getValue(context);
        const controlPoint2 = this.controlPoint2.getValue(context);
        if (mode === undefined) {
            return;
        }
        const key = `${mode}-${controlPoint1.x}-${controlPoint1.y}-${controlPoint2.x}-${controlPoint2.y}`;
        if (!this._easingFunctions[key]) {
            const easing = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BezierCurveEase"](controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y);
            easing.setEasingMode(mode);
            this._easingFunctions[key] = easing;
        }
        this.easingFunction.setValue(this._easingFunctions[key], context);
    }
    getClassName() {
        return "FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBezierCurveEasing" /* FlowGraphBlockNames.BezierCurveEasing */ , FlowGraphBezierCurveEasingBlock); //# sourceMappingURL=flowGraphBezierCurveEasingBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphPlayAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphStopAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphStopAnimationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphPauseAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPauseAnimationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphInterpolationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphEasingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphEasingBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphBezierCurveEasingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphConsoleLogBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.js [app-ssr] (ecmascript)");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/index.js [app-ssr] (ecmascript) <locals>");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConditionalDataBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphConditionalDataBlock",
    ()=>FlowGraphConditionalDataBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphConditionalDataBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    /**
     * Creates a new instance of the block
     * @param config optional configuration for this block
     */ constructor(config){
        super(config);
        this.condition = this.registerDataInput("condition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"]);
        this.onTrue = this.registerDataInput("onTrue", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.onFalse = this.registerDataInput("onFalse", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.output = this.registerDataOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    /**
     * @internal
     */ _updateOutputs(context) {
        // get the value of the condition
        const condition = this.condition.getValue(context);
        // set the value based on the condition truth-ness.
        this.output.setValue(condition ? this.onTrue.getValue(context) : this.onFalse.getValue(context), context);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return "FlowGraphConditionalBlock" /* FlowGraphBlockNames.Conditional */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphConditionalBlock" /* FlowGraphBlockNames.Conditional */ , FlowGraphConditionalDataBlock); //# sourceMappingURL=flowGraphConditionalDataBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphGetVariableBlock",
    ()=>FlowGraphGetVariableBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphGetVariableBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    /**
     * Construct a FlowGraphGetVariableBlock.
     * @param config construction parameters
     */ constructor(config){
        super(config);
        this.config = config;
        // The output connection has to have the name of the variable.
        this.value = this.registerDataOutput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config.initialValue);
    }
    /**
     * @internal
     */ _updateOutputs(context) {
        const variableNameValue = this.config.variable;
        if (context.hasVariable(variableNameValue)) {
            this.value.setValue(context.getVariable(variableNameValue), context);
        }
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     */ serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.config.variable = this.config.variable;
    }
    getClassName() {
        return "FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphGetVariableBlock" /* FlowGraphBlockNames.GetVariable */ , FlowGraphGetVariableBlock); //# sourceMappingURL=flowGraphGetVariableBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSetVariableBlock",
    ()=>FlowGraphSetVariableBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphSetVariableBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(config){
        super(config);
        // check if the variable is defined
        if (!config.variable && !config.variables) {
            throw new Error("FlowGraphSetVariableBlock: variable/variables is not defined");
        }
        // check if the variable is an array
        if (config.variables && config.variable) {
            throw new Error("FlowGraphSetVariableBlock: variable and variables are both defined");
        }
        // check if we have either a variable or variables. If we have variables, set the inputs correctly
        if (config.variables) {
            for (const variable of config.variables){
                this.registerDataInput(variable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
            }
        } else {
            this.registerDataInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        }
    }
    _execute(context, _callingSignal) {
        if (this.config?.variables) {
            for (const variable of this.config.variables){
                this._saveVariable(context, variable);
            }
        } else {
            this._saveVariable(context, this.config?.variable, "value");
        }
        this.out._activateSignal(context);
    }
    _saveVariable(context, variableName, inputName) {
        // check if there is an animation(group) running on this variable. If there is, stop the animation - a value was force-set.
        const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        for (const animationUniqueId of currentlyRunningAnimationGroups){
            const animationGroup = context.assetsContext.animationGroups.find((animationGroup)=>animationGroup.uniqueId == animationUniqueId);
            if (animationGroup) {
                // check if there is a target animation that has the target set to be the context
                for (const targetAnimation of animationGroup.targetedAnimations){
                    // check if the target property is the variable we are setting
                    if (targetAnimation.target === context) {
                        // check the variable name
                        if (targetAnimation.animation.targetProperty === variableName) {
                            // stop the animation
                            animationGroup.stop();
                            // remove the animation from the currently running animations
                            const index = currentlyRunningAnimationGroups.indexOf(animationUniqueId);
                            if (index > -1) {
                                currentlyRunningAnimationGroups.splice(index, 1);
                            }
                            context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunningAnimationGroups);
                            break;
                        }
                    }
                }
            }
        }
        const value = this.getDataInput(inputName || variableName)?.getValue(context);
        context.setVariable(variableName, value);
    }
    getClassName() {
        return "FlowGraphSetVariableBlock" /* FlowGraphBlockNames.SetVariable */ ;
    }
    serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.config.variable = this.config?.variable;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSetVariableBlock" /* FlowGraphBlockNames.SetVariable */ , FlowGraphSetVariableBlock); //# sourceMappingURL=flowGraphSetVariableBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphTransformCoordinatesSystemBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphTransformCoordinatesSystemBlock",
    ()=>FlowGraphTransformCoordinatesSystemBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphTransformCoordinatesSystemBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    /**
     * Creates a new FlowGraphCoordinateTransformBlock
     * @param config optional configuration for this block
     */ constructor(config){
        super(config);
        this.sourceSystem = this.registerDataInput("sourceSystem", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.destinationSystem = this.registerDataInput("destinationSystem", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.inputCoordinates = this.registerDataInput("inputCoordinates", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
        this.outputCoordinates = this.registerDataOutput("outputCoordinates", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
    }
    _updateOutputs(_context) {
        const sourceSystemValue = this.sourceSystem.getValue(_context);
        const destinationSystemValue = this.destinationSystem.getValue(_context);
        const inputCoordinatesValue = this.inputCoordinates.getValue(_context);
        // takes coordinates from source space to world space
        const sourceWorld = sourceSystemValue.getWorldMatrix();
        // takes coordinates from destination space to world space
        const destinationWorld = destinationSystemValue.getWorldMatrix();
        const destinationWorldInverse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0].copyFrom(destinationWorld);
        // takes coordinates from world space to destination space
        destinationWorldInverse.invert();
        const sourceToDestination = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
        // takes coordinates from source space to world space to destination space
        destinationWorldInverse.multiplyToRef(sourceWorld, sourceToDestination);
        const outputCoordinatesValue = this.outputCoordinates.getValue(_context);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(inputCoordinatesValue, sourceToDestination, outputCoordinatesValue);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return "FlowGraphTransformCoordinatesSystemBlock" /* FlowGraphBlockNames.TransformCoordinatesSystem */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphTransformCoordinatesSystemBlock" /* FlowGraphBlockNames.TransformCoordinatesSystem */ , FlowGraphTransformCoordinatesSystemBlock); //# sourceMappingURL=flowGraphTransformCoordinatesSystemBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphCachedOperationBlock",
    ()=>FlowGraphCachedOperationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
;
;
const CacheName = "cachedOperationValue";
const CacheExecIdName = "cachedExecutionId";
class FlowGraphCachedOperationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(outputRichType, config){
        super(config);
        this.value = this.registerDataOutput("value", outputRichType);
        this.isValid = this.registerDataOutput("isValid", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"]);
    }
    _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, CacheExecIdName, -1);
        const cachedValue = context._getExecutionVariable(this, CacheName, null);
        if (cachedValue !== undefined && cachedValue !== null && cachedExecutionId === context.executionId) {
            this.isValid.setValue(true, context);
            this.value.setValue(cachedValue, context);
        } else {
            try {
                const calculatedValue = this._doOperation(context);
                if (calculatedValue === undefined || calculatedValue === null) {
                    this.isValid.setValue(false, context);
                    return;
                }
                context._setExecutionVariable(this, CacheName, calculatedValue);
                context._setExecutionVariable(this, CacheExecIdName, context.executionId);
                this.value.setValue(calculatedValue, context);
                this.isValid.setValue(true, context);
            } catch (e) {
                this.isValid.setValue(false, context);
            }
        }
    }
} //# sourceMappingURL=flowGraphCachedOperationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphGetPropertyBlock",
    ()=>FlowGraphGetPropertyBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphGetPropertyBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCachedOperationBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config);
        this.config = config;
        this.object = this.registerDataInput("object", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config.object);
        this.propertyName = this.registerDataInput("propertyName", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config.propertyName);
        this.customGetFunction = this.registerDataInput("customGetFunction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _doOperation(context) {
        const getter = this.customGetFunction.getValue(context);
        let value;
        if (getter) {
            value = getter(this.object.getValue(context), this.propertyName.getValue(context), context);
        } else {
            const target = this.object.getValue(context);
            const propertyName = this.propertyName.getValue(context);
            value = target && propertyName ? this._getPropertyValue(target, propertyName) : undefined;
        }
        return value;
    }
    _getPropertyValue(target, propertyName) {
        const path = propertyName.split(".");
        let value = target;
        for (const prop of path){
            value = value[prop];
            if (value === undefined) {
                return;
            }
        }
        return value;
    }
    getClassName() {
        return "FlowGraphGetPropertyBlock" /* FlowGraphBlockNames.GetProperty */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphGetPropertyBlock" /* FlowGraphBlockNames.GetProperty */ , FlowGraphGetPropertyBlock); //# sourceMappingURL=flowGraphGetPropertyBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSetPropertyBlock",
    ()=>FlowGraphSetPropertyBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphSetPropertyBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        this.object = this.registerDataInput("object", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config.target);
        this.value = this.registerDataInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.propertyName = this.registerDataInput("propertyName", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config.propertyName);
        this.customSetFunction = this.registerDataInput("customSetFunction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _execute(context, _callingSignal) {
        try {
            const target = this.object.getValue(context);
            const value = this.value.getValue(context);
            const propertyName = this.propertyName.getValue(context);
            this._stopRunningAnimations(context, target, propertyName);
            const setFunction = this.customSetFunction.getValue(context);
            if (setFunction) {
                setFunction(target, propertyName, value, context);
            } else {
                this._setPropertyValue(target, propertyName, value);
            }
        } catch (e) {
            this._reportError(context, e);
        }
        this.out._activateSignal(context);
    }
    _stopRunningAnimations(context, target, propertyName) {
        const currentlyRunningAnimationGroups = context._getGlobalContextVariable("currentlyRunningAnimationGroups", []);
        for (const uniqueId of currentlyRunningAnimationGroups){
            const animationGroup = context.assetsContext.animationGroups.find((animationGroup)=>animationGroup.uniqueId === uniqueId);
            if (animationGroup) {
                for (const targetedAnimations of animationGroup.targetedAnimations){
                    if (targetedAnimations.target === target && targetedAnimations.animation.targetProperty === propertyName) {
                        animationGroup.stop(true);
                        animationGroup.dispose();
                        const index = currentlyRunningAnimationGroups.indexOf(uniqueId);
                        if (index !== -1) {
                            currentlyRunningAnimationGroups.splice(index, 1);
                            context._setGlobalContextVariable("currentlyRunningAnimationGroups", currentlyRunningAnimationGroups);
                        }
                    }
                }
            }
        }
    }
    _setPropertyValue(target, propertyName, value) {
        const path = propertyName.split(".");
        let obj = target;
        for(let i = 0; i < path.length - 1; i++){
            const prop = path[i];
            if (obj[prop] === undefined) {
                obj[prop] = {};
            }
            obj = obj[prop];
        }
        obj[path[path.length - 1]] = value;
    }
    getClassName() {
        return "FlowGraphSetPropertyBlock" /* FlowGraphBlockNames.SetProperty */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSetPropertyBlock" /* FlowGraphBlockNames.SetProperty */ , FlowGraphSetPropertyBlock); //# sourceMappingURL=flowGraphSetPropertyBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConstantBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphConstantBlock",
    ()=>FlowGraphConstantBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/serialization.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphConstantBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        this.output = this.registerDataOutput("output", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeFromValue"])(config.value));
    }
    _updateOutputs(context) {
        this.output.setValue(this.config.value, context);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return "FlowGraphConstantBlock" /* FlowGraphBlockNames.Constant */ ;
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     * @param valueSerializeFunction the function to use to serialize the value
     */ serialize(serializationObject = {}, valueSerializeFunction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultValueSerializationFunction"]) {
        super.serialize(serializationObject);
        valueSerializeFunction("value", this.config.value, serializationObject.config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphConstantBlock" /* FlowGraphBlockNames.Constant */ , FlowGraphConstantBlock); //# sourceMappingURL=flowGraphConstantBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphGetAssetBlock",
    ()=>FlowGraphGetAssetBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAssetsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAssetsContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class FlowGraphGetAssetBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        this.type = this.registerDataInput("type", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config.type);
        this.value = this.registerDataOutput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.index = this.registerDataInput("index", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(config.index ?? -1)));
    }
    _updateOutputs(context) {
        const type = this.type.getValue(context);
        const index = this.index.getValue(context);
        // get the asset from the context
        const asset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAssetsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetFlowGraphAssetWithType"])(context.assetsContext, type, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(index), this.config.useIndexAsUniqueId);
        this.value.setValue(asset, context);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return "FlowGraphGetAssetBlock" /* FlowGraphBlockNames.GetAsset */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphGetAssetBlock" /* FlowGraphBlockNames.GetAsset */ , FlowGraphGetAssetBlock); //# sourceMappingURL=flowGraphGetAssetBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphDataSwitchBlock",
    ()=>FlowGraphDataSwitchBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphDataSwitchBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        this._inputCases = new Map();
        this.case = this.registerDataInput("case", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], NaN);
        this.default = this.registerDataInput("default", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.value = this.registerDataOutput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        // iterate the set not using for of
        const array = this.config.cases || [];
        for (let caseValue of array){
            // if treat as integers, make sure not to set it again if it exists
            caseValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(caseValue);
            if (this.config.treatCasesAsIntegers) {
                caseValue = caseValue | 0;
                if (this._inputCases.has(caseValue)) {
                    return;
                }
            }
            this._inputCases.set(caseValue, this.registerDataInput(`in_${caseValue}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]));
        }
    }
    _updateOutputs(context) {
        const selectionValue = this.case.getValue(context);
        let outputValue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumeric"])(selectionValue)) {
            outputValue = this._getOutputValueForCase((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(selectionValue), context);
        }
        if (!outputValue) {
            outputValue = this.default.getValue(context);
        }
        this.value.setValue(outputValue, context);
    }
    _getOutputValueForCase(caseValue, context) {
        return this._inputCases.get(caseValue)?.getValue(context);
    }
    getClassName() {
        return "FlowGraphDataSwitchBlock" /* FlowGraphBlockNames.DataSwitch */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphDataSwitchBlock" /* FlowGraphBlockNames.DataSwitch */ , FlowGraphDataSwitchBlock); //# sourceMappingURL=flowGraphDataSwitchBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphBinaryOperationBlock",
    ()=>FlowGraphBinaryOperationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js [app-ssr] (ecmascript)");
;
class FlowGraphBinaryOperationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCachedOperationBlock"] {
    constructor(leftRichType, rightRichType, resultRichType, _operation, _className, config){
        super(resultRichType, config);
        this._operation = _operation;
        this._className = _className;
        this.a = this.registerDataInput("a", leftRichType);
        this.b = this.registerDataInput("b", rightRichType);
    }
    /**
     * the operation performed by this block
     * @param context the graph context
     * @returns the result of the operation
     */ _doOperation(context) {
        const a = this.a.getValue(context);
        const b = this.b.getValue(context);
        return this._operation(a, b);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return this._className;
    }
} //# sourceMappingURL=flowGraphBinaryOperationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConstantOperationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphConstantOperationBlock",
    ()=>FlowGraphConstantOperationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js [app-ssr] (ecmascript)");
;
class FlowGraphConstantOperationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCachedOperationBlock"] {
    constructor(richType, _operation, _className, config){
        super(richType, config);
        this._operation = _operation;
        this._className = _className;
    }
    /**
     * the operation performed by this block
     * @param context the graph context
     * @returns the result of the operation
     */ _doOperation(context) {
        return this._operation(context);
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return this._className;
    }
} //# sourceMappingURL=flowGraphConstantOperationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphUnaryOperationBlock",
    ()=>FlowGraphUnaryOperationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js [app-ssr] (ecmascript)");
;
class FlowGraphUnaryOperationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCachedOperationBlock"] {
    constructor(inputRichType, resultRichType, _operation, _className, config){
        super(resultRichType, config);
        this._operation = _operation;
        this._className = _className;
        this.a = this.registerDataInput("a", inputRichType);
    }
    /**
     * the operation performed by this block
     * @param context the graph context
     * @returns the result of the operation
     */ _doOperation(context) {
        return this._operation(this.a.getValue(context));
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return this._className;
    }
} //# sourceMappingURL=flowGraphUnaryOperationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphTernaryOperationBlock",
    ()=>FlowGraphTernaryOperationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js [app-ssr] (ecmascript)");
;
class FlowGraphTernaryOperationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCachedOperationBlock"] {
    constructor(t1Type, t2Type, t3Type, resultRichType, _operation, _className, config){
        super(resultRichType, config);
        this._operation = _operation;
        this._className = _className;
        this.a = this.registerDataInput("a", t1Type);
        this.b = this.registerDataInput("b", t2Type);
        this.c = this.registerDataInput("c", t3Type);
    }
    /**
     * the operation performed by this block
     * @param context the graph context
     * @returns the result of the operation
     */ _doOperation(context) {
        return this._operation(this.a.getValue(context), this.b.getValue(context), this.c.getValue(context));
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return this._className;
    }
} //# sourceMappingURL=flowGraphTernaryOperationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphAbsBlock",
    ()=>FlowGraphAbsBlock,
    "FlowGraphAcosBlock",
    ()=>FlowGraphAcosBlock,
    "FlowGraphAcoshBlock",
    ()=>FlowGraphAcoshBlock,
    "FlowGraphAddBlock",
    ()=>FlowGraphAddBlock,
    "FlowGraphAsinBlock",
    ()=>FlowGraphAsinBlock,
    "FlowGraphAsinhBlock",
    ()=>FlowGraphAsinhBlock,
    "FlowGraphAtan2Block",
    ()=>FlowGraphAtan2Block,
    "FlowGraphAtanBlock",
    ()=>FlowGraphAtanBlock,
    "FlowGraphAtanhBlock",
    ()=>FlowGraphAtanhBlock,
    "FlowGraphBitwiseAndBlock",
    ()=>FlowGraphBitwiseAndBlock,
    "FlowGraphBitwiseLeftShiftBlock",
    ()=>FlowGraphBitwiseLeftShiftBlock,
    "FlowGraphBitwiseNotBlock",
    ()=>FlowGraphBitwiseNotBlock,
    "FlowGraphBitwiseOrBlock",
    ()=>FlowGraphBitwiseOrBlock,
    "FlowGraphBitwiseRightShiftBlock",
    ()=>FlowGraphBitwiseRightShiftBlock,
    "FlowGraphBitwiseXorBlock",
    ()=>FlowGraphBitwiseXorBlock,
    "FlowGraphCeilBlock",
    ()=>FlowGraphCeilBlock,
    "FlowGraphClampBlock",
    ()=>FlowGraphClampBlock,
    "FlowGraphCosBlock",
    ()=>FlowGraphCosBlock,
    "FlowGraphCoshBlock",
    ()=>FlowGraphCoshBlock,
    "FlowGraphCubeRootBlock",
    ()=>FlowGraphCubeRootBlock,
    "FlowGraphDegToRadBlock",
    ()=>FlowGraphDegToRadBlock,
    "FlowGraphDivideBlock",
    ()=>FlowGraphDivideBlock,
    "FlowGraphEBlock",
    ()=>FlowGraphEBlock,
    "FlowGraphEqualityBlock",
    ()=>FlowGraphEqualityBlock,
    "FlowGraphExpBlock",
    ()=>FlowGraphExpBlock,
    "FlowGraphFloorBlock",
    ()=>FlowGraphFloorBlock,
    "FlowGraphFractionBlock",
    ()=>FlowGraphFractionBlock,
    "FlowGraphGreaterThanBlock",
    ()=>FlowGraphGreaterThanBlock,
    "FlowGraphGreaterThanOrEqualBlock",
    ()=>FlowGraphGreaterThanOrEqualBlock,
    "FlowGraphInfBlock",
    ()=>FlowGraphInfBlock,
    "FlowGraphIsInfinityBlock",
    ()=>FlowGraphIsInfinityBlock,
    "FlowGraphIsNanBlock",
    ()=>FlowGraphIsNanBlock,
    "FlowGraphLeadingZerosBlock",
    ()=>FlowGraphLeadingZerosBlock,
    "FlowGraphLessThanBlock",
    ()=>FlowGraphLessThanBlock,
    "FlowGraphLessThanOrEqualBlock",
    ()=>FlowGraphLessThanOrEqualBlock,
    "FlowGraphLog10Block",
    ()=>FlowGraphLog10Block,
    "FlowGraphLog2Block",
    ()=>FlowGraphLog2Block,
    "FlowGraphLogBlock",
    ()=>FlowGraphLogBlock,
    "FlowGraphMathInterpolationBlock",
    ()=>FlowGraphMathInterpolationBlock,
    "FlowGraphMaxBlock",
    ()=>FlowGraphMaxBlock,
    "FlowGraphMinBlock",
    ()=>FlowGraphMinBlock,
    "FlowGraphModuloBlock",
    ()=>FlowGraphModuloBlock,
    "FlowGraphMultiplyBlock",
    ()=>FlowGraphMultiplyBlock,
    "FlowGraphNaNBlock",
    ()=>FlowGraphNaNBlock,
    "FlowGraphNegationBlock",
    ()=>FlowGraphNegationBlock,
    "FlowGraphOneBitsCounterBlock",
    ()=>FlowGraphOneBitsCounterBlock,
    "FlowGraphPiBlock",
    ()=>FlowGraphPiBlock,
    "FlowGraphPowerBlock",
    ()=>FlowGraphPowerBlock,
    "FlowGraphRadToDegBlock",
    ()=>FlowGraphRadToDegBlock,
    "FlowGraphRandomBlock",
    ()=>FlowGraphRandomBlock,
    "FlowGraphRoundBlock",
    ()=>FlowGraphRoundBlock,
    "FlowGraphSaturateBlock",
    ()=>FlowGraphSaturateBlock,
    "FlowGraphSignBlock",
    ()=>FlowGraphSignBlock,
    "FlowGraphSinBlock",
    ()=>FlowGraphSinBlock,
    "FlowGraphSinhBlock",
    ()=>FlowGraphSinhBlock,
    "FlowGraphSquareRootBlock",
    ()=>FlowGraphSquareRootBlock,
    "FlowGraphSubtractBlock",
    ()=>FlowGraphSubtractBlock,
    "FlowGraphTanBlock",
    ()=>FlowGraphTanBlock,
    "FlowGraphTanhBlock",
    ()=>FlowGraphTanhBlock,
    "FlowGraphTrailingZerosBlock",
    ()=>FlowGraphTrailingZerosBlock,
    "FlowGraphTruncBlock",
    ()=>FlowGraphTruncBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConstantOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphTernaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphMatrix.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
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
class FlowGraphAddBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    /**
     * Construct a new add block.
     * @param config optional configuration
     */ constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (a, b)=>this._polymorphicAdd(a, b), "FlowGraphAddBlock" /* FlowGraphBlockNames.Add */ , config);
    }
    _polymorphicAdd(a, b) {
        const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
        const bClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(b);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameVectorOrQuaternionClass"])(aClassName, bClassName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameMatrixClass"])(aClassName, bClassName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameIntegerClass"])(aClassName, bClassName)) {
            // cast to vector3, but any other cast will be fine
            return a.add(b);
        } else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */  || bClassName === "Vector4" /* FlowGraphTypes.Vector4 */ ) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](a.x, a.y, a.z, a.w).addInPlace(b);
        } else if (aClassName === "Vector4" /* FlowGraphTypes.Vector4 */  || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ ) {
            return a.add(b);
        } else {
            // at this point at least one of the variables is a number.
            if (this.config?.preventIntegerFloatArithmetic && typeof a !== typeof b) {
                throw new Error("Cannot add different types of numbers.");
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(b);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphAddBlock" /* FlowGraphBlockNames.Add */ , FlowGraphAddBlock);
class FlowGraphSubtractBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    /**
     * Construct a new subtract block.
     * @param config optional configuration
     */ constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (a, b)=>this._polymorphicSubtract(a, b), "FlowGraphSubtractBlock" /* FlowGraphBlockNames.Subtract */ , config);
    }
    _polymorphicSubtract(a, b) {
        const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
        const bClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(b);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameVectorOrQuaternionClass"])(aClassName, bClassName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameIntegerClass"])(aClassName, bClassName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameMatrixClass"])(aClassName, bClassName)) {
            // cast to vector3, but it can be casted to any vector type
            return a.subtract(b);
        } else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */  || bClassName === "Vector4" /* FlowGraphTypes.Vector4 */ ) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](a.x, a.y, a.z, a.w).subtractInPlace(b);
        } else if (aClassName === "Vector4" /* FlowGraphTypes.Vector4 */  || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ ) {
            return a.subtract(b);
        } else {
            // at this point at least one of the variables is a number.
            if (this.config?.preventIntegerFloatArithmetic && typeof a !== typeof b) {
                throw new Error("Cannot add different types of numbers.");
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(b);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSubtractBlock" /* FlowGraphBlockNames.Subtract */ , FlowGraphSubtractBlock);
class FlowGraphMultiplyBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (a, b)=>this._polymorphicMultiply(a, b), "FlowGraphMultiplyBlock" /* FlowGraphBlockNames.Multiply */ , config);
    }
    _polymorphicMultiply(a, b) {
        const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
        const bClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(b);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameVectorOrQuaternionClass"])(aClassName, bClassName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameIntegerClass"])(aClassName, bClassName)) {
            // cast to vector3, but it can be casted to any vector type
            return a.multiply(b);
        } else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */  || bClassName === "Vector4" /* FlowGraphTypes.Vector4 */ ) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](a.x, a.y, a.z, a.w).multiplyInPlace(b);
        } else if (aClassName === "Vector4" /* FlowGraphTypes.Vector4 */  || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ ) {
            return a.multiply(b);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameMatrixClass"])(aClassName, bClassName)) {
            if (this.config?.useMatrixPerComponent) {
                // this is the definition of multiplication of glTF interactivity
                // get a's m as array, and multiply each component with b's m
                const aM = a.m;
                for(let i = 0; i < aM.length; i++){
                    aM[i] *= b.m[i];
                }
                if (aClassName === "Matrix2D" /* FlowGraphTypes.Matrix2D */ ) {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"](aM);
                } else if (aClassName === "Matrix3D" /* FlowGraphTypes.Matrix3D */ ) {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"](aM);
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArray(aM);
                }
            } else {
                a = a;
                b = b;
                return b.multiply(a);
            }
        } else {
            // at this point at least one of the variables is a number.
            if (this.config?.preventIntegerFloatArithmetic && typeof a !== typeof b) {
                throw new Error("Cannot add different types of numbers.");
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(b);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMultiplyBlock" /* FlowGraphBlockNames.Multiply */ , FlowGraphMultiplyBlock);
class FlowGraphDivideBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    /**
     * Construct a new divide block.
     * @param config - Optional configuration
     */ constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.type), (a, b)=>this._polymorphicDivide(a, b), "FlowGraphDivideBlock" /* FlowGraphBlockNames.Divide */ , config);
    }
    _polymorphicDivide(a, b) {
        const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
        const bClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(b);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameVectorOrQuaternionClass"])(aClassName, bClassName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameIntegerClass"])(aClassName, bClassName)) {
            // cast to vector3, but it can be casted to any vector type
            return a.divide(b);
        } else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */  || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ ) {
            // this is a simple division (per component!), and should be also supported between Quat and Vector4. Therefore -
            const aClone = a.clone();
            aClone.x /= b.x;
            aClone.y /= b.y;
            aClone.z /= b.z;
            aClone.w /= b.w;
            return aClone;
        } else if (aClassName === "Quaternion" /* FlowGraphTypes.Quaternion */  || bClassName === "Vector4" /* FlowGraphTypes.Vector4 */ ) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](a.x, a.y, a.z, a.w).divideInPlace(b);
        } else if (aClassName === "Vector4" /* FlowGraphTypes.Vector4 */  || bClassName === "Quaternion" /* FlowGraphTypes.Quaternion */ ) {
            return a.divide(b);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameMatrixClass"])(aClassName, bClassName)) {
            if (this.config?.useMatrixPerComponent) {
                // get a's m as array, and divide each component with b's m
                const aM = a.m;
                for(let i = 0; i < aM.length; i++){
                    aM[i] /= b.m[i];
                }
                if (aClassName === "Matrix2D" /* FlowGraphTypes.Matrix2D */ ) {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"](aM);
                } else if (aClassName === "Matrix3D" /* FlowGraphTypes.Matrix3D */ ) {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"](aM);
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArray(aM);
                }
            } else {
                a = a;
                b = b;
                return a.divide(b);
            }
        } else {
            // at this point at least one of the variables is a number.
            if (this.config?.preventIntegerFloatArithmetic && typeof a !== typeof b) {
                throw new Error("Cannot add different types of numbers.");
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a) / (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(b);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphDivideBlock" /* FlowGraphBlockNames.Divide */ , FlowGraphDivideBlock);
class FlowGraphRandomBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConstantOperationBlock"] {
    /**
     * Construct a new random block.
     * @param config optional configuration
     */ constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (context)=>this._random(context), "FlowGraphRandomBlock" /* FlowGraphBlockNames.Random */ , config);
        this.min = this.registerDataInput("min", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], config?.min ?? 0);
        this.max = this.registerDataInput("max", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], config?.max ?? 1);
        if (config?.seed) {
            this._seed = config.seed;
        }
    }
    _isSeed(seed = this._seed) {
        return seed !== undefined;
    }
    _getRandomValue() {
        if (this._isSeed(this._seed)) {
            // compute seed-based random number, deterministic randomness!
            const x = Math.sin(this._seed++) * 10000;
            return x - Math.floor(x);
        }
        return Math.random();
    }
    _random(context) {
        const min = this.min.getValue(context);
        const max = this.max.getValue(context);
        return this._getRandomValue() * (max - min) + min;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphRandomBlock" /* FlowGraphBlockNames.Random */ , FlowGraphRandomBlock);
class FlowGraphEBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConstantOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], ()=>Math.E, "FlowGraphEBlock" /* FlowGraphBlockNames.E */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphEBlock" /* FlowGraphBlockNames.E */ , FlowGraphEBlock);
class FlowGraphPiBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConstantOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], ()=>Math.PI, "FlowGraphPIBlock" /* FlowGraphBlockNames.PI */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphPIBlock" /* FlowGraphBlockNames.PI */ , FlowGraphPiBlock);
class FlowGraphInfBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConstantOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], ()=>Number.POSITIVE_INFINITY, "FlowGraphInfBlock" /* FlowGraphBlockNames.Inf */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphInfBlock" /* FlowGraphBlockNames.Inf */ , FlowGraphInfBlock);
class FlowGraphNaNBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConstantOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], ()=>Number.NaN, "FlowGraphNaNBlock" /* FlowGraphBlockNames.NaN */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphNaNBlock" /* FlowGraphBlockNames.NaN */ , FlowGraphNaNBlock);
function ComponentWiseUnaryOperation(a, op) {
    const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
    switch(aClassName){
        case "FlowGraphInteger":
            a = a;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](op(a.value));
        case "Vector2" /* FlowGraphTypes.Vector2 */ :
            a = a;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](op(a.x), op(a.y));
        case "Vector3" /* FlowGraphTypes.Vector3 */ :
            a = a;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](op(a.x), op(a.y), op(a.z));
        case "Vector4" /* FlowGraphTypes.Vector4 */ :
            a = a;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](op(a.x), op(a.y), op(a.z), op(a.w));
        case "Quaternion" /* FlowGraphTypes.Quaternion */ :
            a = a;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](op(a.x), op(a.y), op(a.z), op(a.w));
        case "Matrix" /* FlowGraphTypes.Matrix */ :
            a = a;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArray(a.m.map(op));
        case "Matrix2D" /* FlowGraphTypes.Matrix2D */ :
            a = a;
            // reason for not using .map is performance
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"](a.m.map(op));
        case "Matrix3D" /* FlowGraphTypes.Matrix3D */ :
            a = a;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"](a.m.map(op));
        default:
            a = a;
            return op(a);
    }
}
class FlowGraphAbsBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicAbs(a), "FlowGraphAbsBlock" /* FlowGraphBlockNames.Abs */ , config);
    }
    _polymorphicAbs(a) {
        return ComponentWiseUnaryOperation(a, Math.abs);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphAbsBlock" /* FlowGraphBlockNames.Abs */ , FlowGraphAbsBlock);
class FlowGraphSignBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicSign(a), "FlowGraphSignBlock" /* FlowGraphBlockNames.Sign */ , config);
    }
    _polymorphicSign(a) {
        return ComponentWiseUnaryOperation(a, Math.sign);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSignBlock" /* FlowGraphBlockNames.Sign */ , FlowGraphSignBlock);
class FlowGraphTruncBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicTrunc(a), "FlowGraphTruncBlock" /* FlowGraphBlockNames.Trunc */ , config);
    }
    _polymorphicTrunc(a) {
        return ComponentWiseUnaryOperation(a, Math.trunc);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphTruncBlock" /* FlowGraphBlockNames.Trunc */ , FlowGraphTruncBlock);
class FlowGraphFloorBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicFloor(a), "FlowGraphFloorBlock" /* FlowGraphBlockNames.Floor */ , config);
    }
    _polymorphicFloor(a) {
        return ComponentWiseUnaryOperation(a, Math.floor);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphFloorBlock" /* FlowGraphBlockNames.Floor */ , FlowGraphFloorBlock);
class FlowGraphCeilBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicCeiling(a), "FlowGraphCeilBlock" /* FlowGraphBlockNames.Ceil */ , config);
    }
    _polymorphicCeiling(a) {
        return ComponentWiseUnaryOperation(a, Math.ceil);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCeilBlock" /* FlowGraphBlockNames.Ceil */ , FlowGraphCeilBlock);
class FlowGraphRoundBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicRound(a), "FlowGraphRoundBlock" /* FlowGraphBlockNames.Round */ , config);
    }
    _polymorphicRound(a) {
        return ComponentWiseUnaryOperation(a, (a)=>a < 0 && this.config?.roundHalfAwayFromZero ? -Math.round(-a) : Math.round(a));
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphRoundBlock" /* FlowGraphBlockNames.Round */ , FlowGraphRoundBlock);
class FlowGraphFractionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicFraction(a), "FlowGraphFractBlock" /* FlowGraphBlockNames.Fraction */ , config);
    }
    _polymorphicFraction(a) {
        return ComponentWiseUnaryOperation(a, (a)=>a - Math.floor(a));
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphFractBlock" /* FlowGraphBlockNames.Fraction */ , FlowGraphFractionBlock);
class FlowGraphNegationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    /**
     * construct a new negation block.
     * @param config optional configuration
     */ constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicNeg(a), "FlowGraphNegationBlock" /* FlowGraphBlockNames.Negation */ , config);
    }
    _polymorphicNeg(a) {
        return ComponentWiseUnaryOperation(a, (a)=>-a);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphNegationBlock" /* FlowGraphBlockNames.Negation */ , FlowGraphNegationBlock);
function ComponentWiseBinaryOperation(a, b, op) {
    const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
    switch(aClassName){
        case "FlowGraphInteger":
            a = a;
            b = b;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](op(a.value, b.value));
        case "Vector2" /* FlowGraphTypes.Vector2 */ :
            a = a;
            b = b;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](op(a.x, b.x), op(a.y, b.y));
        case "Vector3" /* FlowGraphTypes.Vector3 */ :
            a = a;
            b = b;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](op(a.x, b.x), op(a.y, b.y), op(a.z, b.z));
        case "Vector4" /* FlowGraphTypes.Vector4 */ :
            a = a;
            b = b;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](op(a.x, b.x), op(a.y, b.y), op(a.z, b.z), op(a.w, b.w));
        case "Quaternion" /* FlowGraphTypes.Quaternion */ :
            a = a;
            b = b;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](op(a.x, b.x), op(a.y, b.y), op(a.z, b.z), op(a.w, b.w));
        case "Matrix" /* FlowGraphTypes.Matrix */ :
            a = a;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArray(a.m.map((v, i)=>op(v, b.m[i])));
        case "Matrix2D" /* FlowGraphTypes.Matrix2D */ :
            a = a;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"](a.m.map((v, i)=>op(v, b.m[i])));
        case "Matrix3D" /* FlowGraphTypes.Matrix3D */ :
            a = a;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"](a.m.map((v, i)=>op(v, b.m[i])));
        default:
            return op((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(b));
    }
}
class FlowGraphModuloBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a, b)=>this._polymorphicRemainder(a, b), "FlowGraphModuloBlock" /* FlowGraphBlockNames.Modulo */ , config);
    }
    _polymorphicRemainder(a, b) {
        return ComponentWiseBinaryOperation(a, b, (a, b)=>a % b);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphModuloBlock" /* FlowGraphBlockNames.Modulo */ , FlowGraphModuloBlock);
class FlowGraphMinBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a, b)=>this._polymorphicMin(a, b), "FlowGraphMinBlock" /* FlowGraphBlockNames.Min */ , config);
    }
    _polymorphicMin(a, b) {
        return ComponentWiseBinaryOperation(a, b, Math.min);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMinBlock" /* FlowGraphBlockNames.Min */ , FlowGraphMinBlock);
class FlowGraphMaxBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a, b)=>this._polymorphicMax(a, b), "FlowGraphMaxBlock" /* FlowGraphBlockNames.Max */ , config);
    }
    _polymorphicMax(a, b) {
        return ComponentWiseBinaryOperation(a, b, Math.max);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMaxBlock" /* FlowGraphBlockNames.Max */ , FlowGraphMaxBlock);
function Clamp(a, b, c) {
    return Math.min(Math.max(a, Math.min(b, c)), Math.max(b, c));
}
function ComponentWiseTernaryOperation(a, b, c, op) {
    const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
    switch(aClassName){
        case "FlowGraphInteger":
            a = a;
            b = b;
            c = c;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](op(a.value, b.value, c.value));
        case "Vector2" /* FlowGraphTypes.Vector2 */ :
            a = a;
            b = b;
            c = c;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](op(a.x, b.x, c.x), op(a.y, b.y, c.y));
        case "Vector3" /* FlowGraphTypes.Vector3 */ :
            a = a;
            b = b;
            c = c;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](op(a.x, b.x, c.x), op(a.y, b.y, c.y), op(a.z, b.z, c.z));
        case "Vector4" /* FlowGraphTypes.Vector4 */ :
            a = a;
            b = b;
            c = c;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](op(a.x, b.x, c.x), op(a.y, b.y, c.y), op(a.z, b.z, c.z), op(a.w, b.w, c.w));
        case "Quaternion" /* FlowGraphTypes.Quaternion */ :
            a = a;
            b = b;
            c = c;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](op(a.x, b.x, c.x), op(a.y, b.y, c.y), op(a.z, b.z, c.z), op(a.w, b.w, c.w));
        case "Matrix" /* FlowGraphTypes.Matrix */ :
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArray(a.m.map((v, i)=>op(v, b.m[i], c.m[i])));
        case "Matrix2D" /* FlowGraphTypes.Matrix2D */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"](a.m.map((v, i)=>op(v, b.m[i], c.m[i])));
        case "Matrix3D" /* FlowGraphTypes.Matrix3D */ :
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"](a.m.map((v, i)=>op(v, b.m[i], c.m[i])));
        default:
            return op((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(b), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(c));
    }
}
class FlowGraphClampBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphTernaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTernaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a, b, c)=>this._polymorphicClamp(a, b, c), "FlowGraphClampBlock" /* FlowGraphBlockNames.Clamp */ , config);
    }
    _polymorphicClamp(a, b, c) {
        return ComponentWiseTernaryOperation(a, b, c, Clamp);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphClampBlock" /* FlowGraphBlockNames.Clamp */ , FlowGraphClampBlock);
function Saturate(a) {
    return Math.min(Math.max(a, 0), 1);
}
class FlowGraphSaturateBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicSaturate(a), "FlowGraphSaturateBlock" /* FlowGraphBlockNames.Saturate */ , config);
    }
    _polymorphicSaturate(a) {
        return ComponentWiseUnaryOperation(a, Saturate);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSaturateBlock" /* FlowGraphBlockNames.Saturate */ , FlowGraphSaturateBlock);
function Interpolate(a, b, c) {
    return (1 - c) * a + c * b;
}
class FlowGraphMathInterpolationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphTernaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTernaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a, b, c)=>this._polymorphicInterpolate(a, b, c), "FlowGraphMathInterpolationBlock" /* FlowGraphBlockNames.MathInterpolation */ , config);
    }
    _polymorphicInterpolate(a, b, c) {
        return ComponentWiseTernaryOperation(a, b, c, Interpolate);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMathInterpolationBlock" /* FlowGraphBlockNames.MathInterpolation */ , FlowGraphMathInterpolationBlock);
class FlowGraphEqualityBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a, b)=>this._polymorphicEq(a, b), "FlowGraphEqualityBlock" /* FlowGraphBlockNames.Equality */ , config);
    }
    _polymorphicEq(a, b) {
        const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
        const bClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(b);
        if (typeof a !== typeof b) {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameVectorOrQuaternionClass"])(aClassName, bClassName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameMatrixClass"])(aClassName, bClassName) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_AreSameIntegerClass"])(aClassName, bClassName)) {
            return a.equals(b);
        } else {
            return a === b;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphEqualityBlock" /* FlowGraphBlockNames.Equality */ , FlowGraphEqualityBlock);
function ComparisonOperators(a, b, op) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumeric"])(a) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumeric"])(b)) {
        return op((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(b));
    } else {
        throw new Error(`Cannot compare ${a} and ${b}`);
    }
}
class FlowGraphLessThanBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a, b)=>this._polymorphicLessThan(a, b), "FlowGraphLessThanBlock" /* FlowGraphBlockNames.LessThan */ , config);
    }
    _polymorphicLessThan(a, b) {
        return ComparisonOperators(a, b, (a, b)=>a < b);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphLessThanBlock" /* FlowGraphBlockNames.LessThan */ , FlowGraphLessThanBlock);
class FlowGraphLessThanOrEqualBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a, b)=>this._polymorphicLessThanOrEqual(a, b), "FlowGraphLessThanOrEqualBlock" /* FlowGraphBlockNames.LessThanOrEqual */ , config);
    }
    _polymorphicLessThanOrEqual(a, b) {
        return ComparisonOperators(a, b, (a, b)=>a <= b);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphLessThanOrEqualBlock" /* FlowGraphBlockNames.LessThanOrEqual */ , FlowGraphLessThanOrEqualBlock);
class FlowGraphGreaterThanBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a, b)=>this._polymorphicGreaterThan(a, b), "FlowGraphGreaterThanBlock" /* FlowGraphBlockNames.GreaterThan */ , config);
    }
    _polymorphicGreaterThan(a, b) {
        return ComparisonOperators(a, b, (a, b)=>a > b);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphGreaterThanBlock" /* FlowGraphBlockNames.GreaterThan */ , FlowGraphGreaterThanBlock);
class FlowGraphGreaterThanOrEqualBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a, b)=>this._polymorphicGreaterThanOrEqual(a, b), "FlowGraphGreaterThanOrEqualBlock" /* FlowGraphBlockNames.GreaterThanOrEqual */ , config);
    }
    _polymorphicGreaterThanOrEqual(a, b) {
        return ComparisonOperators(a, b, (a, b)=>a >= b);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphGreaterThanOrEqualBlock" /* FlowGraphBlockNames.GreaterThanOrEqual */ , FlowGraphGreaterThanOrEqualBlock);
class FlowGraphIsNanBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a)=>this._polymorphicIsNan(a), "FlowGraphIsNaNBlock" /* FlowGraphBlockNames.IsNaN */ , config);
    }
    _polymorphicIsNan(a) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumeric"])(a, true)) {
            return isNaN((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a));
        } else {
            throw new Error(`Cannot get NaN of ${a}`);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphIsNaNBlock" /* FlowGraphBlockNames.IsNaN */ , FlowGraphIsNanBlock);
class FlowGraphIsInfinityBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a)=>this._polymorphicIsInf(a), "FlowGraphIsInfBlock" /* FlowGraphBlockNames.IsInfinity */ , config);
    }
    _polymorphicIsInf(a) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumeric"])(a)) {
            return !isFinite((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(a));
        } else {
            throw new Error(`Cannot get isInf of ${a}`);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphIsInfBlock" /* FlowGraphBlockNames.IsInfinity */ , FlowGraphIsInfinityBlock);
class FlowGraphDegToRadBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    /**
     * Constructs a new instance of the flow graph math block.
     * @param config - Optional configuration for the flow graph block.
     */ constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicDegToRad(a), "FlowGraphDegToRadBlock" /* FlowGraphBlockNames.DegToRad */ , config);
    }
    _degToRad(a) {
        return a * Math.PI / 180;
    }
    _polymorphicDegToRad(a) {
        return ComponentWiseUnaryOperation(a, this._degToRad);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphDegToRadBlock" /* FlowGraphBlockNames.DegToRad */ , FlowGraphDegToRadBlock);
class FlowGraphRadToDegBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicRadToDeg(a), "FlowGraphRadToDegBlock" /* FlowGraphBlockNames.RadToDeg */ , config);
    }
    _radToDeg(a) {
        return a * 180 / Math.PI;
    }
    _polymorphicRadToDeg(a) {
        return ComponentWiseUnaryOperation(a, this._radToDeg);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphRadToDegBlock" /* FlowGraphBlockNames.RadToDeg */ , FlowGraphRadToDegBlock);
class FlowGraphSinBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicSin(a), "FlowGraphSinBlock" /* FlowGraphBlockNames.Sin */ , config);
    }
    _polymorphicSin(a) {
        return ComponentWiseUnaryOperation(a, Math.sin);
    }
}
class FlowGraphCosBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicCos(a), "FlowGraphCosBlock" /* FlowGraphBlockNames.Cos */ , config);
    }
    _polymorphicCos(a) {
        return ComponentWiseUnaryOperation(a, Math.cos);
    }
}
class FlowGraphTanBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicTan(a), "FlowGraphTanBlock" /* FlowGraphBlockNames.Tan */ , config);
    }
    _polymorphicTan(a) {
        return ComponentWiseUnaryOperation(a, Math.tan);
    }
}
class FlowGraphAsinBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicAsin(a), "FlowGraphASinBlock" /* FlowGraphBlockNames.Asin */ , config);
    }
    _polymorphicAsin(a) {
        return ComponentWiseUnaryOperation(a, Math.asin);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphASinBlock" /* FlowGraphBlockNames.Asin */ , FlowGraphAsinBlock);
class FlowGraphAcosBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicAcos(a), "FlowGraphACosBlock" /* FlowGraphBlockNames.Acos */ , config);
    }
    _polymorphicAcos(a) {
        return ComponentWiseUnaryOperation(a, Math.acos);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphACosBlock" /* FlowGraphBlockNames.Acos */ , FlowGraphAcosBlock);
class FlowGraphAtanBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicAtan(a), "FlowGraphATanBlock" /* FlowGraphBlockNames.Atan */ , config);
    }
    _polymorphicAtan(a) {
        return ComponentWiseUnaryOperation(a, Math.atan);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphATanBlock" /* FlowGraphBlockNames.Atan */ , FlowGraphAtanBlock);
class FlowGraphAtan2Block extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a, b)=>this._polymorphicAtan2(a, b), "FlowGraphATan2Block" /* FlowGraphBlockNames.Atan2 */ , config);
    }
    _polymorphicAtan2(a, b) {
        return ComponentWiseBinaryOperation(a, b, Math.atan2);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphATan2Block" /* FlowGraphBlockNames.Atan2 */ , FlowGraphAtan2Block);
class FlowGraphSinhBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicSinh(a), "FlowGraphSinhBlock" /* FlowGraphBlockNames.Sinh */ , config);
    }
    _polymorphicSinh(a) {
        return ComponentWiseUnaryOperation(a, Math.sinh);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSinhBlock" /* FlowGraphBlockNames.Sinh */ , FlowGraphSinhBlock);
class FlowGraphCoshBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicCosh(a), "FlowGraphCoshBlock" /* FlowGraphBlockNames.Cosh */ , config);
    }
    _polymorphicCosh(a) {
        return ComponentWiseUnaryOperation(a, Math.cosh);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCoshBlock" /* FlowGraphBlockNames.Cosh */ , FlowGraphCoshBlock);
class FlowGraphTanhBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicTanh(a), "FlowGraphTanhBlock" /* FlowGraphBlockNames.Tanh */ , config);
    }
    _polymorphicTanh(a) {
        return ComponentWiseUnaryOperation(a, Math.tanh);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphTanhBlock" /* FlowGraphBlockNames.Tanh */ , FlowGraphTanhBlock);
class FlowGraphAsinhBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicAsinh(a), "FlowGraphASinhBlock" /* FlowGraphBlockNames.Asinh */ , config);
    }
    _polymorphicAsinh(a) {
        return ComponentWiseUnaryOperation(a, Math.asinh);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphASinhBlock" /* FlowGraphBlockNames.Asinh */ , FlowGraphAsinhBlock);
class FlowGraphAcoshBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicAcosh(a), "FlowGraphACoshBlock" /* FlowGraphBlockNames.Acosh */ , config);
    }
    _polymorphicAcosh(a) {
        return ComponentWiseUnaryOperation(a, Math.acosh);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphACoshBlock" /* FlowGraphBlockNames.Acosh */ , FlowGraphAcoshBlock);
class FlowGraphAtanhBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicAtanh(a), "FlowGraphATanhBlock" /* FlowGraphBlockNames.Atanh */ , config);
    }
    _polymorphicAtanh(a) {
        return ComponentWiseUnaryOperation(a, Math.atanh);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphATanhBlock" /* FlowGraphBlockNames.Atanh */ , FlowGraphAtanhBlock);
class FlowGraphExpBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicExp(a), "FlowGraphExponentialBlock" /* FlowGraphBlockNames.Exponential */ , config);
    }
    _polymorphicExp(a) {
        return ComponentWiseUnaryOperation(a, Math.exp);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphExponentialBlock" /* FlowGraphBlockNames.Exponential */ , FlowGraphExpBlock);
class FlowGraphLogBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicLog(a), "FlowGraphLogBlock" /* FlowGraphBlockNames.Log */ , config);
    }
    _polymorphicLog(a) {
        return ComponentWiseUnaryOperation(a, Math.log);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphLogBlock" /* FlowGraphBlockNames.Log */ , FlowGraphLogBlock);
class FlowGraphLog2Block extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicLog2(a), "FlowGraphLog2Block" /* FlowGraphBlockNames.Log2 */ , config);
    }
    _polymorphicLog2(a) {
        return ComponentWiseUnaryOperation(a, Math.log2);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphLog2Block" /* FlowGraphBlockNames.Log2 */ , FlowGraphLog2Block);
class FlowGraphLog10Block extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicLog10(a), "FlowGraphLog10Block" /* FlowGraphBlockNames.Log10 */ , config);
    }
    _polymorphicLog10(a) {
        return ComponentWiseUnaryOperation(a, Math.log10);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphLog10Block" /* FlowGraphBlockNames.Log10 */ , FlowGraphLog10Block);
class FlowGraphSquareRootBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicSqrt(a), "FlowGraphSquareRootBlock" /* FlowGraphBlockNames.SquareRoot */ , config);
    }
    _polymorphicSqrt(a) {
        return ComponentWiseUnaryOperation(a, Math.sqrt);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSquareRootBlock" /* FlowGraphBlockNames.SquareRoot */ , FlowGraphSquareRootBlock);
class FlowGraphCubeRootBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicCubeRoot(a), "FlowGraphCubeRootBlock" /* FlowGraphBlockNames.CubeRoot */ , config);
    }
    _polymorphicCubeRoot(a) {
        return ComponentWiseUnaryOperation(a, Math.cbrt);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCubeRootBlock" /* FlowGraphBlockNames.CubeRoot */ , FlowGraphCubeRootBlock);
class FlowGraphPowerBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a, b)=>this._polymorphicPow(a, b), "FlowGraphPowerBlock" /* FlowGraphBlockNames.Power */ , config);
    }
    _polymorphicPow(a, b) {
        return ComponentWiseBinaryOperation(a, b, Math.pow);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphPowerBlock" /* FlowGraphBlockNames.Power */ , FlowGraphPowerBlock);
class FlowGraphBitwiseNotBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (a)=>{
            if (typeof a === "boolean") {
                return !a;
            } else if (typeof a === "number") {
                return ~a;
            }
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](~a.value);
        }, "FlowGraphBitwiseNotBlock" /* FlowGraphBlockNames.BitwiseNot */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBitwiseNotBlock" /* FlowGraphBlockNames.BitwiseNot */ , FlowGraphBitwiseNotBlock);
class FlowGraphBitwiseAndBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (a, b)=>{
            if (typeof a === "boolean" && typeof b === "boolean") {
                return a && b;
            } else if (typeof a === "number" && typeof b === "number") {
                return a & b;
            } else if (typeof a === "object" && typeof b === "object") {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](a.value & b.value);
            } else {
                throw new Error(`Cannot perform bitwise AND on ${a} and ${b}`);
            }
        }, "FlowGraphBitwiseAndBlock" /* FlowGraphBlockNames.BitwiseAnd */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBitwiseAndBlock" /* FlowGraphBlockNames.BitwiseAnd */ , FlowGraphBitwiseAndBlock);
class FlowGraphBitwiseOrBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (a, b)=>{
            if (typeof a === "boolean" && typeof b === "boolean") {
                return a || b;
            } else if (typeof a === "number" && typeof b === "number") {
                return a | b;
            } else if (typeof a === "object" && typeof b === "object") {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](a.value | b.value);
            } else {
                throw new Error(`Cannot perform bitwise OR on ${a} and ${b}`);
            }
        }, "FlowGraphBitwiseOrBlock" /* FlowGraphBlockNames.BitwiseOr */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBitwiseOrBlock" /* FlowGraphBlockNames.BitwiseOr */ , FlowGraphBitwiseOrBlock);
class FlowGraphBitwiseXorBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.valueType || "FlowGraphInteger" /* FlowGraphTypes.Integer */ ), (a, b)=>{
            if (typeof a === "boolean" && typeof b === "boolean") {
                return a !== b;
            } else if (typeof a === "number" && typeof b === "number") {
                return a ^ b;
            } else if (typeof a === "object" && typeof b === "object") {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](a.value ^ b.value);
            } else {
                throw new Error(`Cannot perform bitwise XOR on ${a} and ${b}`);
            }
        }, "FlowGraphBitwiseXorBlock" /* FlowGraphBlockNames.BitwiseXor */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBitwiseXorBlock" /* FlowGraphBlockNames.BitwiseXor */ , FlowGraphBitwiseXorBlock);
class FlowGraphBitwiseLeftShiftBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], (a, b)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](a.value << b.value), "FlowGraphBitwiseLeftShiftBlock" /* FlowGraphBlockNames.BitwiseLeftShift */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBitwiseLeftShiftBlock" /* FlowGraphBlockNames.BitwiseLeftShift */ , FlowGraphBitwiseLeftShiftBlock);
class FlowGraphBitwiseRightShiftBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], (a, b)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](a.value >> b.value), "FlowGraphBitwiseRightShiftBlock" /* FlowGraphBlockNames.BitwiseRightShift */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBitwiseRightShiftBlock" /* FlowGraphBlockNames.BitwiseRightShift */ , FlowGraphBitwiseRightShiftBlock);
class FlowGraphLeadingZerosBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], (a)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](Math.clz32(a.value)), "FlowGraphLeadingZerosBlock" /* FlowGraphBlockNames.LeadingZeros */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphLeadingZerosBlock" /* FlowGraphBlockNames.LeadingZeros */ , FlowGraphLeadingZerosBlock);
class FlowGraphTrailingZerosBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], (a)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](a.value ? 31 - Math.clz32(a.value & -a.value) : 32), "FlowGraphTrailingZerosBlock" /* FlowGraphBlockNames.TrailingZeros */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphTrailingZerosBlock" /* FlowGraphBlockNames.TrailingZeros */ , FlowGraphTrailingZerosBlock);
/**
 * Given a number (which is converted to a 32-bit integer), return the
 * number of bits set to one on that number.
 * @param n the number to run the op on
 * @returns the number of bits set to one on that number
 */ function CountOnes(n) {
    let result = 0;
    while(n){
        // This zeroes out all bits except for the least significant one.
        // So if the bit is set, it will be 1, otherwise it will be 0.
        result += n & 1;
        // This shifts n's bits to the right by one
        n >>= 1;
    }
    return result;
}
class FlowGraphOneBitsCounterBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], (a)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](CountOnes(a.value)), "FlowGraphOneBitsCounterBlock" /* FlowGraphBlockNames.OneBitsCounter */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphOneBitsCounterBlock" /* FlowGraphBlockNames.OneBitsCounter */ , FlowGraphOneBitsCounterBlock); //# sourceMappingURL=flowGraphMathBlocks.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphCombineMatrix2DBlock",
    ()=>FlowGraphCombineMatrix2DBlock,
    "FlowGraphCombineMatrix3DBlock",
    ()=>FlowGraphCombineMatrix3DBlock,
    "FlowGraphCombineMatrixBlock",
    ()=>FlowGraphCombineMatrixBlock,
    "FlowGraphCombineVector2Block",
    ()=>FlowGraphCombineVector2Block,
    "FlowGraphCombineVector3Block",
    ()=>FlowGraphCombineVector3Block,
    "FlowGraphCombineVector4Block",
    ()=>FlowGraphCombineVector4Block,
    "FlowGraphExtractMatrix2DBlock",
    ()=>FlowGraphExtractMatrix2DBlock,
    "FlowGraphExtractMatrix3DBlock",
    ()=>FlowGraphExtractMatrix3DBlock,
    "FlowGraphExtractMatrixBlock",
    ()=>FlowGraphExtractMatrixBlock,
    "FlowGraphExtractVector2Block",
    ()=>FlowGraphExtractVector2Block,
    "FlowGraphExtractVector3Block",
    ()=>FlowGraphExtractVector3Block,
    "FlowGraphExtractVector4Block",
    ()=>FlowGraphExtractVector4Block
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphMatrix.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class FlowGraphMathCombineBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCachedOperationBlock"] {
    /**
     * Base class for blocks that combine multiple numeric inputs into a single result.
     * Handles registering data inputs and managing cached outputs.
     * @param numberOfInputs The number of input values to combine.
     * @param type The type of the result.
     * @param config The block configuration.
     */ constructor(numberOfInputs, type, config){
        super(type, config);
        for(let i = 0; i < numberOfInputs; i++){
            this.registerDataInput(`input_${i}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], 0);
        }
    }
}
/**
 * Abstract class representing a flow graph block that extracts multiple outputs from a single input.
 */ class FlowGraphMathExtractBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    /**
     * Creates an instance of FlowGraphMathExtractBlock.
     *
     * @param numberOfOutputs - The number of outputs to be extracted from the input.
     * @param type - The type of the input data.
     * @param config - Optional configuration for the flow graph block.
     */ constructor(numberOfOutputs, type, config){
        super(config);
        this.registerDataInput("input", type);
        for(let i = 0; i < numberOfOutputs; i++){
            this.registerDataOutput(`output_${i}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], 0);
        }
    }
}
class FlowGraphCombineVector2Block extends FlowGraphMathCombineBlock {
    constructor(config){
        super(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector2"], config);
    }
    /**
     * @internal
     * Combines two floats into a new Vector2
     */ _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedVector")) {
            context._setExecutionVariable(this, "cachedVector", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]());
        }
        const vector = context._getExecutionVariable(this, "cachedVector", null);
        vector.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_1").getValue(context));
        return vector;
    }
    getClassName() {
        return "FlowGraphCombineVector2Block" /* FlowGraphBlockNames.CombineVector2 */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCombineVector2Block" /* FlowGraphBlockNames.CombineVector2 */ , FlowGraphCombineVector2Block);
class FlowGraphCombineVector3Block extends FlowGraphMathCombineBlock {
    constructor(config){
        super(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedVector")) {
            context._setExecutionVariable(this, "cachedVector", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
        }
        const vector = context._getExecutionVariable(this, "cachedVector", null);
        vector.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_1").getValue(context), this.getDataInput("input_2").getValue(context));
        return vector;
    }
    getClassName() {
        return "FlowGraphCombineVector3Block" /* FlowGraphBlockNames.CombineVector3 */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCombineVector3Block" /* FlowGraphBlockNames.CombineVector3 */ , FlowGraphCombineVector3Block);
class FlowGraphCombineVector4Block extends FlowGraphMathCombineBlock {
    constructor(config){
        super(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector4"], config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedVector")) {
            context._setExecutionVariable(this, "cachedVector", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"]());
        }
        const vector = context._getExecutionVariable(this, "cachedVector", null);
        vector.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_1").getValue(context), this.getDataInput("input_2").getValue(context), this.getDataInput("input_3").getValue(context));
        return vector;
    }
    getClassName() {
        return "FlowGraphCombineVector4Block" /* FlowGraphBlockNames.CombineVector4 */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCombineVector4Block" /* FlowGraphBlockNames.CombineVector4 */ , FlowGraphCombineVector4Block);
class FlowGraphCombineMatrixBlock extends FlowGraphMathCombineBlock {
    constructor(config){
        super(16, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix"], config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedMatrix")) {
            context._setExecutionVariable(this, "cachedMatrix", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]());
        }
        const matrix = context._getExecutionVariable(this, "cachedMatrix", null);
        if (this.config?.inputIsColumnMajor) {
            matrix.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_4").getValue(context), this.getDataInput("input_8").getValue(context), this.getDataInput("input_12").getValue(context), this.getDataInput("input_1").getValue(context), this.getDataInput("input_5").getValue(context), this.getDataInput("input_9").getValue(context), this.getDataInput("input_13").getValue(context), this.getDataInput("input_2").getValue(context), this.getDataInput("input_6").getValue(context), this.getDataInput("input_10").getValue(context), this.getDataInput("input_14").getValue(context), this.getDataInput("input_3").getValue(context), this.getDataInput("input_7").getValue(context), this.getDataInput("input_11").getValue(context), this.getDataInput("input_15").getValue(context));
        } else {
            matrix.set(this.getDataInput("input_0").getValue(context), this.getDataInput("input_1").getValue(context), this.getDataInput("input_2").getValue(context), this.getDataInput("input_3").getValue(context), this.getDataInput("input_4").getValue(context), this.getDataInput("input_5").getValue(context), this.getDataInput("input_6").getValue(context), this.getDataInput("input_7").getValue(context), this.getDataInput("input_8").getValue(context), this.getDataInput("input_9").getValue(context), this.getDataInput("input_10").getValue(context), this.getDataInput("input_11").getValue(context), this.getDataInput("input_12").getValue(context), this.getDataInput("input_13").getValue(context), this.getDataInput("input_14").getValue(context), this.getDataInput("input_15").getValue(context));
        }
        return matrix;
    }
    getClassName() {
        return "FlowGraphCombineMatrixBlock" /* FlowGraphBlockNames.CombineMatrix */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCombineMatrixBlock" /* FlowGraphBlockNames.CombineMatrix */ , FlowGraphCombineMatrixBlock);
class FlowGraphCombineMatrix2DBlock extends FlowGraphMathCombineBlock {
    constructor(config){
        super(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix2D"], config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedMatrix")) {
            context._setExecutionVariable(this, "cachedMatrix", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"]());
        }
        const matrix = context._getExecutionVariable(this, "cachedMatrix", null);
        const array = this.config?.inputIsColumnMajor ? [
            // column to row-major
            this.getDataInput("input_0").getValue(context),
            this.getDataInput("input_2").getValue(context),
            this.getDataInput("input_1").getValue(context),
            this.getDataInput("input_3").getValue(context)
        ] : [
            this.getDataInput("input_0").getValue(context),
            this.getDataInput("input_1").getValue(context),
            this.getDataInput("input_2").getValue(context),
            this.getDataInput("input_3").getValue(context)
        ];
        matrix.fromArray(array);
        return matrix;
    }
    getClassName() {
        return "FlowGraphCombineMatrix2DBlock" /* FlowGraphBlockNames.CombineMatrix2D */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCombineMatrix2DBlock" /* FlowGraphBlockNames.CombineMatrix2D */ , FlowGraphCombineMatrix2DBlock);
class FlowGraphCombineMatrix3DBlock extends FlowGraphMathCombineBlock {
    constructor(config){
        super(9, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix3D"], config);
    }
    _doOperation(context) {
        if (!context._hasExecutionVariable(this, "cachedMatrix")) {
            context._setExecutionVariable(this, "cachedMatrix", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"]());
        }
        const matrix = context._getExecutionVariable(this, "cachedMatrix", null);
        const array = this.config?.inputIsColumnMajor ? [
            // column to row major
            this.getDataInput("input_0").getValue(context),
            this.getDataInput("input_3").getValue(context),
            this.getDataInput("input_6").getValue(context),
            this.getDataInput("input_1").getValue(context),
            this.getDataInput("input_4").getValue(context),
            this.getDataInput("input_7").getValue(context),
            this.getDataInput("input_2").getValue(context),
            this.getDataInput("input_5").getValue(context),
            this.getDataInput("input_8").getValue(context)
        ] : [
            this.getDataInput("input_0").getValue(context),
            this.getDataInput("input_1").getValue(context),
            this.getDataInput("input_2").getValue(context),
            this.getDataInput("input_3").getValue(context),
            this.getDataInput("input_4").getValue(context),
            this.getDataInput("input_5").getValue(context),
            this.getDataInput("input_6").getValue(context),
            this.getDataInput("input_7").getValue(context),
            this.getDataInput("input_8").getValue(context)
        ];
        matrix.fromArray(array);
        return matrix;
    }
    getClassName() {
        return "FlowGraphCombineMatrix3DBlock" /* FlowGraphBlockNames.CombineMatrix3D */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCombineMatrix3DBlock" /* FlowGraphBlockNames.CombineMatrix3D */ , FlowGraphCombineMatrix3DBlock);
class FlowGraphExtractVector2Block extends FlowGraphMathExtractBlock {
    constructor(config){
        super(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector2"], config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero();
            this.getDataInput("input").setValue(input, context);
        }
        this.getDataOutput("output_0").setValue(input.x, context);
        this.getDataOutput("output_1").setValue(input.y, context);
    }
    getClassName() {
        return "FlowGraphExtractVector2Block" /* FlowGraphBlockNames.ExtractVector2 */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphExtractVector2Block" /* FlowGraphBlockNames.ExtractVector2 */ , FlowGraphExtractVector2Block);
class FlowGraphExtractVector3Block extends FlowGraphMathExtractBlock {
    constructor(config){
        super(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            this.getDataInput("input").setValue(input, context);
        }
        this.getDataOutput("output_0").setValue(input.x, context);
        this.getDataOutput("output_1").setValue(input.y, context);
        this.getDataOutput("output_2").setValue(input.z, context);
    }
    getClassName() {
        return "FlowGraphExtractVector3Block" /* FlowGraphBlockNames.ExtractVector3 */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphExtractVector3Block" /* FlowGraphBlockNames.ExtractVector3 */ , FlowGraphExtractVector3Block);
class FlowGraphExtractVector4Block extends FlowGraphMathExtractBlock {
    constructor(config){
        super(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector4"], config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"].Zero();
            this.getDataInput("input").setValue(input, context);
        }
        this.getDataOutput("output_0").setValue(input.x, context);
        this.getDataOutput("output_1").setValue(input.y, context);
        this.getDataOutput("output_2").setValue(input.z, context);
        this.getDataOutput("output_3").setValue(input.w, context);
    }
    getClassName() {
        return "FlowGraphExtractVector4Block" /* FlowGraphBlockNames.ExtractVector4 */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphExtractVector4Block" /* FlowGraphBlockNames.ExtractVector4 */ , FlowGraphExtractVector4Block);
class FlowGraphExtractMatrixBlock extends FlowGraphMathExtractBlock {
    constructor(config){
        super(16, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix"], config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
            this.getDataInput("input").setValue(input, context);
        }
        for(let i = 0; i < 16; i++){
            this.getDataOutput(`output_${i}`).setValue(input.m[i], context);
        }
    }
    getClassName() {
        return "FlowGraphExtractMatrixBlock" /* FlowGraphBlockNames.ExtractMatrix */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphExtractMatrixBlock" /* FlowGraphBlockNames.ExtractMatrix */ , FlowGraphExtractMatrixBlock);
class FlowGraphExtractMatrix2DBlock extends FlowGraphMathExtractBlock {
    constructor(config){
        super(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix2D"], config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"]();
            this.getDataInput("input").setValue(input, context);
        }
        for(let i = 0; i < 4; i++){
            this.getDataOutput(`output_${i}`).setValue(input.m[i], context);
        }
    }
    getClassName() {
        return "FlowGraphExtractMatrix2DBlock" /* FlowGraphBlockNames.ExtractMatrix2D */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphExtractMatrix2DBlock" /* FlowGraphBlockNames.ExtractMatrix2D */ , FlowGraphExtractMatrix2DBlock);
class FlowGraphExtractMatrix3DBlock extends FlowGraphMathExtractBlock {
    constructor(config){
        super(9, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix3D"], config);
    }
    _updateOutputs(context) {
        let input = this.getDataInput("input")?.getValue(context);
        if (!input) {
            input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"]();
            this.getDataInput("input").setValue(input, context);
        }
        for(let i = 0; i < 9; i++){
            this.getDataOutput(`output_${i}`).setValue(input.m[i], context);
        }
    }
    getClassName() {
        return "FlowGraphExtractMatrix3DBlock" /* FlowGraphBlockNames.ExtractMatrix3D */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphExtractMatrix3DBlock" /* FlowGraphBlockNames.ExtractMatrix3D */ , FlowGraphExtractMatrix3DBlock); //# sourceMappingURL=flowGraphMathCombineExtractBlocks.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphDeterminantBlock",
    ()=>FlowGraphDeterminantBlock,
    "FlowGraphInvertMatrixBlock",
    ()=>FlowGraphInvertMatrixBlock,
    "FlowGraphMatrixComposeBlock",
    ()=>FlowGraphMatrixComposeBlock,
    "FlowGraphMatrixDecomposeBlock",
    ()=>FlowGraphMatrixDecomposeBlock,
    "FlowGraphMatrixMultiplicationBlock",
    ()=>FlowGraphMatrixMultiplicationBlock,
    "FlowGraphTransposeBlock",
    ()=>FlowGraphTransposeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class FlowGraphTransposeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    /**
     * Creates a new instance of the block.
     * @param config the configuration of the block
     */ constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */ ), (a)=>a.transpose ? a.transpose() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Transpose(a), "FlowGraphTransposeBlock" /* FlowGraphBlockNames.Transpose */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphTransposeBlock" /* FlowGraphBlockNames.Transpose */ , FlowGraphTransposeBlock);
class FlowGraphDeterminantBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    /**
     * Creates a new instance of the block.
     * @param config the configuration of the block
     */ constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */ ), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>a.determinant(), "FlowGraphDeterminantBlock" /* FlowGraphBlockNames.Determinant */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphDeterminantBlock" /* FlowGraphBlockNames.Determinant */ , FlowGraphDeterminantBlock);
class FlowGraphInvertMatrixBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    /**
     * Creates a new instance of the inverse block.
     * @param config the configuration of the block
     */ constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */ ), (a)=>a.inverse ? a.inverse() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Invert(a), "FlowGraphInvertMatrixBlock" /* FlowGraphBlockNames.InvertMatrix */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphInvertMatrixBlock" /* FlowGraphBlockNames.InvertMatrix */ , FlowGraphInvertMatrixBlock);
class FlowGraphMatrixMultiplicationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    /**
     * Creates a new instance of the multiplication block.
     * Note - this is similar to the math multiplication if not using matrix per-component multiplication.
     * @param config the configuration of the block
     */ constructor(config){
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */ ), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(config?.matrixType || "Matrix" /* FlowGraphTypes.Matrix */ ), (a, b)=>b.multiply(a), "FlowGraphMatrixMultiplicationBlock" /* FlowGraphBlockNames.MatrixMultiplication */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMatrixMultiplicationBlock" /* FlowGraphBlockNames.MatrixMultiplication */ , FlowGraphMatrixMultiplicationBlock);
class FlowGraphMatrixDecomposeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(config){
        super(config);
        this.input = this.registerDataInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix"]);
        this.position = this.registerDataOutput("position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
        this.rotationQuaternion = this.registerDataOutput("rotationQuaternion", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"]);
        this.scaling = this.registerDataOutput("scaling", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
        this.isValid = this.registerDataOutput("isValid", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], false);
    }
    _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, "executionId", -1);
        const cachedPosition = context._getExecutionVariable(this, "cachedPosition", null);
        const cachedRotation = context._getExecutionVariable(this, "cachedRotation", null);
        const cachedScaling = context._getExecutionVariable(this, "cachedScaling", null);
        if (cachedExecutionId === context.executionId && cachedPosition && cachedRotation && cachedScaling) {
            this.position.setValue(cachedPosition, context);
            this.rotationQuaternion.setValue(cachedRotation, context);
            this.scaling.setValue(cachedScaling, context);
        } else {
            const matrix = this.input.getValue(context);
            const position = cachedPosition || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            const rotation = cachedRotation || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
            const scaling = cachedScaling || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            // check matrix last column components should be 0,0,0,1
            // round them to 4 decimal places
            const m3 = Math.round(matrix.m[3] * 10000) / 10000;
            const m7 = Math.round(matrix.m[7] * 10000) / 10000;
            const m11 = Math.round(matrix.m[11] * 10000) / 10000;
            const m15 = Math.round(matrix.m[15] * 10000) / 10000;
            if (m3 !== 0 || m7 !== 0 || m11 !== 0 || m15 !== 1) {
                this.isValid.setValue(false, context);
                this.position.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), context);
                this.rotationQuaternion.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity(), context);
                this.scaling.setValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].One(), context);
                return;
            }
            // make the checks for validity
            const valid = matrix.decompose(scaling, rotation, position);
            this.isValid.setValue(valid, context);
            this.position.setValue(position, context);
            this.rotationQuaternion.setValue(rotation, context);
            this.scaling.setValue(scaling, context);
            context._setExecutionVariable(this, "cachedPosition", position);
            context._setExecutionVariable(this, "cachedRotation", rotation);
            context._setExecutionVariable(this, "cachedScaling", scaling);
            context._setExecutionVariable(this, "executionId", context.executionId);
        }
    }
    getClassName() {
        return "FlowGraphMatrixDecompose" /* FlowGraphBlockNames.MatrixDecompose */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMatrixDecompose" /* FlowGraphBlockNames.MatrixDecompose */ , FlowGraphMatrixDecomposeBlock);
class FlowGraphMatrixComposeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(config){
        super(config);
        this.position = this.registerDataInput("position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
        this.rotationQuaternion = this.registerDataInput("rotationQuaternion", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"]);
        this.scaling = this.registerDataInput("scaling", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
        this.value = this.registerDataOutput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix"]);
    }
    _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, "executionId", -1);
        const cachedMatrix = context._getExecutionVariable(this, "cachedMatrix", null);
        if (cachedExecutionId === context.executionId && cachedMatrix) {
            this.value.setValue(cachedMatrix, context);
        } else {
            const matrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Compose(this.scaling.getValue(context), this.rotationQuaternion.getValue(context), this.position.getValue(context));
            this.value.setValue(matrix, context);
            context._setExecutionVariable(this, "cachedMatrix", matrix);
            context._setExecutionVariable(this, "executionId", context.executionId);
        }
    }
    getClassName() {
        return "FlowGraphMatrixCompose" /* FlowGraphBlockNames.MatrixCompose */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMatrixCompose" /* FlowGraphBlockNames.MatrixCompose */ , FlowGraphMatrixComposeBlock); //# sourceMappingURL=flowGraphMatrixMathBlocks.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphMath.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetAngleBetweenQuaternions",
    ()=>GetAngleBetweenQuaternions,
    "GetQuaternionFromDirections",
    ()=>GetQuaternionFromDirections,
    "GetQuaternionFromDirectionsToRef",
    ()=>GetQuaternionFromDirectionsToRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.functions.js [app-ssr] (ecmascript)");
;
;
;
function GetAngleBetweenQuaternions(q1, q2) {
    return Math.acos((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clamp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4Dot"])(q1, q2), -1, 1)) * 2;
}
function GetQuaternionFromDirections(a, b) {
    const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
    GetQuaternionFromDirectionsToRef(a, b, result);
    return result;
}
function GetQuaternionFromDirectionsToRef(a, b, result) {
    const axis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(a, b);
    const angle = Math.acos((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Clamp"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3Dot"])(a, b), -1, 1));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxisToRef(axis, angle, result);
    return result;
} //# sourceMappingURL=flowGraphMath.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphAngleBetweenBlock",
    ()=>FlowGraphAngleBetweenBlock,
    "FlowGraphAxisAngleFromQuaternionBlock",
    ()=>FlowGraphAxisAngleFromQuaternionBlock,
    "FlowGraphConjugateBlock",
    ()=>FlowGraphConjugateBlock,
    "FlowGraphCrossBlock",
    ()=>FlowGraphCrossBlock,
    "FlowGraphDotBlock",
    ()=>FlowGraphDotBlock,
    "FlowGraphLengthBlock",
    ()=>FlowGraphLengthBlock,
    "FlowGraphNormalizeBlock",
    ()=>FlowGraphNormalizeBlock,
    "FlowGraphQuaternionFromAxisAngleBlock",
    ()=>FlowGraphQuaternionFromAxisAngleBlock,
    "FlowGraphQuaternionFromDirectionsBlock",
    ()=>FlowGraphQuaternionFromDirectionsBlock,
    "FlowGraphRotate2DBlock",
    ()=>FlowGraphRotate2DBlock,
    "FlowGraphRotate3DBlock",
    ()=>FlowGraphRotate3DBlock,
    "FlowGraphTransformBlock",
    ()=>FlowGraphTransformBlock,
    "FlowGraphTransformCoordinatesBlock",
    ()=>FlowGraphTransformCoordinatesBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphBinaryOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphMath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphMath.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const AxisCacheName = "cachedOperationAxis";
const AngleCacheName = "cachedOperationAngle";
const CacheExecIdName = "cachedExecutionId";
class FlowGraphLengthBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>this._polymorphicLength(a), "FlowGraphLengthBlock" /* FlowGraphBlockNames.Length */ , config);
    }
    _polymorphicLength(a) {
        const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
        switch(aClassName){
            case "Vector2" /* FlowGraphTypes.Vector2 */ :
            case "Vector3" /* FlowGraphTypes.Vector3 */ :
            case "Vector4" /* FlowGraphTypes.Vector4 */ :
            case "Quaternion" /* FlowGraphTypes.Quaternion */ :
                return a.length();
            default:
                throw new Error(`Cannot compute length of value ${a}`);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphLengthBlock" /* FlowGraphBlockNames.Length */ , FlowGraphLengthBlock);
class FlowGraphNormalizeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], (a)=>this._polymorphicNormalize(a), "FlowGraphNormalizeBlock" /* FlowGraphBlockNames.Normalize */ , config);
    }
    _polymorphicNormalize(a) {
        const aClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
        let normalized;
        switch(aClassName){
            case "Vector2" /* FlowGraphTypes.Vector2 */ :
            case "Vector3" /* FlowGraphTypes.Vector3 */ :
            case "Vector4" /* FlowGraphTypes.Vector4 */ :
            case "Quaternion" /* FlowGraphTypes.Quaternion */ :
                normalized = a.normalizeToNew();
                if (this.config?.nanOnZeroLength) {
                    const length = a.length();
                    if (length === 0) {
                        normalized.setAll(NaN);
                    }
                }
                return normalized;
            default:
                throw new Error(`Cannot normalize value ${a}`);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphNormalizeBlock" /* FlowGraphBlockNames.Normalize */ , FlowGraphNormalizeBlock);
class FlowGraphDotBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a, b)=>this._polymorphicDot(a, b), "FlowGraphDotBlock" /* FlowGraphBlockNames.Dot */ , config);
    }
    _polymorphicDot(a, b) {
        const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
        switch(className){
            case "Vector2" /* FlowGraphTypes.Vector2 */ :
            case "Vector3" /* FlowGraphTypes.Vector3 */ :
            case "Vector4" /* FlowGraphTypes.Vector4 */ :
            case "Quaternion" /* FlowGraphTypes.Quaternion */ :
                // casting is needed because dot requires both to be the same type
                return a.dot(b);
            default:
                throw new Error(`Cannot get dot product of ${a} and ${b}`);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphDotBlock" /* FlowGraphBlockNames.Dot */ , FlowGraphDotBlock);
class FlowGraphCrossBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], (a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(a, b), "FlowGraphCrossBlock" /* FlowGraphBlockNames.Cross */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphCrossBlock" /* FlowGraphBlockNames.Cross */ , FlowGraphCrossBlock);
class FlowGraphRotate2DBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector2"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector2"], (a, b)=>a.rotate(b), "FlowGraphRotate2DBlock" /* FlowGraphBlockNames.Rotate2D */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphRotate2DBlock" /* FlowGraphBlockNames.Rotate2D */ , FlowGraphRotate2DBlock);
class FlowGraphRotate3DBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], (a, b)=>a.applyRotationQuaternion(b), "FlowGraphRotate3DBlock" /* FlowGraphBlockNames.Rotate3D */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphRotate3DBlock" /* FlowGraphBlockNames.Rotate3D */ , FlowGraphRotate3DBlock);
function TransformVector(a, b) {
    const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetClassNameOf"])(a);
    switch(className){
        case "Vector2" /* FlowGraphTypes.Vector2 */ :
            return b.transformVector(a);
        case "Vector3" /* FlowGraphTypes.Vector3 */ :
            return b.transformVector(a);
        case "Vector4" /* FlowGraphTypes.Vector4 */ :
            a = a;
            // transform the vector 4 with the matrix here. Vector4.TransformCoordinates transforms a 3D coordinate, not Vector4
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](a.x * b.m[0] + a.y * b.m[1] + a.z * b.m[2] + a.w * b.m[3], a.x * b.m[4] + a.y * b.m[5] + a.z * b.m[6] + a.w * b.m[7], a.x * b.m[8] + a.y * b.m[9] + a.z * b.m[10] + a.w * b.m[11], a.x * b.m[12] + a.y * b.m[13] + a.z * b.m[14] + a.w * b.m[15]);
        default:
            throw new Error(`Cannot transform value ${a}`);
    }
}
class FlowGraphTransformBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        const vectorType = config?.vectorType || "Vector3" /* FlowGraphTypes.Vector3 */ ;
        const matrixType = vectorType === "Vector2" /* FlowGraphTypes.Vector2 */  ? "Matrix2D" /* FlowGraphTypes.Matrix2D */  : vectorType === "Vector3" /* FlowGraphTypes.Vector3 */  ? "Matrix3D" /* FlowGraphTypes.Matrix3D */  : "Matrix" /* FlowGraphTypes.Matrix */ ;
        super((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(vectorType), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(matrixType), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"])(vectorType), TransformVector, "FlowGraphTransformVectorBlock" /* FlowGraphBlockNames.TransformVector */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphTransformVectorBlock" /* FlowGraphBlockNames.TransformVector */ , FlowGraphTransformBlock);
class FlowGraphTransformCoordinatesBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], (a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(a, b), "FlowGraphTransformCoordinatesBlock" /* FlowGraphBlockNames.TransformCoordinates */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphTransformCoordinatesBlock" /* FlowGraphBlockNames.TransformCoordinates */ , FlowGraphTransformCoordinatesBlock);
class FlowGraphConjugateBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"], (a)=>a.conjugate(), "FlowGraphConjugateBlock" /* FlowGraphBlockNames.Conjugate */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphConjugateBlock" /* FlowGraphBlockNames.Conjugate */ , FlowGraphConjugateBlock);
class FlowGraphAngleBetweenBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphMath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetAngleBetweenQuaternions"])(a, b), "FlowGraphAngleBetweenBlock" /* FlowGraphBlockNames.AngleBetween */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphAngleBetweenBlock" /* FlowGraphBlockNames.AngleBetween */ , FlowGraphAngleBetweenBlock);
class FlowGraphQuaternionFromAxisAngleBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"], (a, b)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxis(a, b), "FlowGraphQuaternionFromAxisAngleBlock" /* FlowGraphBlockNames.QuaternionFromAxisAngle */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphQuaternionFromAxisAngleBlock" /* FlowGraphBlockNames.QuaternionFromAxisAngle */ , FlowGraphQuaternionFromAxisAngleBlock);
class FlowGraphAxisAngleFromQuaternionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(config){
        super(config);
        this.a = this.registerDataInput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"]);
        this.axis = this.registerDataOutput("axis", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
        this.angle = this.registerDataOutput("angle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.isValid = this.registerDataOutput("isValid", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"]);
    }
    /** @override */ _updateOutputs(context) {
        const cachedExecutionId = context._getExecutionVariable(this, CacheExecIdName, -1);
        const cachedAxis = context._getExecutionVariable(this, AxisCacheName, null);
        const cachedAngle = context._getExecutionVariable(this, AngleCacheName, null);
        if (cachedAxis !== undefined && cachedAxis !== null && cachedAngle !== undefined && cachedAngle !== null && cachedExecutionId === context.executionId) {
            this.axis.setValue(cachedAxis, context);
            this.angle.setValue(cachedAngle, context);
        } else {
            try {
                const { axis, angle } = this.a.getValue(context).toAxisAngle();
                context._setExecutionVariable(this, AxisCacheName, axis);
                context._setExecutionVariable(this, AngleCacheName, angle);
                context._setExecutionVariable(this, CacheExecIdName, context.executionId);
                this.axis.setValue(axis, context);
                this.angle.setValue(angle, context);
                this.isValid.setValue(true, context);
            } catch (e) {
                this.isValid.setValue(false, context);
            }
        }
    }
    /** @override */ getClassName() {
        return "FlowGraphAxisAngleFromQuaternionBlock" /* FlowGraphBlockNames.AxisAngleFromQuaternion */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphAxisAngleFromQuaternionBlock" /* FlowGraphBlockNames.AxisAngleFromQuaternion */ , FlowGraphAxisAngleFromQuaternionBlock);
class FlowGraphQuaternionFromDirectionsBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphBinaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBinaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"], (a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphMath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetQuaternionFromDirections"])(a, b), "FlowGraphQuaternionFromDirectionsBlock" /* FlowGraphBlockNames.QuaternionFromDirections */ , config);
    }
} //# sourceMappingURL=flowGraphVectorMathBlocks.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMatrixMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphJsonPointerParserBlock",
    ()=>FlowGraphJsonPointerParserBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphPathConverterComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphPathConverterComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class FlowGraphJsonPointerParserBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphCachedOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCachedOperationBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config);
        this.config = config;
        this.object = this.registerDataOutput("object", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.propertyName = this.registerDataOutput("propertyName", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.setterFunction = this.registerDataOutput("setFunction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], this._setPropertyValue.bind(this));
        this.getterFunction = this.registerDataOutput("getFunction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], this._getPropertyValue.bind(this));
        this.generateAnimationsFunction = this.registerDataOutput("generateAnimationsFunction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], this._getInterpolationAnimationPropertyInfo.bind(this));
        this.templateComponent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphPathConverterComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPathConverterComponent"](config.jsonPointer, this);
    }
    _doOperation(context) {
        const accessorContainer = this.templateComponent.getAccessor(this.config.pathConverter, context);
        const value = accessorContainer.info.get(accessorContainer.object);
        const object = accessorContainer.info.getTarget?.(accessorContainer.object);
        const propertyName = accessorContainer.info.getPropertyName?.[0](accessorContainer.object);
        if (!object) {
            throw new Error("Object is undefined");
        } else {
            this.object.setValue(object, context);
            if (propertyName) {
                this.propertyName.setValue(propertyName, context);
            }
        }
        return value;
    }
    _setPropertyValue(_target, _propertyName, value, context) {
        const accessorContainer = this.templateComponent.getAccessor(this.config.pathConverter, context);
        const type = accessorContainer.info.type;
        if (type.startsWith("Color")) {
            value = ToColor(value, type);
        }
        accessorContainer.info.set?.(value, accessorContainer.object);
    }
    _getPropertyValue(_target, _propertyName, context) {
        const accessorContainer = this.templateComponent.getAccessor(this.config.pathConverter, context);
        const type = accessorContainer.info.type;
        const value = accessorContainer.info.get(accessorContainer.object);
        if (type.startsWith("Color")) {
            return FromColor(value);
        }
        return value;
    }
    _getInterpolationAnimationPropertyInfo(_target, _propertyName, context) {
        const accessorContainer = this.templateComponent.getAccessor(this.config.pathConverter, context);
        return (keys, fps, animationType, easingFunction)=>{
            const animations = [];
            // make sure keys are of the right type (in case of float3 color/vector)
            const type = accessorContainer.info.type;
            if (type.startsWith("Color")) {
                keys = keys.map((key)=>{
                    return {
                        frame: key.frame,
                        value: ToColor(key.value, type)
                    };
                });
            }
            accessorContainer.info.interpolation?.forEach((info, index)=>{
                const name = accessorContainer.info.getPropertyName?.[index](accessorContainer.object) || "Animation-interpolation-" + index;
                // generate the keys based on interpolation info
                let newKeys = keys;
                if (animationType !== info.type) {
                    // convert the keys to the right type
                    newKeys = keys.map((key)=>{
                        return {
                            frame: key.frame,
                            value: info.getValue(undefined, key.value.asArray ? key.value.asArray() : [
                                key.value
                            ], 0, 1)
                        };
                    });
                }
                const animationData = info.buildAnimations(accessorContainer.object, name, 60, newKeys);
                for (const animation of animationData){
                    if (easingFunction) {
                        animation.babylonAnimation.setEasingFunction(easingFunction);
                    }
                    animations.push(animation.babylonAnimation);
                }
            });
            return animations;
        };
    }
    /**
     * Gets the class name of this block
     * @returns the class name
     */ getClassName() {
        return "FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ ;
    }
}
function ToColor(value, expectedValue) {
    if (value.getClassName().startsWith("Color")) {
        return value;
    }
    if (expectedValue === "Color3") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](value.x, value.y, value.z);
    } else if (expectedValue === "Color4") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](value.x, value.y, value.z, value.w);
    }
    return value;
}
function FromColor(value) {
    if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](value.r, value.g, value.b);
    } else if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](value.r, value.g, value.b, value.a);
    }
    throw new Error("Invalid color type");
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphJsonPointerParserBlock" /* FlowGraphBlockNames.JsonPointerParser */ , FlowGraphJsonPointerParserBlock); //# sourceMappingURL=flowGraphJsonPointerParserBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphBooleanToFloat",
    ()=>FlowGraphBooleanToFloat,
    "FlowGraphBooleanToInt",
    ()=>FlowGraphBooleanToInt,
    "FlowGraphFloatToBoolean",
    ()=>FlowGraphFloatToBoolean,
    "FlowGraphFloatToInt",
    ()=>FlowGraphFloatToInt,
    "FlowGraphIntToBoolean",
    ()=>FlowGraphIntToBoolean,
    "FlowGraphIntToFloat",
    ()=>FlowGraphIntToFloat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphUnaryOperationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphBooleanToFloat extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>+a, "FlowGraphBooleanToFloat" /* FlowGraphBlockNames.BooleanToFloat */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBooleanToFloat" /* FlowGraphBlockNames.BooleanToFloat */ , FlowGraphBooleanToFloat);
class FlowGraphBooleanToInt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], (a)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"].FromValue(+a), "FlowGraphBooleanToInt" /* FlowGraphBlockNames.BooleanToInt */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphBooleanToInt" /* FlowGraphBlockNames.BooleanToInt */ , FlowGraphBooleanToInt);
class FlowGraphFloatToBoolean extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a)=>!!a, "FlowGraphFloatToBoolean" /* FlowGraphBlockNames.FloatToBoolean */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphFloatToBoolean" /* FlowGraphBlockNames.FloatToBoolean */ , FlowGraphFloatToBoolean);
class FlowGraphIntToBoolean extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"], (a)=>!!a.value, "FlowGraphIntToBoolean" /* FlowGraphBlockNames.IntToBoolean */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphIntToBoolean" /* FlowGraphBlockNames.IntToBoolean */ , FlowGraphIntToBoolean);
class FlowGraphIntToFloat extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], (a)=>a.value, "FlowGraphIntToFloat" /* FlowGraphBlockNames.IntToFloat */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphIntToFloat" /* FlowGraphBlockNames.IntToFloat */ , FlowGraphIntToFloat);
class FlowGraphFloatToInt extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphUnaryOperationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphUnaryOperationBlock"] {
    constructor(config){
        super(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], (a)=>{
            const roundingMode = config?.roundingMode;
            switch(roundingMode){
                case "floor":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"].FromValue(Math.floor(a));
                case "ceil":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"].FromValue(Math.ceil(a));
                case "round":
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"].FromValue(Math.round(a));
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"].FromValue(a);
            }
        }, "FlowGraphFloatToInt" /* FlowGraphBlockNames.FloatToInt */ , config);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphFloatToInt" /* FlowGraphBlockNames.FloatToInt */ , FlowGraphFloatToInt); //# sourceMappingURL=flowGraphTypeToTypeBlocks.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphJsonPointerParserBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphTypeToTypeBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphContextBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphContextBlock",
    ()=>FlowGraphContextBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphContextBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(config){
        super(config);
        this.userVariables = this.registerDataOutput("userVariables", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.executionId = this.registerDataOutput("executionId", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
    }
    _updateOutputs(context) {
        this.userVariables.setValue(context.userVariables, context);
        this.executionId.setValue(context.executionId, context);
    }
    serialize(serializationObject) {
        super.serialize(serializationObject);
    }
    getClassName() {
        return "FlowGraphContextBlock" /* FlowGraphBlockNames.Context */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphContextBlock" /* FlowGraphBlockNames.Context */ , FlowGraphContextBlock); //# sourceMappingURL=flowGraphContextBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphArrayIndexBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphArrayIndexBlock",
    ()=>FlowGraphArrayIndexBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
class FlowGraphArrayIndexBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    /**
     * Construct a FlowGraphArrayIndexBlock.
     * @param config construction parameters
     */ constructor(config){
        super(config);
        this.config = config;
        this.array = this.registerDataInput("array", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.index = this.registerDataInput("index", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](-1));
        this.value = this.registerDataOutput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    /**
     * @internal
     */ _updateOutputs(context) {
        const array = this.array.getValue(context);
        const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumericValue"])(this.index.getValue(context));
        if (array && index >= 0 && index < array.length) {
            this.value.setValue(array[index], context);
        } else {
            this.value.setValue(null, context);
        }
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     */ serialize(serializationObject) {
        super.serialize(serializationObject);
    }
    getClassName() {
        return "FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphArrayIndexBlock" /* FlowGraphBlockNames.ArrayIndex */ , FlowGraphArrayIndexBlock); //# sourceMappingURL=flowGraphArrayIndexBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphCodeExecutionBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphCodeExecutionBlock",
    ()=>FlowGraphCodeExecutionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
;
;
class FlowGraphCodeExecutionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    /**
     * Construct a FlowGraphCodeExecutionBlock.
     * @param config construction parameters
     */ constructor(config){
        super(config);
        this.config = config;
        this.executionFunction = this.registerDataInput("function", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.value = this.registerDataInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.result = this.registerDataOutput("result", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    /**
     * @internal
     */ _updateOutputs(context) {
        const func = this.executionFunction.getValue(context);
        const value = this.value.getValue(context);
        if (func) {
            this.result.setValue(func(value, context), context);
        }
    }
    getClassName() {
        return "FlowGraphCodeExecutionBlock" /* FlowGraphBlockNames.CodeExecution */ ;
    }
} //# sourceMappingURL=flowGraphCodeExecutionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphIndexOfBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphIndexOfBlock",
    ()=>FlowGraphIndexOfBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphIndexOfBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    /**
     * Construct a FlowGraphIndexOfBlock.
     * @param config construction parameters
     */ constructor(config){
        super(config);
        this.config = config;
        this.object = this.registerDataInput("object", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.array = this.registerDataInput("array", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.index = this.registerDataOutput("index", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"], new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](-1));
    }
    /**
     * @internal
     */ _updateOutputs(context) {
        const object = this.object.getValue(context);
        const array = this.array.getValue(context);
        if (array) {
            this.index.setValue(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"](array.indexOf(object)), context);
        }
    }
    /**
     * Serializes this block
     * @param serializationObject the object to serialize to
     */ serialize(serializationObject) {
        super.serialize(serializationObject);
    }
    getClassName() {
        return "FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphIndexOfBlock" /* FlowGraphBlockNames.IndexOf */ , FlowGraphIndexOfBlock); //# sourceMappingURL=flowGraphIndexOfBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphFunctionReferenceBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphFunctionReferenceBlock",
    ()=>FlowGraphFunctionReferenceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphFunctionReferenceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.functionName = this.registerDataInput("functionName", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeString"]);
        this.object = this.registerDataInput("object", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.context = this.registerDataInput("context", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], null);
        this.output = this.registerDataOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _updateOutputs(context) {
        const functionName = this.functionName.getValue(context);
        const object = this.object.getValue(context);
        const contextValue = this.context.getValue(context);
        if (object && functionName) {
            const func = object[functionName];
            if (func && typeof func === "function") {
                this.output.setValue(func.bind(contextValue), context);
            }
        }
    }
    getClassName() {
        return "FlowGraphFunctionReference" /* FlowGraphBlockNames.FunctionReference */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphFunctionReference" /* FlowGraphBlockNames.FunctionReference */ , FlowGraphFunctionReferenceBlock); //# sourceMappingURL=flowGraphFunctionReferenceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphContextBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphContextBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphArrayIndexBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphArrayIndexBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphCodeExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphCodeExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphIndexOfBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphIndexOfBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphFunctionReferenceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphFunctionReferenceBlock.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConditionalDataBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConditionalDataBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphSetVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphTransformCoordinatesSystemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphTransformCoordinatesSystemBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetPropertyBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphSetPropertyBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConstantBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetAssetBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphDataSwitchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.js [app-ssr] (ecmascript)");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/index.js [app-ssr] (ecmascript) <locals>");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/index.js [app-ssr] (ecmascript) <locals>");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphMeshPickEventBlock",
    ()=>FlowGraphMeshPickEventBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
;
;
;
;
;
class FlowGraphMeshPickEventBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEventBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        /**
         * the type of the event this block reacts to
         */ this.type = "MeshPick" /* FlowGraphEventType.MeshPick */ ;
        this.asset = this.registerDataInput("asset", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config?.targetMesh);
        this.pickedPoint = this.registerDataOutput("pickedPoint", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
        this.pickOrigin = this.registerDataOutput("pickOrigin", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"]);
        this.pointerId = this.registerDataOutput("pointerId", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.pickedMesh = this.registerDataOutput("pickedMesh", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
        this.pointerType = this.registerDataInput("pointerType", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERPICK);
    }
    _getReferencedMesh(context) {
        return this.asset.getValue(context);
    }
    _executeEvent(context, pickedInfo) {
        // get the pointer type
        const pointerType = this.pointerType.getValue(context);
        if (pointerType !== pickedInfo.type) {
            // returning true here to continue the propagation of the pointer event to the rest of the blocks
            return true;
        }
        // check if the mesh is the picked mesh or a descendant
        const mesh = this._getReferencedMesh(context);
        if (mesh && pickedInfo.pickInfo?.pickedMesh && (pickedInfo.pickInfo?.pickedMesh === mesh || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_IsDescendantOf"])(pickedInfo.pickInfo?.pickedMesh, mesh))) {
            this.pointerId.setValue(pickedInfo.event.pointerId, context);
            this.pickOrigin.setValue(pickedInfo.pickInfo.ray?.origin, context);
            this.pickedPoint.setValue(pickedInfo.pickInfo.pickedPoint, context);
            this.pickedMesh.setValue(pickedInfo.pickInfo.pickedMesh, context);
            this._execute(context);
            // stop the propagation if the configuration says so
            return !this.config?.stopPropagation;
        } else {
            // reset the outputs
            this.pointerId.resetToDefaultValue(context);
            this.pickOrigin.resetToDefaultValue(context);
            this.pickedPoint.resetToDefaultValue(context);
            this.pickedMesh.resetToDefaultValue(context);
        }
        return true;
    }
    /**
     * @internal
     */ _preparePendingTasks(_context) {
    // no-op
    }
    /**
     * @internal
     */ _cancelPendingTasks(_context) {
    // no-op
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphMeshPickEventBlock" /* FlowGraphBlockNames.MeshPickEvent */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphMeshPickEventBlock" /* FlowGraphBlockNames.MeshPickEvent */ , FlowGraphMeshPickEventBlock); //# sourceMappingURL=flowGraphMeshPickEventBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSceneReadyEventBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSceneReadyEventBlock",
    ()=>FlowGraphSceneReadyEventBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
class FlowGraphSceneReadyEventBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEventBlock"] {
    constructor(){
        super(...arguments);
        this.initPriority = -1;
        this.type = "SceneReady" /* FlowGraphEventType.SceneReady */ ;
    }
    _executeEvent(context, _payload) {
        this._execute(context);
        return true;
    }
    _preparePendingTasks(context) {
    // no-op
    }
    _cancelPendingTasks(context) {
    // no-op
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphSceneReadyEventBlock" /* FlowGraphBlockNames.SceneReadyEvent */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSceneReadyEventBlock" /* FlowGraphBlockNames.SceneReadyEvent */ , FlowGraphSceneReadyEventBlock); //# sourceMappingURL=flowGraphSceneReadyEventBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphReceiveCustomEventBlock",
    ()=>FlowGraphReceiveCustomEventBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphCoordinator.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphReceiveCustomEventBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEventBlock"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        this.initPriority = 1;
        // use event data to register data outputs
        for(const key in this.config.eventData){
            this.registerDataOutput(key, this.config.eventData[key].type);
        }
    }
    _preparePendingTasks(context) {
        const observable = context.configuration.coordinator.getCustomEventObservable(this.config.eventId);
        // check if we are not exceeding the max number of events
        if (observable && observable.hasObservers() && observable.observers.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCoordinator"].MaxEventsPerType) {
            this._reportError(context, `FlowGraphReceiveCustomEventBlock: Too many observers for event ${this.config.eventId}. Max is ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCoordinator"].MaxEventsPerType}.`);
            return;
        }
        const eventObserver = observable.add((eventData)=>{
            const keys = Object.keys(eventData);
            for (const key of keys){
                this.getDataOutput(key)?.setValue(eventData[key], context);
            }
            this._execute(context);
        });
        context._setExecutionVariable(this, "_eventObserver", eventObserver);
    }
    _cancelPendingTasks(context) {
        const observable = context.configuration.coordinator.getCustomEventObservable(this.config.eventId);
        if (observable) {
            const eventObserver = context._getExecutionVariable(this, "_eventObserver", null);
            observable.remove(eventObserver);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`FlowGraphReceiveCustomEventBlock: Missing observable for event ${this.config.eventId}`);
        }
    }
    _executeEvent(_context, _payload) {
        return true;
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */ , FlowGraphReceiveCustomEventBlock); //# sourceMappingURL=flowGraphReceiveCustomEventBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSendCustomEventBlock",
    ()=>FlowGraphSendCustomEventBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlockWithOutSignal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
class FlowGraphSendCustomEventBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlockWithOutSignal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlockWithOutSignal"] {
    constructor(/**
     * the configuration of the block
     */ config){
        super(config);
        this.config = config;
        for(const key in this.config.eventData){
            this.registerDataInput(key, this.config.eventData[key].type, this.config.eventData[key].value);
        }
    }
    _execute(context) {
        const eventId = this.config.eventId;
        // eventData is a map with the key being the data input's name, and value being the data input's value
        const eventData = {};
        for (const port of this.dataInputs){
            eventData[port.name] = port.getValue(context);
        }
        context.configuration.coordinator.notifyCustomEvent(eventId, eventData);
        this.out._activateSignal(context);
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphReceiveCustomEventBlock" /* FlowGraphBlockNames.ReceiveCustomEvent */ , FlowGraphSendCustomEventBlock); //# sourceMappingURL=flowGraphSendCustomEventBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSceneTickEventBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphSceneTickEventBlock",
    ()=>FlowGraphSceneTickEventBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
;
;
;
class FlowGraphSceneTickEventBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEventBlock"] {
    constructor(){
        super();
        this.type = "SceneBeforeRender" /* FlowGraphEventType.SceneBeforeRender */ ;
        this.timeSinceStart = this.registerDataOutput("timeSinceStart", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.deltaTime = this.registerDataOutput("deltaTime", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
    }
    /**
     * @internal
     */ _preparePendingTasks(_context) {
    // no-op
    }
    /**
     * @internal
     */ _executeEvent(context, payload) {
        this.timeSinceStart.setValue(payload.timeSinceStart, context);
        this.deltaTime.setValue(payload.deltaTime, context);
        this._execute(context);
        return true;
    }
    /**
     * @internal
     */ _cancelPendingTasks(_context) {
    // no-op
    }
    /**
     * @returns class name of the block.
     */ getClassName() {
        return "FlowGraphSceneTickEventBlock" /* FlowGraphBlockNames.SceneTickEvent */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphSceneTickEventBlock" /* FlowGraphBlockNames.SceneTickEvent */ , FlowGraphSceneTickEventBlock); //# sourceMappingURL=flowGraphSceneTickEventBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphPointerOutEventBlock",
    ()=>FlowGraphPointerOutEventBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphPointerOutEventBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEventBlock"] {
    constructor(config){
        super(config);
        this.type = "PointerOut" /* FlowGraphEventType.PointerOut */ ;
        this.pointerId = this.registerDataOutput("pointerId", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.targetMesh = this.registerDataInput("targetMesh", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config?.targetMesh);
        this.meshOutOfPointer = this.registerDataOutput("meshOutOfPointer", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _executeEvent(context, payload) {
        const mesh = this.targetMesh.getValue(context);
        this.meshOutOfPointer.setValue(payload.mesh, context);
        this.pointerId.setValue(payload.pointerId, context);
        const skipEvent = payload.over && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_IsDescendantOf"])(payload.mesh, mesh);
        if (!skipEvent && (payload.mesh === mesh || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_IsDescendantOf"])(payload.mesh, mesh))) {
            this._execute(context);
            return !this.config?.stopPropagation;
        }
        return true;
    }
    _preparePendingTasks(_context) {
    // no-op
    }
    _cancelPendingTasks(_context) {
    // no-op
    }
    getClassName() {
        return "FlowGraphPointerOutEventBlock" /* FlowGraphBlockNames.PointerOutEvent */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphPointerOutEventBlock" /* FlowGraphBlockNames.PointerOutEvent */ , FlowGraphPointerOutEventBlock); //# sourceMappingURL=flowGraphPointerOutEventBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphPointerOverEventBlock",
    ()=>FlowGraphPointerOverEventBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/utils.js [app-ssr] (ecmascript)");
;
;
;
;
class FlowGraphPointerOverEventBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEventBlock"] {
    constructor(config){
        super(config);
        this.type = "PointerOver" /* FlowGraphEventType.PointerOver */ ;
        this.pointerId = this.registerDataOutput("pointerId", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"]);
        this.targetMesh = this.registerDataInput("targetMesh", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"], config?.targetMesh);
        this.meshUnderPointer = this.registerDataOutput("meshUnderPointer", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"]);
    }
    _executeEvent(context, payload) {
        const mesh = this.targetMesh.getValue(context);
        this.meshUnderPointer.setValue(payload.mesh, context);
        // skip if we moved from a mesh that is under the hierarchy of the target mesh
        const skipEvent = payload.out && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_IsDescendantOf"])(payload.out, mesh);
        this.pointerId.setValue(payload.pointerId, context);
        if (!skipEvent && (payload.mesh === mesh || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_IsDescendantOf"])(payload.mesh, mesh))) {
            this._execute(context);
            return !this.config?.stopPropagation;
        }
        return true;
    }
    _preparePendingTasks(_context) {
    // no-op
    }
    _cancelPendingTasks(_context) {
    // no-op
    }
    getClassName() {
        return "FlowGraphPointerOverEventBlock" /* FlowGraphBlockNames.PointerOverEvent */ ;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("FlowGraphPointerOverEventBlock" /* FlowGraphBlockNames.PointerOverEvent */ , FlowGraphPointerOverEventBlock); //# sourceMappingURL=flowGraphPointerOverEventBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphMeshPickEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSceneReadyEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSceneReadyEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphReceiveCustomEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSendCustomEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSceneTickEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSceneTickEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphPointerOutEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphPointerOverEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/flowGraphBlockNames.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum of all block names.
 * Note - if you add a new block, you must add it here, and must add it in the block factory!
 */ __turbopack_context__.s([
    "FlowGraphBlockNames",
    ()=>FlowGraphBlockNames
]);
var FlowGraphBlockNames;
(function(FlowGraphBlockNames) {
    FlowGraphBlockNames["PlayAnimation"] = "FlowGraphPlayAnimationBlock";
    FlowGraphBlockNames["StopAnimation"] = "FlowGraphStopAnimationBlock";
    FlowGraphBlockNames["PauseAnimation"] = "FlowGraphPauseAnimationBlock";
    FlowGraphBlockNames["ValueInterpolation"] = "FlowGraphInterpolationBlock";
    FlowGraphBlockNames["SceneReadyEvent"] = "FlowGraphSceneReadyEventBlock";
    FlowGraphBlockNames["SceneTickEvent"] = "FlowGraphSceneTickEventBlock";
    FlowGraphBlockNames["SendCustomEvent"] = "FlowGraphSendCustomEventBlock";
    FlowGraphBlockNames["ReceiveCustomEvent"] = "FlowGraphReceiveCustomEventBlock";
    FlowGraphBlockNames["MeshPickEvent"] = "FlowGraphMeshPickEventBlock";
    FlowGraphBlockNames["PointerEvent"] = "FlowGraphPointerEventBlock";
    FlowGraphBlockNames["PointerDownEvent"] = "FlowGraphPointerDownEventBlock";
    FlowGraphBlockNames["PointerUpEvent"] = "FlowGraphPointerUpEventBlock";
    FlowGraphBlockNames["PointerMoveEvent"] = "FlowGraphPointerMoveEventBlock";
    FlowGraphBlockNames["PointerOverEvent"] = "FlowGraphPointerOverEventBlock";
    FlowGraphBlockNames["PointerOutEvent"] = "FlowGraphPointerOutEventBlock";
    FlowGraphBlockNames["E"] = "FlowGraphEBlock";
    FlowGraphBlockNames["PI"] = "FlowGraphPIBlock";
    FlowGraphBlockNames["Inf"] = "FlowGraphInfBlock";
    FlowGraphBlockNames["NaN"] = "FlowGraphNaNBlock";
    FlowGraphBlockNames["Random"] = "FlowGraphRandomBlock";
    FlowGraphBlockNames["Add"] = "FlowGraphAddBlock";
    FlowGraphBlockNames["Subtract"] = "FlowGraphSubtractBlock";
    FlowGraphBlockNames["Multiply"] = "FlowGraphMultiplyBlock";
    FlowGraphBlockNames["Divide"] = "FlowGraphDivideBlock";
    FlowGraphBlockNames["Abs"] = "FlowGraphAbsBlock";
    FlowGraphBlockNames["Sign"] = "FlowGraphSignBlock";
    FlowGraphBlockNames["Trunc"] = "FlowGraphTruncBlock";
    FlowGraphBlockNames["Floor"] = "FlowGraphFloorBlock";
    FlowGraphBlockNames["Ceil"] = "FlowGraphCeilBlock";
    FlowGraphBlockNames["Round"] = "FlowGraphRoundBlock";
    FlowGraphBlockNames["Fraction"] = "FlowGraphFractBlock";
    FlowGraphBlockNames["Negation"] = "FlowGraphNegationBlock";
    FlowGraphBlockNames["Modulo"] = "FlowGraphModuloBlock";
    FlowGraphBlockNames["Min"] = "FlowGraphMinBlock";
    FlowGraphBlockNames["Max"] = "FlowGraphMaxBlock";
    FlowGraphBlockNames["Clamp"] = "FlowGraphClampBlock";
    FlowGraphBlockNames["Saturate"] = "FlowGraphSaturateBlock";
    FlowGraphBlockNames["MathInterpolation"] = "FlowGraphMathInterpolationBlock";
    FlowGraphBlockNames["Equality"] = "FlowGraphEqualityBlock";
    FlowGraphBlockNames["LessThan"] = "FlowGraphLessThanBlock";
    FlowGraphBlockNames["LessThanOrEqual"] = "FlowGraphLessThanOrEqualBlock";
    FlowGraphBlockNames["GreaterThan"] = "FlowGraphGreaterThanBlock";
    FlowGraphBlockNames["GreaterThanOrEqual"] = "FlowGraphGreaterThanOrEqualBlock";
    FlowGraphBlockNames["IsNaN"] = "FlowGraphIsNaNBlock";
    FlowGraphBlockNames["IsInfinity"] = "FlowGraphIsInfBlock";
    FlowGraphBlockNames["DegToRad"] = "FlowGraphDegToRadBlock";
    FlowGraphBlockNames["RadToDeg"] = "FlowGraphRadToDegBlock";
    FlowGraphBlockNames["Sin"] = "FlowGraphSinBlock";
    FlowGraphBlockNames["Cos"] = "FlowGraphCosBlock";
    FlowGraphBlockNames["Tan"] = "FlowGraphTanBlock";
    FlowGraphBlockNames["Asin"] = "FlowGraphASinBlock";
    FlowGraphBlockNames["Acos"] = "FlowGraphACosBlock";
    FlowGraphBlockNames["Atan"] = "FlowGraphATanBlock";
    FlowGraphBlockNames["Atan2"] = "FlowGraphATan2Block";
    FlowGraphBlockNames["Sinh"] = "FlowGraphSinhBlock";
    FlowGraphBlockNames["Cosh"] = "FlowGraphCoshBlock";
    FlowGraphBlockNames["Tanh"] = "FlowGraphTanhBlock";
    FlowGraphBlockNames["Asinh"] = "FlowGraphASinhBlock";
    FlowGraphBlockNames["Acosh"] = "FlowGraphACoshBlock";
    FlowGraphBlockNames["Atanh"] = "FlowGraphATanhBlock";
    FlowGraphBlockNames["Exponential"] = "FlowGraphExponentialBlock";
    FlowGraphBlockNames["Log"] = "FlowGraphLogBlock";
    FlowGraphBlockNames["Log2"] = "FlowGraphLog2Block";
    FlowGraphBlockNames["Log10"] = "FlowGraphLog10Block";
    FlowGraphBlockNames["SquareRoot"] = "FlowGraphSquareRootBlock";
    FlowGraphBlockNames["CubeRoot"] = "FlowGraphCubeRootBlock";
    FlowGraphBlockNames["Power"] = "FlowGraphPowerBlock";
    FlowGraphBlockNames["Length"] = "FlowGraphLengthBlock";
    FlowGraphBlockNames["Normalize"] = "FlowGraphNormalizeBlock";
    FlowGraphBlockNames["Dot"] = "FlowGraphDotBlock";
    FlowGraphBlockNames["Cross"] = "FlowGraphCrossBlock";
    FlowGraphBlockNames["Rotate2D"] = "FlowGraphRotate2DBlock";
    FlowGraphBlockNames["Rotate3D"] = "FlowGraphRotate3DBlock";
    FlowGraphBlockNames["Transpose"] = "FlowGraphTransposeBlock";
    FlowGraphBlockNames["Determinant"] = "FlowGraphDeterminantBlock";
    FlowGraphBlockNames["InvertMatrix"] = "FlowGraphInvertMatrixBlock";
    FlowGraphBlockNames["MatrixMultiplication"] = "FlowGraphMatrixMultiplicationBlock";
    FlowGraphBlockNames["BitwiseAnd"] = "FlowGraphBitwiseAndBlock";
    FlowGraphBlockNames["BitwiseOr"] = "FlowGraphBitwiseOrBlock";
    FlowGraphBlockNames["BitwiseXor"] = "FlowGraphBitwiseXorBlock";
    FlowGraphBlockNames["BitwiseNot"] = "FlowGraphBitwiseNotBlock";
    FlowGraphBlockNames["BitwiseLeftShift"] = "FlowGraphBitwiseLeftShiftBlock";
    FlowGraphBlockNames["BitwiseRightShift"] = "FlowGraphBitwiseRightShiftBlock";
    FlowGraphBlockNames["LeadingZeros"] = "FlowGraphLeadingZerosBlock";
    FlowGraphBlockNames["TrailingZeros"] = "FlowGraphTrailingZerosBlock";
    FlowGraphBlockNames["OneBitsCounter"] = "FlowGraphOneBitsCounterBlock";
    FlowGraphBlockNames["Branch"] = "FlowGraphBranchBlock";
    FlowGraphBlockNames["SetDelay"] = "FlowGraphSetDelayBlock";
    FlowGraphBlockNames["CancelDelay"] = "FlowGraphCancelDelayBlock";
    FlowGraphBlockNames["CallCounter"] = "FlowGraphCallCounterBlock";
    FlowGraphBlockNames["Debounce"] = "FlowGraphDebounceBlock";
    FlowGraphBlockNames["Throttle"] = "FlowGraphThrottleBlock";
    FlowGraphBlockNames["DoN"] = "FlowGraphDoNBlock";
    FlowGraphBlockNames["FlipFlop"] = "FlowGraphFlipFlopBlock";
    FlowGraphBlockNames["ForLoop"] = "FlowGraphForLoopBlock";
    FlowGraphBlockNames["MultiGate"] = "FlowGraphMultiGateBlock";
    FlowGraphBlockNames["Sequence"] = "FlowGraphSequenceBlock";
    FlowGraphBlockNames["Switch"] = "FlowGraphSwitchBlock";
    FlowGraphBlockNames["WaitAll"] = "FlowGraphWaitAllBlock";
    FlowGraphBlockNames["WhileLoop"] = "FlowGraphWhileLoopBlock";
    FlowGraphBlockNames["ConsoleLog"] = "FlowGraphConsoleLogBlock";
    FlowGraphBlockNames["Conditional"] = "FlowGraphConditionalBlock";
    FlowGraphBlockNames["Constant"] = "FlowGraphConstantBlock";
    FlowGraphBlockNames["TransformCoordinatesSystem"] = "FlowGraphTransformCoordinatesSystemBlock";
    FlowGraphBlockNames["GetAsset"] = "FlowGraphGetAssetBlock";
    FlowGraphBlockNames["GetProperty"] = "FlowGraphGetPropertyBlock";
    FlowGraphBlockNames["SetProperty"] = "FlowGraphSetPropertyBlock";
    FlowGraphBlockNames["GetVariable"] = "FlowGraphGetVariableBlock";
    FlowGraphBlockNames["SetVariable"] = "FlowGraphSetVariableBlock";
    FlowGraphBlockNames["JsonPointerParser"] = "FlowGraphJsonPointerParserBlock";
    FlowGraphBlockNames["CombineVector2"] = "FlowGraphCombineVector2Block";
    FlowGraphBlockNames["CombineVector3"] = "FlowGraphCombineVector3Block";
    FlowGraphBlockNames["CombineVector4"] = "FlowGraphCombineVector4Block";
    FlowGraphBlockNames["CombineMatrix"] = "FlowGraphCombineMatrixBlock";
    FlowGraphBlockNames["CombineMatrix2D"] = "FlowGraphCombineMatrix2DBlock";
    FlowGraphBlockNames["CombineMatrix3D"] = "FlowGraphCombineMatrix3DBlock";
    FlowGraphBlockNames["ExtractVector2"] = "FlowGraphExtractVector2Block";
    FlowGraphBlockNames["ExtractVector3"] = "FlowGraphExtractVector3Block";
    FlowGraphBlockNames["ExtractVector4"] = "FlowGraphExtractVector4Block";
    FlowGraphBlockNames["ExtractMatrix"] = "FlowGraphExtractMatrixBlock";
    FlowGraphBlockNames["ExtractMatrix2D"] = "FlowGraphExtractMatrix2DBlock";
    FlowGraphBlockNames["ExtractMatrix3D"] = "FlowGraphExtractMatrix3DBlock";
    FlowGraphBlockNames["TransformVector"] = "FlowGraphTransformVectorBlock";
    FlowGraphBlockNames["TransformCoordinates"] = "FlowGraphTransformCoordinatesBlock";
    FlowGraphBlockNames["Conjugate"] = "FlowGraphConjugateBlock";
    FlowGraphBlockNames["AngleBetween"] = "FlowGraphAngleBetweenBlock";
    FlowGraphBlockNames["QuaternionFromAxisAngle"] = "FlowGraphQuaternionFromAxisAngleBlock";
    FlowGraphBlockNames["AxisAngleFromQuaternion"] = "FlowGraphAxisAngleFromQuaternionBlock";
    FlowGraphBlockNames["QuaternionFromDirections"] = "FlowGraphQuaternionFromDirectionsBlock";
    FlowGraphBlockNames["MatrixDecompose"] = "FlowGraphMatrixDecompose";
    FlowGraphBlockNames["MatrixCompose"] = "FlowGraphMatrixCompose";
    FlowGraphBlockNames["BooleanToFloat"] = "FlowGraphBooleanToFloat";
    FlowGraphBlockNames["BooleanToInt"] = "FlowGraphBooleanToInt";
    FlowGraphBlockNames["FloatToBoolean"] = "FlowGraphFloatToBoolean";
    FlowGraphBlockNames["IntToBoolean"] = "FlowGraphIntToBoolean";
    FlowGraphBlockNames["IntToFloat"] = "FlowGraphIntToFloat";
    FlowGraphBlockNames["FloatToInt"] = "FlowGraphFloatToInt";
    FlowGraphBlockNames["Easing"] = "FlowGraphEasingBlock";
    FlowGraphBlockNames["Context"] = "FlowGraphContextBlock";
    FlowGraphBlockNames["ArrayIndex"] = "FlowGraphArrayIndexBlock";
    FlowGraphBlockNames["CodeExecution"] = "FlowGraphCodeExecutionBlock";
    FlowGraphBlockNames["IndexOf"] = "FlowGraphIndexOfBlock";
    FlowGraphBlockNames["FunctionReference"] = "FlowGraphFunctionReference";
    FlowGraphBlockNames["BezierCurveEasing"] = "FlowGraphBezierCurveEasing";
    FlowGraphBlockNames["DataSwitch"] = "FlowGraphDataSwitchBlock";
})(FlowGraphBlockNames || (FlowGraphBlockNames = {})); //# sourceMappingURL=flowGraphBlockNames.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/flowGraphBlockFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockNames$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/flowGraphBlockNames.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphMatrix.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphSignalConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphSignalConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphCoordinator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$typeDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/typeDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphDataConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphDataConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAssetsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAssetsContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphParser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphPathConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphPathConverter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphPathConverterComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphPathConverterComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphLogger.js [app-ssr] (ecmascript)");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/index.js [app-ssr] (ecmascript) <locals>");
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphBranchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphBranchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBranchBlock"],
    "FlowGraphCallCounterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphCounterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCallCounterBlock"],
    "FlowGraphCancelDelayBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphCancelDelayBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCancelDelayBlock"],
    "FlowGraphDebounceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphDebounceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDebounceBlock"],
    "FlowGraphDoNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphDoNBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDoNBlock"],
    "FlowGraphFlipFlopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphFlipFlopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFlipFlopBlock"],
    "FlowGraphForLoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphForLoopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphForLoopBlock"],
    "FlowGraphMultiGateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphMultiGateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMultiGateBlock"],
    "FlowGraphSequenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSequenceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSequenceBlock"],
    "FlowGraphSetDelayBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSetDelayBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetDelayBlock"],
    "FlowGraphSwitchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSwitchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSwitchBlock"],
    "FlowGraphThrottleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphThrottleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphThrottleBlock"],
    "FlowGraphWaitAllBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphWaitAllBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphWaitAllBlock"],
    "FlowGraphWhileLoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphWhileLoopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphWhileLoopBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphBranchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphBranchBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphDoNBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphForLoopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphThrottleBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphThrottleBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphMultiGateBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphMultiGateBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSwitchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSwitchBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphWaitAllBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphCounterBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCounterBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphWhileLoopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphDebounceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDebounceBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphFlipFlopBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphFlipFlopBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSequenceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphSetDelayBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSetDelayBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$flowGraphCancelDelayBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphCancelDelayBlock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasingFunctionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphEasingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EasingFunctionType"],
    "FlowGraphBezierCurveEasingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphBezierCurveEasingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBezierCurveEasingBlock"],
    "FlowGraphEasingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphEasingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEasingBlock"],
    "FlowGraphInterpolationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphInterpolationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInterpolationBlock"],
    "FlowGraphPauseAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphPauseAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPauseAnimationBlock"],
    "FlowGraphPlayAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphPlayAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPlayAnimationBlock"],
    "FlowGraphStopAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphStopAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphStopAnimationBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphPlayAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPlayAnimationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphStopAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphStopAnimationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphPauseAnimationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphPauseAnimationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphInterpolationBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphInterpolationBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphEasingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphEasingBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$flowGraphBezierCurveEasingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasingFunctionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EasingFunctionType"],
    "FlowGraphBezierCurveEasingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBezierCurveEasingBlock"],
    "FlowGraphBranchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBranchBlock"],
    "FlowGraphCallCounterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCallCounterBlock"],
    "FlowGraphCancelDelayBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCancelDelayBlock"],
    "FlowGraphConsoleLogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphConsoleLogBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConsoleLogBlock"],
    "FlowGraphDebounceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDebounceBlock"],
    "FlowGraphDoNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDoNBlock"],
    "FlowGraphEasingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEasingBlock"],
    "FlowGraphFlipFlopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFlipFlopBlock"],
    "FlowGraphForLoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphForLoopBlock"],
    "FlowGraphInterpolationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInterpolationBlock"],
    "FlowGraphMultiGateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMultiGateBlock"],
    "FlowGraphPauseAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPauseAnimationBlock"],
    "FlowGraphPlayAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPlayAnimationBlock"],
    "FlowGraphSequenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSequenceBlock"],
    "FlowGraphSetDelayBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetDelayBlock"],
    "FlowGraphStopAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphStopAnimationBlock"],
    "FlowGraphSwitchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSwitchBlock"],
    "FlowGraphThrottleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphThrottleBlock"],
    "FlowGraphWaitAllBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphWaitAllBlock"],
    "FlowGraphWhileLoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphWhileLoopBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphConsoleLogBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$ControlFlow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/ControlFlow/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$Animation$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/Animation/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphAbsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAbsBlock"],
    "FlowGraphAcosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAcosBlock"],
    "FlowGraphAcoshBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAcoshBlock"],
    "FlowGraphAddBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAddBlock"],
    "FlowGraphAngleBetweenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAngleBetweenBlock"],
    "FlowGraphAsinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsinBlock"],
    "FlowGraphAsinhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsinhBlock"],
    "FlowGraphAtan2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtan2Block"],
    "FlowGraphAtanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtanBlock"],
    "FlowGraphAtanhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtanhBlock"],
    "FlowGraphAxisAngleFromQuaternionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAxisAngleFromQuaternionBlock"],
    "FlowGraphBitwiseAndBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseAndBlock"],
    "FlowGraphBitwiseLeftShiftBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseLeftShiftBlock"],
    "FlowGraphBitwiseNotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseNotBlock"],
    "FlowGraphBitwiseOrBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseOrBlock"],
    "FlowGraphBitwiseRightShiftBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseRightShiftBlock"],
    "FlowGraphBitwiseXorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseXorBlock"],
    "FlowGraphCeilBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCeilBlock"],
    "FlowGraphClampBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphClampBlock"],
    "FlowGraphCombineMatrix2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrix2DBlock"],
    "FlowGraphCombineMatrix3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrix3DBlock"],
    "FlowGraphCombineMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrixBlock"],
    "FlowGraphCombineVector2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector2Block"],
    "FlowGraphCombineVector3Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector3Block"],
    "FlowGraphCombineVector4Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector4Block"],
    "FlowGraphConjugateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConjugateBlock"],
    "FlowGraphCosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCosBlock"],
    "FlowGraphCoshBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCoshBlock"],
    "FlowGraphCrossBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCrossBlock"],
    "FlowGraphCubeRootBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCubeRootBlock"],
    "FlowGraphDegToRadBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDegToRadBlock"],
    "FlowGraphDeterminantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMatrixMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDeterminantBlock"],
    "FlowGraphDivideBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDivideBlock"],
    "FlowGraphDotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDotBlock"],
    "FlowGraphEBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEBlock"],
    "FlowGraphEqualityBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEqualityBlock"],
    "FlowGraphExpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExpBlock"],
    "FlowGraphExtractMatrix2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrix2DBlock"],
    "FlowGraphExtractMatrix3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrix3DBlock"],
    "FlowGraphExtractMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrixBlock"],
    "FlowGraphExtractVector2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector2Block"],
    "FlowGraphExtractVector3Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector3Block"],
    "FlowGraphExtractVector4Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector4Block"],
    "FlowGraphFloorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloorBlock"],
    "FlowGraphFractionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFractionBlock"],
    "FlowGraphGreaterThanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGreaterThanBlock"],
    "FlowGraphGreaterThanOrEqualBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGreaterThanOrEqualBlock"],
    "FlowGraphInfBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInfBlock"],
    "FlowGraphInvertMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMatrixMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInvertMatrixBlock"],
    "FlowGraphIsInfinityBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIsInfinityBlock"],
    "FlowGraphIsNanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIsNanBlock"],
    "FlowGraphLeadingZerosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLeadingZerosBlock"],
    "FlowGraphLengthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLengthBlock"],
    "FlowGraphLessThanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLessThanBlock"],
    "FlowGraphLessThanOrEqualBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLessThanOrEqualBlock"],
    "FlowGraphLog10Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLog10Block"],
    "FlowGraphLog2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLog2Block"],
    "FlowGraphLogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLogBlock"],
    "FlowGraphMathInterpolationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMathInterpolationBlock"],
    "FlowGraphMatrixComposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMatrixMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixComposeBlock"],
    "FlowGraphMatrixDecomposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMatrixMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixDecomposeBlock"],
    "FlowGraphMatrixMultiplicationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMatrixMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixMultiplicationBlock"],
    "FlowGraphMaxBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMaxBlock"],
    "FlowGraphMinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMinBlock"],
    "FlowGraphModuloBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphModuloBlock"],
    "FlowGraphMultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMultiplyBlock"],
    "FlowGraphNaNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNaNBlock"],
    "FlowGraphNegationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNegationBlock"],
    "FlowGraphNormalizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNormalizeBlock"],
    "FlowGraphOneBitsCounterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphOneBitsCounterBlock"],
    "FlowGraphPiBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPiBlock"],
    "FlowGraphPowerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPowerBlock"],
    "FlowGraphQuaternionFromAxisAngleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphQuaternionFromAxisAngleBlock"],
    "FlowGraphQuaternionFromDirectionsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphQuaternionFromDirectionsBlock"],
    "FlowGraphRadToDegBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRadToDegBlock"],
    "FlowGraphRandomBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRandomBlock"],
    "FlowGraphRotate2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRotate2DBlock"],
    "FlowGraphRotate3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRotate3DBlock"],
    "FlowGraphRoundBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRoundBlock"],
    "FlowGraphSaturateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSaturateBlock"],
    "FlowGraphSignBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSignBlock"],
    "FlowGraphSinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSinBlock"],
    "FlowGraphSinhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSinhBlock"],
    "FlowGraphSquareRootBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSquareRootBlock"],
    "FlowGraphSubtractBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSubtractBlock"],
    "FlowGraphTanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTanBlock"],
    "FlowGraphTanhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTanhBlock"],
    "FlowGraphTrailingZerosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTrailingZerosBlock"],
    "FlowGraphTransformBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformBlock"],
    "FlowGraphTransformCoordinatesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformCoordinatesBlock"],
    "FlowGraphTransposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMatrixMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransposeBlock"],
    "FlowGraphTruncBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTruncBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMathCombineExtractBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphMatrixMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$flowGraphVectorMathBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphBooleanToFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphTypeToTypeBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBooleanToFloat"],
    "FlowGraphBooleanToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphTypeToTypeBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBooleanToInt"],
    "FlowGraphFloatToBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphTypeToTypeBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloatToBoolean"],
    "FlowGraphFloatToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphTypeToTypeBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloatToInt"],
    "FlowGraphIntToBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphTypeToTypeBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIntToBoolean"],
    "FlowGraphIntToFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphTypeToTypeBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIntToFloat"],
    "FlowGraphJsonPointerParserBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphJsonPointerParserBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphJsonPointerParserBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphJsonPointerParserBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphJsonPointerParserBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$flowGraphTypeToTypeBlocks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphArrayIndexBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphArrayIndexBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphArrayIndexBlock"],
    "FlowGraphCodeExecutionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphCodeExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCodeExecutionBlock"],
    "FlowGraphContextBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphContextBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphContextBlock"],
    "FlowGraphFunctionReferenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphFunctionReferenceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFunctionReferenceBlock"],
    "FlowGraphIndexOfBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphIndexOfBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIndexOfBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphContextBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphContextBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphArrayIndexBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphArrayIndexBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphCodeExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphCodeExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphIndexOfBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphIndexOfBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$flowGraphFunctionReferenceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/flowGraphFunctionReferenceBlock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphAbsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAbsBlock"],
    "FlowGraphAcosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAcosBlock"],
    "FlowGraphAcoshBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAcoshBlock"],
    "FlowGraphAddBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAddBlock"],
    "FlowGraphAngleBetweenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAngleBetweenBlock"],
    "FlowGraphArrayIndexBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphArrayIndexBlock"],
    "FlowGraphAsinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsinBlock"],
    "FlowGraphAsinhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsinhBlock"],
    "FlowGraphAtan2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtan2Block"],
    "FlowGraphAtanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtanBlock"],
    "FlowGraphAtanhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtanhBlock"],
    "FlowGraphAxisAngleFromQuaternionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAxisAngleFromQuaternionBlock"],
    "FlowGraphBitwiseAndBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseAndBlock"],
    "FlowGraphBitwiseLeftShiftBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseLeftShiftBlock"],
    "FlowGraphBitwiseNotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseNotBlock"],
    "FlowGraphBitwiseOrBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseOrBlock"],
    "FlowGraphBitwiseRightShiftBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseRightShiftBlock"],
    "FlowGraphBitwiseXorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseXorBlock"],
    "FlowGraphBooleanToFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBooleanToFloat"],
    "FlowGraphBooleanToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBooleanToInt"],
    "FlowGraphCeilBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCeilBlock"],
    "FlowGraphClampBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphClampBlock"],
    "FlowGraphCodeExecutionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCodeExecutionBlock"],
    "FlowGraphCombineMatrix2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrix2DBlock"],
    "FlowGraphCombineMatrix3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrix3DBlock"],
    "FlowGraphCombineMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrixBlock"],
    "FlowGraphCombineVector2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector2Block"],
    "FlowGraphCombineVector3Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector3Block"],
    "FlowGraphCombineVector4Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector4Block"],
    "FlowGraphConditionalDataBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConditionalDataBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConditionalDataBlock"],
    "FlowGraphConjugateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConjugateBlock"],
    "FlowGraphConstantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConstantBlock"],
    "FlowGraphContextBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphContextBlock"],
    "FlowGraphCosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCosBlock"],
    "FlowGraphCoshBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCoshBlock"],
    "FlowGraphCrossBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCrossBlock"],
    "FlowGraphCubeRootBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCubeRootBlock"],
    "FlowGraphDataSwitchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphDataSwitchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDataSwitchBlock"],
    "FlowGraphDegToRadBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDegToRadBlock"],
    "FlowGraphDeterminantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDeterminantBlock"],
    "FlowGraphDivideBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDivideBlock"],
    "FlowGraphDotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDotBlock"],
    "FlowGraphEBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEBlock"],
    "FlowGraphEqualityBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEqualityBlock"],
    "FlowGraphExpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExpBlock"],
    "FlowGraphExtractMatrix2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrix2DBlock"],
    "FlowGraphExtractMatrix3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrix3DBlock"],
    "FlowGraphExtractMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrixBlock"],
    "FlowGraphExtractVector2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector2Block"],
    "FlowGraphExtractVector3Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector3Block"],
    "FlowGraphExtractVector4Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector4Block"],
    "FlowGraphFloatToBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloatToBoolean"],
    "FlowGraphFloatToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloatToInt"],
    "FlowGraphFloorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloorBlock"],
    "FlowGraphFractionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFractionBlock"],
    "FlowGraphFunctionReferenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFunctionReferenceBlock"],
    "FlowGraphGetAssetBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetAssetBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetAssetBlock"],
    "FlowGraphGetPropertyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetPropertyBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetPropertyBlock"],
    "FlowGraphGetVariableBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetVariableBlock"],
    "FlowGraphGreaterThanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGreaterThanBlock"],
    "FlowGraphGreaterThanOrEqualBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGreaterThanOrEqualBlock"],
    "FlowGraphIndexOfBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIndexOfBlock"],
    "FlowGraphInfBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInfBlock"],
    "FlowGraphIntToBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIntToBoolean"],
    "FlowGraphIntToFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIntToFloat"],
    "FlowGraphInvertMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInvertMatrixBlock"],
    "FlowGraphIsInfinityBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIsInfinityBlock"],
    "FlowGraphIsNanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIsNanBlock"],
    "FlowGraphJsonPointerParserBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphJsonPointerParserBlock"],
    "FlowGraphLeadingZerosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLeadingZerosBlock"],
    "FlowGraphLengthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLengthBlock"],
    "FlowGraphLessThanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLessThanBlock"],
    "FlowGraphLessThanOrEqualBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLessThanOrEqualBlock"],
    "FlowGraphLog10Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLog10Block"],
    "FlowGraphLog2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLog2Block"],
    "FlowGraphLogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLogBlock"],
    "FlowGraphMathInterpolationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMathInterpolationBlock"],
    "FlowGraphMatrixComposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixComposeBlock"],
    "FlowGraphMatrixDecomposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixDecomposeBlock"],
    "FlowGraphMatrixMultiplicationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixMultiplicationBlock"],
    "FlowGraphMaxBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMaxBlock"],
    "FlowGraphMinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMinBlock"],
    "FlowGraphModuloBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphModuloBlock"],
    "FlowGraphMultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMultiplyBlock"],
    "FlowGraphNaNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNaNBlock"],
    "FlowGraphNegationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNegationBlock"],
    "FlowGraphNormalizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNormalizeBlock"],
    "FlowGraphOneBitsCounterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphOneBitsCounterBlock"],
    "FlowGraphPiBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPiBlock"],
    "FlowGraphPowerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPowerBlock"],
    "FlowGraphQuaternionFromAxisAngleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphQuaternionFromAxisAngleBlock"],
    "FlowGraphQuaternionFromDirectionsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphQuaternionFromDirectionsBlock"],
    "FlowGraphRadToDegBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRadToDegBlock"],
    "FlowGraphRandomBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRandomBlock"],
    "FlowGraphRotate2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRotate2DBlock"],
    "FlowGraphRotate3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRotate3DBlock"],
    "FlowGraphRoundBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRoundBlock"],
    "FlowGraphSaturateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSaturateBlock"],
    "FlowGraphSetPropertyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphSetPropertyBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetPropertyBlock"],
    "FlowGraphSetVariableBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphSetVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetVariableBlock"],
    "FlowGraphSignBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSignBlock"],
    "FlowGraphSinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSinBlock"],
    "FlowGraphSinhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSinhBlock"],
    "FlowGraphSquareRootBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSquareRootBlock"],
    "FlowGraphSubtractBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSubtractBlock"],
    "FlowGraphTanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTanBlock"],
    "FlowGraphTanhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTanhBlock"],
    "FlowGraphTrailingZerosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTrailingZerosBlock"],
    "FlowGraphTransformBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformBlock"],
    "FlowGraphTransformCoordinatesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformCoordinatesBlock"],
    "FlowGraphTransformCoordinatesSystemBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphTransformCoordinatesSystemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformCoordinatesSystemBlock"],
    "FlowGraphTransposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransposeBlock"],
    "FlowGraphTruncBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTruncBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConditionalDataBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConditionalDataBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphSetVariableBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphTransformCoordinatesSystemBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphTransformCoordinatesSystemBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetPropertyBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$flowGraphSetPropertyBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphConstantBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphConstantBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphGetAssetBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphGetAssetBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$flowGraphDataSwitchBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Math$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Math/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Transformers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Transformers/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$Utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/Utils/index.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphMeshPickEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphMeshPickEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMeshPickEventBlock"],
    "FlowGraphPointerOutEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphPointerOutEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPointerOutEventBlock"],
    "FlowGraphPointerOverEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphPointerOverEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPointerOverEventBlock"],
    "FlowGraphReceiveCustomEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphReceiveCustomEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphReceiveCustomEventBlock"],
    "FlowGraphSceneReadyEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSceneReadyEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSceneReadyEventBlock"],
    "FlowGraphSceneTickEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSceneTickEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSceneTickEventBlock"],
    "FlowGraphSendCustomEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSendCustomEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSendCustomEventBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphMeshPickEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSceneReadyEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSceneReadyEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphReceiveCustomEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSendCustomEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSendCustomEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphSceneTickEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphSceneTickEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphPointerOutEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$flowGraphPointerOverEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasingFunctionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EasingFunctionType"],
    "FlowGraphAbsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAbsBlock"],
    "FlowGraphAcosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAcosBlock"],
    "FlowGraphAcoshBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAcoshBlock"],
    "FlowGraphAddBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAddBlock"],
    "FlowGraphAngleBetweenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAngleBetweenBlock"],
    "FlowGraphArrayIndexBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphArrayIndexBlock"],
    "FlowGraphAsinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsinBlock"],
    "FlowGraphAsinhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsinhBlock"],
    "FlowGraphAtan2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtan2Block"],
    "FlowGraphAtanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtanBlock"],
    "FlowGraphAtanhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtanhBlock"],
    "FlowGraphAxisAngleFromQuaternionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAxisAngleFromQuaternionBlock"],
    "FlowGraphBezierCurveEasingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBezierCurveEasingBlock"],
    "FlowGraphBitwiseAndBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseAndBlock"],
    "FlowGraphBitwiseLeftShiftBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseLeftShiftBlock"],
    "FlowGraphBitwiseNotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseNotBlock"],
    "FlowGraphBitwiseOrBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseOrBlock"],
    "FlowGraphBitwiseRightShiftBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseRightShiftBlock"],
    "FlowGraphBitwiseXorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseXorBlock"],
    "FlowGraphBlockNames",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockNames$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlockNames"],
    "FlowGraphBooleanToFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBooleanToFloat"],
    "FlowGraphBooleanToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBooleanToInt"],
    "FlowGraphBranchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBranchBlock"],
    "FlowGraphCallCounterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCallCounterBlock"],
    "FlowGraphCancelDelayBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCancelDelayBlock"],
    "FlowGraphCeilBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCeilBlock"],
    "FlowGraphClampBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphClampBlock"],
    "FlowGraphCodeExecutionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCodeExecutionBlock"],
    "FlowGraphCombineMatrix2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrix2DBlock"],
    "FlowGraphCombineMatrix3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrix3DBlock"],
    "FlowGraphCombineMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrixBlock"],
    "FlowGraphCombineVector2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector2Block"],
    "FlowGraphCombineVector3Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector3Block"],
    "FlowGraphCombineVector4Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector4Block"],
    "FlowGraphConditionalDataBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConditionalDataBlock"],
    "FlowGraphConjugateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConjugateBlock"],
    "FlowGraphConsoleLogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConsoleLogBlock"],
    "FlowGraphConstantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConstantBlock"],
    "FlowGraphContextBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphContextBlock"],
    "FlowGraphCosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCosBlock"],
    "FlowGraphCoshBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCoshBlock"],
    "FlowGraphCrossBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCrossBlock"],
    "FlowGraphCubeRootBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCubeRootBlock"],
    "FlowGraphDataSwitchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDataSwitchBlock"],
    "FlowGraphDebounceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDebounceBlock"],
    "FlowGraphDegToRadBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDegToRadBlock"],
    "FlowGraphDeterminantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDeterminantBlock"],
    "FlowGraphDivideBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDivideBlock"],
    "FlowGraphDoNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDoNBlock"],
    "FlowGraphDotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDotBlock"],
    "FlowGraphEBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEBlock"],
    "FlowGraphEasingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEasingBlock"],
    "FlowGraphEqualityBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEqualityBlock"],
    "FlowGraphExpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExpBlock"],
    "FlowGraphExtractMatrix2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrix2DBlock"],
    "FlowGraphExtractMatrix3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrix3DBlock"],
    "FlowGraphExtractMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrixBlock"],
    "FlowGraphExtractVector2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector2Block"],
    "FlowGraphExtractVector3Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector3Block"],
    "FlowGraphExtractVector4Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector4Block"],
    "FlowGraphFlipFlopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFlipFlopBlock"],
    "FlowGraphFloatToBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloatToBoolean"],
    "FlowGraphFloatToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloatToInt"],
    "FlowGraphFloorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloorBlock"],
    "FlowGraphForLoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphForLoopBlock"],
    "FlowGraphFractionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFractionBlock"],
    "FlowGraphFunctionReferenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFunctionReferenceBlock"],
    "FlowGraphGetAssetBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetAssetBlock"],
    "FlowGraphGetPropertyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetPropertyBlock"],
    "FlowGraphGetVariableBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetVariableBlock"],
    "FlowGraphGreaterThanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGreaterThanBlock"],
    "FlowGraphGreaterThanOrEqualBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGreaterThanOrEqualBlock"],
    "FlowGraphIndexOfBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIndexOfBlock"],
    "FlowGraphInfBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInfBlock"],
    "FlowGraphIntToBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIntToBoolean"],
    "FlowGraphIntToFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIntToFloat"],
    "FlowGraphInterpolationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInterpolationBlock"],
    "FlowGraphInvertMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInvertMatrixBlock"],
    "FlowGraphIsInfinityBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIsInfinityBlock"],
    "FlowGraphIsNanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIsNanBlock"],
    "FlowGraphJsonPointerParserBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphJsonPointerParserBlock"],
    "FlowGraphLeadingZerosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLeadingZerosBlock"],
    "FlowGraphLengthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLengthBlock"],
    "FlowGraphLessThanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLessThanBlock"],
    "FlowGraphLessThanOrEqualBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLessThanOrEqualBlock"],
    "FlowGraphLog10Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLog10Block"],
    "FlowGraphLog2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLog2Block"],
    "FlowGraphLogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLogBlock"],
    "FlowGraphMathInterpolationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMathInterpolationBlock"],
    "FlowGraphMatrixComposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixComposeBlock"],
    "FlowGraphMatrixDecomposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixDecomposeBlock"],
    "FlowGraphMatrixMultiplicationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixMultiplicationBlock"],
    "FlowGraphMaxBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMaxBlock"],
    "FlowGraphMeshPickEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMeshPickEventBlock"],
    "FlowGraphMinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMinBlock"],
    "FlowGraphModuloBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphModuloBlock"],
    "FlowGraphMultiGateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMultiGateBlock"],
    "FlowGraphMultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMultiplyBlock"],
    "FlowGraphNaNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNaNBlock"],
    "FlowGraphNegationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNegationBlock"],
    "FlowGraphNormalizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNormalizeBlock"],
    "FlowGraphOneBitsCounterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphOneBitsCounterBlock"],
    "FlowGraphPauseAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPauseAnimationBlock"],
    "FlowGraphPiBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPiBlock"],
    "FlowGraphPlayAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPlayAnimationBlock"],
    "FlowGraphPointerOutEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPointerOutEventBlock"],
    "FlowGraphPointerOverEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPointerOverEventBlock"],
    "FlowGraphPowerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPowerBlock"],
    "FlowGraphQuaternionFromAxisAngleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphQuaternionFromAxisAngleBlock"],
    "FlowGraphQuaternionFromDirectionsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphQuaternionFromDirectionsBlock"],
    "FlowGraphRadToDegBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRadToDegBlock"],
    "FlowGraphRandomBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRandomBlock"],
    "FlowGraphReceiveCustomEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphReceiveCustomEventBlock"],
    "FlowGraphRotate2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRotate2DBlock"],
    "FlowGraphRotate3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRotate3DBlock"],
    "FlowGraphRoundBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRoundBlock"],
    "FlowGraphSaturateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSaturateBlock"],
    "FlowGraphSceneReadyEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSceneReadyEventBlock"],
    "FlowGraphSceneTickEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSceneTickEventBlock"],
    "FlowGraphSendCustomEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSendCustomEventBlock"],
    "FlowGraphSequenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSequenceBlock"],
    "FlowGraphSetDelayBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetDelayBlock"],
    "FlowGraphSetPropertyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetPropertyBlock"],
    "FlowGraphSetVariableBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetVariableBlock"],
    "FlowGraphSignBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSignBlock"],
    "FlowGraphSinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSinBlock"],
    "FlowGraphSinhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSinhBlock"],
    "FlowGraphSquareRootBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSquareRootBlock"],
    "FlowGraphStopAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphStopAnimationBlock"],
    "FlowGraphSubtractBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSubtractBlock"],
    "FlowGraphSwitchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSwitchBlock"],
    "FlowGraphTanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTanBlock"],
    "FlowGraphTanhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTanhBlock"],
    "FlowGraphThrottleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphThrottleBlock"],
    "FlowGraphTrailingZerosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTrailingZerosBlock"],
    "FlowGraphTransformBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformBlock"],
    "FlowGraphTransformCoordinatesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformCoordinatesBlock"],
    "FlowGraphTransformCoordinatesSystemBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformCoordinatesSystemBlock"],
    "FlowGraphTransposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransposeBlock"],
    "FlowGraphTruncBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTruncBlock"],
    "FlowGraphWaitAllBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphWaitAllBlock"],
    "FlowGraphWhileLoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphWhileLoopBlock"],
    "addToBlockFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToBlockFactory"],
    "blockFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockFactory"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Execution$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Execution/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Data/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$Event$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/Event/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/flowGraphBlockFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$flowGraphBlockNames$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/flowGraphBlockNames.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowGraphInteger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"],
    "FlowGraphMatrix2D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"],
    "FlowGraphMatrix3D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphInteger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphInteger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$flowGraphMatrix$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/flowGraphMatrix.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EasingFunctionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EasingFunctionType"],
    "FlowGraph",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraph"],
    "FlowGraphAbsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAbsBlock"],
    "FlowGraphAcosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAcosBlock"],
    "FlowGraphAcoshBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAcoshBlock"],
    "FlowGraphAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAction"],
    "FlowGraphAddBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAddBlock"],
    "FlowGraphAngleBetweenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAngleBetweenBlock"],
    "FlowGraphArrayIndexBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphArrayIndexBlock"],
    "FlowGraphAsinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsinBlock"],
    "FlowGraphAsinhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAsinhBlock"],
    "FlowGraphAssetType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAssetsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAssetType"],
    "FlowGraphAtan2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtan2Block"],
    "FlowGraphAtanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtanBlock"],
    "FlowGraphAtanhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAtanhBlock"],
    "FlowGraphAxisAngleFromQuaternionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphAxisAngleFromQuaternionBlock"],
    "FlowGraphBezierCurveEasingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBezierCurveEasingBlock"],
    "FlowGraphBitwiseAndBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseAndBlock"],
    "FlowGraphBitwiseLeftShiftBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseLeftShiftBlock"],
    "FlowGraphBitwiseNotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseNotBlock"],
    "FlowGraphBitwiseOrBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseOrBlock"],
    "FlowGraphBitwiseRightShiftBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseRightShiftBlock"],
    "FlowGraphBitwiseXorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBitwiseXorBlock"],
    "FlowGraphBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlock"],
    "FlowGraphBlockNames",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBlockNames"],
    "FlowGraphBooleanToFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBooleanToFloat"],
    "FlowGraphBooleanToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBooleanToInt"],
    "FlowGraphBranchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphBranchBlock"],
    "FlowGraphCallCounterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCallCounterBlock"],
    "FlowGraphCancelDelayBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCancelDelayBlock"],
    "FlowGraphCeilBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCeilBlock"],
    "FlowGraphClampBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphClampBlock"],
    "FlowGraphCodeExecutionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCodeExecutionBlock"],
    "FlowGraphCombineMatrix2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrix2DBlock"],
    "FlowGraphCombineMatrix3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrix3DBlock"],
    "FlowGraphCombineMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineMatrixBlock"],
    "FlowGraphCombineVector2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector2Block"],
    "FlowGraphCombineVector3Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector3Block"],
    "FlowGraphCombineVector4Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCombineVector4Block"],
    "FlowGraphConditionalDataBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConditionalDataBlock"],
    "FlowGraphConjugateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConjugateBlock"],
    "FlowGraphConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConnection"],
    "FlowGraphConnectionType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConnectionType"],
    "FlowGraphConsoleLogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConsoleLogBlock"],
    "FlowGraphConstantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphConstantBlock"],
    "FlowGraphContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphContext"],
    "FlowGraphContextBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphContextBlock"],
    "FlowGraphCoordinator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCoordinator"],
    "FlowGraphCosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCosBlock"],
    "FlowGraphCoshBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCoshBlock"],
    "FlowGraphCrossBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCrossBlock"],
    "FlowGraphCubeRootBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphCubeRootBlock"],
    "FlowGraphDataConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphDataConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDataConnection"],
    "FlowGraphDataSwitchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDataSwitchBlock"],
    "FlowGraphDebounceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDebounceBlock"],
    "FlowGraphDegToRadBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDegToRadBlock"],
    "FlowGraphDeterminantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDeterminantBlock"],
    "FlowGraphDivideBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDivideBlock"],
    "FlowGraphDoNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDoNBlock"],
    "FlowGraphDotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphDotBlock"],
    "FlowGraphEBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEBlock"],
    "FlowGraphEasingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEasingBlock"],
    "FlowGraphEqualityBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEqualityBlock"],
    "FlowGraphEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphEventBlock"],
    "FlowGraphExecutionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExecutionBlock"],
    "FlowGraphExpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExpBlock"],
    "FlowGraphExtractMatrix2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrix2DBlock"],
    "FlowGraphExtractMatrix3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrix3DBlock"],
    "FlowGraphExtractMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractMatrixBlock"],
    "FlowGraphExtractVector2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector2Block"],
    "FlowGraphExtractVector3Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector3Block"],
    "FlowGraphExtractVector4Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphExtractVector4Block"],
    "FlowGraphFlipFlopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFlipFlopBlock"],
    "FlowGraphFloatToBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloatToBoolean"],
    "FlowGraphFloatToInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloatToInt"],
    "FlowGraphFloorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFloorBlock"],
    "FlowGraphForLoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphForLoopBlock"],
    "FlowGraphFractionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFractionBlock"],
    "FlowGraphFunctionReferenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphFunctionReferenceBlock"],
    "FlowGraphGetAssetBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetAssetBlock"],
    "FlowGraphGetPropertyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetPropertyBlock"],
    "FlowGraphGetVariableBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGetVariableBlock"],
    "FlowGraphGreaterThanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGreaterThanBlock"],
    "FlowGraphGreaterThanOrEqualBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphGreaterThanOrEqualBlock"],
    "FlowGraphIndexOfBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIndexOfBlock"],
    "FlowGraphInfBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInfBlock"],
    "FlowGraphIntToBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIntToBoolean"],
    "FlowGraphIntToFloat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIntToFloat"],
    "FlowGraphInteger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInteger"],
    "FlowGraphInterpolationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInterpolationBlock"],
    "FlowGraphInvertMatrixBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphInvertMatrixBlock"],
    "FlowGraphIsInfinityBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIsInfinityBlock"],
    "FlowGraphIsNanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphIsNanBlock"],
    "FlowGraphJsonPointerParserBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphJsonPointerParserBlock"],
    "FlowGraphLeadingZerosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLeadingZerosBlock"],
    "FlowGraphLengthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLengthBlock"],
    "FlowGraphLessThanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLessThanBlock"],
    "FlowGraphLessThanOrEqualBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLessThanOrEqualBlock"],
    "FlowGraphLog10Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLog10Block"],
    "FlowGraphLog2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLog2Block"],
    "FlowGraphLogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLogBlock"],
    "FlowGraphLogger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphLogger"],
    "FlowGraphMathInterpolationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMathInterpolationBlock"],
    "FlowGraphMatrix2D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix2D"],
    "FlowGraphMatrix3D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrix3D"],
    "FlowGraphMatrixComposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixComposeBlock"],
    "FlowGraphMatrixDecomposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixDecomposeBlock"],
    "FlowGraphMatrixMultiplicationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMatrixMultiplicationBlock"],
    "FlowGraphMaxBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMaxBlock"],
    "FlowGraphMeshPickEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMeshPickEventBlock"],
    "FlowGraphMinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMinBlock"],
    "FlowGraphModuloBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphModuloBlock"],
    "FlowGraphMultiGateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMultiGateBlock"],
    "FlowGraphMultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphMultiplyBlock"],
    "FlowGraphNaNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNaNBlock"],
    "FlowGraphNegationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNegationBlock"],
    "FlowGraphNormalizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphNormalizeBlock"],
    "FlowGraphOneBitsCounterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphOneBitsCounterBlock"],
    "FlowGraphPathConverter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphPathConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPathConverter"],
    "FlowGraphPathConverterComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphPathConverterComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPathConverterComponent"],
    "FlowGraphPauseAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPauseAnimationBlock"],
    "FlowGraphPiBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPiBlock"],
    "FlowGraphPlayAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPlayAnimationBlock"],
    "FlowGraphPointerOutEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPointerOutEventBlock"],
    "FlowGraphPointerOverEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPointerOverEventBlock"],
    "FlowGraphPowerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphPowerBlock"],
    "FlowGraphQuaternionFromAxisAngleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphQuaternionFromAxisAngleBlock"],
    "FlowGraphQuaternionFromDirectionsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphQuaternionFromDirectionsBlock"],
    "FlowGraphRadToDegBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRadToDegBlock"],
    "FlowGraphRandomBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRandomBlock"],
    "FlowGraphReceiveCustomEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphReceiveCustomEventBlock"],
    "FlowGraphRotate2DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRotate2DBlock"],
    "FlowGraphRotate3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRotate3DBlock"],
    "FlowGraphRoundBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphRoundBlock"],
    "FlowGraphSaturateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSaturateBlock"],
    "FlowGraphSceneReadyEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSceneReadyEventBlock"],
    "FlowGraphSceneTickEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSceneTickEventBlock"],
    "FlowGraphSendCustomEventBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSendCustomEventBlock"],
    "FlowGraphSequenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSequenceBlock"],
    "FlowGraphSetDelayBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetDelayBlock"],
    "FlowGraphSetPropertyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetPropertyBlock"],
    "FlowGraphSetVariableBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSetVariableBlock"],
    "FlowGraphSignBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSignBlock"],
    "FlowGraphSignalConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphSignalConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSignalConnection"],
    "FlowGraphSinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSinBlock"],
    "FlowGraphSinhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSinhBlock"],
    "FlowGraphSquareRootBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSquareRootBlock"],
    "FlowGraphState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphState"],
    "FlowGraphStopAnimationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphStopAnimationBlock"],
    "FlowGraphSubtractBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSubtractBlock"],
    "FlowGraphSwitchBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphSwitchBlock"],
    "FlowGraphTanBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTanBlock"],
    "FlowGraphTanhBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTanhBlock"],
    "FlowGraphThrottleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphThrottleBlock"],
    "FlowGraphTrailingZerosBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTrailingZerosBlock"],
    "FlowGraphTransformBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformBlock"],
    "FlowGraphTransformCoordinatesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformCoordinatesBlock"],
    "FlowGraphTransformCoordinatesSystemBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransformCoordinatesSystemBlock"],
    "FlowGraphTransposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTransposeBlock"],
    "FlowGraphTruncBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTruncBlock"],
    "FlowGraphTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphTypes"],
    "FlowGraphWaitAllBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphWaitAllBlock"],
    "FlowGraphWhileLoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowGraphWhileLoopBlock"],
    "GetDataOutConnectionByUniqueId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetDataOutConnectionByUniqueId"],
    "GetFlowGraphAssetWithType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAssetsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetFlowGraphAssetWithType"],
    "GetSignalInConnectionByUniqueId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetSignalInConnectionByUniqueId"],
    "ParseBlockAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseBlockAsync"],
    "ParseCoordinatorAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseCoordinatorAsync"],
    "ParseFlowGraph",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseFlowGraph"],
    "ParseFlowGraphAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseFlowGraphAsync"],
    "ParseFlowGraphBlockWithClassType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseFlowGraphBlockWithClassType"],
    "ParseFlowGraphContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseFlowGraphContext"],
    "ParseGraphConnectionWithClassType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseGraphConnectionWithClassType"],
    "ParseGraphDataConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParseGraphDataConnection"],
    "RichType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichType"],
    "RichTypeAny",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeAny"],
    "RichTypeBoolean",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeBoolean"],
    "RichTypeColor3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeColor3"],
    "RichTypeColor4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeColor4"],
    "RichTypeFlowGraphInteger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeFlowGraphInteger"],
    "RichTypeMatrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix"],
    "RichTypeMatrix2D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix2D"],
    "RichTypeMatrix3D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeMatrix3D"],
    "RichTypeNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeNumber"],
    "RichTypeQuaternion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeQuaternion"],
    "RichTypeString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeString"],
    "RichTypeVector2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector2"],
    "RichTypeVector3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector3"],
    "RichTypeVector4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RichTypeVector4"],
    "addToBlockFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToBlockFactory"],
    "blockFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockFactory"],
    "getAnimationTypeByFlowGraphType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnimationTypeByFlowGraphType"],
    "getRichTypeByAnimationType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByAnimationType"],
    "getRichTypeByFlowGraphType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeByFlowGraphType"],
    "getRichTypeFromValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRichTypeFromValue"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphSignalConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphSignalConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphExecutionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphExecutionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphEventBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphEventBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphRichTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphRichTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphCoordinator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphCoordinator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$typeDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/typeDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphDataConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphDataConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphAssetsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphAssetsContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphParser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphParser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphPathConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphPathConverter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphPathConverterComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphPathConverterComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$flowGraphLogger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/flowGraphLogger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$Blocks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/Blocks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$FlowGraph$2f$CustomTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/FlowGraph/CustomTypes/index.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_FlowGraph_dd16076c._.js.map