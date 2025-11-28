(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constant used to convert a value to gamma space
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
__turbopack_context__.s([
    "Epsilon",
    ()=>Epsilon,
    "PHI",
    ()=>PHI,
    "ToGammaSpace",
    ()=>ToGammaSpace,
    "ToLinearSpace",
    ()=>ToLinearSpace
]);
const ToGammaSpace = 1 / 2.2;
const ToLinearSpace = 2.2;
const PHI = (1 + Math.sqrt(5)) / 2;
const Epsilon = 0.001; //# sourceMappingURL=math.constants.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Extract int value
 * @param value number value
 * @returns int value
 */ __turbopack_context__.s([
    "Clamp",
    ()=>Clamp,
    "DeltaAngle",
    ()=>DeltaAngle,
    "Denormalize",
    ()=>Denormalize,
    "ExtractAsInt",
    ()=>ExtractAsInt,
    "Hermite",
    ()=>Hermite,
    "Hermite1stDerivative",
    ()=>Hermite1stDerivative,
    "HighestCommonFactor",
    ()=>HighestCommonFactor,
    "ILog2",
    ()=>ILog2,
    "InverseLerp",
    ()=>InverseLerp,
    "Lerp",
    ()=>Lerp,
    "LerpAngle",
    ()=>LerpAngle,
    "MoveTowards",
    ()=>MoveTowards,
    "MoveTowardsAngle",
    ()=>MoveTowardsAngle,
    "Normalize",
    ()=>Normalize,
    "NormalizeRadians",
    ()=>NormalizeRadians,
    "OutsideRange",
    ()=>OutsideRange,
    "PercentToRange",
    ()=>PercentToRange,
    "PingPong",
    ()=>PingPong,
    "RandomRange",
    ()=>RandomRange,
    "RangeToPercent",
    ()=>RangeToPercent,
    "Repeat",
    ()=>Repeat,
    "SmoothStep",
    ()=>SmoothStep,
    "ToHex",
    ()=>ToHex,
    "WithinEpsilon",
    ()=>WithinEpsilon
]);
function ExtractAsInt(value) {
    return parseInt(value.toString().replace(/\W/g, ""));
}
function WithinEpsilon(a, b, epsilon = 1.401298e-45) {
    return Math.abs(a - b) <= epsilon;
}
function OutsideRange(num, min, max, epsilon = 1.401298e-45) {
    return num < min - epsilon || num > max + epsilon;
}
function RandomRange(min, max) {
    if (min === max) {
        return min;
    }
    return Math.random() * (max - min) + min;
}
function Lerp(start, end, amount) {
    return start + (end - start) * amount;
}
function LerpAngle(start, end, amount) {
    let num = Repeat(end - start, 360.0);
    if (num > 180.0) {
        num -= 360.0;
    }
    return start + num * Clamp(amount);
}
function InverseLerp(a, b, value) {
    let result = 0;
    if (a != b) {
        result = Clamp((value - a) / (b - a));
    } else {
        result = 0.0;
    }
    return result;
}
function Hermite(value1, tangent1, value2, tangent2, amount) {
    const squared = amount * amount;
    const cubed = amount * squared;
    const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
    const part2 = -2.0 * cubed + 3.0 * squared;
    const part3 = cubed - 2.0 * squared + amount;
    const part4 = cubed - squared;
    return value1 * part1 + value2 * part2 + tangent1 * part3 + tangent2 * part4;
}
function Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
    const t2 = time * time;
    return (t2 - time) * 6 * value1 + (3 * t2 - 4 * time + 1) * tangent1 + (-t2 + time) * 6 * value2 + (3 * t2 - 2 * time) * tangent2;
}
function Clamp(value, min = 0, max = 1) {
    return Math.min(max, Math.max(min, value));
}
function NormalizeRadians(angle) {
    // More precise but slower version kept for reference.
    // angle = angle % Tools.TwoPi;
    // angle = (angle + Tools.TwoPi) % Tools.TwoPi;
    //if (angle > Math.PI) {
    //	angle -= Tools.TwoPi;
    //}
    angle -= Math.PI * 2 * Math.floor((angle + Math.PI) / (Math.PI * 2));
    return angle;
}
function ToHex(i) {
    const str = i.toString(16);
    if (i <= 15) {
        return ("0" + str).toUpperCase();
    }
    return str.toUpperCase();
}
function ILog2(value) {
    if (Math.log2) {
        return Math.floor(Math.log2(value));
    }
    if (value < 0) {
        return NaN;
    } else if (value === 0) {
        return -Infinity;
    }
    let n = 0;
    if (value < 1) {
        while(value < 1){
            n++;
            value = value * 2;
        }
        n = -n;
    } else if (value > 1) {
        while(value > 1){
            n++;
            value = Math.floor(value / 2);
        }
    }
    return n;
}
function Repeat(value, length) {
    return value - Math.floor(value / length) * length;
}
function Normalize(value, min, max) {
    return (value - min) / (max - min);
}
function Denormalize(normalized, min, max) {
    return normalized * (max - min) + min;
}
function DeltaAngle(current, target) {
    let num = Repeat(target - current, 360.0);
    if (num > 180.0) {
        num -= 360.0;
    }
    return num;
}
function PingPong(tx, length) {
    const t = Repeat(tx, length * 2.0);
    return length - Math.abs(t - length);
}
function SmoothStep(from, to, tx) {
    let t = Clamp(tx);
    t = -2.0 * t * t * t + 3.0 * t * t;
    return to * t + from * (1.0 - t);
}
function MoveTowards(current, target, maxDelta) {
    let result = 0;
    if (Math.abs(target - current) <= maxDelta) {
        result = target;
    } else {
        result = current + Math.sign(target - current) * maxDelta;
    }
    return result;
}
function MoveTowardsAngle(current, target, maxDelta) {
    const num = DeltaAngle(current, target);
    let result = 0;
    if (-maxDelta < num && num < maxDelta) {
        result = target;
    } else {
        target = current + num;
        result = MoveTowards(current, target, maxDelta);
    }
    return result;
}
function RangeToPercent(number, min, max) {
    return (number - min) / (max - min);
}
function PercentToRange(percent, min, max) {
    return (max - min) * percent + min;
}
function HighestCommonFactor(a, b) {
    const r = a % b;
    if (r === 0) {
        return b;
    }
    return HighestCommonFactor(b, r);
} //# sourceMappingURL=math.scalar.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/thinMath.matrix.functions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "CopyMatrixToArray",
    ()=>CopyMatrixToArray,
    "CopyMatrixToRef",
    ()=>CopyMatrixToRef,
    "IdentityMatrixToRef",
    ()=>IdentityMatrixToRef,
    "InvertMatrixToArray",
    ()=>InvertMatrixToArray,
    "InvertMatrixToRef",
    ()=>InvertMatrixToRef,
    "MarkAsDirty",
    ()=>MarkAsDirty,
    "MatrixManagement",
    ()=>MatrixManagement,
    "MultiplyMatricesToArray",
    ()=>MultiplyMatricesToArray,
    "MultiplyMatricesToRef",
    ()=>MultiplyMatricesToRef,
    "ScalingMatrixToRef",
    ()=>ScalingMatrixToRef,
    "TranslationMatrixToRef",
    ()=>TranslationMatrixToRef
]);
class MatrixManagement {
}
/** @internal */ MatrixManagement._UpdateFlagSeed = 0;
function SetMatrixData(result, m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15) {
    const mat = result.asArray();
    mat[0] = m0;
    mat[1] = m1;
    mat[2] = m2;
    mat[3] = m3;
    mat[4] = m4;
    mat[5] = m5;
    mat[6] = m6;
    mat[7] = m7;
    mat[8] = m8;
    mat[9] = m9;
    mat[10] = m10;
    mat[11] = m11;
    mat[12] = m12;
    mat[13] = m13;
    mat[14] = m14;
    mat[15] = m15;
    MarkAsDirty(result);
}
function MarkAsDirty(matrix) {
    matrix.updateFlag = MatrixManagement._UpdateFlagSeed++;
}
function IdentityMatrixToRef(result) {
    SetMatrixData(result, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
}
function TranslationMatrixToRef(x, y, z, result) {
    SetMatrixData(result, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x, y, z, 1.0);
}
function ScalingMatrixToRef(x, y, z, result) {
    SetMatrixData(result, x, 0.0, 0.0, 0.0, 0.0, y, 0.0, 0.0, 0.0, 0.0, z, 0.0, 0.0, 0.0, 0.0, 1.0);
}
function MultiplyMatricesToArray(a, b, output, offset = 0) {
    const m = a.asArray();
    const otherM = b.asArray();
    const tm0 = m[0], tm1 = m[1], tm2 = m[2], tm3 = m[3];
    const tm4 = m[4], tm5 = m[5], tm6 = m[6], tm7 = m[7];
    const tm8 = m[8], tm9 = m[9], tm10 = m[10], tm11 = m[11];
    const tm12 = m[12], tm13 = m[13], tm14 = m[14], tm15 = m[15];
    const om0 = otherM[0], om1 = otherM[1], om2 = otherM[2], om3 = otherM[3];
    const om4 = otherM[4], om5 = otherM[5], om6 = otherM[6], om7 = otherM[7];
    const om8 = otherM[8], om9 = otherM[9], om10 = otherM[10], om11 = otherM[11];
    const om12 = otherM[12], om13 = otherM[13], om14 = otherM[14], om15 = otherM[15];
    output[offset] = tm0 * om0 + tm1 * om4 + tm2 * om8 + tm3 * om12;
    output[offset + 1] = tm0 * om1 + tm1 * om5 + tm2 * om9 + tm3 * om13;
    output[offset + 2] = tm0 * om2 + tm1 * om6 + tm2 * om10 + tm3 * om14;
    output[offset + 3] = tm0 * om3 + tm1 * om7 + tm2 * om11 + tm3 * om15;
    output[offset + 4] = tm4 * om0 + tm5 * om4 + tm6 * om8 + tm7 * om12;
    output[offset + 5] = tm4 * om1 + tm5 * om5 + tm6 * om9 + tm7 * om13;
    output[offset + 6] = tm4 * om2 + tm5 * om6 + tm6 * om10 + tm7 * om14;
    output[offset + 7] = tm4 * om3 + tm5 * om7 + tm6 * om11 + tm7 * om15;
    output[offset + 8] = tm8 * om0 + tm9 * om4 + tm10 * om8 + tm11 * om12;
    output[offset + 9] = tm8 * om1 + tm9 * om5 + tm10 * om9 + tm11 * om13;
    output[offset + 10] = tm8 * om2 + tm9 * om6 + tm10 * om10 + tm11 * om14;
    output[offset + 11] = tm8 * om3 + tm9 * om7 + tm10 * om11 + tm11 * om15;
    output[offset + 12] = tm12 * om0 + tm13 * om4 + tm14 * om8 + tm15 * om12;
    output[offset + 13] = tm12 * om1 + tm13 * om5 + tm14 * om9 + tm15 * om13;
    output[offset + 14] = tm12 * om2 + tm13 * om6 + tm14 * om10 + tm15 * om14;
    output[offset + 15] = tm12 * om3 + tm13 * om7 + tm14 * om11 + tm15 * om15;
}
function MultiplyMatricesToRef(a, b, result, offset = 0) {
    MultiplyMatricesToArray(a, b, result.asArray(), offset);
    MarkAsDirty(result);
}
function CopyMatrixToRef(matrix, target) {
    CopyMatrixToArray(matrix, target.asArray());
    MarkAsDirty(target);
}
function CopyMatrixToArray(matrix, array, offset = 0) {
    const source = matrix.asArray();
    array[offset] = source[0];
    array[offset + 1] = source[1];
    array[offset + 2] = source[2];
    array[offset + 3] = source[3];
    array[offset + 4] = source[4];
    array[offset + 5] = source[5];
    array[offset + 6] = source[6];
    array[offset + 7] = source[7];
    array[offset + 8] = source[8];
    array[offset + 9] = source[9];
    array[offset + 10] = source[10];
    array[offset + 11] = source[11];
    array[offset + 12] = source[12];
    array[offset + 13] = source[13];
    array[offset + 14] = source[14];
    array[offset + 15] = source[15];
}
function InvertMatrixToRef(source, target) {
    const result = InvertMatrixToArray(source, target.asArray());
    if (result) {
        MarkAsDirty(target);
    }
    return result;
}
function InvertMatrixToArray(source, target) {
    // the inverse of a matrix is the transpose of cofactor matrix divided by the determinant
    const m = source.asArray();
    const m00 = m[0], m01 = m[1], m02 = m[2], m03 = m[3];
    const m10 = m[4], m11 = m[5], m12 = m[6], m13 = m[7];
    const m20 = m[8], m21 = m[9], m22 = m[10], m23 = m[11];
    const m30 = m[12], m31 = m[13], m32 = m[14], m33 = m[15];
    const det_22_33 = m22 * m33 - m32 * m23;
    const det_21_33 = m21 * m33 - m31 * m23;
    const det_21_32 = m21 * m32 - m31 * m22;
    const det_20_33 = m20 * m33 - m30 * m23;
    const det_20_32 = m20 * m32 - m22 * m30;
    const det_20_31 = m20 * m31 - m30 * m21;
    const cofact_00 = +(m11 * det_22_33 - m12 * det_21_33 + m13 * det_21_32);
    const cofact_01 = -(m10 * det_22_33 - m12 * det_20_33 + m13 * det_20_32);
    const cofact_02 = +(m10 * det_21_33 - m11 * det_20_33 + m13 * det_20_31);
    const cofact_03 = -(m10 * det_21_32 - m11 * det_20_32 + m12 * det_20_31);
    const det = m00 * cofact_00 + m01 * cofact_01 + m02 * cofact_02 + m03 * cofact_03;
    if (det === 0) {
        // Not invertible
        return false;
    }
    const detInv = 1 / det;
    const det_12_33 = m12 * m33 - m32 * m13;
    const det_11_33 = m11 * m33 - m31 * m13;
    const det_11_32 = m11 * m32 - m31 * m12;
    const det_10_33 = m10 * m33 - m30 * m13;
    const det_10_32 = m10 * m32 - m30 * m12;
    const det_10_31 = m10 * m31 - m30 * m11;
    const det_12_23 = m12 * m23 - m22 * m13;
    const det_11_23 = m11 * m23 - m21 * m13;
    const det_11_22 = m11 * m22 - m21 * m12;
    const det_10_23 = m10 * m23 - m20 * m13;
    const det_10_22 = m10 * m22 - m20 * m12;
    const det_10_21 = m10 * m21 - m20 * m11;
    const cofact_10 = -(m01 * det_22_33 - m02 * det_21_33 + m03 * det_21_32);
    const cofact_11 = +(m00 * det_22_33 - m02 * det_20_33 + m03 * det_20_32);
    const cofact_12 = -(m00 * det_21_33 - m01 * det_20_33 + m03 * det_20_31);
    const cofact_13 = +(m00 * det_21_32 - m01 * det_20_32 + m02 * det_20_31);
    const cofact_20 = +(m01 * det_12_33 - m02 * det_11_33 + m03 * det_11_32);
    const cofact_21 = -(m00 * det_12_33 - m02 * det_10_33 + m03 * det_10_32);
    const cofact_22 = +(m00 * det_11_33 - m01 * det_10_33 + m03 * det_10_31);
    const cofact_23 = -(m00 * det_11_32 - m01 * det_10_32 + m02 * det_10_31);
    const cofact_30 = -(m01 * det_12_23 - m02 * det_11_23 + m03 * det_11_22);
    const cofact_31 = +(m00 * det_12_23 - m02 * det_10_23 + m03 * det_10_22);
    const cofact_32 = -(m00 * det_11_23 - m01 * det_10_23 + m03 * det_10_21);
    const cofact_33 = +(m00 * det_11_22 - m01 * det_10_22 + m02 * det_10_21);
    target[0] = cofact_00 * detInv;
    target[1] = cofact_10 * detInv;
    target[2] = cofact_20 * detInv;
    target[3] = cofact_30 * detInv;
    target[4] = cofact_01 * detInv;
    target[5] = cofact_11 * detInv;
    target[6] = cofact_21 * detInv;
    target[7] = cofact_31 * detInv;
    target[8] = cofact_02 * detInv;
    target[9] = cofact_12 * detInv;
    target[10] = cofact_22 * detInv;
    target[11] = cofact_32 * detInv;
    target[12] = cofact_03 * detInv;
    target[13] = cofact_13 * detInv;
    target[14] = cofact_23 * detInv;
    target[15] = cofact_33 * detInv;
    return true;
} //# sourceMappingURL=thinMath.matrix.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "Matrix",
    ()=>Matrix,
    "Quaternion",
    ()=>Quaternion,
    "TmpVectors",
    ()=>TmpVectors,
    "Vector2",
    ()=>Vector2,
    "Vector3",
    ()=>Vector3,
    "Vector4",
    ()=>Vector4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/performanceConfigurator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/thinMath.matrix.functions.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
// eslint-disable-next-line @typescript-eslint/naming-convention
const ExtractAsInt = (value)=>{
    return parseInt(value.toString().replace(/\W/g, ""));
};
class Vector2 {
    /**
     * Creates a new Vector2 from the given x and y coordinates
     * @param x defines the first coordinate
     * @param y defines the second coordinate
     */ constructor(/** [0] defines the first coordinate */ x = 0, /** [0] defines the second coordinate */ y = 0){
        this.x = x;
        this.y = y;
    }
    /**
     * Gets a string with the Vector2 coordinates
     * @returns a string with the Vector2 coordinates
     */ toString() {
        return `{X: ${this.x} Y: ${this.y}}`;
    }
    /**
     * Gets class name
     * @returns the string "Vector2"
     */ getClassName() {
        return "Vector2";
    }
    /**
     * Gets current vector hash code
     * @returns the Vector2 hash code as a number
     */ getHashCode() {
        const x = ExtractAsInt(this.x);
        const y = ExtractAsInt(this.y);
        let hash = x;
        hash = hash * 397 ^ y;
        return hash;
    }
    // Operators
    /**
     * Sets the Vector2 coordinates in the given array or Float32Array from the given index.
     * Example Playground https://playground.babylonjs.com/#QYBWV4#15
     * @param array defines the source array
     * @param index defines the offset in source array
     * @returns the current Vector2
     */ toArray(array, index = 0) {
        array[index] = this.x;
        array[index + 1] = this.y;
        return this;
    }
    /**
     * Update the current vector from an array
     * Example Playground https://playground.babylonjs.com/#QYBWV4#39
     * @param array defines the destination array
     * @param offset defines the offset in the destination array
     * @returns the current Vector2
     */ fromArray(array, offset = 0) {
        Vector2.FromArrayToRef(array, offset, this);
        return this;
    }
    /**
     * Copy the current vector to an array
     * Example Playground https://playground.babylonjs.com/#QYBWV4#40
     * @returns a new array with 2 elements: the Vector2 coordinates.
     */ asArray() {
        return [
            this.x,
            this.y
        ];
    }
    /**
     * Sets the Vector2 coordinates with the given Vector2 coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#24
     * @param source defines the source Vector2
     * @returns the current updated Vector2
     */ copyFrom(source) {
        this.x = source.x;
        this.y = source.y;
        return this;
    }
    /**
     * Sets the Vector2 coordinates with the given floats
     * Example Playground https://playground.babylonjs.com/#QYBWV4#25
     * @param x defines the first coordinate
     * @param y defines the second coordinate
     * @returns the current updated Vector2
     */ copyFromFloats(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Sets the Vector2 coordinates with the given floats
     * Example Playground https://playground.babylonjs.com/#QYBWV4#62
     * @param x defines the first coordinate
     * @param y defines the second coordinate
     * @returns the current updated Vector2
     */ set(x, y) {
        return this.copyFromFloats(x, y);
    }
    /**
     * Copies the given float to the current Vector2 coordinates
     * @param v defines the x and y coordinates of the operand
     * @returns the current updated Vector2
     */ setAll(v) {
        return this.copyFromFloats(v, v);
    }
    /**
     * Add another vector with the current one
     * Example Playground https://playground.babylonjs.com/#QYBWV4#11
     * @param otherVector defines the other vector
     * @returns a new Vector2 set with the addition of the current Vector2 and the given one coordinates
     */ add(otherVector) {
        return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
    }
    /**
     * Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#12
     * @param otherVector defines the other vector
     * @param result defines the target vector
     * @returns result input
     */ addToRef(otherVector, result) {
        result.x = this.x + otherVector.x;
        result.y = this.y + otherVector.y;
        return result;
    }
    /**
     * Set the Vector2 coordinates by adding the given Vector2 coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#13
     * @param otherVector defines the other vector
     * @returns the current updated Vector2
     */ addInPlace(otherVector) {
        this.x += otherVector.x;
        this.y += otherVector.y;
        return this;
    }
    /**
     * Adds the given coordinates to the current Vector2
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @returns the current updated Vector2
     */ addInPlaceFromFloats(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }
    /**
     * Gets a new Vector2 by adding the current Vector2 coordinates to the given Vector3 x, y coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#14
     * @param otherVector defines the other vector
     * @returns a new Vector2
     */ addVector3(otherVector) {
        return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
    }
    /**
     * Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2
     * Example Playground https://playground.babylonjs.com/#QYBWV4#61
     * @param otherVector defines the other vector
     * @returns a new Vector2
     */ subtract(otherVector) {
        return new Vector2(this.x - otherVector.x, this.y - otherVector.y);
    }
    /**
     * Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates.
     * Example Playground https://playground.babylonjs.com/#QYBWV4#63
     * @param otherVector defines the other vector
     * @param result defines the target vector
     * @returns result input
     */ subtractToRef(otherVector, result) {
        result.x = this.x - otherVector.x;
        result.y = this.y - otherVector.y;
        return result;
    }
    /**
     * Sets the current Vector2 coordinates by subtracting from it the given one coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#88
     * @param otherVector defines the other vector
     * @returns the current updated Vector2
     */ subtractInPlace(otherVector) {
        this.x -= otherVector.x;
        this.y -= otherVector.y;
        return this;
    }
    /**
     * Multiplies in place the current Vector2 coordinates by the given ones
     * Example Playground https://playground.babylonjs.com/#QYBWV4#43
     * @param otherVector defines the other vector
     * @returns the current updated Vector2
     */ multiplyInPlace(otherVector) {
        this.x *= otherVector.x;
        this.y *= otherVector.y;
        return this;
    }
    /**
     * Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#42
     * @param otherVector defines the other vector
     * @returns a new Vector2
     */ multiply(otherVector) {
        return new Vector2(this.x * otherVector.x, this.y * otherVector.y);
    }
    /**
     * Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#44
     * @param otherVector defines the other vector
     * @param result defines the target vector
     * @returns result input
     */ multiplyToRef(otherVector, result) {
        result.x = this.x * otherVector.x;
        result.y = this.y * otherVector.y;
        return result;
    }
    /**
     * Gets a new Vector2 set with the Vector2 coordinates multiplied by the given floats
     * Example Playground https://playground.babylonjs.com/#QYBWV4#89
     * @param x defines the first coordinate
     * @param y defines the second coordinate
     * @returns a new Vector2
     */ multiplyByFloats(x, y) {
        return new Vector2(this.x * x, this.y * y);
    }
    /**
     * Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#27
     * @param otherVector defines the other vector
     * @returns a new Vector2
     */ divide(otherVector) {
        return new Vector2(this.x / otherVector.x, this.y / otherVector.y);
    }
    /**
     * Sets the "result" coordinates with the Vector2 divided by the given one coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#30
     * @param otherVector defines the other vector
     * @param result defines the target vector
     * @returns result input
     */ divideToRef(otherVector, result) {
        result.x = this.x / otherVector.x;
        result.y = this.y / otherVector.y;
        return result;
    }
    /**
     * Divides the current Vector2 coordinates by the given ones
     * Example Playground https://playground.babylonjs.com/#QYBWV4#28
     * @param otherVector defines the other vector
     * @returns the current updated Vector2
     */ divideInPlace(otherVector) {
        this.x = this.x / otherVector.x;
        this.y = this.y / otherVector.y;
        return this;
    }
    /**
     * Updates the current Vector2 with the minimal coordinate values between its and the given vector ones
     * @param other defines the second operand
     * @returns the current updated Vector2
     */ minimizeInPlace(other) {
        return this.minimizeInPlaceFromFloats(other.x, other.y);
    }
    /**
     * Updates the current Vector2 with the maximal coordinate values between its and the given vector ones.
     * @param other defines the second operand
     * @returns the current updated Vector2
     */ maximizeInPlace(other) {
        return this.maximizeInPlaceFromFloats(other.x, other.y);
    }
    /**
     * Updates the current Vector2 with the minimal coordinate values between its and the given coordinates
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @returns the current updated Vector2
     */ minimizeInPlaceFromFloats(x, y) {
        this.x = Math.min(x, this.x);
        this.y = Math.min(y, this.y);
        return this;
    }
    /**
     * Updates the current Vector2 with the maximal coordinate values between its and the given coordinates.
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @returns the current updated Vector2
     */ maximizeInPlaceFromFloats(x, y) {
        this.x = Math.max(x, this.x);
        this.y = Math.max(y, this.y);
        return this;
    }
    /**
     * Returns a new Vector2 set with the subtraction of the given floats from the current Vector2 coordinates
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @returns the resulting Vector2
     */ subtractFromFloats(x, y) {
        return new Vector2(this.x - x, this.y - y);
    }
    /**
     * Subtracts the given floats from the current Vector2 coordinates and set the given vector "result" with this result
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param result defines the Vector2 object where to store the result
     * @returns the result
     */ subtractFromFloatsToRef(x, y, result) {
        result.x = this.x - x;
        result.y = this.y - y;
        return result;
    }
    /**
     * Gets a new Vector2 with current Vector2 negated coordinates
     * @returns a new Vector2
     */ negate() {
        return new Vector2(-this.x, -this.y);
    }
    /**
     * Negate this vector in place
     * Example Playground https://playground.babylonjs.com/#QYBWV4#23
     * @returns this
     */ negateInPlace() {
        this.x *= -1;
        this.y *= -1;
        return this;
    }
    /**
     * Negate the current Vector2 and stores the result in the given vector "result" coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#41
     * @param result defines the Vector2 object where to store the result
     * @returns the result
     */ negateToRef(result) {
        result.x = -this.x;
        result.y = -this.y;
        return result;
    }
    /**
     * Multiply the Vector2 coordinates by
     * Example Playground https://playground.babylonjs.com/#QYBWV4#59
     * @param scale defines the scaling factor
     * @returns the current updated Vector2
     */ scaleInPlace(scale) {
        this.x *= scale;
        this.y *= scale;
        return this;
    }
    /**
     * Returns a new Vector2 scaled by "scale" from the current Vector2
     * Example Playground https://playground.babylonjs.com/#QYBWV4#52
     * @param scale defines the scaling factor
     * @returns a new Vector2
     */ scale(scale) {
        return new Vector2(this.x * scale, this.y * scale);
    }
    /**
     * Scale the current Vector2 values by a factor to a given Vector2
     * Example Playground https://playground.babylonjs.com/#QYBWV4#57
     * @param scale defines the scale factor
     * @param result defines the Vector2 object where to store the result
     * @returns result input
     */ scaleToRef(scale, result) {
        result.x = this.x * scale;
        result.y = this.y * scale;
        return result;
    }
    /**
     * Scale the current Vector2 values by a factor and add the result to a given Vector2
     * Example Playground https://playground.babylonjs.com/#QYBWV4#58
     * @param scale defines the scale factor
     * @param result defines the Vector2 object where to store the result
     * @returns result input
     */ scaleAndAddToRef(scale, result) {
        result.x += this.x * scale;
        result.y += this.y * scale;
        return result;
    }
    /**
     * Gets a boolean if two vectors are equals
     * Example Playground https://playground.babylonjs.com/#QYBWV4#31
     * @param otherVector defines the other vector
     * @returns true if the given vector coordinates strictly equal the current Vector2 ones
     */ equals(otherVector) {
        return otherVector && this.x === otherVector.x && this.y === otherVector.y;
    }
    /**
     * Gets a boolean if two vectors are equals (using an epsilon value)
     * Example Playground https://playground.babylonjs.com/#QYBWV4#32
     * @param otherVector defines the other vector
     * @param epsilon defines the minimal distance to consider equality
     * @returns true if the given vector coordinates are close to the current ones by a distance of epsilon.
     */ equalsWithEpsilon(otherVector, epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        return otherVector && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.x, otherVector.x, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.y, otherVector.y, epsilon);
    }
    /**
     * Returns true if the current Vector2 coordinates equals the given floats
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @returns true if both vectors are equal
     */ equalsToFloats(x, y) {
        return this.x === x && this.y === y;
    }
    /**
     * Gets a new Vector2 from current Vector2 floored values
     * Example Playground https://playground.babylonjs.com/#QYBWV4#35
     * eg (1.2, 2.31) returns (1, 2)
     * @returns a new Vector2
     */ floor() {
        return new Vector2(Math.floor(this.x), Math.floor(this.y));
    }
    /**
     * Gets the current Vector2's floored values and stores them in result
     * @param result the Vector2 to store the result in
     * @returns the result Vector2
     */ floorToRef(result) {
        result.x = Math.floor(this.x);
        result.y = Math.floor(this.y);
        return result;
    }
    /**
     * Gets a new Vector2 from current Vector2 fractional values
     * Example Playground https://playground.babylonjs.com/#QYBWV4#34
     * eg (1.2, 2.31) returns (0.2, 0.31)
     * @returns a new Vector2
     */ fract() {
        return new Vector2(this.x - Math.floor(this.x), this.y - Math.floor(this.y));
    }
    /**
     * Gets the current Vector2's fractional values and stores them in result
     * @param result the Vector2 to store the result in
     * @returns the result Vector2
     */ fractToRef(result) {
        result.x = this.x - Math.floor(this.x);
        result.y = this.y - Math.floor(this.y);
        return result;
    }
    /**
     * Gets a new Vector2 rotated by the given angle
     * @param angle defines the rotation angle
     * @returns a new Vector2
     */ rotate(angle) {
        return this.rotateToRef(angle, new Vector2());
    }
    /**
     * Rotate the current vector into a given result vector
     * Example Playground https://playground.babylonjs.com/#QYBWV4#49
     * @param angle defines the rotation angle
     * @param result defines the result vector where to store the rotated vector
     * @returns result input
     */ rotateToRef(angle, result) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        result.x = cos * this.x - sin * this.y;
        result.y = sin * this.x + cos * this.y;
        return result;
    }
    // Properties
    /**
     * Gets the length of the vector
     * @returns the vector length (float)
     */ length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * Gets the vector squared length
     * @returns the vector squared length (float)
     */ lengthSquared() {
        return this.x * this.x + this.y * this.y;
    }
    // Methods
    /**
     * Normalize the vector
     * Example Playground https://playground.babylonjs.com/#QYBWV4#48
     * @returns the current updated Vector2
     */ normalize() {
        return this.normalizeFromLength(this.length());
    }
    /**
     * Normalize the current Vector2 with the given input length.
     * Please note that this is an in place operation.
     * @param len the length of the vector
     * @returns the current updated Vector2
     */ normalizeFromLength(len) {
        if (len === 0 || len === 1.0) {
            return this;
        }
        return this.scaleInPlace(1.0 / len);
    }
    /**
     * Normalize the current Vector2 to a new vector
     * @returns the new Vector2
     */ normalizeToNew() {
        const normalized = new Vector2();
        this.normalizeToRef(normalized);
        return normalized;
    }
    /**
     * Normalize the current Vector2 to the reference
     * @param result define the Vector to update
     * @returns the updated Vector2
     */ normalizeToRef(result) {
        const len = this.length();
        if (len === 0) {
            result.x = this.x;
            result.y = this.y;
        }
        return this.scaleToRef(1.0 / len, result);
    }
    /**
     * Gets a new Vector2 copied from the Vector2
     * Example Playground https://playground.babylonjs.com/#QYBWV4#20
     * @returns a new Vector2
     */ clone() {
        return new Vector2(this.x, this.y);
    }
    /**
     * Gets the dot product of the current vector and the vector "otherVector"
     * @param otherVector defines second vector
     * @returns the dot product (float)
     */ dot(otherVector) {
        return this.x * otherVector.x + this.y * otherVector.y;
    }
    // Statics
    /**
     * Gets a new Vector2(0, 0)
     * @returns a new Vector2
     */ static Zero() {
        return new Vector2(0, 0);
    }
    /**
     * Gets a new Vector2(1, 1)
     * @returns a new Vector2
     */ static One() {
        return new Vector2(1, 1);
    }
    /**
     * Returns a new Vector2 with random values between min and max
     * @param min the minimum random value
     * @param max the maximum random value
     * @returns a Vector2 with random values between min and max
     */ static Random(min = 0, max = 1) {
        return new Vector2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max));
    }
    /**
     * Sets a Vector2 with random values between min and max
     * @param min the minimum random value
     * @param max the maximum random value
     * @param ref the ref to store the values in
     * @returns the ref with random values between min and max
     */ static RandomToRef(min = 0, max = 1, ref) {
        return ref.copyFromFloats((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max));
    }
    /**
     * Gets a zero Vector2 that must not be updated
     */ static get ZeroReadOnly() {
        return Vector2._ZeroReadOnly;
    }
    /**
     * Gets a new Vector2 set from the given index element of the given array
     * Example Playground https://playground.babylonjs.com/#QYBWV4#79
     * @param array defines the data source
     * @param offset defines the offset in the data source
     * @returns a new Vector2
     */ static FromArray(array, offset = 0) {
        return new Vector2(array[offset], array[offset + 1]);
    }
    /**
     * Sets "result" from the given index element of the given array
     * Example Playground https://playground.babylonjs.com/#QYBWV4#80
     * @param array defines the data source
     * @param offset defines the offset in the data source
     * @param result defines the target vector
     * @returns result input
     */ static FromArrayToRef(array, offset, result) {
        result.x = array[offset];
        result.y = array[offset + 1];
        return result;
    }
    /**
     * Sets the given vector "result" with the given floats.
     * @param x defines the x coordinate of the source
     * @param y defines the y coordinate of the source
     * @param result defines the Vector2 where to store the result
     * @returns the result vector
     */ static FromFloatsToRef(x, y, result) {
        result.copyFromFloats(x, y);
        return result;
    }
    /**
     * Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2
     * Example Playground https://playground.babylonjs.com/#QYBWV4#65
     * @param value1 defines 1st point of control
     * @param value2 defines 2nd point of control
     * @param value3 defines 3rd point of control
     * @param value4 defines 4th point of control
     * @param amount defines the interpolation factor
     * @returns a new Vector2
     */ static CatmullRom(value1, value2, value3, value4, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const x = 0.5 * (2.0 * value2.x + (-value1.x + value3.x) * amount + (2.0 * value1.x - 5.0 * value2.x + 4.0 * value3.x - value4.x) * squared + (-value1.x + 3.0 * value2.x - 3.0 * value3.x + value4.x) * cubed);
        const y = 0.5 * (2.0 * value2.y + (-value1.y + value3.y) * amount + (2.0 * value1.y - 5.0 * value2.y + 4.0 * value3.y - value4.y) * squared + (-value1.y + 3.0 * value2.y - 3.0 * value3.y + value4.y) * cubed);
        return new Vector2(x, y);
    }
    /**
     * Sets reference with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
     * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
     * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
     * @param value defines the value to clamp
     * @param min defines the lower limit
     * @param max defines the upper limit
     * @param ref the reference
     * @returns the reference
     */ static ClampToRef(value, min, max, ref) {
        ref.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.x, min.x, max.x);
        ref.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.y, min.y, max.y);
        return ref;
    }
    /**
     * Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
     * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
     * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
     * Example Playground https://playground.babylonjs.com/#QYBWV4#76
     * @param value defines the value to clamp
     * @param min defines the lower limit
     * @param max defines the upper limit
     * @returns a new Vector2
     */ static Clamp(value, min, max) {
        const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.x, min.x, max.x);
        const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.y, min.y, max.y);
        return new Vector2(x, y);
    }
    /**
     * Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2"
     * Example Playground https://playground.babylonjs.com/#QYBWV4#81
     * @param value1 defines the 1st control point
     * @param tangent1 defines the outgoing tangent
     * @param value2 defines the 2nd control point
     * @param tangent2 defines the incoming tangent
     * @param amount defines the interpolation factor
     * @returns a new Vector2
     */ static Hermite(value1, tangent1, value2, tangent2, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
        const part2 = -2.0 * cubed + 3.0 * squared;
        const part3 = cubed - 2.0 * squared + amount;
        const part4 = cubed - squared;
        const x = value1.x * part1 + value2.x * part2 + tangent1.x * part3 + tangent2.x * part4;
        const y = value1.y * part1 + value2.y * part2 + tangent1.y * part3 + tangent2.y * part4;
        return new Vector2(x, y);
    }
    /**
     * Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
     * Example Playground https://playground.babylonjs.com/#QYBWV4#82
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @returns 1st derivative
     */ static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        return this.Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, new Vector2());
    }
    /**
     * Returns a new Vector2 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
     * Example Playground https://playground.babylonjs.com/#QYBWV4#83
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @param result define where the derivative will be stored
     * @returns result input
     */ static Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result) {
        const t2 = time * time;
        result.x = (t2 - time) * 6 * value1.x + (3 * t2 - 4 * time + 1) * tangent1.x + (-t2 + time) * 6 * value2.x + (3 * t2 - 2 * time) * tangent2.x;
        result.y = (t2 - time) * 6 * value1.y + (3 * t2 - 4 * time + 1) * tangent1.y + (-t2 + time) * 6 * value2.y + (3 * t2 - 2 * time) * tangent2.y;
        return result;
    }
    /**
     * Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
     * Example Playground https://playground.babylonjs.com/#QYBWV4#84
     * @param start defines the start vector
     * @param end defines the end vector
     * @param amount defines the interpolation factor
     * @returns a new Vector2
     */ static Lerp(start, end, amount) {
        return Vector2.LerpToRef(start, end, amount, new Vector2());
    }
    /**
     * Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
     * @param start defines the start value
     * @param end defines the end value
     * @param amount max defines amount between both (between 0 and 1)
     * @param result defines the Vector2 where to store the result
     * @returns result input
     */ static LerpToRef(start, end, amount, result) {
        result.x = start.x + (end.x - start.x) * amount;
        result.y = start.y + (end.y - start.y) * amount;
        return result;
    }
    /**
     * Gets the dot product of the vector "left" and the vector "right"
     * Example Playground https://playground.babylonjs.com/#QYBWV4#90
     * @param left defines first vector
     * @param right defines second vector
     * @returns the dot product (float)
     */ static Dot(left, right) {
        return left.x * right.x + left.y * right.y;
    }
    /**
     * Returns a new Vector2 equal to the normalized given vector
     * Example Playground https://playground.babylonjs.com/#QYBWV4#46
     * @param vector defines the vector to normalize
     * @returns a new Vector2
     */ static Normalize(vector) {
        return Vector2.NormalizeToRef(vector, new Vector2());
    }
    /**
     * Normalize a given vector into a second one
     * Example Playground https://playground.babylonjs.com/#QYBWV4#50
     * @param vector defines the vector to normalize
     * @param result defines the vector where to store the result
     * @returns result input
     */ static NormalizeToRef(vector, result) {
        vector.normalizeToRef(result);
        return result;
    }
    /**
     * Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors
     * Example Playground https://playground.babylonjs.com/#QYBWV4#86
     * @param left defines 1st vector
     * @param right defines 2nd vector
     * @returns a new Vector2
     */ static Minimize(left, right) {
        const x = left.x < right.x ? left.x : right.x;
        const y = left.y < right.y ? left.y : right.y;
        return new Vector2(x, y);
    }
    /**
     * Gets a new Vector2 set with the maximal coordinate values from the "left" and "right" vectors
     * Example Playground https://playground.babylonjs.com/#QYBWV4#86
     * @param left defines 1st vector
     * @param right defines 2nd vector
     * @returns a new Vector2
     */ static Maximize(left, right) {
        const x = left.x > right.x ? left.x : right.x;
        const y = left.y > right.y ? left.y : right.y;
        return new Vector2(x, y);
    }
    /**
     * Gets a new Vector2 set with the transformed coordinates of the given vector by the given transformation matrix
     * Example Playground https://playground.babylonjs.com/#QYBWV4#17
     * @param vector defines the vector to transform
     * @param transformation defines the matrix to apply
     * @returns a new Vector2
     */ static Transform(vector, transformation) {
        return Vector2.TransformToRef(vector, transformation, new Vector2());
    }
    /**
     * Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates
     * Example Playground https://playground.babylonjs.com/#QYBWV4#19
     * @param vector defines the vector to transform
     * @param transformation defines the matrix to apply
     * @param result defines the target vector
     * @returns result input
     */ static TransformToRef(vector, transformation, result) {
        const m = transformation.m;
        const x = vector.x * m[0] + vector.y * m[4] + m[12];
        const y = vector.x * m[1] + vector.y * m[5] + m[13];
        result.x = x;
        result.y = y;
        return result;
    }
    /**
     * Determines if a given vector is included in a triangle
     * Example Playground https://playground.babylonjs.com/#QYBWV4#87
     * @param p defines the vector to test
     * @param p0 defines 1st triangle point
     * @param p1 defines 2nd triangle point
     * @param p2 defines 3rd triangle point
     * @returns true if the point "p" is in the triangle defined by the vectors "p0", "p1", "p2"
     */ static PointInTriangle(p, p0, p1, p2) {
        const a = 1 / 2 * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y);
        const sign = a < 0 ? -1 : 1;
        const s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign;
        const t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign;
        return s > 0 && t > 0 && s + t < 2 * a * sign;
    }
    /**
     * Gets the distance between the vectors "value1" and "value2"
     * Example Playground https://playground.babylonjs.com/#QYBWV4#71
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @returns the distance between vectors
     */ static Distance(value1, value2) {
        return Math.sqrt(Vector2.DistanceSquared(value1, value2));
    }
    /**
     * Returns the squared distance between the vectors "value1" and "value2"
     * Example Playground https://playground.babylonjs.com/#QYBWV4#72
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @returns the squared distance between vectors
     */ static DistanceSquared(value1, value2) {
        const x = value1.x - value2.x;
        const y = value1.y - value2.y;
        return x * x + y * y;
    }
    /**
     * Gets a new Vector2 located at the center of the vectors "value1" and "value2"
     * Example Playground https://playground.babylonjs.com/#QYBWV4#86
     * Example Playground https://playground.babylonjs.com/#QYBWV4#66
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @returns a new Vector2
     */ static Center(value1, value2) {
        return Vector2.CenterToRef(value1, value2, new Vector2());
    }
    /**
     * Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
     * Example Playground https://playground.babylonjs.com/#QYBWV4#66
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @param ref defines third vector
     * @returns ref
     */ static CenterToRef(value1, value2, ref) {
        return ref.copyFromFloats((value1.x + value2.x) / 2, (value1.y + value2.y) / 2);
    }
    /**
     * Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
     * Example Playground https://playground.babylonjs.com/#QYBWV4#77
     * @param p defines the middle point
     * @param segA defines one point of the segment
     * @param segB defines the other point of the segment
     * @returns the shortest distance
     */ static DistanceOfPointFromSegment(p, segA, segB) {
        const l2 = Vector2.DistanceSquared(segA, segB);
        if (l2 === 0.0) {
            return Vector2.Distance(p, segA);
        }
        const v = segB.subtract(segA);
        const t = Math.max(0, Math.min(1, Vector2.Dot(p.subtract(segA), v) / l2));
        const proj = segA.add(v.multiplyByFloats(t, t));
        return Vector2.Distance(p, proj);
    }
}
/**
 * If the first vector is flagged with integers (as everything is 0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
 * If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
 * and henceforth it will use floating-point representation for all Vector2 instances that it creates.
 * But the original Vector2 instances are unchanged and has a "deprecated map".
 * If we keep using the Vector2 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.
 */ Vector2._V8PerformanceHack = new Vector2(0.5, 0.5);
Vector2._ZeroReadOnly = Vector2.Zero();
Vector2;
Object.defineProperties(Vector2.prototype, {
    dimension: {
        value: [
            2
        ]
    },
    rank: {
        value: 1
    }
});
class Vector3 {
    /** Gets or sets the x coordinate */ get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
        this._isDirty = true;
    }
    /** Gets or sets the y coordinate */ get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
        this._isDirty = true;
    }
    /** Gets or sets the z coordinate */ get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
        this._isDirty = true;
    }
    /**
     * Creates a new Vector3 object from the given x, y, z (floats) coordinates.
     * @param x defines the first coordinates (on X axis)
     * @param y defines the second coordinates (on Y axis)
     * @param z defines the third coordinates (on Z axis)
     */ constructor(x = 0, y = 0, z = 0){
        /** @internal */ this._isDirty = true;
        this._x = x;
        this._y = y;
        this._z = z;
    }
    /**
     * Creates a string representation of the Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#67
     * @returns a string with the Vector3 coordinates.
     */ toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`;
    }
    /**
     * Gets the class name
     * @returns the string "Vector3"
     */ getClassName() {
        return "Vector3";
    }
    /**
     * Creates the Vector3 hash code
     * @returns a number which tends to be unique between Vector3 instances
     */ getHashCode() {
        const x = ExtractAsInt(this._x);
        const y = ExtractAsInt(this._y);
        const z = ExtractAsInt(this._z);
        let hash = x;
        hash = hash * 397 ^ y;
        hash = hash * 397 ^ z;
        return hash;
    }
    // Operators
    /**
     * Creates an array containing three elements : the coordinates of the Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#10
     * @returns a new array of numbers
     */ asArray() {
        return [
            this._x,
            this._y,
            this._z
        ];
    }
    /**
     * Populates the given array or Float32Array from the given index with the successive coordinates of the Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#65
     * @param array defines the destination array
     * @param index defines the offset in the destination array
     * @returns the current Vector3
     */ toArray(array, index = 0) {
        array[index] = this._x;
        array[index + 1] = this._y;
        array[index + 2] = this._z;
        return this;
    }
    /**
     * Update the current vector from an array
     * Example Playground https://playground.babylonjs.com/#R1F8YU#24
     * @param array defines the destination array
     * @param offset defines the offset in the destination array
     * @returns the current Vector3
     */ fromArray(array, offset = 0) {
        Vector3.FromArrayToRef(array, offset, this);
        return this;
    }
    /**
     * Converts the current Vector3 into a quaternion (considering that the Vector3 contains Euler angles representation of a rotation)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#66
     * @returns a new Quaternion object, computed from the Vector3 coordinates
     */ toQuaternion() {
        return Quaternion.RotationYawPitchRoll(this._y, this._x, this._z);
    }
    /**
     * Adds the given vector to the current Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#4
     * @param otherVector defines the second operand
     * @returns the current updated Vector3
     */ addInPlace(otherVector) {
        this._x += otherVector._x;
        this._y += otherVector._y;
        this._z += otherVector._z;
        this._isDirty = true;
        return this;
    }
    /**
     * Adds the given coordinates to the current Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#5
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @returns the current updated Vector3
     */ addInPlaceFromFloats(x, y, z) {
        this._x += x;
        this._y += y;
        this._z += z;
        this._isDirty = true;
        return this;
    }
    /**
     * Gets a new Vector3, result of the addition the current Vector3 and the given vector
     * Example Playground https://playground.babylonjs.com/#R1F8YU#3
     * @param otherVector defines the second operand
     * @returns the resulting Vector3
     */ add(otherVector) {
        return new Vector3(this._x + otherVector._x, this._y + otherVector._y, this._z + otherVector._z);
    }
    /**
     * Adds the current Vector3 to the given one and stores the result in the vector "result"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#6
     * @param otherVector defines the second operand
     * @param result defines the Vector3 object where to store the result
     * @returns the result
     */ addToRef(otherVector, result) {
        result._x = this._x + otherVector._x;
        result._y = this._y + otherVector._y;
        result._z = this._z + otherVector._z;
        result._isDirty = true;
        return result;
    }
    /**
     * Subtract the given vector from the current Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#61
     * @param otherVector defines the second operand
     * @returns the current updated Vector3
     */ subtractInPlace(otherVector) {
        this._x -= otherVector._x;
        this._y -= otherVector._y;
        this._z -= otherVector._z;
        this._isDirty = true;
        return this;
    }
    /**
     * Returns a new Vector3, result of the subtraction of the given vector from the current Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#60
     * @param otherVector defines the second operand
     * @returns the resulting Vector3
     */ subtract(otherVector) {
        return new Vector3(this._x - otherVector._x, this._y - otherVector._y, this._z - otherVector._z);
    }
    /**
     * Subtracts the given vector from the current Vector3 and stores the result in the vector "result".
     * Example Playground https://playground.babylonjs.com/#R1F8YU#63
     * @param otherVector defines the second operand
     * @param result defines the Vector3 object where to store the result
     * @returns the result
     */ subtractToRef(otherVector, result) {
        return this.subtractFromFloatsToRef(otherVector._x, otherVector._y, otherVector._z, result);
    }
    /**
     * Returns a new Vector3 set with the subtraction of the given floats from the current Vector3 coordinates
     * Example Playground https://playground.babylonjs.com/#R1F8YU#62
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @returns the resulting Vector3
     */ subtractFromFloats(x, y, z) {
        return new Vector3(this._x - x, this._y - y, this._z - z);
    }
    /**
     * Subtracts the given floats from the current Vector3 coordinates and set the given vector "result" with this result
     * Example Playground https://playground.babylonjs.com/#R1F8YU#64
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @param result defines the Vector3 object where to store the result
     * @returns the result
     */ subtractFromFloatsToRef(x, y, z, result) {
        result._x = this._x - x;
        result._y = this._y - y;
        result._z = this._z - z;
        result._isDirty = true;
        return result;
    }
    /**
     * Gets a new Vector3 set with the current Vector3 negated coordinates
     * Example Playground https://playground.babylonjs.com/#R1F8YU#35
     * @returns a new Vector3
     */ negate() {
        return new Vector3(-this._x, -this._y, -this._z);
    }
    /**
     * Negate this vector in place
     * Example Playground https://playground.babylonjs.com/#R1F8YU#36
     * @returns this
     */ negateInPlace() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this._isDirty = true;
        return this;
    }
    /**
     * Negate the current Vector3 and stores the result in the given vector "result" coordinates
     * Example Playground https://playground.babylonjs.com/#R1F8YU#37
     * @param result defines the Vector3 object where to store the result
     * @returns the result
     */ negateToRef(result) {
        result._x = this._x * -1;
        result._y = this._y * -1;
        result._z = this._z * -1;
        result._isDirty = true;
        return result;
    }
    /**
     * Multiplies the Vector3 coordinates by the float "scale"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#56
     * @param scale defines the multiplier factor
     * @returns the current updated Vector3
     */ scaleInPlace(scale) {
        this._x *= scale;
        this._y *= scale;
        this._z *= scale;
        this._isDirty = true;
        return this;
    }
    /**
     * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#53
     * @param scale defines the multiplier factor
     * @returns a new Vector3
     */ scale(scale) {
        return new Vector3(this._x * scale, this._y * scale, this._z * scale);
    }
    /**
     * Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the given vector "result" coordinates
     * Example Playground https://playground.babylonjs.com/#R1F8YU#57
     * @param scale defines the multiplier factor
     * @param result defines the Vector3 object where to store the result
     * @returns the result
     */ scaleToRef(scale, result) {
        result._x = this._x * scale;
        result._y = this._y * scale;
        result._z = this._z * scale;
        result._isDirty = true;
        return result;
    }
    /**
     * Creates a vector normal (perpendicular) to the current Vector3 and stores the result in the given vector
     * Out of the infinite possibilities the normal chosen is the one formed by rotating the current vector
     * 90 degrees about an axis which lies perpendicular to the current vector
     * and its projection on the xz plane. In the case of a current vector in the xz plane
     * the normal is calculated to be along the y axis.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#230
     * Example Playground https://playground.babylonjs.com/#R1F8YU#231
     * @param result defines the Vector3 object where to store the resultant normal
     * @returns the result
     */ getNormalToRef(result) {
        /**
         * Calculates the spherical coordinates of the current vector
         * so saves on memory rather than importing whole Spherical Class
         */ const radius = this.length();
        let theta = Math.acos(this._y / radius);
        const phi = Math.atan2(this._z, this._x);
        //makes angle 90 degs to current vector
        if (theta > Math.PI / 2) {
            theta -= Math.PI / 2;
        } else {
            theta += Math.PI / 2;
        }
        //Calculates resutant normal vector from spherical coordinate of perpendicular vector
        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.cos(theta);
        const z = radius * Math.sin(theta) * Math.sin(phi);
        result.set(x, y, z);
        return result;
    }
    /**
     * Rotates the vector using the given unit quaternion and stores the new vector in result
     * Example Playground https://playground.babylonjs.com/#R1F8YU#9
     * @param q the unit quaternion representing the rotation
     * @param result the output vector
     * @returns the result
     */ applyRotationQuaternionToRef(q, result) {
        // Derived from https://raw.org/proof/vector-rotation-using-quaternions/
        const vx = this._x, vy = this._y, vz = this._z;
        const qx = q._x, qy = q._y, qz = q._z, qw = q._w;
        // t = 2q x v
        const tx = 2 * (qy * vz - qz * vy);
        const ty = 2 * (qz * vx - qx * vz);
        const tz = 2 * (qx * vy - qy * vx);
        // v + w t + q x t
        result._x = vx + qw * tx + qy * tz - qz * ty;
        result._y = vy + qw * ty + qz * tx - qx * tz;
        result._z = vz + qw * tz + qx * ty - qy * tx;
        result._isDirty = true;
        return result;
    }
    /**
     * Rotates the vector in place using the given unit quaternion
     * Example Playground https://playground.babylonjs.com/#R1F8YU#8
     * @param q the unit quaternion representing the rotation
     * @returns the current updated Vector3
     */ applyRotationQuaternionInPlace(q) {
        return this.applyRotationQuaternionToRef(q, this);
    }
    /**
     * Rotates the vector using the given unit quaternion and returns the new vector
     * Example Playground https://playground.babylonjs.com/#R1F8YU#7
     * @param q the unit quaternion representing the rotation
     * @returns a new Vector3
     */ applyRotationQuaternion(q) {
        return this.applyRotationQuaternionToRef(q, new Vector3());
    }
    /**
     * Scale the current Vector3 values by a factor and add the result to a given Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#55
     * @param scale defines the scale factor
     * @param result defines the Vector3 object where to store the result
     * @returns result input
     */ scaleAndAddToRef(scale, result) {
        result._x += this._x * scale;
        result._y += this._y * scale;
        result._z += this._z * scale;
        result._isDirty = true;
        return result;
    }
    /**
     * Projects the current point Vector3 to a plane along a ray starting from a specified origin and passing through the current point Vector3.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#48
     * @param plane defines the plane to project to
     * @param origin defines the origin of the projection ray
     * @returns the projected vector3
     */ projectOnPlane(plane, origin) {
        return this.projectOnPlaneToRef(plane, origin, new Vector3());
    }
    /**
     * Projects the current point Vector3 to a plane along a ray starting from a specified origin and passing through the current point Vector3.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#49
     * @param plane defines the plane to project to
     * @param origin defines the origin of the projection ray
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ projectOnPlaneToRef(plane, origin, result) {
        const n = plane.normal;
        const d = plane.d;
        const V = MathTmp.Vector3[0];
        // ray direction
        this.subtractToRef(origin, V);
        V.normalize();
        const denom = Vector3.Dot(V, n);
        //When the ray is close to parallel to the plane return infinity vector
        if (Math.abs(denom) < 0.0000000001) {
            result.setAll(Infinity);
        } else {
            const t = -(Vector3.Dot(origin, n) + d) / denom;
            // P = P0 + t*V
            const scaledV = V.scaleInPlace(t);
            origin.addToRef(scaledV, result);
        }
        return result;
    }
    /**
     * Returns true if the current Vector3 and the given vector coordinates are strictly equal
     * Example Playground https://playground.babylonjs.com/#R1F8YU#19
     * @param otherVector defines the second operand
     * @returns true if both vectors are equals
     */ equals(otherVector) {
        return otherVector && this._x === otherVector._x && this._y === otherVector._y && this._z === otherVector._z;
    }
    /**
     * Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon
     * Example Playground https://playground.babylonjs.com/#R1F8YU#21
     * @param otherVector defines the second operand
     * @param epsilon defines the minimal distance to define values as equals
     * @returns true if both vectors are distant less than epsilon
     */ equalsWithEpsilon(otherVector, epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        return otherVector && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._x, otherVector._x, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._y, otherVector._y, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._z, otherVector._z, epsilon);
    }
    /**
     * Returns true if the current Vector3 coordinates equals the given floats
     * Example Playground https://playground.babylonjs.com/#R1F8YU#20
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @returns true if both vectors are equal
     */ equalsToFloats(x, y, z) {
        return this._x === x && this._y === y && this._z === z;
    }
    /**
     * Multiplies the current Vector3 coordinates by the given ones
     * Example Playground https://playground.babylonjs.com/#R1F8YU#32
     * @param otherVector defines the second operand
     * @returns the current updated Vector3
     */ multiplyInPlace(otherVector) {
        this._x *= otherVector._x;
        this._y *= otherVector._y;
        this._z *= otherVector._z;
        this._isDirty = true;
        return this;
    }
    /**
     * Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector
     * Example Playground https://playground.babylonjs.com/#R1F8YU#31
     * @param otherVector defines the second operand
     * @returns the new Vector3
     */ multiply(otherVector) {
        return this.multiplyByFloats(otherVector._x, otherVector._y, otherVector._z);
    }
    /**
     * Multiplies the current Vector3 by the given one and stores the result in the given vector "result"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#33
     * @param otherVector defines the second operand
     * @param result defines the Vector3 object where to store the result
     * @returns the result
     */ multiplyToRef(otherVector, result) {
        result._x = this._x * otherVector._x;
        result._y = this._y * otherVector._y;
        result._z = this._z * otherVector._z;
        result._isDirty = true;
        return result;
    }
    /**
     * Returns a new Vector3 set with the result of the multiplication of the current Vector3 coordinates by the given floats
     * Example Playground https://playground.babylonjs.com/#R1F8YU#34
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @returns the new Vector3
     */ multiplyByFloats(x, y, z) {
        return new Vector3(this._x * x, this._y * y, this._z * z);
    }
    /**
     * Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones
     * Example Playground https://playground.babylonjs.com/#R1F8YU#16
     * @param otherVector defines the second operand
     * @returns the new Vector3
     */ divide(otherVector) {
        return new Vector3(this._x / otherVector._x, this._y / otherVector._y, this._z / otherVector._z);
    }
    /**
     * Divides the current Vector3 coordinates by the given ones and stores the result in the given vector "result"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#18
     * @param otherVector defines the second operand
     * @param result defines the Vector3 object where to store the result
     * @returns the result
     */ divideToRef(otherVector, result) {
        result._x = this._x / otherVector._x;
        result._y = this._y / otherVector._y;
        result._z = this._z / otherVector._z;
        result._isDirty = true;
        return result;
    }
    /**
     * Divides the current Vector3 coordinates by the given ones.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#17
     * @param otherVector defines the second operand
     * @returns the current updated Vector3
     */ divideInPlace(otherVector) {
        this._x = this._x / otherVector._x;
        this._y = this._y / otherVector._y;
        this._z = this._z / otherVector._z;
        this._isDirty = true;
        return this;
    }
    /**
     * Updates the current Vector3 with the minimal coordinate values between its and the given vector ones
     * Example Playground https://playground.babylonjs.com/#R1F8YU#29
     * @param other defines the second operand
     * @returns the current updated Vector3
     */ minimizeInPlace(other) {
        return this.minimizeInPlaceFromFloats(other._x, other._y, other._z);
    }
    /**
     * Updates the current Vector3 with the maximal coordinate values between its and the given vector ones.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#27
     * @param other defines the second operand
     * @returns the current updated Vector3
     */ maximizeInPlace(other) {
        return this.maximizeInPlaceFromFloats(other._x, other._y, other._z);
    }
    /**
     * Updates the current Vector3 with the minimal coordinate values between its and the given coordinates
     * Example Playground https://playground.babylonjs.com/#R1F8YU#30
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @returns the current updated Vector3
     */ minimizeInPlaceFromFloats(x, y, z) {
        if (x < this._x) {
            this.x = x;
        }
        if (y < this._y) {
            this.y = y;
        }
        if (z < this._z) {
            this.z = z;
        }
        return this;
    }
    /**
     * Updates the current Vector3 with the maximal coordinate values between its and the given coordinates.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#28
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @returns the current updated Vector3
     */ maximizeInPlaceFromFloats(x, y, z) {
        if (x > this._x) {
            this.x = x;
        }
        if (y > this._y) {
            this.y = y;
        }
        if (z > this._z) {
            this.z = z;
        }
        return this;
    }
    /**
     * Due to float precision, scale of a mesh could be uniform but float values are off by a small fraction
     * Check if is non uniform within a certain amount of decimal places to account for this
     * @param epsilon the amount the values can differ
     * @returns if the vector is non uniform to a certain number of decimal places
     */ isNonUniformWithinEpsilon(epsilon) {
        const absX = Math.abs(this._x);
        const absY = Math.abs(this._y);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(absX, absY, epsilon)) {
            return true;
        }
        const absZ = Math.abs(this._z);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(absX, absZ, epsilon)) {
            return true;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(absY, absZ, epsilon)) {
            return true;
        }
        return false;
    }
    /**
     * Gets a boolean indicating that the vector is non uniform meaning x, y or z are not all the same
     */ get isNonUniform() {
        const absX = Math.abs(this._x);
        const absY = Math.abs(this._y);
        if (absX !== absY) {
            return true;
        }
        const absZ = Math.abs(this._z);
        if (absX !== absZ) {
            return true;
        }
        return false;
    }
    /**
     * Gets the current Vector3's floored values and stores them in result
     * @param result the vector to store the result in
     * @returns the result vector
     */ floorToRef(result) {
        result._x = Math.floor(this._x);
        result._y = Math.floor(this._y);
        result._z = Math.floor(this._z);
        result._isDirty = true;
        return result;
    }
    /**
     * Gets a new Vector3 from current Vector3 floored values
     * Example Playground https://playground.babylonjs.com/#R1F8YU#22
     * @returns a new Vector3
     */ floor() {
        return new Vector3(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z));
    }
    /**
     * Gets the current Vector3's fractional values and stores them in result
     * @param result the vector to store the result in
     * @returns the result vector
     */ fractToRef(result) {
        result._x = this._x - Math.floor(this._x);
        result._y = this._y - Math.floor(this._y);
        result._z = this._z - Math.floor(this._z);
        result._isDirty = true;
        return result;
    }
    /**
     * Gets a new Vector3 from current Vector3 fractional values
     * Example Playground https://playground.babylonjs.com/#R1F8YU#23
     * @returns a new Vector3
     */ fract() {
        return new Vector3(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z));
    }
    // Properties
    /**
     * Gets the length of the Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#25
     * @returns the length of the Vector3
     */ length() {
        return Math.sqrt(this.lengthSquared());
    }
    /**
     * Gets the squared length of the Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#26
     * @returns squared length of the Vector3
     */ lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z;
    }
    /**
     * Gets a boolean indicating if the vector contains a zero in one of its components
     * Example Playground https://playground.babylonjs.com/#R1F8YU#1
     */ get hasAZeroComponent() {
        return this._x * this._y * this._z === 0;
    }
    /**
     * Normalize the current Vector3.
     * Please note that this is an in place operation.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#122
     * @returns the current updated Vector3
     */ normalize() {
        return this.normalizeFromLength(this.length());
    }
    /**
     * Reorders the x y z properties of the vector in place
     * Example Playground https://playground.babylonjs.com/#R1F8YU#44
     * @param order new ordering of the properties (eg. for vector 1,2,3 with "ZYX" will produce 3,2,1)
     * @returns the current updated vector
     */ reorderInPlace(order) {
        order = order.toLowerCase();
        if (order === "xyz") {
            return this;
        }
        const tem = MathTmp.Vector3[0].copyFrom(this);
        this.x = tem[order[0]];
        this.y = tem[order[1]];
        this.z = tem[order[2]];
        return this;
    }
    /**
     * Rotates the vector around 0,0,0 by a quaternion
     * Example Playground https://playground.babylonjs.com/#R1F8YU#47
     * @param quaternion the rotation quaternion
     * @param result vector to store the result
     * @returns the resulting vector
     */ rotateByQuaternionToRef(quaternion, result) {
        quaternion.toRotationMatrix(MathTmp.Matrix[0]);
        Vector3.TransformCoordinatesToRef(this, MathTmp.Matrix[0], result);
        return result;
    }
    /**
     * Rotates a vector around a given point
     * Example Playground https://playground.babylonjs.com/#R1F8YU#46
     * @param quaternion the rotation quaternion
     * @param point the point to rotate around
     * @param result vector to store the result
     * @returns the resulting vector
     */ rotateByQuaternionAroundPointToRef(quaternion, point, result) {
        this.subtractToRef(point, MathTmp.Vector3[0]);
        MathTmp.Vector3[0].rotateByQuaternionToRef(quaternion, MathTmp.Vector3[0]);
        point.addToRef(MathTmp.Vector3[0], result);
        return result;
    }
    /**
     * Returns a new Vector3 as the cross product of the current vector and the "other" one
     * The cross product is then orthogonal to both current and "other"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#14
     * @param other defines the right operand
     * @returns the cross product
     */ cross(other) {
        return Vector3.CrossToRef(this, other, new Vector3());
    }
    /**
     * Normalize the current Vector3 with the given input length.
     * Please note that this is an in place operation.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#123
     * @param len the length of the vector
     * @returns the current updated Vector3
     */ normalizeFromLength(len) {
        if (len === 0 || len === 1.0) {
            return this;
        }
        return this.scaleInPlace(1.0 / len);
    }
    /**
     * Normalize the current Vector3 to a new vector
     * Example Playground https://playground.babylonjs.com/#R1F8YU#124
     * @returns the new Vector3
     */ normalizeToNew() {
        return this.normalizeToRef(new Vector3());
    }
    /**
     * Normalize the current Vector3 to the reference
     * Example Playground https://playground.babylonjs.com/#R1F8YU#125
     * @param result define the Vector3 to update
     * @returns the updated Vector3
     */ normalizeToRef(result) {
        const len = this.length();
        if (len === 0 || len === 1.0) {
            result._x = this._x;
            result._y = this._y;
            result._z = this._z;
            result._isDirty = true;
            return result;
        }
        return this.scaleToRef(1.0 / len, result);
    }
    /**
     * Creates a new Vector3 copied from the current Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#11
     * @returns the new Vector3
     */ clone() {
        return new Vector3(this._x, this._y, this._z);
    }
    /**
     * Copies the given vector coordinates to the current Vector3 ones
     * Example Playground https://playground.babylonjs.com/#R1F8YU#12
     * @param source defines the source Vector3
     * @returns the current updated Vector3
     */ copyFrom(source) {
        return this.copyFromFloats(source._x, source._y, source._z);
    }
    /**
     * Copies the given floats to the current Vector3 coordinates
     * Example Playground https://playground.babylonjs.com/#R1F8YU#13
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @returns the current updated Vector3
     */ copyFromFloats(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._isDirty = true;
        return this;
    }
    /**
     * Copies the given floats to the current Vector3 coordinates
     * Example Playground https://playground.babylonjs.com/#R1F8YU#58
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @returns the current updated Vector3
     */ set(x, y, z) {
        return this.copyFromFloats(x, y, z);
    }
    /**
     * Copies the given float to the current Vector3 coordinates
     * Example Playground https://playground.babylonjs.com/#R1F8YU#59
     * @param v defines the x, y and z coordinates of the operand
     * @returns the current updated Vector3
     */ setAll(v) {
        this._x = this._y = this._z = v;
        this._isDirty = true;
        return this;
    }
    // Statics
    /**
     * Get the clip factor between two vectors
     * Example Playground https://playground.babylonjs.com/#R1F8YU#126
     * @param vector0 defines the first operand
     * @param vector1 defines the second operand
     * @param axis defines the axis to use
     * @param size defines the size along the axis
     * @returns the clip factor
     */ static GetClipFactor(vector0, vector1, axis, size) {
        const d0 = Vector3.Dot(vector0, axis);
        const d1 = Vector3.Dot(vector1, axis);
        return (d0 - size) / (d0 - d1);
    }
    /**
     * Get angle between two vectors
     * Example Playground https://playground.babylonjs.com/#R1F8YU#86
     * @param vector0 the starting point
     * @param vector1 the ending point
     * @param normal direction of the normal
     * @returns the angle between vector0 and vector1
     */ static GetAngleBetweenVectors(vector0, vector1, normal) {
        const v0 = vector0.normalizeToRef(MathTmp.Vector3[1]);
        const v1 = vector1.normalizeToRef(MathTmp.Vector3[2]);
        let dot = Vector3.Dot(v0, v1);
        // Vectors are normalized so dot will be in [-1, 1] (aside precision issues enough to break the result which explains the below clamp)
        dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(dot, -1, 1);
        const angle = Math.acos(dot);
        const n = MathTmp.Vector3[3];
        Vector3.CrossToRef(v0, v1, n);
        if (Vector3.Dot(n, normal) > 0) {
            return isNaN(angle) ? 0 : angle;
        }
        return isNaN(angle) ? -Math.PI : -Math.acos(dot);
    }
    /**
     * Get angle between two vectors projected on a plane
     * Example Playground https://playground.babylonjs.com/#R1F8YU#87
     * Expectation compute time: 0.01 ms (median) and 0.02 ms (percentile 95%)
     * @param vector0 angle between vector0 and vector1
     * @param vector1 angle between vector0 and vector1
     * @param normal Normal of the projection plane
     * @returns the angle in radians (float) between vector0 and vector1 projected on the plane with the specified normal
     */ static GetAngleBetweenVectorsOnPlane(vector0, vector1, normal) {
        MathTmp.Vector3[0].copyFrom(vector0);
        const v0 = MathTmp.Vector3[0];
        MathTmp.Vector3[1].copyFrom(vector1);
        const v1 = MathTmp.Vector3[1];
        MathTmp.Vector3[2].copyFrom(normal);
        const vNormal = MathTmp.Vector3[2];
        const right = MathTmp.Vector3[3];
        const forward = MathTmp.Vector3[4];
        v0.normalize();
        v1.normalize();
        vNormal.normalize();
        Vector3.CrossToRef(vNormal, v0, right);
        Vector3.CrossToRef(right, vNormal, forward);
        const angle = Math.atan2(Vector3.Dot(v1, right), Vector3.Dot(v1, forward));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizeRadians"])(angle);
    }
    /**
     * Gets the rotation that aligns the roll axis (Y) to the line joining the start point to the target point and stores it in the ref Vector3
     * Example PG https://playground.babylonjs.com/#R1F8YU#189
     * @param start the starting point
     * @param target the target point
     * @param ref the vector3 to store the result
     * @returns ref in the form (pitch, yaw, 0)
     */ static PitchYawRollToMoveBetweenPointsToRef(start, target, ref) {
        const diff = TmpVectors.Vector3[0];
        target.subtractToRef(start, diff);
        ref._y = Math.atan2(diff.x, diff.z) || 0;
        ref._x = Math.atan2(Math.sqrt(diff.x ** 2 + diff.z ** 2), diff.y) || 0;
        ref._z = 0;
        ref._isDirty = true;
        return ref;
    }
    /**
     * Gets the rotation that aligns the roll axis (Y) to the line joining the start point to the target point
     * Example PG https://playground.babylonjs.com/#R1F8YU#188
     * @param start the starting point
     * @param target the target point
     * @returns the rotation in the form (pitch, yaw, 0)
     */ static PitchYawRollToMoveBetweenPoints(start, target) {
        const ref = Vector3.Zero();
        return Vector3.PitchYawRollToMoveBetweenPointsToRef(start, target, ref);
    }
    /**
     * Slerp between two vectors. See also `SmoothToRef`
     * Slerp is a spherical linear interpolation
     * giving a slow in and out effect
     * Example Playground 1 https://playground.babylonjs.com/#R1F8YU#108
     * Example Playground 2 https://playground.babylonjs.com/#R1F8YU#109
     * @param vector0 Start vector
     * @param vector1 End vector
     * @param slerp amount (will be clamped between 0 and 1)
     * @param result The slerped vector
     * @returns The slerped vector
     */ static SlerpToRef(vector0, vector1, slerp, result) {
        slerp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(slerp, 0, 1);
        const vector0Dir = MathTmp.Vector3[0];
        const vector1Dir = MathTmp.Vector3[1];
        vector0Dir.copyFrom(vector0);
        const vector0Length = vector0Dir.length();
        vector0Dir.normalizeFromLength(vector0Length);
        vector1Dir.copyFrom(vector1);
        const vector1Length = vector1Dir.length();
        vector1Dir.normalizeFromLength(vector1Length);
        const dot = Vector3.Dot(vector0Dir, vector1Dir);
        let scale0;
        let scale1;
        if (dot < 1 - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            const omega = Math.acos(dot);
            const invSin = 1 / Math.sin(omega);
            scale0 = Math.sin((1 - slerp) * omega) * invSin;
            scale1 = Math.sin(slerp * omega) * invSin;
        } else {
            // Use linear interpolation
            scale0 = 1 - slerp;
            scale1 = slerp;
        }
        vector0Dir.scaleInPlace(scale0);
        vector1Dir.scaleInPlace(scale1);
        result.copyFrom(vector0Dir).addInPlace(vector1Dir);
        result.scaleInPlace((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lerp"])(vector0Length, vector1Length, slerp));
        return result;
    }
    /**
     * Smooth interpolation between two vectors using Slerp
     * Example Playground https://playground.babylonjs.com/#R1F8YU#110
     * @param source source vector
     * @param goal goal vector
     * @param deltaTime current interpolation frame
     * @param lerpTime total interpolation time
     * @param result the smoothed vector
     * @returns the smoothed vector
     */ static SmoothToRef(source, goal, deltaTime, lerpTime, result) {
        Vector3.SlerpToRef(source, goal, lerpTime === 0 ? 1 : deltaTime / lerpTime, result);
        return result;
    }
    /**
     * Returns a new Vector3 set from the index "offset" of the given array
     * Example Playground https://playground.babylonjs.com/#R1F8YU#83
     * @param array defines the source array
     * @param offset defines the offset in the source array
     * @returns the new Vector3
     */ static FromArray(array, offset = 0) {
        return new Vector3(array[offset], array[offset + 1], array[offset + 2]);
    }
    /**
     * Returns a new Vector3 set from the index "offset" of the given Float32Array
     * @param array defines the source array
     * @param offset defines the offset in the source array
     * @returns the new Vector3
     * @deprecated Please use FromArray instead.
     */ static FromFloatArray(array, offset) {
        return Vector3.FromArray(array, offset);
    }
    /**
     * Sets the given vector "result" with the element values from the index "offset" of the given array
     * Example Playground https://playground.babylonjs.com/#R1F8YU#84
     * @param array defines the source array
     * @param offset defines the offset in the source array
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static FromArrayToRef(array, offset, result) {
        result._x = array[offset];
        result._y = array[offset + 1];
        result._z = array[offset + 2];
        result._isDirty = true;
        return result;
    }
    /**
     * Sets the given vector "result" with the element values from the index "offset" of the given Float32Array
     * @param array defines the source array
     * @param offset defines the offset in the source array
     * @param result defines the Vector3 where to store the result
     * @deprecated Please use FromArrayToRef instead.
     * @returns result input
     */ static FromFloatArrayToRef(array, offset, result) {
        return Vector3.FromArrayToRef(array, offset, result);
    }
    /**
     * Sets the given vector "result" with the given floats.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#85
     * @param x defines the x coordinate of the source
     * @param y defines the y coordinate of the source
     * @param z defines the z coordinate of the source
     * @param result defines the Vector3 where to store the result
     * @returns the result vector
     */ static FromFloatsToRef(x, y, z, result) {
        result.copyFromFloats(x, y, z);
        return result;
    }
    /**
     * Returns a new Vector3 set to (0.0, 0.0, 0.0)
     * @returns a new empty Vector3
     */ static Zero() {
        return new Vector3(0.0, 0.0, 0.0);
    }
    /**
     * Returns a new Vector3 set to (1.0, 1.0, 1.0)
     * @returns a new Vector3
     */ static One() {
        return new Vector3(1.0, 1.0, 1.0);
    }
    /**
     * Returns a new Vector3 set to (0.0, 1.0, 0.0)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#71
     * @returns a new up Vector3
     */ static Up() {
        return new Vector3(0.0, 1.0, 0.0);
    }
    /**
     * Gets an up Vector3 that must not be updated
     */ static get UpReadOnly() {
        return Vector3._UpReadOnly;
    }
    /**
     * Gets a down Vector3 that must not be updated
     */ static get DownReadOnly() {
        return Vector3._DownReadOnly;
    }
    /**
     * Gets a right Vector3 that must not be updated
     */ static get RightReadOnly() {
        return Vector3._RightReadOnly;
    }
    /**
     * Gets a left Vector3 that must not be updated
     */ static get LeftReadOnly() {
        return Vector3._LeftReadOnly;
    }
    /**
     * Gets a forward Vector3 that must not be updated
     */ static get LeftHandedForwardReadOnly() {
        return Vector3._LeftHandedForwardReadOnly;
    }
    /**
     * Gets a forward Vector3 that must not be updated
     */ static get RightHandedForwardReadOnly() {
        return Vector3._RightHandedForwardReadOnly;
    }
    /**
     * Gets a backward Vector3 that must not be updated
     */ static get LeftHandedBackwardReadOnly() {
        return Vector3._LeftHandedBackwardReadOnly;
    }
    /**
     * Gets a backward Vector3 that must not be updated
     */ static get RightHandedBackwardReadOnly() {
        return Vector3._RightHandedBackwardReadOnly;
    }
    /**
     * Gets a zero Vector3 that must not be updated
     */ static get ZeroReadOnly() {
        return Vector3._ZeroReadOnly;
    }
    /**
     * Gets a one Vector3 that must not be updated
     */ static get OneReadOnly() {
        return Vector3._OneReadOnly;
    }
    /**
     * Returns a new Vector3 set to (0.0, -1.0, 0.0)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#71
     * @returns a new down Vector3
     */ static Down() {
        return new Vector3(0.0, -1.0, 0.0);
    }
    /**
     * Returns a new Vector3 set to (0.0, 0.0, 1.0)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#71
     * @param rightHandedSystem is the scene right-handed (negative z)
     * @returns a new forward Vector3
     */ static Forward(rightHandedSystem = false) {
        return new Vector3(0.0, 0.0, rightHandedSystem ? -1.0 : 1.0);
    }
    /**
     * Returns a new Vector3 set to (0.0, 0.0, -1.0)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#71
     * @param rightHandedSystem is the scene right-handed (negative-z)
     * @returns a new Backward Vector3
     */ static Backward(rightHandedSystem = false) {
        return new Vector3(0.0, 0.0, rightHandedSystem ? 1.0 : -1.0);
    }
    /**
     * Returns a new Vector3 set to (1.0, 0.0, 0.0)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#71
     * @returns a new right Vector3
     */ static Right() {
        return new Vector3(1.0, 0.0, 0.0);
    }
    /**
     * Returns a new Vector3 set to (-1.0, 0.0, 0.0)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#71
     * @returns a new left Vector3
     */ static Left() {
        return new Vector3(-1.0, 0.0, 0.0);
    }
    /**
     * Returns a new Vector3 with random values between min and max
     * @param min the minimum random value
     * @param max the maximum random value
     * @returns a Vector3 with random values between min and max
     */ static Random(min = 0, max = 1) {
        return new Vector3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max));
    }
    /**
     * Sets a Vector3 with random values between min and max
     * @param min the minimum random value
     * @param max the maximum random value
     * @param ref the ref to store the values in
     * @returns the ref with random values between min and max
     */ static RandomToRef(min = 0, max = 1, ref) {
        return ref.copyFromFloats((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max));
    }
    /**
     * Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector.
     * This method computes transformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#111
     * @param vector defines the Vector3 to transform
     * @param transformation defines the transformation matrix
     * @returns the transformed Vector3
     */ static TransformCoordinates(vector, transformation) {
        const result = Vector3.Zero();
        Vector3.TransformCoordinatesToRef(vector, transformation, result);
        return result;
    }
    /**
     * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
     * This method computes transformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#113
     * @param vector defines the Vector3 to transform
     * @param transformation defines the transformation matrix
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static TransformCoordinatesToRef(vector, transformation, result) {
        Vector3.TransformCoordinatesFromFloatsToRef(vector._x, vector._y, vector._z, transformation, result);
        return result;
    }
    /**
     * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
     * This method computes transformed coordinates only, not transformed direction vectors
     * Example Playground https://playground.babylonjs.com/#R1F8YU#115
     * @param x define the x coordinate of the source vector
     * @param y define the y coordinate of the source vector
     * @param z define the z coordinate of the source vector
     * @param transformation defines the transformation matrix
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static TransformCoordinatesFromFloatsToRef(x, y, z, transformation, result) {
        const m = transformation.m;
        const rx = x * m[0] + y * m[4] + z * m[8] + m[12];
        const ry = x * m[1] + y * m[5] + z * m[9] + m[13];
        const rz = x * m[2] + y * m[6] + z * m[10] + m[14];
        const rw = 1 / (x * m[3] + y * m[7] + z * m[11] + m[15]);
        result._x = rx * rw;
        result._y = ry * rw;
        result._z = rz * rw;
        result._isDirty = true;
        return result;
    }
    /**
     * Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector
     * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#112
     * @param vector defines the Vector3 to transform
     * @param transformation defines the transformation matrix
     * @returns the new Vector3
     */ static TransformNormal(vector, transformation) {
        const result = Vector3.Zero();
        Vector3.TransformNormalToRef(vector, transformation, result);
        return result;
    }
    /**
     * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector
     * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#114
     * @param vector defines the Vector3 to transform
     * @param transformation defines the transformation matrix
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static TransformNormalToRef(vector, transformation, result) {
        this.TransformNormalFromFloatsToRef(vector._x, vector._y, vector._z, transformation, result);
        return result;
    }
    /**
     * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z)
     * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
     * Example Playground https://playground.babylonjs.com/#R1F8YU#116
     * @param x define the x coordinate of the source vector
     * @param y define the y coordinate of the source vector
     * @param z define the z coordinate of the source vector
     * @param transformation defines the transformation matrix
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static TransformNormalFromFloatsToRef(x, y, z, transformation, result) {
        const m = transformation.m;
        result._x = x * m[0] + y * m[4] + z * m[8];
        result._y = x * m[1] + y * m[5] + z * m[9];
        result._z = x * m[2] + y * m[6] + z * m[10];
        result._isDirty = true;
        return result;
    }
    /**
     * Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#69
     * @param value1 defines the first control point
     * @param value2 defines the second control point
     * @param value3 defines the third control point
     * @param value4 defines the fourth control point
     * @param amount defines the amount on the spline to use
     * @returns the new Vector3
     */ static CatmullRom(value1, value2, value3, value4, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const x = 0.5 * (2.0 * value2._x + (-value1._x + value3._x) * amount + (2.0 * value1._x - 5.0 * value2._x + 4.0 * value3._x - value4._x) * squared + (-value1._x + 3.0 * value2._x - 3.0 * value3._x + value4._x) * cubed);
        const y = 0.5 * (2.0 * value2._y + (-value1._y + value3._y) * amount + (2.0 * value1._y - 5.0 * value2._y + 4.0 * value3._y - value4._y) * squared + (-value1._y + 3.0 * value2._y - 3.0 * value3._y + value4._y) * cubed);
        const z = 0.5 * (2.0 * value2._z + (-value1._z + value3._z) * amount + (2.0 * value1._z - 5.0 * value2._z + 4.0 * value3._z - value4._z) * squared + (-value1._z + 3.0 * value2._z - 3.0 * value3._z + value4._z) * cubed);
        return new Vector3(x, y, z);
    }
    /**
     * Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
     * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
     * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
     * Example Playground https://playground.babylonjs.com/#R1F8YU#76
     * @param value defines the current value
     * @param min defines the lower range value
     * @param max defines the upper range value
     * @returns the new Vector3
     */ static Clamp(value, min, max) {
        const result = new Vector3();
        Vector3.ClampToRef(value, min, max, result);
        return result;
    }
    /**
     * Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
     * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
     * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
     * Example Playground https://playground.babylonjs.com/#R1F8YU#77
     * @param value defines the current value
     * @param min defines the lower range value
     * @param max defines the upper range value
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static ClampToRef(value, min, max, result) {
        let x = value._x;
        x = x > max._x ? max._x : x;
        x = x < min._x ? min._x : x;
        let y = value._y;
        y = y > max._y ? max._y : y;
        y = y < min._y ? min._y : y;
        let z = value._z;
        z = z > max._z ? max._z : z;
        z = z < min._z ? min._z : z;
        result.copyFromFloats(x, y, z);
        return result;
    }
    /**
     * Checks if a given vector is inside a specific range
     * Example Playground https://playground.babylonjs.com/#R1F8YU#75
     * @param v defines the vector to test
     * @param min defines the minimum range
     * @param max defines the maximum range
     */ static CheckExtends(v, min, max) {
        min.minimizeInPlace(v);
        max.maximizeInPlace(v);
    }
    /**
     * Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#89
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent vector
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent vector
     * @param amount defines the amount on the interpolation spline (between 0 and 1)
     * @returns the new Vector3
     */ static Hermite(value1, tangent1, value2, tangent2, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
        const part2 = -2.0 * cubed + 3.0 * squared;
        const part3 = cubed - 2.0 * squared + amount;
        const part4 = cubed - squared;
        const x = value1._x * part1 + value2._x * part2 + tangent1._x * part3 + tangent2._x * part4;
        const y = value1._y * part1 + value2._y * part2 + tangent1._y * part3 + tangent2._y * part4;
        const z = value1._z * part1 + value2._z * part2 + tangent1._z * part3 + tangent2._z * part4;
        return new Vector3(x, y, z);
    }
    /**
     * Returns a new Vector3 which is the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
     * Example Playground https://playground.babylonjs.com/#R1F8YU#90
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @returns 1st derivative
     */ static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        const result = new Vector3();
        this.Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result);
        return result;
    }
    /**
     * Update a Vector3 with the 1st derivative of the Hermite spline defined by the vectors "value1", "value2", "tangent1", "tangent2".
     * Example Playground https://playground.babylonjs.com/#R1F8YU#91
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @param result define where to store the derivative
     * @returns result input
     */ static Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result) {
        const t2 = time * time;
        result._x = (t2 - time) * 6 * value1._x + (3 * t2 - 4 * time + 1) * tangent1._x + (-t2 + time) * 6 * value2._x + (3 * t2 - 2 * time) * tangent2._x;
        result._y = (t2 - time) * 6 * value1._y + (3 * t2 - 4 * time + 1) * tangent1._y + (-t2 + time) * 6 * value2._y + (3 * t2 - 2 * time) * tangent2._y;
        result._z = (t2 - time) * 6 * value1._z + (3 * t2 - 4 * time + 1) * tangent1._z + (-t2 + time) * 6 * value2._z + (3 * t2 - 2 * time) * tangent2._z;
        result._isDirty = true;
        return result;
    }
    /**
     * Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#95
     * @param start defines the start value
     * @param end defines the end value
     * @param amount max defines amount between both (between 0 and 1)
     * @returns the new Vector3
     */ static Lerp(start, end, amount) {
        const result = new Vector3(0, 0, 0);
        Vector3.LerpToRef(start, end, amount, result);
        return result;
    }
    /**
     * Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#93
     * @param start defines the start value
     * @param end defines the end value
     * @param amount max defines amount between both (between 0 and 1)
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static LerpToRef(start, end, amount, result) {
        result._x = start._x + (end._x - start._x) * amount;
        result._y = start._y + (end._y - start._y) * amount;
        result._z = start._z + (end._z - start._z) * amount;
        result._isDirty = true;
        return result;
    }
    /**
     * Returns the dot product (float) between the vectors "left" and "right"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#82
     * @param left defines the left operand
     * @param right defines the right operand
     * @returns the dot product
     */ static Dot(left, right) {
        return left._x * right._x + left._y * right._y + left._z * right._z;
    }
    /**
     * Returns the dot product (float) between the current vectors and "otherVector"
     * @param otherVector defines the right operand
     * @returns the dot product
     */ dot(otherVector) {
        return this._x * otherVector._x + this._y * otherVector._y + this._z * otherVector._z;
    }
    /**
     * Returns a new Vector3 as the cross product of the vectors "left" and "right"
     * The cross product is then orthogonal to both "left" and "right"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#15
     * @param left defines the left operand
     * @param right defines the right operand
     * @returns the cross product
     */ static Cross(left, right) {
        const result = new Vector3();
        Vector3.CrossToRef(left, right, result);
        return result;
    }
    /**
     * Sets the given vector "result" with the cross product of "left" and "right"
     * The cross product is then orthogonal to both "left" and "right"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#78
     * @param left defines the left operand
     * @param right defines the right operand
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static CrossToRef(left, right, result) {
        const x = left._y * right._z - left._z * right._y;
        const y = left._z * right._x - left._x * right._z;
        const z = left._x * right._y - left._y * right._x;
        result.copyFromFloats(x, y, z);
        return result;
    }
    /**
     * Returns a new Vector3 as the normalization of the given vector
     * Example Playground https://playground.babylonjs.com/#R1F8YU#98
     * @param vector defines the Vector3 to normalize
     * @returns the new Vector3
     */ static Normalize(vector) {
        const result = Vector3.Zero();
        Vector3.NormalizeToRef(vector, result);
        return result;
    }
    /**
     * Sets the given vector "result" with the normalization of the given first vector
     * Example Playground https://playground.babylonjs.com/#R1F8YU#98
     * @param vector defines the Vector3 to normalize
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static NormalizeToRef(vector, result) {
        vector.normalizeToRef(result);
        return result;
    }
    /**
     * Project a Vector3 onto screen space
     * Example Playground https://playground.babylonjs.com/#R1F8YU#101
     * @param vector defines the Vector3 to project
     * @param world defines the world matrix to use
     * @param transform defines the transform (view x projection) matrix to use
     * @param viewport defines the screen viewport to use
     * @returns the new Vector3
     */ static Project(vector, world, transform, viewport) {
        const result = new Vector3();
        Vector3.ProjectToRef(vector, world, transform, viewport, result);
        return result;
    }
    /**
     * Project a Vector3 onto screen space to reference
     * Example Playground https://playground.babylonjs.com/#R1F8YU#102
     * @param vector defines the Vector3 to project
     * @param world defines the world matrix to use
     * @param transform defines the transform (view x projection) matrix to use
     * @param viewport defines the screen viewport to use
     * @param result the vector in which the screen space will be stored
     * @returns result input
     */ static ProjectToRef(vector, world, transform, viewport, result) {
        const cw = viewport.width;
        const ch = viewport.height;
        const cx = viewport.x;
        const cy = viewport.y;
        const viewportMatrix = MathTmp.Matrix[1];
        const isNDCHalfZRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine?.isNDCHalfZRange;
        const zScale = isNDCHalfZRange ? 1 : 0.5;
        const zOffset = isNDCHalfZRange ? 0 : 0.5;
        Matrix.FromValuesToRef(cw / 2.0, 0, 0, 0, 0, -ch / 2.0, 0, 0, 0, 0, zScale, 0, cx + cw / 2.0, ch / 2.0 + cy, zOffset, 1, viewportMatrix);
        const matrix = MathTmp.Matrix[0];
        world.multiplyToRef(transform, matrix);
        matrix.multiplyToRef(viewportMatrix, matrix);
        Vector3.TransformCoordinatesToRef(vector, matrix, result);
        return result;
    }
    /**
     * Reflects a vector off the plane defined by a normalized normal
     * @param inDirection defines the vector direction
     * @param normal defines the normal - Must be normalized
     * @returns the resulting vector
     */ static Reflect(inDirection, normal) {
        return this.ReflectToRef(inDirection, normal, new Vector3());
    }
    /**
     * Reflects a vector off the plane defined by a normalized normal to reference
     * @param inDirection defines the vector direction
     * @param normal defines the normal - Must be normalized
     * @param ref defines the Vector3 where to store the result
     * @returns the resulting vector
     */ static ReflectToRef(inDirection, normal, ref) {
        const tmp = TmpVectors.Vector3[0];
        tmp.copyFrom(normal).scaleInPlace(2 * Vector3.Dot(inDirection, normal));
        return ref.copyFrom(inDirection).subtractInPlace(tmp);
    }
    /**
     * Unproject from screen space to object space
     * Example Playground https://playground.babylonjs.com/#R1F8YU#121
     * @param source defines the screen space Vector3 to use
     * @param viewportWidth defines the current width of the viewport
     * @param viewportHeight defines the current height of the viewport
     * @param world defines the world matrix to use (can be set to Identity to go to world space)
     * @param transform defines the transform (view x projection) matrix to use
     * @returns the new Vector3
     */ static UnprojectFromTransform(source, viewportWidth, viewportHeight, world, transform) {
        return this.Unproject(source, viewportWidth, viewportHeight, world, transform, Matrix.IdentityReadOnly);
    }
    /**
     * Unproject from screen space to object space
     * Example Playground https://playground.babylonjs.com/#R1F8YU#117
     * @param source defines the screen space Vector3 to use
     * @param viewportWidth defines the current width of the viewport
     * @param viewportHeight defines the current height of the viewport
     * @param world defines the world matrix to use (can be set to Identity to go to world space)
     * @param view defines the view matrix to use
     * @param projection defines the projection matrix to use
     * @returns the new Vector3
     */ static Unproject(source, viewportWidth, viewportHeight, world, view, projection) {
        const result = new Vector3();
        Vector3.UnprojectToRef(source, viewportWidth, viewportHeight, world, view, projection, result);
        return result;
    }
    /**
     * Unproject from screen space to object space
     * Example Playground https://playground.babylonjs.com/#R1F8YU#119
     * @param source defines the screen space Vector3 to use
     * @param viewportWidth defines the current width of the viewport
     * @param viewportHeight defines the current height of the viewport
     * @param world defines the world matrix to use (can be set to Identity to go to world space)
     * @param view defines the view matrix to use
     * @param projection defines the projection matrix to use
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static UnprojectToRef(source, viewportWidth, viewportHeight, world, view, projection, result) {
        Vector3.UnprojectFloatsToRef(source._x, source._y, source._z, viewportWidth, viewportHeight, world, view, projection, result);
        return result;
    }
    /**
     * Unproject from screen space to object space
     * Example Playground https://playground.babylonjs.com/#R1F8YU#120
     * @param sourceX defines the screen space x coordinate to use
     * @param sourceY defines the screen space y coordinate to use
     * @param sourceZ defines the screen space z coordinate to use
     * @param viewportWidth defines the current width of the viewport
     * @param viewportHeight defines the current height of the viewport
     * @param world defines the world matrix to use (can be set to Identity to go to world space)
     * @param view defines the view matrix to use
     * @param projection defines the projection matrix to use
     * @param result defines the Vector3 where to store the result
     * @returns result input
     */ static UnprojectFloatsToRef(sourceX, sourceY, sourceZ, viewportWidth, viewportHeight, world, view, projection, result) {
        const matrix = MathTmp.Matrix[0];
        world.multiplyToRef(view, matrix);
        matrix.multiplyToRef(projection, matrix);
        matrix.invert();
        const screenSource = MathTmp.Vector3[0];
        screenSource.x = sourceX / viewportWidth * 2 - 1;
        screenSource.y = -(sourceY / viewportHeight * 2 - 1);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine?.isNDCHalfZRange) {
            screenSource.z = sourceZ;
        } else {
            screenSource.z = 2 * sourceZ - 1.0;
        }
        Vector3.TransformCoordinatesToRef(screenSource, matrix, result);
        return result;
    }
    /**
     * Gets the minimal coordinate values between two Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#97
     * @param left defines the first operand
     * @param right defines the second operand
     * @returns the new Vector3
     */ static Minimize(left, right) {
        const min = new Vector3();
        min.copyFrom(left);
        min.minimizeInPlace(right);
        return min;
    }
    /**
     * Gets the maximal coordinate values between two Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#96
     * @param left defines the first operand
     * @param right defines the second operand
     * @returns the new Vector3
     */ static Maximize(left, right) {
        const max = new Vector3();
        max.copyFrom(left);
        max.maximizeInPlace(right);
        return max;
    }
    /**
     * Returns the distance between the vectors "value1" and "value2"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#81
     * @param value1 defines the first operand
     * @param value2 defines the second operand
     * @returns the distance
     */ static Distance(value1, value2) {
        return Math.sqrt(Vector3.DistanceSquared(value1, value2));
    }
    /**
     * Returns the squared distance between the vectors "value1" and "value2"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#80
     * @param value1 defines the first operand
     * @param value2 defines the second operand
     * @returns the squared distance
     */ static DistanceSquared(value1, value2) {
        const x = value1._x - value2._x;
        const y = value1._y - value2._y;
        const z = value1._z - value2._z;
        return x * x + y * y + z * z;
    }
    /**
     * Projects "vector" on the triangle determined by its extremities "p0", "p1" and "p2", stores the result in "ref"
     * and returns the distance to the projected point.
     * Example Playground https://playground.babylonjs.com/#R1F8YU#104
     * From http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.104.4264&rep=rep1&type=pdf
     *
     * @param vector the vector to get distance from
     * @param p0 extremity of the triangle
     * @param p1 extremity of the triangle
     * @param p2 extremity of the triangle
     * @param ref variable to store the result to
     * @returns The distance between "ref" and "vector"
     */ static ProjectOnTriangleToRef(vector, p0, p1, p2, ref) {
        const p1p0 = MathTmp.Vector3[0];
        const p2p0 = MathTmp.Vector3[1];
        const p2p1 = MathTmp.Vector3[2];
        const normal = MathTmp.Vector3[3];
        const vectorp0 = MathTmp.Vector3[4];
        // Triangle vectors
        p1.subtractToRef(p0, p1p0);
        p2.subtractToRef(p0, p2p0);
        p2.subtractToRef(p1, p2p1);
        const p1p0L = p1p0.length();
        const p2p0L = p2p0.length();
        const p2p1L = p2p1.length();
        if (p1p0L < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"] || p2p0L < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"] || p2p1L < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            // This is a degenerate triangle. As we assume this is part of a non-degenerate mesh,
            // we will find a better intersection later.
            // Let's just return one of the extremities
            ref.copyFrom(p0);
            return Vector3.Distance(vector, p0);
        }
        // Compute normal and vector to p0
        vector.subtractToRef(p0, vectorp0);
        Vector3.CrossToRef(p1p0, p2p0, normal);
        const nl = normal.length();
        if (nl < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            // Extremities are aligned, we are back on the case of a degenerate triangle
            ref.copyFrom(p0);
            return Vector3.Distance(vector, p0);
        }
        normal.normalizeFromLength(nl);
        let l = vectorp0.length();
        if (l < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            // Vector is p0
            ref.copyFrom(p0);
            return 0;
        }
        vectorp0.normalizeFromLength(l);
        // Project to "proj" that lies on the triangle plane
        const cosA = Vector3.Dot(normal, vectorp0);
        const projVector = MathTmp.Vector3[5];
        const proj = MathTmp.Vector3[6];
        projVector.copyFrom(normal).scaleInPlace(-l * cosA);
        proj.copyFrom(vector).addInPlace(projVector);
        // Compute barycentric coordinates (v0, v1 and v2 are axis from barycenter to extremities)
        const v0 = MathTmp.Vector3[4];
        const v1 = MathTmp.Vector3[5];
        const v2 = MathTmp.Vector3[7];
        const tmp = MathTmp.Vector3[8];
        v0.copyFrom(p1p0).scaleInPlace(1 / p1p0L);
        tmp.copyFrom(p2p0).scaleInPlace(1 / p2p0L);
        v0.addInPlace(tmp).scaleInPlace(-1);
        v1.copyFrom(p1p0).scaleInPlace(-1 / p1p0L);
        tmp.copyFrom(p2p1).scaleInPlace(1 / p2p1L);
        v1.addInPlace(tmp).scaleInPlace(-1);
        v2.copyFrom(p2p1).scaleInPlace(-1 / p2p1L);
        tmp.copyFrom(p2p0).scaleInPlace(-1 / p2p0L);
        v2.addInPlace(tmp).scaleInPlace(-1);
        // Determines which edge of the triangle is closest to "proj"
        const projP = MathTmp.Vector3[9];
        let dot;
        projP.copyFrom(proj).subtractInPlace(p0);
        Vector3.CrossToRef(v0, projP, tmp);
        dot = Vector3.Dot(tmp, normal);
        const s0 = dot;
        projP.copyFrom(proj).subtractInPlace(p1);
        Vector3.CrossToRef(v1, projP, tmp);
        dot = Vector3.Dot(tmp, normal);
        const s1 = dot;
        projP.copyFrom(proj).subtractInPlace(p2);
        Vector3.CrossToRef(v2, projP, tmp);
        dot = Vector3.Dot(tmp, normal);
        const s2 = dot;
        const edge = MathTmp.Vector3[10];
        let e0, e1;
        if (s0 > 0 && s1 < 0) {
            edge.copyFrom(p1p0);
            e0 = p0;
            e1 = p1;
        } else if (s1 > 0 && s2 < 0) {
            edge.copyFrom(p2p1);
            e0 = p1;
            e1 = p2;
        } else {
            edge.copyFrom(p2p0).scaleInPlace(-1);
            e0 = p2;
            e1 = p0;
        }
        // Determines if "proj" lies inside the triangle
        const tmp2 = MathTmp.Vector3[9];
        const tmp3 = MathTmp.Vector3[4];
        e0.subtractToRef(proj, tmp);
        e1.subtractToRef(proj, tmp2);
        Vector3.CrossToRef(tmp, tmp2, tmp3);
        const isOutside = Vector3.Dot(tmp3, normal) < 0;
        // If inside, we already found the projected point, "proj"
        if (!isOutside) {
            ref.copyFrom(proj);
            return Math.abs(l * cosA);
        }
        // If outside, we find "triProj", the closest point from "proj" on the closest edge
        const r = MathTmp.Vector3[5];
        Vector3.CrossToRef(edge, tmp3, r);
        r.normalize();
        const e0proj = MathTmp.Vector3[9];
        e0proj.copyFrom(e0).subtractInPlace(proj);
        const e0projL = e0proj.length();
        if (e0projL < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            // Proj is e0
            ref.copyFrom(e0);
            return Vector3.Distance(vector, e0);
        }
        e0proj.normalizeFromLength(e0projL);
        const cosG = Vector3.Dot(r, e0proj);
        const triProj = MathTmp.Vector3[7];
        triProj.copyFrom(proj).addInPlace(r.scaleInPlace(e0projL * cosG));
        // Now we clamp "triProj" so it lies between e0 and e1
        tmp.copyFrom(triProj).subtractInPlace(e0);
        l = edge.length();
        edge.normalizeFromLength(l);
        let t = Vector3.Dot(tmp, edge) / Math.max(l, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]);
        t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(t, 0, 1);
        triProj.copyFrom(e0).addInPlace(edge.scaleInPlace(t * l));
        ref.copyFrom(triProj);
        return Vector3.Distance(vector, triProj);
    }
    /**
     * Returns a new Vector3 located at the center between "value1" and "value2"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#72
     * @param value1 defines the first operand
     * @param value2 defines the second operand
     * @returns the new Vector3
     */ static Center(value1, value2) {
        return Vector3.CenterToRef(value1, value2, Vector3.Zero());
    }
    /**
     * Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
     * Example Playground https://playground.babylonjs.com/#R1F8YU#73
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @param ref defines third vector
     * @returns ref
     */ static CenterToRef(value1, value2, ref) {
        return ref.copyFromFloats((value1._x + value2._x) / 2, (value1._y + value2._y) / 2, (value1._z + value2._z) / 2);
    }
    /**
     * Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
     * RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
     * to something in order to rotate it from its local system to the given target system
     * Note: axis1, axis2 and axis3 are normalized during this operation
     * Example Playground https://playground.babylonjs.com/#R1F8YU#106
     * @param axis1 defines the first axis
     * @param axis2 defines the second axis
     * @param axis3 defines the third axis
     * @returns a new Vector3
     * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/target_align
     */ static RotationFromAxis(axis1, axis2, axis3) {
        const rotation = new Vector3();
        Vector3.RotationFromAxisToRef(axis1, axis2, axis3, rotation);
        return rotation;
    }
    /**
     * The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3
     * Example Playground https://playground.babylonjs.com/#R1F8YU#107
     * @param axis1 defines the first axis
     * @param axis2 defines the second axis
     * @param axis3 defines the third axis
     * @param ref defines the Vector3 where to store the result
     * @returns result input
     */ static RotationFromAxisToRef(axis1, axis2, axis3, ref) {
        const quat = MathTmp.Quaternion[0];
        Quaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat);
        quat.toEulerAnglesToRef(ref);
        return ref;
    }
}
/**
 * If the first vector is flagged with integers (as everything is 0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
 * If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
 * and henceforth it will use floating-point representation for all Vector3 instances that it creates.
 * But the original Vector3 instances are unchanged and has a "deprecated map".
 * If we keep using the Vector3 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.
 */ Vector3._V8PerformanceHack = new Vector3(0.5, 0.5, 0.5);
Vector3._UpReadOnly = Vector3.Up();
Vector3._DownReadOnly = Vector3.Down();
Vector3._LeftHandedForwardReadOnly = Vector3.Forward(false);
Vector3._RightHandedForwardReadOnly = Vector3.Forward(true);
Vector3._LeftHandedBackwardReadOnly = Vector3.Backward(false);
Vector3._RightHandedBackwardReadOnly = Vector3.Backward(true);
Vector3._RightReadOnly = Vector3.Right();
Vector3._LeftReadOnly = Vector3.Left();
Vector3._ZeroReadOnly = Vector3.Zero();
Vector3._OneReadOnly = Vector3.One();
Vector3;
Object.defineProperties(Vector3.prototype, {
    dimension: {
        value: [
            3
        ]
    },
    rank: {
        value: 1
    }
});
class Vector4 {
    // ---------------------------------
    // Getters / setters (same pattern as Vector3)
    // ---------------------------------
    /** Gets or sets the x coordinate */ get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
        this._isDirty = true;
    }
    /** Gets or sets the y coordinate */ get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
        this._isDirty = true;
    }
    /** Gets or sets the z coordinate */ get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
        this._isDirty = true;
    }
    /** Gets or sets the w coordinate */ get w() {
        return this._w;
    }
    set w(value) {
        this._w = value;
        this._isDirty = true;
    }
    /**
     * Creates a Vector4 object from the given floats.
     * @param x x value of the vector
     * @param y y value of the vector
     * @param z z value of the vector
     * @param w w value of the vector
     */ constructor(x = 0, y = 0, z = 0, w = 0){
        /** @internal */ this._isDirty = true;
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
    }
    /**
     * Returns the string with the Vector4 coordinates.
     * @returns a string containing all the vector values
     */ toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`;
    }
    /**
     * Returns the string "Vector4".
     * @returns "Vector4"
     */ getClassName() {
        return "Vector4";
    }
    /**
     * Returns the Vector4 hash code.
     * @returns a unique hash code
     */ getHashCode() {
        const x = ExtractAsInt(this._x);
        const y = ExtractAsInt(this._y);
        const z = ExtractAsInt(this._z);
        const w = ExtractAsInt(this._w);
        let hash = x;
        hash = hash * 397 ^ y;
        hash = hash * 397 ^ z;
        hash = hash * 397 ^ w;
        return hash;
    }
    // Operators
    /**
     * Returns a new array populated with 4 elements : the Vector4 coordinates.
     * @returns the resulting array
     */ asArray() {
        return [
            this._x,
            this._y,
            this._z,
            this._w
        ];
    }
    /**
     * Populates the given array from the given index with the Vector4 coordinates.
     * @param array array to populate
     * @param index index of the array to start at (default: 0)
     * @returns the Vector4.
     */ toArray(array, index) {
        if (index === undefined) {
            index = 0;
        }
        array[index] = this._x;
        array[index + 1] = this._y;
        array[index + 2] = this._z;
        array[index + 3] = this._w;
        return this;
    }
    /**
     * Update the current vector from an array
     * @param array defines the destination array
     * @param offset defines the offset in the destination array
     * @returns the current Vector3
     */ fromArray(array, offset = 0) {
        Vector4.FromArrayToRef(array, offset, this);
        return this;
    }
    /**
     * Adds the given vector to the current Vector4.
     * @param otherVector the vector to add
     * @returns the updated Vector4.
     */ addInPlace(otherVector) {
        this.x += otherVector._x;
        this.y += otherVector._y;
        this.z += otherVector._z;
        this.w += otherVector._w;
        return this;
    }
    /**
     * Adds the given coordinates to the current Vector4
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @param w defines the w coordinate of the operand
     * @returns the current updated Vector4
     */ addInPlaceFromFloats(x, y, z, w) {
        this.x += x;
        this.y += y;
        this.z += z;
        this.w += w;
        return this;
    }
    /**
     * Returns a new Vector4 as the result of the addition of the current Vector4 and the given one.
     * @param otherVector the vector to add
     * @returns the resulting vector
     */ add(otherVector) {
        return new Vector4(this._x + otherVector.x, this._y + otherVector.y, this._z + otherVector.z, this._w + otherVector.w);
    }
    /**
     * Updates the given vector "result" with the result of the addition of the current Vector4 and the given one.
     * @param otherVector the vector to add
     * @param result the vector to store the result
     * @returns result input
     */ addToRef(otherVector, result) {
        result.x = this._x + otherVector.x;
        result.y = this._y + otherVector.y;
        result.z = this._z + otherVector.z;
        result.w = this._w + otherVector.w;
        return result;
    }
    /**
     * Subtract in place the given vector from the current Vector4.
     * @param otherVector the vector to subtract
     * @returns the updated Vector4.
     */ subtractInPlace(otherVector) {
        this.x -= otherVector.x;
        this.y -= otherVector.y;
        this.z -= otherVector.z;
        this.w -= otherVector.w;
        return this;
    }
    /**
     * Returns a new Vector4 with the result of the subtraction of the given vector from the current Vector4.
     * @param otherVector the vector to add
     * @returns the new vector with the result
     */ subtract(otherVector) {
        return new Vector4(this._x - otherVector.x, this._y - otherVector.y, this._z - otherVector.z, this._w - otherVector.w);
    }
    /**
     * Sets the given vector "result" with the result of the subtraction of the given vector from the current Vector4.
     * @param otherVector the vector to subtract
     * @param result the vector to store the result
     * @returns result input
     */ subtractToRef(otherVector, result) {
        result.x = this._x - otherVector.x;
        result.y = this._y - otherVector.y;
        result.z = this._z - otherVector.z;
        result.w = this._w - otherVector.w;
        return result;
    }
    /**
     * Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.
     * @param x value to subtract
     * @param y value to subtract
     * @param z value to subtract
     * @param w value to subtract
     * @returns new vector containing the result
     */ subtractFromFloats(x, y, z, w) {
        return new Vector4(this._x - x, this._y - y, this._z - z, this._w - w);
    }
    /**
     * Sets the given vector "result" set with the result of the subtraction of the given floats from the current Vector4 coordinates.
     * @param x value to subtract
     * @param y value to subtract
     * @param z value to subtract
     * @param w value to subtract
     * @param result the vector to store the result in
     * @returns result input
     */ subtractFromFloatsToRef(x, y, z, w, result) {
        result.x = this._x - x;
        result.y = this._y - y;
        result.z = this._z - z;
        result.w = this._w - w;
        return result;
    }
    /**
     * Returns a new Vector4 set with the current Vector4 negated coordinates.
     * @returns a new vector with the negated values
     */ negate() {
        return new Vector4(-this._x, -this._y, -this._z, -this._w);
    }
    /**
     * Negate this vector in place
     * @returns this
     */ negateInPlace() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        this.w *= -1;
        return this;
    }
    /**
     * Negate the current Vector4 and stores the result in the given vector "result" coordinates
     * @param result defines the Vector3 object where to store the result
     * @returns the result
     */ negateToRef(result) {
        result.x = -this._x;
        result.y = -this._y;
        result.z = -this._z;
        result.w = -this._w;
        return result;
    }
    /**
     * Multiplies the current Vector4 coordinates by scale (float).
     * @param scale the number to scale with
     * @returns the updated Vector4.
     */ scaleInPlace(scale) {
        this.x *= scale;
        this.y *= scale;
        this.z *= scale;
        this.w *= scale;
        return this;
    }
    /**
     * Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).
     * @param scale the number to scale with
     * @returns a new vector with the result
     */ scale(scale) {
        return new Vector4(this._x * scale, this._y * scale, this._z * scale, this._w * scale);
    }
    /**
     * Sets the given vector "result" with the current Vector4 coordinates multiplied by scale (float).
     * @param scale the number to scale with
     * @param result a vector to store the result in
     * @returns result input
     */ scaleToRef(scale, result) {
        result.x = this._x * scale;
        result.y = this._y * scale;
        result.z = this._z * scale;
        result.w = this._w * scale;
        return result;
    }
    /**
     * Scale the current Vector4 values by a factor and add the result to a given Vector4
     * @param scale defines the scale factor
     * @param result defines the Vector4 object where to store the result
     * @returns result input
     */ scaleAndAddToRef(scale, result) {
        result.x += this._x * scale;
        result.y += this._y * scale;
        result.z += this._z * scale;
        result.w += this._w * scale;
        return result;
    }
    /**
     * Boolean : True if the current Vector4 coordinates are stricly equal to the given ones.
     * @param otherVector the vector to compare against
     * @returns true if they are equal
     */ equals(otherVector) {
        return otherVector && this._x === otherVector.x && this._y === otherVector.y && this._z === otherVector.z && this._w === otherVector.w;
    }
    /**
     * Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones.
     * @param otherVector vector to compare against
     * @param epsilon (Default: very small number)
     * @returns true if they are equal
     */ equalsWithEpsilon(otherVector, epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        return otherVector && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._x, otherVector.x, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._y, otherVector.y, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._z, otherVector.z, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._w, otherVector.w, epsilon);
    }
    /**
     * Boolean : True if the given floats are strictly equal to the current Vector4 coordinates.
     * @param x x value to compare against
     * @param y y value to compare against
     * @param z z value to compare against
     * @param w w value to compare against
     * @returns true if equal
     */ equalsToFloats(x, y, z, w) {
        return this._x === x && this._y === y && this._z === z && this._w === w;
    }
    /**
     * Multiplies in place the current Vector4 by the given one.
     * @param otherVector vector to multiple with
     * @returns the updated Vector4.
     */ multiplyInPlace(otherVector) {
        this.x *= otherVector.x;
        this.y *= otherVector.y;
        this.z *= otherVector.z;
        this.w *= otherVector.w;
        return this;
    }
    /**
     * Returns a new Vector4 set with the multiplication result of the current Vector4 and the given one.
     * @param otherVector vector to multiple with
     * @returns resulting new vector
     */ multiply(otherVector) {
        return new Vector4(this._x * otherVector.x, this._y * otherVector.y, this._z * otherVector.z, this._w * otherVector.w);
    }
    /**
     * Updates the given vector "result" with the multiplication result of the current Vector4 and the given one.
     * @param otherVector vector to multiple with
     * @param result vector to store the result
     * @returns result input
     */ multiplyToRef(otherVector, result) {
        result.x = this._x * otherVector.x;
        result.y = this._y * otherVector.y;
        result.z = this._z * otherVector.z;
        result.w = this._w * otherVector.w;
        return result;
    }
    /**
     * Returns a new Vector4 set with the multiplication result of the given floats and the current Vector4 coordinates.
     * @param x x value multiply with
     * @param y y value multiply with
     * @param z z value multiply with
     * @param w w value multiply with
     * @returns resulting new vector
     */ multiplyByFloats(x, y, z, w) {
        return new Vector4(this._x * x, this._y * y, this._z * z, this._w * w);
    }
    /**
     * Returns a new Vector4 set with the division result of the current Vector4 by the given one.
     * @param otherVector vector to devide with
     * @returns resulting new vector
     */ divide(otherVector) {
        return new Vector4(this._x / otherVector.x, this._y / otherVector.y, this._z / otherVector.z, this._w / otherVector.w);
    }
    /**
     * Updates the given vector "result" with the division result of the current Vector4 by the given one.
     * @param otherVector vector to devide with
     * @param result vector to store the result
     * @returns result input
     */ divideToRef(otherVector, result) {
        result.x = this._x / otherVector.x;
        result.y = this._y / otherVector.y;
        result.z = this._z / otherVector.z;
        result.w = this._w / otherVector.w;
        return result;
    }
    /**
     * Divides the current Vector3 coordinates by the given ones.
     * @param otherVector vector to devide with
     * @returns the updated Vector3.
     */ divideInPlace(otherVector) {
        return this.divideToRef(otherVector, this);
    }
    /**
     * Updates the Vector4 coordinates with the minimum values between its own and the given vector ones
     * @param other defines the second operand
     * @returns the current updated Vector4
     */ minimizeInPlace(other) {
        if (other.x < this._x) {
            this.x = other.x;
        }
        if (other.y < this._y) {
            this.y = other.y;
        }
        if (other.z < this._z) {
            this.z = other.z;
        }
        if (other.w < this._w) {
            this.w = other.w;
        }
        return this;
    }
    /**
     * Updates the Vector4 coordinates with the maximum values between its own and the given vector ones
     * @param other defines the second operand
     * @returns the current updated Vector4
     */ maximizeInPlace(other) {
        if (other.x > this._x) {
            this.x = other.x;
        }
        if (other.y > this._y) {
            this.y = other.y;
        }
        if (other.z > this._z) {
            this.z = other.z;
        }
        if (other.w > this._w) {
            this.w = other.w;
        }
        return this;
    }
    /**
     * Updates the current Vector4 with the minimal coordinate values between its and the given coordinates
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @param w defines the w coordinate of the operand
     * @returns the current updated Vector4
     */ minimizeInPlaceFromFloats(x, y, z, w) {
        this.x = Math.min(x, this._x);
        this.y = Math.min(y, this._y);
        this.z = Math.min(z, this._z);
        this.w = Math.min(w, this._w);
        return this;
    }
    /**
     * Updates the current Vector4 with the maximal coordinate values between its and the given coordinates.
     * @param x defines the x coordinate of the operand
     * @param y defines the y coordinate of the operand
     * @param z defines the z coordinate of the operand
     * @param w defines the w coordinate of the operand
     * @returns the current updated Vector4
     */ maximizeInPlaceFromFloats(x, y, z, w) {
        this.x = Math.max(x, this._x);
        this.y = Math.max(y, this._y);
        this.z = Math.max(z, this._z);
        this.w = Math.max(w, this._w);
        return this;
    }
    /**
     * Gets the current Vector4's floored values and stores them in result
     * @param result the vector to store the result in
     * @returns the result vector
     */ floorToRef(result) {
        result.x = Math.floor(this._x);
        result.y = Math.floor(this._y);
        result.z = Math.floor(this._z);
        result.w = Math.floor(this._w);
        return result;
    }
    /**
     * Gets a new Vector4 from current Vector4 floored values
     * @returns a new Vector4
     */ floor() {
        return new Vector4(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w));
    }
    /**
     * Gets the current Vector4's fractional values and stores them in result
     * @param result the vector to store the result in
     * @returns the result vector
     */ fractToRef(result) {
        result.x = this._x - Math.floor(this._x);
        result.y = this._y - Math.floor(this._y);
        result.z = this._z - Math.floor(this._z);
        result.w = this._w - Math.floor(this._w);
        return result;
    }
    /**
     * Gets a new Vector4 from current Vector4 fractional values
     * @returns a new Vector4
     */ fract() {
        return new Vector4(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w));
    }
    // Properties
    /**
     * Returns the Vector4 length (float).
     * @returns the length
     */ length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    /**
     * Returns the Vector4 squared length (float).
     * @returns the length squared
     */ lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    // Methods
    /**
     * Normalizes in place the Vector4.
     * @returns the updated Vector4.
     */ normalize() {
        return this.normalizeFromLength(this.length());
    }
    /**
     * Normalize the current Vector4 with the given input length.
     * Please note that this is an in place operation.
     * @param len the length of the vector
     * @returns the current updated Vector4
     */ normalizeFromLength(len) {
        if (len === 0 || len === 1.0) {
            return this;
        }
        return this.scaleInPlace(1.0 / len);
    }
    /**
     * Normalize the current Vector4 to a new vector
     * @returns the new Vector4
     */ normalizeToNew() {
        return this.normalizeToRef(new Vector4());
    }
    /**
     * Normalize the current Vector4 to the reference
     * @param reference define the Vector4 to update
     * @returns the updated Vector4
     */ normalizeToRef(reference) {
        const len = this.length();
        if (len === 0 || len === 1.0) {
            reference.x = this._x;
            reference.y = this._y;
            reference.z = this._z;
            reference.w = this._w;
            return reference;
        }
        return this.scaleToRef(1.0 / len, reference);
    }
    /**
     * Returns a new Vector3 from the Vector4 (x, y, z) coordinates.
     * @returns this converted to a new vector3
     */ toVector3() {
        return new Vector3(this._x, this._y, this._z);
    }
    /**
     * Returns a new Vector4 copied from the current one.
     * @returns the new cloned vector
     */ clone() {
        return new Vector4(this._x, this._y, this._z, this._w);
    }
    /**
     * Updates the current Vector4 with the given one coordinates.
     * @param source the source vector to copy from
     * @returns the updated Vector4.
     */ copyFrom(source) {
        this.x = source.x;
        this.y = source.y;
        this.z = source.z;
        this.w = source.w;
        return this;
    }
    /**
     * Updates the current Vector4 coordinates with the given floats.
     * @param x float to copy from
     * @param y float to copy from
     * @param z float to copy from
     * @param w float to copy from
     * @returns the updated Vector4.
     */ copyFromFloats(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }
    /**
     * Updates the current Vector4 coordinates with the given floats.
     * @param x float to set from
     * @param y float to set from
     * @param z float to set from
     * @param w float to set from
     * @returns the updated Vector4.
     */ set(x, y, z, w) {
        return this.copyFromFloats(x, y, z, w);
    }
    /**
     * Copies the given float to the current Vector4 coordinates
     * @param v defines the x, y, z and w coordinates of the operand
     * @returns the current updated Vector4
     */ setAll(v) {
        this.x = this.y = this.z = this.w = v;
        return this;
    }
    /**
     * Returns the dot product (float) between the current vectors and "otherVector"
     * @param otherVector defines the right operand
     * @returns the dot product
     */ dot(otherVector) {
        return this._x * otherVector.x + this._y * otherVector.y + this._z * otherVector.z + this._w * otherVector.w;
    }
    // Statics
    /**
     * Returns a new Vector4 set from the starting index of the given array.
     * @param array the array to pull values from
     * @param offset the offset into the array to start at
     * @returns the new vector
     */ static FromArray(array, offset) {
        if (!offset) {
            offset = 0;
        }
        return new Vector4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    }
    /**
     * Updates the given vector "result" from the starting index of the given array.
     * @param array the array to pull values from
     * @param offset the offset into the array to start at
     * @param result the vector to store the result in
     * @returns result input
     */ static FromArrayToRef(array, offset, result) {
        result.x = array[offset];
        result.y = array[offset + 1];
        result.z = array[offset + 2];
        result.w = array[offset + 3];
        return result;
    }
    /**
     * Updates the given vector "result" from the starting index of the given Float32Array.
     * @param array the array to pull values from
     * @param offset the offset into the array to start at
     * @param result the vector to store the result in
     * @returns result input
     */ static FromFloatArrayToRef(array, offset, result) {
        Vector4.FromArrayToRef(array, offset, result);
        return result;
    }
    /**
     * Updates the given vector "result" coordinates from the given floats.
     * @param x float to set from
     * @param y float to set from
     * @param z float to set from
     * @param w float to set from
     * @param result the vector to the floats in
     * @returns result input
     */ static FromFloatsToRef(x, y, z, w, result) {
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = w;
        return result;
    }
    /**
     * Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)
     * @returns the new vector
     */ static Zero() {
        return new Vector4(0.0, 0.0, 0.0, 0.0);
    }
    /**
     * Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0)
     * @returns the new vector
     */ static One() {
        return new Vector4(1.0, 1.0, 1.0, 1.0);
    }
    /**
     * Returns a new Vector4 with random values between min and max
     * @param min the minimum random value
     * @param max the maximum random value
     * @returns a Vector4 with random values between min and max
     */ static Random(min = 0, max = 1) {
        return new Vector4((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max));
    }
    /**
     * Sets a Vector4 with random values between min and max
     * @param min the minimum random value
     * @param max the maximum random value
     * @param ref the ref to store the values in
     * @returns the ref with random values between min and max
     */ static RandomToRef(min = 0, max = 1, ref) {
        ref.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max);
        ref.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max);
        ref.z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max);
        ref.w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max);
        return ref;
    }
    /**
     * Returns a new Vector4 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
     * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
     * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
     * @param value defines the current value
     * @param min defines the lower range value
     * @param max defines the upper range value
     * @returns the new Vector4
     */ static Clamp(value, min, max) {
        return Vector4.ClampToRef(value, min, max, new Vector4());
    }
    /**
     * Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
     * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
     * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
     * @param value defines the current value
     * @param min defines the lower range value
     * @param max defines the upper range value
     * @param result defines the Vector4 where to store the result
     * @returns result input
     */ static ClampToRef(value, min, max, result) {
        result.x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.x, min.x, max.x);
        result.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.y, min.y, max.y);
        result.z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.z, min.z, max.z);
        result.w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.w, min.w, max.w);
        return result;
    }
    /**
     * Checks if a given vector is inside a specific range
     * Example Playground https://playground.babylonjs.com/#R1F8YU#75
     * @param v defines the vector to test
     * @param min defines the minimum range
     * @param max defines the maximum range
     */ static CheckExtends(v, min, max) {
        min.minimizeInPlace(v);
        max.maximizeInPlace(v);
    }
    /**
     * Gets a zero Vector4 that must not be updated
     */ static get ZeroReadOnly() {
        return Vector4._ZeroReadOnly;
    }
    /**
     * Returns a new normalized Vector4 from the given one.
     * @param vector the vector to normalize
     * @returns the vector
     */ static Normalize(vector) {
        return Vector4.NormalizeToRef(vector, new Vector4());
    }
    /**
     * Updates the given vector "result" from the normalization of the given one.
     * @param vector the vector to normalize
     * @param result the vector to store the result in
     * @returns result input
     */ static NormalizeToRef(vector, result) {
        vector.normalizeToRef(result);
        return result;
    }
    /**
     * Returns a vector with the minimum values from the left and right vectors
     * @param left left vector to minimize
     * @param right right vector to minimize
     * @returns a new vector with the minimum of the left and right vector values
     */ static Minimize(left, right) {
        const min = new Vector4();
        min.copyFrom(left);
        min.minimizeInPlace(right);
        return min;
    }
    /**
     * Returns a vector with the maximum values from the left and right vectors
     * @param left left vector to maximize
     * @param right right vector to maximize
     * @returns a new vector with the maximum of the left and right vector values
     */ static Maximize(left, right) {
        const max = new Vector4();
        max.copyFrom(left);
        max.maximizeInPlace(right);
        return max;
    }
    /**
     * Returns the distance (float) between the vectors "value1" and "value2".
     * @param value1 value to calulate the distance between
     * @param value2 value to calulate the distance between
     * @returns the distance between the two vectors
     */ static Distance(value1, value2) {
        return Math.sqrt(Vector4.DistanceSquared(value1, value2));
    }
    /**
     * Returns the squared distance (float) between the vectors "value1" and "value2".
     * @param value1 value to calulate the distance between
     * @param value2 value to calulate the distance between
     * @returns the distance between the two vectors squared
     */ static DistanceSquared(value1, value2) {
        const x = value1.x - value2.x;
        const y = value1.y - value2.y;
        const z = value1.z - value2.z;
        const w = value1.w - value2.w;
        return x * x + y * y + z * z + w * w;
    }
    /**
     * Returns a new Vector4 located at the center between the vectors "value1" and "value2".
     * @param value1 value to calulate the center between
     * @param value2 value to calulate the center between
     * @returns the center between the two vectors
     */ static Center(value1, value2) {
        return Vector4.CenterToRef(value1, value2, new Vector4());
    }
    /**
     * Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"
     * @param value1 defines first vector
     * @param value2 defines second vector
     * @param ref defines third vector
     * @returns ref
     */ static CenterToRef(value1, value2, ref) {
        ref.x = (value1.x + value2.x) / 2;
        ref.y = (value1.y + value2.y) / 2;
        ref.z = (value1.z + value2.z) / 2;
        ref.w = (value1.w + value2.w) / 2;
        return ref;
    }
    /**
     * Returns a new Vector4 set with the result of the transformation by the given matrix of the given vector.
     * This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
     * The difference with Vector3.TransformCoordinates is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead
     * @param vector defines the Vector3 to transform
     * @param transformation defines the transformation matrix
     * @returns the transformed Vector4
     */ static TransformCoordinates(vector, transformation) {
        return Vector4.TransformCoordinatesToRef(vector, transformation, new Vector4());
    }
    /**
     * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
     * This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
     * The difference with Vector3.TransformCoordinatesToRef is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead
     * @param vector defines the Vector3 to transform
     * @param transformation defines the transformation matrix
     * @param result defines the Vector4 where to store the result
     * @returns result input
     */ static TransformCoordinatesToRef(vector, transformation, result) {
        Vector4.TransformCoordinatesFromFloatsToRef(vector._x, vector._y, vector._z, transformation, result);
        return result;
    }
    /**
     * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
     * This method computes tranformed coordinates only, not transformed direction vectors
     * The difference with Vector3.TransformCoordinatesFromFloatsToRef is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead
     * @param x define the x coordinate of the source vector
     * @param y define the y coordinate of the source vector
     * @param z define the z coordinate of the source vector
     * @param transformation defines the transformation matrix
     * @param result defines the Vector4 where to store the result
     * @returns result input
     */ static TransformCoordinatesFromFloatsToRef(x, y, z, transformation, result) {
        const m = transformation.m;
        const rx = x * m[0] + y * m[4] + z * m[8] + m[12];
        const ry = x * m[1] + y * m[5] + z * m[9] + m[13];
        const rz = x * m[2] + y * m[6] + z * m[10] + m[14];
        const rw = x * m[3] + y * m[7] + z * m[11] + m[15];
        result.x = rx;
        result.y = ry;
        result.z = rz;
        result.w = rw;
        return result;
    }
    /**
     * Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector.
     * This methods computes transformed normalized direction vectors only.
     * @param vector the vector to transform
     * @param transformation the transformation matrix to apply
     * @returns the new vector
     */ static TransformNormal(vector, transformation) {
        return Vector4.TransformNormalToRef(vector, transformation, new Vector4());
    }
    /**
     * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector.
     * This methods computes transformed normalized direction vectors only.
     * @param vector the vector to transform
     * @param transformation the transformation matrix to apply
     * @param result the vector to store the result in
     * @returns result input
     */ static TransformNormalToRef(vector, transformation, result) {
        const m = transformation.m;
        const x = vector.x * m[0] + vector.y * m[4] + vector.z * m[8];
        const y = vector.x * m[1] + vector.y * m[5] + vector.z * m[9];
        const z = vector.x * m[2] + vector.y * m[6] + vector.z * m[10];
        result.x = x;
        result.y = y;
        result.z = z;
        result.w = vector.w;
        return result;
    }
    /**
     * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w).
     * This methods computes transformed normalized direction vectors only.
     * @param x value to transform
     * @param y value to transform
     * @param z value to transform
     * @param w value to transform
     * @param transformation the transformation matrix to apply
     * @param result the vector to store the results in
     * @returns result input
     */ static TransformNormalFromFloatsToRef(x, y, z, w, transformation, result) {
        const m = transformation.m;
        result.x = x * m[0] + y * m[4] + z * m[8];
        result.y = x * m[1] + y * m[5] + z * m[9];
        result.z = x * m[2] + y * m[6] + z * m[10];
        result.w = w;
        return result;
    }
    /**
     * Creates a new Vector4 from a Vector3
     * @param source defines the source data
     * @param w defines the 4th component (default is 0)
     * @returns a new Vector4
     */ static FromVector3(source, w = 0) {
        return new Vector4(source._x, source._y, source._z, w);
    }
    /**
     * Returns the dot product (float) between the vectors "left" and "right"
     * @param left defines the left operand
     * @param right defines the right operand
     * @returns the dot product
     */ static Dot(left, right) {
        return left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w;
    }
}
/**
 * If the first vector is flagged with integers (as everything is 0,0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
 * If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
 * and henceforth it will use floating-point representation for all Vector4 instances that it creates.
 * But the original Vector4 instances are unchanged and has a "deprecated map".
 * If we keep using the Vector4 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.
 */ Vector4._V8PerformanceHack = new Vector4(0.5, 0.5, 0.5, 0.5);
Vector4._ZeroReadOnly = Vector4.Zero();
Vector4;
Object.defineProperties(Vector4.prototype, {
    dimension: {
        value: [
            4
        ]
    },
    rank: {
        value: 1
    }
});
class Quaternion {
    /** Gets or sets the x coordinate */ get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
        this._isDirty = true;
    }
    /** Gets or sets the y coordinate */ get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
        this._isDirty = true;
    }
    /** Gets or sets the z coordinate */ get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
        this._isDirty = true;
    }
    /** Gets or sets the w coordinate */ get w() {
        return this._w;
    }
    set w(value) {
        this._w = value;
        this._isDirty = true;
    }
    /**
     * Creates a new Quaternion from the given floats
     * @param x defines the first component (0 by default)
     * @param y defines the second component (0 by default)
     * @param z defines the third component (0 by default)
     * @param w defines the fourth component (1.0 by default)
     */ constructor(x = 0.0, y = 0.0, z = 0.0, w = 1.0){
        /** @internal */ this._isDirty = true;
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
    }
    /**
     * Gets a string representation for the current quaternion
     * @returns a string with the Quaternion coordinates
     */ toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`;
    }
    /**
     * Gets the class name of the quaternion
     * @returns the string "Quaternion"
     */ getClassName() {
        return "Quaternion";
    }
    /**
     * Gets a hash code for this quaternion
     * @returns the quaternion hash code
     */ getHashCode() {
        const x = ExtractAsInt(this._x);
        const y = ExtractAsInt(this._y);
        const z = ExtractAsInt(this._z);
        const w = ExtractAsInt(this._w);
        let hash = x;
        hash = hash * 397 ^ y;
        hash = hash * 397 ^ z;
        hash = hash * 397 ^ w;
        return hash;
    }
    /**
     * Copy the quaternion to an array
     * Example Playground https://playground.babylonjs.com/#L49EJ7#13
     * @returns a new array populated with 4 elements from the quaternion coordinates
     */ asArray() {
        return [
            this._x,
            this._y,
            this._z,
            this._w
        ];
    }
    /**
     * Stores from the starting index in the given array the Quaternion successive values
     * Example Playground https://playground.babylonjs.com/#L49EJ7#59
     * @param array defines the array where to store the x,y,z,w components
     * @param index defines an optional index in the target array to define where to start storing values
     * @returns the current Quaternion object
     */ toArray(array, index = 0) {
        array[index] = this._x;
        array[index + 1] = this._y;
        array[index + 2] = this._z;
        array[index + 3] = this._w;
        return this;
    }
    fromArray(array, index = 0) {
        return Quaternion.FromArrayToRef(array, index, this);
    }
    /**
     * Check if two quaternions are equals
     * Example Playground https://playground.babylonjs.com/#L49EJ7#38
     * @param otherQuaternion defines the second operand
     * @returns true if the current quaternion and the given one coordinates are strictly equals
     */ equals(otherQuaternion) {
        return otherQuaternion && this._x === otherQuaternion._x && this._y === otherQuaternion._y && this._z === otherQuaternion._z && this._w === otherQuaternion._w;
    }
    /**
     * Gets a boolean if two quaternions are equals (using an epsilon value)
     * Example Playground https://playground.babylonjs.com/#L49EJ7#37
     * @param otherQuaternion defines the other quaternion
     * @param epsilon defines the minimal distance to consider equality
     * @returns true if the given quaternion coordinates are close to the current ones by a distance of epsilon.
     */ equalsWithEpsilon(otherQuaternion, epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        return otherQuaternion && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._x, otherQuaternion._x, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._y, otherQuaternion._y, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._z, otherQuaternion._z, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._w, otherQuaternion._w, epsilon);
    }
    /**
     * Gets a boolean if two quaternions are equals (using an epsilon value), taking care of double cover : https://www.reedbeta.com/blog/why-quaternions-double-cover/
     * @param otherQuaternion defines the other quaternion
     * @param epsilon defines the minimal distance to consider equality
     * @returns true if the given quaternion coordinates are close to the current ones by a distance of epsilon.
     */ isApprox(otherQuaternion, epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        return otherQuaternion && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._x, otherQuaternion._x, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._y, otherQuaternion._y, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._z, otherQuaternion._z, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._w, otherQuaternion._w, epsilon) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._x, -otherQuaternion._x, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._y, -otherQuaternion._y, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._z, -otherQuaternion._z, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this._w, -otherQuaternion._w, epsilon));
    }
    /**
     * Clone the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#12
     * @returns a new quaternion copied from the current one
     */ clone() {
        return new Quaternion(this._x, this._y, this._z, this._w);
    }
    /**
     * Copy a quaternion to the current one
     * Example Playground https://playground.babylonjs.com/#L49EJ7#86
     * @param other defines the other quaternion
     * @returns the updated current quaternion
     */ copyFrom(other) {
        this._x = other._x;
        this._y = other._y;
        this._z = other._z;
        this._w = other._w;
        this._isDirty = true;
        return this;
    }
    /**
     * Updates the current quaternion with the given float coordinates
     * Example Playground https://playground.babylonjs.com/#L49EJ7#87
     * @param x defines the x coordinate
     * @param y defines the y coordinate
     * @param z defines the z coordinate
     * @param w defines the w coordinate
     * @returns the updated current quaternion
     */ copyFromFloats(x, y, z, w) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._w = w;
        this._isDirty = true;
        return this;
    }
    /**
     * Updates the current quaternion from the given float coordinates
     * Example Playground https://playground.babylonjs.com/#L49EJ7#56
     * @param x defines the x coordinate
     * @param y defines the y coordinate
     * @param z defines the z coordinate
     * @param w defines the w coordinate
     * @returns the updated current quaternion
     */ set(x, y, z, w) {
        return this.copyFromFloats(x, y, z, w);
    }
    setAll(value) {
        return this.copyFromFloats(value, value, value, value);
    }
    /**
     * Adds two quaternions
     * Example Playground https://playground.babylonjs.com/#L49EJ7#10
     * @param other defines the second operand
     * @returns a new quaternion as the addition result of the given one and the current quaternion
     */ add(other) {
        return new Quaternion(this._x + other._x, this._y + other._y, this._z + other._z, this._w + other._w);
    }
    /**
     * Add a quaternion to the current one
     * Example Playground https://playground.babylonjs.com/#L49EJ7#11
     * @param other defines the quaternion to add
     * @returns the current quaternion
     */ addInPlace(other) {
        this._x += other._x;
        this._y += other._y;
        this._z += other._z;
        this._w += other._w;
        this._isDirty = true;
        return this;
    }
    addToRef(other, result) {
        result._x = this._x + other._x;
        result._y = this._y + other._y;
        result._z = this._z + other._z;
        result._w = this._w + other._w;
        result._isDirty = true;
        return result;
    }
    addInPlaceFromFloats(x, y, z, w) {
        this._x += x;
        this._y += y;
        this._z += z;
        this._w += w;
        this._isDirty = true;
        return this;
    }
    subtractToRef(other, result) {
        result._x = this._x - other._x;
        result._y = this._y - other._y;
        result._z = this._z - other._z;
        result._w = this._w - other._w;
        result._isDirty = true;
        return result;
    }
    subtractFromFloats(x, y, z, w) {
        return this.subtractFromFloatsToRef(x, y, z, w, new Quaternion());
    }
    subtractFromFloatsToRef(x, y, z, w, result) {
        result._x = this._x - x;
        result._y = this._y - y;
        result._z = this._z - z;
        result._w = this._w - w;
        result._isDirty = true;
        return result;
    }
    /**
     * Subtract two quaternions
     * Example Playground https://playground.babylonjs.com/#L49EJ7#57
     * @param other defines the second operand
     * @returns a new quaternion as the subtraction result of the given one from the current one
     */ subtract(other) {
        return new Quaternion(this._x - other._x, this._y - other._y, this._z - other._z, this._w - other._w);
    }
    /**
     * Subtract a quaternion to the current one
     * Example Playground https://playground.babylonjs.com/#L49EJ7#58
     * @param other defines the quaternion to subtract
     * @returns the current quaternion
     */ subtractInPlace(other) {
        this._x -= other._x;
        this._y -= other._y;
        this._z -= other._z;
        this._w -= other._w;
        this._isDirty = true;
        return this;
    }
    /**
     * Multiplies the current quaternion by a scale factor
     * Example Playground https://playground.babylonjs.com/#L49EJ7#88
     * @param value defines the scale factor
     * @returns a new quaternion set by multiplying the current quaternion coordinates by the float "scale"
     */ scale(value) {
        return new Quaternion(this._x * value, this._y * value, this._z * value, this._w * value);
    }
    /**
     * Scale the current quaternion values by a factor and stores the result to a given quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#89
     * @param scale defines the scale factor
     * @param result defines the Quaternion object where to store the result
     * @returns result input
     */ scaleToRef(scale, result) {
        result._x = this._x * scale;
        result._y = this._y * scale;
        result._z = this._z * scale;
        result._w = this._w * scale;
        result._isDirty = true;
        return result;
    }
    /**
     * Multiplies in place the current quaternion by a scale factor
     * Example Playground https://playground.babylonjs.com/#L49EJ7#90
     * @param value defines the scale factor
     * @returns the current modified quaternion
     */ scaleInPlace(value) {
        this._x *= value;
        this._y *= value;
        this._z *= value;
        this._w *= value;
        this._isDirty = true;
        return this;
    }
    /**
     * Scale the current quaternion values by a factor and add the result to a given quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#91
     * @param scale defines the scale factor
     * @param result defines the Quaternion object where to store the result
     * @returns result input
     */ scaleAndAddToRef(scale, result) {
        result._x += this._x * scale;
        result._y += this._y * scale;
        result._z += this._z * scale;
        result._w += this._w * scale;
        result._isDirty = true;
        return result;
    }
    /**
     * Multiplies two quaternions
     * Example Playground https://playground.babylonjs.com/#L49EJ7#43
     * @param q1 defines the second operand
     * @returns a new quaternion set as the multiplication result of the current one with the given one "q1"
     */ multiply(q1) {
        const result = new Quaternion(0, 0, 0, 1.0);
        this.multiplyToRef(q1, result);
        return result;
    }
    /**
     * Sets the given "result" as the multiplication result of the current one with the given one "q1"
     * Example Playground https://playground.babylonjs.com/#L49EJ7#45
     * @param q1 defines the second operand
     * @param result defines the target quaternion
     * @returns the current quaternion
     */ multiplyToRef(q1, result) {
        const x = this._x * q1._w + this._y * q1._z - this._z * q1._y + this._w * q1._x;
        const y = -this._x * q1._z + this._y * q1._w + this._z * q1._x + this._w * q1._y;
        const z = this._x * q1._y - this._y * q1._x + this._z * q1._w + this._w * q1._z;
        const w = -this._x * q1._x - this._y * q1._y - this._z * q1._z + this._w * q1._w;
        result.copyFromFloats(x, y, z, w);
        return result;
    }
    /**
     * Updates the current quaternion with the multiplication of itself with the given one "q1"
     * Example Playground https://playground.babylonjs.com/#L49EJ7#46
     * @param other defines the second operand
     * @returns the currentupdated quaternion
     */ multiplyInPlace(other) {
        return this.multiplyToRef(other, this);
    }
    multiplyByFloats(x, y, z, w) {
        this._x *= x;
        this._y *= y;
        this._z *= z;
        this._w *= w;
        this._isDirty = true;
        return this;
    }
    /**
     * @internal
     * Do not use
     */ divide(_other) {
        throw new ReferenceError("Can not divide a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ divideToRef(_other, _result) {
        throw new ReferenceError("Can not divide a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ divideInPlace(_other) {
        throw new ReferenceError("Can not divide a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ minimizeInPlace() {
        throw new ReferenceError("Can not minimize a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ minimizeInPlaceFromFloats() {
        throw new ReferenceError("Can not minimize a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ maximizeInPlace() {
        throw new ReferenceError("Can not maximize a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ maximizeInPlaceFromFloats() {
        throw new ReferenceError("Can not maximize a quaternion");
    }
    negate() {
        return this.negateToRef(new Quaternion());
    }
    negateInPlace() {
        this._x = -this._x;
        this._y = -this._y;
        this._z = -this._z;
        this._w = -this._w;
        this._isDirty = true;
        return this;
    }
    negateToRef(result) {
        result._x = -this._x;
        result._y = -this._y;
        result._z = -this._z;
        result._w = -this._w;
        result._isDirty = true;
        return result;
    }
    equalsToFloats(x, y, z, w) {
        return this._x === x && this._y === y && this._z === z && this._w === w;
    }
    /**
     * @internal
     * Do not use
     */ floorToRef(_result) {
        throw new ReferenceError("Can not floor a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ floor() {
        throw new ReferenceError("Can not floor a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ fractToRef(_result) {
        throw new ReferenceError("Can not fract a quaternion");
    }
    /**
     * @internal
     * Do not use
     */ fract() {
        throw new ReferenceError("Can not fract a quaternion");
    }
    /**
     * Conjugates the current quaternion and stores the result in the given quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#81
     * @param ref defines the target quaternion
     * @returns result input
     */ conjugateToRef(ref) {
        ref.copyFromFloats(-this._x, -this._y, -this._z, this._w);
        return ref;
    }
    /**
     * Conjugates in place the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#82
     * @returns the current updated quaternion
     */ conjugateInPlace() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this._isDirty = true;
        return this;
    }
    /**
     * Conjugates (1-q) the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#83
     * @returns a new quaternion
     */ conjugate() {
        return new Quaternion(-this._x, -this._y, -this._z, this._w);
    }
    /**
     * Returns the inverse of the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#84
     * @returns a new quaternion
     */ invert() {
        const conjugate = this.conjugate();
        const lengthSquared = this.lengthSquared();
        if (lengthSquared == 0 || lengthSquared == 1) {
            return conjugate;
        }
        conjugate.scaleInPlace(1 / lengthSquared);
        return conjugate;
    }
    /**
     * Invert in place the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#85
     * @returns this quaternion
     */ invertInPlace() {
        this.conjugateInPlace();
        const lengthSquared = this.lengthSquared();
        if (lengthSquared == 0 || lengthSquared == 1) {
            return this;
        }
        this.scaleInPlace(1 / lengthSquared);
        return this;
    }
    /**
     * Gets squared length of current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#29
     * @returns the quaternion length (float)
     */ lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    /**
     * Gets length of current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#28
     * @returns the quaternion length (float)
     */ length() {
        return Math.sqrt(this.lengthSquared());
    }
    /**
     * Normalize in place the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#54
     * @returns the current updated quaternion
     */ normalize() {
        return this.normalizeFromLength(this.length());
    }
    /**
     * Normalize the current quaternion with the given input length.
     * Please note that this is an in place operation.
     * @param len the length of the quaternion
     * @returns the current updated Quaternion
     */ normalizeFromLength(len) {
        if (len === 0 || len === 1.0) {
            return this;
        }
        return this.scaleInPlace(1.0 / len);
    }
    /**
     * Normalize a copy of the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#55
     * @returns the normalized quaternion
     */ normalizeToNew() {
        const normalized = new Quaternion(0, 0, 0, 1);
        this.normalizeToRef(normalized);
        return normalized;
    }
    /**
     * Normalize the current Quaternion to the reference
     * @param reference define the Quaternion to update
     * @returns the updated Quaternion
     */ normalizeToRef(reference) {
        const len = this.length();
        if (len === 0 || len === 1.0) {
            return reference.copyFromFloats(this._x, this._y, this._z, this._w);
        }
        return this.scaleToRef(1.0 / len, reference);
    }
    /**
     * Returns a new Vector3 set with the Euler angles translated from the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#32
     * @returns a new Vector3 containing the Euler angles
     * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/rotation_conventions
     */ toEulerAngles() {
        const result = Vector3.Zero();
        this.toEulerAnglesToRef(result);
        return result;
    }
    /**
     * Sets the given vector3 "result" with the Euler angles translated from the current quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#31
     * @param result defines the vector which will be filled with the Euler angles
     * @returns result input
     * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/rotation_conventions
     */ toEulerAnglesToRef(result) {
        const qz = this._z;
        const qx = this._x;
        const qy = this._y;
        const qw = this._w;
        const zAxisY = qy * qz - qx * qw;
        const limit = 0.4999999;
        if (zAxisY < -limit) {
            result._y = 2 * Math.atan2(qy, qw);
            result._x = Math.PI / 2;
            result._z = 0;
            result._isDirty = true;
        } else if (zAxisY > limit) {
            result._y = 2 * Math.atan2(qy, qw);
            result._x = -Math.PI / 2;
            result._z = 0;
            result._isDirty = true;
        } else {
            const sqw = qw * qw;
            const sqz = qz * qz;
            const sqx = qx * qx;
            const sqy = qy * qy;
            result._z = Math.atan2(2.0 * (qx * qy + qz * qw), -sqz - sqx + sqy + sqw);
            result._x = Math.asin(-2.0 * zAxisY);
            result._y = Math.atan2(2.0 * (qz * qx + qy * qw), sqz - sqx - sqy + sqw);
            result._isDirty = true;
        }
        return result;
    }
    /**
     * Sets the given vector3 "result" with the Alpha, Beta, Gamma Euler angles translated from the current quaternion
     * @param result defines the vector which will be filled with the Euler angles
     * @returns result input
     * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/rotation_conventions
     */ toAlphaBetaGammaToRef(result) {
        const qz = this._z;
        const qx = this._x;
        const qy = this._y;
        const qw = this._w;
        // Compute intermediate values
        const sinHalfBeta = Math.sqrt(qx * qx + qy * qy);
        const cosHalfBeta = Math.sqrt(qz * qz + qw * qw);
        // Calculate beta
        const beta = 2 * Math.atan2(sinHalfBeta, cosHalfBeta);
        // Calculate gamma + alpha
        const gammaPlusAlpha = 2 * Math.atan2(qz, qw);
        // Calculate gamma - alpha
        const gammaMinusAlpha = 2 * Math.atan2(qy, qx);
        // Calculate gamma and alpha
        const gamma = (gammaPlusAlpha + gammaMinusAlpha) / 2;
        const alpha = (gammaPlusAlpha - gammaMinusAlpha) / 2;
        result.set(alpha, beta, gamma);
        return result;
    }
    /**
     * Updates the given rotation matrix with the current quaternion values
     * Example Playground https://playground.babylonjs.com/#L49EJ7#67
     * @param result defines the target matrix
     * @returns the updated matrix with the rotation
     */ toRotationMatrix(result) {
        Matrix.FromQuaternionToRef(this, result);
        return result;
    }
    /**
     * Updates the current quaternion from the given rotation matrix values
     * Example Playground https://playground.babylonjs.com/#L49EJ7#41
     * @param matrix defines the source matrix
     * @returns the current updated quaternion
     */ fromRotationMatrix(matrix) {
        Quaternion.FromRotationMatrixToRef(matrix, this);
        return this;
    }
    /**
     * Returns the dot product (float) between the current quaternions and "other"
     * @param other defines the right operand
     * @returns the dot product
     */ dot(other) {
        return this._x * other._x + this._y * other._y + this._z * other._z + this._w * other._w;
    }
    /**
     * Converts the current quaternion to an axis angle representation
     * @returns the axis and angle in radians
     */ toAxisAngle() {
        const axis = Vector3.Zero();
        const angle = this.toAxisAngleToRef(axis);
        return {
            axis,
            angle
        };
    }
    /**
     * Converts the current quaternion to an axis angle representation
     * @param axis defines the target axis vector
     * @returns the angle in radians
     */ toAxisAngleToRef(axis) {
        let angle = 0;
        const sinHalfAngle = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
        const cosHalfAngle = this._w;
        if (sinHalfAngle > 0) {
            angle = 2 * Math.atan2(sinHalfAngle, cosHalfAngle);
            axis.set(this._x / sinHalfAngle, this._y / sinHalfAngle, this._z / sinHalfAngle);
        } else {
            angle = 0;
            axis.set(1, 0, 0);
        }
        return angle;
    }
    // Statics
    /**
     * Creates a new quaternion from a rotation matrix
     * Example Playground https://playground.babylonjs.com/#L49EJ7#101
     * @param matrix defines the source matrix
     * @returns a new quaternion created from the given rotation matrix values
     */ static FromRotationMatrix(matrix) {
        const result = new Quaternion();
        Quaternion.FromRotationMatrixToRef(matrix, result);
        return result;
    }
    /**
     * Updates the given quaternion with the given rotation matrix values
     * Example Playground https://playground.babylonjs.com/#L49EJ7#102
     * @param matrix defines the source matrix
     * @param result defines the target quaternion
     * @returns result input
     */ static FromRotationMatrixToRef(matrix, result) {
        const data = matrix.m;
        const m11 = data[0], m12 = data[4], m13 = data[8];
        const m21 = data[1], m22 = data[5], m23 = data[9];
        const m31 = data[2], m32 = data[6], m33 = data[10];
        const trace = m11 + m22 + m33;
        let s;
        if (trace > 0) {
            s = 0.5 / Math.sqrt(trace + 1.0);
            result._w = 0.25 / s;
            result._x = (m32 - m23) * s;
            result._y = (m13 - m31) * s;
            result._z = (m21 - m12) * s;
            result._isDirty = true;
        } else if (m11 > m22 && m11 > m33) {
            s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
            result._w = (m32 - m23) / s;
            result._x = 0.25 * s;
            result._y = (m12 + m21) / s;
            result._z = (m13 + m31) / s;
            result._isDirty = true;
        } else if (m22 > m33) {
            s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
            result._w = (m13 - m31) / s;
            result._x = (m12 + m21) / s;
            result._y = 0.25 * s;
            result._z = (m23 + m32) / s;
            result._isDirty = true;
        } else {
            s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
            result._w = (m21 - m12) / s;
            result._x = (m13 + m31) / s;
            result._y = (m23 + m32) / s;
            result._z = 0.25 * s;
            result._isDirty = true;
        }
        return result;
    }
    /**
     * Returns the dot product (float) between the quaternions "left" and "right"
     * Example Playground https://playground.babylonjs.com/#L49EJ7#61
     * @param left defines the left operand
     * @param right defines the right operand
     * @returns the dot product
     */ static Dot(left, right) {
        return left._x * right._x + left._y * right._y + left._z * right._z + left._w * right._w;
    }
    /**
     * Checks if the orientations of two rotation quaternions are close to each other
     * Example Playground https://playground.babylonjs.com/#L49EJ7#60
     * @param quat0 defines the first quaternion to check
     * @param quat1 defines the second quaternion to check
     * @param epsilon defines closeness, 0 same orientation, 1 PI apart, default 0.1
     * @returns true if the two quaternions are close to each other within epsilon
     */ static AreClose(quat0, quat1, epsilon = 0.1) {
        const dot = Quaternion.Dot(quat0, quat1);
        return 1 - dot * dot <= epsilon;
    }
    /**
     * Smooth interpolation between two quaternions using Slerp
     * Example Playground https://playground.babylonjs.com/#L49EJ7#93
     * @param source source quaternion
     * @param goal goal quaternion
     * @param deltaTime current interpolation frame
     * @param lerpTime total interpolation time
     * @param result the smoothed quaternion
     * @returns the smoothed quaternion
     */ static SmoothToRef(source, goal, deltaTime, lerpTime, result) {
        let slerp = lerpTime === 0 ? 1 : deltaTime / lerpTime;
        slerp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(slerp, 0, 1);
        Quaternion.SlerpToRef(source, goal, slerp, result);
        return result;
    }
    /**
     * Creates an empty quaternion
     * @returns a new quaternion set to (0.0, 0.0, 0.0)
     */ static Zero() {
        return new Quaternion(0.0, 0.0, 0.0, 0.0);
    }
    /**
     * Inverse a given quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#103
     * @param q defines the source quaternion
     * @returns a new quaternion as the inverted current quaternion
     */ static Inverse(q) {
        return new Quaternion(-q._x, -q._y, -q._z, q._w);
    }
    /**
     * Inverse a given quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#104
     * @param q defines the source quaternion
     * @param result the quaternion the result will be stored in
     * @returns the result quaternion
     */ static InverseToRef(q, result) {
        result.set(-q._x, -q._y, -q._z, q._w);
        return result;
    }
    /**
     * Creates an identity quaternion
     * @returns the identity quaternion
     */ static Identity() {
        return new Quaternion(0.0, 0.0, 0.0, 1.0);
    }
    /**
     * Gets a boolean indicating if the given quaternion is identity
     * @param quaternion defines the quaternion to check
     * @returns true if the quaternion is identity
     */ static IsIdentity(quaternion) {
        return quaternion && quaternion._x === 0 && quaternion._y === 0 && quaternion._z === 0 && quaternion._w === 1;
    }
    /**
     * Creates a quaternion from a rotation around an axis
     * Example Playground https://playground.babylonjs.com/#L49EJ7#72
     * @param axis defines the axis to use
     * @param angle defines the angle to use
     * @returns a new quaternion created from the given axis (Vector3) and angle in radians (float)
     */ static RotationAxis(axis, angle) {
        return Quaternion.RotationAxisToRef(axis, angle, new Quaternion());
    }
    /**
     * Creates a rotation around an axis and stores it into the given quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#73
     * @param axis defines the axis to use
     * @param angle defines the angle to use
     * @param result defines the target quaternion
     * @returns the target quaternion
     */ static RotationAxisToRef(axis, angle, result) {
        result._w = Math.cos(angle / 2);
        const sinByLength = Math.sin(angle / 2) / axis.length();
        result._x = axis._x * sinByLength;
        result._y = axis._y * sinByLength;
        result._z = axis._z * sinByLength;
        result._isDirty = true;
        return result;
    }
    /**
     * Creates a new quaternion from data stored into an array
     * Example Playground https://playground.babylonjs.com/#L49EJ7#63
     * @param array defines the data source
     * @param offset defines the offset in the source array where the data starts
     * @returns a new quaternion
     */ static FromArray(array, offset) {
        if (!offset) {
            offset = 0;
        }
        return new Quaternion(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    }
    /**
     * Updates the given quaternion "result" from the starting index of the given array.
     * Example Playground https://playground.babylonjs.com/#L49EJ7#64
     * @param array the array to pull values from
     * @param offset the offset into the array to start at
     * @param result the quaternion to store the result in
     * @returns result input
     */ static FromArrayToRef(array, offset, result) {
        result._x = array[offset];
        result._y = array[offset + 1];
        result._z = array[offset + 2];
        result._w = array[offset + 3];
        result._isDirty = true;
        return result;
    }
    /**
     * Sets the given quaternion "result" with the given floats.
     * @param x defines the x coordinate of the source
     * @param y defines the y coordinate of the source
     * @param z defines the z coordinate of the source
     * @param w defines the w coordinate of the source
     * @param result defines the quaternion where to store the result
     * @returns the result quaternion
     */ static FromFloatsToRef(x, y, z, w, result) {
        result.copyFromFloats(x, y, z, w);
        return result;
    }
    /**
     * Create a quaternion from Euler rotation angles
     * Example Playground https://playground.babylonjs.com/#L49EJ7#33
     * @param x Pitch
     * @param y Yaw
     * @param z Roll
     * @returns the new Quaternion
     */ static FromEulerAngles(x, y, z) {
        const q = new Quaternion();
        Quaternion.RotationYawPitchRollToRef(y, x, z, q);
        return q;
    }
    /**
     * Updates a quaternion from Euler rotation angles
     * Example Playground https://playground.babylonjs.com/#L49EJ7#34
     * @param x Pitch
     * @param y Yaw
     * @param z Roll
     * @param result the quaternion to store the result
     * @returns the updated quaternion
     */ static FromEulerAnglesToRef(x, y, z, result) {
        Quaternion.RotationYawPitchRollToRef(y, x, z, result);
        return result;
    }
    /**
     * Create a quaternion from Euler rotation vector
     * Example Playground https://playground.babylonjs.com/#L49EJ7#35
     * @param vec the Euler vector (x Pitch, y Yaw, z Roll)
     * @returns the new Quaternion
     */ static FromEulerVector(vec) {
        const q = new Quaternion();
        Quaternion.RotationYawPitchRollToRef(vec._y, vec._x, vec._z, q);
        return q;
    }
    /**
     * Updates a quaternion from Euler rotation vector
     * Example Playground https://playground.babylonjs.com/#L49EJ7#36
     * @param vec the Euler vector (x Pitch, y Yaw, z Roll)
     * @param result the quaternion to store the result
     * @returns the updated quaternion
     */ static FromEulerVectorToRef(vec, result) {
        Quaternion.RotationYawPitchRollToRef(vec._y, vec._x, vec._z, result);
        return result;
    }
    /**
     * Updates a quaternion so that it rotates vector vecFrom to vector vecTo
     * Example Playground - https://playground.babylonjs.com/#L49EJ7#70
     * @param vecFrom defines the direction vector from which to rotate
     * @param vecTo defines the direction vector to which to rotate
     * @param result the quaternion to store the result
     * @param epsilon defines the minimal dot value to define vecs as opposite. Default: `BABYLON.Epsilon`
     * @returns the updated quaternion
     */ static FromUnitVectorsToRef(vecFrom, vecTo, result, epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        const r = Vector3.Dot(vecFrom, vecTo) + 1;
        if (r < epsilon) {
            if (Math.abs(vecFrom.x) > Math.abs(vecFrom.z)) {
                result.set(-vecFrom.y, vecFrom.x, 0, 0);
            } else {
                result.set(0, -vecFrom.z, vecFrom.y, 0);
            }
        } else {
            Vector3.CrossToRef(vecFrom, vecTo, TmpVectors.Vector3[0]);
            result.set(TmpVectors.Vector3[0].x, TmpVectors.Vector3[0].y, TmpVectors.Vector3[0].z, r);
        }
        return result.normalize();
    }
    /**
     * Creates a new quaternion from the given Euler float angles (y, x, z)
     * Example Playground https://playground.babylonjs.com/#L49EJ7#77
     * @param yaw defines the rotation around Y axis
     * @param pitch defines the rotation around X axis
     * @param roll defines the rotation around Z axis
     * @returns the new quaternion
     */ static RotationYawPitchRoll(yaw, pitch, roll) {
        const q = new Quaternion();
        Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, q);
        return q;
    }
    /**
     * Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#561
     * @param yaw defines the rotation around Y axis
     * @param pitch defines the rotation around X axis
     * @param roll defines the rotation around Z axis
     * @param result defines the target quaternion
     * @returns result input
     */ static RotationYawPitchRollToRef(yaw, pitch, roll, result) {
        // Produces a quaternion from Euler angles in the y-x-z orientation
        const halfRoll = roll * 0.5;
        const halfPitch = pitch * 0.5;
        const halfYaw = yaw * 0.5;
        const sinRoll = Math.sin(halfRoll);
        const cosRoll = Math.cos(halfRoll);
        const sinPitch = Math.sin(halfPitch);
        const cosPitch = Math.cos(halfPitch);
        const sinYaw = Math.sin(halfYaw);
        const cosYaw = Math.cos(halfYaw);
        result._x = cosYaw * sinPitch * cosRoll + sinYaw * cosPitch * sinRoll;
        result._y = sinYaw * cosPitch * cosRoll - cosYaw * sinPitch * sinRoll;
        result._z = cosYaw * cosPitch * sinRoll - sinYaw * sinPitch * cosRoll;
        result._w = cosYaw * cosPitch * cosRoll + sinYaw * sinPitch * sinRoll;
        result._isDirty = true;
        return result;
    }
    /**
     * Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation
     * Example Playground https://playground.babylonjs.com/#L49EJ7#68
     * @param alpha defines the rotation around first axis
     * @param beta defines the rotation around second axis
     * @param gamma defines the rotation around third axis
     * @returns the new quaternion
     */ static RotationAlphaBetaGamma(alpha, beta, gamma) {
        const result = new Quaternion();
        Quaternion.RotationAlphaBetaGammaToRef(alpha, beta, gamma, result);
        return result;
    }
    /**
     * Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation and stores it in the target quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#69
     * @param alpha defines the rotation around first axis
     * @param beta defines the rotation around second axis
     * @param gamma defines the rotation around third axis
     * @param result defines the target quaternion
     * @returns result input
     */ static RotationAlphaBetaGammaToRef(alpha, beta, gamma, result) {
        // Produces a quaternion from Euler angles in the z-x-z orientation
        const halfGammaPlusAlpha = (gamma + alpha) * 0.5;
        const halfGammaMinusAlpha = (gamma - alpha) * 0.5;
        const halfBeta = beta * 0.5;
        result._x = Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta);
        result._y = Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta);
        result._z = Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta);
        result._w = Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta);
        result._isDirty = true;
        return result;
    }
    /**
     * Creates a new quaternion containing the rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation)
     * Example Playground https://playground.babylonjs.com/#L49EJ7#75
     * @param axis1 defines the first axis
     * @param axis2 defines the second axis
     * @param axis3 defines the third axis
     * @returns the new quaternion
     */ static RotationQuaternionFromAxis(axis1, axis2, axis3) {
        const quat = new Quaternion(0.0, 0.0, 0.0, 0.0);
        Quaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat);
        return quat;
    }
    /**
     * Creates a rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) and stores it in the target quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#76
     * @param axis1 defines the first axis
     * @param axis2 defines the second axis
     * @param axis3 defines the third axis
     * @param ref defines the target quaternion
     * @returns result input
     */ static RotationQuaternionFromAxisToRef(axis1, axis2, axis3, ref) {
        const rotMat = MathTmp.Matrix[0];
        axis1 = axis1.normalizeToRef(MathTmp.Vector3[0]);
        axis2 = axis2.normalizeToRef(MathTmp.Vector3[1]);
        axis3 = axis3.normalizeToRef(MathTmp.Vector3[2]);
        Matrix.FromXYZAxesToRef(axis1, axis2, axis3, rotMat);
        Quaternion.FromRotationMatrixToRef(rotMat, ref);
        return ref;
    }
    /**
     * Creates a new rotation value to orient an object to look towards the given forward direction, the up direction being oriented like "up".
     * This function works in left handed mode
     * Example Playground https://playground.babylonjs.com/#L49EJ7#96
     * @param forward defines the forward direction - Must be normalized and orthogonal to up.
     * @param up defines the up vector for the entity - Must be normalized and orthogonal to forward.
     * @returns A new quaternion oriented toward the specified forward and up.
     */ static FromLookDirectionLH(forward, up) {
        const quat = new Quaternion();
        Quaternion.FromLookDirectionLHToRef(forward, up, quat);
        return quat;
    }
    /**
     * Creates a new rotation value to orient an object to look towards the given forward direction with the up direction being oriented like "up", and stores it in the target quaternion.
     * This function works in left handed mode
     * Example Playground https://playground.babylonjs.com/#L49EJ7#97
     * @param forward defines the forward direction - Must be normalized and orthogonal to up.
     * @param up defines the up vector for the entity - Must be normalized and orthogonal to forward.
     * @param ref defines the target quaternion.
     * @returns result input
     */ static FromLookDirectionLHToRef(forward, up, ref) {
        const rotMat = MathTmp.Matrix[0];
        Matrix.LookDirectionLHToRef(forward, up, rotMat);
        Quaternion.FromRotationMatrixToRef(rotMat, ref);
        return ref;
    }
    /**
     * Creates a new rotation value to orient an object to look towards the given forward direction, the up direction being oriented like "up".
     * This function works in right handed mode
     * Example Playground https://playground.babylonjs.com/#L49EJ7#98
     * @param forward defines the forward direction - Must be normalized and orthogonal to up.
     * @param up defines the up vector for the entity - Must be normalized and orthogonal to forward.
     * @returns A new quaternion oriented toward the specified forward and up.
     */ static FromLookDirectionRH(forward, up) {
        const quat = new Quaternion();
        Quaternion.FromLookDirectionRHToRef(forward, up, quat);
        return quat;
    }
    /**
     * Creates a new rotation value to orient an object to look towards the given forward direction with the up direction being oriented like "up", and stores it in the target quaternion.
     * This function works in right handed mode
     * Example Playground https://playground.babylonjs.com/#L49EJ7#105
     * @param forward defines the forward direction - Must be normalized and orthogonal to up.
     * @param up defines the up vector for the entity - Must be normalized and orthogonal to forward.
     * @param ref defines the target quaternion.
     * @returns result input
     */ static FromLookDirectionRHToRef(forward, up, ref) {
        const rotMat = MathTmp.Matrix[0];
        Matrix.LookDirectionRHToRef(forward, up, rotMat);
        return Quaternion.FromRotationMatrixToRef(rotMat, ref);
    }
    /**
     * Interpolates between two quaternions
     * Example Playground https://playground.babylonjs.com/#L49EJ7#79
     * @param left defines first quaternion
     * @param right defines second quaternion
     * @param amount defines the gradient to use
     * @returns the new interpolated quaternion
     */ static Slerp(left, right, amount) {
        const result = Quaternion.Identity();
        Quaternion.SlerpToRef(left, right, amount, result);
        return result;
    }
    /**
     * Interpolates between two quaternions and stores it into a target quaternion
     * Example Playground https://playground.babylonjs.com/#L49EJ7#92
     * @param left defines first quaternion
     * @param right defines second quaternion
     * @param amount defines the gradient to use
     * @param result defines the target quaternion
     * @returns result input
     */ static SlerpToRef(left, right, amount, result) {
        let num2;
        let num3;
        let num4 = left._x * right._x + left._y * right._y + left._z * right._z + left._w * right._w;
        let flag = false;
        if (num4 < 0) {
            flag = true;
            num4 = -num4;
        }
        if (num4 > 0.999999) {
            num3 = 1 - amount;
            num2 = flag ? -amount : amount;
        } else {
            const num5 = Math.acos(num4);
            const num6 = 1.0 / Math.sin(num5);
            num3 = Math.sin((1.0 - amount) * num5) * num6;
            num2 = flag ? -Math.sin(amount * num5) * num6 : Math.sin(amount * num5) * num6;
        }
        result._x = num3 * left._x + num2 * right._x;
        result._y = num3 * left._y + num2 * right._y;
        result._z = num3 * left._z + num2 * right._z;
        result._w = num3 * left._w + num2 * right._w;
        result._isDirty = true;
        return result;
    }
    /**
     * Interpolate between two quaternions using Hermite interpolation
     * Example Playground https://playground.babylonjs.com/#L49EJ7#47
     * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#hermite-quaternion-spline
     * @param value1 defines first quaternion
     * @param tangent1 defines the incoming tangent
     * @param value2 defines second quaternion
     * @param tangent2 defines the outgoing tangent
     * @param amount defines the target quaternion
     * @returns the new interpolated quaternion
     */ static Hermite(value1, tangent1, value2, tangent2, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
        const part2 = -2.0 * cubed + 3.0 * squared;
        const part3 = cubed - 2.0 * squared + amount;
        const part4 = cubed - squared;
        const x = value1._x * part1 + value2._x * part2 + tangent1._x * part3 + tangent2._x * part4;
        const y = value1._y * part1 + value2._y * part2 + tangent1._y * part3 + tangent2._y * part4;
        const z = value1._z * part1 + value2._z * part2 + tangent1._z * part3 + tangent2._z * part4;
        const w = value1._w * part1 + value2._w * part2 + tangent1._w * part3 + tangent2._w * part4;
        return new Quaternion(x, y, z, w);
    }
    /**
     * Returns a new Quaternion which is the 1st derivative of the Hermite spline defined by the quaternions "value1", "value2", "tangent1", "tangent2".
     * Example Playground https://playground.babylonjs.com/#L49EJ7#48
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @returns 1st derivative
     */ static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        const result = new Quaternion();
        this.Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result);
        return result;
    }
    /**
     * Update a Quaternion with the 1st derivative of the Hermite spline defined by the quaternions "value1", "value2", "tangent1", "tangent2".
     * Example Playground https://playground.babylonjs.com/#L49EJ7#49
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @param result define where to store the derivative
     * @returns result input
     */ static Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result) {
        const t2 = time * time;
        result._x = (t2 - time) * 6 * value1._x + (3 * t2 - 4 * time + 1) * tangent1._x + (-t2 + time) * 6 * value2._x + (3 * t2 - 2 * time) * tangent2._x;
        result._y = (t2 - time) * 6 * value1._y + (3 * t2 - 4 * time + 1) * tangent1._y + (-t2 + time) * 6 * value2._y + (3 * t2 - 2 * time) * tangent2._y;
        result._z = (t2 - time) * 6 * value1._z + (3 * t2 - 4 * time + 1) * tangent1._z + (-t2 + time) * 6 * value2._z + (3 * t2 - 2 * time) * tangent2._z;
        result._w = (t2 - time) * 6 * value1._w + (3 * t2 - 4 * time + 1) * tangent1._w + (-t2 + time) * 6 * value2._w + (3 * t2 - 2 * time) * tangent2._w;
        result._isDirty = true;
        return result;
    }
    /**
     * Returns a new Quaternion as the normalization of the given Quaternion
     * @param quat defines the Quaternion to normalize
     * @returns the new Quaternion
     */ static Normalize(quat) {
        const result = Quaternion.Zero();
        Quaternion.NormalizeToRef(quat, result);
        return result;
    }
    /**
     * Sets the given Quaternion "result" with the normalization of the given first Quaternion
     * @param quat defines the Quaternion to normalize
     * @param result defines the Quaternion where to store the result
     * @returns result input
     */ static NormalizeToRef(quat, result) {
        quat.normalizeToRef(result);
        return result;
    }
    /**
     * Returns a new Quaternion set with the coordinates of "value", if the quaternion "value" is in the cube defined by the quaternions "min" and "max"
     * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
     * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
     * @param value defines the current value
     * @param min defines the lower range value
     * @param max defines the upper range value
     * @returns the new Quaternion
     */ static Clamp(value, min, max) {
        const result = new Quaternion();
        Quaternion.ClampToRef(value, min, max, result);
        return result;
    }
    /**
     * Sets the given quaternion "result" with the coordinates of "value", if the quaternion "value" is in the cube defined by the quaternions "min" and "max"
     * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
     * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
     * @param value defines the current value
     * @param min defines the lower range value
     * @param max defines the upper range value
     * @param result defines the Quaternion where to store the result
     * @returns result input
     */ static ClampToRef(value, min, max, result) {
        return result.copyFromFloats((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.x, min.x, max.x), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.y, min.y, max.y), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.z, min.z, max.z), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value.w, min.w, max.w));
    }
    /**
     * Returns a new Quaternion with random values between min and max
     * @param min the minimum random value
     * @param max the maximum random value
     * @returns a Quaternion with random values between min and max
     */ static Random(min = 0, max = 1) {
        return new Quaternion((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max));
    }
    /**
     * Sets a Quaternion with random values between min and max
     * @param min the minimum random value
     * @param max the maximum random value
     * @param ref the ref to store the values in
     * @returns the ref with random values between min and max
     */ static RandomToRef(min = 0, max = 1, ref) {
        return ref.copyFromFloats((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"])(min, max));
    }
    /**
     * Do not use
     * @internal
     */ static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense");
    }
    /**
     * Do not use
     * @internal
     */ static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense");
    }
    /**
     * Returns the distance (float) between the quaternions "value1" and "value2".
     * @param value1 value to calulate the distance between
     * @param value2 value to calulate the distance between
     * @returns the distance between the two quaternions
     */ static Distance(value1, value2) {
        return Math.sqrt(Quaternion.DistanceSquared(value1, value2));
    }
    /**
     * Returns the squared distance (float) between the quaternions "value1" and "value2".
     * @param value1 value to calulate the distance between
     * @param value2 value to calulate the distance between
     * @returns the distance between the two quaternions squared
     */ static DistanceSquared(value1, value2) {
        const x = value1.x - value2.x;
        const y = value1.y - value2.y;
        const z = value1.z - value2.z;
        const w = value1.w - value2.w;
        return x * x + y * y + z * z + w * w;
    }
    /**
     * Returns a new Quaternion located at the center between the quaternions "value1" and "value2".
     * @param value1 value to calulate the center between
     * @param value2 value to calulate the center between
     * @returns the center between the two quaternions
     */ static Center(value1, value2) {
        return Quaternion.CenterToRef(value1, value2, Quaternion.Zero());
    }
    /**
     * Gets the center of the quaternions "value1" and "value2" and stores the result in the quaternion "ref"
     * @param value1 defines first quaternion
     * @param value2 defines second quaternion
     * @param ref defines third quaternion
     * @returns ref
     */ static CenterToRef(value1, value2, ref) {
        return ref.copyFromFloats((value1.x + value2.x) / 2, (value1.y + value2.y) / 2, (value1.z + value2.z) / 2, (value1.w + value2.w) / 2);
    }
}
/**
 * If the first quaternion is flagged with integers (as everything is 0,0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
 * If subsequent quaternion are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
 * and henceforth it will use floating-point representation for all quaternion instances that it creates.
 * But the original quaternion instances are unchanged and has a "deprecated map".
 * If we keep using the quaternion instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.
 */ Quaternion._V8PerformanceHack = new Quaternion(0.5, 0.5, 0.5, 0.5);
Quaternion;
Object.defineProperties(Quaternion.prototype, {
    dimension: {
        value: [
            4
        ]
    },
    rank: {
        value: 1
    }
});
class Matrix {
    /**
     * Gets the precision of matrix computations
     */ static get Use64Bits() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceConfigurator"].MatrixUse64Bits;
    }
    /**
     * Gets the internal data of the matrix
     */ get m() {
        return this._m;
    }
    /**
     * Update the updateFlag to indicate that the matrix has been updated
     */ markAsUpdated() {
        this.updateFlag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixManagement"]._UpdateFlagSeed++;
        this._isIdentity = false;
        this._isIdentity3x2 = false;
        this._isIdentityDirty = true;
        this._isIdentity3x2Dirty = true;
    }
    _updateIdentityStatus(isIdentity, isIdentityDirty = false, isIdentity3x2 = false, isIdentity3x2Dirty = true) {
        this._isIdentity = isIdentity;
        this._isIdentity3x2 = isIdentity || isIdentity3x2;
        this._isIdentityDirty = this._isIdentity ? false : isIdentityDirty;
        this._isIdentity3x2Dirty = this._isIdentity3x2 ? false : isIdentity3x2Dirty;
    }
    /**
     * Creates an empty matrix (filled with zeros)
     */ constructor(){
        this._isIdentity = false;
        this._isIdentityDirty = true;
        this._isIdentity3x2 = true;
        this._isIdentity3x2Dirty = true;
        /**
         * Gets the update flag of the matrix which is an unique number for the matrix.
         * It will be incremented every time the matrix data change.
         * You can use it to speed the comparison between two versions of the same matrix.
         */ this.updateFlag = -1;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceConfigurator"].MatrixTrackPrecisionChange) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceConfigurator"].MatrixTrackedMatrices.push(this);
        }
        this._m = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceConfigurator"].MatrixCurrentType(16);
        this.markAsUpdated();
    }
    // Properties
    /**
     * Check if the current matrix is identity
     * @returns true is the matrix is the identity matrix
     */ isIdentity() {
        if (this._isIdentityDirty) {
            this._isIdentityDirty = false;
            const m = this._m;
            this._isIdentity = m[0] === 1.0 && m[1] === 0.0 && m[2] === 0.0 && m[3] === 0.0 && m[4] === 0.0 && m[5] === 1.0 && m[6] === 0.0 && m[7] === 0.0 && m[8] === 0.0 && m[9] === 0.0 && m[10] === 1.0 && m[11] === 0.0 && m[12] === 0.0 && m[13] === 0.0 && m[14] === 0.0 && m[15] === 1.0;
        }
        return this._isIdentity;
    }
    /**
     * Check if the current matrix is identity as a texture matrix (3x2 store in 4x4)
     * @returns true is the matrix is the identity matrix
     */ isIdentityAs3x2() {
        if (this._isIdentity3x2Dirty) {
            this._isIdentity3x2Dirty = false;
            if (this._m[0] !== 1.0 || this._m[5] !== 1.0 || this._m[15] !== 1.0) {
                this._isIdentity3x2 = false;
            } else if (this._m[1] !== 0.0 || this._m[2] !== 0.0 || this._m[3] !== 0.0 || this._m[4] !== 0.0 || this._m[6] !== 0.0 || this._m[7] !== 0.0 || this._m[8] !== 0.0 || this._m[9] !== 0.0 || this._m[10] !== 0.0 || this._m[11] !== 0.0 || this._m[12] !== 0.0 || this._m[13] !== 0.0 || this._m[14] !== 0.0) {
                this._isIdentity3x2 = false;
            } else {
                this._isIdentity3x2 = true;
            }
        }
        return this._isIdentity3x2;
    }
    /**
     * Gets the determinant of the matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#34
     * @returns the matrix determinant
     */ determinant() {
        if (this._isIdentity === true) {
            return 1;
        }
        const m = this._m;
        const m00 = m[0], m01 = m[1], m02 = m[2], m03 = m[3];
        const m10 = m[4], m11 = m[5], m12 = m[6], m13 = m[7];
        const m20 = m[8], m21 = m[9], m22 = m[10], m23 = m[11];
        const m30 = m[12], m31 = m[13], m32 = m[14], m33 = m[15];
        // https://en.wikipedia.org/wiki/Laplace_expansion
        // to compute the deterrminant of a 4x4 Matrix we compute the cofactors of any row or column,
        // then we multiply each Cofactor by its corresponding matrix value and sum them all to get the determinant
        // Cofactor(i, j) = sign(i,j) * det(Minor(i, j))
        // where
        //  - sign(i,j) = (i+j) % 2 === 0 ? 1 : -1
        //  - Minor(i, j) is the 3x3 matrix we get by removing row i and column j from current Matrix
        //
        // Here we do that for the 1st row.
        const det_22_33 = m22 * m33 - m32 * m23;
        const det_21_33 = m21 * m33 - m31 * m23;
        const det_21_32 = m21 * m32 - m31 * m22;
        const det_20_33 = m20 * m33 - m30 * m23;
        const det_20_32 = m20 * m32 - m22 * m30;
        const det_20_31 = m20 * m31 - m30 * m21;
        const cofact_00 = +(m11 * det_22_33 - m12 * det_21_33 + m13 * det_21_32);
        const cofact_01 = -(m10 * det_22_33 - m12 * det_20_33 + m13 * det_20_32);
        const cofact_02 = +(m10 * det_21_33 - m11 * det_20_33 + m13 * det_20_31);
        const cofact_03 = -(m10 * det_21_32 - m11 * det_20_32 + m12 * det_20_31);
        return m00 * cofact_00 + m01 * cofact_01 + m02 * cofact_02 + m03 * cofact_03;
    }
    // Methods
    /**
     * Gets a string with the Matrix values
     * @returns a string with the Matrix values
     */ toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`;
    }
    toArray(array = null, index = 0) {
        if (!array) {
            return this._m;
        }
        const m = this._m;
        for(let i = 0; i < 16; i++){
            array[index + i] = m[i];
        }
        return this;
    }
    /**
     * Returns the matrix as a Float32Array or Array<number>
     * Example Playground - https://playground.babylonjs.com/#AV9X17#114
     * @returns the matrix underlying array.
     */ asArray() {
        return this._m;
    }
    fromArray(array, index = 0) {
        return Matrix.FromArrayToRef(array, index, this);
    }
    copyFromFloats(...floats) {
        return Matrix.FromArrayToRef(floats, 0, this);
    }
    set(...values) {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            m[i] = values[i];
        }
        this.markAsUpdated();
        return this;
    }
    setAll(value) {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            m[i] = value;
        }
        this.markAsUpdated();
        return this;
    }
    /**
     * Inverts the current matrix in place
     * Example Playground - https://playground.babylonjs.com/#AV9X17#118
     * @returns the current inverted matrix
     */ invert() {
        this.invertToRef(this);
        return this;
    }
    /**
     * Sets all the matrix elements to zero
     * @returns the current matrix
     */ reset() {
        Matrix.FromValuesToRef(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, this);
        this._updateIdentityStatus(false);
        return this;
    }
    /**
     * Adds the current matrix with a second one
     * Example Playground - https://playground.babylonjs.com/#AV9X17#44
     * @param other defines the matrix to add
     * @returns a new matrix as the addition of the current matrix and the given one
     */ add(other) {
        const result = new Matrix();
        this.addToRef(other, result);
        return result;
    }
    /**
     * Sets the given matrix "result" to the addition of the current matrix and the given one
     * Example Playground - https://playground.babylonjs.com/#AV9X17#45
     * @param other defines the matrix to add
     * @param result defines the target matrix
     * @returns result input
     */ addToRef(other, result) {
        const m = this._m;
        const resultM = result._m;
        const otherM = other.m;
        for(let index = 0; index < 16; index++){
            resultM[index] = m[index] + otherM[index];
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Adds in place the given matrix to the current matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#46
     * @param other defines the second operand
     * @returns the current updated matrix
     */ addToSelf(other) {
        const m = this._m;
        const otherM = other.m;
        m[0] += otherM[0];
        m[1] += otherM[1];
        m[2] += otherM[2];
        m[3] += otherM[3];
        m[4] += otherM[4];
        m[5] += otherM[5];
        m[6] += otherM[6];
        m[7] += otherM[7];
        m[8] += otherM[8];
        m[9] += otherM[9];
        m[10] += otherM[10];
        m[11] += otherM[11];
        m[12] += otherM[12];
        m[13] += otherM[13];
        m[14] += otherM[14];
        m[15] += otherM[15];
        this.markAsUpdated();
        return this;
    }
    addInPlace(other) {
        const m = this._m, otherM = other.m;
        for(let i = 0; i < 16; i++){
            m[i] += otherM[i];
        }
        this.markAsUpdated();
        return this;
    }
    addInPlaceFromFloats(...floats) {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            m[i] += floats[i];
        }
        this.markAsUpdated();
        return this;
    }
    subtract(other) {
        const m = this._m, otherM = other.m;
        for(let i = 0; i < 16; i++){
            m[i] -= otherM[i];
        }
        this.markAsUpdated();
        return this;
    }
    subtractToRef(other, result) {
        const m = this._m, otherM = other.m, resultM = result._m;
        for(let i = 0; i < 16; i++){
            resultM[i] = m[i] - otherM[i];
        }
        result.markAsUpdated();
        return result;
    }
    subtractInPlace(other) {
        const m = this._m, otherM = other.m;
        for(let i = 0; i < 16; i++){
            m[i] -= otherM[i];
        }
        this.markAsUpdated();
        return this;
    }
    subtractFromFloats(...floats) {
        return this.subtractFromFloatsToRef(...floats, new Matrix());
    }
    subtractFromFloatsToRef(...args) {
        const result = args.pop(), m = this._m, resultM = result._m, values = args;
        for(let i = 0; i < 16; i++){
            resultM[i] = m[i] - values[i];
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Sets the given matrix to the current inverted Matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#119
     * @param other defines the target matrix
     * @returns result input
     */ invertToRef(other) {
        if (this._isIdentity === true) {
            Matrix.IdentityToRef(other);
            return other;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvertMatrixToArray"])(this, other.asArray())) {
            other.markAsUpdated();
        } else {
            other.copyFrom(this);
        }
        return other;
    }
    /**
     * add a value at the specified position in the current Matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#47
     * @param index the index of the value within the matrix. between 0 and 15.
     * @param value the value to be added
     * @returns the current updated matrix
     */ addAtIndex(index, value) {
        this._m[index] += value;
        this.markAsUpdated();
        return this;
    }
    /**
     * mutiply the specified position in the current Matrix by a value
     * @param index the index of the value within the matrix. between 0 and 15.
     * @param value the value to be added
     * @returns the current updated matrix
     */ multiplyAtIndex(index, value) {
        this._m[index] *= value;
        this.markAsUpdated();
        return this;
    }
    /**
     * Inserts the translation vector (using 3 floats) in the current matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#120
     * @param x defines the 1st component of the translation
     * @param y defines the 2nd component of the translation
     * @param z defines the 3rd component of the translation
     * @returns the current updated matrix
     */ setTranslationFromFloats(x, y, z) {
        this._m[12] = x;
        this._m[13] = y;
        this._m[14] = z;
        this.markAsUpdated();
        return this;
    }
    /**
     * Adds the translation vector (using 3 floats) in the current matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#20
     * Example Playground - https://playground.babylonjs.com/#AV9X17#48
     * @param x defines the 1st component of the translation
     * @param y defines the 2nd component of the translation
     * @param z defines the 3rd component of the translation
     * @returns the current updated matrix
     */ addTranslationFromFloats(x, y, z) {
        this._m[12] += x;
        this._m[13] += y;
        this._m[14] += z;
        this.markAsUpdated();
        return this;
    }
    /**
     * Inserts the translation vector in the current matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#121
     * @param vector3 defines the translation to insert
     * @returns the current updated matrix
     */ setTranslation(vector3) {
        return this.setTranslationFromFloats(vector3._x, vector3._y, vector3._z);
    }
    /**
     * Gets the translation value of the current matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#122
     * @returns a new Vector3 as the extracted translation from the matrix
     */ getTranslation() {
        return new Vector3(this._m[12], this._m[13], this._m[14]);
    }
    /**
     * Fill a Vector3 with the extracted translation from the matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#123
     * @param result defines the Vector3 where to store the translation
     * @returns the current matrix
     */ getTranslationToRef(result) {
        result.x = this._m[12];
        result.y = this._m[13];
        result.z = this._m[14];
        return result;
    }
    /**
     * Remove rotation and scaling part from the matrix
     * @returns the updated matrix
     */ removeRotationAndScaling() {
        const m = this.m;
        Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, m[12], m[13], m[14], m[15], this);
        this._updateIdentityStatus(m[12] === 0 && m[13] === 0 && m[14] === 0 && m[15] === 1);
        return this;
    }
    /**
     * Copy the current matrix from the given one
     * Example Playground - https://playground.babylonjs.com/#AV9X17#21
     * @param other defines the source matrix
     * @returns the current updated matrix
     */ copyFrom(other) {
        other.copyToArray(this._m);
        const o = other;
        this.updateFlag = o.updateFlag;
        this._updateIdentityStatus(o._isIdentity, o._isIdentityDirty, o._isIdentity3x2, o._isIdentity3x2Dirty);
        return this;
    }
    /**
     * Populates the given array from the starting index with the current matrix values
     * @param array defines the target array
     * @param offset defines the offset in the target array where to start storing values
     * @returns the current matrix
     */ copyToArray(array, offset = 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyMatrixToArray"])(this, array, offset);
        return this;
    }
    /**
     * Multiply two matrices
     * Example Playground - https://playground.babylonjs.com/#AV9X17#15
     * A.multiply(B) means apply B to A so result is B x A
     * @param other defines the second operand
     * @returns a new matrix set with the multiplication result of the current Matrix and the given one
     */ multiply(other) {
        const result = new Matrix();
        this.multiplyToRef(other, result);
        return result;
    }
    /**
     * This method performs component-by-component in-place multiplication, rather than true matrix multiplication.
     * Use multiply or multiplyToRef for matrix multiplication.
     * @param other defines the second operand
     * @returns the current updated matrix
     */ multiplyInPlace(other) {
        const m = this._m, otherM = other.m;
        for(let i = 0; i < 16; i++){
            m[i] *= otherM[i];
        }
        this.markAsUpdated();
        return this;
    }
    /**
     * This method performs a component-by-component multiplication of the current matrix with the array of transmitted numbers.
     * Use multiply or multiplyToRef for matrix multiplication.
     * @param floats defines the array of numbers to multiply the matrix by
     * @returns the current updated matrix
     */ multiplyByFloats(...floats) {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            m[i] *= floats[i];
        }
        this.markAsUpdated();
        return this;
    }
    /**
     * Multiples the current matrix by the given floats and stores them in the given ref
     * @param args The floats and ref
     * @returns The updated ref
     */ multiplyByFloatsToRef(...args) {
        const result = args.pop(), m = this._m, resultM = result._m, values = args;
        for(let i = 0; i < 16; i++){
            resultM[i] = m[i] * values[i];
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Sets the given matrix "result" with the multiplication result of the current Matrix and the given one
     * A.multiplyToRef(B, R) means apply B to A and store in R and R = B x A
     * Example Playground - https://playground.babylonjs.com/#AV9X17#16
     * @param other defines the second operand
     * @param result defines the matrix where to store the multiplication
     * @returns result input
     */ multiplyToRef(other, result) {
        if (this._isIdentity) {
            result.copyFrom(other);
            return result;
        }
        if (other._isIdentity) {
            result.copyFrom(this);
            return result;
        }
        this.multiplyToArray(other, result._m, 0);
        result.markAsUpdated();
        return result;
    }
    /**
     * Sets the Float32Array "result" from the given index "offset" with the multiplication of the current matrix and the given one
     * @param other defines the second operand
     * @param result defines the array where to store the multiplication
     * @param offset defines the offset in the target array where to start storing values
     * @returns the current matrix
     */ multiplyToArray(other, result, offset) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplyMatricesToArray"])(this, other, result, offset);
        return this;
    }
    divide(other) {
        return this.divideToRef(other, new Matrix());
    }
    divideToRef(other, result) {
        const m = this._m, otherM = other.m, resultM = result._m;
        for(let i = 0; i < 16; i++){
            resultM[i] = m[i] / otherM[i];
        }
        result.markAsUpdated();
        return result;
    }
    divideInPlace(other) {
        const m = this._m, otherM = other.m;
        for(let i = 0; i < 16; i++){
            m[i] /= otherM[i];
        }
        this.markAsUpdated();
        return this;
    }
    minimizeInPlace(other) {
        const m = this._m, otherM = other.m;
        for(let i = 0; i < 16; i++){
            m[i] = Math.min(m[i], otherM[i]);
        }
        this.markAsUpdated();
        return this;
    }
    minimizeInPlaceFromFloats(...floats) {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            m[i] = Math.min(m[i], floats[i]);
        }
        this.markAsUpdated();
        return this;
    }
    maximizeInPlace(other) {
        const m = this._m, otherM = other.m;
        for(let i = 0; i < 16; i++){
            m[i] = Math.min(m[i], otherM[i]);
        }
        this.markAsUpdated();
        return this;
    }
    maximizeInPlaceFromFloats(...floats) {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            m[i] = Math.min(m[i], floats[i]);
        }
        this.markAsUpdated();
        return this;
    }
    negate() {
        return this.negateToRef(new Matrix());
    }
    negateInPlace() {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            m[i] = -m[i];
        }
        this.markAsUpdated();
        return this;
    }
    negateToRef(result) {
        const m = this._m, resultM = result._m;
        for(let i = 0; i < 16; i++){
            resultM[i] = -m[i];
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Check equality between this matrix and a second one
     * @param value defines the second matrix to compare
     * @returns true is the current matrix and the given one values are strictly equal
     */ equals(value) {
        const other = value;
        if (!other) {
            return false;
        }
        if (this._isIdentity || other._isIdentity) {
            if (!this._isIdentityDirty && !other._isIdentityDirty) {
                return this._isIdentity && other._isIdentity;
            }
        }
        const m = this.m;
        const om = other.m;
        return m[0] === om[0] && m[1] === om[1] && m[2] === om[2] && m[3] === om[3] && m[4] === om[4] && m[5] === om[5] && m[6] === om[6] && m[7] === om[7] && m[8] === om[8] && m[9] === om[9] && m[10] === om[10] && m[11] === om[11] && m[12] === om[12] && m[13] === om[13] && m[14] === om[14] && m[15] === om[15];
    }
    equalsWithEpsilon(other, epsilon = 0) {
        const m = this._m, otherM = other.m;
        for(let i = 0; i < 16; i++){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(m[i], otherM[i], epsilon)) {
                return false;
            }
        }
        return true;
    }
    equalsToFloats(...floats) {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            if (m[i] != floats[i]) {
                return false;
            }
        }
        return true;
    }
    floor() {
        return this.floorToRef(new Matrix());
    }
    floorToRef(result) {
        const m = this._m, resultM = result._m;
        for(let i = 0; i < 16; i++){
            resultM[i] = Math.floor(m[i]);
        }
        result.markAsUpdated();
        return result;
    }
    fract() {
        return this.fractToRef(new Matrix());
    }
    fractToRef(result) {
        const m = this._m, resultM = result._m;
        for(let i = 0; i < 16; i++){
            resultM[i] = m[i] - Math.floor(m[i]);
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Clone the current matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#18
     * @returns a new matrix from the current matrix
     */ clone() {
        const matrix = new Matrix();
        matrix.copyFrom(this);
        return matrix;
    }
    /**
     * Returns the name of the current matrix class
     * @returns the string "Matrix"
     */ getClassName() {
        return "Matrix";
    }
    /**
     * Gets the hash code of the current matrix
     * @returns the hash code
     */ getHashCode() {
        let hash = ExtractAsInt(this._m[0]);
        for(let i = 1; i < 16; i++){
            hash = hash * 397 ^ ExtractAsInt(this._m[i]);
        }
        return hash;
    }
    /**
     * Decomposes the current Matrix into a translation, rotation and scaling components of the provided node
     * Example Playground - https://playground.babylonjs.com/#AV9X17#13
     * @param node the node to decompose the matrix to
     * @returns true if operation was successful
     */ decomposeToTransformNode(node) {
        node.rotationQuaternion = node.rotationQuaternion || new Quaternion();
        return this.decompose(node.scaling, node.rotationQuaternion, node.position);
    }
    /**
     * Decomposes the current Matrix into a translation, rotation and scaling components
     * Example Playground - https://playground.babylonjs.com/#AV9X17#12
     * @param scale defines the scale vector3 given as a reference to update
     * @param rotation defines the rotation quaternion given as a reference to update
     * @param translation defines the translation vector3 given as a reference to update
     * @param preserveScalingNode Use scaling sign coming from this node. Otherwise scaling sign might change.
     * @param useAbsoluteScaling Use scaling sign coming from this absoluteScaling when true or scaling otherwise.
     * @returns true if operation was successful
     */ decompose(scale, rotation, translation, preserveScalingNode, useAbsoluteScaling = true) {
        if (this._isIdentity) {
            if (translation) {
                translation.setAll(0);
            }
            if (scale) {
                scale.setAll(1);
            }
            if (rotation) {
                rotation.copyFromFloats(0, 0, 0, 1);
            }
            return true;
        }
        const m = this._m;
        if (translation) {
            translation.copyFromFloats(m[12], m[13], m[14]);
        }
        scale = scale || MathTmp.Vector3[0];
        scale.x = Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
        scale.y = Math.sqrt(m[4] * m[4] + m[5] * m[5] + m[6] * m[6]);
        scale.z = Math.sqrt(m[8] * m[8] + m[9] * m[9] + m[10] * m[10]);
        if (preserveScalingNode) {
            const signX = (useAbsoluteScaling ? preserveScalingNode.absoluteScaling.x : preserveScalingNode.scaling.x) < 0 ? -1 : 1;
            const signY = (useAbsoluteScaling ? preserveScalingNode.absoluteScaling.y : preserveScalingNode.scaling.y) < 0 ? -1 : 1;
            const signZ = (useAbsoluteScaling ? preserveScalingNode.absoluteScaling.z : preserveScalingNode.scaling.z) < 0 ? -1 : 1;
            scale.x *= signX;
            scale.y *= signY;
            scale.z *= signZ;
        } else {
            if (this.determinant() <= 0) {
                scale.y *= -1;
            }
        }
        if (scale._x === 0 || scale._y === 0 || scale._z === 0) {
            if (rotation) {
                rotation.copyFromFloats(0.0, 0.0, 0.0, 1.0);
            }
            return false;
        }
        if (rotation) {
            const sx = 1 / scale._x, sy = 1 / scale._y, sz = 1 / scale._z;
            Matrix.FromValuesToRef(m[0] * sx, m[1] * sx, m[2] * sx, 0.0, m[4] * sy, m[5] * sy, m[6] * sy, 0.0, m[8] * sz, m[9] * sz, m[10] * sz, 0.0, 0.0, 0.0, 0.0, 1.0, MathTmp.Matrix[0]);
            Quaternion.FromRotationMatrixToRef(MathTmp.Matrix[0], rotation);
        }
        return true;
    }
    /**
     * Gets specific row of the matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#36
     * @param index defines the number of the row to get
     * @returns the index-th row of the current matrix as a new Vector4
     */ getRow(index) {
        if (index < 0 || index > 3) {
            return null;
        }
        const i = index * 4;
        return new Vector4(this._m[i + 0], this._m[i + 1], this._m[i + 2], this._m[i + 3]);
    }
    /**
     * Gets specific row of the matrix to ref
     * Example Playground - https://playground.babylonjs.com/#AV9X17#36
     * @param index defines the number of the row to get
     * @param rowVector vector to store the index-th row of the current matrix
     * @returns result input
     */ getRowToRef(index, rowVector) {
        if (index >= 0 && index <= 3) {
            const i = index * 4;
            rowVector.x = this._m[i + 0];
            rowVector.y = this._m[i + 1];
            rowVector.z = this._m[i + 2];
            rowVector.w = this._m[i + 3];
        }
        return rowVector;
    }
    /**
     * Sets the index-th row of the current matrix to the vector4 values
     * Example Playground - https://playground.babylonjs.com/#AV9X17#36
     * @param index defines the number of the row to set
     * @param row defines the target vector4
     * @returns the updated current matrix
     */ setRow(index, row) {
        return this.setRowFromFloats(index, row.x, row.y, row.z, row.w);
    }
    /**
     * Compute the transpose of the matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#40
     * @returns the new transposed matrix
     */ transpose() {
        const result = new Matrix();
        Matrix.TransposeToRef(this, result);
        return result;
    }
    /**
     * Compute the transpose of the matrix and store it in a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#41
     * @param result defines the target matrix
     * @returns result input
     */ transposeToRef(result) {
        Matrix.TransposeToRef(this, result);
        return result;
    }
    /**
     * Sets the index-th row of the current matrix with the given 4 x float values
     * Example Playground - https://playground.babylonjs.com/#AV9X17#36
     * @param index defines the row index
     * @param x defines the x component to set
     * @param y defines the y component to set
     * @param z defines the z component to set
     * @param w defines the w component to set
     * @returns the updated current matrix
     */ setRowFromFloats(index, x, y, z, w) {
        if (index < 0 || index > 3) {
            return this;
        }
        const i = index * 4;
        this._m[i + 0] = x;
        this._m[i + 1] = y;
        this._m[i + 2] = z;
        this._m[i + 3] = w;
        this.markAsUpdated();
        return this;
    }
    /**
     * Compute a new matrix set with the current matrix values multiplied by scale (float)
     * @param scale defines the scale factor
     * @returns a new matrix
     */ scale(scale) {
        const result = new Matrix();
        this.scaleToRef(scale, result);
        return result;
    }
    /**
     * Scale the current matrix values by a factor to a given result matrix
     * @param scale defines the scale factor
     * @param result defines the matrix to store the result
     * @returns result input
     */ scaleToRef(scale, result) {
        for(let index = 0; index < 16; index++){
            result._m[index] = this._m[index] * scale;
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Scale the current matrix values by a factor and add the result to a given matrix
     * @param scale defines the scale factor
     * @param result defines the Matrix to store the result
     * @returns result input
     */ scaleAndAddToRef(scale, result) {
        for(let index = 0; index < 16; index++){
            result._m[index] += this._m[index] * scale;
        }
        result.markAsUpdated();
        return result;
    }
    scaleInPlace(scale) {
        const m = this._m;
        for(let i = 0; i < 16; i++){
            m[i] *= scale;
        }
        this.markAsUpdated();
        return this;
    }
    /**
     * Writes to the given matrix a normal matrix, computed from this one (using values from identity matrix for fourth row and column).
     * Example Playground - https://playground.babylonjs.com/#AV9X17#17
     * @param ref matrix to store the result
     * @returns the reference matrix
     */ toNormalMatrix(ref) {
        const tmp = MathTmp.Matrix[0];
        this.invertToRef(tmp);
        tmp.transposeToRef(ref);
        const m = ref._m;
        Matrix.FromValuesToRef(m[0], m[1], m[2], 0.0, m[4], m[5], m[6], 0.0, m[8], m[9], m[10], 0.0, 0.0, 0.0, 0.0, 1.0, ref);
        return ref;
    }
    /**
     * Gets only rotation part of the current matrix
     * @returns a new matrix sets to the extracted rotation matrix from the current one
     */ getRotationMatrix() {
        const result = new Matrix();
        this.getRotationMatrixToRef(result);
        return result;
    }
    /**
     * Extracts the rotation matrix from the current one and sets it as the given "result"
     * @param result defines the target matrix to store data to
     * @returns result input
     */ getRotationMatrixToRef(result) {
        const scale = MathTmp.Vector3[0];
        if (!this.decompose(scale)) {
            Matrix.IdentityToRef(result);
            return result;
        }
        const m = this._m;
        const sx = 1 / scale._x, sy = 1 / scale._y, sz = 1 / scale._z;
        Matrix.FromValuesToRef(m[0] * sx, m[1] * sx, m[2] * sx, 0.0, m[4] * sy, m[5] * sy, m[6] * sy, 0.0, m[8] * sz, m[9] * sz, m[10] * sz, 0.0, 0.0, 0.0, 0.0, 1.0, result);
        return result;
    }
    /**
     * Toggles model matrix from being right handed to left handed in place and vice versa
     * @returns the current updated matrix
     */ toggleModelMatrixHandInPlace() {
        const m = this._m;
        m[2] *= -1;
        m[6] *= -1;
        m[8] *= -1;
        m[9] *= -1;
        m[14] *= -1;
        this.markAsUpdated();
        return this;
    }
    /**
     * Toggles projection matrix from being right handed to left handed in place and vice versa
     * @returns the current updated matrix
     */ toggleProjectionMatrixHandInPlace() {
        const m = this._m;
        m[8] *= -1;
        m[9] *= -1;
        m[10] *= -1;
        m[11] *= -1;
        this.markAsUpdated();
        return this;
    }
    // Statics
    /**
     * Creates a matrix from an array
     * Example Playground - https://playground.babylonjs.com/#AV9X17#42
     * @param array defines the source array
     * @param offset defines an offset in the source array
     * @returns a new Matrix set from the starting index of the given array
     */ static FromArray(array, offset = 0) {
        const result = new Matrix();
        Matrix.FromArrayToRef(array, offset, result);
        return result;
    }
    /**
     * Copy the content of an array into a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#43
     * @param array defines the source array
     * @param offset defines an offset in the source array
     * @param result defines the target matrix
     * @returns result input
     */ static FromArrayToRef(array, offset, result) {
        for(let index = 0; index < 16; index++){
            result._m[index] = array[index + offset];
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Stores an array into a matrix after having multiplied each component by a given factor
     * Example Playground - https://playground.babylonjs.com/#AV9X17#50
     * @param array defines the source array
     * @param offset defines the offset in the source array
     * @param scale defines the scaling factor
     * @param result defines the target matrix
     * @returns result input
     */ static FromFloat32ArrayToRefScaled(array, offset, scale, result) {
        result._m[0] = array[0 + offset] * scale;
        result._m[1] = array[1 + offset] * scale;
        result._m[2] = array[2 + offset] * scale;
        result._m[3] = array[3 + offset] * scale;
        result._m[4] = array[4 + offset] * scale;
        result._m[5] = array[5 + offset] * scale;
        result._m[6] = array[6 + offset] * scale;
        result._m[7] = array[7 + offset] * scale;
        result._m[8] = array[8 + offset] * scale;
        result._m[9] = array[9 + offset] * scale;
        result._m[10] = array[10 + offset] * scale;
        result._m[11] = array[11 + offset] * scale;
        result._m[12] = array[12 + offset] * scale;
        result._m[13] = array[13 + offset] * scale;
        result._m[14] = array[14 + offset] * scale;
        result._m[15] = array[15 + offset] * scale;
        result.markAsUpdated();
        return result;
    }
    /**
     * Gets an identity matrix that must not be updated
     */ static get IdentityReadOnly() {
        return Matrix._IdentityReadOnly;
    }
    /**
     * Stores a list of values (16) inside a given matrix
     * @param initialM11 defines 1st value of 1st row
     * @param initialM12 defines 2nd value of 1st row
     * @param initialM13 defines 3rd value of 1st row
     * @param initialM14 defines 4th value of 1st row
     * @param initialM21 defines 1st value of 2nd row
     * @param initialM22 defines 2nd value of 2nd row
     * @param initialM23 defines 3rd value of 2nd row
     * @param initialM24 defines 4th value of 2nd row
     * @param initialM31 defines 1st value of 3rd row
     * @param initialM32 defines 2nd value of 3rd row
     * @param initialM33 defines 3rd value of 3rd row
     * @param initialM34 defines 4th value of 3rd row
     * @param initialM41 defines 1st value of 4th row
     * @param initialM42 defines 2nd value of 4th row
     * @param initialM43 defines 3rd value of 4th row
     * @param initialM44 defines 4th value of 4th row
     * @param result defines the target matrix
     */ static FromValuesToRef(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44, result) {
        const m = result._m;
        m[0] = initialM11;
        m[1] = initialM12;
        m[2] = initialM13;
        m[3] = initialM14;
        m[4] = initialM21;
        m[5] = initialM22;
        m[6] = initialM23;
        m[7] = initialM24;
        m[8] = initialM31;
        m[9] = initialM32;
        m[10] = initialM33;
        m[11] = initialM34;
        m[12] = initialM41;
        m[13] = initialM42;
        m[14] = initialM43;
        m[15] = initialM44;
        result.markAsUpdated();
    }
    /**
     * Creates new matrix from a list of values (16)
     * @param initialM11 defines 1st value of 1st row
     * @param initialM12 defines 2nd value of 1st row
     * @param initialM13 defines 3rd value of 1st row
     * @param initialM14 defines 4th value of 1st row
     * @param initialM21 defines 1st value of 2nd row
     * @param initialM22 defines 2nd value of 2nd row
     * @param initialM23 defines 3rd value of 2nd row
     * @param initialM24 defines 4th value of 2nd row
     * @param initialM31 defines 1st value of 3rd row
     * @param initialM32 defines 2nd value of 3rd row
     * @param initialM33 defines 3rd value of 3rd row
     * @param initialM34 defines 4th value of 3rd row
     * @param initialM41 defines 1st value of 4th row
     * @param initialM42 defines 2nd value of 4th row
     * @param initialM43 defines 3rd value of 4th row
     * @param initialM44 defines 4th value of 4th row
     * @returns the new matrix
     */ static FromValues(initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44) {
        const result = new Matrix();
        const m = result._m;
        m[0] = initialM11;
        m[1] = initialM12;
        m[2] = initialM13;
        m[3] = initialM14;
        m[4] = initialM21;
        m[5] = initialM22;
        m[6] = initialM23;
        m[7] = initialM24;
        m[8] = initialM31;
        m[9] = initialM32;
        m[10] = initialM33;
        m[11] = initialM34;
        m[12] = initialM41;
        m[13] = initialM42;
        m[14] = initialM43;
        m[15] = initialM44;
        result.markAsUpdated();
        return result;
    }
    /**
     * Creates a new matrix composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
     * Example Playground - https://playground.babylonjs.com/#AV9X17#24
     * @param scale defines the scale vector3
     * @param rotation defines the rotation quaternion
     * @param translation defines the translation vector3
     * @returns a new matrix
     */ static Compose(scale, rotation, translation) {
        const result = new Matrix();
        Matrix.ComposeToRef(scale, rotation, translation, result);
        return result;
    }
    /**
     * Sets a matrix to a value composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
     * Example Playground - https://playground.babylonjs.com/#AV9X17#25
     * @param scale defines the scale vector3
     * @param rotation defines the rotation quaternion
     * @param translation defines the translation vector3
     * @param result defines the target matrix
     * @returns result input
     */ static ComposeToRef(scale, rotation, translation, result) {
        const m = result._m;
        const x = rotation._x, y = rotation._y, z = rotation._z, w = rotation._w;
        const x2 = x + x, y2 = y + y, z2 = z + z;
        const xx = x * x2, xy = x * y2, xz = x * z2;
        const yy = y * y2, yz = y * z2, zz = z * z2;
        const wx = w * x2, wy = w * y2, wz = w * z2;
        const sx = scale._x, sy = scale._y, sz = scale._z;
        m[0] = (1 - (yy + zz)) * sx;
        m[1] = (xy + wz) * sx;
        m[2] = (xz - wy) * sx;
        m[3] = 0;
        m[4] = (xy - wz) * sy;
        m[5] = (1 - (xx + zz)) * sy;
        m[6] = (yz + wx) * sy;
        m[7] = 0;
        m[8] = (xz + wy) * sz;
        m[9] = (yz - wx) * sz;
        m[10] = (1 - (xx + yy)) * sz;
        m[11] = 0;
        m[12] = translation._x;
        m[13] = translation._y;
        m[14] = translation._z;
        m[15] = 1;
        result.markAsUpdated();
        return result;
    }
    /**
     * Creates a new identity matrix
     * @returns a new identity matrix
     */ static Identity() {
        const identity = Matrix.FromValues(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
        identity._updateIdentityStatus(true);
        return identity;
    }
    /**
     * Creates a new identity matrix and stores the result in a given matrix
     * @param result defines the target matrix
     * @returns result input
     */ static IdentityToRef(result) {
        Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, result);
        result._updateIdentityStatus(true);
        return result;
    }
    /**
     * Creates a new zero matrix
     * @returns a new zero matrix
     */ static Zero() {
        const zero = Matrix.FromValues(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        zero._updateIdentityStatus(false);
        return zero;
    }
    /**
     * Creates a new rotation matrix for "angle" radians around the X axis
     * Example Playground - https://playground.babylonjs.com/#AV9X17#97
     * @param angle defines the angle (in radians) to use
     * @returns the new matrix
     */ static RotationX(angle) {
        const result = new Matrix();
        Matrix.RotationXToRef(angle, result);
        return result;
    }
    /**
     * Creates a new matrix as the invert of a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#124
     * @param source defines the source matrix
     * @returns the new matrix
     */ static Invert(source) {
        const result = new Matrix();
        source.invertToRef(result);
        return result;
    }
    /**
     * Creates a new rotation matrix for "angle" radians around the X axis and stores it in a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#98
     * @param angle defines the angle (in radians) to use
     * @param result defines the target matrix
     * @returns result input
     */ static RotationXToRef(angle, result) {
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, c, s, 0.0, 0.0, -s, c, 0.0, 0.0, 0.0, 0.0, 1.0, result);
        result._updateIdentityStatus(c === 1 && s === 0);
        return result;
    }
    /**
     * Creates a new rotation matrix for "angle" radians around the Y axis
     * Example Playground - https://playground.babylonjs.com/#AV9X17#99
     * @param angle defines the angle (in radians) to use
     * @returns the new matrix
     */ static RotationY(angle) {
        const result = new Matrix();
        Matrix.RotationYToRef(angle, result);
        return result;
    }
    /**
     * Creates a new rotation matrix for "angle" radians around the Y axis and stores it in a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#100
     * @param angle defines the angle (in radians) to use
     * @param result defines the target matrix
     * @returns result input
     */ static RotationYToRef(angle, result) {
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        Matrix.FromValuesToRef(c, 0.0, -s, 0.0, 0.0, 1.0, 0.0, 0.0, s, 0.0, c, 0.0, 0.0, 0.0, 0.0, 1.0, result);
        result._updateIdentityStatus(c === 1 && s === 0);
        return result;
    }
    /**
     * Creates a new rotation matrix for "angle" radians around the Z axis
     * Example Playground - https://playground.babylonjs.com/#AV9X17#101
     * @param angle defines the angle (in radians) to use
     * @returns the new matrix
     */ static RotationZ(angle) {
        const result = new Matrix();
        Matrix.RotationZToRef(angle, result);
        return result;
    }
    /**
     * Creates a new rotation matrix for "angle" radians around the Z axis and stores it in a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#102
     * @param angle defines the angle (in radians) to use
     * @param result defines the target matrix
     * @returns result input
     */ static RotationZToRef(angle, result) {
        const s = Math.sin(angle);
        const c = Math.cos(angle);
        Matrix.FromValuesToRef(c, s, 0.0, 0.0, -s, c, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, result);
        result._updateIdentityStatus(c === 1 && s === 0);
        return result;
    }
    /**
     * Creates a new rotation matrix for "angle" radians around the given axis
     * Example Playground - https://playground.babylonjs.com/#AV9X17#96
     * @param axis defines the axis to use
     * @param angle defines the angle (in radians) to use
     * @returns the new matrix
     */ static RotationAxis(axis, angle) {
        const result = new Matrix();
        Matrix.RotationAxisToRef(axis, angle, result);
        return result;
    }
    /**
     * Creates a new rotation matrix for "angle" radians around the given axis and stores it in a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#94
     * @param axis defines the axis to use
     * @param angle defines the angle (in radians) to use
     * @param result defines the target matrix
     * @returns result input
     */ static RotationAxisToRef(axis, angle, result) {
        const s = Math.sin(-angle);
        const c = Math.cos(-angle);
        const c1 = 1 - c;
        axis = axis.normalizeToRef(MathTmp.Vector3[0]);
        const m = result._m;
        m[0] = axis._x * axis._x * c1 + c;
        m[1] = axis._x * axis._y * c1 - axis._z * s;
        m[2] = axis._x * axis._z * c1 + axis._y * s;
        m[3] = 0.0;
        m[4] = axis._y * axis._x * c1 + axis._z * s;
        m[5] = axis._y * axis._y * c1 + c;
        m[6] = axis._y * axis._z * c1 - axis._x * s;
        m[7] = 0.0;
        m[8] = axis._z * axis._x * c1 - axis._y * s;
        m[9] = axis._z * axis._y * c1 + axis._x * s;
        m[10] = axis._z * axis._z * c1 + c;
        m[11] = 0.0;
        m[12] = 0.0;
        m[13] = 0.0;
        m[14] = 0.0;
        m[15] = 1.0;
        result.markAsUpdated();
        return result;
    }
    /**
     * Takes normalised vectors and returns a rotation matrix to align "from" with "to".
     * Taken from http://www.iquilezles.org/www/articles/noacos/noacos.htm
     * Example Playground - https://playground.babylonjs.com/#AV9X17#93
     * @param from defines the vector to align
     * @param to defines the vector to align to
     * @param result defines the target matrix
     * @param useYAxisForCoplanar defines a boolean indicating that we should favor Y axis for coplanar vectors (default is false)
     * @returns result input
     */ static RotationAlignToRef(from, to, result, useYAxisForCoplanar = false) {
        const c = Vector3.Dot(to, from);
        const m = result._m;
        if (c < -1 + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            // from and to are colinear and opposite direction.
            // compute a PI rotation on Y axis
            m[0] = -1;
            m[1] = 0;
            m[2] = 0;
            m[3] = 0;
            m[4] = 0;
            m[5] = useYAxisForCoplanar ? 1 : -1;
            m[6] = 0;
            m[7] = 0;
            m[8] = 0;
            m[9] = 0;
            m[10] = useYAxisForCoplanar ? -1 : 1;
            m[11] = 0;
        } else {
            const v = Vector3.Cross(to, from);
            const k = 1 / (1 + c);
            m[0] = v._x * v._x * k + c;
            m[1] = v._y * v._x * k - v._z;
            m[2] = v._z * v._x * k + v._y;
            m[3] = 0;
            m[4] = v._x * v._y * k + v._z;
            m[5] = v._y * v._y * k + c;
            m[6] = v._z * v._y * k - v._x;
            m[7] = 0;
            m[8] = v._x * v._z * k - v._y;
            m[9] = v._y * v._z * k + v._x;
            m[10] = v._z * v._z * k + c;
            m[11] = 0;
        }
        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        result.markAsUpdated();
        return result;
    }
    /**
     * Creates a rotation matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#103
     * Example Playground - https://playground.babylonjs.com/#AV9X17#105
     * @param yaw defines the yaw angle in radians (Y axis)
     * @param pitch defines the pitch angle in radians (X axis)
     * @param roll defines the roll angle in radians (Z axis)
     * @returns the new rotation matrix
     */ static RotationYawPitchRoll(yaw, pitch, roll) {
        const result = new Matrix();
        Matrix.RotationYawPitchRollToRef(yaw, pitch, roll, result);
        return result;
    }
    /**
     * Creates a rotation matrix and stores it in a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#104
     * @param yaw defines the yaw angle in radians (Y axis)
     * @param pitch defines the pitch angle in radians (X axis)
     * @param roll defines the roll angle in radians (Z axis)
     * @param result defines the target matrix
     * @returns result input
     */ static RotationYawPitchRollToRef(yaw, pitch, roll, result) {
        Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, MathTmp.Quaternion[0]);
        MathTmp.Quaternion[0].toRotationMatrix(result);
        return result;
    }
    /**
     * Creates a scaling matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#107
     * @param x defines the scale factor on X axis
     * @param y defines the scale factor on Y axis
     * @param z defines the scale factor on Z axis
     * @returns the new matrix
     */ static Scaling(x, y, z) {
        const result = new Matrix();
        Matrix.ScalingToRef(x, y, z, result);
        return result;
    }
    /**
     * Creates a scaling matrix and stores it in a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#108
     * @param x defines the scale factor on X axis
     * @param y defines the scale factor on Y axis
     * @param z defines the scale factor on Z axis
     * @param result defines the target matrix
     * @returns result input
     */ static ScalingToRef(x, y, z, result) {
        Matrix.FromValuesToRef(x, 0.0, 0.0, 0.0, 0.0, y, 0.0, 0.0, 0.0, 0.0, z, 0.0, 0.0, 0.0, 0.0, 1.0, result);
        result._updateIdentityStatus(x === 1 && y === 1 && z === 1);
        return result;
    }
    /**
     * Creates a translation matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#109
     * @param x defines the translation on X axis
     * @param y defines the translation on Y axis
     * @param z defines the translationon Z axis
     * @returns the new matrix
     */ static Translation(x, y, z) {
        const result = new Matrix();
        Matrix.TranslationToRef(x, y, z, result);
        return result;
    }
    /**
     * Creates a translation matrix and stores it in a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#110
     * @param x defines the translation on X axis
     * @param y defines the translation on Y axis
     * @param z defines the translationon Z axis
     * @param result defines the target matrix
     * @returns result input
     */ static TranslationToRef(x, y, z, result) {
        Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x, y, z, 1.0, result);
        result._updateIdentityStatus(x === 0 && y === 0 && z === 0);
        return result;
    }
    /**
     * Returns a new Matrix whose values are the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
     * Example Playground - https://playground.babylonjs.com/#AV9X17#55
     * @param startValue defines the start value
     * @param endValue defines the end value
     * @param gradient defines the gradient factor
     * @returns the new matrix
     */ static Lerp(startValue, endValue, gradient) {
        const result = new Matrix();
        Matrix.LerpToRef(startValue, endValue, gradient, result);
        return result;
    }
    /**
     * Set the given matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
     * Example Playground - https://playground.babylonjs.com/#AV9X17#54
     * @param startValue defines the start value
     * @param endValue defines the end value
     * @param gradient defines the gradient factor
     * @param result defines the Matrix object where to store data
     * @returns result input
     */ static LerpToRef(startValue, endValue, gradient, result) {
        const resultM = result._m;
        const startM = startValue.m;
        const endM = endValue.m;
        for(let index = 0; index < 16; index++){
            resultM[index] = startM[index] * (1.0 - gradient) + endM[index] * gradient;
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Builds a new matrix whose values are computed by:
     * * decomposing the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
     * * interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
     * * recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
     * Example Playground - https://playground.babylonjs.com/#AV9X17#22
     * Example Playground - https://playground.babylonjs.com/#AV9X17#51
     * @param startValue defines the first matrix
     * @param endValue defines the second matrix
     * @param gradient defines the gradient between the two matrices
     * @returns the new matrix
     */ static DecomposeLerp(startValue, endValue, gradient) {
        const result = new Matrix();
        Matrix.DecomposeLerpToRef(startValue, endValue, gradient, result);
        return result;
    }
    /**
     * Update a matrix to values which are computed by:
     * * decomposing the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
     * * interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
     * * recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
     * Example Playground - https://playground.babylonjs.com/#AV9X17#23
     * Example Playground - https://playground.babylonjs.com/#AV9X17#53
     * @param startValue defines the first matrix
     * @param endValue defines the second matrix
     * @param gradient defines the gradient between the two matrices
     * @param result defines the target matrix
     * @returns result input
     */ static DecomposeLerpToRef(startValue, endValue, gradient, result) {
        const startScale = MathTmp.Vector3[0];
        const startRotation = MathTmp.Quaternion[0];
        const startTranslation = MathTmp.Vector3[1];
        startValue.decompose(startScale, startRotation, startTranslation);
        const endScale = MathTmp.Vector3[2];
        const endRotation = MathTmp.Quaternion[1];
        const endTranslation = MathTmp.Vector3[3];
        endValue.decompose(endScale, endRotation, endTranslation);
        const resultScale = MathTmp.Vector3[4];
        Vector3.LerpToRef(startScale, endScale, gradient, resultScale);
        const resultRotation = MathTmp.Quaternion[2];
        Quaternion.SlerpToRef(startRotation, endRotation, gradient, resultRotation);
        const resultTranslation = MathTmp.Vector3[5];
        Vector3.LerpToRef(startTranslation, endTranslation, gradient, resultTranslation);
        Matrix.ComposeToRef(resultScale, resultRotation, resultTranslation, result);
        return result;
    }
    /**
     * Creates a new matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
     * This function generates a matrix suitable for a left handed coordinate system
     * Example Playground - https://playground.babylonjs.com/#AV9X17#58
     * Example Playground - https://playground.babylonjs.com/#AV9X17#59
     * @param eye defines the final position of the entity
     * @param target defines where the entity should look at
     * @param up defines the up vector for the entity
     * @returns the new matrix
     */ static LookAtLH(eye, target, up) {
        const result = new Matrix();
        Matrix.LookAtLHToRef(eye, target, up, result);
        return result;
    }
    /**
     * Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
     * This function generates a matrix suitable for a left handed coordinate system
     * Example Playground - https://playground.babylonjs.com/#AV9X17#60
     * Example Playground - https://playground.babylonjs.com/#AV9X17#61
     * @param eye defines the final position of the entity
     * @param target defines where the entity should look at
     * @param up defines the up vector for the entity
     * @param result defines the target matrix
     * @returns result input
     */ static LookAtLHToRef(eye, target, up, result) {
        const xAxis = MathTmp.Vector3[0];
        const yAxis = MathTmp.Vector3[1];
        const zAxis = MathTmp.Vector3[2];
        // Z axis
        target.subtractToRef(eye, zAxis);
        zAxis.normalize();
        // X axis
        Vector3.CrossToRef(up, zAxis, xAxis);
        const xSquareLength = xAxis.lengthSquared();
        if (xSquareLength === 0) {
            xAxis.x = 1.0;
        } else {
            xAxis.normalizeFromLength(Math.sqrt(xSquareLength));
        }
        // Y axis
        Vector3.CrossToRef(zAxis, xAxis, yAxis);
        yAxis.normalize();
        // Eye angles
        const ex = -Vector3.Dot(xAxis, eye);
        const ey = -Vector3.Dot(yAxis, eye);
        const ez = -Vector3.Dot(zAxis, eye);
        Matrix.FromValuesToRef(xAxis._x, yAxis._x, zAxis._x, 0.0, xAxis._y, yAxis._y, zAxis._y, 0.0, xAxis._z, yAxis._z, zAxis._z, 0.0, ex, ey, ez, 1.0, result);
        return result;
    }
    /**
     * Creates a new matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
     * This function generates a matrix suitable for a right handed coordinate system
     * Example Playground - https://playground.babylonjs.com/#AV9X17#62
     * Example Playground - https://playground.babylonjs.com/#AV9X17#63
     * @param eye defines the final position of the entity
     * @param target defines where the entity should look at
     * @param up defines the up vector for the entity
     * @returns the new matrix
     */ static LookAtRH(eye, target, up) {
        const result = new Matrix();
        Matrix.LookAtRHToRef(eye, target, up, result);
        return result;
    }
    /**
     * Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
     * This function generates a matrix suitable for a right handed coordinate system
     * Example Playground - https://playground.babylonjs.com/#AV9X17#64
     * Example Playground - https://playground.babylonjs.com/#AV9X17#65
     * @param eye defines the final position of the entity
     * @param target defines where the entity should look at
     * @param up defines the up vector for the entity
     * @param result defines the target matrix
     * @returns result input
     */ static LookAtRHToRef(eye, target, up, result) {
        const xAxis = MathTmp.Vector3[0];
        const yAxis = MathTmp.Vector3[1];
        const zAxis = MathTmp.Vector3[2];
        // Z axis
        eye.subtractToRef(target, zAxis);
        zAxis.normalize();
        // X axis
        Vector3.CrossToRef(up, zAxis, xAxis);
        const xSquareLength = xAxis.lengthSquared();
        if (xSquareLength === 0) {
            xAxis.x = 1.0;
        } else {
            xAxis.normalizeFromLength(Math.sqrt(xSquareLength));
        }
        // Y axis
        Vector3.CrossToRef(zAxis, xAxis, yAxis);
        yAxis.normalize();
        // Eye angles
        const ex = -Vector3.Dot(xAxis, eye);
        const ey = -Vector3.Dot(yAxis, eye);
        const ez = -Vector3.Dot(zAxis, eye);
        Matrix.FromValuesToRef(xAxis._x, yAxis._x, zAxis._x, 0.0, xAxis._y, yAxis._y, zAxis._y, 0.0, xAxis._z, yAxis._z, zAxis._z, 0.0, ex, ey, ez, 1.0, result);
        return result;
    }
    /**
     * Creates a new matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
     * This function generates a matrix suitable for a left handed coordinate system
     * Example Playground - https://playground.babylonjs.com/#AV9X17#66
     * @param forward defines the forward direction - Must be normalized and orthogonal to up.
     * @param up defines the up vector for the entity - Must be normalized and orthogonal to forward.
     * @returns the new matrix
     */ static LookDirectionLH(forward, up) {
        const result = new Matrix();
        Matrix.LookDirectionLHToRef(forward, up, result);
        return result;
    }
    /**
     * Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
     * This function generates a matrix suitable for a left handed coordinate system
     * Example Playground - https://playground.babylonjs.com/#AV9X17#67
     * @param forward defines the forward direction - Must be normalized and orthogonal to up.
     * @param up defines the up vector for the entity - Must be normalized and orthogonal to forward.
     * @param result defines the target matrix
     * @returns result input
     */ static LookDirectionLHToRef(forward, up, result) {
        const back = MathTmp.Vector3[0];
        back.copyFrom(forward);
        back.scaleInPlace(-1);
        const left = MathTmp.Vector3[1];
        Vector3.CrossToRef(up, back, left);
        // Generate the rotation matrix.
        Matrix.FromValuesToRef(left._x, left._y, left._z, 0.0, up._x, up._y, up._z, 0.0, back._x, back._y, back._z, 0.0, 0, 0, 0, 1.0, result);
        return result;
    }
    /**
     * Creates a new matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
     * This function generates a matrix suitable for a right handed coordinate system
     * Example Playground - https://playground.babylonjs.com/#AV9X17#68
     * @param forward defines the forward direction - Must be normalized and orthogonal to up.
     * @param up defines the up vector for the entity - Must be normalized and orthogonal to forward.
     * @returns the new matrix
     */ static LookDirectionRH(forward, up) {
        const result = new Matrix();
        Matrix.LookDirectionRHToRef(forward, up, result);
        return result;
    }
    /**
     * Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
     * This function generates a matrix suitable for a right handed coordinate system
     * Example Playground - https://playground.babylonjs.com/#AV9X17#69
     * @param forward defines the forward direction - Must be normalized and orthogonal to up.
     * @param up defines the up vector for the entity - Must be normalized and orthogonal to forward.
     * @param result defines the target matrix
     * @returns result input
     */ static LookDirectionRHToRef(forward, up, result) {
        const right = MathTmp.Vector3[2];
        Vector3.CrossToRef(up, forward, right);
        // Generate the rotation matrix.
        Matrix.FromValuesToRef(right._x, right._y, right._z, 0.0, up._x, up._y, up._z, 0.0, forward._x, forward._y, forward._z, 0.0, 0, 0, 0, 1.0, result);
        return result;
    }
    /**
     * Create a left-handed orthographic projection matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#70
     * @param width defines the viewport width
     * @param height defines the viewport height
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @returns a new matrix as a left-handed orthographic projection matrix
     */ static OrthoLH(width, height, znear, zfar, halfZRange) {
        const matrix = new Matrix();
        Matrix.OrthoLHToRef(width, height, znear, zfar, matrix, halfZRange);
        return matrix;
    }
    /**
     * Store a left-handed orthographic projection to a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#71
     * @param width defines the viewport width
     * @param height defines the viewport height
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param result defines the target matrix
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @returns result input
     */ static OrthoLHToRef(width, height, znear, zfar, result, halfZRange) {
        const n = znear;
        const f = zfar;
        const a = 2.0 / width;
        const b = 2.0 / height;
        const c = 2.0 / (f - n);
        const d = -(f + n) / (f - n);
        Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 0.0, 0.0, 0.0, d, 1.0, result);
        if (halfZRange) {
            result.multiplyToRef(mtxConvertNDCToHalfZRange, result);
        }
        result._updateIdentityStatus(a === 1 && b === 1 && c === 1 && d === 0);
        return result;
    }
    /**
     * Create a left-handed orthographic projection matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#72
     * @param left defines the viewport left coordinate
     * @param right defines the viewport right coordinate
     * @param bottom defines the viewport bottom coordinate
     * @param top defines the viewport top coordinate
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @returns a new matrix as a left-handed orthographic projection matrix
     */ static OrthoOffCenterLH(left, right, bottom, top, znear, zfar, halfZRange) {
        const matrix = new Matrix();
        Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, matrix, halfZRange);
        return matrix;
    }
    /**
     * Stores a left-handed orthographic projection into a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#73
     * @param left defines the viewport left coordinate
     * @param right defines the viewport right coordinate
     * @param bottom defines the viewport bottom coordinate
     * @param top defines the viewport top coordinate
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param result defines the target matrix
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @returns result input
     */ static OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result, halfZRange) {
        const n = znear;
        const f = zfar;
        const a = 2.0 / (right - left);
        const b = 2.0 / (top - bottom);
        const c = 2.0 / (f - n);
        const d = -(f + n) / (f - n);
        const i0 = (left + right) / (left - right);
        const i1 = (top + bottom) / (bottom - top);
        Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 0.0, i0, i1, d, 1.0, result);
        if (halfZRange) {
            result.multiplyToRef(mtxConvertNDCToHalfZRange, result);
        }
        result.markAsUpdated();
        return result;
    }
    /**
     * Stores a left-handed oblique projection into a given matrix
     * @param left defines the viewport left coordinate
     * @param right defines the viewport right coordinate
     * @param bottom defines the viewport bottom coordinate
     * @param top defines the viewport top coordinate
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param length Length of the shear
     * @param angle Angle (along X/Y Plane) to apply shear
     * @param distance Distance from shear point
     * @param result defines the target matrix
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @returns result input
     */ static ObliqueOffCenterLHToRef(left, right, bottom, top, znear, zfar, length, angle, distance, result, halfZRange) {
        const a = -length * Math.cos(angle);
        const b = -length * Math.sin(angle);
        Matrix.TranslationToRef(0, 0, -distance, MathTmp.Matrix[1]);
        Matrix.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, a, b, 1, 0, 0, 0, 0, 1, MathTmp.Matrix[0]);
        MathTmp.Matrix[1].multiplyToRef(MathTmp.Matrix[0], MathTmp.Matrix[0]);
        Matrix.TranslationToRef(0, 0, distance, MathTmp.Matrix[1]);
        MathTmp.Matrix[0].multiplyToRef(MathTmp.Matrix[1], MathTmp.Matrix[0]);
        Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result, halfZRange);
        MathTmp.Matrix[0].multiplyToRef(result, result);
        return result;
    }
    /**
     * Creates a right-handed orthographic projection matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#76
     * @param left defines the viewport left coordinate
     * @param right defines the viewport right coordinate
     * @param bottom defines the viewport bottom coordinate
     * @param top defines the viewport top coordinate
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @returns a new matrix as a right-handed orthographic projection matrix
     */ static OrthoOffCenterRH(left, right, bottom, top, znear, zfar, halfZRange) {
        const matrix = new Matrix();
        Matrix.OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, matrix, halfZRange);
        return matrix;
    }
    /**
     * Stores a right-handed orthographic projection into a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#77
     * @param left defines the viewport left coordinate
     * @param right defines the viewport right coordinate
     * @param bottom defines the viewport bottom coordinate
     * @param top defines the viewport top coordinate
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param result defines the target matrix
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @returns result input
     */ static OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, result, halfZRange) {
        Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result, halfZRange);
        result._m[10] *= -1; // No need to call markAsUpdated as previous function already called it and let _isIdentityDirty to true
        return result;
    }
    /**
     * Stores a right-handed oblique projection into a given matrix
     * @param left defines the viewport left coordinate
     * @param right defines the viewport right coordinate
     * @param bottom defines the viewport bottom coordinate
     * @param top defines the viewport top coordinate
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param length Length of the shear
     * @param angle Angle (along X/Y Plane) to apply shear
     * @param distance Distance from shear point
     * @param result defines the target matrix
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @returns result input
     */ static ObliqueOffCenterRHToRef(left, right, bottom, top, znear, zfar, length, angle, distance, result, halfZRange) {
        const a = length * Math.cos(angle);
        const b = length * Math.sin(angle);
        Matrix.TranslationToRef(0, 0, distance, MathTmp.Matrix[1]);
        Matrix.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, a, b, 1, 0, 0, 0, 0, 1, MathTmp.Matrix[0]);
        MathTmp.Matrix[1].multiplyToRef(MathTmp.Matrix[0], MathTmp.Matrix[0]);
        Matrix.TranslationToRef(0, 0, -distance, MathTmp.Matrix[1]);
        MathTmp.Matrix[0].multiplyToRef(MathTmp.Matrix[1], MathTmp.Matrix[0]);
        Matrix.OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, result, halfZRange);
        MathTmp.Matrix[0].multiplyToRef(result, result);
        return result;
    }
    /**
     * Creates a left-handed perspective projection matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#85
     * @param width defines the viewport width
     * @param height defines the viewport height
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @param projectionPlaneTilt optional tilt angle of the projection plane around the X axis (horizontal)
     * @returns a new matrix as a left-handed perspective projection matrix
     */ static PerspectiveLH(width, height, znear, zfar, halfZRange, projectionPlaneTilt = 0) {
        const matrix = new Matrix();
        const n = znear;
        const f = zfar;
        const a = 2.0 * n / width;
        const b = 2.0 * n / height;
        const c = (f + n) / (f - n);
        const d = -2.0 * f * n / (f - n);
        const rot = Math.tan(projectionPlaneTilt);
        Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, rot, 0.0, 0.0, c, 1.0, 0.0, 0.0, d, 0.0, matrix);
        if (halfZRange) {
            matrix.multiplyToRef(mtxConvertNDCToHalfZRange, matrix);
        }
        matrix._updateIdentityStatus(false);
        return matrix;
    }
    /**
     * Creates a left-handed perspective projection matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#78
     * @param fov defines the horizontal field of view
     * @param aspect defines the aspect ratio
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane. If 0, assume we are in "infinite zfar" mode
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @param projectionPlaneTilt optional tilt angle of the projection plane around the X axis (horizontal)
     * @param reverseDepthBufferMode true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function)
     * @returns a new matrix as a left-handed perspective projection matrix
     */ static PerspectiveFovLH(fov, aspect, znear, zfar, halfZRange, projectionPlaneTilt = 0, reverseDepthBufferMode = false) {
        const matrix = new Matrix();
        Matrix.PerspectiveFovLHToRef(fov, aspect, znear, zfar, matrix, true, halfZRange, projectionPlaneTilt, reverseDepthBufferMode);
        return matrix;
    }
    /**
     * Stores a left-handed perspective projection into a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#81
     * @param fov defines the horizontal field of view
     * @param aspect defines the aspect ratio
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane. If 0, assume we are in "infinite zfar" mode
     * @param result defines the target matrix
     * @param isVerticalFovFixed defines it the fov is vertically fixed (default) or horizontally
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @param projectionPlaneTilt optional tilt angle of the projection plane around the X axis (horizontal)
     * @param reverseDepthBufferMode true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function)
     * @returns result input
     */ static PerspectiveFovLHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed = true, halfZRange, projectionPlaneTilt = 0, reverseDepthBufferMode = false) {
        const n = znear;
        const f = zfar;
        const t = 1.0 / Math.tan(fov * 0.5);
        const a = isVerticalFovFixed ? t / aspect : t;
        const b = isVerticalFovFixed ? t : t * aspect;
        const c = reverseDepthBufferMode && n === 0 ? -1 : f !== 0 ? (f + n) / (f - n) : 1;
        const d = reverseDepthBufferMode && n === 0 ? 2 * f : f !== 0 ? -2.0 * f * n / (f - n) : -2 * n;
        const rot = Math.tan(projectionPlaneTilt);
        Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, rot, 0.0, 0.0, c, 1.0, 0.0, 0.0, d, 0.0, result);
        if (halfZRange) {
            result.multiplyToRef(mtxConvertNDCToHalfZRange, result);
        }
        result._updateIdentityStatus(false);
        return result;
    }
    /**
     * Stores a left-handed perspective projection into a given matrix with depth reversed
     * Example Playground - https://playground.babylonjs.com/#AV9X17#89
     * @param fov defines the horizontal field of view
     * @param aspect defines the aspect ratio
     * @param znear defines the near clip plane
     * @param zfar not used as infinity is used as far clip
     * @param result defines the target matrix
     * @param isVerticalFovFixed defines it the fov is vertically fixed (default) or horizontally
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @param projectionPlaneTilt optional tilt angle of the projection plane around the X axis (horizontal)
     * @returns result input
     */ static PerspectiveFovReverseLHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed = true, halfZRange, projectionPlaneTilt = 0) {
        const t = 1.0 / Math.tan(fov * 0.5);
        const a = isVerticalFovFixed ? t / aspect : t;
        const b = isVerticalFovFixed ? t : t * aspect;
        const rot = Math.tan(projectionPlaneTilt);
        Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, rot, 0.0, 0.0, -znear, 1.0, 0.0, 0.0, 1.0, 0.0, result);
        if (halfZRange) {
            result.multiplyToRef(mtxConvertNDCToHalfZRange, result);
        }
        result._updateIdentityStatus(false);
        return result;
    }
    /**
     * Creates a right-handed perspective projection matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#83
     * @param fov defines the horizontal field of view
     * @param aspect defines the aspect ratio
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane. If 0, assume we are in "infinite zfar" mode
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @param projectionPlaneTilt optional tilt angle of the projection plane around the X axis (horizontal)
     * @param reverseDepthBufferMode true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function)
     * @returns a new matrix as a right-handed perspective projection matrix
     */ static PerspectiveFovRH(fov, aspect, znear, zfar, halfZRange, projectionPlaneTilt = 0, reverseDepthBufferMode = false) {
        const matrix = new Matrix();
        Matrix.PerspectiveFovRHToRef(fov, aspect, znear, zfar, matrix, true, halfZRange, projectionPlaneTilt, reverseDepthBufferMode);
        return matrix;
    }
    /**
     * Stores a right-handed perspective projection into a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#84
     * @param fov defines the horizontal field of view
     * @param aspect defines the aspect ratio
     * @param znear defines the near clip plane
     * @param zfar defines the far clip plane. If 0, assume we are in "infinite zfar" mode
     * @param result defines the target matrix
     * @param isVerticalFovFixed defines it the fov is vertically fixed (default) or horizontally
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @param projectionPlaneTilt optional tilt angle of the projection plane around the X axis (horizontal)
     * @param reverseDepthBufferMode true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function)
     * @returns result input
     */ static PerspectiveFovRHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed = true, halfZRange, projectionPlaneTilt = 0, reverseDepthBufferMode = false) {
        //alternatively this could be expressed as:
        //    m = PerspectiveFovLHToRef
        //    m[10] *= -1.0;
        //    m[11] *= -1.0;
        const n = znear;
        const f = zfar;
        const t = 1.0 / Math.tan(fov * 0.5);
        const a = isVerticalFovFixed ? t / aspect : t;
        const b = isVerticalFovFixed ? t : t * aspect;
        const c = reverseDepthBufferMode && n === 0 ? 1 : f !== 0 ? -(f + n) / (f - n) : -1;
        const d = reverseDepthBufferMode && n === 0 ? 2 * f : f !== 0 ? -2 * f * n / (f - n) : -2 * n;
        const rot = Math.tan(projectionPlaneTilt);
        Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, rot, 0.0, 0.0, c, -1.0, 0.0, 0.0, d, 0.0, result);
        if (halfZRange) {
            result.multiplyToRef(mtxConvertNDCToHalfZRange, result);
        }
        result._updateIdentityStatus(false);
        return result;
    }
    /**
     * Stores a right-handed perspective projection into a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#90
     * @param fov defines the horizontal field of view
     * @param aspect defines the aspect ratio
     * @param znear defines the near clip plane
     * @param zfar not used as infinity is used as far clip
     * @param result defines the target matrix
     * @param isVerticalFovFixed defines it the fov is vertically fixed (default) or horizontally
     * @param halfZRange true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)
     * @param projectionPlaneTilt optional tilt angle of the projection plane around the X axis (horizontal)
     * @returns result input
     */ static PerspectiveFovReverseRHToRef(fov, aspect, znear, zfar, result, isVerticalFovFixed = true, halfZRange, projectionPlaneTilt = 0) {
        const t = 1.0 / Math.tan(fov * 0.5);
        const a = isVerticalFovFixed ? t / aspect : t;
        const b = isVerticalFovFixed ? t : t * aspect;
        const rot = Math.tan(projectionPlaneTilt);
        Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, rot, 0.0, 0.0, -znear, -1.0, 0.0, 0.0, -1.0, 0.0, result);
        if (halfZRange) {
            result.multiplyToRef(mtxConvertNDCToHalfZRange, result);
        }
        result._updateIdentityStatus(false);
        return result;
    }
    /**
     * Computes a complete transformation matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#113
     * @param viewport defines the viewport to use
     * @param world defines the world matrix
     * @param view defines the view matrix
     * @param projection defines the projection matrix
     * @param zmin defines the near clip plane
     * @param zmax defines the far clip plane
     * @returns the transformation matrix
     */ static GetFinalMatrix(viewport, world, view, projection, zmin, zmax) {
        const cw = viewport.width;
        const ch = viewport.height;
        const cx = viewport.x;
        const cy = viewport.y;
        const viewportMatrix = Matrix.FromValues(cw / 2.0, 0.0, 0.0, 0.0, 0.0, -ch / 2.0, 0.0, 0.0, 0.0, 0.0, zmax - zmin, 0.0, cx + cw / 2.0, ch / 2.0 + cy, zmin, 1.0);
        const matrix = new Matrix();
        world.multiplyToRef(view, matrix);
        matrix.multiplyToRef(projection, matrix);
        return matrix.multiplyToRef(viewportMatrix, matrix);
    }
    /**
     * Extracts a 2x2 matrix from a given matrix and store the result in a Float32Array
     * @param matrix defines the matrix to use
     * @returns a new Float32Array array with 4 elements : the 2x2 matrix extracted from the given matrix
     */ static GetAsMatrix2x2(matrix) {
        const m = matrix.m;
        const arr = [
            m[0],
            m[1],
            m[4],
            m[5]
        ];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceConfigurator"].MatrixUse64Bits ? arr : new Float32Array(arr);
    }
    /**
     * Extracts a 3x3 matrix from a given matrix and store the result in a Float32Array
     * @param matrix defines the matrix to use
     * @returns a new Float32Array array with 9 elements : the 3x3 matrix extracted from the given matrix
     */ static GetAsMatrix3x3(matrix) {
        const m = matrix.m;
        const arr = [
            m[0],
            m[1],
            m[2],
            m[4],
            m[5],
            m[6],
            m[8],
            m[9],
            m[10]
        ];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceConfigurator"].MatrixUse64Bits ? arr : new Float32Array(arr);
    }
    /**
     * Compute the transpose of a given matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#111
     * @param matrix defines the matrix to transpose
     * @returns the new matrix
     */ static Transpose(matrix) {
        const result = new Matrix();
        Matrix.TransposeToRef(matrix, result);
        return result;
    }
    /**
     * Compute the transpose of a matrix and store it in a target matrix
     * Example Playground - https://playground.babylonjs.com/#AV9X17#112
     * @param matrix defines the matrix to transpose
     * @param result defines the target matrix
     * @returns result input
     */ static TransposeToRef(matrix, result) {
        const mm = matrix.m;
        const rm0 = mm[0];
        const rm1 = mm[4];
        const rm2 = mm[8];
        const rm3 = mm[12];
        const rm4 = mm[1];
        const rm5 = mm[5];
        const rm6 = mm[9];
        const rm7 = mm[13];
        const rm8 = mm[2];
        const rm9 = mm[6];
        const rm10 = mm[10];
        const rm11 = mm[14];
        const rm12 = mm[3];
        const rm13 = mm[7];
        const rm14 = mm[11];
        const rm15 = mm[15];
        const rm = result._m;
        rm[0] = rm0;
        rm[1] = rm1;
        rm[2] = rm2;
        rm[3] = rm3;
        rm[4] = rm4;
        rm[5] = rm5;
        rm[6] = rm6;
        rm[7] = rm7;
        rm[8] = rm8;
        rm[9] = rm9;
        rm[10] = rm10;
        rm[11] = rm11;
        rm[12] = rm12;
        rm[13] = rm13;
        rm[14] = rm14;
        rm[15] = rm15;
        result.markAsUpdated();
        // identity-ness does not change when transposing
        result._updateIdentityStatus(matrix._isIdentity, matrix._isIdentityDirty);
        return result;
    }
    /**
     * Computes a reflection matrix from a plane
     * Example Playground - https://playground.babylonjs.com/#AV9X17#87
     * @param plane defines the reflection plane
     * @returns a new matrix
     */ static Reflection(plane) {
        const matrix = new Matrix();
        Matrix.ReflectionToRef(plane, matrix);
        return matrix;
    }
    /**
     * Computes a reflection matrix from a plane
     * Example Playground - https://playground.babylonjs.com/#AV9X17#88
     * @param plane defines the reflection plane
     * @param result defines the target matrix
     * @returns result input
     */ static ReflectionToRef(plane, result) {
        plane.normalize();
        const x = plane.normal.x;
        const y = plane.normal.y;
        const z = plane.normal.z;
        const temp = -2 * x;
        const temp2 = -2 * y;
        const temp3 = -2 * z;
        Matrix.FromValuesToRef(temp * x + 1, temp2 * x, temp3 * x, 0.0, temp * y, temp2 * y + 1, temp3 * y, 0.0, temp * z, temp2 * z, temp3 * z + 1, 0.0, temp * plane.d, temp2 * plane.d, temp3 * plane.d, 1.0, result);
        return result;
    }
    /**
     * Sets the given matrix as a rotation matrix composed from the 3 left handed axes
     * @param xaxis defines the value of the 1st axis
     * @param yaxis defines the value of the 2nd axis
     * @param zaxis defines the value of the 3rd axis
     * @param result defines the target matrix
     * @returns result input
     */ static FromXYZAxesToRef(xaxis, yaxis, zaxis, result) {
        Matrix.FromValuesToRef(xaxis._x, xaxis._y, xaxis._z, 0.0, yaxis._x, yaxis._y, yaxis._z, 0.0, zaxis._x, zaxis._y, zaxis._z, 0.0, 0.0, 0.0, 0.0, 1.0, result);
        return result;
    }
    /**
     * Creates a rotation matrix from a quaternion and stores it in a target matrix
     * @param quat defines the quaternion to use
     * @param result defines the target matrix
     * @returns result input
     */ static FromQuaternionToRef(quat, result) {
        const xx = quat._x * quat._x;
        const yy = quat._y * quat._y;
        const zz = quat._z * quat._z;
        const xy = quat._x * quat._y;
        const zw = quat._z * quat._w;
        const zx = quat._z * quat._x;
        const yw = quat._y * quat._w;
        const yz = quat._y * quat._z;
        const xw = quat._x * quat._w;
        result._m[0] = 1.0 - 2.0 * (yy + zz);
        result._m[1] = 2.0 * (xy + zw);
        result._m[2] = 2.0 * (zx - yw);
        result._m[3] = 0.0;
        result._m[4] = 2.0 * (xy - zw);
        result._m[5] = 1.0 - 2.0 * (zz + xx);
        result._m[6] = 2.0 * (yz + xw);
        result._m[7] = 0.0;
        result._m[8] = 2.0 * (zx + yw);
        result._m[9] = 2.0 * (yz - xw);
        result._m[10] = 1.0 - 2.0 * (yy + xx);
        result._m[11] = 0.0;
        result._m[12] = 0.0;
        result._m[13] = 0.0;
        result._m[14] = 0.0;
        result._m[15] = 1.0;
        result.markAsUpdated();
        return result;
    }
}
Matrix._IdentityReadOnly = Matrix.Identity();
Object.defineProperties(Matrix.prototype, {
    dimension: {
        value: [
            4,
            4
        ]
    },
    rank: {
        value: 2
    }
});
/**
 * @internal
 * Same as Tmp but not exported to keep it only for math functions to avoid conflicts
 */ class MathTmp {
}
// Temporary Vector3s
MathTmp.Vector3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildTuple"])(11, Vector3.Zero);
// Temporary Matricies
MathTmp.Matrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildTuple"])(2, Matrix.Identity);
// Temporary Quaternions
MathTmp.Quaternion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildTuple"])(3, Quaternion.Zero);
class TmpVectors {
}
/** 3 temp Vector2 at once should be enough */ TmpVectors.Vector2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildTuple"])(3, Vector2.Zero);
/** 13 temp Vector3 at once should be enough */ TmpVectors.Vector3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildTuple"])(13, Vector3.Zero);
/** 3 temp Vector4 at once should be enough */ TmpVectors.Vector4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildTuple"])(3, Vector4.Zero);
/** 3 temp Quaternion at once should be enough */ TmpVectors.Quaternion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildTuple"])(3, Quaternion.Zero);
/** 8 temp Matrices at once should be enough */ TmpVectors.Matrix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildTuple"])(8, Matrix.Identity);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Vector2", Vector2);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Vector3", Vector3);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Vector4", Vector4);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Matrix", Matrix);
const mtxConvertNDCToHalfZRange = Matrix.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0.5, 0, 0, 0, 0.5, 1); //# sourceMappingURL=math.vector.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Color3",
    ()=>Color3,
    "Color4",
    ()=>Color4,
    "TmpColors",
    ()=>TmpColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/arrayTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
;
;
;
;
function ColorChannelToLinearSpace(color) {
    return Math.pow(color, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToLinearSpace"]);
}
function ColorChannelToLinearSpaceExact(color) {
    if (color <= 0.04045) {
        return 0.0773993808 * color;
    }
    return Math.pow(0.947867299 * (color + 0.055), 2.4);
}
function ColorChannelToGammaSpace(color) {
    return Math.pow(color, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToGammaSpace"]);
}
function ColorChannelToGammaSpaceExact(color) {
    if (color <= 0.0031308) {
        return 12.92 * color;
    }
    return 1.055 * Math.pow(color, 0.41666) - 0.055;
}
class Color3 {
    /**
     * Creates a new Color3 object from red, green, blue values, all between 0 and 1
     * @param r defines the red component (between 0 and 1, default is 0)
     * @param g defines the green component (between 0 and 1, default is 0)
     * @param b defines the blue component (between 0 and 1, default is 0)
     */ constructor(/**
     * [0] Defines the red component (between 0 and 1, default is 0)
     */ r = 0, /**
     * [0] Defines the green component (between 0 and 1, default is 0)
     */ g = 0, /**
     * [0] Defines the blue component (between 0 and 1, default is 0)
     */ b = 0){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    /**
     * Creates a string with the Color3 current values
     * @returns the string representation of the Color3 object
     */ toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}";
    }
    /**
     * Returns the string "Color3"
     * @returns "Color3"
     */ getClassName() {
        return "Color3";
    }
    /**
     * Compute the Color3 hash code
     * @returns an unique number that can be used to hash Color3 objects
     */ getHashCode() {
        let hash = this.r * 255 | 0;
        hash = hash * 397 ^ (this.g * 255 | 0);
        hash = hash * 397 ^ (this.b * 255 | 0);
        return hash;
    }
    // Operators
    /**
     * Stores in the given array from the given starting index the red, green, blue values as successive elements
     * @param array defines the array where to store the r,g,b components
     * @param index defines an optional index in the target array to define where to start storing values
     * @returns the current Color3 object
     */ toArray(array, index = 0) {
        array[index] = this.r;
        array[index + 1] = this.g;
        array[index + 2] = this.b;
        return this;
    }
    /**
     * Update the current color with values stored in an array from the starting index of the given array
     * @param array defines the source array
     * @param offset defines an offset in the source array
     * @returns the current Color3 object
     */ fromArray(array, offset = 0) {
        Color3.FromArrayToRef(array, offset, this);
        return this;
    }
    /**
     * Returns a new Color4 object from the current Color3 and the given alpha
     * @param alpha defines the alpha component on the new Color4 object (default is 1)
     * @returns a new Color4 object
     */ toColor4(alpha = 1) {
        return new Color4(this.r, this.g, this.b, alpha);
    }
    /**
     * Returns a new array populated with 3 numeric elements : red, green and blue values
     * @returns the new array
     */ asArray() {
        return [
            this.r,
            this.g,
            this.b
        ];
    }
    /**
     * Returns the luminance value
     * @returns a float value
     */ toLuminance() {
        return this.r * 0.3 + this.g * 0.59 + this.b * 0.11;
    }
    /**
     * Multiply each Color3 rgb values by the given Color3 rgb values in a new Color3 object
     * @param otherColor defines the second operand
     * @returns the new Color3 object
     */ multiply(otherColor) {
        return new Color3(this.r * otherColor.r, this.g * otherColor.g, this.b * otherColor.b);
    }
    /**
     * Multiply the rgb values of the Color3 and the given Color3 and stores the result in the object "result"
     * @param otherColor defines the second operand
     * @param result defines the Color3 object where to store the result
     * @returns the result Color3
     */ multiplyToRef(otherColor, result) {
        result.r = this.r * otherColor.r;
        result.g = this.g * otherColor.g;
        result.b = this.b * otherColor.b;
        return result;
    }
    /**
     * Multiplies the current Color3 coordinates by the given ones
     * @param otherColor defines the second operand
     * @returns the current updated Color3
     */ multiplyInPlace(otherColor) {
        this.r *= otherColor.r;
        this.g *= otherColor.g;
        this.b *= otherColor.b;
        return this;
    }
    /**
     * Returns a new Color3 set with the result of the multiplication of the current Color3 coordinates by the given floats
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @returns the new Color3
     */ multiplyByFloats(r, g, b) {
        return new Color3(this.r * r, this.g * g, this.b * b);
    }
    /**
     * @internal
     * Do not use
     */ divide(_other) {
        throw new ReferenceError("Can not divide a color");
    }
    /**
     * @internal
     * Do not use
     */ divideToRef(_other, _result) {
        throw new ReferenceError("Can not divide a color");
    }
    /**
     * @internal
     * Do not use
     */ divideInPlace(_other) {
        throw new ReferenceError("Can not divide a color");
    }
    /**
     * Updates the current Color3 with the minimal coordinate values between its and the given color ones
     * @param other defines the second operand
     * @returns the current updated Color3
     */ minimizeInPlace(other) {
        return this.minimizeInPlaceFromFloats(other.r, other.g, other.b);
    }
    /**
     * Updates the current Color3 with the maximal coordinate values between its and the given color ones.
     * @param other defines the second operand
     * @returns the current updated Color3
     */ maximizeInPlace(other) {
        return this.maximizeInPlaceFromFloats(other.r, other.g, other.b);
    }
    /**
     * Updates the current Color3 with the minimal coordinate values between its and the given coordinates
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @returns the current updated Color3
     */ minimizeInPlaceFromFloats(r, g, b) {
        this.r = Math.min(r, this.r);
        this.g = Math.min(g, this.g);
        this.b = Math.min(b, this.b);
        return this;
    }
    /**
     * Updates the current Color3 with the maximal coordinate values between its and the given coordinates.
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @returns the current updated Color3
     */ maximizeInPlaceFromFloats(r, g, b) {
        this.r = Math.max(r, this.r);
        this.g = Math.max(g, this.g);
        this.b = Math.max(b, this.b);
        return this;
    }
    /**
     * @internal
     * Do not use
     */ floorToRef(_result) {
        throw new ReferenceError("Can not floor a color");
    }
    /**
     * @internal
     * Do not use
     */ floor() {
        throw new ReferenceError("Can not floor a color");
    }
    /**
     * @internal
     * Do not use
     */ fractToRef(_result) {
        throw new ReferenceError("Can not fract a color");
    }
    /**
     * @internal
     * Do not use
     */ fract() {
        throw new ReferenceError("Can not fract a color");
    }
    /**
     * Determines equality between Color3 objects
     * @param otherColor defines the second operand
     * @returns true if the rgb values are equal to the given ones
     */ equals(otherColor) {
        return otherColor && this.r === otherColor.r && this.g === otherColor.g && this.b === otherColor.b;
    }
    /**
     * Alias for equalsToFloats
     * @param r red color component
     * @param g green color component
     * @param b blue color component
     * @returns boolean
     */ equalsFloats(r, g, b) {
        return this.equalsToFloats(r, g, b);
    }
    /**
     * Determines equality between the current Color3 object and a set of r,b,g values
     * @param r defines the red component to check
     * @param g defines the green component to check
     * @param b defines the blue component to check
     * @returns true if the rgb values are equal to the given ones
     */ equalsToFloats(r, g, b) {
        return this.r === r && this.g === g && this.b === b;
    }
    /**
     * Returns true if the current Color3 and the given color coordinates are distant less than epsilon
     * @param otherColor defines the second operand
     * @param epsilon defines the minimal distance to define values as equals
     * @returns true if both colors are distant less than epsilon
     */ equalsWithEpsilon(otherColor, epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.r, otherColor.r, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.g, otherColor.g, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.b, otherColor.b, epsilon);
    }
    /**
     * @internal
     * Do not use
     */ negate() {
        throw new ReferenceError("Can not negate a color");
    }
    /**
     * @internal
     * Do not use
     */ negateInPlace() {
        throw new ReferenceError("Can not negate a color");
    }
    /**
     * @internal
     * Do not use
     */ negateToRef(_result) {
        throw new ReferenceError("Can not negate a color");
    }
    /**
     * Creates a new Color3 with the current Color3 values multiplied by scale
     * @param scale defines the scaling factor to apply
     * @returns a new Color3 object
     */ scale(scale) {
        return new Color3(this.r * scale, this.g * scale, this.b * scale);
    }
    /**
     * Multiplies the Color3 values by the float "scale"
     * @param scale defines the scaling factor to apply
     * @returns the current updated Color3
     */ scaleInPlace(scale) {
        this.r *= scale;
        this.g *= scale;
        this.b *= scale;
        return this;
    }
    /**
     * Multiplies the rgb values by scale and stores the result into "result"
     * @param scale defines the scaling factor
     * @param result defines the Color3 object where to store the result
     * @returns the result Color3
     */ scaleToRef(scale, result) {
        result.r = this.r * scale;
        result.g = this.g * scale;
        result.b = this.b * scale;
        return result;
    }
    /**
     * Scale the current Color3 values by a factor and add the result to a given Color3
     * @param scale defines the scale factor
     * @param result defines color to store the result into
     * @returns the result Color3
     */ scaleAndAddToRef(scale, result) {
        result.r += this.r * scale;
        result.g += this.g * scale;
        result.b += this.b * scale;
        return result;
    }
    /**
     * Clamps the rgb values by the min and max values and stores the result into "result"
     * @param min defines minimum clamping value (default is 0)
     * @param max defines maximum clamping value (default is 1)
     * @param result defines color to store the result into
     * @returns the result Color3
     */ clampToRef(min = 0, max = 1, result) {
        result.r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this.r, min, max);
        result.g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this.g, min, max);
        result.b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this.b, min, max);
        return result;
    }
    /**
     * Creates a new Color3 set with the added values of the current Color3 and of the given one
     * @param otherColor defines the second operand
     * @returns the new Color3
     */ add(otherColor) {
        return new Color3(this.r + otherColor.r, this.g + otherColor.g, this.b + otherColor.b);
    }
    /**
     * Adds the given color to the current Color3
     * @param otherColor defines the second operand
     * @returns the current updated Color3
     */ addInPlace(otherColor) {
        this.r += otherColor.r;
        this.g += otherColor.g;
        this.b += otherColor.b;
        return this;
    }
    /**
     * Adds the given coordinates to the current Color3
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @returns the current updated Color3
     */ addInPlaceFromFloats(r, g, b) {
        this.r += r;
        this.g += g;
        this.b += b;
        return this;
    }
    /**
     * Stores the result of the addition of the current Color3 and given one rgb values into "result"
     * @param otherColor defines the second operand
     * @param result defines Color3 object to store the result into
     * @returns the unmodified current Color3
     */ addToRef(otherColor, result) {
        result.r = this.r + otherColor.r;
        result.g = this.g + otherColor.g;
        result.b = this.b + otherColor.b;
        return result;
    }
    /**
     * Returns a new Color3 set with the subtracted values of the given one from the current Color3
     * @param otherColor defines the second operand
     * @returns the new Color3
     */ subtract(otherColor) {
        return new Color3(this.r - otherColor.r, this.g - otherColor.g, this.b - otherColor.b);
    }
    /**
     * Stores the result of the subtraction of given one from the current Color3 rgb values into "result"
     * @param otherColor defines the second operand
     * @param result defines Color3 object to store the result into
     * @returns the unmodified current Color3
     */ subtractToRef(otherColor, result) {
        result.r = this.r - otherColor.r;
        result.g = this.g - otherColor.g;
        result.b = this.b - otherColor.b;
        return result;
    }
    /**
     * Subtract the given color from the current Color3
     * @param otherColor defines the second operand
     * @returns the current updated Color3
     */ subtractInPlace(otherColor) {
        this.r -= otherColor.r;
        this.g -= otherColor.g;
        this.b -= otherColor.b;
        return this;
    }
    /**
     * Returns a new Color3 set with the subtraction of the given floats from the current Color3 coordinates
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @returns the resulting Color3
     */ subtractFromFloats(r, g, b) {
        return new Color3(this.r - r, this.g - g, this.b - b);
    }
    /**
     * Subtracts the given floats from the current Color3 coordinates and set the given color "result" with this result
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @param result defines the Color3 object where to store the result
     * @returns the result
     */ subtractFromFloatsToRef(r, g, b, result) {
        result.r = this.r - r;
        result.g = this.g - g;
        result.b = this.b - b;
        return result;
    }
    /**
     * Copy the current object
     * @returns a new Color3 copied the current one
     */ clone() {
        return new Color3(this.r, this.g, this.b);
    }
    /**
     * Copies the rgb values from the source in the current Color3
     * @param source defines the source Color3 object
     * @returns the updated Color3 object
     */ copyFrom(source) {
        this.r = source.r;
        this.g = source.g;
        this.b = source.b;
        return this;
    }
    /**
     * Updates the Color3 rgb values from the given floats
     * @param r defines the red component to read from
     * @param g defines the green component to read from
     * @param b defines the blue component to read from
     * @returns the current Color3 object
     */ copyFromFloats(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }
    /**
     * Updates the Color3 rgb values from the given floats
     * @param r defines the red component to read from
     * @param g defines the green component to read from
     * @param b defines the blue component to read from
     * @returns the current Color3 object
     */ set(r, g, b) {
        return this.copyFromFloats(r, g, b);
    }
    /**
     * Copies the given float to the current Color3 coordinates
     * @param v defines the r, g and b coordinates of the operand
     * @returns the current updated Color3
     */ setAll(v) {
        this.r = this.g = this.b = v;
        return this;
    }
    /**
     * Compute the Color3 hexadecimal code as a string
     * @returns a string containing the hexadecimal representation of the Color3 object
     */ toHexString() {
        const intR = Math.round(this.r * 255);
        const intG = Math.round(this.g * 255);
        const intB = Math.round(this.b * 255);
        return "#" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intR) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intG) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intB);
    }
    /**
     * Updates the Color3 rgb values from the string containing valid hexadecimal values
     * @param hex defines a string containing valid hexadecimal values
     * @returns the current Color3 object
     */ fromHexString(hex) {
        if (hex.substring(0, 1) !== "#" || hex.length !== 7) {
            return this;
        }
        this.r = parseInt(hex.substring(1, 3), 16) / 255;
        this.g = parseInt(hex.substring(3, 5), 16) / 255;
        this.b = parseInt(hex.substring(5, 7), 16) / 255;
        return this;
    }
    /**
     * Converts current color in rgb space to HSV values
     * @returns a new color3 representing the HSV values
     */ toHSV() {
        return this.toHSVToRef(new Color3());
    }
    /**
     * Converts current color in rgb space to HSV values
     * @param result defines the Color3 where to store the HSV values
     * @returns the updated result
     */ toHSVToRef(result) {
        const r = this.r;
        const g = this.g;
        const b = this.b;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        const v = max;
        const dm = max - min;
        if (max !== 0) {
            s = dm / max;
        }
        if (max != min) {
            if (max == r) {
                h = (g - b) / dm;
                if (g < b) {
                    h += 6;
                }
            } else if (max == g) {
                h = (b - r) / dm + 2;
            } else if (max == b) {
                h = (r - g) / dm + 4;
            }
            h *= 60;
        }
        result.r = h;
        result.g = s;
        result.b = v;
        return result;
    }
    /**
     * Computes a new Color3 converted from the current one to linear space
     * @param exact defines if the conversion will be done in an exact way which is slower but more accurate (default is false)
     * @returns a new Color3 object
     */ toLinearSpace(exact = false) {
        const convertedColor = new Color3();
        this.toLinearSpaceToRef(convertedColor, exact);
        return convertedColor;
    }
    /**
     * Converts the Color3 values to linear space and stores the result in "convertedColor"
     * @param convertedColor defines the Color3 object where to store the linear space version
     * @param exact defines if the conversion will be done in an exact way which is slower but more accurate (default is false)
     * @returns the unmodified Color3
     */ toLinearSpaceToRef(convertedColor, exact = false) {
        if (exact) {
            convertedColor.r = ColorChannelToLinearSpaceExact(this.r);
            convertedColor.g = ColorChannelToLinearSpaceExact(this.g);
            convertedColor.b = ColorChannelToLinearSpaceExact(this.b);
        } else {
            convertedColor.r = ColorChannelToLinearSpace(this.r);
            convertedColor.g = ColorChannelToLinearSpace(this.g);
            convertedColor.b = ColorChannelToLinearSpace(this.b);
        }
        return this;
    }
    /**
     * Computes a new Color3 converted from the current one to gamma space
     * @param exact defines if the conversion will be done in an exact way which is slower but more accurate (default is false)
     * @returns a new Color3 object
     */ toGammaSpace(exact = false) {
        const convertedColor = new Color3();
        this.toGammaSpaceToRef(convertedColor, exact);
        return convertedColor;
    }
    /**
     * Converts the Color3 values to gamma space and stores the result in "convertedColor"
     * @param convertedColor defines the Color3 object where to store the gamma space version
     * @param exact defines if the conversion will be done in an exact way which is slower but more accurate (default is false)
     * @returns the unmodified Color3
     */ toGammaSpaceToRef(convertedColor, exact = false) {
        if (exact) {
            convertedColor.r = ColorChannelToGammaSpaceExact(this.r);
            convertedColor.g = ColorChannelToGammaSpaceExact(this.g);
            convertedColor.b = ColorChannelToGammaSpaceExact(this.b);
        } else {
            convertedColor.r = ColorChannelToGammaSpace(this.r);
            convertedColor.g = ColorChannelToGammaSpace(this.g);
            convertedColor.b = ColorChannelToGammaSpace(this.b);
        }
        return this;
    }
    /**
     * Converts Hue, saturation and value to a Color3 (RGB)
     * @param hue defines the hue (value between 0 and 360)
     * @param saturation defines the saturation (value between 0 and 1)
     * @param value defines the value (value between 0 and 1)
     * @param result defines the Color3 where to store the RGB values
     * @returns the updated result
     */ static HSVtoRGBToRef(hue, saturation, value, result) {
        const chroma = value * saturation;
        const h = hue / 60;
        const x = chroma * (1 - Math.abs(h % 2 - 1));
        let r = 0;
        let g = 0;
        let b = 0;
        if (h >= 0 && h <= 1) {
            r = chroma;
            g = x;
        } else if (h >= 1 && h <= 2) {
            r = x;
            g = chroma;
        } else if (h >= 2 && h <= 3) {
            g = chroma;
            b = x;
        } else if (h >= 3 && h <= 4) {
            g = x;
            b = chroma;
        } else if (h >= 4 && h <= 5) {
            r = x;
            b = chroma;
        } else if (h >= 5 && h <= 6) {
            r = chroma;
            b = x;
        }
        const m = value - chroma;
        result.r = r + m;
        result.g = g + m;
        result.b = b + m;
        return result;
    }
    /**
     * Converts Hue, saturation and value to a new Color3 (RGB)
     * @param hue defines the hue (value between 0 and 360)
     * @param saturation defines the saturation (value between 0 and 1)
     * @param value defines the value (value between 0 and 1)
     * @returns a new Color3 object
     */ static FromHSV(hue, saturation, value) {
        const result = new Color3(0, 0, 0);
        Color3.HSVtoRGBToRef(hue, saturation, value, result);
        return result;
    }
    /**
     * Creates a new Color3 from the string containing valid hexadecimal values
     * @param hex defines a string containing valid hexadecimal values
     * @returns a new Color3 object
     */ static FromHexString(hex) {
        return new Color3(0, 0, 0).fromHexString(hex);
    }
    /**
     * Creates a new Color3 from the starting index of the given array
     * @param array defines the source array
     * @param offset defines an offset in the source array
     * @returns a new Color3 object
     */ static FromArray(array, offset = 0) {
        return new Color3(array[offset], array[offset + 1], array[offset + 2]);
    }
    /**
     * Creates a new Color3 from the starting index element of the given array
     * @param array defines the source array to read from
     * @param offset defines the offset in the source array
     * @param result defines the target Color3 object
     */ static FromArrayToRef(array, offset = 0, result) {
        result.r = array[offset];
        result.g = array[offset + 1];
        result.b = array[offset + 2];
    }
    /**
     * Creates a new Color3 from integer values (\< 256)
     * @param r defines the red component to read from (value between 0 and 255)
     * @param g defines the green component to read from (value between 0 and 255)
     * @param b defines the blue component to read from (value between 0 and 255)
     * @returns a new Color3 object
     */ static FromInts(r, g, b) {
        return new Color3(r / 255.0, g / 255.0, b / 255.0);
    }
    /**
     * Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3
     * @param start defines the start Color3 value
     * @param end defines the end Color3 value
     * @param amount defines the gradient value between start and end
     * @returns a new Color3 object
     */ static Lerp(start, end, amount) {
        const result = new Color3(0.0, 0.0, 0.0);
        Color3.LerpToRef(start, end, amount, result);
        return result;
    }
    /**
     * Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3
     * @param left defines the start value
     * @param right defines the end value
     * @param amount defines the gradient factor
     * @param result defines the Color3 object where to store the result
     */ static LerpToRef(left, right, amount, result) {
        result.r = left.r + (right.r - left.r) * amount;
        result.g = left.g + (right.g - left.g) * amount;
        result.b = left.b + (right.b - left.b) * amount;
    }
    /**
     * Returns a new Color3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent Color3
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent Color3
     * @param amount defines the amount on the interpolation spline (between 0 and 1)
     * @returns the new Color3
     */ static Hermite(value1, tangent1, value2, tangent2, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
        const part2 = -2.0 * cubed + 3.0 * squared;
        const part3 = cubed - 2.0 * squared + amount;
        const part4 = cubed - squared;
        const r = value1.r * part1 + value2.r * part2 + tangent1.r * part3 + tangent2.r * part4;
        const g = value1.g * part1 + value2.g * part2 + tangent1.g * part3 + tangent2.g * part4;
        const b = value1.b * part1 + value2.b * part2 + tangent1.b * part3 + tangent2.b * part4;
        return new Color3(r, g, b);
    }
    /**
     * Returns a new Color3 which is the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @returns 1st derivative
     */ static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        const result = Color3.Black();
        this.Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result);
        return result;
    }
    /**
     * Returns a new Color3 which is the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @param result define where to store the derivative
     */ static Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result) {
        const t2 = time * time;
        result.r = (t2 - time) * 6 * value1.r + (3 * t2 - 4 * time + 1) * tangent1.r + (-t2 + time) * 6 * value2.r + (3 * t2 - 2 * time) * tangent2.r;
        result.g = (t2 - time) * 6 * value1.g + (3 * t2 - 4 * time + 1) * tangent1.g + (-t2 + time) * 6 * value2.g + (3 * t2 - 2 * time) * tangent2.g;
        result.b = (t2 - time) * 6 * value1.b + (3 * t2 - 4 * time + 1) * tangent1.b + (-t2 + time) * 6 * value2.b + (3 * t2 - 2 * time) * tangent2.b;
    }
    /**
     * Returns a Color3 value containing a red color
     * @returns a new Color3 object
     */ static Red() {
        return new Color3(1, 0, 0);
    }
    /**
     * Returns a Color3 value containing a green color
     * @returns a new Color3 object
     */ static Green() {
        return new Color3(0, 1, 0);
    }
    /**
     * Returns a Color3 value containing a blue color
     * @returns a new Color3 object
     */ static Blue() {
        return new Color3(0, 0, 1);
    }
    /**
     * Returns a Color3 value containing a black color
     * @returns a new Color3 object
     */ static Black() {
        return new Color3(0, 0, 0);
    }
    /**
     * Gets a Color3 value containing a black color that must not be updated
     */ static get BlackReadOnly() {
        return Color3._BlackReadOnly;
    }
    /**
     * Returns a Color3 value containing a white color
     * @returns a new Color3 object
     */ static White() {
        return new Color3(1, 1, 1);
    }
    /**
     * Returns a Color3 value containing a purple color
     * @returns a new Color3 object
     */ static Purple() {
        return new Color3(0.5, 0, 0.5);
    }
    /**
     * Returns a Color3 value containing a magenta color
     * @returns a new Color3 object
     */ static Magenta() {
        return new Color3(1, 0, 1);
    }
    /**
     * Returns a Color3 value containing a yellow color
     * @returns a new Color3 object
     */ static Yellow() {
        return new Color3(1, 1, 0);
    }
    /**
     * Returns a Color3 value containing a gray color
     * @returns a new Color3 object
     */ static Gray() {
        return new Color3(0.5, 0.5, 0.5);
    }
    /**
     * Returns a Color3 value containing a teal color
     * @returns a new Color3 object
     */ static Teal() {
        return new Color3(0, 1.0, 1.0);
    }
    /**
     * Returns a Color3 value containing a random color
     * @returns a new Color3 object
     */ static Random() {
        return new Color3(Math.random(), Math.random(), Math.random());
    }
}
/**
 * If the first color is flagged with integers (as everything is 0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
 * If subsequent colors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
 * and henceforth it will use floating-point representation for all color instances that it creates.
 * But the original color instances are unchanged and has a "deprecated map".
 * If we keep using the color instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.
 */ Color3._V8PerformanceHack = new Color3(0.5, 0.5, 0.5);
// Statics
Color3._BlackReadOnly = Color3.Black();
Object.defineProperties(Color3.prototype, {
    dimension: {
        value: [
            3
        ]
    },
    rank: {
        value: 1
    }
});
class Color4 {
    /**
     * Creates a new Color4 object from red, green, blue values, all between 0 and 1
     * @param r defines the red component (between 0 and 1, default is 0)
     * @param g defines the green component (between 0 and 1, default is 0)
     * @param b defines the blue component (between 0 and 1, default is 0)
     * @param a defines the alpha component (between 0 and 1, default is 1)
     */ constructor(/**
     * [0] Defines the red component (between 0 and 1, default is 0)
     */ r = 0, /**
     * [0] Defines the green component (between 0 and 1, default is 0)
     */ g = 0, /**
     * [0] Defines the blue component (between 0 and 1, default is 0)
     */ b = 0, /**
     * [1] Defines the alpha component (between 0 and 1, default is 1)
     */ a = 1){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    // Operators
    /**
     * Creates a new array populated with 4 numeric elements : red, green, blue, alpha values
     * @returns the new array
     */ asArray() {
        return [
            this.r,
            this.g,
            this.b,
            this.a
        ];
    }
    /**
     * Stores from the starting index in the given array the Color4 successive values
     * @param array defines the array where to store the r,g,b components
     * @param index defines an optional index in the target array to define where to start storing values
     * @returns the current Color4 object
     */ toArray(array, index = 0) {
        array[index] = this.r;
        array[index + 1] = this.g;
        array[index + 2] = this.b;
        array[index + 3] = this.a;
        return this;
    }
    /**
     * Update the current color with values stored in an array from the starting index of the given array
     * @param array defines the source array
     * @param offset defines an offset in the source array
     * @returns the current Color4 object
     */ fromArray(array, offset = 0) {
        this.r = array[offset];
        this.g = array[offset + 1];
        this.b = array[offset + 2];
        this.a = array[offset + 3];
        return this;
    }
    /**
     * Determines equality between Color4 objects
     * @param otherColor defines the second operand
     * @returns true if the rgba values are equal to the given ones
     */ equals(otherColor) {
        return otherColor && this.r === otherColor.r && this.g === otherColor.g && this.b === otherColor.b && this.a === otherColor.a;
    }
    /**
     * Creates a new Color4 set with the added values of the current Color4 and of the given one
     * @param otherColor defines the second operand
     * @returns a new Color4 object
     */ add(otherColor) {
        return new Color4(this.r + otherColor.r, this.g + otherColor.g, this.b + otherColor.b, this.a + otherColor.a);
    }
    /**
     * Updates the given color "result" with the result of the addition of the current Color4 and the given one.
     * @param otherColor the color to add
     * @param result the color to store the result
     * @returns result input
     */ addToRef(otherColor, result) {
        result.r = this.r + otherColor.r;
        result.g = this.g + otherColor.g;
        result.b = this.b + otherColor.b;
        result.a = this.a + otherColor.a;
        return result;
    }
    /**
     * Adds in place the given Color4 values to the current Color4 object
     * @param otherColor defines the second operand
     * @returns the current updated Color4 object
     */ addInPlace(otherColor) {
        this.r += otherColor.r;
        this.g += otherColor.g;
        this.b += otherColor.b;
        this.a += otherColor.a;
        return this;
    }
    /**
     * Adds the given coordinates to the current Color4
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @param a defines the a coordinate of the operand
     * @returns the current updated Color4
     */ addInPlaceFromFloats(r, g, b, a) {
        this.r += r;
        this.g += g;
        this.b += b;
        this.a += a;
        return this;
    }
    /**
     * Creates a new Color4 set with the subtracted values of the given one from the current Color4
     * @param otherColor defines the second operand
     * @returns a new Color4 object
     */ subtract(otherColor) {
        return new Color4(this.r - otherColor.r, this.g - otherColor.g, this.b - otherColor.b, this.a - otherColor.a);
    }
    /**
     * Subtracts the given ones from the current Color4 values and stores the results in "result"
     * @param otherColor defines the second operand
     * @param result defines the Color4 object where to store the result
     * @returns the result Color4 object
     */ subtractToRef(otherColor, result) {
        result.r = this.r - otherColor.r;
        result.g = this.g - otherColor.g;
        result.b = this.b - otherColor.b;
        result.a = this.a - otherColor.a;
        return result;
    }
    /**
     * Subtract in place the given color from the current Color4.
     * @param otherColor the color to subtract
     * @returns the updated Color4.
     */ subtractInPlace(otherColor) {
        this.r -= otherColor.r;
        this.g -= otherColor.g;
        this.b -= otherColor.b;
        this.a -= otherColor.a;
        return this;
    }
    /**
     * Returns a new Color4 set with the result of the subtraction of the given floats from the current Color4 coordinates.
     * @param r value to subtract
     * @param g value to subtract
     * @param b value to subtract
     * @param a value to subtract
     * @returns new color containing the result
     */ subtractFromFloats(r, g, b, a) {
        return new Color4(this.r - r, this.g - g, this.b - b, this.a - a);
    }
    /**
     * Sets the given color "result" set with the result of the subtraction of the given floats from the current Color4 coordinates.
     * @param r value to subtract
     * @param g value to subtract
     * @param b value to subtract
     * @param a value to subtract
     * @param result the color to store the result in
     * @returns result input
     */ subtractFromFloatsToRef(r, g, b, a, result) {
        result.r = this.r - r;
        result.g = this.g - g;
        result.b = this.b - b;
        result.a = this.a - a;
        return result;
    }
    /**
     * Creates a new Color4 with the current Color4 values multiplied by scale
     * @param scale defines the scaling factor to apply
     * @returns a new Color4 object
     */ scale(scale) {
        return new Color4(this.r * scale, this.g * scale, this.b * scale, this.a * scale);
    }
    /**
     * Multiplies the Color4 values by the float "scale"
     * @param scale defines the scaling factor to apply
     * @returns the current updated Color4
     */ scaleInPlace(scale) {
        this.r *= scale;
        this.g *= scale;
        this.b *= scale;
        this.a *= scale;
        return this;
    }
    /**
     * Multiplies the current Color4 values by scale and stores the result in "result"
     * @param scale defines the scaling factor to apply
     * @param result defines the Color4 object where to store the result
     * @returns the result Color4
     */ scaleToRef(scale, result) {
        result.r = this.r * scale;
        result.g = this.g * scale;
        result.b = this.b * scale;
        result.a = this.a * scale;
        return result;
    }
    /**
     * Scale the current Color4 values by a factor and add the result to a given Color4
     * @param scale defines the scale factor
     * @param result defines the Color4 object where to store the result
     * @returns the result Color4
     */ scaleAndAddToRef(scale, result) {
        result.r += this.r * scale;
        result.g += this.g * scale;
        result.b += this.b * scale;
        result.a += this.a * scale;
        return result;
    }
    /**
     * Clamps the rgb values by the min and max values and stores the result into "result"
     * @param min defines minimum clamping value (default is 0)
     * @param max defines maximum clamping value (default is 1)
     * @param result defines color to store the result into.
     * @returns the result Color4
     */ clampToRef(min = 0, max = 1, result) {
        result.r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this.r, min, max);
        result.g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this.g, min, max);
        result.b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this.b, min, max);
        result.a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(this.a, min, max);
        return result;
    }
    /**
     * Multiply an Color4 value by another and return a new Color4 object
     * @param color defines the Color4 value to multiply by
     * @returns a new Color4 object
     */ multiply(color) {
        return new Color4(this.r * color.r, this.g * color.g, this.b * color.b, this.a * color.a);
    }
    /**
     * Multiply a Color4 value by another and push the result in a reference value
     * @param color defines the Color4 value to multiply by
     * @param result defines the Color4 to fill the result in
     * @returns the result Color4
     */ multiplyToRef(color, result) {
        result.r = this.r * color.r;
        result.g = this.g * color.g;
        result.b = this.b * color.b;
        result.a = this.a * color.a;
        return result;
    }
    /**
     * Multiplies in place the current Color4 by the given one.
     * @param otherColor color to multiple with
     * @returns the updated Color4.
     */ multiplyInPlace(otherColor) {
        this.r *= otherColor.r;
        this.g *= otherColor.g;
        this.b *= otherColor.b;
        this.a *= otherColor.a;
        return this;
    }
    /**
     * Returns a new Color4 set with the multiplication result of the given floats and the current Color4 coordinates.
     * @param r value multiply with
     * @param g value multiply with
     * @param b value multiply with
     * @param a value multiply with
     * @returns resulting new color
     */ multiplyByFloats(r, g, b, a) {
        return new Color4(this.r * r, this.g * g, this.b * b, this.a * a);
    }
    /**
     * @internal
     * Do not use
     */ divide(_other) {
        throw new ReferenceError("Can not divide a color");
    }
    /**
     * @internal
     * Do not use
     */ divideToRef(_other, _result) {
        throw new ReferenceError("Can not divide a color");
    }
    /**
     * @internal
     * Do not use
     */ divideInPlace(_other) {
        throw new ReferenceError("Can not divide a color");
    }
    /**
     * Updates the Color4 coordinates with the minimum values between its own and the given color ones
     * @param other defines the second operand
     * @returns the current updated Color4
     */ minimizeInPlace(other) {
        this.r = Math.min(this.r, other.r);
        this.g = Math.min(this.g, other.g);
        this.b = Math.min(this.b, other.b);
        this.a = Math.min(this.a, other.a);
        return this;
    }
    /**
     * Updates the Color4 coordinates with the maximum values between its own and the given color ones
     * @param other defines the second operand
     * @returns the current updated Color4
     */ maximizeInPlace(other) {
        this.r = Math.max(this.r, other.r);
        this.g = Math.max(this.g, other.g);
        this.b = Math.max(this.b, other.b);
        this.a = Math.max(this.a, other.a);
        return this;
    }
    /**
     * Updates the current Color4 with the minimal coordinate values between its and the given coordinates
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @param a defines the a coordinate of the operand
     * @returns the current updated Color4
     */ minimizeInPlaceFromFloats(r, g, b, a) {
        this.r = Math.min(r, this.r);
        this.g = Math.min(g, this.g);
        this.b = Math.min(b, this.b);
        this.a = Math.min(a, this.a);
        return this;
    }
    /**
     * Updates the current Color4 with the maximal coordinate values between its and the given coordinates.
     * @param r defines the r coordinate of the operand
     * @param g defines the g coordinate of the operand
     * @param b defines the b coordinate of the operand
     * @param a defines the a coordinate of the operand
     * @returns the current updated Color4
     */ maximizeInPlaceFromFloats(r, g, b, a) {
        this.r = Math.max(r, this.r);
        this.g = Math.max(g, this.g);
        this.b = Math.max(b, this.b);
        this.a = Math.max(a, this.a);
        return this;
    }
    /**
     * @internal
     * Do not use
     */ floorToRef(_result) {
        throw new ReferenceError("Can not floor a color");
    }
    /**
     * @internal
     * Do not use
     */ floor() {
        throw new ReferenceError("Can not floor a color");
    }
    /**
     * @internal
     * Do not use
     */ fractToRef(_result) {
        throw new ReferenceError("Can not fract a color");
    }
    /**
     * @internal
     * Do not use
     */ fract() {
        throw new ReferenceError("Can not fract a color");
    }
    /**
     * @internal
     * Do not use
     */ negate() {
        throw new ReferenceError("Can not negate a color");
    }
    /**
     * @internal
     * Do not use
     */ negateInPlace() {
        throw new ReferenceError("Can not negate a color");
    }
    /**
     * @internal
     * Do not use
     */ negateToRef(_result) {
        throw new ReferenceError("Can not negate a color");
    }
    /**
     * Boolean : True if the current Color4 coordinates are each beneath the distance "epsilon" from the given color ones.
     * @param otherColor color to compare against
     * @param epsilon (Default: very small number)
     * @returns true if they are equal
     */ equalsWithEpsilon(otherColor, epsilon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.r, otherColor.r, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.g, otherColor.g, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.b, otherColor.b, epsilon) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(this.a, otherColor.a, epsilon);
    }
    /**
     * Boolean : True if the given floats are strictly equal to the current Color4 coordinates.
     * @param x x value to compare against
     * @param y y value to compare against
     * @param z z value to compare against
     * @param w w value to compare against
     * @returns true if equal
     */ equalsToFloats(x, y, z, w) {
        return this.r === x && this.g === y && this.b === z && this.a === w;
    }
    /**
     * Creates a string with the Color4 current values
     * @returns the string representation of the Color4 object
     */ toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}";
    }
    /**
     * Returns the string "Color4"
     * @returns "Color4"
     */ getClassName() {
        return "Color4";
    }
    /**
     * Compute the Color4 hash code
     * @returns an unique number that can be used to hash Color4 objects
     */ getHashCode() {
        let hash = this.r * 255 | 0;
        hash = hash * 397 ^ (this.g * 255 | 0);
        hash = hash * 397 ^ (this.b * 255 | 0);
        hash = hash * 397 ^ (this.a * 255 | 0);
        return hash;
    }
    /**
     * Creates a new Color4 copied from the current one
     * @returns a new Color4 object
     */ clone() {
        const result = new Color4();
        return result.copyFrom(this);
    }
    /**
     * Copies the given Color4 values into the current one
     * @param source defines the source Color4 object
     * @returns the current updated Color4 object
     */ copyFrom(source) {
        this.r = source.r;
        this.g = source.g;
        this.b = source.b;
        this.a = source.a;
        return this;
    }
    /**
     * Copies the given float values into the current one
     * @param r defines the red component to read from
     * @param g defines the green component to read from
     * @param b defines the blue component to read from
     * @param a defines the alpha component to read from
     * @returns the current updated Color4 object
     */ copyFromFloats(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this;
    }
    /**
     * Copies the given float values into the current one
     * @param r defines the red component to read from
     * @param g defines the green component to read from
     * @param b defines the blue component to read from
     * @param a defines the alpha component to read from
     * @returns the current updated Color4 object
     */ set(r, g, b, a) {
        return this.copyFromFloats(r, g, b, a);
    }
    /**
     * Copies the given float to the current Vector4 coordinates
     * @param v defines the r, g, b, and a coordinates of the operand
     * @returns the current updated Vector4
     */ setAll(v) {
        this.r = this.g = this.b = this.a = v;
        return this;
    }
    /**
     * Compute the Color4 hexadecimal code as a string
     * @param returnAsColor3 defines if the string should only contains RGB values (off by default)
     * @returns a string containing the hexadecimal representation of the Color4 object
     */ toHexString(returnAsColor3 = false) {
        const intR = Math.round(this.r * 255);
        const intG = Math.round(this.g * 255);
        const intB = Math.round(this.b * 255);
        if (returnAsColor3) {
            return "#" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intR) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intG) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intB);
        }
        const intA = Math.round(this.a * 255);
        return "#" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intR) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intG) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intB) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"])(intA);
    }
    /**
     * Updates the Color4 rgba values from the string containing valid hexadecimal values.
     *
     * A valid hex string is either in the format #RRGGBB or #RRGGBBAA.
     *
     * When a hex string without alpha is passed, the resulting Color4 keeps
     * its previous alpha value.
     *
     * An invalid string does not modify this object
     *
     * @param hex defines a string containing valid hexadecimal values
     * @returns the current updated Color4 object
     */ fromHexString(hex) {
        if (hex.substring(0, 1) !== "#" || hex.length !== 9 && hex.length !== 7) {
            return this;
        }
        this.r = parseInt(hex.substring(1, 3), 16) / 255;
        this.g = parseInt(hex.substring(3, 5), 16) / 255;
        this.b = parseInt(hex.substring(5, 7), 16) / 255;
        if (hex.length === 9) {
            this.a = parseInt(hex.substring(7, 9), 16) / 255;
        }
        return this;
    }
    /**
     * Computes a new Color4 converted from the current one to linear space
     * @param exact defines if the conversion will be done in an exact way which is slower but more accurate (default is false)
     * @returns a new Color4 object
     */ toLinearSpace(exact = false) {
        const convertedColor = new Color4();
        this.toLinearSpaceToRef(convertedColor, exact);
        return convertedColor;
    }
    /**
     * Converts the Color4 values to linear space and stores the result in "convertedColor"
     * @param convertedColor defines the Color4 object where to store the linear space version
     * @param exact defines if the conversion will be done in an exact way which is slower but more accurate (default is false)
     * @returns the unmodified Color4
     */ toLinearSpaceToRef(convertedColor, exact = false) {
        if (exact) {
            convertedColor.r = ColorChannelToLinearSpaceExact(this.r);
            convertedColor.g = ColorChannelToLinearSpaceExact(this.g);
            convertedColor.b = ColorChannelToLinearSpaceExact(this.b);
        } else {
            convertedColor.r = ColorChannelToLinearSpace(this.r);
            convertedColor.g = ColorChannelToLinearSpace(this.g);
            convertedColor.b = ColorChannelToLinearSpace(this.b);
        }
        convertedColor.a = this.a;
        return this;
    }
    /**
     * Computes a new Color4 converted from the current one to gamma space
     * @param exact defines if the conversion will be done in an exact way which is slower but more accurate (default is false)
     * @returns a new Color4 object
     */ toGammaSpace(exact = false) {
        const convertedColor = new Color4();
        this.toGammaSpaceToRef(convertedColor, exact);
        return convertedColor;
    }
    /**
     * Converts the Color4 values to gamma space and stores the result in "convertedColor"
     * @param convertedColor defines the Color4 object where to store the gamma space version
     * @param exact defines if the conversion will be done in an exact way which is slower but more accurate (default is false)
     * @returns the unmodified Color4
     */ toGammaSpaceToRef(convertedColor, exact = false) {
        if (exact) {
            convertedColor.r = ColorChannelToGammaSpaceExact(this.r);
            convertedColor.g = ColorChannelToGammaSpaceExact(this.g);
            convertedColor.b = ColorChannelToGammaSpaceExact(this.b);
        } else {
            convertedColor.r = ColorChannelToGammaSpace(this.r);
            convertedColor.g = ColorChannelToGammaSpace(this.g);
            convertedColor.b = ColorChannelToGammaSpace(this.b);
        }
        convertedColor.a = this.a;
        return this;
    }
    // Statics
    /**
     * Creates a new Color4 from the string containing valid hexadecimal values.
     *
     * A valid hex string is either in the format #RRGGBB or #RRGGBBAA.
     *
     * When a hex string without alpha is passed, the resulting Color4 has
     * its alpha value set to 1.0.
     *
     * An invalid string results in a Color with all its channels set to 0.0,
     * i.e. "transparent black".
     *
     * @param hex defines a string containing valid hexadecimal values
     * @returns a new Color4 object
     */ static FromHexString(hex) {
        if (hex.substring(0, 1) !== "#" || hex.length !== 9 && hex.length !== 7) {
            return new Color4(0.0, 0.0, 0.0, 0.0);
        }
        return new Color4(0.0, 0.0, 0.0, 1.0).fromHexString(hex);
    }
    /**
     * Creates a new Color4 object set with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object
     * @param left defines the start value
     * @param right defines the end value
     * @param amount defines the gradient factor
     * @returns a new Color4 object
     */ static Lerp(left, right, amount) {
        return Color4.LerpToRef(left, right, amount, new Color4());
    }
    /**
     * Set the given "result" with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object
     * @param left defines the start value
     * @param right defines the end value
     * @param amount defines the gradient factor
     * @param result defines the Color4 object where to store data
     * @returns the updated result
     */ static LerpToRef(left, right, amount, result) {
        result.r = left.r + (right.r - left.r) * amount;
        result.g = left.g + (right.g - left.g) * amount;
        result.b = left.b + (right.b - left.b) * amount;
        result.a = left.a + (right.a - left.a) * amount;
        return result;
    }
    /**
     * Interpolate between two Color4 using Hermite interpolation
     * @param value1 defines first Color4
     * @param tangent1 defines the incoming tangent
     * @param value2 defines second Color4
     * @param tangent2 defines the outgoing tangent
     * @param amount defines the target Color4
     * @returns the new interpolated Color4
     */ static Hermite(value1, tangent1, value2, tangent2, amount) {
        const squared = amount * amount;
        const cubed = amount * squared;
        const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
        const part2 = -2.0 * cubed + 3.0 * squared;
        const part3 = cubed - 2.0 * squared + amount;
        const part4 = cubed - squared;
        const r = value1.r * part1 + value2.r * part2 + tangent1.r * part3 + tangent2.r * part4;
        const g = value1.g * part1 + value2.g * part2 + tangent1.g * part3 + tangent2.g * part4;
        const b = value1.b * part1 + value2.b * part2 + tangent1.b * part3 + tangent2.b * part4;
        const a = value1.a * part1 + value2.a * part2 + tangent1.a * part3 + tangent2.a * part4;
        return new Color4(r, g, b, a);
    }
    /**
     * Returns a new Color4 which is the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @returns 1st derivative
     */ static Hermite1stDerivative(value1, tangent1, value2, tangent2, time) {
        const result = new Color4();
        this.Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result);
        return result;
    }
    /**
     * Update a Color4 with the 1st derivative of the Hermite spline defined by the colors "value1", "value2", "tangent1", "tangent2".
     * @param value1 defines the first control point
     * @param tangent1 defines the first tangent
     * @param value2 defines the second control point
     * @param tangent2 defines the second tangent
     * @param time define where the derivative must be done
     * @param result define where to store the derivative
     */ static Hermite1stDerivativeToRef(value1, tangent1, value2, tangent2, time, result) {
        const t2 = time * time;
        result.r = (t2 - time) * 6 * value1.r + (3 * t2 - 4 * time + 1) * tangent1.r + (-t2 + time) * 6 * value2.r + (3 * t2 - 2 * time) * tangent2.r;
        result.g = (t2 - time) * 6 * value1.g + (3 * t2 - 4 * time + 1) * tangent1.g + (-t2 + time) * 6 * value2.g + (3 * t2 - 2 * time) * tangent2.g;
        result.b = (t2 - time) * 6 * value1.b + (3 * t2 - 4 * time + 1) * tangent1.b + (-t2 + time) * 6 * value2.b + (3 * t2 - 2 * time) * tangent2.b;
        result.a = (t2 - time) * 6 * value1.a + (3 * t2 - 4 * time + 1) * tangent1.a + (-t2 + time) * 6 * value2.a + (3 * t2 - 2 * time) * tangent2.a;
    }
    /**
     * Creates a new Color4 from a Color3 and an alpha value
     * @param color3 defines the source Color3 to read from
     * @param alpha defines the alpha component (1.0 by default)
     * @returns a new Color4 object
     */ static FromColor3(color3, alpha = 1.0) {
        return new Color4(color3.r, color3.g, color3.b, alpha);
    }
    /**
     * Creates a new Color4 from the starting index element of the given array
     * @param array defines the source array to read from
     * @param offset defines the offset in the source array
     * @returns a new Color4 object
     */ static FromArray(array, offset = 0) {
        return new Color4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
    }
    /**
     * Creates a new Color4 from the starting index element of the given array
     * @param array defines the source array to read from
     * @param offset defines the offset in the source array
     * @param result defines the target Color4 object
     */ static FromArrayToRef(array, offset = 0, result) {
        result.r = array[offset];
        result.g = array[offset + 1];
        result.b = array[offset + 2];
        result.a = array[offset + 3];
    }
    /**
     * Creates a new Color3 from integer values (less than 256)
     * @param r defines the red component to read from (value between 0 and 255)
     * @param g defines the green component to read from (value between 0 and 255)
     * @param b defines the blue component to read from (value between 0 and 255)
     * @param a defines the alpha component to read from (value between 0 and 255)
     * @returns a new Color3 object
     */ static FromInts(r, g, b, a) {
        return new Color4(r / 255.0, g / 255.0, b / 255.0, a / 255.0);
    }
    /**
     * Check the content of a given array and convert it to an array containing RGBA data
     * If the original array was already containing count * 4 values then it is returned directly
     * @param colors defines the array to check
     * @param count defines the number of RGBA data to expect
     * @returns an array containing count * 4 values (RGBA)
     */ static CheckColors4(colors, count) {
        // Check if color3 was used
        if (colors.length === count * 3) {
            const colors4 = [];
            for(let index = 0; index < colors.length; index += 3){
                const newIndex = index / 3 * 4;
                colors4[newIndex] = colors[index];
                colors4[newIndex + 1] = colors[index + 1];
                colors4[newIndex + 2] = colors[index + 2];
                colors4[newIndex + 3] = 1.0;
            }
            return colors4;
        }
        return colors;
    }
}
/**
 * If the first color is flagged with integers (as everything is 0,0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
 * If subsequent colors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
 * and henceforth it will use floating-point representation for all color instances that it creates.
 * But the original color instances are unchanged and has a "deprecated map".
 * If we keep using the color instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.
 */ Color4._V8PerformanceHack = new Color4(0.5, 0.5, 0.5, 0.5);
Object.defineProperties(Color4.prototype, {
    dimension: {
        value: [
            4
        ]
    },
    rank: {
        value: 1
    }
});
class TmpColors {
}
TmpColors.Color3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(3, Color3.Black);
TmpColors.Color4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$arrayTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BuildArray"])(3, ()=>new Color4(0, 0, 0, 0));
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Color3", Color3);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Color4", Color4); //# sourceMappingURL=math.color.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.size.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Size containing width and height
 */ __turbopack_context__.s([
    "Size",
    ()=>Size
]);
class Size {
    /**
     * Creates a Size object from the given width and height (floats).
     * @param width width of the new size
     * @param height height of the new size
     */ constructor(width, height){
        this.width = width;
        this.height = height;
    }
    /**
     * Returns a string with the Size width and height
     * @returns a string with the Size width and height
     */ toString() {
        return `{W: ${this.width}, H: ${this.height}}`;
    }
    /**
     * "Size"
     * @returns the string "Size"
     */ getClassName() {
        return "Size";
    }
    /**
     * Returns the Size hash code.
     * @returns a hash code for a unique width and height
     */ getHashCode() {
        let hash = this.width | 0;
        hash = hash * 397 ^ (this.height | 0);
        return hash;
    }
    /**
     * Updates the current size from the given one.
     * @param src the given size
     */ copyFrom(src) {
        this.width = src.width;
        this.height = src.height;
    }
    /**
     * Updates in place the current Size from the given floats.
     * @param width width of the new size
     * @param height height of the new size
     * @returns the updated Size.
     */ copyFromFloats(width, height) {
        this.width = width;
        this.height = height;
        return this;
    }
    /**
     * Updates in place the current Size from the given floats.
     * @param width width to set
     * @param height height to set
     * @returns the updated Size.
     */ set(width, height) {
        return this.copyFromFloats(width, height);
    }
    /**
     * Multiplies the width and height by numbers
     * @param w factor to multiple the width by
     * @param h factor to multiple the height by
     * @returns a new Size set with the multiplication result of the current Size and the given floats.
     */ multiplyByFloats(w, h) {
        return new Size(this.width * w, this.height * h);
    }
    /**
     * Clones the size
     * @returns a new Size copied from the given one.
     */ clone() {
        return new Size(this.width, this.height);
    }
    /**
     * True if the current Size and the given one width and height are strictly equal.
     * @param other the other size to compare against
     * @returns True if the current Size and the given one width and height are strictly equal.
     */ equals(other) {
        if (!other) {
            return false;
        }
        return this.width === other.width && this.height === other.height;
    }
    /**
     * The surface of the Size : width * height (float).
     */ get surface() {
        return this.width * this.height;
    }
    /**
     * Create a new size of zero
     * @returns a new Size set to (0.0, 0.0)
     */ static Zero() {
        return new Size(0.0, 0.0);
    }
    /**
     * Sums the width and height of two sizes
     * @param otherSize size to add to this size
     * @returns a new Size set as the addition result of the current Size and the given one.
     */ add(otherSize) {
        const r = new Size(this.width + otherSize.width, this.height + otherSize.height);
        return r;
    }
    /**
     * Subtracts the width and height of two
     * @param otherSize size to subtract to this size
     * @returns a new Size set as the subtraction result of  the given one from the current Size.
     */ subtract(otherSize) {
        const r = new Size(this.width - otherSize.width, this.height - otherSize.height);
        return r;
    }
    /**
     * Scales the width and height
     * @param scale the scale to multiply the width and height by
     * @returns a new Size set with the multiplication result of the current Size and the given floats.
     */ scale(scale) {
        return new Size(this.width * scale, this.height * scale);
    }
    /**
     * Creates a new Size set at the linear interpolation "amount" between "start" and "end"
     * @param start starting size to lerp between
     * @param end end size to lerp between
     * @param amount amount to lerp between the start and end values
     * @returns a new Size set at the linear interpolation "amount" between "start" and "end"
     */ static Lerp(start, end, amount) {
        const w = start.width + (end.width - start.width) * amount;
        const h = start.height + (end.height - start.height) * amount;
        return new Size(w, h);
    }
} //# sourceMappingURL=math.size.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plane",
    ()=>Plane
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
class Plane {
    /**
     * Creates a Plane object according to the given floats a, b, c, d and the plane equation : ax + by + cz + d = 0
     * @param a a component of the plane
     * @param b b component of the plane
     * @param c c component of the plane
     * @param d d component of the plane
     */ constructor(a, b, c, d){
        this.normal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](a, b, c);
        this.d = d;
    }
    /**
     * @returns the plane coordinates as a new array of 4 elements [a, b, c, d].
     */ asArray() {
        return [
            this.normal.x,
            this.normal.y,
            this.normal.z,
            this.d
        ];
    }
    // Methods
    /**
     * @returns a new plane copied from the current Plane.
     */ clone() {
        return new Plane(this.normal.x, this.normal.y, this.normal.z, this.d);
    }
    /**
     * @returns the string "Plane".
     */ getClassName() {
        return "Plane";
    }
    /**
     * @returns the Plane hash code.
     */ getHashCode() {
        let hash = this.normal.getHashCode();
        hash = hash * 397 ^ (this.d | 0);
        return hash;
    }
    /**
     * Normalize the current Plane in place.
     * @returns the updated Plane.
     */ normalize() {
        const norm = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let magnitude = 0.0;
        if (norm !== 0) {
            magnitude = 1.0 / norm;
        }
        this.normal.x *= magnitude;
        this.normal.y *= magnitude;
        this.normal.z *= magnitude;
        this.d *= magnitude;
        return this;
    }
    /**
     * Applies a transformation the plane and returns the result
     * @param transformation the transformation matrix to be applied to the plane
     * @returns a new Plane as the result of the transformation of the current Plane by the given matrix.
     */ transform(transformation) {
        const invertedMatrix = Plane._TmpMatrix;
        transformation.invertToRef(invertedMatrix);
        const m = invertedMatrix.m;
        const x = this.normal.x;
        const y = this.normal.y;
        const z = this.normal.z;
        const d = this.d;
        const normalX = x * m[0] + y * m[1] + z * m[2] + d * m[3];
        const normalY = x * m[4] + y * m[5] + z * m[6] + d * m[7];
        const normalZ = x * m[8] + y * m[9] + z * m[10] + d * m[11];
        const finalD = x * m[12] + y * m[13] + z * m[14] + d * m[15];
        return new Plane(normalX, normalY, normalZ, finalD);
    }
    /**
     * Compute the dot product between the point and the plane normal
     * @param point point to calculate the dot product with
     * @returns the dot product (float) of the point coordinates and the plane normal.
     */ dotCoordinate(point) {
        return this.normal.x * point.x + this.normal.y * point.y + this.normal.z * point.z + this.d;
    }
    /**
     * Updates the current Plane from the plane defined by the three given points.
     * @param point1 one of the points used to construct the plane
     * @param point2 one of the points used to construct the plane
     * @param point3 one of the points used to construct the plane
     * @returns the updated Plane.
     */ copyFromPoints(point1, point2, point3) {
        const x1 = point2.x - point1.x;
        const y1 = point2.y - point1.y;
        const z1 = point2.z - point1.z;
        const x2 = point3.x - point1.x;
        const y2 = point3.y - point1.y;
        const z2 = point3.z - point1.z;
        const yz = y1 * z2 - z1 * y2;
        const xz = z1 * x2 - x1 * z2;
        const xy = x1 * y2 - y1 * x2;
        const pyth = Math.sqrt(yz * yz + xz * xz + xy * xy);
        let invPyth;
        if (pyth !== 0) {
            invPyth = 1.0 / pyth;
        } else {
            invPyth = 0.0;
        }
        this.normal.x = yz * invPyth;
        this.normal.y = xz * invPyth;
        this.normal.z = xy * invPyth;
        this.d = -(this.normal.x * point1.x + this.normal.y * point1.y + this.normal.z * point1.z);
        return this;
    }
    /**
     * Checks if the plane is facing a given direction (meaning if the plane's normal is pointing in the opposite direction of the given vector).
     * Note that for this function to work as expected you should make sure that:
     *   - direction and the plane normal are normalized
     *   - epsilon is a number just bigger than -1, something like -0.99 for eg
     * @param direction the direction to check if the plane is facing
     * @param epsilon value the dot product is compared against (returns true if dot <= epsilon)
     * @returns True if the plane is facing the given direction
     */ isFrontFacingTo(direction, epsilon) {
        const dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(this.normal, direction);
        return dot <= epsilon;
    }
    /**
     * Calculates the distance to a point
     * @param point point to calculate distance to
     * @returns the signed distance (float) from the given point to the Plane.
     */ signedDistanceTo(point) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(point, this.normal) + this.d;
    }
    // Statics
    /**
     * Creates a plane from an  array
     * @param array the array to create a plane from
     * @returns a new Plane from the given array.
     */ static FromArray(array) {
        return new Plane(array[0], array[1], array[2], array[3]);
    }
    /**
     * Creates a plane from three points
     * @param point1 point used to create the plane
     * @param point2 point used to create the plane
     * @param point3 point used to create the plane
     * @returns a new Plane defined by the three given points.
     */ static FromPoints(point1, point2, point3) {
        const result = new Plane(0.0, 0.0, 0.0, 0.0);
        result.copyFromPoints(point1, point2, point3);
        return result;
    }
    /**
     * Creates a plane from an origin point and a normal
     * @param origin origin of the plane to be constructed
     * @param normal normal of the plane to be constructed
     * @returns a new Plane the normal vector to this plane at the given origin point.
     */ static FromPositionAndNormal(origin, normal) {
        const plane = new Plane(0.0, 0.0, 0.0, 0.0);
        return this.FromPositionAndNormalToRef(origin, normal, plane);
    }
    /**
     * Updates the given Plane "result" from an origin point and a normal.
     * @param origin origin of the plane to be constructed
     * @param normal the normalized normals of the plane to be constructed
     * @param result defines the Plane where to store the result
     * @returns result input
     */ static FromPositionAndNormalToRef(origin, normal, result) {
        result.normal.copyFrom(normal);
        result.normal.normalize();
        result.d = -origin.dot(result.normal);
        return result;
    }
    /**
     * Calculates the distance from a plane and a point
     * @param origin origin of the plane to be constructed
     * @param normal normal of the plane to be constructed
     * @param point point to calculate distance to
     * @returns the signed distance between the plane defined by the normal vector at the "origin"" point and the given other point.
     */ static SignedDistanceToPlaneFromPositionAndNormal(origin, normal, point) {
        const d = -(normal.x * origin.x + normal.y * origin.y + normal.z * origin.z);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(point, normal) + d;
    }
}
Plane._TmpMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity(); //# sourceMappingURL=math.plane.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.frustum.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Frustum",
    ()=>Frustum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)");
;
class Frustum {
    /**
     * Gets the planes representing the frustum
     * @param transform matrix to be applied to the returned planes
     * @returns a new array of 6 Frustum planes computed by the given transformation matrix.
     */ static GetPlanes(transform) {
        const frustumPlanes = [];
        for(let index = 0; index < 6; index++){
            frustumPlanes.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"](0.0, 0.0, 0.0, 0.0));
        }
        Frustum.GetPlanesToRef(transform, frustumPlanes);
        return frustumPlanes;
    }
    /**
     * Gets the near frustum plane transformed by the transform matrix
     * @param transform transformation matrix to be applied to the resulting frustum plane
     * @param frustumPlane the resulting frustum plane
     */ static GetNearPlaneToRef(transform, frustumPlane) {
        const m = transform.m;
        frustumPlane.normal.x = m[3] + m[2];
        frustumPlane.normal.y = m[7] + m[6];
        frustumPlane.normal.z = m[11] + m[10];
        frustumPlane.d = m[15] + m[14];
        frustumPlane.normalize();
    }
    /**
     * Gets the far frustum plane transformed by the transform matrix
     * @param transform transformation matrix to be applied to the resulting frustum plane
     * @param frustumPlane the resulting frustum plane
     */ static GetFarPlaneToRef(transform, frustumPlane) {
        const m = transform.m;
        frustumPlane.normal.x = m[3] - m[2];
        frustumPlane.normal.y = m[7] - m[6];
        frustumPlane.normal.z = m[11] - m[10];
        frustumPlane.d = m[15] - m[14];
        frustumPlane.normalize();
    }
    /**
     * Gets the left frustum plane transformed by the transform matrix
     * @param transform transformation matrix to be applied to the resulting frustum plane
     * @param frustumPlane the resulting frustum plane
     */ static GetLeftPlaneToRef(transform, frustumPlane) {
        const m = transform.m;
        frustumPlane.normal.x = m[3] + m[0];
        frustumPlane.normal.y = m[7] + m[4];
        frustumPlane.normal.z = m[11] + m[8];
        frustumPlane.d = m[15] + m[12];
        frustumPlane.normalize();
    }
    /**
     * Gets the right frustum plane transformed by the transform matrix
     * @param transform transformation matrix to be applied to the resulting frustum plane
     * @param frustumPlane the resulting frustum plane
     */ static GetRightPlaneToRef(transform, frustumPlane) {
        const m = transform.m;
        frustumPlane.normal.x = m[3] - m[0];
        frustumPlane.normal.y = m[7] - m[4];
        frustumPlane.normal.z = m[11] - m[8];
        frustumPlane.d = m[15] - m[12];
        frustumPlane.normalize();
    }
    /**
     * Gets the top frustum plane transformed by the transform matrix
     * @param transform transformation matrix to be applied to the resulting frustum plane
     * @param frustumPlane the resulting frustum plane
     */ static GetTopPlaneToRef(transform, frustumPlane) {
        const m = transform.m;
        frustumPlane.normal.x = m[3] - m[1];
        frustumPlane.normal.y = m[7] - m[5];
        frustumPlane.normal.z = m[11] - m[9];
        frustumPlane.d = m[15] - m[13];
        frustumPlane.normalize();
    }
    /**
     * Gets the bottom frustum plane transformed by the transform matrix
     * @param transform transformation matrix to be applied to the resulting frustum plane
     * @param frustumPlane the resulting frustum plane
     */ static GetBottomPlaneToRef(transform, frustumPlane) {
        const m = transform.m;
        frustumPlane.normal.x = m[3] + m[1];
        frustumPlane.normal.y = m[7] + m[5];
        frustumPlane.normal.z = m[11] + m[9];
        frustumPlane.d = m[15] + m[13];
        frustumPlane.normalize();
    }
    /**
     * Sets the given array "frustumPlanes" with the 6 Frustum planes computed by the given transformation matrix.
     * @param transform transformation matrix to be applied to the resulting frustum planes
     * @param frustumPlanes the resulting frustum planes
     */ static GetPlanesToRef(transform, frustumPlanes) {
        // Near
        Frustum.GetNearPlaneToRef(transform, frustumPlanes[0]);
        // Far
        Frustum.GetFarPlaneToRef(transform, frustumPlanes[1]);
        // Left
        Frustum.GetLeftPlaneToRef(transform, frustumPlanes[2]);
        // Right
        Frustum.GetRightPlaneToRef(transform, frustumPlanes[3]);
        // Top
        Frustum.GetTopPlaneToRef(transform, frustumPlanes[4]);
        // Bottom
        Frustum.GetBottomPlaneToRef(transform, frustumPlanes[5]);
    }
    /**
     * Tests if a point is located between the frustum planes.
     * @param point defines the point to test
     * @param frustumPlanes defines the frustum planes to test
     * @returns true if the point is located between the frustum planes
     */ static IsPointInFrustum(point, frustumPlanes) {
        for(let i = 0; i < 6; i++){
            if (frustumPlanes[i].dotCoordinate(point) < 0) {
                return false;
            }
        }
        return true;
    }
} //# sourceMappingURL=math.frustum.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Class used to represent a viewport on screen
 */ __turbopack_context__.s([
    "Viewport",
    ()=>Viewport
]);
class Viewport {
    /**
     * Creates a Viewport object located at (x, y) and sized (width, height)
     * @param x defines viewport left coordinate
     * @param y defines viewport top coordinate
     * @param width defines the viewport width
     * @param height defines the viewport height
     */ constructor(/** viewport left coordinate */ x, /** viewport top coordinate */ y, /**viewport width */ width, /** viewport height */ height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
     * Creates a new viewport using absolute sizing (from 0-> width, 0-> height instead of 0->1)
     * @param renderWidth defines the rendering width
     * @param renderHeight defines the rendering height
     * @returns a new Viewport
     */ toGlobal(renderWidth, renderHeight) {
        return new Viewport(this.x * renderWidth, this.y * renderHeight, this.width * renderWidth, this.height * renderHeight);
    }
    /**
     * Stores absolute viewport value into a target viewport (from 0-> width, 0-> height instead of 0->1)
     * @param renderWidth defines the rendering width
     * @param renderHeight defines the rendering height
     * @param ref defines the target viewport
     * @returns the current viewport
     */ toGlobalToRef(renderWidth, renderHeight, ref) {
        ref.x = this.x * renderWidth;
        ref.y = this.y * renderHeight;
        ref.width = this.width * renderWidth;
        ref.height = this.height * renderHeight;
        return this;
    }
    /**
     * Returns a new Viewport copied from the current one
     * @returns a new Viewport
     */ clone() {
        return new Viewport(this.x, this.y, this.width, this.height);
    }
} //# sourceMappingURL=math.viewport.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Axis",
    ()=>Axis,
    "Coordinate",
    ()=>Coordinate,
    "Space",
    ()=>Space
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
var Space;
(function(Space) {
    /** Local (object) space */ Space[Space["LOCAL"] = 0] = "LOCAL";
    /** World space */ Space[Space["WORLD"] = 1] = "WORLD";
    /** Bone space */ Space[Space["BONE"] = 2] = "BONE";
})(Space || (Space = {}));
class Axis {
}
/** X axis */ Axis.X = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.0, 0.0, 0.0);
/** Y axis */ Axis.Y = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.0, 1.0, 0.0);
/** Z axis */ Axis.Z = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.0, 0.0, 1.0);
var Coordinate;
(function(Coordinate) {
    /** X axis */ Coordinate[Coordinate["X"] = 0] = "X";
    /** Y axis */ Coordinate[Coordinate["Y"] = 1] = "Y";
    /** Z axis */ Coordinate[Coordinate["Z"] = 2] = "Z";
})(Coordinate || (Coordinate = {})); //# sourceMappingURL=math.axis.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.path.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Angle",
    ()=>Angle,
    "Arc2",
    ()=>Arc2,
    "BezierCurve",
    ()=>BezierCurve,
    "Curve3",
    ()=>Curve3,
    "Orientation",
    ()=>Orientation,
    "Path2",
    ()=>Path2,
    "Path3D",
    ()=>Path3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
;
;
;
var Orientation;
(function(Orientation) {
    /**
     * Clockwise
     */ Orientation[Orientation["CW"] = 0] = "CW";
    /** Counter clockwise */ Orientation[Orientation["CCW"] = 1] = "CCW";
})(Orientation || (Orientation = {}));
class BezierCurve {
    /**
     * Returns the cubic Bezier interpolated value (float) at "t" (float) from the given x1, y1, x2, y2 floats
     * @param t defines the time
     * @param x1 defines the left coordinate on X axis
     * @param y1 defines the left coordinate on Y axis
     * @param x2 defines the right coordinate on X axis
     * @param y2 defines the right coordinate on Y axis
     * @returns the interpolated value
     */ static Interpolate(t, x1, y1, x2, y2) {
        if (t === 0) {
            return 0;
        }
        // Extract X (which is equal to time here)
        const f0 = 1 - 3 * x2 + 3 * x1;
        const f1 = 3 * x2 - 6 * x1;
        const f2 = 3 * x1;
        let refinedT = t;
        for(let i = 0; i < 5; i++){
            const refinedT2 = refinedT * refinedT;
            const refinedT3 = refinedT2 * refinedT;
            const x = f0 * refinedT3 + f1 * refinedT2 + f2 * refinedT;
            const slope = 1.0 / (3.0 * f0 * refinedT2 + 2.0 * f1 * refinedT + f2);
            refinedT -= (x - t) * slope;
            refinedT = Math.min(1, Math.max(0, refinedT));
        }
        // Resolve cubic bezier for the given x
        return 3 * Math.pow(1 - refinedT, 2) * refinedT * y1 + 3 * (1 - refinedT) * Math.pow(refinedT, 2) * y2 + Math.pow(refinedT, 3);
    }
}
class Angle {
    /**
     * Creates an Angle object of "radians" radians (float).
     * @param radians the angle in radians
     */ constructor(radians){
        this._radians = radians;
        if (this._radians < 0.0) {
            this._radians += 2.0 * Math.PI;
        }
    }
    /**
     * Get value in degrees
     * @returns the Angle value in degrees (float)
     */ degrees() {
        return this._radians * 180.0 / Math.PI;
    }
    /**
     * Get value in radians
     * @returns the Angle value in radians (float)
     */ radians() {
        return this._radians;
    }
    /**
     * Gets a new Angle object with a value of the angle (in radians) between the line connecting the two points and the x-axis
     * @param a defines first point as the origin
     * @param b defines point
     * @returns a new Angle
     */ static BetweenTwoPoints(a, b) {
        const delta = b.subtract(a);
        const theta = Math.atan2(delta.y, delta.x);
        return new Angle(theta);
    }
    /**
     * Gets the angle between the two vectors
     * @param a defines first vector
     * @param b defines vector
     * @returns Returns an new Angle between 0 and PI
     */ static BetweenTwoVectors(a, b) {
        let product = a.lengthSquared() * b.lengthSquared();
        if (product === 0) {
            return new Angle(Math.PI / 2);
        }
        product = Math.sqrt(product);
        let cosVal = a.dot(b) / product;
        cosVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(cosVal, -1, 1);
        const angle = Math.acos(cosVal);
        return new Angle(angle);
    }
    /**
     * Gets a new Angle object from the given float in radians
     * @param radians defines the angle value in radians
     * @returns a new Angle
     */ static FromRadians(radians) {
        return new Angle(radians);
    }
    /**
     * Gets a new Angle object from the given float in degrees
     * @param degrees defines the angle value in degrees
     * @returns a new Angle
     */ static FromDegrees(degrees) {
        return new Angle(degrees * Math.PI / 180.0);
    }
}
class Arc2 {
    /**
     * Creates an Arc object from the three given points : start, middle and end.
     * @param startPoint Defines the start point of the arc
     * @param midPoint Defines the middle point of the arc
     * @param endPoint Defines the end point of the arc
     */ constructor(/** Defines the start point of the arc */ startPoint, /** Defines the mid point of the arc */ midPoint, /** Defines the end point of the arc */ endPoint){
        this.startPoint = startPoint;
        this.midPoint = midPoint;
        this.endPoint = endPoint;
        const temp = Math.pow(midPoint.x, 2) + Math.pow(midPoint.y, 2);
        const startToMid = (Math.pow(startPoint.x, 2) + Math.pow(startPoint.y, 2) - temp) / 2;
        const midToEnd = (temp - Math.pow(endPoint.x, 2) - Math.pow(endPoint.y, 2)) / 2;
        const det = (startPoint.x - midPoint.x) * (midPoint.y - endPoint.y) - (midPoint.x - endPoint.x) * (startPoint.y - midPoint.y);
        this.centerPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]((startToMid * (midPoint.y - endPoint.y) - midToEnd * (startPoint.y - midPoint.y)) / det, ((startPoint.x - midPoint.x) * midToEnd - (midPoint.x - endPoint.x) * startToMid) / det);
        this.radius = this.centerPoint.subtract(this.startPoint).length();
        this.startAngle = Angle.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const a1 = this.startAngle.degrees();
        let a2 = Angle.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees();
        let a3 = Angle.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        // angles correction
        if (a2 - a1 > +180.0) {
            a2 -= 360.0;
        }
        if (a2 - a1 < -180.0) {
            a2 += 360.0;
        }
        if (a3 - a2 > +180.0) {
            a3 -= 360.0;
        }
        if (a3 - a2 < -180.0) {
            a3 += 360.0;
        }
        this.orientation = a2 - a1 < 0 ? 0 /* Orientation.CW */  : 1 /* Orientation.CCW */ ;
        this.angle = Angle.FromDegrees(this.orientation === 0 /* Orientation.CW */  ? a1 - a3 : a3 - a1);
    }
}
class Path2 {
    /**
     * Creates a Path2 object from the starting 2D coordinates x and y.
     * @param x the starting points x value
     * @param y the starting points y value
     */ constructor(x, y){
        this._points = new Array();
        this._length = 0.0;
        /**
         * If the path start and end point are the same
         */ this.closed = false;
        this._points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, y));
    }
    /**
     * Adds a new segment until the given coordinates (x, y) to the current Path2.
     * @param x the added points x value
     * @param y the added points y value
     * @returns the updated Path2.
     */ addLineTo(x, y) {
        if (this.closed) {
            return this;
        }
        const newPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, y);
        const previousPoint = this._points[this._points.length - 1];
        this._points.push(newPoint);
        this._length += newPoint.subtract(previousPoint).length();
        return this;
    }
    /**
     * Adds _numberOfSegments_ segments according to the arc definition (middle point coordinates, end point coordinates, the arc start point being the current Path2 last point) to the current Path2.
     * @param midX middle point x value
     * @param midY middle point y value
     * @param endX end point x value
     * @param endY end point y value
     * @param numberOfSegments (default: 36)
     * @returns the updated Path2.
     */ addArcTo(midX, midY, endX, endY, numberOfSegments = 36) {
        if (this.closed) {
            return this;
        }
        const startPoint = this._points[this._points.length - 1];
        const midPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](midX, midY);
        const endPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](endX, endY);
        const arc = new Arc2(startPoint, midPoint, endPoint);
        let increment = arc.angle.radians() / numberOfSegments;
        if (arc.orientation === 0 /* Orientation.CW */ ) {
            increment *= -1;
        }
        let currentAngle = arc.startAngle.radians() + increment;
        for(let i = 0; i < numberOfSegments; i++){
            const x = Math.cos(currentAngle) * arc.radius + arc.centerPoint.x;
            const y = Math.sin(currentAngle) * arc.radius + arc.centerPoint.y;
            this.addLineTo(x, y);
            currentAngle += increment;
        }
        return this;
    }
    /**
     * Adds _numberOfSegments_ segments according to the quadratic curve definition to the current Path2.
     * @param controlX control point x value
     * @param controlY control point y value
     * @param endX end point x value
     * @param endY end point y value
     * @param numberOfSegments (default: 36)
     * @returns the updated Path2.
     */ addQuadraticCurveTo(controlX, controlY, endX, endY, numberOfSegments = 36) {
        if (this.closed) {
            return this;
        }
        const equation = (t, val0, val1, val2)=>{
            const res = (1.0 - t) * (1.0 - t) * val0 + 2.0 * t * (1.0 - t) * val1 + t * t * val2;
            return res;
        };
        const startPoint = this._points[this._points.length - 1];
        for(let i = 0; i <= numberOfSegments; i++){
            const step = i / numberOfSegments;
            const x = equation(step, startPoint.x, controlX, endX);
            const y = equation(step, startPoint.y, controlY, endY);
            this.addLineTo(x, y);
        }
        return this;
    }
    /**
     * Adds _numberOfSegments_ segments according to the bezier curve definition to the current Path2.
     * @param originTangentX tangent vector at the origin point x value
     * @param originTangentY tangent vector at the origin point y value
     * @param destinationTangentX tangent vector at the destination point x value
     * @param destinationTangentY tangent vector at the destination point y value
     * @param endX end point x value
     * @param endY end point y value
     * @param numberOfSegments (default: 36)
     * @returns the updated Path2.
     */ addBezierCurveTo(originTangentX, originTangentY, destinationTangentX, destinationTangentY, endX, endY, numberOfSegments = 36) {
        if (this.closed) {
            return this;
        }
        const equation = (t, val0, val1, val2, val3)=>{
            const res = (1.0 - t) * (1.0 - t) * (1.0 - t) * val0 + 3.0 * t * (1.0 - t) * (1.0 - t) * val1 + 3.0 * t * t * (1.0 - t) * val2 + t * t * t * val3;
            return res;
        };
        const startPoint = this._points[this._points.length - 1];
        for(let i = 0; i <= numberOfSegments; i++){
            const step = i / numberOfSegments;
            const x = equation(step, startPoint.x, originTangentX, destinationTangentX, endX);
            const y = equation(step, startPoint.y, originTangentY, destinationTangentY, endY);
            this.addLineTo(x, y);
        }
        return this;
    }
    /**
     * Defines if a given point is inside the polygon defines by the path
     * @param point defines the point to test
     * @returns true if the point is inside
     */ isPointInside(point) {
        let isInside = false;
        const count = this._points.length;
        for(let p = count - 1, q = 0; q < count; p = q++){
            let edgeLow = this._points[p];
            let edgeHigh = this._points[q];
            let edgeDx = edgeHigh.x - edgeLow.x;
            let edgeDy = edgeHigh.y - edgeLow.y;
            if (Math.abs(edgeDy) > Number.EPSILON) {
                // Not parallel
                if (edgeDy < 0) {
                    edgeLow = this._points[q];
                    edgeDx = -edgeDx;
                    edgeHigh = this._points[p];
                    edgeDy = -edgeDy;
                }
                if (point.y < edgeLow.y || point.y > edgeHigh.y) {
                    continue;
                }
                if (point.y === edgeLow.y && point.x === edgeLow.x) {
                    return true;
                } else {
                    const perpEdge = edgeDy * (point.x - edgeLow.x) - edgeDx * (point.y - edgeLow.y);
                    if (perpEdge === 0) {
                        return true;
                    }
                    if (perpEdge < 0) {
                        continue;
                    }
                    isInside = !isInside;
                }
            } else {
                // parallel or collinear
                if (point.y !== edgeLow.y) {
                    continue;
                }
                if (edgeHigh.x <= point.x && point.x <= edgeLow.x || edgeLow.x <= point.x && point.x <= edgeHigh.x) {
                    return true;
                }
            }
        }
        return isInside;
    }
    /**
     * Closes the Path2.
     * @returns the Path2.
     */ close() {
        this.closed = true;
        return this;
    }
    /**
     * Gets the sum of the distance between each sequential point in the path
     * @returns the Path2 total length (float).
     */ length() {
        let result = this._length;
        if (this.closed) {
            const lastPoint = this._points[this._points.length - 1];
            const firstPoint = this._points[0];
            result += firstPoint.subtract(lastPoint).length();
        }
        return result;
    }
    /**
     * Gets the area of the polygon defined by the path
     * @returns area value
     */ area() {
        const n = this._points.length;
        let value = 0.0;
        for(let p = n - 1, q = 0; q < n; p = q++){
            value += this._points[p].x * this._points[q].y - this._points[q].x * this._points[p].y;
        }
        return value * 0.5;
    }
    /**
     * Gets the points which construct the path
     * @returns the Path2 internal array of points.
     */ getPoints() {
        return this._points;
    }
    /**
     * Retrieves the point at the distance aways from the starting point
     * @param normalizedLengthPosition the length along the path to retrieve the point from
     * @returns a new Vector2 located at a percentage of the Path2 total length on this path.
     */ getPointAtLengthPosition(normalizedLengthPosition) {
        if (normalizedLengthPosition < 0 || normalizedLengthPosition > 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero();
        }
        const lengthPosition = normalizedLengthPosition * this.length();
        let previousOffset = 0;
        for(let i = 0; i < this._points.length; i++){
            const j = (i + 1) % this._points.length;
            const a = this._points[i];
            const b = this._points[j];
            const bToA = b.subtract(a);
            const nextOffset = bToA.length() + previousOffset;
            if (lengthPosition >= previousOffset && lengthPosition <= nextOffset) {
                const dir = bToA.normalize();
                const localOffset = lengthPosition - previousOffset;
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](a.x + dir.x * localOffset, a.y + dir.y * localOffset);
            }
            previousOffset = nextOffset;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero();
    }
    /**
     * Creates a new path starting from an x and y position
     * @param x starting x value
     * @param y starting y value
     * @returns a new Path2 starting at the coordinates (x, y).
     */ static StartingAt(x, y) {
        return new Path2(x, y);
    }
}
class Path3D {
    /**
     * new Path3D(path, normal, raw)
     * Creates a Path3D. A Path3D is a logical math object, so not a mesh.
     * please read the description in the tutorial : https://doc.babylonjs.com/features/featuresDeepDive/mesh/path3D
     * @param path an array of Vector3, the curve axis of the Path3D
     * @param firstNormal (options) Vector3, the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.
     * @param raw (optional, default false) : boolean, if true the returned Path3D isn't normalized. Useful to depict path acceleration or speed.
     * @param alignTangentsWithPath (optional, default false) : boolean, if true the tangents will be aligned with the path.
     */ constructor(/**
     * an array of Vector3, the curve axis of the Path3D
     */ path, firstNormal = null, raw, alignTangentsWithPath = false){
        this.path = path;
        this._curve = new Array();
        this._distances = new Array();
        this._tangents = new Array();
        this._normals = new Array();
        this._binormals = new Array();
        // holds interpolated point data
        this._pointAtData = {
            id: 0,
            point: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
            previousPointArrayIndex: 0,
            position: 0,
            subPosition: 0,
            interpolateReady: false,
            interpolationMatrix: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity()
        };
        for(let p = 0; p < path.length; p++){
            this._curve[p] = path[p].clone(); // hard copy
        }
        this._raw = raw || false;
        this._alignTangentsWithPath = alignTangentsWithPath;
        this._compute(firstNormal, alignTangentsWithPath);
    }
    /**
     * Returns the Path3D array of successive Vector3 designing its curve.
     * @returns the Path3D array of successive Vector3 designing its curve.
     */ getCurve() {
        return this._curve;
    }
    /**
     * Returns the Path3D array of successive Vector3 designing its curve.
     * @returns the Path3D array of successive Vector3 designing its curve.
     */ getPoints() {
        return this._curve;
    }
    /**
     * @returns the computed length (float) of the path.
     */ length() {
        return this._distances[this._distances.length - 1];
    }
    /**
     * Returns an array populated with tangent vectors on each Path3D curve point.
     * @returns an array populated with tangent vectors on each Path3D curve point.
     */ getTangents() {
        return this._tangents;
    }
    /**
     * Returns an array populated with normal vectors on each Path3D curve point.
     * @returns an array populated with normal vectors on each Path3D curve point.
     */ getNormals() {
        return this._normals;
    }
    /**
     * Returns an array populated with binormal vectors on each Path3D curve point.
     * @returns an array populated with binormal vectors on each Path3D curve point.
     */ getBinormals() {
        return this._binormals;
    }
    /**
     * Returns an array populated with distances (float) of the i-th point from the first curve point.
     * @returns an array populated with distances (float) of the i-th point from the first curve point.
     */ getDistances() {
        return this._distances;
    }
    /**
     * Returns an interpolated point along this path
     * @param position the position of the point along this path, from 0.0 to 1.0
     * @returns a new Vector3 as the point
     */ getPointAt(position) {
        return this._updatePointAtData(position).point;
    }
    /**
     * Returns the tangent vector of an interpolated Path3D curve point at the specified position along this path.
     * @param position the position of the point along this path, from 0.0 to 1.0
     * @param interpolated (optional, default false) : boolean, if true returns an interpolated tangent instead of the tangent of the previous path point.
     * @returns a tangent vector corresponding to the interpolated Path3D curve point, if not interpolated, the tangent is taken from the precomputed tangents array.
     */ getTangentAt(position, interpolated = false) {
        this._updatePointAtData(position, interpolated);
        return interpolated ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Forward(), this._pointAtData.interpolationMatrix) : this._tangents[this._pointAtData.previousPointArrayIndex];
    }
    /**
     * Returns the tangent vector of an interpolated Path3D curve point at the specified position along this path.
     * @param position the position of the point along this path, from 0.0 to 1.0
     * @param interpolated (optional, default false) : boolean, if true returns an interpolated normal instead of the normal of the previous path point.
     * @returns a normal vector corresponding to the interpolated Path3D curve point, if not interpolated, the normal is taken from the precomputed normals array.
     */ getNormalAt(position, interpolated = false) {
        this._updatePointAtData(position, interpolated);
        return interpolated ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Right(), this._pointAtData.interpolationMatrix) : this._normals[this._pointAtData.previousPointArrayIndex];
    }
    /**
     * Returns the binormal vector of an interpolated Path3D curve point at the specified position along this path.
     * @param position the position of the point along this path, from 0.0 to 1.0
     * @param interpolated (optional, default false) : boolean, if true returns an interpolated binormal instead of the binormal of the previous path point.
     * @returns a binormal vector corresponding to the interpolated Path3D curve point, if not interpolated, the binormal is taken from the precomputed binormals array.
     */ getBinormalAt(position, interpolated = false) {
        this._updatePointAtData(position, interpolated);
        return interpolated ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, this._pointAtData.interpolationMatrix) : this._binormals[this._pointAtData.previousPointArrayIndex];
    }
    /**
     * Returns the distance (float) of an interpolated Path3D curve point at the specified position along this path.
     * @param position the position of the point along this path, from 0.0 to 1.0
     * @returns the distance of the interpolated Path3D curve point at the specified position along this path.
     */ getDistanceAt(position) {
        return this.length() * position;
    }
    /**
     * Returns the array index of the previous point of an interpolated point along this path
     * @param position the position of the point to interpolate along this path, from 0.0 to 1.0
     * @returns the array index
     */ getPreviousPointIndexAt(position) {
        this._updatePointAtData(position);
        return this._pointAtData.previousPointArrayIndex;
    }
    /**
     * Returns the position of an interpolated point relative to the two path points it lies between, from 0.0 (point A) to 1.0 (point B)
     * @param position the position of the point to interpolate along this path, from 0.0 to 1.0
     * @returns the sub position
     */ getSubPositionAt(position) {
        this._updatePointAtData(position);
        return this._pointAtData.subPosition;
    }
    /**
     * Returns the position of the closest virtual point on this path to an arbitrary Vector3, from 0.0 to 1.0
     * @param target the vector of which to get the closest position to
     * @returns the position of the closest virtual point on this path to the target vector
     */ getClosestPositionTo(target) {
        let smallestDistance = Number.MAX_VALUE;
        let closestPosition = 0.0;
        for(let i = 0; i < this._curve.length - 1; i++){
            const point = this._curve[i + 0];
            const tangent = this._curve[i + 1].subtract(point).normalize();
            const subLength = this._distances[i + 1] - this._distances[i + 0];
            const subPosition = Math.min(Math.max(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(tangent, target.subtract(point).normalize()), 0.0) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(point, target) / subLength, 1.0);
            const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(point.add(tangent.scale(subPosition * subLength)), target);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestPosition = (this._distances[i + 0] + subLength * subPosition) / this.length();
            }
        }
        return closestPosition;
    }
    /**
     * Returns a sub path (slice) of this path
     * @param start the position of the fist path point, from 0.0 to 1.0, or a negative value, which will get wrapped around from the end of the path to 0.0 to 1.0 values
     * @param end the position of the last path point, from 0.0 to 1.0, or a negative value, which will get wrapped around from the end of the path to 0.0 to 1.0 values
     * @returns a sub path (slice) of this path
     */ slice(start = 0.0, end = 1.0) {
        if (start < 0.0) {
            start = 1 - start * -1.0 % 1.0;
        }
        if (end < 0.0) {
            end = 1 - end * -1.0 % 1.0;
        }
        if (start > end) {
            const _start = start;
            start = end;
            end = _start;
        }
        const curvePoints = this.getCurve();
        const startPoint = this.getPointAt(start);
        let startIndex = this.getPreviousPointIndexAt(start);
        const endPoint = this.getPointAt(end);
        const endIndex = this.getPreviousPointIndexAt(end) + 1;
        const slicePoints = [];
        if (start !== 0.0) {
            startIndex++;
            slicePoints.push(startPoint);
        }
        slicePoints.push(...curvePoints.slice(startIndex, endIndex));
        if (end !== 1.0 || start === 1.0) {
            slicePoints.push(endPoint);
        }
        return new Path3D(slicePoints, this.getNormalAt(start), this._raw, this._alignTangentsWithPath);
    }
    /**
     * Forces the Path3D tangent, normal, binormal and distance recomputation.
     * @param path path which all values are copied into the curves points
     * @param firstNormal which should be projected onto the curve
     * @param alignTangentsWithPath (optional, default false) : boolean, if true the tangents will be aligned with the path
     * @returns the same object updated.
     */ update(path, firstNormal = null, alignTangentsWithPath = false) {
        for(let p = 0; p < path.length; p++){
            this._curve[p].x = path[p].x;
            this._curve[p].y = path[p].y;
            this._curve[p].z = path[p].z;
        }
        this._compute(firstNormal, alignTangentsWithPath);
        return this;
    }
    // private function compute() : computes tangents, normals and binormals
    _compute(firstNormal, alignTangentsWithPath = false) {
        const l = this._curve.length;
        if (l < 2) {
            return;
        }
        // first and last tangents
        this._tangents[0] = this._getFirstNonNullVector(0);
        if (!this._raw) {
            this._tangents[0].normalize();
        }
        this._tangents[l - 1] = this._curve[l - 1].subtract(this._curve[l - 2]);
        if (!this._raw) {
            this._tangents[l - 1].normalize();
        }
        // normals and binormals at first point : arbitrary vector with _normalVector()
        const tg0 = this._tangents[0];
        const pp0 = this._normalVector(tg0, firstNormal);
        this._normals[0] = pp0;
        if (!this._raw) {
            this._normals[0].normalize();
        }
        this._binormals[0] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(tg0, this._normals[0]);
        if (!this._raw) {
            this._binormals[0].normalize();
        }
        this._distances[0] = 0.0;
        // normals and binormals : next points
        let prev; // previous vector (segment)
        let cur; // current vector (segment)
        let curTang; // current tangent
        // previous normal
        let prevNor; // previous normal
        let prevBinor; // previous binormal
        for(let i = 1; i < l; i++){
            // tangents
            prev = this._getLastNonNullVector(i);
            if (i < l - 1) {
                cur = this._getFirstNonNullVector(i);
                this._tangents[i] = alignTangentsWithPath ? cur : prev.add(cur);
                this._tangents[i].normalize();
            }
            this._distances[i] = this._distances[i - 1] + this._curve[i].subtract(this._curve[i - 1]).length();
            // normals and binormals
            // http://www.cs.cmu.edu/afs/andrew/scs/cs/15-462/web/old/asst2camera.html
            curTang = this._tangents[i];
            prevBinor = this._binormals[i - 1];
            this._normals[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(prevBinor, curTang);
            if (!this._raw) {
                if (this._normals[i].length() === 0) {
                    prevNor = this._normals[i - 1];
                    this._normals[i] = prevNor.clone();
                } else {
                    this._normals[i].normalize();
                }
            }
            this._binormals[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(curTang, this._normals[i]);
            if (!this._raw) {
                this._binormals[i].normalize();
            }
        }
        this._pointAtData.id = NaN;
    }
    // private function getFirstNonNullVector(index)
    // returns the first non null vector from index : curve[index + N].subtract(curve[index])
    _getFirstNonNullVector(index) {
        let i = 1;
        let nNVector = this._curve[index + i].subtract(this._curve[index]);
        while(nNVector.length() === 0 && index + i + 1 < this._curve.length){
            i++;
            nNVector = this._curve[index + i].subtract(this._curve[index]);
        }
        return nNVector;
    }
    // private function getLastNonNullVector(index)
    // returns the last non null vector from index : curve[index].subtract(curve[index - N])
    _getLastNonNullVector(index) {
        let i = 1;
        let nLVector = this._curve[index].subtract(this._curve[index - i]);
        while(nLVector.length() === 0 && index > i + 1){
            i++;
            nLVector = this._curve[index].subtract(this._curve[index - i]);
        }
        return nLVector;
    }
    // private function normalVector(v0, vt, va) :
    // returns an arbitrary point in the plane defined by the point v0 and the vector vt orthogonal to this plane
    // if va is passed, it returns the va projection on the plane orthogonal to vt at the point v0
    _normalVector(vt, va) {
        let normal0;
        let tgl = vt.length();
        if (tgl === 0.0) {
            tgl = 1.0;
        }
        if (va === undefined || va === null) {
            let point;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(Math.abs(vt.y) / tgl, 1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"])) {
                // search for a point in the plane
                point = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.0, -1.0, 0.0);
            } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(Math.abs(vt.x) / tgl, 1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"])) {
                point = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1.0, 0.0, 0.0);
            } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"])(Math.abs(vt.z) / tgl, 1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"])) {
                point = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0.0, 0.0, 1.0);
            } else {
                point = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            }
            normal0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(vt, point);
        } else {
            normal0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(vt, va);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(normal0, vt, normal0);
        }
        normal0.normalize();
        return normal0;
    }
    /**
     * Updates the point at data for an interpolated point along this curve
     * @param position the position of the point along this curve, from 0.0 to 1.0
     * @param interpolateTNB
     * @interpolateTNB whether to compute the interpolated tangent, normal and binormal
     * @returns the (updated) point at data
     */ _updatePointAtData(position, interpolateTNB = false) {
        // set an id for caching the result
        if (this._pointAtData.id === position) {
            if (!this._pointAtData.interpolateReady) {
                this._updateInterpolationMatrix();
            }
            return this._pointAtData;
        } else {
            this._pointAtData.id = position;
        }
        const curvePoints = this.getPoints();
        // clamp position between 0.0 and 1.0
        if (position <= 0.0) {
            return this._setPointAtData(0.0, 0.0, curvePoints[0], 0, interpolateTNB);
        } else if (position >= 1.0) {
            return this._setPointAtData(1.0, 1.0, curvePoints[curvePoints.length - 1], curvePoints.length - 1, interpolateTNB);
        }
        let previousPoint = curvePoints[0];
        let currentPoint;
        let currentLength = 0.0;
        const targetLength = position * this.length();
        for(let i = 1; i < curvePoints.length; i++){
            currentPoint = curvePoints[i];
            const distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(previousPoint, currentPoint);
            currentLength += distance;
            if (currentLength === targetLength) {
                return this._setPointAtData(position, 1.0, currentPoint, i, interpolateTNB);
            } else if (currentLength > targetLength) {
                const toLength = currentLength - targetLength;
                const diff = toLength / distance;
                const dir = previousPoint.subtract(currentPoint);
                const point = currentPoint.add(dir.scaleInPlace(diff));
                return this._setPointAtData(position, 1 - diff, point, i - 1, interpolateTNB);
            }
            previousPoint = currentPoint;
        }
        return this._pointAtData;
    }
    /**
     * Updates the point at data from the specified parameters
     * @param position where along the path the interpolated point is, from 0.0 to 1.0
     * @param subPosition
     * @param point the interpolated point
     * @param parentIndex the index of an existing curve point that is on, or else positionally the first behind, the interpolated point
     * @param interpolateTNB whether to compute the interpolated tangent, normal and binormal
     * @returns the (updated) point at data
     */ _setPointAtData(position, subPosition, point, parentIndex, interpolateTNB) {
        this._pointAtData.point = point;
        this._pointAtData.position = position;
        this._pointAtData.subPosition = subPosition;
        this._pointAtData.previousPointArrayIndex = parentIndex;
        this._pointAtData.interpolateReady = interpolateTNB;
        if (interpolateTNB) {
            this._updateInterpolationMatrix();
        }
        return this._pointAtData;
    }
    /**
     * Updates the point at interpolation matrix for the tangents, normals and binormals
     */ _updateInterpolationMatrix() {
        this._pointAtData.interpolationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        const parentIndex = this._pointAtData.previousPointArrayIndex;
        if (parentIndex !== this._tangents.length - 1) {
            const index = parentIndex + 1;
            const tangentFrom = this._tangents[parentIndex].clone();
            const normalFrom = this._normals[parentIndex].clone();
            const binormalFrom = this._binormals[parentIndex].clone();
            const tangentTo = this._tangents[index].clone();
            const normalTo = this._normals[index].clone();
            const binormalTo = this._binormals[index].clone();
            const quatFrom = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationQuaternionFromAxis(normalFrom, binormalFrom, tangentFrom);
            const quatTo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationQuaternionFromAxis(normalTo, binormalTo, tangentTo);
            const quatAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Slerp(quatFrom, quatTo, this._pointAtData.subPosition);
            quatAt.toRotationMatrix(this._pointAtData.interpolationMatrix);
        }
    }
}
class Curve3 {
    /**
     * Returns a Curve3 object along a Quadratic Bezier curve : https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#quadratic-bezier-curve
     * @param v0 (Vector3) the origin point of the Quadratic Bezier
     * @param v1 (Vector3) the control point
     * @param v2 (Vector3) the end point of the Quadratic Bezier
     * @param nbPoints (integer) the wanted number of points in the curve
     * @returns the created Curve3
     */ static CreateQuadraticBezier(v0, v1, v2, nbPoints) {
        nbPoints = nbPoints > 2 ? nbPoints : 3;
        const bez = [];
        const equation = (t, val0, val1, val2)=>{
            const res = (1.0 - t) * (1.0 - t) * val0 + 2.0 * t * (1.0 - t) * val1 + t * t * val2;
            return res;
        };
        for(let i = 0; i <= nbPoints; i++){
            bez.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](equation(i / nbPoints, v0.x, v1.x, v2.x), equation(i / nbPoints, v0.y, v1.y, v2.y), equation(i / nbPoints, v0.z, v1.z, v2.z)));
        }
        return new Curve3(bez);
    }
    /**
     * Returns a Curve3 object along a Cubic Bezier curve : https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#cubic-bezier-curve
     * @param v0 (Vector3) the origin point of the Cubic Bezier
     * @param v1 (Vector3) the first control point
     * @param v2 (Vector3) the second control point
     * @param v3 (Vector3) the end point of the Cubic Bezier
     * @param nbPoints (integer) the wanted number of points in the curve
     * @returns the created Curve3
     */ static CreateCubicBezier(v0, v1, v2, v3, nbPoints) {
        nbPoints = nbPoints > 3 ? nbPoints : 4;
        const bez = [];
        const equation = (t, val0, val1, val2, val3)=>{
            const res = (1.0 - t) * (1.0 - t) * (1.0 - t) * val0 + 3.0 * t * (1.0 - t) * (1.0 - t) * val1 + 3.0 * t * t * (1.0 - t) * val2 + t * t * t * val3;
            return res;
        };
        for(let i = 0; i <= nbPoints; i++){
            bez.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](equation(i / nbPoints, v0.x, v1.x, v2.x, v3.x), equation(i / nbPoints, v0.y, v1.y, v2.y, v3.y), equation(i / nbPoints, v0.z, v1.z, v2.z, v3.z)));
        }
        return new Curve3(bez);
    }
    /**
     * Returns a Curve3 object along a Hermite Spline curve : https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#hermite-spline
     * @param p1 (Vector3) the origin point of the Hermite Spline
     * @param t1 (Vector3) the tangent vector at the origin point
     * @param p2 (Vector3) the end point of the Hermite Spline
     * @param t2 (Vector3) the tangent vector at the end point
     * @param nSeg (integer) the number of curve segments or nSeg + 1 points in the array
     * @returns the created Curve3
     */ static CreateHermiteSpline(p1, t1, p2, t2, nSeg) {
        const hermite = [];
        const step = 1.0 / nSeg;
        for(let i = 0; i <= nSeg; i++){
            hermite.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Hermite(p1, t1, p2, t2, i * step));
        }
        return new Curve3(hermite);
    }
    /**
     * Returns a Curve3 object along a CatmullRom Spline curve :
     * @param points (array of Vector3) the points the spline must pass through. At least, four points required
     * @param nbPoints (integer) the wanted number of points between each curve control points
     * @param closed (boolean) optional with default false, when true forms a closed loop from the points
     * @returns the created Curve3
     */ static CreateCatmullRomSpline(points, nbPoints, closed) {
        const catmullRom = [];
        const step = 1.0 / nbPoints;
        let amount = 0.0;
        if (closed) {
            const pointsCount = points.length;
            for(let i = 0; i < pointsCount; i++){
                amount = 0;
                for(let c = 0; c < nbPoints; c++){
                    catmullRom.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CatmullRom(points[i % pointsCount], points[(i + 1) % pointsCount], points[(i + 2) % pointsCount], points[(i + 3) % pointsCount], amount));
                    amount += step;
                }
            }
            catmullRom.push(catmullRom[0]);
        } else {
            const totalPoints = [];
            totalPoints.push(points[0].clone());
            Array.prototype.push.apply(totalPoints, points);
            totalPoints.push(points[points.length - 1].clone());
            let i = 0;
            for(; i < totalPoints.length - 3; i++){
                amount = 0;
                for(let c = 0; c < nbPoints; c++){
                    catmullRom.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CatmullRom(totalPoints[i], totalPoints[i + 1], totalPoints[i + 2], totalPoints[i + 3], amount));
                    amount += step;
                }
            }
            i--;
            catmullRom.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CatmullRom(totalPoints[i], totalPoints[i + 1], totalPoints[i + 2], totalPoints[i + 3], amount));
        }
        return new Curve3(catmullRom);
    }
    /**
     * Returns a Curve3 object along an arc through three vector3 points:
     * The three points should not be colinear. When they are the Curve3 is empty.
     * @param first (Vector3) the first point the arc must pass through.
     * @param second (Vector3) the second point the arc must pass through.
     * @param third (Vector3) the third point the arc must pass through.
     * @param steps (number) the larger the number of steps the more detailed the arc.
     * @param closed (boolean) optional with default false, when true forms the chord from the first and third point
     * @param fullCircle Circle (boolean) optional with default false, when true forms the complete circle through the three points
     * @returns the created Curve3
     */ static ArcThru3Points(first, second, third, steps = 32, closed = false, fullCircle = false) {
        const arc = [];
        const vec1 = second.subtract(first);
        const vec2 = third.subtract(second);
        const vec3 = first.subtract(third);
        const zAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(vec1, vec2);
        const len4 = zAxis.length();
        if (len4 < Math.pow(10, -8)) {
            return new Curve3(arc); // colinear points arc is empty
        }
        const len1Sq = vec1.lengthSquared();
        const len2Sq = vec2.lengthSquared();
        const len3Sq = vec3.lengthSquared();
        const len4Sq = zAxis.lengthSquared();
        const len1 = vec1.length();
        const len2 = vec2.length();
        const len3 = vec3.length();
        const radius = 0.5 * len1 * len2 * len3 / len4;
        const dot1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(vec1, vec3);
        const dot2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(vec1, vec2);
        const dot3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(vec2, vec3);
        const a = -0.5 * len2Sq * dot1 / len4Sq;
        const b = -0.5 * len3Sq * dot2 / len4Sq;
        const c = -0.5 * len1Sq * dot3 / len4Sq;
        const center = first.scale(a).add(second.scale(b)).add(third.scale(c));
        const radiusVec = first.subtract(center);
        const xAxis = radiusVec.normalize();
        const yAxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(zAxis, xAxis).normalize();
        if (fullCircle) {
            const dStep = 2 * Math.PI / steps;
            for(let theta = 0; theta <= 2 * Math.PI; theta += dStep){
                arc.push(center.add(xAxis.scale(radius * Math.cos(theta)).add(yAxis.scale(radius * Math.sin(theta)))));
            }
            arc.push(first);
        } else {
            const dStep = 1 / steps;
            let theta = 0;
            let point = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            do {
                point = center.add(xAxis.scale(radius * Math.cos(theta)).add(yAxis.scale(radius * Math.sin(theta))));
                arc.push(point);
                theta += dStep;
            }while (!point.equalsWithEpsilon(third, radius * dStep * 1.1))
            arc.push(third);
            if (closed) {
                arc.push(first);
            }
        }
        return new Curve3(arc);
    }
    /**
     * A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space.
     * A Curve3 is designed from a series of successive Vector3.
     * Tuto : https://doc.babylonjs.com/features/featuresDeepDive/mesh/drawCurves#curve3-object
     * @param points points which make up the curve
     */ constructor(points){
        this._length = 0.0;
        this._points = points;
        this._length = this._computeLength(points);
    }
    /**
     * @returns the Curve3 stored array of successive Vector3
     */ getPoints() {
        return this._points;
    }
    /**
     * @returns the computed length (float) of the curve.
     */ length() {
        return this._length;
    }
    /**
     * Returns a new instance of Curve3 object : var curve = curveA.continue(curveB);
     * This new Curve3 is built by translating and sticking the curveB at the end of the curveA.
     * curveA and curveB keep unchanged.
     * @param curve the curve to continue from this curve
     * @returns the newly constructed curve
     */ continue(curve) {
        const lastPoint = this._points[this._points.length - 1];
        const continuedPoints = this._points.slice();
        const curvePoints = curve.getPoints();
        for(let i = 1; i < curvePoints.length; i++){
            continuedPoints.push(curvePoints[i].subtract(curvePoints[0]).add(lastPoint));
        }
        const continuedCurve = new Curve3(continuedPoints);
        return continuedCurve;
    }
    _computeLength(path) {
        let l = 0;
        for(let i = 1; i < path.length; i++){
            l += path[i].subtract(path[i - 1]).length();
        }
        return l;
    }
} //# sourceMappingURL=math.path.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vertexFormat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PositionNormalTextureVertex",
    ()=>PositionNormalTextureVertex,
    "PositionNormalVertex",
    ()=>PositionNormalVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
class PositionNormalVertex {
    /**
     * Creates a PositionNormalVertex
     * @param position the position of the vertex (defaut: 0,0,0)
     * @param normal the normal of the vertex (defaut: 0,1,0)
     */ constructor(/** [Vector3.Zero()] the position of the vertex (defaut: 0,0,0) */ position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), /** [Vector3.Up()] the normal of the vertex (defaut: 0,1,0) */ normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up()){
        this.position = position;
        this.normal = normal;
    }
    /**
     * Clones the PositionNormalVertex
     * @returns the cloned PositionNormalVertex
     */ clone() {
        return new PositionNormalVertex(this.position.clone(), this.normal.clone());
    }
}
class PositionNormalTextureVertex {
    /**
     * Creates a PositionNormalTextureVertex
     * @param position the position of the vertex (defaut: 0,0,0)
     * @param normal the normal of the vertex (defaut: 0,1,0)
     * @param uv the uv of the vertex (default: 0,0)
     */ constructor(/** [Vector3.Zero()] the position of the vertex (defaut: 0,0,0) */ position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(), /** [Vector3.Up()] the normal of the vertex (defaut: 0,1,0) */ normal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up(), /** [Vector3.Zero()] the uv of the vertex (default: 0,0) */ uv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero()){
        this.position = position;
        this.normal = normal;
        this.uv = uv;
    }
    /**
     * Clones the PositionNormalTextureVertex
     * @returns the cloned PositionNormalTextureVertex
     */ clone() {
        return new PositionNormalTextureVertex(this.position.clone(), this.normal.clone(), this.uv.clone());
    }
} //# sourceMappingURL=math.vertexFormat.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$frustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.frustum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vertexFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vertexFormat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-client] (ecmascript)"); //# sourceMappingURL=math.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/sphericalPolynomial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "SphericalHarmonics",
    ()=>SphericalHarmonics,
    "SphericalPolynomial",
    ()=>SphericalPolynomial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript) <locals>");
;
;
// https://dickyjim.wordpress.com/2013/09/04/spherical-harmonics-for-beginners/
// http://silviojemma.com/public/papers/lighting/spherical-harmonic-lighting.pdf
// https://www.ppsloan.org/publications/StupidSH36.pdf
// http://cseweb.ucsd.edu/~ravir/papers/envmap/envmap.pdf
// https://www.ppsloan.org/publications/SHJCGT.pdf
// https://www.ppsloan.org/publications/shdering.pdf
// https://google.github.io/filament/Filament.md.html#annex/sphericalharmonics
// https://patapom.com/blog/SHPortal/
// https://imdoingitwrong.wordpress.com/2011/04/14/spherical-harmonics-wtf/
// Using real SH basis:
//  m>0             m   m
// y   = sqrt(2) * K * P * cos(m*phi) * cos(theta)
//  l               l   l
//
//  m<0             m   |m|
// y   = sqrt(2) * K * P * sin(m*phi) * cos(theta)
//  l               l   l
//
//  m=0   0   0
// y   = K * P * trigono terms
//  l     l   l
//
//  m       (2l + 1)(l - |m|)!
// K = sqrt(------------------)
//  l           4pi(l + |m|)!
//
// and P by recursion:
//
// P00(x) = 1
// P01(x) = x
// Pll(x) = (-1^l)(2l - 1)!!(1-x*x)^(1/2)
//          ((2l - 1)x[Pl-1/m]-(l + m - 1)[Pl-2/m])
// Plm(x) = ---------------------------------------
//                         l - m
// Leaving the trigonometric terms aside we can precompute the constants to :
const SH3ylmBasisConstants = [
    Math.sqrt(1 / (4 * Math.PI)),
    -Math.sqrt(3 / (4 * Math.PI)),
    Math.sqrt(3 / (4 * Math.PI)),
    -Math.sqrt(3 / (4 * Math.PI)),
    Math.sqrt(15 / (4 * Math.PI)),
    -Math.sqrt(15 / (4 * Math.PI)),
    Math.sqrt(5 / (16 * Math.PI)),
    -Math.sqrt(15 / (4 * Math.PI)),
    Math.sqrt(15 / (16 * Math.PI))
];
// cm = cos(m * phi)
// sm = sin(m * phi)
// {x,y,z} = {cos(phi)sin(theta), sin(phi)sin(theta), cos(theta)}
// By recursion on using trigo identities:
const SH3ylmBasisTrigonometricTerms = [
    ()=>1,
    (direction)=>direction.y,
    (direction)=>direction.z,
    (direction)=>direction.x,
    (direction)=>direction.x * direction.y,
    (direction)=>direction.y * direction.z,
    (direction)=>3 * direction.z * direction.z - 1,
    (direction)=>direction.x * direction.z,
    (direction)=>direction.x * direction.x - direction.y * direction.y
];
// Wrap the full compute
const applySH3 = (lm, direction)=>{
    return SH3ylmBasisConstants[lm] * SH3ylmBasisTrigonometricTerms[lm](direction);
};
// Derived from the integration of the a kernel convolution to SH.
// Great explanation here: https://patapom.com/blog/SHPortal/#about-distant-radiance-and-irradiance-environments
const SHCosKernelConvolution = [
    Math.PI,
    2 * Math.PI / 3,
    2 * Math.PI / 3,
    2 * Math.PI / 3,
    Math.PI / 4,
    Math.PI / 4,
    Math.PI / 4,
    Math.PI / 4,
    Math.PI / 4
];
class SphericalHarmonics {
    constructor(){
        /**
         * Defines whether or not the harmonics have been prescaled for rendering.
         */ this.preScaled = false;
        /**
         * The l0,0 coefficients of the spherical harmonics
         */ this.l00 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The l1,-1 coefficients of the spherical harmonics
         */ this.l1_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The l1,0 coefficients of the spherical harmonics
         */ this.l10 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The l1,1 coefficients of the spherical harmonics
         */ this.l11 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The l2,-2 coefficients of the spherical harmonics
         */ this.l2_2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The l2,-1 coefficients of the spherical harmonics
         */ this.l2_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The l2,0 coefficients of the spherical harmonics
         */ this.l20 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The l2,1 coefficients of the spherical harmonics
         */ this.l21 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The l2,2 coefficients of the spherical harmonics
         */ this.l22 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /**
     * Adds a light to the spherical harmonics
     * @param direction the direction of the light
     * @param color the color of the light
     * @param deltaSolidAngle the delta solid angle of the light
     */ addLight(direction, color, deltaSolidAngle) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].set(color.r, color.g, color.b);
        const colorVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        const c = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        colorVector.scaleToRef(deltaSolidAngle, c);
        c.scaleToRef(applySH3(0, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l00.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        c.scaleToRef(applySH3(1, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l1_1.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        c.scaleToRef(applySH3(2, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l10.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        c.scaleToRef(applySH3(3, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l11.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        c.scaleToRef(applySH3(4, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l2_2.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        c.scaleToRef(applySH3(5, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l2_1.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        c.scaleToRef(applySH3(6, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l20.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        c.scaleToRef(applySH3(7, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l21.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        c.scaleToRef(applySH3(8, direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
        this.l22.addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2]);
    }
    /**
     * Scales the spherical harmonics by the given amount
     * @param scale the amount to scale
     */ scaleInPlace(scale) {
        this.l00.scaleInPlace(scale);
        this.l1_1.scaleInPlace(scale);
        this.l10.scaleInPlace(scale);
        this.l11.scaleInPlace(scale);
        this.l2_2.scaleInPlace(scale);
        this.l2_1.scaleInPlace(scale);
        this.l20.scaleInPlace(scale);
        this.l21.scaleInPlace(scale);
        this.l22.scaleInPlace(scale);
    }
    /**
     * Convert from incident radiance (Li) to irradiance (E) by applying convolution with the cosine-weighted hemisphere.
     *
     * ```
     * E_lm = A_l * L_lm
     * ```
     *
     * In spherical harmonics this convolution amounts to scaling factors for each frequency band.
     * This corresponds to equation 5 in "An Efficient Representation for Irradiance Environment Maps", where
     * the scaling factors are given in equation 9.
     */ convertIncidentRadianceToIrradiance() {
        // Constant (Band 0)
        this.l00.scaleInPlace(SHCosKernelConvolution[0]);
        // Linear (Band 1)
        this.l1_1.scaleInPlace(SHCosKernelConvolution[1]);
        this.l10.scaleInPlace(SHCosKernelConvolution[2]);
        this.l11.scaleInPlace(SHCosKernelConvolution[3]);
        // Quadratic (Band 2)
        this.l2_2.scaleInPlace(SHCosKernelConvolution[4]);
        this.l2_1.scaleInPlace(SHCosKernelConvolution[5]);
        this.l20.scaleInPlace(SHCosKernelConvolution[6]);
        this.l21.scaleInPlace(SHCosKernelConvolution[7]);
        this.l22.scaleInPlace(SHCosKernelConvolution[8]);
    }
    /**
     * Convert from irradiance to outgoing radiance for Lambertian BDRF, suitable for efficient shader evaluation.
     *
     * ```
     * L = (1/pi) * E * rho
     * ```
     *
     * This is done by an additional scale by 1/pi, so is a fairly trivial operation but important conceptually.
     */ convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1.0 / Math.PI);
    // The resultant SH now represents outgoing radiance, so includes the Lambert 1/pi normalisation factor but without albedo (rho) applied
    // (The pixel shader must apply albedo after texture fetches, etc).
    }
    /**
     * Integrates the reconstruction coefficients directly in to the SH preventing further
     * required operations at run time.
     *
     * This is simply done by scaling back the SH with Ylm constants parameter.
     * The trigonometric part being applied by the shader at run time.
     */ preScaleForRendering() {
        this.preScaled = true;
        this.l00.scaleInPlace(SH3ylmBasisConstants[0]);
        this.l1_1.scaleInPlace(SH3ylmBasisConstants[1]);
        this.l10.scaleInPlace(SH3ylmBasisConstants[2]);
        this.l11.scaleInPlace(SH3ylmBasisConstants[3]);
        this.l2_2.scaleInPlace(SH3ylmBasisConstants[4]);
        this.l2_1.scaleInPlace(SH3ylmBasisConstants[5]);
        this.l20.scaleInPlace(SH3ylmBasisConstants[6]);
        this.l21.scaleInPlace(SH3ylmBasisConstants[7]);
        this.l22.scaleInPlace(SH3ylmBasisConstants[8]);
    }
    /**
     * update the spherical harmonics coefficients from the given array
     * @param data defines the 9x3 coefficients (l00, l1-1, l10, l11, l2-2, l2-1, l20, l21, l22)
     * @returns the spherical harmonics (this)
     */ updateFromArray(data) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[0], 0, this.l00);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[1], 0, this.l1_1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[2], 0, this.l10);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[3], 0, this.l11);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[4], 0, this.l2_2);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[5], 0, this.l2_1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[6], 0, this.l20);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[7], 0, this.l21);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[8], 0, this.l22);
        return this;
    }
    /**
     * update the spherical harmonics coefficients from the given floats array
     * @param data defines the 9x3 coefficients (l00, l1-1, l10, l11, l2-2, l2-1, l20, l21, l22)
     * @returns the spherical harmonics (this)
     */ updateFromFloatsArray(data) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[0], data[1], data[2], this.l00);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[3], data[4], data[5], this.l1_1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[6], data[7], data[8], this.l10);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[9], data[10], data[11], this.l11);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[12], data[13], data[14], this.l2_2);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[15], data[16], data[17], this.l2_1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[18], data[19], data[20], this.l20);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[21], data[22], data[23], this.l21);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromFloatsToRef(data[24], data[25], data[26], this.l22);
        return this;
    }
    /**
     * Constructs a spherical harmonics from an array.
     * @param data defines the 9x3 coefficients (l00, l1-1, l10, l11, l2-2, l2-1, l20, l21, l22)
     * @returns the spherical harmonics
     */ static FromArray(data) {
        const sh = new SphericalHarmonics();
        return sh.updateFromArray(data);
    }
    // Keep for references.
    /**
     * Gets the spherical harmonics from polynomial
     * @param polynomial the spherical polynomial
     * @returns the spherical harmonics
     */ static FromPolynomial(polynomial) {
        const result = new SphericalHarmonics();
        result.l00 = polynomial.xx.scale(0.376127).add(polynomial.yy.scale(0.376127)).add(polynomial.zz.scale(0.376126));
        result.l1_1 = polynomial.y.scale(0.977204);
        result.l10 = polynomial.z.scale(0.977204);
        result.l11 = polynomial.x.scale(0.977204);
        result.l2_2 = polynomial.xy.scale(1.16538);
        result.l2_1 = polynomial.yz.scale(1.16538);
        result.l20 = polynomial.zz.scale(1.34567).subtract(polynomial.xx.scale(0.672834)).subtract(polynomial.yy.scale(0.672834));
        result.l21 = polynomial.zx.scale(1.16538);
        result.l22 = polynomial.xx.scale(1.16538).subtract(polynomial.yy.scale(1.16538));
        result.l1_1.scaleInPlace(-1);
        result.l11.scaleInPlace(-1);
        result.l2_1.scaleInPlace(-1);
        result.l21.scaleInPlace(-1);
        result.scaleInPlace(Math.PI);
        return result;
    }
}
class SphericalPolynomial {
    constructor(){
        /**
         * The x coefficients of the spherical polynomial
         */ this.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The y coefficients of the spherical polynomial
         */ this.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The z coefficients of the spherical polynomial
         */ this.z = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The xx coefficients of the spherical polynomial
         */ this.xx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The yy coefficients of the spherical polynomial
         */ this.yy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The zz coefficients of the spherical polynomial
         */ this.zz = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The xy coefficients of the spherical polynomial
         */ this.xy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The yz coefficients of the spherical polynomial
         */ this.yz = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * The zx coefficients of the spherical polynomial
         */ this.zx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /**
     * The spherical harmonics used to create the polynomials.
     */ get preScaledHarmonics() {
        if (!this._harmonics) {
            this._harmonics = SphericalHarmonics.FromPolynomial(this);
        }
        if (!this._harmonics.preScaled) {
            this._harmonics.preScaleForRendering();
        }
        return this._harmonics;
    }
    /**
     * Adds an ambient color to the spherical polynomial
     * @param color the color to add
     */ addAmbient(color) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].copyFromFloats(color.r, color.g, color.b);
        const colorVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        this.xx.addInPlace(colorVector);
        this.yy.addInPlace(colorVector);
        this.zz.addInPlace(colorVector);
    }
    /**
     * Scales the spherical polynomial by the given amount
     * @param scale the amount to scale
     */ scaleInPlace(scale) {
        this.x.scaleInPlace(scale);
        this.y.scaleInPlace(scale);
        this.z.scaleInPlace(scale);
        this.xx.scaleInPlace(scale);
        this.yy.scaleInPlace(scale);
        this.zz.scaleInPlace(scale);
        this.yz.scaleInPlace(scale);
        this.zx.scaleInPlace(scale);
        this.xy.scaleInPlace(scale);
    }
    /**
     * Updates the spherical polynomial from harmonics
     * @param harmonics the spherical harmonics
     * @returns the spherical polynomial
     */ updateFromHarmonics(harmonics) {
        this._harmonics = harmonics;
        this.x.copyFrom(harmonics.l11);
        this.x.scaleInPlace(1.02333).scaleInPlace(-1);
        this.y.copyFrom(harmonics.l1_1);
        this.y.scaleInPlace(1.02333).scaleInPlace(-1);
        this.z.copyFrom(harmonics.l10);
        this.z.scaleInPlace(1.02333);
        this.xx.copyFrom(harmonics.l00);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].copyFrom(harmonics.l20).scaleInPlace(0.247708);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].copyFrom(harmonics.l22).scaleInPlace(0.429043);
        this.xx.scaleInPlace(0.886277).subtractInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]).addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]);
        this.yy.copyFrom(harmonics.l00);
        this.yy.scaleInPlace(0.886277).subtractInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]).subtractInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1]);
        this.zz.copyFrom(harmonics.l00);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].copyFrom(harmonics.l20).scaleInPlace(0.495417);
        this.zz.scaleInPlace(0.886277).addInPlace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
        this.yz.copyFrom(harmonics.l2_1);
        this.yz.scaleInPlace(0.858086).scaleInPlace(-1);
        this.zx.copyFrom(harmonics.l21);
        this.zx.scaleInPlace(0.858086).scaleInPlace(-1);
        this.xy.copyFrom(harmonics.l2_2);
        this.xy.scaleInPlace(0.858086);
        this.scaleInPlace(1.0 / Math.PI);
        return this;
    }
    /**
     * Gets the spherical polynomial from harmonics
     * @param harmonics the spherical harmonics
     * @returns the spherical polynomial
     */ static FromHarmonics(harmonics) {
        const result = new SphericalPolynomial();
        return result.updateFromHarmonics(harmonics);
    }
    /**
     * Constructs a spherical polynomial from an array.
     * @param data defines the 9x3 coefficients (x, y, z, xx, yy, zz, yz, zx, xy)
     * @returns the spherical polynomial
     */ static FromArray(data) {
        const sp = new SphericalPolynomial();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[0], 0, sp.x);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[1], 0, sp.y);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[2], 0, sp.z);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[3], 0, sp.xx);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[4], 0, sp.yy);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[5], 0, sp.zz);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[6], 0, sp.yz);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[7], 0, sp.zx);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArrayToRef(data[8], 0, sp.xy);
        return sp;
    }
} //# sourceMappingURL=sphericalPolynomial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.functions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FixFlippedFaces",
    ()=>FixFlippedFaces,
    "extractMinAndMax",
    ()=>extractMinAndMax,
    "extractMinAndMaxIndexed",
    ()=>extractMinAndMaxIndexed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
;
;
;
// This helper class is only here so we can apply the nativeOverride decorator to functions.
class MathHelpers {
    static extractMinAndMaxIndexed(positions, indices, indexStart, indexCount, minimum, maximum) {
        for(let index = indexStart; index < indexStart + indexCount; index++){
            const offset = indices[index] * 3;
            const x = positions[offset];
            const y = positions[offset + 1];
            const z = positions[offset + 2];
            minimum.minimizeInPlaceFromFloats(x, y, z);
            maximum.maximizeInPlaceFromFloats(x, y, z);
        }
    }
    static extractMinAndMax(positions, start, count, stride, minimum, maximum) {
        for(let index = start, offset = start * stride; index < start + count; index++, offset += stride){
            const x = positions[offset];
            const y = positions[offset + 1];
            const z = positions[offset + 2];
            minimum.minimizeInPlaceFromFloats(x, y, z);
            maximum.maximizeInPlaceFromFloats(x, y, z);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeOverride"].filter((...[positions, indices])=>!Array.isArray(positions) && !Array.isArray(indices))
], MathHelpers, "extractMinAndMaxIndexed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nativeOverride"].filter((...[positions])=>!Array.isArray(positions))
], MathHelpers, "extractMinAndMax", null);
function extractMinAndMaxIndexed(positions, indices, indexStart, indexCount, bias = null) {
    const minimum = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    const maximum = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    MathHelpers.extractMinAndMaxIndexed(positions, indices, indexStart, indexCount, minimum, maximum);
    if (bias) {
        minimum.x -= minimum.x * bias.x + bias.y;
        minimum.y -= minimum.y * bias.x + bias.y;
        minimum.z -= minimum.z * bias.x + bias.y;
        maximum.x += maximum.x * bias.x + bias.y;
        maximum.y += maximum.y * bias.x + bias.y;
        maximum.z += maximum.z * bias.x + bias.y;
    }
    return {
        minimum: minimum,
        maximum: maximum
    };
}
function extractMinAndMax(positions, start, count, bias = null, stride) {
    const minimum = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    const maximum = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    if (!stride) {
        stride = 3;
    }
    MathHelpers.extractMinAndMax(positions, start, count, stride, minimum, maximum);
    if (bias) {
        minimum.x -= minimum.x * bias.x + bias.y;
        minimum.y -= minimum.y * bias.x + bias.y;
        minimum.z -= minimum.z * bias.x + bias.y;
        maximum.x += maximum.x * bias.x + bias.y;
        maximum.y += maximum.y * bias.x + bias.y;
        maximum.z += maximum.z * bias.x + bias.y;
    }
    return {
        minimum: minimum,
        maximum: maximum
    };
}
function FixFlippedFaces(positions, indices) {
    const boundingInfo = extractMinAndMax(positions, 0, positions.length / 3);
    const inside = boundingInfo.maximum.subtract(boundingInfo.minimum).scale(0.5).add(boundingInfo.minimum);
    const tmpVectorA = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const tmpVectorB = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const tmpVectorC = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const tmpVectorAB = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const tmpVectorAC = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const tmpVectorNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    const tmpVectorAvgNormal = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    // Clean indices
    for(let index = 0; index < indices.length; index += 3){
        const a = indices[index];
        const b = indices[index + 1];
        const c = indices[index + 2];
        // Evaluate face normal
        tmpVectorA.fromArray(positions, a * 3);
        tmpVectorB.fromArray(positions, b * 3);
        tmpVectorC.fromArray(positions, c * 3);
        tmpVectorB.subtractToRef(tmpVectorA, tmpVectorAB);
        tmpVectorC.subtractToRef(tmpVectorA, tmpVectorAC);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(tmpVectorAB, tmpVectorAC, tmpVectorNormal);
        tmpVectorNormal.normalize();
        // Calculate normal from face center to the inside of the geometry
        const avgX = tmpVectorA.x + tmpVectorB.x + tmpVectorC.x;
        const avgY = tmpVectorA.y + tmpVectorB.y + tmpVectorC.y;
        const avgZ = tmpVectorA.z + tmpVectorB.z + tmpVectorC.z;
        tmpVectorAvgNormal.set(avgX / 3, avgY / 3, avgZ / 3);
        tmpVectorAvgNormal.subtractInPlace(inside);
        tmpVectorAvgNormal.normalize();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(tmpVectorNormal, tmpVectorAvgNormal) >= 0) {
            // Flip!
            indices[index] = c;
            indices[index + 2] = a;
        }
    }
} //# sourceMappingURL=math.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.functions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a string representation of the IVector2Like
 * @param vector defines the IVector2Like to stringify
 * @param decimalCount defines the number of decimals to use
 * @returns a string with the IVector2Like coordinates.
 */ __turbopack_context__.s([
    "Vector2ToFixed",
    ()=>Vector2ToFixed,
    "Vector3CopyToRef",
    ()=>Vector3CopyToRef,
    "Vector3Distance",
    ()=>Vector3Distance,
    "Vector3DistanceSquared",
    ()=>Vector3DistanceSquared,
    "Vector3Dot",
    ()=>Vector3Dot,
    "Vector3FromFloatsToRef",
    ()=>Vector3FromFloatsToRef,
    "Vector3Length",
    ()=>Vector3Length,
    "Vector3LengthSquared",
    ()=>Vector3LengthSquared,
    "Vector3LerpToRef",
    ()=>Vector3LerpToRef,
    "Vector3NormalizeToRef",
    ()=>Vector3NormalizeToRef,
    "Vector3ScaleInPlace",
    ()=>Vector3ScaleInPlace,
    "Vector3ScaleToRef",
    ()=>Vector3ScaleToRef,
    "Vector3SubtractToRef",
    ()=>Vector3SubtractToRef,
    "Vector3ToFixed",
    ()=>Vector3ToFixed,
    "Vector4Dot",
    ()=>Vector4Dot,
    "Vector4ToFixed",
    ()=>Vector4ToFixed
]);
function Vector2ToFixed(vector, decimalCount) {
    return `{X: ${vector.x.toFixed(decimalCount)} Y: ${vector.y.toFixed(decimalCount)}}`;
}
function Vector3Dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
function Vector3LengthSquared(vector) {
    return vector.x * vector.x + vector.y * vector.y + vector.z * vector.z;
}
function Vector3Length(vector) {
    return Math.sqrt(Vector3LengthSquared(vector));
}
function Vector3DistanceSquared(a, b) {
    const x = b.x - a.x;
    const y = b.y - a.y;
    const z = b.z - a.z;
    return x * x + y * y + z * z;
}
function Vector3Distance(a, b) {
    return Math.sqrt(Vector3DistanceSquared(a, b));
}
function Vector3FromFloatsToRef(x, y, z, result) {
    result.x = x;
    result.y = y;
    result.z = z;
    return result;
}
function Vector3ScaleToRef(a, scale, result) {
    result.x = a.x * scale;
    result.y = a.y * scale;
    result.z = a.z * scale;
    return result;
}
function Vector3ScaleInPlace(vector, scale) {
    vector.x *= scale;
    vector.y *= scale;
    vector.z *= scale;
    return vector;
}
function Vector3SubtractToRef(a, b, result) {
    result.x = a.x - b.x;
    result.y = a.y - b.y;
    result.z = a.z - b.z;
    return result;
}
function Vector3CopyToRef(source, result) {
    result.x = source.x;
    result.y = source.y;
    result.z = source.z;
    return result;
}
function Vector3LerpToRef(start, end, amount, result) {
    result.x = start.x + (end.x - start.x) * amount;
    result.y = start.y + (end.y - start.y) * amount;
    result.z = start.z + (end.z - start.z) * amount;
    return result;
}
function Vector3NormalizeToRef(vector, result) {
    const len = Vector3Length(vector);
    if (len === 0) {
        result.x = 0;
        result.y = 0;
        result.z = 0;
    } else {
        result.x = vector.x / len;
        result.y = vector.y / len;
        result.z = vector.z / len;
    }
    return result;
}
function Vector3ToFixed(vector, decimalCount) {
    return `{X: ${vector.x.toFixed(decimalCount)} Y: ${vector.y.toFixed(decimalCount)} Z: ${vector.z.toFixed(decimalCount)}}`;
}
function Vector4Dot(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
}
function Vector4ToFixed(vector, decimalCount) {
    return `{X: ${vector.x.toFixed(decimalCount)} Y: ${vector.y.toFixed(decimalCount)} Z: ${vector.z.toFixed(decimalCount)} W: ${vector.w.toFixed(decimalCount)}}`;
} //# sourceMappingURL=math.vector.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.isovector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_IsoVector",
    ()=>_IsoVector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
;
class _IsoVector {
    /**
     * Creates a new isovector from the given x and y coordinates
     * @param x defines the first coordinate, must be an integer
     * @param y defines the second coordinate, must be an integer
     */ constructor(/** [0] defines the first coordinate */ x = 0, /** [0] defines the second coordinate */ y = 0){
        this.x = x;
        this.y = y;
        if (x !== Math.floor(x)) {
            x = Math.floor(x);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("x is not an integer, floor(x) used");
        }
        if (y !== Math.floor(y)) {
            y = Math.floor(y);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("y is not an integer, floor(y) used");
        }
    }
    // Operators
    /**
     * Gets a new IsoVector copied from the IsoVector
     * @returns a new IsoVector
     */ clone() {
        return new _IsoVector(this.x, this.y);
    }
    /**
     * Rotates one IsoVector 60 degrees counter clockwise about another
     * Please note that this is an in place operation
     * @param other an IsoVector a center of rotation
     * @returns the rotated IsoVector
     */ rotate60About(other) {
        //other IsoVector
        const x = this.x;
        this.x = other.x + other.y - this.y;
        this.y = x + this.y - other.x;
        return this;
    }
    /**
     * Rotates one IsoVector 60 degrees clockwise about another
     * Please note that this is an in place operation
     * @param other an IsoVector as center of rotation
     * @returns the rotated IsoVector
     */ rotateNeg60About(other) {
        const x = this.x;
        this.x = x + this.y - other.y;
        this.y = other.x + other.y - x;
        return this;
    }
    /**
     * For an equilateral triangle OAB with O at isovector (0, 0) and A at isovector (m, n)
     * Rotates one IsoVector 120 degrees counter clockwise about the center of the triangle
     * Please note that this is an in place operation
     * @param m integer a measure a Primary triangle of order (m, n) m > n
     * @param n >= 0 integer a measure for a Primary triangle of order (m, n)
     * @returns the rotated IsoVector
     */ rotate120(m, n) {
        //m, n integers
        if (m !== Math.floor(m)) {
            m = Math.floor(m);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("m not an integer only floor(m) used");
        }
        if (n !== Math.floor(n)) {
            n = Math.floor(n);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("n not an integer only floor(n) used");
        }
        const x = this.x;
        this.x = m - x - this.y;
        this.y = n + x;
        return this;
    }
    /**
     * For an equilateral triangle OAB with O at isovector (0, 0) and A at isovector (m, n)
     * Rotates one IsoVector 120 degrees clockwise about the center of the triangle
     * Please note that this is an in place operation
     * @param m integer a measure a Primary triangle of order (m, n) m > n
     * @param n >= 0 integer a measure for a Primary triangle of order (m, n)
     * @returns the rotated IsoVector
     */ rotateNeg120(m, n) {
        //m, n integers
        if (m !== Math.floor(m)) {
            m = Math.floor(m);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("m is not an integer, floor(m) used");
        }
        if (n !== Math.floor(n)) {
            n = Math.floor(n);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("n is not an integer,   floor(n) used");
        }
        const x = this.x;
        this.x = this.y - n;
        this.y = m + n - x - this.y;
        return this;
    }
    /**
     * Transforms an IsoVector to one in Cartesian 3D space based on an isovector
     * @param origin an IsoVector
     * @param isoGridSize
     * @returns Point as a Vector3
     */ toCartesianOrigin(origin, isoGridSize) {
        const point = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        point.x = origin.x + 2 * this.x * isoGridSize + this.y * isoGridSize;
        point.y = origin.y + Math.sqrt(3) * this.y * isoGridSize;
        return point;
    }
    // Statics
    /**
     * Gets a new IsoVector(0, 0)
     * @returns a new IsoVector
     */ static Zero() {
        return new _IsoVector(0, 0);
    }
} //# sourceMappingURL=math.isovector.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/halton2DSequence.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Class for generating 2D Halton sequences.
 * From https://observablehq.com/@jrus/halton
 */ __turbopack_context__.s([
    "Halton2DSequence",
    ()=>Halton2DSequence
]);
class Halton2DSequence {
    /**
     * Creates a new Halton2DSequence.
     * @param numSamples Number of samples in the sequence.
     * @param baseX The base for the x coordinate (default: 2).
     * @param baseY The base for the y coordinate (default: 3).
     * @param width Factor to scale the x coordinate by (default: 1). The scaling factor is 1/width.
     * @param height Factor to scale the y coordinate by (default: 1). The scaling factor is 1/height.
     */ constructor(numSamples, baseX = 2, baseY = 3, width = 1, height = 1){
        this._curIndex = 0;
        this._sequence = [];
        this._numSamples = 0;
        /**
         * The x coordinate of the current sample.
         */ this.x = 0;
        /**
         * The y coordinate of the current sample.
         */ this.y = 0;
        this._width = width;
        this._height = height;
        this._baseX = baseX;
        this._baseY = baseY;
        this._generateSequence(numSamples);
        this.next();
    }
    /**
     * Regenerates the sequence with a new number of samples.
     * @param numSamples Number of samples in the sequence.
     */ regenerate(numSamples) {
        this._generateSequence(numSamples);
        this.next();
    }
    /**
     * Sets the dimensions of the sequence.
     * @param width Factor to scale the x coordinate by. The scaling factor is 1/width.
     * @param height Factor to scale the y coordinate by. The scaling factor is 1/height.
     */ setDimensions(width, height) {
        this._width = width;
        this._height = height;
    }
    /**
     * Advances to the next sample in the sequence.
     */ next() {
        this.x = this._sequence[this._curIndex] / this._width;
        this.y = this._sequence[this._curIndex + 1] / this._height;
        this._curIndex += 2;
        if (this._curIndex >= this._numSamples * 2) {
            this._curIndex = 0;
        }
    }
    _generateSequence(numSamples) {
        this._sequence = [];
        this._curIndex = 0;
        this._numSamples = numSamples;
        for(let i = 1; i <= numSamples; ++i){
            this._sequence.push(this._halton(i, this._baseX) - 0.5, this._halton(i, this._baseY) - 0.5);
        }
    }
    _halton(index, base) {
        let fraction = 1;
        let result = 0;
        while(index > 0){
            fraction /= base;
            result += fraction * (index % base);
            index = ~~(index / base); // floor division
        }
        return result;
    }
} //# sourceMappingURL=halton2DSequence.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "Scalar",
    ()=>Scalar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
;
const HCF = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.HighestCommonFactor;
const Scalar = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    /**
     * Two pi constants convenient for computation.
     */ TwoPi: Math.PI * 2,
    /**
     * Returns -1 if value is negative and +1 is value is positive.
     * @param value the value
     * @returns the value itself if it's equal to zero.
     */ Sign: Math.sign,
    /**
     * the log2 of value.
     * @param value the value to compute log2 of
     * @returns the log2 of value.
     */ Log2: Math.log2,
    /**
     * Returns the highest common factor of two integers.
     * @param a first parameter
     * @param b second parameter
     * @returns HCF of a and b
     */ HCF
}; /* eslint-enable @typescript-eslint/naming-convention */  //# sourceMappingURL=math.scalar.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.polar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Polar",
    ()=>Polar,
    "Spherical",
    ()=>Spherical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
class Polar {
    /**
     * Creates a new Polar object
     * @param radius the radius of the vector
     * @param theta the angle of the vector
     */ constructor(radius, theta){
        this.radius = radius;
        this.theta = theta;
        this.radius = radius;
        this.theta = theta;
    }
    /**
     * Gets the class name
     * @returns the string "Polar"
     */ getClassName() {
        return "Polar";
    }
    /**
     * Converts the current polar to a string
     * @returns the current polar as a string
     */ toString() {
        return JSON.stringify(this);
    }
    /**
     * Converts the current polar to an array
     * @returns the current polar as an array
     */ asArray() {
        return [
            this.radius,
            this.theta
        ];
    }
    /**
     * Adds the current Polar and the given Polar and stores the result
     * @param polar the polar to add
     * @param ref the polar to store the result in
     * @returns the updated ref
     */ addToRef(polar, ref) {
        ref.radius = this.radius + polar.radius;
        ref.theta = this.theta + polar.theta;
        return ref;
    }
    /**
     * Adds the current Polar and the given Polar
     * @param polar the polar to add
     * @returns the sum polar
     */ add(polar) {
        const ref = new Polar(0, 0);
        this.addToRef(polar, ref);
        return ref;
    }
    /**
     * Adds the given polar to the current polar
     * @param polar the polar to add
     * @returns the current polar
     */ addInPlace(polar) {
        this.addToRef(polar, this);
        return this;
    }
    /**
     * Adds the provided values to the current polar
     * @param radius the amount to add to the radius
     * @param theta the amount to add to the theta
     * @returns the current polar
     */ addInPlaceFromFloats(radius, theta) {
        this.radius += radius;
        this.theta += theta;
        return this;
    }
    /**
     * Subtracts the given Polar from the current Polar and stores the result
     * @param polar the polar to subtract
     * @param ref the polar to store the result in
     * @returns the updated ref
     */ subtractToRef(polar, ref) {
        ref.radius = this.radius - polar.radius;
        ref.theta = this.theta - polar.theta;
        return ref;
    }
    /**
     * Subtracts the given Polar from the current Polar
     * @param polar the polar to subtract
     * @returns the difference polar
     */ subtract(polar) {
        const ref = new Polar(0, 0);
        this.subtractToRef(polar, ref);
        return ref;
    }
    /**
     * Subtracts the given Polar from the current Polar
     * @param polar the polar to subtract
     * @returns the current polar
     */ subtractInPlace(polar) {
        this.subtractToRef(polar, this);
        return this;
    }
    /**
     * Subtracts the given floats from the current polar
     * @param radius the amount to subtract from the radius
     * @param theta the amount to subtract from the theta
     * @param ref the polar to store the result in
     * @returns the updated ref
     */ subtractFromFloatsToRef(radius, theta, ref) {
        ref.radius = this.radius - radius;
        ref.theta = this.theta - theta;
        return ref;
    }
    /**
     * Subtracts the given floats from the current polar
     * @param radius the amount to subtract from the radius
     * @param theta the amount to subtract from the theta
     * @returns the difference polar
     */ subtractFromFloats(radius, theta) {
        const ref = new Polar(0, 0);
        this.subtractFromFloatsToRef(radius, theta, ref);
        return ref;
    }
    /**
     * Multiplies the given Polar with the current Polar and stores the result
     * @param polar the polar to multiply
     * @param ref the polar to store the result in
     * @returns the updated ref
     */ multiplyToRef(polar, ref) {
        ref.radius = this.radius * polar.radius;
        ref.theta = this.theta * polar.theta;
        return ref;
    }
    /**
     * Multiplies the given Polar with the current Polar
     * @param polar the polar to multiply
     * @returns the product polar
     */ multiply(polar) {
        const ref = new Polar(0, 0);
        this.multiplyToRef(polar, ref);
        return ref;
    }
    /**
     * Multiplies the given Polar with the current Polar
     * @param polar the polar to multiply
     * @returns the current polar
     */ multiplyInPlace(polar) {
        this.multiplyToRef(polar, this);
        return this;
    }
    /**
     * Divides the current Polar by the given Polar and stores the result
     * @param polar the polar to divide
     * @param ref the polar to store the result in
     * @returns the updated ref
     */ divideToRef(polar, ref) {
        ref.radius = this.radius / polar.radius;
        ref.theta = this.theta / polar.theta;
        return ref;
    }
    /**
     * Divides the current Polar by the given Polar
     * @param polar the polar to divide
     * @returns the quotient polar
     */ divide(polar) {
        const ref = new Polar(0, 0);
        this.divideToRef(polar, ref);
        return ref;
    }
    /**
     * Divides the current Polar by the given Polar
     * @param polar the polar to divide
     * @returns the current polar
     */ divideInPlace(polar) {
        this.divideToRef(polar, this);
        return this;
    }
    /**
     * Clones the current polar
     * @returns a clone of the current polar
     */ clone() {
        return new Polar(this.radius, this.theta);
    }
    /**
     * Copies the source polar into the current polar
     * @param source the polar to copy from
     * @returns the current polar
     */ copyFrom(source) {
        this.radius = source.radius;
        this.theta = source.theta;
        return this;
    }
    /**
     * Copies the given values into the current polar
     * @param radius the radius to use
     * @param theta the theta to use
     * @returns the current polar
     */ copyFromFloats(radius, theta) {
        this.radius = radius;
        this.theta = theta;
        return this;
    }
    /**
     * Scales the current polar and stores the result
     * @param scale defines the multiplication factor
     * @param ref where to store the result
     * @returns the updated ref
     */ scaleToRef(scale, ref) {
        ref.radius = this.radius * scale;
        ref.theta = this.theta * scale;
        return ref;
    }
    /**
     * Scales the current polar and returns a new polar with the scaled coordinates
     * @param scale defines the multiplication factor
     * @returns the scaled polar
     */ scale(scale) {
        const ref = new Polar(0, 0);
        this.scaleToRef(scale, ref);
        return ref;
    }
    /**
     * Scales the current polar
     * @param scale defines the multiplication factor
     * @returns the current polar
     */ scaleInPlace(scale) {
        this.scaleToRef(scale, this);
        return this;
    }
    /**
     * Sets the values of the current polar
     * @param radius the new radius
     * @param theta the new theta
     * @returns the current polar
     */ set(radius, theta) {
        this.radius = radius;
        this.theta = theta;
        return this;
    }
    /**
     * Sets the values of the current polar
     * @param value the new values
     * @returns the current polar
     */ setAll(value) {
        this.set(value, value);
        return this;
    }
    /**
     * Gets the rectangular coordinates of the current Polar
     * @param ref the reference to assign the result
     * @returns the updated reference
     */ toVector2ToRef(ref) {
        const x = this.radius * Math.cos(this.theta);
        const y = this.radius * Math.sin(this.theta);
        ref.set(x, y);
        return ref;
    }
    /**
     * Gets the rectangular coordinates of the current Polar
     * @returns the rectangular coordinates
     */ toVector2() {
        const ref = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0);
        return this.toVector2ToRef(ref);
    }
    /**
     * Converts a given Vector2 to its polar coordinates
     * @param v the Vector2 to convert
     * @param ref the reference to assign the result
     * @returns the updated reference
     */ static FromVector2ToRef(v, ref) {
        const theta = Math.sign(v.y) * Math.acos(v.x / v.length());
        ref.radius = v.length();
        ref.theta = theta;
        return ref;
    }
    /**
     * Converts a given Vector2 to its polar coordinates
     * @param v the Vector2 to convert
     * @returns a Polar
     */ static FromVector2(v) {
        const polar = new Polar(0, 0);
        Polar.FromVector2ToRef(v, polar);
        return polar;
    }
    /**
     * Converts an array of floats to a polar
     * @param array the array to convert
     * @returns the converted polar
     */ static FromArray(array) {
        return new Polar(array[0], array[1]);
    }
}
class Spherical {
    /**
     * Creates a new Spherical object from the given spherical coordinates
     * @param radius spherical radius
     * @param theta angle from positive y axis to radial line from 0 to PI (vertical)
     * @param phi angle from positive x axis measured anticlockwise from -PI to PI (horizontal)
     */ constructor(radius, theta, phi){
        this.radius = radius;
        this.theta = theta;
        this.phi = phi;
        this.radius = radius;
        this.theta = theta;
        this.phi = phi;
    }
    /**
     * Gets the class name
     * @returns the string "Spherical"
     */ getClassName() {
        return "Spherical";
    }
    /**
     * Converts the current spherical to a string
     * @returns the current spherical as a string
     */ toString() {
        return JSON.stringify(this);
    }
    /**
     * Converts the current spherical to an array
     * @returns the current spherical as an array
     */ asArray() {
        return [
            this.radius,
            this.theta,
            this.phi
        ];
    }
    /**
     * Adds the current Spherical and the given Spherical and stores the result
     * @param spherical the spherical to add
     * @param ref the spherical to store the result in
     * @returns the updated ref
     */ addToRef(spherical, ref) {
        ref.radius = this.radius + spherical.radius;
        ref.theta = this.theta + spherical.theta;
        ref.phi = this.phi + spherical.phi;
        return ref;
    }
    /**
     * Adds the current Spherical and the given Spherical
     * @param spherical the spherical to add
     * @returns the sum spherical
     */ add(spherical) {
        const ref = new Spherical(0, 0, 0);
        this.addToRef(spherical, ref);
        return ref;
    }
    /**
     * Adds the given spherical to the current spherical
     * @param spherical the spherical to add
     * @returns the current spherical
     */ addInPlace(spherical) {
        this.addToRef(spherical, this);
        return this;
    }
    /**
     * Adds the provided values to the current spherical
     * @param radius the amount to add to the radius
     * @param theta the amount to add to the theta
     * @param phi the amount to add to the phi
     * @returns the current spherical
     */ addInPlaceFromFloats(radius, theta, phi) {
        this.radius += radius;
        this.theta += theta;
        this.phi += phi;
        return this;
    }
    /**
     * Subtracts the given Spherical from the current Spherical and stores the result
     * @param spherical the spherical to subtract
     * @param ref the spherical to store the result in
     * @returns the updated ref
     */ subtractToRef(spherical, ref) {
        ref.radius = this.radius - spherical.radius;
        ref.theta = this.theta - spherical.theta;
        ref.phi = this.phi - spherical.phi;
        return ref;
    }
    /**
     * Subtracts the given Spherical from the current Spherical
     * @param spherical the spherical to subtract
     * @returns the difference spherical
     */ subtract(spherical) {
        const ref = new Spherical(0, 0, 0);
        this.subtractToRef(spherical, ref);
        return ref;
    }
    /**
     * Subtracts the given Spherical from the current Spherical
     * @param spherical the spherical to subtract
     * @returns the current spherical
     */ subtractInPlace(spherical) {
        this.subtractToRef(spherical, this);
        return this;
    }
    /**
     * Subtracts the given floats from the current spherical
     * @param radius the amount to subtract from the radius
     * @param theta the amount to subtract from the theta
     * @param phi the amount to subtract from the phi
     * @param ref the spherical to store the result in
     * @returns the updated ref
     */ subtractFromFloatsToRef(radius, theta, phi, ref) {
        ref.radius = this.radius - radius;
        ref.theta = this.theta - theta;
        ref.phi = this.phi - phi;
        return ref;
    }
    /**
     * Subtracts the given floats from the current spherical
     * @param radius the amount to subtract from the radius
     * @param theta the amount to subtract from the theta
     * @param phi the amount to subtract from the phi
     * @returns the difference spherical
     */ subtractFromFloats(radius, theta, phi) {
        const ref = new Spherical(0, 0, 0);
        this.subtractFromFloatsToRef(radius, theta, phi, ref);
        return ref;
    }
    /**
     * Multiplies the given Spherical with the current Spherical and stores the result
     * @param spherical the spherical to multiply
     * @param ref the spherical to store the result in
     * @returns the updated ref
     */ multiplyToRef(spherical, ref) {
        ref.radius = this.radius * spherical.radius;
        ref.theta = this.theta * spherical.theta;
        ref.phi = this.phi * spherical.phi;
        return ref;
    }
    /**
     * Multiplies the given Spherical with the current Spherical
     * @param spherical the spherical to multiply
     * @returns the product spherical
     */ multiply(spherical) {
        const ref = new Spherical(0, 0, 0);
        this.multiplyToRef(spherical, ref);
        return ref;
    }
    /**
     * Multiplies the given Spherical with the current Spherical
     * @param spherical the spherical to multiply
     * @returns the current spherical
     */ multiplyInPlace(spherical) {
        this.multiplyToRef(spherical, this);
        return this;
    }
    /**
     * Divides the current Spherical by the given Spherical and stores the result
     * @param spherical the spherical to divide
     * @param ref the spherical to store the result in
     * @returns the updated ref
     */ divideToRef(spherical, ref) {
        ref.radius = this.radius / spherical.radius;
        ref.theta = this.theta / spherical.theta;
        ref.phi = this.phi / spherical.phi;
        return ref;
    }
    /**
     * Divides the current Spherical by the given Spherical
     * @param spherical the spherical to divide
     * @returns the quotient spherical
     */ divide(spherical) {
        const ref = new Spherical(0, 0, 0);
        this.divideToRef(spherical, ref);
        return ref;
    }
    /**
     * Divides the current Spherical by the given Spherical
     * @param spherical the spherical to divide
     * @returns the current spherical
     */ divideInPlace(spherical) {
        this.divideToRef(spherical, this);
        return this;
    }
    /**
     * Clones the current spherical
     * @returns a clone of the current spherical
     */ clone() {
        return new Spherical(this.radius, this.theta, this.phi);
    }
    /**
     * Copies the source spherical into the current spherical
     * @param source the spherical to copy from
     * @returns the current spherical
     */ copyFrom(source) {
        this.radius = source.radius;
        this.theta = source.theta;
        this.phi = source.phi;
        return this;
    }
    /**
     * Copies the given values into the current spherical
     * @param radius the radius to use
     * @param theta the theta to use
     * @param phi the phi to use
     * @returns the current spherical
     */ copyFromFloats(radius, theta, phi) {
        this.radius = radius;
        this.theta = theta;
        this.phi = phi;
        return this;
    }
    /**
     * Scales the current spherical and stores the result
     * @param scale defines the multiplication factor
     * @param ref where to store the result
     * @returns the updated ref
     */ scaleToRef(scale, ref) {
        ref.radius = this.radius * scale;
        ref.theta = this.theta * scale;
        ref.phi = this.phi * scale;
        return ref;
    }
    /**
     * Scales the current spherical and returns a new spherical with the scaled coordinates
     * @param scale defines the multiplication factor
     * @returns the scaled spherical
     */ scale(scale) {
        const ref = new Spherical(0, 0, 0);
        this.scaleToRef(scale, ref);
        return ref;
    }
    /**
     * Scales the current spherical
     * @param scale defines the multiplication factor
     * @returns the current spherical
     */ scaleInPlace(scale) {
        this.scaleToRef(scale, this);
        return this;
    }
    /**
     * Sets the values of the current spherical
     * @param radius the new radius
     * @param theta the new theta
     * @param phi the new phi
     * @returns the current spherical
     */ set(radius, theta, phi) {
        this.radius = radius;
        this.theta = theta;
        this.phi = phi;
        return this;
    }
    /**
     * Sets the values of the current spherical
     * @param value the new values
     * @returns the current spherical
     */ setAll(value) {
        this.set(value, value, value);
        return this;
    }
    /**
     * Assigns the rectangular coordinates of the current Spherical to a Vector3
     * @param ref the Vector3 to update
     * @returns the updated Vector3
     */ toVector3ToRef(ref) {
        const x = this.radius * Math.sin(this.theta) * Math.cos(this.phi);
        const y = this.radius * Math.cos(this.theta);
        const z = this.radius * Math.sin(this.theta) * Math.sin(this.phi);
        ref.set(x, y, z);
        return ref;
    }
    /**
     * Gets a Vector3 from the current spherical coordinates
     * @returns the (x, y,z) form of the current Spherical
     */ toVector3() {
        const ref = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        return this.toVector3ToRef(ref);
    }
    /**
     * Assigns the spherical coordinates from a Vector3
     * @param vector the vector to convert
     * @param ref the Spherical to update
     * @returns the updated ref
     */ static FromVector3ToRef(vector, ref) {
        ref.radius = vector.length();
        ref.theta = Math.acos(vector.y / ref.radius);
        ref.phi = Math.atan2(vector.z, vector.x);
        return ref;
    }
    /**
     * Gets a Spherical from a Vector3
     * @param vector defines the vector in (x, y, z) coordinate space
     * @returns a new Spherical
     */ static FromVector3(vector) {
        const spherical = new Spherical(0, 0, 0);
        Spherical.FromVector3ToRef(vector, spherical);
        return spherical;
    }
    /**
     * Converts an array of floats to a spherical
     * @param array the array to convert
     * @returns the converted spherical
     */ static FromArray(array) {
        return new Spherical(array[0], array[1], array[2]);
    }
} //# sourceMappingURL=math.polar.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.like.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=math.like.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/thinMath.matrix.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A thin matrix class that is used for size reasons.
 * The class is identity by default
 */ __turbopack_context__.s([
    "ThinMatrix",
    ()=>ThinMatrix
]);
class ThinMatrix {
    constructor(){
        this._m = [
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0
        ];
        /**
         * Gets the update flag of the matrix which is an unique number for the matrix.
         * It will be incremented every time the matrix data change.
         * You can use it to speed the comparison between two versions of the same matrix.
         */ this.updateFlag = 0;
    }
    /**
     * Returns the matrix as a Array<number>
     * @returns the matrix underlying array.
     */ asArray() {
        return this._m;
    }
} //# sourceMappingURL=thinMath.matrix.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/thinMath.matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/thinMath.matrix.functions.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$polar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.polar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.like.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/sphericalPolynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$halton2DSequence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/halton2DSequence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Angle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Angle"],
    "Arc2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arc2"],
    "Axis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"],
    "BezierCurve",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BezierCurve"],
    "Color3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"],
    "Color4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"],
    "Coordinate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coordinate"],
    "Curve3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Curve3"],
    "Epsilon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"],
    "Frustum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$frustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frustum"],
    "Matrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"],
    "Orientation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Orientation"],
    "PHI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHI"],
    "Path2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path2"],
    "Path3D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path3D"],
    "Plane",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"],
    "PositionNormalTextureVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vertexFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionNormalTextureVertex"],
    "PositionNormalVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vertexFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionNormalVertex"],
    "Quaternion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"],
    "Size",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Size"],
    "Space",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Space"],
    "TmpColors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"],
    "TmpVectors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"],
    "ToGammaSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToGammaSpace"],
    "ToLinearSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToLinearSpace"],
    "Vector2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"],
    "Vector3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"],
    "Vector4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$frustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.frustum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.path.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vertexFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vertexFormat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyMatrixToArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyMatrixToArray"],
    "CopyMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyMatrixToRef"],
    "IdentityMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentityMatrixToRef"],
    "InvertMatrixToArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvertMatrixToArray"],
    "InvertMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvertMatrixToRef"],
    "MarkAsDirty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkAsDirty"],
    "MatrixManagement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixManagement"],
    "MultiplyMatricesToArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplyMatricesToArray"],
    "MultiplyMatricesToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplyMatricesToRef"],
    "ScalingMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScalingMatrixToRef"],
    "ThinMatrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinMatrix"],
    "TranslationMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranslationMatrixToRef"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/thinMath.matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/thinMath.matrix.functions.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Angle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Angle"],
    "Arc2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arc2"],
    "Axis",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Axis"],
    "BezierCurve",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BezierCurve"],
    "Clamp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"],
    "Color3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"],
    "Color4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"],
    "Coordinate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coordinate"],
    "CopyMatrixToArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyMatrixToArray"],
    "CopyMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyMatrixToRef"],
    "Curve3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Curve3"],
    "DeltaAngle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeltaAngle"],
    "Denormalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Denormalize"],
    "Epsilon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"],
    "ExtractAsInt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtractAsInt"],
    "FixFlippedFaces",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FixFlippedFaces"],
    "Frustum",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frustum"],
    "Halton2DSequence",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$halton2DSequence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Halton2DSequence"],
    "Hermite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hermite"],
    "Hermite1stDerivative",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hermite1stDerivative"],
    "HighestCommonFactor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighestCommonFactor"],
    "ILog2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILog2"],
    "IdentityMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IdentityMatrixToRef"],
    "InverseLerp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InverseLerp"],
    "InvertMatrixToArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvertMatrixToArray"],
    "InvertMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvertMatrixToRef"],
    "Lerp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lerp"],
    "LerpAngle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LerpAngle"],
    "MarkAsDirty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkAsDirty"],
    "Matrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"],
    "MatrixManagement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixManagement"],
    "MoveTowards",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveTowards"],
    "MoveTowardsAngle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoveTowardsAngle"],
    "MultiplyMatricesToArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplyMatricesToArray"],
    "MultiplyMatricesToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplyMatricesToRef"],
    "Normalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Normalize"],
    "NormalizeRadians",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizeRadians"],
    "Orientation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Orientation"],
    "OutsideRange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OutsideRange"],
    "PHI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PHI"],
    "Path2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path2"],
    "Path3D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Path3D"],
    "PercentToRange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PercentToRange"],
    "PingPong",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PingPong"],
    "Plane",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"],
    "Polar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$polar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polar"],
    "PositionNormalTextureVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionNormalTextureVertex"],
    "PositionNormalVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PositionNormalVertex"],
    "Quaternion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"],
    "RandomRange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomRange"],
    "RangeToPercent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RangeToPercent"],
    "Repeat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Repeat"],
    "Scalar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scalar"],
    "ScalingMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScalingMatrixToRef"],
    "Size",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Size"],
    "SmoothStep",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothStep"],
    "Space",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Space"],
    "Spherical",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$polar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spherical"],
    "SphericalHarmonics",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphericalHarmonics"],
    "SphericalPolynomial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphericalPolynomial"],
    "ThinMatrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinMatrix"],
    "TmpColors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"],
    "TmpVectors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"],
    "ToGammaSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToGammaSpace"],
    "ToHex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHex"],
    "ToLinearSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToLinearSpace"],
    "TranslationMatrixToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranslationMatrixToRef"],
    "Vector2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"],
    "Vector2ToFixed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2ToFixed"],
    "Vector3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"],
    "Vector3CopyToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3CopyToRef"],
    "Vector3Distance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3Distance"],
    "Vector3DistanceSquared",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3DistanceSquared"],
    "Vector3Dot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3Dot"],
    "Vector3FromFloatsToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3FromFloatsToRef"],
    "Vector3Length",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3Length"],
    "Vector3LengthSquared",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3LengthSquared"],
    "Vector3LerpToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3LerpToRef"],
    "Vector3NormalizeToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3NormalizeToRef"],
    "Vector3ScaleInPlace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3ScaleInPlace"],
    "Vector3ScaleToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3ScaleToRef"],
    "Vector3SubtractToRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3SubtractToRef"],
    "Vector3ToFixed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3ToFixed"],
    "Vector4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"],
    "Vector4Dot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4Dot"],
    "Vector4ToFixed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4ToFixed"],
    "Viewport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"],
    "WithinEpsilon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WithinEpsilon"],
    "extractMinAndMax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMinAndMax"],
    "extractMinAndMaxIndexed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractMinAndMaxIndexed"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$polar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.polar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$like$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.like.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/sphericalPolynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$halton2DSequence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/halton2DSequence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Maths_95759e95._.js.map