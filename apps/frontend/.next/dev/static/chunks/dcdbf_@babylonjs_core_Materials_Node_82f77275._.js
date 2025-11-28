(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Defines the kind of connection point for node based material
 */ __turbopack_context__.s([
    "NodeMaterialBlockConnectionPointTypes",
    ()=>NodeMaterialBlockConnectionPointTypes
]);
var NodeMaterialBlockConnectionPointTypes;
(function(NodeMaterialBlockConnectionPointTypes) {
    /** Float */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Float"] = 1] = "Float";
    /** Int */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Int"] = 2] = "Int";
    /** Vector2 */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Vector2"] = 4] = "Vector2";
    /** Vector3 */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Vector3"] = 8] = "Vector3";
    /** Vector4 */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Vector4"] = 16] = "Vector4";
    /** Color3 */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Color3"] = 32] = "Color3";
    /** Color4 */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Color4"] = 64] = "Color4";
    /** Matrix */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Matrix"] = 128] = "Matrix";
    /** Custom object */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["Object"] = 256] = "Object";
    /** Detect type based on connection */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["AutoDetect"] = 1024] = "AutoDetect";
    /** Output type that will be defined by input type */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["BasedOnInput"] = 2048] = "BasedOnInput";
    /** Bitmask of all types */ NodeMaterialBlockConnectionPointTypes[NodeMaterialBlockConnectionPointTypes["All"] = 4095] = "All";
})(NodeMaterialBlockConnectionPointTypes || (NodeMaterialBlockConnectionPointTypes = {})); //# sourceMappingURL=nodeMaterialBlockConnectionPointTypes.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum used to define the target of a block
 */ __turbopack_context__.s([
    "NodeMaterialBlockTargets",
    ()=>NodeMaterialBlockTargets
]);
var NodeMaterialBlockTargets;
(function(NodeMaterialBlockTargets) {
    /** Vertex shader */ NodeMaterialBlockTargets[NodeMaterialBlockTargets["Vertex"] = 1] = "Vertex";
    /** Fragment shader */ NodeMaterialBlockTargets[NodeMaterialBlockTargets["Fragment"] = 2] = "Fragment";
    /** Neutral */ NodeMaterialBlockTargets[NodeMaterialBlockTargets["Neutral"] = 4] = "Neutral";
    /** Vertex and Fragment */ NodeMaterialBlockTargets[NodeMaterialBlockTargets["VertexAndFragment"] = 3] = "VertexAndFragment";
})(NodeMaterialBlockTargets || (NodeMaterialBlockTargets = {})); //# sourceMappingURL=nodeMaterialBlockTargets.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialModes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum used to define the material modes
 */ __turbopack_context__.s([
    "NodeMaterialModes",
    ()=>NodeMaterialModes
]);
var NodeMaterialModes;
(function(NodeMaterialModes) {
    /** Regular material */ NodeMaterialModes[NodeMaterialModes["Material"] = 0] = "Material";
    /** For post process */ NodeMaterialModes[NodeMaterialModes["PostProcess"] = 1] = "PostProcess";
    /** For particle system */ NodeMaterialModes[NodeMaterialModes["Particle"] = 2] = "Particle";
    /** For procedural texture */ NodeMaterialModes[NodeMaterialModes["ProceduralTexture"] = 3] = "ProceduralTexture";
    /** For gaussian splatting */ NodeMaterialModes[NodeMaterialModes["GaussianSplatting"] = 4] = "GaussianSplatting";
    /** For SFE */ NodeMaterialModes[NodeMaterialModes["SFE"] = 5] = "SFE";
})(NodeMaterialModes || (NodeMaterialModes = {})); //# sourceMappingURL=nodeMaterialModes.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum used to define system values e.g. values automatically provided by the system
 */ __turbopack_context__.s([
    "NodeMaterialSystemValues",
    ()=>NodeMaterialSystemValues
]);
var NodeMaterialSystemValues;
(function(NodeMaterialSystemValues) {
    /** World */ NodeMaterialSystemValues[NodeMaterialSystemValues["World"] = 1] = "World";
    /** View */ NodeMaterialSystemValues[NodeMaterialSystemValues["View"] = 2] = "View";
    /** Projection */ NodeMaterialSystemValues[NodeMaterialSystemValues["Projection"] = 3] = "Projection";
    /** ViewProjection */ NodeMaterialSystemValues[NodeMaterialSystemValues["ViewProjection"] = 4] = "ViewProjection";
    /** WorldView */ NodeMaterialSystemValues[NodeMaterialSystemValues["WorldView"] = 5] = "WorldView";
    /** WorldViewProjection */ NodeMaterialSystemValues[NodeMaterialSystemValues["WorldViewProjection"] = 6] = "WorldViewProjection";
    /** CameraPosition */ NodeMaterialSystemValues[NodeMaterialSystemValues["CameraPosition"] = 7] = "CameraPosition";
    /** Fog Color */ NodeMaterialSystemValues[NodeMaterialSystemValues["FogColor"] = 8] = "FogColor";
    /** Delta time */ NodeMaterialSystemValues[NodeMaterialSystemValues["DeltaTime"] = 9] = "DeltaTime";
    /** Camera parameters */ NodeMaterialSystemValues[NodeMaterialSystemValues["CameraParameters"] = 10] = "CameraParameters";
    /** Material alpha */ NodeMaterialSystemValues[NodeMaterialSystemValues["MaterialAlpha"] = 11] = "MaterialAlpha";
    /** Projection */ NodeMaterialSystemValues[NodeMaterialSystemValues["ProjectionInverse"] = 12] = "ProjectionInverse";
})(NodeMaterialSystemValues || (NodeMaterialSystemValues = {})); //# sourceMappingURL=nodeMaterialSystemValues.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointMode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum defining the mode of a NodeMaterialBlockConnectionPoint
 */ __turbopack_context__.s([
    "NodeMaterialBlockConnectionPointMode",
    ()=>NodeMaterialBlockConnectionPointMode
]);
var NodeMaterialBlockConnectionPointMode;
(function(NodeMaterialBlockConnectionPointMode) {
    /** Value is an uniform */ NodeMaterialBlockConnectionPointMode[NodeMaterialBlockConnectionPointMode["Uniform"] = 0] = "Uniform";
    /** Value is a mesh attribute */ NodeMaterialBlockConnectionPointMode[NodeMaterialBlockConnectionPointMode["Attribute"] = 1] = "Attribute";
    /** Value is a varying between vertex and fragment shaders */ NodeMaterialBlockConnectionPointMode[NodeMaterialBlockConnectionPointMode["Varying"] = 2] = "Varying";
    /** Mode is undefined */ NodeMaterialBlockConnectionPointMode[NodeMaterialBlockConnectionPointMode["Undefined"] = 3] = "Undefined";
})(NodeMaterialBlockConnectionPointMode || (NodeMaterialBlockConnectionPointMode = {})); //# sourceMappingURL=nodeMaterialBlockConnectionPointMode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialModes.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialBlockConnectionPointMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointMode"],
    "NodeMaterialBlockConnectionPointTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"],
    "NodeMaterialBlockTargets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"],
    "NodeMaterialModes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialModes"],
    "NodeMaterialSystemValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointMode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointMode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialModes.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBuildState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialBuildState",
    ()=>NodeMaterialBuildState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLShaderProcessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLShaderProcessors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
