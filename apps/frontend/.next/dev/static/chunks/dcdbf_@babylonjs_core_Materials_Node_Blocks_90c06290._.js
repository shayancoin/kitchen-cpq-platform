(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum defining the type of animations supported by InputBlock
 */ __turbopack_context__.s([
    "AnimatedInputBlockTypes",
    ()=>AnimatedInputBlockTypes
]);
var AnimatedInputBlockTypes;
(function(AnimatedInputBlockTypes) {
    /** No animation */ AnimatedInputBlockTypes[AnimatedInputBlockTypes["None"] = 0] = "None";
    /** Time based animation (is incremented by 0.6 each second). Will only work for floats */ AnimatedInputBlockTypes[AnimatedInputBlockTypes["Time"] = 1] = "Time";
    /** Time elapsed (in seconds) since the engine was initialized. Will only work for floats */ AnimatedInputBlockTypes[AnimatedInputBlockTypes["RealTime"] = 2] = "RealTime";
    AnimatedInputBlockTypes[AnimatedInputBlockTypes["MouseInfo"] = 3] = "MouseInfo";
})(AnimatedInputBlockTypes || (AnimatedInputBlockTypes = {})); //# sourceMappingURL=animatedInputBlockTypes.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "InputBlock",
    ()=>InputBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/precisionDate.js [app-client] (ecmascript)");
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
const remapAttributeName = {
    position2d: "position",
    // From particle.vertex:
    particle_uv: "vUV",
    particle_color: "vColor",
    particle_texturemask: "textureMask",
    particle_positionw: "vPositionW",
    // From postprocess.vertex:
    postprocess_uv: "vUV"
};
const attributeInFragmentOnly = {
    particle_uv: true,
    particle_color: true,
    particle_texturemask: true,
    particle_positionw: true,
    postprocess_uv: true
};
const attributeAsUniform = {
    particle_texturemask: true
};
const attributeDefine = {
    normal: "NORMAL",
    tangent: "TANGENT",
    uv: "UV1",
    uv2: "UV2",
    uv3: "UV3",
    uv4: "UV4",
    uv5: "UV5",
    uv6: "UV6",
    uv7: "UV7",
    uv8: "UV8"
};
class InputBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Gets or sets the connection point type (default is float)
     */ get type() {
        if (this._type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect) {
            if (this.isUniform && this.value != null) {
                if (!isNaN(this.value)) {
                    this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float;
                    return this._type;
                }
                switch(this.value.getClassName()){
                    case "Vector2":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2;
                        return this._type;
                    case "Vector3":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3;
                        return this._type;
                    case "Vector4":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4;
                        return this._type;
                    case "Color3":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3;
                        return this._type;
                    case "Color4":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4;
                        return this._type;
                    case "Matrix":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix;
                        return this._type;
                }
            }
            if (this.isAttribute) {
                switch(this.name){
                    case "splatIndex":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float;
                        return this._type;
                    case "position":
                    case "normal":
                    case "particle_positionw":
                    case "splatPosition":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3;
                        return this._type;
                    case "uv":
                    case "uv2":
                    case "uv3":
                    case "uv4":
                    case "uv5":
                    case "uv6":
                    case "position2d":
                    case "particle_uv":
                    case "splatScale":
                    case "postprocess_uv":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2;
                        return this._type;
                    case "matricesIndices":
                    case "matricesWeights":
                    case "matricesIndicesExtra":
                    case "matricesWeightsExtra":
                    case "world0":
                    case "world1":
                    case "world2":
                    case "world3":
                    case "tangent":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4;
                        return this._type;
                    case "color":
                    case "instanceColor":
                    case "particle_color":
                    case "particle_texturemask":
                    case "splatColor":
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4;
                        return this._type;
                }
            }
            if (this.isSystemValue) {
                switch(this._systemValue){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldView:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldViewProjection:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].ViewProjection:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].Projection:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].ProjectionInverse:
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix;
                        return this._type;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].CameraPosition:
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3;
                        return this._type;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].FogColor:
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3;
                        return this._type;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].DeltaTime:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].MaterialAlpha:
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float;
                        return this._type;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].CameraParameters:
                        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4;
                        return this._type;
                }
            }
        }
        return this._type;
    }
    /**
     * Creates a new InputBlock
     * @param name defines the block name
     * @param target defines the target of that block (Vertex by default)
     * @param type defines the type of the input (can be set to NodeMaterialBlockConnectionPointTypes.AutoDetect)
     */ constructor(name, target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex, type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect){
        super(name, target, false);
        this._mode = 3 /* NodeMaterialBlockConnectionPointMode.Undefined */ ;
        this._animationType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"].None;
        this._prefix = "";
        /** Gets or set a value used to limit the range of float values */ this.min = 0;
        /** Gets or set a value used to limit the range of float values */ this.max = 0;
        /** Gets or set a value indicating that this input can only get 0 and 1 values */ this.isBoolean = false;
        /** Gets or sets a value used by the Node Material editor to determine how to configure the current value if it is a matrix */ this.matrixMode = 0;
        /** @internal */ this._systemValue = null;
        /** Gets or sets a boolean indicating that the value of this input will not change after a build */ this.isConstant = false;
        /** Gets or sets the group to use to display this block in the Inspector */ this.groupInInspector = "";
        /** Gets an observable raised when the value is changed */ this.onValueChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Gets or sets a boolean indicating if content needs to be converted to gamma space (for color3/4 only) */ this.convertToGammaSpace = false;
        /** Gets or sets a boolean indicating if content needs to be converted to linear space (for color3/4 only) */ this.convertToLinearSpace = false;
        this._type = type;
        this.setDefaultValue();
        this.registerOutput("output", type);
    }
    /**
     * Validates if a name is a reserve word.
     * @param newName the new name to be given to the node.
     * @returns false if the name is a reserve word, else true.
     */ validateBlockName(newName) {
        if (!this.isAttribute) {
            return super.validateBlockName(newName);
        }
        return true;
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Set the source of this connection point to a vertex attribute
     * @param attributeName defines the attribute name (position, uv, normal, etc...). If not specified it will take the connection point name
     * @returns the current connection point
     */ setAsAttribute(attributeName) {
        this._mode = 1 /* NodeMaterialBlockConnectionPointMode.Attribute */ ;
        if (attributeName) {
            this.name = attributeName;
        }
        return this;
    }
    /**
     * Set the source of this connection point to a system value
     * @param value define the system value to use (world, view, etc...) or null to switch to manual value
     * @returns the current connection point
     */ setAsSystemValue(value) {
        this.systemValue = value;
        return this;
    }
    /**
     * Gets or sets the value of that point.
     * Please note that this value will be ignored if valueCallback is defined
     */ get value() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this._storedValue;
    }
    set value(value) {
        if (this.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
            if (this.isBoolean) {
                value = value ? 1 : 0;
            } else if (this.min !== this.max) {
                value = Math.max(this.min, value);
                value = Math.min(this.max, value);
            }
        }
        this._storedValue = value;
        this._mode = 0 /* NodeMaterialBlockConnectionPointMode.Uniform */ ;
        this.onValueChangedObservable.notifyObservers(this);
    }
    /**
     * Gets or sets a callback used to get the value of that point.
     * Please note that setting this value will force the connection point to ignore the value property
     */ get valueCallback() {
        return this._valueCallback;
    }
    set valueCallback(value) {
        this._valueCallback = value;
        this._mode = 0 /* NodeMaterialBlockConnectionPointMode.Uniform */ ;
    }
    /**
     * Gets the declaration variable name in the shader
     */ get declarationVariableName() {
        return this._associatedVariableName;
    }
    /**
     * Gets or sets the associated variable name in the shader
     */ get associatedVariableName() {
        return this._prefix + this._associatedVariableName;
    }
    set associatedVariableName(value) {
        this._associatedVariableName = value;
    }
    /** Gets or sets the type of animation applied to the input */ get animationType() {
        return this._animationType;
    }
    set animationType(value) {
        this._animationType = value;
    }
    /**
     * Gets a boolean indicating that this connection point not defined yet
     */ get isUndefined() {
        return this._mode === 3 /* NodeMaterialBlockConnectionPointMode.Undefined */ ;
    }
    /**
     * Gets or sets a boolean indicating that this connection point is coming from an uniform.
     * In this case the connection point name must be the name of the uniform to use.
     * Can only be set on inputs
     */ get isUniform() {
        return this._mode === 0 /* NodeMaterialBlockConnectionPointMode.Uniform */ ;
    }
    set isUniform(value) {
        this._mode = value ? 0 /* NodeMaterialBlockConnectionPointMode.Uniform */  : 3 /* NodeMaterialBlockConnectionPointMode.Undefined */ ;
        this.associatedVariableName = "";
    }
    /**
     * Gets or sets a boolean indicating that this connection point is coming from an attribute.
     * In this case the connection point name must be the name of the attribute to use
     * Can only be set on inputs
     */ get isAttribute() {
        return this._mode === 1 /* NodeMaterialBlockConnectionPointMode.Attribute */ ;
    }
    set isAttribute(value) {
        this._mode = value ? 1 /* NodeMaterialBlockConnectionPointMode.Attribute */  : 3 /* NodeMaterialBlockConnectionPointMode.Undefined */ ;
        this.associatedVariableName = "";
    }
    /**
     * Gets or sets a boolean indicating that this connection point is generating a varying variable.
     * Can only be set on exit points
     */ get isVarying() {
        return this._mode === 2 /* NodeMaterialBlockConnectionPointMode.Varying */ ;
    }
    set isVarying(value) {
        this._mode = value ? 2 /* NodeMaterialBlockConnectionPointMode.Varying */  : 3 /* NodeMaterialBlockConnectionPointMode.Undefined */ ;
        this.associatedVariableName = "";
    }
    /**
     * Gets a boolean indicating that the current connection point is a system value
     */ get isSystemValue() {
        return this._systemValue != null;
    }
    /**
     * Gets or sets the current well known value or null if not defined as a system value
     */ get systemValue() {
        return this._systemValue;
    }
    set systemValue(value) {
        this._mode = 0 /* NodeMaterialBlockConnectionPointMode.Uniform */ ;
        this.associatedVariableName = "";
        this._systemValue = value;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "InputBlock";
    }
    /**
     * Animate the input if animationType !== None
     * @param scene defines the rendering scene
     */ animate(scene) {
        switch(this._animationType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"].Time:
                {
                    if (this.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
                        this.value += scene.getAnimationRatio() * 0.01;
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"].RealTime:
                {
                    if (this.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
                        this.value = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionDate"].Now - scene.getEngine().startTime) / 1000;
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"].MouseInfo:
                {
                    if (this.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4) {
                        const event = scene._inputManager._originMouseEvent;
                        if (event) {
                            const x = event.offsetX;
                            const y = event.offsetY;
                            const z = (event.buttons & 1) != 0 ? 1 : 0;
                            const w = (event.buttons & 2) != 0 ? 1 : 0;
                            this.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"](x, y, z, w);
                        } else {
                            this.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 0, 0);
                        }
                    }
                    break;
                }
        }
    }
    _emitDefine(define, notDefine = false) {
        return `${notDefine ? "#ifndef" : "#ifdef"} ${define}\n`;
    }
    initialize() {
        this.associatedVariableName = "";
    }
    /**
     * Set the input block to its default value (based on its type)
     */ setDefaultValue() {
        switch(this.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float:
                this.value = 0;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2:
                this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4:
                this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"].Zero();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
                this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].White();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4:
                this.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix:
                this.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
                break;
        }
    }
    _emitConstant(state) {
        switch(this.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float:
                return `${state._emitFloat(this.value)}`;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2:
                return `vec2(${this.value.x}, ${this.value.y})`;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                return `vec3(${this.value.x}, ${this.value.y}, ${this.value.z})`;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4:
                return `vec4(${this.value.x}, ${this.value.y}, ${this.value.z}, ${this.value.w})`;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].set(this.value.r, this.value.g, this.value.b);
                if (this.convertToGammaSpace) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].toGammaSpaceToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0], state.sharedData.scene.getEngine().useExactSrgbConversions);
                }
                if (this.convertToLinearSpace) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].toLinearSpaceToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0], state.sharedData.scene.getEngine().useExactSrgbConversions);
                }
                return `vec3(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].r}, ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].g}, ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].b})`;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].set(this.value.r, this.value.g, this.value.b, this.value.a);
                if (this.convertToGammaSpace) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].toGammaSpaceToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0], state.sharedData.scene.getEngine().useExactSrgbConversions);
                }
                if (this.convertToLinearSpace) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].toLinearSpaceToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0], state.sharedData.scene.getEngine().useExactSrgbConversions);
                }
                return `vec4(${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].r}, ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].g}, ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].b}, ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].a})`;
        }
        return "";
    }
    /** @internal */ get _noContextSwitch() {
        return attributeInFragmentOnly[this.name];
    }
    _emit(state) {
        // Uniforms
        if (this.isUniform) {
            if (!this._associatedVariableName) {
                this._associatedVariableName = state._getFreeVariableName("u_" + this.name);
            }
            if (this.isConstant) {
                if (state.constants.indexOf(this.associatedVariableName) !== -1) {
                    return;
                }
                state.constants.push(this.associatedVariableName);
                state._constantDeclaration += state._declareOutput(this.output, true) + ` = ${this._emitConstant(state)};\n`;
                return;
            }
            if (state.uniforms.indexOf(this.associatedVariableName) !== -1) {
                return;
            }
            state._emitUniformFromString(this._associatedVariableName, this.type);
            if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                this._prefix = "uniforms.";
            }
            // well known
            const hints = state.sharedData.hints;
            if (this._systemValue !== null && this._systemValue !== undefined) {
                switch(this._systemValue){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldView:
                        hints.needWorldViewMatrix = true;
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldViewProjection:
                        hints.needWorldViewProjectionMatrix = true;
                        break;
                }
            } else {
                if (this._animationType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"].None) {
                    state.sharedData.animatedInputs.push(this);
                }
            }
            return;
        }
        // Attribute
        if (this.isAttribute) {
            this.associatedVariableName = remapAttributeName[this.name] ?? this.name;
            if (this.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex && state._vertexState) {
                // Attribute for fragment need to be carried over by varyings
                if (attributeInFragmentOnly[this.name]) {
                    if (attributeAsUniform[this.name]) {
                        state._emitUniformFromString(this.declarationVariableName, this.type);
                        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                            this._prefix = `vertexInputs.`;
                        }
                    } else {
                        state._emitVaryingFromString(this.declarationVariableName, this.type);
                    }
                } else {
                    this._emit(state._vertexState);
                }
                return;
            }
            const alreadyDeclared = state.attributes.indexOf(this.declarationVariableName) !== -1;
            if (!alreadyDeclared) {
                state.attributes.push(this.declarationVariableName);
            }
            if (attributeInFragmentOnly[this.name]) {
                if (attributeAsUniform[this.name]) {
                    if (!alreadyDeclared) {
                        state._emitUniformFromString(this.declarationVariableName, this.type);
                    }
                    if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                        this._prefix = `uniforms.`;
                    }
                } else {
                    if (!alreadyDeclared) {
                        state._emitVaryingFromString(this.declarationVariableName, this.type);
                    }
                    if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                        this._prefix = `fragmentInputs.`;
                    }
                }
            } else {
                if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                    if (!alreadyDeclared) {
                        const defineName = attributeDefine[this.name];
                        if (defineName) {
                            state._attributeDeclaration += this._emitDefine(defineName);
                            state._attributeDeclaration += `attribute ${this.declarationVariableName}: ${state._getShaderType(this.type)};\n`;
                            state._attributeDeclaration += `#else\n`;
                            state._attributeDeclaration += `var<private> ${this.declarationVariableName}: ${state._getShaderType(this.type)} = ${state._getShaderType(this.type)}(0.);\n`;
                            state._attributeDeclaration += `#endif\n`;
                        } else {
                            state._attributeDeclaration += `attribute ${this.declarationVariableName}: ${state._getShaderType(this.type)};\n`;
                        }
                    }
                    this._prefix = `vertexInputs.`;
                } else {
                    if (!alreadyDeclared) {
                        const defineName = attributeDefine[this.name];
                        if (defineName) {
                            state._attributeDeclaration += this._emitDefine(defineName);
                            state._attributeDeclaration += `attribute ${state._getShaderType(this.type)} ${this.declarationVariableName};\n`;
                            state._attributeDeclaration += `#else\n`;
                            state._attributeDeclaration += `${state._getShaderType(this.type)} ${this.declarationVariableName} = ${state._getShaderType(this.type)}(0.);\n`;
                            state._attributeDeclaration += `#endif\n`;
                        } else {
                            state._attributeDeclaration += `attribute ${state._getShaderType(this.type)} ${this.declarationVariableName};\n`;
                        }
                    }
                }
            }
        }
    }
    /**
     * @internal
     */ _transmitWorld(effect, world, worldView, worldViewProjection) {
        if (!this._systemValue) {
            return;
        }
        const variableName = this._associatedVariableName;
        switch(this._systemValue){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World:
                effect.setMatrix(variableName, world);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldView:
                effect.setMatrix(variableName, worldView);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldViewProjection:
                effect.setMatrix(variableName, worldViewProjection);
                break;
        }
    }
    /**
     * @internal
     */ _transmit(effect, scene, material) {
        if (this.isAttribute) {
            return;
        }
        const variableName = this._associatedVariableName;
        if (this._systemValue) {
            switch(this._systemValue){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldView:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldViewProjection:
                    return;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View:
                    effect.setMatrix(variableName, scene.getViewMatrix());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].Projection:
                    effect.setMatrix(variableName, scene.getProjectionMatrix());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].ProjectionInverse:
                    {
                        const projectionMatrix = scene.getProjectionMatrix();
                        projectionMatrix.invertToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                        effect.setMatrix(variableName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].ViewProjection:
                    effect.setMatrix(variableName, scene.getTransformMatrix());
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].CameraPosition:
                    scene.bindEyePosition(effect, variableName, true);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].FogColor:
                    effect.setColor3(variableName, scene.fogColor);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].DeltaTime:
                    effect.setFloat(variableName, scene.deltaTime / 1000.0);
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].CameraParameters:
                    if (scene.activeCamera) {
                        effect.setFloat4(variableName, scene.getEngine().hasOriginBottomLeft ? -1 : 1, scene.activeCamera.minZ, scene.activeCamera.maxZ, 1 / scene.activeCamera.maxZ);
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].MaterialAlpha:
                    effect.setFloat(variableName, material.alpha);
                    break;
            }
            return;
        }
        const value = this._valueCallback ? this._valueCallback() : this._storedValue;
        if (value === null) {
            return;
        }
        switch(this.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float:
                effect.setFloat(variableName, value);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Int:
                effect.setInt(variableName, value);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].set(this.value.r, this.value.g, this.value.b);
                if (this.convertToGammaSpace) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].toGammaSpaceToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0], scene.getEngine().useExactSrgbConversions);
                }
                if (this.convertToLinearSpace) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0].toLinearSpaceToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0], scene.getEngine().useExactSrgbConversions);
                }
                effect.setColor3(variableName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0]);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].set(this.value.r, this.value.g, this.value.b, this.value.a);
                if (this.convertToGammaSpace) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].toGammaSpaceToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0], scene.getEngine().useExactSrgbConversions);
                }
                if (this.convertToLinearSpace) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].toLinearSpaceToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0], scene.getEngine().useExactSrgbConversions);
                }
                effect.setDirectColor4(variableName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0]);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2:
                effect.setVector2(variableName, value);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                effect.setVector3(variableName, value);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4:
                effect.setVector4(variableName, value);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix:
                effect.setMatrix(variableName, value);
                break;
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (this.isUniform || this.isSystemValue) {
            state.sharedData.inputBlocks.push(this);
        }
        this._emit(state);
    }
    _dumpPropertiesCode() {
        const variableName = this._codeVariableName;
        if (this.isAttribute) {
            return super._dumpPropertiesCode() + `${variableName}.setAsAttribute("${this.name}");\n`;
        }
        if (this.isSystemValue) {
            return super._dumpPropertiesCode() + `${variableName}.setAsSystemValue(BABYLON.NodeMaterialSystemValues.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"][this._systemValue]});\n`;
        }
        if (this.isUniform) {
            const codes = [];
            let valueString = "";
            switch(this.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float:
                    valueString = `${this.value}`;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2:
                    valueString = `new BABYLON.Vector2(${this.value.x}, ${this.value.y})`;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                    valueString = `new BABYLON.Vector3(${this.value.x}, ${this.value.y}, ${this.value.z})`;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4:
                    valueString = `new BABYLON.Vector4(${this.value.x}, ${this.value.y}, ${this.value.z}, ${this.value.w})`;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
                    valueString = `new BABYLON.Color3(${this.value.r}, ${this.value.g}, ${this.value.b})`;
                    if (this.convertToGammaSpace) {
                        valueString += ".toGammaSpace()";
                    }
                    if (this.convertToLinearSpace) {
                        valueString += ".toLinearSpace()";
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4:
                    valueString = `new BABYLON.Color4(${this.value.r}, ${this.value.g}, ${this.value.b}, ${this.value.a})`;
                    if (this.convertToGammaSpace) {
                        valueString += ".toGammaSpace()";
                    }
                    if (this.convertToLinearSpace) {
                        valueString += ".toLinearSpace()";
                    }
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix:
                    valueString = `BABYLON.Matrix.FromArray([${this.value.m.join(", ")}])`;
                    break;
            }
            // Common Property "Value"
            codes.push(`${variableName}.value = ${valueString}`);
            // Float-Value-Specific Properties
            if (this.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
                codes.push(`${variableName}.min = ${this.min}`, `${variableName}.max = ${this.max}`, `${variableName}.isBoolean = ${this.isBoolean}`, `${variableName}.matrixMode = ${this.matrixMode}`, `${variableName}.animationType = BABYLON.AnimatedInputBlockTypes.${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"][this.animationType]}`);
            }
            // Common Property "Type"
            codes.push(`${variableName}.isConstant = ${this.isConstant}`);
            codes.push("");
            return super._dumpPropertiesCode() + codes.join(";\n");
        }
        return super._dumpPropertiesCode();
    }
    dispose() {
        this.onValueChangedObservable.clear();
        super.dispose();
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.type = this.type;
        serializationObject.mode = this._mode;
        serializationObject.systemValue = this._systemValue;
        serializationObject.animationType = this._animationType;
        serializationObject.min = this.min;
        serializationObject.max = this.max;
        serializationObject.isBoolean = this.isBoolean;
        serializationObject.matrixMode = this.matrixMode;
        serializationObject.isConstant = this.isConstant;
        serializationObject.groupInInspector = this.groupInInspector;
        serializationObject.convertToGammaSpace = this.convertToGammaSpace;
        serializationObject.convertToLinearSpace = this.convertToLinearSpace;
        if (this._storedValue != null && this._mode === 0 /* NodeMaterialBlockConnectionPointMode.Uniform */ ) {
            if (this._storedValue.asArray) {
                serializationObject.valueType = "BABYLON." + this._storedValue.getClassName();
                serializationObject.value = this._storedValue.asArray();
            } else {
                serializationObject.valueType = "number";
                serializationObject.value = this._storedValue;
            }
        }
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        this._mode = serializationObject.mode;
        super._deserialize(serializationObject, scene, rootUrl);
        this._type = serializationObject.type;
        this._systemValue = serializationObject.systemValue || serializationObject.wellKnownValue;
        this._animationType = serializationObject.animationType;
        this.min = serializationObject.min || 0;
        this.max = serializationObject.max || 0;
        this.isBoolean = !!serializationObject.isBoolean;
        this.matrixMode = serializationObject.matrixMode || 0;
        this.isConstant = !!serializationObject.isConstant;
        this.groupInInspector = serializationObject.groupInInspector || "";
        this.convertToGammaSpace = !!serializationObject.convertToGammaSpace;
        this.convertToLinearSpace = !!serializationObject.convertToLinearSpace;
        // Tangents back compat
        if (serializationObject.name === "tangent" && serializationObject.mode === 1 /* NodeMaterialBlockConnectionPointMode.Attribute */  && serializationObject.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3) {
            this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4;
        }
        if (!serializationObject.valueType) {
            return;
        }
        if (serializationObject.valueType === "number") {
            this._storedValue = serializationObject.value;
        } else {
            const valueType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetClass"])(serializationObject.valueType);
            if (valueType) {
                this._storedValue = valueType.FromArray(serializationObject.value);
            }
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.InputBlock", InputBlock); //# sourceMappingURL=inputBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/prePassTextureBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrePassTextureBlock",
    ()=>PrePassTextureBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)");
;
;
;
;
;
;
class PrePassTextureBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * The texture associated with the node is the prepass texture
     */ get texture() {
        return null;
    }
    set texture(value) {
        return;
    }
    /**
     * Creates a new PrePassTextureBlock
     * @param name defines the block name
     * @param target defines the target of that block (VertexAndFragment by default)
     */ constructor(name, target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment){
        super(name, target, false);
        this.registerOutput("position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("position", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        this.registerOutput("localPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("localPosition", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        this.registerOutput("depth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("depth", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        this.registerOutput("screenDepth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("screenDepth", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        this.registerOutput("normal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("normal", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        this.registerOutput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("worldNormal", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
    }
    /**
     * Returns the sampler name associated with the node connection point
     * @param output defines the connection point to get the associated sampler name
     * @returns
     */ getSamplerName(output) {
        if (output === this._outputs[0]) {
            return this._positionSamplerName;
        }
        if (output === this._outputs[1]) {
            return this._localPositionSamplerName;
        }
        if (output === this._outputs[2]) {
            return this._depthSamplerName;
        }
        if (output === this._outputs[3]) {
            return this._screenSpaceDepthSamplerName;
        }
        if (output === this._outputs[4]) {
            return this._normalSamplerName;
        }
        if (output === this._outputs[5]) {
            return this._worldNormalSamplerName;
        }
        return "";
    }
    /**
     * Gets the position texture
     */ get position() {
        return this._outputs[0];
    }
    /**
     * Gets the local position texture
     */ get localPosition() {
        return this._outputs[1];
    }
    /**
     * Gets the depth texture
     */ get depth() {
        return this._outputs[2];
    }
    /**
     * Gets the screen depth texture
     */ get screenDepth() {
        return this._outputs[3];
    }
    /**
     * Gets the normal texture
     */ get normal() {
        return this._outputs[4];
    }
    /**
     * Gets the world normal texture
     */ get worldNormal() {
        return this._outputs[5];
    }
    /**
     * Gets the sampler name associated with this image source
     */ get positionSamplerName() {
        return this._positionSamplerName;
    }
    /**
     * Gets the sampler name associated with this image source
     */ get localPositionSamplerName() {
        return this._localPositionSamplerName;
    }
    /**
     * Gets the sampler name associated with this image source
     */ get normalSamplerName() {
        return this._normalSamplerName;
    }
    /**
     * Gets the sampler name associated with this image source
     */ get worldNormalSamplerName() {
        return this._worldNormalSamplerName;
    }
    /**
     * Gets the sampler name associated with this image source
     */ get depthSamplerName() {
        return this._depthSamplerName;
    }
    /**
     * Gets the sampler name associated with this image source
     */ get linearDepthSamplerName() {
        return this._screenSpaceDepthSamplerName;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "PrePassTextureBlock";
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return;
        }
        this._positionSamplerName = "prepassPositionSampler";
        this._depthSamplerName = "prepassDepthSampler";
        this._normalSamplerName = "prepassNormalSampler";
        this._worldNormalSamplerName = "prepassWorldNormalSampler";
        this._localPositionSamplerName = "prepassLocalPositionSampler";
        this._screenSpaceDepthSamplerName = "prepassScreenSpaceDepthSampler";
        // Unique sampler names for every prepasstexture block
        state.sharedData.variableNames.prepassPositionSampler = 0;
        state.sharedData.variableNames.prepassDepthSampler = 0;
        state.sharedData.variableNames.prepassNormalSampler = 0;
        state.sharedData.variableNames.prepassWorldNormalSampler = 0;
        state.sharedData.variableNames.prepassLocalPositionSampler = 0;
        state.sharedData.variableNames.prepassScreenSpaceDepthSampler = 0;
        // Declarations
        state.sharedData.textureBlocks.push(this);
        state.sharedData.bindableBlocks.push(this);
        if (this.position.isConnected) {
            state._emit2DSampler(this._positionSamplerName);
        }
        if (this.depth.isConnected) {
            state._emit2DSampler(this._depthSamplerName);
        }
        if (this.normal.isConnected) {
            state._emit2DSampler(this._normalSamplerName);
        }
        if (this.worldNormal.isConnected) {
            state._emit2DSampler(this._worldNormalSamplerName);
        }
        if (this.localPosition.isConnected) {
            state._emit2DSampler(this._localPositionSamplerName);
        }
        if (this.screenDepth.isConnected) {
            state._emit2DSampler(this._screenSpaceDepthSamplerName);
        }
        return this;
    }
    bind(effect, nodeMaterial) {
        const scene = nodeMaterial.getScene();
        const prePassRenderer = scene.enablePrePassRenderer();
        if (!prePassRenderer) {
            return;
        }
        const sceneRT = prePassRenderer.defaultRT;
        if (!sceneRT.textures) {
            return;
        }
        if (this.position.isConnected) {
            effect.setTexture(this._positionSamplerName, sceneRT.textures[prePassRenderer.getIndex(1)]);
        }
        if (this.localPosition.isConnected) {
            effect.setTexture(this._localPositionSamplerName, sceneRT.textures[prePassRenderer.getIndex(9)]);
        }
        if (this.depth.isConnected) {
            effect.setTexture(this._depthSamplerName, sceneRT.textures[prePassRenderer.getIndex(5)]);
        }
        if (this.screenDepth.isConnected) {
            effect.setTexture(this._screenSpaceDepthSamplerName, sceneRT.textures[prePassRenderer.getIndex(10)]);
        }
        if (this.normal.isConnected) {
            effect.setTexture(this._normalSamplerName, sceneRT.textures[prePassRenderer.getIndex(6)]);
        }
        if (this.worldNormal.isConnected) {
            effect.setTexture(this._worldNormalSamplerName, sceneRT.textures[prePassRenderer.getIndex(8)]);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PrePassTextureBlock", PrePassTextureBlock); //# sourceMappingURL=prePassTextureBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$prePassTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/prePassTextureBlock.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedInputBlockTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"],
    "InputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"],
    "PrePassTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$prePassTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrePassTextureBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$animatedInputBlockTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$prePassTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/prePassTextureBlock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/transformBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransformBlock",
    ()=>TransformBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
class TransformBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Boolean indicating if the transformation is made for a direction vector and not a position vector
     * If set to true the complementW value will be set to 0 else it will be set to 1
     */ get transformAsDirection() {
        return this.complementW === 0;
    }
    set transformAsDirection(value) {
        this.complementW = value ? 0 : 1;
    }
    /**
     * Creates a new TransformBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Defines the value to use to complement W value to transform it to a Vector4
         */ this.complementW = 1;
        /**
         * Defines the value to use to complement z value to transform it to a Vector4
         */ this.complementZ = 0;
        this.target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
        this.registerInput("vector", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("transform", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("xyz", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._inputs[0].onConnectionObservable.add((other)=>{
            if (other.ownerBlock.isInput) {
                const otherAsInput = other.ownerBlock;
                if (otherAsInput.name === "normal" || otherAsInput.name === "tangent") {
                    this.complementW = 0;
                }
            }
        });
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "TransformBlock";
    }
    /**
     * Gets the vector input
     */ get vector() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the xyz output component
     */ get xyz() {
        return this._outputs[1];
    }
    /**
     * Gets the matrix transform input
     */ get transform() {
        return this._inputs[1];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const vector = this.vector;
        const transform = this.transform;
        const vec4 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        const vec3 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        if (vector.connectedPoint) {
            // None uniform scaling case.
            if (this.complementW === 0 || this.transformAsDirection) {
                const comments = `//${this.name}`;
                state._emitFunctionFromInclude("helperFunctions", comments);
                state.sharedData.blocksWithDefines.push(this);
                const transformName = state._getFreeVariableName(`${transform.associatedVariableName}_NUS`);
                if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                    state.compilationString += `var ${transformName}: mat3x3f = mat3x3f(${transform.associatedVariableName}[0].xyz, ${transform.associatedVariableName}[1].xyz, ${transform.associatedVariableName}[2].xyz);\n`;
                } else {
                    state.compilationString += `mat3 ${transformName} = mat3(${transform.associatedVariableName});\n`;
                }
                state.compilationString += `#ifdef NONUNIFORMSCALING\n`;
                state.compilationString += `${transformName} = transposeMat3(inverseMat3(${transformName}));\n`;
                state.compilationString += `#endif\n`;
                switch(vector.connectedPoint.type){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2:
                        state.compilationString += state._declareOutput(this.output) + ` = ${vec4}(${transformName} * ${vec3}(${vector.associatedVariableName}, ${this._writeFloat(this.complementZ)}), ${this._writeFloat(this.complementW)});\n`;
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
                        state.compilationString += state._declareOutput(this.output) + ` = ${vec4}(${transformName} * ${vector.associatedVariableName}, ${this._writeFloat(this.complementW)});\n`;
                        break;
                    default:
                        state.compilationString += state._declareOutput(this.output) + ` = ${vec4}(${transformName} * ${vector.associatedVariableName}.xyz, ${this._writeFloat(this.complementW)});\n`;
                        break;
                }
            } else {
                const transformName = transform.associatedVariableName;
                switch(vector.connectedPoint.type){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2:
                        state.compilationString += state._declareOutput(this.output) + ` = ${transformName} * ${vec4}(${vector.associatedVariableName}, ${this._writeFloat(this.complementZ)}, ${this._writeFloat(this.complementW)});\n`;
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
                        state.compilationString += state._declareOutput(this.output) + ` = ${transformName} * ${vec4}(${vector.associatedVariableName}, ${this._writeFloat(this.complementW)});\n`;
                        break;
                    default:
                        state.compilationString += state._declareOutput(this.output) + ` = ${transformName} * ${vector.associatedVariableName};\n`;
                        break;
                }
            }
            if (this.xyz.hasEndpoints) {
                state.compilationString += state._declareOutput(this.xyz) + ` = ${this.output.associatedVariableName}.xyz;\n`;
            }
        }
        return this;
    }
    /**
     * Update defines for shader compilation
     * @param defines defines the material defines to update
     * @param nodeMaterial defines the node material requesting the update
     * @param mesh defines the mesh to be rendered
     */ prepareDefines(defines, nodeMaterial, mesh) {
        if (mesh && mesh.nonUniformScaling) {
            defines.setValue("NONUNIFORMSCALING", true);
        }
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.complementZ = this.complementZ;
        serializationObject.complementW = this.complementW;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.complementZ = serializationObject.complementZ !== undefined ? serializationObject.complementZ : 0.0;
        this.complementW = serializationObject.complementW !== undefined ? serializationObject.complementW : 1.0;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.complementZ = ${this.complementZ};\n`;
        codeString += `${this._codeVariableName}.complementW = ${this.complementW};\n`;
        return codeString;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Transform as direction", 0 /* PropertyTypeForEdition.Boolean */ , undefined, {
        embedded: true
    })
], TransformBlock.prototype, "transformAsDirection", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.TransformBlock", TransformBlock); //# sourceMappingURL=transformBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/vertexOutputBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VertexOutputBlock",
    ()=>VertexOutputBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class VertexOutputBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new VertexOutputBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex, true);
        this.registerInput("vector", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "VertexOutputBlock";
    }
    /**
     * Gets the vector input component
     */ get vector() {
        return this._inputs[0];
    }
    _isLogarithmicDepthEnabled(nodeList, useLogarithmicDepth) {
        if (useLogarithmicDepth) {
            return true;
        }
        for (const node of nodeList){
            if (node.useLogarithmicDepth) {
                return true;
            }
        }
        return false;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const input = this.vector;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            state.compilationString += `vertexOutputs.position = ${input.associatedVariableName};\n`;
        } else {
            state.compilationString += `gl_Position = ${input.associatedVariableName};\n`;
        }
        // TODOWGSL
        if (this._isLogarithmicDepthEnabled(state.sharedData.fragmentOutputNodes, state.sharedData.nodeMaterial.useLogarithmicDepth)) {
            state._emitUniformFromString("logarithmicDepthConstant", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            state._emitVaryingFromString("vFragmentDepth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            const fragDepth = isWebGPU ? "vertexOutputs.vFragmentDepth" : "vFragmentDepth";
            const uniformP = isWebGPU ? "uniforms." : "";
            const position = isWebGPU ? "vertexOutputs.position" : "gl_Position";
            state.compilationString += `${fragDepth} = 1.0 + ${position}.w;\n`;
            state.compilationString += `${position}.z = log2(max(0.000001, ${fragDepth})) * ${uniformP}logarithmicDepthConstant;\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.VertexOutputBlock", VertexOutputBlock); //# sourceMappingURL=vertexOutputBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/bonesBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BonesBlock",
    ()=>BonesBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
class BonesBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new BonesBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("matricesIndices", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("matricesWeights", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("matricesIndicesExtra", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true);
        this.registerInput("matricesWeightsExtra", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true);
        this.registerInput("world", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("boneSampler");
        state._excludeVariableName("boneTextureWidth");
        state._excludeVariableName("mBones");
        state._excludeVariableName("BonesPerMesh");
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js [app-client] (ecmascript, async loader)")
            ]);
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "BonesBlock";
    }
    /**
     * Gets the matrix indices input component
     */ get matricesIndices() {
        return this._inputs[0];
    }
    /**
     * Gets the matrix weights input component
     */ get matricesWeights() {
        return this._inputs[1];
    }
    /**
     * Gets the extra matrix indices input component
     */ get matricesIndicesExtra() {
        return this._inputs[2];
    }
    /**
     * Gets the extra matrix weights input component
     */ get matricesWeightsExtra() {
        return this._inputs[3];
    }
    /**
     * Gets the world input component
     */ get world() {
        return this._inputs[4];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.matricesIndices.isConnected) {
            let matricesIndicesInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "matricesIndices" && additionalFilteringInfo(b));
            if (!matricesIndicesInput) {
                matricesIndicesInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("matricesIndices");
                matricesIndicesInput.setAsAttribute("matricesIndices");
            }
            matricesIndicesInput.output.connectTo(this.matricesIndices);
        }
        if (!this.matricesWeights.isConnected) {
            let matricesWeightsInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "matricesWeights" && additionalFilteringInfo(b));
            if (!matricesWeightsInput) {
                matricesWeightsInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("matricesWeights");
                matricesWeightsInput.setAsAttribute("matricesWeights");
            }
            matricesWeightsInput.output.connectTo(this.matricesWeights);
        }
        if (!this.world.isConnected) {
            let worldInput = material.getInputBlockByPredicate((b)=>b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World && additionalFilteringInfo(b));
            if (!worldInput) {
                worldInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("world");
                worldInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World);
            }
            worldInput.output.connectTo(this.world);
        }
    }
    provideFallbacks(fallbacks, mesh) {
        if (mesh && mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton) {
            fallbacks.addCPUSkinningFallback(0, mesh);
        }
    }
    bind(effect, nodeMaterial, mesh) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindBonesParameters"])(mesh, effect);
    }
    prepareDefines(defines, nodeMaterial, mesh) {
        if (!defines._areAttributesDirty || !mesh) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForBones"])(mesh, defines);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        // Register for compilation fallbacks
        state.sharedData.blocksWithFallbacks.push(this);
        // Register for binding
        state.sharedData.forcedBindableBlocks.push(this);
        // Register for defines
        state.sharedData.blocksWithDefines.push(this);
        // Register internal uniforms and samplers
        state.uniforms.push("boneTextureWidth");
        state.uniforms.push("mBones");
        state.samplers.push("boneSampler");
        // Emit code
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("bonesDeclaration", comments, {
            removeAttributes: true,
            removeUniforms: false,
            removeVaryings: true,
            removeIfDef: false
        });
        const influenceVariablename = state._getFreeVariableName("influence");
        state.compilationString += state._emitCodeFromInclude("bonesVertex", comments, {
            replaceStrings: [
                {
                    search: /finalWorld=finalWorld\*influence;/,
                    replace: ""
                },
                {
                    search: /influence/gm,
                    replace: influenceVariablename
                }
            ]
        });
        const output = this._outputs[0];
        const worldInput = this.world;
        state.compilationString += `#if NUM_BONE_INFLUENCERS>0\n`;
        state.compilationString += state._declareOutput(output) + ` = ${worldInput.associatedVariableName} * ${influenceVariablename};\n`;
        state.compilationString += `#else\n`;
        state.compilationString += state._declareOutput(output) + ` = ${worldInput.associatedVariableName};\n`;
        state.compilationString += `#endif\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.BonesBlock", BonesBlock); //# sourceMappingURL=bonesBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/instancesBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InstancesBlock",
    ()=>InstancesBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
class InstancesBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new InstancesBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("world0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("world1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("world2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("world3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("world", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this.registerOutput("instanceID", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "InstancesBlock";
    }
    /**
     * Gets the first world row input component
     */ get world0() {
        return this._inputs[0];
    }
    /**
     * Gets the second world row input component
     */ get world1() {
        return this._inputs[1];
    }
    /**
     * Gets the third world row input component
     */ get world2() {
        return this._inputs[2];
    }
    /**
     * Gets the forth world row input component
     */ get world3() {
        return this._inputs[3];
    }
    /**
     * Gets the world input component
     */ get world() {
        return this._inputs[4];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the instanceID component
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get instanceID() {
        return this._outputs[1];
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.world0.connectedPoint) {
            let world0Input = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "world0" && additionalFilteringInfo(b));
            if (!world0Input) {
                world0Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("world0");
                world0Input.setAsAttribute("world0");
            }
            world0Input.output.connectTo(this.world0);
        }
        if (!this.world1.connectedPoint) {
            let world1Input = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "world1" && additionalFilteringInfo(b));
            if (!world1Input) {
                world1Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("world1");
                world1Input.setAsAttribute("world1");
            }
            world1Input.output.connectTo(this.world1);
        }
        if (!this.world2.connectedPoint) {
            let world2Input = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "world2" && additionalFilteringInfo(b));
            if (!world2Input) {
                world2Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("world2");
                world2Input.setAsAttribute("world2");
            }
            world2Input.output.connectTo(this.world2);
        }
        if (!this.world3.connectedPoint) {
            let world3Input = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "world3" && additionalFilteringInfo(b));
            if (!world3Input) {
                world3Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("world3");
                world3Input.setAsAttribute("world3");
            }
            world3Input.output.connectTo(this.world3);
        }
        if (!this.world.connectedPoint) {
            let worldInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "world" && additionalFilteringInfo(b));
            if (!worldInput) {
                worldInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("world");
                worldInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World);
            }
            worldInput.output.connectTo(this.world);
        }
        this.world.define = "!INSTANCES || THIN_INSTANCES";
    }
    prepareDefines(defines, nodeMaterial, mesh, useInstances = false, subMesh) {
        let changed = false;
        if (defines["INSTANCES"] !== useInstances) {
            defines.setValue("INSTANCES", useInstances);
            changed = true;
        }
        if (subMesh && defines["THIN_INSTANCES"] !== !!subMesh?.getRenderingMesh().hasThinInstances) {
            defines.setValue("THIN_INSTANCES", !!subMesh?.getRenderingMesh().hasThinInstances);
            changed = true;
        }
        if (changed) {
            defines.markAsUnprocessed();
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const engine = state.sharedData.scene.getEngine();
        // Register for defines
        state.sharedData.blocksWithDefines.push(this);
        // Emit code
        const output = this._outputs[0];
        const instanceID = this._outputs[1];
        const world0 = this.world0;
        const world1 = this.world1;
        const world2 = this.world2;
        const world3 = this.world3;
        let mat4 = "mat4";
        let instance = "gl_InstanceID";
        let floatCast = "float";
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            mat4 = "mat4x4f";
            instance = "vertexInputs.instanceIndex";
            floatCast = "f32";
        }
        state.compilationString += `#ifdef INSTANCES\n`;
        state.compilationString += state._declareOutput(output) + ` = ${mat4}(${world0.associatedVariableName}, ${world1.associatedVariableName}, ${world2.associatedVariableName}, ${world3.associatedVariableName});\n`;
        state.compilationString += `#ifdef THIN_INSTANCES\n`;
        state.compilationString += `${output.associatedVariableName} = ${this.world.associatedVariableName} * ${output.associatedVariableName};\n`;
        state.compilationString += `#endif\n`;
        if (engine._caps.canUseGLInstanceID) {
            state.compilationString += state._declareOutput(instanceID) + ` = ${floatCast}(${instance});\n`;
        } else {
            state.compilationString += state._declareOutput(instanceID) + ` = 0.0;\n`;
        }
        state.compilationString += `#else\n`;
        state.compilationString += state._declareOutput(output) + ` = ${this.world.associatedVariableName};\n`;
        state.compilationString += state._declareOutput(instanceID) + ` = 0.0;\n`;
        state.compilationString += `#endif\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.InstancesBlock", InstancesBlock); //# sourceMappingURL=instancesBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/morphTargetsBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MorphTargetsBlock",
    ()=>MorphTargetsBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
class MorphTargetsBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new MorphTargetsBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("normal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("tangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.tangent.addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("uv", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerInput("uv2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
        this.registerOutput("positionOutput", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerOutput("normalOutput", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerOutput("tangentOutput", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("uvOutput", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("uv2Output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("colorOutput", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MorphTargetsBlock";
    }
    /**
     * Gets the position input component
     */ get position() {
        return this._inputs[0];
    }
    /**
     * Gets the normal input component
     */ get normal() {
        return this._inputs[1];
    }
    /**
     * Gets the tangent input component
     */ get tangent() {
        return this._inputs[2];
    }
    /**
     * Gets the uv input component
     */ get uv() {
        return this._inputs[3];
    }
    /**
     * Gets the uv2 input component
     */ get uv2() {
        return this._inputs[4];
    }
    /**
     * Gets the color input component
     */ get color() {
        return this._inputs[5];
    }
    /**
     * Gets the position output component
     */ get positionOutput() {
        return this._outputs[0];
    }
    /**
     * Gets the normal output component
     */ get normalOutput() {
        return this._outputs[1];
    }
    /**
     * Gets the tangent output component
     */ get tangentOutput() {
        return this._outputs[2];
    }
    /**
     * Gets the uv output component
     */ get uvOutput() {
        return this._outputs[3];
    }
    /**
     * Gets the uv2 output component
     */ get uv2Output() {
        return this._outputs[4];
    }
    /**
     * Gets the color output component
     */ get colorOutput() {
        return this._outputs[5];
    }
    initialize(state) {
        state._excludeVariableName("morphTargetInfluences");
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript, async loader)")
            ]);
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.position.isConnected) {
            let positionInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "position" && additionalFilteringInfo(b));
            if (!positionInput) {
                positionInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("position");
                positionInput.setAsAttribute();
            }
            positionInput.output.connectTo(this.position);
        }
        if (!this.normal.isConnected) {
            let normalInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "normal" && additionalFilteringInfo(b));
            if (!normalInput) {
                normalInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("normal");
                normalInput.setAsAttribute("normal");
            }
            normalInput.output.connectTo(this.normal);
        }
        if (!this.tangent.isConnected) {
            let tangentInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "tangent" && additionalFilteringInfo(b));
            if (!tangentInput) {
                tangentInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("tangent");
                tangentInput.setAsAttribute("tangent");
            }
            tangentInput.output.connectTo(this.tangent);
        }
        if (!this.uv.isConnected) {
            let uvInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "uv" && additionalFilteringInfo(b));
            if (!uvInput) {
                uvInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("uv");
                uvInput.setAsAttribute("uv");
            }
            uvInput.output.connectTo(this.uv);
        }
        if (!this.uv2.isConnected) {
            let uv2Input = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "uv2" && additionalFilteringInfo(b));
            if (!uv2Input) {
                uv2Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("uv2");
                uv2Input.setAsAttribute("uv2");
            }
            uv2Input.output.connectTo(this.uv2);
        }
        if (!this.color.isConnected) {
            let colorInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "color" && additionalFilteringInfo(b));
            if (!colorInput) {
                colorInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("color");
                colorInput.setAsAttribute("color");
            }
            colorInput.output.connectTo(this.color);
        }
    }
    prepareDefines(defines, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        if (mesh.morphTargetManager) {
            const morphTargetManager = mesh.morphTargetManager;
            if (morphTargetManager?.isUsingTextureForTargets && (morphTargetManager.numMaxInfluencers || morphTargetManager.numInfluencers) !== defines["NUM_MORPH_INFLUENCERS"]) {
                defines.markAsAttributesDirty();
            }
        }
        if (!defines._areAttributesDirty) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMorphTargets"])(mesh, defines);
    }
    bind(effect, nodeMaterial, mesh) {
        if (mesh && mesh.morphTargetManager && mesh.morphTargetManager.numInfluencers > 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"])(mesh, effect);
            if (mesh.morphTargetManager.isUsingTextureForTargets) {
                mesh.morphTargetManager._bind(effect);
            }
        }
    }
    replaceRepeatableContent(vertexShaderState, defines, mesh) {
        if (!mesh) {
            return;
        }
        const position = this.position;
        const normal = this.normal;
        const tangent = this.tangent;
        const uv = this.uv;
        const uv2 = this.uv2;
        const color = this.color;
        const positionOutput = this.positionOutput;
        const normalOutput = this.normalOutput;
        const tangentOutput = this.tangentOutput;
        const uvOutput = this.uvOutput;
        const uv2Output = this.uv2Output;
        const colorOutput = this.colorOutput;
        const state = vertexShaderState;
        const repeatCount = defines.NUM_MORPH_INFLUENCERS;
        const manager = mesh.morphTargetManager;
        const supportPositions = manager && manager.supportsPositions;
        const supportNormals = manager && manager.supportsNormals;
        const supportTangents = manager && manager.supportsTangents;
        const supportUVs = manager && manager.supportsUVs;
        const supportUV2s = manager && manager.supportsUV2s;
        const supportColors = manager && manager.supportsColors;
        let injectionCode = "";
        if (manager?.isUsingTextureForTargets && repeatCount > 0) {
            injectionCode += `${state._declareLocalVar("vertexID", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)};\n`;
        }
        injectionCode += `#ifdef MORPHTARGETS\n`;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        const uniformsPrefix = isWebGPU ? "uniforms." : "";
        if (manager?.isUsingTextureForTargets) {
            injectionCode += `for (${isWebGPU ? "var" : "int"} i = 0; i < NUM_MORPH_INFLUENCERS; i++) {\n`;
            injectionCode += `if (${isWebGPU ? "f32" : "float"}(i) >= ${uniformsPrefix}morphTargetCount) { break; }\n`;
            injectionCode += `vertexID = ${isWebGPU ? "f32(vertexInputs.vertexIndex" : "float(gl_VertexID"}) * ${uniformsPrefix}morphTargetTextureInfo.x;\n`;
            if (supportPositions) {
                injectionCode += `#ifdef MORPHTARGETS_POSITION\n`;
                injectionCode += `${positionOutput.associatedVariableName} += (readVector3FromRawSampler(i, vertexID) - ${position.associatedVariableName}) * ${uniformsPrefix}morphTargetInfluences[i];\n`;
                injectionCode += `#endif\n`;
            }
            injectionCode += `#ifdef MORPHTARGETTEXTURE_HASPOSITIONS\n`;
            injectionCode += `vertexID += 1.0;\n`;
            injectionCode += `#endif\n`;
            if (supportNormals) {
                injectionCode += `#ifdef MORPHTARGETS_NORMAL\n`;
                injectionCode += `${normalOutput.associatedVariableName} += (readVector3FromRawSampler(i, vertexID) - ${normal.associatedVariableName}) * ${uniformsPrefix}morphTargetInfluences[i];\n`;
                injectionCode += `#endif\n`;
            }
            injectionCode += `#ifdef MORPHTARGETTEXTURE_HASNORMALS\n`;
            injectionCode += `vertexID += 1.0;\n`;
            injectionCode += `#endif\n`;
            if (supportUVs) {
                injectionCode += `#ifdef MORPHTARGETS_UV\n`;
                injectionCode += `${uvOutput.associatedVariableName} += (readVector3FromRawSampler(i, vertexID).xy - ${uv.associatedVariableName}) * ${uniformsPrefix}morphTargetInfluences[i];\n`;
                injectionCode += `#endif\n`;
            }
            injectionCode += `#ifdef MORPHTARGETTEXTURE_HASUVS\n`;
            injectionCode += `vertexID += 1.0;\n`;
            injectionCode += `#endif\n`;
            if (supportTangents) {
                injectionCode += `#ifdef MORPHTARGETS_TANGENT\n`;
                injectionCode += `${tangentOutput.associatedVariableName}.xyz += (readVector3FromRawSampler(i, vertexID) - ${tangent.associatedVariableName}.xyz) * ${uniformsPrefix}morphTargetInfluences[i];\n`;
                if (tangent.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4) {
                    injectionCode += `${tangentOutput.associatedVariableName}.w = ${tangent.associatedVariableName}.w;\n`;
                } else {
                    injectionCode += `${tangentOutput.associatedVariableName}.w = 1.;\n`;
                }
                injectionCode += `#endif\n`;
            }
            injectionCode += `#ifdef MORPHTARGETTEXTURE_HASTANGENTS\n`;
            injectionCode += `vertexID += 1.0;\n`;
            injectionCode += `#endif\n`;
            if (supportUV2s) {
                injectionCode += `#ifdef MORPHTARGETS_UV2\n`;
                injectionCode += `${uv2Output.associatedVariableName} += (readVector3FromRawSampler(i, vertexID).xy - ${uv2.associatedVariableName}) * morphTargetInfluences[i];\n`;
                injectionCode += `#endif\n`;
            }
            injectionCode += `#ifdef MORPHTARGETTEXTURE_HASUV2S\n`;
            injectionCode += `vertexID += 1.0;\n`;
            injectionCode += `#endif\n`;
            if (supportColors) {
                injectionCode += `#ifdef MORPHTARGETS_COLOR\n`;
                injectionCode += `${colorOutput.associatedVariableName} += (readVector4FromRawSampler(i, vertexID) - ${color.associatedVariableName}) * ${uniformsPrefix}morphTargetInfluences[i];\n`;
                injectionCode += `#endif\n`;
            }
            injectionCode += "}\n";
        } else {
            for(let index = 0; index < repeatCount; index++){
                if (supportPositions) {
                    injectionCode += `#ifdef MORPHTARGETS_POSITION\n`;
                    injectionCode += `${positionOutput.associatedVariableName} += (position${index} - ${position.associatedVariableName}) * ${uniformsPrefix}morphTargetInfluences[${index}];\n`;
                    injectionCode += `#endif\n`;
                }
                if (supportNormals && defines["NORMAL"]) {
                    injectionCode += `#ifdef MORPHTARGETS_NORMAL\n`;
                    injectionCode += `${normalOutput.associatedVariableName} += (normal${index} - ${normal.associatedVariableName}) * ${uniformsPrefix}morphTargetInfluences[${index}];\n`;
                    injectionCode += `#endif\n`;
                }
                if (supportUVs && defines["UV1"]) {
                    injectionCode += `#ifdef MORPHTARGETS_UV\n`;
                    injectionCode += `${uvOutput.associatedVariableName}.xy += (uv_${index} - ${uv.associatedVariableName}.xy) * ${uniformsPrefix}morphTargetInfluences[${index}];\n`;
                    injectionCode += `#endif\n`;
                }
                if (supportTangents && defines["TANGENT"]) {
                    injectionCode += `#ifdef MORPHTARGETS_TANGENT\n`;
                    injectionCode += `${tangentOutput.associatedVariableName}.xyz += (tangent${index} - ${tangent.associatedVariableName}.xyz) * ${uniformsPrefix}morphTargetInfluences[${index}];\n`;
                    if (tangent.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4) {
                        injectionCode += `${tangentOutput.associatedVariableName}.w = ${tangent.associatedVariableName}.w;\n`;
                    } else {
                        injectionCode += `${tangentOutput.associatedVariableName}.w = 1.;\n`;
                    }
                    injectionCode += `#endif\n`;
                }
                if (supportUV2s && defines["UV2"]) {
                    injectionCode += `#ifdef MORPHTARGETS_UV2\n`;
                    injectionCode += `${uv2Output.associatedVariableName}.xy += (uv2_${index} - ${uv2.associatedVariableName}.xy) * morphTargetInfluences[${index}];\n`;
                    injectionCode += `#endif\n`;
                }
                if (supportColors && defines["VERTEXCOLOR_NME"]) {
                    injectionCode += `#ifdef MORPHTARGETS_COLOR\n`;
                    injectionCode += `${colorOutput.associatedVariableName} += (color${index} - ${color.associatedVariableName}) * ${uniformsPrefix}morphTargetInfluences[${index}];\n`;
                    injectionCode += `#endif\n`;
                }
            }
        }
        injectionCode += `#endif\n`;
        state.compilationString = state.compilationString.replace(this._repeatableContentAnchor, injectionCode);
        if (repeatCount > 0) {
            for(let index = 0; index < repeatCount; index++){
                if (supportPositions) {
                    state.attributes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind + index);
                }
                if (supportNormals && defines["NORMAL"]) {
                    state.attributes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind + index);
                }
                if (supportTangents && defines["TANGENT"]) {
                    state.attributes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].TangentKind + index);
                }
                if (supportUVs && defines["UV1"]) {
                    state.attributes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind + "_" + index);
                }
                if (supportUV2s && defines["UV2"]) {
                    state.attributes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UV2Kind + "_" + index);
                }
                if (supportColors && defines["VERTEXCOLOR_NME"]) {
                    state.attributes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind + index);
                }
            }
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        // Register for defines
        state.sharedData.blocksWithDefines.push(this);
        // Register for binding
        state.sharedData.bindableBlocks.push(this);
        // Register for repeatable content generation
        state.sharedData.repeatableContentBlocks.push(this);
        // Emit code
        const position = this.position;
        const normal = this.normal;
        const tangent = this.tangent;
        const uv = this.uv;
        const uv2 = this.uv2;
        const color = this.color;
        const positionOutput = this.positionOutput;
        const normalOutput = this.normalOutput;
        const tangentOutput = this.tangentOutput;
        const uvOutput = this.uvOutput;
        const uv2Output = this.uv2Output;
        const colorOutput = this.colorOutput;
        const comments = `//${this.name}`;
        state.uniforms.push("morphTargetInfluences");
        state.uniforms.push("morphTargetCount");
        state.uniforms.push("morphTargetTextureInfo");
        state.uniforms.push("morphTargetTextureIndices");
        state.samplers.push("morphTargets");
        state._emitFunctionFromInclude("morphTargetsVertexGlobalDeclaration", comments);
        state._emitFunctionFromInclude("morphTargetsVertexDeclaration", comments, {
            repeatKey: "maxSimultaneousMorphTargets"
        });
        state.compilationString += `${state._declareOutput(positionOutput)} = ${position.associatedVariableName};\n`;
        state.compilationString += `#ifdef NORMAL\n`;
        state.compilationString += `${state._declareOutput(normalOutput)} = ${normal.associatedVariableName};\n`;
        state.compilationString += `#else\n`;
        state.compilationString += `${state._declareOutput(normalOutput)} = vec3(0., 0., 0.);\n`;
        state.compilationString += `#endif\n`;
        state.compilationString += `#ifdef TANGENT\n`;
        state.compilationString += `${state._declareOutput(tangentOutput)} = ${tangent.associatedVariableName};\n`;
        state.compilationString += `#else\n`;
        state.compilationString += `${state._declareOutput(tangentOutput)} = vec4(0., 0., 0., 0.);\n`;
        state.compilationString += `#endif\n`;
        state.compilationString += `#ifdef UV1\n`;
        state.compilationString += `${state._declareOutput(uvOutput)} = ${uv.associatedVariableName};\n`;
        state.compilationString += `#else\n`;
        state.compilationString += `${state._declareOutput(uvOutput)} = vec2(0., 0.);\n`;
        state.compilationString += `#endif\n`;
        state.compilationString += `#ifdef UV2\n`;
        state.compilationString += `${state._declareOutput(uv2Output)} = ${uv2.associatedVariableName};\n`;
        state.compilationString += `#else\n`;
        state.compilationString += `${state._declareOutput(uv2Output)} = vec2(0., 0.);\n`;
        state.compilationString += `#endif\n`;
        state.compilationString += `#ifdef VERTEXCOLOR_NME\n`;
        state.compilationString += `${state._declareOutput(colorOutput)} = ${color.associatedVariableName};\n`;
        state.compilationString += `#else\n`;
        state.compilationString += `${state._declareOutput(colorOutput)} = vec4(0., 0., 0., 0.);\n`;
        state.compilationString += `#endif\n`;
        // Repeatable content
        this._repeatableContentAnchor = state._repeatableContentAnchor;
        state.compilationString += this._repeatableContentAnchor;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MorphTargetsBlock", MorphTargetsBlock); //# sourceMappingURL=morphTargetsBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/lightInformationBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightInformationBlock",
    ()=>LightInformationBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$pointLight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/pointLight.js [app-client] (ecmascript)");
