module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBRDFConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialBRDFDefines",
    ()=>MaterialBRDFDefines,
    "PBRBRDFConfiguration",
    ()=>PBRBRDFConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
;
;
;
;
class MaterialBRDFDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        this.BRDF_V_HEIGHT_CORRELATED = false;
        this.MS_BRDF_ENERGY_CONSERVATION = false;
        this.SPHERICAL_HARMONICS = false;
        this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = false;
        this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = true;
        this.LEGACY_SPECULAR_ENERGY_CONSERVATION = false;
        this.BASE_DIFFUSE_MODEL = 0;
        this.DIELECTRIC_SPECULAR_MODEL = 0;
        this.CONDUCTOR_SPECULAR_MODEL = 0;
    }
}
class PBRBRDFConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /** @internal */ _markAllSubMeshesAsMiscDirty() {
        this._internalMarkAllSubMeshesAsMiscDirty();
    }
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible() {
        return true;
    }
    constructor(material, addToPluginList = true){
        super(material, "PBRBRDF", 90, new MaterialBRDFDefines(), addToPluginList);
        this._useEnergyConservation = PBRBRDFConfiguration.DEFAULT_USE_ENERGY_CONSERVATION;
        /**
         * Defines if the material uses energy conservation.
         */ this.useEnergyConservation = PBRBRDFConfiguration.DEFAULT_USE_ENERGY_CONSERVATION;
        this._useSmithVisibilityHeightCorrelated = PBRBRDFConfiguration.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED;
        /**
         * LEGACY Mode set to false
         * Defines if the material uses height smith correlated visibility term.
         * If you intent to not use our default BRDF, you need to load a separate BRDF Texture for the PBR
         * You can either load https://assets.babylonjs.com/environments/uncorrelatedBRDF.png
         * or https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds to have more precision
         * Not relying on height correlated will also disable energy conservation.
         */ this.useSmithVisibilityHeightCorrelated = PBRBRDFConfiguration.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED;
        this._useSphericalHarmonics = PBRBRDFConfiguration.DEFAULT_USE_SPHERICAL_HARMONICS;
        /**
         * LEGACY Mode set to false
         * Defines if the material uses spherical harmonics vs spherical polynomials for the
         * diffuse part of the IBL.
         * The harmonics despite a tiny bigger cost has been proven to provide closer results
         * to the ground truth.
         */ this.useSphericalHarmonics = PBRBRDFConfiguration.DEFAULT_USE_SPHERICAL_HARMONICS;
        this._useSpecularGlossinessInputEnergyConservation = PBRBRDFConfiguration.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION;
        /**
         * Defines if the material uses energy conservation, when the specular workflow is active.
         * If activated, the albedo color is multiplied with (1. - maxChannel(specular color)).
         * If deactivated, a material is only physically plausible, when (albedo color + specular color) < 1.
         * In the deactivated case, the material author has to ensure energy conservation, for a physically plausible rendering.
         */ this.useSpecularGlossinessInputEnergyConservation = PBRBRDFConfiguration.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION;
        this._mixIblRadianceWithIrradiance = PBRBRDFConfiguration.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE;
        /**
         * Defines if IBL irradiance is used to augment rough radiance.
         * If activated, irradiance is blended into the radiance contribution when the material is rough.
         * This better approximates raytracing results for rough surfaces.
         */ this.mixIblRadianceWithIrradiance = PBRBRDFConfiguration.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE;
        this._useLegacySpecularEnergyConservation = PBRBRDFConfiguration.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION;
        /**
         * Defines if the legacy specular energy conservation is used.
         * If activated, the specular color is multiplied with (1. - maxChannel(albedo color)).
         */ this.useLegacySpecularEnergyConservation = PBRBRDFConfiguration.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION;
        this._baseDiffuseModel = PBRBRDFConfiguration.DEFAULT_DIFFUSE_MODEL;
        /**
         * Defines the base diffuse roughness model of the material.
         */ this.baseDiffuseModel = PBRBRDFConfiguration.DEFAULT_DIFFUSE_MODEL;
        this._dielectricSpecularModel = PBRBRDFConfiguration.DEFAULT_DIELECTRIC_SPECULAR_MODEL;
        /**
         * The material model to use for specular lighting of dielectric materials.
         */ this.dielectricSpecularModel = PBRBRDFConfiguration.DEFAULT_DIELECTRIC_SPECULAR_MODEL;
        this._conductorSpecularModel = PBRBRDFConfiguration.DEFAULT_CONDUCTOR_SPECULAR_MODEL;
        /**
         * The material model to use for specular lighting.
         */ this.conductorSpecularModel = PBRBRDFConfiguration.DEFAULT_CONDUCTOR_SPECULAR_MODEL;
        this._internalMarkAllSubMeshesAsMiscDirty = material._dirtyCallbacks[16];
        this._enable(true);
    }
    prepareDefines(defines) {
        defines.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated;
        defines.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated;
        defines.SPHERICAL_HARMONICS = this._useSphericalHarmonics;
        defines.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation;
        defines.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance;
        defines.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation;
        defines.BASE_DIFFUSE_MODEL = this._baseDiffuseModel;
        defines.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel;
        defines.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel;
    }
    getClassName() {
        return "PBRBRDFConfiguration";
    }
}
/**
 * Default value used for the energy conservation.
 * This should only be changed to adapt to the type of texture in scene.environmentBRDFTexture.
 */ PBRBRDFConfiguration.DEFAULT_USE_ENERGY_CONSERVATION = true;
/**
 * Default value used for the Smith Visibility Height Correlated mode.
 * This should only be changed to adapt to the type of texture in scene.environmentBRDFTexture.
 */ PBRBRDFConfiguration.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = true;
/**
 * Default value used for the IBL diffuse part.
 * This can help switching back to the polynomials mode globally which is a tiny bit
 * less GPU intensive at the drawback of a lower quality.
 */ PBRBRDFConfiguration.DEFAULT_USE_SPHERICAL_HARMONICS = true;
/**
 * Default value used for activating energy conservation for the specular workflow.
 * If activated, the albedo color is multiplied with (1. - maxChannel(specular color)).
 * If deactivated, a material is only physically plausible, when (albedo color + specular color) < 1.
 */ PBRBRDFConfiguration.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = true;
/**
 * Default value for whether IBL irradiance is used to augment rough radiance.
 * If activated, irradiance is blended into the radiance contribution when the material is rough.
 * This better approximates raytracing results for rough surfaces.
 */ PBRBRDFConfiguration.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = true;
/**
 * Default value for whether the legacy specular energy conservation is used.
 */ PBRBRDFConfiguration.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = true;
/**
 * Defines the default diffuse model used by the material.
 */ PBRBRDFConfiguration.DEFAULT_DIFFUSE_MODEL = 0;
/**
 * Defines the default dielectric specular model used by the material.
 */ PBRBRDFConfiguration.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0;
/**
 * Defines the default conductor specular model used by the material.
 */ PBRBRDFConfiguration.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "useEnergyConservation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "useSmithVisibilityHeightCorrelated", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "useSphericalHarmonics", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "useSpecularGlossinessInputEnergyConservation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "mixIblRadianceWithIrradiance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "useLegacySpecularEnergyConservation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("baseDiffuseModel"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "baseDiffuseModel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("dielectricSpecularModel"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "dielectricSpecularModel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("conductorSpecularModel"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBRDFConfiguration.prototype, "conductorSpecularModel", void 0); //# sourceMappingURL=pbrBRDFConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialClearCoatDefines",
    ()=>MaterialClearCoatDefines,
    "PBRClearCoatConfiguration",
    ()=>PBRClearCoatConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
class MaterialClearCoatDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        this.CLEARCOAT = false;
        this.CLEARCOAT_DEFAULTIOR = false;
        this.CLEARCOAT_TEXTURE = false;
        this.CLEARCOAT_TEXTURE_ROUGHNESS = false;
        this.CLEARCOAT_TEXTUREDIRECTUV = 0;
        this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0;
        this.CLEARCOAT_BUMP = false;
        this.CLEARCOAT_BUMPDIRECTUV = 0;
        this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = false;
        this.CLEARCOAT_REMAP_F0 = false;
        this.CLEARCOAT_TINT = false;
        this.CLEARCOAT_TINT_TEXTURE = false;
        this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0;
        this.CLEARCOAT_TINT_GAMMATEXTURE = false;
    }
}
class PBRClearCoatConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /** @internal */ _markAllSubMeshesAsTexturesDirty() {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsTexturesDirty();
    }
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible() {
        return true;
    }
    constructor(material, addToPluginList = true){
        super(material, "PBRClearCoat", 100, new MaterialClearCoatDefines(), addToPluginList);
        this._isEnabled = false;
        /**
         * Defines if the clear coat is enabled in the material.
         */ this.isEnabled = false;
        /**
         * Defines the clear coat layer strength (between 0 and 1) it defaults to 1.
         */ this.intensity = 1;
        /**
         * Defines the clear coat layer roughness.
         */ this.roughness = 0;
        this._indexOfRefraction = PBRClearCoatConfiguration._DefaultIndexOfRefraction;
        /**
         * Defines the index of refraction of the clear coat.
         * This defaults to 1.5 corresponding to a 0.04 f0 or a 4% reflectance at normal incidence
         * The default fits with a polyurethane material.
         * Changing the default value is more performance intensive.
         */ this.indexOfRefraction = PBRClearCoatConfiguration._DefaultIndexOfRefraction;
        this._texture = null;
        /**
         * Stores the clear coat values in a texture (red channel is intensity and green channel is roughness)
         * If useRoughnessFromMainTexture is false, the green channel of texture is not used and the green channel of textureRoughness is used instead
         * if textureRoughness is not empty, else no texture roughness is used
         */ this.texture = null;
        this._useRoughnessFromMainTexture = true;
        /**
         * Indicates that the green channel of the texture property will be used for roughness (default: true)
         * If false, the green channel from textureRoughness is used for roughness
         */ this.useRoughnessFromMainTexture = true;
        this._textureRoughness = null;
        /**
         * Stores the clear coat roughness in a texture (green channel)
         * Not used if useRoughnessFromMainTexture is true
         */ this.textureRoughness = null;
        this._remapF0OnInterfaceChange = true;
        /**
         * Defines if the F0 value should be remapped to account for the interface change in the material.
         */ this.remapF0OnInterfaceChange = true;
        this._bumpTexture = null;
        /**
         * Define the clear coat specific bump texture.
         */ this.bumpTexture = null;
        this._isTintEnabled = false;
        /**
         * Defines if the clear coat tint is enabled in the material.
         */ this.isTintEnabled = false;
        /**
         * Defines the clear coat tint of the material.
         * This is only use if tint is enabled
         */ this.tintColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        /**
         * Defines the distance at which the tint color should be found in the
         * clear coat media.
         * This is only use if tint is enabled
         */ this.tintColorAtDistance = 1;
        /**
         * Defines the clear coat layer thickness.
         * This is only use if tint is enabled
         */ this.tintThickness = 1;
        this._tintTexture = null;
        /**
         * Stores the clear tint values in a texture.
         * rgb is tint
         * a is a thickness factor
         */ this.tintTexture = null;
        this._internalMarkAllSubMeshesAsTexturesDirty = material._dirtyCallbacks[1];
    }
    isReadyForSubMesh(defines, scene, engine) {
        if (!this._isEnabled) {
            return true;
        }
        const disableBumpMap = this._material._disableBumpMap;
        if (defines._areTexturesDirty) {
            if (scene.texturesEnabled) {
                if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTextureEnabled) {
                    if (!this._texture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._textureRoughness && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTextureEnabled) {
                    if (!this._textureRoughness.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (engine.getCaps().standardDerivatives && this._bumpTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatBumpTextureEnabled && !disableBumpMap) {
                    // Bump texture cannot be not blocking.
                    if (!this._bumpTexture.isReady()) {
                        return false;
                    }
                }
                if (this._isTintEnabled && this._tintTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTintTextureEnabled) {
                    if (!this._tintTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    prepareDefinesBeforeAttributes(defines, scene) {
        if (this._isEnabled) {
            defines.CLEARCOAT = true;
            defines.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture;
            defines.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange;
            if (defines._areTexturesDirty) {
                if (scene.texturesEnabled) {
                    if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._texture, defines, "CLEARCOAT_TEXTURE");
                    } else {
                        defines.CLEARCOAT_TEXTURE = false;
                    }
                    if (this._textureRoughness && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._textureRoughness, defines, "CLEARCOAT_TEXTURE_ROUGHNESS");
                    } else {
                        defines.CLEARCOAT_TEXTURE_ROUGHNESS = false;
                    }
                    if (this._bumpTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatBumpTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._bumpTexture, defines, "CLEARCOAT_BUMP");
                    } else {
                        defines.CLEARCOAT_BUMP = false;
                    }
                    defines.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === PBRClearCoatConfiguration._DefaultIndexOfRefraction;
                    if (this._isTintEnabled) {
                        defines.CLEARCOAT_TINT = true;
                        if (this._tintTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTintTextureEnabled) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._tintTexture, defines, "CLEARCOAT_TINT_TEXTURE");
                            defines.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace;
                        } else {
                            defines.CLEARCOAT_TINT_TEXTURE = false;
                        }
                    } else {
                        defines.CLEARCOAT_TINT = false;
                        defines.CLEARCOAT_TINT_TEXTURE = false;
                    }
                }
            }
        } else {
            defines.CLEARCOAT = false;
            defines.CLEARCOAT_TEXTURE = false;
            defines.CLEARCOAT_TEXTURE_ROUGHNESS = false;
            defines.CLEARCOAT_BUMP = false;
            defines.CLEARCOAT_TINT = false;
            defines.CLEARCOAT_TINT_TEXTURE = false;
            defines.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = false;
            defines.CLEARCOAT_DEFAULTIOR = false;
            defines.CLEARCOAT_TEXTUREDIRECTUV = 0;
            defines.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0;
            defines.CLEARCOAT_BUMPDIRECTUV = 0;
            defines.CLEARCOAT_REMAP_F0 = false;
            defines.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0;
            defines.CLEARCOAT_TINT_GAMMATEXTURE = false;
        }
    }
    bindForSubMesh(uniformBuffer, scene, engine, subMesh) {
        if (!this._isEnabled) {
            return;
        }
        const defines = subMesh.materialDefines;
        const isFrozen = this._material.isFrozen;
        const disableBumpMap = this._material._disableBumpMap;
        const invertNormalMapX = this._material._invertNormalMapX;
        const invertNormalMapY = this._material._invertNormalMapY;
        if (!uniformBuffer.useUbo || !isFrozen || !uniformBuffer.isSync) {
            if ((this._texture || this._textureRoughness) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTextureEnabled) {
                uniformBuffer.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0);
                if (this._texture) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._texture, uniformBuffer, "clearCoat");
                }
                if (this._textureRoughness && !defines.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._textureRoughness, uniformBuffer, "clearCoatRoughness");
                }
            }
            if (this._bumpTexture && engine.getCaps().standardDerivatives && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTextureEnabled && !disableBumpMap) {
                uniformBuffer.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._bumpTexture, uniformBuffer, "clearCoatBump");
                if (scene._mirroredCameraPosition) {
                    uniformBuffer.updateFloat2("vClearCoatTangentSpaceParams", invertNormalMapX ? 1.0 : -1.0, invertNormalMapY ? 1.0 : -1.0);
                } else {
                    uniformBuffer.updateFloat2("vClearCoatTangentSpaceParams", invertNormalMapX ? -1.0 : 1.0, invertNormalMapY ? -1.0 : 1.0);
                }
            }
            if (this._tintTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTintTextureEnabled) {
                uniformBuffer.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._tintTexture, uniformBuffer, "clearCoatTint");
            }
            // Clear Coat General params
            uniformBuffer.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            // Clear Coat Refraction params
            const a = 1 - this._indexOfRefraction;
            const b = 1 + this._indexOfRefraction;
            const f0 = Math.pow(-a / b, 2); // Schlicks approx: (ior1 - ior2) / (ior1 + ior2) where ior2 for air is close to vacuum = 1.
            const eta = 1 / this._indexOfRefraction;
            uniformBuffer.updateFloat4("vClearCoatRefractionParams", f0, eta, a, b);
            if (this._isTintEnabled) {
                uniformBuffer.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(0.00001, this.tintThickness));
                uniformBuffer.updateFloat("clearCoatColorAtDistance", Math.max(0.00001, this.tintColorAtDistance));
            }
        }
        // Textures
        if (scene.texturesEnabled) {
            if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTextureEnabled) {
                uniformBuffer.setTexture("clearCoatSampler", this._texture);
            }
            if (this._textureRoughness && !defines.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTextureEnabled) {
                uniformBuffer.setTexture("clearCoatRoughnessSampler", this._textureRoughness);
            }
            if (this._bumpTexture && engine.getCaps().standardDerivatives && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatBumpTextureEnabled && !disableBumpMap) {
                uniformBuffer.setTexture("clearCoatBumpSampler", this._bumpTexture);
            }
            if (this._isTintEnabled && this._tintTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ClearCoatTintTextureEnabled) {
                uniformBuffer.setTexture("clearCoatTintSampler", this._tintTexture);
            }
        }
    }
    hasTexture(texture) {
        if (this._texture === texture) {
            return true;
        }
        if (this._textureRoughness === texture) {
            return true;
        }
        if (this._bumpTexture === texture) {
            return true;
        }
        if (this._tintTexture === texture) {
            return true;
        }
        return false;
    }
    getActiveTextures(activeTextures) {
        if (this._texture) {
            activeTextures.push(this._texture);
        }
        if (this._textureRoughness) {
            activeTextures.push(this._textureRoughness);
        }
        if (this._bumpTexture) {
            activeTextures.push(this._bumpTexture);
        }
        if (this._tintTexture) {
            activeTextures.push(this._tintTexture);
        }
    }
    getAnimatables(animatables) {
        if (this._texture && this._texture.animations && this._texture.animations.length > 0) {
            animatables.push(this._texture);
        }
        if (this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0) {
            animatables.push(this._textureRoughness);
        }
        if (this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0) {
            animatables.push(this._bumpTexture);
        }
        if (this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0) {
            animatables.push(this._tintTexture);
        }
    }
    dispose(forceDisposeTextures) {
        if (forceDisposeTextures) {
            this._texture?.dispose();
            this._textureRoughness?.dispose();
            this._bumpTexture?.dispose();
            this._tintTexture?.dispose();
        }
    }
    getClassName() {
        return "PBRClearCoatConfiguration";
    }
    addFallbacks(defines, fallbacks, currentRank) {
        if (defines.CLEARCOAT_BUMP) {
            fallbacks.addFallback(currentRank++, "CLEARCOAT_BUMP");
        }
        if (defines.CLEARCOAT_TINT) {
            fallbacks.addFallback(currentRank++, "CLEARCOAT_TINT");
        }
        if (defines.CLEARCOAT) {
            fallbacks.addFallback(currentRank++, "CLEARCOAT");
        }
        return currentRank;
    }
    getSamplers(samplers) {
        samplers.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler");
    }
    getUniforms() {
        return {
            ubo: [
                {
                    name: "vClearCoatParams",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "vClearCoatRefractionParams",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "vClearCoatInfos",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "clearCoatMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "clearCoatRoughnessMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "vClearCoatBumpInfos",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "vClearCoatTangentSpaceParams",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "clearCoatBumpMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "vClearCoatTintParams",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "clearCoatColorAtDistance",
                    size: 1,
                    type: "float"
                },
                {
                    name: "vClearCoatTintInfos",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "clearCoatTintMatrix",
                    size: 16,
                    type: "mat4"
                }
            ]
        };
    }
}
/**
 * This defaults to 1.5 corresponding to a 0.04 f0 or a 4% reflectance at normal incidence
 * The default fits with a polyurethane material.
 * @internal
 */ PBRClearCoatConfiguration._DefaultIndexOfRefraction = 1.5;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "isEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRClearCoatConfiguration.prototype, "intensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRClearCoatConfiguration.prototype, "roughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "indexOfRefraction", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "texture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "useRoughnessFromMainTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "textureRoughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "remapF0OnInterfaceChange", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "bumpTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "isTintEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], PBRClearCoatConfiguration.prototype, "tintColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRClearCoatConfiguration.prototype, "tintColorAtDistance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRClearCoatConfiguration.prototype, "tintThickness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRClearCoatConfiguration.prototype, "tintTexture", void 0); //# sourceMappingURL=pbrClearCoatConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialIridescenceDefines",
    ()=>MaterialIridescenceDefines,
    "PBRIridescenceConfiguration",
    ()=>PBRIridescenceConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
class MaterialIridescenceDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        this.IRIDESCENCE = false;
        this.IRIDESCENCE_TEXTURE = false;
        this.IRIDESCENCE_TEXTUREDIRECTUV = 0;
        this.IRIDESCENCE_THICKNESS_TEXTURE = false;
        this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0;
    }
}
class PBRIridescenceConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /** @internal */ _markAllSubMeshesAsTexturesDirty() {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsTexturesDirty();
    }
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible() {
        return true;
    }
    constructor(material, addToPluginList = true){
        super(material, "PBRIridescence", 110, new MaterialIridescenceDefines(), addToPluginList);
        this._isEnabled = false;
        /**
         * Defines if the iridescence is enabled in the material.
         */ this.isEnabled = false;
        /**
         * Defines the iridescence layer strength (between 0 and 1) it defaults to 1.
         */ this.intensity = 1;
        /**
         * Defines the minimum thickness of the thin-film layer given in nanometers (nm).
         */ this.minimumThickness = PBRIridescenceConfiguration._DefaultMinimumThickness;
        /**
         * Defines the maximum thickness of the thin-film layer given in nanometers (nm). This will be the thickness used if not thickness texture has been set.
         */ this.maximumThickness = PBRIridescenceConfiguration._DefaultMaximumThickness;
        /**
         * Defines the maximum thickness of the thin-film layer given in nanometers (nm).
         */ this.indexOfRefraction = PBRIridescenceConfiguration._DefaultIndexOfRefraction;
        this._texture = null;
        /**
         * Stores the iridescence intensity in a texture (red channel)
         */ this.texture = null;
        this._thicknessTexture = null;
        /**
         * Stores the iridescence thickness in a texture (green channel)
         */ this.thicknessTexture = null;
        this._internalMarkAllSubMeshesAsTexturesDirty = material._dirtyCallbacks[1];
    }
    isReadyForSubMesh(defines, scene) {
        if (!this._isEnabled) {
            return true;
        }
        if (defines._areTexturesDirty) {
            if (scene.texturesEnabled) {
                if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].IridescenceTextureEnabled) {
                    if (!this._texture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._thicknessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].IridescenceTextureEnabled) {
                    if (!this._thicknessTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    prepareDefinesBeforeAttributes(defines, scene) {
        if (this._isEnabled) {
            defines.IRIDESCENCE = true;
            if (defines._areTexturesDirty) {
                if (scene.texturesEnabled) {
                    if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].IridescenceTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._texture, defines, "IRIDESCENCE_TEXTURE");
                    } else {
                        defines.IRIDESCENCE_TEXTURE = false;
                    }
                    if (this._thicknessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].IridescenceTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._thicknessTexture, defines, "IRIDESCENCE_THICKNESS_TEXTURE");
                    } else {
                        defines.IRIDESCENCE_THICKNESS_TEXTURE = false;
                    }
                }
            }
        } else {
            defines.IRIDESCENCE = false;
            defines.IRIDESCENCE_TEXTURE = false;
            defines.IRIDESCENCE_THICKNESS_TEXTURE = false;
            defines.IRIDESCENCE_TEXTUREDIRECTUV = 0;
            defines.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0;
        }
    }
    bindForSubMesh(uniformBuffer, scene) {
        if (!this._isEnabled) {
            return;
        }
        const isFrozen = this._material.isFrozen;
        if (!uniformBuffer.useUbo || !isFrozen || !uniformBuffer.isSync) {
            if ((this._texture || this._thicknessTexture) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].IridescenceTextureEnabled) {
                uniformBuffer.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0);
                if (this._texture) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._texture, uniformBuffer, "iridescence");
                }
                if (this._thicknessTexture) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._thicknessTexture, uniformBuffer, "iridescenceThickness");
                }
            }
            // Clear Coat General params
            uniformBuffer.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness);
        }
        // Textures
        if (scene.texturesEnabled) {
            if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].IridescenceTextureEnabled) {
                uniformBuffer.setTexture("iridescenceSampler", this._texture);
            }
            if (this._thicknessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].IridescenceTextureEnabled) {
                uniformBuffer.setTexture("iridescenceThicknessSampler", this._thicknessTexture);
            }
        }
    }
    hasTexture(texture) {
        if (this._texture === texture) {
            return true;
        }
        if (this._thicknessTexture === texture) {
            return true;
        }
        return false;
    }
    getActiveTextures(activeTextures) {
        if (this._texture) {
            activeTextures.push(this._texture);
        }
        if (this._thicknessTexture) {
            activeTextures.push(this._thicknessTexture);
        }
    }
    getAnimatables(animatables) {
        if (this._texture && this._texture.animations && this._texture.animations.length > 0) {
            animatables.push(this._texture);
        }
        if (this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0) {
            animatables.push(this._thicknessTexture);
        }
    }
    dispose(forceDisposeTextures) {
        if (forceDisposeTextures) {
            this._texture?.dispose();
            this._thicknessTexture?.dispose();
        }
    }
    getClassName() {
        return "PBRIridescenceConfiguration";
    }
    addFallbacks(defines, fallbacks, currentRank) {
        if (defines.IRIDESCENCE) {
            fallbacks.addFallback(currentRank++, "IRIDESCENCE");
        }
        return currentRank;
    }
    getSamplers(samplers) {
        samplers.push("iridescenceSampler", "iridescenceThicknessSampler");
    }
    getUniforms() {
        return {
            ubo: [
                {
                    name: "vIridescenceParams",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "vIridescenceInfos",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "iridescenceMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "iridescenceThicknessMatrix",
                    size: 16,
                    type: "mat4"
                }
            ]
        };
    }
}
/**
 * The default minimum thickness of the thin-film layer given in nanometers (nm).
 * Defaults to 100 nm.
 * @internal
 */ PBRIridescenceConfiguration._DefaultMinimumThickness = 100;
/**
 * The default maximum thickness of the thin-film layer given in nanometers (nm).
 * Defaults to 400 nm.
 * @internal
 */ PBRIridescenceConfiguration._DefaultMaximumThickness = 400;
/**
 * The default index of refraction of the thin-film layer.
 * Defaults to 1.3
 * @internal
 */ PBRIridescenceConfiguration._DefaultIndexOfRefraction = 1.3;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRIridescenceConfiguration.prototype, "isEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRIridescenceConfiguration.prototype, "intensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRIridescenceConfiguration.prototype, "minimumThickness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRIridescenceConfiguration.prototype, "maximumThickness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRIridescenceConfiguration.prototype, "indexOfRefraction", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRIridescenceConfiguration.prototype, "texture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRIridescenceConfiguration.prototype, "thicknessTexture", void 0); //# sourceMappingURL=pbrIridescenceConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrAnisotropicConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialAnisotropicDefines",
    ()=>MaterialAnisotropicDefines,
    "PBRAnisotropicConfiguration",
    ()=>PBRAnisotropicConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
class MaterialAnisotropicDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        this.ANISOTROPIC = false;
        this.ANISOTROPIC_TEXTURE = false;
        this.ANISOTROPIC_TEXTUREDIRECTUV = 0;
        this.ANISOTROPIC_LEGACY = false;
        this.MAINUV1 = false;
    }
}
class PBRAnisotropicConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /**
     * Sets the anisotropy direction as an angle.
     */ set angle(value) {
        this.direction.x = Math.cos(value);
        this.direction.y = Math.sin(value);
    }
    /**
     * Gets the anisotropy angle value in radians.
     * @returns the anisotropy angle value in radians.
     */ get angle() {
        return Math.atan2(this.direction.y, this.direction.x);
    }
    /** @internal */ _markAllSubMeshesAsTexturesDirty() {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsTexturesDirty();
    }
    /** @internal */ _markAllSubMeshesAsMiscDirty() {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsMiscDirty();
    }
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible() {
        return true;
    }
    constructor(material, addToPluginList = true){
        super(material, "PBRAnisotropic", 110, new MaterialAnisotropicDefines(), addToPluginList);
        this._isEnabled = false;
        /**
         * Defines if the anisotropy is enabled in the material.
         */ this.isEnabled = false;
        /**
         * Defines the anisotropy strength (between 0 and 1) it defaults to 1.
         */ this.intensity = 1;
        /**
         * Defines if the effect is along the tangents, bitangents or in between.
         * By default, the effect is "stretching" the highlights along the tangents.
         */ this.direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0);
        this._texture = null;
        /**
         * Stores the anisotropy values in a texture.
         * rg is direction (like normal from -1 to 1)
         * b is a intensity
         */ this.texture = null;
        this._legacy = false;
        /**
         * Defines if the anisotropy is in legacy mode for backwards compatibility before 6.4.0.
         */ this.legacy = false;
        this._internalMarkAllSubMeshesAsTexturesDirty = material._dirtyCallbacks[1];
        this._internalMarkAllSubMeshesAsMiscDirty = material._dirtyCallbacks[16];
    }
    isReadyForSubMesh(defines, scene) {
        if (!this._isEnabled) {
            return true;
        }
        if (defines._areTexturesDirty) {
            if (scene.texturesEnabled) {
                if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].AnisotropicTextureEnabled) {
                    if (!this._texture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    prepareDefinesBeforeAttributes(defines, scene, mesh) {
        if (this._isEnabled) {
            defines.ANISOTROPIC = this._isEnabled;
            if (this._isEnabled && !mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].TangentKind)) {
                defines._needUVs = true;
                defines.MAINUV1 = true;
            }
            if (defines._areTexturesDirty) {
                if (scene.texturesEnabled) {
                    if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].AnisotropicTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._texture, defines, "ANISOTROPIC_TEXTURE");
                    } else {
                        defines.ANISOTROPIC_TEXTURE = false;
                    }
                }
            }
            if (defines._areMiscDirty) {
                defines.ANISOTROPIC_LEGACY = this._legacy;
            }
        } else {
            defines.ANISOTROPIC = false;
            defines.ANISOTROPIC_TEXTURE = false;
            defines.ANISOTROPIC_TEXTUREDIRECTUV = 0;
            defines.ANISOTROPIC_LEGACY = false;
        }
    }
    bindForSubMesh(uniformBuffer, scene) {
        if (!this._isEnabled) {
            return;
        }
        const isFrozen = this._material.isFrozen;
        if (!uniformBuffer.useUbo || !isFrozen || !uniformBuffer.isSync) {
            if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].AnisotropicTextureEnabled) {
                uniformBuffer.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._texture, uniformBuffer, "anisotropy");
            }
            // Anisotropy
            uniformBuffer.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity);
        }
        // Textures
        if (scene.texturesEnabled) {
            if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].AnisotropicTextureEnabled) {
                uniformBuffer.setTexture("anisotropySampler", this._texture);
            }
        }
    }
    hasTexture(texture) {
        if (this._texture === texture) {
            return true;
        }
        return false;
    }
    getActiveTextures(activeTextures) {
        if (this._texture) {
            activeTextures.push(this._texture);
        }
    }
    getAnimatables(animatables) {
        if (this._texture && this._texture.animations && this._texture.animations.length > 0) {
            animatables.push(this._texture);
        }
    }
    dispose(forceDisposeTextures) {
        if (forceDisposeTextures) {
            if (this._texture) {
                this._texture.dispose();
            }
        }
    }
    getClassName() {
        return "PBRAnisotropicConfiguration";
    }
    addFallbacks(defines, fallbacks, currentRank) {
        if (defines.ANISOTROPIC) {
            fallbacks.addFallback(currentRank++, "ANISOTROPIC");
        }
        return currentRank;
    }
    getSamplers(samplers) {
        samplers.push("anisotropySampler");
    }
    getUniforms() {
        return {
            ubo: [
                {
                    name: "vAnisotropy",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "vAnisotropyInfos",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "anisotropyMatrix",
                    size: 16,
                    type: "mat4"
                }
            ]
        };
    }
    /**
     * Parses a anisotropy Configuration from a serialized object.
     * @param source - Serialized object.
     * @param scene Defines the scene we are parsing for
     * @param rootUrl Defines the rootUrl to load from
     */ parse(source, scene, rootUrl) {
        super.parse(source, scene, rootUrl);
        // Backward compatibility
        if (source.legacy === undefined) {
            this.legacy = true;
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRAnisotropicConfiguration.prototype, "isEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRAnisotropicConfiguration.prototype, "intensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsVector2"])()
], PBRAnisotropicConfiguration.prototype, "direction", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRAnisotropicConfiguration.prototype, "texture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRAnisotropicConfiguration.prototype, "legacy", void 0); //# sourceMappingURL=pbrAnisotropicConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSheenConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialSheenDefines",
    ()=>MaterialSheenDefines,
    "PBRSheenConfiguration",
    ()=>PBRSheenConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
class MaterialSheenDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        this.SHEEN = false;
        this.SHEEN_TEXTURE = false;
        this.SHEEN_GAMMATEXTURE = false;
        this.SHEEN_TEXTURE_ROUGHNESS = false;
        this.SHEEN_TEXTUREDIRECTUV = 0;
        this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0;
        this.SHEEN_LINKWITHALBEDO = false;
        this.SHEEN_ROUGHNESS = false;
        this.SHEEN_ALBEDOSCALING = false;
        this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = false;
    }
}
class PBRSheenConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /** @internal */ _markAllSubMeshesAsTexturesDirty() {
        this._enable(this._isEnabled);
        this._internalMarkAllSubMeshesAsTexturesDirty();
    }
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible() {
        return true;
    }
    constructor(material, addToPluginList = true){
        super(material, "Sheen", 120, new MaterialSheenDefines(), addToPluginList);
        this._isEnabled = false;
        /**
         * Defines if the material uses sheen.
         */ this.isEnabled = false;
        this._linkSheenWithAlbedo = false;
        /**
         * Defines if the sheen is linked to the sheen color.
         */ this.linkSheenWithAlbedo = false;
        /**
         * Defines the sheen intensity.
         */ this.intensity = 1;
        /**
         * Defines the sheen color.
         */ this.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        this._texture = null;
        /**
         * Stores the sheen tint values in a texture.
         * rgb is tint
         * a is a intensity or roughness if the roughness property has been defined and useRoughnessFromTexture is true (in that case, textureRoughness won't be used)
         * If the roughness property has been defined and useRoughnessFromTexture is false then the alpha channel is not used to modulate roughness
         */ this.texture = null;
        this._useRoughnessFromMainTexture = true;
        /**
         * Indicates that the alpha channel of the texture property will be used for roughness.
         * Has no effect if the roughness (and texture!) property is not defined
         */ this.useRoughnessFromMainTexture = true;
        this._roughness = null;
        /**
         * Defines the sheen roughness.
         * It is not taken into account if linkSheenWithAlbedo is true.
         * To stay backward compatible, material roughness is used instead if sheen roughness = null
         */ this.roughness = null;
        this._textureRoughness = null;
        /**
         * Stores the sheen roughness in a texture.
         * alpha channel is the roughness. This texture won't be used if the texture property is not empty and useRoughnessFromTexture is true
         */ this.textureRoughness = null;
        this._albedoScaling = false;
        /**
         * If true, the sheen effect is layered above the base BRDF with the albedo-scaling technique.
         * It allows the strength of the sheen effect to not depend on the base color of the material,
         * making it easier to setup and tweak the effect
         */ this.albedoScaling = false;
        this._internalMarkAllSubMeshesAsTexturesDirty = material._dirtyCallbacks[1];
    }
    isReadyForSubMesh(defines, scene) {
        if (!this._isEnabled) {
            return true;
        }
        if (defines._areTexturesDirty) {
            if (scene.texturesEnabled) {
                if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SheenTextureEnabled) {
                    if (!this._texture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._textureRoughness && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SheenTextureEnabled) {
                    if (!this._textureRoughness.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    prepareDefinesBeforeAttributes(defines, scene) {
        if (this._isEnabled) {
            defines.SHEEN = true;
            defines.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo;
            defines.SHEEN_ROUGHNESS = this._roughness !== null;
            defines.SHEEN_ALBEDOSCALING = this._albedoScaling;
            defines.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture;
            if (defines._areTexturesDirty) {
                if (scene.texturesEnabled) {
                    if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SheenTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._texture, defines, "SHEEN_TEXTURE");
                        defines.SHEEN_GAMMATEXTURE = this._texture.gammaSpace;
                    } else {
                        defines.SHEEN_TEXTURE = false;
                    }
                    if (this._textureRoughness && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SheenTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._textureRoughness, defines, "SHEEN_TEXTURE_ROUGHNESS");
                    } else {
                        defines.SHEEN_TEXTURE_ROUGHNESS = false;
                    }
                }
            }
        } else {
            defines.SHEEN = false;
            defines.SHEEN_TEXTURE = false;
            defines.SHEEN_TEXTURE_ROUGHNESS = false;
            defines.SHEEN_LINKWITHALBEDO = false;
            defines.SHEEN_ROUGHNESS = false;
            defines.SHEEN_ALBEDOSCALING = false;
            defines.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = false;
            defines.SHEEN_GAMMATEXTURE = false;
            defines.SHEEN_TEXTUREDIRECTUV = 0;
            defines.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0;
        }
    }
    bindForSubMesh(uniformBuffer, scene, engine, subMesh) {
        if (!this._isEnabled) {
            return;
        }
        const defines = subMesh.materialDefines;
        const isFrozen = this._material.isFrozen;
        if (!uniformBuffer.useUbo || !isFrozen || !uniformBuffer.isSync) {
            if ((this._texture || this._textureRoughness) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SheenTextureEnabled) {
                uniformBuffer.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0);
                if (this._texture) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._texture, uniformBuffer, "sheen");
                }
                if (this._textureRoughness && !defines.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._textureRoughness, uniformBuffer, "sheenRoughness");
                }
            }
            // Sheen
            uniformBuffer.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity);
            if (this._roughness !== null) {
                uniformBuffer.updateFloat("vSheenRoughness", this._roughness);
            }
        }
        // Textures
        if (scene.texturesEnabled) {
            if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SheenTextureEnabled) {
                uniformBuffer.setTexture("sheenSampler", this._texture);
            }
            if (this._textureRoughness && !defines.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SheenTextureEnabled) {
                uniformBuffer.setTexture("sheenRoughnessSampler", this._textureRoughness);
            }
        }
    }
    hasTexture(texture) {
        if (this._texture === texture) {
            return true;
        }
        if (this._textureRoughness === texture) {
            return true;
        }
        return false;
    }
    getActiveTextures(activeTextures) {
        if (this._texture) {
            activeTextures.push(this._texture);
        }
        if (this._textureRoughness) {
            activeTextures.push(this._textureRoughness);
        }
    }
    getAnimatables(animatables) {
        if (this._texture && this._texture.animations && this._texture.animations.length > 0) {
            animatables.push(this._texture);
        }
        if (this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0) {
            animatables.push(this._textureRoughness);
        }
    }
    dispose(forceDisposeTextures) {
        if (forceDisposeTextures) {
            this._texture?.dispose();
            this._textureRoughness?.dispose();
        }
    }
    getClassName() {
        return "PBRSheenConfiguration";
    }
    addFallbacks(defines, fallbacks, currentRank) {
        if (defines.SHEEN) {
            fallbacks.addFallback(currentRank++, "SHEEN");
        }
        return currentRank;
    }
    getSamplers(samplers) {
        samplers.push("sheenSampler", "sheenRoughnessSampler");
    }
    getUniforms() {
        return {
            ubo: [
                {
                    name: "vSheenColor",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "vSheenRoughness",
                    size: 1,
                    type: "float"
                },
                {
                    name: "vSheenInfos",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "sheenMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "sheenRoughnessMatrix",
                    size: 16,
                    type: "mat4"
                }
            ]
        };
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSheenConfiguration.prototype, "isEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSheenConfiguration.prototype, "linkSheenWithAlbedo", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSheenConfiguration.prototype, "intensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], PBRSheenConfiguration.prototype, "color", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSheenConfiguration.prototype, "texture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSheenConfiguration.prototype, "useRoughnessFromMainTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSheenConfiguration.prototype, "roughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSheenConfiguration.prototype, "textureRoughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSheenConfiguration.prototype, "albedoScaling", void 0); //# sourceMappingURL=pbrSheenConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialSubSurfaceDefines",
    ()=>MaterialSubSurfaceDefines,
    "PBRSubSurfaceConfiguration",
    ()=>PBRSubSurfaceConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
class MaterialSubSurfaceDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        this.SUBSURFACE = false;
        this.SS_REFRACTION = false;
        this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = false;
        this.SS_TRANSLUCENCY = false;
        this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = false;
        this.SS_SCATTERING = false;
        this.SS_DISPERSION = false;
        this.SS_THICKNESSANDMASK_TEXTURE = false;
        this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0;
        this.SS_HAS_THICKNESS = false;
        this.SS_REFRACTIONINTENSITY_TEXTURE = false;
        this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0;
        this.SS_TRANSLUCENCYINTENSITY_TEXTURE = false;
        this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0;
        this.SS_TRANSLUCENCYCOLOR_TEXTURE = false;
        this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0;
        this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = false;
        this.SS_REFRACTIONMAP_3D = false;
        this.SS_REFRACTIONMAP_OPPOSITEZ = false;
        this.SS_LODINREFRACTIONALPHA = false;
        this.SS_GAMMAREFRACTION = false;
        this.SS_RGBDREFRACTION = false;
        this.SS_LINEARSPECULARREFRACTION = false;
        this.SS_LINKREFRACTIONTOTRANSPARENCY = false;
        this.SS_ALBEDOFORREFRACTIONTINT = false;
        this.SS_ALBEDOFORTRANSLUCENCYTINT = false;
        this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = false;
        this.SS_USE_THICKNESS_AS_DEPTH = false;
        this.SS_USE_GLTF_TEXTURES = false;
        this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = false;
        this.SS_TRANSLUCENCY_LEGACY = false;
    }
}
class PBRSubSurfaceConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /**
     * Diffusion profile for subsurface scattering.
     * Useful for better scattering in the skins or foliages.
     */ get scatteringDiffusionProfile() {
        if (!this._scene.subSurfaceConfiguration) {
            return null;
        }
        return this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex];
    }
    set scatteringDiffusionProfile(c) {
        if (!this._scene.enableSubSurfaceForPrePass()) {
            // Not supported
            return;
        }
        // addDiffusionProfile automatically checks for doubles
        if (c) {
            this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(c);
        }
    }
    /**
     * Index of refraction of the material's volume.
     * https://en.wikipedia.org/wiki/List_of_refractive_indices
     *
     * This ONLY impacts refraction. If not provided or given a non-valid value,
     * the volume will use the same IOR as the surface.
     */ get volumeIndexOfRefraction() {
        if (this._volumeIndexOfRefraction >= 1.0) {
            return this._volumeIndexOfRefraction;
        }
        return this._indexOfRefraction;
    }
    set volumeIndexOfRefraction(value) {
        if (value >= 1.0) {
            this._volumeIndexOfRefraction = value;
        } else {
            this._volumeIndexOfRefraction = -1.0;
        }
    }
    /**
     * Keeping for backward compatibility... Should not be used anymore. It has been replaced by
     * the property with the correct spelling.
     * @see legacyTranslucency
     */ get legacyTransluceny() {
        return this.legacyTranslucency;
    }
    set legacyTransluceny(value) {
        this.legacyTranslucency = value;
    }
    /** @internal */ _markAllSubMeshesAsTexturesDirty() {
        this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled);
        this._internalMarkAllSubMeshesAsTexturesDirty();
    }
    /** @internal */ _markScenePrePassDirty() {
        this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled);
        this._internalMarkAllSubMeshesAsTexturesDirty();
        this._internalMarkScenePrePassDirty();
    }
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible() {
        return true;
    }
    constructor(material, addToPluginList = true){
        super(material, "PBRSubSurface", 130, new MaterialSubSurfaceDefines(), addToPluginList);
        this._isRefractionEnabled = false;
        /**
         * Defines if the refraction is enabled in the material.
         */ this.isRefractionEnabled = false;
        this._isTranslucencyEnabled = false;
        /**
         * Defines if the translucency is enabled in the material.
         */ this.isTranslucencyEnabled = false;
        this._isDispersionEnabled = false;
        /**
         * Defines if dispersion is enabled in the material.
         */ this.isDispersionEnabled = false;
        this._isScatteringEnabled = false;
        /**
         * Defines if the sub surface scattering is enabled in the material.
         */ this.isScatteringEnabled = false;
        this._scatteringDiffusionProfileIndex = 0;
        /**
         * Defines the refraction intensity of the material.
         * The refraction when enabled replaces the Diffuse part of the material.
         * The intensity helps transitioning between diffuse and refraction.
         */ this.refractionIntensity = 1;
        /**
         * Defines the translucency intensity of the material.
         * When translucency has been enabled, this defines how much of the "translucency"
         * is added to the diffuse part of the material.
         */ this.translucencyIntensity = 1;
        /**
         * When enabled, transparent surfaces will be tinted with the albedo colour (independent of thickness)
         */ this.useAlbedoToTintRefraction = false;
        /**
         * When enabled, translucent surfaces will be tinted with the albedo colour (independent of thickness)
         */ this.useAlbedoToTintTranslucency = false;
        this._thicknessTexture = null;
        /**
         * Stores the average thickness of a mesh in a texture (The texture is holding the values linearly).
         * The red (or green if useGltfStyleTextures=true) channel of the texture should contain the thickness remapped between 0 and 1.
         * 0 would mean minimumThickness
         * 1 would mean maximumThickness
         * The other channels might be use as a mask to vary the different effects intensity.
         */ this.thicknessTexture = null;
        this._refractionTexture = null;
        /**
         * Defines the texture to use for refraction.
         */ this.refractionTexture = null;
        /** @internal */ this._indexOfRefraction = 1.5;
        /**
         * Index of refraction of the material base layer.
         * https://en.wikipedia.org/wiki/List_of_refractive_indices
         *
         * This does not only impact refraction but also the Base F0 of Dielectric Materials.
         *
         * From dielectric fresnel rules: F0 = square((iorT - iorI) / (iorT + iorI))
         */ this.indexOfRefraction = 1.5;
        this._volumeIndexOfRefraction = -1.0;
        this._invertRefractionY = false;
        /**
         * Controls if refraction needs to be inverted on Y. This could be useful for procedural texture.
         */ this.invertRefractionY = false;
        /** @internal */ this._linkRefractionWithTransparency = false;
        /**
         * This parameters will make the material used its opacity to control how much it is refracting against not.
         * Materials half opaque for instance using refraction could benefit from this control.
         */ this.linkRefractionWithTransparency = false;
        /**
         * Defines the minimum thickness stored in the thickness map.
         * If no thickness map is defined, this value will be used to simulate thickness.
         */ this.minimumThickness = 0;
        /**
         * Defines the maximum thickness stored in the thickness map.
         */ this.maximumThickness = 1;
        /**
         * Defines that the thickness should be used as a measure of the depth volume.
         */ this.useThicknessAsDepth = false;
        /**
         * Defines the volume tint of the material.
         * This is used for both translucency and scattering.
         */ this.tintColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        /**
         * Defines the distance at which the tint color should be found in the media.
         * This is used for refraction only.
         */ this.tintColorAtDistance = 1;
        /**
         * Defines the Abbe number for the volume.
         */ this.dispersion = 0;
        /**
         * Defines how far each channel transmit through the media.
         * It is defined as a color to simplify it selection.
         */ this.diffusionDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        this._useMaskFromThicknessTexture = false;
        /**
         * Stores the intensity of the different subsurface effects in the thickness texture.
         * Note that if refractionIntensityTexture and/or translucencyIntensityTexture is provided it takes precedence over thicknessTexture + useMaskFromThicknessTexture
         * * the green (red if useGltfStyleTextures = true) channel is the refraction intensity.
         * * the blue (alpha if useGltfStyleTextures = true) channel is the translucency intensity.
         */ this.useMaskFromThicknessTexture = false;
        this._refractionIntensityTexture = null;
        /**
         * Stores the intensity of the refraction. If provided, it takes precedence over thicknessTexture + useMaskFromThicknessTexture
         * * the green (red if useGltfStyleTextures = true) channel is the refraction intensity.
         */ this.refractionIntensityTexture = null;
        this._translucencyIntensityTexture = null;
        /**
         * Stores the intensity of the translucency. If provided, it takes precedence over thicknessTexture + useMaskFromThicknessTexture
         * * the blue (alpha if useGltfStyleTextures = true) channel is the translucency intensity.
         */ this.translucencyIntensityTexture = null;
        /**
         * Defines the translucency tint of the material.
         * If not set, the tint color will be used instead.
         */ this.translucencyColor = null;
        this._translucencyColorTexture = null;
        /**
         * Defines the translucency tint color of the material as a texture.
         * This is multiplied against the translucency color to add variety and realism to the material.
         * If translucencyColor is not set, the tint color will be used instead.
         */ this.translucencyColorTexture = null;
        this._useGltfStyleTextures = true;
        /**
         * Use channels layout used by glTF:
         * * thicknessTexture: the green (instead of red) channel is the thickness
         * * thicknessTexture/refractionIntensityTexture: the red (instead of green) channel is the refraction intensity
         * * thicknessTexture/translucencyIntensityTexture: the alpha (instead of blue) channel is the translucency intensity
         */ this.useGltfStyleTextures = true;
        /**
         * This property only exists for backward compatibility reasons.
         * Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface properties (transmission, refraction, etc.). Default is false.
         * Note however that the PBR calculation is wrong when this property is set to true, so only use it if you want to mimic the 7.0 behavior.
         */ this.applyAlbedoAfterSubSurface = PBRSubSurfaceConfiguration.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE;
        /**
         * This property only exists for backward compatibility reasons.
         * Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface translucency. Default is false.
         */ this.legacyTranslucency = PBRSubSurfaceConfiguration.DEFAULT_LEGACY_TRANSLUCENCY;
        this._scene = material.getScene();
        this.registerForExtraEvents = true;
        this._internalMarkAllSubMeshesAsTexturesDirty = material._dirtyCallbacks[1];
        this._internalMarkScenePrePassDirty = material._dirtyCallbacks[32];
    }
    isReadyForSubMesh(defines, scene) {
        if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) {
            return true;
        }
        if (defines._areTexturesDirty) {
            if (scene.texturesEnabled) {
                if (this._thicknessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ThicknessTextureEnabled) {
                    if (!this._thicknessTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._refractionIntensityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionIntensityTextureEnabled) {
                    if (!this._refractionIntensityTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._translucencyColorTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].TranslucencyColorTextureEnabled) {
                    if (!this._translucencyColorTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._translucencyIntensityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].TranslucencyIntensityTextureEnabled) {
                    if (!this._translucencyIntensityTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                const refractionTexture = this._getRefractionTexture(scene);
                if (refractionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionTextureEnabled) {
                    if (!refractionTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    prepareDefinesBeforeAttributes(defines, scene) {
        if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) {
            defines.SUBSURFACE = false;
            defines.SS_DISPERSION = false;
            defines.SS_TRANSLUCENCY = false;
            defines.SS_SCATTERING = false;
            defines.SS_REFRACTION = false;
            defines.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = false;
            defines.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = false;
            defines.SS_THICKNESSANDMASK_TEXTURE = false;
            defines.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0;
            defines.SS_HAS_THICKNESS = false;
            defines.SS_REFRACTIONINTENSITY_TEXTURE = false;
            defines.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0;
            defines.SS_TRANSLUCENCYINTENSITY_TEXTURE = false;
            defines.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0;
            defines.SS_REFRACTIONMAP_3D = false;
            defines.SS_REFRACTIONMAP_OPPOSITEZ = false;
            defines.SS_LODINREFRACTIONALPHA = false;
            defines.SS_GAMMAREFRACTION = false;
            defines.SS_RGBDREFRACTION = false;
            defines.SS_LINEARSPECULARREFRACTION = false;
            defines.SS_LINKREFRACTIONTOTRANSPARENCY = false;
            defines.SS_ALBEDOFORREFRACTIONTINT = false;
            defines.SS_ALBEDOFORTRANSLUCENCYTINT = false;
            defines.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = false;
            defines.SS_USE_THICKNESS_AS_DEPTH = false;
            defines.SS_USE_GLTF_TEXTURES = false;
            defines.SS_TRANSLUCENCYCOLOR_TEXTURE = false;
            defines.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0;
            defines.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = false;
            defines.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = false;
            return;
        }
        if (defines._areTexturesDirty) {
            defines.SUBSURFACE = true;
            defines.SS_DISPERSION = this._isDispersionEnabled;
            defines.SS_TRANSLUCENCY = this._isTranslucencyEnabled;
            defines.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = false;
            defines.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency;
            defines.SS_SCATTERING = this._isScatteringEnabled;
            defines.SS_THICKNESSANDMASK_TEXTURE = false;
            defines.SS_REFRACTIONINTENSITY_TEXTURE = false;
            defines.SS_TRANSLUCENCYINTENSITY_TEXTURE = false;
            defines.SS_HAS_THICKNESS = false;
            defines.SS_USE_GLTF_TEXTURES = false;
            defines.SS_REFRACTION = false;
            defines.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = false;
            defines.SS_REFRACTIONMAP_3D = false;
            defines.SS_GAMMAREFRACTION = false;
            defines.SS_RGBDREFRACTION = false;
            defines.SS_LINEARSPECULARREFRACTION = false;
            defines.SS_REFRACTIONMAP_OPPOSITEZ = false;
            defines.SS_LODINREFRACTIONALPHA = false;
            defines.SS_LINKREFRACTIONTOTRANSPARENCY = false;
            defines.SS_ALBEDOFORREFRACTIONTINT = false;
            defines.SS_ALBEDOFORTRANSLUCENCYTINT = false;
            defines.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = false;
            defines.SS_USE_THICKNESS_AS_DEPTH = false;
            defines.SS_TRANSLUCENCYCOLOR_TEXTURE = false;
            defines.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface;
            if (defines._areTexturesDirty) {
                if (scene.texturesEnabled) {
                    if (this._thicknessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ThicknessTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._thicknessTexture, defines, "SS_THICKNESSANDMASK_TEXTURE");
                    }
                    if (this._refractionIntensityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionIntensityTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._refractionIntensityTexture, defines, "SS_REFRACTIONINTENSITY_TEXTURE");
                    }
                    if (this._translucencyIntensityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].TranslucencyIntensityTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._translucencyIntensityTexture, defines, "SS_TRANSLUCENCYINTENSITY_TEXTURE");
                    }
                    if (this._translucencyColorTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].TranslucencyColorTextureEnabled) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._translucencyColorTexture, defines, "SS_TRANSLUCENCYCOLOR_TEXTURE");
                        defines.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace;
                    }
                }
            }
            defines.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0.0;
            defines.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures;
            defines.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture;
            defines.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture;
            if (this._isRefractionEnabled) {
                if (scene.texturesEnabled) {
                    const refractionTexture = this._getRefractionTexture(scene);
                    if (refractionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionTextureEnabled) {
                        defines.SS_REFRACTION = true;
                        defines.SS_REFRACTIONMAP_3D = refractionTexture.isCube;
                        defines.SS_GAMMAREFRACTION = refractionTexture.gammaSpace;
                        defines.SS_RGBDREFRACTION = refractionTexture.isRGBD;
                        defines.SS_LINEARSPECULARREFRACTION = refractionTexture.linearSpecularLOD;
                        defines.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && refractionTexture.isCube ? !refractionTexture.invertZ : refractionTexture.invertZ;
                        defines.SS_LODINREFRACTIONALPHA = refractionTexture.lodLevelInAlpha;
                        defines.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency;
                        defines.SS_ALBEDOFORREFRACTIONTINT = this.useAlbedoToTintRefraction;
                        defines.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = refractionTexture.isCube && refractionTexture.boundingBoxSize;
                        defines.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth;
                    }
                }
            }
            if (this._isTranslucencyEnabled) {
                defines.SS_ALBEDOFORTRANSLUCENCYTINT = this.useAlbedoToTintTranslucency;
            }
        }
    }
    /**
     * Binds the material data (this function is called even if mustRebind() returns false)
     * @param uniformBuffer defines the Uniform buffer to fill in.
     * @param scene defines the scene the material belongs to.
     * @param engine defines the engine the material belongs to.
     * @param subMesh the submesh to bind data for
     */ hardBindForSubMesh(uniformBuffer, scene, engine, subMesh) {
        if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) {
            return;
        }
        // If min/max thickness is 0, avoid decompising to determine the scaled thickness (it's always zero).
        if (this.maximumThickness === 0.0 && this.minimumThickness === 0.0) {
            uniformBuffer.updateFloat2("vThicknessParam", 0, 0);
        } else {
            subMesh.getRenderingMesh().getWorldMatrix().decompose(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            const thicknessScale = Math.max(Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].x), Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].y), Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].z));
            uniformBuffer.updateFloat2("vThicknessParam", this.minimumThickness * thicknessScale, (this.maximumThickness - this.minimumThickness) * thicknessScale);
        }
    }
    bindForSubMesh(uniformBuffer, scene, engine, subMesh) {
        if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) {
            return;
        }
        const defines = subMesh.materialDefines;
        const isFrozen = this._material.isFrozen;
        const realTimeFiltering = this._material.realTimeFiltering;
        const lodBasedMicrosurface = defines.LODBASEDMICROSFURACE;
        const refractionTexture = this._getRefractionTexture(scene);
        if (!uniformBuffer.useUbo || !isFrozen || !uniformBuffer.isSync) {
            if (this._thicknessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ThicknessTextureEnabled) {
                uniformBuffer.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._thicknessTexture, uniformBuffer, "thickness");
            }
            if (this._refractionIntensityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionIntensityTextureEnabled && defines.SS_REFRACTIONINTENSITY_TEXTURE) {
                uniformBuffer.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._refractionIntensityTexture, uniformBuffer, "refractionIntensity");
            }
            if (this._translucencyColorTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].TranslucencyColorTextureEnabled && defines.SS_TRANSLUCENCYCOLOR_TEXTURE) {
                uniformBuffer.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._translucencyColorTexture, uniformBuffer, "translucencyColor");
            }
            if (this._translucencyIntensityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].TranslucencyIntensityTextureEnabled && defines.SS_TRANSLUCENCYINTENSITY_TEXTURE) {
                uniformBuffer.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._translucencyIntensityTexture, uniformBuffer, "translucencyIntensity");
            }
            if (refractionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionTextureEnabled) {
                uniformBuffer.updateMatrix("refractionMatrix", refractionTexture.getRefractionTextureMatrix());
                let depth = 1.0;
                if (!refractionTexture.isCube) {
                    if (refractionTexture.depth) {
                        depth = refractionTexture.depth;
                    }
                }
                const width = refractionTexture.getSize().width;
                const refractionIor = this.volumeIndexOfRefraction;
                uniformBuffer.updateFloat4("vRefractionInfos", refractionTexture.level, 1 / refractionIor, depth, this._invertRefractionY ? -1 : 1);
                uniformBuffer.updateFloat4("vRefractionMicrosurfaceInfos", width, refractionTexture.lodGenerationScale, refractionTexture.lodGenerationOffset, 1.0 / this.indexOfRefraction);
                if (realTimeFiltering) {
                    uniformBuffer.updateFloat2("vRefractionFilteringInfo", width, Math.log2(width));
                }
                if (refractionTexture.boundingBoxSize) {
                    const cubeTexture = refractionTexture;
                    uniformBuffer.updateVector3("vRefractionPosition", cubeTexture.boundingBoxPosition);
                    uniformBuffer.updateVector3("vRefractionSize", cubeTexture.boundingBoxSize);
                }
            }
            if (this._isScatteringEnabled) {
                uniformBuffer.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex);
            }
            uniformBuffer.updateColor3("vDiffusionDistance", this.diffusionDistance);
            uniformBuffer.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(0.00001, this.tintColorAtDistance));
            uniformBuffer.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0);
            uniformBuffer.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0);
            uniformBuffer.updateFloat("dispersion", this.dispersion);
        }
        // Textures
        if (scene.texturesEnabled) {
            if (this._thicknessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ThicknessTextureEnabled) {
                uniformBuffer.setTexture("thicknessSampler", this._thicknessTexture);
            }
            if (this._refractionIntensityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionIntensityTextureEnabled && defines.SS_REFRACTIONINTENSITY_TEXTURE) {
                uniformBuffer.setTexture("refractionIntensitySampler", this._refractionIntensityTexture);
            }
            if (this._translucencyIntensityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].TranslucencyIntensityTextureEnabled && defines.SS_TRANSLUCENCYINTENSITY_TEXTURE) {
                uniformBuffer.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture);
            }
            if (this._translucencyColorTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].TranslucencyColorTextureEnabled && defines.SS_TRANSLUCENCYCOLOR_TEXTURE) {
                uniformBuffer.setTexture("translucencyColorSampler", this._translucencyColorTexture);
            }
            if (refractionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionTextureEnabled) {
                if (lodBasedMicrosurface) {
                    uniformBuffer.setTexture("refractionSampler", refractionTexture);
                } else {
                    uniformBuffer.setTexture("refractionSampler", refractionTexture._lodTextureMid || refractionTexture);
                    uniformBuffer.setTexture("refractionSamplerLow", refractionTexture._lodTextureLow || refractionTexture);
                    uniformBuffer.setTexture("refractionSamplerHigh", refractionTexture._lodTextureHigh || refractionTexture);
                }
            }
        }
    }
    /**
     * Returns the texture used for refraction or null if none is used.
     * @param scene defines the scene the material belongs to.
     * @returns - Refraction texture if present.  If no refraction texture and refraction
     * is linked with transparency, returns environment texture.  Otherwise, returns null.
     */ _getRefractionTexture(scene) {
        if (this._refractionTexture) {
            return this._refractionTexture;
        }
        if (this._isRefractionEnabled) {
            return scene.environmentTexture;
        }
        return null;
    }
    /**
     * Returns true if alpha blending should be disabled.
     */ get disableAlphaBlending() {
        return this._isRefractionEnabled && this._linkRefractionWithTransparency;
    }
    /**
     * Fills the list of render target textures.
     * @param renderTargets the list of render targets to update
     */ fillRenderTargetTextures(renderTargets) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
            renderTargets.push(this._refractionTexture);
        }
    }
    hasTexture(texture) {
        if (this._thicknessTexture === texture) {
            return true;
        }
        if (this._refractionTexture === texture) {
            return true;
        }
        if (this._refractionIntensityTexture === texture) {
            return true;
        }
        if (this._translucencyIntensityTexture === texture) {
            return true;
        }
        if (this._translucencyColorTexture === texture) {
            return true;
        }
        return false;
    }
    hasRenderTargetTextures() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) {
            return true;
        }
        return false;
    }
    getActiveTextures(activeTextures) {
        if (this._thicknessTexture) {
            activeTextures.push(this._thicknessTexture);
        }
        if (this._refractionTexture) {
            activeTextures.push(this._refractionTexture);
        }
        if (this._refractionIntensityTexture) {
            activeTextures.push(this._refractionIntensityTexture);
        }
        if (this._translucencyColorTexture) {
            activeTextures.push(this._translucencyColorTexture);
        }
        if (this._translucencyIntensityTexture) {
            activeTextures.push(this._translucencyIntensityTexture);
        }
    }
    getAnimatables(animatables) {
        if (this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0) {
            animatables.push(this._thicknessTexture);
        }
        if (this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0) {
            animatables.push(this._refractionTexture);
        }
        if (this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0) {
            animatables.push(this._refractionIntensityTexture);
        }
        if (this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0) {
            animatables.push(this._translucencyColorTexture);
        }
        if (this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0) {
            animatables.push(this._translucencyIntensityTexture);
        }
    }
    dispose(forceDisposeTextures) {
        if (forceDisposeTextures) {
            if (this._thicknessTexture) {
                this._thicknessTexture.dispose();
            }
            if (this._refractionTexture) {
                this._refractionTexture.dispose();
            }
            if (this._refractionIntensityTexture) {
                this._refractionIntensityTexture.dispose();
            }
            if (this._translucencyColorTexture) {
                this._translucencyColorTexture.dispose();
            }
            if (this._translucencyIntensityTexture) {
                this._translucencyIntensityTexture.dispose();
            }
        }
    }
    getClassName() {
        return "PBRSubSurfaceConfiguration";
    }
    addFallbacks(defines, fallbacks, currentRank) {
        if (defines.SS_SCATTERING) {
            fallbacks.addFallback(currentRank++, "SS_SCATTERING");
        }
        if (defines.SS_TRANSLUCENCY) {
            fallbacks.addFallback(currentRank++, "SS_TRANSLUCENCY");
        }
        return currentRank;
    }
    getSamplers(samplers) {
        samplers.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler");
    }
    getUniforms() {
        return {
            ubo: [
                {
                    name: "vRefractionMicrosurfaceInfos",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "vRefractionFilteringInfo",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "vTranslucencyIntensityInfos",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "vRefractionInfos",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "refractionMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "vThicknessInfos",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "vRefractionIntensityInfos",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "thicknessMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "refractionIntensityMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "translucencyIntensityMatrix",
                    size: 16,
                    type: "mat4"
                },
                {
                    name: "vThicknessParam",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "vDiffusionDistance",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "vTintColor",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "vSubSurfaceIntensity",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "vRefractionPosition",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "vRefractionSize",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "scatteringDiffusionProfile",
                    size: 1,
                    type: "float"
                },
                {
                    name: "dispersion",
                    size: 1,
                    type: "float"
                },
                {
                    name: "vTranslucencyColor",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "vTranslucencyColorInfos",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "translucencyColorMatrix",
                    size: 16,
                    type: "mat4"
                }
            ]
        };
    }
}
/**
 * Default value used for applyAlbedoAfterSubSurface.
 *
 * This property only exists for backward compatibility reasons.
 * Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface properties (transmission, refraction, etc.). Default is false.
 * Note however that the PBR calculation is wrong when this property is set to true, so only use it if you want to mimic the 7.0 behavior.
 */ PBRSubSurfaceConfiguration.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = false;