;
;
class NodeMaterialBuildState {
    constructor(){
        /** Gets or sets a boolean indicating if the current state can emit uniform buffers */ this.supportUniformBuffers = false;
        /**
         * Gets the list of emitted attributes
         */ this.attributes = [];
        /**
         * Gets the list of emitted uniforms
         */ this.uniforms = [];
        /**
         * Gets the list of emitted constants
         */ this.constants = [];
        /**
         * Gets the list of emitted samplers
         */ this.samplers = [];
        /**
         * Gets the list of emitted functions
         */ this.functions = {};
        /**
         * Gets the list of emitted extensions
         */ this.extensions = {};
        /**
         * Gets the list of emitted prePass outputs - if using the prepass
         */ this.prePassOutput = {};
        /**
         * Gets the list of emitted counters
         */ this.counters = {};
        /** @internal */ this._terminalBlocks = new Set();
        /** @internal */ this._attributeDeclaration = "";
        /** @internal */ this._uniformDeclaration = "";
        /** @internal */ this._constantDeclaration = "";
        /** @internal */ this._samplerDeclaration = "";
        /** @internal */ this._varyingTransfer = "";
        /** @internal */ this._injectAtEnd = "";
        /** @internal */ this._injectAtTop = "";
        /** @internal */ this._customEntryHeader = "";
        /** @internal */ this._repeatableContentAnchorIndex = 0;
        /** @internal */ this._builtCompilationString = "";
        /**
         * Gets the emitted compilation strings
         */ this.compilationString = "";
    }
    /**
     * Gets the current shader language to use
     */ get shaderLanguage() {
        return this.sharedData.nodeMaterial.shaderLanguage;
    }
    /** Gets suffix to add behind type casting */ get fSuffix() {
        return this.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "f" : "";
    }
    /**
     * Returns the processed, compiled shader code
     * @param defines defines to use for the shader processing
     * @returns the raw shader code used by the engine
     */ async getProcessedShaderAsync(defines) {
        if (!this._builtCompilationString) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("getProcessedShaderAsync: Shader not built yet.");
            return "";
        }
        const engine = this.sharedData.nodeMaterial.getScene().getEngine();
        const options = {
            defines: defines.split("\n"),
            indexParameters: undefined,
            isFragment: this.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment,
            shouldUseHighPrecisionShader: engine._shouldUseHighPrecisionShader,
            processor: engine._getShaderProcessor(this.shaderLanguage),
            supportsUniformBuffers: engine.supportsUniformBuffers,
            shadersRepository: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].GetShadersRepository(this.shaderLanguage),
            includesShadersStore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].GetIncludesShadersStore(this.shaderLanguage),
            version: (engine.version * 100).toString(),
            platformName: engine.shaderPlatformName,
            processingContext: null,
            isNDCHalfZRange: engine.isNDCHalfZRange,
            useReverseDepthBuffer: engine.useReverseDepthBuffer
        };
        // Export WebGL2 shaders with WebGL1 syntax for max compatibility
        if (!engine.isWebGPU && engine.version > 1.0) {
            options.processor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLShaderProcessors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLShaderProcessor"]();
        }
        return await new Promise((resolve)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Process"])(this._builtCompilationString, options, (migratedCode, _)=>{
                resolve(migratedCode);
            }, engine);
        });
    }
    /**
     * Finalize the compilation strings
     * @param state defines the current compilation state
     */ finalize(state) {
        const emitComments = state.sharedData.emitComments;
        const isFragmentMode = this.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment;
        let entryPointString = `\n${emitComments ? "//Entry point\n" : ""}`;
        if (this._customEntryHeader) {
            entryPointString += this._customEntryHeader;
        } else if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            if (isFragmentMode) {
                entryPointString += `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {\n${this.sharedData.varyingInitializationsFragment}`;
            } else {
                entryPointString += `@vertex\nfn main(input: VertexInputs) -> FragmentInputs{\n`;
            }
        } else {
            entryPointString += `void main(void) {\n`;
        }
        this.compilationString = entryPointString + this.compilationString;
        if (this._constantDeclaration) {
            this.compilationString = `\n${emitComments ? "//Constants\n" : ""}${this._constantDeclaration}\n${this.compilationString}`;
        }
        let functionCode = "";
        for(const functionName in this.functions){
            functionCode += this.functions[functionName] + `\n`;
        }
        this.compilationString = `\n${functionCode}\n${this.compilationString}`;
        if (!isFragmentMode && this._varyingTransfer) {
            this.compilationString = `${this.compilationString}\n${this._varyingTransfer}`;
        }
        if (this._injectAtEnd) {
            this.compilationString = `${this.compilationString}\n${this._injectAtEnd}`;
        }
        this.compilationString = `${this.compilationString}\n}`;
        if (this.sharedData.varyingDeclaration) {
            this.compilationString = `\n${emitComments ? "//Varyings\n" : ""}${isFragmentMode ? this.sharedData.varyingDeclarationFragment : this.sharedData.varyingDeclaration}\n${this.compilationString}`;
        }
        if (this._samplerDeclaration) {
            this.compilationString = `\n${emitComments ? "//Samplers\n" : ""}${this._samplerDeclaration}\n${this.compilationString}`;
        }
        if (this._uniformDeclaration) {
            this.compilationString = `\n${emitComments ? "//Uniforms\n" : ""}${this._uniformDeclaration}\n${this.compilationString}`;
        }
        if (this._attributeDeclaration && !isFragmentMode) {
            this.compilationString = `\n${emitComments ? "//Attributes\n" : ""}${this._attributeDeclaration}\n${this.compilationString}`;
        }
        if (this.shaderLanguage !== 1 /* ShaderLanguage.WGSL */ ) {
            this.compilationString = "precision highp float;\n" + this.compilationString;
            this.compilationString = "#if defined(WEBGL2) || defined(WEBGPU)\nprecision highp sampler2DArray;\n#endif\n" + this.compilationString;
            if (isFragmentMode) {
                this.compilationString = "#if defined(PREPASS)\r\n#extension GL_EXT_draw_buffers : require\r\nlayout(location = 0) out highp vec4 glFragData[SCENE_MRT_COUNT];\r\nhighp vec4 gl_FragColor;\r\n#endif\r\n" + this.compilationString;
            }
            for(const extensionName in this.extensions){
                const extension = this.extensions[extensionName];
                this.compilationString = `\n${extension}\n${this.compilationString}`;
            }
        }
        if (this._injectAtTop) {
            this.compilationString = `${this._injectAtTop}\n${this.compilationString}`;
        }
        this._builtCompilationString = this.compilationString;
    }
    /** @internal */ get _repeatableContentAnchor() {
        return `###___ANCHOR${this._repeatableContentAnchorIndex++}___###`;
    }
    /**
     * @internal
     */ _getFreeVariableName(prefix) {
        prefix = this.sharedData.formatConfig.formatVariablename(prefix);
        if (this.sharedData.variableNames[prefix] === undefined) {
            this.sharedData.variableNames[prefix] = 0;
            // Check reserved words
            if (prefix === "output" || prefix === "texture") {
                return prefix + this.sharedData.variableNames[prefix];
            }
            return prefix;
        } else {
            this.sharedData.variableNames[prefix]++;
        }
        return prefix + this.sharedData.variableNames[prefix];
    }
    /**
     * @internal
     */ _getFreeDefineName(prefix) {
        if (this.sharedData.defineNames[prefix] === undefined) {
            this.sharedData.defineNames[prefix] = 0;
        } else {
            this.sharedData.defineNames[prefix]++;
        }
        return prefix + this.sharedData.defineNames[prefix];
    }
    /**
     * @internal
     */ _excludeVariableName(name) {
        this.sharedData.variableNames[name] = 0;
    }
    /**
     * @internal
     */ _emit2DSampler(name, define = "", force = false, annotation, unsignedSampler, precision) {
        if (this.samplers.indexOf(name) < 0 || force) {
            if (define) {
                this._samplerDeclaration += `#if ${define}\n`;
            }
            if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                const unsignedSamplerPrefix = unsignedSampler ? "u" : "f";
                this._samplerDeclaration += `var ${name + `Sampler`}: sampler;\n`;
                this._samplerDeclaration += `var ${name}: texture_2d<${unsignedSamplerPrefix}32>;\n`;
            } else {
                const unsignedSamplerPrefix = unsignedSampler ? "u" : "";
                const precisionDecl = precision ?? "";
                this._samplerDeclaration += `uniform ${precisionDecl} ${unsignedSamplerPrefix}sampler2D ${name}; ${annotation ? annotation : ""}\n`;
            }
            if (define) {
                this._samplerDeclaration += `#endif\n`;
            }
            if (!force) {
                this.samplers.push(name);
            }
        }
    }
    /**
     * @internal
     */ _emitCubeSampler(name, define = "", force = false) {
        if (this.samplers.indexOf(name) < 0 || force) {
            if (define) {
                this._samplerDeclaration += `#if ${define}\n`;
            }
            if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                this._samplerDeclaration += `var ${name + `Sampler`}: sampler;\n`;
                this._samplerDeclaration += `var ${name}: texture_cube<f32>;\n`;
            } else {
                this._samplerDeclaration += `uniform samplerCube ${name};\n`;
            }
            if (define) {
                this._samplerDeclaration += `#endif\n`;
            }
            if (!force) {
                this.samplers.push(name);
            }
        }
    }
    /**
     * @internal
     */ _emit2DArraySampler(name) {
        if (this.samplers.indexOf(name) < 0) {
            if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                this._samplerDeclaration += `var ${name + `Sampler`}: sampler;\n`;
                this._samplerDeclaration += `var ${name}: texture_2d_array<f32>;\n`;
            } else {
                this._samplerDeclaration += `uniform sampler2DArray ${name};\n`;
            }
            this.samplers.push(name);
        }
    }
    /**
     * @internal
     */ _getGLType(type) {
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float:
                return "float";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Int:
                return "int";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2:
                return "vec2";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                return "vec3";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4:
                return "vec4";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix:
                return "mat4";
        }
        return "";
    }
    /**
     * @internal
     */ _getShaderType(type) {
        const isWGSL = this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float:
                return isWGSL ? "f32" : "float";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Int:
                return isWGSL ? "i32" : "int";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2:
                return isWGSL ? "vec2f" : "vec2";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                return isWGSL ? "vec3f" : "vec3";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4:
                return isWGSL ? "vec4f" : "vec4";
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix:
                return isWGSL ? "mat4x4f" : "mat4";
        }
        return "";
    }
    /**
     * @internal
     */ _emitExtension(name, extension, define = "") {
        if (this.extensions[name]) {
            return;
        }
        if (define) {
            extension = `#if ${define}\n${extension}\n#endif`;
        }
        this.extensions[name] = extension;
    }
    /**
     * @internal
     */ _emitFunction(name, code, comments) {
        if (this.functions[name]) {
            return;
        }
        if (this.sharedData.emitComments) {
            code = comments + `\n` + code;
        }
        this.functions[name] = code;
    }
    /**
     * @internal
     */ _emitCodeFromInclude(includeName, comments, options) {
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].GetIncludesShadersStore(this.shaderLanguage);
        if (options && options.repeatKey) {
            return `#include<${includeName}>${options.substitutionVars ? "(" + options.substitutionVars + ")" : ""}[0..${options.repeatKey}]\n`;
        }
        let code = store[includeName] + "\n";
        if (this.sharedData.emitComments) {
            code = comments + `\n` + code;
        }
        if (!options) {
            return code;
        }
        if (options.replaceStrings) {
            for(let index = 0; index < options.replaceStrings.length; index++){
                const replaceString = options.replaceStrings[index];
                code = code.replace(replaceString.search, replaceString.replace);
            }
        }
        return code;
    }
    /**
     * @internal
     */ _emitFunctionFromInclude(includeName, comments, options, storeKey = "") {
        const key = includeName + storeKey;
        if (this.functions[key]) {
            return;
        }
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].GetIncludesShadersStore(this.shaderLanguage);
        if (!options || !options.removeAttributes && !options.removeUniforms && !options.removeVaryings && !options.removeIfDef && !options.replaceStrings) {
            if (options && options.repeatKey) {
                this.functions[key] = `#include<${includeName}>${options.substitutionVars ? "(" + options.substitutionVars + ")" : ""}[0..${options.repeatKey}]\n`;
            } else {
                this.functions[key] = `#include<${includeName}>${options?.substitutionVars ? "(" + options?.substitutionVars + ")" : ""}\n`;
            }
            if (this.sharedData.emitComments) {
                this.functions[key] = comments + `\n` + this.functions[key];
            }
            return;
        }
        this.functions[key] = store[includeName];
        if (this.sharedData.emitComments) {
            this.functions[key] = comments + `\n` + this.functions[key];
        }
        if (options.removeIfDef) {
            this.functions[key] = this.functions[key].replace(/^\s*?#ifdef.+$/gm, "");
            this.functions[key] = this.functions[key].replace(/^\s*?#endif.*$/gm, "");
            this.functions[key] = this.functions[key].replace(/^\s*?#else.*$/gm, "");
            this.functions[key] = this.functions[key].replace(/^\s*?#elif.*$/gm, "");
        }
        if (options.removeAttributes) {
            this.functions[key] = this.functions[key].replace(/\s*?attribute .+?;/g, "\n");
        }
        if (options.removeUniforms) {
            this.functions[key] = this.functions[key].replace(/\s*?uniform .*?;/g, "\n");
        }
        if (options.removeVaryings) {
            this.functions[key] = this.functions[key].replace(/\s*?(varying|in) .+?;/g, "\n");
        }
        if (options.replaceStrings) {
            for(let index = 0; index < options.replaceStrings.length; index++){
                const replaceString = options.replaceStrings[index];
                this.functions[key] = this.functions[key].replace(replaceString.search, replaceString.replace);
            }
        }
    }
    /**
     * @internal
     */ _registerTempVariable(name) {
        if (this.sharedData.temps.indexOf(name) !== -1) {
            return false;
        }
        this.sharedData.temps.push(name);
        return true;
    }
    _emitDefineStart(define, notDefine = false) {
        let code = "";
        if (define) {
            if (define.startsWith("defined(")) {
                code = `#if ${define}\n`;
            } else {
                code = `${notDefine ? "#ifndef" : "#ifdef"} ${define}\n`;
            }
        }
        return code;
    }
    _emitDefineEnd(define) {
        return define ? `#endif\n` : "";
    }
    /**
     * @internal
     */ _emitVaryingFromString(name, type, define = "", notDefine = false) {
        if (this.sharedData.varyings.indexOf(name) !== -1) {
            return false;
        }
        this.sharedData.varyings.push(name);
        const shaderType = this._getShaderType(type);
        const emitCode = (forFragment = false)=>{
            let code = this._emitDefineStart(define, notDefine);
            if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                switch(shaderType){
                    case "i32":
                    case "f32":
                    case "vec2f":
                    case "vec3f":
                    case "vec4f":
                        code += `varying ${name}: ${shaderType};\n`;
                        if (forFragment) {
                            code += `var<private> ${name}: ${shaderType};\n`;
                            this.sharedData.varyingInitializationsFragment += this._emitDefineStart(define, notDefine) + `${name} = fragmentInputs.${name};\n` + this._emitDefineEnd(define);
                        }
                        break;
                    case "mat4x4f":
                        // We can't pass a matrix as a varying in WGSL, so we need to split it into 4 vectors
                        code += `varying ${name}_r0: vec4f;\n`;
                        code += `varying ${name}_r1: vec4f;\n`;
                        code += `varying ${name}_r2: vec4f;\n`;
                        code += `varying ${name}_r3: vec4f;\n`;
                        if (forFragment) {
                            code += `var<private> ${name}: mat4x4f;\n`;
                            this.sharedData.varyingInitializationsFragment += this._emitDefineStart(define, notDefine) + `${name} = mat4x4f(fragmentInputs.${name}_r0, fragmentInputs.${name}_r1, fragmentInputs.${name}_r2, fragmentInputs.${name}_r3);\n` + this._emitDefineEnd(define);
                        }
                        break;
                    default:
                        code += `varying ${name}: ${shaderType};\n`;
                        break;
                }
            } else {
                code += `varying ${shaderType} ${name};\n`;
            }
            code += this._emitDefineEnd(define);
            return code;
        };
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            this.sharedData.varyingDeclaration += emitCode(false);
            this.sharedData.varyingDeclarationFragment += emitCode(true);
        } else {
            const code = emitCode();
            this.sharedData.varyingDeclaration += code;
            this.sharedData.varyingDeclarationFragment += code;
        }
        return true;
    }
    /**
     * @internal
     */ _getVaryingName(name) {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return (this.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment ? "vertexOutputs." : "fragmentInputs.") + name;
        }
        return name;
    }
    /**
     * @internal
     */ _emitUniformFromString(name, type, define = "", notDefine = false) {
        if (this.uniforms.indexOf(name) !== -1) {
            return;
        }
        this.uniforms.push(name);
        if (define) {
            if (define.startsWith("defined(")) {
                this._uniformDeclaration += `#if ${define}\n`;
            } else {
                this._uniformDeclaration += `${notDefine ? "#ifndef" : "#ifdef"} ${define}\n`;
            }
        }
        if (this.sharedData.formatConfig.getUniformAnnotation) {
            this._uniformDeclaration += this.sharedData.formatConfig.getUniformAnnotation(name);
        }
        const shaderType = this._getShaderType(type);
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            this._uniformDeclaration += `uniform ${name}: ${shaderType};\n`;
        } else {
            this._uniformDeclaration += `uniform ${shaderType} ${name};\n`;
        }
        if (define) {
            this._uniformDeclaration += `#endif\n`;
        }
    }
    /**
     * @internal
     */ _generateTernary(trueStatement, falseStatement, condition) {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `select(${falseStatement}, ${trueStatement}, ${condition})`;
        }
        return `(${condition}) ? ${trueStatement} : ${falseStatement}`;
    }
    /**
     * @internal
     */ _emitFloat(value) {
        if (value.toString() === value.toFixed(0)) {
            return `${value}.0`;
        }
        return value.toString();
    }
    /**
     * @internal
     */ _declareOutput(output, isConst) {
        return this._declareLocalVar(output.associatedVariableName, output.type, isConst);
    }
    /**
     * @internal
     */ _declareLocalVar(name, type, isConst, isVarPrivate) {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `${isConst ? "const" : "var" + (isVarPrivate ? "<private>" : "")} ${name}: ${this._getShaderType(type)}`;
        } else {
            return `${isConst ? "const " : ""}${this._getShaderType(type)} ${name}`;
        }
    }
    /**
     * @internal
     */ _samplerCubeFunc() {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return "textureSample";
        }
        return "textureCube";
    }
    /**
     * @internal
     */ _samplerFunc() {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return "textureSample";
        }
        return "texture2D";
    }
    /**
     * @internal
     */ _samplerLODFunc() {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return "textureSampleLevel";
        }
        return "texture2DLodEXT";
    }
    _toLinearSpace(output) {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            if (output.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 || output.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3) {
                return `toLinearSpaceVec3(${output.associatedVariableName})`;
            }
            return `toLinearSpace(${output.associatedVariableName})`;
        }
        return `toLinearSpace(${output.associatedVariableName})`;
    }
    /**
     * @internal
     */ _generateTextureSample(uv, samplerName) {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `${this._samplerFunc()}(${samplerName},${samplerName + `Sampler`}, ${uv})`;
        }
        return `${this._samplerFunc()}(${samplerName}, ${uv})`;
    }
    /**
     * @internal
     */ _generateTextureSampleLOD(uv, samplerName, lod) {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `${this._samplerLODFunc()}(${samplerName},${samplerName + `Sampler`}, ${uv}, ${lod})`;
        }
        return `${this._samplerLODFunc()}(${samplerName}, ${uv}, ${lod})`;
    }
    /**
     * @internal
     */ _generateTextureSampleCube(uv, samplerName) {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `${this._samplerCubeFunc()}(${samplerName},${samplerName + `Sampler`}, ${uv})`;
        }
        return `${this._samplerCubeFunc()}(${samplerName}, ${uv})`;
    }
    /**
     * @internal
     */ _generateTextureSampleCubeLOD(uv, samplerName, lod) {
        if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return `${this._samplerCubeFunc()}(${samplerName},${samplerName + `Sampler`}, ${uv}, ${lod})`;
        }
        return `${this._samplerCubeFunc()}(${samplerName}, ${uv}, ${lod})`;
    }
    _convertVariableDeclarationToWGSL(type, dest, source) {
        return source.replace(new RegExp(`(${type})\\s+(\\w+)`, "g"), `var $2: ${dest}`);
    }
    _convertVariableConstructorsToWGSL(type, dest, source) {
        return source.replace(new RegExp(`(${type})\\(`, "g"), ` ${dest}(`);
    }
    _convertOutParametersToWGSL(source) {
        return source.replace(new RegExp(`out\\s+var\\s+(\\w+)\\s*:\\s*(\\w+)`, "g"), `$1: ptr<function, $2>`);
    }
    _convertTernaryOperandsToWGSL(source) {
        return source.replace(new RegExp(`\\[(.*?)\\?(.*?):(.*)\\]`, "g"), (match, condition, trueCase, falseCase)=>`select(${falseCase}, ${trueCase}, ${condition})`);
    }
    _convertModOperatorsToWGSL(source) {
        return source.replace(new RegExp(`mod\\((.+?),\\s*(.+?)\\)`, "g"), (match, left, right)=>`((${left})%(${right}))`);
    }
    _convertConstToWGSL(source) {
        return source.replace(new RegExp(`const var`, "g"), `const`);
    }
    _convertInnerFunctionsToWGSL(source) {
        return source.replace(new RegExp(`inversesqrt`, "g"), `inverseSqrt`);
    }
    _convertFunctionsToWGSL(source) {
        const regex = /var\s+(\w+)\s*:\s*(\w+)\((.*)\)/g;
        let match;
        while((match = regex.exec(source)) !== null){
            const funcName = match[1];
            const funcType = match[2];
            const params = match[3]; // All parameters as a single string
            // Processing the parameters to match 'name: type' format
            const formattedParams = params.replace(/var\s/g, "");
            // Constructing the final output string
            source = source.replace(match[0], `fn ${funcName}(${formattedParams}) -> ${funcType}`);
        }
        return source;
    }
    _babylonSLtoWGSL(code) {
        // variable declarations
        code = this._convertVariableDeclarationToWGSL("void", "voidnull", code);
        code = this._convertVariableDeclarationToWGSL("bool", "bool", code);
        code = this._convertVariableDeclarationToWGSL("int", "i32", code);
        code = this._convertVariableDeclarationToWGSL("uint", "u32", code);
        code = this._convertVariableDeclarationToWGSL("float", "f32", code);
        code = this._convertVariableDeclarationToWGSL("vec2", "vec2f", code);
        code = this._convertVariableDeclarationToWGSL("vec3", "vec3f", code);
        code = this._convertVariableDeclarationToWGSL("vec4", "vec4f", code);
        code = this._convertVariableDeclarationToWGSL("mat2", "mat2x2f", code);
        code = this._convertVariableDeclarationToWGSL("mat3", "mat3x3f", code);
        code = this._convertVariableDeclarationToWGSL("mat4", "mat4x4f", code);
        // Type constructors
        code = this._convertVariableConstructorsToWGSL("float", "f32", code);
        code = this._convertVariableConstructorsToWGSL("vec2", "vec2f", code);
        code = this._convertVariableConstructorsToWGSL("vec3", "vec3f", code);
        code = this._convertVariableConstructorsToWGSL("vec4", "vec4f", code);
        code = this._convertVariableConstructorsToWGSL("mat2", "mat2x2f", code);
        code = this._convertVariableConstructorsToWGSL("mat3", "mat3x3f", code);
        code = this._convertVariableConstructorsToWGSL("mat4", "mat4x4f", code);
        // Ternary operands
        code = this._convertTernaryOperandsToWGSL(code);
        // Mod operators
        code = this._convertModOperatorsToWGSL(code);
        // Const
        code = this._convertConstToWGSL(code);
        // Inner functions
        code = this._convertInnerFunctionsToWGSL(code);
        // Out paramters
        code = this._convertOutParametersToWGSL(code);
        code = code.replace(/\[\*\]/g, "*");
        // Functions
        code = this._convertFunctionsToWGSL(code);
        // Remove voidnull
        code = code.replace(/\s->\svoidnull/g, "");
        // Derivatives
        code = code.replace(/dFdx/g, "dpdx");
        code = code.replace(/dFdy/g, "dpdy");
        return code;
    }
    _convertTernaryOperandsToGLSL(source) {
        return source.replace(new RegExp(`\\[(.+?)\\?(.+?):(.+)\\]`, "g"), (match, condition, trueCase, falseCase)=>`${condition} ? ${trueCase} : ${falseCase}`);
    }
    _babylonSLtoGLSL(code) {
        /** Remove BSL specifics */ code = code.replace(/\[\*\]/g, "");
        code = this._convertTernaryOperandsToGLSL(code);
        return code;
    }
} //# sourceMappingURL=nodeMaterialBuildState.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBuildStateSharedData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialBuildStateSharedData",
    ()=>NodeMaterialBuildStateSharedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
