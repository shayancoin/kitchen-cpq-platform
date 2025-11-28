(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/sheenBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SheenBlock",
    ()=>SheenBlock
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
class SheenBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new SheenBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        /**
         * If true, the sheen effect is layered above the base BRDF with the albedo-scaling technique.
         * It allows the strength of the sheen effect to not depend on the base color of the material,
         * making it easier to setup and tweak the effect
         */ this.albedoScaling = false;
        /**
         * Defines if the sheen is linked to the sheen color.
         */ this.linkSheenWithAlbedo = false;
        this._isUnique = true;
        this.registerInput("intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("roughness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("sheen", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("sheen", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , SheenBlock, "SheenBlock"));
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("sheenOut");
        state._excludeVariableName("sheenMapData");
        state._excludeVariableName("vSheenColor");
        state._excludeVariableName("vSheenRoughness");
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SheenBlock";
    }
    /**
     * Gets the intensity input component
     */ get intensity() {
        return this._inputs[0];
    }
    /**
     * Gets the color input component
     */ get color() {
        return this._inputs[1];
    }
    /**
     * Gets the roughness input component
     */ get roughness() {
        return this._inputs[2];
    }
    /**
     * Gets the sheen object output component
     */ get sheen() {
        return this._outputs[0];
    }
    prepareDefines(defines) {
        defines.setValue("SHEEN", true);
        defines.setValue("SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE", true, true);
        defines.setValue("SHEEN_LINKWITHALBEDO", this.linkSheenWithAlbedo, true);
        defines.setValue("SHEEN_ROUGHNESS", this.roughness.isConnected, true);
        defines.setValue("SHEEN_ALBEDOSCALING", this.albedoScaling, true);
    }
    /**
     * Gets the main code of the block (fragment side)
     * @param reflectionBlock instance of a ReflectionBlock null if the code must be generated without an active reflection module
     * @param state define the build state
     * @returns the shader code
     */ getCode(reflectionBlock, state) {
        let code = "";
        const color = this.color.isConnected ? this.color.associatedVariableName : `vec3${state.fSuffix}(1.)`;
        const intensity = this.intensity.isConnected ? this.intensity.associatedVariableName : "1.";
        const roughness = this.roughness.isConnected ? this.roughness.associatedVariableName : "0.";
        const texture = `vec4${state.fSuffix}(0.)`;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        code = `#ifdef SHEEN
            ${isWebGPU ? "var sheenOut: sheenOutParams" : "sheenOutParams sheenOut"};

            ${state._declareLocalVar("vSheenColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = vec4${state.fSuffix}(${color}, ${intensity});

            sheenOut = sheenBlock(
                vSheenColor
            #ifdef SHEEN_ROUGHNESS
                , ${roughness}
            #endif
                , roughness
            #ifdef SHEEN_TEXTURE
                , ${texture}
                ${isWebGPU ? `, ${texture}Sampler` : ""}
                , 1.0
            #endif
                , reflectanceF0
            #ifdef SHEEN_LINKWITHALBEDO
                , baseColor
                , surfaceAlbedo
            #endif
            #ifdef ENVIRONMENTBRDF
                , NdotV
                , environmentBrdf
            #endif
            #if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
                , AARoughnessFactors
                , ${isWebGPU ? "uniforms." : ""}${reflectionBlock?._vReflectionMicrosurfaceInfosName}
                , ${reflectionBlock?._vReflectionInfosName}
                , ${reflectionBlock?.reflectionColor}
                , ${isWebGPU ? "uniforms." : ""}vLightingIntensity
                #ifdef ${reflectionBlock?._define3DName}
                    , ${reflectionBlock?._cubeSamplerName}                                      
                    ${isWebGPU ? `, ${reflectionBlock?._cubeSamplerName}Sampler` : ""}
                #else
                    , ${reflectionBlock?._2DSamplerName}
                    ${isWebGPU ? `, ${reflectionBlock?._2DSamplerName}Sampler` : ""}
                #endif
                , reflectionOut.reflectionCoords
                , NdotVUnclamped
                #ifndef LODBASEDMICROSFURACE
                    #ifdef ${reflectionBlock?._define3DName}
                        , ${reflectionBlock?._cubeSamplerName}                        
                        ${isWebGPU ? `, ${reflectionBlock?._cubeSamplerName}Sampler` : ""}
                        , ${reflectionBlock?._cubeSamplerName}
                        ${isWebGPU ? `, ${reflectionBlock?._cubeSamplerName}Sampler` : ""}
                    #else
                        , ${reflectionBlock?._2DSamplerName}
                        ${isWebGPU ? `, ${reflectionBlock?._2DSamplerName}Sampler` : ""}
                        , ${reflectionBlock?._2DSamplerName}
                        ${isWebGPU ? `, ${reflectionBlock?._2DSamplerName}Sampler` : ""}
                    #endif
                #endif
                #if !defined(${reflectionBlock?._defineSkyboxName}) && defined(RADIANCEOCCLUSION)
                    , seo
                #endif
                #if !defined(${reflectionBlock?._defineSkyboxName}) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(${reflectionBlock?._define3DName})
                    , eho
                #endif
            #endif
            );

            #ifdef SHEEN_LINKWITHALBEDO
                surfaceAlbedo = sheenOut.surfaceAlbedo;
            #endif
        #endif\n`;
        return code;
    }
    _buildBlock(state) {
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.sharedData.blocksWithDefines.push(this);
        }
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.albedoScaling = ${this.albedoScaling};\n`;
        codeString += `${this._codeVariableName}.linkSheenWithAlbedo = ${this.linkSheenWithAlbedo};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.albedoScaling = this.albedoScaling;
        serializationObject.linkSheenWithAlbedo = this.linkSheenWithAlbedo;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.albedoScaling = serializationObject.albedoScaling;
        this.linkSheenWithAlbedo = serializationObject.linkSheenWithAlbedo;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Albedo scaling", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], SheenBlock.prototype, "albedoScaling", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Link sheen with albedo", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], SheenBlock.prototype, "linkSheenWithAlbedo", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SheenBlock", SheenBlock); //# sourceMappingURL=sheenBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/anisotropyBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnisotropyBlock",
    ()=>AnisotropyBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/TBNBlock.js [app-client] (ecmascript)");