/**
 * Default value used for legacyTranslucency.
 *
 * This property only exists for backward compatibility reasons.
 * Set it to true if your rendering in 8.0+ is different from that in 7 when you use sub-surface translucency. Default is false.
 */ PBRSubSurfaceConfiguration.DEFAULT_LEGACY_TRANSLUCENCY = false;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "isRefractionEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "isTranslucencyEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "isDispersionEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markScenePrePassDirty")
], PBRSubSurfaceConfiguration.prototype, "isScatteringEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "_scatteringDiffusionProfileIndex", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "refractionIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "translucencyIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "useAlbedoToTintRefraction", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "useAlbedoToTintTranslucency", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "thicknessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "refractionTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "indexOfRefraction", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "_volumeIndexOfRefraction", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "volumeIndexOfRefraction", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "invertRefractionY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "linkRefractionWithTransparency", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "minimumThickness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "maximumThickness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "useThicknessAsDepth", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], PBRSubSurfaceConfiguration.prototype, "tintColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "tintColorAtDistance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "dispersion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], PBRSubSurfaceConfiguration.prototype, "diffusionDistance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "useMaskFromThicknessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "refractionIntensityTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "translucencyIntensityTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], PBRSubSurfaceConfiguration.prototype, "translucencyColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "translucencyColorTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRSubSurfaceConfiguration.prototype, "useGltfStyleTextures", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "applyAlbedoAfterSubSurface", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRSubSurfaceConfiguration.prototype, "legacyTranslucency", void 0); //# sourceMappingURL=pbrSubSurfaceConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PBRBaseMaterial",
    ()=>PBRBaseMaterial,
    "PBRMaterialDefines",
    ()=>PBRMaterialDefines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/smartArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/brdfTextureTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBRDFConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBRDFConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$prePassConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/prePassConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.defines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/pushMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$polynomial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.polynomial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectFallbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrAnisotropicConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrAnisotropicConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSheenConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSheenConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$detailMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.detailMapConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.geometryrendering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uv$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uv.defines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessing.js [app-ssr] (ecmascript)");
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
const onCreatedEffectParameters = {
    effect: null,
    subMesh: null
};
class PBRMaterialDefinesBase extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uv$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UVDefinesMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"]) {
}
class PBRMaterialDefines extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingDefinesMixin"])(PBRMaterialDefinesBase) {
    /**
     * Initializes the PBR Material defines.
     * @param externalProperties The external properties
     */ constructor(externalProperties){
        super(externalProperties);
        this.PBR = true;
        this.NUM_SAMPLES = "0";
        this.REALTIME_FILTERING = false;
        this.IBL_CDF_FILTERING = false;
        this.ALBEDO = false;
        this.GAMMAALBEDO = false;
        this.ALBEDODIRECTUV = 0;
        this.VERTEXCOLOR = false;
        this.BASE_WEIGHT = false;
        this.BASE_WEIGHTDIRECTUV = 0;
        this.BASE_DIFFUSE_ROUGHNESS = false;
        this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0;
        this.BAKED_VERTEX_ANIMATION_TEXTURE = false;
        this.AMBIENT = false;
        this.AMBIENTDIRECTUV = 0;
        this.AMBIENTINGRAYSCALE = false;
        this.OPACITY = false;
        this.VERTEXALPHA = false;
        this.OPACITYDIRECTUV = 0;
        this.OPACITYRGB = false;
        this.ALPHATEST = false;
        this.DEPTHPREPASS = false;
        this.ALPHABLEND = false;
        this.ALPHAFROMALBEDO = false;
        this.ALPHATESTVALUE = "0.5";
        this.SPECULAROVERALPHA = false;
        this.RADIANCEOVERALPHA = false;
        this.ALPHAFRESNEL = false;
        this.LINEARALPHAFRESNEL = false;
        this.PREMULTIPLYALPHA = false;
        this.EMISSIVE = false;
        this.EMISSIVEDIRECTUV = 0;
        this.GAMMAEMISSIVE = false;
        this.REFLECTIVITY = false;
        this.REFLECTIVITY_GAMMA = false;
        this.REFLECTIVITYDIRECTUV = 0;
        this.SPECULARTERM = false;
        this.MICROSURFACEFROMREFLECTIVITYMAP = false;
        this.MICROSURFACEAUTOMATIC = false;
        this.LODBASEDMICROSFURACE = false;
        this.MICROSURFACEMAP = false;
        this.MICROSURFACEMAPDIRECTUV = 0;
        this.METALLICWORKFLOW = false;
        this.ROUGHNESSSTOREINMETALMAPALPHA = false;
        this.ROUGHNESSSTOREINMETALMAPGREEN = false;
        this.METALLNESSSTOREINMETALMAPBLUE = false;
        this.AOSTOREINMETALMAPRED = false;
        this.METALLIC_REFLECTANCE = false;
        this.METALLIC_REFLECTANCE_GAMMA = false;
        this.METALLIC_REFLECTANCEDIRECTUV = 0;
        this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = false;
        this.REFLECTANCE = false;
        this.REFLECTANCE_GAMMA = false;
        this.REFLECTANCEDIRECTUV = 0;
        this.ENVIRONMENTBRDF = false;
        this.ENVIRONMENTBRDF_RGBD = false;
        this.NORMAL = false;
        this.TANGENT = false;
        this.BUMP = false;
        this.BUMPDIRECTUV = 0;
        this.OBJECTSPACE_NORMALMAP = false;
        this.PARALLAX = false;
        this.PARALLAX_RHS = false;
        this.PARALLAXOCCLUSION = false;
        this.NORMALXYSCALE = true;
        this.LIGHTMAP = false;
        this.LIGHTMAPDIRECTUV = 0;
        this.USELIGHTMAPASSHADOWMAP = false;
        this.GAMMALIGHTMAP = false;
        this.RGBDLIGHTMAP = false;
        this.REFLECTION = false;
        this.REFLECTIONMAP_3D = false;
        this.REFLECTIONMAP_SPHERICAL = false;
        this.REFLECTIONMAP_PLANAR = false;
        this.REFLECTIONMAP_CUBIC = false;
        this.USE_LOCAL_REFLECTIONMAP_CUBIC = false;
        this.REFLECTIONMAP_PROJECTION = false;
        this.REFLECTIONMAP_SKYBOX = false;
        this.REFLECTIONMAP_EXPLICIT = false;
        this.REFLECTIONMAP_EQUIRECTANGULAR = false;
        this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
        this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
        this.INVERTCUBICMAP = false;
        this.USESPHERICALFROMREFLECTIONMAP = false;
        this.USEIRRADIANCEMAP = false;
        this.USE_IRRADIANCE_DOMINANT_DIRECTION = false;
        this.USESPHERICALINVERTEX = false;
        this.REFLECTIONMAP_OPPOSITEZ = false;
        this.LODINREFLECTIONALPHA = false;
        this.GAMMAREFLECTION = false;
        this.RGBDREFLECTION = false;
        this.LINEARSPECULARREFLECTION = false;
        this.RADIANCEOCCLUSION = false;
        this.HORIZONOCCLUSION = false;
        this.INSTANCES = false;
        this.THIN_INSTANCES = false;
        this.INSTANCESCOLOR = false;
        this.PREPASS = false;
        this.PREPASS_COLOR = false;
        this.PREPASS_COLOR_INDEX = -1;
        this.PREPASS_IRRADIANCE = false;
        this.PREPASS_IRRADIANCE_INDEX = -1;
        this.PREPASS_ALBEDO = false;
        this.PREPASS_ALBEDO_INDEX = -1;
        this.PREPASS_ALBEDO_SQRT = false;
        this.PREPASS_ALBEDO_SQRT_INDEX = -1;
        this.PREPASS_DEPTH = false;
        this.PREPASS_DEPTH_INDEX = -1;
        this.PREPASS_SCREENSPACE_DEPTH = false;
        this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1;
        this.PREPASS_NORMALIZED_VIEW_DEPTH = false;
        this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1;
        this.PREPASS_NORMAL = false;
        this.PREPASS_NORMAL_INDEX = -1;
        this.PREPASS_NORMAL_WORLDSPACE = false;
        this.PREPASS_WORLD_NORMAL = false;
        this.PREPASS_WORLD_NORMAL_INDEX = -1;
        this.PREPASS_POSITION = false;
        this.PREPASS_POSITION_INDEX = -1;
        this.PREPASS_LOCAL_POSITION = false;
        this.PREPASS_LOCAL_POSITION_INDEX = -1;
        this.PREPASS_VELOCITY = false;
        this.PREPASS_VELOCITY_INDEX = -1;
        this.PREPASS_VELOCITY_LINEAR = false;
        this.PREPASS_VELOCITY_LINEAR_INDEX = -1;
        this.PREPASS_REFLECTIVITY = false;
        this.PREPASS_REFLECTIVITY_INDEX = -1;
        this.SCENE_MRT_COUNT = 0;
        this.NUM_BONE_INFLUENCERS = 0;
        this.BonesPerMesh = 0;
        this.BONETEXTURE = false;
        this.BONES_VELOCITY_ENABLED = false;
        this.NONUNIFORMSCALING = false;
        this.MORPHTARGETS = false;
        this.MORPHTARGETS_POSITION = false;
        this.MORPHTARGETS_NORMAL = false;
        this.MORPHTARGETS_TANGENT = false;
        this.MORPHTARGETS_UV = false;
        this.MORPHTARGETS_UV2 = false;
        this.MORPHTARGETS_COLOR = false;
        this.MORPHTARGETTEXTURE_HASPOSITIONS = false;
        this.MORPHTARGETTEXTURE_HASNORMALS = false;
        this.MORPHTARGETTEXTURE_HASTANGENTS = false;
        this.MORPHTARGETTEXTURE_HASUVS = false;
        this.MORPHTARGETTEXTURE_HASUV2S = false;
        this.MORPHTARGETTEXTURE_HASCOLORS = false;
        this.NUM_MORPH_INFLUENCERS = 0;
        this.MORPHTARGETS_TEXTURE = false;
        this.MULTIVIEW = false;
        this.ORDER_INDEPENDENT_TRANSPARENCY = false;
        this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = false;
        this.USEPHYSICALLIGHTFALLOFF = false;
        this.USEGLTFLIGHTFALLOFF = false;
        this.TWOSIDEDLIGHTING = false;
        this.MIRRORED = false;
        this.SHADOWFLOAT = false;
        this.CLIPPLANE = false;
        this.CLIPPLANE2 = false;
        this.CLIPPLANE3 = false;
        this.CLIPPLANE4 = false;
        this.CLIPPLANE5 = false;
        this.CLIPPLANE6 = false;
        this.POINTSIZE = false;
        this.FOG = false;
        this.LOGARITHMICDEPTH = false;
        this.CAMERA_ORTHOGRAPHIC = false;
        this.CAMERA_PERSPECTIVE = false;
        this.AREALIGHTSUPPORTED = true;
        this.FORCENORMALFORWARD = false;
        this.SPECULARAA = false;
        this.UNLIT = false;
        this.DECAL_AFTER_DETAIL = false;
        this.DEBUGMODE = 0;
        this.USE_VERTEX_PULLING = false;
        this.CLUSTLIGHT_SLICES = 0;
        this.CLUSTLIGHT_BATCH = 0;
        this.rebuild();
    }
    /**
     * Resets the PBR Material defines.
     */ reset() {
        super.reset();
        this.ALPHATESTVALUE = "0.5";
        this.PBR = true;
        this.NORMALXYSCALE = true;
    }
}
class PBRBaseMaterialBase extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushMaterial"]) {
}
class PBRBaseMaterial extends PBRBaseMaterialBase {
    /**
     * Enables realtime filtering on the texture.
     */ get realTimeFiltering() {
        return this._realTimeFiltering;
    }
    set realTimeFiltering(b) {
        this._realTimeFiltering = b;
        this.markAsDirty(1);
    }
    /**
     * Quality switch for realtime filtering
     */ get realTimeFilteringQuality() {
        return this._realTimeFilteringQuality;
    }
    set realTimeFilteringQuality(n) {
        this._realTimeFilteringQuality = n;
        this.markAsDirty(1);
    }
    /**
     * Can this material render to several textures at once
     */ get canRenderToMRT() {
        return true;
    }
    /**
     * Instantiates a new PBRMaterial instance.
     *
     * @param name The material name
     * @param scene The scene the material will be use in.
     * @param forceGLSL Use the GLSL code generation for the shader (even on WebGPU). Default is false
     */ constructor(name, scene, forceGLSL = false){
        super(name, scene, undefined, forceGLSL || PBRBaseMaterial.ForceGLSL);
        /**
         * Intensity of the direct lights e.g. the four lights available in your scene.
         * This impacts both the direct diffuse and specular highlights.
         * @internal
         */ this._directIntensity = 1.0;
        /**
         * Intensity of the emissive part of the material.
         * This helps controlling the emissive effect without modifying the emissive color.
         * @internal
         */ this._emissiveIntensity = 1.0;
        /**
         * Intensity of the environment e.g. how much the environment will light the object
         * either through harmonics for rough material or through the reflection for shiny ones.
         * @internal
         */ this._environmentIntensity = 1.0;
        /**
         * This is a special control allowing the reduction of the specular highlights coming from the
         * four lights of the scene. Those highlights may not be needed in full environment lighting.
         * @internal
         */ this._specularIntensity = 1.0;
        /**
         * This stores the direct, emissive, environment, and specular light intensities into a Vector4.
         */ this._lightingInfos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity);
        /**
         * Debug Control allowing disabling the bump map on this material.
         * @internal
         */ this._disableBumpMap = false;
        /**
         * AKA Diffuse Texture in standard nomenclature.
         * @internal
         */ this._albedoTexture = null;
        /**
         * Base Weight texture (multiplier to the diffuse and metal lobes).
         * @internal
         */ this._baseWeightTexture = null;
        /**
         * Base Diffuse Roughness texture (roughness of the diffuse lobe).
         * @internal
         */ this._baseDiffuseRoughnessTexture = null;
        /**
         * AKA Occlusion Texture in other nomenclature.
         * @internal
         */ this._ambientTexture = null;
        /**
         * AKA Occlusion Texture Intensity in other nomenclature.
         * @internal
         */ this._ambientTextureStrength = 1.0;
        /**
         * Defines how much the AO map is occluding the analytical lights (point spot...).
         * 1 means it completely occludes it
         * 0 mean it has no impact
         * @internal
         */ this._ambientTextureImpactOnAnalyticalLights = PBRBaseMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS;
        /**
         * Stores the alpha values in a texture.
         * @internal
         */ this._opacityTexture = null;
        /**
         * Stores the reflection values in a texture.
         * @internal
         */ this._reflectionTexture = null;
        /**
         * Stores the emissive values in a texture.
         * @internal
         */ this._emissiveTexture = null;
        /**
         * AKA Specular texture in other nomenclature.
         * @internal
         */ this._reflectivityTexture = null;
        /**
         * Used to switch from specular/glossiness to metallic/roughness workflow.
         * @internal
         */ this._metallicTexture = null;
        /**
         * Specifies the metallic scalar of the metallic/roughness workflow.
         * Can also be used to scale the metalness values of the metallic texture.
         * @internal
         */ this._metallic = null;
        /**
         * Specifies the roughness scalar of the metallic/roughness workflow.
         * Can also be used to scale the roughness values of the metallic texture.
         * @internal
         */ this._roughness = null;
        /**
         * In metallic workflow, specifies an F0 factor to help configuring the material F0.
         * By default the indexOfrefraction is used to compute F0;
         *
         * This is used as a factor against the default reflectance at normal incidence to tweak it.
         *
         * F0 = defaultF0 * metallicF0Factor * metallicReflectanceColor;
         * F90 = metallicReflectanceColor;
         * @internal
         */ this._metallicF0Factor = 1;
        /**
         * In metallic workflow, specifies an F0 color.
         * By default the F90 is always 1;
         *
         * Please note that this factor is also used as a factor against the default reflectance at normal incidence.
         *
         * F0 = defaultF0_from_IOR * metallicF0Factor * metallicReflectanceColor
         * F90 = metallicF0Factor;
         * @internal
         */ this._metallicReflectanceColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        /**
         * Specifies that only the A channel from _metallicReflectanceTexture should be used.
         * If false, both RGB and A channels will be used
         * @internal
         */ this._useOnlyMetallicFromMetallicReflectanceTexture = false;
        /**
         * Defines to store metallicReflectanceColor in RGB and metallicF0Factor in A
         * This is multiply against the scalar values defined in the material.
         * @internal
         */ this._metallicReflectanceTexture = null;
        /**
         * Defines to store reflectanceColor in RGB
         * This is multiplied against the scalar values defined in the material.
         * If both _reflectanceTexture and _metallicReflectanceTexture textures are provided and _useOnlyMetallicFromMetallicReflectanceTexture
         * is false, _metallicReflectanceTexture takes precedence and _reflectanceTexture is not used
         * @internal
         */ this._reflectanceTexture = null;
        /**
         * Used to enable roughness/glossiness fetch from a separate channel depending on the current mode.
         * Gray Scale represents roughness in metallic mode and glossiness in specular mode.
         * @internal
         */ this._microSurfaceTexture = null;
        /**
         * Stores surface normal data used to displace a mesh in a texture.
         * @internal
         */ this._bumpTexture = null;
        /**
         * Stores the pre-calculated light information of a mesh in a texture.
         * @internal
         */ this._lightmapTexture = null;
        /**
         * The color of a material in ambient lighting.
         * @internal
         */ this._ambientColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0);
        /**
         * AKA Diffuse Color in other nomenclature.
         * @internal
         */ this._albedoColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1, 1, 1);
        /**
         * Base Weight (multiplier to the diffuse and metal lobes).
         * @internal
         */ this._baseWeight = 1;
        /**
         * Base Diffuse Roughness (roughness of the diffuse lobe).
         * Can also be used to scale the corresponding texture.
         * @internal
         */ this._baseDiffuseRoughness = null;
        /**
         * AKA Specular Color in other nomenclature.
         * @internal
         */ this._reflectivityColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1, 1, 1);
        /**
         * The color applied when light is reflected from a material.
         * @internal
         */ this._reflectionColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1, 1, 1);
        /**
         * The color applied when light is emitted from a material.
         * @internal
         */ this._emissiveColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0);
        /**
         * AKA Glossiness in other nomenclature.
         * @internal
         */ this._microSurface = 0.9;
        /**
         * Specifies that the material will use the light map as a show map.
         * @internal
         */ this._useLightmapAsShadowmap = false;
        /**
         * This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
         * makes the reflect vector face the model (under horizon).
         * @internal
         */ this._useHorizonOcclusion = true;
        /**
         * This parameters will enable/disable radiance occlusion by preventing the radiance to lit
         * too much the area relying on ambient texture to define their ambient occlusion.
         * @internal
         */ this._useRadianceOcclusion = true;
        /**
         * Specifies that the alpha is coming form the albedo channel alpha channel for alpha blending.
         * @internal
         */ this._useAlphaFromAlbedoTexture = false;
        /**
         * Specifies that the material will keeps the specular highlights over a transparent surface (only the most luminous ones).
         * A car glass is a good example of that. When sun reflects on it you can not see what is behind.
         * @internal
         */ this._useSpecularOverAlpha = true;
        /**
         * Specifies if the reflectivity texture contains the glossiness information in its alpha channel.
         * @internal
         */ this._useMicroSurfaceFromReflectivityMapAlpha = false;
        /**
         * Specifies if the metallic texture contains the roughness information in its alpha channel.
         * @internal
         */ this._useRoughnessFromMetallicTextureAlpha = true;
        /**
         * Specifies if the metallic texture contains the roughness information in its green channel.
         * @internal
         */ this._useRoughnessFromMetallicTextureGreen = false;
        /**
         * Specifies if the metallic texture contains the metallness information in its blue channel.
         * @internal
         */ this._useMetallnessFromMetallicTextureBlue = false;
        /**
         * Specifies if the metallic texture contains the ambient occlusion information in its red channel.
         * @internal
         */ this._useAmbientOcclusionFromMetallicTextureRed = false;
        /**
         * Specifies if the ambient texture contains the ambient occlusion information in its red channel only.
         * @internal
         */ this._useAmbientInGrayScale = false;
        /**
         * In case the reflectivity map does not contain the microsurface information in its alpha channel,
         * The material will try to infer what glossiness each pixel should be.
         * @internal
         */ this._useAutoMicroSurfaceFromReflectivityMap = false;
        /**
         * Defines the  falloff type used in this material.
         * It by default is Physical.
         * @internal
         */ this._lightFalloff = PBRBaseMaterial.LIGHTFALLOFF_PHYSICAL;
        /**
         * Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
         * A car glass is a good example of that. When the street lights reflects on it you can not see what is behind.
         * @internal
         */ this._useRadianceOverAlpha = true;
        /**
         * Allows using an object space normal map (instead of tangent space).
         * @internal
         */ this._useObjectSpaceNormalMap = false;
        /**
         * Allows using the bump map in parallax mode.
         * @internal
         */ this._useParallax = false;
        /**
         * Allows using the bump map in parallax occlusion mode.
         * @internal
         */ this._useParallaxOcclusion = false;
        /**
         * Controls the scale bias of the parallax mode.
         * @internal
         */ this._parallaxScaleBias = 0.05;
        /**
         * If sets to true, disables all the lights affecting the material.
         * @internal
         */ this._disableLighting = false;
        /**
         * Number of Simultaneous lights allowed on the material.
         * @internal
         */ this._maxSimultaneousLights = 4;
        /**
         * If sets to true, x component of normal map value will be inverted (x = 1.0 - x).
         * @internal
         */ this._invertNormalMapX = false;
        /**
         * If sets to true, y component of normal map value will be inverted (y = 1.0 - y).
         * @internal
         */ this._invertNormalMapY = false;
        /**
         * If sets to true and backfaceCulling is false, normals will be flipped on the backside.
         * @internal
         */ this._twoSidedLighting = false;
        /**
         * Defines the alpha limits in alpha test mode.
         * @internal
         */ this._alphaCutOff = 0.4;
        /**
         * A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
         * And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)
         * @internal
         */ this._useAlphaFresnel = false;
        /**
         * A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
         * And/Or occlude the blended part. (alpha stays linear to compute the fresnel)
         * @internal
         */ this._useLinearAlphaFresnel = false;
        /**
         * Specifies the environment BRDF texture used to compute the scale and offset roughness values
         * from cos theta and roughness:
         * http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf
         * @internal
         */ this._environmentBRDFTexture = null;
        /**
         * Force the shader to compute irradiance in the fragment shader in order to take bump in account.
         * @internal
         */ this._forceIrradianceInFragment = false;
        this._realTimeFiltering = false;
        this._realTimeFilteringQuality = 8;
        /**
         * Force normal to face away from face.
         * @internal
         */ this._forceNormalForward = false;
        /**
         * Enables specular anti aliasing in the PBR shader.
         * It will both interacts on the Geometry for analytical and IBL lighting.
         * It also prefilter the roughness map based on the bump values.
         * @internal
         */ this._enableSpecularAntiAliasing = false;
        /**
         * Stores the available render targets.
         */ this._renderTargets = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartArray"](16);
        /**
         * Sets the global ambient color for the material used in lighting calculations.
         */ this._globalAmbientColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0);
        /**
         * If set to true, no lighting calculations will be applied.
         */ this._unlit = false;
        /**
         * If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)
         */ this._applyDecalMapAfterDetailMap = false;
        this._debugMode = 0;
        this._shadersLoaded = false;
        this._breakShaderLoadedCheck = false;
        /**
         * @internal
         * This is reserved for the inspector.
         * Defines the material debug mode.
         * It helps seeing only some components of the material while troubleshooting.
         */ this.debugMode = 0;
        /**
         * @internal
         * This is reserved for the inspector.
         * Specify from where on screen the debug mode should start.
         * The value goes from -1 (full screen) to 1 (not visible)
         * It helps with side by side comparison against the final render
         * This defaults to -1
         */ this.debugLimit = -1;
        /**
         * @internal
         * This is reserved for the inspector.
         * As the default viewing range might not be enough (if the ambient is really small for instance)
         * You can use the factor to better multiply the final value.
         */ this.debugFactor = 1;
        this._cacheHasRenderTargetTextures = false;
        this.brdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBRDFConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBRDFConfiguration"](this);
        this.clearCoat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRClearCoatConfiguration"](this);
        this.iridescence = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRIridescenceConfiguration"](this);
        this.anisotropy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrAnisotropicConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRAnisotropicConfiguration"](this);
        this.sheen = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSheenConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRSheenConfiguration"](this);
        this.subSurface = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRSubSurfaceConfiguration"](this);
        this.detailMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$detailMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailMapConfiguration"](this);
        // Setup the default processing configuration to the scene.
        this._attachImageProcessingConfiguration(null);
        this.getRenderTargetTextures = ()=>{
            this._renderTargets.reset();
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
                this._renderTargets.push(this._reflectionTexture);
            }
            this._eventInfo.renderTargets = this._renderTargets;
            this._callbackPluginEventFillRenderTargetTextures(this._eventInfo);
            return this._renderTargets;
        };
        this._environmentBRDFTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetEnvironmentBRDFTexture"])(this.getScene());
        this.prePassConfiguration = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$prePassConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrePassConfiguration"]();
    }
    /**
     * Gets a boolean indicating that current material needs to register RTT
     */ get hasRenderTargetTextures() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
            return true;
        }
        return this._cacheHasRenderTargetTextures;
    }
    /**
     * Can this material render to prepass
     */ get isPrePassCapable() {
        return !this.disableDepthWrite;
    }
    /**
     * @returns the name of the material class.
     */ getClassName() {
        return "PBRBaseMaterial";
    }
    /**
     * Returns true if alpha blending should be disabled.
     */ get _disableAlphaBlending() {
        return this._transparencyMode === PBRBaseMaterial.PBRMATERIAL_OPAQUE || this._transparencyMode === PBRBaseMaterial.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending;
    }
    /**
     * @returns whether or not this material should be rendered in alpha blend mode.
     */ needAlphaBlending() {
        if (this._hasTransparencyMode) {
            return this._transparencyModeIsBlend;
        }
        if (this._disableAlphaBlending) {
            return false;
        }
        return this.alpha < 1.0 || this._opacityTexture != null || this._shouldUseAlphaFromAlbedoTexture();
    }
    /**
     * @returns whether or not this material should be rendered in alpha test mode.
     */ needAlphaTesting() {
        if (this._hasTransparencyMode) {
            return this._transparencyModeIsTest;
        }
        if (this.subSurface?.disableAlphaBlending) {
            return false;
        }
        return this._hasAlphaChannel() && (this._transparencyMode == null || this._transparencyMode === PBRBaseMaterial.PBRMATERIAL_ALPHATEST);
    }
    /**
     * @returns whether or not the alpha value of the albedo texture should be used for alpha blending.
     */ _shouldUseAlphaFromAlbedoTexture() {
        return this._albedoTexture != null && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== PBRBaseMaterial.PBRMATERIAL_OPAQUE;
    }
    /**
     * @returns whether or not there is a usable alpha channel for transparency.
     */ _hasAlphaChannel() {
        return this._albedoTexture != null && this._albedoTexture.hasAlpha || this._opacityTexture != null;
    }
    /**
     * @returns the texture used for the alpha test.
     */ getAlphaTestTexture() {
        return this._albedoTexture;
    }
    /**
     * Specifies that the submesh is ready to be used.
     * @param mesh - BJS mesh.
     * @param subMesh - A submesh of the BJS mesh.  Used to check if it is ready.
     * @param useInstances - Specifies that instances should be used.
     * @returns - boolean indicating that the submesh is ready or not.
     */ isReadyForSubMesh(mesh, subMesh, useInstances) {
        if (!this._uniformBufferLayoutBuilt) {
            this.buildUniformLayout();
        }
        const drawWrapper = subMesh._drawWrapper;
        if (drawWrapper.effect && this.isFrozen) {
            if (drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            this._callbackPluginEventGeneric(4 /* MaterialPluginEvent.GetDefineNames */ , this._eventInfo);
            subMesh.materialDefines = new PBRMaterialDefines(this._eventInfo.defineNames);
        }
        const defines = subMesh.materialDefines;
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        const scene = this.getScene();
        const engine = scene.getEngine();
        if (defines._areTexturesDirty) {
            this._eventInfo.hasRenderTargetTextures = false;
            this._callbackPluginEventHasRenderTargetTextures(this._eventInfo);
            this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures;
            if (scene.texturesEnabled) {
                if (this._albedoTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                    if (!this._albedoTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._baseWeightTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BaseWeightTextureEnabled) {
                    if (!this._baseWeightTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._baseDiffuseRoughnessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BaseDiffuseRoughnessTextureEnabled) {
                    if (!this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._ambientTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].AmbientTextureEnabled) {
                    if (!this._ambientTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._opacityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].OpacityTextureEnabled) {
                    if (!this._opacityTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                const reflectionTexture = this._getReflectionTexture();
                if (reflectionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    if (!reflectionTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                    if (reflectionTexture.irradianceTexture) {
                        if (!reflectionTexture.irradianceTexture.isReadyOrNotBlocking()) {
                            return false;
                        }
                    } else {
                        // Not ready until spherical are ready too.
                        if (!reflectionTexture.sphericalPolynomial && reflectionTexture.getInternalTexture()?._sphericalPolynomialPromise) {
                            return false;
                        }
                    }
                }
                if (this._lightmapTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].LightmapTextureEnabled) {
                    if (!this._lightmapTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (this._emissiveTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].EmissiveTextureEnabled) {
                    if (!this._emissiveTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SpecularTextureEnabled) {
                    if (this._metallicTexture) {
                        if (!this._metallicTexture.isReadyOrNotBlocking()) {
                            return false;
                        }
                    } else if (this._reflectivityTexture) {
                        if (!this._reflectivityTexture.isReadyOrNotBlocking()) {
                            return false;
                        }
                    }
                    if (this._metallicReflectanceTexture) {
                        if (!this._metallicReflectanceTexture.isReadyOrNotBlocking()) {
                            return false;
                        }
                    }
                    if (this._reflectanceTexture) {
                        if (!this._reflectanceTexture.isReadyOrNotBlocking()) {
                            return false;
                        }
                    }
                    if (this._microSurfaceTexture) {
                        if (!this._microSurfaceTexture.isReadyOrNotBlocking()) {
                            return false;
                        }
                    }
                }
                if (engine.getCaps().standardDerivatives && this._bumpTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BumpTextureEnabled && !this._disableBumpMap) {
                    // Bump texture cannot be not blocking.
                    if (!this._bumpTexture.isReady()) {
                        return false;
                    }
                }
                if (this._environmentBRDFTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    // This is blocking.
                    if (!this._environmentBRDFTexture.isReady()) {
                        return false;
                    }
                }
            }
        }
        this._eventInfo.isReadyForSubMesh = true;
        this._eventInfo.defines = defines;
        this._eventInfo.subMesh = subMesh;
        this._callbackPluginEventIsReadyForSubMesh(this._eventInfo);
        if (!this._eventInfo.isReadyForSubMesh) {
            return false;
        }
        if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
            if (!this._imageProcessingConfiguration.isReady()) {
                return false;
            }
        }
        // Check if Area Lights have LTC texture.
        if (defines["AREALIGHTUSED"] || defines["CLUSTLIGHT_BATCH"]) {
            for(let index = 0; index < mesh.lightSources.length; index++){
                if (!mesh.lightSources[index]._isReady()) {
                    return false;
                }
            }
        }
        if (!engine.getCaps().standardDerivatives && !mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind)) {
            mesh.createNormals(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("PBRMaterial: Normals have been created for the mesh: " + mesh.name);
        }
        const previousEffect = subMesh.effect;
        const lightDisposed = defines._areLightsDisposed;
        let effect = this._prepareEffect(mesh, subMesh.getRenderingMesh(), defines, this.onCompiled, this.onError, useInstances, null);
        let forceWasNotReadyPreviously = false;
        if (effect) {
            if (this._onEffectCreatedObservable) {
                onCreatedEffectParameters.effect = effect;
                onCreatedEffectParameters.subMesh = subMesh;
                this._onEffectCreatedObservable.notifyObservers(onCreatedEffectParameters);
            }
            // Use previous effect while new one is compiling
            if (this.allowShaderHotSwapping && previousEffect && !effect.isReady()) {
                effect = previousEffect;
                defines.markAsUnprocessed();
                forceWasNotReadyPreviously = this.isFrozen;
                if (lightDisposed) {
                    // re register in case it takes more than one frame.
                    defines._areLightsDisposed = true;
                    return false;
                }
            } else {
                scene.resetCachedMaterial();
                subMesh.setEffect(effect, defines, this._materialContext);
            }
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        drawWrapper._wasPreviouslyReady = forceWasNotReadyPreviously ? false : true;
        drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
        this._checkScenePerformancePriority();
        return true;
    }
    /**
     * Specifies if the material uses metallic roughness workflow.
     * @returns boolean specifying if the material uses metallic roughness workflow.
     */ isMetallicWorkflow() {
        if (this._metallic != null || this._roughness != null || this._metallicTexture) {
            return true;
        }
        return false;
    }
    _prepareEffect(mesh, renderingMesh, defines, onCompiled = null, onError = null, useInstances = null, useClipPlane = null) {
        this._prepareDefines(mesh, renderingMesh, defines, useInstances, useClipPlane);
        if (!defines.isDirty) {
            return null;
        }
        defines.markAsProcessed();
        const scene = this.getScene();
        const engine = scene.getEngine();
        // Fallbacks
        const fallbacks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EffectFallbacks"]();
        let fallbackRank = 0;
        if (defines.USESPHERICALINVERTEX) {
            fallbacks.addFallback(fallbackRank++, "USESPHERICALINVERTEX");
        }
        if (defines.FOG) {
            fallbacks.addFallback(fallbackRank, "FOG");
        }
        if (defines.SPECULARAA) {
            fallbacks.addFallback(fallbackRank, "SPECULARAA");
        }
        if (defines.POINTSIZE) {
            fallbacks.addFallback(fallbackRank, "POINTSIZE");
        }
        if (defines.LOGARITHMICDEPTH) {
            fallbacks.addFallback(fallbackRank, "LOGARITHMICDEPTH");
        }
        if (defines.PARALLAX) {
            fallbacks.addFallback(fallbackRank, "PARALLAX");
        }
        if (defines.PARALLAX_RHS) {
            fallbacks.addFallback(fallbackRank, "PARALLAX_RHS");
        }
        if (defines.PARALLAXOCCLUSION) {
            fallbacks.addFallback(fallbackRank++, "PARALLAXOCCLUSION");
        }
        if (defines.ENVIRONMENTBRDF) {
            fallbacks.addFallback(fallbackRank++, "ENVIRONMENTBRDF");
        }
        if (defines.TANGENT) {
            fallbacks.addFallback(fallbackRank++, "TANGENT");
        }
        if (defines.BUMP) {
            fallbacks.addFallback(fallbackRank++, "BUMP");
        }
        fallbackRank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HandleFallbacksForShadows"])(defines, fallbacks, this._maxSimultaneousLights, fallbackRank++);
        if (defines.SPECULARTERM) {
            fallbacks.addFallback(fallbackRank++, "SPECULARTERM");
        }
        if (defines.USESPHERICALFROMREFLECTIONMAP) {
            fallbacks.addFallback(fallbackRank++, "USESPHERICALFROMREFLECTIONMAP");
        }
        if (defines.USEIRRADIANCEMAP) {
            fallbacks.addFallback(fallbackRank++, "USEIRRADIANCEMAP");
        }
        if (defines.LIGHTMAP) {
            fallbacks.addFallback(fallbackRank++, "LIGHTMAP");
        }
        if (defines.NORMAL) {
            fallbacks.addFallback(fallbackRank++, "NORMAL");
        }
        if (defines.AMBIENT) {
            fallbacks.addFallback(fallbackRank++, "AMBIENT");
        }
        if (defines.EMISSIVE) {
            fallbacks.addFallback(fallbackRank++, "EMISSIVE");
        }
        if (defines.VERTEXCOLOR) {
            fallbacks.addFallback(fallbackRank++, "VERTEXCOLOR");
        }
        if (defines.MORPHTARGETS) {
            fallbacks.addFallback(fallbackRank++, "MORPHTARGETS");
        }
        if (defines.MULTIVIEW) {
            fallbacks.addFallback(0, "MULTIVIEW");
        }
        //Attributes
        const attribs = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
        ];
        if (defines.NORMAL) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
        }
        if (defines.TANGENT) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].TangentKind);
        }
        for(let i = 1; i <= 6; ++i){
            if (defines["UV" + i]) {
                attribs.push(`uv${i === 1 ? "" : i}`);
            }
        }
        if (defines.VERTEXCOLOR) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBones"])(attribs, mesh, defines, fallbacks);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForInstances"])(attribs, defines);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForMorphTargets"])(attribs, mesh, defines);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBakedVertexAnimation"])(attribs, mesh, defines);
        let shaderName = "pbr";
        const uniforms = [
            "world",
            "view",
            "viewProjection",
            "vEyePosition",
            "vLightsType",
            "vAmbientColor",
            "vAlbedoColor",
            "baseWeight",
            "baseDiffuseRoughness",
            "vReflectivityColor",
            "vMetallicReflectanceFactors",
            "vEmissiveColor",
            "visibility",
            "vFogInfos",
            "vFogColor",
            "pointSize",
            "vAlbedoInfos",
            "vBaseWeightInfos",
            "vBaseDiffuseRoughnessInfos",
            "vAmbientInfos",
            "vOpacityInfos",
            "vEmissiveInfos",
            "vReflectivityInfos",
            "vMetallicReflectanceInfos",
            "vReflectanceInfos",
            "vMicroSurfaceSamplerInfos",
            "vBumpInfos",
            "vLightmapInfos",
            "mBones",
            "albedoMatrix",
            "baseWeightMatrix",
            "baseDiffuseRoughnessMatrix",
            "ambientMatrix",
            "opacityMatrix",
            "emissiveMatrix",
            "reflectivityMatrix",
            "normalMatrix",
            "microSurfaceSamplerMatrix",
            "bumpMatrix",
            "lightmapMatrix",
            "metallicReflectanceMatrix",
            "reflectanceMatrix",
            "vLightingIntensity",
            "logarithmicDepthConstant",
            "vTangentSpaceParams",
            "boneTextureWidth",
            "vDebugMode",
            "morphTargetTextureInfo",
            "morphTargetTextureIndices",
            "cameraInfo"
        ];
        const samplers = [
            "albedoSampler",
            "baseWeightSampler",
            "baseDiffuseRoughnessSampler",
            "reflectivitySampler",
            "ambientSampler",
            "emissiveSampler",
            "bumpSampler",
            "lightmapSampler",
            "opacitySampler",
            "microSurfaceSampler",
            "environmentBrdfSampler",
            "boneSampler",
            "metallicReflectanceSampler",
            "reflectanceSampler",
            "morphTargets",
            "oitDepthSampler",
            "oitFrontColorSampler",
            "areaLightsLTC1Sampler",
            "areaLightsLTC2Sampler"
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersForIBL"])(uniforms, samplers, true);
        const uniformBuffers = [
            "Material",
            "Scene",
            "Mesh"
        ];
        const indexParameters = {
            maxSimultaneousLights: this._maxSimultaneousLights,
            maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS
        };
        this._eventInfo.fallbacks = fallbacks;
        this._eventInfo.fallbackRank = fallbackRank;
        this._eventInfo.defines = defines;
        this._eventInfo.uniforms = uniforms;
        this._eventInfo.attributes = attribs;
        this._eventInfo.samplers = samplers;
        this._eventInfo.uniformBuffersNames = uniformBuffers;
        this._eventInfo.customCode = undefined;
        this._eventInfo.mesh = mesh;
        this._eventInfo.indexParameters = indexParameters;
        this._callbackPluginEventGeneric(128 /* MaterialPluginEvent.PrepareEffect */ , this._eventInfo);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialHelperGeometryRendering"].AddUniformsAndSamplers(uniforms, samplers);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$prePassConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrePassConfiguration"].AddUniforms(uniforms);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$prePassConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrePassConfiguration"].AddSamplers(samplers);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddClipPlaneUniforms"])(uniforms);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingConfiguration"]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingConfiguration"].PrepareUniforms(uniforms, defines);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingConfiguration"].PrepareSamplers(samplers, defines);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersList"])({
            uniformsNames: uniforms,
            uniformBuffersNames: uniformBuffers,
            samplers: samplers,
            defines: defines,
            maxSimultaneousLights: this._maxSimultaneousLights
        });
        const csnrOptions = {};
        if (this.customShaderNameResolve) {
            shaderName = this.customShaderNameResolve(shaderName, uniforms, uniformBuffers, samplers, defines, attribs, csnrOptions);
        }
        const join = defines.toString();
        const effect = engine.createEffect(shaderName, {
            attributes: attribs,
            uniformsNames: uniforms,
            uniformBuffersNames: uniformBuffers,
            samplers: samplers,
            defines: join,
            fallbacks: fallbacks,
            onCompiled: onCompiled,
            onError: onError,
            indexParameters,
            processFinalCode: csnrOptions.processFinalCode,
            processCodeAfterIncludes: this._eventInfo.customCode,
            multiTarget: defines.PREPASS,
            shaderLanguage: this._shaderLanguage,
            extraInitializationsAsync: this._shadersLoaded ? undefined : async ()=>{
                if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.vertex.js [app-ssr] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.fragment.js [app-ssr] (ecmascript, async loader)")
                    ]);
                } else {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/pbr.vertex.js [app-ssr] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/pbr.fragment.js [app-ssr] (ecmascript, async loader)")
                    ]);
                }
                this._shadersLoaded = true;
            }
        }, engine);
        this._eventInfo.customCode = undefined;
        return effect;
    }
    _prepareDefines(mesh, renderingMesh, defines, useInstances = null, useClipPlane = null) {
        const useThinInstances = renderingMesh.hasThinInstances;
        const scene = this.getScene();
        const engine = scene.getEngine();
        // Lights
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLights"])(scene, mesh, defines, true, this._maxSimultaneousLights, this._disableLighting);
        defines._needNormals = true;
        // Multiview
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMultiview"])(scene, defines);
        // PrePass
        const oit = this.needAlphaBlendingForMesh(mesh) && this.getScene().useOrderIndependentTransparency;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForPrePass"])(scene, defines, this.canRenderToMRT && !oit);
        // Order independant transparency
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForOIT"])(scene, defines, oit);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialHelperGeometryRendering"].PrepareDefines(engine.currentRenderPassId, mesh, defines);
        // Textures
        defines.METALLICWORKFLOW = this.isMetallicWorkflow();
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            for(let i = 1; i <= 6; ++i){
                defines["MAINUV" + i] = false;
            }
            if (scene.texturesEnabled) {
                defines.ALBEDODIRECTUV = 0;
                defines.BASE_WEIGHTDIRECTUV = 0;
                defines.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0;
                defines.AMBIENTDIRECTUV = 0;
                defines.OPACITYDIRECTUV = 0;
                defines.EMISSIVEDIRECTUV = 0;
                defines.REFLECTIVITYDIRECTUV = 0;
                defines.MICROSURFACEMAPDIRECTUV = 0;
                defines.METALLIC_REFLECTANCEDIRECTUV = 0;
                defines.REFLECTANCEDIRECTUV = 0;
                defines.BUMPDIRECTUV = 0;
                defines.LIGHTMAPDIRECTUV = 0;
                if (engine.getCaps().textureLOD) {
                    defines.LODBASEDMICROSFURACE = true;
                }
                if (this._albedoTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._albedoTexture, defines, "ALBEDO");
                    defines.GAMMAALBEDO = this._albedoTexture.gammaSpace;
                } else {
                    defines.ALBEDO = false;
                }
                if (this._baseWeightTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BaseWeightTextureEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._baseWeightTexture, defines, "BASE_WEIGHT");
                } else {
                    defines.BASE_WEIGHT = false;
                }
                if (this._baseDiffuseRoughnessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BaseDiffuseRoughnessTextureEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._baseDiffuseRoughnessTexture, defines, "BASE_DIFFUSE_ROUGHNESS");
                } else {
                    defines.BASE_DIFFUSE_ROUGHNESS = false;
                }
                if (this._ambientTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].AmbientTextureEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._ambientTexture, defines, "AMBIENT");
                    defines.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale;
                } else {
                    defines.AMBIENT = false;
                }
                if (this._opacityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].OpacityTextureEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._opacityTexture, defines, "OPACITY");
                    defines.OPACITYRGB = this._opacityTexture.getAlphaFromRGB;
                } else {
                    defines.OPACITY = false;
                }
                const reflectionTexture = this._getReflectionTexture();
                const useSHInFragment = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || engine.getCaps().maxVaryingVectors <= 8 || this._baseDiffuseRoughnessTexture != null;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForIBL"])(scene, reflectionTexture, defines, this.realTimeFiltering, this.realTimeFilteringQuality, !useSHInFragment);
                if (this._lightmapTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].LightmapTextureEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._lightmapTexture, defines, "LIGHTMAP");
                    defines.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap;
                    defines.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace;
                    defines.RGBDLIGHTMAP = this._lightmapTexture.isRGBD;
                } else {
                    defines.LIGHTMAP = false;
                }
                if (this._emissiveTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].EmissiveTextureEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._emissiveTexture, defines, "EMISSIVE");
                    defines.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace;
                } else {
                    defines.EMISSIVE = false;
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SpecularTextureEnabled) {
                    if (this._metallicTexture) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._metallicTexture, defines, "REFLECTIVITY");
                        defines.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha;
                        defines.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen;
                        defines.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue;
                        defines.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed;
                        defines.REFLECTIVITY_GAMMA = false;
                    } else if (this._reflectivityTexture) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._reflectivityTexture, defines, "REFLECTIVITY");
                        defines.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha;
                        defines.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap;
                        defines.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace;
                    } else {
                        defines.REFLECTIVITY = false;
                    }
                    if (this._metallicReflectanceTexture || this._reflectanceTexture) {
                        defines.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture;
                        if (this._metallicReflectanceTexture) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._metallicReflectanceTexture, defines, "METALLIC_REFLECTANCE");
                            defines.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace;
                        } else {
                            defines.METALLIC_REFLECTANCE = false;
                        }
                        if (this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._reflectanceTexture, defines, "REFLECTANCE");
                            defines.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace;
                        } else {
                            defines.REFLECTANCE = false;
                        }
                    } else {
                        defines.METALLIC_REFLECTANCE = false;
                        defines.REFLECTANCE = false;
                    }
                    if (this._microSurfaceTexture) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._microSurfaceTexture, defines, "MICROSURFACEMAP");
                    } else {
                        defines.MICROSURFACEMAP = false;
                    }
                } else {
                    defines.REFLECTIVITY = false;
                    defines.MICROSURFACEMAP = false;
                }
                if (engine.getCaps().standardDerivatives && this._bumpTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BumpTextureEnabled && !this._disableBumpMap) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._bumpTexture, defines, "BUMP");
                    if (this._useParallax && this._albedoTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                        defines.PARALLAX = true;
                        defines.PARALLAX_RHS = scene.useRightHandedSystem;
                        defines.PARALLAXOCCLUSION = !!this._useParallaxOcclusion;
                    } else {
                        defines.PARALLAX = false;
                    }
                    defines.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap;
                } else {
                    defines.BUMP = false;
                    defines.PARALLAX = false;
                    defines.PARALLAX_RHS = false;
                    defines.PARALLAXOCCLUSION = false;
                    defines.OBJECTSPACE_NORMALMAP = false;
                }
                if (this._environmentBRDFTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    defines.ENVIRONMENTBRDF = true;
                    defines.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD;
                } else {
                    defines.ENVIRONMENTBRDF = false;
                    defines.ENVIRONMENTBRDF_RGBD = false;
                }
                if (this._shouldUseAlphaFromAlbedoTexture()) {
                    defines.ALPHAFROMALBEDO = true;
                } else {
                    defines.ALPHAFROMALBEDO = false;
                }
            }
            defines.SPECULAROVERALPHA = this._useSpecularOverAlpha;
            if (this._lightFalloff === PBRBaseMaterial.LIGHTFALLOFF_STANDARD) {
                defines.USEPHYSICALLIGHTFALLOFF = false;
                defines.USEGLTFLIGHTFALLOFF = false;
            } else if (this._lightFalloff === PBRBaseMaterial.LIGHTFALLOFF_GLTF) {
                defines.USEPHYSICALLIGHTFALLOFF = false;
                defines.USEGLTFLIGHTFALLOFF = true;
            } else {
                defines.USEPHYSICALLIGHTFALLOFF = true;
                defines.USEGLTFLIGHTFALLOFF = false;
            }
            defines.RADIANCEOVERALPHA = this._useRadianceOverAlpha;
            if (!this.backFaceCulling && this._twoSidedLighting) {
                defines.TWOSIDEDLIGHTING = true;
            } else {
                defines.TWOSIDEDLIGHTING = false;
            }
            // We need it to not invert normals in two sided lighting mode (based on the winding of the face)
            defines.MIRRORED = !!scene._mirroredCameraPosition;
            defines.SPECULARAA = engine.getCaps().standardDerivatives && this._enableSpecularAntiAliasing;
        }
        if (defines._areTexturesDirty || defines._areMiscDirty) {
            defines.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff % 1 === 0 ? "." : ""}`;
            defines.PREMULTIPLYALPHA = this.alphaMode === 7 || this.alphaMode === 8;
            defines.ALPHABLEND = this.needAlphaBlendingForMesh(mesh);
            defines.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel;
            defines.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel;
        }
        if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
            this._imageProcessingConfiguration.prepareDefines(defines);
        }
        defines.FORCENORMALFORWARD = this._forceNormalForward;
        defines.RADIANCEOCCLUSION = this._useRadianceOcclusion;
        defines.HORIZONOCCLUSION = this._useHorizonOcclusion;
        // Misc.
        if (defines._areMiscDirty) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMisc"])(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(mesh), defines, this._applyDecalMapAfterDetailMap, this._useVertexPulling, renderingMesh, this._isVertexOutputInvariant);
            defines.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
            defines.DEBUGMODE = this._debugMode;
        }
        // Values that need to be evaluated on every frame
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForFrameBoundValues"])(scene, engine, this, defines, useInstances ? true : false, useClipPlane, useThinInstances);
        // External config
        this._eventInfo.defines = defines;
        this._eventInfo.mesh = mesh;
        this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo);
        // Attribs
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForAttributes"])(mesh, defines, true, true, true, this._transparencyMode !== PBRBaseMaterial.PBRMATERIAL_OPAQUE);
        // External config
        this._callbackPluginEventPrepareDefines(this._eventInfo);
    }
    /**
     * Force shader compilation
     * @param mesh - Define the mesh we want to force the compilation for
     * @param onCompiled - Define a callback triggered when the compilation completes
     * @param options - Define the options used to create the compilation
     */ forceCompilation(mesh, onCompiled, options) {
        const localOptions = {
            clipPlane: false,
            useInstances: false,
            ...options
        };
        if (!this._uniformBufferLayoutBuilt) {
            this.buildUniformLayout();
        }
        this._callbackPluginEventGeneric(4 /* MaterialPluginEvent.GetDefineNames */ , this._eventInfo);
        const checkReady = ()=>{
            if (this._breakShaderLoadedCheck) {
                return;
            }
            const defines = new PBRMaterialDefines(this._eventInfo.defineNames);
            const effect = this._prepareEffect(mesh, mesh, defines, undefined, undefined, localOptions.useInstances, localOptions.clipPlane);
            if (this._onEffectCreatedObservable) {
                onCreatedEffectParameters.effect = effect;
                onCreatedEffectParameters.subMesh = null;
                this._onEffectCreatedObservable.notifyObservers(onCreatedEffectParameters);
            }
            if (effect.isReady()) {
                if (onCompiled) {
                    onCompiled(this);
                }
            } else {
                effect.onCompileObservable.add(()=>{
                    if (onCompiled) {
                        onCompiled(this);
                    }
                });
            }
        };
        checkReady();
    }
    /**
     * Initializes the uniform buffer layout for the shader.
     */ buildUniformLayout() {
        // Order is important !
        const ubo = this._uniformBuffer;
        ubo.addUniform("vAlbedoInfos", 2);
        ubo.addUniform("vBaseWeightInfos", 2);
        ubo.addUniform("vBaseDiffuseRoughnessInfos", 2);
        ubo.addUniform("vAmbientInfos", 4);
        ubo.addUniform("vOpacityInfos", 2);
        ubo.addUniform("vEmissiveInfos", 2);
        ubo.addUniform("vLightmapInfos", 2);
        ubo.addUniform("vReflectivityInfos", 3);
        ubo.addUniform("vMicroSurfaceSamplerInfos", 2);
        ubo.addUniform("vBumpInfos", 3);
        ubo.addUniform("albedoMatrix", 16);
        ubo.addUniform("baseWeightMatrix", 16);
        ubo.addUniform("baseDiffuseRoughnessMatrix", 16);
        ubo.addUniform("ambientMatrix", 16);
        ubo.addUniform("opacityMatrix", 16);
        ubo.addUniform("emissiveMatrix", 16);
        ubo.addUniform("lightmapMatrix", 16);
        ubo.addUniform("reflectivityMatrix", 16);
        ubo.addUniform("microSurfaceSamplerMatrix", 16);
        ubo.addUniform("bumpMatrix", 16);
        ubo.addUniform("vTangentSpaceParams", 2);
        ubo.addUniform("vAlbedoColor", 4);
        ubo.addUniform("baseWeight", 1);
        ubo.addUniform("baseDiffuseRoughness", 1);
        ubo.addUniform("vLightingIntensity", 4);
        ubo.addUniform("pointSize", 1);
        ubo.addUniform("vReflectivityColor", 4);
        ubo.addUniform("vEmissiveColor", 3);
        ubo.addUniform("vAmbientColor", 3);
        ubo.addUniform("vDebugMode", 2);
        ubo.addUniform("vMetallicReflectanceFactors", 4);
        ubo.addUniform("vMetallicReflectanceInfos", 2);
        ubo.addUniform("metallicReflectanceMatrix", 16);
        ubo.addUniform("vReflectanceInfos", 2);
        ubo.addUniform("reflectanceMatrix", 16);
        ubo.addUniform("cameraInfo", 4);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformLayoutForIBL"])(ubo, true, true, true, true, true);
        super.buildUniformLayout();
    }
    /**
     * Binds the submesh data.
     * @param world - The world matrix.
     * @param mesh - The BJS mesh.
     * @param subMesh - A submesh of the BJS mesh.
     */ bindForSubMesh(world, mesh, subMesh) {
        const scene = this.getScene();
        const defines = subMesh.materialDefines;
        if (!defines) {
            return;
        }
        const effect = subMesh.effect;
        if (!effect) {
            return;
        }
        this._activeEffect = effect;
        // Matrices Mesh.
        mesh.getMeshUniformBuffer().bindToEffect(effect, "Mesh");
        mesh.transferToEffect(world);
        const engine = scene.getEngine();
        // Binding unconditionally
        this._uniformBuffer.bindToEffect(effect, "Material");
        this.prePassConfiguration.bindForSubMesh(this._activeEffect, scene, mesh, world, this.isFrozen);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialHelperGeometryRendering"].Bind(engine.currentRenderPassId, this._activeEffect, mesh, world, this);
        const camera = scene.activeCamera;
        if (camera) {
            this._uniformBuffer.updateFloat4("cameraInfo", camera.minZ, camera.maxZ, 0, 0);
        } else {
            this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
        }
        this._eventInfo.subMesh = subMesh;
        this._callbackPluginEventHardBindForSubMesh(this._eventInfo);
        // Normal Matrix
        if (defines.OBJECTSPACE_NORMALMAP) {
            world.toNormalMatrix(this._normalMatrix);
            this.bindOnlyNormalMatrix(this._normalMatrix);
        }
        const mustRebind = this._mustRebind(scene, effect, subMesh, mesh.visibility);
        // Bones
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindBonesParameters"])(mesh, this._activeEffect, this.prePassConfiguration);
        let reflectionTexture = null;
        const ubo = this._uniformBuffer;
        if (mustRebind) {
            this.bindViewProjection(effect);
            reflectionTexture = this._getReflectionTexture();
            if (!ubo.useUbo || !this.isFrozen || !ubo.isSync || subMesh._drawWrapper._forceRebindOnNextCall) {
                // Texture uniforms
                if (scene.texturesEnabled) {
                    if (this._albedoTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                        ubo.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._albedoTexture, ubo, "albedo");
                    }
                    if (this._baseWeightTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BaseWeightTextureEnabled) {
                        ubo.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._baseWeightTexture, ubo, "baseWeight");
                    }
                    if (this._baseDiffuseRoughnessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BaseDiffuseRoughnessTextureEnabled) {
                        ubo.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._baseDiffuseRoughnessTexture, ubo, "baseDiffuseRoughness");
                    }
                    if (this._ambientTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].AmbientTextureEnabled) {
                        ubo.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._ambientTexture, ubo, "ambient");
                    }
                    if (this._opacityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].OpacityTextureEnabled) {
                        ubo.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._opacityTexture, ubo, "opacity");
                    }
                    if (this._emissiveTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].EmissiveTextureEnabled) {
                        ubo.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._emissiveTexture, ubo, "emissive");
                    }
                    if (this._lightmapTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].LightmapTextureEnabled) {
                        ubo.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._lightmapTexture, ubo, "lightmap");
                    }
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SpecularTextureEnabled) {
                        if (this._metallicTexture) {
                            ubo.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._metallicTexture, ubo, "reflectivity");
                        } else if (this._reflectivityTexture) {
                            ubo.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1.0);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._reflectivityTexture, ubo, "reflectivity");
                        }
                        if (this._metallicReflectanceTexture) {
                            ubo.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._metallicReflectanceTexture, ubo, "metallicReflectance");
                        }
                        if (this._reflectanceTexture && defines.REFLECTANCE) {
                            ubo.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._reflectanceTexture, ubo, "reflectance");
                        }
                        if (this._microSurfaceTexture) {
                            ubo.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._microSurfaceTexture, ubo, "microSurfaceSampler");
                        }
                    }
                    if (this._bumpTexture && engine.getCaps().standardDerivatives && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BumpTextureEnabled && !this._disableBumpMap) {
                        ubo.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._bumpTexture, ubo, "bump");
                        if (scene._mirroredCameraPosition) {
                            ubo.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1.0 : -1.0, this._invertNormalMapY ? 1.0 : -1.0);
                        } else {
                            ubo.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1.0 : 1.0, this._invertNormalMapY ? -1.0 : 1.0);
                        }
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindIBLParameters"])(scene, defines, ubo, this._reflectionColor, reflectionTexture, this.realTimeFiltering, true, true, true, true, true);
                }
                // Point size
                if (this.pointsCloud) {
                    ubo.updateFloat("pointSize", this.pointSize);
                }
                // Colors
                if (defines.METALLICWORKFLOW) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].r = this._metallic === undefined || this._metallic === null ? 1 : this._metallic;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].g = this._roughness === undefined || this._roughness === null ? 1 : this._roughness;
                    const ior = this.subSurface?._indexOfRefraction ?? 1.5;
                    const outsideIOR = 1; // consider air as clear coat and other layers would remap in the shader.
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].b = ior;
                    // We are here deriving our default reflectance from a common value for none metallic surface.
                    // Based of the schlick fresnel approximation model
                    // for dielectrics.
                    const f0 = Math.pow((ior - outsideIOR) / (ior + outsideIOR), 2);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0].a = f0;
                    ubo.updateDirectColor4("vReflectivityColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color4[0]);
                    ubo.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor);
                } else {
                    ubo.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
                }
                ubo.updateColor3("vEmissiveColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].EmissiveTextureEnabled ? this._emissiveColor : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].BlackReadOnly);
                if (!defines.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency) {
                    ubo.updateColor4("vAlbedoColor", this._albedoColor, 1);
                } else {
                    ubo.updateColor4("vAlbedoColor", this._albedoColor, this.alpha);
                }
                ubo.updateFloat("baseWeight", this._baseWeight);
                ubo.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0.0);
                // Misc
                this._lightingInfos.x = this._directIntensity;
                this._lightingInfos.y = this._emissiveIntensity;
                this._lightingInfos.z = this._environmentIntensity * scene.environmentIntensity;
                this._lightingInfos.w = this._specularIntensity;
                ubo.updateVector4("vLightingIntensity", this._lightingInfos);
                // Colors
                scene.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor);
                ubo.updateColor3("vAmbientColor", this._globalAmbientColor);
                ubo.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor);
            }
            // Textures
            if (scene.texturesEnabled) {
                if (this._albedoTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                    ubo.setTexture("albedoSampler", this._albedoTexture);
                }
                if (this._baseWeightTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BaseWeightTextureEnabled) {
                    ubo.setTexture("baseWeightSampler", this._baseWeightTexture);
                }
                if (this._baseDiffuseRoughnessTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BaseDiffuseRoughnessTextureEnabled) {
                    ubo.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture);
                }
                if (this._ambientTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].AmbientTextureEnabled) {
                    ubo.setTexture("ambientSampler", this._ambientTexture);
                }
                if (this._opacityTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].OpacityTextureEnabled) {
                    ubo.setTexture("opacitySampler", this._opacityTexture);
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindIBLSamplers"])(scene, defines, ubo, reflectionTexture, this.realTimeFiltering);
                if (defines.ENVIRONMENTBRDF) {
                    ubo.setTexture("environmentBrdfSampler", this._environmentBRDFTexture);
                }
                if (this._emissiveTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].EmissiveTextureEnabled) {
                    ubo.setTexture("emissiveSampler", this._emissiveTexture);
                }
                if (this._lightmapTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].LightmapTextureEnabled) {
                    ubo.setTexture("lightmapSampler", this._lightmapTexture);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].SpecularTextureEnabled) {
                    if (this._metallicTexture) {
                        ubo.setTexture("reflectivitySampler", this._metallicTexture);
                    } else if (this._reflectivityTexture) {
                        ubo.setTexture("reflectivitySampler", this._reflectivityTexture);
                    }
                    if (this._metallicReflectanceTexture) {
                        ubo.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture);
                    }
                    if (this._reflectanceTexture && defines.REFLECTANCE) {
                        ubo.setTexture("reflectanceSampler", this._reflectanceTexture);
                    }
                    if (this._microSurfaceTexture) {
                        ubo.setTexture("microSurfaceSampler", this._microSurfaceTexture);
                    }
                }
                if (this._bumpTexture && engine.getCaps().standardDerivatives && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].BumpTextureEnabled && !this._disableBumpMap) {
                    ubo.setTexture("bumpSampler", this._bumpTexture);
                }
            }
            // OIT with depth peeling
            if (this.getScene().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(mesh)) {
                this.getScene().depthPeelingRenderer.bind(effect);
            }
            this._eventInfo.subMesh = subMesh;
            this._callbackPluginEventBindForSubMesh(this._eventInfo);
            // Clip plane
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindClipPlane"])(this._activeEffect, this, scene);
            this.bindEyePosition(effect);
        } else if (scene.getEngine()._features.needToAlwaysBindUniformBuffers) {
            this._needToBindSceneUbo = true;
        }
        if (mustRebind || !this.isFrozen) {
            // Lights
            if (scene.lightsEnabled && !this._disableLighting) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLights"])(scene, mesh, this._activeEffect, defines, this._maxSimultaneousLights);
            }
            // View
            if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].FOGMODE_NONE || reflectionTexture || this.subSurface.refractionTexture || mesh.receiveShadows || defines.PREPASS || defines["CLUSTLIGHT_BATCH"]) {
                this.bindView(effect);
            }
            // Fog
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindFogParameters"])(scene, mesh, this._activeEffect, true);
            // Morph targets
            if (defines.NUM_MORPH_INFLUENCERS) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"])(mesh, this._activeEffect);
            }
            if (defines.BAKED_VERTEX_ANIMATION_TEXTURE) {
                mesh.bakedVertexAnimationManager?.bind(effect, defines.INSTANCES);
            }
            // image processing
            this._imageProcessingConfiguration.bind(this._activeEffect);
            // Log. depth
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"])(defines, this._activeEffect, scene);
        }
        this._afterBind(mesh, this._activeEffect, subMesh);
        ubo.update();
    }
    /**
     * Returns the animatable textures.
     * If material have animatable metallic texture, then reflectivity texture will not be returned, even if it has animations.
     * @returns - Array of animatable textures.
     */ getAnimatables() {
        const results = super.getAnimatables();
        if (this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0) {
            results.push(this._albedoTexture);
        }
        if (this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0) {
            results.push(this._baseWeightTexture);
        }
        if (this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0) {
            results.push(this._baseDiffuseRoughnessTexture);
        }
        if (this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0) {
            results.push(this._ambientTexture);
        }
        if (this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0) {
            results.push(this._opacityTexture);
        }
        if (this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0) {
            results.push(this._reflectionTexture);
        }
        if (this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0) {
            results.push(this._emissiveTexture);
        }
        if (this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0) {
            results.push(this._metallicTexture);
        } else if (this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0) {
            results.push(this._reflectivityTexture);
        }
        if (this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0) {
            results.push(this._bumpTexture);
        }
        if (this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0) {
            results.push(this._lightmapTexture);
        }
        if (this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0) {
            results.push(this._metallicReflectanceTexture);
        }
        if (this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0) {
            results.push(this._reflectanceTexture);
        }
        if (this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0) {
            results.push(this._microSurfaceTexture);
        }
        return results;
    }
    /**
     * Returns the texture used for reflections.
     * @returns - Reflection texture if present.  Otherwise, returns the environment texture.
     */ _getReflectionTexture() {
        if (this._reflectionTexture) {
            return this._reflectionTexture;
        }
        return this.getScene().environmentTexture;
    }
    /**
     * Returns an array of the actively used textures.
     * @returns - Array of BaseTextures
     */ getActiveTextures() {
        const activeTextures = super.getActiveTextures();
        if (this._albedoTexture) {
            activeTextures.push(this._albedoTexture);
        }
        if (this._baseWeightTexture) {
            activeTextures.push(this._baseWeightTexture);
        }
        if (this._baseDiffuseRoughnessTexture) {
            activeTextures.push(this._baseDiffuseRoughnessTexture);
        }
        if (this._ambientTexture) {
            activeTextures.push(this._ambientTexture);
        }
        if (this._opacityTexture) {
            activeTextures.push(this._opacityTexture);
        }
        if (this._reflectionTexture) {
            activeTextures.push(this._reflectionTexture);
        }
        if (this._emissiveTexture) {
            activeTextures.push(this._emissiveTexture);
        }
        if (this._reflectivityTexture) {
            activeTextures.push(this._reflectivityTexture);
        }
        if (this._metallicTexture) {
            activeTextures.push(this._metallicTexture);
        }
        if (this._metallicReflectanceTexture) {
            activeTextures.push(this._metallicReflectanceTexture);
        }
        if (this._reflectanceTexture) {
            activeTextures.push(this._reflectanceTexture);
        }
        if (this._microSurfaceTexture) {
            activeTextures.push(this._microSurfaceTexture);
        }
        if (this._bumpTexture) {
            activeTextures.push(this._bumpTexture);
        }
        if (this._lightmapTexture) {
            activeTextures.push(this._lightmapTexture);
        }
        return activeTextures;
    }
    /**
     * Checks to see if a texture is used in the material.
     * @param texture - Base texture to use.
     * @returns - Boolean specifying if a texture is used in the material.
     */ hasTexture(texture) {
        if (super.hasTexture(texture)) {
            return true;
        }
        if (this._albedoTexture === texture) {
            return true;
        }
        if (this._baseWeightTexture === texture) {
            return true;
        }
        if (this._baseDiffuseRoughnessTexture === texture) {
            return true;
        }
        if (this._ambientTexture === texture) {
            return true;
        }
        if (this._opacityTexture === texture) {
            return true;
        }
        if (this._reflectionTexture === texture) {
            return true;
        }
        if (this._emissiveTexture === texture) {
            return true;
        }
        if (this._reflectivityTexture === texture) {
            return true;
        }
        if (this._metallicTexture === texture) {
            return true;
        }
        if (this._metallicReflectanceTexture === texture) {
            return true;
        }
        if (this._reflectanceTexture === texture) {
            return true;
        }
        if (this._microSurfaceTexture === texture) {
            return true;
        }
        if (this._bumpTexture === texture) {
            return true;
        }
        if (this._lightmapTexture === texture) {
            return true;
        }
        return false;
    }
    /**
     * Sets the required values to the prepass renderer.
     * It can't be sets when subsurface scattering of this material is disabled.
     * When scene have ability to enable subsurface prepass effect, it will enable.
     * @returns - If prepass is enabled or not.
     */ setPrePassRenderer() {
        if (!this.subSurface?.isScatteringEnabled) {
            return false;
        }
        const subSurfaceConfiguration = this.getScene().enableSubSurfaceForPrePass();
        if (subSurfaceConfiguration) {
            subSurfaceConfiguration.enabled = true;
        }
        return true;
    }
    /**
     * Disposes the resources of the material.
     * @param forceDisposeEffect - Forces the disposal of effects.
     * @param forceDisposeTextures - Forces the disposal of all textures.
     */ dispose(forceDisposeEffect, forceDisposeTextures) {
        this._breakShaderLoadedCheck = true;
        if (forceDisposeTextures) {
            if (this._environmentBRDFTexture && this.getScene().environmentBRDFTexture !== this._environmentBRDFTexture) {
                this._environmentBRDFTexture.dispose();
            }
            this._albedoTexture?.dispose();
            this._baseWeightTexture?.dispose();
            this._baseDiffuseRoughnessTexture?.dispose();
            this._ambientTexture?.dispose();
            this._opacityTexture?.dispose();
            this._reflectionTexture?.dispose();
            this._emissiveTexture?.dispose();
            this._metallicTexture?.dispose();
            this._reflectivityTexture?.dispose();
            this._bumpTexture?.dispose();
            this._lightmapTexture?.dispose();
            this._metallicReflectanceTexture?.dispose();
            this._reflectanceTexture?.dispose();
            this._microSurfaceTexture?.dispose();
        }
        this._renderTargets.dispose();
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }
        super.dispose(forceDisposeEffect, forceDisposeTextures);
    }
}
/**
 * PBRMaterialTransparencyMode: No transparency mode, Alpha channel is not use.
 */ PBRBaseMaterial.PBRMATERIAL_OPAQUE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_OPAQUE;
/**
 * PBRMaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.
 */ PBRBaseMaterial.PBRMATERIAL_ALPHATEST = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_ALPHATEST;
/**
 * PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
 */ PBRBaseMaterial.PBRMATERIAL_ALPHABLEND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_ALPHABLEND;
/**
 * PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
 * They are also discarded below the alpha cutoff threshold to improve performances.
 */ PBRBaseMaterial.PBRMATERIAL_ALPHATESTANDBLEND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_ALPHATESTANDBLEND;
/**
 * Defines the default value of how much AO map is occluding the analytical lights
 * (point spot...).
 */ PBRBaseMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0;
/**
 * PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.
 */ PBRBaseMaterial.LIGHTFALLOFF_PHYSICAL = 0;
/**
 * PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
 * to enhance interoperability with other engines.
 */ PBRBaseMaterial.LIGHTFALLOFF_GLTF = 1;
/**
 * PBRMaterialLightFalloff Standard: light is falling off like in the standard material
 * to enhance interoperability with other materials.
 */ PBRBaseMaterial.LIGHTFALLOFF_STANDARD = 2;
/**
 * Force all the PBR materials to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */ PBRBaseMaterial.ForceGLSL = false;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRBaseMaterial.prototype, "debugMode", void 0); //# sourceMappingURL=pbrBaseMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PBRMaterial",
    ()=>PBRMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/brdfTextureTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class PBRMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"] {
    /**
     * Stores the refracted light information in a texture.
     */ get refractionTexture() {
        return this.subSurface.refractionTexture;
    }
    set refractionTexture(value) {
        this.subSurface.refractionTexture = value;
        if (value) {
            this.subSurface.isRefractionEnabled = true;
        } else if (!this.subSurface.linkRefractionWithTransparency) {
            this.subSurface.isRefractionEnabled = false;
        }
    }
    /**
     * Index of refraction of the material base layer.
     * https://en.wikipedia.org/wiki/List_of_refractive_indices
     *
     * This does not only impact refraction but also the Base F0 of Dielectric Materials.
     *
     * From dielectric fresnel rules: F0 = square((iorT - iorI) / (iorT + iorI))
     */ get indexOfRefraction() {
        return this.subSurface.indexOfRefraction;
    }
    set indexOfRefraction(value) {
        this.subSurface.indexOfRefraction = value;
    }
    /**
     * Controls if refraction needs to be inverted on Y. This could be useful for procedural texture.
     */ get invertRefractionY() {
        return this.subSurface.invertRefractionY;
    }
    set invertRefractionY(value) {
        this.subSurface.invertRefractionY = value;
    }
    /**
     * This parameters will make the material used its opacity to control how much it is refracting against not.
     * Materials half opaque for instance using refraction could benefit from this control.
     */ get linkRefractionWithTransparency() {
        return this.subSurface.linkRefractionWithTransparency;
    }
    set linkRefractionWithTransparency(value) {
        this.subSurface.linkRefractionWithTransparency = value;
        if (value) {
            this.subSurface.isRefractionEnabled = true;
        }
    }
    /**
     * BJS is using an hardcoded light falloff based on a manually sets up range.
     * In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
     * This parameter can help you switch back to the BJS mode in order to create scenes using both materials.
     */ get usePhysicalLightFalloff() {
        return this._lightFalloff === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_PHYSICAL;
    }
    /**
     * BJS is using an hardcoded light falloff based on a manually sets up range.
     * In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
     * This parameter can help you switch back to the BJS mode in order to create scenes using both materials.
     */ set usePhysicalLightFalloff(value) {
        if (value !== this.usePhysicalLightFalloff) {
            // Ensure the effect will be rebuilt.
            this._markAllSubMeshesAsTexturesDirty();
            if (value) {
                this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_PHYSICAL;
            } else {
                this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_STANDARD;
            }
        }
    }
    /**
     * In order to support the falloff compatibility with gltf, a special mode has been added
     * to reproduce the gltf light falloff.
     */ get useGLTFLightFalloff() {
        return this._lightFalloff === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_GLTF;
    }
    /**
     * In order to support the falloff compatibility with gltf, a special mode has been added
     * to reproduce the gltf light falloff.
     */ set useGLTFLightFalloff(value) {
        if (value !== this.useGLTFLightFalloff) {
            // Ensure the effect will be rebuilt.
            this._markAllSubMeshesAsTexturesDirty();
            if (value) {
                this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_GLTF;
            } else {
                this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].LIGHTFALLOFF_STANDARD;
            }
        }
    }
    /**
     * Instantiates a new PBRMaterial instance.
     *
     * @param name The material name
     * @param scene The scene the material will be use in.
     * @param forceGLSL Use the GLSL code generation for the shader (even on WebGPU). Default is false
     */ constructor(name, scene, forceGLSL = false){
        super(name, scene, forceGLSL);
        /**
         * Intensity of the direct lights e.g. the four lights available in your scene.
         * This impacts both the direct diffuse and specular highlights.
         */ this.directIntensity = 1.0;
        /**
         * Intensity of the emissive part of the material.
         * This helps controlling the emissive effect without modifying the emissive color.
         */ this.emissiveIntensity = 1.0;
        /**
         * Intensity of the environment e.g. how much the environment will light the object
         * either through harmonics for rough material or through the reflection for shiny ones.
         */ this.environmentIntensity = 1.0;
        /**
         * This is a special control allowing the reduction of the specular highlights coming from the
         * four lights of the scene. Those highlights may not be needed in full environment lighting.
         */ this.specularIntensity = 1.0;
        /**
         * Debug Control allowing disabling the bump map on this material.
         */ this.disableBumpMap = false;
        /**
         * AKA Occlusion Texture Intensity in other nomenclature.
         */ this.ambientTextureStrength = 1.0;
        /**
         * Defines how much the AO map is occluding the analytical lights (point spot...).
         * 1 means it completely occludes it
         * 0 mean it has no impact
         */ this.ambientTextureImpactOnAnalyticalLights = PBRMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS;
        /**
         * In metallic workflow, specifies an F0 factor to help configuring the material F0.
         * By default the indexOfrefraction is used to compute F0;
         *
         * This is used as a factor against the default reflectance at normal incidence to tweak it.
         *
         * F0 = defaultF0 * metallicF0Factor * metallicReflectanceColor;
         * F90 = metallicReflectanceColor;
         */ this.metallicF0Factor = 1;
        /**
         * In metallic workflow, specifies an F0 color.
         * By default the F90 is always 1;
         *
         * Please note that this factor is also used as a factor against the default reflectance at normal incidence.
         *
         * F0 = defaultF0_from_IOR * metallicF0Factor * metallicReflectanceColor
         * F90 = metallicF0Factor;
         */ this.metallicReflectanceColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        /**
         * Specifies that only the A channel from metallicReflectanceTexture should be used.
         * If false, both RGB and A channels will be used
         */ this.useOnlyMetallicFromMetallicReflectanceTexture = false;
        /**
         * The color of a material in ambient lighting.
         */ this.ambientColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0);
        /**
         * AKA Diffuse Color in other nomenclature.
         */ this.albedoColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1, 1, 1);
        /**
         * OpenPBR Base Weight (multiplier to the diffuse and metal lobes).
         */ this.baseWeight = 1;
        /**
         * AKA Specular Color in other nomenclature.
         */ this.reflectivityColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1, 1, 1);
        /**
         * The color reflected from the material.
         */ this.reflectionColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1.0, 1.0, 1.0);
        /**
         * The color emitted from the material.
         */ this.emissiveColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0);
        /**
         * AKA Glossiness in other nomenclature.
         */ this.microSurface = 1.0;
        /**
         * If true, the light map contains occlusion information instead of lighting info.
         */ this.useLightmapAsShadowmap = false;
        /**
         * Specifies that the alpha is coming form the albedo channel alpha channel for alpha blending.
         */ this.useAlphaFromAlbedoTexture = false;
        /**
         * Enforces alpha test in opaque or blend mode in order to improve the performances of some situations.
         */ this.forceAlphaTest = false;
        /**
         * Defines the alpha limits in alpha test mode.
         */ this.alphaCutOff = 0.4;
        /**
         * Specifies that the material will keep the specular highlights over a transparent surface (only the most luminous ones).
         * A car glass is a good example of that. When sun reflects on it you can not see what is behind.
         */ this.useSpecularOverAlpha = true;
        /**
         * Specifies if the reflectivity texture contains the glossiness information in its alpha channel.
         */ this.useMicroSurfaceFromReflectivityMapAlpha = false;
        /**
         * Specifies if the metallic texture contains the roughness information in its alpha channel.
         */ this.useRoughnessFromMetallicTextureAlpha = true;
        /**
         * Specifies if the metallic texture contains the roughness information in its green channel.
         * Needs useRoughnessFromMetallicTextureAlpha to be false.
         */ this.useRoughnessFromMetallicTextureGreen = false;
        /**
         * Specifies if the metallic texture contains the metallness information in its blue channel.
         */ this.useMetallnessFromMetallicTextureBlue = false;
        /**
         * Specifies if the metallic texture contains the ambient occlusion information in its red channel.
         */ this.useAmbientOcclusionFromMetallicTextureRed = false;
        /**
         * Specifies if the ambient texture contains the ambient occlusion information in its red channel only.
         */ this.useAmbientInGrayScale = false;
        /**
         * In case the reflectivity map does not contain the microsurface information in its alpha channel,
         * The material will try to infer what glossiness each pixel should be.
         */ this.useAutoMicroSurfaceFromReflectivityMap = false;
        /**
         * Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
         * A car glass is a good example of that. When the street lights reflects on it you can not see what is behind.
         */ this.useRadianceOverAlpha = true;
        /**
         * Allows using an object space normal map (instead of tangent space).
         */ this.useObjectSpaceNormalMap = false;
        /**
         * Allows using the bump map in parallax mode.
         */ this.useParallax = false;
        /**
         * Allows using the bump map in parallax occlusion mode.
         */ this.useParallaxOcclusion = false;
        /**
         * Controls the scale bias of the parallax mode.
         */ this.parallaxScaleBias = 0.05;
        /**
         * If sets to true, disables all the lights affecting the material.
         */ this.disableLighting = false;
        /**
         * Force the shader to compute irradiance in the fragment shader in order to take bump in account.
         */ this.forceIrradianceInFragment = false;
        /**
         * Number of Simultaneous lights allowed on the material.
         */ this.maxSimultaneousLights = 4;
        /**
         * If sets to true, x component of normal map value will invert (x = 1.0 - x).
         */ this.invertNormalMapX = false;
        /**
         * If sets to true, y component of normal map value will invert (y = 1.0 - y).
         */ this.invertNormalMapY = false;
        /**
         * If sets to true and backfaceCulling is false, normals will be flipped on the backside.
         */ this.twoSidedLighting = false;
        /**
         * A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
         * And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)
         */ this.useAlphaFresnel = false;
        /**
         * A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
         * And/Or occlude the blended part. (alpha stays linear to compute the fresnel)
         */ this.useLinearAlphaFresnel = false;
        /**
         * Let user defines the brdf lookup texture used for IBL.
         * A default 8bit version is embedded but you could point at :
         * * Default texture: https://assets.babylonjs.com/environments/correlatedMSBRDF_RGBD.png
         * * Default 16bit pixel depth texture: https://assets.babylonjs.com/environments/correlatedMSBRDF.dds
         * * LEGACY Default None correlated https://assets.babylonjs.com/environments/uncorrelatedBRDF_RGBD.png
         * * LEGACY Default None correlated 16bit pixel depth https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds
         */ this.environmentBRDFTexture = null;
        /**
         * Force normal to face away from face.
         */ this.forceNormalForward = false;
        /**
         * Enables specular anti aliasing in the PBR shader.
         * It will both interacts on the Geometry for analytical and IBL lighting.
         * It also prefilter the roughness map based on the bump values.
         */ this.enableSpecularAntiAliasing = false;
        /**
         * This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
         * makes the reflect vector face the model (under horizon).
         */ this.useHorizonOcclusion = true;
        /**
         * This parameters will enable/disable radiance occlusion by preventing the radiance to lit
         * too much the area relying on ambient texture to define their ambient occlusion.
         */ this.useRadianceOcclusion = true;
        /**
         * If set to true, no lighting calculations will be applied.
         */ this.unlit = false;
        /**
         * If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)
         */ this.applyDecalMapAfterDetailMap = false;
        this._environmentBRDFTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetEnvironmentBRDFTexture"])(this.getScene());
    }
    /**
     * @returns the name of this material class.
     */ getClassName() {
        return "PBRMaterial";
    }
    /**
     * Makes a duplicate of the current material.
     * @param name - name to use for the new material.
     * @param cloneTexturesOnlyOnce - if a texture is used in more than one channel (e.g diffuse and opacity), only clone it once and reuse it on the other channels. Default false.
     * @param rootUrl defines the root URL to use to load textures
     * @returns cloned material instance
     */ clone(name, cloneTexturesOnlyOnce = true, rootUrl = "") {
        const clone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new PBRMaterial(name, this.getScene()), this, {
            cloneTexturesOnlyOnce
        });
        clone.id = name;
        clone.name = name;
        this.stencil.copyTo(clone.stencil);
        this._clonePlugins(clone, rootUrl);
        return clone;
    }
    /**
     * Serializes this PBR Material.
     * @returns - An object with the serialized material.
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.customType = "BABYLON.PBRMaterial";
        return serializationObject;
    }
    // Statics
    /**
     * Parses a PBR Material from a serialized object.
     * @param source - Serialized object.
     * @param scene - BJS scene instance.
     * @param rootUrl - url for the scene object
     * @returns - PBRMaterial
     */ static Parse(source, scene, rootUrl) {
        const material = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new PBRMaterial(source.name, scene), source, scene, rootUrl);
        if (source.stencil) {
            material.stencil.parse(source.stencil, scene, rootUrl);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"]._ParsePlugins(source, material, scene, rootUrl);
        // The code block below ensures backward compatibility with serialized materials before plugins are automatically serialized.
        if (source.clearCoat) {
            material.clearCoat.parse(source.clearCoat, scene, rootUrl);
        }
        if (source.anisotropy) {
            material.anisotropy.parse(source.anisotropy, scene, rootUrl);
        }
        if (source.brdf) {
            material.brdf.parse(source.brdf, scene, rootUrl);
        }
        if (source.sheen) {
            material.sheen.parse(source.sheen, scene, rootUrl);
        }
        if (source.subSurface) {
            material.subSurface.parse(source.subSurface, scene, rootUrl);
        }
        if (source.iridescence) {
            material.iridescence.parse(source.iridescence, scene, rootUrl);
        }
        return material;
    }
}
/**
 * PBRMaterialTransparencyMode: No transparency mode, Alpha channel is not use.
 */ PBRMaterial.PBRMATERIAL_OPAQUE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].PBRMATERIAL_OPAQUE;
/**
 * PBRMaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.
 */ PBRMaterial.PBRMATERIAL_ALPHATEST = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].PBRMATERIAL_ALPHATEST;
/**
 * PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
 */ PBRMaterial.PBRMATERIAL_ALPHABLEND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].PBRMATERIAL_ALPHABLEND;
/**
 * PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
 * They are also discarded below the alpha cutoff threshold to improve performances.
 */ PBRMaterial.PBRMATERIAL_ALPHATESTANDBLEND = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].PBRMATERIAL_ALPHATESTANDBLEND;
/**
 * Defines the default value of how much AO map is occluding the analytical lights
 * (point spot...).
 */ PBRMaterial.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].DEFAULT_AO_ON_ANALYTICAL_LIGHTS;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "directIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "emissiveIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "environmentIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "specularIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "disableBumpMap", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "albedoTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "baseWeightTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "baseDiffuseRoughnessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "ambientTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "ambientTextureStrength", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "ambientTextureImpactOnAnalyticalLights", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesAndMiscDirty")
], PBRMaterial.prototype, "opacityTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "reflectionTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "emissiveTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "reflectivityTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "metallicTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "metallic", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "roughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "metallicF0Factor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "metallicReflectanceColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useOnlyMetallicFromMetallicReflectanceTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "metallicReflectanceTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "reflectanceTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "microSurfaceTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "bumpTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", null)
], PBRMaterial.prototype, "lightmapTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])("ambient"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "ambientColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])("albedo"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "albedoColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("baseWeight"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "baseWeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("baseDiffuseRoughness"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "baseDiffuseRoughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])("reflectivity"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "reflectivityColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])("reflection"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "reflectionColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])("emissive"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "emissiveColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "microSurface", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useLightmapAsShadowmap", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesAndMiscDirty")
], PBRMaterial.prototype, "useAlphaFromAlbedoTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesAndMiscDirty")
], PBRMaterial.prototype, "forceAlphaTest", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesAndMiscDirty")
], PBRMaterial.prototype, "alphaCutOff", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useSpecularOverAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useMicroSurfaceFromReflectivityMapAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useRoughnessFromMetallicTextureAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useRoughnessFromMetallicTextureGreen", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useMetallnessFromMetallicTextureBlue", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useAmbientOcclusionFromMetallicTextureRed", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useAmbientInGrayScale", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useAutoMicroSurfaceFromReflectivityMap", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRMaterial.prototype, "usePhysicalLightFalloff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRMaterial.prototype, "useGLTFLightFalloff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useRadianceOverAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useObjectSpaceNormalMap", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useParallax", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useParallaxOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "parallaxScaleBias", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], PBRMaterial.prototype, "disableLighting", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "forceIrradianceInFragment", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], PBRMaterial.prototype, "maxSimultaneousLights", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "invertNormalMapX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "invertNormalMapY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "twoSidedLighting", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useAlphaFresnel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useLinearAlphaFresnel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "environmentBRDFTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "forceNormalForward", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "enableSpecularAntiAliasing", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useHorizonOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMaterial.prototype, "useRadianceOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRMaterial.prototype, "unlit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], PBRMaterial.prototype, "applyDecalMapAfterDetailMap", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PBRMaterial", PBRMaterial); //# sourceMappingURL=pbrMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PBRBaseSimpleMaterial",
    ()=>PBRBaseSimpleMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-ssr] (ecmascript)");
;
;
;
;
class PBRBaseSimpleMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"] {
    /**
     * Gets the current double sided mode.
     */ get doubleSided() {
        return this._twoSidedLighting;
    }
    /**
     * If sets to true and backfaceCulling is false, normals will be flipped on the backside.
     */ set doubleSided(value) {
        if (this._twoSidedLighting === value) {
            return;
        }
        this._twoSidedLighting = value;
        this.backFaceCulling = !value;
        this._markAllSubMeshesAsTexturesDirty();
    }
    /**
     * Instantiates a new PBRMaterial instance.
     *
     * @param name The material name
     * @param scene The scene the material will be use in.
     */ constructor(name, scene){
        super(name, scene);
        /**
         * Number of Simultaneous lights allowed on the material.
         */ this.maxSimultaneousLights = 4;
        /**
         * If sets to true, disables all the lights affecting the material.
         */ this.disableLighting = false;
        /**
         * If sets to true, x component of normal map value will invert (x = 1.0 - x).
         */ this.invertNormalMapX = false;
        /**
         * If sets to true, y component of normal map value will invert (y = 1.0 - y).
         */ this.invertNormalMapY = false;
        /**
         * Emissivie color used to self-illuminate the model.
         */ this.emissiveColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0);
        /**
         * Occlusion Channel Strength.
         */ this.occlusionStrength = 1.0;
        /**
         * If true, the light map contains occlusion information instead of lighting info.
         */ this.useLightmapAsShadowmap = false;
        this._useAlphaFromAlbedoTexture = true;
        this._useAmbientInGrayScale = true;
    }
    getClassName() {
        return "PBRBaseSimpleMaterial";
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], PBRBaseSimpleMaterial.prototype, "maxSimultaneousLights", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], PBRBaseSimpleMaterial.prototype, "disableLighting", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_reflectionTexture")
], PBRBaseSimpleMaterial.prototype, "environmentTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRBaseSimpleMaterial.prototype, "invertNormalMapX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRBaseSimpleMaterial.prototype, "invertNormalMapY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_bumpTexture")
], PBRBaseSimpleMaterial.prototype, "normalTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])("emissive"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRBaseSimpleMaterial.prototype, "emissiveColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRBaseSimpleMaterial.prototype, "emissiveTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_ambientTextureStrength")
], PBRBaseSimpleMaterial.prototype, "occlusionStrength", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_ambientTexture")
], PBRBaseSimpleMaterial.prototype, "occlusionTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_alphaCutOff")
], PBRBaseSimpleMaterial.prototype, "alphaCutOff", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PBRBaseSimpleMaterial.prototype, "doubleSided", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", null)
], PBRBaseSimpleMaterial.prototype, "lightmapTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRBaseSimpleMaterial.prototype, "useLightmapAsShadowmap", void 0); //# sourceMappingURL=pbrBaseSimpleMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/openpbrMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpenPBRMaterial",
    ()=>OpenPBRMaterial,
    "OpenPBRMaterialDefines",
    ()=>OpenPBRMaterialDefines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/brdfTextureTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.defines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectFallbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.geometryrendering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$prePassConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/prePassConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uv$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uv.defines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/pushMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/smartArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
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
const onCreatedEffectParameters = {
    effect: null,
    subMesh: null
};
class Uniform {
    populateVectorFromLinkedProperties(vector) {
        const destinationSize = vector.dimension[0];
        for(const propKey in this.linkedProperties){
            const prop = this.linkedProperties[propKey];
            const sourceSize = prop.numComponents;
            if (destinationSize < sourceSize || prop.targetUniformComponentOffset > destinationSize - sourceSize) {
                if (sourceSize == 1) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(`Float property ${prop.name} has an offset that is too large.`);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(`Vector${sourceSize} property ${prop.name} won't fit in Vector${destinationSize} or has an offset that is too large.`);
                }
                return;
            }
            if (typeof prop.value === "number") {
                Uniform._tmpArray[prop.targetUniformComponentOffset] = prop.value;
            } else {
                prop.value.toArray(Uniform._tmpArray, prop.targetUniformComponentOffset);
            }
        }
        vector.fromArray(Uniform._tmpArray);
    }
    constructor(name, componentNum){
        this.linkedProperties = {};
        this.name = name;
        this.numComponents = componentNum;
    }
}
Uniform._tmpArray = [
    0,
    0,
    0,
    0
];
/**
 * Defines a property for the OpenPBRMaterial.
 */ class Property {
    /**
     * Creates a new Property instance.
     * @param name The name of the property in the shader
     * @param defaultValue The default value of the property
     * @param targetUniformName The name of the property in the shader uniform block
     * @param targetUniformComponentNum The number of components in the target uniform. All properties that are
     * packed into the same uniform must agree on the size of the target uniform.
     * @param targetUniformComponentOffset The offset in the uniform where this property will be packed.
     */ constructor(name, defaultValue, targetUniformName, targetUniformComponentNum, targetUniformComponentOffset = 0){
        // public includeAlphaFromProp: string = "";
        /**
         * If not given a type, there will be no uniform defined for this property and
         * it will be assumed that the value will be packed into the already existing "uniformName" uniform.
         */ this.targetUniformComponentNum = 4; // Default to vec4
        this.targetUniformComponentOffset = 0;
        this.name = name;
        this.targetUniformName = targetUniformName;
        this.defaultValue = defaultValue;
        this.value = defaultValue;
        this.targetUniformComponentNum = targetUniformComponentNum;
        this.targetUniformComponentOffset = targetUniformComponentOffset;
    }
    /**
     * Returns the number of components of the property based on its default value type.
     */ get numComponents() {
        if (typeof this.defaultValue === "number") {
            return 1;
        }
        return this.defaultValue.dimension[0];
    }
}
class Sampler {
    /**
     * The name of the sampler used in the shader.
     * If this naming changes, we'll also need to change:
     * - samplerFragmentDeclaration.fx
     * - openpbr.fragment.fx
     */ get samplerName() {
        return this.samplerPrefix + "Sampler";
    }
    /**
     * The name of the sampler info used in the shader.
     * If this naming changes, we'll also need to change:
     * - openpbr.vertex.fx
     * - openpbr.fragment.fx
     */ get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos";
    }
    /**
     * The name of the matrix used for this sampler in the shader.
     * If this naming changes, we'll also need to change:
     * - materialHelper.functions.BindTextureMatrix
     * - samplerVertexImplementation.fx
     * - openpbr.fragment.fx
     */ get samplerMatrixName() {
        return this.samplerPrefix + "Matrix";
    }
    /**
     * Creates a new Sampler instance.
     * @param name The name of the texture property
     * @param samplerPrefix The prefix used for the name of the sampler in the shader
     * @param textureDefine The define used in the shader for this sampler
     */ constructor(name, samplerPrefix, textureDefine){
        this.value = null; // Texture value, default to null
        this.samplerPrefix = ""; // The name of the sampler in the shader
        this.textureDefine = ""; // The define used in the shader for this sampler
        this.name = name;
        this.samplerPrefix = samplerPrefix;
        this.textureDefine = textureDefine;
    }
}
class OpenPBRMaterialDefinesBase extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uv$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UVDefinesMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"]) {
}
class OpenPBRMaterialDefines extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingDefinesMixin"])(OpenPBRMaterialDefinesBase) {
    /**
     * Initializes the PBR Material defines.
     * @param externalProperties The external properties
     */ constructor(externalProperties){
        super(externalProperties);
        this.NUM_SAMPLES = "0";
        this.REALTIME_FILTERING = false;
        this.IBL_CDF_FILTERING = false;
        this.VERTEXCOLOR = false;
        this.BAKED_VERTEX_ANIMATION_TEXTURE = false;
        this.VERTEXALPHA = false;
        this.ALPHATEST = false;
        this.DEPTHPREPASS = false;
        this.ALPHABLEND = false;
        this.ALPHA_FROM_BASE_COLOR_TEXTURE = false;
        this.ALPHATESTVALUE = "0.5";
        this.PREMULTIPLYALPHA = false;
        this.REFLECTIVITY_GAMMA = false;
        this.REFLECTIVITYDIRECTUV = 0;
        this.SPECULARTERM = false;
        this.LODBASEDMICROSFURACE = true;
        this.METALLICWORKFLOW = true;
        this.ROUGHNESSSTOREINMETALMAPALPHA = false;
        this.ROUGHNESSSTOREINMETALMAPGREEN = false;
        this.METALLNESSSTOREINMETALMAPBLUE = false;
        this.AOSTOREINMETALMAPRED = false;
        this.SPECULAR_WEIGHT_IN_ALPHA = false;
        this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = false;
        this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = false;
        this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = false;
        this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = false;
        this.USE_GLTF_STYLE_ANISOTROPY = false;
        this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = false;
        this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = false;
        this.ENVIRONMENTBRDF = false;
        this.ENVIRONMENTBRDF_RGBD = false;
        this.FUZZENVIRONMENTBRDF = false;
        this.NORMAL = false;
        this.TANGENT = false;
        this.OBJECTSPACE_NORMALMAP = false;
        this.PARALLAX = false;
        this.PARALLAX_RHS = false;
        this.PARALLAXOCCLUSION = false;
        this.NORMALXYSCALE = true;
        /**
         * Enables anisotropic logic. Still needed because it's used in pbrHelperFunctions
         */ this.ANISOTROPIC = false;
        /**
         * Tells the shader to use OpenPBR's anisotropic roughness remapping
         */ this.ANISOTROPIC_OPENPBR = true;
        /**
         * Tells the shader to apply anisotropy to the base layer
         */ this.ANISOTROPIC_BASE = false;
        /**
         * Tells the shader to apply anisotropy to the coat layer
         */ this.ANISOTROPIC_COAT = false;
        /**
         * Number of samples to use for the fuzz IBL lighting calculations
         */ this.FUZZ_IBL_SAMPLES = 6;
        /**
         * Tells the shader to enable the fuzz layer
         */ this.FUZZ = false;
        /**
         * Tells the shader to enable the thin film layer
         */ this.THIN_FILM = false;
        /**
         * Tells the shader to enable the legacy iridescence code
         * Iridescence is the name of thin film interference in the PBR material.
         */ this.IRIDESCENCE = false;
        this.REFLECTION = false;
        this.REFLECTIONMAP_3D = false;
        this.REFLECTIONMAP_SPHERICAL = false;
        this.REFLECTIONMAP_PLANAR = false;
        this.REFLECTIONMAP_CUBIC = false;
        this.USE_LOCAL_REFLECTIONMAP_CUBIC = false;
        this.REFLECTIONMAP_PROJECTION = false;
        this.REFLECTIONMAP_SKYBOX = false;
        this.REFLECTIONMAP_EXPLICIT = false;
        this.REFLECTIONMAP_EQUIRECTANGULAR = false;
        this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
        this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
        this.INVERTCUBICMAP = false;
        this.USESPHERICALFROMREFLECTIONMAP = false;
        this.USEIRRADIANCEMAP = false;
        this.USE_IRRADIANCE_DOMINANT_DIRECTION = false;
        this.USESPHERICALINVERTEX = false;
        this.REFLECTIONMAP_OPPOSITEZ = false;
        this.LODINREFLECTIONALPHA = false;
        this.GAMMAREFLECTION = false;
        this.RGBDREFLECTION = false;
        this.RADIANCEOCCLUSION = false;
        this.HORIZONOCCLUSION = false;
        this.INSTANCES = false;
        this.THIN_INSTANCES = false;
        this.INSTANCESCOLOR = false;
        this.PREPASS = false;
        this.PREPASS_COLOR = false;
        this.PREPASS_COLOR_INDEX = -1;
        this.PREPASS_IRRADIANCE = false;
        this.PREPASS_IRRADIANCE_INDEX = -1;
        this.PREPASS_ALBEDO = false;
        this.PREPASS_ALBEDO_INDEX = -1;
        this.PREPASS_ALBEDO_SQRT = false;
        this.PREPASS_ALBEDO_SQRT_INDEX = -1;
        this.PREPASS_DEPTH = false;
        this.PREPASS_DEPTH_INDEX = -1;
        this.PREPASS_SCREENSPACE_DEPTH = false;
        this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1;
        this.PREPASS_NORMALIZED_VIEW_DEPTH = false;
        this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1;
        this.PREPASS_NORMAL = false;
        this.PREPASS_NORMAL_INDEX = -1;
        this.PREPASS_NORMAL_WORLDSPACE = false;
        this.PREPASS_WORLD_NORMAL = false;
        this.PREPASS_WORLD_NORMAL_INDEX = -1;
        this.PREPASS_POSITION = false;
        this.PREPASS_POSITION_INDEX = -1;
        this.PREPASS_LOCAL_POSITION = false;
        this.PREPASS_LOCAL_POSITION_INDEX = -1;
        this.PREPASS_VELOCITY = false;
        this.PREPASS_VELOCITY_INDEX = -1;
        this.PREPASS_VELOCITY_LINEAR = false;
        this.PREPASS_VELOCITY_LINEAR_INDEX = -1;
        this.PREPASS_REFLECTIVITY = false;
        this.PREPASS_REFLECTIVITY_INDEX = -1;
        this.SCENE_MRT_COUNT = 0;
        this.NUM_BONE_INFLUENCERS = 0;
        this.BonesPerMesh = 0;
        this.BONETEXTURE = false;
        this.BONES_VELOCITY_ENABLED = false;
        this.NONUNIFORMSCALING = false;
        this.MORPHTARGETS = false;
        this.MORPHTARGETS_POSITION = false;
        this.MORPHTARGETS_NORMAL = false;
        this.MORPHTARGETS_TANGENT = false;
        this.MORPHTARGETS_UV = false;
        this.MORPHTARGETS_UV2 = false;
        this.MORPHTARGETS_COLOR = false;
        this.MORPHTARGETTEXTURE_HASPOSITIONS = false;
        this.MORPHTARGETTEXTURE_HASNORMALS = false;
        this.MORPHTARGETTEXTURE_HASTANGENTS = false;
        this.MORPHTARGETTEXTURE_HASUVS = false;
        this.MORPHTARGETTEXTURE_HASUV2S = false;
        this.MORPHTARGETTEXTURE_HASCOLORS = false;
        this.NUM_MORPH_INFLUENCERS = 0;
        this.MORPHTARGETS_TEXTURE = false;
        this.USEPHYSICALLIGHTFALLOFF = false;
        this.USEGLTFLIGHTFALLOFF = false;
        this.TWOSIDEDLIGHTING = false;
        this.MIRRORED = false;
        this.SHADOWFLOAT = false;
        this.CLIPPLANE = false;
        this.CLIPPLANE2 = false;
        this.CLIPPLANE3 = false;
        this.CLIPPLANE4 = false;
        this.CLIPPLANE5 = false;
        this.CLIPPLANE6 = false;
        this.POINTSIZE = false;
        this.FOG = false;
        this.LOGARITHMICDEPTH = false;
        this.CAMERA_ORTHOGRAPHIC = false;
        this.CAMERA_PERSPECTIVE = false;
        this.AREALIGHTSUPPORTED = true;
        this.FORCENORMALFORWARD = false;
        this.SPECULARAA = false;
        this.UNLIT = false;
        this.DECAL_AFTER_DETAIL = false;
        this.DEBUGMODE = 0;
        this.CLUSTLIGHT_SLICES = 0;
        this.CLUSTLIGHT_BATCH = 0;
        // BRDF defines
        this.BRDF_V_HEIGHT_CORRELATED = true;
        this.MS_BRDF_ENERGY_CONSERVATION = true;
        this.SPHERICAL_HARMONICS = true;
        this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = true;
        this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = true;
        this.LEGACY_SPECULAR_ENERGY_CONSERVATION = false;
        this.BASE_DIFFUSE_MODEL = 0;
        this.DIELECTRIC_SPECULAR_MODEL = 1;
        this.CONDUCTOR_SPECULAR_MODEL = 1;
        this.rebuild();
    }
    /**
     * Resets the PBR Material defines.
     */ reset() {
        super.reset();
        this.ALPHATESTVALUE = "0.5";
        this.NORMALXYSCALE = true;
    }
}
class OpenPBRMaterialBase extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushMaterial"]) {
}
class OpenPBRMaterial extends OpenPBRMaterialBase {
    /**
     * Defines the angle of the tangent of the material's geometry. Used only for anisotropic reflections.
     * See OpenPBR's specs for geometry_tangent
     */ get geometryTangentAngle() {
        return Math.atan2(this.geometryTangent.y, this.geometryTangent.x);
    }
    set geometryTangentAngle(value) {
        this.geometryTangent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](Math.cos(value), Math.sin(value));
    }
    /**
     * Defines the angle of the tangent of the material's coat layer.
     */ get geometryCoatTangentAngle() {
        return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x);
    }
    /**
     * Defines the angle of the tangent of the material's coat layer.
     */ set geometryCoatTangentAngle(value) {
        this.geometryCoatTangent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](Math.cos(value), Math.sin(value));
    }
    /**
     * BJS is using an hardcoded light falloff based on a manually sets up range.
     * In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
     * This parameter can help you switch back to the BJS mode in order to create scenes using both materials.
     */ get usePhysicalLightFalloff() {
        return this._lightFalloff === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_PHYSICAL;
    }
    /**
     * BJS is using an hardcoded light falloff based on a manually sets up range.
     * In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
     * This parameter can help you switch back to the BJS mode in order to create scenes using both materials.
     */ set usePhysicalLightFalloff(value) {
        if (value !== this.usePhysicalLightFalloff) {
            // Ensure the effect will be rebuilt.
            this._markAllSubMeshesAsTexturesDirty();
            if (value) {
                this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_PHYSICAL;
            } else {
                this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_STANDARD;
            }
        }
    }
    /**
     * In order to support the falloff compatibility with gltf, a special mode has been added
     * to reproduce the gltf light falloff.
     */ get useGLTFLightFalloff() {
        return this._lightFalloff === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_GLTF;
    }
    /**
     * In order to support the falloff compatibility with gltf, a special mode has been added
     * to reproduce the gltf light falloff.
     */ set useGLTFLightFalloff(value) {
        if (value !== this.useGLTFLightFalloff) {
            // Ensure the effect will be rebuilt.
            this._markAllSubMeshesAsTexturesDirty();
            if (value) {
                this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_GLTF;
            } else {
                this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_STANDARD;
            }
        }
    }
    /**
     * Enables realtime filtering on the texture.
     */ get realTimeFiltering() {
        return this._realTimeFiltering;
    }
    set realTimeFiltering(b) {
        this._realTimeFiltering = b;
        this.markAsDirty(1);
    }
    /**
     * Quality switch for realtime filtering
     */ get realTimeFilteringQuality() {
        return this._realTimeFilteringQuality;
    }
    set realTimeFilteringQuality(n) {
        this._realTimeFilteringQuality = n;
        this.markAsDirty(1);
    }
    /**
     * The number of samples used to compute the fuzz IBL lighting.
     */ get fuzzSampleNumber() {
        return this._fuzzSampleNumber;
    }
    set fuzzSampleNumber(n) {
        this._fuzzSampleNumber = n;
        this.markAsDirty(1);
    }
    /**
     * Can this material render to several textures at once
     */ get canRenderToMRT() {
        return true;
    }
    /**
     * Instantiates a new OpenPBRMaterial instance.
     *
     * @param name The material name
     * @param scene The scene the material will be use in.
     * @param forceGLSL Use the GLSL code generation for the shader (even on WebGPU). Default is false
     */ constructor(name, scene, forceGLSL = false){
        super(name, scene, undefined, forceGLSL || OpenPBRMaterial.ForceGLSL);
        this._baseWeight = new Property("base_weight", 1, "vBaseWeight", 1);
        this._baseWeightTexture = new Sampler("base_weight", "baseWeight", "BASE_WEIGHT");
        this._baseColor = new Property("base_color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White(), "vBaseColor", 4);
        this._baseColorTexture = new Sampler("base_color", "baseColor", "BASE_COLOR");
        this._baseDiffuseRoughness = new Property("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1);
        this._baseDiffuseRoughnessTexture = new Sampler("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS");
        this._baseMetalness = new Property("base_metalness", 0, "vReflectanceInfo", 4, 0);
        this._baseMetalnessTexture = new Sampler("base_metalness", "baseMetalness", "BASE_METALNESS");
        this._specularWeight = new Property("specular_weight", 1, "vReflectanceInfo", 4, 3);
        this._specularWeightTexture = new Sampler("specular_weight", "specularWeight", "SPECULAR_WEIGHT");
        this._specularColor = new Property("specular_color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White(), "vSpecularColor", 4);
        this._specularColorTexture = new Sampler("specular_color", "specularColor", "SPECULAR_COLOR");
        this._specularRoughness = new Property("specular_roughness", 0.3, "vReflectanceInfo", 4, 1);
        this._specularRoughnessTexture = new Sampler("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS");
        this._specularRoughnessAnisotropy = new Property("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2);
        this._specularRoughnessAnisotropyTexture = new Sampler("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY");
        this._specularIor = new Property("specular_ior", 1.5, "vReflectanceInfo", 4, 2);
        this._coatWeight = new Property("coat_weight", 0.0, "vCoatWeight", 1, 0);
        this._coatWeightTexture = new Sampler("coat_weight", "coatWeight", "COAT_WEIGHT");
        this._coatColor = new Property("coat_color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White(), "vCoatColor", 3, 0);
        this._coatColorTexture = new Sampler("coat_color", "coatColor", "COAT_COLOR");
        this._coatRoughness = new Property("coat_roughness", 0.0, "vCoatRoughness", 1, 0);
        this._coatRoughnessTexture = new Sampler("coat_roughness", "coatRoughness", "COAT_ROUGHNESS");
        this._coatRoughnessAnisotropy = new Property("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1);
        this._coatRoughnessAnisotropyTexture = new Sampler("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY");
        this._coatIor = new Property("coat_ior", 1.5, "vCoatIor", 1, 0);
        this._coatDarkening = new Property("coat_darkening", 1.0, "vCoatDarkening", 1, 0);
        this._coatDarkeningTexture = new Sampler("coat_darkening", "coatDarkening", "COAT_DARKENING");
        /**
         * Specifies whether the coat roughness is taken from the
         * same texture as the coat_weight.
         */ this.useCoatRoughnessFromWeightTexture = false;
        this._fuzzWeight = new Property("fuzz_weight", 0.0, "vFuzzWeight", 1, 0);
        this._fuzzWeightTexture = new Sampler("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT");
        this._fuzzColor = new Property("fuzz_color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White(), "vFuzzColor", 3, 0);
        this._fuzzColorTexture = new Sampler("fuzz_color", "fuzzColor", "FUZZ_COLOR");
        this._fuzzRoughness = new Property("fuzz_roughness", 0.5, "vFuzzRoughness", 1, 0);
        this._fuzzRoughnessTexture = new Sampler("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS");
        this._geometryNormalTexture = new Sampler("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL");
        this._geometryTangent = new Property("geometry_tangent", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0), "vSpecularAnisotropy", 3, 0);
        this._geometryTangentTexture = new Sampler("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT");
        this._geometryCoatNormalTexture = new Sampler("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL");
        this._geometryCoatTangent = new Property("geometry_coat_tangent", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0), "vGeometryCoatTangent", 2, 0);
        this._geometryCoatTangentTexture = new Sampler("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT");
        this._geometryOpacity = new Property("geometry_opacity", 1.0, "vBaseColor", 4, 3);
        this._geometryOpacityTexture = new Sampler("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY");
        this._emissionLuminance = new Property("emission_luminance", 1.0, "vLightingIntensity", 4, 1);
        this._emissionColor = new Property("emission_color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].Black(), "vEmissionColor", 3);
        this._emissionColorTexture = new Sampler("emission_color", "emissionColor", "EMISSION_COLOR");
        this._thinFilmWeight = new Property("thin_film_weight", 0.0, "vThinFilmWeight", 1, 0);
        this._thinFilmWeightTexture = new Sampler("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT");
        this._thinFilmThickness = new Property("thin_film_thickness", 0.5, "vThinFilmThickness", 2, 0);
        this._thinFilmThicknessMin = new Property("thin_film_thickness_min", 0.0, "vThinFilmThickness", 2, 1);
        this._thinFilmThicknessTexture = new Sampler("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS");
        this._thinFilmIor = new Property("thin_film_ior", 1.4, "vThinFilmIor", 1, 0);
        this._ambientOcclusionTexture = new Sampler("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION");
        this._uniformsList = {};
        this._samplersList = {};
        this._samplerDefines = {};
        /**
         * Intensity of the direct lights e.g. the four lights available in your scene.
         * This impacts both the direct diffuse and specular highlights.
         */ this.directIntensity = 1.0;
        /**
         * Intensity of the environment e.g. how much the environment will light the object
         * either through harmonics for rough material or through the reflection for shiny ones.
         */ this.environmentIntensity = 1.0;
        /**
         * Specifies that the specular weight is stored in the alpha channel of the specular weight texture.
         */ this.useSpecularWeightFromTextureAlpha = false;
        /**
         * Enforces alpha test in opaque or blend mode in order to improve the performances of some situations.
         */ this.forceAlphaTest = false;
        /**
         * Defines the alpha limits in alpha test mode.
         */ this.alphaCutOff = 0.4;
        /**
         * Specifies if the metallic texture contains the ambient occlusion information in its red channel.
         */ this.useAmbientOcclusionFromMetallicTextureRed = false;
        /**
         * Specifies if the ambient texture contains the ambient occlusion information in its red channel only.
         */ this.useAmbientInGrayScale = false;
        /**
         * Allows using an object space normal map (instead of tangent space).
         */ this.useObjectSpaceNormalMap = false;
        /**
         * Allows using the normal map in parallax mode.
         */ this.useParallax = false;
        /**
         * Allows using the normal map in parallax occlusion mode.
         */ this.useParallaxOcclusion = false;
        /**
         * Controls the scale bias of the parallax mode.
         */ this.parallaxScaleBias = 0.05;
        /**
         * If sets to true, disables all the lights affecting the material.
         */ this.disableLighting = false;
        /**
         * Force the shader to compute irradiance in the fragment shader in order to take normal mapping into account.
         */ this.forceIrradianceInFragment = false;
        /**
         * Number of Simultaneous lights allowed on the material.
         */ this.maxSimultaneousLights = 4;
        /**
         * If sets to true, x component of normal map value will invert (x = 1.0 - x).
         */ this.invertNormalMapX = false;
        /**
         * If sets to true, y component of normal map value will invert (y = 1.0 - y).
         */ this.invertNormalMapY = false;
        /**
         * If sets to true and backfaceCulling is false, normals will be flipped on the backside.
         */ this.twoSidedLighting = false;
        /**
         * A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
         * And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)
         */ this.useAlphaFresnel = false;
        /**
         * A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
         * And/Or occlude the blended part. (alpha stays linear to compute the fresnel)
         */ this.useLinearAlphaFresnel = false;
        /**
         * Let user defines the brdf lookup texture used for IBL.
         * A default 8bit version is embedded but you could point at :
         * * Default texture: https://assets.babylonjs.com/environments/correlatedMSBRDF_RGBD.png
         * * Default 16bit pixel depth texture: https://assets.babylonjs.com/environments/correlatedMSBRDF.dds
         * * LEGACY Default None correlated https://assets.babylonjs.com/environments/uncorrelatedBRDF_RGBD.png
         * * LEGACY Default None correlated 16bit pixel depth https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds
         */ this.environmentBRDFTexture = null;
        /**
         * Force normal to face away from face.
         */ this.forceNormalForward = false;
        /**
         * Enables specular anti aliasing in the PBR shader.
         * It will both interacts on the Geometry for analytical and IBL lighting.
         * It also prefilter the roughness map based on the normalmap values.
         */ this.enableSpecularAntiAliasing = false;
        /**
         * This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
         * makes the reflect vector face the model (under horizon).
         */ this.useHorizonOcclusion = true;
        /**
         * This parameters will enable/disable radiance occlusion by preventing the radiance to lit
         * too much the area relying on ambient texture to define their ambient occlusion.
         */ this.useRadianceOcclusion = true;
        /**
         * If set to true, no lighting calculations will be applied.
         */ this.unlit = false;
        /**
         * If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)
         */ this.applyDecalMapAfterDetailMap = false;
        /**
         * This stores the direct, emissive, environment, and specular light intensities into a Vector4.
         */ this._lightingInfos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"](this.directIntensity, 1.0, this.environmentIntensity, 1.0);
        /**
         * Stores the radiance (and, possibly, irradiance) values in a texture.
         * @internal
         */ this._radianceTexture = null;
        /**
         * Specifies that the specular weight will be read from the alpha channel.
         * This is for compatibility with glTF's KHR_materials_specular extension.
         * @internal
         */ this._useSpecularWeightFromAlpha = false;
        /**
         * Specifies that the specular weight will be read from the alpha channel of the specular color texture.
         * This is for compatibility with glTF's KHR_materials_specular extension.
         * @internal
         */ this._useSpecularWeightFromSpecularColorTexture = false;
        /**
         * Specifies if the material uses anisotropy weight read from the geometry tangent texture's blue channel.
         * This is for compatibility with glTF's anisotropy extension.
         * @internal
         */ this._useSpecularRoughnessAnisotropyFromTangentTexture = false;
        /**
         * Specifies if the material uses coat anisotropy weight read from the coat's geometry tangent texture's blue channel.
         * This is for compatibility with glTF's clearcoat_anisotropy extension.
         * @internal
         */ this._useCoatRoughnessAnisotropyFromTangentTexture = false;
        /**
         * Specifies whether the coat roughness is taken from the green channel of the coat texture.
         * This is for compatibility with glTF's KHR_materials_clearcoat and KHR_materials_coat extensions.
         * @internal
         */ this._useCoatRoughnessFromGreenChannel = false;
        /**
         * Assume the anisotropy data is stored in the format specified by
         * KHR_materials_anisotropy.
         * @internal
         */ this._useGltfStyleAnisotropy = false;
        /**
         * Specifies that the fuzz roughness is stored in the alpha channel of the texture.
         * This is for compatibility with glTF where the fuzz roughness is often stored in
         * the alpha channel of the fuzz color texture.
         */ this._useFuzzRoughnessFromTextureAlpha = false;
        /**
         * This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
         * makes the reflect vector face the model (under horizon).
         * @internal
         */ this._useHorizonOcclusion = true;
        /**
         * This parameters will enable/disable radiance occlusion by preventing the radiance to lit
         * too much the area relying on ambient texture to define their ambient occlusion.
         * @internal
         */ this._useRadianceOcclusion = true;
        /**
         * Specifies that the alpha is coming from the base color texture's alpha channel.
         * This is for compatibility with glTF.
         * @internal
         */ this._useAlphaFromBaseColorTexture = false;
        /**
         * Specifies if the metallic texture contains the ambient occlusion information in its red channel.
         * This is for compatibility with glTF.
         * @internal
         */ this._useAmbientOcclusionFromMetallicTextureRed = false;
        /**
         * Specifies if the metallic texture contains the roughness information in its green channel.
         * This is for compatibility with glTF.
         * @internal
         */ this._useRoughnessFromMetallicTextureGreen = false;
        /**
         * Specifies if the metallic texture contains the metallic information in its blue channel.
         * This is for compatibility with glTF.
         * @internal
         */ this._useMetallicFromMetallicTextureBlue = false;
        /**
         * Specifies if the thin film thickness is stored in the green channel of the thin film thickness texture.
         */ this._useThinFilmThicknessFromTextureGreen = false;
        /**
         * Defines the  falloff type used in this material.
         * It by default is Physical.
         * @internal
         */ this._lightFalloff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_PHYSICAL;
        /**
         * Allows using an object space normal map (instead of tangent space).
         * @internal
         */ this._useObjectSpaceNormalMap = false;
        /**
         * Allows using the normal map in parallax mode.
         * @internal
         */ this._useParallax = false;
        /**
         * Allows using the normal map in parallax occlusion mode.
         * @internal
         */ this._useParallaxOcclusion = false;
        /**
         * Controls the scale bias of the parallax mode.
         * @internal
         */ this._parallaxScaleBias = 0.05;
        /**
         * If sets to true, disables all the lights affecting the material.
         * @internal
         */ this._disableLighting = false;
        /**
         * Number of Simultaneous lights allowed on the material.
         * @internal
         */ this._maxSimultaneousLights = 4;
        /**
         * If sets to true, x component of normal map value will be inverted (x = 1.0 - x).
         * @internal
         */ this._invertNormalMapX = false;
        /**
         * If sets to true, y component of normal map value will be inverted (y = 1.0 - y).
         * @internal
         */ this._invertNormalMapY = false;
        /**
         * If sets to true and backfaceCulling is false, normals will be flipped on the backside.
         * @internal
         */ this._twoSidedLighting = false;
        /**
         * Defines the alpha limits in alpha test mode.
         * @internal
         */ this._alphaCutOff = 0.4;
        /**
         * A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
         * And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)
         * @internal
         */ this._useAlphaFresnel = false;
        /**
         * A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
         * And/Or occlude the blended part. (alpha stays linear to compute the fresnel)
         * @internal
         */ this._useLinearAlphaFresnel = false;
        /**
         * Specifies the environment BRDF texture used to compute the scale and offset roughness values
         * from cos theta and roughness:
         * http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf
         * @internal
         */ this._environmentBRDFTexture = null;
        /**
         * Specifies the environment BRDF texture used to compute the scale and offset roughness values
         * from cos theta and roughness for the fuzz layer:
         * https://github.com/tizian/ltc-sheen?tab=readme-ov-file
         * @internal
         */ this._environmentFuzzBRDFTexture = null;
        /**
         * Force the shader to compute irradiance in the fragment shader in order to take normal mapping into account.
         * @internal
         */ this._forceIrradianceInFragment = false;
        this._realTimeFiltering = false;
        this._realTimeFilteringQuality = 8;
        this._fuzzSampleNumber = 4;
        /**
         * Force normal to face away from face.
         * @internal
         */ this._forceNormalForward = false;
        /**
         * Enables specular anti aliasing in the PBR shader.
         * It will both interacts on the Geometry for analytical and IBL lighting.
         * It also prefilter the roughness map based on the normalmap values.
         * @internal
         */ this._enableSpecularAntiAliasing = false;
        /**
         * Stores the available render targets.
         */ this._renderTargets = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartArray"](16);
        /**
         * If set to true, no lighting calculations will be applied.
         */ this._unlit = false;
        /**
         * If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)
         */ this._applyDecalMapAfterDetailMap = false;
        this._debugMode = 0;
        this._shadersLoaded = false;
        this._breakShaderLoadedCheck = false;
        /**
         * @internal
         * This is reserved for the inspector.
         * Defines the material debug mode.
         * It helps seeing only some components of the material while troubleshooting.
         */ this.debugMode = 0;
        /**
         * @internal
         * This is reserved for the inspector.
         * Specify from where on screen the debug mode should start.
         * The value goes from -1 (full screen) to 1 (not visible)
         * It helps with side by side comparison against the final render
         * This defaults to -1
         */ this.debugLimit = -1;
        /**
         * @internal
         * This is reserved for the inspector.
         * As the default viewing range might not be enough (if the ambient is really small for instance)
         * You can use the factor to better multiply the final value.
         */ this.debugFactor = 1;
        this._cacheHasRenderTargetTextures = false;
        this._transparencyMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_OPAQUE;
        // TODO: Check if we're running WebGL 2.0 or above
        if (this.getScene() && !this.getScene()?.getEngine().isWebGPU && this.getScene().getEngine().webGLVersion < 2) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material.");
        }
        if (!OpenPBRMaterial._noiseTextures[this.getScene().uniqueId]) {
            OpenPBRMaterial._noiseTextures[this.getScene().uniqueId] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.getScene(), false, true, 1);
            this.getScene().onDisposeObservable.addOnce(()=>{
                OpenPBRMaterial._noiseTextures[this.getScene().uniqueId]?.dispose();
                delete OpenPBRMaterial._noiseTextures[this.getScene().uniqueId];
            });
        }
        // Setup the default processing configuration to the scene.
        this._attachImageProcessingConfiguration(null);
        this.getRenderTargetTextures = ()=>{
            this._renderTargets.reset();
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) {
                this._renderTargets.push(this._radianceTexture);
            }
            this._eventInfo.renderTargets = this._renderTargets;
            this._callbackPluginEventFillRenderTargetTextures(this._eventInfo);
            return this._renderTargets;
        };
        this._environmentBRDFTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetEnvironmentBRDFTexture"])(this.getScene());
        this._environmentFuzzBRDFTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetEnvironmentFuzzBRDFTexture"])(this.getScene());
        this.prePassConfiguration = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$prePassConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrePassConfiguration"]();
        // Build the internal property list that can be used to generate and update the uniform buffer
        this._propertyList = {};
        for (const key of Object.getOwnPropertyNames(this)){
            const value = this[key];
            if (value instanceof Property) {
                this._propertyList[key] = value;
            }
        }
        // Build the internal uniforms list that is used for combining and updating
        // property values in the uniform buffer
        const propertyKeys = Object.keys(this._propertyList);
        propertyKeys.forEach((key)=>{
            const prop = this._propertyList[key];
            let uniform = this._uniformsList[prop.targetUniformName];
            if (!uniform) {
                uniform = new Uniform(prop.targetUniformName, prop.targetUniformComponentNum);
                this._uniformsList[prop.targetUniformName] = uniform;
            } else if (uniform.numComponents !== prop.targetUniformComponentNum) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(`Uniform ${prop.targetUniformName} already exists of size ${uniform.numComponents}, but trying to set it to ${prop.targetUniformComponentNum}.`);
            }
            uniform.linkedProperties[prop.name] = prop;
        });
        // Build the internal list of samplers
        this._samplersList = {};
        for (const key of Object.getOwnPropertyNames(this)){
            const value = this[key];
            if (value instanceof Sampler) {
                this._samplersList[key] = value;
            }
        }
        // For each sampler in _samplersList, add defines to be added to OpenPBRMaterialDefines
        for(const samplerKey in this._samplersList){
            const sampler = this._samplersList[samplerKey];
            const defineName = sampler.textureDefine;
            this._samplerDefines[defineName] = {
                type: "boolean",
                default: false
            };
            this._samplerDefines[defineName + "DIRECTUV"] = {
                type: "number",
                default: 0
            };
            this._samplerDefines[defineName + "_GAMMA"] = {
                type: "boolean",
                default: false
            };
        }
        // Arg. Why do I have to add these references to get rid of the linting errors?
        this._baseWeight;
        this._baseWeightTexture;
        this._baseColor;
        this._baseColorTexture;
        this._baseDiffuseRoughness;
        this._baseDiffuseRoughnessTexture;
        this._baseMetalness;
        this._baseMetalnessTexture;
        this._specularWeight;
        this._specularWeightTexture;
        this._specularColor;
        this._specularColorTexture;
        this._specularRoughness;
        this._specularIor;
        this._specularRoughnessTexture;
        this._specularRoughnessAnisotropy;
        this._specularRoughnessAnisotropyTexture;
        this._coatWeight;
        this._coatWeightTexture;
        this._coatColor;
        this._coatColorTexture;
        this._coatRoughness;
        this._coatRoughnessTexture;
        this._coatRoughnessAnisotropy;
        this._coatRoughnessAnisotropyTexture;
        this._coatIor;
        this._coatDarkening;
        this._coatDarkeningTexture;
        this._fuzzWeight;
        this._fuzzWeightTexture;
        this._fuzzColor;
        this._fuzzColorTexture;
        this._fuzzRoughness;
        this._fuzzRoughnessTexture;
        this._geometryNormalTexture;
        this._geometryTangent;
        this._geometryTangentTexture;
        this._geometryCoatNormalTexture;
        this._geometryCoatTangent;
        this._geometryCoatTangentTexture;
        this._geometryOpacity;
        this._geometryOpacityTexture;
        this._thinFilmWeight;
        this._thinFilmWeightTexture;
        this._thinFilmThickness;
        this._thinFilmThicknessMin;
        this._thinFilmThicknessTexture;
        this._thinFilmIor;
        this._emissionLuminance;
        this._emissionColor;
        this._emissionColorTexture;
        this._ambientOcclusionTexture;
    }
    /**
     * Gets a boolean indicating that current material needs to register RTT
     */ get hasRenderTargetTextures() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) {
            return true;
        }
        return this._cacheHasRenderTargetTextures;
    }
    /**
     * Can this material render to prepass
     */ get isPrePassCapable() {
        return !this.disableDepthWrite;
    }
    /**
     * @returns the name of the material class.
     */ getClassName() {
        return "OpenPBRMaterial";
    }
    get transparencyMode() {
        return this._transparencyMode;
    }
    set transparencyMode(value) {
        if (this._transparencyMode === value) {
            return;
        }
        this._transparencyMode = value;
        this._markAllSubMeshesAsTexturesAndMiscDirty();
    }
    /**
     * @returns whether or not the alpha value of the albedo texture should be used for alpha blending.
     */ _shouldUseAlphaFromBaseColorTexture() {
        return this._hasAlphaChannel() && this._transparencyMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_OPAQUE && !this.geometryOpacityTexture;
    }
    /**
     * @returns whether or not there is a usable alpha channel for transparency.
     */ _hasAlphaChannel() {
        return this.baseColorTexture != null && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || this.geometryOpacityTexture != null;
    }
    /**
     * Makes a duplicate of the current material.
     * @param name - name to use for the new material.
     * @param cloneTexturesOnlyOnce - if a texture is used in more than one channel (e.g baseColor and opacity), only clone it once and reuse it on the other channels. Default false.
     * @param rootUrl defines the root URL to use to load textures
     * @returns cloned material instance
     */ clone(name, cloneTexturesOnlyOnce = true, rootUrl = "") {
        const clone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new OpenPBRMaterial(name, this.getScene()), this, {
            cloneTexturesOnlyOnce
        });
        clone.id = name;
        clone.name = name;
        this.stencil.copyTo(clone.stencil);
        this._clonePlugins(clone, rootUrl);
        return clone;
    }
    /**
     * Serializes this PBR Material.
     * @returns - An object with the serialized material.
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.customType = "BABYLON.OpenPBRMaterial";
        return serializationObject;
    }
    // Statics
    /**
     * Parses a PBR Material from a serialized object.
     * @param source - Serialized object.
     * @param scene - BJS scene instance.
     * @param rootUrl - url for the scene object
     * @returns - OpenPBRMaterial
     */ static Parse(source, scene, rootUrl) {
        const material = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new OpenPBRMaterial(source.name, scene), source, scene, rootUrl);
        if (source.stencil) {
            material.stencil.parse(source.stencil, scene, rootUrl);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"]._ParsePlugins(source, material, scene, rootUrl);
        return material;
    }
    /**
     * Force shader compilation
     * @param mesh - Define the mesh we want to force the compilation for
     * @param onCompiled - Define a callback triggered when the compilation completes
     * @param options - Define the options used to create the compilation
     */ forceCompilation(mesh, onCompiled, options) {
        const localOptions = {
            clipPlane: false,
            useInstances: false,
            ...options
        };
        if (!this._uniformBufferLayoutBuilt) {
            this.buildUniformLayout();
        }
        this._callbackPluginEventGeneric(4 /* MaterialPluginEvent.GetDefineNames */ , this._eventInfo);
        const checkReady = ()=>{
            if (this._breakShaderLoadedCheck) {
                return;
            }
            const defines = new OpenPBRMaterialDefines({
                ...this._eventInfo.defineNames || {},
                ...this._samplerDefines || {}
            });
            const effect = this._prepareEffect(mesh, mesh, defines, undefined, undefined, localOptions.useInstances, localOptions.clipPlane);
            if (this._onEffectCreatedObservable) {
                onCreatedEffectParameters.effect = effect;
                onCreatedEffectParameters.subMesh = null;
                this._onEffectCreatedObservable.notifyObservers(onCreatedEffectParameters);
            }
            if (effect.isReady()) {
                if (onCompiled) {
                    onCompiled(this);
                }
            } else {
                effect.onCompileObservable.add(()=>{
                    if (onCompiled) {
                        onCompiled(this);
                    }
                });
            }
        };
        checkReady();
    }
    /**
     * Specifies that the submesh is ready to be used.
     * @param mesh - BJS mesh.
     * @param subMesh - A submesh of the BJS mesh.  Used to check if it is ready.
     * @param useInstances - Specifies that instances should be used.
     * @returns - boolean indicating that the submesh is ready or not.
     */ isReadyForSubMesh(mesh, subMesh, useInstances) {
        if (!this._uniformBufferLayoutBuilt) {
            this.buildUniformLayout();
        }
        const drawWrapper = subMesh._drawWrapper;
        if (drawWrapper.effect && this.isFrozen) {
            if (drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            this._callbackPluginEventGeneric(4 /* MaterialPluginEvent.GetDefineNames */ , this._eventInfo);
            subMesh.materialDefines = new OpenPBRMaterialDefines({
                ...this._eventInfo.defineNames || {},
                ...this._samplerDefines || {}
            });
        }
        const defines = subMesh.materialDefines;
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        const scene = this.getScene();
        const engine = scene.getEngine();
        if (defines._areTexturesDirty) {
            this._eventInfo.hasRenderTargetTextures = false;
            this._callbackPluginEventHasRenderTargetTextures(this._eventInfo);
            this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures;
            if (scene.texturesEnabled) {
                // Loop through samplers, check MaterialFlag and whether the texture is ready or not.
                for(const key in this._samplersList){
                    const sampler = this._samplersList[key];
                    if (sampler.value) {
                        if (!sampler.value.isReadyOrNotBlocking()) {
                            return false;
                        }
                    }
                }
                const radianceTexture = this._getRadianceTexture();
                if (radianceTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    if (!radianceTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                    if (radianceTexture.irradianceTexture) {
                        if (!radianceTexture.irradianceTexture.isReadyOrNotBlocking()) {
                            return false;
                        }
                    } else {
                        // Not ready until spherical are ready too.
                        if (!radianceTexture.sphericalPolynomial && radianceTexture.getInternalTexture()?._sphericalPolynomialPromise) {
                            return false;
                        }
                    }
                }
                if (this._environmentBRDFTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    // This is blocking.
                    if (!this._environmentBRDFTexture.isReady()) {
                        return false;
                    }
                }
                if (this._environmentFuzzBRDFTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    // This is blocking.
                    if (!this._environmentFuzzBRDFTexture.isReady()) {
                        return false;
                    }
                }
                if (OpenPBRMaterial._noiseTextures[scene.uniqueId]) {
                    if (!OpenPBRMaterial._noiseTextures[scene.uniqueId].isReady()) {
                        return false;
                    }
                }
            }
        }
        this._eventInfo.isReadyForSubMesh = true;
        this._eventInfo.defines = defines;
        this._eventInfo.subMesh = subMesh;
        this._callbackPluginEventIsReadyForSubMesh(this._eventInfo);
        if (!this._eventInfo.isReadyForSubMesh) {
            return false;
        }
        if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
            if (!this._imageProcessingConfiguration.isReady()) {
                return false;
            }
        }
        // Check if Area Lights have LTC texture.
        if (defines["AREALIGHTUSED"]) {
            for(let index = 0; index < mesh.lightSources.length; index++){
                if (!mesh.lightSources[index]._isReady()) {
                    return false;
                }
            }
        }
        if (!engine.getCaps().standardDerivatives && !mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind)) {
            mesh.createNormals(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("OpenPBRMaterial: Normals have been created for the mesh: " + mesh.name);
        }
        const previousEffect = subMesh.effect;
        const lightDisposed = defines._areLightsDisposed;
        let effect = this._prepareEffect(mesh, subMesh.getRenderingMesh(), defines, this.onCompiled, this.onError, useInstances, null);
        let forceWasNotReadyPreviously = false;
        if (effect) {
            if (this._onEffectCreatedObservable) {
                onCreatedEffectParameters.effect = effect;
                onCreatedEffectParameters.subMesh = subMesh;
                this._onEffectCreatedObservable.notifyObservers(onCreatedEffectParameters);
            }
            // Use previous effect while new one is compiling
            if (this.allowShaderHotSwapping && previousEffect && !effect.isReady()) {
                effect = previousEffect;
                defines.markAsUnprocessed();
                forceWasNotReadyPreviously = this.isFrozen;
                if (lightDisposed) {
                    // re register in case it takes more than one frame.
                    defines._areLightsDisposed = true;
                    return false;
                }
            } else {
                scene.resetCachedMaterial();
                subMesh.setEffect(effect, defines, this._materialContext);
            }
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        drawWrapper._wasPreviouslyReady = forceWasNotReadyPreviously ? false : true;
        drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
        this._checkScenePerformancePriority();
        return true;
    }
    /**
     * Initializes the uniform buffer layout for the shader.
     */ buildUniformLayout() {
        // Order is important !
        const ubo = this._uniformBuffer;
        ubo.addUniform("vTangentSpaceParams", 2);
        ubo.addUniform("vLightingIntensity", 4);
        ubo.addUniform("pointSize", 1);
        ubo.addUniform("vDebugMode", 2);
        ubo.addUniform("cameraInfo", 4);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformLayoutForIBL"])(ubo, true, true, true, true, true);
        Object.values(this._uniformsList).forEach((uniform)=>{
            ubo.addUniform(uniform.name, uniform.numComponents);
        });
        Object.values(this._samplersList).forEach((sampler)=>{
            ubo.addUniform(sampler.samplerInfoName, 2);
            ubo.addUniform(sampler.samplerMatrixName, 16);
        });
        super.buildUniformLayout();
    }
    /**
     * Binds the submesh data.
     * @param world - The world matrix.
     * @param mesh - The BJS mesh.
     * @param subMesh - A submesh of the BJS mesh.
     */ bindForSubMesh(world, mesh, subMesh) {
        const scene = this.getScene();
        const defines = subMesh.materialDefines;
        if (!defines) {
            return;
        }
        const effect = subMesh.effect;
        if (!effect) {
            return;
        }
        this._activeEffect = effect;
        // Matrices Mesh.
        mesh.getMeshUniformBuffer().bindToEffect(effect, "Mesh");
        mesh.transferToEffect(world);
        const engine = scene.getEngine();
        // Binding unconditionally
        this._uniformBuffer.bindToEffect(effect, "Material");
        this.prePassConfiguration.bindForSubMesh(this._activeEffect, scene, mesh, world, this.isFrozen);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialHelperGeometryRendering"].Bind(engine.currentRenderPassId, this._activeEffect, mesh, world, this);
        const camera = scene.activeCamera;
        if (camera) {
            this._uniformBuffer.updateFloat4("cameraInfo", camera.minZ, camera.maxZ, 0, 0);
        } else {
            this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
        }
        this._eventInfo.subMesh = subMesh;
        this._callbackPluginEventHardBindForSubMesh(this._eventInfo);
        // Normal Matrix
        if (defines.OBJECTSPACE_NORMALMAP) {
            world.toNormalMatrix(this._normalMatrix);
            this.bindOnlyNormalMatrix(this._normalMatrix);
        }
        const mustRebind = this._mustRebind(scene, effect, subMesh, mesh.visibility);
        // Bones
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindBonesParameters"])(mesh, this._activeEffect, this.prePassConfiguration);
        let radianceTexture = null;
        const ubo = this._uniformBuffer;
        if (mustRebind) {
            this.bindViewProjection(effect);
            radianceTexture = this._getRadianceTexture();
            if (!ubo.useUbo || !this.isFrozen || !ubo.isSync || subMesh._drawWrapper._forceRebindOnNextCall) {
                // Texture uniforms
                if (scene.texturesEnabled) {
                    // Loop through samplers and bind info and matrix for each texture.
                    for(const key in this._samplersList){
                        const sampler = this._samplersList[key];
                        if (sampler.value) {
                            ubo.updateFloat2(sampler.samplerInfoName, sampler.value.coordinatesIndex, sampler.value.level);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(sampler.value, ubo, sampler.samplerPrefix);
                        }
                    }
                    if (this.geometryNormalTexture) {
                        if (scene._mirroredCameraPosition) {
                            ubo.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1.0 : -1.0, this._invertNormalMapY ? 1.0 : -1.0);
                        } else {
                            ubo.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1.0 : 1.0, this._invertNormalMapY ? -1.0 : 1.0);
                        }
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindIBLParameters"])(scene, defines, ubo, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White(), radianceTexture, this.realTimeFiltering, true, true, true, true, true);
                }
                // Point size
                if (this.pointsCloud) {
                    ubo.updateFloat("pointSize", this.pointSize);
                }
                Object.values(this._uniformsList).forEach((uniform)=>{
                    // If the property actually defines a uniform, update it.
                    if (uniform.numComponents === 4) {
                        uniform.populateVectorFromLinkedProperties(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0]);
                        ubo.updateVector4(uniform.name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0]);
                    } else if (uniform.numComponents === 3) {
                        uniform.populateVectorFromLinkedProperties(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                        ubo.updateVector3(uniform.name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                    } else if (uniform.numComponents === 2) {
                        uniform.populateVectorFromLinkedProperties(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector2[0]);
                        ubo.updateFloat2(uniform.name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector2[0].x, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector2[0].y);
                    } else if (uniform.numComponents === 1) {
                        ubo.updateFloat(uniform.name, uniform.linkedProperties[Object.keys(uniform.linkedProperties)[0]].value);
                    }
                });
                // Misc
                this._lightingInfos.x = this.directIntensity;
                this._lightingInfos.y = this.emissionLuminance;
                this._lightingInfos.z = this.environmentIntensity * scene.environmentIntensity;
                this._lightingInfos.w = 1.0; // This is used to be _specularIntensity.
                ubo.updateVector4("vLightingIntensity", this._lightingInfos);
                ubo.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor);
            }
            // Textures
            if (scene.texturesEnabled) {
                // Loop through samplers and set textures
                for(const key in this._samplersList){
                    const sampler = this._samplersList[key];
                    if (sampler.value) {
                        ubo.setTexture(sampler.samplerName, sampler.value);
                    }
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindIBLSamplers"])(scene, defines, ubo, radianceTexture, this.realTimeFiltering);
                if (defines.ENVIRONMENTBRDF) {
                    ubo.setTexture("environmentBrdfSampler", this._environmentBRDFTexture);
                }
                if (defines.FUZZENVIRONMENTBRDF) {
                    ubo.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture);
                }
                if (defines.ANISOTROPIC || defines.FUZZ) {
                    ubo.setTexture("blueNoiseSampler", OpenPBRMaterial._noiseTextures[this.getScene().uniqueId]);
                }
            }
            // OIT with depth peeling
            if (this.getScene().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(mesh)) {
                this.getScene().depthPeelingRenderer.bind(effect);
            }
            this._eventInfo.subMesh = subMesh;
            this._callbackPluginEventBindForSubMesh(this._eventInfo);
            // Clip plane
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindClipPlane"])(this._activeEffect, this, scene);
            this.bindEyePosition(effect);
        } else if (scene.getEngine()._features.needToAlwaysBindUniformBuffers) {
            this._needToBindSceneUbo = true;
        }
        if (mustRebind || !this.isFrozen) {
            // Lights
            if (scene.lightsEnabled && !this._disableLighting) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLights"])(scene, mesh, this._activeEffect, defines, this._maxSimultaneousLights);
            }
            // View
            if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].FOGMODE_NONE || radianceTexture || mesh.receiveShadows || defines.PREPASS) {
                this.bindView(effect);
            }
            // Fog
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindFogParameters"])(scene, mesh, this._activeEffect, true);
            // Morph targets
            if (defines.NUM_MORPH_INFLUENCERS) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"])(mesh, this._activeEffect);
            }
            if (defines.BAKED_VERTEX_ANIMATION_TEXTURE) {
                mesh.bakedVertexAnimationManager?.bind(effect, defines.INSTANCES);
            }
            // image processing
            this._imageProcessingConfiguration.bind(this._activeEffect);
            // Log. depth
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"])(defines, this._activeEffect, scene);
        }
        this._afterBind(mesh, this._activeEffect, subMesh);
        ubo.update();
    }
    /**
     * Returns the animatable textures.
     * If material have animatable metallic texture, then reflectivity texture will not be returned, even if it has animations.
     * @returns - Array of animatable textures.
     */ getAnimatables() {
        const results = super.getAnimatables();
        // Loop through samplers and push animated textures to list.
        for(const key in this._samplersList){
            const sampler = this._samplersList[key];
            if (sampler.value && sampler.value.animations && sampler.value.animations.length > 0) {
                results.push(sampler.value);
            }
        }
        if (this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0) {
            results.push(this._radianceTexture);
        }
        return results;
    }
    /**
     * Returns an array of the actively used textures.
     * @returns - Array of BaseTextures
     */ getActiveTextures() {
        const activeTextures = super.getActiveTextures();
        // Loop through samplers and push active textures
        for(const key in this._samplersList){
            const sampler = this._samplersList[key];
            if (sampler.value) {
                activeTextures.push(sampler.value);
            }
        }
        if (this._radianceTexture) {
            activeTextures.push(this._radianceTexture);
        }
        return activeTextures;
    }
    /**
     * Checks to see if a texture is used in the material.
     * @param texture - Base texture to use.
     * @returns - Boolean specifying if a texture is used in the material.
     */ hasTexture(texture) {
        if (super.hasTexture(texture)) {
            return true;
        }
        // Loop through samplers and check each texture for equality
        for(const key in this._samplersList){
            const sampler = this._samplersList[key];
            if (sampler.value === texture) {
                return true;
            }
        }
        if (this._radianceTexture === texture) {
            return true;
        }
        return false;
    }
    /**
     * Sets the required values to the prepass renderer.
     * It can't be sets when subsurface scattering of this material is disabled.
     * When scene have ability to enable subsurface prepass effect, it will enable.
     * @returns - If prepass is enabled or not.
     */ setPrePassRenderer() {
        return false;
    }
    /**
     * Disposes the resources of the material.
     * @param forceDisposeEffect - Forces the disposal of effects.
     * @param forceDisposeTextures - Forces the disposal of all textures.
     */ dispose(forceDisposeEffect, forceDisposeTextures) {
        this._breakShaderLoadedCheck = true;
        if (forceDisposeTextures) {
            if (this._environmentBRDFTexture && this.getScene().environmentBRDFTexture !== this._environmentBRDFTexture) {
                this._environmentBRDFTexture.dispose();
            }
            if (this._environmentFuzzBRDFTexture && this.getScene().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture) {
                this._environmentFuzzBRDFTexture.dispose();
            }
            // Loop through samplers and dispose the textures
            for(const key in this._samplersList){
                const sampler = this._samplersList[key];
                sampler.value?.dispose();
            }
            this._radianceTexture?.dispose();
        }
        this._renderTargets.dispose();
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }
        super.dispose(forceDisposeEffect, forceDisposeTextures);
    }
    /**
     * Returns the texture used for reflections.
     * @returns - Reflection texture if present.  Otherwise, returns the environment texture.
     */ _getRadianceTexture() {
        if (this._radianceTexture) {
            return this._radianceTexture;
        }
        return this.getScene().environmentTexture;
    }
    _prepareEffect(mesh, renderingMesh, defines, onCompiled = null, onError = null, useInstances = null, useClipPlane = null) {
        this._prepareDefines(mesh, renderingMesh, defines, useInstances, useClipPlane);
        if (!defines.isDirty) {
            return null;
        }
        defines.markAsProcessed();
        const scene = this.getScene();
        const engine = scene.getEngine();
        // Fallbacks
        const fallbacks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EffectFallbacks"]();
        let fallbackRank = 0;
        if (defines.USESPHERICALINVERTEX) {
            fallbacks.addFallback(fallbackRank++, "USESPHERICALINVERTEX");
        }
        if (defines.FOG) {
            fallbacks.addFallback(fallbackRank, "FOG");
        }
        if (defines.SPECULARAA) {
            fallbacks.addFallback(fallbackRank, "SPECULARAA");
        }
        if (defines.POINTSIZE) {
            fallbacks.addFallback(fallbackRank, "POINTSIZE");
        }
        if (defines.LOGARITHMICDEPTH) {
            fallbacks.addFallback(fallbackRank, "LOGARITHMICDEPTH");
        }
        if (defines.PARALLAX) {
            fallbacks.addFallback(fallbackRank, "PARALLAX");
        }
        if (defines.PARALLAX_RHS) {
            fallbacks.addFallback(fallbackRank, "PARALLAX_RHS");
        }
        if (defines.PARALLAXOCCLUSION) {
            fallbacks.addFallback(fallbackRank++, "PARALLAXOCCLUSION");
        }
        if (defines.ENVIRONMENTBRDF) {
            fallbacks.addFallback(fallbackRank++, "ENVIRONMENTBRDF");
        }
        if (defines.TANGENT) {
            fallbacks.addFallback(fallbackRank++, "TANGENT");
        }
        fallbackRank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HandleFallbacksForShadows"])(defines, fallbacks, this._maxSimultaneousLights, fallbackRank++);
        if (defines.SPECULARTERM) {
            fallbacks.addFallback(fallbackRank++, "SPECULARTERM");
        }
        if (defines.USESPHERICALFROMREFLECTIONMAP) {
            fallbacks.addFallback(fallbackRank++, "USESPHERICALFROMREFLECTIONMAP");
        }
        if (defines.USEIRRADIANCEMAP) {
            fallbacks.addFallback(fallbackRank++, "USEIRRADIANCEMAP");
        }
        if (defines.NORMAL) {
            fallbacks.addFallback(fallbackRank++, "NORMAL");
        }
        if (defines.VERTEXCOLOR) {
            fallbacks.addFallback(fallbackRank++, "VERTEXCOLOR");
        }
        if (defines.MORPHTARGETS) {
            fallbacks.addFallback(fallbackRank++, "MORPHTARGETS");
        }
        if (defines.MULTIVIEW) {
            fallbacks.addFallback(0, "MULTIVIEW");
        }
        //Attributes
        const attribs = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
        ];
        if (defines.NORMAL) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
        }
        if (defines.TANGENT) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].TangentKind);
        }
        for(let i = 1; i <= 6; ++i){
            if (defines["UV" + i]) {
                attribs.push(`uv${i === 1 ? "" : i}`);
            }
        }
        if (defines.VERTEXCOLOR) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBones"])(attribs, mesh, defines, fallbacks);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForInstances"])(attribs, defines);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForMorphTargets"])(attribs, mesh, defines);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBakedVertexAnimation"])(attribs, mesh, defines);
        let shaderName = "openpbr";
        const uniforms = [
            "world",
            "view",
            "viewProjection",
            "vEyePosition",
            "vLightsType",
            "visibility",
            "vFogInfos",
            "vFogColor",
            "pointSize",
            "mBones",
            "normalMatrix",
            "vLightingIntensity",
            "logarithmicDepthConstant",
            "vTangentSpaceParams",
            "boneTextureWidth",
            "vDebugMode",
            "morphTargetTextureInfo",
            "morphTargetTextureIndices",
            "cameraInfo"
        ];
        for(const uniformName in this._uniformsList){
            uniforms.push(uniformName);
        }
        const samplers = [
            "environmentBrdfSampler",
            "blueNoiseSampler",
            "boneSampler",
            "morphTargets",
            "oitDepthSampler",
            "oitFrontColorSampler",
            "areaLightsLTC1Sampler",
            "areaLightsLTC2Sampler"
        ];
        if (defines.FUZZENVIRONMENTBRDF) {
            samplers.push("environmentFuzzBrdfSampler");
        }
        for(const key in this._samplersList){
            const sampler = this._samplersList[key];
            samplers.push(sampler.samplerName);
            // Push uniforms for texture infos and matrix
            uniforms.push(sampler.samplerInfoName);
            uniforms.push(sampler.samplerMatrixName);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersForIBL"])(uniforms, samplers, true);
        const uniformBuffers = [
            "Material",
            "Scene",
            "Mesh"
        ];
        const indexParameters = {
            maxSimultaneousLights: this._maxSimultaneousLights,
            maxSimultaneousMorphTargets: defines.NUM_MORPH_INFLUENCERS
        };
        this._eventInfo.fallbacks = fallbacks;
        this._eventInfo.fallbackRank = fallbackRank;
        this._eventInfo.defines = defines;
        this._eventInfo.uniforms = uniforms;
        this._eventInfo.attributes = attribs;
        this._eventInfo.samplers = samplers;
        this._eventInfo.uniformBuffersNames = uniformBuffers;
        this._eventInfo.customCode = undefined;
        this._eventInfo.mesh = mesh;
        this._eventInfo.indexParameters = indexParameters;
        this._callbackPluginEventGeneric(128 /* MaterialPluginEvent.PrepareEffect */ , this._eventInfo);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialHelperGeometryRendering"].AddUniformsAndSamplers(uniforms, samplers);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$prePassConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrePassConfiguration"].AddUniforms(uniforms);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$prePassConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrePassConfiguration"].AddSamplers(samplers);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddClipPlaneUniforms"])(uniforms);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingConfiguration"]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingConfiguration"].PrepareUniforms(uniforms, defines);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingConfiguration"].PrepareSamplers(samplers, defines);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersList"])({
            uniformsNames: uniforms,
            uniformBuffersNames: uniformBuffers,
            samplers: samplers,
            defines: defines,
            maxSimultaneousLights: this._maxSimultaneousLights
        });
        const csnrOptions = {};
        if (this.customShaderNameResolve) {
            shaderName = this.customShaderNameResolve(shaderName, uniforms, uniformBuffers, samplers, defines, attribs, csnrOptions);
        }
        const join = defines.toString();
        const effect = engine.createEffect(shaderName, {
            attributes: attribs,
            uniformsNames: uniforms,
            uniformBuffersNames: uniformBuffers,
            samplers: samplers,
            defines: join,
            fallbacks: fallbacks,
            onCompiled: onCompiled,
            onError: onError,
            indexParameters,
            processFinalCode: csnrOptions.processFinalCode,
            processCodeAfterIncludes: this._eventInfo.customCode,
            multiTarget: defines.PREPASS,
            shaderLanguage: this._shaderLanguage,
            extraInitializationsAsync: this._shadersLoaded ? undefined : async ()=>{
                if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/openpbr.vertex.js [app-ssr] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/openpbr.fragment.js [app-ssr] (ecmascript, async loader)")
                    ]);
                } else {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/openpbr.vertex.js [app-ssr] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/openpbr.fragment.js [app-ssr] (ecmascript, async loader)")
                    ]);
                }
                this._shadersLoaded = true;
            }
        }, engine);
        this._eventInfo.customCode = undefined;
        return effect;
    }
    _prepareDefines(mesh, renderingMesh, defines, useInstances = null, useClipPlane = null) {
        const useThinInstances = renderingMesh.hasThinInstances;
        const scene = this.getScene();
        const engine = scene.getEngine();
        // Lights
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLights"])(scene, mesh, defines, true, this._maxSimultaneousLights, this._disableLighting);
        defines._needNormals = true;
        // Multiview
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMultiview"])(scene, defines);
        // PrePass
        const oit = this.needAlphaBlendingForMesh(mesh) && this.getScene().useOrderIndependentTransparency;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForPrePass"])(scene, defines, this.canRenderToMRT && !oit);
        // Order independant transparency
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForOIT"])(scene, defines, oit);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialHelperGeometryRendering"].PrepareDefines(engine.currentRenderPassId, mesh, defines);
        // Textures
        defines.METALLICWORKFLOW = true;
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            for(let i = 1; i <= 6; ++i){
                defines["MAINUV" + i] = false;
            }
            if (scene.texturesEnabled) {
                // Loop through samplers and prepare defines for each texture
                for(const key in this._samplersList){
                    const sampler = this._samplersList[key];
                    if (sampler.value) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(sampler.value, defines, sampler.textureDefine);
                        defines[sampler.textureDefine + "_GAMMA"] = sampler.value.gammaSpace;
                    } else {
                        defines[sampler.textureDefine] = false;
                    }
                }
                const radianceTexture = this._getRadianceTexture();
                const useSHInFragment = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || engine.getCaps().maxVaryingVectors <= 8 || this._baseDiffuseRoughnessTexture != null;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForIBL"])(scene, radianceTexture, defines, this.realTimeFiltering, this.realTimeFilteringQuality, !useSHInFragment);
                if (this._baseMetalnessTexture) {
                    defines.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed;
                }
                defines.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha;
                defines.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture;
                defines.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture;
                defines.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture;
                defines.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel;
                defines.ROUGHNESSSTOREINMETALMAPGREEN = this._useRoughnessFromMetallicTextureGreen;
                defines.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha;
                defines.METALLNESSSTOREINMETALMAPBLUE = this._useMetallicFromMetallicTextureBlue;
                defines.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen;
                if (this.geometryNormalTexture) {
                    if (this._useParallax && this.baseColorTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                        defines.PARALLAX = true;
                        defines.PARALLAX_RHS = scene.useRightHandedSystem;
                        defines.PARALLAXOCCLUSION = !!this._useParallaxOcclusion;
                    } else {
                        defines.PARALLAX = false;
                    }
                    defines.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap;
                } else {
                    defines.PARALLAX = false;
                    defines.PARALLAX_RHS = false;
                    defines.PARALLAXOCCLUSION = false;
                    defines.OBJECTSPACE_NORMALMAP = false;
                }
                if (this._environmentBRDFTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    defines.ENVIRONMENTBRDF = true;
                    defines.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD;
                } else {
                    defines.ENVIRONMENTBRDF = false;
                    defines.ENVIRONMENTBRDF_RGBD = false;
                }
                if (this._environmentFuzzBRDFTexture) {
                    defines.FUZZENVIRONMENTBRDF = true;
                } else {
                    defines.FUZZENVIRONMENTBRDF = false;
                }
                if (this._shouldUseAlphaFromBaseColorTexture()) {
                    defines.ALPHA_FROM_BASE_COLOR_TEXTURE = true;
                } else {
                    defines.ALPHA_FROM_BASE_COLOR_TEXTURE = false;
                }
            }
            if (this._lightFalloff === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_STANDARD) {
                defines.USEPHYSICALLIGHTFALLOFF = false;
                defines.USEGLTFLIGHTFALLOFF = false;
            } else if (this._lightFalloff === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].LIGHTFALLOFF_GLTF) {
                defines.USEPHYSICALLIGHTFALLOFF = false;
                defines.USEGLTFLIGHTFALLOFF = true;
            } else {
                defines.USEPHYSICALLIGHTFALLOFF = true;
                defines.USEGLTFLIGHTFALLOFF = false;
            }
            if (!this.backFaceCulling && this._twoSidedLighting) {
                defines.TWOSIDEDLIGHTING = true;
            } else {
                defines.TWOSIDEDLIGHTING = false;
            }
            // We need it to not invert normals in two sided lighting mode (based on the winding of the face)
            defines.MIRRORED = !!scene._mirroredCameraPosition;
            defines.SPECULARAA = engine.getCaps().standardDerivatives && this._enableSpecularAntiAliasing;
        }
        if (defines._areTexturesDirty || defines._areMiscDirty) {
            defines.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff % 1 === 0 ? "." : ""}`;
            defines.PREMULTIPLYALPHA = this.alphaMode === 7 || this.alphaMode === 8;
            defines.ALPHABLEND = this.needAlphaBlendingForMesh(mesh);
        }
        if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
            this._imageProcessingConfiguration.prepareDefines(defines);
        }
        defines.FORCENORMALFORWARD = this._forceNormalForward;
        defines.RADIANCEOCCLUSION = this._useRadianceOcclusion;
        defines.HORIZONOCCLUSION = this._useHorizonOcclusion;
        if ((this.specularRoughnessAnisotropy > 0.0 || this.coatRoughnessAnisotropy > 0.0) && OpenPBRMaterial._noiseTextures[scene.uniqueId] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
            // ANISOTROPIC is used to include common shader functions needed for anisotropy
            // ANISOTROPIC_BASE is used to process anisotropy for the base layer
            // ANISOTROPIC_COAT is used to process anisotropy for the coat layer
            defines.ANISOTROPIC = true;
            if (!mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].TangentKind)) {
                defines._needUVs = true;
                defines.MAINUV1 = true;
            }
            if (this._useGltfStyleAnisotropy) {
                defines.USE_GLTF_STYLE_ANISOTROPY = true;
            }
            defines.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0.0;
            defines.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0.0;
        } else {
            defines.ANISOTROPIC = false;
            defines.USE_GLTF_STYLE_ANISOTROPY = false;
            defines.ANISOTROPIC_BASE = false;
            defines.ANISOTROPIC_COAT = false;
        }
        defines.THIN_FILM = this.thinFilmWeight > 0.0;
        defines.IRIDESCENCE = this.thinFilmWeight > 0.0;
        defines.FUZZ = this.fuzzWeight > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled;
        if (defines.FUZZ) {
            if (!mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].TangentKind)) {
                defines._needUVs = true;
                defines.MAINUV1 = true;
            }
            this._environmentFuzzBRDFTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$brdfTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetEnvironmentFuzzBRDFTexture"])(this.getScene());
            defines.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber;
        } else {
            this._environmentFuzzBRDFTexture = null;
            defines.FUZZENVIRONMENTBRDF = false;
            defines.FUZZ_IBL_SAMPLES = 0;
        }
        // Misc.
        if (defines._areMiscDirty) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMisc"])(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(mesh), defines, this._applyDecalMapAfterDetailMap, this._useVertexPulling, renderingMesh, this._isVertexOutputInvariant);
            defines.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
            defines.DEBUGMODE = this._debugMode;
        }
        // Values that need to be evaluated on every frame
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForFrameBoundValues"])(scene, engine, this, defines, useInstances ? true : false, useClipPlane, useThinInstances);
        // External config
        this._eventInfo.defines = defines;
        this._eventInfo.mesh = mesh;
        this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo);
        // Attribs
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForAttributes"])(mesh, defines, true, true, true, this._transparencyMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_OPAQUE);
        // External config
        this._callbackPluginEventPrepareDefines(this._eventInfo);
    }
}
OpenPBRMaterial._noiseTextures = {};
/**
 * Force all the PBR materials to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */ OpenPBRMaterial.ForceGLSL = false;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "baseWeight")
], OpenPBRMaterial.prototype, "_baseWeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "baseWeightTexture")
], OpenPBRMaterial.prototype, "_baseWeightTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "baseColor")
], OpenPBRMaterial.prototype, "_baseColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "baseColorTexture")
], OpenPBRMaterial.prototype, "_baseColorTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "baseDiffuseRoughness")
], OpenPBRMaterial.prototype, "_baseDiffuseRoughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "baseDiffuseRoughnessTexture")
], OpenPBRMaterial.prototype, "_baseDiffuseRoughnessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "baseMetalness")
], OpenPBRMaterial.prototype, "_baseMetalness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "baseMetalnessTexture")
], OpenPBRMaterial.prototype, "_baseMetalnessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularWeight")
], OpenPBRMaterial.prototype, "_specularWeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularWeightTexture")
], OpenPBRMaterial.prototype, "_specularWeightTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularColor")
], OpenPBRMaterial.prototype, "_specularColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularColorTexture")
], OpenPBRMaterial.prototype, "_specularColorTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularRoughness")
], OpenPBRMaterial.prototype, "_specularRoughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularRoughnessTexture")
], OpenPBRMaterial.prototype, "_specularRoughnessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularRoughnessAnisotropy")
], OpenPBRMaterial.prototype, "_specularRoughnessAnisotropy", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularRoughnessAnisotropyTexture")
], OpenPBRMaterial.prototype, "_specularRoughnessAnisotropyTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "specularIor")
], OpenPBRMaterial.prototype, "_specularIor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatWeight")
], OpenPBRMaterial.prototype, "_coatWeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatWeightTexture")
], OpenPBRMaterial.prototype, "_coatWeightTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatColor")
], OpenPBRMaterial.prototype, "_coatColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatColorTexture")
], OpenPBRMaterial.prototype, "_coatColorTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatRoughness")
], OpenPBRMaterial.prototype, "_coatRoughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatRoughnessTexture")
], OpenPBRMaterial.prototype, "_coatRoughnessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatRoughnessAnisotropy")
], OpenPBRMaterial.prototype, "_coatRoughnessAnisotropy", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatRoughnessAnisotropyTexture")
], OpenPBRMaterial.prototype, "_coatRoughnessAnisotropyTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatIor")
], OpenPBRMaterial.prototype, "_coatIor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatDarkening")
], OpenPBRMaterial.prototype, "_coatDarkening", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "coatDarkeningTexture")
], OpenPBRMaterial.prototype, "_coatDarkeningTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "fuzzWeight")
], OpenPBRMaterial.prototype, "_fuzzWeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "fuzzWeightTexture")
], OpenPBRMaterial.prototype, "_fuzzWeightTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "fuzzColor")
], OpenPBRMaterial.prototype, "_fuzzColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "fuzzColorTexture")
], OpenPBRMaterial.prototype, "_fuzzColorTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "fuzzRoughness")
], OpenPBRMaterial.prototype, "_fuzzRoughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "fuzzRoughnessTexture")
], OpenPBRMaterial.prototype, "_fuzzRoughnessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "geometryNormalTexture")
], OpenPBRMaterial.prototype, "_geometryNormalTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "geometryTangent")
], OpenPBRMaterial.prototype, "_geometryTangent", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "geometryTangentTexture")
], OpenPBRMaterial.prototype, "_geometryTangentTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "geometryCoatNormalTexture")
], OpenPBRMaterial.prototype, "_geometryCoatNormalTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "geometryCoatTangent")
], OpenPBRMaterial.prototype, "_geometryCoatTangent", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "geometryCoatTangentTexture")
], OpenPBRMaterial.prototype, "_geometryCoatTangentTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "geometryOpacity")
], OpenPBRMaterial.prototype, "_geometryOpacity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "geometryOpacityTexture")
], OpenPBRMaterial.prototype, "_geometryOpacityTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "emissionLuminance")
], OpenPBRMaterial.prototype, "_emissionLuminance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "emissionColor")
], OpenPBRMaterial.prototype, "_emissionColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "emissionColorTexture")
], OpenPBRMaterial.prototype, "_emissionColorTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "thinFilmWeight")
], OpenPBRMaterial.prototype, "_thinFilmWeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "thinFilmWeightTexture")
], OpenPBRMaterial.prototype, "_thinFilmWeightTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "thinFilmThickness")
], OpenPBRMaterial.prototype, "_thinFilmThickness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "thinFilmThicknessMin")
], OpenPBRMaterial.prototype, "_thinFilmThicknessMin", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "thinFilmThicknessTexture")
], OpenPBRMaterial.prototype, "_thinFilmThicknessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "thinFilmIor")
], OpenPBRMaterial.prototype, "_thinFilmIor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAccessorsForMaterialProperty"])("_markAllSubMeshesAsTexturesDirty", "ambientOcclusionTexture")
], OpenPBRMaterial.prototype, "_ambientOcclusionTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "directIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "environmentIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useSpecularWeightFromTextureAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesAndMiscDirty")
], OpenPBRMaterial.prototype, "forceAlphaTest", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesAndMiscDirty")
], OpenPBRMaterial.prototype, "alphaCutOff", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useAmbientOcclusionFromMetallicTextureRed", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useAmbientInGrayScale", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], OpenPBRMaterial.prototype, "usePhysicalLightFalloff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], OpenPBRMaterial.prototype, "useGLTFLightFalloff", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useObjectSpaceNormalMap", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useParallax", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useParallaxOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "parallaxScaleBias", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], OpenPBRMaterial.prototype, "disableLighting", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "forceIrradianceInFragment", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], OpenPBRMaterial.prototype, "maxSimultaneousLights", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "invertNormalMapX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "invertNormalMapY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "twoSidedLighting", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useAlphaFresnel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useLinearAlphaFresnel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "environmentBRDFTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "forceNormalForward", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "enableSpecularAntiAliasing", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useHorizonOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], OpenPBRMaterial.prototype, "useRadianceOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], OpenPBRMaterial.prototype, "unlit", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], OpenPBRMaterial.prototype, "applyDecalMapAfterDetailMap", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], OpenPBRMaterial.prototype, "debugMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], OpenPBRMaterial.prototype, "transparencyMode", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.OpenPBRMaterial", OpenPBRMaterial); //# sourceMappingURL=openpbrMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PBRMetallicRoughnessMaterial",
    ()=>PBRMetallicRoughnessMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
class PBRMetallicRoughnessMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseSimpleMaterial"] {
    /**
     * Instantiates a new PBRMetalRoughnessMaterial instance.
     *
     * @param name The material name
     * @param scene The scene the material will be use in.
     */ constructor(name, scene){
        super(name, scene);
        this._useRoughnessFromMetallicTextureAlpha = false;
        this._useRoughnessFromMetallicTextureGreen = true;
        this._useMetallnessFromMetallicTextureBlue = true;
        this.metallic = 1.0;
        this.roughness = 1.0;
    }
    /**
     * @returns the current class name of the material.
     */ getClassName() {
        return "PBRMetallicRoughnessMaterial";
    }
    /**
     * Makes a duplicate of the current material.
     * @param name - name to use for the new material.
     * @returns cloned material instance
     */ clone(name) {
        const clone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new PBRMetallicRoughnessMaterial(name, this.getScene()), this);
        clone.id = name;
        clone.name = name;
        this.clearCoat.copyTo(clone.clearCoat);
        this.anisotropy.copyTo(clone.anisotropy);
        this.brdf.copyTo(clone.brdf);
        this.sheen.copyTo(clone.sheen);
        this.subSurface.copyTo(clone.subSurface);
        return clone;
    }
    /**
     * Serialize the material to a parsable JSON object.
     * @returns the JSON object
     */ serialize() {
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.customType = "BABYLON.PBRMetallicRoughnessMaterial";
        if (!this.clearCoat.doNotSerialize) {
            serializationObject.clearCoat = this.clearCoat.serialize();
        }
        if (!this.anisotropy.doNotSerialize) {
            serializationObject.anisotropy = this.anisotropy.serialize();
        }
        if (!this.brdf.doNotSerialize) {
            serializationObject.brdf = this.brdf.serialize();
        }
        if (!this.sheen.doNotSerialize) {
            serializationObject.sheen = this.sheen.serialize();
        }
        if (!this.subSurface.doNotSerialize) {
            serializationObject.subSurface = this.subSurface.serialize();
        }
        if (!this.iridescence.doNotSerialize) {
            serializationObject.iridescence = this.iridescence.serialize();
        }
        return serializationObject;
    }
    /**
     * Parses a JSON object corresponding to the serialize function.
     * @param source - JSON source object.
     * @param scene - Defines the scene we are parsing for
     * @param rootUrl - Defines the rootUrl of this parsed object
     * @returns a new PBRMetalRoughnessMaterial
     */ static Parse(source, scene, rootUrl) {
        const material = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new PBRMetallicRoughnessMaterial(source.name, scene), source, scene, rootUrl);
        if (source.clearCoat) {
            material.clearCoat.parse(source.clearCoat, scene, rootUrl);
        }
        if (source.anisotropy) {
            material.anisotropy.parse(source.anisotropy, scene, rootUrl);
        }
        if (source.brdf) {
            material.brdf.parse(source.brdf, scene, rootUrl);
        }
        if (source.sheen) {
            material.sheen.parse(source.sheen, scene, rootUrl);
        }
        if (source.subSurface) {
            material.subSurface.parse(source.subSurface, scene, rootUrl);
        }
        if (source.iridescence) {
            material.iridescence.parse(source.iridescence, scene, rootUrl);
        }
        return material;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_albedoColor")
], PBRMetallicRoughnessMaterial.prototype, "baseColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_albedoTexture")
], PBRMetallicRoughnessMaterial.prototype, "baseTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMetallicRoughnessMaterial.prototype, "metallic", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], PBRMetallicRoughnessMaterial.prototype, "roughness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_metallicTexture")
], PBRMetallicRoughnessMaterial.prototype, "metallicRoughnessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PBRMetallicRoughnessMaterial", PBRMetallicRoughnessMaterial); //# sourceMappingURL=pbrMetallicRoughnessMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PBRSpecularGlossinessMaterial",
    ()=>PBRSpecularGlossinessMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
;
;
;
;
;
class PBRSpecularGlossinessMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseSimpleMaterial"] {
    /**
     * Specifies if the reflectivity texture contains the glossiness information in its alpha channel.
     */ get useMicroSurfaceFromReflectivityMapAlpha() {
        return this._useMicroSurfaceFromReflectivityMapAlpha;
    }
    /**
     * Instantiates a new PBRSpecularGlossinessMaterial instance.
     *
     * @param name The material name
     * @param scene The scene the material will be use in.
     */ constructor(name, scene){
        super(name, scene);
        this._useMicroSurfaceFromReflectivityMapAlpha = true;
    }
    /**
     * @returns the current class name of the material.
     */ getClassName() {
        return "PBRSpecularGlossinessMaterial";
    }
    /**
     * Makes a duplicate of the current material.
     * @param name - name to use for the new material.
     * @returns cloned material instance
     */ clone(name) {
        const clone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new PBRSpecularGlossinessMaterial(name, this.getScene()), this);
        clone.id = name;
        clone.name = name;
        this.clearCoat.copyTo(clone.clearCoat);
        this.anisotropy.copyTo(clone.anisotropy);
        this.brdf.copyTo(clone.brdf);
        this.sheen.copyTo(clone.sheen);
        this.subSurface.copyTo(clone.subSurface);
        return clone;
    }
    /**
     * Serialize the material to a parsable JSON object.
     * @returns the JSON object
     */ serialize() {
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.customType = "BABYLON.PBRSpecularGlossinessMaterial";
        if (!this.clearCoat.doNotSerialize) {
            serializationObject.clearCoat = this.clearCoat.serialize();
        }
        if (!this.anisotropy.doNotSerialize) {
            serializationObject.anisotropy = this.anisotropy.serialize();
        }
        if (!this.brdf.doNotSerialize) {
            serializationObject.brdf = this.brdf.serialize();
        }
        if (!this.sheen.doNotSerialize) {
            serializationObject.sheen = this.sheen.serialize();
        }
        if (!this.subSurface.doNotSerialize) {
            serializationObject.subSurface = this.subSurface.serialize();
        }
        if (!this.iridescence.doNotSerialize) {
            serializationObject.iridescence = this.iridescence.serialize();
        }
        return serializationObject;
    }
    /**
     * Parses a JSON object corresponding to the serialize function.
     * @param source - JSON source object.
     * @param scene - the scene to parse to.
     * @param rootUrl - root url of the assets.
     * @returns a new PBRSpecularGlossinessMaterial.
     */ static Parse(source, scene, rootUrl) {
        const material = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new PBRSpecularGlossinessMaterial(source.name, scene), source, scene, rootUrl);
        if (source.clearCoat) {
            material.clearCoat.parse(source.clearCoat, scene, rootUrl);
        }
        if (source.anisotropy) {
            material.anisotropy.parse(source.anisotropy, scene, rootUrl);
        }
        if (source.brdf) {
            material.brdf.parse(source.brdf, scene, rootUrl);
        }
        if (source.sheen) {
            material.sheen.parse(source.sheen, scene, rootUrl);
        }
        if (source.subSurface) {
            material.subSurface.parse(source.subSurface, scene, rootUrl);
        }
        if (source.iridescence) {
            material.iridescence.parse(source.iridescence, scene, rootUrl);
        }
        return material;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])("diffuse"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_albedoColor")
], PBRSpecularGlossinessMaterial.prototype, "diffuseColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_albedoTexture")
], PBRSpecularGlossinessMaterial.prototype, "diffuseTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])("specular"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_reflectivityColor")
], PBRSpecularGlossinessMaterial.prototype, "specularColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_microSurface")
], PBRSpecularGlossinessMaterial.prototype, "glossiness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty", "_reflectivityTexture")
], PBRSpecularGlossinessMaterial.prototype, "specularGlossinessTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PBRSpecularGlossinessMaterial", PBRSpecularGlossinessMaterial); //# sourceMappingURL=pbrSpecularGlossinessMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrAnisotropicConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrAnisotropicConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBRDFConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBRDFConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$openpbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/openpbrMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMetallicRoughnessMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSpecularGlossinessMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSheenConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSheenConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration.js [app-ssr] (ecmascript)");
// async-loaded shaders
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$pbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$pbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$pbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/pbr.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$pbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/pbr.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$openpbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/openpbr.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$openpbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/openpbr.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$openpbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/openpbr.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$openpbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/openpbr.fragment.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMaterial.decalMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$decalMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.decalMapConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-ssr] (ecmascript)");
;
;
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"].prototype, "decalMap", {
    get: function() {
        if (!this._decalMap) {
            this._decalMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$decalMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecalMapConfiguration"](this);
        }
        return this._decalMap;
    },
    enumerable: true,
    configurable: true
}); //# sourceMappingURL=pbrMaterial.decalMap.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialAnisotropicDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrAnisotropicConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialAnisotropicDefines"],
    "MaterialBRDFDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBRDFConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialBRDFDefines"],
    "MaterialClearCoatDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialClearCoatDefines"],
    "MaterialIridescenceDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialIridescenceDefines"],
    "MaterialSheenDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSheenConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialSheenDefines"],
    "MaterialSubSurfaceDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialSubSurfaceDefines"],
    "OpenPBRMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$openpbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OpenPBRMaterial"],
    "OpenPBRMaterialDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$openpbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OpenPBRMaterialDefines"],
    "PBRAnisotropicConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrAnisotropicConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRAnisotropicConfiguration"],
    "PBRBRDFConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBRDFConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBRDFConfiguration"],
    "PBRBaseMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"],
    "PBRBaseSimpleMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseSimpleMaterial"],
    "PBRClearCoatConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRClearCoatConfiguration"],
    "PBRIridescenceConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRIridescenceConfiguration"],
    "PBRMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRMaterial"],
    "PBRMaterialDefines",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRMaterialDefines"],
    "PBRMetallicRoughnessMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMetallicRoughnessMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRMetallicRoughnessMaterial"],
    "PBRSheenConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSheenConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRSheenConfiguration"],
    "PBRSpecularGlossinessMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSpecularGlossinessMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRSpecularGlossinessMaterial"],
    "PBRSubSurfaceConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRSubSurfaceConfiguration"],
    "openpbrPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$openpbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openpbrPixelShader"],
    "openpbrPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$openpbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openpbrPixelShaderWGSL"],
    "openpbrVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$openpbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openpbrVertexShader"],
    "openpbrVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$openpbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openpbrVertexShaderWGSL"],
    "pbrPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$pbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pbrPixelShader"],
    "pbrPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$pbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pbrPixelShaderWGSL"],
    "pbrVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$pbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pbrVertexShader"],
    "pbrVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$pbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pbrVertexShaderWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrAnisotropicConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrAnisotropicConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBRDFConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBRDFConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$openpbrMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/openpbrMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMetallicRoughnessMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSpecularGlossinessMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSheenConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSheenConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$pbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$pbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$pbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/pbr.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$pbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/pbr.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$openpbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/openpbr.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$openpbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/openpbr.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$openpbr$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/openpbr.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$openpbr$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/openpbr.fragment.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Materials_PBR_c9641283._.js.map