class NodeMaterialBuildStateSharedData {
    /** Creates a new shared data */ constructor(){
        /**
         * Gets the list of emitted varyings
         */ this.temps = [];
        /**
         * Gets the list of emitted varyings
         */ this.varyings = [];
        /**
         * Gets the varying declaration string (for vertex shader)
         */ this.varyingDeclaration = "";
        /**
         * Gets the varying declaration string (for fragment shader)
         * This is potentially different from varyingDeclaration only in WebGPU
         */ this.varyingDeclarationFragment = "";
        /**
         * Gets the varying initialization string (for fragment shader)
         * Only used in WebGPU, to reconstruct the varying values from the vertex shader if their types is mat4x4f
         */ this.varyingInitializationsFragment = "";
        /**
         * Input blocks
         */ this.inputBlocks = [];
        /**
         * Input blocks
         */ this.textureBlocks = [];
        /**
         * Bindable blocks (Blocks that need to set data to the effect)
         */ this.bindableBlocks = [];
        /**
         * Bindable blocks (Blocks that need to set data to the effect) that will always be called (by bindForSubMesh), contrary to bindableBlocks that won't be called if _mustRebind() returns false
         */ this.forcedBindableBlocks = [];
        /**
         * List of blocks that can provide a compilation fallback
         */ this.blocksWithFallbacks = [];
        /**
         * List of blocks that can provide a define update
         */ this.blocksWithDefines = [];
        /**
         * List of blocks that can provide a repeatable content
         */ this.repeatableContentBlocks = [];
        /**
         * List of blocks that can provide a dynamic list of uniforms
         */ this.dynamicUniformBlocks = [];
        /**
         * List of blocks that can block the isReady function for the material
         */ this.blockingBlocks = [];
        /**
         * Gets the list of animated inputs
         */ this.animatedInputs = [];
        /**
         * Configurations used to format the generated code
         */ this.formatConfig = {
            getUniformAnnotation: null,
            formatVariablename: (name)=>name.replace(/[^a-zA-Z_]+/g, "")
        };
        /** List of emitted variables */ this.variableNames = {};
        /** List of emitted defines */ this.defineNames = {};
        /**
         * Gets the compilation hints emitted at compilation time
         */ this.hints = {
            needWorldViewMatrix: false,
            needWorldViewProjectionMatrix: false,
            needAlphaBlending: false,
            needAlphaTesting: false
        };
        /**
         * List of compilation checks
         */ this.checks = {
            emitVertex: false,
            emitFragment: false,
            notConnectedNonOptionalInputs: new Array(),
            customErrors: new Array()
        };
        /**
         * Is vertex program allowed to be empty?
         */ this.allowEmptyVertexProgram = false;
        // Exclude usual attributes from free variable names
        this.variableNames["position"] = 0;
        this.variableNames["normal"] = 0;
        this.variableNames["tangent"] = 0;
        this.variableNames["uv"] = 0;
        this.variableNames["uv2"] = 0;
        this.variableNames["uv3"] = 0;
        this.variableNames["uv4"] = 0;
        this.variableNames["uv5"] = 0;
        this.variableNames["uv6"] = 0;
        this.variableNames["color"] = 0;
        this.variableNames["matricesIndices"] = 0;
        this.variableNames["matricesWeights"] = 0;
        this.variableNames["matricesIndicesExtra"] = 0;
        this.variableNames["matricesWeightsExtra"] = 0;
        this.variableNames["diffuseBase"] = 0;
        this.variableNames["specularBase"] = 0;
        this.variableNames["worldPos"] = 0;
        this.variableNames["shadow"] = 0;
        this.variableNames["view"] = 0;
        // Exclude known varyings
        this.variableNames["vTBN"] = 0;
        // Exclude defines
        this.defineNames["MAINUV0"] = 0;
        this.defineNames["MAINUV1"] = 0;
        this.defineNames["MAINUV2"] = 0;
        this.defineNames["MAINUV3"] = 0;
        this.defineNames["MAINUV4"] = 0;
        this.defineNames["MAINUV5"] = 0;
        this.defineNames["MAINUV6"] = 0;
        this.defineNames["MAINUV7"] = 0;
    }
    /**
     * Push a new error to the build state, avoiding exceptions that can break the build process
     * @param message defines the error message to push
     */ raiseBuildError(message) {
        if (this.checks.customErrors.indexOf(message) !== -1) {
            this.checks.customErrors.push(message);
        }
    }
    /**
     * Emits console errors and exceptions if there is a failing check
     * @returns true if all checks pass
     */ emitErrors() {
        let errorMessage = "";
        if (!this.checks.emitVertex && !this.allowEmptyVertexProgram) {
            errorMessage += "NodeMaterial does not have a vertex output. You need to at least add a block that generates a position value.\n";
        }
        if (!this.checks.emitFragment) {
            errorMessage += "NodeMaterial does not have a fragment output. You need to at least add a block that generates a color value.\n";
        }
        for (const notConnectedInput of this.checks.notConnectedNonOptionalInputs){
            errorMessage += `input ${notConnectedInput.name} from block ${notConnectedInput.ownerBlock.name}[${notConnectedInput.ownerBlock.getClassName()}] is not connected and is not optional.\n`;
        }
        for (const customError of this.checks.customErrors){
            errorMessage += customError + "\n";
        }
        if (errorMessage) {
            errorMessage = "Node material build failed: \n" + errorMessage;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(errorMessage);
            this.nodeMaterial.onBuildErrorObservable.notifyObservers(errorMessage);
            return false;
        }
        return true;
    }
} //# sourceMappingURL=nodeMaterialBuildStateSharedData.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialConnectionPoint",
    ()=>NodeMaterialConnectionPoint,
    "NodeMaterialConnectionPointCompatibilityStates",
    ()=>NodeMaterialConnectionPointCompatibilityStates,
    "NodeMaterialConnectionPointDirection",
    ()=>NodeMaterialConnectionPointDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