;
;
;
;
;
;
class AnisotropyBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new AnisotropyBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._tangentCorrectionFactorName = "";
        this._isUnique = true;
        this.registerInput("intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("direction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("uv", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, true); // need this property and the next one in case there's no PerturbNormal block connected to the main PBR block
        this.registerInput("worldTangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true);
        this.registerInput("TBN", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("TBN", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TBNBlock"], "TBNBlock"));
        this.registerInput("roughness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("anisotropy", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("anisotropy", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , AnisotropyBlock, "AnisotropyBlock"));
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("anisotropicOut");
        state._excludeVariableName("TBN");
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "AnisotropyBlock";
    }
    /**
     * Gets the intensity input component
     */ get intensity() {
        return this._inputs[0];
    }
    /**
     * Gets the direction input component
     */ get direction() {
        return this._inputs[1];
    }
    /**
     * Gets the uv input component
     */ get uv() {
        return this._inputs[2];
    }
    /**
     * Gets the worldTangent input component
     */ get worldTangent() {
        return this._inputs[3];
    }
    /**
     * Gets the TBN input component
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get TBN() {
        return this._inputs[4];
    }
    /**
     * Gets the roughness input component
     */ get roughness() {
        return this._inputs[5];
    }
    /**
     * Gets the anisotropy object output component
     */ get anisotropy() {
        return this._outputs[0];
    }
    _generateTBNSpace(state) {
        let code = "";
        const comments = `//${this.name}`;
        const uv = this.uv;
        const worldPosition = this.worldPositionConnectionPoint;
        const worldNormal = this.worldNormalConnectionPoint;
        const worldTangent = this.worldTangent;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        if (!uv.isConnected) {
            // we must set the uv input as optional because we may not end up in this method (in case a PerturbNormal block is linked to the PBR material)
            // in which case uv is not required. But if we do come here, we do need the uv, so we have to raise an error but not with throw, else
            // it will stop the building of the node material and will lead to errors in the editor!
            state.sharedData.raiseBuildError(`You must connect the 'uv' input of the ${this.name} block!`);
        }
        state._emitExtension("derivatives", "#extension GL_OES_standard_derivatives : enable");
        const tangentReplaceString = {
            search: /defined\(TANGENT\)/g,
            replace: worldTangent.isConnected ? "defined(TANGENT)" : "defined(IGNORE)"
        };
        const tbn = this.TBN;
        if (tbn.isConnected) {
            state.compilationString += `
            #ifdef TBNBLOCK
            ${isWebGPU ? "var TBN" : "mat3 TBN"} = ${tbn.associatedVariableName};
            #endif
            `;
        } else if (worldTangent.isConnected) {
            code += `${state._declareLocalVar("tbnNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${worldNormal.associatedVariableName}.xyz);\n`;
            code += `${state._declareLocalVar("tbnTangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${worldTangent.associatedVariableName}.xyz);\n`;
            code += `${state._declareLocalVar("tbnBitangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = cross(tbnNormal, tbnTangent) * ${this._tangentCorrectionFactorName};\n`;
            code += `${isWebGPU ? "var vTBN" : "mat3 vTBN"} = ${isWebGPU ? "mat3x3f" : "mat3"}(tbnTangent, tbnBitangent, tbnNormal);\n`;
        }
        code += `
            #if defined(${worldTangent.isConnected ? "TANGENT" : "IGNORE"}) && defined(NORMAL)
                ${isWebGPU ? "var TBN" : "mat3 TBN"} = vTBN;
            #else
                ${isWebGPU ? "var TBN" : "mat3 TBN"} = cotangent_frame(${worldNormal.associatedVariableName + ".xyz"}, ${"v_" + worldPosition.associatedVariableName + ".xyz"}, ${uv.isConnected ? uv.associatedVariableName : "vec2(0.)"}, vec2${state.fSuffix}(1., 1.));
            #endif\n`;
        state._emitFunctionFromInclude("bumpFragmentMainFunctions", comments, {
            replaceStrings: [
                tangentReplaceString
            ]
        });
        return code;
    }
    /**
     * Gets the main code of the block (fragment side)
     * @param state current state of the node material building
     * @param generateTBNSpace if true, the code needed to create the TBN coordinate space is generated
     * @returns the shader code
     */ getCode(state, generateTBNSpace = false) {
        let code = "";
        if (generateTBNSpace) {
            code += this._generateTBNSpace(state);
        }
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        const intensity = this.intensity.isConnected ? this.intensity.associatedVariableName : "1.0";
        const direction = this.direction.isConnected ? this.direction.associatedVariableName : "vec2(1., 0.)";
        const roughness = this.roughness.isConnected ? this.roughness.associatedVariableName : "0.";
        code += `${isWebGPU ? "var anisotropicOut: anisotropicOutParams" : "anisotropicOutParams anisotropicOut"};
            anisotropicOut = anisotropicBlock(
                vec3(${direction}, ${intensity}),
                ${roughness},
            #ifdef ANISOTROPIC_TEXTURE
                vec3(0.),
            #endif
                TBN,
                normalW,
                viewDirectionW
            );\n`;
        return code;
    }
    prepareDefines(defines) {
        defines.setValue("ANISOTROPIC", true);
        defines.setValue("ANISOTROPIC_TEXTURE", false, true);
        defines.setValue("ANISOTROPIC_LEGACY", !this.roughness.isConnected);
    }
    bind(effect, nodeMaterial, mesh) {
        super.bind(effect, nodeMaterial, mesh);
        if (mesh) {
            effect.setFloat(this._tangentCorrectionFactorName, mesh.getWorldMatrix().determinant() < 0 ? -1 : 1);
        }
    }
    _buildBlock(state) {
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.sharedData.blocksWithDefines.push(this);
            state.sharedData.bindableBlocks.push(this);
            this._tangentCorrectionFactorName = state._getFreeDefineName("tangentCorrectionFactor");
            state._emitUniformFromString(this._tangentCorrectionFactorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.AnisotropyBlock", AnisotropyBlock); //# sourceMappingURL=anisotropyBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/reflectionBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReflectionBlock",
    ()=>ReflectionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBaseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class ReflectionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBaseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionTextureBaseBlock"] {
    _onGenerateOnlyFragmentCodeChanged() {
        if (this.position.isConnected) {
            this.generateOnlyFragmentCode = !this.generateOnlyFragmentCode;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("The position input must not be connected to be able to switch!");
            return false;
        }
        this._setTarget();
        return true;
    }
    _setTarget() {
        super._setTarget();
        this.getInputByName("position").target = this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
        if (this.generateOnlyFragmentCode) {
            this.forceIrradianceInFragment = true;
        }
    }
    /**
     * Create a new ReflectionBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        /**
         * Defines if the material uses spherical harmonics vs spherical polynomials for the
         * diffuse part of the IBL.
         */ this.useSphericalHarmonics = true;
        /**
         * Force the shader to compute irradiance in the fragment shader in order to take bump in account.
         */ this.forceIrradianceInFragment = false;
        this._isUnique = true;
        this.registerInput("position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("world", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("reflection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("reflection", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , ReflectionBlock, "ReflectionBlock"));
        this.position.addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ReflectionBlock";
    }
    /**
     * Gets the position input component
     */ get position() {
        return this._inputs[0];
    }
    /**
     * Gets the world position input component
     */ get worldPosition() {
        return this.worldPositionConnectionPoint;
    }
    /**
     * Gets the world normal input component
     */ get worldNormal() {
        return this.worldNormalConnectionPoint;
    }
    /**
     * Gets the world input component
     */ get world() {
        return this._inputs[1];
    }
    /**
     * Gets the camera (or eye) position component
     */ get cameraPosition() {
        return this.cameraPositionConnectionPoint;
    }
    /**
     * Gets the view input component
     */ get view() {
        return this.viewConnectionPoint;
    }
    /**
     * Gets the color input component
     */ get color() {
        return this._inputs[2];
    }
    /**
     * Gets the reflection object output component
     */ get reflection() {
        return this._outputs[0];
    }
    /**
     * Returns true if the block has a texture (either its own texture or the environment texture from the scene, if set)
     */ get hasTexture() {
        return !!this._getTexture();
    }
    /**
     * Gets the reflection color (either the name of the variable if the color input is connected, else a default value)
     */ get reflectionColor() {
        return this.color.isConnected ? this.color.associatedVariableName : "vec3(1., 1., 1.)";
    }
    _getTexture() {
        if (this.texture) {
            return this.texture;
        }
        return this._scene.environmentTexture;
    }
    prepareDefines(defines) {
        super.prepareDefines(defines);
        const reflectionTexture = this._getTexture();
        const reflection = reflectionTexture && reflectionTexture.getTextureMatrix;
        defines.setValue("REFLECTION", reflection, true);
        if (!reflection) {
            return;
        }
        defines.setValue(this._defineLODReflectionAlpha, reflectionTexture.lodLevelInAlpha, true);
        defines.setValue(this._defineLinearSpecularReflection, reflectionTexture.linearSpecularLOD, true);
        defines.setValue(this._defineOppositeZ, this._scene.useRightHandedSystem ? !reflectionTexture.invertZ : reflectionTexture.invertZ, true);
        defines.setValue("SPHERICAL_HARMONICS", this.useSphericalHarmonics, true);
        defines.setValue("GAMMAREFLECTION", reflectionTexture.gammaSpace, true);
        defines.setValue("RGBDREFLECTION", reflectionTexture.isRGBD, true);
        if (reflectionTexture && reflectionTexture.coordinatesMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].SKYBOX_MODE) {
            if (reflectionTexture.isCube) {
                defines.setValue("USESPHERICALFROMREFLECTIONMAP", true);
                defines.setValue("USEIRRADIANCEMAP", false);
                if (this.forceIrradianceInFragment || this._scene.getEngine().getCaps().maxVaryingVectors <= 8) {
                    defines.setValue("USESPHERICALINVERTEX", false);
                } else {
                    defines.setValue("USESPHERICALINVERTEX", true);
                }
            }
        }
    }
    bind(effect, nodeMaterial, mesh, subMesh) {
        super.bind(effect, nodeMaterial, mesh);
        const reflectionTexture = this._getTexture();
        if (!reflectionTexture || !subMesh) {
            return;
        }
        if (reflectionTexture.isCube) {
            effect.setTexture(this._cubeSamplerName, reflectionTexture);
        } else {
            effect.setTexture(this._2DSamplerName, reflectionTexture);
        }
        effect.setFloat(this._iblIntensityName, this._scene.iblIntensity * reflectionTexture.level);
        const width = reflectionTexture.getSize().width;
        effect.setFloat3(this._vReflectionMicrosurfaceInfosName, width, reflectionTexture.lodGenerationScale, reflectionTexture.lodGenerationOffset);
        effect.setFloat2(this._vReflectionFilteringInfoName, width, Math.log2(width));
        const defines = subMesh.materialDefines;
        const polynomials = reflectionTexture.sphericalPolynomial;
        if (defines.USESPHERICALFROMREFLECTIONMAP && polynomials) {
            if (defines.SPHERICAL_HARMONICS) {
                const preScaledHarmonics = polynomials.preScaledHarmonics;
                effect.setVector3("vSphericalL00", preScaledHarmonics.l00);
                effect.setVector3("vSphericalL1_1", preScaledHarmonics.l1_1);
                effect.setVector3("vSphericalL10", preScaledHarmonics.l10);
                effect.setVector3("vSphericalL11", preScaledHarmonics.l11);
                effect.setVector3("vSphericalL2_2", preScaledHarmonics.l2_2);
                effect.setVector3("vSphericalL2_1", preScaledHarmonics.l2_1);
                effect.setVector3("vSphericalL20", preScaledHarmonics.l20);
                effect.setVector3("vSphericalL21", preScaledHarmonics.l21);
                effect.setVector3("vSphericalL22", preScaledHarmonics.l22);
            } else {
                effect.setFloat3("vSphericalX", polynomials.x.x, polynomials.x.y, polynomials.x.z);
                effect.setFloat3("vSphericalY", polynomials.y.x, polynomials.y.y, polynomials.y.z);
                effect.setFloat3("vSphericalZ", polynomials.z.x, polynomials.z.y, polynomials.z.z);
                effect.setFloat3("vSphericalXX_ZZ", polynomials.xx.x - polynomials.zz.x, polynomials.xx.y - polynomials.zz.y, polynomials.xx.z - polynomials.zz.z);
                effect.setFloat3("vSphericalYY_ZZ", polynomials.yy.x - polynomials.zz.x, polynomials.yy.y - polynomials.zz.y, polynomials.yy.z - polynomials.zz.z);
                effect.setFloat3("vSphericalZZ", polynomials.zz.x, polynomials.zz.y, polynomials.zz.z);
                effect.setFloat3("vSphericalXY", polynomials.xy.x, polynomials.xy.y, polynomials.xy.z);
                effect.setFloat3("vSphericalYZ", polynomials.yz.x, polynomials.yz.y, polynomials.yz.z);
                effect.setFloat3("vSphericalZX", polynomials.zx.x, polynomials.zx.y, polynomials.zx.z);
            }
        }
    }
    /**
     * Gets the code to inject in the vertex shader
     * @param state current state of the node material building
     * @returns the shader code
     */ handleVertexSide(state) {
        let code = super.handleVertexSide(state);
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        state._emitFunctionFromInclude("harmonicsFunctions", `//${this.name}`, {
            replaceStrings: [
                {
                    search: /uniform vec3 vSphericalL00;[\s\S]*?uniform vec3 vSphericalL22;/g,
                    replace: ""
                },
                {
                    search: /uniform vec3 vSphericalX;[\s\S]*?uniform vec3 vSphericalZX;/g,
                    replace: ""
                }
            ]
        });
        const reflectionVectorName = state._getFreeVariableName("reflectionVector");
        this._vEnvironmentIrradianceName = state._getFreeVariableName("vEnvironmentIrradiance");
        state._emitVaryingFromString(this._vEnvironmentIrradianceName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)");
        state._emitUniformFromString("vSphericalL00", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalL1_1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalL10", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalL11", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalL2_2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalL2_1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalL20", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalL21", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalL22", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS");
        state._emitUniformFromString("vSphericalX", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        state._emitUniformFromString("vSphericalY", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        state._emitUniformFromString("vSphericalZ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        state._emitUniformFromString("vSphericalXX_ZZ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        state._emitUniformFromString("vSphericalYY_ZZ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        state._emitUniformFromString("vSphericalZZ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        state._emitUniformFromString("vSphericalXY", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        state._emitUniformFromString("vSphericalYZ", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        state._emitUniformFromString("vSphericalZX", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, "SPHERICAL_HARMONICS", true);
        code += `#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
                ${state._declareLocalVar(reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = (${(isWebGPU ? "uniforms." : "") + this._reflectionMatrixName} * vec4${state.fSuffix}(normalize(${this.worldNormal.associatedVariableName}).xyz, 0)).xyz;
                #ifdef ${this._defineOppositeZ}
                    ${reflectionVectorName}.z *= -1.0;
                #endif
                ${isWebGPU ? "vertexOutputs." : ""}${this._vEnvironmentIrradianceName} = computeEnvironmentIrradiance(${reflectionVectorName});
            #endif\n`;
        return code;
    }
    /**
     * Gets the main code of the block (fragment side)
     * @param state current state of the node material building
     * @param normalVarName name of the existing variable corresponding to the normal
     * @returns the shader code
     */ getCode(state, normalVarName) {
        let code = "";
        this.handleFragmentSideInits(state);
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        state._emitFunctionFromInclude("harmonicsFunctions", `//${this.name}`, {
            replaceStrings: [
                {
                    search: /uniform vec3 vSphericalL00;[\s\S]*?uniform vec3 vSphericalL22;/g,
                    replace: ""
                },
                {
                    search: /uniform vec3 vSphericalX;[\s\S]*?uniform vec3 vSphericalZX;/g,
                    replace: ""
                }
            ]
        });
        if (!isWebGPU) {
            state._emitFunction("sampleReflection", `
                #ifdef ${this._define3DName}
                    #define sampleReflection(s, c) textureCube(s, c)
                #else
                    #define sampleReflection(s, c) texture2D(s, c)
                #endif\n`, `//${this.name}`);
            state._emitFunction("sampleReflectionLod", `
                #ifdef ${this._define3DName}
                    #define sampleReflectionLod(s, c, l) textureCubeLodEXT(s, c, l)
                #else
                    #define sampleReflectionLod(s, c, l) texture2DLodEXT(s, c, l)
                #endif\n`, `//${this.name}`);
        }
        const computeReflectionCoordsFunc = isWebGPU ? `
            fn computeReflectionCoordsPBR(worldPos: vec4f, worldNormal: vec3f) -> vec3f {
                ${this.handleFragmentSideCodeReflectionCoords(state, "worldNormal", "worldPos", true, true)}
                return ${this._reflectionVectorName};
            }\n` : `
            vec3 computeReflectionCoordsPBR(vec4 worldPos, vec3 worldNormal) {
                ${this.handleFragmentSideCodeReflectionCoords(state, "worldNormal", "worldPos", true, true)}
                return ${this._reflectionVectorName};
            }\n`;
        state._emitFunction("computeReflectionCoordsPBR", computeReflectionCoordsFunc, `//${this.name}`);
        this._vReflectionMicrosurfaceInfosName = state._getFreeVariableName("vReflectionMicrosurfaceInfos");
        state._emitUniformFromString(this._vReflectionMicrosurfaceInfosName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._vReflectionInfosName = state._getFreeVariableName("vReflectionInfos");
        this._vReflectionFilteringInfoName = state._getFreeVariableName("vReflectionFilteringInfo");
        state._emitUniformFromString(this._vReflectionFilteringInfoName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this._iblIntensityName = state._getFreeVariableName("iblIntensity");
        state._emitUniformFromString(this._iblIntensityName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        code += `#ifdef REFLECTION
            ${state._declareLocalVar(this._vReflectionInfosName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = vec2${state.fSuffix}(${(isWebGPU ? "uniforms." : "") + this._iblIntensityName}, 0.);

            ${isWebGPU ? "var reflectionOut: reflectionOutParams" : "reflectionOutParams reflectionOut"};

            reflectionOut = reflectionBlock(
                ${this.generateOnlyFragmentCode ? this._worldPositionNameInFragmentOnlyMode : (isWebGPU ? "input." : "") + "v_" + this.worldPosition.associatedVariableName}.xyz
                , ${normalVarName}
                , alphaG
                , ${(isWebGPU ? "uniforms." : "") + this._vReflectionMicrosurfaceInfosName}
                , ${this._vReflectionInfosName}
                , ${this.reflectionColor}
            #ifdef ANISOTROPIC
                ,anisotropicOut
            #endif
            #if defined(${this._defineLODReflectionAlpha}) && !defined(${this._defineSkyboxName})
                ,NdotVUnclamped
            #endif
            #ifdef ${this._defineLinearSpecularReflection}
                , roughness
            #endif
            #ifdef ${this._define3DName}
                , ${this._cubeSamplerName}
                ${isWebGPU ? `, ${this._cubeSamplerName}Sampler` : ""}
            #else
                , ${this._2DSamplerName}
                ${isWebGPU ? `, ${this._2DSamplerName}Sampler` : ""}
            #endif
            #if defined(NORMAL) && defined(USESPHERICALINVERTEX)
                , ${isWebGPU ? "input." : ""}${this._vEnvironmentIrradianceName}
            #endif
            #if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
                    , ${this._reflectionMatrixName}
            #endif
            #ifdef USEIRRADIANCEMAP
                , irradianceSampler         // ** not handled **
                ${isWebGPU ? `, irradianceSamplerSampler` : ""}
                #ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
                , vReflectionDominantDirection
                #endif
            #endif
            #ifndef LODBASEDMICROSFURACE
                #ifdef ${this._define3DName}
                    , ${this._cubeSamplerName}
                    ${isWebGPU ? `, ${this._cubeSamplerName}Sampler` : ""}
                    , ${this._cubeSamplerName}
                    ${isWebGPU ? `, ${this._cubeSamplerName}Sampler` : ""}
                #else
                    , ${this._2DSamplerName}
                    ${isWebGPU ? `, ${this._2DSamplerName}Sampler` : ""}
                    , ${this._2DSamplerName}                    
                    ${isWebGPU ? `, ${this._2DSamplerName}Sampler` : ""}
                #endif
            #endif
            #ifdef REALTIME_FILTERING
                , ${this._vReflectionFilteringInfoName}
                #ifdef IBL_CDF_FILTERING
                    , icdfSampler         // ** not handled **
                    ${isWebGPU ? `, icdfSamplerSampler` : ""}
                #endif
            #endif
            , viewDirectionW
            , diffuseRoughness
            , surfaceAlbedo
            );
        #endif\n`;
        return code;
    }
    _buildBlock(state) {
        this._scene = state.sharedData.scene;
        if (state.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            this._defineLODReflectionAlpha = state._getFreeDefineName("LODINREFLECTIONALPHA");
            this._defineLinearSpecularReflection = state._getFreeDefineName("LINEARSPECULARREFLECTION");
        }
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        if (this.texture) {
            codeString += `${this._codeVariableName}.texture.gammaSpace = ${this.texture.gammaSpace};\n`;
        }
        codeString += `${this._codeVariableName}.useSphericalHarmonics = ${this.useSphericalHarmonics};\n`;
        codeString += `${this._codeVariableName}.forceIrradianceInFragment = ${this.forceIrradianceInFragment};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.useSphericalHarmonics = this.useSphericalHarmonics;
        serializationObject.forceIrradianceInFragment = this.forceIrradianceInFragment;
        serializationObject.gammaSpace = this.texture?.gammaSpace ?? true;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.useSphericalHarmonics = serializationObject.useSphericalHarmonics;
        this.forceIrradianceInFragment = serializationObject.forceIrradianceInFragment;
        if (this.texture) {
            this.texture.gammaSpace = serializationObject.gammaSpace;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Spherical Harmonics", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], ReflectionBlock.prototype, "useSphericalHarmonics", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Force irradiance in fragment", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], ReflectionBlock.prototype, "forceIrradianceInFragment", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ReflectionBlock", ReflectionBlock); //# sourceMappingURL=reflectionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/clearCoatBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClearCoatBlock",
    ()=>ClearCoatBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/TBNBlock.js [app-client] (ecmascript)");
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
class ClearCoatBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ClearCoatBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._tangentCorrectionFactorName = "";
        /**
         * Defines if the F0 value should be remapped to account for the interface change in the material.
         */ this.remapF0OnInterfaceChange = true;
        this._isUnique = true;
        this.registerInput("intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("roughness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("indexOfRefraction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("normalMapColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("uv", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("tintColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("tintAtDistance", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("tintThickness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("worldTangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.worldNormal.addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("TBN", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("TBN", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TBNBlock"], "TBNBlock"));
        this.registerOutput("clearcoat", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("clearcoat", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , ClearCoatBlock, "ClearCoatBlock"));
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("clearcoatOut");
        state._excludeVariableName("vClearCoatParams");
        state._excludeVariableName("vClearCoatTintParams");
        state._excludeVariableName("vClearCoatRefractionParams");
        state._excludeVariableName("vClearCoatTangentSpaceParams");
        state._excludeVariableName("vGeometricNormaClearCoatW");
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ClearCoatBlock";
    }
    /**
     * Gets the intensity input component
     */ get intensity() {
        return this._inputs[0];
    }
    /**
     * Gets the roughness input component
     */ get roughness() {
        return this._inputs[1];
    }
    /**
     * Gets the ior input component
     */ get indexOfRefraction() {
        return this._inputs[2];
    }
    /**
     * Gets the bump texture input component
     */ get normalMapColor() {
        return this._inputs[3];
    }
    /**
     * Gets the uv input component
     */ get uv() {
        return this._inputs[4];
    }
    /**
     * Gets the tint color input component
     */ get tintColor() {
        return this._inputs[5];
    }
    /**
     * Gets the tint "at distance" input component
     */ get tintAtDistance() {
        return this._inputs[6];
    }
    /**
     * Gets the tint thickness input component
     */ get tintThickness() {
        return this._inputs[7];
    }
    /**
     * Gets the world tangent input component
     */ get worldTangent() {
        return this._inputs[8];
    }
    /**
     * Gets the world normal input component
     */ get worldNormal() {
        return this._inputs[9];
    }
    /**
     * Gets the TBN input component
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get TBN() {
        return this._inputs[10];
    }
    /**
     * Gets the clear coat object output component
     */ get clearcoat() {
        return this._outputs[0];
    }
    autoConfigure() {
        if (!this.intensity.isConnected) {
            const intensityInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("ClearCoat intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            intensityInput.value = 1;
            intensityInput.output.connectTo(this.intensity);
        }
    }
    prepareDefines(defines) {
        defines.setValue("CLEARCOAT", true);
        defines.setValue("CLEARCOAT_TEXTURE", false, true);
        defines.setValue("CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE", true, true);
        defines.setValue("CLEARCOAT_TINT", this.tintColor.isConnected || this.tintThickness.isConnected || this.tintAtDistance.isConnected, true);
        defines.setValue("CLEARCOAT_BUMP", this.normalMapColor.isConnected, true);
        defines.setValue("CLEARCOAT_DEFAULTIOR", this.indexOfRefraction.isConnected ? this.indexOfRefraction.connectInputBlock.value === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRClearCoatConfiguration"]._DefaultIndexOfRefraction : true, true);
        defines.setValue("CLEARCOAT_REMAP_F0", this.remapF0OnInterfaceChange, true);
    }
    bind(effect, nodeMaterial, mesh) {
        super.bind(effect, nodeMaterial, mesh);
        // Clear Coat Refraction params
        const indexOfRefraction = this.indexOfRefraction.connectInputBlock?.value ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRClearCoatConfiguration"]._DefaultIndexOfRefraction;
        const a = 1 - indexOfRefraction;
        const b = 1 + indexOfRefraction;
        const f0 = Math.pow(-a / b, 2); // Schlicks approx: (ior1 - ior2) / (ior1 + ior2) where ior2 for air is close to vacuum = 1.
        const eta = 1 / indexOfRefraction;
        effect.setFloat4("vClearCoatRefractionParams", f0, eta, a, b);
        // Clear Coat tangent space params
        const mainPBRBlock = this.clearcoat.hasEndpoints ? this.clearcoat.endpoints[0].ownerBlock : null;
        const perturbedNormalBlock = mainPBRBlock?.perturbedNormal.isConnected ? mainPBRBlock.perturbedNormal.connectedPoint.ownerBlock : null;
        if (this._scene._mirroredCameraPosition) {
            effect.setFloat2("vClearCoatTangentSpaceParams", perturbedNormalBlock?.invertX ? 1.0 : -1.0, perturbedNormalBlock?.invertY ? 1.0 : -1.0);
        } else {
            effect.setFloat2("vClearCoatTangentSpaceParams", perturbedNormalBlock?.invertX ? -1.0 : 1.0, perturbedNormalBlock?.invertY ? -1.0 : 1.0);
        }
        if (mesh) {
            effect.setFloat(this._tangentCorrectionFactorName, mesh.getWorldMatrix().determinant() < 0 ? -1 : 1);
        }
    }
    _generateTBNSpace(state, worldPositionVarName, worldNormalVarName) {
        let code = "";
        const comments = `//${this.name}`;
        const worldTangent = this.worldTangent;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        if (!isWebGPU) {
            state._emitExtension("derivatives", "#extension GL_OES_standard_derivatives : enable");
        }
        const tangentReplaceString = {
            search: /defined\(TANGENT\)/g,
            replace: worldTangent.isConnected ? "defined(TANGENT)" : "defined(IGNORE)"
        };
        const tbn = this.TBN;
        if (tbn.isConnected) {
            state.compilationString += `
            #ifdef TBNBLOCK
                ${isWebGPU ? "var TBN" : "mat3 TBN"} = ${tbn.associatedVariableName};
            #endif
            `;
        } else if (worldTangent.isConnected) {
            code += `${state._declareLocalVar("tbnNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${worldNormalVarName}.xyz);\n`;
            code += `${state._declareLocalVar("tbnTangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${worldTangent.associatedVariableName}.xyz);\n`;
            code += `${state._declareLocalVar("tbnBitangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = cross(tbnNormal, tbnTangent) * ${this._tangentCorrectionFactorName};\n`;
            code += `${isWebGPU ? "var vTBN" : "mat3 vTBN"} = ${isWebGPU ? "mat3x3f" : "mat3"}(tbnTangent, tbnBitangent, tbnNormal);\n`;
        }
        state._emitFunctionFromInclude("bumpFragmentMainFunctions", comments, {
            replaceStrings: [
                tangentReplaceString
            ]
        });
        return code;
    }
    /** @internal */ static _GetInitializationCode(state, ccBlock) {
        let code = "";
        const intensity = ccBlock?.intensity.isConnected ? ccBlock.intensity.associatedVariableName : "1.";
        const roughness = ccBlock?.roughness.isConnected ? ccBlock.roughness.associatedVariableName : "0.";
        const tintColor = ccBlock?.tintColor.isConnected ? ccBlock.tintColor.associatedVariableName : `vec3${state.fSuffix}(1.)`;
        const tintThickness = ccBlock?.tintThickness.isConnected ? ccBlock.tintThickness.associatedVariableName : "1.";
        code += `
            #ifdef CLEARCOAT
                ${state._declareLocalVar("vClearCoatParams", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = vec2${state.fSuffix}(${intensity}, ${roughness});
                ${state._declareLocalVar("vClearCoatTintParams", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = vec4${state.fSuffix}(${tintColor}, ${tintThickness});
            #endif\n`;
        return code;
    }
    /**
     * Gets the main code of the block (fragment side)
     * @param state current state of the node material building
     * @param ccBlock instance of a ClearCoatBlock or null if the code must be generated without an active clear coat module
     * @param reflectionBlock instance of a ReflectionBlock null if the code must be generated without an active reflection module
     * @param worldPosVarName name of the variable holding the world position
     * @param generateTBNSpace if true, the code needed to create the TBN coordinate space is generated
     * @param vTBNAvailable indicate that the vTBN variable is already existing because it has already been generated by another block (PerturbNormal or Anisotropy)
     * @param worldNormalVarName name of the variable holding the world normal
     * @returns the shader code
     */ static GetCode(state, ccBlock, reflectionBlock, worldPosVarName, generateTBNSpace, vTBNAvailable, worldNormalVarName) {
        let code = "";
        const normalMapColor = ccBlock?.normalMapColor.isConnected ? ccBlock.normalMapColor.associatedVariableName : `vec3${state.fSuffix}(0.)`;
        const uv = ccBlock?.uv.isConnected ? ccBlock.uv.associatedVariableName : `vec2${state.fSuffix}(0.)`;
        const tintAtDistance = ccBlock?.tintAtDistance.isConnected ? ccBlock.tintAtDistance.associatedVariableName : "1.";
        const tintTexture = `vec4${state.fSuffix}(0.)`;
        if (ccBlock) {
            state._emitUniformFromString("vClearCoatRefractionParams", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
            state._emitUniformFromString("vClearCoatTangentSpaceParams", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
            const normalShading = ccBlock.worldNormal;
            code += `${state._declareLocalVar("vGeometricNormaClearCoatW", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${normalShading.isConnected ? "normalize(" + normalShading.associatedVariableName + ".xyz)" : "geometricNormalW"};\n`;
        } else {
            code += `${state._declareLocalVar("vGeometricNormaClearCoatW", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = geometricNormalW;\n`;
        }
        if (generateTBNSpace && ccBlock) {
            code += ccBlock._generateTBNSpace(state, worldPosVarName, worldNormalVarName);
            vTBNAvailable = ccBlock.worldTangent.isConnected;
        }
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        code += `${isWebGPU ? "var clearcoatOut: clearcoatOutParams" : "clearcoatOutParams clearcoatOut"};

        #ifdef CLEARCOAT
            clearcoatOut = clearcoatBlock(
                ${worldPosVarName}.xyz
                , vGeometricNormaClearCoatW
                , viewDirectionW
                , vClearCoatParams
                , specularEnvironmentR0
            #ifdef CLEARCOAT_TEXTURE
                , vec2${state.fSuffix}(0.)
            #endif
            #ifdef CLEARCOAT_TINT
                , vClearCoatTintParams
                , ${tintAtDistance}
                , ${isWebGPU ? "uniforms." : ""}vClearCoatRefractionParams
                #ifdef CLEARCOAT_TINT_TEXTURE
                    , ${tintTexture}
                #endif
            #endif
            #ifdef CLEARCOAT_BUMP
                , vec2${state.fSuffix}(0., 1.)
                , vec4${state.fSuffix}(${normalMapColor}, 0.)
                , ${uv}
                #if defined(${vTBNAvailable ? "TANGENT" : "IGNORE"}) && defined(NORMAL)
                    , vTBN
                #else
                    , ${isWebGPU ? "uniforms." : ""}vClearCoatTangentSpaceParams
                #endif
                #ifdef OBJECTSPACE_NORMALMAP
                    , normalMatrix
                #endif
            #endif
            #if defined(FORCENORMALFORWARD) && defined(NORMAL)
                , faceNormal
            #endif
            #ifdef REFLECTION
                , ${isWebGPU ? "uniforms." : ""}${reflectionBlock?._vReflectionMicrosurfaceInfosName}
                , ${reflectionBlock?._vReflectionInfosName}
                , ${reflectionBlock?.reflectionColor}
                , ${isWebGPU ? "uniforms." : ""}vLightingIntensity
                #ifdef ${reflectionBlock?._define3DName}
                    , ${reflectionBlock?._cubeSamplerName}       
                    ${isWebGPU ? `, ${reflectionBlock?._cubeSamplerName}Sampler` : ""}
                #else
                    , ${reflectionBlock?._2DSamplerName}       
                    ${isWebGPU ? `, ${reflectionBlock?._2DSamplerName}Sampler` : ""}
                #endif
                #ifndef LODBASEDMICROSFURACE
                    #ifdef ${reflectionBlock?._define3DName}
                        , ${reflectionBlock?._cubeSamplerName}       
                        ${isWebGPU ? `, ${reflectionBlock?._cubeSamplerName}Sampler` : ""}
                        , ${reflectionBlock?._cubeSamplerName}
                        ${isWebGPU ? `, ${reflectionBlock?._cubeSamplerName}Sampler` : ""}
                    #else
                        , ${reflectionBlock?._2DSamplerName}
                        ${isWebGPU ? `, ${reflectionBlock?._2DSamplerName}Sampler` : ""}
                        , ${reflectionBlock?._2DSamplerName}
                        ${isWebGPU ? `, ${reflectionBlock?._2DSamplerName}Sampler` : ""}                        
                    #endif
                #endif
            #endif
            #if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
                , (${state._generateTernary("1.", "-1.", isWebGPU ? "fragmentInputs.frontFacing" : "gl_FrontFacing")})
            #endif
            );
        #else
            clearcoatOut.specularEnvironmentR0 = specularEnvironmentR0;
        #endif\n`;
        return code;
    }
    _buildBlock(state) {
        this._scene = state.sharedData.scene;
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.sharedData.bindableBlocks.push(this);
            state.sharedData.blocksWithDefines.push(this);
            this._tangentCorrectionFactorName = state._getFreeDefineName("tangentCorrectionFactor");
            state._emitUniformFromString(this._tangentCorrectionFactorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        }
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.remapF0OnInterfaceChange = ${this.remapF0OnInterfaceChange};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.remapF0OnInterfaceChange = this.remapF0OnInterfaceChange;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.remapF0OnInterfaceChange = serializationObject.remapF0OnInterfaceChange ?? true;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Remap F0 on interface change", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true
    })
], ClearCoatBlock.prototype, "remapF0OnInterfaceChange", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ClearCoatBlock", ClearCoatBlock); //# sourceMappingURL=clearCoatBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/iridescenceBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IridescenceBlock",
    ()=>IridescenceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class IridescenceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new IridescenceBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._isUnique = true;
        this.registerInput("intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("indexOfRefraction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("thickness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("iridescence", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("iridescence", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , IridescenceBlock, "IridescenceBlock"));
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("iridescenceOut");
        state._excludeVariableName("vIridescenceParams");
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "IridescenceBlock";
    }
    /**
     * Gets the intensity input component
     */ get intensity() {
        return this._inputs[0];
    }
    /**
     * Gets the indexOfRefraction input component
     */ get indexOfRefraction() {
        return this._inputs[1];
    }
    /**
     * Gets the thickness input component
     */ get thickness() {
        return this._inputs[2];
    }
    /**
     * Gets the iridescence object output component
     */ get iridescence() {
        return this._outputs[0];
    }
    autoConfigure() {
        if (!this.intensity.isConnected) {
            const intensityInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("Iridescence intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            intensityInput.value = 1;
            intensityInput.output.connectTo(this.intensity);
            const indexOfRefractionInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("Iridescence ior", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            indexOfRefractionInput.value = 1.3;
            indexOfRefractionInput.output.connectTo(this.indexOfRefraction);
            const thicknessInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("Iridescence thickness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            thicknessInput.value = 400;
            thicknessInput.output.connectTo(this.thickness);
        }
    }
    prepareDefines(defines) {
        defines.setValue("IRIDESCENCE", true, true);
        defines.setValue("IRIDESCENCE_TEXTURE", false, true);
        defines.setValue("IRIDESCENCE_THICKNESS_TEXTURE", false, true);
    }
    /**
     * Gets the main code of the block (fragment side)
     * @param iridescenceBlock instance of a IridescenceBlock or null if the code must be generated without an active iridescence module
     * @param state defines the build state
     * @returns the shader code
     */ static GetCode(iridescenceBlock, state) {
        let code = "";
        const intensityName = iridescenceBlock?.intensity.isConnected ? iridescenceBlock.intensity.associatedVariableName : "1.";
        const indexOfRefraction = iridescenceBlock?.indexOfRefraction.isConnected ? iridescenceBlock.indexOfRefraction.associatedVariableName : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRIridescenceConfiguration"]._DefaultIndexOfRefraction;
        const thickness = iridescenceBlock?.thickness.isConnected ? iridescenceBlock.thickness.associatedVariableName : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRIridescenceConfiguration"]._DefaultMaximumThickness;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        code += `${isWebGPU ? "var iridescenceOut: iridescenceOutParams" : "iridescenceOutParams iridescenceOut"};

        #ifdef IRIDESCENCE
            iridescenceOut = iridescenceBlock(
                vec4(${intensityName}, ${indexOfRefraction}, 1., ${thickness})
                , NdotV
                , specularEnvironmentR0
                #ifdef CLEARCOAT
                    , NdotVUnclamped
                    , vClearCoatParams
                #endif                
            );

            ${isWebGPU ? "let" : "float"} iridescenceIntensity = iridescenceOut.iridescenceIntensity;
            specularEnvironmentR0 = iridescenceOut.specularEnvironmentR0;
        #endif\n`;
        return code;
    }
    _buildBlock(state) {
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.sharedData.bindableBlocks.push(this);
            state.sharedData.blocksWithDefines.push(this);
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.IridescenceBlock", IridescenceBlock); //# sourceMappingURL=iridescenceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/refractionBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefractionBlock",
    ()=>RefractionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/cubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
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
class RefractionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new RefractionBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        /**
         * This parameters will make the material used its opacity to control how much it is refracting against not.
         * Materials half opaque for instance using refraction could benefit from this control.
         */ this.linkRefractionWithTransparency = false;
        /**
         * Controls if refraction needs to be inverted on Y. This could be useful for procedural texture.
         */ this.invertRefractionY = false;
        /**
         * Controls if refraction needs to be inverted on Y. This could be useful for procedural texture.
         */ this.useThicknessAsDepth = false;
        this._isUnique = true;
        this.registerInput("intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("tintAtDistance", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("volumeIndexOfRefraction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("refraction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("refraction", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , RefractionBlock, "RefractionBlock"));
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("vRefractionPosition");
        state._excludeVariableName("vRefractionSize");
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "RefractionBlock";
    }
    /**
     * Gets the intensity input component
     */ get intensity() {
        return this._inputs[0];
    }
    /**
     * Gets the tint at distance input component
     */ get tintAtDistance() {
        return this._inputs[1];
    }
    /**
     * Gets the volume index of refraction input component
     */ get volumeIndexOfRefraction() {
        return this._inputs[2];
    }
    /**
     * Gets the view input component
     */ get view() {
        return this.viewConnectionPoint;
    }
    /**
     * Gets the refraction object output component
     */ get refraction() {
        return this._outputs[0];
    }
    /**
     * Returns true if the block has a texture
     */ get hasTexture() {
        return !!this._getTexture();
    }
    _getTexture() {
        if (this.texture) {
            return this.texture;
        }
        return this._scene.environmentTexture;
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.intensity.isConnected) {
            const intensityInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("Refraction intensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            intensityInput.value = 1;
            intensityInput.output.connectTo(this.intensity);
        }
        if (this.view && !this.view.isConnected) {
            let viewInput = material.getInputBlockByPredicate((b)=>b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View && additionalFilteringInfo(b));
            if (!viewInput) {
                viewInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("view");
                viewInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View);
            }
            viewInput.output.connectTo(this.view);
        }
    }
    prepareDefines(defines) {
        const refractionTexture = this._getTexture();
        const refraction = refractionTexture && refractionTexture.getTextureMatrix;
        defines.setValue("SS_REFRACTION", refraction, true);
        if (!refraction) {
            return;
        }
        defines.setValue(this._define3DName, refractionTexture.isCube, true);
        defines.setValue(this._defineLODRefractionAlpha, refractionTexture.lodLevelInAlpha, true);
        defines.setValue(this._defineLinearSpecularRefraction, refractionTexture.linearSpecularLOD, true);
        defines.setValue(this._defineOppositeZ, this._scene.useRightHandedSystem && refractionTexture.isCube ? !refractionTexture.invertZ : refractionTexture.invertZ, true);
        defines.setValue("SS_LINKREFRACTIONTOTRANSPARENCY", this.linkRefractionWithTransparency, true);
        defines.setValue("SS_GAMMAREFRACTION", refractionTexture.gammaSpace, true);
        defines.setValue("SS_RGBDREFRACTION", refractionTexture.isRGBD, true);
        defines.setValue("SS_USE_LOCAL_REFRACTIONMAP_CUBIC", refractionTexture.boundingBoxSize ? true : false, true);
        defines.setValue("SS_USE_THICKNESS_AS_DEPTH", this.useThicknessAsDepth, true);
    }
    isReady() {
        const texture = this._getTexture();
        if (texture && !texture.isReadyOrNotBlocking()) {
            return false;
        }
        return true;
    }
    bind(effect, nodeMaterial, mesh) {
        super.bind(effect, nodeMaterial, mesh);
        const refractionTexture = this._getTexture();
        if (!refractionTexture) {
            return;
        }
        if (refractionTexture.isCube) {
            effect.setTexture(this._cubeSamplerName, refractionTexture);
        } else {
            effect.setTexture(this._2DSamplerName, refractionTexture);
        }
        effect.setMatrix(this._refractionMatrixName, refractionTexture.getRefractionTextureMatrix());
        let depth = 1.0;
        if (!refractionTexture.isCube) {
            if (refractionTexture.depth) {
                depth = refractionTexture.depth;
            }
        }
        const indexOfRefraction = this.volumeIndexOfRefraction.connectInputBlock?.value ?? this.indexOfRefractionConnectionPoint.connectInputBlock?.value ?? 1.5;
        effect.setFloat4(this._vRefractionInfosName, refractionTexture.level, 1 / indexOfRefraction, depth, this.invertRefractionY ? -1 : 1);
        effect.setFloat4(this._vRefractionMicrosurfaceInfosName, refractionTexture.getSize().width, refractionTexture.lodGenerationScale, refractionTexture.lodGenerationOffset, 1 / indexOfRefraction);
        const width = refractionTexture.getSize().width;
        effect.setFloat2(this._vRefractionFilteringInfoName, width, Math.log2(width));
        if (refractionTexture.boundingBoxSize) {
            const cubeTexture = refractionTexture;
            effect.setVector3("vRefractionPosition", cubeTexture.boundingBoxPosition);
            effect.setVector3("vRefractionSize", cubeTexture.boundingBoxSize);
        }
    }
    /**
     * Gets the main code of the block (fragment side)
     * @param state current state of the node material building
     * @returns the shader code
     */ getCode(state) {
        const code = "";
        state.sharedData.blockingBlocks.push(this);
        state.sharedData.textureBlocks.push(this);
        // Samplers
        this._cubeSamplerName = state._getFreeVariableName(this.name + "CubeSampler");
        state.samplers.push(this._cubeSamplerName);
        this._2DSamplerName = state._getFreeVariableName(this.name + "2DSampler");
        state.samplers.push(this._2DSamplerName);
        this._define3DName = state._getFreeDefineName("SS_REFRACTIONMAP_3D");
        const refractionTexture = this._getTexture();
        if (refractionTexture) {
            state._samplerDeclaration += `#ifdef ${this._define3DName}\n`;
            state._emitCubeSampler(this._cubeSamplerName, undefined, true);
            state._samplerDeclaration += `#else\n`;
            state._emit2DSampler(this._2DSamplerName, undefined, true);
            state._samplerDeclaration += `#endif\n`;
        }
        // Fragment
        state.sharedData.blocksWithDefines.push(this);
        state.sharedData.bindableBlocks.push(this);
        this._defineLODRefractionAlpha = state._getFreeDefineName("SS_LODINREFRACTIONALPHA");
        this._defineLinearSpecularRefraction = state._getFreeDefineName("SS_LINEARSPECULARREFRACTION");
        this._defineOppositeZ = state._getFreeDefineName("SS_REFRACTIONMAP_OPPOSITEZ");
        this._refractionMatrixName = state._getFreeVariableName("refractionMatrix");
        state._emitUniformFromString(this._refractionMatrixName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        if (state.shaderLanguage !== 1 /* ShaderLanguage.WGSL */ ) {
            state._emitFunction("sampleRefraction", `
                #ifdef ${this._define3DName}
                    #define sampleRefraction(s, c) textureCube(s, c)
                #else
                    #define sampleRefraction(s, c) texture2D(s, c)
                #endif\n`, `//${this.name}`);
            state._emitFunction("sampleRefractionLod", `
                #ifdef ${this._define3DName}
                    #define sampleRefractionLod(s, c, l) textureCubeLodEXT(s, c, l)
                #else
                    #define sampleRefractionLod(s, c, l) texture2DLodEXT(s, c, l)
                #endif\n`, `//${this.name}`);
        }
        this._vRefractionMicrosurfaceInfosName = state._getFreeVariableName("vRefractionMicrosurfaceInfos");
        state._emitUniformFromString(this._vRefractionMicrosurfaceInfosName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this._vRefractionInfosName = state._getFreeVariableName("vRefractionInfos");
        state._emitUniformFromString(this._vRefractionInfosName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this._vRefractionFilteringInfoName = state._getFreeVariableName("vRefractionFilteringInfo");
        state._emitUniformFromString(this._vRefractionFilteringInfoName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        state._emitUniformFromString("vRefractionPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        state._emitUniformFromString("vRefractionSize", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        return code;
    }
    _buildBlock(state) {
        this._scene = state.sharedData.scene;
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        if (this.texture) {
            if (this.texture.isCube) {
                codeString = `${this._codeVariableName}.texture = new BABYLON.CubeTexture("${this.texture.name}");\n`;
            } else {
                codeString = `${this._codeVariableName}.texture = new BABYLON.Texture("${this.texture.name}");\n`;
            }
            codeString += `${this._codeVariableName}.texture.coordinatesMode = ${this.texture.coordinatesMode};\n`;
        }
        codeString += `${this._codeVariableName}.linkRefractionWithTransparency = ${this.linkRefractionWithTransparency};\n`;
        codeString += `${this._codeVariableName}.invertRefractionY = ${this.invertRefractionY};\n`;
        codeString += `${this._codeVariableName}.useThicknessAsDepth = ${this.useThicknessAsDepth};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        if (this.texture && !this.texture.isRenderTarget) {
            serializationObject.texture = this.texture.serialize();
        }
        serializationObject.linkRefractionWithTransparency = this.linkRefractionWithTransparency;
        serializationObject.invertRefractionY = this.invertRefractionY;
        serializationObject.useThicknessAsDepth = this.useThicknessAsDepth;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        if (serializationObject.texture) {
            rootUrl = serializationObject.texture.url.indexOf("data:") === 0 ? "" : rootUrl;
            if (serializationObject.texture.isCube) {
                this.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTexture"].Parse(serializationObject.texture, scene, rootUrl);
            } else {
                this.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].Parse(serializationObject.texture, scene, rootUrl);
            }
        }
        this.linkRefractionWithTransparency = serializationObject.linkRefractionWithTransparency;
        this.invertRefractionY = serializationObject.invertRefractionY;
        this.useThicknessAsDepth = !!serializationObject.useThicknessAsDepth;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Link refraction to transparency", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], RefractionBlock.prototype, "linkRefractionWithTransparency", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Invert refraction Y", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], RefractionBlock.prototype, "invertRefractionY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Use thickness as depth", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], RefractionBlock.prototype, "useThicknessAsDepth", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.RefractionBlock", RefractionBlock); //# sourceMappingURL=refractionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/subSurfaceBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubSurfaceBlock",
    ()=>SubSurfaceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$refractionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/refractionBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration.js [app-client] (ecmascript)");
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
class SubSurfaceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new SubSurfaceBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        /**
         * Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface properties (transmission, refraction, etc.)
         */ this.applyAlbedoAfterSubSurface = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRSubSurfaceConfiguration"].DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE;
        this._isUnique = true;
        this.registerInput("thickness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("tintColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("translucencyIntensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("translucencyDiffusionDist", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("refraction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("refraction", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$refractionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefractionBlock"], "RefractionBlock"));
        this.registerInput("dispersion", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("subsurface", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("subsurface", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , SubSurfaceBlock, "SubSurfaceBlock"));
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("subSurfaceOut");
        state._excludeVariableName("vThicknessParam");
        state._excludeVariableName("vTintColor");
        state._excludeVariableName("vTranslucencyColor");
        state._excludeVariableName("vSubSurfaceIntensity");
        state._excludeVariableName("dispersion");
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SubSurfaceBlock";
    }
    /**
     * Gets the thickness component
     */ get thickness() {
        return this._inputs[0];
    }
    /**
     * Gets the tint color input component
     */ get tintColor() {
        return this._inputs[1];
    }
    /**
     * Gets the translucency intensity input component
     */ get translucencyIntensity() {
        return this._inputs[2];
    }
    /**
     * Gets the translucency diffusion distance input component
     */ get translucencyDiffusionDist() {
        return this._inputs[3];
    }
    /**
     * Gets the refraction object parameters
     */ get refraction() {
        return this._inputs[4];
    }
    /**
     * Gets the dispersion input component
     */ get dispersion() {
        return this._inputs[5];
    }
    /**
     * Gets the sub surface object output component
     */ get subsurface() {
        return this._outputs[0];
    }
    autoConfigure() {
        if (!this.thickness.isConnected) {
            const thicknessInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("SubSurface thickness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            thicknessInput.value = 0;
            thicknessInput.output.connectTo(this.thickness);
        }
    }
    prepareDefines(defines) {
        const translucencyEnabled = this.translucencyDiffusionDist.isConnected || this.translucencyIntensity.isConnected;
        defines.setValue("SUBSURFACE", translucencyEnabled || this.refraction.isConnected, true);
        defines.setValue("SS_TRANSLUCENCY", translucencyEnabled, true);
        defines.setValue("SS_THICKNESSANDMASK_TEXTURE", false, true);
        defines.setValue("SS_REFRACTIONINTENSITY_TEXTURE", false, true);
        defines.setValue("SS_TRANSLUCENCYINTENSITY_TEXTURE", false, true);
        defines.setValue("SS_USE_GLTF_TEXTURES", false, true);
        defines.setValue("SS_DISPERSION", this.dispersion.isConnected, true);
        defines.setValue("SS_APPLY_ALBEDO_AFTER_SUBSURFACE", this.applyAlbedoAfterSubSurface, true);
    }
    /**
     * Gets the main code of the block (fragment side)
     * @param state current state of the node material building
     * @param ssBlock instance of a SubSurfaceBlock or null if the code must be generated without an active sub surface module
     * @param reflectionBlock instance of a ReflectionBlock null if the code must be generated without an active reflection module
     * @param worldPosVarName name of the variable holding the world position
     * @returns the shader code
     */ static GetCode(state, ssBlock, reflectionBlock, worldPosVarName) {
        let code = "";
        const thickness = ssBlock?.thickness.isConnected ? ssBlock.thickness.associatedVariableName : "0.";
        const tintColor = ssBlock?.tintColor.isConnected ? ssBlock.tintColor.associatedVariableName : "vec3(1.)";
        const translucencyIntensity = ssBlock?.translucencyIntensity.isConnected ? ssBlock?.translucencyIntensity.associatedVariableName : "1.";
        const translucencyDiffusionDistance = ssBlock?.translucencyDiffusionDist.isConnected ? ssBlock?.translucencyDiffusionDist.associatedVariableName : "vec3(1.)";
        const refractionBlock = ssBlock?.refraction.isConnected ? ssBlock?.refraction.connectedPoint?.ownerBlock : null;
        const refractionTintAtDistance = refractionBlock?.tintAtDistance.isConnected ? refractionBlock.tintAtDistance.associatedVariableName : "1.";
        const refractionIntensity = refractionBlock?.intensity.isConnected ? refractionBlock.intensity.associatedVariableName : "1.";
        const refractionView = refractionBlock?.view.isConnected ? refractionBlock.view.associatedVariableName : "";
        const dispersion = ssBlock?.dispersion.isConnected ? ssBlock?.dispersion.associatedVariableName : "0.0";
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        code += refractionBlock?.getCode(state) ?? "";
        code += `${isWebGPU ? "var subSurfaceOut: subSurfaceOutParams" : "subSurfaceOutParams subSurfaceOut"};

        #ifdef SUBSURFACE
            ${state._declareLocalVar("vThicknessParam", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = vec2${state.fSuffix}(0., ${thickness});
            ${state._declareLocalVar("vTintColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = vec4${state.fSuffix}(${tintColor}, ${refractionTintAtDistance});
            ${state._declareLocalVar("vSubSurfaceIntensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = vec3(${refractionIntensity}, ${translucencyIntensity}, 0.);
            ${state._declareLocalVar("dispersion", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = ${dispersion};
            subSurfaceOut = subSurfaceBlock(
                vSubSurfaceIntensity
                , vThicknessParam
                , vTintColor
                , normalW
            #ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
        `;
        code += isWebGPU ? `, vec3f(max(colorSpecularEnvironmentReflectance.r, max(colorSpecularEnvironmentReflectance.g, colorSpecularEnvironmentReflectance.b)))/n` : `, vec3(max(colorSpecularEnvironmentReflectance.r, max(colorSpecularEnvironmentReflectance.g, colorSpecularEnvironmentReflectance.b)))/n`;
        code += `#else
                , baseSpecularEnvironmentReflectance
            #endif
            #ifdef SS_THICKNESSANDMASK_TEXTURE
                , vec4${state.fSuffix}(0.)
            #endif
            #ifdef REFLECTION
                #ifdef SS_TRANSLUCENCY
                    , ${(isWebGPU ? "uniforms." : "") + reflectionBlock?._reflectionMatrixName}
                    #ifdef USESPHERICALFROMREFLECTIONMAP
                        #if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
                            , reflectionOut.irradianceVector
                        #endif
                        #if defined(REALTIME_FILTERING)
                            , ${reflectionBlock?._cubeSamplerName}
                            ${isWebGPU ? `, ${reflectionBlock?._cubeSamplerName}Sampler` : ""}
                            , ${reflectionBlock?._vReflectionFilteringInfoName}
                        #endif
                        #endif
                    #ifdef USEIRRADIANCEMAP
                        , irradianceSampler
                        ${isWebGPU ? `, irradianceSamplerSampler` : ""}
                    #endif
                #endif
            #endif
            #if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
                , surfaceAlbedo
            #endif
            #ifdef SS_REFRACTION
                , ${worldPosVarName}.xyz
                , viewDirectionW
                , ${refractionView}
                , ${(isWebGPU ? "uniforms." : "") + (refractionBlock?._vRefractionInfosName ?? "")}
                , ${(isWebGPU ? "uniforms." : "") + (refractionBlock?._refractionMatrixName ?? "")}
                , ${(isWebGPU ? "uniforms." : "") + (refractionBlock?._vRefractionMicrosurfaceInfosName ?? "")}
                , ${isWebGPU ? "uniforms." : ""}vLightingIntensity
                #ifdef SS_LINKREFRACTIONTOTRANSPARENCY
                    , alpha
                #endif
                #ifdef ${refractionBlock?._defineLODRefractionAlpha ?? "IGNORE"}
                    , NdotVUnclamped
                #endif
                #ifdef ${refractionBlock?._defineLinearSpecularRefraction ?? "IGNORE"}
                    , roughness
                #endif
                , alphaG
                #ifdef ${refractionBlock?._define3DName ?? "IGNORE"}
                    , ${refractionBlock?._cubeSamplerName ?? ""}
                    ${isWebGPU ? `, ${refractionBlock?._cubeSamplerName}Sampler` : ""}
                #else
                    , ${refractionBlock?._2DSamplerName ?? ""}
                    ${isWebGPU ? `, ${refractionBlock?._2DSamplerName}Sampler` : ""}
                #endif
                #ifndef LODBASEDMICROSFURACE
                    #ifdef ${refractionBlock?._define3DName ?? "IGNORE"}
                        , ${refractionBlock?._cubeSamplerName ?? ""}                        
                        ${isWebGPU ? `, ${refractionBlock?._cubeSamplerName}Sampler` : ""}
                        , ${refractionBlock?._cubeSamplerName ?? ""}                        
                        ${isWebGPU ? `, ${refractionBlock?._cubeSamplerName}Sampler` : ""}
                    #else
                        , ${refractionBlock?._2DSamplerName ?? ""}
                        ${isWebGPU ? `, ${refractionBlock?._2DSamplerName}Sampler` : ""}
                        , ${refractionBlock?._2DSamplerName ?? ""}
                        ${isWebGPU ? `, ${refractionBlock?._2DSamplerName}Sampler` : ""}
                    #endif
                #endif
                #ifdef ANISOTROPIC
                    , anisotropicOut
                #endif
                #ifdef REALTIME_FILTERING
                    , ${refractionBlock?._vRefractionFilteringInfoName ?? ""}
                #endif
                #ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
                    , vRefractionPosition
                    , vRefractionSize
                #endif
                #ifdef SS_DISPERSION
                    , dispersion
                #endif
            #endif
            #ifdef SS_TRANSLUCENCY
                , ${translucencyDiffusionDistance}
                , vTintColor
                #ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
                    , vec4${state.fSuffix}(0.)
                #endif
            #endif                
            );

            #ifdef SS_REFRACTION
                surfaceAlbedo = subSurfaceOut.surfaceAlbedo;
                #ifdef SS_LINKREFRACTIONTOTRANSPARENCY
                    alpha = subSurfaceOut.alpha;
                #endif
            #endif
        #else
            subSurfaceOut.specularEnvironmentReflectance = colorSpecularEnvironmentReflectance;
        #endif\n`;
        return code;
    }
    _buildBlock(state) {
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.sharedData.blocksWithDefines.push(this);
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Apply albedo after sub-surface", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED")
], SubSurfaceBlock.prototype, "applyAlbedoAfterSubSurface", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SubSurfaceBlock", SubSurfaceBlock); //# sourceMappingURL=subSurfaceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PBRMetallicRoughnessBlock",
    ()=>PBRMetallicRoughnessBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$sheenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/sheenBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/brdfTextureTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$anisotropyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/anisotropyBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$reflectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/reflectionBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$clearCoatBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/clearCoatBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$iridescenceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/iridescenceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$subSurfaceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/subSurfaceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-client] (ecmascript) <locals>");
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
const MapOutputToVariable = {
    ambientClr: [
        "finalAmbient",
        ""
    ],
    diffuseDir: [
        "finalDiffuse",
        ""
    ],
    specularDir: [
        "finalSpecularScaled",
        "!defined(UNLIT) && defined(SPECULARTERM)"
    ],
    clearcoatDir: [
        "finalClearCoatScaled",
        "!defined(UNLIT) && defined(CLEARCOAT)"
    ],
    sheenDir: [
        "finalSheenScaled",
        "!defined(UNLIT) && defined(SHEEN)"
    ],
    diffuseInd: [
        "finalIrradiance",
        "!defined(UNLIT) && defined(REFLECTION)"
    ],
    specularInd: [
        "finalRadianceScaled",
        "!defined(UNLIT) && defined(REFLECTION)"
    ],
    clearcoatInd: [
        "clearcoatOut.finalClearCoatRadianceScaled",
        "!defined(UNLIT) && defined(REFLECTION) && defined(CLEARCOAT)"
    ],
    sheenInd: [
        "sheenOut.finalSheenRadianceScaled",
        "!defined(UNLIT) && defined(REFLECTION) && defined(SHEEN) && defined(ENVIRONMENTBRDF)"
    ],
    refraction: [
        "subSurfaceOut.finalRefraction",
        "!defined(UNLIT) && defined(SS_REFRACTION)"
    ],
    lighting: [
        "finalColor.rgb",
        ""
    ],
    shadow: [
        "aggShadow",
        ""
    ],
    alpha: [
        "alpha",
        ""
    ]
};
class PBRMetallicRoughnessBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    static _OnGenerateOnlyFragmentCodeChanged(block, _propertyName) {
        const that = block;
        if (that.worldPosition.isConnected || that.worldNormal.isConnected) {
            that.generateOnlyFragmentCode = !that.generateOnlyFragmentCode;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("The worldPosition and worldNormal inputs must not be connected to be able to switch!");
            return false;
        }
        that._setTarget();
        return true;
    }
    _setTarget() {
        this._setInitialTarget(this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this.getInputByName("worldPosition").target = this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
        this.getInputByName("worldNormal").target = this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
    }
    /**
     * Create a new ReflectionBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this._environmentBRDFTexture = null;
        this._metallicReflectanceColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].White();
        this._metallicF0Factor = 1;
        /**
         * Intensity of the direct lights e.g. the four lights available in your scene.
         * This impacts both the direct diffuse and specular highlights.
         */ this.directIntensity = 1.0;
        /**
         * Intensity of the environment e.g. how much the environment will light the object
         * either through harmonics for rough material or through the reflection for shiny ones.
         */ this.environmentIntensity = 1.0;
        /**
         * This is a special control allowing the reduction of the specular highlights coming from the
         * four lights of the scene. Those highlights may not be needed in full environment lighting.
         */ this.specularIntensity = 1.0;
        /**
         * Defines the  falloff type used in this material.
         * It by default is Physical.
         */ this.lightFalloff = 0;
        /**
         * Specifies that alpha test should be used
         */ this.useAlphaTest = false;
        /**
         * Defines the alpha limits in alpha test mode.
         */ this.alphaTestCutoff = 0.5;
        /**
         * Specifies that alpha blending should be used
         */ this.useAlphaBlending = false;
        /**
         * Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
         * A car glass is a good example of that. When the street lights reflects on it you can not see what is behind.
         */ this.useRadianceOverAlpha = true;
        /**
         * Specifies that the material will keeps the specular highlights over a transparent surface (only the most luminous ones).
         * A car glass is a good example of that. When sun reflects on it you can not see what is behind.
         */ this.useSpecularOverAlpha = true;
        /**
         * Enables specular anti aliasing in the PBR shader.
         * It will both interacts on the Geometry for analytical and IBL lighting.
         * It also prefilter the roughness map based on the bump values.
         */ this.enableSpecularAntiAliasing = false;
        /**
         * Enables realtime filtering on the texture.
         */ this.realTimeFiltering = false;
        /**
         * Quality switch for realtime filtering
         */ this.realTimeFilteringQuality = 8;
        /**
         * Base Diffuse Model
         */ this.baseDiffuseModel = 0;
        /**
         * Defines if the material uses energy conservation.
         */ this.useEnergyConservation = true;
        /**
         * This parameters will enable/disable radiance occlusion by preventing the radiance to lit
         * too much the area relying on ambient texture to define their ambient occlusion.
         */ this.useRadianceOcclusion = true;
        /**
         * This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
         * makes the reflect vector face the model (under horizon).
         */ this.useHorizonOcclusion = true;
        /**
         * If set to true, no lighting calculations will be applied.
         */ this.unlit = false;
        /**
         * Force normal to face away from face.
         */ this.forceNormalForward = false;
        /** Indicates that no code should be generated in the vertex shader. Can be useful in some specific circumstances (like when doing ray marching for eg) */ this.generateOnlyFragmentCode = false;
        /**
         * Defines the material debug mode.
         * It helps seeing only some components of the material while troubleshooting.
         */ this.debugMode = 0;
        /**
         * Specify from where on screen the debug mode should start.
         * The value goes from -1 (full screen) to 1 (not visible)
         * It helps with side by side comparison against the final render
         * This defaults to 0
         */ this.debugLimit = 0;
        /**
         * As the default viewing range might not be enough (if the ambient is really small for instance)
         * You can use the factor to better multiply the final value.
         */ this.debugFactor = 1;
        this._isUnique = true;
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("view", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false);
        this.registerInput("cameraPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("perturbedNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("baseColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("metallic", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("roughness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("ambientOcc", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("opacity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("indexOfRefraction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("ambientColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("reflection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("reflection", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$reflectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionBlock"], "ReflectionBlock"));
        this.registerInput("clearcoat", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("clearcoat", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$clearCoatBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClearCoatBlock"], "ClearCoatBlock"));
        this.registerInput("sheen", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("sheen", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$sheenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheenBlock"], "SheenBlock"));
        this.registerInput("subsurface", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("subsurface", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$subSurfaceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubSurfaceBlock"], "SubSurfaceBlock"));
        this.registerInput("anisotropy", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("anisotropy", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$anisotropyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnisotropyBlock"], "AnisotropyBlock"));
        this.registerInput("iridescence", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("iridescence", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$iridescenceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IridescenceBlock"], "IridescenceBlock"));
        this.registerOutput("ambientClr", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("diffuseDir", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("specularDir", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("clearcoatDir", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("sheenDir", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("diffuseInd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("specularInd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("clearcoatInd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("sheenInd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("refraction", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("lighting", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("shadow", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("alpha", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("vLightingIntensity");
        state._excludeVariableName("geometricNormalW");
        state._excludeVariableName("normalW");
        state._excludeVariableName("faceNormal");
        state._excludeVariableName("albedoOpacityOut");
        state._excludeVariableName("surfaceAlbedo");
        state._excludeVariableName("alpha");
        state._excludeVariableName("aoOut");
        state._excludeVariableName("baseColor");
        state._excludeVariableName("reflectivityOut");
        state._excludeVariableName("microSurface");
        state._excludeVariableName("roughness");
        state._excludeVariableName("vReflectivityColor");
        state._excludeVariableName("NdotVUnclamped");
        state._excludeVariableName("NdotV");
        state._excludeVariableName("alphaG");
        state._excludeVariableName("AARoughnessFactors");
        state._excludeVariableName("environmentBrdf");
        state._excludeVariableName("ambientMonochrome");
        state._excludeVariableName("seo");
        state._excludeVariableName("eho");
        state._excludeVariableName("environmentRadiance");
        state._excludeVariableName("irradianceVector");
        state._excludeVariableName("environmentIrradiance");
        state._excludeVariableName("diffuseBase");
        state._excludeVariableName("specularBase");
        state._excludeVariableName("preInfo");
        state._excludeVariableName("info");
        state._excludeVariableName("shadow");
        state._excludeVariableName("finalDiffuse");
        state._excludeVariableName("finalAmbient");
        state._excludeVariableName("ambientOcclusionForDirectDiffuse");
        state._excludeVariableName("finalColor");
        state._excludeVariableName("vClipSpacePosition");
        state._excludeVariableName("vDebugMode");
        state._excludeVariableName("vViewDepth");
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.vertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.fragment.js [app-client] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/pbr.vertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/pbr.fragment.js [app-client] (ecmascript, async loader)")
            ]);
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "PBRMetallicRoughnessBlock";
    }
    /**
     * Gets the world position input component
     */ get worldPosition() {
        return this._inputs[0];
    }
    /**
     * Gets the world normal input component
     */ get worldNormal() {
        return this._inputs[1];
    }
    /**
     * Gets the view matrix parameter
     */ get view() {
        return this._inputs[2];
    }
    /**
     * Gets the camera position input component
     */ get cameraPosition() {
        return this._inputs[3];
    }
    /**
     * Gets the perturbed normal input component
     */ get perturbedNormal() {
        return this._inputs[4];
    }
    /**
     * Gets the base color input component
     */ get baseColor() {
        return this._inputs[5];
    }
    /**
     * Gets the metallic input component
     */ get metallic() {
        return this._inputs[6];
    }
    /**
     * Gets the roughness input component
     */ get roughness() {
        return this._inputs[7];
    }
    /**
     * Gets the ambient occlusion input component
     */ get ambientOcc() {
        return this._inputs[8];
    }
    /**
     * Gets the opacity input component
     */ get opacity() {
        return this._inputs[9];
    }
    /**
     * Gets the index of refraction input component
     */ get indexOfRefraction() {
        return this._inputs[10];
    }
    /**
     * Gets the ambient color input component
     */ get ambientColor() {
        return this._inputs[11];
    }
    /**
     * Gets the reflection object parameters
     */ get reflection() {
        return this._inputs[12];
    }
    /**
     * Gets the clear coat object parameters
     */ get clearcoat() {
        return this._inputs[13];
    }
    /**
     * Gets the sheen object parameters
     */ get sheen() {
        return this._inputs[14];
    }
    /**
     * Gets the sub surface object parameters
     */ get subsurface() {
        return this._inputs[15];
    }
    /**
     * Gets the anisotropy object parameters
     */ get anisotropy() {
        return this._inputs[16];
    }
    /**
     * Gets the iridescence object parameters
     */ get iridescence() {
        return this._inputs[17];
    }
    /**
     * Gets the ambient output component
     */ get ambientClr() {
        return this._outputs[0];
    }
    /**
     * Gets the diffuse output component
     */ get diffuseDir() {
        return this._outputs[1];
    }
    /**
     * Gets the specular output component
     */ get specularDir() {
        return this._outputs[2];
    }
    /**
     * Gets the clear coat output component
     */ get clearcoatDir() {
        return this._outputs[3];
    }
    /**
     * Gets the sheen output component
     */ get sheenDir() {
        return this._outputs[4];
    }
    /**
     * Gets the indirect diffuse output component
     */ get diffuseInd() {
        return this._outputs[5];
    }
    /**
     * Gets the indirect specular output component
     */ get specularInd() {
        return this._outputs[6];
    }
    /**
     * Gets the indirect clear coat output component
     */ get clearcoatInd() {
        return this._outputs[7];
    }
    /**
     * Gets the indirect sheen output component
     */ get sheenInd() {
        return this._outputs[8];
    }
    /**
     * Gets the refraction output component
     */ get refraction() {
        return this._outputs[9];
    }
    /**
     * Gets the global lighting output component
     */ get lighting() {
        return this._outputs[10];
    }
    /**
     * Gets the shadow output component
     */ get shadow() {
        return this._outputs[11];
    }
    /**
     * Gets the alpha output component
     */ get alpha() {
        return this._outputs[12];
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
        if (!this.view.isConnected) {
            let viewInput = material.getInputBlockByPredicate((b)=>b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View && additionalFilteringInfo(b));
            if (!viewInput) {
                viewInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("view");
                viewInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View);
            }
            viewInput.output.connectTo(this.view);
        }
    }
    prepareDefines(defines, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        // General
        defines.setValue("PBR", true);
        defines.setValue("METALLICWORKFLOW", true);
        defines.setValue("DEBUGMODE", this.debugMode, true);
        defines.setValue("DEBUGMODE_FORCERETURN", true);
        defines.setValue("NORMALXYSCALE", true);
        defines.setValue("BUMP", this.perturbedNormal.isConnected, true);
        defines.setValue("LODBASEDMICROSFURACE", this._scene.getEngine().getCaps().textureLOD);
        // Albedo & Opacity
        defines.setValue("ALBEDO", false, true);
        defines.setValue("OPACITY", this.opacity.isConnected, true);
        // Ambient occlusion
        defines.setValue("AMBIENT", true, true);
        defines.setValue("AMBIENTINGRAYSCALE", false, true);
        // Reflectivity
        defines.setValue("REFLECTIVITY", false, true);
        defines.setValue("AOSTOREINMETALMAPRED", false, true);
        defines.setValue("METALLNESSSTOREINMETALMAPBLUE", false, true);
        defines.setValue("ROUGHNESSSTOREINMETALMAPALPHA", false, true);
        defines.setValue("ROUGHNESSSTOREINMETALMAPGREEN", false, true);
        // Lighting & colors
        if (this.lightFalloff === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_STANDARD) {
            defines.setValue("USEPHYSICALLIGHTFALLOFF", false);
            defines.setValue("USEGLTFLIGHTFALLOFF", false);
        } else if (this.lightFalloff === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_GLTF) {
            defines.setValue("USEPHYSICALLIGHTFALLOFF", false);
            defines.setValue("USEGLTFLIGHTFALLOFF", true);
        } else {
            defines.setValue("USEPHYSICALLIGHTFALLOFF", true);
            defines.setValue("USEGLTFLIGHTFALLOFF", false);
        }
        // Transparency
        const alphaTestCutOffString = this.alphaTestCutoff.toString();
        defines.setValue("ALPHABLEND", this.useAlphaBlending, true);
        defines.setValue("ALPHAFROMALBEDO", false, true);
        defines.setValue("ALPHATEST", this.useAlphaTest, true);
        defines.setValue("ALPHATESTVALUE", alphaTestCutOffString.indexOf(".") < 0 ? alphaTestCutOffString + "." : alphaTestCutOffString, true);
        defines.setValue("OPACITYRGB", false, true);
        // Rendering
        defines.setValue("RADIANCEOVERALPHA", this.useRadianceOverAlpha, true);
        defines.setValue("SPECULAROVERALPHA", this.useSpecularOverAlpha, true);
        defines.setValue("SPECULARAA", this._scene.getEngine().getCaps().standardDerivatives && this.enableSpecularAntiAliasing, true);
        defines.setValue("REALTIME_FILTERING", this.realTimeFiltering, true);
        const scene = mesh.getScene();
        const engine = scene.getEngine();
        if (engine._features.needTypeSuffixInShaderConstants) {
            defines.setValue("NUM_SAMPLES", this.realTimeFilteringQuality + "u", true);
        } else {
            defines.setValue("NUM_SAMPLES", "" + this.realTimeFilteringQuality, true);
        }
        defines.setValue("BASE_DIFFUSE_MODEL", this.baseDiffuseModel, true);
        // Advanced
        defines.setValue("BRDF_V_HEIGHT_CORRELATED", true);
        defines.setValue("LEGACY_SPECULAR_ENERGY_CONSERVATION", true);
        defines.setValue("MS_BRDF_ENERGY_CONSERVATION", this.useEnergyConservation, true);
        defines.setValue("RADIANCEOCCLUSION", this.useRadianceOcclusion, true);
        defines.setValue("HORIZONOCCLUSION", this.useHorizonOcclusion, true);
        defines.setValue("UNLIT", this.unlit, true);
        defines.setValue("FORCENORMALFORWARD", this.forceNormalForward, true);
        if (this._environmentBRDFTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
            defines.setValue("ENVIRONMENTBRDF", true);
            defines.setValue("ENVIRONMENTBRDF_RGBD", this._environmentBRDFTexture.isRGBD, true);
        } else {
            defines.setValue("ENVIRONMENTBRDF", false);
            defines.setValue("ENVIRONMENTBRDF_RGBD", false);
        }
        if (defines._areImageProcessingDirty && nodeMaterial.imageProcessingConfiguration) {
            nodeMaterial.imageProcessingConfiguration.prepareDefines(defines);
        }
        if (!defines._areLightsDirty) {
            return;
        }
        if (!this.light) {
            // Lights
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLights"])(scene, mesh, defines, true, nodeMaterial.maxSimultaneousLights);
            defines._needNormals = true;
            // Multiview
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMultiview"])(scene, defines);
        } else {
            const state = {
                needNormals: false,
                needRebuild: false,
                lightmapMode: false,
                shadowEnabled: false,
                specularEnabled: false
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLight"])(scene, mesh, this.light, this._lightId, defines, true, state);
            if (state.needRebuild) {
                defines.rebuild();
            }
        }
    }
    updateUniformsAndSamples(state, nodeMaterial, defines, uniformBuffers) {
        for(let lightIndex = 0; lightIndex < nodeMaterial.maxSimultaneousLights; lightIndex++){
            if (!defines["LIGHT" + lightIndex]) {
                break;
            }
            const onlyUpdateBuffersList = state.uniforms.indexOf("vLightData" + lightIndex) >= 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersForLight"])(lightIndex, state.uniforms, state.samplers, defines["PROJECTEDLIGHTTEXTURE" + lightIndex], uniformBuffers, onlyUpdateBuffersList, defines["IESLIGHTTEXTURE" + lightIndex], defines["CLUSTLIGHT" + lightIndex]);
        }
    }
    isReady(mesh, nodeMaterial, defines) {
        if (this._environmentBRDFTexture && !this._environmentBRDFTexture.isReady()) {
            return false;
        }
        if (defines._areImageProcessingDirty && nodeMaterial.imageProcessingConfiguration) {
            if (!nodeMaterial.imageProcessingConfiguration.isReady()) {
                return false;
            }
        }
        return true;
    }
    bind(effect, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        const scene = mesh.getScene();
        if (!this.light) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLights"])(scene, mesh, effect, true, nodeMaterial.maxSimultaneousLights);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLight"])(this.light, this._lightId, scene, effect, true);
        }
        effect.setTexture(this._environmentBrdfSamplerName, this._environmentBRDFTexture);
        effect.setFloat2("vDebugMode", this.debugLimit, this.debugFactor);
        const ambientScene = this._scene.ambientColor;
        if (ambientScene) {
            effect.setColor3("ambientFromScene", ambientScene);
        }
        const invertNormal = scene.useRightHandedSystem === (scene._mirroredCameraPosition != null);
        effect.setFloat(this._invertNormalName, invertNormal ? -1 : 1);
        effect.setFloat4("vLightingIntensity", this.directIntensity, 1, this.environmentIntensity * this._scene.environmentIntensity, this.specularIntensity);
        // reflectivity bindings
        const metallicF90 = this._metallicF0Factor;
        effect.setColor4(this._vMetallicReflectanceFactorsName, this._metallicReflectanceColor, metallicF90);
        if (nodeMaterial.imageProcessingConfiguration) {
            nodeMaterial.imageProcessingConfiguration.bind(effect);
        }
    }
    _injectVertexCode(state) {
        const worldPos = this.worldPosition;
        const worldNormal = this.worldNormal;
        const comments = `//${this.name}`;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        // Declaration
        if (!this.light) {
            // Emit for all lights
            state._emitFunctionFromInclude(state.supportUniformBuffers ? "lightVxUboDeclaration" : "lightVxFragmentDeclaration", comments, {
                repeatKey: "maxSimultaneousLights"
            });
            this._lightId = 0;
            state.sharedData.dynamicUniformBlocks.push(this);
        } else {
            this._lightId = (state.counters["lightCounter"] !== undefined ? state.counters["lightCounter"] : -1) + 1;
            state.counters["lightCounter"] = this._lightId;
            state._emitFunctionFromInclude(state.supportUniformBuffers ? "lightVxUboDeclaration" : "lightVxFragmentDeclaration", comments, {
                replaceStrings: [
                    {
                        search: /{X}/g,
                        replace: this._lightId.toString()
                    }
                ]
            }, this._lightId.toString());
        }
        // Inject code in vertex
        const worldPosVaryingName = "v_" + worldPos.associatedVariableName;
        if (state._emitVaryingFromString(worldPosVaryingName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)) {
            state.compilationString += (isWebGPU ? "vertexOutputs." : "") + `${worldPosVaryingName} = ${worldPos.associatedVariableName};\n`;
        }
        const worldNormalVaryingName = "v_" + worldNormal.associatedVariableName;
        if (state._emitVaryingFromString(worldNormalVaryingName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)) {
            state.compilationString += (isWebGPU ? "vertexOutputs." : "") + `${worldNormalVaryingName} = ${worldNormal.associatedVariableName};\n`;
        }
        const reflectionBlock = this.reflection.isConnected ? this.reflection.connectedPoint?.ownerBlock : null;
        if (reflectionBlock) {
            reflectionBlock.viewConnectionPoint = this.view;
        }
        state.compilationString += reflectionBlock?.handleVertexSide(state) ?? "";
        if (state._emitVaryingFromString("vClipSpacePosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, "defined(IGNORE) || DEBUGMODE > 0")) {
            state._injectAtEnd += `#if DEBUGMODE > 0\n`;
            state._injectAtEnd += (isWebGPU ? "vertexOutputs." : "") + `vClipSpacePosition = ${isWebGPU ? "vertexOutputs.position" : "gl_Position"};\n`;
            state._injectAtEnd += `#endif\n`;
        }
        if (this.light) {
            state.compilationString += state._emitCodeFromInclude("shadowsVertex", comments, {
                replaceStrings: [
                    {
                        search: /{X}/g,
                        replace: this._lightId.toString()
                    },
                    {
                        search: /worldPos/g,
                        replace: worldPos.associatedVariableName
                    }
                ]
            });
        } else {
            state.compilationString += `${state._declareLocalVar("worldPos", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${worldPos.associatedVariableName};\n`;
            if (this.view.isConnected) {
                state.compilationString += `${state._declareLocalVar("view", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix)} = ${this.view.associatedVariableName};\n`;
                state._emitVaryingFromString("vViewDepth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
                state.compilationString += (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "vertexOutputs." : "") + `vViewDepth = (${this.view.associatedVariableName} * ${worldPos.associatedVariableName}).z;\n`;
            }
            state.compilationString += state._emitCodeFromInclude("shadowsVertex", comments, {
                repeatKey: "maxSimultaneousLights"
            });
        }
    }
    _getAlbedoOpacityCode(state) {
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        let code = isWebGPU ? "var albedoOpacityOut: albedoOpacityOutParams;\n" : `albedoOpacityOutParams albedoOpacityOut;\n`;
        const albedoColor = this.baseColor.isConnected ? this.baseColor.associatedVariableName : "vec3(1.)";
        const opacity = this.opacity.isConnected ? this.opacity.associatedVariableName : "1.";
        code += `albedoOpacityOut = albedoOpacityBlock(
                vec4${state.fSuffix}(${albedoColor}, 1.)
            #ifdef ALBEDO
                ,vec4${state.fSuffix}(1.)
                ,vec2${state.fSuffix}(1., 1.)
            #endif
                ,1. /* Base Weight */
            #ifdef OPACITY
                ,vec4${state.fSuffix}(${opacity})
                ,vec2${state.fSuffix}(1., 1.)
            #endif
            );

            ${state._declareLocalVar("surfaceAlbedo", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = albedoOpacityOut.surfaceAlbedo;
            ${state._declareLocalVar("alpha", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = albedoOpacityOut.alpha;\n`;
        return code;
    }
    _getAmbientOcclusionCode(state) {
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        let code = isWebGPU ? "var aoOut: ambientOcclusionOutParams;\n" : `ambientOcclusionOutParams aoOut;\n`;
        const ao = this.ambientOcc.isConnected ? this.ambientOcc.associatedVariableName : "1.";
        code += `aoOut = ambientOcclusionBlock(
            #ifdef AMBIENT
                vec3${state.fSuffix}(${ao}),
                vec4${state.fSuffix}(0., 1.0, 1.0, 0.)
            #endif
            );\n`;
        return code;
    }
    _getReflectivityCode(state) {
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        let code = isWebGPU ? "var reflectivityOut: reflectivityOutParams;\n" : `reflectivityOutParams reflectivityOut;\n`;
        const aoIntensity = "1.";
        this._vMetallicReflectanceFactorsName = state._getFreeVariableName("vMetallicReflectanceFactors");
        state._emitUniformFromString(this._vMetallicReflectanceFactorsName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this._baseDiffuseRoughnessName = state._getFreeVariableName("baseDiffuseRoughness");
        state._emitUniformFromString(this._baseDiffuseRoughnessName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        const outsideIOR = 1; // consider air as clear coat and other layers would remap in the shader.
        const ior = this.indexOfRefraction.connectInputBlock?.value ?? 1.5;
        // Based of the schlick fresnel approximation model
        // for dielectrics.
        const f0 = Math.pow((ior - outsideIOR) / (ior + outsideIOR), 2);
        code += `${state._declareLocalVar("baseColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = surfaceAlbedo;
            ${isWebGPU ? "let" : `vec4${state.fSuffix}`} vReflectivityColor = vec4${state.fSuffix}(${this.metallic.associatedVariableName}, ${this.roughness.associatedVariableName}, ${this.indexOfRefraction.associatedVariableName || "1.5"}, ${f0});
            reflectivityOut = reflectivityBlock(
                vReflectivityColor
            #ifdef METALLICWORKFLOW
                , surfaceAlbedo
                , ${(isWebGPU ? "uniforms." : "") + this._vMetallicReflectanceFactorsName}
            #endif
                , ${(isWebGPU ? "uniforms." : "") + this._baseDiffuseRoughnessName}
            #ifdef BASE_DIFFUSE_ROUGHNESS
                , 0.
                , vec2${state.fSuffix}(0., 0.)
            #endif
            #ifdef REFLECTIVITY
                , vec3${state.fSuffix}(0., 0., ${aoIntensity})
                , vec4${state.fSuffix}(1.)
            #endif
            #if defined(METALLICWORKFLOW) && defined(REFLECTIVITY)  && defined(AOSTOREINMETALMAPRED)
                , aoOut.ambientOcclusionColor
            #endif
            #ifdef MICROSURFACEMAP
                , microSurfaceTexel <== not handled!
            #endif
            );

            ${state._declareLocalVar("microSurface", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = reflectivityOut.microSurface;
            ${state._declareLocalVar("roughness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = reflectivityOut.roughness;
            ${state._declareLocalVar("diffuseRoughness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = reflectivityOut.diffuseRoughness;

            #ifdef METALLICWORKFLOW
                surfaceAlbedo = reflectivityOut.surfaceAlbedo;
            #endif
            #if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
                aoOut.ambientOcclusionColor = reflectivityOut.ambientOcclusionColor;
            #endif\n`;
        return code;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        this._scene = state.sharedData.scene;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        if (!this._environmentBRDFTexture) {
            this._environmentBRDFTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetEnvironmentBRDFTexture"])(this._scene);
        }
        const reflectionBlock = this.reflection.isConnected ? this.reflection.connectedPoint?.ownerBlock : null;
        if (reflectionBlock) {
            // Need those variables to be setup when calling _injectVertexCode
            reflectionBlock.worldPositionConnectionPoint = this.worldPosition;
            reflectionBlock.cameraPositionConnectionPoint = this.cameraPosition;
            reflectionBlock.worldNormalConnectionPoint = this.worldNormal;
            reflectionBlock.viewConnectionPoint = this.view;
        }
        if (state.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            // Vertex
            this._injectVertexCode(state);
            return this;
        }
        // Fragment
        state.sharedData.forcedBindableBlocks.push(this);
        state.sharedData.blocksWithDefines.push(this);
        state.sharedData.blockingBlocks.push(this);
        if (this.generateOnlyFragmentCode) {
            state.sharedData.dynamicUniformBlocks.push(this);
        }
        const comments = `//${this.name}`;
        const normalShading = this.perturbedNormal;
        let worldPosVarName = this.worldPosition.associatedVariableName;
        let worldPosVarName4 = this.worldPosition.associatedVariableName;
        let worldNormalVarName = this.worldNormal.associatedVariableName;
        if (this.generateOnlyFragmentCode) {
            worldPosVarName = state._getFreeVariableName("globalWorldPos");
            state._emitFunction("pbr_globalworldpos", `${state._declareLocalVar(worldPosVarName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, false, true)};\n`, comments);
            state.compilationString += `${worldPosVarName} = ${this.worldPosition.associatedVariableName}.xyz;\n`;
            worldPosVarName4 = state._getFreeVariableName("globalWorldPos4");
            state._emitFunction("pbr_globalworldpos4", `${state._declareLocalVar(worldPosVarName4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, true)};\n`, comments);
            state.compilationString += `${worldPosVarName4} = ${this.worldPosition.associatedVariableName};\n`;
            worldNormalVarName = state._getFreeVariableName("globalWorldNormal");
            state._emitFunction("pbr_globalworldnorm", `${state._declareLocalVar(worldNormalVarName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, true)};\n`, comments);
            state.compilationString += `${worldNormalVarName} = ${this.worldNormal.associatedVariableName};\n`;
            state.compilationString += state._emitCodeFromInclude("shadowsVertex", comments, {
                repeatKey: "maxSimultaneousLights",
                substitutionVars: `worldPos,${this.worldPosition.associatedVariableName}`
            });
            state.compilationString += `#if DEBUGMODE > 0\n`;
            state.compilationString += `${state._declareLocalVar("vClipSpacePosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = vec4${state.fSuffix}((vec2${state.fSuffix}(${isWebGPU ? "fragmentInputs.position" : "gl_FragCoord.xy"}) / vec2${state.fSuffix}(1.0)) * 2.0 - 1.0, 0.0, 1.0);\n`;
            state.compilationString += `#endif\n`;
        } else {
            worldPosVarName = (isWebGPU ? "input." : "") + "v_" + worldPosVarName;
            worldNormalVarName = (isWebGPU ? "input." : "") + "v_" + worldNormalVarName;
        }
        this._environmentBrdfSamplerName = state._getFreeVariableName("environmentBrdfSampler");
        state._emit2DSampler(this._environmentBrdfSamplerName);
        state.sharedData.hints.needAlphaBlending = state.sharedData.hints.needAlphaBlending || this.useAlphaBlending;
        state.sharedData.hints.needAlphaTesting = state.sharedData.hints.needAlphaTesting || this.useAlphaTest;
        state._emitExtension("lod", "#extension GL_EXT_shader_texture_lod : enable", "defined(LODBASEDMICROSFURACE)");
        state._emitExtension("derivatives", "#extension GL_OES_standard_derivatives : enable");
        state._emitUniformFromString("vDebugMode", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, "defined(IGNORE) || DEBUGMODE > 0");
        state._emitUniformFromString("ambientFromScene", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        // Image processing uniforms
        state.uniforms.push("exposureLinear");
        state.uniforms.push("contrast");
        state.uniforms.push("vInverseScreenSize");
        state.uniforms.push("vignetteSettings1");
        state.uniforms.push("vignetteSettings2");
        state.uniforms.push("vCameraColorCurveNegative");
        state.uniforms.push("vCameraColorCurveNeutral");
        state.uniforms.push("vCameraColorCurvePositive");
        state.uniforms.push("txColorTransform");
        state.uniforms.push("colorTransformSettings");
        state.uniforms.push("ditherIntensity");
        //
        // Includes
        //
        if (!this.light) {
            if (this.generateOnlyFragmentCode && this.view.isConnected) {
                state.compilationString += `${state._declareLocalVar("vViewDepth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = (${this.view.associatedVariableName} * ${worldPosVarName4}).z;\n`;
            }
            // Emit for all lights
            state._emitFunctionFromInclude(state.supportUniformBuffers ? "lightUboDeclaration" : "lightFragmentDeclaration", comments, {
                repeatKey: "maxSimultaneousLights",
                substitutionVars: this.generateOnlyFragmentCode ? "varying," : undefined
            });
        } else {
            state._emitFunctionFromInclude(state.supportUniformBuffers ? "lightUboDeclaration" : "lightFragmentDeclaration", comments, {
                replaceStrings: [
                    {
                        search: /{X}/g,
                        replace: this._lightId.toString()
                    }
                ]
            }, this._lightId.toString());
        }
        state._emitFunctionFromInclude("helperFunctions", comments);
        state._emitFunctionFromInclude("importanceSampling", comments);
        state._emitFunctionFromInclude("pbrHelperFunctions", comments);
        state._emitFunctionFromInclude("imageProcessingDeclaration", comments);
        state._emitFunctionFromInclude("imageProcessingFunctions", comments);
        state._emitFunctionFromInclude("shadowsFragmentFunctions", comments);
        state._emitFunctionFromInclude("pbrDirectLightingSetupFunctions", comments);
        state._emitFunctionFromInclude("pbrDirectLightingFalloffFunctions", comments);
        state._emitFunctionFromInclude("pbrBRDFFunctions", comments, {
            replaceStrings: [
                {
                    search: /REFLECTIONMAP_SKYBOX/g,
                    replace: reflectionBlock?._defineSkyboxName ?? "REFLECTIONMAP_SKYBOX"
                }
            ]
        });
        state._emitFunctionFromInclude("hdrFilteringFunctions", comments);
        state._emitFunctionFromInclude("pbrDirectLightingFunctions", comments);
        state._emitFunctionFromInclude("pbrIBLFunctions", comments);
        state._emitFunctionFromInclude("pbrBlockAlbedoOpacity", comments);
        state._emitFunctionFromInclude("pbrBlockReflectivity", comments);
        state._emitFunctionFromInclude("pbrBlockAmbientOcclusion", comments);
        state._emitFunctionFromInclude("pbrBlockAlphaFresnel", comments);
        state._emitFunctionFromInclude("pbrBlockAnisotropic", comments);
        if (!isWebGPU) {
            // In WebGPU, those functions are part of pbrDirectLightingFunctions
            state._emitFunctionFromInclude("pbrClusteredLightingFunctions", comments);
        }
        //
        // code
        //
        state._emitUniformFromString("vLightingIntensity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        if (reflectionBlock?.generateOnlyFragmentCode) {
            state.compilationString += reflectionBlock.handleVertexSide(state);
        }
        // _____________________________ Geometry Information ____________________________
        this._vNormalWName = state._getFreeVariableName("vNormalW");
        state.compilationString += `${state._declareLocalVar(this._vNormalWName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = normalize(${worldNormalVarName});\n`;
        if (state._registerTempVariable("viewDirectionW")) {
            state.compilationString += `${state._declareLocalVar("viewDirectionW", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${this.cameraPosition.associatedVariableName} - ${worldPosVarName}.xyz);\n`;
        }
        state.compilationString += `${state._declareLocalVar("geometricNormalW", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${this._vNormalWName}.xyz;\n`;
        state.compilationString += `${state._declareLocalVar("normalW", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${normalShading.isConnected ? "normalize(" + normalShading.associatedVariableName + ".xyz)" : "geometricNormalW"};\n`;
        this._invertNormalName = state._getFreeVariableName("invertNormal");
        state._emitUniformFromString(this._invertNormalName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        state.compilationString += state._emitCodeFromInclude("pbrBlockNormalFinal", comments, {
            replaceStrings: [
                {
                    search: /vPositionW/g,
                    replace: worldPosVarName + ".xyz"
                },
                {
                    search: /vEyePosition.w/g,
                    replace: this._invertNormalName
                }
            ]
        });
        // _____________________________ Albedo & Opacity ______________________________
        state.compilationString += this._getAlbedoOpacityCode(state);
        state.compilationString += state._emitCodeFromInclude("depthPrePass", comments);
        // _____________________________ AO  _______________________________
        state.compilationString += this._getAmbientOcclusionCode(state);
        state.compilationString += state._emitCodeFromInclude("pbrBlockLightmapInit", comments);
        // _____________________________ UNLIT  _______________________________
        state.compilationString += `#ifdef UNLIT
                ${state._declareLocalVar("diffuseBase", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = vec3${state.fSuffix}(1., 1., 1.);
            #else\n`;
        // _____________________________ Reflectivity _______________________________
        state.compilationString += this._getReflectivityCode(state);
        // _____________________________ Geometry info _________________________________
        state.compilationString += state._emitCodeFromInclude("pbrBlockGeometryInfo", comments, {
            replaceStrings: [
                {
                    search: /REFLECTIONMAP_SKYBOX/g,
                    replace: reflectionBlock?._defineSkyboxName ?? "REFLECTIONMAP_SKYBOX"
                },
                {
                    search: /REFLECTIONMAP_3D/g,
                    replace: reflectionBlock?._define3DName ?? "REFLECTIONMAP_3D"
                }
            ]
        });
        // _____________________________ Anisotropy _______________________________________
        const anisotropyBlock = this.anisotropy.isConnected ? this.anisotropy.connectedPoint?.ownerBlock : null;
        if (anisotropyBlock) {
            anisotropyBlock.worldPositionConnectionPoint = this.worldPosition;
            anisotropyBlock.worldNormalConnectionPoint = this.worldNormal;
            state.compilationString += anisotropyBlock.getCode(state, !this.perturbedNormal.isConnected);
        }
        // _____________________________ Reflection _______________________________________
        if (reflectionBlock && reflectionBlock.hasTexture) {
            state.compilationString += reflectionBlock.getCode(state, anisotropyBlock ? "anisotropicOut.anisotropicNormal" : "normalW");
        }
        state._emitFunctionFromInclude("pbrBlockReflection", comments, {
            replaceStrings: [
                {
                    search: /computeReflectionCoords/g,
                    replace: "computeReflectionCoordsPBR"
                },
                {
                    search: /REFLECTIONMAP_3D/g,
                    replace: reflectionBlock?._define3DName ?? "REFLECTIONMAP_3D"
                },
                {
                    search: /REFLECTIONMAP_OPPOSITEZ/g,
                    replace: reflectionBlock?._defineOppositeZ ?? "REFLECTIONMAP_OPPOSITEZ"
                },
                {
                    search: /REFLECTIONMAP_PROJECTION/g,
                    replace: reflectionBlock?._defineProjectionName ?? "REFLECTIONMAP_PROJECTION"
                },
                {
                    search: /REFLECTIONMAP_SKYBOX/g,
                    replace: reflectionBlock?._defineSkyboxName ?? "REFLECTIONMAP_SKYBOX"
                },
                {
                    search: /LODINREFLECTIONALPHA/g,
                    replace: reflectionBlock?._defineLODReflectionAlpha ?? "LODINREFLECTIONALPHA"
                },
                {
                    search: /LINEARSPECULARREFLECTION/g,
                    replace: reflectionBlock?._defineLinearSpecularReflection ?? "LINEARSPECULARREFLECTION"
                },
                {
                    search: /vReflectionFilteringInfo/g,
                    replace: reflectionBlock?._vReflectionFilteringInfoName ?? "vReflectionFilteringInfo"
                }
            ]
        });
        // ___________________ Compute Reflectance aka R0 F0 info _________________________
        state.compilationString += state._emitCodeFromInclude("pbrBlockReflectance0", comments, {
            replaceStrings: [
                {
                    search: /metallicReflectanceFactors/g,
                    replace: (isWebGPU ? "uniforms." : "") + this._vMetallicReflectanceFactorsName
                }
            ]
        });
        // ________________________________ Sheen ______________________________
        const sheenBlock = this.sheen.isConnected ? this.sheen.connectedPoint?.ownerBlock : null;
        if (sheenBlock) {
            state.compilationString += sheenBlock.getCode(reflectionBlock, state);
        }
        state._emitFunctionFromInclude("pbrBlockSheen", comments, {
            replaceStrings: [
                {
                    search: /REFLECTIONMAP_3D/g,
                    replace: reflectionBlock?._define3DName ?? "REFLECTIONMAP_3D"
                },
                {
                    search: /REFLECTIONMAP_SKYBOX/g,
                    replace: reflectionBlock?._defineSkyboxName ?? "REFLECTIONMAP_SKYBOX"
                },
                {
                    search: /LODINREFLECTIONALPHA/g,
                    replace: reflectionBlock?._defineLODReflectionAlpha ?? "LODINREFLECTIONALPHA"
                },
                {
                    search: /LINEARSPECULARREFLECTION/g,
                    replace: reflectionBlock?._defineLinearSpecularReflection ?? "LINEARSPECULARREFLECTION"
                }
            ]
        });
        // ____________________ Clear Coat Initialization Code _____________________
        const clearcoatBlock = this.clearcoat.isConnected ? this.clearcoat.connectedPoint?.ownerBlock : null;
        state.compilationString += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$clearCoatBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClearCoatBlock"]._GetInitializationCode(state, clearcoatBlock);
        // _____________________________ Iridescence _______________________________
        const iridescenceBlock = this.iridescence.isConnected ? this.iridescence.connectedPoint?.ownerBlock : null;
        state.compilationString += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$iridescenceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IridescenceBlock"].GetCode(iridescenceBlock, state);
        state._emitFunctionFromInclude("pbrBlockIridescence", comments, {
            replaceStrings: []
        });
        // _____________________________ Clear Coat ____________________________
        const generateTBNSpace = !this.perturbedNormal.isConnected && !this.anisotropy.isConnected;
        const isTangentConnectedToPerturbNormal = this.perturbedNormal.isConnected && this.perturbedNormal.connectedPoint?.ownerBlock.worldTangent?.isConnected;
        const isTangentConnectedToAnisotropy = this.anisotropy.isConnected && (this.anisotropy.connectedPoint?.ownerBlock).worldTangent.isConnected;
        let vTBNAvailable = isTangentConnectedToPerturbNormal || !this.perturbedNormal.isConnected && isTangentConnectedToAnisotropy;
        state.compilationString += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$clearCoatBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClearCoatBlock"].GetCode(state, clearcoatBlock, reflectionBlock, worldPosVarName, generateTBNSpace, vTBNAvailable, worldNormalVarName);
        if (generateTBNSpace) {
            vTBNAvailable = clearcoatBlock?.worldTangent.isConnected ?? false;
        }
        state._emitFunctionFromInclude("pbrBlockClearcoat", comments, {
            replaceStrings: [
                {
                    search: /computeReflectionCoords/g,
                    replace: "computeReflectionCoordsPBR"
                },
                {
                    search: /REFLECTIONMAP_3D/g,
                    replace: reflectionBlock?._define3DName ?? "REFLECTIONMAP_3D"
                },
                {
                    search: /REFLECTIONMAP_OPPOSITEZ/g,
                    replace: reflectionBlock?._defineOppositeZ ?? "REFLECTIONMAP_OPPOSITEZ"
                },
                {
                    search: /REFLECTIONMAP_PROJECTION/g,
                    replace: reflectionBlock?._defineProjectionName ?? "REFLECTIONMAP_PROJECTION"
                },
                {
                    search: /REFLECTIONMAP_SKYBOX/g,
                    replace: reflectionBlock?._defineSkyboxName ?? "REFLECTIONMAP_SKYBOX"
                },
                {
                    search: /LODINREFLECTIONALPHA/g,
                    replace: reflectionBlock?._defineLODReflectionAlpha ?? "LODINREFLECTIONALPHA"
                },
                {
                    search: /LINEARSPECULARREFLECTION/g,
                    replace: reflectionBlock?._defineLinearSpecularReflection ?? "LINEARSPECULARREFLECTION"
                },
                {
                    search: /defined\(TANGENT\)/g,
                    replace: vTBNAvailable ? "defined(TANGENT)" : "defined(IGNORE)"
                }
            ]
        });
        // _________________________ Specular Environment Reflectance __________________________
        state.compilationString += state._emitCodeFromInclude("pbrBlockReflectance", comments, {
            replaceStrings: [
                {
                    search: /REFLECTIONMAP_SKYBOX/g,
                    replace: reflectionBlock?._defineSkyboxName ?? "REFLECTIONMAP_SKYBOX"
                },
                {
                    search: /REFLECTIONMAP_3D/g,
                    replace: reflectionBlock?._define3DName ?? "REFLECTIONMAP_3D"
                },
                {
                    search: /uniforms\.vReflectivityColor/g,
                    replace: "vReflectivityColor"
                }
            ]
        });
        // ___________________________________ SubSurface ______________________________________
        const subsurfaceBlock = this.subsurface.isConnected ? this.subsurface.connectedPoint?.ownerBlock : null;
        const refractionBlock = this.subsurface.isConnected ? this.subsurface.connectedPoint?.ownerBlock.refraction.connectedPoint?.ownerBlock : null;
        if (refractionBlock) {
            refractionBlock.viewConnectionPoint = this.view;
            refractionBlock.indexOfRefractionConnectionPoint = this.indexOfRefraction;
        }
        state.compilationString += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$subSurfaceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubSurfaceBlock"].GetCode(state, subsurfaceBlock, reflectionBlock, worldPosVarName);
        state._emitFunctionFromInclude("pbrBlockSubSurface", comments, {
            replaceStrings: [
                {
                    search: /REFLECTIONMAP_3D/g,
                    replace: reflectionBlock?._define3DName ?? "REFLECTIONMAP_3D"
                },
                {
                    search: /REFLECTIONMAP_OPPOSITEZ/g,
                    replace: reflectionBlock?._defineOppositeZ ?? "REFLECTIONMAP_OPPOSITEZ"
                },
                {
                    search: /REFLECTIONMAP_PROJECTION/g,
                    replace: reflectionBlock?._defineProjectionName ?? "REFLECTIONMAP_PROJECTION"
                },
                {
                    search: /SS_REFRACTIONMAP_3D/g,
                    replace: refractionBlock?._define3DName ?? "SS_REFRACTIONMAP_3D"
                },
                {
                    search: /SS_LODINREFRACTIONALPHA/g,
                    replace: refractionBlock?._defineLODRefractionAlpha ?? "SS_LODINREFRACTIONALPHA"
                },
                {
                    search: /SS_LINEARSPECULARREFRACTION/g,
                    replace: refractionBlock?._defineLinearSpecularRefraction ?? "SS_LINEARSPECULARREFRACTION"
                },
                {
                    search: /SS_REFRACTIONMAP_OPPOSITEZ/g,
                    replace: refractionBlock?._defineOppositeZ ?? "SS_REFRACTIONMAP_OPPOSITEZ"
                }
            ]
        });
        // _____________________________ Direct Lighting Info __________________________________
        state.compilationString += state._emitCodeFromInclude("pbrBlockDirectLighting", comments);
        if (this.light) {
            state.compilationString += state._emitCodeFromInclude("lightFragment", comments, {
                replaceStrings: [
                    {
                        search: /{X}/g,
                        replace: this._lightId.toString()
                    },
                    {
                        search: new RegExp(`${isWebGPU ? "fragmentInputs." : ""}vPositionW`, "g"),
                        replace: worldPosVarName + ".xyz"
                    },
                    {
                        search: /uniforms\.vReflectivityColor/g,
                        replace: "vReflectivityColor"
                    }
                ]
            });
        } else {
            let substitutionVars = `vPositionW,${worldPosVarName}.xyz`;
            if (isWebGPU) {
                substitutionVars = "fragmentInputs." + substitutionVars;
                if (this.generateOnlyFragmentCode) {
                    substitutionVars += `,fragmentInputs.vViewDepth,vViewDepth`;
                }
            }
            state.compilationString += state._emitCodeFromInclude("lightFragment", comments, {
                repeatKey: "maxSimultaneousLights",
                substitutionVars: substitutionVars + ",uniforms.vReflectivityColor,vReflectivityColor"
            });
        }
        // _____________________________ Compute Final Lit Components ________________________
        state.compilationString += state._emitCodeFromInclude("pbrBlockFinalLitComponents", comments);
        // _____________________________ UNLIT (2) ________________________
        state.compilationString += `#endif\n`; // UNLIT
        // _____________________________ Compute Final Unlit Components ________________________
        const aoColor = this.ambientColor.isConnected ? this.ambientColor.associatedVariableName : `vec3${state.fSuffix}(0., 0., 0.)`;
        let aoDirectLightIntensity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].DEFAULT_AO_ON_ANALYTICAL_LIGHTS.toString();
        if (aoDirectLightIntensity.indexOf(".") === -1) {
            aoDirectLightIntensity += ".";
        }
        let replaceStrings = [
            {
                search: /vec3 finalEmissive[\s\S]*?finalEmissive\*=vLightingIntensity\.y;/g,
                replace: ""
            },
            {
                search: new RegExp(`${isWebGPU ? "uniforms." : ""}vAmbientColor`, "g"),
                replace: aoColor + ` * ${isWebGPU ? "uniforms." : ""}ambientFromScene`
            },
            {
                search: new RegExp(`${isWebGPU ? "uniforms." : ""}vAmbientInfos.w`, "g"),
                replace: aoDirectLightIntensity
            }
        ];
        if (isWebGPU) {
            replaceStrings[0] = {
                search: /var finalEmissive[\s\S]*?finalEmissive\*=uniforms.vLightingIntensity\.y;/g,
                replace: ""
            };
        }
        state.compilationString += state._emitCodeFromInclude("pbrBlockFinalUnlitComponents", comments, {
            replaceStrings: replaceStrings
        });
        // _____________________________ Output Final Color Composition ________________________
        state.compilationString += state._emitCodeFromInclude("pbrBlockFinalColorComposition", comments, {
            replaceStrings: [
                {
                    search: /finalEmissive/g,
                    replace: `vec3${state.fSuffix}(0.)`
                }
            ]
        });
        // _____________________________ Apply image processing ________________________
        if (isWebGPU) {
            replaceStrings = [
                {
                    search: /mesh.visibility/g,
                    replace: "1."
                }
            ];
        } else {
            replaceStrings = [
                {
                    search: /visibility/g,
                    replace: "1."
                }
            ];
        }
        state.compilationString += state._emitCodeFromInclude("pbrBlockImageProcessing", comments, {
            replaceStrings: replaceStrings
        });
        // _____________________________ Generate debug code ________________________
        const colorOutput = isWebGPU ? "fragmentOutputs.color" : "gl_FragColor";
        replaceStrings = [
            {
                search: new RegExp(`${isWebGPU ? "fragmentInputs." : ""}vNormalW`, "g"),
                replace: this._vNormalWName
            },
            {
                search: new RegExp(`${isWebGPU ? "fragmentInputs." : ""}vPositionW`, "g"),
                replace: worldPosVarName
            },
            {
                search: /uniforms\.vReflectivityColor/g,
                replace: "vReflectivityColor"
            },
            {
                search: /albedoTexture\.rgb;/g,
                replace: `vec3${state.fSuffix}(1.);\n${colorOutput}.rgb = toGammaSpace(${colorOutput}.rgb);\n`
            }
        ];
        state.compilationString += state._emitCodeFromInclude("pbrDebug", comments, {
            replaceStrings: replaceStrings
        });
        // _____________________________ Generate end points ________________________
        for (const output of this._outputs){
            if (output.hasEndpoints) {
                const remap = MapOutputToVariable[output.name];
                if (remap) {
                    const [varName, conditions] = remap;
                    if (conditions) {
                        state.compilationString += `#if ${conditions}\n`;
                    }
                    state.compilationString += `${state._declareOutput(output)} = ${varName};\n`;
                    if (conditions) {
                        state.compilationString += `#else\n`;
                        state.compilationString += `${state._declareOutput(output)} = vec3${state.fSuffix}(0.);\n`;
                        state.compilationString += `#endif\n`;
                    }
                } else {
                    state.sharedData.raiseBuildError(`There's no remapping for the ${output.name} end point! No code generated`);
                }
            }
        }
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.lightFalloff = ${this.lightFalloff};\n`;
        codeString += `${this._codeVariableName}.useAlphaTest = ${this.useAlphaTest};\n`;
        codeString += `${this._codeVariableName}.alphaTestCutoff = ${this.alphaTestCutoff};\n`;
        codeString += `${this._codeVariableName}.useAlphaBlending = ${this.useAlphaBlending};\n`;
        codeString += `${this._codeVariableName}.useRadianceOverAlpha = ${this.useRadianceOverAlpha};\n`;
        codeString += `${this._codeVariableName}.useSpecularOverAlpha = ${this.useSpecularOverAlpha};\n`;
        codeString += `${this._codeVariableName}.enableSpecularAntiAliasing = ${this.enableSpecularAntiAliasing};\n`;
        codeString += `${this._codeVariableName}.realTimeFiltering = ${this.realTimeFiltering};\n`;
        codeString += `${this._codeVariableName}.realTimeFilteringQuality = ${this.realTimeFilteringQuality};\n`;
        codeString += `${this._codeVariableName}.useEnergyConservation = ${this.useEnergyConservation};\n`;
        codeString += `${this._codeVariableName}.useRadianceOcclusion = ${this.useRadianceOcclusion};\n`;
        codeString += `${this._codeVariableName}.useHorizonOcclusion = ${this.useHorizonOcclusion};\n`;
        codeString += `${this._codeVariableName}.unlit = ${this.unlit};\n`;
        codeString += `${this._codeVariableName}.forceNormalForward = ${this.forceNormalForward};\n`;
        codeString += `${this._codeVariableName}.debugMode = ${this.debugMode};\n`;
        codeString += `${this._codeVariableName}.debugLimit = ${this.debugLimit};\n`;
        codeString += `${this._codeVariableName}.debugFactor = ${this.debugFactor};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        if (this.light) {
            serializationObject.lightId = this.light.id;
        }
        serializationObject.lightFalloff = this.lightFalloff;
        serializationObject.useAlphaTest = this.useAlphaTest;
        serializationObject.alphaTestCutoff = this.alphaTestCutoff;
        serializationObject.useAlphaBlending = this.useAlphaBlending;
        serializationObject.useRadianceOverAlpha = this.useRadianceOverAlpha;
        serializationObject.useSpecularOverAlpha = this.useSpecularOverAlpha;
        serializationObject.enableSpecularAntiAliasing = this.enableSpecularAntiAliasing;
        serializationObject.realTimeFiltering = this.realTimeFiltering;
        serializationObject.realTimeFilteringQuality = this.realTimeFilteringQuality;
        serializationObject.useEnergyConservation = this.useEnergyConservation;
        serializationObject.useRadianceOcclusion = this.useRadianceOcclusion;
        serializationObject.useHorizonOcclusion = this.useHorizonOcclusion;
        serializationObject.unlit = this.unlit;
        serializationObject.forceNormalForward = this.forceNormalForward;
        serializationObject.debugMode = this.debugMode;
        serializationObject.debugLimit = this.debugLimit;
        serializationObject.debugFactor = this.debugFactor;
        serializationObject.generateOnlyFragmentCode = this.generateOnlyFragmentCode;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        if (serializationObject.lightId) {
            this.light = scene.getLightById(serializationObject.lightId);
        }
        this.lightFalloff = serializationObject.lightFalloff ?? 0;
        this.useAlphaTest = serializationObject.useAlphaTest;
        this.alphaTestCutoff = serializationObject.alphaTestCutoff;
        this.useAlphaBlending = serializationObject.useAlphaBlending;
        this.useRadianceOverAlpha = serializationObject.useRadianceOverAlpha;
        this.useSpecularOverAlpha = serializationObject.useSpecularOverAlpha;
        this.enableSpecularAntiAliasing = serializationObject.enableSpecularAntiAliasing;
        this.realTimeFiltering = !!serializationObject.realTimeFiltering;
        this.realTimeFilteringQuality = serializationObject.realTimeFilteringQuality ?? 8;
        this.useEnergyConservation = serializationObject.useEnergyConservation;
        this.useRadianceOcclusion = serializationObject.useRadianceOcclusion;
        this.useHorizonOcclusion = serializationObject.useHorizonOcclusion;
        this.unlit = serializationObject.unlit;
        this.forceNormalForward = !!serializationObject.forceNormalForward;
        this.debugMode = serializationObject.debugMode;
        this.debugLimit = serializationObject.debugLimit;
        this.debugFactor = serializationObject.debugFactor;
        this.generateOnlyFragmentCode = !!serializationObject.generateOnlyFragmentCode;
        this._setTarget();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Direct lights", 1 /* PropertyTypeForEdition.Float */ , "INTENSITY", {
        min: 0,
        max: 1,
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "directIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Environment lights", 1 /* PropertyTypeForEdition.Float */ , "INTENSITY", {
        min: 0,
        max: 1,
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "environmentIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Specular highlights", 1 /* PropertyTypeForEdition.Float */ , "INTENSITY", {
        min: 0,
        max: 1,
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "specularIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Light falloff", 5 /* PropertyTypeForEdition.List */ , "LIGHTING & COLORS", {
        notifiers: {
            update: true
        },
        options: [
            {
                label: "Physical",
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_PHYSICAL
            },
            {
                label: "GLTF",
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_GLTF
            },
            {
                label: "Standard",
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_STANDARD
            }
        ]
    })
], PBRMetallicRoughnessBlock.prototype, "lightFalloff", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Alpha Testing", 0 /* PropertyTypeForEdition.Boolean */ , "OPACITY")
], PBRMetallicRoughnessBlock.prototype, "useAlphaTest", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Alpha CutOff", 1 /* PropertyTypeForEdition.Float */ , "OPACITY", {
        min: 0,
        max: 1,
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "alphaTestCutoff", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Alpha blending", 0 /* PropertyTypeForEdition.Boolean */ , "OPACITY")
], PBRMetallicRoughnessBlock.prototype, "useAlphaBlending", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Radiance over alpha", 0 /* PropertyTypeForEdition.Boolean */ , "RENDERING", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "useRadianceOverAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Specular over alpha", 0 /* PropertyTypeForEdition.Boolean */ , "RENDERING", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "useSpecularOverAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Specular anti-aliasing", 0 /* PropertyTypeForEdition.Boolean */ , "RENDERING", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "enableSpecularAntiAliasing", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Realtime filtering", 0 /* PropertyTypeForEdition.Boolean */ , "RENDERING", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "realTimeFiltering", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Realtime filtering quality", 5 /* PropertyTypeForEdition.List */ , "RENDERING", {
        notifiers: {
            update: true
        },
        options: [
            {
                label: "Low",
                value: 8
            },
            {
                label: "Medium",
                value: 16
            },
            {
                label: "High",
                value: 64
            }
        ]
    })
], PBRMetallicRoughnessBlock.prototype, "realTimeFilteringQuality", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Diffuse Model", 5 /* PropertyTypeForEdition.List */ , "RENDERING", {
        notifiers: {
            update: true
        },
        options: [
            {
                label: "Lambert",
                value: 2
            },
            {
                label: "Burley",
                value: 1
            },
            {
                label: "Oren-Nayar",
                value: 0
            },
            {
                label: "Legacy",
                value: 3
            }
        ]
    })
], PBRMetallicRoughnessBlock.prototype, "baseDiffuseModel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Energy Conservation", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "useEnergyConservation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Radiance occlusion", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "useRadianceOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Horizon occlusion", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "useHorizonOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Unlit", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "unlit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Force normal forward", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "forceNormalForward", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Generate only fragment code", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            rebuild: true,
            update: true,
            onValidation: PBRMetallicRoughnessBlock._OnGenerateOnlyFragmentCodeChanged
        }
    })
], PBRMetallicRoughnessBlock.prototype, "generateOnlyFragmentCode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Debug mode", 5 /* PropertyTypeForEdition.List */ , "DEBUG", {
        notifiers: {
            update: true
        },
        options: [
            {
                label: "None",
                value: 0
            },
            // Geometry
            {
                label: "Normalized position",
                value: 1
            },
            {
                label: "Normals",
                value: 2
            },
            {
                label: "Tangents",
                value: 3
            },
            {
                label: "Bitangents",
                value: 4
            },
            {
                label: "Bump Normals",
                value: 5
            },
            //{ label: "UV1", value: 6 },
            //{ label: "UV2", value: 7 },
            {
                label: "ClearCoat Normals",
                value: 8
            },
            {
                label: "ClearCoat Tangents",
                value: 9
            },
            {
                label: "ClearCoat Bitangents",
                value: 10
            },
            {
                label: "Anisotropic Normals",
                value: 11
            },
            {
                label: "Anisotropic Tangents",
                value: 12
            },
            {
                label: "Anisotropic Bitangents",
                value: 13
            },
            // Maps
            //{ label: "Emissive Map", value: 23 },
            //{ label: "Light Map", value: 24 },
            // Env
            {
                label: "Env Refraction",
                value: 40
            },
            {
                label: "Env Reflection",
                value: 41
            },
            {
                label: "Env Clear Coat",
                value: 42
            },
            // Lighting
            {
                label: "Direct Diffuse",
                value: 50
            },
            {
                label: "Direct Specular",
                value: 51
            },
            {
                label: "Direct Clear Coat",
                value: 52
            },
            {
                label: "Direct Sheen",
                value: 53
            },
            {
                label: "Env Irradiance",
                value: 54
            },
            // Lighting Params
            {
                label: "Surface Albedo",
                value: 60
            },
            {
                label: "Reflectance 0",
                value: 61
            },
            {
                label: "Metallic",
                value: 62
            },
            {
                label: "Metallic F0",
                value: 71
            },
            {
                label: "Roughness",
                value: 63
            },
            {
                label: "AlphaG",
                value: 64
            },
            {
                label: "NdotV",
                value: 65
            },
            {
                label: "ClearCoat Color",
                value: 66
            },
            {
                label: "ClearCoat Roughness",
                value: 67
            },
            {
                label: "ClearCoat NdotV",
                value: 68
            },
            {
                label: "Transmittance",
                value: 69
            },
            {
                label: "Refraction Transmittance",
                value: 70
            },
            // Misc
            {
                label: "SEO",
                value: 80
            },
            {
                label: "EHO",
                value: 81
            },
            {
                label: "Energy Factor",
                value: 82
            },
            {
                label: "Specular Reflectance",
                value: 83
            },
            {
                label: "Clear Coat Reflectance",
                value: 84
            },
            {
                label: "Sheen Reflectance",
                value: 85
            },
            {
                label: "Luminance Over Alpha",
                value: 86
            },
            {
                label: "Alpha",
                value: 87
            },
            {
                label: "Albedo color",
                value: 88
            },
            {
                label: "Ambient occlusion color",
                value: 89
            }
        ]
    })
], PBRMetallicRoughnessBlock.prototype, "debugMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Split position", 1 /* PropertyTypeForEdition.Float */ , "DEBUG", {
        min: -1,
        max: 1,
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "debugLimit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Output factor", 1 /* PropertyTypeForEdition.Float */ , "DEBUG", {
        min: 0,
        max: 5,
        notifiers: {
            update: true
        }
    })
], PBRMetallicRoughnessBlock.prototype, "debugFactor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PBRMetallicRoughnessBlock", PBRMetallicRoughnessBlock); //# sourceMappingURL=pbrMetallicRoughnessBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$pbrMetallicRoughnessBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$sheenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/sheenBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$anisotropyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/anisotropyBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$reflectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/reflectionBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$clearCoatBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/clearCoatBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$refractionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/refractionBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$subSurfaceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/subSurfaceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$iridescenceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/iridescenceBlock.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnisotropyBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$anisotropyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnisotropyBlock"],
    "ClearCoatBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$clearCoatBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClearCoatBlock"],
    "IridescenceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$iridescenceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IridescenceBlock"],
    "PBRMetallicRoughnessBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$pbrMetallicRoughnessBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PBRMetallicRoughnessBlock"],
    "ReflectionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$reflectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionBlock"],
    "RefractionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$refractionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefractionBlock"],
    "SheenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$sheenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheenBlock"],
    "SubSurfaceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$subSurfaceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubSurfaceBlock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$pbrMetallicRoughnessBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$sheenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/sheenBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$anisotropyBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/anisotropyBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$reflectionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/reflectionBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$clearCoatBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/clearCoatBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$refractionBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/refractionBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$subSurfaceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/subSurfaceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$PBR$2f$iridescenceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/PBR/iridescenceBlock.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Materials_Node_Blocks_PBR_8c75cd9f._.js.map