;
;
;
;
;
class LightInformationBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new LightInformationBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerOutput("direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerOutput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
        this.registerOutput("intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("shadowBias", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("shadowNormalBias", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("shadowDepthScale", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("shadowDepthRange", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "LightInformationBlock";
    }
    /**
     * Gets the world position input component
     */ get worldPosition() {
        return this._inputs[0];
    }
    /**
     * Gets the direction output component
     */ get direction() {
        return this._outputs[0];
    }
    /**
     * Gets the direction output component
     */ get color() {
        return this._outputs[1];
    }
    /**
     * Gets the direction output component
     */ get intensity() {
        return this._outputs[2];
    }
    /**
     * Gets the shadow bias output component
     */ get shadowBias() {
        return this._outputs[3];
    }
    /**
     * Gets the shadow normal bias output component
     */ get shadowNormalBias() {
        return this._outputs[4];
    }
    /**
     * Gets the shadow depth scale component
     */ get shadowDepthScale() {
        return this._outputs[5];
    }
    /**
     * Gets the shadow depth range component
     */ get shadowDepthRange() {
        return this._outputs[6];
    }
    bind(effect, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        if (this.light && this.light.isDisposed()) {
            this.light = null;
        }
        let light = this.light;
        const scene = nodeMaterial.getScene();
        if (!light && scene.lights.length) {
            light = this.light = scene.lights[0];
            this._forcePrepareDefines = true;
        }
        if (!light || !light.isEnabled) {
            effect.setFloat3(this._lightDataUniformName, 0, 0, 0);
            effect.setFloat4(this._lightColorUniformName, 0, 0, 0, 0);
            return;
        }
        light.transferToNodeMaterialEffect(effect, this._lightDataUniformName);
        effect.setColor4(this._lightColorUniformName, light.diffuse, light.intensity);
        const generator = light.getShadowGenerator();
        if (this.shadowBias.hasEndpoints || this.shadowNormalBias.hasEndpoints || this.shadowDepthScale.hasEndpoints) {
            if (generator) {
                effect.setFloat3(this._lightShadowUniformName, generator.bias, generator.normalBias, generator.depthScale);
            } else {
                effect.setFloat3(this._lightShadowUniformName, 0, 0, 0);
            }
        }
        if (this.shadowDepthRange) {
            if (generator && scene.activeCamera) {
                const shadowLight = light;
                effect.setFloat2(this._lightShadowExtraUniformName, shadowLight.getDepthMinZ(scene.activeCamera), shadowLight.getDepthMinZ(scene.activeCamera) + shadowLight.getDepthMaxZ(scene.activeCamera));
            } else {
                effect.setFloat2(this._lightShadowExtraUniformName, 0, 0);
            }
        }
    }
    prepareDefines(defines) {
        if (!defines._areLightsDirty && !this._forcePrepareDefines) {
            return;
        }
        this._forcePrepareDefines = false;
        const light = this.light;
        defines.setValue(this._lightTypeDefineName, light && light instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$pointLight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointLight"] ? true : false, true);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        state.sharedData.bindableBlocks.push(this);
        state.sharedData.blocksWithDefines.push(this);
        const direction = this.direction;
        const color = this.color;
        const intensity = this.intensity;
        const shadowBias = this.shadowBias;
        const shadowNormalBias = this.shadowNormalBias;
        const shadowDepthScale = this.shadowDepthScale;
        const shadowDepthRange = this.shadowDepthRange;
        this._lightDataUniformName = state._getFreeVariableName("lightData");
        this._lightColorUniformName = state._getFreeVariableName("lightColor");
        this._lightShadowUniformName = state._getFreeVariableName("shadowData");
        this._lightShadowExtraUniformName = state._getFreeVariableName("shadowExtraData");
        this._lightTypeDefineName = state._getFreeDefineName("LIGHTPOINTTYPE");
        const uniformAdd = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "uniforms." : "";
        state._emitUniformFromString(this._lightDataUniformName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        state._emitUniformFromString(this._lightColorUniformName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        state.compilationString += `#ifdef ${this._lightTypeDefineName}\n`;
        state.compilationString += state._declareOutput(direction) + ` = normalize(${this.worldPosition.associatedVariableName}.xyz - ${uniformAdd}${this._lightDataUniformName});\n`;
        state.compilationString += `#else\n`;
        state.compilationString += state._declareOutput(direction) + ` = ${uniformAdd}${this._lightDataUniformName};\n`;
        state.compilationString += `#endif\n`;
        state.compilationString += state._declareOutput(color) + ` = ${uniformAdd}${this._lightColorUniformName}.rgb;\n`;
        state.compilationString += state._declareOutput(intensity) + ` = ${uniformAdd}${this._lightColorUniformName}.a;\n`;
        if (shadowBias.hasEndpoints || shadowNormalBias.hasEndpoints || shadowDepthScale.hasEndpoints) {
            state._emitUniformFromString(this._lightShadowUniformName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
            if (shadowBias.hasEndpoints) {
                state.compilationString += state._declareOutput(shadowBias) + ` = ${uniformAdd}${this._lightShadowUniformName}.x;\n`;
            }
            if (shadowNormalBias.hasEndpoints) {
                state.compilationString += state._declareOutput(shadowNormalBias) + ` = ${uniformAdd}${this._lightShadowUniformName}.y;\n`;
            }
            if (shadowDepthScale.hasEndpoints) {
                state.compilationString += state._declareOutput(shadowDepthScale) + ` = ${uniformAdd}${this._lightShadowUniformName}.z;\n`;
            }
        }
        if (shadowDepthRange.hasEndpoints) {
            state._emitUniformFromString(this._lightShadowExtraUniformName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
            state.compilationString += state._declareOutput(shadowDepthRange) + ` = ${this._lightShadowUniformName};\n`;
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        if (this.light) {
            serializationObject.lightId = this.light.id;
        }
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        if (serializationObject.lightId) {
            this.light = scene.getLightById(serializationObject.lightId);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.LightInformationBlock", LightInformationBlock); //# sourceMappingURL=lightInformationBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$vertexOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/vertexOutputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$bonesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/bonesBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$instancesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/instancesBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$morphTargetsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/morphTargetsBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$lightInformationBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/lightInformationBlock.js [app-client] (ecmascript)");
// async-loaded shaders
// bonesBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
// morphTargetsBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BonesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$bonesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BonesBlock"],
    "InstancesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$instancesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancesBlock"],
    "LightInformationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$lightInformationBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightInformationBlock"],
    "MorphTargetsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$morphTargetsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MorphTargetsBlock"],
    "VertexOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$vertexOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexOutputBlock"],
    "bonesDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesDeclaration"],
    "bonesDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesDeclarationWGSL"],
    "bonesVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesVertex"],
    "bonesVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesVertexWGSL"],
    "morphTargetsVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertex"],
    "morphTargetsVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexDeclaration"],
    "morphTargetsVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexDeclarationWGSL"],
    "morphTargetsVertexGlobal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobal"],
    "morphTargetsVertexGlobalDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalDeclaration"],
    "morphTargetsVertexGlobalDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalDeclarationWGSL"],
    "morphTargetsVertexGlobalWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalWGSL"],
    "morphTargetsVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$vertexOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/vertexOutputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$bonesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/bonesBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$instancesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/instancesBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$morphTargetsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/morphTargetsBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$lightInformationBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/lightInformationBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleTextureBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleTextureBlock",
    ()=>ParticleTextureBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