;
;
;
var NodeMaterialConnectionPointCompatibilityStates;
(function(NodeMaterialConnectionPointCompatibilityStates) {
    /** Points are compatibles */ NodeMaterialConnectionPointCompatibilityStates[NodeMaterialConnectionPointCompatibilityStates["Compatible"] = 0] = "Compatible";
    /** Points are incompatible because of their types */ NodeMaterialConnectionPointCompatibilityStates[NodeMaterialConnectionPointCompatibilityStates["TypeIncompatible"] = 1] = "TypeIncompatible";
    /** Points are incompatible because of their targets (vertex vs fragment) */ NodeMaterialConnectionPointCompatibilityStates[NodeMaterialConnectionPointCompatibilityStates["TargetIncompatible"] = 2] = "TargetIncompatible";
    /** Points are incompatible because they are in the same hierarchy **/ NodeMaterialConnectionPointCompatibilityStates[NodeMaterialConnectionPointCompatibilityStates["HierarchyIssue"] = 3] = "HierarchyIssue";
})(NodeMaterialConnectionPointCompatibilityStates || (NodeMaterialConnectionPointCompatibilityStates = {}));
var NodeMaterialConnectionPointDirection;
(function(NodeMaterialConnectionPointDirection) {
    /** Input */ NodeMaterialConnectionPointDirection[NodeMaterialConnectionPointDirection["Input"] = 0] = "Input";
    /** Output */ NodeMaterialConnectionPointDirection[NodeMaterialConnectionPointDirection["Output"] = 1] = "Output";
})(NodeMaterialConnectionPointDirection || (NodeMaterialConnectionPointDirection = {}));
class NodeMaterialConnectionPoint {
    /**
     * Checks if two types are equivalent
     * @param type1 type 1 to check
     * @param type2 type 2 to check
     * @returns true if both types are equivalent, else false
     */ static AreEquivalentTypes(type1, type2) {
        switch(type1){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                {
                    if (type2 === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3) {
                        return true;
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4:
                {
                    if (type2 === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4) {
                        return true;
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3:
                {
                    if (type2 === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3) {
                        return true;
                    }
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4:
                {
                    if (type2 === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4) {
                        return true;
                    }
                    break;
                }
        }
        return false;
    }
    /**
     * Boolean used to provide visual clue to users when some ports are not active in the current block configuration
     */ get isInactive() {
        return this._isInactive;
    }
    get _connectedPoint() {
        return this._connectedPointBackingField;
    }
    set _connectedPoint(value) {
        if (this._connectedPointBackingField === value) {
            return;
        }
        this._connectedPointTypeChangedObserver?.remove();
        this._updateTypeDependentState(()=>this._connectedPointBackingField = value);
        if (this._connectedPointBackingField) {
            this._connectedPointTypeChangedObserver = this._connectedPointBackingField.onTypeChangedObservable.add(()=>{
                this._notifyTypeChanged();
            });
        }
    }
    /** @internal */ get _typeConnectionSource() {
        return this._typeConnectionSourceBackingField;
    }
    /** @internal */ set _typeConnectionSource(value) {
        if (this._typeConnectionSourceBackingField === value) {
            return;
        }
        this._typeConnectionSourceTypeChangedObserver?.remove();
        this._updateTypeDependentState(()=>this._typeConnectionSourceBackingField = value);
        if (this._typeConnectionSourceBackingField) {
            this._typeConnectionSourceTypeChangedObserver = this._typeConnectionSourceBackingField.onTypeChangedObservable.add(()=>{
                this._notifyTypeChanged();
            });
        }
    }
    /** @internal */ get _defaultConnectionPointType() {
        return this._defaultConnectionPointTypeBackingField;
    }
    /** @internal */ set _defaultConnectionPointType(value) {
        this._updateTypeDependentState(()=>this._defaultConnectionPointTypeBackingField = value);
    }
    /** @internal */ get _linkedConnectionSource() {
        return this._linkedConnectionSourceBackingField;
    }
    /** @internal */ set _linkedConnectionSource(value) {
        if (this._linkedConnectionSourceBackingField === value) {
            return;
        }
        this._linkedConnectionSourceTypeChangedObserver?.remove();
        this._updateTypeDependentState(()=>this._linkedConnectionSourceBackingField = value);
        this._isMainLinkSource = false;
        if (this._linkedConnectionSourceBackingField) {
            this._linkedConnectionSourceTypeChangedObserver = this._linkedConnectionSourceBackingField.onTypeChangedObservable.add(()=>{
                this._notifyTypeChanged();
            });
        }
    }
    /** Gets the direction of the point */ get direction() {
        return this._direction;
    }
    /**
     * Gets the declaration variable name in the shader
     */ get declarationVariableName() {
        if (this._ownerBlock.isInput) {
            return this._ownerBlock.declarationVariableName;
        }
        if ((!this._enforceAssociatedVariableName || !this._associatedVariableName) && this._connectedPoint) {
            return this._connectedPoint.declarationVariableName;
        }
        return this._associatedVariableName;
    }
    /**
     * Gets or sets the associated variable name in the shader
     */ get associatedVariableName() {
        if (this._ownerBlock.isInput) {
            return this._ownerBlock.associatedVariableName;
        }
        if ((!this._enforceAssociatedVariableName || !this._associatedVariableName) && this._connectedPoint) {
            return this._connectedPoint.associatedVariableName;
        }
        return this._associatedVariableName;
    }
    set associatedVariableName(value) {
        this._associatedVariableName = value;
    }
    /** Get the inner type (ie AutoDetect for instance instead of the inferred one) */ get innerType() {
        if (this._linkedConnectionSource && !this._isMainLinkSource && this._linkedConnectionSource.isConnected) {
            return this.type;
        }
        return this._type;
    }
    /**
     * Gets or sets the connection point type (default is float)
     */ get type() {
        if (this._type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect) {
            if (this._ownerBlock.isInput) {
                return this._ownerBlock.type;
            }
            if (this._connectedPoint) {
                return this._connectedPoint.type;
            }
            if (this._linkedConnectionSource) {
                if (this._linkedConnectionSource.isConnected) {
                    if (this._linkedConnectionSource.connectedPoint._redirectedSource && this._linkedConnectionSource.connectedPoint._redirectedSource.isConnected) {
                        return this._linkedConnectionSource.connectedPoint._redirectedSource.type;
                    }
                    return this._linkedConnectionSource.type;
                }
                if (this._linkedConnectionSource._defaultConnectionPointType) {
                    return this._linkedConnectionSource._defaultConnectionPointType;
                }
            }
            if (this._defaultConnectionPointType) {
                return this._defaultConnectionPointType;
            }
        }
        if (this._type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput) {
            if (this._typeConnectionSource) {
                if (!this._typeConnectionSource.isConnected && this._defaultConnectionPointType) {
                    return this._defaultConnectionPointType;
                }
                return this._typeConnectionSource.type;
            } else if (this._defaultConnectionPointType) {
                return this._defaultConnectionPointType;
            }
        }
        return this._type;
    }
    set type(value) {
        this._updateTypeDependentState(()=>this._type = value);
    }
    /** Gets or sets the target of that connection point */ get target() {
        if (!this._prioritizeVertex || !this._ownerBlock) {
            return this._target;
        }
        if (this._target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
            return this._target;
        }
        if (this._ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
    }
    set target(value) {
        this._target = value;
    }
    /**
     * Gets a boolean indicating that the current point is connected to another NodeMaterialBlock
     */ get isConnected() {
        return this.connectedPoint !== null || this.hasEndpoints;
    }
    /**
     * Gets a boolean indicating that the current point is connected to an input block
     */ get isConnectedToInputBlock() {
        return this.connectedPoint !== null && this.connectedPoint.ownerBlock.isInput;
    }
    /**
     * Gets a the connected input block (if any)
     */ get connectInputBlock() {
        if (!this.isConnectedToInputBlock) {
            return null;
        }
        return this.connectedPoint.ownerBlock;
    }
    /** Get the other side of the connection (if any) */ get connectedPoint() {
        return this._connectedPoint;
    }
    /** Get the block that owns this connection point */ get ownerBlock() {
        return this._ownerBlock;
    }
    /** Get the block connected on the other side of this connection (if any) */ get sourceBlock() {
        if (!this._connectedPoint) {
            return null;
        }
        return this._connectedPoint.ownerBlock;
    }
    /** Get the block connected on the endpoints of this connection (if any) */ get connectedBlocks() {
        if (this._endpoints.length === 0) {
            return [];
        }
        return this._endpoints.map((e)=>e.ownerBlock);
    }
    /** Gets the list of connected endpoints */ get endpoints() {
        return this._endpoints;
    }
    /** Gets a boolean indicating if that output point is connected to at least one input */ get hasEndpoints() {
        return this._endpoints && this._endpoints.length > 0;
    }
    /** Gets a boolean indicating that this connection has a path to the vertex output*/ get isDirectlyConnectedToVertexOutput() {
        if (!this.hasEndpoints) {
            return false;
        }
        for (const endpoint of this._endpoints){
            if (endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
                return true;
            }
            if (endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral || endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
                if (endpoint.ownerBlock.outputs.some((o)=>o.isDirectlyConnectedToVertexOutput)) {
                    return true;
                }
            }
        }
        return false;
    }
    /** Gets a boolean indicating that this connection will be used in the vertex shader */ get isConnectedInVertexShader() {
        if (this.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return true;
        }
        if (!this.hasEndpoints) {
            return false;
        }
        for (const endpoint of this._endpoints){
            if (endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
                return true;
            }
            if (endpoint.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
                return true;
            }
            if (endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral || endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
                if (endpoint.ownerBlock.outputs.some((o)=>o.isConnectedInVertexShader)) {
                    return true;
                }
            }
        }
        return false;
    }
    /** Gets a boolean indicating that this connection will be used in the fragment shader */ get isConnectedInFragmentShader() {
        if (this.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            return true;
        }
        if (!this.hasEndpoints) {
            return false;
        }
        for (const endpoint of this._endpoints){
            if (endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
                return true;
            }
            if (endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral || endpoint.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
                if (endpoint.ownerBlock.isConnectedInFragmentShader()) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Creates a block suitable to be used as an input for this input point.
     * If null is returned, a block based on the point type will be created.
     * @returns The returned string parameter is the name of the output point of NodeMaterialBlock (first parameter of the returned array) that can be connected to the input
     */ createCustomInputBlock() {
        return null;
    }
    /**
     * Creates a new connection point
     * @param name defines the connection point name
     * @param ownerBlock defines the block hosting this connection point
     * @param direction defines the direction of the connection point
     */ constructor(name, ownerBlock, direction){
        /** @internal */ this._isInactive = false;
        /** @internal */ this._preventBubbleUp = false;
        this._connectedPointBackingField = null;
        this._endpoints = new Array();
        /** @internal */ this._redirectedSource = null;
        this._typeConnectionSourceBackingField = null;
        this._defaultConnectionPointTypeBackingField = null;
        /** @internal */ this._isMainLinkSource = false;
        this._linkedConnectionSourceBackingField = null;
        /** @internal */ this._acceptedConnectionPointType = null;
        this._type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float;
        /** @internal */ this._enforceAssociatedVariableName = false;
        /** @internal */ this._forPostBuild = false;
        /** Indicates that this connection point needs dual validation before being connected to another point */ this.needDualDirectionValidation = false;
        /**
         * Gets or sets the additional types supported by this connection point
         */ this.acceptedConnectionPointTypes = [];
        /**
         * Gets or sets the additional types excluded by this connection point
         */ this.excludedConnectionPointTypes = [];
        /**
         * Observable triggered when this point is connected
         */ this.onConnectionObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered when this point is disconnected
         */ this.onDisconnectionObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered when the type of the connection point is changed
         */ this.onTypeChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._isTypeChangeObservableNotifying = false;
        /**
         * Gets or sets a boolean indicating that this connection point is exposed on a frame
         */ this.isExposedOnFrame = false;
        /**
         * Gets or sets number indicating the position that the port is exposed to on a frame
         */ this.exposedPortPosition = -1;
        /** @internal */ this._prioritizeVertex = false;
        this._target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
        this._ownerBlock = ownerBlock;
        this.name = name;
        this._direction = direction;
    }
    /**
     * Gets the current class name e.g. "NodeMaterialConnectionPoint"
     * @returns the class name
     */ getClassName() {
        return "NodeMaterialConnectionPoint";
    }
    /**
     * Gets a boolean indicating if the current point can be connected to another point
     * @param connectionPoint defines the other connection point
     * @returns a boolean
     */ canConnectTo(connectionPoint) {
        return this.checkCompatibilityState(connectionPoint) === 0 /* NodeMaterialConnectionPointCompatibilityStates.Compatible */ ;
    }
    /**
     * Gets a number indicating if the current point can be connected to another point
     * @param connectionPoint defines the other connection point
     * @returns a number defining the compatibility state
     */ checkCompatibilityState(connectionPoint) {
        const ownerBlock = this._ownerBlock;
        const otherBlock = connectionPoint.ownerBlock;
        if (ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            // Let's check we are not going reverse
            if (otherBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
                return 2 /* NodeMaterialConnectionPointCompatibilityStates.TargetIncompatible */ ;
            }
            for (const output of otherBlock.outputs){
                if (output.ownerBlock.target != __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral && output.isConnectedInVertexShader) {
                    return 2 /* NodeMaterialConnectionPointCompatibilityStates.TargetIncompatible */ ;
                }
            }
        }
        if (this.type !== connectionPoint.type && connectionPoint.innerType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect) {
            // Equivalents
            if (NodeMaterialConnectionPoint.AreEquivalentTypes(this.type, connectionPoint.type)) {
                return 0 /* NodeMaterialConnectionPointCompatibilityStates.Compatible */ ;
            }
            // Accepted types
            if (connectionPoint.acceptedConnectionPointTypes && connectionPoint.acceptedConnectionPointTypes.indexOf(this.type) !== -1 || connectionPoint._acceptedConnectionPointType && NodeMaterialConnectionPoint.AreEquivalentTypes(connectionPoint._acceptedConnectionPointType.type, this.type)) {
                return 0 /* NodeMaterialConnectionPointCompatibilityStates.Compatible */ ;
            } else {
                return 1 /* NodeMaterialConnectionPointCompatibilityStates.TypeIncompatible */ ;
            }
        }
        // Excluded
        if (connectionPoint.excludedConnectionPointTypes && connectionPoint.excludedConnectionPointTypes.indexOf(this.type) !== -1) {
            return 1 /* NodeMaterialConnectionPointCompatibilityStates.TypeIncompatible */ ;
        }
        // Check hierarchy
        let targetBlock = otherBlock;
        let sourceBlock = ownerBlock;
        if (this.direction === 0 /* NodeMaterialConnectionPointDirection.Input */ ) {
            targetBlock = ownerBlock;
            sourceBlock = otherBlock;
        }
        if (targetBlock.isAnAncestorOf(sourceBlock)) {
            return 3 /* NodeMaterialConnectionPointCompatibilityStates.HierarchyIssue */ ;
        }
        return 0 /* NodeMaterialConnectionPointCompatibilityStates.Compatible */ ;
    }
    /**
     * Connect this point to another connection point
     * @param connectionPoint defines the other connection point
     * @param ignoreConstraints defines if the system will ignore connection type constraints (default is false)
     * @returns the current connection point
     */ connectTo(connectionPoint, ignoreConstraints = false) {
        if (!ignoreConstraints && !this.canConnectTo(connectionPoint)) {
            // eslint-disable-next-line no-throw-literal
            throw `Cannot connect these two connectors. source: "${this.ownerBlock.name}".${this.name}, target: "${connectionPoint.ownerBlock.name}".${connectionPoint.name}`;
        }
        this._endpoints.push(connectionPoint);
        connectionPoint._connectedPoint = this;
        this._enforceAssociatedVariableName = false;
        this.onConnectionObservable.notifyObservers(connectionPoint);
        connectionPoint.onConnectionObservable.notifyObservers(this);
        return this;
    }
    /**
     * Disconnect this point from one of his endpoint
     * @param endpoint defines the other connection point
     * @returns the current connection point
     */ disconnectFrom(endpoint) {
        const index = this._endpoints.indexOf(endpoint);
        if (index === -1) {
            return this;
        }
        this._endpoints.splice(index, 1);
        endpoint._connectedPoint = null;
        this._enforceAssociatedVariableName = false;
        endpoint._enforceAssociatedVariableName = false;
        this.onDisconnectionObservable.notifyObservers(endpoint);
        endpoint.onDisconnectionObservable.notifyObservers(this);
        return this;
    }
    /**
     * Fill the list of excluded connection point types with all types other than those passed in the parameter
     * @param mask Types (ORed values of NodeMaterialBlockConnectionPointTypes) that are allowed, and thus will not be pushed to the excluded list
     */ addExcludedConnectionPointFromAllowedTypes(mask) {
        let bitmask = 1;
        while(bitmask < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].All){
            if (!(mask & bitmask)) {
                this.excludedConnectionPointTypes.push(bitmask);
            }
            bitmask = bitmask << 1;
        }
    }
    /**
     * Serializes this point in a JSON representation
     * @param isInput defines if the connection point is an input (default is true)
     * @returns the serialized point object
     */ serialize(isInput = true) {
        const serializationObject = {};
        serializationObject.name = this.name;
        if (this.displayName) {
            serializationObject.displayName = this.displayName;
        }
        if (isInput && this.connectedPoint) {
            serializationObject.inputName = this.name;
            serializationObject.targetBlockId = this.connectedPoint.ownerBlock.uniqueId;
            serializationObject.targetConnectionName = this.connectedPoint.name;
            serializationObject.isExposedOnFrame = true;
            serializationObject.exposedPortPosition = this.exposedPortPosition;
        }
        if (this.isExposedOnFrame || this.exposedPortPosition >= 0) {
            serializationObject.isExposedOnFrame = true;
            serializationObject.exposedPortPosition = this.exposedPortPosition;
        }
        return serializationObject;
    }
    /**
     * Release resources
     */ dispose() {
        this.onConnectionObservable.clear();
        this.onDisconnectionObservable.clear();
        this.onTypeChangedObservable.clear();
        this._connectedPoint = null;
        this._typeConnectionSource = null;
        this._linkedConnectionSource = null;
    }
    _updateTypeDependentState(update) {
        const previousType = this.type;
        update();
        if (this.type !== previousType) {
            this._notifyTypeChanged();
        }
    }
    _notifyTypeChanged() {
        // Disallow re-entrancy
        if (this._isTypeChangeObservableNotifying) {
            return;
        }
        this._isTypeChangeObservableNotifying = true;
        this.onTypeChangedObservable.notifyObservers(this.type);
        this._isTypeChangeObservableNotifying = false;
    }
} //# sourceMappingURL=nodeMaterialBlockConnectionPoint.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialBlock",
    ()=>NodeMaterialBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$uniqueIdGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/uniqueIdGenerator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class NodeMaterialBlock {
    /** @internal */ get _isFinalOutputAndActive() {
        return this._isFinalOutput;
    }
    /** @internal */ get _hasPrecedence() {
        return false;
    }
    /**
     * Gets the name of the block
     */ get name() {
        return this._name;
    }
    /**
     * Gets a boolean indicating that this block has is code ready to be used
     */ get codeIsReady() {
        return this._codeIsReady;
    }
    /**
     * Sets the name of the block. Will check if the name is valid.
     */ set name(newName) {
        if (!this.validateBlockName(newName)) {
            return;
        }
        this._name = newName;
    }
    /**
     * Gets a boolean indicating that this block can only be used once per NodeMaterial
     */ get isUnique() {
        return this._isUnique;
    }
    /**
     * Gets a boolean indicating that this block is an end block (e.g. it is generating a system value)
     */ get isFinalMerger() {
        return this._isFinalMerger;
    }
    /**
     * Gets a boolean indicating that this block is an input (e.g. it sends data to the shader)
     */ get isInput() {
        return this._isInput;
    }
    /**
     * Gets a boolean indicating if this block is a teleport out
     */ get isTeleportOut() {
        return this._isTeleportOut;
    }
    /**
     * Gets a boolean indicating if this block is a teleport in
     */ get isTeleportIn() {
        return this._isTeleportIn;
    }
    /**
     * Gets a boolean indicating if this block is a loop
     */ get isLoop() {
        return this._isLoop;
    }
    /**
     * Gets or sets the build Id
     */ get buildId() {
        return this._buildId;
    }
    set buildId(value) {
        this._buildId = value;
    }
    /**
     * Gets or sets the target of the block
     */ get target() {
        return this._target;
    }
    set target(value) {
        if ((this._target & value) !== 0) {
            return;
        }
        this._target = value;
    }
    /**
     * Gets the list of input points
     */ get inputs() {
        return this._inputs;
    }
    /** Gets the list of output points */ get outputs() {
        return this._outputs;
    }
    /**
     * Find an input by its name
     * @param name defines the name of the input to look for
     * @returns the input or null if not found
     */ getInputByName(name) {
        const filter = this._inputs.filter((e)=>e.name === name);
        if (filter.length) {
            return filter[0];
        }
        return null;
    }
    /**
     * Find an output by its name
     * @param name defines the name of the output to look for
     * @returns the output or null if not found
     */ getOutputByName(name) {
        const filter = this._outputs.filter((e)=>e.name === name);
        if (filter.length) {
            return filter[0];
        }
        return null;
    }
    /**
     * Creates a new NodeMaterialBlock
     * @param name defines the block name
     * @param target defines the target of that block (Vertex by default)
     * @param isFinalMerger defines a boolean indicating that this block is an end block (e.g. it is generating a system value). Default is false
     * @param isFinalOutput defines a boolean indicating that this block is generating a final output and no other block should be generated after
     */ constructor(name, target = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex, isFinalMerger = false, isFinalOutput = false){
        this._isFinalMerger = false;
        this._isInput = false;
        this._isLoop = false;
        this._isTeleportOut = false;
        this._isTeleportIn = false;
        this._name = "";
        this._isUnique = false;
        this._codeIsReady = true;
        /** @internal */ this._isFinalOutput = false;
        /**
         * Observable raised when the block code is ready (if the code loading is async)
         */ this.onCodeIsReadyObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Gets or sets a boolean indicating that only one input can be connected at a time */ this.inputsAreExclusive = false;
        /** @internal */ this._codeVariableName = "";
        /** @internal */ this._inputs = new Array();
        /** @internal */ this._outputs = new Array();
        /**
         * Gets or sets the comments associated with this block
         */ this.comments = "";
        /** Gets or sets a boolean indicating that this input can be edited in the Inspector (false by default) */ this.visibleInInspector = false;
        /** Gets or sets a boolean indicating that this input can be edited from a collapsed frame */ this.visibleOnFrame = false;
        this._target = target;
        this._originalTargetIsNeutral = target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral;
        this._isFinalMerger = isFinalMerger;
        this._isFinalOutput = isFinalOutput;
        switch(this.getClassName()){
            case "InputBlock":
                this._isInput = true;
                break;
            case "NodeMaterialTeleportOutBlock":
                this._isTeleportOut = true;
                break;
            case "NodeMaterialTeleportInBlock":
                this._isTeleportIn = true;
                break;
            case "LoopBlock":
                this._isLoop = true;
                break;
        }
        this._name = name;
        this.uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$uniqueIdGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniqueIdGenerator"].UniqueId;
    }
    /** @internal */ _setInitialTarget(target) {
        this._target = target;
        // marked as read only
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        this._originalTargetIsNeutral = target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral;
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initialize(state) {
    // Do nothing
    }
    /**
     * Bind data to effect. Will only be called for blocks with isBindable === true
     * @param effect defines the effect to bind data to
     * @param nodeMaterial defines the hosting NodeMaterial
     * @param mesh defines the mesh that will be rendered
     * @param subMesh defines the submesh that will be rendered
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bind(effect, nodeMaterial, mesh, subMesh) {
    // Do nothing
    }
    _writeVariable(currentPoint) {
        const connectionPoint = currentPoint.connectedPoint;
        if (connectionPoint) {
            return `${currentPoint.associatedVariableName}`;
        }
        return `0.`;
    }
    _writeFloat(value) {
        let stringVersion = value.toString();
        if (stringVersion.indexOf(".") === -1) {
            stringVersion += ".0";
        }
        return `${stringVersion}`;
    }
    /**
     * Gets the current class name e.g. "NodeMaterialBlock"
     * @returns the class name
     */ getClassName() {
        return "NodeMaterialBlock";
    }
    /** Gets a boolean indicating that this connection will be used in the fragment shader
     * @returns true if connected in fragment shader
     */ isConnectedInFragmentShader() {
        return this.outputs.some((o)=>o.isConnectedInFragmentShader);
    }
    /**
     * Register a new input. Must be called inside a block constructor
     * @param name defines the connection point name
     * @param type defines the connection point type
     * @param isOptional defines a boolean indicating that this input can be omitted
     * @param target defines the target to use to limit the connection point (will be VertexAndFragment by default)
     * @param point an already created connection point. If not provided, create a new one
     * @returns the current block
     */ registerInput(name, type, isOptional = false, target, point) {
        point = point ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPoint"](name, this, 0 /* NodeMaterialConnectionPointDirection.Input */ );
        point.type = type;
        point.isOptional = isOptional;
        if (target) {
            point.target = target;
        }
        this._inputs.push(point);
        return this;
    }
    /**
     * Register a new output. Must be called inside a block constructor
     * @param name defines the connection point name
     * @param type defines the connection point type
     * @param target defines the target to use to limit the connection point (will be VertexAndFragment by default)
     * @param point an already created connection point. If not provided, create a new one
     * @returns the current block
     */ registerOutput(name, type, target, point) {
        point = point ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPoint"](name, this, 1 /* NodeMaterialConnectionPointDirection.Output */ );
        point.type = type;
        if (target) {
            point.target = target;
        }
        this._outputs.push(point);
        return this;
    }
    /**
     * Will return the first available input e.g. the first one which is not an uniform or an attribute
     * @param forOutput defines an optional connection point to check compatibility with
     * @returns the first available input or null
     */ getFirstAvailableInput(forOutput = null) {
        for (const input of this._inputs){
            if (!input.connectedPoint) {
                if (!forOutput || forOutput.type === input.type || input.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect || input.acceptedConnectionPointTypes.indexOf(forOutput.type) !== -1) {
                    return input;
                }
            }
        }
        return null;
    }
    /**
     * Will return the first available output e.g. the first one which is not yet connected and not a varying
     * @param forBlock defines an optional block to check compatibility with
     * @returns the first available input or null
     */ getFirstAvailableOutput(forBlock = null) {
        for (const output of this._outputs){
            if (!forBlock || !forBlock.target || forBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral || (forBlock.target & output.target) !== 0) {
                return output;
            }
        }
        return null;
    }
    /**
     * Gets the sibling of the given output
     * @param current defines the current output
     * @returns the next output in the list or null
     */ getSiblingOutput(current) {
        const index = this._outputs.indexOf(current);
        if (index === -1 || index >= this._outputs.length) {
            return null;
        }
        return this._outputs[index + 1];
    }
    /**
     * Checks if the current block is an ancestor of a given block
     * @param block defines the potential descendant block to check
     * @returns true if block is a descendant
     */ isAnAncestorOf(block) {
        for (const output of this._outputs){
            if (!output.hasEndpoints) {
                continue;
            }
            for (const endpoint of output.endpoints){
                if (endpoint.ownerBlock === block) {
                    return true;
                }
                if (endpoint.ownerBlock.isAnAncestorOf(block)) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Connect current block with another block
     * @param other defines the block to connect with
     * @param options define the various options to help pick the right connections
     * @param options.input
     * @param options.output
     * @param options.outputSwizzle
     * @returns the current block
     */ connectTo(other, options) {
        if (this._outputs.length === 0) {
            return;
        }
        let output = options && options.output ? this.getOutputByName(options.output) : this.getFirstAvailableOutput(other);
        let notFound = true;
        while(notFound){
            const input = options && options.input ? other.getInputByName(options.input) : other.getFirstAvailableInput(output);
            if (output && input && output.canConnectTo(input)) {
                output.connectTo(input);
                notFound = false;
            } else if (!output) {
                // eslint-disable-next-line no-throw-literal
                throw "Unable to find a compatible match";
            } else {
                output = this.getSiblingOutput(output);
            }
        }
        return this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _buildBlock(state) {
    // Empty. Must be defined by child nodes
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _postBuildBlock(state) {
    // Empty. Must be defined by child nodes
    }
    /**
     * Add uniforms, samplers and uniform buffers at compilation time
     * @param state defines the state to update
     * @param nodeMaterial defines the node material requesting the update
     * @param defines defines the material defines to update
     * @param uniformBuffers defines the list of uniform buffer names
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUniformsAndSamples(state, nodeMaterial, defines, uniformBuffers) {
    // Do nothing
    }
    /**
     * Add potential fallbacks if shader compilation fails
     * @param fallbacks defines the current prioritized list of fallbacks
     * @param mesh defines the mesh to be rendered
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    provideFallbacks(fallbacks, mesh) {
    // Do nothing
    }
    /**
     * Initialize defines for shader compilation
     * @param defines defines the material defines to update
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initializeDefines(defines) {
    // Do nothing
    }
    /**
     * Update defines for shader compilation
     * @param defines defines the material defines to update
     * @param nodeMaterial defines the node material requesting the update
     * @param mesh defines the mesh to be rendered
     * @param useInstances specifies that instances should be used
     * @param subMesh defines which submesh to render
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prepareDefines(defines, nodeMaterial, mesh, useInstances = false, subMesh) {
    // Do nothing
    }
    /**
     * Lets the block try to connect some inputs automatically
     * @param material defines the hosting NodeMaterial
     * @param additionalFilteringInfo optional additional filtering condition when looking for compatible blocks
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
    // Do nothing
    }
    /**
     * Function called when a block is declared as repeatable content generator
     * @param vertexShaderState defines the current compilation state for the vertex shader
     * @param defines defines the material defines to update
     * @param mesh defines the mesh to be rendered
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    replaceRepeatableContent(vertexShaderState, defines, mesh) {
    // Do nothing
    }
    /** Gets a boolean indicating that the code of this block will be promoted to vertex shader even if connected to fragment output */ get willBeGeneratedIntoVertexShaderFromFragmentShader() {
        if (this.isInput || this.isFinalMerger) {
            return false;
        }
        if (this._outputs.some((o)=>o.isDirectlyConnectedToVertexOutput)) {
            return false;
        }
        if (this.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return false;
        }
        if (this.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment || this.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral) {
            if (this._outputs.some((o)=>o.isConnectedInVertexShader)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Checks if the block is ready
     * @param mesh defines the mesh to be rendered
     * @param nodeMaterial defines the node material requesting the update
     * @param defines defines the material defines to update
     * @param useInstances specifies that instances should be used
     * @returns true if the block is ready
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isReady(mesh, nodeMaterial, defines, useInstances = false) {
        return true;
    }
    _linkConnectionTypes(inputIndex0, inputIndex1, looseCoupling = false) {
        if (looseCoupling) {
            this._inputs[inputIndex1]._acceptedConnectionPointType = this._inputs[inputIndex0];
        } else {
            this._inputs[inputIndex0]._linkedConnectionSource = this._inputs[inputIndex1];
            this._inputs[inputIndex0]._isMainLinkSource = true;
        }
        this._inputs[inputIndex1]._linkedConnectionSource = this._inputs[inputIndex0];
    }
    _processBuild(block, state, input, activeBlocks) {
        block.build(state, activeBlocks);
        const localBlockIsFragment = state._vertexState != null;
        const otherBlockWasGeneratedInVertexShader = block._buildTarget === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex && block.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
        if (block.isTeleportOut && block.entryPoint?.isConnectedToUniform) {
            // In that case, we skip the context switch as the teleport out block is connected to a uniform
            return;
        }
        if (localBlockIsFragment && ((block.target & block._buildTarget) === 0 || (block.target & input.target) === 0 || this.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment && otherBlockWasGeneratedInVertexShader)) {
            // context switch! We need a varying
            if (!block.isInput && state.target !== block._buildTarget || block.isInput && block.isAttribute && !block._noContextSwitch // block is an attribute
            ) {
                const connectedPoint = input.connectedPoint;
                if (state._vertexState._emitVaryingFromString("v_" + connectedPoint.declarationVariableName, connectedPoint.type)) {
                    const prefix = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "vertexOutputs." : "";
                    if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  && connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix) {
                        // We can't pass a matrix as a varying in WGSL, so we need to split it into 4 vectors
                        state._vertexState.compilationString += `${prefix}${"v_" + connectedPoint.declarationVariableName}_r0 = ${connectedPoint.associatedVariableName}[0];\n`;
                        state._vertexState.compilationString += `${prefix}${"v_" + connectedPoint.declarationVariableName}_r1 = ${connectedPoint.associatedVariableName}[1];\n`;
                        state._vertexState.compilationString += `${prefix}${"v_" + connectedPoint.declarationVariableName}_r2 = ${connectedPoint.associatedVariableName}[2];\n`;
                        state._vertexState.compilationString += `${prefix}${"v_" + connectedPoint.declarationVariableName}_r3 = ${connectedPoint.associatedVariableName}[3];\n`;
                    } else {
                        state._vertexState.compilationString += `${prefix}${"v_" + connectedPoint.declarationVariableName} = ${connectedPoint.associatedVariableName};\n`;
                    }
                }
                const prefix = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  && connectedPoint.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix ? "fragmentInputs." : "";
                input.associatedVariableName = prefix + "v_" + connectedPoint.declarationVariableName;
                input._enforceAssociatedVariableName = true;
            }
        }
    }
    /**
     * Validates the new name for the block node.
     * @param newName the new name to be given to the node.
     * @returns false if the name is a reserve word, else true.
     */ validateBlockName(newName) {
        const reservedNames = [
            "position",
            "normal",
            "tangent",
            "particle_positionw",
            "uv",
            "uv2",
            "uv3",
            "uv4",
            "uv5",
            "uv6",
            "position2d",
            "particle_uv",
            "postprocess_uv",
            "matricesIndices",
            "matricesWeights",
            "world0",
            "world1",
            "world2",
            "world3",
            "particle_color",
            "particle_texturemask"
        ];
        for (const reservedName of reservedNames){
            if (newName === reservedName) {
                return false;
            }
        }
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _customBuildStep(state, activeBlocks) {
    // Must be implemented by children
    }
    /**
     * Compile the current node and generate the shader code
     * @param state defines the current compilation state (uniforms, samplers, current string)
     * @param activeBlocks defines the list of active blocks (i.e. blocks to compile)
     * @returns true if already built
     */ build(state, activeBlocks) {
        if (this._buildId === state.sharedData.buildId) {
            return true;
        }
        if (!this.isInput) {
            /** Prepare outputs */ for (const output of this._outputs){
                if (!output.associatedVariableName) {
                    output.associatedVariableName = state._getFreeVariableName(output.name);
                }
            }
        }
        // Check if "parent" blocks are compiled
        for (const input of this._inputs){
            if (!input.connectedPoint) {
                if (!input.isOptional) {
                    // Emit a warning
                    state.sharedData.checks.notConnectedNonOptionalInputs.push(input);
                }
                continue;
            }
            if (this.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral) {
                if ((input.target & this.target) === 0) {
                    continue;
                }
                if ((input.target & state.target) === 0) {
                    continue;
                }
            }
            const block = input.connectedPoint.ownerBlock;
            if (block && block !== this) {
                this._processBuild(block, state, input, activeBlocks);
            }
        }
        this._customBuildStep(state, activeBlocks);
        if (this._buildId === state.sharedData.buildId) {
            return true; // Need to check again as inputs can be connected multiple time to this endpoint
        }
        // Logs
        if (state.sharedData.verbose) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(`${state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex ? "Vertex shader" : "Fragment shader"}: Building ${this.name} [${this.getClassName()}]`);
        }
        // Checks final outputs
        if (this.isFinalMerger) {
            switch(state.target){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex:
                    state.sharedData.checks.emitVertex = true;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment:
                    state.sharedData.checks.emitFragment = true;
                    break;
            }
        }
        if (!this.isInput && state.sharedData.emitComments) {
            state.compilationString += `\n//${this.name}\n`;
        }
        this._buildBlock(state);
        this._buildId = state.sharedData.buildId;
        this._buildTarget = state.target;
        // Compile connected blocks
        for (const output of this._outputs){
            if (output._forPostBuild) {
                continue;
            }
            if ((output.target & state.target) === 0) {
                continue;
            }
            for (const endpoint of output.endpoints){
                const block = endpoint.ownerBlock;
                if (block) {
                    if ((block.target & state.target) !== 0 && activeBlocks.indexOf(block) !== -1 || state._terminalBlocks.has(block)) {
                        this._processBuild(block, state, endpoint, activeBlocks);
                    }
                }
            }
        }
        this._postBuildBlock(state);
        // Compile post build connected blocks
        for (const output of this._outputs){
            if (!output._forPostBuild) {
                continue;
            }
            if ((output.target & state.target) === 0) {
                continue;
            }
            for (const endpoint of output.endpoints){
                const block = endpoint.ownerBlock;
                if (block && (block.target & state.target) !== 0 && activeBlocks.indexOf(block) !== -1) {
                    this._processBuild(block, state, endpoint, activeBlocks);
                }
            }
        }
        return false;
    }
    _inputRename(name) {
        return name;
    }
    _outputRename(name) {
        return name;
    }
    _dumpPropertiesCode() {
        const variableName = this._codeVariableName;
        return `${variableName}.visibleInInspector = ${this.visibleInInspector};\n${variableName}.visibleOnFrame = ${this.visibleOnFrame};\n${variableName}.target = ${this.target};\n`;
    }
    /**
     * @internal
     */ _dumpCode(uniqueNames, alreadyDumped) {
        alreadyDumped.push(this);
        // Get unique name
        const nameAsVariableName = this.name.replace(/[^A-Za-z_]+/g, "");
        this._codeVariableName = nameAsVariableName || `${this.getClassName()}_${this.uniqueId}`;
        if (uniqueNames.indexOf(this._codeVariableName) !== -1) {
            let index = 0;
            do {
                index++;
                this._codeVariableName = nameAsVariableName + index;
            }while (uniqueNames.indexOf(this._codeVariableName) !== -1)
        }
        uniqueNames.push(this._codeVariableName);
        // Declaration
        let codeString = `\n// ${this.getClassName()}\n`;
        if (this.comments) {
            codeString += `// ${this.comments}\n`;
        }
        codeString += `var ${this._codeVariableName} = new BABYLON.${this.getClassName()}("${this.name}");\n`;
        // Properties
        codeString += this._dumpPropertiesCode();
        // Inputs
        for (const input of this.inputs){
            if (!input.isConnected) {
                continue;
            }
            const connectedOutput = input.connectedPoint;
            const connectedBlock = connectedOutput.ownerBlock;
            if (alreadyDumped.indexOf(connectedBlock) === -1) {
                codeString += connectedBlock._dumpCode(uniqueNames, alreadyDumped);
            }
        }
        // Outputs
        for (const output of this.outputs){
            if (!output.hasEndpoints) {
                continue;
            }
            for (const endpoint of output.endpoints){
                const connectedBlock = endpoint.ownerBlock;
                if (connectedBlock && alreadyDumped.indexOf(connectedBlock) === -1) {
                    codeString += connectedBlock._dumpCode(uniqueNames, alreadyDumped);
                }
            }
        }
        return codeString;
    }
    /**
     * @internal
     */ _dumpCodeForOutputConnections(alreadyDumped) {
        let codeString = "";
        if (alreadyDumped.indexOf(this) !== -1) {
            return codeString;
        }
        alreadyDumped.push(this);
        for (const input of this.inputs){
            if (!input.isConnected) {
                continue;
            }
            const connectedOutput = input.connectedPoint;
            const connectedBlock = connectedOutput.ownerBlock;
            codeString += connectedBlock._dumpCodeForOutputConnections(alreadyDumped);
            codeString += `${connectedBlock._codeVariableName}.${connectedBlock._outputRename(connectedOutput.name)}.connectTo(${this._codeVariableName}.${this._inputRename(input.name)});\n`;
        }
        return codeString;
    }
    /**
     * Clone the current block to a new identical block
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures and relative dependencies
     * @returns a copy of the current block
     */ clone(scene, rootUrl = "") {
        const serializationObject = this.serialize();
        const blockType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetClass"])(serializationObject.customType);
        if (blockType) {
            const block = new blockType();
            block._deserialize(serializationObject, scene, rootUrl);
            return block;
        }
        return null;
    }
    /**
     * Serializes this block in a JSON representation
     * @returns the serialized block object
     */ serialize() {
        const serializationObject = {};
        serializationObject.customType = "BABYLON." + this.getClassName();
        serializationObject.id = this.uniqueId;
        serializationObject.name = this.name;
        serializationObject.comments = this.comments;
        serializationObject.visibleInInspector = this.visibleInInspector;
        serializationObject.visibleOnFrame = this.visibleOnFrame;
        serializationObject.target = this.target;
        serializationObject.inputs = [];
        serializationObject.outputs = [];
        for (const input of this.inputs){
            serializationObject.inputs.push(input.serialize());
        }
        for (const output of this.outputs){
            serializationObject.outputs.push(output.serialize(false));
        }
        return serializationObject;
    }
    /**
     * @internal
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _deserialize(serializationObject, scene, rootUrl, urlRewriter) {
        this.name = serializationObject.name;
        this.comments = serializationObject.comments;
        this.visibleInInspector = !!serializationObject.visibleInInspector;
        this.visibleOnFrame = !!serializationObject.visibleOnFrame;
        this._target = serializationObject.target ?? this.target;
        this._deserializePortDisplayNamesAndExposedOnFrame(serializationObject);
    }
    _deserializePortDisplayNamesAndExposedOnFrame(serializationObject) {
        const serializedInputs = serializationObject.inputs;
        const serializedOutputs = serializationObject.outputs;
        if (serializedInputs) {
            for(let i = 0; i < serializedInputs.length; i++){
                const port = serializedInputs[i];
                if (port.displayName) {
                    this.inputs[i].displayName = port.displayName;
                }
                if (port.isExposedOnFrame) {
                    this.inputs[i].isExposedOnFrame = port.isExposedOnFrame;
                    this.inputs[i].exposedPortPosition = port.exposedPortPosition;
                }
            }
        }
        if (serializedOutputs) {
            for(let i = 0; i < serializedOutputs.length; i++){
                const port = serializedOutputs[i];
                if (port.displayName) {
                    this.outputs[i].displayName = port.displayName;
                }
                if (port.isExposedOnFrame) {
                    this.outputs[i].isExposedOnFrame = port.isExposedOnFrame;
                    this.outputs[i].exposedPortPosition = port.exposedPortPosition;
                }
            }
        }
    }
    /**
     * Release resources
     */ dispose() {
        this.onCodeIsReadyObservable.clear();
        for (const input of this.inputs){
            input.dispose();
        }
        for (const output of this.outputs){
            output.dispose();
        }
    }
} //# sourceMappingURL=nodeMaterialBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialConnectionPointCustomObject",
    ()=>NodeMaterialConnectionPointCustomObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint.js [app-client] (ecmascript)");
;
class NodeMaterialConnectionPointCustomObject extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPoint"] {
    /**
     * Creates a new connection point
     * @param name defines the connection point name
     * @param ownerBlock defines the block hosting this connection point
     * @param direction defines the direction of the connection point
     * @param _blockType
     * @param _blockName
     */ constructor(name, ownerBlock, direction, // @internal
    _blockType, _blockName){
        super(name, ownerBlock, direction);
        this._blockType = _blockType;
        this._blockName = _blockName;
        this.needDualDirectionValidation = true;
    }
    /**
     * Gets a number indicating if the current point can be connected to another point
     * @param connectionPoint defines the other connection point
     * @returns a number defining the compatibility state
     */ checkCompatibilityState(connectionPoint) {
        return connectionPoint instanceof NodeMaterialConnectionPointCustomObject && connectionPoint._blockName === this._blockName ? 0 /* NodeMaterialConnectionPointCompatibilityStates.Compatible */  : 1 /* NodeMaterialConnectionPointCompatibilityStates.TypeIncompatible */ ;
    }
    /**
     * Creates a block suitable to be used as an input for this input point.
     * If null is returned, a block based on the point type will be created.
     * @returns The returned string parameter is the name of the output point of NodeMaterialBlock (first parameter of the returned array) that can be connected to the input
     */ createCustomInputBlock() {
        return [
            new this._blockType(this._blockName),
            this.name
        ];
    }
} //# sourceMappingURL=nodeMaterialConnectionPointCustomObject.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialDefault.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SetToDefaultGaussianSplatting",
    ()=>SetToDefaultGaussianSplatting,
    "SetToDefaultSFE",
    ()=>SetToDefaultSFE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$transformBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/transformBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$vertexOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Vertex/vertexOutputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragmentOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragmentOutputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianSplattingBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianSplattingBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/gaussianBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$splatReaderBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/GaussianSplatting/splatReaderBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialModes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$multiplyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/multiplyBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$smartFilterTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/smartFilterTextureBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$addBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/addBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$smartFilterFragmentOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/smartFilterFragmentOutputBlock.js [app-client] (ecmascript)");
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
function SetToDefaultGaussianSplatting(nodeMaterial) {
    nodeMaterial.clear();
    nodeMaterial.editorData = null;
    // reading splat datas
    const splatIndex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("SplatIndex");
    splatIndex.setAsAttribute("splatIndex");
    const splatReader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$splatReaderBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplatReaderBlock"]("SplatReader");
    splatIndex.connectTo(splatReader);
    // transforming datas into renderable positions
    const gs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianSplattingBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianSplattingBlock"]("GaussianSplatting");
    splatReader.connectTo(gs);
    // world transformation
    const worldInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("World");
    worldInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World);
    const worldPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$transformBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformBlock"]("WorldPos");
    splatReader.connectTo(worldPos);
    worldInput.connectTo(worldPos);
    worldPos.connectTo(gs, {
        output: "xyz",
        input: "splatPosition"
    });
    // view and projections
    const view = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("view");
    view.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View);
    const projection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("Projection");
    projection.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].Projection);
    worldInput.connectTo(gs, {
        input: "world"
    });
    view.connectTo(gs, {
        input: "view"
    });
    projection.connectTo(gs, {
        input: "projection"
    });
    const addBlock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$addBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddBlock"]("Add SH");
    // from color to gaussian color
    const gaussian = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$GaussianSplatting$2f$gaussianBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianBlock"]("Gaussian");
    splatReader.connectTo(gaussian, {
        input: "splatColor",
        output: "splatColor"
    });
    // fragment and vertex outputs
    const fragmentOutput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragmentOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragmentOutputBlock"]("FragmentOutput");
    gs.SH.connectTo(addBlock.left);
    gaussian.rgb.connectTo(addBlock.right);
    addBlock.output.connectTo(fragmentOutput.rgb);
    gaussian.alpha.connectTo(fragmentOutput.a);
    const vertexOutput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Vertex$2f$vertexOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexOutputBlock"]("VertexOutput");
    gs.connectTo(vertexOutput);
    // Add to nodes
    nodeMaterial.addOutputNode(vertexOutput);
    nodeMaterial.addOutputNode(fragmentOutput);
    nodeMaterial._mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialModes"].GaussianSplatting;
}
function SetToDefaultSFE(nodeMaterial) {
    nodeMaterial.clear();
    nodeMaterial.editorData = null;
    const uv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("uv");
    uv.setAsAttribute("postprocess_uv");
    uv.comments = "Normalized screen position to sample our texture with.";
    const currentScreen = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$smartFilterTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartFilterTextureBlock"]("Input Texture");
    currentScreen.comments = "A placeholder that represents the input texture to compose.";
    uv.connectTo(currentScreen);
    const textureUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].GetAssetUrl("https://assets.babylonjs.com/core/nme/currentScreenPostProcess.png");
    currentScreen.texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](textureUrl, nodeMaterial.getScene());
    const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("Color4");
    color.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](1, 0, 0, 1);
    const multiply = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$multiplyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplyBlock"]("Multiply");
    color.connectTo(multiply);
    currentScreen.connectTo(multiply);
    const fragmentOutput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$smartFilterFragmentOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartFilterFragmentOutputBlock"]("FragmentOutput");
    multiply.connectTo(fragmentOutput);
    nodeMaterial.addOutputNode(fragmentOutput);
    nodeMaterial._mode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialModes"].SFE;
} //# sourceMappingURL=nodeMaterialDefault.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Optimizers/nodeMaterialOptimizer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Root class for all node material optimizers
 */ __turbopack_context__.s([
    "NodeMaterialOptimizer",
    ()=>NodeMaterialOptimizer
]);
class NodeMaterialOptimizer {
    /**
     * Function used to optimize a NodeMaterial graph
     * @param _vertexOutputNodes defines the list of output nodes for the vertex shader
     * @param _fragmentOutputNodes defines the list of output nodes for the fragment shader
     */ optimize(_vertexOutputNodes, _fragmentOutputNodes) {
    // Do nothing by default
    }
} //# sourceMappingURL=nodeMaterialOptimizer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Optimizers/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Optimizers$2f$nodeMaterialOptimizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Optimizers/nodeMaterialOptimizer.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Optimizers/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeMaterialOptimizer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Optimizers$2f$nodeMaterialOptimizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialOptimizer"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Optimizers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Optimizers/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Optimizers$2f$nodeMaterialOptimizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Optimizers/nodeMaterialOptimizer.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Optimizers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Optimizers/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddBlock"],
    "AmbientOcclusionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientOcclusionBlock"],
    "AnimatedInputBlockTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedInputBlockTypes"],
    "AnisotropyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnisotropyBlock"],
    "ArcTan2Block",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArcTan2Block"],
    "BiPlanarBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiPlanarBlock"],
    "BonesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BonesBlock"],
    "ClampBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClampBlock"],
    "ClearCoatBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClearCoatBlock"],
    "ClipPlanesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClipPlanesBlock"],
    "CloudBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudBlock"],
    "ColorConverterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorConverterBlock"],
    "ColorMergerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorMergerBlock"],
    "ColorSplitterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSplitterBlock"],
    "ConditionalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConditionalBlock"],
    "ConditionalBlockConditions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConditionalBlockConditions"],
    "CrossBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrossBlock"],
    "CurrentScreenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentScreenBlock"],
    "CurveBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurveBlock"],
    "CurveBlockTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurveBlockTypes"],
    "CustomBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomBlock"],
    "DepthSourceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthSourceBlock"],
    "DerivativeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DerivativeBlock"],
    "DesaturateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesaturateBlock"],
    "DiscardBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscardBlock"],
    "DistanceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DistanceBlock"],
    "DivideBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DivideBlock"],
    "DotBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotBlock"],
    "ElbowBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElbowBlock"],
    "FogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogBlock"],
    "FragCoordBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragCoordBlock"],
    "FragDepthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragDepthBlock"],
    "FragmentOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragmentOutputBlock"],
    "FragmentOutputBlockColorSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FragmentOutputBlockColorSpace"],
    "FresnelBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FresnelBlock"],
    "FrontFacingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontFacingBlock"],
    "GaussianBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianBlock"],
    "GaussianSplattingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GaussianSplattingBlock"],
    "GradientBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientBlock"],
    "GradientBlockColorStep",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GradientBlockColorStep"],
    "HeightToNormalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeightToNormalBlock"],
    "ImageProcessingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageProcessingBlock"],
    "ImageSourceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"],
    "InputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"],
    "InstancesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancesBlock"],
    "IridescenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IridescenceBlock"],
    "LengthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LengthBlock"],
    "LerpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LerpBlock"],
    "LightBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightBlock"],
    "LightInformationBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightInformationBlock"],
    "LoopBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoopBlock"],
    "MatrixBuilderBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixBuilderBlock"],
    "MatrixDeterminantBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixDeterminantBlock"],
    "MatrixSplitterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixSplitterBlock"],
    "MatrixTransposeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MatrixTransposeBlock"],
    "MaxBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaxBlock"],
    "MeshAttributeExistsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshAttributeExistsBlock"],
    "MeshAttributeExistsBlockTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshAttributeExistsBlockTypes"],
    "MinBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MinBlock"],
    "ModBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModBlock"],
    "MorphTargetsBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MorphTargetsBlock"],
    "MultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiplyBlock"],
    "NLerpBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NLerpBlock"],
    "NegateBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NegateBlock"],
    "NodeMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterial"],
    "NodeMaterialBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"],
    "NodeMaterialBlockConnectionPointMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointMode"],
    "NodeMaterialBlockConnectionPointTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"],
    "NodeMaterialBlockTargets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"],
    "NodeMaterialConnectionPoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPoint"],
    "NodeMaterialConnectionPointCompatibilityStates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCompatibilityStates"],
    "NodeMaterialConnectionPointCustomObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"],
    "NodeMaterialConnectionPointDirection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointDirection"],
    "NodeMaterialDebugBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialDebugBlock"],
    "NodeMaterialDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialDefines"],
    "NodeMaterialModes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialModes"],
    "NodeMaterialOptimizer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Optimizers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialOptimizer"],
    "NodeMaterialSystemValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"],
    "NodeMaterialTeleportInBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialTeleportInBlock"],
    "NodeMaterialTeleportOutBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialTeleportOutBlock"],
    "NormalBlendBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalBlendBlock"],
    "NormalizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalizeBlock"],
    "OneMinusBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OneMinusBlock"],
    "PBRMetallicRoughnessBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRMetallicRoughnessBlock"],
    "ParticleBlendMultiplyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleBlendMultiplyBlock"],
    "ParticleRampGradientBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleRampGradientBlock"],
    "ParticleTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticleTextureBlock"],
    "PerturbNormalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerturbNormalBlock"],
    "PosterizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PosterizeBlock"],
    "PowBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PowBlock"],
    "PrePassOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrePassOutputBlock"],
    "PrePassTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrePassTextureBlock"],
    "PropertyTypeForEdition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyTypeForEdition"],
    "RandomNumberBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomNumberBlock"],
    "ReciprocalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReciprocalBlock"],
    "ReflectBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectBlock"],
    "ReflectionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionBlock"],
    "ReflectionTextureBaseBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionTextureBaseBlock"],
    "ReflectionTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionTextureBlock"],
    "RefractBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefractBlock"],
    "RefractionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefractionBlock"],
    "RemapBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemapBlock"],
    "ReplaceColorBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReplaceColorBlock"],
    "Rotate2dBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rotate2dBlock"],
    "ScaleBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScaleBlock"],
    "SceneDepthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneDepthBlock"],
    "ScreenSizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenSizeBlock"],
    "ScreenSpaceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenSpaceBlock"],
    "SetToDefaultGaussianSplatting",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetToDefaultGaussianSplatting"],
    "SetToDefaultSFE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SetToDefaultSFE"],
    "SfeModeDefine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SfeModeDefine"],
    "ShadowMapBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShadowMapBlock"],
    "SheenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheenBlock"],
    "SimplexPerlin3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimplexPerlin3DBlock"],
    "SmartFilterFragmentOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartFilterFragmentOutputBlock"],
    "SmartFilterTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartFilterTextureBlock"],
    "SmoothStepBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmoothStepBlock"],
    "SplatReaderBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplatReaderBlock"],
    "StepBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepBlock"],
    "StorageReadBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageReadBlock"],
    "StorageWriteBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageWriteBlock"],
    "SubSurfaceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubSurfaceBlock"],
    "SubtractBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubtractBlock"],
    "TBNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TBNBlock"],
    "TextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureBlock"],
    "TransformBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformBlock"],
    "TriPlanarBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriPlanarBlock"],
    "TrigonometryBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrigonometryBlock"],
    "TrigonometryBlockOperations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrigonometryBlockOperations"],
    "TwirlBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TwirlBlock"],
    "VectorMergerBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VectorMergerBlock"],
    "VectorSplitterBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VectorSplitterBlock"],
    "VertexOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexOutputBlock"],
    "ViewDirectionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewDirectionBlock"],
    "VoronoiNoiseBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoronoiNoiseBlock"],
    "WaveBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveBlock"],
    "WaveBlockKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WaveBlockKind"],
    "WorleyNoise3DBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorleyNoise3DBlock"],
    "bonesDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesDeclaration"],
    "bonesDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesDeclarationWGSL"],
    "bonesVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesVertex"],
    "bonesVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bonesVertexWGSL"],
    "bumpFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragment"],
    "bumpFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentFunctions"],
    "bumpFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentFunctionsWGSL"],
    "bumpFragmentMainFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentMainFunctions"],
    "bumpFragmentMainFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentMainFunctionsWGSL"],
    "bumpFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bumpFragmentWGSL"],
    "clipPlaneFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragment"],
    "clipPlaneFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentDeclaration"],
    "clipPlaneFragmentDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentDeclarationWGSL"],
    "clipPlaneFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentWGSL"],
    "clipPlaneVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertex"],
    "clipPlaneVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexDeclaration"],
    "clipPlaneVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexDeclarationWGSL"],
    "clipPlaneVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexWGSL"],
    "editableInPropertyPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"],
    "fogFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fogFragmentDeclaration"],
    "fogFragmentDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fogFragmentDeclarationWGSL"],
    "gaussianSplattingVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gaussianSplattingVertexDeclaration"],
    "gaussianSplattingVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gaussianSplattingVertexDeclarationWGSL"],
    "helperFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helperFunctions"],
    "helperFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helperFunctionsWGSL"],
    "imageProcessingDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageProcessingDeclaration"],
    "imageProcessingDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageProcessingDeclarationWGSL"],
    "imageProcessingFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageProcessingFunctions"],
    "imageProcessingFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageProcessingFunctionsWGSL"],
    "lightFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragment"],
    "lightFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragmentDeclaration"],
    "lightFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragmentWGSL"],
    "lightUboDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightUboDeclaration"],
    "lightUboDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightUboDeclarationWGSL"],
    "lightVxFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxFragmentDeclaration"],
    "lightVxUboDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxUboDeclaration"],
    "lightVxUboDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxUboDeclarationWGSL"],
    "lightsFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightsFragmentFunctions"],
    "lightsFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightsFragmentFunctionsWGSL"],
    "morphTargetsVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertex"],
    "morphTargetsVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexDeclaration"],
    "morphTargetsVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexDeclarationWGSL"],
    "morphTargetsVertexGlobal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobal"],
    "morphTargetsVertexGlobalDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalDeclaration"],
    "morphTargetsVertexGlobalDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalDeclarationWGSL"],
    "morphTargetsVertexGlobalWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexGlobalWGSL"],
    "morphTargetsVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["morphTargetsVertexWGSL"],
    "packingFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packingFunctions"],
    "packingFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packingFunctionsWGSL"],
    "reflectionFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reflectionFunction"],
    "reflectionFunctionWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reflectionFunctionWGSL"],
    "shadowMapFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowMapFragment"],
    "shadowMapFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowMapFragmentWGSL"],
    "shadowMapVertexMetric",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowMapVertexMetric"],
    "shadowMapVertexMetricWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowMapVertexMetricWGSL"],
    "shadowsFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsFragmentFunctions"],
    "shadowsFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsFragmentFunctionsWGSL"],
    "shadowsVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsVertex"],
    "shadowsVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsVertexWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlockConnectionPoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialDefault$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialDefault.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Optimizers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Optimizers/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Materials_Node_82f77275._.js.map