;
;
;
;
;
;
class ParticleTextureBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ParticleTextureBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._samplerName = "diffuseSampler";
        /**
         * Gets or sets a boolean indicating if content needs to be converted to gamma space
         */ this.convertToGammaSpace = false;
        /**
         * Gets or sets a boolean indicating if content needs to be converted to linear space
         */ this.convertToLinearSpace = false;
        this._isUnique = false;
        this.registerInput("uv", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this.registerOutput("rgba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("r", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("g", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleTextureBlock";
    }
    /**
     * Gets the uv input component
     */ get uv() {
        return this._inputs[0];
    }
    /**
     * Gets the rgba output component
     */ get rgba() {
        return this._outputs[0];
    }
    /**
     * Gets the rgb output component
     */ get rgb() {
        return this._outputs[1];
    }
    /**
     * Gets the r output component
     */ get r() {
        return this._outputs[2];
    }
    /**
     * Gets the g output component
     */ get g() {
        return this._outputs[3];
    }
    /**
     * Gets the b output component
     */ get b() {
        return this._outputs[4];
    }
    /**
     * Gets the a output component
     */ get a() {
        return this._outputs[5];
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("diffuseSampler");
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.uv.isConnected) {
            let uvInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "particle_uv" && additionalFilteringInfo(b));
            if (!uvInput) {
                uvInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("uv");
                uvInput.setAsAttribute("particle_uv");
            }
            uvInput.output.connectTo(this.uv);
        }
    }
    prepareDefines(defines) {
        defines.setValue(this._linearDefineName, this.convertToGammaSpace, true);
        defines.setValue(this._gammaDefineName, this.convertToLinearSpace, true);
    }
    isReady() {
        if (this.texture && !this.texture.isReadyOrNotBlocking()) {
            return false;
        }
        return true;
    }
    _writeOutput(state, output, swizzle) {
        state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
        state.compilationString += `#ifdef ${this._linearDefineName}\n`;
        state.compilationString += `${output.associatedVariableName} = toGammaSpace(${output.associatedVariableName});\n`;
        state.compilationString += `#endif\n`;
        state.compilationString += `#ifdef ${this._gammaDefineName}\n`;
        state.compilationString += `${output.associatedVariableName} = toLinearSpace(${output.associatedVariableName});\n`;
        state.compilationString += `#endif\n`;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return;
        }
        this._tempTextureRead = state._getFreeVariableName("tempTextureRead");
        state._emit2DSampler(this._samplerName);
        state.sharedData.blockingBlocks.push(this);
        state.sharedData.textureBlocks.push(this);
        state.sharedData.blocksWithDefines.push(this);
        this._linearDefineName = state._getFreeDefineName("ISLINEAR");
        this._gammaDefineName = state._getFreeDefineName("ISGAMMA");
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("helperFunctions", comments);
        state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${state._generateTextureSample(this.uv.associatedVariableName, this._samplerName)};\n`;
        for (const output of this._outputs){
            if (output.hasEndpoints) {
                this._writeOutput(state, output, output.name);
            }
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.convertToGammaSpace = this.convertToGammaSpace;
        serializationObject.convertToLinearSpace = this.convertToLinearSpace;
        if (this.texture && !this.texture.isRenderTarget) {
            serializationObject.texture = this.texture.serialize();
        }
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.convertToGammaSpace = serializationObject.convertToGammaSpace;
        this.convertToLinearSpace = !!serializationObject.convertToLinearSpace;
        if (serializationObject.texture) {
            rootUrl = serializationObject.texture.url.indexOf("data:") === 0 ? "" : rootUrl;
            this.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].Parse(serializationObject.texture, scene, rootUrl);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleTextureBlock", ParticleTextureBlock); //# sourceMappingURL=particleTextureBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleRampGradientBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleRampGradientBlock",
    ()=>ParticleRampGradientBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ParticleRampGradientBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ParticleRampGradientBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._isUnique = true;
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("rampColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleRampGradientBlock";
    }
    /**
     * Gets the color input component
     */ get color() {
        return this._inputs[0];
    }
    /**
     * Gets the rampColor output component
     */ get rampColor() {
        return this._outputs[0];
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("remapRanges");
        state._excludeVariableName("rampSampler");
        state._excludeVariableName("baseColor");
        state._excludeVariableName("alpha");
        state._excludeVariableName("remappedColorIndex");
        state._excludeVariableName("rampColor");
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return;
        }
        state._emit2DSampler("rampSampler", "RAMPGRADIENT");
        state._emitVaryingFromString("remapRanges", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, "RAMPGRADIENT");
        const varyingString = state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? "" : "fragmentInputs.";
        state.compilationString += `
            #ifdef RAMPGRADIENT
                ${state._declareLocalVar("baseColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this.color.associatedVariableName};
                ${state._declareLocalVar("alpha", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = ${this.color.associatedVariableName}.a;

                ${state._declareLocalVar("remappedColorIndex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = clamp((alpha - ${varyingString}remapRanges.x) / ${varyingString}remapRanges.y, 0.0, 1.0);

                ${state._declareLocalVar("rampColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${state._generateTextureSample("vec2(1.0 - remappedColorIndex, 0.)", "rampSampler")};

                // Remapped alpha
                ${state._declareOutput(this.rampColor)} = vec4${state.fSuffix}(baseColor.rgb * rampColor.rgb, clamp((alpha * rampColor.a - ${varyingString}remapRanges.z) / ${varyingString}remapRanges.w, 0.0, 1.0));
            #else
                ${state._declareOutput(this.rampColor)} = ${this.color.associatedVariableName};
            #endif
        `;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleRampGradientBlock", ParticleRampGradientBlock); //# sourceMappingURL=particleRampGradientBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleBlendMultiplyBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleBlendMultiplyBlock",
    ()=>ParticleBlendMultiplyBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ParticleBlendMultiplyBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ParticleBlendMultiplyBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._isUnique = true;
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("alphaTexture", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("alphaColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("blendColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ParticleBlendMultiplyBlock";
    }
    /**
     * Gets the color input component
     */ get color() {
        return this._inputs[0];
    }
    /**
     * Gets the alphaTexture input component
     */ get alphaTexture() {
        return this._inputs[1];
    }
    /**
     * Gets the alphaColor input component
     */ get alphaColor() {
        return this._inputs[2];
    }
    /**
     * Gets the blendColor output component
     */ get blendColor() {
        return this._outputs[0];
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("sourceAlpha");
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return;
        }
        state.compilationString += `
            #ifdef BLENDMULTIPLYMODE
                ${state._declareOutput(this.blendColor)};
                ${state._declareLocalVar("sourceAlpha", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)}  = ${this.alphaColor.associatedVariableName} * ${this.alphaTexture.associatedVariableName};
                ${this.blendColor.associatedVariableName} = vec4${state.fSuffix}(${this.color.associatedVariableName}.rgb * sourceAlpha + vec3(1.0) * (1.0 - sourceAlpha), ${this.color.associatedVariableName}.a);
            #else
                ${state._declareOutput(this.blendColor)} = ${this.color.associatedVariableName};
            #endif
        `;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ParticleBlendMultiplyBlock", ParticleBlendMultiplyBlock); //# sourceMappingURL=particleBlendMultiplyBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleTextureBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleRampGradientBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleRampGradientBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleBlendMultiplyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleBlendMultiplyBlock.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParticleBlendMultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleBlendMultiplyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleBlendMultiplyBlock"],
    "ParticleRampGradientBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleRampGradientBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleRampGradientBlock"],
    "ParticleTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleTextureBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleTextureBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleRampGradientBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleRampGradientBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$particleBlendMultiplyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/particleBlendMultiplyBlock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/vectorMergerBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VectorMergerBlock",
    ()=>VectorMergerBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class VectorMergerBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new VectorMergerBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets the swizzle for x (meaning which component to affect to the output.x)
         */ this.xSwizzle = "x";
        /**
         * Gets or sets the swizzle for y (meaning which component to affect to the output.y)
         */ this.ySwizzle = "y";
        /**
         * Gets or sets the swizzle for z (meaning which component to affect to the output.z)
         */ this.zSwizzle = "z";
        /**
         * Gets or sets the swizzle for w (meaning which component to affect to the output.w)
         */ this.wSwizzle = "w";
        this.registerInput("xyzw ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true);
        this.registerInput("xyz ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, true);
        this.registerInput("xy ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, true);
        this.registerInput("zw ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, true);
        this.registerInput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("z", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("w", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerOutput("xyzw", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("xyz", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerOutput("xy", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("zw", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "VectorMergerBlock";
    }
    /**
     * Gets the xyzw component (input)
     */ get xyzwIn() {
        return this._inputs[0];
    }
    /**
     * Gets the xyz component (input)
     */ get xyzIn() {
        return this._inputs[1];
    }
    /**
     * Gets the xy component (input)
     */ get xyIn() {
        return this._inputs[2];
    }
    /**
     * Gets the zw component (input)
     */ get zwIn() {
        return this._inputs[3];
    }
    /**
     * Gets the x component (input)
     */ get x() {
        return this._inputs[4];
    }
    /**
     * Gets the y component (input)
     */ get y() {
        return this._inputs[5];
    }
    /**
     * Gets the z component (input)
     */ get z() {
        return this._inputs[6];
    }
    /**
     * Gets the w component (input)
     */ get w() {
        return this._inputs[7];
    }
    /**
     * Gets the xyzw component (output)
     */ get xyzw() {
        return this._outputs[0];
    }
    /**
     * Gets the xyz component (output)
     */ get xyzOut() {
        return this._outputs[1];
    }
    /**
     * Gets the xy component (output)
     */ get xyOut() {
        return this._outputs[2];
    }
    /**
     * Gets the zw component (output)
     */ get zwOut() {
        return this._outputs[3];
    }
    /**
     * Gets the xy component (output)
     * @deprecated Please use xyOut instead.
     */ get xy() {
        return this.xyOut;
    }
    /**
     * Gets the xyz component (output)
     * @deprecated Please use xyzOut instead.
     */ get xyz() {
        return this.xyzOut;
    }
    _inputRename(name) {
        if (name === "xyzw ") {
            return "xyzwIn";
        }
        if (name === "xyz ") {
            return "xyzIn";
        }
        if (name === "xy ") {
            return "xyIn";
        }
        if (name === "zw ") {
            return "zwIn";
        }
        return name;
    }
    _buildSwizzle(len) {
        const swizzle = this.xSwizzle + this.ySwizzle + this.zSwizzle + this.wSwizzle;
        return "." + swizzle.substring(0, len);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const xInput = this.x;
        const yInput = this.y;
        const zInput = this.z;
        const wInput = this.w;
        const xyInput = this.xyIn;
        const zwInput = this.zwIn;
        const xyzInput = this.xyzIn;
        const xyzwInput = this.xyzwIn;
        const v4Output = this._outputs[0];
        const v3Output = this._outputs[1];
        const v2Output = this._outputs[2];
        const v2CompOutput = this._outputs[3];
        const vec4 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        const vec3 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        const vec2 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        if (xyzwInput.isConnected) {
            if (v4Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v4Output) + ` = ${xyzwInput.associatedVariableName}${this._buildSwizzle(4)};\n`;
            }
            if (v3Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v3Output) + ` = ${xyzwInput.associatedVariableName}${this._buildSwizzle(3)};\n`;
            }
            if (v2Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v2Output) + ` = ${xyzwInput.associatedVariableName}${this._buildSwizzle(2)};\n`;
            }
        } else if (xyzInput.isConnected) {
            if (v4Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v4Output) + ` = ${vec4}(${xyzInput.associatedVariableName}, ${wInput.isConnected ? this._writeVariable(wInput) : "0.0"})${this._buildSwizzle(4)};\n`;
            }
            if (v3Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v3Output) + ` = ${xyzInput.associatedVariableName}${this._buildSwizzle(3)};\n`;
            }
            if (v2Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v2Output) + ` = ${xyzInput.associatedVariableName}${this._buildSwizzle(2)};\n`;
            }
        } else if (xyInput.isConnected) {
            if (v4Output.hasEndpoints) {
                if (zwInput.isConnected) {
                    state.compilationString += state._declareOutput(v4Output) + ` = ${vec4}(${xyInput.associatedVariableName}, ${zwInput.associatedVariableName})${this._buildSwizzle(4)};\n`;
                } else {
                    state.compilationString += state._declareOutput(v4Output) + ` = ${vec4}(${xyInput.associatedVariableName}, ${zInput.isConnected ? this._writeVariable(zInput) : "0.0"}, ${wInput.isConnected ? this._writeVariable(wInput) : "0.0"})${this._buildSwizzle(4)};\n`;
                }
            }
            if (v3Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v3Output) + ` = ${vec3}(${xyInput.associatedVariableName}, ${zInput.isConnected ? this._writeVariable(zInput) : "0.0"})${this._buildSwizzle(3)};\n`;
            }
            if (v2Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v2Output) + ` = ${xyInput.associatedVariableName}${this._buildSwizzle(2)};\n`;
            }
            if (v2CompOutput.hasEndpoints) {
                if (zwInput.isConnected) {
                    state.compilationString += state._declareOutput(v2CompOutput) + ` = ${zwInput.associatedVariableName}${this._buildSwizzle(2)};\n`;
                } else {
                    state.compilationString += state._declareOutput(v2CompOutput) + ` = ${vec2}(${zInput.isConnected ? this._writeVariable(zInput) : "0.0"}, ${wInput.isConnected ? this._writeVariable(wInput) : "0.0"})${this._buildSwizzle(2)};\n`;
                }
            }
        } else {
            if (v4Output.hasEndpoints) {
                if (zwInput.isConnected) {
                    state.compilationString += state._declareOutput(v4Output) + ` = ${vec4}(${xInput.isConnected ? this._writeVariable(xInput) : "0.0"}, ${yInput.isConnected ? this._writeVariable(yInput) : "0.0"}, ${zwInput.associatedVariableName})${this._buildSwizzle(4)};\n`;
                } else {
                    state.compilationString += state._declareOutput(v4Output) + ` = ${vec4}(${xInput.isConnected ? this._writeVariable(xInput) : "0.0"}, ${yInput.isConnected ? this._writeVariable(yInput) : "0.0"}, ${zInput.isConnected ? this._writeVariable(zInput) : "0.0"}, ${wInput.isConnected ? this._writeVariable(wInput) : "0.0"})${this._buildSwizzle(4)};\n`;
                }
            }
            if (v3Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v3Output) + ` = ${vec3}(${xInput.isConnected ? this._writeVariable(xInput) : "0.0"}, ${yInput.isConnected ? this._writeVariable(yInput) : "0.0"}, ${zInput.isConnected ? this._writeVariable(zInput) : "0.0"})${this._buildSwizzle(3)};\n`;
            }
            if (v2Output.hasEndpoints) {
                state.compilationString += state._declareOutput(v2Output) + ` = ${vec2}(${xInput.isConnected ? this._writeVariable(xInput) : "0.0"}, ${yInput.isConnected ? this._writeVariable(yInput) : "0.0"})${this._buildSwizzle(2)};\n`;
            }
            if (v2CompOutput.hasEndpoints) {
                if (zwInput.isConnected) {
                    state.compilationString += state._declareOutput(v2CompOutput) + ` = ${zwInput.associatedVariableName}${this._buildSwizzle(2)};\n`;
                } else {
                    state.compilationString += state._declareOutput(v2CompOutput) + ` = ${vec2}(${zInput.isConnected ? this._writeVariable(zInput) : "0.0"}, ${wInput.isConnected ? this._writeVariable(wInput) : "0.0"})${this._buildSwizzle(2)};\n`;
                }
            }
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.xSwizzle = this.xSwizzle;
        serializationObject.ySwizzle = this.ySwizzle;
        serializationObject.zSwizzle = this.zSwizzle;
        serializationObject.wSwizzle = this.wSwizzle;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.xSwizzle = serializationObject.xSwizzle ?? "x";
        this.ySwizzle = serializationObject.ySwizzle ?? "y";
        this.zSwizzle = serializationObject.zSwizzle ?? "z";
        this.wSwizzle = serializationObject.wSwizzle ?? "w";
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.xSwizzle = "${this.xSwizzle}";\n`;
        codeString += `${this._codeVariableName}.ySwizzle = "${this.ySwizzle}";\n`;
        codeString += `${this._codeVariableName}.zSwizzle = "${this.zSwizzle}";\n`;
        codeString += `${this._codeVariableName}.wSwizzle = "${this.wSwizzle}";\n`;
        return codeString;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.VectorMergerBlock", VectorMergerBlock); //# sourceMappingURL=vectorMergerBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/remapBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemapBlock",
    ()=>RemapBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class RemapBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new RemapBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets the source range
         */ this.sourceRange = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1, 1);
        /**
         * Gets or sets the target range
         */ this.targetRange = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("sourceMin", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("sourceMax", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("targetMin", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("targetMax", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "RemapBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the source min input component
     */ get sourceMin() {
        return this._inputs[1];
    }
    /**
     * Gets the source max input component
     */ get sourceMax() {
        return this._inputs[2];
    }
    /**
     * Gets the target min input component
     */ get targetMin() {
        return this._inputs[3];
    }
    /**
     * Gets the target max input component
     */ get targetMax() {
        return this._inputs[4];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const sourceMin = this.sourceMin.isConnected ? this.sourceMin.associatedVariableName : this._writeFloat(this.sourceRange.x);
        const sourceMax = this.sourceMax.isConnected ? this.sourceMax.associatedVariableName : this._writeFloat(this.sourceRange.y);
        const targetMin = this.targetMin.isConnected ? this.targetMin.associatedVariableName : this._writeFloat(this.targetRange.x);
        const targetMax = this.targetMax.isConnected ? this.targetMax.associatedVariableName : this._writeFloat(this.targetRange.y);
        state.compilationString += state._declareOutput(output) + ` = ${targetMin} + (${this._inputs[0].associatedVariableName} - ${sourceMin}) * (${targetMax} - ${targetMin}) / (${sourceMax} - ${sourceMin});\n`;
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.sourceRange = new BABYLON.Vector2(${this.sourceRange.x}, ${this.sourceRange.y});\n`;
        codeString += `${this._codeVariableName}.targetRange = new BABYLON.Vector2(${this.targetRange.x}, ${this.targetRange.y});\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.sourceRange = this.sourceRange.asArray();
        serializationObject.targetRange = this.targetRange.asArray();
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.sourceRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].FromArray(serializationObject.sourceRange);
        this.targetRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].FromArray(serializationObject.targetRange);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("From", 3 /* PropertyTypeForEdition.Vector2 */ )
], RemapBlock.prototype, "sourceRange", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("To", 3 /* PropertyTypeForEdition.Vector2 */ )
], RemapBlock.prototype, "targetRange", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.RemapBlock", RemapBlock); //# sourceMappingURL=remapBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/baseMathBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseMathBlock",
    ()=>BaseMathBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
;
;
;
class BaseMathBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this.output._typeConnectionSource = this.left;
        this._linkConnectionTypes(0, 1, true);
        this.left.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.right.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._connectionObservers = [
            this.left.onTypeChangedObservable.add(()=>this._updateInputOutputTypes()),
            this.right.onTypeChangedObservable.add(()=>this._updateInputOutputTypes())
        ];
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _updateInputOutputTypes() {
        // First update the output type with the initial assumption that we'll base it on the left input.
        this.output._typeConnectionSource = this.left;
        if (this.left.isConnected && this.right.isConnected) {
            // Both inputs are connected, so we need to determine the output type based on the input types.
            if (this.left.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Int || this.left.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float && this.right.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Int) {
                this.output._typeConnectionSource = this.right;
            }
        } else if (this.left.isConnected !== this.right.isConnected) {
            // Only one input is connected, so we need to determine the output type based on the connected input.
            this.output._typeConnectionSource = this.left.isConnected ? this.left : this.right;
        }
        // Next update the accepted connection point types for the inputs based on the current input connection state.
        if (this.left.isConnected || this.right.isConnected) {
            for (const [first, second] of [
                [
                    this.left,
                    this.right
                ],
                [
                    this.right,
                    this.left
                ]
            ]){
                // Always allow Ints and Floats.
                first.acceptedConnectionPointTypes = [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Int,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float
                ];
                if (second.isConnected) {
                    // The same types as the connected input are always allowed.
                    first.acceptedConnectionPointTypes.push(second.type);
                    // If the other input is a scalar, then we also allow Vector/Color/Matrix types.
                    if (second.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Int || second.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
                        first.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
                    }
                }
            }
        }
    }
    /**
     * Release resources
     */ dispose() {
        super.dispose();
        for (const observer of this._connectionObservers){
            observer.remove();
        }
        this._connectionObservers.length = 0;
    }
} //# sourceMappingURL=baseMathBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/multiplyBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiplyBlock",
    ()=>MultiplyBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$baseMathBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/baseMathBlock.js [app-client] (ecmascript)");
;
;
class MultiplyBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$baseMathBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMathBlock"] {
    /**
     * Creates a new MultiplyBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MultiplyBlock";
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = ${this.left.associatedVariableName} * ${this.right.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MultiplyBlock", MultiplyBlock); //# sourceMappingURL=multiplyBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorSplitterBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorSplitterBlock",
    ()=>ColorSplitterBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ColorSplitterBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ColorSplitterBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("rgba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, true);
        this.registerInput("rgb ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
        this.registerOutput("r", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("g", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.inputsAreExclusive = true;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ColorSplitterBlock";
    }
    /**
     * Gets the rgba component (input)
     */ get rgba() {
        return this._inputs[0];
    }
    /**
     * Gets the rgb component (input)
     */ get rgbIn() {
        return this._inputs[1];
    }
    /**
     * Gets the rgb component (output)
     */ get rgbOut() {
        return this._outputs[0];
    }
    /**
     * Gets the r component (output)
     */ get r() {
        return this._outputs[1];
    }
    /**
     * Gets the g component (output)
     */ get g() {
        return this._outputs[2];
    }
    /**
     * Gets the b component (output)
     */ get b() {
        return this._outputs[3];
    }
    /**
     * Gets the a component (output)
     */ get a() {
        return this._outputs[4];
    }
    _inputRename(name) {
        if (name === "rgb ") {
            return "rgbIn";
        }
        return name;
    }
    _outputRename(name) {
        if (name === "rgb") {
            return "rgbOut";
        }
        return name;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const input = this.rgba.isConnected ? this.rgba : this.rgbIn;
        if (!input.isConnected) {
            return;
        }
        const rgbOutput = this._outputs[0];
        const rOutput = this._outputs[1];
        const gOutput = this._outputs[2];
        const bOutput = this._outputs[3];
        const aOutput = this._outputs[4];
        if (rgbOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(rgbOutput) + ` = ${input.associatedVariableName}.rgb;\n`;
        }
        if (rOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(rOutput) + ` = ${input.associatedVariableName}.r;\n`;
        }
        if (gOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(gOutput) + ` = ${input.associatedVariableName}.g;\n`;
        }
        if (bOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(bOutput) + ` = ${input.associatedVariableName}.b;\n`;
        }
        if (aOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(aOutput) + ` = ${input.associatedVariableName}.a;\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ColorSplitterBlock", ColorSplitterBlock); //# sourceMappingURL=colorSplitterBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/trigonometryBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrigonometryBlock",
    ()=>TrigonometryBlock,
    "TrigonometryBlockOperations",
    ()=>TrigonometryBlockOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
var TrigonometryBlockOperations;
(function(TrigonometryBlockOperations) {
    /** Cos */ TrigonometryBlockOperations[TrigonometryBlockOperations["Cos"] = 0] = "Cos";
    /** Sin */ TrigonometryBlockOperations[TrigonometryBlockOperations["Sin"] = 1] = "Sin";
    /** Abs */ TrigonometryBlockOperations[TrigonometryBlockOperations["Abs"] = 2] = "Abs";
    /** Exp */ TrigonometryBlockOperations[TrigonometryBlockOperations["Exp"] = 3] = "Exp";
    /** Exp2 */ TrigonometryBlockOperations[TrigonometryBlockOperations["Exp2"] = 4] = "Exp2";
    /** Round */ TrigonometryBlockOperations[TrigonometryBlockOperations["Round"] = 5] = "Round";
    /** Floor */ TrigonometryBlockOperations[TrigonometryBlockOperations["Floor"] = 6] = "Floor";
    /** Ceiling */ TrigonometryBlockOperations[TrigonometryBlockOperations["Ceiling"] = 7] = "Ceiling";
    /** Square root */ TrigonometryBlockOperations[TrigonometryBlockOperations["Sqrt"] = 8] = "Sqrt";
    /** Log */ TrigonometryBlockOperations[TrigonometryBlockOperations["Log"] = 9] = "Log";
    /** Tangent */ TrigonometryBlockOperations[TrigonometryBlockOperations["Tan"] = 10] = "Tan";
    /** Arc tangent */ TrigonometryBlockOperations[TrigonometryBlockOperations["ArcTan"] = 11] = "ArcTan";
    /** Arc cosinus */ TrigonometryBlockOperations[TrigonometryBlockOperations["ArcCos"] = 12] = "ArcCos";
    /** Arc sinus */ TrigonometryBlockOperations[TrigonometryBlockOperations["ArcSin"] = 13] = "ArcSin";
    /** Fraction */ TrigonometryBlockOperations[TrigonometryBlockOperations["Fract"] = 14] = "Fract";
    /** Sign */ TrigonometryBlockOperations[TrigonometryBlockOperations["Sign"] = 15] = "Sign";
    /** To radians (from degrees) */ TrigonometryBlockOperations[TrigonometryBlockOperations["Radians"] = 16] = "Radians";
    /** To degrees (from radians) */ TrigonometryBlockOperations[TrigonometryBlockOperations["Degrees"] = 17] = "Degrees";
    /** To Set a = b */ TrigonometryBlockOperations[TrigonometryBlockOperations["Set"] = 18] = "Set";
})(TrigonometryBlockOperations || (TrigonometryBlockOperations = {}));
class TrigonometryBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new TrigonometryBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets the operation applied by the block
         */ this.operation = TrigonometryBlockOperations.Cos;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "TrigonometryBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        let operation = "";
        switch(this.operation){
            case TrigonometryBlockOperations.Cos:
                {
                    operation = "cos";
                    break;
                }
            case TrigonometryBlockOperations.Sin:
                {
                    operation = "sin";
                    break;
                }
            case TrigonometryBlockOperations.Abs:
                {
                    operation = "abs";
                    break;
                }
            case TrigonometryBlockOperations.Exp:
                {
                    operation = "exp";
                    break;
                }
            case TrigonometryBlockOperations.Exp2:
                {
                    operation = "exp2";
                    break;
                }
            case TrigonometryBlockOperations.Round:
                {
                    operation = "round";
                    break;
                }
            case TrigonometryBlockOperations.Floor:
                {
                    operation = "floor";
                    break;
                }
            case TrigonometryBlockOperations.Ceiling:
                {
                    operation = "ceil";
                    break;
                }
            case TrigonometryBlockOperations.Sqrt:
                {
                    operation = "sqrt";
                    break;
                }
            case TrigonometryBlockOperations.Log:
                {
                    operation = "log";
                    break;
                }
            case TrigonometryBlockOperations.Tan:
                {
                    operation = "tan";
                    break;
                }
            case TrigonometryBlockOperations.ArcTan:
                {
                    operation = "atan";
                    break;
                }
            case TrigonometryBlockOperations.ArcCos:
                {
                    operation = "acos";
                    break;
                }
            case TrigonometryBlockOperations.ArcSin:
                {
                    operation = "asin";
                    break;
                }
            case TrigonometryBlockOperations.Fract:
                {
                    operation = "fract";
                    break;
                }
            case TrigonometryBlockOperations.Sign:
                {
                    operation = "sign";
                    break;
                }
            case TrigonometryBlockOperations.Radians:
                {
                    operation = "radians";
                    break;
                }
            case TrigonometryBlockOperations.Degrees:
                {
                    operation = "degrees";
                    break;
                }
            case TrigonometryBlockOperations.Set:
                {
                    operation = "";
                    break;
                }
        }
        state.compilationString += state._declareOutput(output) + ` = ${operation}(${this.input.associatedVariableName});\n`;
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.operation = this.operation;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.operation = serializationObject.operation;
    }
    _dumpPropertiesCode() {
        const codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.operation = BABYLON.TrigonometryBlockOperations.${TrigonometryBlockOperations[this.operation]};\n`;
        return codeString;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Operation", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "Cos",
                value: TrigonometryBlockOperations.Cos
            },
            {
                label: "Sin",
                value: TrigonometryBlockOperations.Sin
            },
            {
                label: "Abs",
                value: TrigonometryBlockOperations.Abs
            },
            {
                label: "Exp",
                value: TrigonometryBlockOperations.Exp
            },
            {
                label: "Exp2",
                value: TrigonometryBlockOperations.Exp2
            },
            {
                label: "Round",
                value: TrigonometryBlockOperations.Round
            },
            {
                label: "Floor",
                value: TrigonometryBlockOperations.Floor
            },
            {
                label: "Ceiling",
                value: TrigonometryBlockOperations.Ceiling
            },
            {
                label: "Sqrt",
                value: TrigonometryBlockOperations.Sqrt
            },
            {
                label: "Log",
                value: TrigonometryBlockOperations.Log
            },
            {
                label: "Tan",
                value: TrigonometryBlockOperations.Tan
            },
            {
                label: "ArcTan",
                value: TrigonometryBlockOperations.ArcTan
            },
            {
                label: "ArcCos",
                value: TrigonometryBlockOperations.ArcCos
            },
            {
                label: "ArcSin",
                value: TrigonometryBlockOperations.ArcSin
            },
            {
                label: "Fract",
                value: TrigonometryBlockOperations.Fract
            },
            {
                label: "Sign",
                value: TrigonometryBlockOperations.Sign
            },
            {
                label: "Radians",
                value: TrigonometryBlockOperations.Radians
            },
            {
                label: "Degrees",
                value: TrigonometryBlockOperations.Degrees
            },
            {
                label: "Set",
                value: TrigonometryBlockOperations.Set
            }
        ]
    })
], TrigonometryBlock.prototype, "operation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.TrigonometryBlock", TrigonometryBlock); //# sourceMappingURL=trigonometryBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianSplattingBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GaussianSplattingBlock",
    ()=>GaussianSplattingBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/buffer.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
;
;
;
;
;
class GaussianSplattingBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new GaussianSplattingBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this._isUnique = true;
        this.registerInput("splatPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("splatScale", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("world", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("view", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("projection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerOutput("splatVertex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerOutput("SH", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "GaussianSplattingBlock";
    }
    /**
     * Gets the position input component
     */ get splatPosition() {
        return this._inputs[0];
    }
    /**
     * Gets the scale input component
     */ get splatScale() {
        return this._inputs[1];
    }
    /**
     * Gets the View matrix input component
     */ get world() {
        return this._inputs[2];
    }
    /**
     * Gets the View matrix input component
     */ get view() {
        return this._inputs[3];
    }
    /**
     * Gets the projection matrix input component
     */ get projection() {
        return this._inputs[4];
    }
    /**
     * Gets the splatVertex output component
     */ get splatVertex() {
        return this._outputs[0];
    }
    /**
     * Gets the SH output contribution
     */ get SH() {
        return this._outputs[1];
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("focal");
        state._excludeVariableName("invViewport");
        state._excludeVariableName("kernelSize");
        state._excludeVariableName("eyePosition");
    }
    /**
     * Update defines for shader compilation
     * @param defines defines the material defines to update
     * @param nodeMaterial defines the node material requesting the update
     * @param mesh defines the mesh to be rendered
     */ prepareDefines(defines, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        if (mesh.getClassName() == "GaussianSplattingMesh") {
            defines.setValue("SH_DEGREE", mesh.shDegree, true);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            return;
        }
        state.sharedData.blocksWithDefines.push(this);
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("gaussianSplattingVertexDeclaration", comments);
        state._emitFunctionFromInclude("gaussianSplatting", comments);
        state._emitFunctionFromInclude("helperFunctions", comments);
        state._emitUniformFromString("focal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        state._emitUniformFromString("invViewport", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        state._emitUniformFromString("kernelSize", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        state._emitUniformFromString("eyePosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        state._emitUniformFromString("viewDirectionFactor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        state.attributes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind);
        state.attributes.push("splatIndex0");
        state.attributes.push("splatIndex1");
        state.attributes.push("splatIndex2");
        state.attributes.push("splatIndex3");
        state.sharedData.nodeMaterial.backFaceCulling = false;
        const splatPosition = this.splatPosition;
        const splatScale = this.splatScale;
        const world = this.world;
        const view = this.view;
        const projection = this.projection;
        const output = this.splatVertex;
        const sh = this.SH;
        const addF = state.fSuffix;
        let splatScaleParameter = `vec2${addF}(1.,1.)`;
        if (splatScale.isConnected) {
            splatScaleParameter = splatScale.associatedVariableName;
        }
        let input = "position";
        let uniforms = "";
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            input = "input.position";
            uniforms = ", uniforms.focal, uniforms.invViewport, uniforms.kernelSize";
        }
        if (this.SH.isConnected) {
            state.compilationString += `#if SH_DEGREE > 0\n`;
            if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                state.compilationString += `let worldRot: mat3x3f =  mat3x3f(${world.associatedVariableName}[0].xyz, ${world.associatedVariableName}[1].xyz, ${world.associatedVariableName}[2].xyz);`;
                state.compilationString += `let normWorldRot: mat3x3f = inverseMat3(worldRot);`;
                state.compilationString += `var dir: vec3f = normalize(normWorldRot * (${splatPosition.associatedVariableName}.xyz - uniforms.eyePosition));\n`;
                state.compilationString += `dir *= uniforms.viewDirectionFactor;\n`;
            } else {
                state.compilationString += `mat3 worldRot = mat3(${world.associatedVariableName});`;
                state.compilationString += `mat3 normWorldRot = inverseMat3(worldRot);`;
                state.compilationString += `vec3 dir = normalize(normWorldRot * (${splatPosition.associatedVariableName}.xyz - eyePosition));\n`;
                state.compilationString += `dir *= viewDirectionFactor;\n`;
            }
            state.compilationString += `${state._declareOutput(sh)} = computeSH(splat, dir);\n`;
            state.compilationString += `#else\n`;
            state.compilationString += `${state._declareOutput(sh)} = vec3${addF}(0.,0.,0.);\n`;
            state.compilationString += `#endif;\n`;
        } else {
            state.compilationString += `${state._declareOutput(sh)} = vec3${addF}(0.,0.,0.);`;
        }
        state.compilationString += `${state._declareOutput(output)} = gaussianSplatting(${input}.xy, ${splatPosition.associatedVariableName}, ${splatScaleParameter}, covA, covB, ${world.associatedVariableName}, ${view.associatedVariableName}, ${projection.associatedVariableName}${uniforms});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.GaussianSplattingBlock", GaussianSplattingBlock); //# sourceMappingURL=gaussianSplattingBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GaussianBlock",
    ()=>GaussianBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class GaussianBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new GaussianBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._isUnique = false;
        this.registerInput("splatColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("rgba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("alpha", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "GaussianBlock";
    }
    /**
     * Gets the color input component
     */ get splatColor() {
        return this._inputs[0];
    }
    /**
     * Gets the rgba output component
     */ get rgba() {
        return this._outputs[0];
    }
    /**
     * Gets the rgb output component
     */ get rgb() {
        return this._outputs[1];
    }
    /**
     * Gets the alpha output component
     */ get alpha() {
        return this._outputs[2];
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("vPosition");
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return;
        }
        // Emit code
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("clipPlaneFragmentDeclaration", comments);
        state._emitFunctionFromInclude("logDepthDeclaration", comments);
        state._emitFunctionFromInclude("fogFragmentDeclaration", comments);
        state._emitFunctionFromInclude("gaussianSplattingFragmentDeclaration", comments);
        state._emitVaryingFromString("vPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        const tempSplatColor = state._getFreeVariableName("tempSplatColor");
        const color = this.splatColor;
        const rgba = this._outputs[0];
        const rgb = this._outputs[1];
        const alpha = this._outputs[2];
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            state.compilationString += `let ${tempSplatColor}:vec4f = gaussianColor(${color.associatedVariableName}, input.vPosition);\n`;
        } else {
            state.compilationString += `vec4 ${tempSplatColor} = gaussianColor(${color.associatedVariableName});\n`;
        }
        state.compilationString += `${state._declareOutput(rgba)} = ${tempSplatColor}.rgba;`;
        state.compilationString += `${state._declareOutput(rgb)} = ${tempSplatColor}.rgb;`;
        state.compilationString += `${state._declareOutput(alpha)} = ${tempSplatColor}.a;`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.GaussianBlock", GaussianBlock); //# sourceMappingURL=gaussianBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/splatReaderBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplatReaderBlock",
    ()=>SplatReaderBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GaussianSplatting$2f$gaussianSplattingMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GaussianSplatting/gaussianSplattingMaterial.js [app-client] (ecmascript)");
;
;
;
;
;
class SplatReaderBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new SplatReaderBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this._isUnique = true;
        this.registerInput("splatIndex", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerOutput("splatPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerOutput("splatColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SplatReaderBlock";
    }
    /**
     * Gets the splat index input component
     */ get splatIndex() {
        return this._inputs[0];
    }
    /**
     * Gets the splatPosition output component
     */ get splatPosition() {
        return this._outputs[0];
    }
    /**
     * Gets the splatColor output component
     */ get splatColor() {
        return this._outputs[1];
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("covA");
        state._excludeVariableName("covB");
        state._excludeVariableName("vPosition");
        state._excludeVariableName("covariancesATexture");
        state._excludeVariableName("covariancesBTexture");
        state._excludeVariableName("centersTexture");
        state._excludeVariableName("colorsTexture");
        state._excludeVariableName("dataTextureSize");
    }
    bind(effect, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        const scene = mesh.getScene();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GaussianSplatting$2f$gaussianSplattingMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianSplattingMaterial"].BindEffect(mesh, effect, scene);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            return;
        }
        state.sharedData.bindableBlocks.push(this);
        // Emit code
        const comments = `//${this.name}`;
        state._emit2DSampler("covariancesATexture");
        state._emit2DSampler("covariancesBTexture");
        state._emit2DSampler("centersTexture");
        state._emit2DSampler("colorsTexture");
        state._emit2DSampler("shTexture0", "SH_DEGREE > 0", undefined, undefined, true, "highp");
        state._emit2DSampler("shTexture1", "SH_DEGREE > 0", undefined, undefined, true, "highp");
        state._emit2DSampler("shTexture2", "SH_DEGREE > 0", undefined, undefined, true, "highp");
        state._emitFunctionFromInclude("gaussianSplattingVertexDeclaration", comments);
        state._emitFunctionFromInclude("gaussianSplatting", comments);
        state._emitVaryingFromString("vPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        state._emitUniformFromString("dataTextureSize", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        const splatPosition = this.splatPosition;
        const splatColor = this.splatColor;
        const splatVariablename = state._getFreeVariableName("splat");
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            state.compilationString += `let splatIndex: f32 = getSplatIndex(i32(input.position.z + 0.5), input.splatIndex0, input.splatIndex1, input.splatIndex2, input.splatIndex3);`;
            state.compilationString += `var ${splatVariablename}: Splat = readSplat(splatIndex, uniforms.dataTextureSize);\n`;
            state.compilationString += `var covA: vec3f = splat.covA.xyz; var covB: vec3f = vec3f(splat.covA.w, splat.covB.xy);\n`;
            state.compilationString += "vertexOutputs.vPosition = input.position.xy;\n";
        } else {
            state.compilationString += `float splatIndex = getSplatIndex(int(position.z + 0.5));`;
            state.compilationString += `Splat ${splatVariablename} = readSplat(splatIndex);\n`;
            state.compilationString += `vec3 covA = splat.covA.xyz; vec3 covB = vec3(splat.covA.w, splat.covB.xy);\n`;
            state.compilationString += "vPosition = position.xy;\n";
        }
        state.compilationString += `${state._declareOutput(splatPosition)} = ${splatVariablename}.center.xyz;\n`;
        state.compilationString += `${state._declareOutput(splatColor)} = ${splatVariablename}.color;\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SplatReaderBlock", SplatReaderBlock); //# sourceMappingURL=splatReaderBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianSplattingBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianSplattingBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$splatReaderBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/splatReaderBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianBlock.js [app-client] (ecmascript)");
// Gaussian
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$gaussianSplattingVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/gaussianSplattingVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$gaussianSplattingVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplattingVertexDeclaration.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GaussianBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianBlock"],
    "GaussianSplattingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianSplattingBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianSplattingBlock"],
    "SplatReaderBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$splatReaderBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplatReaderBlock"],
    "gaussianSplattingVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$gaussianSplattingVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gaussianSplattingVertexDeclaration"],
    "gaussianSplattingVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$gaussianSplattingVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gaussianSplattingVertexDeclarationWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianSplattingBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianSplattingBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$splatReaderBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/splatReaderBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$gaussianSplattingVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/gaussianSplattingVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$gaussianSplattingVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplattingVertexDeclaration.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/addBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddBlock",
    ()=>AddBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$baseMathBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/baseMathBlock.js [app-client] (ecmascript)");
;
;
class AddBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$baseMathBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMathBlock"] {
    /**
     * Creates a new AddBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "AddBlock";
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = ${this.left.associatedVariableName} + ${this.right.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.AddBlock", AddBlock); //# sourceMappingURL=addBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/teleportInBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialTeleportInBlock",
    ()=>NodeMaterialTeleportInBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
;
;
;
;
class NodeMaterialTeleportInBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /** Gets the list of attached endpoints */ get endpoints() {
        return this._endpoints;
    }
    /**
     * Gets or sets the target of the block
     */ get target() {
        const input = this._inputs[0];
        if (input.isConnected) {
            const block = input.connectedPoint.ownerBlock;
            if (block.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
                return block.target;
            }
            if (input.connectedPoint.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
                return input.connectedPoint.target;
            }
        }
        return this._target;
    }
    set target(value) {
        if ((this._target & value) !== 0) {
            return;
        }
        this._target = value;
    }
    /**
     * Create a new NodeMaterialTeleportInBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this._endpoints = [];
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "NodeMaterialTeleportInBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * @returns a boolean indicating that this connection will be used in the fragment shader
     */ isConnectedInFragmentShader() {
        return this.endpoints.some((e)=>e.output.isConnectedInFragmentShader);
    }
    /**
     * Checks if the input is connected to a uniform input block
     */ get isConnectedToUniform() {
        return this.input.isConnected && this.input.connectedPoint.ownerBlock.isInput && this.input.connectedPoint.ownerBlock.isUniform;
    }
    _dumpCode(uniqueNames, alreadyDumped) {
        let codeString = super._dumpCode(uniqueNames, alreadyDumped);
        for (const endpoint of this.endpoints){
            if (alreadyDumped.indexOf(endpoint) === -1) {
                codeString += endpoint._dumpCode(uniqueNames, alreadyDumped);
            }
        }
        return codeString;
    }
    /**
     * Checks if the current block is an ancestor of a given block
     * @param block defines the potential descendant block to check
     * @returns true if block is a descendant
     */ isAnAncestorOf(block) {
        for (const endpoint of this.endpoints){
            if (endpoint === block) {
                return true;
            }
            if (endpoint.isAnAncestorOf(block)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Add an enpoint to this block
     * @param endpoint define the endpoint to attach to
     */ attachToEndpoint(endpoint) {
        endpoint.detach();
        this._endpoints.push(endpoint);
        endpoint._entryPoint = this;
        endpoint._outputs[0]._typeConnectionSource = this._inputs[0];
        endpoint._tempEntryPointUniqueId = null;
        endpoint.name = "> " + this.name;
        this._outputs = this._endpoints.map((e)=>e.output);
    }
    /**
     * Remove enpoint from this block
     * @param endpoint define the endpoint to remove
     */ detachFromEndpoint(endpoint) {
        const index = this._endpoints.indexOf(endpoint);
        if (index !== -1) {
            this._endpoints.splice(index, 1);
            endpoint._outputs[0]._typeConnectionSource = null;
            endpoint._entryPoint = null;
            this._outputs = this._endpoints.map((e)=>e.output);
        }
    }
    /**
     * Release resources
     */ dispose() {
        super.dispose();
        for (const endpoint of this._endpoints){
            this.detachFromEndpoint(endpoint);
        }
        this._endpoints = [];
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.NodeMaterialTeleportInBlock", NodeMaterialTeleportInBlock); //# sourceMappingURL=teleportInBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/teleportOutBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialTeleportOutBlock",
    ()=>NodeMaterialTeleportOutBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
;
;
;
;
class NodeMaterialTeleportOutBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new TeleportOutBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /** @internal */ this._entryPoint = null;
        /** @internal */ this._tempEntryPointUniqueId = null;
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
    }
    /**
     * Gets the entry point
     */ get entryPoint() {
        return this._entryPoint;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "NodeMaterialTeleportOutBlock";
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets or sets the target of the block
     */ get target() {
        return this._entryPoint ? this._entryPoint.target : this._target;
    }
    set target(value) {
        if ((this._target & value) !== 0) {
            return;
        }
        this._target = value;
    }
    /** Detach from entry point */ detach() {
        if (!this._entryPoint) {
            return;
        }
        this._entryPoint.detachFromEndpoint(this);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (!this.entryPoint) {
            return;
        }
        if (this.entryPoint.isConnectedToUniform) {
            // We skip the build if the entry point is connected to a uniform
            this.output.associatedVariableName = this.entryPoint.input.associatedVariableName;
            return;
        }
        state.compilationString += state._declareOutput(this.output) + ` = ${this.entryPoint.input.associatedVariableName};\n`;
    }
    /**
     * Clone the current block to a new identical block
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures and relative dependencies
     * @returns a copy of the current block
     */ clone(scene, rootUrl = "") {
        const clone = super.clone(scene, rootUrl);
        if (this.entryPoint) {
            this.entryPoint.attachToEndpoint(clone);
        }
        return clone;
    }
    _customBuildStep(state, activeBlocks) {
        if (this.entryPoint) {
            this.entryPoint.build(state, activeBlocks);
        }
    }
    _dumpCode(uniqueNames, alreadyDumped) {
        let codeString = "";
        if (this.entryPoint) {
            if (alreadyDumped.indexOf(this.entryPoint) === -1) {
                codeString += this.entryPoint._dumpCode(uniqueNames, alreadyDumped);
            }
        }
        return codeString + super._dumpCode(uniqueNames, alreadyDumped);
    }
    _dumpCodeForOutputConnections(alreadyDumped) {
        let codeString = super._dumpCodeForOutputConnections(alreadyDumped);
        if (this.entryPoint) {
            codeString += this.entryPoint._dumpCodeForOutputConnections(alreadyDumped);
        }
        return codeString;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        if (this.entryPoint) {
            codeString += `${this.entryPoint._codeVariableName}.attachToEndpoint(${this._codeVariableName});\n`;
        }
        return codeString;
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.entryPoint = this.entryPoint?.uniqueId ?? "";
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this._tempEntryPointUniqueId = serializationObject.entryPoint;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.NodeMaterialTeleportOutBlock", NodeMaterialTeleportOutBlock); //# sourceMappingURL=teleportOutBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$teleportInBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/teleportInBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$teleportOutBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/teleportOutBlock.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialTeleportInBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$teleportInBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialTeleportInBlock"],
    "NodeMaterialTeleportOutBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$teleportOutBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialTeleportOutBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$teleportInBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/teleportInBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$teleportOutBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/teleportOutBlock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/scaleBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleBlock",
    ()=>ScaleBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ScaleBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ScaleBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("factor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ScaleBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the factor input component
     */ get factor() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = ${this.input.associatedVariableName} * ${this.factor.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ScaleBlock", ScaleBlock); //# sourceMappingURL=scaleBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/clampBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClampBlock",
    ()=>ClampBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
class ClampBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ClampBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /** Gets or sets the minimum range */ this.minimum = 0.0;
        /** Gets or sets the maximum range */ this.maximum = 1.0;
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ClampBlock";
    }
    /**
     * Gets the value input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const cast = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? state._getShaderType(this.value.type) : "";
        state.compilationString += state._declareOutput(output) + ` = clamp(${this.value.associatedVariableName}, ${cast}(${this._writeFloat(this.minimum)}), ${cast}(${this._writeFloat(this.maximum)}));\n`;
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.minimum = ${this.minimum};\n`;
        codeString += `${this._codeVariableName}.maximum = ${this.maximum};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.minimum = this.minimum;
        serializationObject.maximum = this.maximum;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.minimum = serializationObject.minimum;
        this.maximum = serializationObject.maximum;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Minimum", 1 /* PropertyTypeForEdition.Float */ , undefined, {
        embedded: true
    })
], ClampBlock.prototype, "minimum", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Maximum", 1 /* PropertyTypeForEdition.Float */ , undefined, {
        embedded: true
    })
], ClampBlock.prototype, "maximum", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ClampBlock", ClampBlock); //# sourceMappingURL=clampBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/crossBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CrossBlock",
    ()=>CrossBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class CrossBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new CrossBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._linkConnectionTypes(0, 1);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "CrossBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = cross(${this.left.associatedVariableName}.xyz, ${this.right.associatedVariableName}.xyz);\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CrossBlock", CrossBlock); //# sourceMappingURL=crossBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/customBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomBlock",
    ()=>CustomBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
;
;
;
;
;
;
class CustomBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Gets or sets the options for this custom block
     */ get options() {
        return this._options;
    }
    set options(options) {
        this._deserializeOptions(options);
    }
    /**
     * Creates a new CustomBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "CustomBlock";
    }
    _buildBlock(state) {
        super._buildBlock(state);
        let code = this._code;
        let functionName = this._options.functionName;
        // Replace the TYPE_XXX placeholders (if any)
        for (const input of this._inputs){
            const rexp = new RegExp("\\{TYPE_" + input.name + "\\}", "gm");
            const type = state._getGLType(input.type);
            code = code.replace(rexp, type);
            functionName = functionName.replace(rexp, type);
        }
        for (const output of this._outputs){
            const rexp = new RegExp("\\{TYPE_" + output.name + "\\}", "gm");
            const type = state._getGLType(output.type);
            code = code.replace(rexp, type);
            functionName = functionName.replace(rexp, type);
        }
        state._emitFunction(functionName, code, "");
        // Declare the output variables
        for (const output of this._outputs){
            state.compilationString += state._declareOutput(output) + ";\n";
        }
        // Generate the function call
        state.compilationString += functionName + "(";
        let hasInput = false;
        for(let i = 0; i < this._inputs.length; i++){
            const input = this._inputs[i];
            if (i > 0) {
                state.compilationString += ", ";
            }
            if (this._inputSamplers && this._inputSamplers.indexOf(input.name) !== -1) {
                state.compilationString += input.connectedPoint?.ownerBlock?.samplerName ?? input.associatedVariableName;
            } else {
                state.compilationString += input.associatedVariableName;
            }
            hasInput = true;
        }
        for(let i = 0; i < this._outputs.length; i++){
            const output = this._outputs[i];
            if (i > 0 || hasInput) {
                state.compilationString += ", ";
            }
            state.compilationString += output.associatedVariableName;
        }
        state.compilationString += ");\n";
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.options = ${JSON.stringify(this._options)};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.options = this._options;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        this._deserializeOptions(serializationObject.options);
        super._deserialize(serializationObject, scene, rootUrl);
    }
    _deserializeOptions(options) {
        this._options = options;
        this._code = options.code.join("\n") + "\n";
        this.name = this.name || options.name;
        this.target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"][options.target];
        if (options.inParameters) {
            for(let i = 0; i < options.inParameters.length; i++){
                const input = options.inParameters[i];
                const type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"][input.type];
                if (input.type === "sampler2D" || input.type === "samplerCube" || input.type === "sampler2DArray") {
                    this._inputSamplers = this._inputSamplers || [];
                    this._inputSamplers.push(input.name);
                    this.registerInput(input.name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"](input.name, this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
                } else {
                    this.registerInput(input.name, type);
                }
                Object.defineProperty(this, input.name, {
                    get: function() {
                        return this._inputs[i];
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        }
        if (options.outParameters) {
            for(let i = 0; i < options.outParameters.length; i++){
                const output = options.outParameters[i];
                this.registerOutput(output.name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"][output.type]);
                Object.defineProperty(this, output.name, {
                    get: function() {
                        return this._outputs[i];
                    },
                    enumerable: true,
                    configurable: true
                });
                if (output.type === "BasedOnInput") {
                    this._outputs[i]._typeConnectionSource = this._findInputByName(output.typeFromInput)[0];
                }
            }
        }
        if (options.inLinkedConnectionTypes) {
            for (const connection of options.inLinkedConnectionTypes){
                this._linkConnectionTypes(this._findInputByName(connection.input1)[1], this._findInputByName(connection.input2)[1]);
            }
        }
    }
    _findInputByName(name) {
        if (!name) {
            return null;
        }
        for(let i = 0; i < this._inputs.length; i++){
            if (this._inputs[i].name === name) {
                return [
                    this._inputs[i],
                    i
                ];
            }
        }
        return null;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CustomBlock", CustomBlock); //# sourceMappingURL=customBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/dotBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DotBlock",
    ()=>DotBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class DotBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new DotBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._linkConnectionTypes(0, 1);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "DotBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = dot(${this.left.associatedVariableName}, ${this.right.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DotBlock", DotBlock); //# sourceMappingURL=dotBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/normalizeBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NormalizeBlock",
    ()=>NormalizeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class NormalizeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new NormalizeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "NormalizeBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const input = this._inputs[0];
        state.compilationString += state._declareOutput(output) + ` = normalize(${input.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.NormalizeBlock", NormalizeBlock); //# sourceMappingURL=normalizeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorMergerBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorMergerBlock",
    ()=>ColorMergerBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ColorMergerBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ColorMergerBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets the swizzle for r (meaning which component to affect to the output.r)
         */ this.rSwizzle = "r";
        /**
         * Gets or sets the swizzle for g (meaning which component to affect to the output.g)
         */ this.gSwizzle = "g";
        /**
         * Gets or sets the swizzle for b (meaning which component to affect to the output.b)
         */ this.bSwizzle = "b";
        /**
         * Gets or sets the swizzle for a (meaning which component to affect to the output.a)
         */ this.aSwizzle = "a";
        this.registerInput("rgb ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true);
        this.registerInput("r", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("g", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerOutput("rgba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ColorMergerBlock";
    }
    /**
     * Gets the rgb component (input)
     */ get rgbIn() {
        return this._inputs[0];
    }
    /**
     * Gets the r component (input)
     */ get r() {
        return this._inputs[1];
    }
    /**
     * Gets the g component (input)
     */ get g() {
        return this._inputs[2];
    }
    /**
     * Gets the b component (input)
     */ get b() {
        return this._inputs[3];
    }
    /**
     * Gets the a component (input)
     */ get a() {
        return this._inputs[4];
    }
    /**
     * Gets the rgba component (output)
     */ get rgba() {
        return this._outputs[0];
    }
    /**
     * Gets the rgb component (output)
     */ get rgbOut() {
        return this._outputs[1];
    }
    /**
     * Gets the rgb component (output)
     * @deprecated Please use rgbOut instead.
     */ get rgb() {
        return this.rgbOut;
    }
    _inputRename(name) {
        if (name === "rgb ") {
            return "rgbIn";
        }
        return name;
    }
    _outputRename(name) {
        if (name === "rgb") {
            return "rgbOut";
        }
        return name;
    }
    _buildSwizzle(len) {
        const swizzle = this.rSwizzle + this.gSwizzle + this.bSwizzle + this.aSwizzle;
        return "." + swizzle.substring(0, len);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const rInput = this.r;
        const gInput = this.g;
        const bInput = this.b;
        const aInput = this.a;
        const rgbInput = this.rgbIn;
        const color4Output = this._outputs[0];
        const color3Output = this._outputs[1];
        const vec4 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        const vec3 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        if (rgbInput.isConnected) {
            if (color4Output.hasEndpoints) {
                state.compilationString += state._declareOutput(color4Output) + ` = ${vec4}(${rgbInput.associatedVariableName}, ${aInput.isConnected ? this._writeVariable(aInput) : "0.0"})${this._buildSwizzle(4)};\n`;
            }
            if (color3Output.hasEndpoints) {
                state.compilationString += state._declareOutput(color3Output) + ` = ${rgbInput.associatedVariableName}${this._buildSwizzle(3)};\n`;
            }
        } else {
            if (color4Output.hasEndpoints) {
                state.compilationString += state._declareOutput(color4Output) + ` = ${vec4}(${rInput.isConnected ? this._writeVariable(rInput) : "0.0"}, ${gInput.isConnected ? this._writeVariable(gInput) : "0.0"}, ${bInput.isConnected ? this._writeVariable(bInput) : "0.0"}, ${aInput.isConnected ? this._writeVariable(aInput) : "0.0"})${this._buildSwizzle(4)};\n`;
            }
            if (color3Output.hasEndpoints) {
                state.compilationString += state._declareOutput(color3Output) + ` = ${vec3}(${rInput.isConnected ? this._writeVariable(rInput) : "0.0"}, ${gInput.isConnected ? this._writeVariable(gInput) : "0.0"}, ${bInput.isConnected ? this._writeVariable(bInput) : "0.0"})${this._buildSwizzle(3)};\n`;
            }
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.rSwizzle = this.rSwizzle;
        serializationObject.gSwizzle = this.gSwizzle;
        serializationObject.bSwizzle = this.bSwizzle;
        serializationObject.aSwizzle = this.aSwizzle;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.rSwizzle = serializationObject.rSwizzle ?? "r";
        this.gSwizzle = serializationObject.gSwizzle ?? "g";
        this.bSwizzle = serializationObject.bSwizzle ?? "b";
        this.aSwizzle = serializationObject.aSwizzle ?? "a";
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.rSwizzle = "${this.rSwizzle}";\n`;
        codeString += `${this._codeVariableName}.gSwizzle = "${this.gSwizzle}";\n`;
        codeString += `${this._codeVariableName}.bSwizzle = "${this.bSwizzle}";\n`;
        codeString += `${this._codeVariableName}.aSwizzle = "${this.aSwizzle}";\n`;
        return codeString;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ColorMergerBlock", ColorMergerBlock); //# sourceMappingURL=colorMergerBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/vectorSplitterBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VectorSplitterBlock",
    ()=>VectorSplitterBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class VectorSplitterBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new VectorSplitterBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("xyzw", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true);
        this.registerInput("xyz ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, true);
        this.registerInput("xy ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, true);
        this.registerOutput("xyz", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerOutput("xy", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("zw", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("z", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("w", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.inputsAreExclusive = true;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "VectorSplitterBlock";
    }
    /**
     * Gets the xyzw component (input)
     */ get xyzw() {
        return this._inputs[0];
    }
    /**
     * Gets the xyz component (input)
     */ get xyzIn() {
        return this._inputs[1];
    }
    /**
     * Gets the xy component (input)
     */ get xyIn() {
        return this._inputs[2];
    }
    /**
     * Gets the xyz component (output)
     */ get xyzOut() {
        return this._outputs[0];
    }
    /**
     * Gets the xy component (output)
     */ get xyOut() {
        return this._outputs[1];
    }
    /**
     * Gets the zw component (output)
     */ get zw() {
        return this._outputs[2];
    }
    /**
     * Gets the x component (output)
     */ get x() {
        return this._outputs[3];
    }
    /**
     * Gets the y component (output)
     */ get y() {
        return this._outputs[4];
    }
    /**
     * Gets the z component (output)
     */ get z() {
        return this._outputs[5];
    }
    /**
     * Gets the w component (output)
     */ get w() {
        return this._outputs[6];
    }
    _inputRename(name) {
        switch(name){
            case "xy ":
                return "xyIn";
            case "xyz ":
                return "xyzIn";
            default:
                return name;
        }
    }
    _outputRename(name) {
        switch(name){
            case "xy":
                return "xyOut";
            case "xyz":
                return "xyzOut";
            default:
                return name;
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const input = this.xyzw.isConnected ? this.xyzw : this.xyzIn.isConnected ? this.xyzIn : this.xyIn;
        const xyzOutput = this._outputs[0];
        const xyOutput = this._outputs[1];
        const zwOutput = this._outputs[2];
        const xOutput = this._outputs[3];
        const yOutput = this._outputs[4];
        const zOutput = this._outputs[5];
        const wOutput = this._outputs[6];
        const vec3 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        if (xyzOutput.hasEndpoints) {
            if (input === this.xyIn) {
                state.compilationString += state._declareOutput(xyzOutput) + ` = ${vec3}(${input.associatedVariableName}, 0.0);\n`;
            } else {
                state.compilationString += state._declareOutput(xyzOutput) + ` = ${input.associatedVariableName}.xyz;\n`;
            }
        }
        if (zwOutput.hasEndpoints && this.xyzw.isConnected) {
            state.compilationString += state._declareOutput(zwOutput) + ` = ${this.xyzw.associatedVariableName}.zw;\n`;
        }
        if (xyOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(xyOutput) + ` = ${input.associatedVariableName}.xy;\n`;
        }
        if (xOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(xOutput) + ` = ${input.associatedVariableName}.x;\n`;
        }
        if (yOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(yOutput) + ` = ${input.associatedVariableName}.y;\n`;
        }
        if (zOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(zOutput) + ` = ${input.associatedVariableName}.z;\n`;
        }
        if (wOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(wOutput) + ` = ${input.associatedVariableName}.w;\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.VectorSplitterBlock", VectorSplitterBlock); //# sourceMappingURL=vectorSplitterBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/lerpBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LerpBlock",
    ()=>LerpBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class LerpBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new LerpBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("gradient", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
        this._linkConnectionTypes(1, 2, true);
        this._inputs[2].acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "LerpBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the gradient operand input component
     */ get gradient() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = mix(${this.left.associatedVariableName} , ${this.right.associatedVariableName}, ${this.gradient.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.LerpBlock", LerpBlock); //# sourceMappingURL=lerpBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/divideBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DivideBlock",
    ()=>DivideBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$baseMathBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/baseMathBlock.js [app-client] (ecmascript)");
;
;
class DivideBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$baseMathBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMathBlock"] {
    /**
     * Creates a new DivideBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "DivideBlock";
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = ${this.left.associatedVariableName} / ${this.right.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DivideBlock", DivideBlock); //# sourceMappingURL=divideBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/subtractBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubtractBlock",
    ()=>SubtractBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$baseMathBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/baseMathBlock.js [app-client] (ecmascript)");
;
;
class SubtractBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$baseMathBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseMathBlock"] {
    /**
     * Creates a new SubtractBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SubtractBlock";
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = ${this.left.associatedVariableName} - ${this.right.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SubtractBlock", SubtractBlock); //# sourceMappingURL=subtractBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/stepBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepBlock",
    ()=>StepBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class StepBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new StepBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("edge", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "StepBlock";
    }
    /**
     * Gets the value operand input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the edge operand input component
     */ get edge() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = step(${this.edge.associatedVariableName}, ${this.value.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.StepBlock", StepBlock); //# sourceMappingURL=stepBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/oneMinusBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OneMinusBlock",
    ()=>OneMinusBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class OneMinusBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new OneMinusBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._outputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "OneMinusBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = 1. - ${this.input.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.OneMinusBlock", OneMinusBlock);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.OppositeBlock", OneMinusBlock); // Backward compatibility
 //# sourceMappingURL=oneMinusBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/viewDirectionBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewDirectionBlock",
    ()=>ViewDirectionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
;
;
;
;
;
;
class ViewDirectionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ViewDirectionBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("cameraPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ViewDirectionBlock";
    }
    /**
     * Gets the world position component
     */ get worldPosition() {
        return this._inputs[0];
    }
    /**
     * Gets the camera position component
     */ get cameraPosition() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.cameraPosition.isConnected) {
            let cameraPositionInput = material.getInputBlockByPredicate((b)=>b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].CameraPosition && additionalFilteringInfo(b));
            if (!cameraPositionInput) {
                cameraPositionInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("cameraPosition");
                cameraPositionInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].CameraPosition);
            }
            cameraPositionInput.output.connectTo(this.cameraPosition);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = normalize(${this.cameraPosition.associatedVariableName} - ${this.worldPosition.associatedVariableName}.xyz);\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ViewDirectionBlock", ViewDirectionBlock); //# sourceMappingURL=viewDirectionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/fresnelBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FresnelBlock",
    ()=>FresnelBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$fresnelFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fresnelFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$viewDirectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/viewDirectionBlock.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class FresnelBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new FresnelBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("viewDirection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("bias", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("power", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("fresnel", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "FresnelBlock";
    }
    /**
     * Gets the world normal input component
     */ get worldNormal() {
        return this._inputs[0];
    }
    /**
     * Gets the view direction input component
     */ get viewDirection() {
        return this._inputs[1];
    }
    /**
     * Gets the bias input component
     */ get bias() {
        return this._inputs[2];
    }
    /**
     * Gets the camera (or eye) position component
     */ get power() {
        return this._inputs[3];
    }
    /**
     * Gets the fresnel output component
     */ get fresnel() {
        return this._outputs[0];
    }
    autoConfigure(material) {
        if (!this.viewDirection.isConnected) {
            const viewDirectionInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$viewDirectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewDirectionBlock"]("View direction");
            viewDirectionInput.output.connectTo(this.viewDirection);
            viewDirectionInput.autoConfigure(material);
        }
        if (!this.bias.isConnected) {
            const biasInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("bias");
            biasInput.value = 0;
            biasInput.output.connectTo(this.bias);
        }
        if (!this.power.isConnected) {
            const powerInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("power");
            powerInput.value = 1;
            powerInput.output.connectTo(this.power);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("fresnelFunction", comments, {
            removeIfDef: true
        });
        state.compilationString += state._declareOutput(this.fresnel) + ` = computeFresnelTerm(${this.viewDirection.associatedVariableName}.xyz, ${this.worldNormal.associatedVariableName}.xyz, ${this.bias.associatedVariableName}, ${this.power.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FresnelBlock", FresnelBlock); //# sourceMappingURL=fresnelBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/maxBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaxBlock",
    ()=>MaxBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class MaxBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new MaxBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MaxBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = max(${this.left.associatedVariableName}, ${this.right.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MaxBlock", MaxBlock); //# sourceMappingURL=maxBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/minBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MinBlock",
    ()=>MinBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class MinBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new MinBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MinBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = min(${this.left.associatedVariableName}, ${this.right.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MinBlock", MinBlock); //# sourceMappingURL=minBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/distanceBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistanceBlock",
    ()=>DistanceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class DistanceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new DistanceBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._linkConnectionTypes(0, 1);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "DistanceBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = length(${this.left.associatedVariableName} - ${this.right.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DistanceBlock", DistanceBlock); //# sourceMappingURL=distanceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/lengthBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LengthBlock",
    ()=>LengthBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class LengthBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new LengthBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "LengthBlock";
    }
    /**
     * Gets the value input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = length(${this.value.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.LengthBlock", LengthBlock); //# sourceMappingURL=lengthBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/negateBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NegateBlock",
    ()=>NegateBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class NegateBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new NegateBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "NegateBlock";
    }
    /**
     * Gets the value input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = -1.0 * ${this.value.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.NegateBlock", NegateBlock); //# sourceMappingURL=negateBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/powBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PowBlock",
    ()=>PowBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class PowBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new PowBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("power", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "PowBlock";
    }
    /**
     * Gets the value operand input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the power operand input component
     */ get power() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = pow(max(${this.value.associatedVariableName}, 0.), ${this.power.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PowBlock", PowBlock); //# sourceMappingURL=powBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/randomNumberBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RandomNumberBlock",
    ()=>RandomNumberBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
;
;
;
class RandomNumberBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new RandomNumberBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("seed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "RandomNumberBlock";
    }
    /**
     * Gets the seed input component
     */ get seed() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("helperFunctions", comments);
        state.compilationString += state._declareOutput(output) + ` = getRand(${this.seed.associatedVariableName}.xy);\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.RandomNumberBlock", RandomNumberBlock); //# sourceMappingURL=randomNumberBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/arcTan2Block.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArcTan2Block",
    ()=>ArcTan2Block
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ArcTan2Block extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ArcTan2Block
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ArcTan2Block";
    }
    /**
     * Gets the x operand input component
     */ get x() {
        return this._inputs[0];
    }
    /**
     * Gets the y operand input component
     */ get y() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const func = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "atan2" : "atan";
        state.compilationString += state._declareOutput(output) + ` = ${func}(${this.x.associatedVariableName}, ${this.y.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ArcTan2Block", ArcTan2Block); //# sourceMappingURL=arcTan2Block.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/smoothStepBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothStepBlock",
    ()=>SmoothStepBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class SmoothStepBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new SmoothStepBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("edge0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("edge1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SmoothStepBlock";
    }
    /**
     * Gets the value operand input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the first edge operand input component
     */ get edge0() {
        return this._inputs[1];
    }
    /**
     * Gets the second edge operand input component
     */ get edge1() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const cast = state._getShaderType(this.value.type);
        state.compilationString += state._declareOutput(output) + ` = smoothstep(${cast}(${this.edge0.associatedVariableName}), ${cast}(${this.edge1.associatedVariableName}), ${this.value.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SmoothStepBlock", SmoothStepBlock); //# sourceMappingURL=smoothStepBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/reciprocalBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReciprocalBlock",
    ()=>ReciprocalBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ReciprocalBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ReciprocalBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ReciprocalBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        if (this.input.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix) {
            state.compilationString += state._declareOutput(output) + ` = inverse(${this.input.associatedVariableName});\n`;
        } else {
            state.compilationString += state._declareOutput(output) + ` = 1. / ${this.input.associatedVariableName};\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ReciprocalBlock", ReciprocalBlock); //# sourceMappingURL=reciprocalBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/replaceColorBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReplaceColorBlock",
    ()=>ReplaceColorBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ReplaceColorBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ReplaceColorBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("reference", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("distance", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("replacement", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
        this._linkConnectionTypes(0, 3);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[3].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[3].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ReplaceColorBlock";
    }
    /**
     * Gets the value input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the reference input component
     */ get reference() {
        return this._inputs[1];
    }
    /**
     * Gets the distance input component
     */ get distance() {
        return this._inputs[2];
    }
    /**
     * Gets the replacement input component
     */ get replacement() {
        return this._inputs[3];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + `;\n`;
        state.compilationString += `if (length(${this.value.associatedVariableName} - ${this.reference.associatedVariableName}) < ${this.distance.associatedVariableName}) {\n`;
        state.compilationString += `${output.associatedVariableName} = ${this.replacement.associatedVariableName};\n`;
        state.compilationString += `} else {\n`;
        state.compilationString += `${output.associatedVariableName} = ${this.value.associatedVariableName};\n`;
        state.compilationString += `}\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ReplaceColorBlock", ReplaceColorBlock); //# sourceMappingURL=replaceColorBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/posterizeBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PosterizeBlock",
    ()=>PosterizeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class PosterizeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new PosterizeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("steps", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[1].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[1].acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "PosterizeBlock";
    }
    /**
     * Gets the value input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the steps input component
     */ get steps() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = floor(${this.value.associatedVariableName} / (1.0 / ${this.steps.associatedVariableName})) * (1.0 / ${this.steps.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PosterizeBlock", PosterizeBlock); //# sourceMappingURL=posterizeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/waveBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaveBlock",
    ()=>WaveBlock,
    "WaveBlockKind",
    ()=>WaveBlockKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
var WaveBlockKind;
(function(WaveBlockKind) {
    /** SawTooth */ WaveBlockKind[WaveBlockKind["SawTooth"] = 0] = "SawTooth";
    /** Square */ WaveBlockKind[WaveBlockKind["Square"] = 1] = "Square";
    /** Triangle */ WaveBlockKind[WaveBlockKind["Triangle"] = 2] = "Triangle";
})(WaveBlockKind || (WaveBlockKind = {}));
class WaveBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new WaveBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets the kibnd of wave to be applied by the block
         */ this.kind = 0 /* WaveBlockKind.SawTooth */ ;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "WaveBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        switch(this.kind){
            case 0 /* WaveBlockKind.SawTooth */ :
                {
                    state.compilationString += state._declareOutput(output) + ` = ${this.input.associatedVariableName} - floor(0.5 + ${this.input.associatedVariableName});\n`;
                    break;
                }
            case 1 /* WaveBlockKind.Square */ :
                {
                    state.compilationString += state._declareOutput(output) + ` = 1.0 - 2.0 * round(fract(${this.input.associatedVariableName}));\n`;
                    break;
                }
            case 2 /* WaveBlockKind.Triangle */ :
                {
                    state.compilationString += state._declareOutput(output) + ` = 2.0 * abs(2.0 * (${this.input.associatedVariableName} - floor(0.5 + ${this.input.associatedVariableName}))) - 1.0;\n`;
                    break;
                }
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.kind = this.kind;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.kind = serializationObject.kind;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Kind", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "SawTooth",
                value: 0 /* WaveBlockKind.SawTooth */ 
            },
            {
                label: "Square",
                value: 1 /* WaveBlockKind.Square */ 
            },
            {
                label: "Triangle",
                value: 2 /* WaveBlockKind.Triangle */ 
            }
        ]
    })
], WaveBlock.prototype, "kind", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.WaveBlock", WaveBlock); //# sourceMappingURL=waveBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/gradientBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradientBlock",
    ()=>GradientBlock,
    "GradientBlockColorStep",
    ()=>GradientBlockColorStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
;
;
;
;
;
;
class GradientBlockColorStep {
    /**
     * Gets value indicating which step this color is associated with (between 0 and 1)
     */ get step() {
        return this._step;
    }
    /**
     * Sets a value indicating which step this color is associated with (between 0 and 1)
     */ set step(val) {
        this._step = val;
    }
    /**
     * Gets the color associated with this step
     */ get color() {
        return this._color;
    }
    /**
     * Sets the color associated with this step
     */ set color(val) {
        this._color = val;
    }
    /**
     * Creates a new GradientBlockColorStep
     * @param step defines a value indicating which step this color is associated with (between 0 and 1)
     * @param color defines the color associated with this step
     */ constructor(step, color){
        this.step = step;
        this.color = color;
    }
}
class GradientBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /** calls observable when the value is changed*/ colorStepsUpdated() {
        this.onValueChangedObservable.notifyObservers(this);
    }
    /**
     * Creates a new GradientBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets the list of color steps
         */ this.colorSteps = [
            new GradientBlockColorStep(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Black()),
            new GradientBlockColorStep(1.0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].White())
        ];
        /** Gets an observable raised when the value is changed */ this.onValueChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this.registerInput("gradient", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "GradientBlock";
    }
    /**
     * Gets the gradient input component
     */ get gradient() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _writeColorConstant(index, vec3) {
        const step = this.colorSteps[index];
        return `${vec3}(${step.color.r}, ${step.color.g}, ${step.color.b})`;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const vec3 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        if (!this.colorSteps.length || !this.gradient.connectedPoint) {
            state.compilationString += state._declareOutput(output) + ` = ${vec3}(0., 0., 0.);\n`;
            return;
        }
        const tempColor = state._getFreeVariableName("gradientTempColor");
        const tempPosition = state._getFreeVariableName("gradientTempPosition");
        state.compilationString += `${state._declareLocalVar(tempColor, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${this._writeColorConstant(0, vec3)};\n`;
        state.compilationString += `${state._declareLocalVar(tempPosition, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)};\n`;
        let gradientSource = this.gradient.associatedVariableName;
        if (this.gradient.connectedPoint.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
            gradientSource += ".x";
        }
        for(let index = 1; index < this.colorSteps.length; index++){
            const step = this.colorSteps[index];
            const previousStep = this.colorSteps[index - 1];
            state.compilationString += `${tempPosition} = clamp((${gradientSource} - ${state._emitFloat(previousStep.step)}) / (${state._emitFloat(step.step)} -  ${state._emitFloat(previousStep.step)}), 0.0, 1.0) * step(${state._emitFloat(index)}, ${state._emitFloat(this.colorSteps.length - 1)});\n`;
            state.compilationString += `${tempColor} = mix(${tempColor}, ${this._writeColorConstant(index, vec3)}, ${tempPosition});\n`;
        }
        state.compilationString += state._declareOutput(output) + ` = ${tempColor};\n`;
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.colorSteps = [];
        for (const step of this.colorSteps){
            serializationObject.colorSteps.push({
                step: step.step,
                color: {
                    r: step.color.r,
                    g: step.color.g,
                    b: step.color.b
                }
            });
        }
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.colorSteps.length = 0;
        for (const step of serializationObject.colorSteps){
            this.colorSteps.push(new GradientBlockColorStep(step.step, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](step.color.r, step.color.g, step.color.b)));
        }
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.colorSteps = [];\n`;
        for (const colorStep of this.colorSteps){
            codeString += `${this._codeVariableName}.colorSteps.push(new BABYLON.GradientBlockColorStep(${colorStep.step}, new BABYLON.Color3(${colorStep.color.r}, ${colorStep.color.g}, ${colorStep.color.b})));\n`;
        }
        return codeString;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.GradientBlock", GradientBlock); //# sourceMappingURL=gradientBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/nLerpBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NLerpBlock",
    ()=>NLerpBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class NLerpBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new NLerpBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("gradient", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
        this._linkConnectionTypes(1, 2, true);
        this._inputs[2].acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "NLerpBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the gradient operand input component
     */ get gradient() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = normalize(mix(${this.left.associatedVariableName} , ${this.right.associatedVariableName}, ${this.gradient.associatedVariableName}));\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.NLerpBlock", NLerpBlock); //# sourceMappingURL=nLerpBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/worleyNoise3DBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorleyNoise3DBlock",
    ()=>WorleyNoise3DBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
class WorleyNoise3DBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new WorleyNoise3DBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /** Gets or sets a boolean indicating that normal should be inverted on X axis */ this.manhattanDistance = false;
        this.registerInput("seed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("jitter", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "WorleyNoise3DBlock";
    }
    /**
     * Gets the seed input component
     */ get seed() {
        return this._inputs[0];
    }
    /**
     * Gets the jitter input component
     */ get jitter() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the x component
     */ get x() {
        return this._outputs[1];
    }
    /**
     * Gets the y component
     */ get y() {
        return this._outputs[2];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (!this.seed.isConnected) {
            return;
        }
        if (!this.output.hasEndpoints && !this.x.hasEndpoints && !this.y.hasEndpoints) {
            return;
        }
        let functionString = `vec3 permute(vec3 x){\n`;
        functionString += `    return mod((34.0 * x + 1.0) * x, 289.0);\n`;
        functionString += `}\n\n`;
        functionString += `vec3 dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance){\n`;
        functionString += `    return [manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z)];\n`;
        functionString += `}\n\n`;
        functionString += `vec2 worley(vec3 P, float jitter, bool manhattanDistance){\n`;
        functionString += `    float K = 0.142857142857; // 1/7\n`;
        functionString += `    float Ko = 0.428571428571; // 1/2-K/2\n`;
        functionString += `    float  K2 = 0.020408163265306; // 1/(7*7)\n`;
        functionString += `    float Kz = 0.166666666667; // 1/6\n`;
        functionString += `    float Kzo = 0.416666666667; // 1/2-1/6*2\n`;
        functionString += `\n`;
        functionString += `    vec3 Pi = mod(floor(P), 289.0);\n`;
        functionString += `    vec3 Pf = fract(P) - 0.5;\n`;
        functionString += `\n`;
        functionString += `    vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);\n`;
        functionString += `    vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);\n`;
        functionString += `    vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);\n`;
        functionString += `\n`;
        functionString += `    vec3 p = permute(Pi.x + vec3(-1.0, 0.0, 1.0));\n`;
        functionString += `    vec3 p1 = permute(p + Pi.y - 1.0);\n`;
        functionString += `    vec3 p2 = permute(p + Pi.y);\n`;
        functionString += `    vec3 p3 = permute(p + Pi.y + 1.0);\n`;
        functionString += `\n`;
        functionString += `    vec3 p11 = permute(p1 + Pi.z - 1.0);\n`;
        functionString += `    vec3 p12 = permute(p1 + Pi.z);\n`;
        functionString += `    vec3 p13 = permute(p1 + Pi.z + 1.0);\n`;
        functionString += `\n`;
        functionString += `    vec3 p21 = permute(p2 + Pi.z - 1.0);\n`;
        functionString += `    vec3 p22 = permute(p2 + Pi.z);\n`;
        functionString += `    vec3 p23 = permute(p2 + Pi.z + 1.0);\n`;
        functionString += `\n`;
        functionString += `    vec3 p31 = permute(p3 + Pi.z - 1.0);\n`;
        functionString += `    vec3 p32 = permute(p3 + Pi.z);\n`;
        functionString += `    vec3 p33 = permute(p3 + Pi.z + 1.0);\n`;
        functionString += `\n`;
        functionString += `    vec3 ox11 = fract(p11*K) - Ko;\n`;
        functionString += `    vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed\n`;
        functionString += `\n`;
        functionString += `    vec3 ox12 = fract(p12*K) - Ko;\n`;
        functionString += `    vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz12 = floor(p12*K2)*Kz - Kzo;\n`;
        functionString += `\n`;
        functionString += `    vec3 ox13 = fract(p13*K) - Ko;\n`;
        functionString += `    vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz13 = floor(p13*K2)*Kz - Kzo;\n`;
        functionString += `\n`;
        functionString += `    vec3 ox21 = fract(p21*K) - Ko;\n`;
        functionString += `    vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz21 = floor(p21*K2)*Kz - Kzo;\n`;
        functionString += `\n`;
        functionString += `    vec3 ox22 = fract(p22*K) - Ko;\n`;
        functionString += `    vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz22 = floor(p22*K2)*Kz - Kzo;\n`;
        functionString += `\n`;
        functionString += `    vec3 ox23 = fract(p23*K) - Ko;\n`;
        functionString += `    vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz23 = floor(p23*K2)*Kz - Kzo;\n`;
        functionString += `\n`;
        functionString += `    vec3 ox31 = fract(p31*K) - Ko;\n`;
        functionString += `    vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz31 = floor(p31*K2)*Kz - Kzo;\n`;
        functionString += `\n`;
        functionString += `    vec3 ox32 = fract(p32*K) - Ko;\n`;
        functionString += `    vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz32 = floor(p32*K2)*Kz - Kzo;\n`;
        functionString += `\n`;
        functionString += `    vec3 ox33 = fract(p33*K) - Ko;\n`;
        functionString += `    vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;\n`;
        functionString += `    vec3 oz33 = floor(p33*K2)*Kz - Kzo;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx11 = Pfx + jitter*ox11;\n`;
        functionString += `    vec3 dy11 = Pfy.x + jitter*oy11;\n`;
        functionString += `    vec3 dz11 = Pfz.x + jitter*oz11;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx12 = Pfx + jitter*ox12;\n`;
        functionString += `    vec3 dy12 = Pfy.x + jitter*oy12;\n`;
        functionString += `    vec3 dz12 = Pfz.y + jitter*oz12;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx13 = Pfx + jitter*ox13;\n`;
        functionString += `    vec3 dy13 = Pfy.x + jitter*oy13;\n`;
        functionString += `    vec3 dz13 = Pfz.z + jitter*oz13;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx21 = Pfx + jitter*ox21;\n`;
        functionString += `    vec3 dy21 = Pfy.y + jitter*oy21;\n`;
        functionString += `    vec3 dz21 = Pfz.x + jitter*oz21;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx22 = Pfx + jitter*ox22;\n`;
        functionString += `    vec3 dy22 = Pfy.y + jitter*oy22;\n`;
        functionString += `    vec3 dz22 = Pfz.y + jitter*oz22;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx23 = Pfx + jitter*ox23;\n`;
        functionString += `    vec3 dy23 = Pfy.y + jitter*oy23;\n`;
        functionString += `    vec3 dz23 = Pfz.z + jitter*oz23;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx31 = Pfx + jitter*ox31;\n`;
        functionString += `    vec3 dy31 = Pfy.z + jitter*oy31;\n`;
        functionString += `    vec3 dz31 = Pfz.x + jitter*oz31;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx32 = Pfx + jitter*ox32;\n`;
        functionString += `    vec3 dy32 = Pfy.z + jitter*oy32;\n`;
        functionString += `    vec3 dz32 = Pfz.y + jitter*oz32;\n`;
        functionString += `\n`;
        functionString += `    vec3 dx33 = Pfx + jitter*ox33;\n`;
        functionString += `    vec3 dy33 = Pfy.z + jitter*oy33;\n`;
        functionString += `    vec3 dz33 = Pfz.z + jitter*oz33;\n`;
        functionString += `\n`;
        functionString += `    vec3 d11 = dist(dx11, dy11, dz11, manhattanDistance);\n`;
        functionString += `    vec3 d12 = dist(dx12, dy12, dz12, manhattanDistance);\n`;
        functionString += `    vec3 d13 = dist(dx13, dy13, dz13, manhattanDistance);\n`;
        functionString += `    vec3 d21 = dist(dx21, dy21, dz21, manhattanDistance);\n`;
        functionString += `    vec3 d22 = dist(dx22, dy22, dz22, manhattanDistance);\n`;
        functionString += `    vec3 d23 = dist(dx23, dy23, dz23, manhattanDistance);\n`;
        functionString += `    vec3 d31 = dist(dx31, dy31, dz31, manhattanDistance);\n`;
        functionString += `    vec3 d32 = dist(dx32, dy32, dz32, manhattanDistance);\n`;
        functionString += `    vec3 d33 = dist(dx33, dy33, dz33, manhattanDistance);\n`;
        functionString += `\n`;
        functionString += `    vec3 d1a = min(d11, d12);\n`;
        functionString += `    d12 = max(d11, d12);\n`;
        functionString += `    d11 = min(d1a, d13); // Smallest now not in d12 or d13\n`;
        functionString += `    d13 = max(d1a, d13);\n`;
        functionString += `    d12 = min(d12, d13); // 2nd smallest now not in d13\n`;
        functionString += `    vec3 d2a = min(d21, d22);\n`;
        functionString += `    d22 = max(d21, d22);\n`;
        functionString += `    d21 = min(d2a, d23); // Smallest now not in d22 or d23\n`;
        functionString += `    d23 = max(d2a, d23);\n`;
        functionString += `    d22 = min(d22, d23); // 2nd smallest now not in d23\n`;
        functionString += `    vec3 d3a = min(d31, d32);\n`;
        functionString += `    d32 = max(d31, d32);\n`;
        functionString += `    d31 = min(d3a, d33); // Smallest now not in d32 or d33\n`;
        functionString += `    d33 = max(d3a, d33);\n`;
        functionString += `    d32 = min(d32, d33); // 2nd smallest now not in d33\n`;
        functionString += `    vec3 da = min(d11, d21);\n`;
        functionString += `    d21 = max(d11, d21);\n`;
        functionString += `    d11 = min(da, d31); // Smallest now in d11\n`;
        functionString += `    d31 = max(da, d31); // 2nd smallest now not in d31\n`;
        functionString += `    if (d11.x >= d11.y) { vec2 temp = d11.yx; d11.x = temp.x; d11.y = temp.y; }\n`;
        functionString += `    if (d11.x >= d11.z) { vec2 temp = d11.zx; d11.x = temp.x; d11.z = temp.y; }\n`;
        functionString += `    d12 = min(d12, d21); // 2nd smallest now not in d21\n`;
        functionString += `    d12 = min(d12, d22); // nor in d22\n`;
        functionString += `    d12 = min(d12, d31); // nor in d31\n`;
        functionString += `    d12 = min(d12, d32); // nor in d32\n`;
        functionString += `    vec2 temp2 = min(d11.yz, d12.xy); // nor in d12.yz\n`;
        functionString += `    d11.y = temp2.x;\n`;
        functionString += `    d11.z = temp2.y;\n`;
        functionString += `    d11.y = min(d11.y, d12.z); // Only two more to go\n`;
        functionString += `    d11.y = min(d11.y, d11.z); // Done! (Phew!)\n`;
        functionString += `    return sqrt(d11.xy); // F1, F2\n`;
        functionString += `}\n\n`;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            functionString = state._babylonSLtoWGSL(functionString);
        } else {
            functionString = state._babylonSLtoGLSL(functionString);
        }
        state._emitFunction("worley3D", functionString, "// Worley3D");
        const tempVariable = state._getFreeVariableName("worleyTemp");
        state.compilationString += `${state._declareLocalVar(tempVariable, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = worley(${this.seed.associatedVariableName}, ${this.jitter.associatedVariableName}, ${this.manhattanDistance});\n`;
        if (this.output.hasEndpoints) {
            state.compilationString += state._declareOutput(this.output) + ` = ${tempVariable};\n`;
        }
        if (this.x.hasEndpoints) {
            state.compilationString += state._declareOutput(this.x) + ` = ${tempVariable}.x;\n`;
        }
        if (this.y.hasEndpoints) {
            state.compilationString += state._declareOutput(this.y) + ` = ${tempVariable}.y;\n`;
        }
        return this;
    }
    /**
     * Exposes the properties to the UI?
     * @returns - boolean indicating if the block has properties or not
     */ _dumpPropertiesCode() {
        const codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.manhattanDistance = ${this.manhattanDistance};\n`;
        return codeString;
    }
    /**
     * Exposes the properties to the Serialize?
     * @returns - a serialized object
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.manhattanDistance = this.manhattanDistance;
        return serializationObject;
    }
    /**
     * Exposes the properties to the deserialize?
     * @param serializationObject
     * @param scene
     * @param rootUrl
     */ _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.manhattanDistance = serializationObject.manhattanDistance;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Use Manhattan Distance", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        embedded: true,
        notifiers: {
            update: false
        }
    })
], WorleyNoise3DBlock.prototype, "manhattanDistance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.WorleyNoise3DBlock", WorleyNoise3DBlock); //# sourceMappingURL=worleyNoise3DBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/simplexPerlin3DBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimplexPerlin3DBlock",
    ()=>SimplexPerlin3DBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class SimplexPerlin3DBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new SimplexPerlin3DBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("seed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SimplexPerlin3DBlock";
    }
    /**
     * Gets the seed operand input component
     */ get seed() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (!this.seed.isConnected) {
            return;
        }
        if (!this._outputs[0].hasEndpoints) {
            return;
        }
        let functionString = `const float SKEWFACTOR = 1.0/3.0;\n`;
        functionString += `const float UNSKEWFACTOR = 1.0/6.0;\n`;
        functionString += `const float SIMPLEX_CORNER_POS = 0.5;\n`;
        functionString += `const float SIMPLEX_TETRAHADRON_HEIGHT = 0.70710678118654752440084436210485;\n`;
        functionString += `float SimplexPerlin3D( vec3 source ){\n`;
        functionString += `    vec3 P = source;\n`;
        functionString += `    P.x = [P.x == 0. && P.y == 0. && P.z == 0. ? 0.00001 : P.x];\n`;
        functionString += `    P *= SIMPLEX_TETRAHADRON_HEIGHT;\n`;
        functionString += `    vec3 Pi = floor( P + dot( P, vec3( SKEWFACTOR) ) );`;
        functionString += `    vec3 x0 = P - Pi + dot(Pi, vec3( UNSKEWFACTOR ) );\n`;
        functionString += `    vec3 g = step(x0.yzx, x0.xyz);\n`;
        functionString += `    vec3 l = 1.0 - g;\n`;
        functionString += `    vec3 Pi_1 = min( g.xyz, l.zxy );\n`;
        functionString += `    vec3 Pi_2 = max( g.xyz, l.zxy );\n`;
        functionString += `    vec3 x1 = x0 - Pi_1 + UNSKEWFACTOR;\n`;
        functionString += `    vec3 x2 = x0 - Pi_2 + SKEWFACTOR;\n`;
        functionString += `    vec3 x3 = x0 - SIMPLEX_CORNER_POS;\n`;
        functionString += `    vec4 v1234_x = vec4( x0.x, x1.x, x2.x, x3.x );\n`;
        functionString += `    vec4 v1234_y = vec4( x0.y, x1.y, x2.y, x3.y );\n`;
        functionString += `    vec4 v1234_z = vec4( x0.z, x1.z, x2.z, x3.z );\n`;
        functionString += `    Pi = Pi.xyz - floor(Pi.xyz * ( 1.0 / 69.0 )) * 69.0;\n`;
        functionString += `    vec3 Pi_inc1 = step( Pi, vec3( 69.0 - 1.5 ) ) * ( Pi + 1.0 );\n`;
        functionString += `    vec4 Pt = vec4( Pi.xy, Pi_inc1.xy ) + vec2( 50.0, 161.0 ).xyxy;\n`;
        functionString += `    Pt *= Pt;\n`;
        functionString += `    vec4 V1xy_V2xy = mix( Pt.xyxy, Pt.zwzw, vec4( Pi_1.xy, Pi_2.xy ) );\n`;
        functionString += `    Pt = vec4( Pt.x, V1xy_V2xy.xz, Pt.z ) * vec4( Pt.y, V1xy_V2xy.yw, Pt.w );\n`;
        functionString += `    const vec3 SOMELARGEFLOATS = vec3( 635.298681, 682.357502, 668.926525 );\n`;
        functionString += `    const vec3 ZINC = vec3( 48.500388, 65.294118, 63.934599 );\n`;
        functionString += `    vec3 lowz_mods = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + Pi.zzz * ZINC.xyz ) );\n`;
        functionString += `    vec3 highz_mods = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + Pi_inc1.zzz * ZINC.xyz ) );\n`;
        functionString += `    Pi_1 = [( Pi_1.z < 0.5 ) ? lowz_mods : highz_mods];\n`;
        functionString += `    Pi_2 = [( Pi_2.z < 0.5 ) ? lowz_mods : highz_mods];\n`;
        functionString += `    vec4 hash_0 = fract( Pt * vec4( lowz_mods.x, Pi_1.x, Pi_2.x, highz_mods.x ) ) - 0.49999;\n`;
        functionString += `    vec4 hash_1 = fract( Pt * vec4( lowz_mods.y, Pi_1.y, Pi_2.y, highz_mods.y ) ) - 0.49999;\n`;
        functionString += `    vec4 hash_2 = fract( Pt * vec4( lowz_mods.z, Pi_1.z, Pi_2.z, highz_mods.z ) ) - 0.49999;\n`;
        functionString += `    vec4 grad_results = inversesqrt( hash_0 * hash_0 + hash_1 * hash_1 + hash_2 * hash_2 ) * ( hash_0 * v1234_x + hash_1 * v1234_y + hash_2 * v1234_z );\n`;
        functionString += `    const float FINAL_NORMALIZATION = 37.837227241611314102871574478976;\n`;
        functionString += `    vec4 kernel_weights = v1234_x * v1234_x + v1234_y * v1234_y + v1234_z * v1234_z;\n`;
        functionString += `    kernel_weights = max(0.5 - kernel_weights, vec4(0.));\n`;
        functionString += `    kernel_weights = kernel_weights*kernel_weights*kernel_weights;\n`;
        functionString += `    return dot( kernel_weights, grad_results ) * FINAL_NORMALIZATION;\n`;
        functionString += `}\n`;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            functionString = state._babylonSLtoWGSL(functionString);
        } else {
            functionString = state._babylonSLtoGLSL(functionString);
        }
        state._emitFunction("SimplexPerlin3D", functionString, "// SimplexPerlin3D");
        state.compilationString += state._declareOutput(this._outputs[0]) + ` = SimplexPerlin3D(${this.seed.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SimplexPerlin3DBlock", SimplexPerlin3DBlock); //# sourceMappingURL=simplexPerlin3DBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/normalBlendBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NormalBlendBlock",
    ()=>NormalBlendBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class NormalBlendBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new NormalBlendBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("normalMap0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("normalMap1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this._inputs[1].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "NormalBlendBlock";
    }
    /**
     * Gets the first input component
     */ get normalMap0() {
        return this._inputs[0];
    }
    /**
     * Gets the second input component
     */ get normalMap1() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const input0 = this._inputs[0];
        const input1 = this._inputs[1];
        const stepR = state._getFreeVariableName("stepR");
        const stepG = state._getFreeVariableName("stepG");
        state.compilationString += `${state._declareLocalVar(stepR, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = step(0.5, ${input0.associatedVariableName}.r);\n`;
        state.compilationString += `${state._declareLocalVar(stepG, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = step(0.5, ${input0.associatedVariableName}.g);\n`;
        state.compilationString += state._declareOutput(output) + `;\n`;
        state.compilationString += `${output.associatedVariableName}.r = (1.0 - ${stepR}) * ${input0.associatedVariableName}.r * ${input1.associatedVariableName}.r * 2.0 + ${stepR} * (1.0 - (1.0 - ${input0.associatedVariableName}.r) * (1.0 - ${input1.associatedVariableName}.r) * 2.0);\n`;
        state.compilationString += `${output.associatedVariableName}.g = (1.0 - ${stepG}) * ${input0.associatedVariableName}.g * ${input1.associatedVariableName}.g * 2.0 + ${stepG} * (1.0 - (1.0 - ${input0.associatedVariableName}.g) * (1.0 - ${input1.associatedVariableName}.g) * 2.0);\n`;
        state.compilationString += `${output.associatedVariableName}.b = ${input0.associatedVariableName}.b * ${input1.associatedVariableName}.b;\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.NormalBlendBlock", NormalBlendBlock); //# sourceMappingURL=normalBlendBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/rotate2dBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rotate2dBlock",
    ()=>Rotate2dBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
;
;
;
;
;
class Rotate2dBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new Rotate2dBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerInput("angle", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "Rotate2dBlock";
    }
    /**
     * Gets the input vector
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the input angle
     */ get angle() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    autoConfigure() {
        if (!this.angle.isConnected) {
            const angleInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("angle");
            angleInput.value = 0;
            angleInput.output.connectTo(this.angle);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const angle = this.angle;
        const input = this.input;
        state.compilationString += state._declareOutput(output) + ` = vec2(cos(${angle.associatedVariableName}) * ${input.associatedVariableName}.x - sin(${angle.associatedVariableName}) * ${input.associatedVariableName}.y, sin(${angle.associatedVariableName}) * ${input.associatedVariableName}.x + cos(${angle.associatedVariableName}) * ${input.associatedVariableName}.y);\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Rotate2dBlock", Rotate2dBlock); //# sourceMappingURL=rotate2dBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/reflectBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReflectBlock",
    ()=>ReflectBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ReflectBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ReflectBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("incident", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("normal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
        this._inputs[1].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ReflectBlock";
    }
    /**
     * Gets the incident component
     */ get incident() {
        return this._inputs[0];
    }
    /**
     * Gets the normal component
     */ get normal() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = reflect(${this.incident.associatedVariableName}.xyz, ${this.normal.associatedVariableName}.xyz);\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ReflectBlock", ReflectBlock); //# sourceMappingURL=reflectBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/refractBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefractBlock",
    ()=>RefractBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class RefractBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new RefractBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("incident", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("normal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("ior", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
        this._inputs[1].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "RefractBlock";
    }
    /**
     * Gets the incident component
     */ get incident() {
        return this._inputs[0];
    }
    /**
     * Gets the normal component
     */ get normal() {
        return this._inputs[1];
    }
    /**
     * Gets the index of refraction component
     */ get ior() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = refract(${this.incident.associatedVariableName}.xyz, ${this.normal.associatedVariableName}.xyz, ${this.ior.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.RefractBlock", RefractBlock); //# sourceMappingURL=refractBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/desaturateBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesaturateBlock",
    ()=>DesaturateBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class DesaturateBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new DesaturateBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
        this.registerInput("level", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "DesaturateBlock";
    }
    /**
     * Gets the color operand input component
     */ get color() {
        return this._inputs[0];
    }
    /**
     * Gets the level operand input component
     */ get level() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const color = this.color;
        const colorName = color.associatedVariableName;
        const tempMin = state._getFreeVariableName("colorMin");
        const tempMax = state._getFreeVariableName("colorMax");
        const tempMerge = state._getFreeVariableName("colorMerge");
        state.compilationString += `${state._declareLocalVar(tempMin, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = min(min(${colorName}.x, ${colorName}.y), ${colorName}.z);\n`;
        state.compilationString += `${state._declareLocalVar(tempMax, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = max(max(${colorName}.x, ${colorName}.y), ${colorName}.z);\n`;
        state.compilationString += `${state._declareLocalVar(tempMerge, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = 0.5 * (${tempMin} + ${tempMax});\n`;
        state.compilationString += state._declareOutput(output) + ` = mix(${colorName}, ${state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)}(${tempMerge}, ${tempMerge}, ${tempMerge}), ${this.level.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DesaturateBlock", DesaturateBlock); //# sourceMappingURL=desaturateBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/modBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModBlock",
    ()=>ModBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ModBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ModBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("left", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("right", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
        this._inputs[1].acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ModBlock";
    }
    /**
     * Gets the left operand input component
     */ get left() {
        return this._inputs[0];
    }
    /**
     * Gets the right operand input component
     */ get right() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        if (state.shaderLanguage === 0 /* ShaderLanguage.GLSL */ ) {
            state.compilationString += state._declareOutput(output) + ` = mod(${this.left.associatedVariableName}, ${this.right.associatedVariableName});\n`;
        } else {
            state.compilationString += state._declareOutput(output) + ` = (${this.left.associatedVariableName} % ${this.right.associatedVariableName});\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ModBlock", ModBlock); //# sourceMappingURL=modBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixBuilderBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatrixBuilderBlock",
    ()=>MatrixBuilderBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
;
;
;
;
;
class MatrixBuilderBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new MatrixBuilder
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("row0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("row1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("row2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerInput("row3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MatrixBuilder";
    }
    /**
     * Gets the row0 vector
     */ get row0() {
        return this._inputs[0];
    }
    /**
     * Gets the row1 vector
     */ get row1() {
        return this._inputs[1];
    }
    /**
     * Gets the row2 vector
     */ get row2() {
        return this._inputs[2];
    }
    /**
     * Gets the row3 vector
     */ get row3() {
        return this._inputs[3];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    autoConfigure() {
        if (!this.row0.isConnected) {
            const row0Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("row0");
            row0Input.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"](1, 0, 0, 0);
            row0Input.output.connectTo(this.row0);
        }
        if (!this.row1.isConnected) {
            const row1Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("row1");
            row1Input.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"](0, 1, 0, 0);
            row1Input.output.connectTo(this.row1);
        }
        if (!this.row2.isConnected) {
            const row2Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("row2");
            row2Input.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 1, 0);
            row2Input.output.connectTo(this.row2);
        }
        if (!this.row3.isConnected) {
            const row3Input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("row3");
            row3Input.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"](0, 0, 0, 1);
            row3Input.output.connectTo(this.row3);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const row0 = this.row0;
        const row1 = this.row1;
        const row2 = this.row2;
        const row3 = this.row3;
        const mat4 = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "mat4x4f" : "mat4";
        state.compilationString += state._declareOutput(output) + ` = ${mat4}(${row0.associatedVariableName}, ${row1.associatedVariableName}, ${row2.associatedVariableName}, ${row3.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MatrixBuilder", MatrixBuilderBlock); //# sourceMappingURL=matrixBuilderBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/conditionalBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConditionalBlock",
    ()=>ConditionalBlock,
    "ConditionalBlockConditions",
    ()=>ConditionalBlockConditions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var ConditionalBlockConditions;
(function(ConditionalBlockConditions) {
    /** Equal */ ConditionalBlockConditions[ConditionalBlockConditions["Equal"] = 0] = "Equal";
    /** NotEqual */ ConditionalBlockConditions[ConditionalBlockConditions["NotEqual"] = 1] = "NotEqual";
    /** LessThan */ ConditionalBlockConditions[ConditionalBlockConditions["LessThan"] = 2] = "LessThan";
    /** GreaterThan */ ConditionalBlockConditions[ConditionalBlockConditions["GreaterThan"] = 3] = "GreaterThan";
    /** LessOrEqual */ ConditionalBlockConditions[ConditionalBlockConditions["LessOrEqual"] = 4] = "LessOrEqual";
    /** GreaterOrEqual */ ConditionalBlockConditions[ConditionalBlockConditions["GreaterOrEqual"] = 5] = "GreaterOrEqual";
    /** Logical Exclusive OR */ ConditionalBlockConditions[ConditionalBlockConditions["Xor"] = 6] = "Xor";
    /** Logical Or */ ConditionalBlockConditions[ConditionalBlockConditions["Or"] = 7] = "Or";
    /** Logical And */ ConditionalBlockConditions[ConditionalBlockConditions["And"] = 8] = "And";
})(ConditionalBlockConditions || (ConditionalBlockConditions = {}));
class ConditionalBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ConditionalBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets the condition applied by the block
         */ this.condition = ConditionalBlockConditions.LessThan;
        this.registerInput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("true", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerInput("false", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._linkConnectionTypes(2, 3);
        this._outputs[0]._typeConnectionSource = this._inputs[2];
        this._outputs[0]._defaultConnectionPointType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ConditionalBlock";
    }
    /**
     * Gets the first operand component
     */ get a() {
        return this._inputs[0];
    }
    /**
     * Gets the second operand component
     */ get b() {
        return this._inputs[1];
    }
    /**
     * Gets the value to return if condition is true
     */ get true() {
        return this._inputs[2];
    }
    /**
     * Gets the value to return if condition is false
     */ get false() {
        return this._inputs[3];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    autoConfigure(nodeMaterial) {
        if (!this.true.isConnected) {
            const minInput = nodeMaterial.getBlockByPredicate((b)=>b.isInput && b.value === 1 && b.name === "True") || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("True");
            minInput.value = 1;
            minInput.output.connectTo(this.true);
        }
        if (!this.false.isConnected) {
            const maxInput = nodeMaterial.getBlockByPredicate((b)=>b.isInput && b.value === 0 && b.name === "False") || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("False");
            maxInput.value = 0;
            maxInput.output.connectTo(this.false);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const trueStatement = this.true.isConnected ? this.true.associatedVariableName : "1.0";
        const falseStatement = this.false.isConnected ? this.false.associatedVariableName : "0.0";
        switch(this.condition){
            case ConditionalBlockConditions.Equal:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `${this.a.associatedVariableName} == ${this.b.associatedVariableName}`)};\n`;
                    break;
                }
            case ConditionalBlockConditions.NotEqual:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `${this.a.associatedVariableName} != ${this.b.associatedVariableName}`)};\n`;
                    break;
                }
            case ConditionalBlockConditions.LessThan:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `${this.a.associatedVariableName} < ${this.b.associatedVariableName}`)};\n`;
                    break;
                }
            case ConditionalBlockConditions.LessOrEqual:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `${this.a.associatedVariableName} <= ${this.b.associatedVariableName}`)};\n`;
                    break;
                }
            case ConditionalBlockConditions.GreaterThan:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `${this.a.associatedVariableName} > ${this.b.associatedVariableName}`)};\n`;
                    break;
                }
            case ConditionalBlockConditions.GreaterOrEqual:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `${this.a.associatedVariableName} >= ${this.b.associatedVariableName}`)};\n`;
                    break;
                }
            case ConditionalBlockConditions.Xor:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `(((${this.a.associatedVariableName} + ${this.b.associatedVariableName}) % 2.0) > 0.0)`)};\n`;
                    break;
                }
            case ConditionalBlockConditions.Or:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `(min(${this.a.associatedVariableName} + ${this.b.associatedVariableName}, 1.0) > 0.0)`)};\n`;
                    break;
                }
            case ConditionalBlockConditions.And:
                {
                    state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary(trueStatement, falseStatement, `(${this.a.associatedVariableName} * ${this.b.associatedVariableName} > 0.0)`)};\n`;
                    break;
                }
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.condition = this.condition;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.condition = serializationObject.condition;
    }
    _dumpPropertiesCode() {
        const codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.condition = BABYLON.ConditionalBlockConditions.${ConditionalBlockConditions[this.condition]};\n`;
        return codeString;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Condition", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "Equal",
                value: ConditionalBlockConditions.Equal
            },
            {
                label: "NotEqual",
                value: ConditionalBlockConditions.NotEqual
            },
            {
                label: "LessThan",
                value: ConditionalBlockConditions.LessThan
            },
            {
                label: "GreaterThan",
                value: ConditionalBlockConditions.GreaterThan
            },
            {
                label: "LessOrEqual",
                value: ConditionalBlockConditions.LessOrEqual
            },
            {
                label: "GreaterOrEqual",
                value: ConditionalBlockConditions.GreaterOrEqual
            },
            {
                label: "Xor",
                value: ConditionalBlockConditions.Xor
            },
            {
                label: "And",
                value: ConditionalBlockConditions.And
            },
            {
                label: "Or",
                value: ConditionalBlockConditions.Or
            }
        ]
    })
], ConditionalBlock.prototype, "condition", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ConditionalBlock", ConditionalBlock); //# sourceMappingURL=conditionalBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/cloudBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloudBlock",
    ()=>CloudBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
class CloudBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new CloudBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /** Gets or sets the number of octaves */ this.octaves = 6.0;
        this.registerInput("seed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("chaos", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerInput("offsetX", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("offsetY", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("offsetZ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._inputs[0].acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this._inputs[0].acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._linkConnectionTypes(0, 1);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "CloudBlock";
    }
    /**
     * Gets the seed input component
     */ get seed() {
        return this._inputs[0];
    }
    /**
     * Gets the chaos input component
     */ get chaos() {
        return this._inputs[1];
    }
    /**
     * Gets the offset X input component
     */ get offsetX() {
        return this._inputs[2];
    }
    /**
     * Gets the offset Y input component
     */ get offsetY() {
        return this._inputs[3];
    }
    /**
     * Gets the offset Z input component
     */ get offsetZ() {
        return this._inputs[4];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (!this.seed.isConnected) {
            return;
        }
        if (!this._outputs[0].hasEndpoints) {
            return;
        }
        let functionString = `

        float cloudRandom(float p) { 
            float temp = fract(p * 0.011); 
            temp *= temp + 7.5; 
            temp *= temp + temp; 
            return fract(temp); 
        }

        // Based on Morgan McGuire @morgan3d
        // https://www.shadertoy.com/view/4dS3Wd
        float cloudNoise2(vec2 x, vec2 chaos) {
            vec2 step = chaos * vec2(75., 120.) + vec2(75., 120.);

            vec2 i = floor(x);
            vec2 f = fract(x);

            float n = dot(i, step);

            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(
                    mix(cloudRandom(n + dot(step, vec2(0, 0))), cloudRandom(n + dot(step, vec2(1, 0))), u.x),
                    mix(cloudRandom(n + dot(step, vec2(0, 1))), cloudRandom(n + dot(step, vec2(1, 1))), u.x),
                    u.y
                );
        }

        float cloudNoise3(vec3 x, vec3 chaos) {
            vec3 step = chaos * vec3(60., 120., 75.) + vec3(60., 120., 75.);

            vec3 i = floor(x);
            vec3 f = fract(x);

            float n = dot(i, step);

            vec3 u = f * f * (3.0 - 2.0 * f);
            return mix(mix(mix( cloudRandom(n + dot(step, vec3(0, 0, 0))), cloudRandom(n + dot(step, vec3(1, 0, 0))), u.x),
                           mix( cloudRandom(n + dot(step, vec3(0, 1, 0))), cloudRandom(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
                       mix(mix( cloudRandom(n + dot(step, vec3(0, 0, 1))), cloudRandom(n + dot(step, vec3(1, 0, 1))), u.x),
                           mix( cloudRandom(n + dot(step, vec3(0, 1, 1))), cloudRandom(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
        }`;
        let fractalBrownianString = `
        float fbm2(vec2 st, vec2 chaos) {
            // Initial values
            float value = 0.0;
            float amplitude = .5;
            float frequency = 0.;

            // Loop of octaves
            vec2 tempST = st;
            for (int i = 0; i < OCTAVES; i++) {
                value += amplitude * cloudNoise2(tempST, chaos);
                tempST *= 2.0;
                amplitude *= 0.5;
            }
            return value;
        }

        float fbm3(vec3 x, vec3 chaos) {
            // Initial values
            float value = 0.0;
            float amplitude = 0.5;
            vec3 tempX = x;
            for (int i = 0; i < OCTAVES; i++) {
                value += amplitude * cloudNoise3(tempX, chaos);
                tempX = tempX * 2.0;
                amplitude *= 0.5;
            }
            return value;
        }`;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            functionString = state._babylonSLtoWGSL(functionString);
            fractalBrownianString = state._babylonSLtoWGSL(fractalBrownianString);
        }
        const fbmNewName = `fbm${this.octaves}`;
        state._emitFunction("CloudBlockCode", functionString, "// CloudBlockCode");
        state._emitFunction("CloudBlockCodeFBM" + this.octaves, fractalBrownianString.replace(/fbm/gi, fbmNewName).replace(/OCTAVES/gi, (this.octaves | 0).toString()), "// CloudBlockCode FBM");
        const localVariable = state._getFreeVariableName("st");
        const seedType = this.seed.connectedPoint?.type || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3;
        state.compilationString += `${state._declareLocalVar(localVariable, seedType)} = ${this.seed.associatedVariableName};\n`;
        if (this.offsetX.isConnected) {
            state.compilationString += `${localVariable}.x += 0.1 * ${this.offsetX.associatedVariableName};\n`;
        }
        if (this.offsetY.isConnected) {
            state.compilationString += `${localVariable}.y += 0.1 * ${this.offsetY.associatedVariableName};\n`;
        }
        if (this.offsetZ.isConnected && seedType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3) {
            state.compilationString += `${localVariable}.z += 0.1 * ${this.offsetZ.associatedVariableName};\n`;
        }
        let chaosValue = "";
        if (this.chaos.isConnected) {
            chaosValue = this.chaos.associatedVariableName;
        } else {
            const addF = state.fSuffix;
            chaosValue = this.seed.connectedPoint?.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2 ? `vec2${addF}(0., 0.)` : `vec3${addF}(0., 0., 0.)`;
        }
        state.compilationString += state._declareOutput(this._outputs[0]) + ` = ${fbmNewName}${this.seed.connectedPoint?.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2 ? "2" : "3"}(${localVariable}, ${chaosValue});\n`;
        return this;
    }
    _dumpPropertiesCode() {
        const codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.octaves = ${this.octaves};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.octaves = this.octaves;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.octaves = serializationObject.octaves;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Octaves", 2 /* PropertyTypeForEdition.Int */ , undefined, {
        embedded: true
    })
], CloudBlock.prototype, "octaves", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CloudBlock", CloudBlock); //# sourceMappingURL=cloudBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/voronoiNoiseBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoronoiNoiseBlock",
    ()=>VoronoiNoiseBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class VoronoiNoiseBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new VoronoiNoiseBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("seed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerInput("offset", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("density", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("cells", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "VoronoiNoiseBlock";
    }
    /**
     * Gets the seed input component
     */ get seed() {
        return this._inputs[0];
    }
    /**
     * Gets the offset input component
     */ get offset() {
        return this._inputs[1];
    }
    /**
     * Gets the density input component
     */ get density() {
        return this._inputs[2];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the output component
     */ get cells() {
        return this._outputs[1];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (!this.seed.isConnected) {
            return;
        }
        // Adapted from https://www.shadertoy.com/view/MslGD8
        let functionString = `vec2 voronoiRandom(vec2 p){
            p = vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));
            return fract(sin(p)*18.5453);
        }
        `;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            functionString = state._babylonSLtoWGSL(functionString);
        }
        state._emitFunction("voronoiRandom", functionString, "// Voronoi random generator");
        functionString = `void voronoi(vec2 seed, float offset, float density, out float outValue, out float cells){
            vec2 n = floor(seed * density);
            vec2 f = fract(seed * density);
            vec3 m = vec3( 8.0 );
            for( int j=-1; j<=1; j++ ){
                for( int i=-1; i<=1; i++ ){
                    vec2  g = vec2( float(i), float(j) );
                    vec2  o = voronoiRandom( n + g);
                    vec2  r = g - f + (0.5+0.5*sin(offset+6.2831*o));
                    float d = dot( r, r );
                    if( d<m.x ){
                        m = vec3( d, o );
                        outValue = m.x;
                        cells = m.y;
                    }
                }
			}
        }
        `;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            functionString = state._babylonSLtoWGSL(functionString);
        } else {
            functionString = state._babylonSLtoGLSL(functionString);
        }
        state._emitFunction("voronoi", functionString, "// Voronoi");
        const tempOutput = state._getFreeVariableName("tempOutput");
        const tempCells = state._getFreeVariableName("tempCells");
        const ref = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "&" : "";
        state.compilationString += `${state._declareLocalVar(tempOutput, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = 0.0;\n`;
        state.compilationString += `${state._declareLocalVar(tempCells, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = 0.0;\n`;
        state.compilationString += `voronoi(${this.seed.associatedVariableName}, ${this.offset.associatedVariableName}, ${this.density.associatedVariableName}, ${ref}${tempOutput}, ${ref}${tempCells});\n`;
        if (this.output.hasEndpoints) {
            state.compilationString += state._declareOutput(this.output) + ` = ${tempOutput};\n`;
        }
        if (this.cells.hasEndpoints) {
            state.compilationString += state._declareOutput(this.cells) + ` = ${tempCells};\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.VoronoiNoiseBlock", VoronoiNoiseBlock); //# sourceMappingURL=voronoiNoiseBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/elbowBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElbowBlock",
    ()=>ElbowBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ElbowBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ElbowBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ElbowBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets or sets the target of the block
     */ get target() {
        const input = this._inputs[0];
        if (input.isConnected) {
            const block = input.connectedPoint.ownerBlock;
            if (block.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
                return block.target;
            }
            if (input.connectedPoint.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
                return input.connectedPoint.target;
            }
        }
        return this._target;
    }
    set target(value) {
        if ((this._target & value) !== 0) {
            return;
        }
        this._target = value;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const input = this._inputs[0];
        state.compilationString += state._declareOutput(output) + ` = ${input.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ElbowBlock", ElbowBlock); //# sourceMappingURL=elbowBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/triPlanarBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TriPlanarBlock",
    ()=>TriPlanarBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
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
class TriPlanarBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Gets or sets the texture associated with the node
     */ get texture() {
        if (this.source.isConnected) {
            return (this.source.connectedPoint?.ownerBlock).texture;
        }
        return this._texture;
    }
    set texture(texture) {
        if (this._texture === texture) {
            return;
        }
        const scene = texture?.getScene() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!texture && scene) {
            scene.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this._texture);
            });
        }
        this._texture = texture;
        if (texture && scene) {
            scene.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(texture);
            });
        }
    }
    /**
     * Gets the textureY associated with the node
     */ get textureY() {
        if (this.sourceY.isConnected) {
            return (this.sourceY.connectedPoint?.ownerBlock).texture;
        }
        return null;
    }
    /**
     * Gets the textureZ associated with the node
     */ get textureZ() {
        if (this.sourceZ?.isConnected) {
            return (this.sourceY.connectedPoint?.ownerBlock).texture;
        }
        return null;
    }
    _getImageSourceBlock(connectionPoint) {
        return connectionPoint?.isConnected ? connectionPoint.connectedPoint.ownerBlock : null;
    }
    /**
     * Gets the sampler name associated with this texture
     */ get samplerName() {
        const imageSourceBlock = this._getImageSourceBlock(this.source);
        if (imageSourceBlock) {
            return imageSourceBlock.samplerName;
        }
        return this._samplerName;
    }
    /**
     * Gets the samplerY name associated with this texture
     */ get samplerYName() {
        return this._getImageSourceBlock(this.sourceY)?.samplerName ?? null;
    }
    /**
     * Gets the samplerZ name associated with this texture
     */ get samplerZName() {
        return this._getImageSourceBlock(this.sourceZ)?.samplerName ?? null;
    }
    /**
     * Gets a boolean indicating that this block is linked to an ImageSourceBlock
     */ get hasImageSource() {
        return this.source.isConnected;
    }
    /**
     * Gets or sets a boolean indicating if content needs to be converted to gamma space
     */ set convertToGammaSpace(value) {
        if (value === this._convertToGammaSpace) {
            return;
        }
        this._convertToGammaSpace = value;
        if (this.texture) {
            const scene = this.texture.getScene() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
            scene?.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this.texture);
            });
        }
    }
    get convertToGammaSpace() {
        return this._convertToGammaSpace;
    }
    /**
     * Gets or sets a boolean indicating if content needs to be converted to linear space
     */ set convertToLinearSpace(value) {
        if (value === this._convertToLinearSpace) {
            return;
        }
        this._convertToLinearSpace = value;
        if (this.texture) {
            const scene = this.texture.getScene() ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
            scene?.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this.texture);
            });
        }
    }
    get convertToLinearSpace() {
        return this._convertToLinearSpace;
    }
    /**
     * Create a new TriPlanarBlock
     * @param name defines the block name
     * @param hideSourceZ defines a boolean indicating that normal Z should not be used (false by default)
     */ constructor(name, hideSourceZ = false){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Project the texture(s) for a better fit to a cube
         */ this.projectAsCube = false;
        this._convertToGammaSpace = false;
        this._convertToLinearSpace = false;
        /**
         * Gets or sets a boolean indicating if multiplication of texture with level should be disabled
         */ this.disableLevelMultiplication = false;
        this.registerInput("position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false);
        this.registerInput("normal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false);
        this.registerInput("sharpness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("source", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("source", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        this.registerInput("sourceY", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("sourceY", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        if (!hideSourceZ) {
            this.registerInput("sourceZ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("sourceZ", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        }
        this.registerOutput("rgba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("r", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("g", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("level", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this._inputs[1].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "TriPlanarBlock";
    }
    /**
     * Gets the position input component
     */ get position() {
        return this._inputs[0];
    }
    /**
     * Gets the normal input component
     */ get normal() {
        return this._inputs[1];
    }
    /**
     * Gets the sharpness input component
     */ get sharpness() {
        return this._inputs[2];
    }
    /**
     * Gets the source input component
     */ get source() {
        return this._inputs[3];
    }
    /**
     * Gets the sourceY input component
     */ get sourceY() {
        return this._inputs[4];
    }
    /**
     * Gets the sourceZ input component
     */ get sourceZ() {
        return this._inputs[5];
    }
    /**
     * Gets the rgba output component
     */ get rgba() {
        return this._outputs[0];
    }
    /**
     * Gets the rgb output component
     */ get rgb() {
        return this._outputs[1];
    }
    /**
     * Gets the r output component
     */ get r() {
        return this._outputs[2];
    }
    /**
     * Gets the g output component
     */ get g() {
        return this._outputs[3];
    }
    /**
     * Gets the b output component
     */ get b() {
        return this._outputs[4];
    }
    /**
     * Gets the a output component
     */ get a() {
        return this._outputs[5];
    }
    /**
     * Gets the level output component
     */ get level() {
        return this._outputs[6];
    }
    prepareDefines(defines) {
        if (!defines._areTexturesDirty) {
            return;
        }
        const toGamma = this.convertToGammaSpace && this.texture && !this.texture.gammaSpace;
        const toLinear = this.convertToLinearSpace && this.texture && this.texture.gammaSpace;
        // Not a bug... Name defines the texture space not the required conversion
        defines.setValue(this._linearDefineName, toGamma, true);
        defines.setValue(this._gammaDefineName, toLinear, true);
    }
    isReady() {
        if (this.texture && !this.texture.isReadyOrNotBlocking()) {
            return false;
        }
        return true;
    }
    bind(effect) {
        if (!this.texture) {
            return;
        }
        effect.setFloat(this._textureInfoName, this.texture.level);
        if (!this._imageSource) {
            effect.setTexture(this._samplerName, this.texture);
        }
    }
    _samplerFunc(state) {
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return "textureSample";
        }
        return "texture2D";
    }
    _generateTextureSample(textureName, uv, state) {
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `${this._samplerFunc(state)}(${textureName},${textureName + `Sampler`}, ${uv})`;
        }
        return `${this._samplerFunc(state)}(${textureName}, ${uv})`;
    }
    _generateTextureLookup(state) {
        const samplerName = this.samplerName;
        const samplerYName = this.samplerYName ?? samplerName;
        const samplerZName = this.samplerZName ?? samplerName;
        const sharpness = this.sharpness.isConnected ? this.sharpness.associatedVariableName : "1.0";
        const x = state._getFreeVariableName("x");
        const y = state._getFreeVariableName("y");
        const z = state._getFreeVariableName("z");
        const w = state._getFreeVariableName("w");
        const n = state._getFreeVariableName("n");
        const uvx = state._getFreeVariableName("uvx");
        const uvy = state._getFreeVariableName("uvy");
        const uvz = state._getFreeVariableName("uvz");
        state.compilationString += `
            ${state._declareLocalVar(n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${this.normal.associatedVariableName}.xyz;

            ${state._declareLocalVar(uvx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = ${this.position.associatedVariableName}.yz;
            ${state._declareLocalVar(uvy, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = ${this.position.associatedVariableName}.zx;
            ${state._declareLocalVar(uvz, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = ${this.position.associatedVariableName}.xy;
        `;
        if (this.projectAsCube) {
            state.compilationString += `
                ${uvx}.xy = ${uvx}.yx;

                if (${n}.x >= 0.0) {
                    ${uvx}.x = -${uvx}.x;
                }
                if (${n}.y < 0.0) {
                    ${uvy}.y = -${uvy}.y;
                }
                if (${n}.z < 0.0) {
                    ${uvz}.x = -${uvz}.x;
                }
            `;
        }
        const suffix = state.fSuffix;
        state.compilationString += `
            ${state._declareLocalVar(x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this._generateTextureSample(samplerName, uvx, state)};
            ${state._declareLocalVar(y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this._generateTextureSample(samplerYName, uvy, state)};
            ${state._declareLocalVar(z, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this._generateTextureSample(samplerZName, uvz, state)};
           
            // blend weights
            ${state._declareLocalVar(w, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = pow(abs(${n}), vec3${suffix}(${sharpness}));

            // blend and return
            ${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = (${x}*${w}.x + ${y}*${w}.y + ${z}*${w}.z) / (${w}.x + ${w}.y + ${w}.z);        
        `;
    }
    _generateConversionCode(state, output, swizzle) {
        let vecSpecifier = "";
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  && (output.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 || output.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3)) {
            vecSpecifier = "Vec3";
        }
        if (swizzle !== "a") {
            // no conversion if the output is "a" (alpha)
            if (!this.texture || !this.texture.gammaSpace) {
                state.compilationString += `#ifdef ${this._linearDefineName}
                    ${output.associatedVariableName} = toGammaSpace${vecSpecifier}(${output.associatedVariableName});
                    #endif
                `;
            }
            state.compilationString += `#ifdef ${this._gammaDefineName}
                ${output.associatedVariableName} = toLinearSpace${vecSpecifier}(${output.associatedVariableName});
                #endif
            `;
        }
    }
    _writeOutput(state, output, swizzle) {
        let complement = "";
        if (!this.disableLevelMultiplication) {
            complement = ` * ${state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "uniforms." : ""}${this._textureInfoName}`;
        }
        state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle}${complement};\n`;
        this._generateConversionCode(state, output, swizzle);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (this.source.isConnected) {
            this._imageSource = this.source.connectedPoint.ownerBlock;
        } else {
            this._imageSource = null;
        }
        this._textureInfoName = state._getFreeVariableName("textureInfoName");
        this.level.associatedVariableName = (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "uniforms." : "") + this._textureInfoName;
        this._tempTextureRead = state._getFreeVariableName("tempTextureRead");
        this._linearDefineName = state._getFreeDefineName("ISLINEAR");
        this._gammaDefineName = state._getFreeDefineName("ISGAMMA");
        if (!this._imageSource) {
            this._samplerName = state._getFreeVariableName(this.name + "Texture");
            state._emit2DSampler(this._samplerName);
        }
        // Declarations
        state.sharedData.blockingBlocks.push(this);
        state.sharedData.textureBlocks.push(this);
        state.sharedData.blocksWithDefines.push(this);
        state.sharedData.bindableBlocks.push(this);
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("helperFunctions", comments);
        state._emitUniformFromString(this._textureInfoName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._generateTextureLookup(state);
        for (const output of this._outputs){
            if (output.hasEndpoints && output.name !== "level") {
                this._writeOutput(state, output, output.name);
            }
        }
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.convertToGammaSpace = ${this.convertToGammaSpace};\n`;
        codeString += `${this._codeVariableName}.convertToLinearSpace = ${this.convertToLinearSpace};\n`;
        codeString += `${this._codeVariableName}.disableLevelMultiplication = ${this.disableLevelMultiplication};\n`;
        codeString += `${this._codeVariableName}.projectAsCube = ${this.projectAsCube};\n`;
        if (!this.texture) {
            return codeString;
        }
        codeString += `${this._codeVariableName}.texture = new BABYLON.Texture("${this.texture.name}", null, ${this.texture.noMipmap}, ${this.texture.invertY}, ${this.texture.samplingMode});\n`;
        codeString += `${this._codeVariableName}.texture.wrapU = ${this.texture.wrapU};\n`;
        codeString += `${this._codeVariableName}.texture.wrapV = ${this.texture.wrapV};\n`;
        codeString += `${this._codeVariableName}.texture.uAng = ${this.texture.uAng};\n`;
        codeString += `${this._codeVariableName}.texture.vAng = ${this.texture.vAng};\n`;
        codeString += `${this._codeVariableName}.texture.wAng = ${this.texture.wAng};\n`;
        codeString += `${this._codeVariableName}.texture.uOffset = ${this.texture.uOffset};\n`;
        codeString += `${this._codeVariableName}.texture.vOffset = ${this.texture.vOffset};\n`;
        codeString += `${this._codeVariableName}.texture.uScale = ${this.texture.uScale};\n`;
        codeString += `${this._codeVariableName}.texture.vScale = ${this.texture.vScale};\n`;
        codeString += `${this._codeVariableName}.texture.coordinatesMode = ${this.texture.coordinatesMode};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.convertToGammaSpace = this.convertToGammaSpace;
        serializationObject.convertToLinearSpace = this.convertToLinearSpace;
        serializationObject.disableLevelMultiplication = this.disableLevelMultiplication;
        serializationObject.projectAsCube = this.projectAsCube;
        if (!this.hasImageSource && this.texture && !this.texture.isRenderTarget && this.texture.getClassName() !== "VideoTexture") {
            serializationObject.texture = this.texture.serialize();
        }
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.convertToGammaSpace = serializationObject.convertToGammaSpace;
        this.convertToLinearSpace = !!serializationObject.convertToLinearSpace;
        this.disableLevelMultiplication = !!serializationObject.disableLevelMultiplication;
        this.projectAsCube = !!serializationObject.projectAsCube;
        if (serializationObject.texture && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterial"].IgnoreTexturesAtLoadTime && serializationObject.texture.url !== undefined) {
            rootUrl = serializationObject.texture.url.indexOf("data:") === 0 ? "" : rootUrl;
            this.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].Parse(serializationObject.texture, scene, rootUrl);
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Project as cube", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], TriPlanarBlock.prototype, "projectAsCube", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.TriPlanarBlock", TriPlanarBlock); //# sourceMappingURL=triPlanarBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/biPlanarBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BiPlanarBlock",
    ()=>BiPlanarBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$triPlanarBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/triPlanarBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
;
;
;
class BiPlanarBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$triPlanarBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriPlanarBlock"] {
    /**
     * Create a new BiPlanarBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, true);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "BiPlanarBlock";
    }
    _declareLocalVarAsVec3I(name, state) {
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `var ${name}: vec3<i32>`;
        } else {
            return `ivec3 ${name}`;
        }
    }
    _getTextureGrad(state, samplerName) {
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `textureSampleGrad(${samplerName},${samplerName + `Sampler`}`;
        }
        return `textureGrad(${samplerName}`;
    }
    _generateTextureLookup(state) {
        const samplerName = this.samplerName;
        const samplerYName = this.samplerYName ?? this.samplerName;
        const sharpness = this.sharpness.isConnected ? this.sharpness.associatedVariableName : "1.0";
        const dpdx = state._getFreeVariableName("dxValue");
        const dpdy = state._getFreeVariableName("dyValue");
        const n = state._getFreeVariableName("n");
        const ma = state._getFreeVariableName("ma");
        const mi = state._getFreeVariableName("mi");
        const me = state._getFreeVariableName("me");
        const x = state._getFreeVariableName("x");
        const y = state._getFreeVariableName("y");
        const w = state._getFreeVariableName("w");
        let ivec3 = "ivec3";
        let dpdxFunc = "dFdx";
        let dpdyFunc = "dFdy";
        const suffix = state.fSuffix;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            ivec3 = "vec3<i32>";
            dpdxFunc = "dpdx";
            dpdyFunc = "dpdy";
        }
        state.compilationString += `
            // grab coord derivatives for texturing
            ${state._declareLocalVar(dpdx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${dpdxFunc}(${this.position.associatedVariableName}.xyz);
            ${state._declareLocalVar(dpdy, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${dpdyFunc}(${this.position.associatedVariableName}.xyz);
            ${state._declareLocalVar(n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = abs(${this.normal.associatedVariableName}.xyz);
        
            // determine major axis (in x; yz are following axis)
            ${this._declareLocalVarAsVec3I(ma, state)} = ${state._generateTernary(`${ivec3}(0,1,2)`, `${state._generateTernary(`${ivec3}(1,2,0)`, `${ivec3}(2,0,1)`, `(${n}.y>${n}.z)`)}`, `(${n}.x>${n}.y && ${n}.x>${n}.z)`)};                    

            // determine minor axis (in x; yz are following axis)
            ${this._declareLocalVarAsVec3I(mi, state)} =  ${state._generateTernary(`${ivec3}(0,1,2)`, `${state._generateTernary(`${ivec3}(1,2,0)`, `${ivec3}(2,0,1)`, `(${n}.y<${n}.z)`)}`, `(${n}.x<${n}.y && ${n}.x<${n}.z)`)};  
                              
            // determine median axis (in x;  yz are following axis)
            ${this._declareLocalVarAsVec3I(me, state)} = ${ivec3}(3) - ${mi} - ${ma};
            
            // project+fetch
            ${state._declareLocalVar(x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this._getTextureGrad(state, samplerName)}, vec2${suffix}(${this.position.associatedVariableName}[${ma}.y], ${this.position.associatedVariableName}[${ma}.z]), 
                                    vec2${suffix}(${dpdx}[${ma}.y],${dpdx}[${ma}.z]), 
                                    vec2${suffix}(${dpdy}[${ma}.y],${dpdy}[${ma}.z]));
            ${state._declareLocalVar(y, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this._getTextureGrad(state, samplerYName)}, vec2${suffix}(${this.position.associatedVariableName}[${me}.y], ${this.position.associatedVariableName}[${me}.z]), 
                                    vec2${suffix}(${dpdx}[${me}.y],${dpdx}[${me}.z]),
                                    vec2${suffix}(${dpdy}[${me}.y],${dpdy}[${me}.z]));
            
            // blend factors
            ${state._declareLocalVar(w, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = vec2${suffix}(${n}[${ma}.x],${n}[${me}.x]);
            // make local support
            ${w} = clamp( (${w}-0.5773)/(1.0-0.5773), vec2${suffix}(0.0), vec2${suffix}(1.0) );
            // shape transition
            ${w} = pow( ${w}, vec2${suffix}(${sharpness}/8.0) );
            // blend and return
            ${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = (${x}*${w}.x + ${y}*${w}.y) / (${w}.x + ${w}.y);
        `;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.BiPlanarBlock", BiPlanarBlock); //# sourceMappingURL=biPlanarBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixDeterminantBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatrixDeterminantBlock",
    ()=>MatrixDeterminantBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class MatrixDeterminantBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new MatrixDeterminantBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MatrixDeterminantBlock";
    }
    /**
     * Gets the input matrix
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this.output;
        const input = this.input;
        state.compilationString += state._declareOutput(output) + ` = determinant(${input.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MatrixDeterminantBlock", MatrixDeterminantBlock); //# sourceMappingURL=matrixDeterminantBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixTransposeBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatrixTransposeBlock",
    ()=>MatrixTransposeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class MatrixTransposeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new MatrixTransposeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MatrixTransposeBlock";
    }
    /**
     * Gets the input matrix
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this.output;
        const input = this.input;
        state.compilationString += state._declareOutput(output) + ` = transpose(${input.associatedVariableName});\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MatrixTransposeBlock", MatrixTransposeBlock); //# sourceMappingURL=matrixTransposeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/meshAttributeExistsBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshAttributeExistsBlock",
    ()=>MeshAttributeExistsBlock,
    "MeshAttributeExistsBlockTypes",
    ()=>MeshAttributeExistsBlockTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$morphTargetsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/morphTargetsBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var MeshAttributeExistsBlockTypes;
(function(MeshAttributeExistsBlockTypes) {
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["None"] = 0] = "None";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["Normal"] = 1] = "Normal";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["Tangent"] = 2] = "Tangent";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["VertexColor"] = 3] = "VertexColor";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["UV1"] = 4] = "UV1";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["UV2"] = 5] = "UV2";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["UV3"] = 6] = "UV3";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["UV4"] = 7] = "UV4";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["UV5"] = 8] = "UV5";
    MeshAttributeExistsBlockTypes[MeshAttributeExistsBlockTypes["UV6"] = 9] = "UV6";
})(MeshAttributeExistsBlockTypes || (MeshAttributeExistsBlockTypes = {}));
class MeshAttributeExistsBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new MeshAttributeExistsBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Defines which mesh attribute to use
         */ this.attributeType = 0 /* MeshAttributeExistsBlockTypes.None */ ;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("fallback", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._linkConnectionTypes(0, 1);
        // Try to auto determine attributeType
        this._inputs[0].onConnectionObservable.add((other)=>{
            if (this.attributeType) {
                // But only if not already specified
                return;
            }
            const sourceBlock = other.ownerBlock;
            if (sourceBlock instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"] && sourceBlock.isAttribute) {
                switch(sourceBlock.name){
                    case "color":
                        this.attributeType = 3 /* MeshAttributeExistsBlockTypes.VertexColor */ ;
                        break;
                    case "normal":
                        this.attributeType = 1 /* MeshAttributeExistsBlockTypes.Normal */ ;
                        break;
                    case "tangent":
                        this.attributeType = 2 /* MeshAttributeExistsBlockTypes.Tangent */ ;
                        break;
                    case "uv":
                        this.attributeType = 4 /* MeshAttributeExistsBlockTypes.UV1 */ ;
                        break;
                    case "uv2":
                        this.attributeType = 5 /* MeshAttributeExistsBlockTypes.UV2 */ ;
                        break;
                    case "uv3":
                        this.attributeType = 6 /* MeshAttributeExistsBlockTypes.UV3 */ ;
                        break;
                    case "uv4":
                        this.attributeType = 7 /* MeshAttributeExistsBlockTypes.UV4 */ ;
                        break;
                    case "uv5":
                        this.attributeType = 8 /* MeshAttributeExistsBlockTypes.UV5 */ ;
                        break;
                    case "uv6":
                        this.attributeType = 9 /* MeshAttributeExistsBlockTypes.UV6 */ ;
                        break;
                }
            } else if (sourceBlock instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$morphTargetsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MorphTargetsBlock"]) {
                switch(this.input.connectedPoint?.name){
                    case "normalOutput":
                        this.attributeType = 1 /* MeshAttributeExistsBlockTypes.Normal */ ;
                        break;
                    case "tangentOutput":
                        this.attributeType = 2 /* MeshAttributeExistsBlockTypes.Tangent */ ;
                        break;
                    case "uvOutput":
                        this.attributeType = 4 /* MeshAttributeExistsBlockTypes.UV1 */ ;
                        break;
                    case "uv2Output":
                        this.attributeType = 5 /* MeshAttributeExistsBlockTypes.UV2 */ ;
                        break;
                }
            }
        });
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MeshAttributeExistsBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the fallback component when speciefied attribute doesn't exist
     */ get fallback() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        let attributeDefine = null;
        switch(this.attributeType){
            case 3 /* MeshAttributeExistsBlockTypes.VertexColor */ :
                attributeDefine = "VERTEXCOLOR_NME";
                break;
            case 1 /* MeshAttributeExistsBlockTypes.Normal */ :
                attributeDefine = "NORMAL";
                break;
            case 2 /* MeshAttributeExistsBlockTypes.Tangent */ :
                attributeDefine = "TANGENT";
                break;
            case 4 /* MeshAttributeExistsBlockTypes.UV1 */ :
                attributeDefine = "UV1";
                break;
            case 5 /* MeshAttributeExistsBlockTypes.UV2 */ :
                attributeDefine = "UV2";
                break;
            case 6 /* MeshAttributeExistsBlockTypes.UV3 */ :
                attributeDefine = "UV3";
                break;
            case 7 /* MeshAttributeExistsBlockTypes.UV4 */ :
                attributeDefine = "UV4";
                break;
            case 8 /* MeshAttributeExistsBlockTypes.UV5 */ :
                attributeDefine = "UV5";
                break;
            case 9 /* MeshAttributeExistsBlockTypes.UV6 */ :
                attributeDefine = "UV6";
                break;
        }
        const output = state._declareOutput(this.output);
        if (attributeDefine) {
            state.compilationString += `#ifdef ${attributeDefine}\n`;
        }
        state.compilationString += `${output} = ${this.input.associatedVariableName};\n`;
        if (attributeDefine) {
            state.compilationString += `#else\n`;
            state.compilationString += `${output} = ${this.fallback.associatedVariableName};\n`;
            state.compilationString += `#endif\n`;
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.attributeType = this.attributeType;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.attributeType = serializationObject.attributeType ?? 0 /* MeshAttributeExistsBlockTypes.None */ ;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.attributeType = ${this.attributeType};\n`;
        return codeString;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Attribute lookup", 5 /* PropertyTypeForEdition.List */ , undefined, {
        notifiers: {
            update: true
        },
        embedded: true,
        options: [
            {
                label: "(None)",
                value: 0 /* MeshAttributeExistsBlockTypes.None */ 
            },
            {
                label: "Normal",
                value: 1 /* MeshAttributeExistsBlockTypes.Normal */ 
            },
            {
                label: "Tangent",
                value: 2 /* MeshAttributeExistsBlockTypes.Tangent */ 
            },
            {
                label: "Vertex Color",
                value: 3 /* MeshAttributeExistsBlockTypes.VertexColor */ 
            },
            {
                label: "UV1",
                value: 4 /* MeshAttributeExistsBlockTypes.UV1 */ 
            },
            {
                label: "UV2",
                value: 5 /* MeshAttributeExistsBlockTypes.UV2 */ 
            },
            {
                label: "UV3",
                value: 6 /* MeshAttributeExistsBlockTypes.UV3 */ 
            },
            {
                label: "UV4",
                value: 7 /* MeshAttributeExistsBlockTypes.UV4 */ 
            },
            {
                label: "UV5",
                value: 8 /* MeshAttributeExistsBlockTypes.UV5 */ 
            },
            {
                label: "UV6",
                value: 9 /* MeshAttributeExistsBlockTypes.UV6 */ 
            }
        ]
    })
], MeshAttributeExistsBlock.prototype, "attributeType", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MeshAttributeExistsBlock", MeshAttributeExistsBlock); //# sourceMappingURL=meshAttributeExistsBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/curveBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurveBlock",
    ()=>CurveBlock,
    "CurveBlockTypes",
    ()=>CurveBlockTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
var CurveBlockTypes;
(function(CurveBlockTypes) {
    /** EaseInSine */ CurveBlockTypes[CurveBlockTypes["EaseInSine"] = 0] = "EaseInSine";
    /** EaseOutSine */ CurveBlockTypes[CurveBlockTypes["EaseOutSine"] = 1] = "EaseOutSine";
    /** EaseInOutSine */ CurveBlockTypes[CurveBlockTypes["EaseInOutSine"] = 2] = "EaseInOutSine";
    /** EaseInQuad */ CurveBlockTypes[CurveBlockTypes["EaseInQuad"] = 3] = "EaseInQuad";
    /** EaseOutQuad */ CurveBlockTypes[CurveBlockTypes["EaseOutQuad"] = 4] = "EaseOutQuad";
    /** EaseInOutQuad */ CurveBlockTypes[CurveBlockTypes["EaseInOutQuad"] = 5] = "EaseInOutQuad";
    /** EaseInCubic */ CurveBlockTypes[CurveBlockTypes["EaseInCubic"] = 6] = "EaseInCubic";
    /** EaseOutCubic */ CurveBlockTypes[CurveBlockTypes["EaseOutCubic"] = 7] = "EaseOutCubic";
    /** EaseInOutCubic */ CurveBlockTypes[CurveBlockTypes["EaseInOutCubic"] = 8] = "EaseInOutCubic";
    /** EaseInQuart */ CurveBlockTypes[CurveBlockTypes["EaseInQuart"] = 9] = "EaseInQuart";
    /** EaseOutQuart */ CurveBlockTypes[CurveBlockTypes["EaseOutQuart"] = 10] = "EaseOutQuart";
    /** EaseInOutQuart */ CurveBlockTypes[CurveBlockTypes["EaseInOutQuart"] = 11] = "EaseInOutQuart";
    /** EaseInQuint */ CurveBlockTypes[CurveBlockTypes["EaseInQuint"] = 12] = "EaseInQuint";
    /** EaseOutQuint */ CurveBlockTypes[CurveBlockTypes["EaseOutQuint"] = 13] = "EaseOutQuint";
    /** EaseInOutQuint */ CurveBlockTypes[CurveBlockTypes["EaseInOutQuint"] = 14] = "EaseInOutQuint";
    /** EaseInExpo */ CurveBlockTypes[CurveBlockTypes["EaseInExpo"] = 15] = "EaseInExpo";
    /** EaseOutExpo */ CurveBlockTypes[CurveBlockTypes["EaseOutExpo"] = 16] = "EaseOutExpo";
    /** EaseInOutExpo */ CurveBlockTypes[CurveBlockTypes["EaseInOutExpo"] = 17] = "EaseInOutExpo";
    /** EaseInCirc */ CurveBlockTypes[CurveBlockTypes["EaseInCirc"] = 18] = "EaseInCirc";
    /** EaseOutCirc */ CurveBlockTypes[CurveBlockTypes["EaseOutCirc"] = 19] = "EaseOutCirc";
    /** EaseInOutCirc */ CurveBlockTypes[CurveBlockTypes["EaseInOutCirc"] = 20] = "EaseInOutCirc";
    /** EaseInBack */ CurveBlockTypes[CurveBlockTypes["EaseInBack"] = 21] = "EaseInBack";
    /** EaseOutBack */ CurveBlockTypes[CurveBlockTypes["EaseOutBack"] = 22] = "EaseOutBack";
    /** EaseInOutBack */ CurveBlockTypes[CurveBlockTypes["EaseInOutBack"] = 23] = "EaseInOutBack";
    /** EaseInElastic */ CurveBlockTypes[CurveBlockTypes["EaseInElastic"] = 24] = "EaseInElastic";
    /** EaseOutElastic */ CurveBlockTypes[CurveBlockTypes["EaseOutElastic"] = 25] = "EaseOutElastic";
    /** EaseInOutElastic */ CurveBlockTypes[CurveBlockTypes["EaseInOutElastic"] = 26] = "EaseInOutElastic";
})(CurveBlockTypes || (CurveBlockTypes = {}));
class CurveBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new CurveBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets the type of the curve applied by the block
         */ this.type = CurveBlockTypes.EaseInOutSine;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object);
        this._inputs[0].excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Int);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "CurveBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _duplicateEntry(entry, component) {
        return `ret.${component} = ${entry.replace(/VAL/g, "v." + component)}`;
    }
    _duplicateEntryDirect(entry) {
        return `return ${entry.replace(/VAL/g, "v")}`;
    }
    _duplicateVector(entry, inputType, isWGSL) {
        if (inputType === "float" || inputType === "f32") {
            return this._duplicateEntryDirect(entry);
        }
        const size = parseInt(inputType.replace("vec", ""));
        let code = isWGSL ? `
            var ret: vec${size}f = vec${size}f(0.0);
        ` : `
            vec${size} ret = vec${size}(0.0);
        `;
        for(let i = 1; i <= size; i++){
            code += this._duplicateEntry(entry, i === 1 ? "x" : i === 2 ? "y" : i === 3 ? "z" : "w") + ";\n";
        }
        code += "return ret;\n";
        return code;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        let registeredFunction = "";
        let registeredFunctionName = "";
        const inputType = state._getShaderType(this.input.type);
        const isWGSL = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        registeredFunctionName = CurveBlockTypes[this.type] + "_" + inputType.replace("<", "").replace(">", "");
        switch(this.type){
            case CurveBlockTypes.EaseInSine:
                registeredFunction = `return 1.0 - cos((v * 3.1415) / 2.0)`;
                break;
            case CurveBlockTypes.EaseOutSine:
                registeredFunction = `return sin((v * 3.1415) / 2.0)`;
                break;
            case CurveBlockTypes.EaseInOutSine:
                registeredFunction = `return -(cos(v * 3.1415) - 1.0) / 2.0`;
                break;
            case CurveBlockTypes.EaseInQuad:
                registeredFunction = `return v * v`;
                break;
            case CurveBlockTypes.EaseOutQuad:
                registeredFunction = `return (1.0 - v) * (1.0 - v)`;
                break;
            case CurveBlockTypes.EaseInOutQuad:
                {
                    const entry = state._generateTernary("2.0 * VAL * VAL", "1.0 - pow(-2.0 * VAL + 2.0, 2.0) / 2.0", "VAL < 0.5");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInCubic:
                registeredFunction = `return v * v * v`;
                break;
            case CurveBlockTypes.EaseOutCubic:
                {
                    const entry = "1.0 - pow(1.0 - VAL, 3.0)";
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInOutCubic:
                {
                    const entry = state._generateTernary("4.0 * VAL * VAL * VAL", "1.0 - pow(-2.0 * VAL + 2.0, 3.0) / 2.0", "VAL < 0.5");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInQuart:
                registeredFunction = `return v * v * v * v`;
                break;
            case CurveBlockTypes.EaseOutQuart:
                {
                    const entry = "1.0 - pow(1.0 - VAL, 4.0)";
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInOutQuart:
                {
                    const entry = state._generateTernary("8.0 * VAL * VAL * VAL * VAL", "1.0 - pow(-2.0 * VAL + 2.0, 4.0) / 2.0", "VAL < 0.5");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInQuint:
                registeredFunction = `return v * v * v * v * v`;
                break;
            case CurveBlockTypes.EaseOutQuint:
                {
                    const entry = "1.0 - pow(1.0 - VAL, 5.0)";
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInOutQuint:
                {
                    const entry = state._generateTernary("16.0 * VAL * VAL * VAL * VAL * VAL", "1.0 - pow(-2.0 * VAL + 2.0, 5.0) / 2.0", "VAL < 0.5");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInExpo:
                {
                    const entry = state._generateTernary("0.0", "pow(2.0, 10.0 * VAL - 10.0)", "VAL == 0.0");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseOutExpo:
                {
                    const entry = state._generateTernary("1.0", "1.0 - pow(2.0, -10.0 * VAL)", "VAL == 1.0");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInOutExpo:
                {
                    const entry = state._generateTernary("0.0", state._generateTernary("1.0", state._generateTernary("pow(2.0, 20.0 * VAL - 10.0) / 2.0", "(2.0 - pow(2.0, -20.0 * VAL + 10.0)) / 2.0", "VAL < 0.5"), "VAL == 1.0"), "VAL == 0.0");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInCirc:
                {
                    const entry = "1.0 - sqrt(1.0 - pow(VAL, 2.0))";
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseOutCirc:
                {
                    const entry = "sqrt(1.0 - pow(VAL - 1.0, 2.0))";
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInOutCirc:
                {
                    const entry = state._generateTernary("(1.0 - sqrt(1.0 - pow(2.0 * VAL, 2.0))) / 2.0", "(sqrt(1.0 - pow(-2.0 * VAL + 2.0, 2.0)) + 1.0) / 2.0", "VAL < 0.5");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInBack:
                {
                    registeredFunction = "return 2.70158 * v * v * v - 1.70158 * v * v";
                    break;
                }
            case CurveBlockTypes.EaseOutBack:
                {
                    const entry = "2.70158 * pow(VAL - 1.0, 3.0) + 1.70158 * pow(VAL - 1.0, 2.0)";
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInOutBack:
                {
                    const entry = state._generateTernary("(pow(2.0 * VAL, 2.0) * ((3.5949095) * 2.0 * VAL - 2.5949095)) / 2.0", "(pow(2.0 * VAL - 2.0, 2.0) * (3.5949095 * (VAL * 2.0 - 2.0) + 3.5949095) + 2.0) / 2.0", "VAL < 0.5");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInElastic:
                {
                    const entry = state._generateTernary("0.0", state._generateTernary("1.0", "-pow(2.0, 10.0 * VAL - 10.0) * sin((VAL * 10.0 - 10.75) * ((2.0 * 3.1415) / 3.0))", "VAL == 1.0"), "VAL == 0.0");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseOutElastic:
                {
                    const entry = state._generateTernary("0.0", state._generateTernary("1.0", "pow(2.0, -10.0 * VAL) * sin((VAL * 10.0 - 0.75) * ((2.0 * 3.1415) / 3.0)) + 1.0", "VAL == 1.0"), "VAL == 0.0");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
            case CurveBlockTypes.EaseInOutElastic:
                {
                    const entry = state._generateTernary("0.0", state._generateTernary("1.0", state._generateTernary("-(pow(2.0, 20.0 * VAL - 10.0) * sin((20.0 * VAL - 11.125) * ((2.0 * 3.1415) / 4.5))) / 2.0", "(pow(2.0, -20.0 * VAL + 10.0) * sin((20.0 * VAL - 11.125) * ((2.0 * 3.1415) / 4.5))) / 2.0 + 1.0", "VAL < 0.5"), "VAL == 1.0"), "VAL == 0.0");
                    registeredFunction = this._duplicateVector(entry, inputType, isWGSL);
                    break;
                }
        }
        if (isWGSL) {
            state._emitFunction(registeredFunctionName, `fn ${registeredFunctionName}(v: ${inputType}) -> ${inputType}  {${registeredFunction};}\n`, "");
        } else {
            state._emitFunction(registeredFunctionName, `${inputType} ${registeredFunctionName}(${inputType} v) {${registeredFunction};}\n`, "");
        }
        state.compilationString += state._declareOutput(output) + ` = ${registeredFunctionName}(${this.input.associatedVariableName});\n`;
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.curveType = this.type;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.type = serializationObject.curveType;
    }
    _dumpPropertiesCode() {
        const codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.type = BABYLON.CurveBlockTypes.${CurveBlockTypes[this.type]};\n`;
        return codeString;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Type", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "EaseInSine",
                value: CurveBlockTypes.EaseInSine
            },
            {
                label: "EaseOutSine",
                value: CurveBlockTypes.EaseOutSine
            },
            {
                label: "EaseInOutSine",
                value: CurveBlockTypes.EaseInOutSine
            },
            {
                label: "EaseInQuad",
                value: CurveBlockTypes.EaseInQuad
            },
            {
                label: "EaseOutQuad",
                value: CurveBlockTypes.EaseOutQuad
            },
            {
                label: "EaseInOutQuad",
                value: CurveBlockTypes.EaseInOutQuad
            },
            {
                label: "EaseInCubic",
                value: CurveBlockTypes.EaseInCubic
            },
            {
                label: "EaseOutCubic",
                value: CurveBlockTypes.EaseOutCubic
            },
            {
                label: "EaseInOutCubic",
                value: CurveBlockTypes.EaseInOutCubic
            },
            {
                label: "EaseInQuart",
                value: CurveBlockTypes.EaseInQuart
            },
            {
                label: "EaseOutQuart",
                value: CurveBlockTypes.EaseOutQuart
            },
            {
                label: "EaseInOutQuart",
                value: CurveBlockTypes.EaseInOutQuart
            },
            {
                label: "EaseInQuint",
                value: CurveBlockTypes.EaseInQuint
            },
            {
                label: "EaseOutQuint",
                value: CurveBlockTypes.EaseOutQuint
            },
            {
                label: "EaseInOutQuint",
                value: CurveBlockTypes.EaseInOutQuint
            },
            {
                label: "EaseInExpo",
                value: CurveBlockTypes.EaseInExpo
            },
            {
                label: "EaseOutExpo",
                value: CurveBlockTypes.EaseOutExpo
            },
            {
                label: "EaseInOutExpo",
                value: CurveBlockTypes.EaseInOutExpo
            },
            {
                label: "EaseInCirc",
                value: CurveBlockTypes.EaseInCirc
            },
            {
                label: "EaseOutCirc",
                value: CurveBlockTypes.EaseOutCirc
            },
            {
                label: "EaseInOutCirc",
                value: CurveBlockTypes.EaseInOutCirc
            },
            {
                label: "EaseInBack",
                value: CurveBlockTypes.EaseInBack
            },
            {
                label: "EaseOutBack",
                value: CurveBlockTypes.EaseOutBack
            },
            {
                label: "EaseInOutBack",
                value: CurveBlockTypes.EaseInOutBack
            },
            {
                label: "EaseInElastic",
                value: CurveBlockTypes.EaseInElastic
            },
            {
                label: "EaseOutElastic",
                value: CurveBlockTypes.EaseOutElastic
            },
            {
                label: "EaseInOutElastic",
                value: CurveBlockTypes.EaseInOutElastic
            }
        ]
    })
], CurveBlock.prototype, "type", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CurveBlock", CurveBlock); //# sourceMappingURL=curveBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorConverterBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorConverterBlock",
    ()=>ColorConverterBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class ColorConverterBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ColorConverterBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("rgb ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true);
        this.registerInput("hsl ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
        this.registerOutput("hsl", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ColorConverterBlock";
    }
    /**
     * Gets the rgb value (input)
     */ get rgbIn() {
        return this._inputs[0];
    }
    /**
     * Gets the hsl value (input)
     */ get hslIn() {
        return this._inputs[1];
    }
    /**
     * Gets the rgb value (output)
     */ get rgbOut() {
        return this._outputs[0];
    }
    /**
     * Gets the hsl value (output)
     */ get hslOut() {
        return this._outputs[1];
    }
    _inputRename(name) {
        if (name === "rgb ") {
            return "rgbIn";
        }
        if (name === "hsl ") {
            return "hslIn";
        }
        return name;
    }
    _outputRename(name) {
        if (name === "rgb") {
            return "rgbOut";
        }
        if (name === "hsl") {
            return "hslOut";
        }
        return name;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const rgbInput = this.rgbIn;
        const hslInput = this.hslIn;
        const rbgOutput = this._outputs[0];
        const hslOutput = this._outputs[1];
        const vec3 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        let rgb2hsl = `
            vec3 rgb2hsl(vec3 color) {
                float r = color.r;
                float g = color.g;
                float b = color.b;

                float maxc = max(r, max(g, b));
                float minc = min(r, min(g, b));
                float h = 0.0;
                float s = 0.0;
                float l = (maxc + minc) / 2.0;

                if (maxc != minc) {
                    float d = maxc - minc;
                    if (l > 0.5) {
                        s = d / (2.0 - maxc - minc);
                    } else {
                        s = d / (maxc + minc);
                    }

                    if (maxc == r) {
                        float add = 0.0;
                        if (g < b) {
                            add = 6.0;
                        }
                        h = (g - b) / d + add;
                    } else if (maxc == g) {
                        h = (b - r) / d + 2.0;
                    } else if (maxc == b) {
                        h = (r - g) / d + 4.0;
                    }
                    h /= 6.0;
                }

                return vec3(h, s, l);
            }`;
        let hue2rgb = `
            float hue2rgb(float p, float q, float tt) {
                float t = tt;
                if (t < 0.0) {
                    t += 1.0;
                }
                if (t > 1.0) {
                    t -= 1.0;
                }
                if (t < 1.0/6.0) {
                    return p + (q - p) * 6.0 * t;
                }
                if (t < 1.0/2.0) {
                    return q;
                }
                if (t < 2.0/3.0) {
                    return p + (q - p) * (2.0/3.0 - t) * 6.0;
                }
                return p;
            }`;
        let hsl2rgb = `
            vec3 hsl2rgb(vec3 hsl) {
                float h = hsl.x;
                float s = hsl.y;
                float l = hsl.z;

                float r;
                float g;
                float b;

                if (s == 0.0) {
                    // Achromatic (grey)
                    r = l;
                    g = l;
                    b = l; 
                } else {
                    float q;
                
                    if (l < 0.5) {
                        q = l * (1.0 + s);
                    } else {
                        q = (l + s - l * s);
                    }

                    float p = 2.0 * l - q;

                    r = hue2rgb(p, q, h + 1.0/3.0);
                    g = hue2rgb(p, q, h);
                    b = hue2rgb(p, q, h - 1.0/3.0);
                }

                return vec3(r, g, b);
            }`;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            rgb2hsl = state._babylonSLtoWGSL(rgb2hsl);
            hue2rgb = state._babylonSLtoWGSL(hue2rgb);
            hsl2rgb = state._babylonSLtoWGSL(hsl2rgb);
        }
        state._emitFunction("rgb2hsl", rgb2hsl, "");
        state._emitFunction("hue2rgb", hue2rgb, "");
        state._emitFunction("hsl2rgb", hsl2rgb, "");
        if (rgbInput.isConnected) {
            if (rbgOutput.hasEndpoints) {
                state.compilationString += state._declareOutput(rbgOutput) + ` = ${rgbInput.associatedVariableName};\n`;
            }
            if (hslOutput.hasEndpoints) {
                state.compilationString += state._declareOutput(hslOutput) + ` = rgb2hsl(${rgbInput.associatedVariableName});\n`;
            }
        } else if (hslInput.isConnected) {
            if (rbgOutput.hasEndpoints) {
                state.compilationString += state._declareOutput(rbgOutput) + ` = hsl2rgb(${hslInput.associatedVariableName});\n`;
            }
            if (hslOutput.hasEndpoints) {
                state.compilationString += state._declareOutput(hslOutput) + ` = ${hslInput.associatedVariableName};\n`;
            }
        } else {
            if (rbgOutput.hasEndpoints) {
                state.compilationString += state._declareOutput(rbgOutput) + ` =  ${vec3}(0.);\n`;
            }
            if (hslOutput.hasEndpoints) {
                state.compilationString += state._declareOutput(hslOutput) + ` =  ${vec3}(0.);\n`;
            }
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ColorConverterBlock", ColorConverterBlock); //# sourceMappingURL=colorConverterBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/loopBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoopBlock",
    ()=>LoopBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class LoopBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new LoopBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        /**
         * Gets or sets number of iterations
         * Will be ignored if the iterations input is connected
         */ this.iterations = 4;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("iterations", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this.registerOutput("index", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("loopID", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, undefined, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("loopID", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , LoopBlock, "LoopBlock"));
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._outputs[0]._forPostBuild = true;
        this._outputs[2]._redirectedSource = this._inputs[0];
        this._outputs[1]._preventBubbleUp = true;
        this._outputs[2]._preventBubbleUp = true;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "LoopBlock";
    }
    /**
     * Gets the main input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the iterations input component
     */ get iterationsInput() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the index component which will be incremented at each iteration
     */ get index() {
        return this._outputs[1];
    }
    /**
     * Gets the loop ID component
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get loopID() {
        return this._outputs[2];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const index = this._outputs[1];
        const indexName = state._getFreeVariableName("index");
        const decl = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "var" : "int";
        const castFloat = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "f32" : "float";
        const castInt = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "i32" : "int";
        // Declare storage variable and store initial value
        state.compilationString += state._declareOutput(output) + ` = ${this.input.associatedVariableName};\n`;
        // Iterations
        const iterations = this.iterationsInput.isConnected ? `${castInt}(${this.iterationsInput.associatedVariableName})` : this.iterations;
        // Loop
        state.compilationString += `for (${decl} ${indexName} = 0; ${indexName} < ${iterations}; ${indexName}++){\n`;
        state.compilationString += `${state._declareOutput(index)} = ${castFloat}(${indexName});\n`;
        return this;
    }
    _postBuildBlock(state) {
        super._postBuildBlock(state);
        state.compilationString += `}\n`;
        return this;
    }
    _dumpPropertiesCode() {
        return super._dumpPropertiesCode() + `${this._codeVariableName}.iterations = ${this.iterations};\n`;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.iterations = this.iterations;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.iterations = serializationObject.iterations;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Iterations", 2 /* PropertyTypeForEdition.Int */ , undefined, {
        embedded: true
    })
], LoopBlock.prototype, "iterations", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.LoopBlock", LoopBlock); //# sourceMappingURL=loopBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/storageReadBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageReadBlock",
    ()=>StorageReadBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$loopBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/loopBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
;
;
;
;
;
;
class StorageReadBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new StorageReadBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("loopID", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, false, undefined, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("loopID", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$loopBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoopBlock"], "LoopBlock"));
        this.registerOutput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this._outputs[0]._linkedConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "StorageReadBlock";
    }
    /**
     * Gets the loop link component
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get loopID() {
        return this._inputs[0];
    }
    /**
     * Gets the value component
     */ get value() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const value = this.value;
        if (!this.loopID.isConnected) {
            return this;
        }
        const loopBlock = this.loopID.connectedPoint.ownerBlock;
        state.compilationString += state._declareOutput(value) + ` = ${loopBlock.output.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.StorageReadBlock", StorageReadBlock); //# sourceMappingURL=storageReadBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/storageWriteBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageWriteBlock",
    ()=>StorageWriteBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$loopBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/loopBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
;
;
;
;
;
;
class StorageWriteBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new StorageWriteBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("loopID", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, false, undefined, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("loopID", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$loopBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoopBlock"], "LoopBlock"));
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this._linkConnectionTypes(0, 1);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "StorageWriteBlock";
    }
    /**
     * Gets the loop link component
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get loopID() {
        return this._inputs[0];
    }
    /**
     * Gets the value component
     */ get value() {
        return this._inputs[1];
    }
    /** Gets a boolean indicating that this connection will be used in the fragment shader
     * @returns true if connected in fragment shader
     */ isConnectedInFragmentShader() {
        if (!this.loopID.isConnected) {
            return false;
        }
        const loopBlock = this.loopID.connectedPoint.ownerBlock;
        return loopBlock.output.isConnectedInFragmentShader;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const value = this.value;
        if (!this.loopID.isConnected) {
            return this;
        }
        const loopBlock = this.loopID.connectedPoint.ownerBlock;
        state.compilationString += `${loopBlock.output.associatedVariableName} = ${value.associatedVariableName};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.StorageWriteBlock", StorageWriteBlock); //# sourceMappingURL=storageWriteBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixSplitterBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatrixSplitterBlock",
    ()=>MatrixSplitterBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
class MatrixSplitterBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new MatrixSplitterBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this.registerOutput("row0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("row1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("row2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("row3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("col0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("col1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("col2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("col3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "MatrixSplitterBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the row0 output vector
     */ get row0() {
        return this._outputs[0];
    }
    /**
     * Gets the row1 output vector
     */ get row1() {
        return this._outputs[1];
    }
    /**
     * Gets the row2 output vector
     */ get row2() {
        return this._outputs[2];
    }
    /**
     * Gets the row3 output vector
     */ get row3() {
        return this._outputs[3];
    }
    /**
     * Gets the col0 output vector
     */ get col0() {
        return this._outputs[4];
    }
    /**
     * Gets the col1 output vector
     */ get col1() {
        return this._outputs[5];
    }
    /**
     * Gets the col2 output vector
     */ get col2() {
        return this._outputs[6];
    }
    /**
     * Gets the col3 output vector
     */ get col3() {
        return this._outputs[7];
    }
    _exportColumn(state, col, input, columnIndex) {
        const vec4 = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "vec4f" : "vec4";
        state.compilationString += state._declareOutput(col) + ` = ${vec4}(${input}[0][${columnIndex}], ${input}[1][${columnIndex}], ${input}[2][${columnIndex}], ${input}[3][${columnIndex}]);\n`;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const input = this._inputs[0].associatedVariableName;
        const row0 = this.row0;
        const row1 = this.row1;
        const row2 = this.row2;
        const row3 = this.row3;
        const col0 = this.col0;
        const col1 = this.col1;
        const col2 = this.col2;
        const col3 = this.col3;
        if (row0.hasEndpoints) {
            state.compilationString += state._declareOutput(row0) + ` = ${input}[0];\n`;
        }
        if (row1.hasEndpoints) {
            state.compilationString += state._declareOutput(row1) + ` = ${input}[1];\n`;
        }
        if (row2.hasEndpoints) {
            state.compilationString += state._declareOutput(row2) + ` = ${input}[2];\n`;
        }
        if (row3.hasEndpoints) {
            state.compilationString += state._declareOutput(row3) + ` = ${input}[3];\n`;
        }
        if (col0.hasEndpoints) {
            this._exportColumn(state, col0, input, 0);
        }
        if (col1.hasEndpoints) {
            this._exportColumn(state, col1, input, 1);
        }
        if (col2.hasEndpoints) {
            this._exportColumn(state, col2, input, 2);
        }
        if (col3.hasEndpoints) {
            this._exportColumn(state, col3, input, 3);
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MatrixSplitterBlock", MatrixSplitterBlock); //# sourceMappingURL=matrixSplitterBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/debugBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialDebugBlock",
    ()=>NodeMaterialDebugBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
;
;
;
;
;
;
class NodeMaterialDebugBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Gets or sets a boolean indicating that the block is active
     */ get isActive() {
        return this._isActive && this.debug.isConnected;
    }
    set isActive(value) {
        if (this._isActive === value) {
            return;
        }
        this._isActive = value;
    }
    /**
     * Creates a new NodeMaterialDebugBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, true, true);
        this._isActive = false;
        /** Gets or sets a boolean indicating if we want to render alpha when using a rgba input*/ this.renderAlpha = false;
        this.registerInput("debug", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.debug.excludedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
    }
    /** @internal */ get _isFinalOutputAndActive() {
        return this.isActive;
    }
    /** @internal */ get _hasPrecedence() {
        return true;
    }
    /**
     * Gets the rgba input component
     */ get debug() {
        return this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "NodeMaterialDebugBlock";
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (!this._isActive) {
            return this;
        }
        let outputString = "gl_FragColor";
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            outputString = "fragmentOutputs.color";
        }
        const debug = this.debug;
        if (!debug.connectedPoint) {
            return this;
        }
        if (debug.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
            state.compilationString += `${outputString}  = vec4${state.fSuffix}(${debug.associatedVariableName}, ${debug.associatedVariableName}, ${debug.associatedVariableName}, 1.0);\n`;
        } else if (debug.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2) {
            state.compilationString += `${outputString}  = vec4${state.fSuffix}(${debug.associatedVariableName}, 0., 1.0);\n`;
        } else if (debug.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 || debug.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3) {
            state.compilationString += `${outputString}  = vec4${state.fSuffix}(${debug.associatedVariableName}, 1.0);\n`;
        } else if (this.renderAlpha) {
            state.compilationString += `${outputString}  =${debug.associatedVariableName};\n`;
        } else {
            state.compilationString += `${outputString}  = vec4${state.fSuffix}(${debug.associatedVariableName}.rgb, 1.0);\n`;
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.isActive = this._isActive;
        serializationObject.renderAlpha = this.renderAlpha;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.isActive = serializationObject.isActive;
        this.renderAlpha = serializationObject.renderAlpha;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Render Alpha", 0 /* PropertyTypeForEdition.Boolean */ , undefined)
], NodeMaterialDebugBlock.prototype, "renderAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.NodeMaterialDebugBlock", NodeMaterialDebugBlock); //# sourceMappingURL=debugBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$multiplyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/multiplyBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$addBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/addBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$scaleBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/scaleBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$clampBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/clampBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$crossBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/crossBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$customBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/customBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$dotBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/dotBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$transformBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/transformBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$remapBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/remapBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$normalizeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/normalizeBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$trigonometryBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/trigonometryBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorMergerBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorMergerBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$vectorMergerBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/vectorMergerBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorSplitterBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$vectorSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/vectorSplitterBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$lerpBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/lerpBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$divideBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/divideBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$subtractBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/subtractBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$stepBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/stepBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$oneMinusBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/oneMinusBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$viewDirectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/viewDirectionBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$fresnelBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/fresnelBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$maxBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/maxBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$minBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/minBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$distanceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/distanceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$lengthBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/lengthBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$negateBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/negateBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$powBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/powBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$randomNumberBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/randomNumberBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$arcTan2Block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/arcTan2Block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$smoothStepBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/smoothStepBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$reciprocalBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/reciprocalBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$replaceColorBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/replaceColorBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$posterizeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/posterizeBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$waveBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/waveBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$gradientBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/gradientBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$nLerpBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/nLerpBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$worleyNoise3DBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/worleyNoise3DBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$simplexPerlin3DBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/simplexPerlin3DBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$normalBlendBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/normalBlendBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$rotate2dBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/rotate2dBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$reflectBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/reflectBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$refractBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/refractBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$desaturateBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/desaturateBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$modBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/modBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixBuilderBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixBuilderBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$conditionalBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/conditionalBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$cloudBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/cloudBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$voronoiNoiseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/voronoiNoiseBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$elbowBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/elbowBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$triPlanarBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/triPlanarBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$biPlanarBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/biPlanarBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixDeterminantBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixDeterminantBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixTransposeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixTransposeBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$meshAttributeExistsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/meshAttributeExistsBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$curveBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/curveBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorConverterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorConverterBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$loopBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/loopBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$storageReadBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/storageReadBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$storageWriteBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/storageWriteBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixSplitterBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$debugBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/debugBlock.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$addBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddBlock"],
    "AmbientOcclusionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientOcclusionBlock"],
    "AnimatedInputBlockTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"],
    "AnisotropyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnisotropyBlock"],
    "ArcTan2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$arcTan2Block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcTan2Block"],
    "BiPlanarBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$biPlanarBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiPlanarBlock"],
    "BonesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BonesBlock"],
    "ClampBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$clampBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampBlock"],
    "ClearCoatBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClearCoatBlock"],
    "ClipPlanesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClipPlanesBlock"],
    "CloudBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$cloudBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudBlock"],
    "ColorConverterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorConverterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorConverterBlock"],
    "ColorMergerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorMergerBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorMergerBlock"],
    "ColorSplitterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSplitterBlock"],
    "ConditionalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$conditionalBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConditionalBlock"],
    "ConditionalBlockConditions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$conditionalBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConditionalBlockConditions"],
    "CrossBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$crossBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrossBlock"],
    "CurrentScreenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentScreenBlock"],
    "CurveBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$curveBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurveBlock"],
    "CurveBlockTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$curveBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurveBlockTypes"],
    "CustomBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$customBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomBlock"],
    "DepthSourceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthSourceBlock"],
    "DerivativeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DerivativeBlock"],
    "DesaturateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$desaturateBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesaturateBlock"],
    "DiscardBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscardBlock"],
    "DistanceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$distanceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DistanceBlock"],
    "DivideBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$divideBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DivideBlock"],
    "DotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$dotBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotBlock"],
    "ElbowBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$elbowBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElbowBlock"],
    "FogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogBlock"],
    "FragCoordBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragCoordBlock"],
    "FragDepthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragDepthBlock"],
    "FragmentOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragmentOutputBlock"],
    "FragmentOutputBlockColorSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragmentOutputBlockColorSpace"],
    "FresnelBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$fresnelBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FresnelBlock"],
    "FrontFacingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontFacingBlock"],
    "GaussianBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianBlock"],
    "GaussianSplattingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianSplattingBlock"],
    "GradientBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$gradientBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientBlock"],
    "GradientBlockColorStep",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$gradientBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientBlockColorStep"],
    "HeightToNormalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeightToNormalBlock"],
    "ImageProcessingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageProcessingBlock"],
    "ImageSourceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"],
    "InputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"],
    "InstancesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancesBlock"],
    "IridescenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IridescenceBlock"],
    "LengthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$lengthBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LengthBlock"],
    "LerpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$lerpBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LerpBlock"],
    "LightBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightBlock"],
    "LightInformationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightInformationBlock"],
    "LoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$loopBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoopBlock"],
    "MatrixBuilderBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixBuilderBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixBuilderBlock"],
    "MatrixDeterminantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixDeterminantBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixDeterminantBlock"],
    "MatrixSplitterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixSplitterBlock"],
    "MatrixTransposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixTransposeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixTransposeBlock"],
    "MaxBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$maxBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxBlock"],
    "MeshAttributeExistsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$meshAttributeExistsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshAttributeExistsBlock"],
    "MeshAttributeExistsBlockTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$meshAttributeExistsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshAttributeExistsBlockTypes"],
    "MinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$minBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MinBlock"],
    "ModBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$modBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModBlock"],
    "MorphTargetsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MorphTargetsBlock"],
    "MultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$multiplyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplyBlock"],
    "NLerpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$nLerpBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLerpBlock"],
    "NegateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$negateBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NegateBlock"],
    "NodeMaterialDebugBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$debugBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialDebugBlock"],
    "NodeMaterialTeleportInBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialTeleportInBlock"],
    "NodeMaterialTeleportOutBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialTeleportOutBlock"],
    "NormalBlendBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$normalBlendBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalBlendBlock"],
    "NormalizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$normalizeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizeBlock"],
    "OneMinusBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$oneMinusBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneMinusBlock"],
    "PBRMetallicRoughnessBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRMetallicRoughnessBlock"],
    "ParticleBlendMultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleBlendMultiplyBlock"],
    "ParticleRampGradientBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleRampGradientBlock"],
    "ParticleTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleTextureBlock"],
    "PerturbNormalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerturbNormalBlock"],
    "PosterizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$posterizeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PosterizeBlock"],
    "PowBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$powBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PowBlock"],
    "PrePassOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrePassOutputBlock"],
    "PrePassTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrePassTextureBlock"],
    "RandomNumberBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$randomNumberBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomNumberBlock"],
    "ReciprocalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$reciprocalBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReciprocalBlock"],
    "ReflectBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$reflectBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectBlock"],
    "ReflectionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionBlock"],
    "ReflectionTextureBaseBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionTextureBaseBlock"],
    "ReflectionTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionTextureBlock"],
    "RefractBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$refractBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefractBlock"],
    "RefractionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefractionBlock"],
    "RemapBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$remapBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemapBlock"],
    "ReplaceColorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$replaceColorBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceColorBlock"],
    "Rotate2dBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$rotate2dBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rotate2dBlock"],
    "ScaleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$scaleBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScaleBlock"],
    "SceneDepthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneDepthBlock"],
    "ScreenSizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenSizeBlock"],
    "ScreenSpaceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenSpaceBlock"],
    "SfeModeDefine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SfeModeDefine"],
    "ShadowMapBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShadowMapBlock"],
    "SheenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheenBlock"],
    "SimplexPerlin3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$simplexPerlin3DBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimplexPerlin3DBlock"],
    "SmartFilterFragmentOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartFilterFragmentOutputBlock"],
    "SmartFilterTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartFilterTextureBlock"],
    "SmoothStepBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$smoothStepBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothStepBlock"],
    "SplatReaderBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplatReaderBlock"],
    "StepBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$stepBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBlock"],
    "StorageReadBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$storageReadBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageReadBlock"],
    "StorageWriteBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$storageWriteBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageWriteBlock"],
    "SubSurfaceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubSurfaceBlock"],
    "SubtractBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$subtractBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubtractBlock"],
    "TBNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TBNBlock"],
    "TextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureBlock"],
    "TransformBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$transformBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformBlock"],
    "TriPlanarBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$triPlanarBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriPlanarBlock"],
    "TrigonometryBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$trigonometryBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrigonometryBlock"],
    "TrigonometryBlockOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$trigonometryBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrigonometryBlockOperations"],
    "TwirlBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwirlBlock"],
    "VectorMergerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$vectorMergerBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VectorMergerBlock"],
    "VectorSplitterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$vectorSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VectorSplitterBlock"],
    "VertexOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexOutputBlock"],
    "ViewDirectionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$viewDirectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewDirectionBlock"],
    "VoronoiNoiseBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$voronoiNoiseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoronoiNoiseBlock"],
    "WaveBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$waveBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveBlock"],
    "WaveBlockKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$waveBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveBlockKind"],
    "WorleyNoise3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$worleyNoise3DBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorleyNoise3DBlock"],
    "bonesDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesDeclaration"],
    "bonesDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesDeclarationWGSL"],
    "bonesVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesVertex"],
    "bonesVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesVertexWGSL"],
    "bumpFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragment"],
    "bumpFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentFunctions"],
    "bumpFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentFunctionsWGSL"],
    "bumpFragmentMainFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentMainFunctions"],
    "bumpFragmentMainFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentMainFunctionsWGSL"],
    "bumpFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentWGSL"],
    "clipPlaneFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragment"],
    "clipPlaneFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentDeclaration"],
    "clipPlaneFragmentDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentDeclarationWGSL"],
    "clipPlaneFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentWGSL"],
    "clipPlaneVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertex"],
    "clipPlaneVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexDeclaration"],
    "clipPlaneVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexDeclarationWGSL"],
    "clipPlaneVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexWGSL"],
    "fogFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fogFragmentDeclaration"],
    "fogFragmentDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fogFragmentDeclarationWGSL"],
    "gaussianSplattingVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gaussianSplattingVertexDeclaration"],
    "gaussianSplattingVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gaussianSplattingVertexDeclarationWGSL"],
    "helperFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helperFunctions"],
    "helperFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helperFunctionsWGSL"],
    "imageProcessingDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageProcessingDeclaration"],
    "imageProcessingDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageProcessingDeclarationWGSL"],
    "imageProcessingFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageProcessingFunctions"],
    "imageProcessingFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageProcessingFunctionsWGSL"],
    "lightFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragment"],
    "lightFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragmentDeclaration"],
    "lightFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragmentWGSL"],
    "lightUboDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightUboDeclaration"],
    "lightUboDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightUboDeclarationWGSL"],
    "lightVxFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxFragmentDeclaration"],
    "lightVxUboDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxUboDeclaration"],
    "lightVxUboDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxUboDeclarationWGSL"],
    "lightsFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightsFragmentFunctions"],
    "lightsFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightsFragmentFunctionsWGSL"],
    "morphTargetsVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertex"],
    "morphTargetsVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexDeclaration"],
    "morphTargetsVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexDeclarationWGSL"],
    "morphTargetsVertexGlobal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobal"],
    "morphTargetsVertexGlobalDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalDeclaration"],
    "morphTargetsVertexGlobalDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalDeclarationWGSL"],
    "morphTargetsVertexGlobalWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalWGSL"],
    "morphTargetsVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexWGSL"],
    "packingFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packingFunctions"],
    "packingFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packingFunctionsWGSL"],
    "reflectionFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reflectionFunction"],
    "reflectionFunctionWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reflectionFunctionWGSL"],
    "shadowMapFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowMapFragment"],
    "shadowMapFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowMapFragmentWGSL"],
    "shadowMapVertexMetric",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowMapVertexMetric"],
    "shadowMapVertexMetricWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowMapVertexMetricWGSL"],
    "shadowsFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsFragmentFunctions"],
    "shadowsFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsFragmentFunctionsWGSL"],
    "shadowsVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsVertex"],
    "shadowsVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsVertexWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Teleport$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Teleport/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$multiplyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/multiplyBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$addBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/addBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$scaleBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/scaleBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$clampBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/clampBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$crossBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/crossBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$customBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/customBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$dotBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/dotBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$transformBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/transformBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$remapBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/remapBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$normalizeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/normalizeBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$trigonometryBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/trigonometryBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorMergerBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorMergerBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$vectorMergerBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/vectorMergerBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorSplitterBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$vectorSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/vectorSplitterBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$lerpBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/lerpBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$divideBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/divideBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$subtractBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/subtractBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$stepBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/stepBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$oneMinusBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/oneMinusBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$viewDirectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/viewDirectionBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$fresnelBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/fresnelBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$maxBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/maxBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$minBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/minBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$distanceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/distanceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$lengthBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/lengthBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$negateBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/negateBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$powBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/powBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$randomNumberBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/randomNumberBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$arcTan2Block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/arcTan2Block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$smoothStepBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/smoothStepBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$reciprocalBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/reciprocalBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$replaceColorBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/replaceColorBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$posterizeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/posterizeBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$waveBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/waveBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$gradientBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/gradientBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$nLerpBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/nLerpBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$worleyNoise3DBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/worleyNoise3DBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$simplexPerlin3DBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/simplexPerlin3DBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$normalBlendBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/normalBlendBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$rotate2dBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/rotate2dBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$reflectBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/reflectBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$refractBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/refractBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$desaturateBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/desaturateBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Particle$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Particle/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$modBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/modBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixBuilderBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixBuilderBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$conditionalBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/conditionalBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$cloudBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/cloudBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$voronoiNoiseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/voronoiNoiseBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$elbowBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/elbowBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$triPlanarBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/triPlanarBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$biPlanarBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/biPlanarBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixDeterminantBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixDeterminantBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixTransposeBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixTransposeBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$meshAttributeExistsBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/meshAttributeExistsBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$curveBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/curveBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$colorConverterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/colorConverterBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$loopBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/loopBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$storageReadBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/storageReadBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$storageWriteBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/storageWriteBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$matrixSplitterBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/matrixSplitterBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$debugBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/debugBlock.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Materials_Node_Blocks_90c06290._.js.map