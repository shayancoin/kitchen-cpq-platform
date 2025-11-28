module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightConstants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Defines the cross module constantsused by lights to avoid circular dependencies */ __turbopack_context__.s([
    "LightConstants",
    ()=>LightConstants
]);
class LightConstants {
    /**
     * Sort function to order lights for rendering.
     * @param a First Light object to compare to second.
     * @param b Second Light object to compare first.
     * @returns -1 to reduce's a's index relative to be, 0 for no change, 1 to increase a's index relative to b.
     */ static CompareLightsPriority(a, b) {
        //shadow-casting lights have priority over non-shadow-casting lights
        //the renderPriority is a secondary sort criterion
        if (a.shadowEnabled !== b.shadowEnabled) {
            return (b.shadowEnabled ? 1 : 0) - (a.shadowEnabled ? 1 : 0);
        }
        return b.renderPriority - a.renderPriority;
    }
}
/**
 * Falloff Default: light is falling off following the material specification:
 * standard material is using standard falloff whereas pbr material can request special falloff per materials.
 */ LightConstants.FALLOFF_DEFAULT = 0;
/**
 * Falloff Physical: light is falling off following the inverse squared distance law.
 */ LightConstants.FALLOFF_PHYSICAL = 1;
/**
 * Falloff gltf: light is falling off as described in the gltf moving to PBR document
 * to enhance interoperability with other engines.
 */ LightConstants.FALLOFF_GLTF = 2;
/**
 * Falloff Standard: light is falling off like in the standard material
 * to enhance interoperability with other materials.
 */ LightConstants.FALLOFF_STANDARD = 3;
//lightmapMode Consts
/**
 * If every light affecting the material is in this lightmapMode,
 * material.lightmapTexture adds or multiplies
 * (depends on material.useLightmapAsShadowmap)
 * after every other light calculations.
 */ LightConstants.LIGHTMAP_DEFAULT = 0;
/**
 * material.lightmapTexture as only diffuse lighting from this light
 * adds only specular lighting from this light
 * adds dynamic shadows
 */ LightConstants.LIGHTMAP_SPECULAR = 1;
/**
 * material.lightmapTexture as only lighting
 * no light calculation from this light
 * only adds dynamic shadows from this light
 */ LightConstants.LIGHTMAP_SHADOWSONLY = 2;
// Intensity Mode Consts
/**
 * Each light type uses the default quantity according to its type:
 *      point/spot lights use luminous intensity
 *      directional lights use illuminance
 */ LightConstants.INTENSITYMODE_AUTOMATIC = 0;
/**
 * lumen (lm)
 */ LightConstants.INTENSITYMODE_LUMINOUSPOWER = 1;
/**
 * candela (lm/sr)
 */ LightConstants.INTENSITYMODE_LUMINOUSINTENSITY = 2;
/**
 * lux (lm/m^2)
 */ LightConstants.INTENSITYMODE_ILLUMINANCE = 3;
/**
 * nit (cd/m^2)
 */ LightConstants.INTENSITYMODE_LUMINANCE = 4;
// Light types ids const.
/**
 * Light type const id of the point light.
 */ LightConstants.LIGHTTYPEID_POINTLIGHT = 0;
/**
 * Light type const id of the directional light.
 */ LightConstants.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
/**
 * Light type const id of the spot light.
 */ LightConstants.LIGHTTYPEID_SPOTLIGHT = 2;
/**
 * Light type const id of the hemispheric light.
 */ LightConstants.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
/**
 * Light type const id of the area light.
 */ LightConstants.LIGHTTYPEID_RECT_AREALIGHT = 4;
/**
 * Light type const id of the clustered light.
 */ LightConstants.LIGHTTYPEID_CLUSTERED_CONTAINER = 5; //# sourceMappingURL=lightConstants.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Light",
    ()=>Light
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightConstants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class Light extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"] {
    /**
     * Defines how far from the source the light is impacting in scene units.
     * Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.
     */ get range() {
        return this._range;
    }
    /**
     * Defines how far from the source the light is impacting in scene units.
     * Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.
     */ set range(value) {
        this._range = value;
        this._inverseSquaredRange = 1.0 / (this.range * this.range);
    }
    /**
     * Gets the photometric scale used to interpret the intensity.
     * This is only relevant with PBR Materials where the light intensity can be defined in a physical way.
     */ get intensityMode() {
        return this._intensityMode;
    }
    /**
     * Sets the photometric scale used to interpret the intensity.
     * This is only relevant with PBR Materials where the light intensity can be defined in a physical way.
     */ set intensityMode(value) {
        this._intensityMode = value;
        this._computePhotometricScale();
    }
    /**
     * Gets the light radius used by PBR Materials to simulate soft area lights.
     */ get radius() {
        return this._radius;
    }
    /**
     * sets the light radius used by PBR Materials to simulate soft area lights.
     */ set radius(value) {
        this._radius = value;
        this._computePhotometricScale();
    }
    /**
     * Gets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
     * the current shadow generator.
     */ get shadowEnabled() {
        return this._shadowEnabled;
    }
    /**
     * Sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
     * the current shadow generator.
     */ set shadowEnabled(value) {
        if (this._shadowEnabled === value) {
            return;
        }
        this._shadowEnabled = value;
        this._markMeshesAsLightDirty();
    }
    /**
     * Gets the only meshes impacted by this light.
     */ get includedOnlyMeshes() {
        return this._includedOnlyMeshes;
    }
    /**
     * Sets the only meshes impacted by this light.
     */ set includedOnlyMeshes(value) {
        this._includedOnlyMeshes = value;
        this._hookArrayForIncludedOnly(value);
    }
    /**
     * Gets the meshes not impacted by this light.
     */ get excludedMeshes() {
        return this._excludedMeshes;
    }
    /**
     * Sets the meshes not impacted by this light.
     */ set excludedMeshes(value) {
        this._excludedMeshes = value;
        this._hookArrayForExcluded(value);
    }
    /**
     * Gets the layer id use to find what meshes are not impacted by the light.
     * Inactive if 0
     */ get excludeWithLayerMask() {
        return this._excludeWithLayerMask;
    }
    /**
     * Sets the layer id use to find what meshes are not impacted by the light.
     * Inactive if 0
     */ set excludeWithLayerMask(value) {
        this._excludeWithLayerMask = value;
        this._resyncMeshes();
    }
    /**
     * Gets the layer id use to find what meshes are impacted by the light.
     * Inactive if 0
     */ get includeOnlyWithLayerMask() {
        return this._includeOnlyWithLayerMask;
    }
    /**
     * Sets the layer id use to find what meshes are impacted by the light.
     * Inactive if 0
     */ set includeOnlyWithLayerMask(value) {
        this._includeOnlyWithLayerMask = value;
        this._resyncMeshes();
    }
    /**
     * Gets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)
     */ get lightmapMode() {
        return this._lightmapMode;
    }
    /**
     * Sets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)
     */ set lightmapMode(value) {
        if (this._lightmapMode === value) {
            return;
        }
        this._lightmapMode = value;
        this._markMeshesAsLightDirty();
    }
    /**
     * Returns the view matrix.
     * @param _faceIndex The index of the face for which we want to extract the view matrix. Only used for point light types.
     * @returns The view matrix. Can be null, if a view matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).
     */ getViewMatrix(_faceIndex) {
        return null;
    }
    /**
     * Returns the projection matrix.
     * Note that viewMatrix and renderList are optional and are only used by lights that calculate the projection matrix from a list of meshes (e.g. directional lights with automatic extents calculation).
     * @param _viewMatrix The view transform matrix of the light (optional).
     * @param _renderList The list of meshes to take into account when calculating the projection matrix (optional).
     * @returns The projection matrix. Can be null, if a projection matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).
     */ getProjectionMatrix(_viewMatrix, _renderList) {
        return null;
    }
    /**
     * Creates a Light object in the scene.
     * Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
     * @param name The friendly name of the light
     * @param scene The scene the light belongs too
     */ constructor(name, scene){
        super(name, scene, false);
        /**
         * Diffuse gives the basic color to an object.
         */ this.diffuse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1.0, 1.0, 1.0);
        /**
         * Specular produces a highlight color on an object.
         * Note: This is not affecting PBR materials.
         */ this.specular = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1.0, 1.0, 1.0);
        /**
         * Defines the falloff type for this light. This lets overriding how punctual light are
         * falling off base on range or angle.
         * This can be set to any values in Light.FALLOFF_x.
         *
         * Note: This is only useful for PBR Materials at the moment. This could be extended if required to
         * other types of materials.
         */ this.falloffType = Light.FALLOFF_DEFAULT;
        /**
         * Strength of the light.
         * Note: By default it is define in the framework own unit.
         * Note: In PBR materials the intensityMode can be use to chose what unit the intensity is defined in.
         */ this.intensity = 1.0;
        this._range = Number.MAX_VALUE;
        /** @internal */ this._inverseSquaredRange = 0;
        /**
         * Cached photometric scale default to 1.0 as the automatic intensity mode defaults to 1.0 for every type
         * of light.
         */ this._photometricScale = 1.0;
        this._intensityMode = Light.INTENSITYMODE_AUTOMATIC;
        this._radius = 0.00001;
        /**
         * Defines the rendering priority of the lights. It can help in case of fallback or number of lights
         * exceeding the number allowed of the materials.
         */ this.renderPriority = 0;
        this._shadowEnabled = true;
        this._excludeWithLayerMask = 0;
        this._includeOnlyWithLayerMask = 0;
        this._lightmapMode = 0;
        /**
         * Shadow generators associated to the light.
         * @internal Internal use only.
         */ this._shadowGenerators = null;
        /**
         * @internal Internal use only.
         */ this._excludedMeshesIds = new Array();
        /**
         * @internal Internal use only.
         */ this._includedOnlyMeshesIds = new Array();
        /**
         * Used internally by ClusteredLight to sort lights
         * @internal
         */ this._currentViewDepth = 0;
        /** @internal */ this._isLight = true;
        this.getScene().addLight(this);
        this._uniformBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformBuffer"](this.getScene().getEngine(), undefined, undefined, name);
        this._buildUniformLayout();
        this.includedOnlyMeshes = [];
        this.excludedMeshes = [];
        this._resyncMeshes();
    }
    /**
     * Sets the passed Effect "effect" with the Light textures.
     * @param effect The effect to update
     * @param lightIndex The index of the light in the effect to update
     * @returns The light
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transferTexturesToEffect(effect, lightIndex) {
        // Do nothing by default.
        return this;
    }
    /**
     * Binds the lights information from the scene to the effect for the given mesh.
     * @param lightIndex Light index
     * @param scene The scene where the light belongs to
     * @param effect The effect we are binding the data to
     * @param useSpecular Defines if specular is supported
     * @param receiveShadows Defines if the effect (mesh) we bind the light for receives shadows
     */ _bindLight(lightIndex, scene, effect, useSpecular, receiveShadows = true) {
        const iAsString = lightIndex.toString();
        let needUpdate = false;
        this._uniformBuffer.bindToEffect(effect, "Light" + iAsString);
        if (this._renderId !== scene.getRenderId() || this._lastUseSpecular !== useSpecular || !this._uniformBuffer.useUbo) {
            this._renderId = scene.getRenderId();
            this._lastUseSpecular = useSpecular;
            const scaledIntensity = this.getScaledIntensity();
            this.transferToEffect(effect, iAsString);
            this.diffuse.scaleToRef(scaledIntensity, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0]);
            this._uniformBuffer.updateColor4("vLightDiffuse", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0], this.range, iAsString);
            if (useSpecular) {
                this.specular.scaleToRef(scaledIntensity, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color3[1]);
                this._uniformBuffer.updateColor4("vLightSpecular", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color3[1], this.radius, iAsString);
            }
            needUpdate = true;
        }
        // Textures might still need to be rebound.
        this.transferTexturesToEffect(effect, iAsString);
        // Shadows
        if (scene.shadowsEnabled && this.shadowEnabled && receiveShadows) {
            const shadowGenerator = this.getShadowGenerator(scene.activeCamera) ?? this.getShadowGenerator();
            if (shadowGenerator) {
                shadowGenerator.bindShadowLight(iAsString, effect);
                needUpdate = true;
            }
        }
        if (needUpdate) {
            this._uniformBuffer.update();
        } else {
            this._uniformBuffer.bindUniformBuffer();
        }
    }
    /**
     * Returns the string "Light".
     * @returns the class name
     */ getClassName() {
        return "Light";
    }
    /**
     * Converts the light information to a readable string for debug purpose.
     * @param fullDetails Supports for multiple levels of logging within scene loading
     * @returns the human readable light info
     */ toString(fullDetails) {
        let ret = "Name: " + this.name;
        ret += ", type: " + [
            "Point",
            "Directional",
            "Spot",
            "Hemispheric",
            "Clustered"
        ][this.getTypeID()];
        if (this.animations) {
            for(let i = 0; i < this.animations.length; i++){
                ret += ", animation[0]: " + this.animations[i].toString(fullDetails);
            }
        }
        return ret;
    }
    /** @internal */ _syncParentEnabledState() {
        super._syncParentEnabledState();
        if (!this.isDisposed()) {
            this._resyncMeshes();
        }
    }
    /**
     * Set the enabled state of this node.
     * @param value - the new enabled state
     */ setEnabled(value) {
        super.setEnabled(value);
        this._resyncMeshes();
    }
    /**
     * Returns the Light associated shadow generator if any.
     * @param camera Camera for which the shadow generator should be retrieved (default: null). If null, retrieves the default shadow generator
     * @returns the associated shadow generator.
     */ getShadowGenerator(camera = null) {
        if (this._shadowGenerators === null) {
            return null;
        }
        return this._shadowGenerators.get(camera) ?? null;
    }
    /**
     * Returns all the shadow generators associated to this light
     * @returns
     */ getShadowGenerators() {
        return this._shadowGenerators;
    }
    /**
     * Returns a Vector3, the absolute light position in the World.
     * @returns the world space position of the light
     */ getAbsolutePosition() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /**
     * Specifies if the light will affect the passed mesh.
     * @param mesh The mesh to test against the light
     * @returns true the mesh is affected otherwise, false.
     */ canAffectMesh(mesh) {
        if (!mesh) {
            return true;
        }
        if (this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && this.includedOnlyMeshes.indexOf(mesh) === -1) {
            return false;
        }
        if (this.excludedMeshes && this.excludedMeshes.length > 0 && this.excludedMeshes.indexOf(mesh) !== -1) {
            return false;
        }
        if (this.includeOnlyWithLayerMask !== 0 && (this.includeOnlyWithLayerMask & mesh.layerMask) === 0) {
            return false;
        }
        if (this.excludeWithLayerMask !== 0 && this.excludeWithLayerMask & mesh.layerMask) {
            return false;
        }
        return true;
    }
    /**
     * Releases resources associated with this node.
     * @param doNotRecurse Set to true to not recurse into each children (recurse into each children by default)
     * @param disposeMaterialAndTextures Set to true to also dispose referenced materials and textures (false by default)
     */ dispose(doNotRecurse, disposeMaterialAndTextures = false) {
        if (this._shadowGenerators) {
            const iterator = this._shadowGenerators.values();
            for(let key = iterator.next(); key.done !== true; key = iterator.next()){
                const shadowGenerator = key.value;
                shadowGenerator.dispose();
            }
            this._shadowGenerators = null;
        }
        // Animations
        this.getScene().stopAnimation(this);
        if (this._parentContainer) {
            const index = this._parentContainer.lights.indexOf(this);
            if (index > -1) {
                this._parentContainer.lights.splice(index, 1);
            }
            this._parentContainer = null;
        }
        // Remove from meshes
        for (const mesh of this.getScene().meshes){
            mesh._removeLightSource(this, true);
        }
        this._uniformBuffer.dispose();
        // Remove from scene
        this.getScene().removeLight(this);
        super.dispose(doNotRecurse, disposeMaterialAndTextures);
    }
    /**
     * Returns the light type ID (integer).
     * @returns The light Type id as a constant defines in Light.LIGHTTYPEID_x
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    getTypeID() {
        return 0;
    }
    /**
     * Returns the intensity scaled by the Photometric Scale according to the light type and intensity mode.
     * @returns the scaled intensity in intensity mode unit
     */ getScaledIntensity() {
        return this._photometricScale * this.intensity;
    }
    /**
     * Returns a new Light object, named "name", from the current one.
     * @param name The name of the cloned light
     * @param newParent The parent of this light, if it has one
     * @returns the new created light
     */ clone(name, newParent = null) {
        const constructor = Light.GetConstructorFromName(this.getTypeID(), name, this.getScene());
        if (!constructor) {
            return null;
        }
        const clonedLight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(constructor, this);
        if (name) {
            clonedLight.name = name;
        }
        if (newParent) {
            clonedLight.parent = newParent;
        }
        clonedLight.setEnabled(this.isEnabled());
        this.onClonedObservable.notifyObservers(clonedLight);
        return clonedLight;
    }
    /**
     * Serializes the current light into a Serialization object.
     * @returns the serialized object.
     */ serialize() {
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.uniqueId = this.uniqueId;
        // Type
        serializationObject.type = this.getTypeID();
        // Parent
        if (this.parent) {
            this.parent._serializeAsParent(serializationObject);
        }
        // Inclusion / exclusions
        if (this.excludedMeshes.length > 0) {
            serializationObject.excludedMeshesIds = [];
            for (const mesh of this.excludedMeshes){
                serializationObject.excludedMeshesIds.push(mesh.id);
            }
        }
        if (this.includedOnlyMeshes.length > 0) {
            serializationObject.includedOnlyMeshesIds = [];
            for (const mesh of this.includedOnlyMeshes){
                serializationObject.includedOnlyMeshesIds.push(mesh.id);
            }
        }
        // Animations
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].AppendSerializedAnimations(this, serializationObject);
        serializationObject.ranges = this.serializeAnimationRanges();
        serializationObject.isEnabled = this.isEnabled();
        return serializationObject;
    }
    /**
     * Creates a new typed light from the passed type (integer) : point light = 0, directional light = 1, spot light = 2, hemispheric light = 3.
     * This new light is named "name" and added to the passed scene.
     * @param type Type according to the types available in Light.LIGHTTYPEID_x
     * @param name The friendly name of the light
     * @param scene The scene the new light will belong to
     * @returns the constructor function
     */ static GetConstructorFromName(type, name, scene) {
        const constructorFunc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].Construct("Light_Type_" + type, name, scene);
        if (constructorFunc) {
            return constructorFunc;
        }
        // Default to no light for none present once.
        return null;
    }
    /**
     * Parses the passed "parsedLight" and returns a new instanced Light from this parsing.
     * @param parsedLight The JSON representation of the light
     * @param scene The scene to create the parsed light in
     * @returns the created light after parsing
     */ static Parse(parsedLight, scene) {
        const constructor = Light.GetConstructorFromName(parsedLight.type, parsedLight.name, scene);
        if (!constructor) {
            return null;
        }
        const light = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(constructor, parsedLight, scene);
        // Inclusion / exclusions
        if (parsedLight.excludedMeshesIds) {
            light._excludedMeshesIds = parsedLight.excludedMeshesIds;
        }
        if (parsedLight.includedOnlyMeshesIds) {
            light._includedOnlyMeshesIds = parsedLight.includedOnlyMeshesIds;
        }
        // Parent
        if (parsedLight.parentId !== undefined) {
            light._waitingParentId = parsedLight.parentId;
        }
        if (parsedLight.parentInstanceIndex !== undefined) {
            light._waitingParentInstanceIndex = parsedLight.parentInstanceIndex;
        }
        // Falloff
        if (parsedLight.falloffType !== undefined) {
            light.falloffType = parsedLight.falloffType;
        }
        // Lightmaps
        if (parsedLight.lightmapMode !== undefined) {
            light.lightmapMode = parsedLight.lightmapMode;
        }
        // Animations
        if (parsedLight.animations) {
            for(let animationIndex = 0; animationIndex < parsedLight.animations.length; animationIndex++){
                const parsedAnimation = parsedLight.animations[animationIndex];
                const internalClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetClass"])("BABYLON.Animation");
                if (internalClass) {
                    light.animations.push(internalClass.Parse(parsedAnimation));
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].ParseAnimationRanges(light, parsedLight, scene);
        }
        if (parsedLight.autoAnimate) {
            scene.beginAnimation(light, parsedLight.autoAnimateFrom, parsedLight.autoAnimateTo, parsedLight.autoAnimateLoop, parsedLight.autoAnimateSpeed || 1.0);
        }
        // Check if isEnabled is defined to be back compatible with prior serialized versions.
        if (parsedLight.isEnabled !== undefined) {
            light.setEnabled(parsedLight.isEnabled);
        }
        return light;
    }
    _hookArrayForExcluded(array) {
        const oldPush = array.push;
        array.push = (...items)=>{
            const result = oldPush.apply(array, items);
            for (const item of items){
                item._resyncLightSource(this);
            }
            return result;
        };
        const oldSplice = array.splice;
        array.splice = (index, deleteCount)=>{
            const deleted = oldSplice.apply(array, [
                index,
                deleteCount
            ]);
            for (const item of deleted){
                item._resyncLightSource(this);
            }
            return deleted;
        };
        for (const item of array){
            item._resyncLightSource(this);
        }
    }
    _hookArrayForIncludedOnly(array) {
        const oldPush = array.push;
        array.push = (...items)=>{
            const result = oldPush.apply(array, items);
            this._resyncMeshes();
            return result;
        };
        const oldSplice = array.splice;
        array.splice = (index, deleteCount)=>{
            const deleted = oldSplice.apply(array, [
                index,
                deleteCount
            ]);
            this._resyncMeshes();
            return deleted;
        };
        this._resyncMeshes();
    }
    _resyncMeshes() {
        for (const mesh of this.getScene().meshes){
            mesh._resyncLightSource(this);
        }
    }
    /**
     * Forces the meshes to update their light related information in their rendering used effects
     * @internal Internal Use Only
     */ _markMeshesAsLightDirty() {
        for (const mesh of this.getScene().meshes){
            if (mesh.lightSources.indexOf(this) !== -1) {
                mesh._markSubMeshesAsLightDirty();
            }
        }
    }
    /**
     * Recomputes the cached photometric scale if needed.
     */ _computePhotometricScale() {
        this._photometricScale = this._getPhotometricScale();
        this.getScene().resetCachedMaterial();
    }
    /**
     * @returns the Photometric Scale according to the light type and intensity mode.
     */ _getPhotometricScale() {
        let photometricScale = 0.0;
        const lightTypeID = this.getTypeID();
        //get photometric mode
        let photometricMode = this.intensityMode;
        if (photometricMode === Light.INTENSITYMODE_AUTOMATIC) {
            if (lightTypeID === Light.LIGHTTYPEID_DIRECTIONALLIGHT) {
                photometricMode = Light.INTENSITYMODE_ILLUMINANCE;
            } else {
                photometricMode = Light.INTENSITYMODE_LUMINOUSINTENSITY;
            }
        }
        //compute photometric scale
        switch(lightTypeID){
            case Light.LIGHTTYPEID_POINTLIGHT:
            case Light.LIGHTTYPEID_SPOTLIGHT:
                switch(photometricMode){
                    case Light.INTENSITYMODE_LUMINOUSPOWER:
                        photometricScale = 1.0 / (4.0 * Math.PI);
                        break;
                    case Light.INTENSITYMODE_LUMINOUSINTENSITY:
                        photometricScale = 1.0;
                        break;
                    case Light.INTENSITYMODE_LUMINANCE:
                        photometricScale = this.radius * this.radius;
                        break;
                }
                break;
            case Light.LIGHTTYPEID_DIRECTIONALLIGHT:
                switch(photometricMode){
                    case Light.INTENSITYMODE_ILLUMINANCE:
                        photometricScale = 1.0;
                        break;
                    case Light.INTENSITYMODE_LUMINANCE:
                        {
                            // When radius (and therefore solid angle) is non-zero a directional lights brightness can be specified via central (peak) luminance.
                            // For a directional light the 'radius' defines the angular radius (in radians) rather than world-space radius (e.g. in metres).
                            let apexAngleRadians = this.radius;
                            // Impose a minimum light angular size to avoid the light becoming an infinitely small angular light source (i.e. a dirac delta function).
                            apexAngleRadians = Math.max(apexAngleRadians, 0.001);
                            const solidAngle = 2.0 * Math.PI * (1.0 - Math.cos(apexAngleRadians));
                            photometricScale = solidAngle;
                            break;
                        }
                }
                break;
            case Light.LIGHTTYPEID_HEMISPHERICLIGHT:
                // No fall off in hemispheric light.
                photometricScale = 1.0;
                break;
        }
        return photometricScale;
    }
    /**
     * Reorder the light in the scene according to their defined priority.
     * @internal Internal Use Only
     */ _reorderLightsInScene() {
        const scene = this.getScene();
        if (this._renderPriority != 0) {
            scene.requireLightSorting = true;
        }
        this.getScene().sortLightsByPriority();
    }
    /**
     * @internal
     */ _isReady() {
        return true;
    }
}
/**
 * Falloff Default: light is falling off following the material specification:
 * standard material is using standard falloff whereas pbr material can request special falloff per materials.
 */ Light.FALLOFF_DEFAULT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].FALLOFF_DEFAULT;
/**
 * Falloff Physical: light is falling off following the inverse squared distance law.
 */ Light.FALLOFF_PHYSICAL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].FALLOFF_PHYSICAL;
/**
 * Falloff gltf: light is falling off as described in the gltf moving to PBR document
 * to enhance interoperability with other engines.
 */ Light.FALLOFF_GLTF = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].FALLOFF_GLTF;
/**
 * Falloff Standard: light is falling off like in the standard material
 * to enhance interoperability with other materials.
 */ Light.FALLOFF_STANDARD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].FALLOFF_STANDARD;
//lightmapMode Consts
/**
 * If every light affecting the material is in this lightmapMode,
 * material.lightmapTexture adds or multiplies
 * (depends on material.useLightmapAsShadowmap)
 * after every other light calculations.
 */ Light.LIGHTMAP_DEFAULT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTMAP_DEFAULT;
/**
 * material.lightmapTexture as only diffuse lighting from this light
 * adds only specular lighting from this light
 * adds dynamic shadows
 */ Light.LIGHTMAP_SPECULAR = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTMAP_SPECULAR;
/**
 * material.lightmapTexture as only lighting
 * no light calculation from this light
 * only adds dynamic shadows from this light
 */ Light.LIGHTMAP_SHADOWSONLY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTMAP_SHADOWSONLY;
// Intensity Mode Consts
/**
 * Each light type uses the default quantity according to its type:
 *      point/spot lights use luminous intensity
 *      directional lights use illuminance
 */ Light.INTENSITYMODE_AUTOMATIC = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].INTENSITYMODE_AUTOMATIC;
/**
 * lumen (lm)
 */ Light.INTENSITYMODE_LUMINOUSPOWER = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].INTENSITYMODE_LUMINOUSPOWER;
/**
 * candela (lm/sr)
 */ Light.INTENSITYMODE_LUMINOUSINTENSITY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].INTENSITYMODE_LUMINOUSINTENSITY;
/**
 * lux (lm/m^2)
 */ Light.INTENSITYMODE_ILLUMINANCE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].INTENSITYMODE_ILLUMINANCE;
/**
 * nit (cd/m^2)
 */ Light.INTENSITYMODE_LUMINANCE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].INTENSITYMODE_LUMINANCE;
// Light types ids const.
/**
 * Light type const id of the point light.
 */ Light.LIGHTTYPEID_POINTLIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_POINTLIGHT;
/**
 * Light type const id of the directional light.
 */ Light.LIGHTTYPEID_DIRECTIONALLIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_DIRECTIONALLIGHT;
/**
 * Light type const id of the spot light.
 */ Light.LIGHTTYPEID_SPOTLIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_SPOTLIGHT;
/**
 * Light type const id of the hemispheric light.
 */ Light.LIGHTTYPEID_HEMISPHERICLIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_HEMISPHERICLIGHT;
/**
 * Light type const id of the area light.
 */ Light.LIGHTTYPEID_RECT_AREALIGHT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_RECT_AREALIGHT;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], Light.prototype, "diffuse", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], Light.prototype, "specular", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Light.prototype, "falloffType", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Light.prototype, "intensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Light.prototype, "range", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Light.prototype, "intensityMode", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Light.prototype, "radius", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Light.prototype, "_renderPriority", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_reorderLightsInScene")
], Light.prototype, "renderPriority", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("shadowEnabled")
], Light.prototype, "_shadowEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("excludeWithLayerMask")
], Light.prototype, "_excludeWithLayerMask", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("includeOnlyWithLayerMask")
], Light.prototype, "_includeOnlyWithLayerMask", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("lightmapMode")
], Light.prototype, "_lightmapMode", void 0); //# sourceMappingURL=light.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShadowGenerator",
    ()=>ShadowGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$postProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/postProcess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/blurPostProcess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectFallbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$renderingManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/renderingManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/floatingOriginMatrixOverrides.js [app-ssr] (ecmascript)");
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
class ShadowGenerator {
    /**
     * Gets the bias: offset applied on the depth preventing acnea (in light direction).
     */ get bias() {
        return this._bias;
    }
    /**
     * Sets the bias: offset applied on the depth preventing acnea (in light direction).
     */ set bias(bias) {
        this._bias = bias;
    }
    /**
     * Gets the normalBias: offset applied on the depth preventing acnea (along side the normal direction and proportional to the light/normal angle).
     */ get normalBias() {
        return this._normalBias;
    }
    /**
     * Sets the normalBias: offset applied on the depth preventing acnea (along side the normal direction and proportional to the light/normal angle).
     */ set normalBias(normalBias) {
        this._normalBias = normalBias;
    }
    /**
     * Gets the blur box offset: offset applied during the blur pass.
     * Only useful if useKernelBlur = false
     */ get blurBoxOffset() {
        return this._blurBoxOffset;
    }
    /**
     * Sets the blur box offset: offset applied during the blur pass.
     * Only useful if useKernelBlur = false
     */ set blurBoxOffset(value) {
        if (this._blurBoxOffset === value) {
            return;
        }
        this._blurBoxOffset = value;
        this._disposeBlurPostProcesses();
    }
    /**
     * Gets the blur scale: scale of the blurred texture compared to the main shadow map.
     * 2 means half of the size.
     */ get blurScale() {
        return this._blurScale;
    }
    /**
     * Sets the blur scale: scale of the blurred texture compared to the main shadow map.
     * 2 means half of the size.
     */ set blurScale(value) {
        if (this._blurScale === value) {
            return;
        }
        this._blurScale = value;
        this._disposeBlurPostProcesses();
    }
    /**
     * Gets the blur kernel: kernel size of the blur pass.
     * Only useful if useKernelBlur = true
     */ get blurKernel() {
        return this._blurKernel;
    }
    /**
     * Sets the blur kernel: kernel size of the blur pass.
     * Only useful if useKernelBlur = true
     */ set blurKernel(value) {
        if (this._blurKernel === value) {
            return;
        }
        this._blurKernel = value;
        this._disposeBlurPostProcesses();
    }
    /**
     * Gets whether the blur pass is a kernel blur (if true) or box blur.
     * Only useful in filtered mode (useBlurExponentialShadowMap...)
     */ get useKernelBlur() {
        return this._useKernelBlur;
    }
    /**
     * Sets whether the blur pass is a kernel blur (if true) or box blur.
     * Only useful in filtered mode (useBlurExponentialShadowMap...)
     */ set useKernelBlur(value) {
        if (this._useKernelBlur === value) {
            return;
        }
        this._useKernelBlur = value;
        this._disposeBlurPostProcesses();
    }
    /**
     * Gets the depth scale used in ESM mode.
     */ get depthScale() {
        return this._depthScale !== undefined ? this._depthScale : this._light.getDepthScale();
    }
    /**
     * Sets the depth scale used in ESM mode.
     * This can override the scale stored on the light.
     */ set depthScale(value) {
        this._depthScale = value;
    }
    _validateFilter(filter) {
        return filter;
    }
    /**
     * Gets the current mode of the shadow generator (normal, PCF, ESM...).
     * The returned value is a number equal to one of the available mode defined in ShadowMap.FILTER_x like _FILTER_NONE
     */ get filter() {
        return this._filter;
    }
    /**
     * Sets the current mode of the shadow generator (normal, PCF, ESM...).
     * The returned value is a number equal to one of the available mode defined in ShadowMap.FILTER_x like _FILTER_NONE
     */ set filter(value) {
        value = this._validateFilter(value);
        // Blurring the cubemap is going to be too expensive. Reverting to unblurred version
        if (this._light.needCube()) {
            if (value === ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP) {
                this.useExponentialShadowMap = true;
                return;
            } else if (value === ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP) {
                this.useCloseExponentialShadowMap = true;
                return;
            } else if (value === ShadowGenerator.FILTER_PCF || value === ShadowGenerator.FILTER_PCSS) {
                this.usePoissonSampling = true;
                return;
            }
        }
        // Weblg1 fallback for PCF.
        if (value === ShadowGenerator.FILTER_PCF || value === ShadowGenerator.FILTER_PCSS) {
            if (!this._scene.getEngine()._features.supportShadowSamplers) {
                this.usePoissonSampling = true;
                return;
            }
        }
        if (this._filter === value) {
            return;
        }
        this._filter = value;
        this._disposeBlurPostProcesses();
        this._applyFilterValues();
        this._light._markMeshesAsLightDirty();
    }
    /**
     * Gets if the current filter is set to Poisson Sampling.
     */ get usePoissonSampling() {
        return this.filter === ShadowGenerator.FILTER_POISSONSAMPLING;
    }
    /**
     * Sets the current filter to Poisson Sampling.
     */ set usePoissonSampling(value) {
        const filter = this._validateFilter(ShadowGenerator.FILTER_POISSONSAMPLING);
        if (!value && this.filter !== ShadowGenerator.FILTER_POISSONSAMPLING) {
            return;
        }
        this.filter = value ? filter : ShadowGenerator.FILTER_NONE;
    }
    /**
     * Gets if the current filter is set to ESM.
     */ get useExponentialShadowMap() {
        return this.filter === ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP;
    }
    /**
     * Sets the current filter is to ESM.
     */ set useExponentialShadowMap(value) {
        const filter = this._validateFilter(ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP);
        if (!value && this.filter !== ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP) {
            return;
        }
        this.filter = value ? filter : ShadowGenerator.FILTER_NONE;
    }
    /**
     * Gets if the current filter is set to filtered ESM.
     */ get useBlurExponentialShadowMap() {
        return this.filter === ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP;
    }
    /**
     * Gets if the current filter is set to filtered  ESM.
     */ set useBlurExponentialShadowMap(value) {
        const filter = this._validateFilter(ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP);
        if (!value && this.filter !== ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP) {
            return;
        }
        this.filter = value ? filter : ShadowGenerator.FILTER_NONE;
    }
    /**
     * Gets if the current filter is set to "close ESM" (using the inverse of the
     * exponential to prevent steep falloff artifacts).
     */ get useCloseExponentialShadowMap() {
        return this.filter === ShadowGenerator.FILTER_CLOSEEXPONENTIALSHADOWMAP;
    }
    /**
     * Sets the current filter to "close ESM" (using the inverse of the
     * exponential to prevent steep falloff artifacts).
     */ set useCloseExponentialShadowMap(value) {
        const filter = this._validateFilter(ShadowGenerator.FILTER_CLOSEEXPONENTIALSHADOWMAP);
        if (!value && this.filter !== ShadowGenerator.FILTER_CLOSEEXPONENTIALSHADOWMAP) {
            return;
        }
        this.filter = value ? filter : ShadowGenerator.FILTER_NONE;
    }
    /**
     * Gets if the current filter is set to filtered "close ESM" (using the inverse of the
     * exponential to prevent steep falloff artifacts).
     */ get useBlurCloseExponentialShadowMap() {
        return this.filter === ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP;
    }
    /**
     * Sets the current filter to filtered "close ESM" (using the inverse of the
     * exponential to prevent steep falloff artifacts).
     */ set useBlurCloseExponentialShadowMap(value) {
        const filter = this._validateFilter(ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP);
        if (!value && this.filter !== ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP) {
            return;
        }
        this.filter = value ? filter : ShadowGenerator.FILTER_NONE;
    }
    /**
     * Gets if the current filter is set to "PCF" (percentage closer filtering).
     */ get usePercentageCloserFiltering() {
        return this.filter === ShadowGenerator.FILTER_PCF;
    }
    /**
     * Sets the current filter to "PCF" (percentage closer filtering).
     */ set usePercentageCloserFiltering(value) {
        const filter = this._validateFilter(ShadowGenerator.FILTER_PCF);
        if (!value && this.filter !== ShadowGenerator.FILTER_PCF) {
            return;
        }
        this.filter = value ? filter : ShadowGenerator.FILTER_NONE;
    }
    /**
     * Gets the PCF or PCSS Quality.
     * Only valid if usePercentageCloserFiltering or usePercentageCloserFiltering is true.
     */ get filteringQuality() {
        return this._filteringQuality;
    }
    /**
     * Sets the PCF or PCSS Quality.
     * Only valid if usePercentageCloserFiltering or usePercentageCloserFiltering is true.
     */ set filteringQuality(filteringQuality) {
        if (this._filteringQuality === filteringQuality) {
            return;
        }
        this._filteringQuality = filteringQuality;
        this._disposeBlurPostProcesses();
        this._applyFilterValues();
        this._light._markMeshesAsLightDirty();
    }
    /**
     * Gets if the current filter is set to "PCSS" (contact hardening).
     */ get useContactHardeningShadow() {
        return this.filter === ShadowGenerator.FILTER_PCSS;
    }
    /**
     * Sets the current filter to "PCSS" (contact hardening).
     */ set useContactHardeningShadow(value) {
        const filter = this._validateFilter(ShadowGenerator.FILTER_PCSS);
        if (!value && this.filter !== ShadowGenerator.FILTER_PCSS) {
            return;
        }
        this.filter = value ? filter : ShadowGenerator.FILTER_NONE;
    }
    /**
     * Gets the Light Size (in shadow map uv unit) used in PCSS to determine the blocker search area and the penumbra size.
     * Using a ratio helps keeping shape stability independently of the map size.
     *
     * It does not account for the light projection as it was having too much
     * instability during the light setup or during light position changes.
     *
     * Only valid if useContactHardeningShadow is true.
     */ get contactHardeningLightSizeUVRatio() {
        return this._contactHardeningLightSizeUVRatio;
    }
    /**
     * Sets the Light Size (in shadow map uv unit) used in PCSS to determine the blocker search area and the penumbra size.
     * Using a ratio helps keeping shape stability independently of the map size.
     *
     * It does not account for the light projection as it was having too much
     * instability during the light setup or during light position changes.
     *
     * Only valid if useContactHardeningShadow is true.
     */ set contactHardeningLightSizeUVRatio(contactHardeningLightSizeUVRatio) {
        this._contactHardeningLightSizeUVRatio = contactHardeningLightSizeUVRatio;
    }
    /** Gets or sets the actual darkness of a shadow */ get darkness() {
        return this._darkness;
    }
    set darkness(value) {
        this.setDarkness(value);
    }
    /**
     * Returns the darkness value (float). This can only decrease the actual darkness of a shadow.
     * 0 means strongest and 1 would means no shadow.
     * @returns the darkness.
     */ getDarkness() {
        return this._darkness;
    }
    /**
     * Sets the darkness value (float). This can only decrease the actual darkness of a shadow.
     * @param darkness The darkness value 0 means strongest and 1 would means no shadow.
     * @returns the shadow generator allowing fluent coding.
     */ setDarkness(darkness) {
        if (darkness >= 1.0) {
            this._darkness = 1.0;
        } else if (darkness <= 0.0) {
            this._darkness = 0.0;
        } else {
            this._darkness = darkness;
        }
        return this;
    }
    /** Gets or sets the ability to have transparent shadow */ get transparencyShadow() {
        return this._transparencyShadow;
    }
    set transparencyShadow(value) {
        this.setTransparencyShadow(value);
    }
    /**
     * Sets the ability to have transparent shadow (boolean).
     * @param transparent True if transparent else False
     * @returns the shadow generator allowing fluent coding
     */ setTransparencyShadow(transparent) {
        this._transparencyShadow = transparent;
        return this;
    }
    /**
     * Gets the main RTT containing the shadow map (usually storing depth from the light point of view).
     * @returns The render target texture if present otherwise, null
     */ getShadowMap() {
        return this._shadowMap;
    }
    /**
     * Gets the RTT used during rendering (can be a blurred version of the shadow map or the shadow map itself).
     * @returns The render target texture if the shadow map is present otherwise, null
     */ getShadowMapForRendering() {
        if (this._shadowMap2) {
            return this._shadowMap2;
        }
        return this._shadowMap;
    }
    /**
     * Gets the class name of that object
     * @returns "ShadowGenerator"
     */ getClassName() {
        return ShadowGenerator.CLASSNAME;
    }
    /**
     * Helper function to add a mesh and its descendants to the list of shadow casters.
     * @param mesh Mesh to add
     * @param includeDescendants boolean indicating if the descendants should be added. Default to true
     * @returns the Shadow Generator itself
     */ addShadowCaster(mesh, includeDescendants = true) {
        if (!this._shadowMap) {
            return this;
        }
        if (!this._shadowMap.renderList) {
            this._shadowMap.renderList = [];
        }
        if (this._shadowMap.renderList.indexOf(mesh) === -1) {
            this._shadowMap.renderList.push(mesh);
        }
        if (includeDescendants) {
            for (const childMesh of mesh.getChildMeshes()){
                if (this._shadowMap.renderList.indexOf(childMesh) === -1) {
                    this._shadowMap.renderList.push(childMesh);
                }
            }
        }
        return this;
    }
    /**
     * Helper function to remove a mesh and its descendants from the list of shadow casters
     * @param mesh Mesh to remove
     * @param includeDescendants boolean indicating if the descendants should be removed. Default to true
     * @returns the Shadow Generator itself
     */ removeShadowCaster(mesh, includeDescendants = true) {
        if (!this._shadowMap || !this._shadowMap.renderList) {
            return this;
        }
        const index = this._shadowMap.renderList.indexOf(mesh);
        if (index !== -1) {
            this._shadowMap.renderList.splice(index, 1);
        }
        if (includeDescendants) {
            for (const child of mesh.getChildren()){
                this.removeShadowCaster(child);
            }
        }
        return this;
    }
    /**
     * Returns the associated light object.
     * @returns the light generating the shadow
     */ getLight() {
        return this._light;
    }
    /**
     * Gets the shader language used in this generator.
     */ get shaderLanguage() {
        return this._shaderLanguage;
    }
    _getCamera() {
        return this._camera ?? this._scene.activeCamera;
    }
    /**
     * Gets or sets the size of the texture what stores the shadows
     */ get mapSize() {
        return this._mapSize;
    }
    set mapSize(size) {
        this._mapSize = size;
        this._light._markMeshesAsLightDirty();
        this.recreateShadowMap();
    }
    /**
     * Creates a ShadowGenerator object.
     * A ShadowGenerator is the required tool to use the shadows.
     * Each light casting shadows needs to use its own ShadowGenerator.
     * Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows
     * @param mapSize The size of the texture what stores the shadows. Example : 1024.
     * @param light The light object generating the shadows.
     * @param usefullFloatFirst By default the generator will try to use half float textures but if you need precision (for self shadowing for instance), you can use this option to enforce full float texture.
     * @param camera Camera associated with this shadow generator (default: null). If null, takes the scene active camera at the time we need to access it
     * @param useRedTextureType Forces the generator to use a Red instead of a RGBA type for the shadow map texture format (default: false)
     * @param forceGLSL defines a boolean indicating if the shader must be compiled in GLSL even if we are using WebGPU
     */ constructor(mapSize, light, usefullFloatFirst, camera, useRedTextureType, forceGLSL = false){
        /**
         * Observable triggered before the shadow is rendered. Can be used to update internal effect state
         */ this.onBeforeShadowMapRenderObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered after the shadow is rendered. Can be used to restore internal effect state
         */ this.onAfterShadowMapRenderObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered before a mesh is rendered in the shadow map.
         * Can be used to update internal effect state (that you can get from the onBeforeShadowMapRenderObservable)
         */ this.onBeforeShadowMapRenderMeshObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable triggered after a mesh is rendered in the shadow map.
         * Can be used to update internal effect state (that you can get from the onAfterShadowMapRenderObservable)
         */ this.onAfterShadowMapRenderMeshObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Specifies if the `ShadowGenerator` should be serialized, `true` to skip serialization.
         * Note a `ShadowGenerator` will not be serialized if its light has `doNotSerialize=true`
         */ this.doNotSerialize = false;
        this._bias = 0.00005;
        this._normalBias = 0;
        this._blurBoxOffset = 1;
        this._blurScale = 2;
        this._blurKernel = 1;
        this._useKernelBlur = false;
        this._filter = ShadowGenerator.FILTER_NONE;
        this._filteringQuality = ShadowGenerator.QUALITY_HIGH;
        this._contactHardeningLightSizeUVRatio = 0.1;
        this._darkness = 0;
        this._transparencyShadow = false;
        /**
         * Enables or disables shadows with varying strength based on the transparency
         * When it is enabled, the strength of the shadow is taken equal to mesh.visibility
         * If you enabled an alpha texture on your material, the alpha value red from the texture is also combined to compute the strength:
         *          mesh.visibility * alphaTexture.a
         * The texture used is the diffuse by default, but it can be set to the opacity by setting useOpacityTextureForTransparentShadow
         * Note that by definition transparencyShadow must be set to true for enableSoftTransparentShadow to work!
         */ this.enableSoftTransparentShadow = false;
        /**
         * If this is true, use the opacity texture's alpha channel for transparent shadows instead of the diffuse one
         */ this.useOpacityTextureForTransparentShadow = false;
        /**
         * Controls the extent to which the shadows fade out at the edge of the frustum
         */ this.frustumEdgeFalloff = 0;
        /** Shader language used by the generator */ this._shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
        /**
         * If true the shadow map is generated by rendering the back face of the mesh instead of the front face.
         * This can help with self-shadowing as the geometry making up the back of objects is slightly offset.
         * It might on the other hand introduce peter panning.
         */ this.forceBackFacesOnly = false;
        this._lightDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._viewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._projectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._transformMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._cachedPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._cachedDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._currentFaceIndex = 0;
        this._currentFaceIndexCache = 0;
        this._defaultTextureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._shadersLoaded = false;
        this._mapSize = mapSize;
        this._light = light;
        this._scene = light.getScene();
        this._camera = camera ?? null;
        this._useRedTextureType = !!useRedTextureType;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(forceGLSL);
        let shadowGenerators = light._shadowGenerators;
        if (!shadowGenerators) {
            shadowGenerators = light._shadowGenerators = new Map();
        }
        shadowGenerators.set(this._camera, this);
        this.id = light.id;
        this._useUBO = this._scene.getEngine().supportsUniformBuffers;
        if (this._useUBO) {
            this._sceneUBOs = [];
            this._sceneUBOs.push(this._scene.createSceneUniformBuffer(`Scene for Shadow Generator (light "${this._light.name}")`));
        }
        ShadowGenerator._SceneComponentInitialization(this._scene);
        // Texture type fallback from float to int if not supported.
        const caps = this._scene.getEngine().getCaps();
        if (!usefullFloatFirst) {
            if (caps.textureHalfFloatRender && caps.textureHalfFloatLinearFiltering) {
                this._textureType = 2;
            } else if (caps.textureFloatRender && caps.textureFloatLinearFiltering) {
                this._textureType = 1;
            } else {
                this._textureType = 0;
            }
        } else {
            if (caps.textureFloatRender && caps.textureFloatLinearFiltering) {
                this._textureType = 1;
            } else if (caps.textureHalfFloatRender && caps.textureHalfFloatLinearFiltering) {
                this._textureType = 2;
            } else {
                this._textureType = 0;
            }
        }
        this._initializeGenerator();
        this._applyFilterValues();
    }
    _initializeGenerator() {
        this._light._markMeshesAsLightDirty();
        this._initializeShadowMap();
    }
    _createTargetRenderTexture() {
        const engine = this._scene.getEngine();
        this._shadowMap?.dispose();
        if (engine._features.supportDepthStencilTexture) {
            this._shadowMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetTexture"](this._light.name + "_shadowMap", this._mapSize, this._scene, false, true, this._textureType, this._light.needCube(), undefined, false, false, undefined, this._useRedTextureType ? 6 : 5);
            this._shadowMap.createDepthStencilTexture(engine.useReverseDepthBuffer ? 516 : 513, true, undefined, undefined, undefined, `DepthStencilForShadowGenerator-${this._light.name}`);
        } else {
            this._shadowMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetTexture"](this._light.name + "_shadowMap", this._mapSize, this._scene, false, true, this._textureType, this._light.needCube());
        }
        this._shadowMap.noPrePassRenderer = true;
    }
    _initializeShadowMap() {
        this._createTargetRenderTexture();
        if (this._shadowMap === null) {
            return;
        }
        this._shadowMap.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._shadowMap.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._shadowMap.anisotropicFilteringLevel = 1;
        this._shadowMap.updateSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE);
        this._shadowMap.renderParticles = false;
        this._shadowMap.ignoreCameraViewport = true;
        if (this._storedUniqueId) {
            this._shadowMap.uniqueId = this._storedUniqueId;
        }
        // Custom render function.
        this._shadowMap.customRenderFunction = (opaqueSubMeshes, alphaTestSubMeshes, transparentSubMeshes, depthOnlySubMeshes)=>this._renderForShadowMap(opaqueSubMeshes, alphaTestSubMeshes, transparentSubMeshes, depthOnlySubMeshes);
        // When preWarm is false, forces the mesh is ready function to true as we are double checking it
        // in the custom render function. Also it prevents side effects and useless
        // shader variations in DEPTHPREPASS mode.
        this._shadowMap.customIsReadyFunction = (mesh, _refreshRate, preWarm)=>{
            if (!preWarm || !mesh.subMeshes) {
                return true;
            }
            let isReady = true;
            for (const subMesh of mesh.subMeshes){
                const renderingMesh = subMesh.getRenderingMesh();
                const scene = this._scene;
                const engine = scene.getEngine();
                const material = subMesh.getMaterial();
                if (!material || subMesh.verticesCount === 0 || this.customAllowRendering && !this.customAllowRendering(subMesh)) {
                    continue;
                }
                const batch = renderingMesh._getInstancesRenderList(subMesh._id, !!subMesh.getReplacementMesh());
                if (batch.mustReturn) {
                    continue;
                }
                const hardwareInstancedRendering = engine.getCaps().instancedArrays && (batch.visibleInstances[subMesh._id] !== null && batch.visibleInstances[subMesh._id] !== undefined || renderingMesh.hasThinInstances);
                const isTransparent = material.needAlphaBlendingForMesh(renderingMesh);
                isReady = this.isReady(subMesh, hardwareInstancedRendering, isTransparent) && isReady;
            }
            return isReady;
        };
        const engine = this._scene.getEngine();
        this._shadowMap.onBeforeBindObservable.add(()=>{
            this._currentSceneUBO = this._scene.getSceneUniformBuffer();
            engine._debugPushGroup?.(`shadow map generation for pass id ${engine.currentRenderPassId}`, 1);
        });
        // Record Face Index before render.
        this._shadowMap.onBeforeRenderObservable.add((faceIndex)=>{
            if (this._sceneUBOs) {
                this._scene.setSceneUniformBuffer(this._sceneUBOs[0]);
            }
            this._currentFaceIndex = faceIndex;
            if (this._filter === ShadowGenerator.FILTER_PCF) {
                engine.setColorWrite(false);
            }
            this.getTransformMatrix(); // generate the view/projection matrix
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingOriginCurrentScene"].eyeAtCamera = false;
            this._scene.setTransformMatrix(this._viewMatrix, this._projectionMatrix);
            if (this._useUBO) {
                this._scene.getSceneUniformBuffer().unbindEffect();
                this._scene.finalizeSceneUbo();
            }
        });
        // Blur if required after render.
        this._shadowMap.onAfterUnbindObservable.add(()=>{
            if (this._sceneUBOs) {
                this._scene.setSceneUniformBuffer(this._currentSceneUBO);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingOriginCurrentScene"].eyeAtCamera = true;
            this._scene.updateTransformMatrix(); // restore the view/projection matrices of the active camera
            if (this._filter === ShadowGenerator.FILTER_PCF) {
                engine.setColorWrite(true);
            }
            if (!this.useBlurExponentialShadowMap && !this.useBlurCloseExponentialShadowMap) {
                engine._debugPopGroup?.(1);
                return;
            }
            const shadowMap = this.getShadowMapForRendering();
            if (shadowMap) {
                this._scene.postProcessManager.directRender(this._blurPostProcesses, shadowMap.renderTarget, true);
                engine.unBindFramebuffer(shadowMap.renderTarget, true);
            }
            engine._debugPopGroup?.(1);
        });
        // Clear according to the chosen filter.
        const clearZero = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        const clearOne = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1.0, 1.0, 1.0, 1.0);
        this._shadowMap.onClearObservable.add((engine)=>{
            if (this._filter === ShadowGenerator.FILTER_PCF) {
                engine.clear(clearOne, false, true, false);
            } else if (this.useExponentialShadowMap || this.useBlurExponentialShadowMap) {
                engine.clear(clearZero, true, true, false);
            } else {
                engine.clear(clearOne, true, true, false);
            }
        });
        // Recreate on resize.
        this._shadowMap.onResizeObservable.add((rtt)=>{
            this._storedUniqueId = this._shadowMap.uniqueId;
            this._mapSize = rtt.getRenderSize();
            this._light._markMeshesAsLightDirty();
            this.recreateShadowMap();
        });
        // Ensures rendering groupids do not erase the depth buffer
        // or we would lose the shadows information.
        for(let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$renderingManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderingManager"].MIN_RENDERINGGROUPS; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$renderingManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderingManager"].MAX_RENDERINGGROUPS; i++){
            this._shadowMap.setRenderingAutoClearDepthStencil(i, false);
        }
    }
    async _initShaderSourceAsync(forceGLSL = false) {
        const engine = this._scene.getEngine();
        if (engine.isWebGPU && !forceGLSL && !ShadowGenerator.ForceGLSL) {
            this._shaderLanguage = 1 /* ShaderLanguage.WGSL */ ;
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/shadowMap.fragment.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/shadowMap.vertex.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/depthBoxBlur.fragment.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragmentSoftTransparentShadow.js [app-ssr] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/shadowMap.fragment.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/shadowMap.vertex.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/depthBoxBlur.fragment.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragmentSoftTransparentShadow.js [app-ssr] (ecmascript, async loader)")
            ]);
        }
        this._shadersLoaded = true;
    }
    _initializeBlurRTTAndPostProcesses() {
        const engine = this._scene.getEngine();
        const targetSize = this._mapSize / this.blurScale;
        if (!this.useKernelBlur || this.blurScale !== 1.0) {
            this._shadowMap2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetTexture"](this._light.name + "_shadowMap2", targetSize, this._scene, false, true, this._textureType, undefined, undefined, false);
            this._shadowMap2.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
            this._shadowMap2.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
            this._shadowMap2.updateSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE);
        }
        if (this.useKernelBlur) {
            this._kernelBlurXPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlurPostProcess"](this._light.name + "KernelBlurX", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 0), this.blurKernel, 1.0, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE, engine, false, this._textureType);
            this._kernelBlurXPostprocess.width = targetSize;
            this._kernelBlurXPostprocess.height = targetSize;
            this._kernelBlurXPostprocess.externalTextureSamplerBinding = true;
            this._kernelBlurXPostprocess.onApplyObservable.add((effect)=>{
                effect.setTexture("textureSampler", this._shadowMap);
            });
            this._kernelBlurYPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlurPostProcess"](this._light.name + "KernelBlurY", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 1), this.blurKernel, 1.0, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE, engine, false, this._textureType);
            this._kernelBlurXPostprocess.autoClear = false;
            this._kernelBlurYPostprocess.autoClear = false;
            if (this._textureType === 0) {
                this._kernelBlurXPostprocess.packedFloat = true;
                this._kernelBlurYPostprocess.packedFloat = true;
            }
            this._blurPostProcesses = [
                this._kernelBlurXPostprocess,
                this._kernelBlurYPostprocess
            ];
        } else {
            this._boxBlurPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$postProcess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PostProcess"](this._light.name + "DepthBoxBlur", "depthBoxBlur", [
                "screenSize",
                "boxOffset"
            ], [], 1.0, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE, engine, false, "#define OFFSET " + this._blurBoxOffset, this._textureType, undefined, undefined, undefined, undefined, this._shaderLanguage);
            this._boxBlurPostprocess.externalTextureSamplerBinding = true;
            this._boxBlurPostprocess.onApplyObservable.add((effect)=>{
                effect.setFloat2("screenSize", targetSize, targetSize);
                effect.setTexture("textureSampler", this._shadowMap);
            });
            this._boxBlurPostprocess.autoClear = false;
            this._blurPostProcesses = [
                this._boxBlurPostprocess
            ];
        }
    }
    _renderForShadowMap(opaqueSubMeshes, alphaTestSubMeshes, transparentSubMeshes, depthOnlySubMeshes) {
        let index;
        if (depthOnlySubMeshes.length) {
            for(index = 0; index < depthOnlySubMeshes.length; index++){
                this._renderSubMeshForShadowMap(depthOnlySubMeshes.data[index]);
            }
        }
        for(index = 0; index < opaqueSubMeshes.length; index++){
            this._renderSubMeshForShadowMap(opaqueSubMeshes.data[index]);
        }
        for(index = 0; index < alphaTestSubMeshes.length; index++){
            this._renderSubMeshForShadowMap(alphaTestSubMeshes.data[index]);
        }
        if (this._transparencyShadow) {
            for(index = 0; index < transparentSubMeshes.length; index++){
                this._renderSubMeshForShadowMap(transparentSubMeshes.data[index], true);
            }
        } else {
            for(index = 0; index < transparentSubMeshes.length; index++){
                transparentSubMeshes.data[index].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate = false;
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _bindCustomEffectForRenderSubMeshForShadowMap(subMesh, effect, mesh) {
        effect.setMatrix("viewProjection", this.getTransformMatrix());
    }
    _renderSubMeshForShadowMap(subMesh, isTransparent = false) {
        const renderingMesh = subMesh.getRenderingMesh();
        const effectiveMesh = subMesh.getEffectiveMesh();
        const scene = this._scene;
        const engine = scene.getEngine();
        const material = subMesh.getMaterial();
        effectiveMesh._internalAbstractMeshDataInfo._isActiveIntermediate = false;
        if (!material || subMesh.verticesCount === 0 || subMesh._renderId === scene.getRenderId()) {
            return;
        }
        // Culling
        // Note:
        // In rhs mode, we assume that meshes will be rendered in right-handed space (i.e. with an RHS camera), so the default value of material.sideOrientation is updated accordingly (see material constructor).
        // However, when generating a shadow map, we render from the point of view of the light, whose view/projection matrices are always in lhs mode.
        // We therefore need to "undo" the sideOrientation inversion that was previously performed when constructing the material.
        const useRHS = scene.useRightHandedSystem;
        const detNeg = effectiveMesh._getWorldMatrixDeterminant() < 0;
        let sideOrientation = material._getEffectiveOrientation(renderingMesh);
        if (detNeg && !useRHS || !detNeg && useRHS) {
            sideOrientation = sideOrientation === 0 ? 1 : 0;
        }
        const reverseSideOrientation = sideOrientation === 0;
        engine.setState(material.backFaceCulling, undefined, undefined, reverseSideOrientation, material.cullBackFaces);
        // Managing instances
        const batch = renderingMesh._getInstancesRenderList(subMesh._id, !!subMesh.getReplacementMesh());
        if (batch.mustReturn) {
            return;
        }
        const hardwareInstancedRendering = engine.getCaps().instancedArrays && (batch.visibleInstances[subMesh._id] !== null && batch.visibleInstances[subMesh._id] !== undefined || renderingMesh.hasThinInstances);
        if (this.customAllowRendering && !this.customAllowRendering(subMesh)) {
            return;
        }
        if (this.isReady(subMesh, hardwareInstancedRendering, isTransparent)) {
            subMesh._renderId = scene.getRenderId();
            const shadowDepthWrapper = material.shadowDepthWrapper;
            const drawWrapper = shadowDepthWrapper?.getEffect(subMesh, this, engine.currentRenderPassId) ?? subMesh._getDrawWrapper();
            const effect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrawWrapper"].GetEffect(drawWrapper);
            engine.enableEffect(drawWrapper);
            if (!hardwareInstancedRendering) {
                renderingMesh._bind(subMesh, effect, material.fillMode);
            }
            this.getTransformMatrix(); // make sure _cachedDirection et _cachedPosition are up to date
            effect.setFloat3("biasAndScaleSM", this.bias, this.normalBias, this.depthScale);
            if (this.getLight().getTypeID() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_DIRECTIONALLIGHT) {
                effect.setVector3("lightDataSM", this._cachedDirection);
            } else {
                effect.setVector3("lightDataSM", this._cachedPosition.subtractToRef(this._scene.floatingOriginOffset, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]));
            }
            const camera = this._getCamera();
            effect.setFloat2("depthValuesSM", this.getLight().getDepthMinZ(camera), this.getLight().getDepthMinZ(camera) + this.getLight().getDepthMaxZ(camera));
            if (isTransparent && this.enableSoftTransparentShadow) {
                effect.setFloat2("softTransparentShadowSM", effectiveMesh.visibility * material.alpha, this._opacityTexture?.getAlphaFromRGB ? 1 : 0);
            }
            if (shadowDepthWrapper) {
                subMesh._setMainDrawWrapperOverride(drawWrapper);
                if (shadowDepthWrapper.standalone) {
                    shadowDepthWrapper.baseMaterial.bindForSubMesh(effectiveMesh.getWorldMatrix(), renderingMesh, subMesh);
                } else {
                    material.bindForSubMesh(effectiveMesh.getWorldMatrix(), renderingMesh, subMesh);
                }
                subMesh._setMainDrawWrapperOverride(null);
            } else {
                // Alpha test
                if (this._opacityTexture) {
                    effect.setTexture("diffuseSampler", this._opacityTexture);
                    effect.setMatrix("diffuseMatrix", this._opacityTexture.getTextureMatrix() || this._defaultTextureMatrix);
                }
                // Bones
                if (renderingMesh.useBones && renderingMesh.computeBonesUsingShaders && renderingMesh.skeleton) {
                    const skeleton = renderingMesh.skeleton;
                    if (skeleton.isUsingTextureForMatrices) {
                        const boneTexture = skeleton.getTransformMatrixTexture(renderingMesh);
                        if (!boneTexture) {
                            return;
                        }
                        effect.setTexture("boneSampler", boneTexture);
                        effect.setFloat("boneTextureWidth", 4.0 * (skeleton.bones.length + 1));
                    } else {
                        effect.setMatrices("mBones", skeleton.getTransformMatrices(renderingMesh));
                    }
                }
                // Morph targets
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"])(renderingMesh, effect);
                if (renderingMesh.morphTargetManager && renderingMesh.morphTargetManager.isUsingTextureForTargets) {
                    renderingMesh.morphTargetManager._bind(effect);
                }
                // Baked vertex animations
                const bvaManager = subMesh.getMesh().bakedVertexAnimationManager;
                if (bvaManager && bvaManager.isEnabled) {
                    bvaManager.bind(effect, hardwareInstancedRendering);
                }
                // Clip planes
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindClipPlane"])(effect, material, scene);
            }
            if (!this._useUBO && !shadowDepthWrapper) {
                this._bindCustomEffectForRenderSubMeshForShadowMap(subMesh, effect, effectiveMesh);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindSceneUniformBuffer"])(effect, this._scene.getSceneUniformBuffer());
            this._scene.getSceneUniformBuffer().bindUniformBuffer();
            const world = effectiveMesh.getWorldMatrix();
            // In the non hardware instanced mode, the Mesh ubo update is done by the callback passed to renderingMesh._processRendering (see below)
            if (hardwareInstancedRendering) {
                effectiveMesh.getMeshUniformBuffer().bindToEffect(effect, "Mesh");
                effectiveMesh.transferToEffect(world);
            }
            if (this.forceBackFacesOnly) {
                engine.setState(true, 0, false, true, material.cullBackFaces);
            }
            // Observables
            this.onBeforeShadowMapRenderMeshObservable.notifyObservers(renderingMesh);
            this.onBeforeShadowMapRenderObservable.notifyObservers(effect);
            // Draw
            renderingMesh._processRendering(effectiveMesh, subMesh, effect, material.fillMode, batch, hardwareInstancedRendering, (isInstance, worldOverride)=>{
                if (effectiveMesh !== renderingMesh && !isInstance) {
                    renderingMesh.getMeshUniformBuffer().bindToEffect(effect, "Mesh");
                    renderingMesh.transferToEffect(worldOverride);
                } else {
                    effectiveMesh.getMeshUniformBuffer().bindToEffect(effect, "Mesh");
                    effectiveMesh.transferToEffect(isInstance ? worldOverride : world);
                }
            });
            if (this.forceBackFacesOnly) {
                engine.setState(true, 0, false, false, material.cullBackFaces);
            }
            // Observables
            this.onAfterShadowMapRenderObservable.notifyObservers(effect);
            this.onAfterShadowMapRenderMeshObservable.notifyObservers(renderingMesh);
        } else {
            // Need to reset refresh rate of the shadowMap
            if (this._shadowMap) {
                this._shadowMap.resetRefreshCounter();
            }
        }
    }
    _applyFilterValues() {
        if (!this._shadowMap) {
            return;
        }
        if (this.filter === ShadowGenerator.FILTER_NONE || this.filter === ShadowGenerator.FILTER_PCSS) {
            this._shadowMap.updateSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].NEAREST_SAMPLINGMODE);
        } else {
            this._shadowMap.updateSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE);
        }
    }
    /**
     * Forces all the attached effect to compile to enable rendering only once ready vs. lazily compiling effects.
     * @param onCompiled Callback triggered at the and of the effects compilation
     * @param options Sets of optional options forcing the compilation with different modes
     */ forceCompilation(onCompiled, options) {
        const localOptions = {
            useInstances: false,
            ...options
        };
        const shadowMap = this.getShadowMap();
        if (!shadowMap) {
            if (onCompiled) {
                onCompiled(this);
            }
            return;
        }
        const renderList = shadowMap.renderList;
        if (!renderList) {
            if (onCompiled) {
                onCompiled(this);
            }
            return;
        }
        const subMeshes = [];
        for (const mesh of renderList){
            subMeshes.push(...mesh.subMeshes);
        }
        if (subMeshes.length === 0) {
            if (onCompiled) {
                onCompiled(this);
            }
            return;
        }
        let currentIndex = 0;
        const checkReady = ()=>{
            if (!this._scene || !this._scene.getEngine()) {
                return;
            }
            while(this.isReady(subMeshes[currentIndex], localOptions.useInstances, subMeshes[currentIndex].getMaterial()?.needAlphaBlendingForMesh(subMeshes[currentIndex].getMesh()) ?? false)){
                currentIndex++;
                if (currentIndex >= subMeshes.length) {
                    if (onCompiled) {
                        onCompiled(this);
                    }
                    return;
                }
            }
            setTimeout(checkReady, 16);
        };
        checkReady();
    }
    /**
     * Forces all the attached effect to compile to enable rendering only once ready vs. lazily compiling effects.
     * @param options Sets of optional options forcing the compilation with different modes
     * @returns A promise that resolves when the compilation completes
     */ async forceCompilationAsync(options) {
        return await new Promise((resolve)=>{
            this.forceCompilation(()=>{
                resolve();
            }, options);
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _isReadyCustomDefines(defines, subMesh, useInstances) {}
    _prepareShadowDefines(subMesh, useInstances, defines, isTransparent) {
        defines.push("#define SM_LIGHTTYPE_" + this._light.getClassName().toUpperCase());
        defines.push("#define SM_FLOAT " + (this._textureType !== 0 ? "1" : "0"));
        defines.push("#define SM_ESM " + (this.useExponentialShadowMap || this.useBlurExponentialShadowMap ? "1" : "0"));
        defines.push("#define SM_DEPTHTEXTURE " + (this.usePercentageCloserFiltering || this.useContactHardeningShadow ? "1" : "0"));
        const mesh = subMesh.getMesh();
        // Normal bias.
        defines.push("#define SM_NORMALBIAS " + (this.normalBias && mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind) ? "1" : "0"));
        defines.push("#define SM_DIRECTIONINLIGHTDATA " + (this.getLight().getTypeID() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_DIRECTIONALLIGHT ? "1" : "0"));
        // Point light
        defines.push("#define SM_USEDISTANCE " + (this._light.needCube() ? "1" : "0"));
        // Soft transparent shadows
        defines.push("#define SM_SOFTTRANSPARENTSHADOW " + (this.enableSoftTransparentShadow && isTransparent ? "1" : "0"));
        this._isReadyCustomDefines(defines, subMesh, useInstances);
        return defines;
    }
    /**
     * Determine whether the shadow generator is ready or not (mainly all effects and related post processes needs to be ready).
     * @param subMesh The submesh we want to render in the shadow map
     * @param useInstances Defines whether will draw in the map using instances
     * @param isTransparent Indicates that isReady is called for a transparent subMesh
     * @returns true if ready otherwise, false
     */ isReady(subMesh, useInstances, isTransparent) {
        if (!this._shadersLoaded) {
            return false;
        }
        const material = subMesh.getMaterial(), shadowDepthWrapper = material?.shadowDepthWrapper;
        this._opacityTexture = null;
        if (!material) {
            return false;
        }
        const defines = [];
        this._prepareShadowDefines(subMesh, useInstances, defines, isTransparent);
        if (shadowDepthWrapper) {
            if (!shadowDepthWrapper.isReadyForSubMesh(subMesh, defines, this, useInstances, this._scene.getEngine().currentRenderPassId)) {
                return false;
            }
        } else {
            const subMeshEffect = subMesh._getDrawWrapper(undefined, true);
            let effect = subMeshEffect.effect;
            let cachedDefines = subMeshEffect.defines;
            const attribs = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
            ];
            const mesh = subMesh.getMesh();
            let useNormal = false;
            let uv1 = false;
            let uv2 = false;
            const color = false;
            // Normal bias.
            if (this.normalBias && mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind)) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
                defines.push("#define NORMAL");
                useNormal = true;
                if (mesh.nonUniformScaling) {
                    defines.push("#define NONUNIFORMSCALING");
                }
            }
            // Alpha test
            const needAlphaTesting = material.needAlphaTestingForMesh(mesh);
            if (needAlphaTesting || material.needAlphaBlendingForMesh(mesh)) {
                if (this.useOpacityTextureForTransparentShadow) {
                    this._opacityTexture = material.opacityTexture;
                } else {
                    this._opacityTexture = material.getAlphaTestTexture();
                }
                if (this._opacityTexture) {
                    if (!this._opacityTexture.isReady()) {
                        return false;
                    }
                    const alphaCutOff = material.alphaCutOff ?? ShadowGenerator.DEFAULT_ALPHA_CUTOFF;
                    defines.push("#define ALPHATEXTURE");
                    if (needAlphaTesting) {
                        defines.push(`#define ALPHATESTVALUE ${alphaCutOff}${alphaCutOff % 1 === 0 ? "." : ""}`);
                    }
                    if (mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind)) {
                        attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
                        defines.push("#define UV1");
                        uv1 = true;
                    }
                    if (mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UV2Kind)) {
                        if (this._opacityTexture.coordinatesIndex === 1) {
                            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UV2Kind);
                            defines.push("#define UV2");
                            uv2 = true;
                        }
                    }
                }
            }
            // Bones
            const fallbacks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EffectFallbacks"]();
            if (mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind);
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind);
                if (mesh.numBoneInfluencers > 4) {
                    attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesExtraKind);
                    attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsExtraKind);
                }
                const skeleton = mesh.skeleton;
                defines.push("#define NUM_BONE_INFLUENCERS " + mesh.numBoneInfluencers);
                if (mesh.numBoneInfluencers > 0) {
                    fallbacks.addCPUSkinningFallback(0, mesh);
                }
                if (skeleton.isUsingTextureForMatrices) {
                    defines.push("#define BONETEXTURE");
                } else {
                    defines.push("#define BonesPerMesh " + (skeleton.bones.length + 1));
                }
            } else {
                defines.push("#define NUM_BONE_INFLUENCERS 0");
            }
            // Morph targets
            const numMorphInfluencers = mesh.morphTargetManager ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesAndAttributesForMorphTargets"])(mesh.morphTargetManager, defines, attribs, mesh, true, useNormal, false, uv1, uv2, color // useColorMorph
            ) : 0;
            // ClipPlanes
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrepareStringDefinesForClipPlanes"])(material, this._scene, defines);
            // Instances
            if (useInstances) {
                defines.push("#define INSTANCES");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushAttributesForInstances"])(attribs);
                if (subMesh.getRenderingMesh().hasThinInstances) {
                    defines.push("#define THIN_INSTANCES");
                }
            }
            if (this.customShaderOptions) {
                if (this.customShaderOptions.defines) {
                    for (const define of this.customShaderOptions.defines){
                        if (defines.indexOf(define) === -1) {
                            defines.push(define);
                        }
                    }
                }
            }
            // Baked vertex animations
            const bvaManager = mesh.bakedVertexAnimationManager;
            if (bvaManager && bvaManager.isEnabled) {
                defines.push("#define BAKED_VERTEX_ANIMATION_TEXTURE");
                if (useInstances) {
                    attribs.push("bakedVertexAnimationSettingsInstanced");
                }
            }
            // Get correct effect
            const join = defines.join("\n");
            if (cachedDefines !== join) {
                cachedDefines = join;
                let shaderName = "shadowMap";
                const uniforms = [
                    "world",
                    "mBones",
                    "viewProjection",
                    "diffuseMatrix",
                    "lightDataSM",
                    "depthValuesSM",
                    "biasAndScaleSM",
                    "morphTargetInfluences",
                    "morphTargetCount",
                    "boneTextureWidth",
                    "softTransparentShadowSM",
                    "morphTargetTextureInfo",
                    "morphTargetTextureIndices",
                    "bakedVertexAnimationSettings",
                    "bakedVertexAnimationTextureSizeInverted",
                    "bakedVertexAnimationTime",
                    "bakedVertexAnimationTexture"
                ];
                const samplers = [
                    "diffuseSampler",
                    "boneSampler",
                    "morphTargets",
                    "bakedVertexAnimationTexture"
                ];
                const uniformBuffers = [
                    "Scene",
                    "Mesh"
                ];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddClipPlaneUniforms"])(uniforms);
                // Custom shader?
                if (this.customShaderOptions) {
                    shaderName = this.customShaderOptions.shaderName;
                    if (this.customShaderOptions.attributes) {
                        for (const attrib of this.customShaderOptions.attributes){
                            if (attribs.indexOf(attrib) === -1) {
                                attribs.push(attrib);
                            }
                        }
                    }
                    if (this.customShaderOptions.uniforms) {
                        for (const uniform of this.customShaderOptions.uniforms){
                            if (uniforms.indexOf(uniform) === -1) {
                                uniforms.push(uniform);
                            }
                        }
                    }
                    if (this.customShaderOptions.samplers) {
                        for (const sampler of this.customShaderOptions.samplers){
                            if (samplers.indexOf(sampler) === -1) {
                                samplers.push(sampler);
                            }
                        }
                    }
                }
                const engine = this._scene.getEngine();
                effect = engine.createEffect(shaderName, {
                    attributes: attribs,
                    uniformsNames: uniforms,
                    uniformBuffersNames: uniformBuffers,
                    samplers: samplers,
                    defines: join,
                    fallbacks: fallbacks,
                    onCompiled: null,
                    onError: null,
                    indexParameters: {
                        maxSimultaneousMorphTargets: numMorphInfluencers
                    },
                    shaderLanguage: this._shaderLanguage
                }, engine);
                subMeshEffect.setEffect(effect, cachedDefines);
            }
            if (!effect.isReady()) {
                return false;
            }
        }
        if (this.useBlurExponentialShadowMap || this.useBlurCloseExponentialShadowMap) {
            if (!this._blurPostProcesses || !this._blurPostProcesses.length) {
                this._initializeBlurRTTAndPostProcesses();
            }
        }
        if (this._kernelBlurXPostprocess && !this._kernelBlurXPostprocess.isReady()) {
            return false;
        }
        if (this._kernelBlurYPostprocess && !this._kernelBlurYPostprocess.isReady()) {
            return false;
        }
        if (this._boxBlurPostprocess && !this._boxBlurPostprocess.isReady()) {
            return false;
        }
        return true;
    }
    /**
     * Prepare all the defines in a material relying on a shadow map at the specified light index.
     * @param defines Defines of the material we want to update
     * @param lightIndex Index of the light in the enabled light list of the material
     */ prepareDefines(defines, lightIndex) {
        const scene = this._scene;
        const light = this._light;
        if (!scene.shadowsEnabled || !light.shadowEnabled) {
            return;
        }
        defines["SHADOW" + lightIndex] = true;
        if (this.useContactHardeningShadow) {
            defines["SHADOWPCSS" + lightIndex] = true;
            if (this._filteringQuality === ShadowGenerator.QUALITY_LOW) {
                defines["SHADOWLOWQUALITY" + lightIndex] = true;
            } else if (this._filteringQuality === ShadowGenerator.QUALITY_MEDIUM) {
                defines["SHADOWMEDIUMQUALITY" + lightIndex] = true;
            }
        // else default to high.
        } else if (this.usePercentageCloserFiltering) {
            defines["SHADOWPCF" + lightIndex] = true;
            if (this._filteringQuality === ShadowGenerator.QUALITY_LOW) {
                defines["SHADOWLOWQUALITY" + lightIndex] = true;
            } else if (this._filteringQuality === ShadowGenerator.QUALITY_MEDIUM) {
                defines["SHADOWMEDIUMQUALITY" + lightIndex] = true;
            }
        // else default to high.
        } else if (this.usePoissonSampling) {
            defines["SHADOWPOISSON" + lightIndex] = true;
        } else if (this.useExponentialShadowMap || this.useBlurExponentialShadowMap) {
            defines["SHADOWESM" + lightIndex] = true;
        } else if (this.useCloseExponentialShadowMap || this.useBlurCloseExponentialShadowMap) {
            defines["SHADOWCLOSEESM" + lightIndex] = true;
        }
        if (light.needCube()) {
            defines["SHADOWCUBE" + lightIndex] = true;
        }
    }
    /**
     * Binds the shadow related information inside of an effect (information like near, far, darkness...
     * defined in the generator but impacting the effect).
     * @param lightIndex Index of the light in the enabled light list of the material owning the effect
     * @param effect The effect we are binding the information for
     */ bindShadowLight(lightIndex, effect) {
        const light = this._light;
        const scene = this._scene;
        if (!scene.shadowsEnabled || !light.shadowEnabled) {
            return;
        }
        const camera = this._getCamera();
        const shadowMap = this.getShadowMap();
        if (!shadowMap) {
            return;
        }
        if (!light.needCube()) {
            const offset = scene.floatingOriginOffset;
            const transform = this.getTransformMatrix(); // ensures updated view/projection
            // Doing the check for floatingOrigin here to avoid unnecessary matrix operations when offset is 0
            const lightMatrix = scene.floatingOriginMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetFullOffsetViewProjectionToRef"])(offset, this._viewMatrix, this._projectionMatrix, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]) : transform;
            effect.setMatrix("lightMatrix" + lightIndex, lightMatrix);
        }
        // Only PCF uses depth stencil texture.
        const shadowMapForRendering = this.getShadowMapForRendering();
        if (this._filter === ShadowGenerator.FILTER_PCF) {
            effect.setDepthStencilTexture("shadowTexture" + lightIndex, shadowMapForRendering);
            light._uniformBuffer.updateFloat4("shadowsInfo", this.getDarkness(), shadowMap.getSize().width, 1 / shadowMap.getSize().width, this.frustumEdgeFalloff, lightIndex);
        } else if (this._filter === ShadowGenerator.FILTER_PCSS) {
            effect.setDepthStencilTexture("shadowTexture" + lightIndex, shadowMapForRendering);
            effect.setTexture("depthTexture" + lightIndex, shadowMapForRendering);
            light._uniformBuffer.updateFloat4("shadowsInfo", this.getDarkness(), 1 / shadowMap.getSize().width, this._contactHardeningLightSizeUVRatio * shadowMap.getSize().width, this.frustumEdgeFalloff, lightIndex);
        } else {
            effect.setTexture("shadowTexture" + lightIndex, shadowMapForRendering);
            light._uniformBuffer.updateFloat4("shadowsInfo", this.getDarkness(), this.blurScale / shadowMap.getSize().width, this.depthScale, this.frustumEdgeFalloff, lightIndex);
        }
        light._uniformBuffer.updateFloat2("depthValues", this.getLight().getDepthMinZ(camera), this.getLight().getDepthMinZ(camera) + this.getLight().getDepthMaxZ(camera), lightIndex);
    }
    /**
     * Gets the view matrix used to render the shadow map.
     */ get viewMatrix() {
        return this._viewMatrix;
    }
    /**
     * Gets the projection matrix used to render the shadow map.
     */ get projectionMatrix() {
        return this._projectionMatrix;
    }
    /**
     * Gets the transformation matrix used to project the meshes into the map from the light point of view.
     * (eq to shadow projection matrix * light transform matrix)
     * @returns The transform matrix used to create the shadow map
     */ getTransformMatrix() {
        const scene = this._scene;
        if (this._currentRenderId === scene.getRenderId() && this._currentFaceIndexCache === this._currentFaceIndex) {
            return this._transformMatrix;
        }
        this._currentRenderId = scene.getRenderId();
        this._currentFaceIndexCache = this._currentFaceIndex;
        let lightPosition = this._light.position;
        if (this._light.computeTransformedInformation()) {
            lightPosition = this._light.transformedPosition;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].NormalizeToRef(this._light.getShadowDirection(this._currentFaceIndex), this._lightDirection);
        if (Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._lightDirection, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up())) === 1.0) {
            this._lightDirection.z = 0.0000000000001; // Required to avoid perfectly perpendicular light
        }
        if (this._light.needProjectionMatrixCompute() || !this._cachedPosition || !this._cachedDirection || !lightPosition.equals(this._cachedPosition) || !this._lightDirection.equals(this._cachedDirection)) {
            this._cachedPosition.copyFrom(lightPosition);
            this._cachedDirection.copyFrom(this._lightDirection);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(lightPosition, lightPosition.add(this._lightDirection), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up(), this._viewMatrix);
            const shadowMap = this.getShadowMap();
            if (shadowMap) {
                const renderList = shadowMap.renderList;
                if (renderList) {
                    this._light.setShadowProjectionMatrix(this._projectionMatrix, this._viewMatrix, renderList);
                }
            }
            this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix);
        }
        return this._transformMatrix;
    }
    /**
     * Recreates the shadow map dependencies like RTT and post processes. This can be used during the switch between
     * Cube and 2D textures for instance.
     */ recreateShadowMap() {
        const shadowMap = this._shadowMap;
        if (!shadowMap) {
            return;
        }
        // Track render list.
        const renderList = shadowMap.renderList;
        // Clean up existing data.
        this._disposeRTTandPostProcesses();
        // Reinitializes.
        this._initializeGenerator();
        // Reaffect the filter to ensure a correct fallback if necessary.
        this.filter = this._filter;
        // Reaffect the filter.
        this._applyFilterValues();
        // Reaffect Render List.
        if (renderList) {
            // Note: don't do this._shadowMap!.renderList = renderList;
            // The renderList hooked array is accessing the old RenderTargetTexture (see RenderTargetTexture._hookArray), which is disposed at this point (by the call to _disposeRTTandPostProcesses)
            if (!this._shadowMap.renderList) {
                this._shadowMap.renderList = [];
            }
            for (const mesh of renderList){
                this._shadowMap.renderList.push(mesh);
            }
        } else {
            this._shadowMap.renderList = null;
        }
    }
    _disposeBlurPostProcesses() {
        if (this._shadowMap2) {
            this._shadowMap2.dispose();
            this._shadowMap2 = null;
        }
        if (this._boxBlurPostprocess) {
            this._boxBlurPostprocess.dispose();
            this._boxBlurPostprocess = null;
        }
        if (this._kernelBlurXPostprocess) {
            this._kernelBlurXPostprocess.dispose();
            this._kernelBlurXPostprocess = null;
        }
        if (this._kernelBlurYPostprocess) {
            this._kernelBlurYPostprocess.dispose();
            this._kernelBlurYPostprocess = null;
        }
        this._blurPostProcesses = [];
    }
    _disposeRTTandPostProcesses() {
        if (this._shadowMap) {
            this._shadowMap.dispose();
            this._shadowMap = null;
        }
        this._disposeBlurPostProcesses();
    }
    _disposeSceneUBOs() {
        if (this._sceneUBOs) {
            for (const ubo of this._sceneUBOs){
                ubo.dispose();
            }
            this._sceneUBOs = [];
        }
    }
    /**
     * Disposes the ShadowGenerator.
     * Returns nothing.
     */ dispose() {
        this._disposeRTTandPostProcesses();
        this._disposeSceneUBOs();
        if (this._light) {
            if (this._light._shadowGenerators) {
                const iterator = this._light._shadowGenerators.entries();
                for(let entry = iterator.next(); entry.done !== true; entry = iterator.next()){
                    const [camera, shadowGenerator] = entry.value;
                    if (shadowGenerator === this) {
                        this._light._shadowGenerators.delete(camera);
                    }
                }
                if (this._light._shadowGenerators.size === 0) {
                    this._light._shadowGenerators = null;
                }
            }
            this._light._markMeshesAsLightDirty();
        }
        this.onBeforeShadowMapRenderMeshObservable.clear();
        this.onBeforeShadowMapRenderObservable.clear();
        this.onAfterShadowMapRenderMeshObservable.clear();
        this.onAfterShadowMapRenderObservable.clear();
    }
    /**
     * Serializes the shadow generator setup to a json object.
     * @returns The serialized JSON object
     */ serialize() {
        const serializationObject = {};
        const shadowMap = this.getShadowMap();
        if (!shadowMap) {
            return serializationObject;
        }
        serializationObject.className = this.getClassName();
        serializationObject.lightId = this._light.id;
        serializationObject.cameraId = this._camera?.id;
        serializationObject.id = this.id;
        serializationObject.mapSize = shadowMap.getRenderSize();
        serializationObject.forceBackFacesOnly = this.forceBackFacesOnly;
        serializationObject.darkness = this.getDarkness();
        serializationObject.transparencyShadow = this._transparencyShadow;
        serializationObject.frustumEdgeFalloff = this.frustumEdgeFalloff;
        serializationObject.bias = this.bias;
        serializationObject.normalBias = this.normalBias;
        serializationObject.usePercentageCloserFiltering = this.usePercentageCloserFiltering;
        serializationObject.useContactHardeningShadow = this.useContactHardeningShadow;
        serializationObject.contactHardeningLightSizeUVRatio = this.contactHardeningLightSizeUVRatio;
        serializationObject.filteringQuality = this.filteringQuality;
        serializationObject.useExponentialShadowMap = this.useExponentialShadowMap;
        serializationObject.useBlurExponentialShadowMap = this.useBlurExponentialShadowMap;
        serializationObject.useCloseExponentialShadowMap = this.useBlurExponentialShadowMap;
        serializationObject.useBlurCloseExponentialShadowMap = this.useBlurExponentialShadowMap;
        serializationObject.usePoissonSampling = this.usePoissonSampling;
        serializationObject.depthScale = this.depthScale;
        serializationObject.blurBoxOffset = this.blurBoxOffset;
        serializationObject.blurKernel = this.blurKernel;
        serializationObject.blurScale = this.blurScale;
        serializationObject.useKernelBlur = this.useKernelBlur;
        serializationObject.renderList = [];
        if (shadowMap.renderList) {
            for(let meshIndex = 0; meshIndex < shadowMap.renderList.length; meshIndex++){
                const mesh = shadowMap.renderList[meshIndex];
                serializationObject.renderList.push(mesh.id);
            }
        }
        return serializationObject;
    }
    /**
     * Parses a serialized ShadowGenerator and returns a new ShadowGenerator.
     * @param parsedShadowGenerator The JSON object to parse
     * @param scene The scene to create the shadow map for
     * @param constr A function that builds a shadow generator or undefined to create an instance of the default shadow generator
     * @returns The parsed shadow generator
     */ static Parse(parsedShadowGenerator, scene, constr) {
        const light = scene.getLightById(parsedShadowGenerator.lightId);
        const camera = parsedShadowGenerator.cameraId !== undefined ? scene.getCameraById(parsedShadowGenerator.cameraId) : null;
        const shadowGenerator = constr ? constr(parsedShadowGenerator.mapSize, light, camera) : new ShadowGenerator(parsedShadowGenerator.mapSize, light, undefined, camera);
        const shadowMap = shadowGenerator.getShadowMap();
        if (parsedShadowGenerator.renderList.length && shadowMap) {
            const renderSet = new Set(parsedShadowGenerator.renderList);
            let renderList = shadowMap.renderList;
            if (!renderList) {
                renderList = shadowMap.renderList = [];
            }
            const meshes = scene.meshes;
            for (const mesh of meshes){
                if (renderSet.has(mesh.id)) {
                    renderList.push(mesh);
                }
            }
        }
        if (parsedShadowGenerator.id !== undefined) {
            shadowGenerator.id = parsedShadowGenerator.id;
        }
        shadowGenerator.forceBackFacesOnly = !!parsedShadowGenerator.forceBackFacesOnly;
        if (parsedShadowGenerator.darkness !== undefined) {
            shadowGenerator.setDarkness(parsedShadowGenerator.darkness);
        }
        if (parsedShadowGenerator.transparencyShadow) {
            shadowGenerator.setTransparencyShadow(true);
        }
        if (parsedShadowGenerator.frustumEdgeFalloff !== undefined) {
            shadowGenerator.frustumEdgeFalloff = parsedShadowGenerator.frustumEdgeFalloff;
        }
        if (parsedShadowGenerator.bias !== undefined) {
            shadowGenerator.bias = parsedShadowGenerator.bias;
        }
        if (parsedShadowGenerator.normalBias !== undefined) {
            shadowGenerator.normalBias = parsedShadowGenerator.normalBias;
        }
        if (parsedShadowGenerator.usePercentageCloserFiltering) {
            shadowGenerator.usePercentageCloserFiltering = true;
        } else if (parsedShadowGenerator.useContactHardeningShadow) {
            shadowGenerator.useContactHardeningShadow = true;
        } else if (parsedShadowGenerator.usePoissonSampling) {
            shadowGenerator.usePoissonSampling = true;
        } else if (parsedShadowGenerator.useExponentialShadowMap) {
            shadowGenerator.useExponentialShadowMap = true;
        } else if (parsedShadowGenerator.useBlurExponentialShadowMap) {
            shadowGenerator.useBlurExponentialShadowMap = true;
        } else if (parsedShadowGenerator.useCloseExponentialShadowMap) {
            shadowGenerator.useCloseExponentialShadowMap = true;
        } else if (parsedShadowGenerator.useBlurCloseExponentialShadowMap) {
            shadowGenerator.useBlurCloseExponentialShadowMap = true;
        } else if (parsedShadowGenerator.useVarianceShadowMap) {
            shadowGenerator.useExponentialShadowMap = true;
        } else if (parsedShadowGenerator.useBlurVarianceShadowMap) {
            shadowGenerator.useBlurExponentialShadowMap = true;
        }
        if (parsedShadowGenerator.contactHardeningLightSizeUVRatio !== undefined) {
            shadowGenerator.contactHardeningLightSizeUVRatio = parsedShadowGenerator.contactHardeningLightSizeUVRatio;
        }
        if (parsedShadowGenerator.filteringQuality !== undefined) {
            shadowGenerator.filteringQuality = parsedShadowGenerator.filteringQuality;
        }
        if (parsedShadowGenerator.depthScale) {
            shadowGenerator.depthScale = parsedShadowGenerator.depthScale;
        }
        if (parsedShadowGenerator.blurScale) {
            shadowGenerator.blurScale = parsedShadowGenerator.blurScale;
        }
        if (parsedShadowGenerator.blurBoxOffset) {
            shadowGenerator.blurBoxOffset = parsedShadowGenerator.blurBoxOffset;
        }
        if (parsedShadowGenerator.useKernelBlur) {
            shadowGenerator.useKernelBlur = parsedShadowGenerator.useKernelBlur;
        }
        if (parsedShadowGenerator.blurKernel) {
            shadowGenerator.blurKernel = parsedShadowGenerator.blurKernel;
        }
        return shadowGenerator;
    }
}
/**
 * Name of the shadow generator class
 */ ShadowGenerator.CLASSNAME = "ShadowGenerator";
/**
 * Force all the shadow generators to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */ ShadowGenerator.ForceGLSL = false;
/**
 * Shadow generator mode None: no filtering applied.
 */ ShadowGenerator.FILTER_NONE = 0;
/**
 * Shadow generator mode ESM: Exponential Shadow Mapping.
 * (http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)
 */ ShadowGenerator.FILTER_EXPONENTIALSHADOWMAP = 1;
/**
 * Shadow generator mode Poisson Sampling: Percentage Closer Filtering.
 * (Multiple Tap around evenly distributed around the pixel are used to evaluate the shadow strength)
 */ ShadowGenerator.FILTER_POISSONSAMPLING = 2;
/**
 * Shadow generator mode ESM: Blurred Exponential Shadow Mapping.
 * (http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)
 */ ShadowGenerator.FILTER_BLUREXPONENTIALSHADOWMAP = 3;
/**
 * Shadow generator mode ESM: Exponential Shadow Mapping using the inverse of the exponential preventing
 * edge artifacts on steep falloff.
 * (http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)
 */ ShadowGenerator.FILTER_CLOSEEXPONENTIALSHADOWMAP = 4;
/**
 * Shadow generator mode ESM: Blurred Exponential Shadow Mapping using the inverse of the exponential preventing
 * edge artifacts on steep falloff.
 * (http://developer.download.nvidia.com/presentations/2008/GDC/GDC08_SoftShadowMapping.pdf)
 */ ShadowGenerator.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP = 5;
/**
 * Shadow generator mode PCF: Percentage Closer Filtering
 * benefits from Webgl 2 shadow samplers. Fallback to Poisson Sampling in Webgl 1
 * (https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch11.html)
 */ ShadowGenerator.FILTER_PCF = 6;
/**
 * Shadow generator mode PCSS: Percentage Closering Soft Shadow.
 * benefits from Webgl 2 shadow samplers. Fallback to Poisson Sampling in Webgl 1
 * Contact Hardening
 */ ShadowGenerator.FILTER_PCSS = 7;
/**
 * Reserved for PCF and PCSS
 * Highest Quality.
 *
 * Execute PCF on a 5*5 kernel improving a lot the shadow aliasing artifacts.
 *
 * Execute PCSS with 32 taps blocker search and 64 taps PCF.
 */ ShadowGenerator.QUALITY_HIGH = 0;
/**
 * Reserved for PCF and PCSS
 * Good tradeoff for quality/perf cross devices
 *
 * Execute PCF on a 3*3 kernel.
 *
 * Execute PCSS with 16 taps blocker search and 32 taps PCF.
 */ ShadowGenerator.QUALITY_MEDIUM = 1;
/**
 * Reserved for PCF and PCSS
 * The lowest quality but the fastest.
 *
 * Execute PCF on a 1*1 kernel.
 *
 * Execute PCSS with 16 taps blocker search and 16 taps PCF.
 */ ShadowGenerator.QUALITY_LOW = 2;
/**
 * Defines the default alpha cutoff value used for transparent alpha tested materials.
 */ ShadowGenerator.DEFAULT_ALPHA_CUTOFF = 0.5;
/**
 * @internal
 */ ShadowGenerator._SceneComponentInitialization = (_)=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("ShadowGeneratorSceneComponent");
}; //# sourceMappingURL=shadowGenerator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/cascadedShadowGenerator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CascadedShadowGenerator",
    ()=>CascadedShadowGenerator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$depthReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/depthReducer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/floatingOriginMatrixOverrides.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// eslint-disable-next-line @typescript-eslint/naming-convention
const UpDir = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up();
// eslint-disable-next-line @typescript-eslint/naming-convention
const ZeroVec = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
const Tmpv1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
const Tmpv2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
const TmpMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
class CascadedShadowGenerator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"] {
    _validateFilter(filter) {
        if (filter === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_NONE || filter === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_PCF || filter === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_PCSS) {
            return filter;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error('Unsupported filter "' + filter + '"!');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_NONE;
    }
    /**
     * Gets or set the number of cascades used by the CSM.
     */ get numCascades() {
        return this._numCascades;
    }
    set numCascades(value) {
        value = Math.min(Math.max(value, CascadedShadowGenerator.MIN_CASCADES_COUNT), CascadedShadowGenerator.MAX_CASCADES_COUNT);
        if (value === this._numCascades) {
            return;
        }
        this._numCascades = value;
        this.recreateShadowMap();
        this._recreateSceneUBOs();
    }
    /**
     * Enables or disables the shadow casters bounding info computation.
     * If your shadow casters don't move, you can disable this feature.
     * If it is enabled, the bounding box computation is done every frame.
     */ get freezeShadowCastersBoundingInfo() {
        return this._freezeShadowCastersBoundingInfo;
    }
    set freezeShadowCastersBoundingInfo(freeze) {
        if (this._freezeShadowCastersBoundingInfoObservable && freeze) {
            this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable);
            this._freezeShadowCastersBoundingInfoObservable = null;
        }
        if (!this._freezeShadowCastersBoundingInfoObservable && !freeze) {
            this._freezeShadowCastersBoundingInfoObservable = this._scene.onBeforeRenderObservable.add(()=>this._computeShadowCastersBoundingInfo());
        }
        this._freezeShadowCastersBoundingInfo = freeze;
        if (freeze) {
            this._computeShadowCastersBoundingInfo();
        }
    }
    _computeShadowCastersBoundingInfo() {
        this._scbiMin.copyFromFloats(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._scbiMax.copyFromFloats(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        if (this._shadowMap && this._shadowMap.renderList) {
            const renderList = this._shadowMap.renderList;
            for(let meshIndex = 0; meshIndex < renderList.length; meshIndex++){
                const mesh = renderList[meshIndex];
                if (!mesh) {
                    continue;
                }
                const boundingInfo = mesh.getBoundingInfo(), boundingBox = boundingInfo.boundingBox;
                this._scbiMin.minimizeInPlace(boundingBox.minimumWorld);
                this._scbiMax.maximizeInPlace(boundingBox.maximumWorld);
            }
        }
        this._shadowCastersBoundingInfo.reConstruct(this._scbiMin, this._scbiMax);
    }
    /**
     * Gets or sets the shadow casters bounding info.
     * If you provide your own shadow casters bounding info, first enable freezeShadowCastersBoundingInfo
     * so that the system won't overwrite the bounds you provide
     */ get shadowCastersBoundingInfo() {
        return this._shadowCastersBoundingInfo;
    }
    set shadowCastersBoundingInfo(boundingInfo) {
        this._shadowCastersBoundingInfo = boundingInfo;
    }
    /**
     * Sets the minimal and maximal distances to use when computing the cascade breaks.
     *
     * The values of min / max are typically the depth zmin and zmax values of your scene, for a given frame.
     * If you don't know these values, simply leave them to their defaults and don't call this function.
     * @param min minimal distance for the breaks (default to 0.)
     * @param max maximal distance for the breaks (default to 1.)
     */ setMinMaxDistance(min, max) {
        if (this._minDistance === min && this._maxDistance === max) {
            return;
        }
        if (min > max) {
            min = 0;
            max = 1;
        }
        if (min < 0) {
            min = 0;
        }
        if (max > 1) {
            max = 1;
        }
        this._minDistance = min;
        this._maxDistance = max;
        this._breaksAreDirty = true;
    }
    /** Gets the minimal distance used in the cascade break computation */ get minDistance() {
        return this._minDistance;
    }
    /** Gets the maximal distance used in the cascade break computation */ get maxDistance() {
        return this._maxDistance;
    }
    /**
     * Gets the class name of that object
     * @returns "CascadedShadowGenerator"
     */ getClassName() {
        return CascadedShadowGenerator.CLASSNAME;
    }
    /**
     * Gets a cascade minimum extents
     * @param cascadeIndex index of the cascade
     * @returns the minimum cascade extents
     */ getCascadeMinExtents(cascadeIndex) {
        return cascadeIndex >= 0 && cascadeIndex < this._numCascades ? this._cascadeMinExtents[cascadeIndex] : null;
    }
    /**
     * Gets a cascade maximum extents
     * @param cascadeIndex index of the cascade
     * @returns the maximum cascade extents
     */ getCascadeMaxExtents(cascadeIndex) {
        return cascadeIndex >= 0 && cascadeIndex < this._numCascades ? this._cascadeMaxExtents[cascadeIndex] : null;
    }
    /**
     * Gets the shadow max z distance. It's the limit beyond which shadows are not displayed.
     * It defaults to camera.maxZ
     */ get shadowMaxZ() {
        if (!this._getCamera()) {
            return 0;
        }
        return this._shadowMaxZ;
    }
    /**
     * Sets the shadow max z distance.
     */ set shadowMaxZ(value) {
        const camera = this._getCamera();
        if (!camera) {
            this._shadowMaxZ = value;
            return;
        }
        if (this._shadowMaxZ === value || value < camera.minZ || value > camera.maxZ && camera.maxZ !== 0) {
            return;
        }
        this._shadowMaxZ = value;
        this._light._markMeshesAsLightDirty();
        this._breaksAreDirty = true;
    }
    /**
     * Gets or sets the debug flag.
     * When enabled, the cascades are materialized by different colors on the screen.
     */ get debug() {
        return this._debug;
    }
    set debug(dbg) {
        this._debug = dbg;
        this._light._markMeshesAsLightDirty();
    }
    /**
     * Gets or sets the depth clamping value.
     *
     * When enabled, it improves the shadow quality because the near z plane of the light frustum don't need to be adjusted
     * to account for the shadow casters far away.
     *
     * Note that this property is incompatible with PCSS filtering, so it won't be used in that case.
     */ get depthClamp() {
        return this._depthClamp;
    }
    set depthClamp(value) {
        this._depthClamp = value;
    }
    /**
     * Gets or sets the percentage of blending between two cascades (value between 0. and 1.).
     * It defaults to 0.1 (10% blending).
     */ get cascadeBlendPercentage() {
        return this._cascadeBlendPercentage;
    }
    set cascadeBlendPercentage(value) {
        this._cascadeBlendPercentage = value;
        this._light._markMeshesAsLightDirty();
    }
    /**
     * Gets or set the lambda parameter.
     * This parameter is used to split the camera frustum and create the cascades.
     * It's a value between 0. and 1.: If 0, the split is a uniform split of the frustum, if 1 it is a logarithmic split.
     * For all values in-between, it's a linear combination of the uniform and logarithm split algorithm.
     */ get lambda() {
        return this._lambda;
    }
    set lambda(value) {
        const lambda = Math.min(Math.max(value, 0), 1);
        if (this._lambda == lambda) {
            return;
        }
        this._lambda = lambda;
        this._breaksAreDirty = true;
    }
    /**
     * Gets the view matrix corresponding to a given cascade
     * @param cascadeNum cascade to retrieve the view matrix from
     * @returns the cascade view matrix
     */ getCascadeViewMatrix(cascadeNum) {
        return cascadeNum >= 0 && cascadeNum < this._numCascades ? this._viewMatrices[cascadeNum] : null;
    }
    /**
     * Gets the projection matrix corresponding to a given cascade
     * @param cascadeNum cascade to retrieve the projection matrix from
     * @returns the cascade projection matrix
     */ getCascadeProjectionMatrix(cascadeNum) {
        return cascadeNum >= 0 && cascadeNum < this._numCascades ? this._projectionMatrices[cascadeNum] : null;
    }
    /**
     * Gets the transformation matrix corresponding to a given cascade
     * @param cascadeNum cascade to retrieve the transformation matrix from
     * @returns the cascade transformation matrix
     */ getCascadeTransformMatrix(cascadeNum) {
        return cascadeNum >= 0 && cascadeNum < this._numCascades ? this._transformMatrices[cascadeNum] : null;
    }
    /**
     * Sets the depth renderer to use when autoCalcDepthBounds is enabled.
     *
     * Note that if no depth renderer is set, a new one will be automatically created internally when necessary.
     *
     * You should call this function if you already have a depth renderer enabled in your scene, to avoid
     * doing multiple depth rendering each frame. If you provide your own depth renderer, make sure it stores linear depth!
     * @param depthRenderer The depth renderer to use when autoCalcDepthBounds is enabled. If you pass null or don't call this function at all, a depth renderer will be automatically created
     */ setDepthRenderer(depthRenderer) {
        this._depthRenderer = depthRenderer;
        if (this._depthReducer) {
            this._depthReducer.setDepthRenderer(this._depthRenderer);
        }
    }
    /**
     * Gets or sets the autoCalcDepthBounds property.
     *
     * When enabled, a depth rendering pass is first performed (with an internally created depth renderer or with the one
     * you provide by calling setDepthRenderer). Then, a min/max reducing is applied on the depth map to compute the
     * minimal and maximal depth of the map and those values are used as inputs for the setMinMaxDistance() function.
     * It can greatly enhance the shadow quality, at the expense of more GPU works.
     * When using this option, you should increase the value of the lambda parameter, and even set it to 1 for best results.
     */ get autoCalcDepthBounds() {
        return this._autoCalcDepthBounds;
    }
    set autoCalcDepthBounds(value) {
        const camera = this._getCamera();
        if (!camera) {
            return;
        }
        this._autoCalcDepthBounds = value;
        if (!value) {
            if (this._depthReducer) {
                this._depthReducer.deactivate();
            }
            this.setMinMaxDistance(0, 1);
            return;
        }
        if (!this._depthReducer) {
            this._depthReducer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$depthReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DepthReducer"](camera);
            this._depthReducer.onAfterReductionPerformed.add((minmax)=>{
                let min = minmax.min, max = minmax.max;
                if (min >= max) {
                    min = 0;
                    max = 1;
                }
                if (min != this._minDistance || max != this._maxDistance) {
                    this.setMinMaxDistance(min, max);
                }
            });
            this._depthReducer.setDepthRenderer(this._depthRenderer);
        }
        this._depthReducer.activate();
    }
    /**
     * Defines the refresh rate of the min/max computation used when autoCalcDepthBounds is set to true
     * Use 0 to compute just once, 1 to compute on every frame, 2 to compute every two frames and so on...
     * Note that if you provided your own depth renderer through a call to setDepthRenderer, you are responsible
     * for setting the refresh rate on the renderer yourself!
     */ get autoCalcDepthBoundsRefreshRate() {
        return this._depthReducer?.depthRenderer?.getDepthMap().refreshRate ?? -1;
    }
    set autoCalcDepthBoundsRefreshRate(value) {
        if (this._depthReducer?.depthRenderer) {
            this._depthReducer.depthRenderer.getDepthMap().refreshRate = value;
        }
    }
    /**
     * Create the cascade breaks according to the lambda, shadowMaxZ and min/max distance properties, as well as the camera near and far planes.
     * This function is automatically called when updating lambda, shadowMaxZ and min/max distances, however you should call it yourself if
     * you change the camera near/far planes!
     */ splitFrustum() {
        this._breaksAreDirty = true;
    }
    _splitFrustum() {
        const camera = this._getCamera();
        if (!camera) {
            return;
        }
        const near = camera.minZ, far = camera.maxZ || this._shadowMaxZ, cameraRange = far - near, minDistance = this._minDistance, maxDistance = this._shadowMaxZ < far && this._shadowMaxZ >= near ? Math.min((this._shadowMaxZ - near) / (far - near), this._maxDistance) : this._maxDistance;
        const minZ = near + minDistance * cameraRange, maxZ = near + maxDistance * cameraRange;
        const range = maxZ - minZ, ratio = maxZ / minZ;
        for(let cascadeIndex = 0; cascadeIndex < this._cascades.length; ++cascadeIndex){
            const p = (cascadeIndex + 1) / this._numCascades, log = minZ * ratio ** p, uniform = minZ + range * p;
            const d = this._lambda * (log - uniform) + uniform;
            this._cascades[cascadeIndex].prevBreakDistance = cascadeIndex === 0 ? minDistance : this._cascades[cascadeIndex - 1].breakDistance;
            this._cascades[cascadeIndex].breakDistance = (d - near) / cameraRange;
            this._viewSpaceFrustumsZ[cascadeIndex] = d;
            this._frustumLengths[cascadeIndex] = (this._cascades[cascadeIndex].breakDistance - this._cascades[cascadeIndex].prevBreakDistance) * cameraRange;
        }
        this._breaksAreDirty = false;
    }
    _computeMatrices() {
        const scene = this._scene;
        const camera = this._getCamera();
        if (!camera) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].NormalizeToRef(this._light.getShadowDirection(0), this._lightDirection);
        if (Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._lightDirection, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up())) === 1.0) {
            this._lightDirection.z = 0.0000000000001; // Required to avoid perfectly perpendicular light
        }
        this._cachedDirection.copyFrom(this._lightDirection);
        const useReverseDepthBuffer = scene.getEngine().useReverseDepthBuffer;
        for(let cascadeIndex = 0; cascadeIndex < this._numCascades; ++cascadeIndex){
            this._computeFrustumInWorldSpace(cascadeIndex);
            this._computeCascadeFrustum(cascadeIndex);
            this._cascadeMaxExtents[cascadeIndex].subtractToRef(this._cascadeMinExtents[cascadeIndex], Tmpv1); // tmpv1 = cascadeExtents
            // Get position of the shadow camera
            this._frustumCenter[cascadeIndex].addToRef(this._lightDirection.scale(this._cascadeMinExtents[cascadeIndex].z), this._shadowCameraPos[cascadeIndex]);
            // Come up with a new orthographic camera for the shadow caster
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(this._shadowCameraPos[cascadeIndex], this._frustumCenter[cascadeIndex], UpDir, this._viewMatrices[cascadeIndex]);
            // Z extents of the current cascade, in cascade view coordinate system
            let viewMinZ = 0, viewMaxZ = Tmpv1.z;
            // Try to tighten minZ and maxZ based on the bounding box of the shadow casters
            const boundingInfo = this._shadowCastersBoundingInfo;
            boundingInfo.update(this._viewMatrices[cascadeIndex]);
            // Note that after the call to update, the boundingInfo properties that are identified as "world" coordinates are in fact view coordinates for the current cascade!
            // This is because the boundingInfo properties that are identifed as "local" are in fact world coordinates (see _computeShadowCastersBoundingInfo()), and we multiply them by the current cascade view matrix when we call update.
            const castersViewMinZ = boundingInfo.boundingBox.minimumWorld.z;
            const castersViewMaxZ = boundingInfo.boundingBox.maximumWorld.z;
            if (castersViewMinZ > viewMaxZ) {
            // Do nothing, keep the current z extents.
            // All the casters are too far from the light to have an impact on the current cascade.
            // Possible optimization: skip the rendering of the shadow map for this cascade, as all the casters will be clipped by the GPU anyway.
            } else {
                if (!this._depthClamp || this.filter === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_PCSS) {
                    // If we don't use depth clamping, we must define minZ so that all shadow casters are in the cascade frustum
                    viewMinZ = Math.min(viewMinZ, castersViewMinZ);
                    if (this.filter !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_PCSS) {
                        // We do not need the actual distance between the currently shaded pixel and the occluder when generating shadows, so we can lower the far plane to increase the accuracy of the shadow map.
                        viewMaxZ = Math.min(viewMaxZ, castersViewMaxZ);
                    }
                } else {
                    // If we use depth clamping (but not PCSS!), we can adjust minZ/maxZ to reduce the range [minZ, maxZ] (and obtain additional precision in the shadow map)
                    viewMaxZ = Math.min(viewMaxZ, castersViewMaxZ);
                    // Thanks to depth clamping, casters won't be Z clipped even if they fall outside the [-1,1] range, so we can move the near plane to 0 if castersViewMinZ < 0.
                    // We will generate negative Z values in the shadow map, but that's okay (they will be clamped to the 0..1 range anyway), except in PCSS case
                    // where we need the actual distance between the currently shader pixel and the occluder: that's why we don't use depth clamping in PCSS case.
                    viewMinZ = Math.max(viewMinZ, castersViewMinZ);
                    // If all the casters are behind the near plane of the cascade, minZ = 0 due to the previous line, and maxZ < 0 at this point.
                    // We need to make sure that maxZ > minZ, so in this case we set maxZ a little higher than minZ. As we are using depth clamping, the casters won't be Z clipped, so we just need to make sure that we have a valid Z range for the cascade.
                    // Having a 0 range is not ok, due to undefined behavior in the calculation in this case.
                    viewMaxZ = Math.max(viewMinZ + 1.0, viewMaxZ);
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].OrthoOffCenterLHToRef(this._cascadeMinExtents[cascadeIndex].x, this._cascadeMaxExtents[cascadeIndex].x, this._cascadeMinExtents[cascadeIndex].y, this._cascadeMaxExtents[cascadeIndex].y, useReverseDepthBuffer ? viewMaxZ : viewMinZ, useReverseDepthBuffer ? viewMinZ : viewMaxZ, this._projectionMatrices[cascadeIndex], scene.getEngine().isNDCHalfZRange);
            this._cascadeMinExtents[cascadeIndex].z = viewMinZ;
            this._cascadeMaxExtents[cascadeIndex].z = viewMaxZ;
            this._viewMatrices[cascadeIndex].multiplyToRef(this._projectionMatrices[cascadeIndex], this._transformMatrices[cascadeIndex]);
            // Create the rounding matrix, by projecting the world-space origin and determining
            // the fractional offset in texel space
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(ZeroVec, this._transformMatrices[cascadeIndex], Tmpv1); // tmpv1 = shadowOrigin
            Tmpv1.scaleInPlace(this._mapSize / 2);
            Tmpv2.copyFromFloats(Math.round(Tmpv1.x), Math.round(Tmpv1.y), Math.round(Tmpv1.z)); // tmpv2 = roundedOrigin
            Tmpv2.subtractInPlace(Tmpv1).scaleInPlace(2 / this._mapSize); // tmpv2 = roundOffset
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(Tmpv2.x, Tmpv2.y, 0.0, TmpMatrix);
            this._projectionMatrices[cascadeIndex].multiplyToRef(TmpMatrix, this._projectionMatrices[cascadeIndex]);
            this._viewMatrices[cascadeIndex].multiplyToRef(this._projectionMatrices[cascadeIndex], this._transformMatrices[cascadeIndex]);
            this._transformMatrices[cascadeIndex].copyToArray(this._transformMatricesAsArray, cascadeIndex * 16);
        }
    }
    // Get the 8 points of the view frustum in world space
    _computeFrustumInWorldSpace(cascadeIndex) {
        const camera = this._getCamera();
        if (!camera) {
            return;
        }
        const prevSplitDist = this._cascades[cascadeIndex].prevBreakDistance, splitDist = this._cascades[cascadeIndex].breakDistance;
        const isNDCHalfZRange = this._scene.getEngine().isNDCHalfZRange;
        camera.getViewMatrix(); // make sure the transformation matrix we get when calling 'getTransformationMatrix()' is calculated with an up to date view matrix
        const cameraInfiniteFarPlane = camera.maxZ === 0;
        const saveCameraMaxZ = camera.maxZ;
        if (cameraInfiniteFarPlane) {
            camera.maxZ = this._shadowMaxZ;
            camera.getProjectionMatrix(true);
        }
        const invViewProj = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Invert(camera.getTransformationMatrix());
        if (cameraInfiniteFarPlane) {
            camera.maxZ = saveCameraMaxZ;
            camera.getProjectionMatrix(true);
        }
        const cornerIndexOffset = this._scene.getEngine().useReverseDepthBuffer ? 4 : 0;
        for(let cornerIndex = 0; cornerIndex < CascadedShadowGenerator._FrustumCornersNdcSpace.length; ++cornerIndex){
            Tmpv1.copyFrom(CascadedShadowGenerator._FrustumCornersNdcSpace[(cornerIndex + cornerIndexOffset) % CascadedShadowGenerator._FrustumCornersNdcSpace.length]);
            if (isNDCHalfZRange && Tmpv1.z === -1) {
                Tmpv1.z = 0;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(Tmpv1, invViewProj, this._frustumCornersWorldSpace[cascadeIndex][cornerIndex]);
        }
        // Get the corners of the current cascade slice of the view frustum
        for(let cornerIndex = 0; cornerIndex < CascadedShadowGenerator._FrustumCornersNdcSpace.length / 2; ++cornerIndex){
            Tmpv1.copyFrom(this._frustumCornersWorldSpace[cascadeIndex][cornerIndex + 4]).subtractInPlace(this._frustumCornersWorldSpace[cascadeIndex][cornerIndex]);
            Tmpv2.copyFrom(Tmpv1).scaleInPlace(prevSplitDist); // near corner ray
            Tmpv1.scaleInPlace(splitDist); // far corner ray
            Tmpv1.addInPlace(this._frustumCornersWorldSpace[cascadeIndex][cornerIndex]);
            this._frustumCornersWorldSpace[cascadeIndex][cornerIndex + 4].copyFrom(Tmpv1);
            this._frustumCornersWorldSpace[cascadeIndex][cornerIndex].addInPlace(Tmpv2);
        }
    }
    _computeCascadeFrustum(cascadeIndex) {
        this._cascadeMinExtents[cascadeIndex].copyFromFloats(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        this._cascadeMaxExtents[cascadeIndex].copyFromFloats(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        this._frustumCenter[cascadeIndex].copyFromFloats(0, 0, 0);
        const camera = this._getCamera();
        if (!camera) {
            return;
        }
        // Calculate the centroid of the view frustum slice
        for(let cornerIndex = 0; cornerIndex < this._frustumCornersWorldSpace[cascadeIndex].length; ++cornerIndex){
            this._frustumCenter[cascadeIndex].addInPlace(this._frustumCornersWorldSpace[cascadeIndex][cornerIndex]);
        }
        this._frustumCenter[cascadeIndex].scaleInPlace(1 / this._frustumCornersWorldSpace[cascadeIndex].length);
        if (this.stabilizeCascades) {
            // Calculate the radius of a bounding sphere surrounding the frustum corners
            let sphereRadius = 0;
            for(let cornerIndex = 0; cornerIndex < this._frustumCornersWorldSpace[cascadeIndex].length; ++cornerIndex){
                const dist = this._frustumCornersWorldSpace[cascadeIndex][cornerIndex].subtractToRef(this._frustumCenter[cascadeIndex], Tmpv1).length();
                sphereRadius = Math.max(sphereRadius, dist);
            }
            sphereRadius = Math.ceil(sphereRadius * 16) / 16;
            this._cascadeMaxExtents[cascadeIndex].copyFromFloats(sphereRadius, sphereRadius, sphereRadius);
            this._cascadeMinExtents[cascadeIndex].copyFromFloats(-sphereRadius, -sphereRadius, -sphereRadius);
        } else {
            // Create a temporary view matrix for the light
            const lightCameraPos = this._frustumCenter[cascadeIndex];
            this._frustumCenter[cascadeIndex].addToRef(this._lightDirection, Tmpv1); // tmpv1 = look at
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(lightCameraPos, Tmpv1, UpDir, TmpMatrix); // matrix = lightView
            // Calculate an AABB around the frustum corners
            for(let cornerIndex = 0; cornerIndex < this._frustumCornersWorldSpace[cascadeIndex].length; ++cornerIndex){
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._frustumCornersWorldSpace[cascadeIndex][cornerIndex], TmpMatrix, Tmpv1);
                this._cascadeMinExtents[cascadeIndex].minimizeInPlace(Tmpv1);
                this._cascadeMaxExtents[cascadeIndex].maximizeInPlace(Tmpv1);
            }
        }
    }
    _recreateSceneUBOs() {
        this._disposeSceneUBOs();
        if (this._sceneUBOs) {
            for(let i = 0; i < this._numCascades; ++i){
                this._sceneUBOs.push(this._scene.createSceneUniformBuffer(`Scene for CSM Shadow Generator (light "${this._light.name}" cascade #${i})`));
            }
        }
    }
    /**
     *  Support test.
     */ static get IsSupported() {
        const engine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine;
        if (!engine) {
            return false;
        }
        return engine._features.supportCSM;
    }
    /**
     * Creates a Cascaded Shadow Generator object.
     * A ShadowGenerator is the required tool to use the shadows.
     * Each directional light casting shadows needs to use its own ShadowGenerator.
     * Documentation : https://doc.babylonjs.com/babylon101/cascadedShadows
     * @param mapSize The size of the texture what stores the shadows. Example : 1024.
     * @param light The directional light object generating the shadows.
     * @param usefulFloatFirst By default the generator will try to use half float textures but if you need precision (for self shadowing for instance), you can use this option to enforce full float texture.
     * @param camera Camera associated with this shadow generator (default: null). If null, takes the scene active camera at the time we need to access it
     * @param useRedTextureType Forces the generator to use a Red instead of a RGBA type for the shadow map texture format (default: true)
     */ constructor(mapSize, light, usefulFloatFirst, camera, useRedTextureType = true){
        if (!CascadedShadowGenerator.IsSupported) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("CascadedShadowMap is not supported by the current engine.");
            return;
        }
        super(mapSize, light, usefulFloatFirst, camera, useRedTextureType);
        this.usePercentageCloserFiltering = true;
    }
    _initializeGenerator() {
        this.penumbraDarkness = this.penumbraDarkness ?? 1.0;
        this._numCascades = this._numCascades ?? CascadedShadowGenerator.DEFAULT_CASCADES_COUNT;
        this.stabilizeCascades = this.stabilizeCascades ?? false;
        this._freezeShadowCastersBoundingInfoObservable = this._freezeShadowCastersBoundingInfoObservable ?? null;
        this.freezeShadowCastersBoundingInfo = this.freezeShadowCastersBoundingInfo ?? false;
        this._scbiMin = this._scbiMin ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._scbiMax = this._scbiMax ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._shadowCastersBoundingInfo = this._shadowCastersBoundingInfo ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoundingInfo"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0));
        this._breaksAreDirty = this._breaksAreDirty ?? true;
        this._minDistance = this._minDistance ?? 0;
        this._maxDistance = this._maxDistance ?? 1;
        this._currentLayer = this._currentLayer ?? 0;
        this._shadowMaxZ = this._shadowMaxZ ?? this._getCamera()?.maxZ ?? 10000;
        this._debug = this._debug ?? false;
        this._depthClamp = this._depthClamp ?? true;
        this._cascadeBlendPercentage = this._cascadeBlendPercentage ?? 0.1;
        this._lambda = this._lambda ?? 0.5;
        this._autoCalcDepthBounds = this._autoCalcDepthBounds ?? false;
        this._recreateSceneUBOs();
        super._initializeGenerator();
    }
    _createTargetRenderTexture() {
        const engine = this._scene.getEngine();
        this._shadowMap?.dispose();
        const size = {
            width: this._mapSize,
            height: this._mapSize,
            layers: this.numCascades
        };
        this._shadowMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetTexture"](this._light.name + "_CSMShadowMap", size, this._scene, false, true, this._textureType, false, undefined, false, false, undefined, this._useRedTextureType ? 6 : 5);
        this._shadowMap.createDepthStencilTexture(engine.useReverseDepthBuffer ? 516 : 513, true, undefined, undefined, undefined, `DepthStencilForCSMShadowGenerator-${this._light.name}`);
        this._shadowMap.noPrePassRenderer = true;
    }
    _initializeShadowMap() {
        super._initializeShadowMap();
        if (this._shadowMap === null) {
            return;
        }
        this._transformMatricesAsArray = new Float32Array(this._numCascades * 16);
        this._tempTransformMatricesAsArray = new Float32Array(this._numCascades * 16);
        this._viewSpaceFrustumsZ = new Array(this._numCascades);
        this._frustumLengths = new Array(this._numCascades);
        this._lightSizeUVCorrection = new Array(this._numCascades * 2);
        this._depthCorrection = new Array(this._numCascades);
        this._cascades = [];
        this._viewMatrices = [];
        this._projectionMatrices = [];
        this._transformMatrices = [];
        this._cascadeMinExtents = [];
        this._cascadeMaxExtents = [];
        this._frustumCenter = [];
        this._shadowCameraPos = [];
        this._frustumCornersWorldSpace = [];
        for(let cascadeIndex = 0; cascadeIndex < this._numCascades; ++cascadeIndex){
            this._cascades[cascadeIndex] = {
                prevBreakDistance: 0,
                breakDistance: 0
            };
            this._viewMatrices[cascadeIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
            this._projectionMatrices[cascadeIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
            this._transformMatrices[cascadeIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
            this._cascadeMinExtents[cascadeIndex] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            this._cascadeMaxExtents[cascadeIndex] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            this._frustumCenter[cascadeIndex] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            this._shadowCameraPos[cascadeIndex] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            this._frustumCornersWorldSpace[cascadeIndex] = new Array(CascadedShadowGenerator._FrustumCornersNdcSpace.length);
            for(let i = 0; i < CascadedShadowGenerator._FrustumCornersNdcSpace.length; ++i){
                this._frustumCornersWorldSpace[cascadeIndex][i] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
            }
        }
        const engine = this._scene.getEngine();
        this._shadowMap.onBeforeBindObservable.clear();
        this._shadowMap.onBeforeRenderObservable.clear();
        this._shadowMap.onBeforeRenderObservable.add((layer)=>{
            if (this._sceneUBOs) {
                this._scene.setSceneUniformBuffer(this._sceneUBOs[layer]);
            }
            this._currentLayer = layer;
            if (this._filter === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_PCF) {
                engine.setColorWrite(false);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingOriginCurrentScene"].eyeAtCamera = false;
            this._scene.setTransformMatrix(this.getCascadeViewMatrix(layer), this.getCascadeProjectionMatrix(layer));
            if (this._useUBO) {
                this._scene.getSceneUniformBuffer().unbindEffect();
                this._scene.finalizeSceneUbo();
            }
        });
        this._shadowMap.onBeforeBindObservable.add(()=>{
            this._currentSceneUBO = this._scene.getSceneUniformBuffer();
            engine._debugPushGroup?.(`cascaded shadow map generation for pass id ${engine.currentRenderPassId}`, 1);
            if (this._breaksAreDirty) {
                this._splitFrustum();
            }
            this._computeMatrices();
        });
        this._splitFrustum();
    }
    _bindCustomEffectForRenderSubMeshForShadowMap(subMesh, effect) {
        effect.setMatrix("viewProjection", this.getCascadeTransformMatrix(this._currentLayer));
    }
    _isReadyCustomDefines(defines) {
        defines.push("#define SM_DEPTHCLAMP " + (this._depthClamp && this._filter !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_PCSS ? "1" : "0"));
    }
    /**
     * Prepare all the defines in a material relying on a shadow map at the specified light index.
     * @param defines Defines of the material we want to update
     * @param lightIndex Index of the light in the enabled light list of the material
     */ prepareDefines(defines, lightIndex) {
        super.prepareDefines(defines, lightIndex);
        const scene = this._scene;
        const light = this._light;
        if (!scene.shadowsEnabled || !light.shadowEnabled) {
            return;
        }
        defines["SHADOWCSM" + lightIndex] = true;
        defines["SHADOWCSMDEBUG" + lightIndex] = this.debug;
        defines["SHADOWCSMNUM_CASCADES" + lightIndex] = this.numCascades;
        defines["SHADOWCSM_RIGHTHANDED" + lightIndex] = scene.useRightHandedSystem;
        const camera = this._getCamera();
        if (camera && this._shadowMaxZ <= (camera.maxZ || this._shadowMaxZ)) {
            defines["SHADOWCSMUSESHADOWMAXZ" + lightIndex] = true;
        }
        if (this.cascadeBlendPercentage === 0) {
            defines["SHADOWCSMNOBLEND" + lightIndex] = true;
        }
    }
    /**
     * Binds the shadow related information inside of an effect (information like near, far, darkness...
     * defined in the generator but impacting the effect).
     * @param lightIndex Index of the light in the enabled light list of the material owning the effect
     * @param effect The effect we are binfing the information for
     */ bindShadowLight(lightIndex, effect) {
        const light = this._light;
        const scene = this._scene;
        if (!scene.shadowsEnabled || !light.shadowEnabled) {
            return;
        }
        const camera = this._getCamera();
        if (!camera) {
            return;
        }
        const shadowMap = this.getShadowMap();
        if (!shadowMap) {
            return;
        }
        const width = shadowMap.getSize().width;
        const transform = this._transformMatricesAsArray;
        // Doing the check for floatingOrigin here to avoid unnecessary matrix operations when offset is 0
        const lightMatrix = scene.floatingOriginMode ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetOffsetTransformMatrices"])(this._scene.floatingOriginOffset, this._viewMatrices, this._projectionMatrices, this._numCascades, this._tempTransformMatricesAsArray) : transform;
        effect.setMatrices("lightMatrix" + lightIndex, lightMatrix);
        effect.setArray("viewFrustumZ" + lightIndex, this._viewSpaceFrustumsZ);
        effect.setFloat("cascadeBlendFactor" + lightIndex, this.cascadeBlendPercentage === 0 ? 10000 : 1 / this.cascadeBlendPercentage);
        effect.setArray("frustumLengths" + lightIndex, this._frustumLengths);
        // Only PCF uses depth stencil texture.
        if (this._filter === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_PCF) {
            effect.setDepthStencilTexture("shadowTexture" + lightIndex, shadowMap);
            light._uniformBuffer.updateFloat4("shadowsInfo", this.getDarkness(), width, 1 / width, this.frustumEdgeFalloff, lightIndex);
        } else if (this._filter === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].FILTER_PCSS) {
            for(let cascadeIndex = 0; cascadeIndex < this._numCascades; ++cascadeIndex){
                this._lightSizeUVCorrection[cascadeIndex * 2 + 0] = cascadeIndex === 0 ? 1 : (this._cascadeMaxExtents[0].x - this._cascadeMinExtents[0].x) / (this._cascadeMaxExtents[cascadeIndex].x - this._cascadeMinExtents[cascadeIndex].x); // x correction
                this._lightSizeUVCorrection[cascadeIndex * 2 + 1] = cascadeIndex === 0 ? 1 : (this._cascadeMaxExtents[0].y - this._cascadeMinExtents[0].y) / (this._cascadeMaxExtents[cascadeIndex].y - this._cascadeMinExtents[cascadeIndex].y); // y correction
                this._depthCorrection[cascadeIndex] = cascadeIndex === 0 ? 1 : (this._cascadeMaxExtents[cascadeIndex].z - this._cascadeMinExtents[cascadeIndex].z) / (this._cascadeMaxExtents[0].z - this._cascadeMinExtents[0].z);
            }
            effect.setDepthStencilTexture("shadowTexture" + lightIndex, shadowMap);
            effect.setTexture("depthTexture" + lightIndex, shadowMap);
            effect.setArray2("lightSizeUVCorrection" + lightIndex, this._lightSizeUVCorrection);
            effect.setArray("depthCorrection" + lightIndex, this._depthCorrection);
            effect.setFloat("penumbraDarkness" + lightIndex, this.penumbraDarkness);
            light._uniformBuffer.updateFloat4("shadowsInfo", this.getDarkness(), 1 / width, this._contactHardeningLightSizeUVRatio * width, this.frustumEdgeFalloff, lightIndex);
        } else {
            effect.setTexture("shadowTexture" + lightIndex, shadowMap);
            light._uniformBuffer.updateFloat4("shadowsInfo", this.getDarkness(), width, 1 / width, this.frustumEdgeFalloff, lightIndex);
        }
        light._uniformBuffer.updateFloat2("depthValues", this.getLight().getDepthMinZ(camera), this.getLight().getDepthMinZ(camera) + this.getLight().getDepthMaxZ(camera), lightIndex);
    }
    /**
     * Gets the transformation matrix of the first cascade used to project the meshes into the map from the light point of view.
     * (eq to view projection * shadow projection matrices)
     * @returns The transform matrix used to create the shadow map
     */ getTransformMatrix() {
        return this.getCascadeTransformMatrix(0);
    }
    /**
     * Disposes the ShadowGenerator.
     * Returns nothing.
     */ dispose() {
        super.dispose();
        if (this._freezeShadowCastersBoundingInfoObservable) {
            this._scene.onBeforeRenderObservable.remove(this._freezeShadowCastersBoundingInfoObservable);
            this._freezeShadowCastersBoundingInfoObservable = null;
        }
        if (this._depthReducer) {
            this._depthReducer.dispose();
            this._depthReducer = null;
        }
    }
    /**
     * Serializes the shadow generator setup to a json object.
     * @returns The serialized JSON object
     */ serialize() {
        const serializationObject = super.serialize();
        const shadowMap = this.getShadowMap();
        if (!shadowMap) {
            return serializationObject;
        }
        serializationObject.numCascades = this._numCascades;
        serializationObject.debug = this._debug;
        serializationObject.stabilizeCascades = this.stabilizeCascades;
        serializationObject.lambda = this._lambda;
        serializationObject.cascadeBlendPercentage = this.cascadeBlendPercentage;
        serializationObject.depthClamp = this._depthClamp;
        serializationObject.autoCalcDepthBounds = this.autoCalcDepthBounds;
        serializationObject.shadowMaxZ = this._shadowMaxZ;
        serializationObject.penumbraDarkness = this.penumbraDarkness;
        serializationObject.freezeShadowCastersBoundingInfo = this._freezeShadowCastersBoundingInfo;
        serializationObject.minDistance = this.minDistance;
        serializationObject.maxDistance = this.maxDistance;
        serializationObject.renderList = [];
        if (shadowMap.renderList) {
            for(let meshIndex = 0; meshIndex < shadowMap.renderList.length; meshIndex++){
                const mesh = shadowMap.renderList[meshIndex];
                serializationObject.renderList.push(mesh.id);
            }
        }
        return serializationObject;
    }
    /**
     * Parses a serialized ShadowGenerator and returns a new ShadowGenerator.
     * @param parsedShadowGenerator The JSON object to parse
     * @param scene The scene to create the shadow map for
     * @returns The parsed shadow generator
     */ static Parse(parsedShadowGenerator, scene) {
        const shadowGenerator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].Parse(parsedShadowGenerator, scene, (mapSize, light, camera)=>new CascadedShadowGenerator(mapSize, light, undefined, camera));
        if (parsedShadowGenerator.numCascades !== undefined) {
            shadowGenerator.numCascades = parsedShadowGenerator.numCascades;
        }
        if (parsedShadowGenerator.debug !== undefined) {
            shadowGenerator.debug = parsedShadowGenerator.debug;
        }
        if (parsedShadowGenerator.stabilizeCascades !== undefined) {
            shadowGenerator.stabilizeCascades = parsedShadowGenerator.stabilizeCascades;
        }
        if (parsedShadowGenerator.lambda !== undefined) {
            shadowGenerator.lambda = parsedShadowGenerator.lambda;
        }
        if (parsedShadowGenerator.cascadeBlendPercentage !== undefined) {
            shadowGenerator.cascadeBlendPercentage = parsedShadowGenerator.cascadeBlendPercentage;
        }
        if (parsedShadowGenerator.depthClamp !== undefined) {
            shadowGenerator.depthClamp = parsedShadowGenerator.depthClamp;
        }
        if (parsedShadowGenerator.autoCalcDepthBounds !== undefined) {
            shadowGenerator.autoCalcDepthBounds = parsedShadowGenerator.autoCalcDepthBounds;
        }
        if (parsedShadowGenerator.shadowMaxZ !== undefined) {
            shadowGenerator.shadowMaxZ = parsedShadowGenerator.shadowMaxZ;
        }
        if (parsedShadowGenerator.penumbraDarkness !== undefined) {
            shadowGenerator.penumbraDarkness = parsedShadowGenerator.penumbraDarkness;
        }
        if (parsedShadowGenerator.freezeShadowCastersBoundingInfo !== undefined) {
            shadowGenerator.freezeShadowCastersBoundingInfo = parsedShadowGenerator.freezeShadowCastersBoundingInfo;
        }
        if (parsedShadowGenerator.minDistance !== undefined && parsedShadowGenerator.maxDistance !== undefined) {
            shadowGenerator.setMinMaxDistance(parsedShadowGenerator.minDistance, parsedShadowGenerator.maxDistance);
        }
        return shadowGenerator;
    }
}
CascadedShadowGenerator._FrustumCornersNdcSpace = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-1.0, +1.0, -1.0),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](+1.0, +1.0, -1.0),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](+1.0, -1.0, -1.0),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-1.0, -1.0, -1.0),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-1.0, +1.0, +1.0),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](+1.0, +1.0, +1.0),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](+1.0, -1.0, +1.0),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-1.0, -1.0, +1.0)
];
/**
 * Name of the CSM class
 */ CascadedShadowGenerator.CLASSNAME = "CascadedShadowGenerator";
/**
 * Defines the default number of cascades used by the CSM.
 */ CascadedShadowGenerator.DEFAULT_CASCADES_COUNT = 4;
/**
 * Defines the minimum number of cascades used by the CSM.
 */ CascadedShadowGenerator.MIN_CASCADES_COUNT = 2;
/**
 * Defines the maximum number of cascades used by the CSM.
 */ CascadedShadowGenerator.MAX_CASCADES_COUNT = 4;
/**
 * @internal
 */ CascadedShadowGenerator._SceneComponentInitialization = (_)=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("ShadowGeneratorSceneComponent");
}; //# sourceMappingURL=cascadedShadowGenerator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/shadowLight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShadowLight",
    ()=>ShadowLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-ssr] (ecmascript)");
;
;
;
;
;
class ShadowLight extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"] {
    constructor(){
        super(...arguments);
        this._needProjectionMatrixCompute = true;
        this._viewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._projectionMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
    }
    _setPosition(value) {
        this._position = value;
    }
    /**
     * Sets the position the shadow will be casted from. Also use as the light position for both
     * point and spot lights.
     */ get position() {
        return this._position;
    }
    /**
     * Sets the position the shadow will be casted from. Also use as the light position for both
     * point and spot lights.
     */ set position(value) {
        this._setPosition(value);
    }
    _setDirection(value) {
        this._direction = value;
    }
    /**
     * In 2d mode (needCube being false), gets the direction used to cast the shadow.
     * Also use as the light direction on spot and directional lights.
     */ get direction() {
        return this._direction;
    }
    /**
     * In 2d mode (needCube being false), sets the direction used to cast the shadow.
     * Also use as the light direction on spot and directional lights.
     */ set direction(value) {
        this._setDirection(value);
    }
    /**
     * Gets the shadow projection clipping minimum z value.
     */ get shadowMinZ() {
        return this._shadowMinZ;
    }
    /**
     * Sets the shadow projection clipping minimum z value.
     */ set shadowMinZ(value) {
        this._shadowMinZ = value;
        this.forceProjectionMatrixCompute();
    }
    /**
     * Sets the shadow projection clipping maximum z value.
     */ get shadowMaxZ() {
        return this._shadowMaxZ;
    }
    /**
     * Gets the shadow projection clipping maximum z value.
     */ set shadowMaxZ(value) {
        this._shadowMaxZ = value;
        this.forceProjectionMatrixCompute();
    }
    /**
     * Computes the transformed information (transformedPosition and transformedDirection in World space) of the current light
     * @returns true if the information has been computed, false if it does not need to (no parenting)
     */ computeTransformedInformation() {
        if (this.parent && this.parent.getWorldMatrix) {
            if (!this.transformedPosition) {
                this.transformedPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition);
            // In case the direction is present.
            if (this.direction) {
                if (!this.transformedDirection) {
                    this.transformedDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection);
            }
            return true;
        }
        return false;
    }
    /**
     * Return the depth scale used for the shadow map.
     * @returns the depth scale.
     */ getDepthScale() {
        return 50.0;
    }
    /**
     * Get the direction to use to render the shadow map. In case of cube texture, the face index can be passed.
     * @param faceIndex The index of the face we are computed the direction to generate shadow
     * @returns The set direction in 2d mode otherwise the direction to the cubemap face if needCube() is true
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getShadowDirection(faceIndex) {
        return this.transformedDirection ? this.transformedDirection : this.direction;
    }
    /**
     * If computeTransformedInformation has been called, returns the ShadowLight absolute position in the world. Otherwise, returns the local position.
     * @returns the position vector in world space
     */ getAbsolutePosition() {
        return this.transformedPosition ? this.transformedPosition : this.position;
    }
    /**
     * Sets the ShadowLight direction toward the passed target.
     * @param target The point to target in local space
     * @returns the updated ShadowLight direction
     */ setDirectionToTarget(target) {
        this.direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Normalize(target.subtract(this.position));
        return this.direction;
    }
    /**
     * Returns the light rotation in euler definition.
     * @returns the x y z rotation in local space.
     */ getRotation() {
        this.direction.normalize();
        const xaxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(this.direction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"].Y);
        const yaxis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(xaxis, this.direction);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].RotationFromAxis(xaxis, yaxis, this.direction);
    }
    /**
     * Returns whether or not the shadow generation require a cube texture or a 2d texture.
     * @returns true if a cube texture needs to be use
     */ needCube() {
        return false;
    }
    /**
     * Detects if the projection matrix requires to be recomputed this frame.
     * @returns true if it requires to be recomputed otherwise, false.
     */ needProjectionMatrixCompute() {
        return this._needProjectionMatrixCompute;
    }
    /**
     * Forces the shadow generator to recompute the projection matrix even if position and direction did not changed.
     */ forceProjectionMatrixCompute() {
        this._needProjectionMatrixCompute = true;
    }
    /** @internal */ _initCache() {
        super._initCache();
        this._cache.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /** @internal */ _isSynchronized() {
        if (!this._cache.position.equals(this.position)) {
            return false;
        }
        return true;
    }
    /**
     * Computes the world matrix of the node
     * @param force defines if the cache version should be invalidated forcing the world matrix to be created from scratch
     * @returns the world matrix
     */ computeWorldMatrix(force) {
        if (!force && this.isSynchronized()) {
            this._currentRenderId = this.getScene().getRenderId();
            return this._worldMatrix;
        }
        this._updateCache();
        this._cache.position.copyFrom(this.position);
        if (!this._worldMatrix) {
            this._worldMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix);
        if (this.parent && this.parent.getWorldMatrix) {
            this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent();
        }
        // Cache the determinant
        this._worldMatrixDeterminantIsDirty = true;
        return this._worldMatrix;
    }
    /**
     * Gets the minZ used for shadow according to both the scene and the light.
     * @param activeCamera The camera we are returning the min for
     * @returns the depth min z
     */ getDepthMinZ(activeCamera) {
        return this.shadowMinZ !== undefined ? this.shadowMinZ : activeCamera?.minZ || 0;
    }
    /**
     * Gets the maxZ used for shadow according to both the scene and the light.
     * @param activeCamera The camera we are returning the max for
     * @returns the depth max z
     */ getDepthMaxZ(activeCamera) {
        return this.shadowMaxZ !== undefined ? this.shadowMaxZ : activeCamera?.maxZ || 10000;
    }
    /**
     * Sets the shadow projection matrix in parameter to the generated projection matrix.
     * @param matrix The matrix to updated with the projection information
     * @param viewMatrix The transform matrix of the light
     * @param renderList The list of mesh to render in the map
     * @returns The current light
     */ setShadowProjectionMatrix(matrix, viewMatrix, renderList) {
        if (this.customProjectionMatrixBuilder) {
            this.customProjectionMatrixBuilder(viewMatrix, renderList, matrix);
        } else {
            this._setDefaultShadowProjectionMatrix(matrix, viewMatrix, renderList);
        }
        return this;
    }
    /** @internal */ _syncParentEnabledState() {
        super._syncParentEnabledState();
        if (!this.parent || !this.parent.getWorldMatrix) {
            this.transformedPosition = null;
            this.transformedDirection = null;
        }
    }
    /**
     * Returns the view matrix.
     * @param faceIndex The index of the face for which we want to extract the view matrix. Only used for point light types.
     * @returns The view matrix. Can be null, if a view matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).
     */ getViewMatrix(faceIndex) {
        const lightDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        let lightPosition = this.position;
        if (this.computeTransformedInformation()) {
            lightPosition = this.transformedPosition;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].NormalizeToRef(this.getShadowDirection(faceIndex), lightDirection);
        if (Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(lightDirection, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up())) === 1.0) {
            lightDirection.z = 0.0000000000001; // Required to avoid perfectly perpendicular light
        }
        const lightTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        lightPosition.addToRef(lightDirection, lightTarget);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(lightPosition, lightTarget, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up(), this._viewMatrix);
        return this._viewMatrix;
    }
    /**
     * Returns the projection matrix.
     * Note that viewMatrix and renderList are optional and are only used by lights that calculate the projection matrix from a list of meshes (e.g. directional lights with automatic extents calculation).
     * @param viewMatrix The view transform matrix of the light (optional).
     * @param renderList The list of meshes to take into account when calculating the projection matrix (optional).
     * @returns The projection matrix. Can be null, if a projection matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).
     */ getProjectionMatrix(viewMatrix, renderList) {
        this.setShadowProjectionMatrix(this._projectionMatrix, viewMatrix ?? this._viewMatrix, renderList ?? []);
        return this._projectionMatrix;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], ShadowLight.prototype, "position", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], ShadowLight.prototype, "direction", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ShadowLight.prototype, "shadowMinZ", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ShadowLight.prototype, "shadowMaxZ", null); //# sourceMappingURL=shadowLight.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/directionalLight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DirectionalLight",
    ()=>DirectionalLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/shadowLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("Light_Type_1", (name, scene)=>{
    return ()=>new DirectionalLight(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class DirectionalLight extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowLight"] {
    /**
     * Fix frustum size for the shadow generation. This is disabled if the value is 0.
     */ get shadowFrustumSize() {
        return this._shadowFrustumSize;
    }
    /**
     * Specifies a fix frustum size for the shadow generation.
     */ set shadowFrustumSize(value) {
        this._shadowFrustumSize = value;
        this.forceProjectionMatrixCompute();
    }
    /**
     * Gets the shadow projection scale against the optimal computed one.
     * 0.1 by default which means that the projection window is increase by 10% from the optimal size.
     * This does not impact in fixed frustum size (shadowFrustumSize being set)
     */ get shadowOrthoScale() {
        return this._shadowOrthoScale;
    }
    /**
     * Sets the shadow projection scale against the optimal computed one.
     * 0.1 by default which means that the projection window is increase by 10% from the optimal size.
     * This does not impact in fixed frustum size (shadowFrustumSize being set)
     */ set shadowOrthoScale(value) {
        this._shadowOrthoScale = value;
        this.forceProjectionMatrixCompute();
    }
    /**
     * Gets or sets the orthoLeft property used to build the light frustum
     */ get orthoLeft() {
        return this._orthoLeft;
    }
    set orthoLeft(left) {
        this._orthoLeft = left;
    }
    /**
     * Gets or sets the orthoRight property used to build the light frustum
     */ get orthoRight() {
        return this._orthoRight;
    }
    set orthoRight(right) {
        this._orthoRight = right;
    }
    /**
     * Gets or sets the orthoTop property used to build the light frustum
     */ get orthoTop() {
        return this._orthoTop;
    }
    set orthoTop(top) {
        this._orthoTop = top;
    }
    /**
     * Gets or sets the orthoBottom property used to build the light frustum
     */ get orthoBottom() {
        return this._orthoBottom;
    }
    set orthoBottom(bottom) {
        this._orthoBottom = bottom;
    }
    /**
     * Creates a DirectionalLight object in the scene, oriented towards the passed direction (Vector3).
     * The directional light is emitted from everywhere in the given direction.
     * It can cast shadows.
     * Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
     * @param name The friendly name of the light
     * @param direction The direction of the light
     * @param scene The scene the light belongs to
     */ constructor(name, direction, scene){
        super(name, scene);
        this._shadowFrustumSize = 0;
        this._shadowOrthoScale = 0.1;
        /**
         * Automatically compute the projection matrix to best fit (including all the casters)
         * on each frame.
         */ this.autoUpdateExtends = true;
        /**
         * Automatically compute the shadowMinZ and shadowMaxZ for the projection matrix to best fit (including all the casters)
         * on each frame. autoUpdateExtends must be set to true for this to work
         */ this.autoCalcShadowZBounds = false;
        // Cache
        this._orthoLeft = Number.MAX_VALUE;
        this._orthoRight = Number.MIN_VALUE;
        this._orthoTop = Number.MIN_VALUE;
        this._orthoBottom = Number.MAX_VALUE;
        this.position = direction.scale(-1.0);
        this.direction = direction;
    }
    /**
     * Returns the string "DirectionalLight".
     * @returns The class name
     */ getClassName() {
        return "DirectionalLight";
    }
    /**
     * Returns the integer 1.
     * @returns The light Type id as a constant defines in Light.LIGHTTYPEID_x
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    getTypeID() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_DIRECTIONALLIGHT;
    }
    /**
     * Sets the passed matrix "matrix" as projection matrix for the shadows cast by the light according to the passed view matrix.
     * Returns the DirectionalLight Shadow projection matrix.
     * @param matrix
     * @param viewMatrix
     * @param renderList
     */ _setDefaultShadowProjectionMatrix(matrix, viewMatrix, renderList) {
        if (this.shadowFrustumSize > 0) {
            this._setDefaultFixedFrustumShadowProjectionMatrix(matrix);
        } else {
            this._setDefaultAutoExtendShadowProjectionMatrix(matrix, viewMatrix, renderList);
        }
    }
    /**
     * Sets the passed matrix "matrix" as fixed frustum projection matrix for the shadows cast by the light according to the passed view matrix.
     * Returns the DirectionalLight Shadow projection matrix.
     * @param matrix
     */ _setDefaultFixedFrustumShadowProjectionMatrix(matrix) {
        const activeCamera = this.getScene().activeCamera;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, this.shadowMinZ !== undefined ? this.shadowMinZ : activeCamera ? activeCamera.minZ : 0, this.shadowMaxZ !== undefined ? this.shadowMaxZ : activeCamera ? activeCamera.maxZ : 10000, matrix, this.getScene().getEngine().isNDCHalfZRange);
    }
    /**
     * Sets the passed matrix "matrix" as auto extend projection matrix for the shadows cast by the light according to the passed view matrix.
     * Returns the DirectionalLight Shadow projection matrix.
     * @param matrix
     * @param viewMatrix
     * @param renderList
     */ _setDefaultAutoExtendShadowProjectionMatrix(matrix, viewMatrix, renderList) {
        const activeCamera = this.getScene().activeCamera;
        // Check extends
        if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
            const tempVector3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            this._orthoLeft = Number.MAX_VALUE;
            this._orthoRight = -Number.MAX_VALUE;
            this._orthoTop = -Number.MAX_VALUE;
            this._orthoBottom = Number.MAX_VALUE;
            let shadowMinZ = Number.MAX_VALUE;
            let shadowMaxZ = -Number.MAX_VALUE;
            for(let meshIndex = 0; meshIndex < renderList.length; meshIndex++){
                const mesh = renderList[meshIndex];
                if (!mesh) {
                    continue;
                }
                const boundingInfo = mesh.getBoundingInfo();
                const boundingBox = boundingInfo.boundingBox;
                for(let index = 0; index < boundingBox.vectorsWorld.length; index++){
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(boundingBox.vectorsWorld[index], viewMatrix, tempVector3);
                    if (tempVector3.x < this._orthoLeft) {
                        this._orthoLeft = tempVector3.x;
                    }
                    if (tempVector3.y < this._orthoBottom) {
                        this._orthoBottom = tempVector3.y;
                    }
                    if (tempVector3.x > this._orthoRight) {
                        this._orthoRight = tempVector3.x;
                    }
                    if (tempVector3.y > this._orthoTop) {
                        this._orthoTop = tempVector3.y;
                    }
                    if (this.autoCalcShadowZBounds) {
                        if (tempVector3.z < shadowMinZ) {
                            shadowMinZ = tempVector3.z;
                        }
                        if (tempVector3.z > shadowMaxZ) {
                            shadowMaxZ = tempVector3.z;
                        }
                    }
                }
            }
            if (this.autoCalcShadowZBounds) {
                this._shadowMinZ = shadowMinZ;
                this._shadowMaxZ = shadowMaxZ;
            }
        }
        const xOffset = this._orthoRight - this._orthoLeft;
        const yOffset = this._orthoTop - this._orthoBottom;
        const minZ = this.shadowMinZ !== undefined ? this.shadowMinZ : activeCamera?.minZ || 0;
        const maxZ = this.shadowMaxZ !== undefined ? this.shadowMaxZ : activeCamera?.maxZ || 10000;
        const useReverseDepthBuffer = this.getScene().getEngine().useReverseDepthBuffer;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].OrthoOffCenterLHToRef(this._orthoLeft - xOffset * this.shadowOrthoScale, this._orthoRight + xOffset * this.shadowOrthoScale, this._orthoBottom - yOffset * this.shadowOrthoScale, this._orthoTop + yOffset * this.shadowOrthoScale, useReverseDepthBuffer ? maxZ : minZ, useReverseDepthBuffer ? minZ : maxZ, matrix, this.getScene().getEngine().isNDCHalfZRange);
    }
    _buildUniformLayout() {
        this._uniformBuffer.addUniform("vLightData", 4);
        this._uniformBuffer.addUniform("vLightDiffuse", 4);
        this._uniformBuffer.addUniform("vLightSpecular", 4);
        this._uniformBuffer.addUniform("shadowsInfo", 3);
        this._uniformBuffer.addUniform("depthValues", 2);
        this._uniformBuffer.create();
    }
    /**
     * Sets the passed Effect object with the DirectionalLight transformed position (or position if not parented) and the passed name.
     * @param effect The effect to update
     * @param lightIndex The index of the light in the effect to update
     * @returns The directional light
     */ transferToEffect(effect, lightIndex) {
        if (this.computeTransformedInformation()) {
            this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, lightIndex);
            return this;
        }
        this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, lightIndex);
        return this;
    }
    transferToNodeMaterialEffect(effect, lightDataUniformName) {
        if (this.computeTransformedInformation()) {
            effect.setFloat3(lightDataUniformName, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z);
            return this;
        }
        effect.setFloat3(lightDataUniformName, this.direction.x, this.direction.y, this.direction.z);
        return this;
    }
    /**
     * Gets the minZ used for shadow according to both the scene and the light.
     *
     * Values are fixed on directional lights as it relies on an ortho projection hence the need to convert being
     * -1 and 1 to 0 and 1 doing (depth + min) / (min + max) -> (depth + 1) / (1 + 1) -> (depth * 0.5) + 0.5.
     * (when not using reverse depth buffer / NDC half Z range)
     * @param _activeCamera The camera we are returning the min for (not used)
     * @returns the depth min z
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getDepthMinZ(_activeCamera) {
        const engine = this._scene.getEngine();
        return !engine.useReverseDepthBuffer && engine.isNDCHalfZRange ? 0 : 1;
    }
    /**
     * Gets the maxZ used for shadow according to both the scene and the light.
     *
     * Values are fixed on directional lights as it relies on an ortho projection hence the need to convert being
     * -1 and 1 to 0 and 1 doing (depth + min) / (min + max) -> (depth + 1) / (1 + 1) -> (depth * 0.5) + 0.5.
     * (when not using reverse depth buffer / NDC half Z range)
     * @param _activeCamera The camera we are returning the max for
     * @returns the depth max z
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getDepthMaxZ(_activeCamera) {
        const engine = this._scene.getEngine();
        return engine.useReverseDepthBuffer && engine.isNDCHalfZRange ? 0 : 1;
    }
    /**
     * Prepares the list of defines specific to the light type.
     * @param defines the list of defines
     * @param lightIndex defines the index of the light for the effect
     */ prepareLightSpecificDefines(defines, lightIndex) {
        defines["DIRLIGHT" + lightIndex] = true;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], DirectionalLight.prototype, "shadowFrustumSize", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], DirectionalLight.prototype, "shadowOrthoScale", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], DirectionalLight.prototype, "autoUpdateExtends", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], DirectionalLight.prototype, "autoCalcShadowZBounds", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("orthoLeft")
], DirectionalLight.prototype, "_orthoLeft", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("orthoRight")
], DirectionalLight.prototype, "_orthoRight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("orthoTop")
], DirectionalLight.prototype, "_orthoTop", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("orthoBottom")
], DirectionalLight.prototype, "_orthoBottom", void 0);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DirectionalLight", DirectionalLight); //# sourceMappingURL=directionalLight.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/hemisphericLight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HemisphericLight",
    ()=>HemisphericLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("Light_Type_3", (name, scene)=>{
    return ()=>new HemisphericLight(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class HemisphericLight extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"] {
    /**
     * Creates a HemisphericLight object in the scene according to the passed direction (Vector3).
     * The HemisphericLight simulates the ambient environment light, so the passed direction is the light reflection direction, not the incoming direction.
     * The HemisphericLight can't cast shadows.
     * Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
     * @param name The friendly name of the light
     * @param direction The direction of the light reflection
     * @param scene The scene the light belongs to
     */ constructor(name, direction, scene){
        super(name, scene);
        /**
         * The groundColor is the light in the opposite direction to the one specified during creation.
         * You can think of the diffuse and specular light as coming from the centre of the object in the given direction and the groundColor light in the opposite direction.
         */ this.groundColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.0, 0.0, 0.0);
        this.direction = direction || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up();
    }
    _buildUniformLayout() {
        this._uniformBuffer.addUniform("vLightData", 4);
        this._uniformBuffer.addUniform("vLightDiffuse", 4);
        this._uniformBuffer.addUniform("vLightSpecular", 4);
        this._uniformBuffer.addUniform("vLightGround", 3);
        this._uniformBuffer.addUniform("shadowsInfo", 3);
        this._uniformBuffer.addUniform("depthValues", 2);
        this._uniformBuffer.create();
    }
    /**
     * Returns the string "HemisphericLight".
     * @returns The class name
     */ getClassName() {
        return "HemisphericLight";
    }
    /**
     * Sets the HemisphericLight direction towards the passed target (Vector3).
     * Returns the updated direction.
     * @param target The target the direction should point to
     * @returns The computed direction
     */ setDirectionToTarget(target) {
        this.direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Normalize(target.subtract(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero()));
        return this.direction;
    }
    /**
     * Returns the shadow generator associated to the light.
     * @returns Always null for hemispheric lights because it does not support shadows.
     */ getShadowGenerator() {
        return null;
    }
    /**
     * Sets the passed Effect object with the HemisphericLight normalized direction and color and the passed name (string).
     * @param _effect The effect to update
     * @param lightIndex The index of the light in the effect to update
     * @returns The hemispheric light
     */ transferToEffect(_effect, lightIndex) {
        const normalizeDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Normalize(this.direction);
        this._uniformBuffer.updateFloat4("vLightData", normalizeDirection.x, normalizeDirection.y, normalizeDirection.z, 0.0, lightIndex);
        this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), lightIndex);
        return this;
    }
    transferToNodeMaterialEffect(effect, lightDataUniformName) {
        const normalizeDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Normalize(this.direction);
        effect.setFloat3(lightDataUniformName, normalizeDirection.x, normalizeDirection.y, normalizeDirection.z);
        return this;
    }
    /**
     * Computes the world matrix of the node
     * @returns the world matrix
     */ computeWorldMatrix() {
        if (!this._worldMatrix) {
            this._worldMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        }
        return this._worldMatrix;
    }
    /**
     * Returns the integer 3.
     * @returns The light Type id as a constant defines in Light.LIGHTTYPEID_x
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    getTypeID() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_HEMISPHERICLIGHT;
    }
    /**
     * Prepares the list of defines specific to the light type.
     * @param defines the list of defines
     * @param lightIndex defines the index of the light for the effect
     */ prepareLightSpecificDefines(defines, lightIndex) {
        defines["HEMILIGHT" + lightIndex] = true;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], HemisphericLight.prototype, "groundColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], HemisphericLight.prototype, "direction", void 0);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.HemisphericLight", HemisphericLight); //# sourceMappingURL=hemisphericLight.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/spotLight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotLight",
    ()=>SpotLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/shadowLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("Light_Type_2", (name, scene)=>{
    return ()=>new SpotLight(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), 0, 0, scene);
});
class SpotLight extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowLight"] {
    /**
     * Gets or sets the IES profile texture used to create the spotlight
     * @see https://playground.babylonjs.com/#UIAXAU#1
     */ get iesProfileTexture() {
        return this._iesProfileTexture;
    }
    set iesProfileTexture(value) {
        if (this._iesProfileTexture === value) {
            return;
        }
        this._iesProfileTexture = value;
        if (this._iesProfileTexture && SpotLight._IsTexture(this._iesProfileTexture)) {
            this._iesProfileTexture.onLoadObservable.addOnce(()=>{
                this._markMeshesAsLightDirty();
            });
        }
    }
    /**
     * Gets the cone angle of the spot light in Radians.
     */ get angle() {
        return this._angle;
    }
    /**
     * Sets the cone angle of the spot light in Radians.
     */ set angle(value) {
        this._angle = value;
        this._cosHalfAngle = Math.cos(value * 0.5);
        this._projectionTextureProjectionLightDirty = true;
        this.forceProjectionMatrixCompute();
        this._computeAngleValues();
    }
    /**
     * Only used in gltf falloff mode, this defines the angle where
     * the directional falloff will start before cutting at angle which could be seen
     * as outer angle.
     */ get innerAngle() {
        return this._innerAngle;
    }
    /**
     * Only used in gltf falloff mode, this defines the angle where
     * the directional falloff will start before cutting at angle which could be seen
     * as outer angle.
     */ set innerAngle(value) {
        this._innerAngle = value;
        this._computeAngleValues();
    }
    /**
     * Allows scaling the angle of the light for shadow generation only.
     */ get shadowAngleScale() {
        return this._shadowAngleScale;
    }
    /**
     * Allows scaling the angle of the light for shadow generation only.
     */ set shadowAngleScale(value) {
        this._shadowAngleScale = value;
        this.forceProjectionMatrixCompute();
    }
    /**
     * Allows reading the projection texture
     */ get projectionTextureMatrix() {
        return this._projectionTextureMatrix;
    }
    /**
     * Gets the near clip of the Spotlight for texture projection.
     */ get projectionTextureLightNear() {
        return this._projectionTextureLightNear;
    }
    /**
     * Sets the near clip of the Spotlight for texture projection.
     */ set projectionTextureLightNear(value) {
        this._projectionTextureLightNear = value;
        this._projectionTextureProjectionLightDirty = true;
    }
    /**
     * Gets the far clip of the Spotlight for texture projection.
     */ get projectionTextureLightFar() {
        return this._projectionTextureLightFar;
    }
    /**
     * Sets the far clip of the Spotlight for texture projection.
     */ set projectionTextureLightFar(value) {
        this._projectionTextureLightFar = value;
        this._projectionTextureProjectionLightDirty = true;
    }
    /**
     * Gets the Up vector of the Spotlight for texture projection.
     */ get projectionTextureUpDirection() {
        return this._projectionTextureUpDirection;
    }
    /**
     * Sets the Up vector of the Spotlight for texture projection.
     */ set projectionTextureUpDirection(value) {
        this._projectionTextureUpDirection = value;
        this._projectionTextureProjectionLightDirty = true;
    }
    /**
     * Gets the projection texture of the light.
     */ get projectionTexture() {
        return this._projectionTexture;
    }
    /**
     * Sets the projection texture of the light.
     */ set projectionTexture(value) {
        if (this._projectionTexture === value) {
            return;
        }
        this._projectionTexture = value;
        this._projectionTextureDirty = true;
        if (this._projectionTexture && !this._projectionTexture.isReady()) {
            if (SpotLight._IsProceduralTexture(this._projectionTexture)) {
                this._projectionTexture.getEffect().executeWhenCompiled(()=>{
                    this._markMeshesAsLightDirty();
                });
            } else if (SpotLight._IsTexture(this._projectionTexture)) {
                this._projectionTexture.onLoadObservable.addOnce(()=>{
                    this._markMeshesAsLightDirty();
                });
            }
        }
    }
    static _IsProceduralTexture(texture) {
        return texture.onGeneratedObservable !== undefined;
    }
    static _IsTexture(texture) {
        return texture.onLoadObservable !== undefined;
    }
    /**
     * Gets or sets the light projection matrix as used by the projection texture
     */ get projectionTextureProjectionLightMatrix() {
        return this._projectionTextureProjectionLightMatrix;
    }
    set projectionTextureProjectionLightMatrix(projection) {
        this._projectionTextureProjectionLightMatrix = projection;
        this._projectionTextureProjectionLightDirty = false;
        this._projectionTextureDirty = true;
    }
    /**
     * Creates a SpotLight object in the scene. A spot light is a simply light oriented cone.
     * It can cast shadows.
     * Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
     * @param name The light friendly name
     * @param position The position of the spot light in the scene
     * @param direction The direction of the light in the scene
     * @param angle The cone angle of the light in Radians
     * @param exponent The light decay speed with the distance from the emission spot
     * @param scene The scene the lights belongs to
     */ constructor(name, position, direction, angle, exponent, scene){
        super(name, scene);
        this._innerAngle = 0;
        this._iesProfileTexture = null;
        this._projectionTextureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._projectionTextureLightNear = 1e-6;
        this._projectionTextureLightFar = 1000.0;
        this._projectionTextureUpDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up();
        this._projectionTextureViewLightDirty = true;
        this._projectionTextureProjectionLightDirty = true;
        this._projectionTextureDirty = true;
        this._projectionTextureViewTargetVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._projectionTextureViewLightMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._projectionTextureProjectionLightMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._projectionTextureScalingMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromValues(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0);
        this.position = position;
        this.direction = direction;
        this.angle = angle;
        this.exponent = exponent;
    }
    /**
     * Returns the string "SpotLight".
     * @returns the class name
     */ getClassName() {
        return "SpotLight";
    }
    /**
     * Returns the integer 2.
     * @returns The light Type id as a constant defines in Light.LIGHTTYPEID_x
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    getTypeID() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_SPOTLIGHT;
    }
    /**
     * Overrides the direction setter to recompute the projection texture view light Matrix.
     * @param value
     */ _setDirection(value) {
        super._setDirection(value);
        this._projectionTextureViewLightDirty = true;
    }
    /**
     * Overrides the position setter to recompute the projection texture view light Matrix.
     * @param value
     */ _setPosition(value) {
        super._setPosition(value);
        this._projectionTextureViewLightDirty = true;
    }
    /**
     * Sets the passed matrix "matrix" as perspective projection matrix for the shadows and the passed view matrix with the fov equal to the SpotLight angle and and aspect ratio of 1.0.
     * Returns the SpotLight.
     * @param matrix
     * @param viewMatrix
     * @param renderList
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _setDefaultShadowProjectionMatrix(matrix, viewMatrix, renderList) {
        const activeCamera = this.getScene().activeCamera;
        if (!activeCamera) {
            return;
        }
        this._shadowAngleScale = this._shadowAngleScale || 1;
        const angle = this._shadowAngleScale * this._angle;
        const minZ = this.shadowMinZ !== undefined ? this.shadowMinZ : activeCamera.minZ;
        const maxZ = this.shadowMaxZ !== undefined ? this.shadowMaxZ : activeCamera.maxZ;
        const useReverseDepthBuffer = this.getScene().getEngine().useReverseDepthBuffer;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].PerspectiveFovLHToRef(angle, 1.0, useReverseDepthBuffer ? maxZ : minZ, useReverseDepthBuffer ? minZ : maxZ, matrix, true, this._scene.getEngine().isNDCHalfZRange, undefined, useReverseDepthBuffer);
    }
    _computeProjectionTextureViewLightMatrix() {
        this._projectionTextureViewLightDirty = false;
        this._projectionTextureDirty = true;
        this.getAbsolutePosition().addToRef(this.getShadowDirection(), this._projectionTextureViewTargetVector);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(this.getAbsolutePosition(), this._projectionTextureViewTargetVector, this._projectionTextureUpDirection, this._projectionTextureViewLightMatrix);
    }
    _computeProjectionTextureProjectionLightMatrix() {
        this._projectionTextureProjectionLightDirty = false;
        this._projectionTextureDirty = true;
        const lightFar = this.projectionTextureLightFar;
        const lightNear = this.projectionTextureLightNear;
        const p = lightFar / (lightFar - lightNear);
        const q = -p * lightNear;
        const s = 1.0 / Math.tan(this._angle / 2.0);
        const a = 1.0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromValuesToRef(s / a, 0.0, 0.0, 0.0, 0.0, s, 0.0, 0.0, 0.0, 0.0, p, 1.0, 0.0, 0.0, q, 0.0, this._projectionTextureProjectionLightMatrix);
    }
    /**
     * Main function for light texture projection matrix computing.
     */ _computeProjectionTextureMatrix() {
        this._projectionTextureDirty = false;
        this._projectionTextureViewLightMatrix.multiplyToRef(this._projectionTextureProjectionLightMatrix, this._projectionTextureMatrix);
        if (this._projectionTexture instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"]) {
            const u = this._projectionTexture.uScale / 2.0;
            const v = this._projectionTexture.vScale / 2.0;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromValuesToRef(u, 0.0, 0.0, 0.0, 0.0, v, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0, this._projectionTextureScalingMatrix);
        }
        this._projectionTextureMatrix.multiplyToRef(this._projectionTextureScalingMatrix, this._projectionTextureMatrix);
    }
    _buildUniformLayout() {
        this._uniformBuffer.addUniform("vLightData", 4);
        this._uniformBuffer.addUniform("vLightDiffuse", 4);
        this._uniformBuffer.addUniform("vLightSpecular", 4);
        this._uniformBuffer.addUniform("vLightDirection", 3);
        this._uniformBuffer.addUniform("vLightFalloff", 4);
        this._uniformBuffer.addUniform("shadowsInfo", 3);
        this._uniformBuffer.addUniform("depthValues", 2);
        this._uniformBuffer.create();
    }
    _computeAngleValues() {
        this._lightAngleScale = 1.0 / Math.max(0.001, Math.cos(this._innerAngle * 0.5) - this._cosHalfAngle);
        this._lightAngleOffset = -this._cosHalfAngle * this._lightAngleScale;
    }
    /**
     * Sets the passed Effect "effect" with the Light textures.
     * @param effect The effect to update
     * @param lightIndex The index of the light in the effect to update
     * @returns The light
     */ transferTexturesToEffect(effect, lightIndex) {
        if (this.projectionTexture && this.projectionTexture.isReady()) {
            if (this._projectionTextureViewLightDirty) {
                this._computeProjectionTextureViewLightMatrix();
            }
            if (this._projectionTextureProjectionLightDirty) {
                this._computeProjectionTextureProjectionLightMatrix();
            }
            if (this._projectionTextureDirty) {
                this._computeProjectionTextureMatrix();
            }
            effect.setMatrix("textureProjectionMatrix" + lightIndex, this._projectionTextureMatrix);
            effect.setTexture("projectionLightTexture" + lightIndex, this.projectionTexture);
        }
        if (this._iesProfileTexture && this._iesProfileTexture.isReady()) {
            effect.setTexture("iesLightTexture" + lightIndex, this._iesProfileTexture);
        }
        return this;
    }
    /**
     * Sets the passed Effect object with the SpotLight transformed position (or position if not parented) and normalized direction.
     * @param effect The effect to update
     * @param lightIndex The index of the light in the effect to update
     * @returns The spot light
     */ transferToEffect(effect, lightIndex) {
        let normalizeDirection;
        const offset = this._scene.floatingOriginOffset;
        if (this.computeTransformedInformation()) {
            this._uniformBuffer.updateFloat4("vLightData", this.transformedPosition.x - offset.x, this.transformedPosition.y - offset.y, this.transformedPosition.z - offset.z, this.exponent, lightIndex);
            normalizeDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Normalize(this.transformedDirection);
        } else {
            this._uniformBuffer.updateFloat4("vLightData", this.position.x - offset.x, this.position.y - offset.y, this.position.z - offset.z, this.exponent, lightIndex);
            normalizeDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Normalize(this.direction);
        }
        this._uniformBuffer.updateFloat4("vLightDirection", normalizeDirection.x, normalizeDirection.y, normalizeDirection.z, this._cosHalfAngle, lightIndex);
        this._uniformBuffer.updateFloat4("vLightFalloff", this.range, this._inverseSquaredRange, this._lightAngleScale, this._lightAngleOffset, lightIndex);
        return this;
    }
    transferToNodeMaterialEffect(effect, lightDataUniformName) {
        let normalizeDirection;
        if (this.computeTransformedInformation()) {
            normalizeDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Normalize(this.transformedDirection);
        } else {
            normalizeDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Normalize(this.direction);
        }
        if (this.getScene().useRightHandedSystem) {
            effect.setFloat3(lightDataUniformName, -normalizeDirection.x, -normalizeDirection.y, -normalizeDirection.z);
        } else {
            effect.setFloat3(lightDataUniformName, normalizeDirection.x, normalizeDirection.y, normalizeDirection.z);
        }
        return this;
    }
    /**
     * Disposes the light and the associated resources.
     */ dispose() {
        super.dispose();
        if (this._projectionTexture) {
            this._projectionTexture.dispose();
        }
        if (this._iesProfileTexture) {
            this._iesProfileTexture.dispose();
            this._iesProfileTexture = null;
        }
    }
    /**
     * Gets the minZ used for shadow according to both the scene and the light.
     * @param activeCamera The camera we are returning the min for
     * @returns the depth min z
     */ getDepthMinZ(activeCamera) {
        const engine = this._scene.getEngine();
        const minZ = this.shadowMinZ !== undefined ? this.shadowMinZ : activeCamera?.minZ ?? 0;
        return engine.useReverseDepthBuffer && engine.isNDCHalfZRange ? minZ : this._scene.getEngine().isNDCHalfZRange ? 0 : minZ;
    }
    /**
     * Gets the maxZ used for shadow according to both the scene and the light.
     * @param activeCamera The camera we are returning the max for
     * @returns the depth max z
     */ getDepthMaxZ(activeCamera) {
        const engine = this._scene.getEngine();
        const maxZ = this.shadowMaxZ !== undefined ? this.shadowMaxZ : activeCamera?.maxZ ?? 10000;
        return engine.useReverseDepthBuffer && engine.isNDCHalfZRange ? 0 : maxZ;
    }
    /**
     * Prepares the list of defines specific to the light type.
     * @param defines the list of defines
     * @param lightIndex defines the index of the light for the effect
     */ prepareLightSpecificDefines(defines, lightIndex) {
        defines["SPOTLIGHT" + lightIndex] = true;
        defines["PROJECTEDLIGHTTEXTURE" + lightIndex] = this.projectionTexture && this.projectionTexture.isReady() ? true : false;
        defines["IESLIGHTTEXTURE" + lightIndex] = this._iesProfileTexture && this._iesProfileTexture.isReady() ? true : false;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], SpotLight.prototype, "angle", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], SpotLight.prototype, "innerAngle", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], SpotLight.prototype, "shadowAngleScale", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], SpotLight.prototype, "exponent", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], SpotLight.prototype, "projectionTextureLightNear", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], SpotLight.prototype, "projectionTextureLightFar", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], SpotLight.prototype, "projectionTextureUpDirection", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])("projectedLightTexture")
], SpotLight.prototype, "_projectionTexture", void 0);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SpotLight", SpotLight); //# sourceMappingURL=spotLight.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShadowGeneratorSceneComponent",
    ()=>ShadowGeneratorSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$cascadedShadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/cascadedShadowGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileParser.function.js [app-ssr] (ecmascript)");
;
;
;
;
// Adds the parser to the scene parsers.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddParser"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_SHADOWGENERATOR, (parsedData, scene)=>{
    // Shadows
    if (parsedData.shadowGenerators !== undefined && parsedData.shadowGenerators !== null) {
        for(let index = 0, cache = parsedData.shadowGenerators.length; index < cache; index++){
            const parsedShadowGenerator = parsedData.shadowGenerators[index];
            if (parsedShadowGenerator.className === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$cascadedShadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CascadedShadowGenerator"].CLASSNAME) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$cascadedShadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CascadedShadowGenerator"].Parse(parsedShadowGenerator, scene);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"].Parse(parsedShadowGenerator, scene);
            }
        // SG would be available on their associated lights
        }
    }
});
class ShadowGeneratorSceneComponent {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */ constructor(scene){
        /**
         * The component name helpful to identify the component in the list of scene components.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_SHADOWGENERATOR;
        this.scene = scene;
    }
    /**
     * Registers the component in a given scene
     */ register() {
        this.scene._gatherRenderTargetsStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_GATHERRENDERTARGETS_SHADOWGENERATOR, this, this._gatherRenderTargets);
    }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ rebuild() {
    // Nothing To Do Here.
    }
    /**
     * Serializes the component data to the specified json object
     * @param serializationObject The object to serialize to
     */ serialize(serializationObject) {
        // Shadows
        serializationObject.shadowGenerators = [];
        const lights = this.scene.lights;
        for (const light of lights){
            if (light.doNotSerialize) {
                continue;
            }
            const shadowGenerators = light.getShadowGenerators();
            if (shadowGenerators) {
                const iterator = shadowGenerators.values();
                for(let key = iterator.next(); key.done !== true; key = iterator.next()){
                    const shadowGenerator = key.value;
                    if (shadowGenerator.doNotSerialize) {
                        continue;
                    }
                    serializationObject.shadowGenerators.push(shadowGenerator.serialize());
                }
            }
        }
    }
    /**
     * Adds all the elements from the container to the scene
     * @param container the container holding the elements
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addFromContainer(container) {
    // Nothing To Do Here. (directly attached to a light)
    }
    /**
     * Removes all the elements in the container from the scene
     * @param container contains the elements to remove
     * @param dispose if the removed element should be disposed (default: false)
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeFromContainer(container, dispose) {
    // Nothing To Do Here. (directly attached to a light)
    }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ dispose() {
    // Nothing To Do Here.
    }
    _gatherRenderTargets(renderTargets) {
        // Shadows
        const scene = this.scene;
        if (this.scene.shadowsEnabled) {
            for(let lightIndex = 0; lightIndex < scene.lights.length; lightIndex++){
                const light = scene.lights[lightIndex];
                const shadowGenerators = light.getShadowGenerators();
                if (light.isEnabled() && light.shadowEnabled && shadowGenerators) {
                    const iterator = shadowGenerators.values();
                    for(let key = iterator.next(); key.done !== true; key = iterator.next()){
                        const shadowGenerator = key.value;
                        const shadowMap = shadowGenerator.getShadowMap();
                        if (scene.textures.indexOf(shadowMap) !== -1) {
                            renderTargets.push(shadowMap);
                        }
                    }
                }
            }
        }
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"]._SceneComponentInitialization = (scene)=>{
    let component = scene._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_SHADOWGENERATOR);
    if (!component) {
        component = new ShadowGeneratorSceneComponent(scene);
        scene._addComponent(component);
    }
}; //# sourceMappingURL=shadowGeneratorSceneComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$cascadedShadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/cascadedShadowGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGeneratorSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent.js [app-ssr] (ecmascript)");
// Blur postprocess
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$shadowMap$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/shadowMap.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$shadowMap$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/shadowMap.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$depthBoxBlur$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/depthBoxBlur.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragmentSoftTransparentShadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragmentSoftTransparentShadow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$shadowMap$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/shadowMap.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$shadowMap$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/shadowMap.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$depthBoxBlur$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/depthBoxBlur.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapFragmentSoftTransparentShadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragmentSoftTransparentShadow.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/pointLight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointLight",
    ()=>PointLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/shadowLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("Light_Type_0", (name, scene)=>{
    return ()=>new PointLight(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
});
class PointLight extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowLight"] {
    /**
     * Getter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
     * This specifies what angle the shadow will use to be created.
     *
     * It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.
     */ get shadowAngle() {
        return this._shadowAngle;
    }
    /**
     * Setter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
     * This specifies what angle the shadow will use to be created.
     *
     * It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.
     */ set shadowAngle(value) {
        this._shadowAngle = value;
        this.forceProjectionMatrixCompute();
    }
    /**
     * Gets the direction if it has been set.
     * In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
     */ get direction() {
        return this._direction;
    }
    /**
     * In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
     */ set direction(value) {
        const previousNeedCube = this.needCube();
        this._direction = value;
        if (this.needCube() !== previousNeedCube && this._shadowGenerators) {
            const iterator = this._shadowGenerators.values();
            for(let key = iterator.next(); key.done !== true; key = iterator.next()){
                const shadowGenerator = key.value;
                shadowGenerator.recreateShadowMap();
            }
        }
    }
    /**
     * Creates a PointLight object from the passed name and position (Vector3) and adds it in the scene.
     * A PointLight emits the light in every direction.
     * It can cast shadows.
     * If the scene camera is already defined and you want to set your PointLight at the camera position, just set it :
     * ```javascript
     * var pointLight = new PointLight("pl", camera.position, scene);
     * ```
     * Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
     * @param name The light friendly name
     * @param position The position of the point light in the scene
     * @param scene The scene the lights belongs to
     */ constructor(name, position, scene){
        super(name, scene);
        this._shadowAngle = Math.PI / 2;
        this.position = position;
    }
    /**
     * Returns the string "PointLight"
     * @returns the class name
     */ getClassName() {
        return "PointLight";
    }
    /**
     * Returns the integer 0.
     * @returns The light Type id as a constant defines in Light.LIGHTTYPEID_x
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    getTypeID() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_POINTLIGHT;
    }
    /**
     * Specifies whether or not the shadowmap should be a cube texture.
     * @returns true if the shadowmap needs to be a cube texture.
     */ needCube() {
        return !this.direction;
    }
    /**
     * Returns a new Vector3 aligned with the PointLight cube system according to the passed cube face index (integer).
     * @param faceIndex The index of the face we are computed the direction to generate shadow
     * @returns The set direction in 2d mode otherwise the direction to the cubemap face if needCube() is true
     */ getShadowDirection(faceIndex) {
        if (this.direction) {
            return super.getShadowDirection(faceIndex);
        } else {
            switch(faceIndex){
                case 0:
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1.0, 0.0, 0.0);
                case 1:
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-1.0, 0.0, 0.0);
                case 2:
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0.0, -1.0, 0.0);
                case 3:
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0.0, 1.0, 0.0);
                case 4:
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0.0, 0.0, 1.0);
                case 5:
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0.0, 0.0, -1.0);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /**
     * Sets the passed matrix "matrix" as a left-handed perspective projection matrix with the following settings :
     * - fov = PI / 2
     * - aspect ratio : 1.0
     * - z-near and far equal to the active camera minZ and maxZ.
     * Returns the PointLight.
     * @param matrix
     * @param viewMatrix
     * @param renderList
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _setDefaultShadowProjectionMatrix(matrix, viewMatrix, renderList) {
        const activeCamera = this.getScene().activeCamera;
        const minZ = this.getDepthMinZ(activeCamera);
        const maxZ = this.getDepthMaxZ(activeCamera);
        const useReverseDepthBuffer = this.getScene().getEngine().useReverseDepthBuffer;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].PerspectiveFovLHToRef(this.shadowAngle, 1.0, useReverseDepthBuffer ? maxZ : minZ, useReverseDepthBuffer ? minZ : maxZ, matrix, true, this._scene.getEngine().isNDCHalfZRange, undefined, useReverseDepthBuffer);
    }
    _buildUniformLayout() {
        this._uniformBuffer.addUniform("vLightData", 4);
        this._uniformBuffer.addUniform("vLightDiffuse", 4);
        this._uniformBuffer.addUniform("vLightSpecular", 4);
        this._uniformBuffer.addUniform("vLightFalloff", 4);
        this._uniformBuffer.addUniform("shadowsInfo", 3);
        this._uniformBuffer.addUniform("depthValues", 2);
        this._uniformBuffer.create();
    }
    /**
     * Sets the passed Effect "effect" with the PointLight transformed position (or position, if none) and passed name (string).
     * @param effect The effect to update
     * @param lightIndex The index of the light in the effect to update
     * @returns The point light
     */ transferToEffect(effect, lightIndex) {
        const offset = this._scene.floatingOriginOffset;
        if (this.computeTransformedInformation()) {
            this._uniformBuffer.updateFloat4("vLightData", this.transformedPosition.x - offset.x, this.transformedPosition.y - offset.y, this.transformedPosition.z - offset.z, 0.0, lightIndex);
        } else {
            this._uniformBuffer.updateFloat4("vLightData", this.position.x - offset.x, this.position.y - offset.y, this.position.z - offset.z, 0, lightIndex);
        }
        this._uniformBuffer.updateFloat4("vLightFalloff", this.range, this._inverseSquaredRange, 0, 0, lightIndex);
        return this;
    }
    transferToNodeMaterialEffect(effect, lightDataUniformName) {
        const offset = this._scene.floatingOriginOffset;
        if (this.computeTransformedInformation()) {
            effect.setFloat3(lightDataUniformName, this.transformedPosition.x - offset.x, this.transformedPosition.y - offset.y, this.transformedPosition.z - offset.z);
        } else {
            effect.setFloat3(lightDataUniformName, this.position.x - offset.x, this.position.y - offset.y, this.position.z - offset.z);
        }
        return this;
    }
    /**
     * Prepares the list of defines specific to the light type.
     * @param defines the list of defines
     * @param lightIndex defines the index of the light for the effect
     */ prepareLightSpecificDefines(defines, lightIndex) {
        defines["POINTLIGHT" + lightIndex] = true;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], PointLight.prototype, "shadowAngle", null);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PointLight", PointLight); //# sourceMappingURL=pointLight.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/LTC/ltcTextureTool.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecodeLTCTextureDataAsync",
    ()=>DecodeLTCTextureDataAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
;
async function DecodeLTCTextureDataAsync() {
    const ltc1 = new Uint16Array(64 * 64 * 4);
    const ltc2 = new Uint16Array(64 * 64 * 4);
    const file = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].LoadFileAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].GetAssetUrl("https://assets.babylonjs.com/core/areaLights/areaLightsLTC.bin"));
    const ltcEncoded = new Uint16Array(file);
    const pixelCount = ltcEncoded.length / 8;
    for(let pixelIndex = 0; pixelIndex < pixelCount; pixelIndex++){
        ltc1[pixelIndex * 4] = ltcEncoded[pixelIndex * 8];
        ltc1[pixelIndex * 4 + 1] = ltcEncoded[pixelIndex * 8 + 1];
        ltc1[pixelIndex * 4 + 2] = ltcEncoded[pixelIndex * 8 + 2];
        ltc1[pixelIndex * 4 + 3] = ltcEncoded[pixelIndex * 8 + 3];
        ltc2[pixelIndex * 4] = ltcEncoded[pixelIndex * 8 + 4];
        ltc2[pixelIndex * 4 + 1] = ltcEncoded[pixelIndex * 8 + 5];
        ltc2[pixelIndex * 4 + 2] = ltcEncoded[pixelIndex * 8 + 6];
        ltc2[pixelIndex * 4 + 3] = ltcEncoded[pixelIndex * 8 + 7];
    }
    return [
        ltc1,
        ltc2
    ];
} //# sourceMappingURL=ltcTextureTool.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/areaLight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaLight",
    ()=>AreaLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$LTC$2f$ltcTextureTool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/LTC/ltcTextureTool.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
;
function CreateSceneLTCTextures(scene) {
    const useDelayedTextureLoading = scene.useDelayedTextureLoading;
    scene.useDelayedTextureLoading = false;
    const previousState = scene._blockEntityCollection;
    scene._blockEntityCollection = false;
    scene._ltcTextures = {
        LTC1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].CreateRGBATexture(null, 64, 64, scene.getEngine(), false, false, 2, 2, 0, false, true),
        LTC2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].CreateRGBATexture(null, 64, 64, scene.getEngine(), false, false, 2, 2, 0, false, true)
    };
    scene._blockEntityCollection = previousState;
    scene._ltcTextures.LTC1.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
    scene._ltcTextures.LTC1.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
    scene._ltcTextures.LTC2.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
    scene._ltcTextures.LTC2.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
    scene.useDelayedTextureLoading = useDelayedTextureLoading;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$LTC$2f$ltcTextureTool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecodeLTCTextureDataAsync"])()// eslint-disable-next-line github/no-then
    .then((textureData)=>{
        if (scene._ltcTextures) {
            const ltc1 = scene._ltcTextures?.LTC1;
            ltc1.update(textureData[0]);
            const ltc2 = scene._ltcTextures?.LTC2;
            ltc2.update(textureData[1]);
            scene.onDisposeObservable.addOnce(()=>{
                scene._ltcTextures?.LTC1.dispose();
                scene._ltcTextures?.LTC2.dispose();
            });
        }
    })// eslint-disable-next-line github/no-then
    .catch((error)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(`Area Light fail to get LTC textures data. Error: ${error}`);
    });
}
class AreaLight extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"] {
    /**
     * Creates a area light object.
     * Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
     * @param name The friendly name of the light
     * @param position The position of the area light.
     * @param scene The scene the light belongs to
     */ constructor(name, position, scene){
        super(name, scene);
        this.position = position;
        if (!this._scene._ltcTextures) {
            CreateSceneLTCTextures(this._scene);
        }
    }
    transferTexturesToEffect(effect) {
        if (this._scene._ltcTextures) {
            effect.setTexture("areaLightsLTC1Sampler", this._scene._ltcTextures.LTC1);
            effect.setTexture("areaLightsLTC2Sampler", this._scene._ltcTextures.LTC2);
        }
        return this;
    }
    /**
     * Prepares the list of defines specific to the light type.
     * @param defines the list of defines
     * @param lightIndex defines the index of the light for the effect
     */ prepareLightSpecificDefines(defines, lightIndex) {
        defines["AREALIGHT" + lightIndex] = true;
        defines["AREALIGHTUSED"] = true;
    }
    _isReady() {
        if (this._scene._ltcTextures) {
            return this._scene._ltcTextures.LTC1.isReady() && this._scene._ltcTextures.LTC2.isReady();
        }
        return false;
    }
} //# sourceMappingURL=areaLight.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/rectAreaLight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RectAreaLight",
    ()=>RectAreaLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$areaLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/areaLight.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("Light_Type_4", (name, scene)=>{
    return ()=>new RectAreaLight(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), 1, 1, scene);
});
class RectAreaLight extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$areaLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaLight"] {
    /**
     * Rect Area Light width.
     */ get width() {
        return this._width.x;
    }
    /**
     * Rect Area Light width.
     */ set width(value) {
        this._width.x = value;
    }
    /**
     * Rect Area Light height.
     */ get height() {
        return this._height.y;
    }
    /**
     * Rect Area Light height.
     */ set height(value) {
        this._height.y = value;
    }
    /**
     * Creates a rectangular area light object.
     * Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
     * @param name The friendly name of the light
     * @param position The position of the area light.
     * @param width The width of the area light.
     * @param height The height of the area light.
     * @param scene The scene the light belongs to
     */ constructor(name, position, width, height, scene){
        super(name, position, scene);
        this._width = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](width, 0, 0);
        this._height = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, height, 0);
        this._pointTransformedPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._pointTransformedWidth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._pointTransformedHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
    }
    /**
     * Returns the string "RectAreaLight"
     * @returns the class name
     */ getClassName() {
        return "RectAreaLight";
    }
    /**
     * Returns the integer 4.
     * @returns The light Type id as a constant defines in Light.LIGHTTYPEID_x
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    getTypeID() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"].LIGHTTYPEID_RECT_AREALIGHT;
    }
    _buildUniformLayout() {
        this._uniformBuffer.addUniform("vLightData", 4);
        this._uniformBuffer.addUniform("vLightDiffuse", 4);
        this._uniformBuffer.addUniform("vLightSpecular", 4);
        this._uniformBuffer.addUniform("vLightWidth", 4);
        this._uniformBuffer.addUniform("vLightHeight", 4);
        this._uniformBuffer.addUniform("shadowsInfo", 3);
        this._uniformBuffer.addUniform("depthValues", 2);
        this._uniformBuffer.create();
    }
    _computeTransformedInformation() {
        if (this.parent && this.parent.getWorldMatrix) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this._pointTransformedPosition);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._width, this.parent.getWorldMatrix(), this._pointTransformedWidth);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._height, this.parent.getWorldMatrix(), this._pointTransformedHeight);
            return true;
        }
        return false;
    }
    /**
     * Sets the passed Effect "effect" with the PointLight transformed position (or position, if none) and passed name (string).
     * @param effect The effect to update
     * @param lightIndex The index of the light in the effect to update
     * @returns The point light
     */ transferToEffect(effect, lightIndex) {
        const offset = this._scene.floatingOriginOffset;
        if (this._computeTransformedInformation()) {
            this._uniformBuffer.updateFloat4("vLightData", this._pointTransformedPosition.x - offset.x, this._pointTransformedPosition.y - offset.y, this._pointTransformedPosition.z - offset.z, 0, lightIndex);
            this._uniformBuffer.updateFloat4("vLightWidth", this._pointTransformedWidth.x / 2, this._pointTransformedWidth.y / 2, this._pointTransformedWidth.z / 2, 0, lightIndex);
            this._uniformBuffer.updateFloat4("vLightHeight", this._pointTransformedHeight.x / 2, this._pointTransformedHeight.y / 2, this._pointTransformedHeight.z / 2, 0, lightIndex);
        } else {
            this._uniformBuffer.updateFloat4("vLightData", this.position.x - offset.x, this.position.y - offset.y, this.position.z - offset.z, 0, lightIndex);
            this._uniformBuffer.updateFloat4("vLightWidth", this._width.x / 2, this._width.y / 2, this._width.z / 2, 0.0, lightIndex);
            this._uniformBuffer.updateFloat4("vLightHeight", this._height.x / 2, this._height.y / 2, this._height.z / 2, 0.0, lightIndex);
        }
        return this;
    }
    transferToNodeMaterialEffect(effect, lightDataUniformName) {
        const offset = this._scene.floatingOriginOffset;
        if (this._computeTransformedInformation()) {
            effect.setFloat3(lightDataUniformName, this._pointTransformedPosition.x - offset.x, this._pointTransformedPosition.y - offset.y, this._pointTransformedPosition.z - offset.z);
        } else {
            effect.setFloat3(lightDataUniformName, this.position.x - offset.x, this.position.y - offset.y, this.position.z - offset.z);
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], RectAreaLight.prototype, "width", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], RectAreaLight.prototype, "height", null);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.RectAreaLight", RectAreaLight); //# sourceMappingURL=rectAreaLight.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/clusteredLightContainer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusteredLightContainer",
    ()=>ClusteredLightContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$storageBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/storageBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightConstants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$thinInstanceMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/thinInstanceMesh.js [app-ssr] (ecmascript)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].AddNodeConstructor("Light_Type_5", (name, scene)=>{
    return ()=>new ClusteredLightContainer(name, [], scene);
});
const DefaultDepthSlices = 16;
class ClusteredLightContainer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"] {
    static _GetEngineBatchSize(engine) {
        const caps = engine._caps;
        if (!caps.texelFetch) {
            return 0;
        } else if (engine.isWebGPU) {
            // On WebGPU we use atomic writes to storage textures
            return 32;
        } else if (engine.version > 1) {
            // On WebGL 2 we use additive float blending as the light mask
            if (!caps.colorBufferFloat || !caps.blendFloat) {
                return 0;
            }
            // Due to the use of floats we want to limit lights to the precision of floats
            return caps.shaderFloatPrecision;
        } else {
            // WebGL 1 is not supported due to lack of dynamic for loops
            return 0;
        }
    }
    /**
     * Checks if the clustered lighting system supports the given light with its current parameters.
     * This will also check if the light's associated engine supports clustered lighting.
     *
     * @param light The light to test
     * @returns true if the light and its engine is supported
     */ static IsLightSupported(light) {
        if (ClusteredLightContainer._GetEngineBatchSize(light.getEngine()) === 0) {
            return false;
        } else if (light.shadowEnabled && light._scene.shadowsEnabled && light.getShadowGenerators()) {
            // Shadows are not supported
            return false;
        } else if (light.falloffType !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"].FALLOFF_DEFAULT) {
            // Only the default falloff is supported
            return false;
        } else if (light.getTypeID() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_POINTLIGHT) {
            return true;
        } else if (light.getTypeID() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_SPOTLIGHT) {
            // Extra texture bindings per light are not supported
            return !light.projectionTexture && !light.iesProfileTexture;
        } else {
            // Currently only point and spot lights are supported
            return false;
        }
    }
    /**
     * True if clustered lighting is supported.
     */ get isSupported() {
        return this._batchSize > 0;
    }
    /**
     * Gets the current list of lights added to this clustering system.
     */ get lights() {
        return this._lights;
    }
    /**
     * The number of tiles in the horizontal direction to cluster lights into.
     * A lower value will reduce memory and make the clustering step faster, while a higher value increases memory and makes the rendering step faster.
     */ get horizontalTiles() {
        return this._horizontalTiles;
    }
    set horizontalTiles(horizontal) {
        if (this._horizontalTiles === horizontal) {
            return;
        }
        this._horizontalTiles = horizontal;
        // Force the batch data to be recreated
        this._tileMaskBatches = -1;
    }
    /**
     * The number of tiles in the vertical direction to cluster lights into.
     * A lower value will reduce memory and make the clustering step faster, while a higher value increases memory and makes the rendering step faster.
     */ get verticalTiles() {
        return this._verticalTiles;
    }
    set verticalTiles(vertical) {
        if (this._verticalTiles === vertical) {
            return;
        }
        this._verticalTiles = vertical;
        // Force the batch data to be recreated
        this._tileMaskBatches = -1;
    }
    /**
     * The number of slices to split the depth range by and cluster lights into.
     */ get depthSlices() {
        return this._depthSlices;
    }
    set depthSlices(slices) {
        if (this._depthSlices === slices) {
            return;
        }
        this._depthSlices = slices;
        this._sliceRanges = new Float32Array(slices * 2);
        // UBO size depends on the number of depth slices
        this._uniformBuffer.dispose();
        this._uniformBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformBuffer"](this.getEngine(), undefined, undefined, this.name);
        this._buildUniformLayout();
    }
    /**
     * This limits the range of all the added lights, so even lights with extreme ranges will still have bounds for clustering.
     */ get maxRange() {
        return this._maxRange;
    }
    set maxRange(range) {
        if (this._maxRange === range) {
            return;
        }
        this._maxRange = range;
        this._minInverseSquaredRange = 1 / (range * range);
    }
    /**
     * Creates a new clustered light system with an initial set of lights.
     *
     * @param name The name of the clustered light container
     * @param lights The initial set of lights to add
     * @param scene The scene the clustered light container belongs to
     */ constructor(name, lights = [], scene){
        super(name, scene);
        this._lights = [];
        this._camera = null;
        // The lights sorted by depth
        this._sortedLights = [];
        this._lightDataRenderId = -1;
        this._tileMaskBatches = -1;
        this._horizontalTiles = 64;
        this._verticalTiles = 64;
        this._sliceScale = 0;
        this._sliceBias = 0;
        this._depthSlices = DefaultDepthSlices;
        this._maxRange = 16383;
        this._minInverseSquaredRange = 1 / (this._maxRange * this._maxRange);
        const engine = this.getEngine();
        this._batchSize = ClusteredLightContainer._GetEngineBatchSize(engine);
        const proxyShader = {
            vertex: "lightProxy",
            fragment: "lightProxy"
        };
        this._proxyMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]("ProxyMaterial", this._scene, proxyShader, {
            attributes: [
                "position"
            ],
            uniforms: [
                "view",
                "projection",
                "tileMaskResolution"
            ],
            samplers: [
                "lightDataTexture"
            ],
            uniformBuffers: [
                "Scene"
            ],
            storageBuffers: [
                "tileMaskBuffer"
            ],
            defines: [
                `CLUSTLIGHT_BATCH ${this._batchSize}`
            ],
            shaderLanguage: engine.isWebGPU ? 1 /* ShaderLanguage.WGSL */  : 0 /* ShaderLanguage.GLSL */ ,
            extraInitializationsAsync: async ()=>{
                if (engine.isWebGPU) {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lightProxy.vertex.js [app-ssr] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lightProxy.fragment.js [app-ssr] (ecmascript, async loader)")
                    ]);
                } else {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/lightProxy.vertex.js [app-ssr] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/lightProxy.fragment.js [app-ssr] (ecmascript, async loader)")
                    ]);
                }
            }
        });
        // Additive blending is for merging masks on WebGL
        this._proxyMaterial.transparencyMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"].MATERIAL_ALPHABLEND;
        this._proxyMaterial.alphaMode = 1;
        this._proxyMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePlane"])("ProxyMesh", {
            size: 2
        });
        // Make sure it doesn't render for the default scene
        this._scene.removeMesh(this._proxyMesh);
        this._proxyMesh.material = this._proxyMaterial;
        this._updateBatches();
        this._sliceRanges = new Float32Array(this._depthSlices * 2);
        if (this._batchSize > 0) {
            ClusteredLightContainer._SceneComponentInitialization(this._scene);
            for (const light of lights){
                this.addLight(light);
            }
        }
    }
    getClassName() {
        return "ClusteredLightContainer";
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getTypeID() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_CLUSTERED_CONTAINER;
    }
    /** @internal */ _updateBatches(camera = null) {
        this._camera = camera;
        this._proxyMesh.isVisible = this._sortedLights.length > 0;
        // Ensure space for atleast 1 batch
        const batches = Math.max(Math.ceil(this._sortedLights.length / this._batchSize), 1);
        if (this._tileMaskBatches >= batches) {
            this._proxyMesh.thinInstanceCount = this._sortedLights.length;
            return this._tileMaskTexture;
        }
        const engine = this.getEngine();
        // Round up to a batch size so we don't have to reallocate as often
        const maxLights = batches * this._batchSize;
        this._lightDataBuffer = new Float32Array(20 * maxLights);
        this._lightDataTexture?.dispose();
        this._lightDataTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"](this._lightDataBuffer, 5, maxLights, 5, this._scene, false, false, 1, 1);
        this._lightDataTexture.name = "LightDataTexture_clustered_" + this.name;
        this._proxyMaterial.setTexture("lightDataTexture", this._lightDataTexture);
        this._tileMaskTexture?.dispose();
        const textureSize = {
            width: this._horizontalTiles,
            height: this._verticalTiles
        };
        if (!engine.isWebGPU) {
            // In WebGL we shift the light proxy by the batch number
            textureSize.height *= batches;
        }
        this._tileMaskTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetTexture"]("TileMaskTexture", textureSize, this._scene, {
            // We don't write anything on WebGPU so make it as small as possible
            type: engine.isWebGPU ? 0 : 1,
            format: 6,
            generateDepthBuffer: false
        });
        this._tileMaskTexture.renderParticles = false;
        this._tileMaskTexture.renderSprites = false;
        this._tileMaskTexture.noPrePassRenderer = true;
        this._tileMaskTexture.renderList = [
            this._proxyMesh
        ];
        let currentRenderTarget = null;
        this._tileMaskTexture.onBeforeBindObservable.add(()=>{
            currentRenderTarget = engine._currentRenderTarget;
            this._updateLightData();
        });
        this._tileMaskTexture.onAfterUnbindObservable.add(()=>{
            if (engine._currentRenderTarget !== currentRenderTarget) {
                if (!currentRenderTarget) {
                    engine.restoreDefaultFramebuffer();
                } else {
                    engine.bindFramebuffer(currentRenderTarget);
                }
            }
        });
        this._tileMaskTexture.onClearObservable.add(()=>{
            if (engine.isWebGPU) {
                // Clear the storage buffer for WebGPU
                this._tileMaskBuffer?.clear();
            } else {
                // Only clear the texture on WebGL
                engine.clear({
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                }, true, false);
            }
        });
        if (engine.isWebGPU) {
            // WebGPU also needs a storage buffer to write to
            this._tileMaskBuffer?.dispose();
            const bufferSize = this._horizontalTiles * this._verticalTiles * batches * 4;
            this._tileMaskBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$storageBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageBuffer"](engine, bufferSize);
            this._proxyMaterial.setStorageBuffer("tileMaskBuffer", this._tileMaskBuffer);
        }
        this._proxyMaterial.setVector3("tileMaskResolution", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](this._horizontalTiles, this.verticalTiles, batches));
        // We don't actually use the matrix data but we need enough capacity for the lights
        this._proxyMesh.thinInstanceSetBuffer("matrix", new Float32Array(maxLights * 16));
        this._proxyMesh.thinInstanceCount = this._sortedLights.length;
        this._tileMaskBatches = batches;
        return this._tileMaskTexture;
    }
    _getSliceIndex(camera, depth) {
        if (depth < camera.minZ) {
            // Prevent calling log on small or negative values
            return -1;
        }
        return Math.floor(Math.log(depth) * this._sliceScale + this._sliceBias);
    }
    _updateLightData() {
        const camera = this._camera || this._scene.activeCamera;
        const renderId = this._scene.getRenderId();
        if (!camera || this._lightDataRenderId === renderId) {
            return;
        }
        this._lightDataRenderId = renderId;
        // Resort lights based on distance from camera
        const view = camera.getViewMatrix();
        for (const light of this._sortedLights){
            const position = light.computeTransformedInformation() ? light.transformedPosition : light.position;
            const viewPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(position, view, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
            light._currentViewDepth = viewPosition.z;
        }
        this._sortedLights.sort((a, b)=>a._currentViewDepth - b._currentViewDepth);
        // DOOM 2016 subdivision scheme, copied from: https://www.aortiz.me/2018/12/21/CG.html
        const logFarNear = Math.log(camera.maxZ / camera.minZ);
        this._sliceScale = this._depthSlices / logFarNear;
        this._sliceBias = -(this._depthSlices * Math.log(camera.minZ)) / logFarNear;
        this._sliceRanges.fill(0);
        // Last slice which had had its min index updated
        let minSlice = -1;
        const buf = this._lightDataBuffer;
        const offset = this._scene.floatingOriginOffset;
        for(let i = 0; i < this._sortedLights.length; i += 1){
            const light = this._sortedLights[i];
            const off = i * 20;
            const computed = light.computeTransformedInformation();
            const scaledIntensity = light.getScaledIntensity();
            const position = computed ? light.transformedPosition : light.position;
            const diffuse = light.diffuse.scaleToRef(scaledIntensity, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color3[0]);
            const specular = light.specular.scaleToRef(scaledIntensity, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpColors"].Color3[1]);
            const range = Math.min(light.range, this.maxRange);
            const inverseSquaredRange = Math.max(light._inverseSquaredRange, this._minInverseSquaredRange);
            // vLightData
            buf[off + 0] = position.x - offset.x;
            buf[off + 1] = position.y - offset.y;
            buf[off + 2] = position.z - offset.z;
            buf[off + 3] = 0;
            // vLightDiffuse
            buf[off + 4] = diffuse.r;
            buf[off + 5] = diffuse.g;
            buf[off + 6] = diffuse.b;
            buf[off + 7] = range;
            // vLightSpecular
            buf[off + 8] = specular.r;
            buf[off + 9] = specular.g;
            buf[off + 10] = specular.b;
            buf[off + 11] = light.radius;
            // vLightDirection
            buf[off + 12] = 0;
            buf[off + 13] = 0;
            buf[off + 14] = 0;
            buf[off + 15] = -1;
            // vLightFalloff
            buf[off + 16] = range;
            buf[off + 17] = inverseSquaredRange;
            buf[off + 18] = 0;
            buf[off + 19] = 0;
            if (light.getTypeID() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_SPOTLIGHT) {
                const spotLight = light;
                const direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].NormalizeToRef(computed ? spotLight.transformedDirection : spotLight.direction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
                // vLightData.a
                buf[off + 3] = spotLight.exponent;
                // vLightDirection
                buf[off + 12] = direction.x;
                buf[off + 13] = direction.y;
                buf[off + 14] = direction.z;
                buf[off + 15] = spotLight._cosHalfAngle;
                // vLightFalloff.zw
                buf[off + 18] = spotLight._lightAngleScale;
                buf[off + 19] = spotLight._lightAngleOffset;
            }
            // Update the depth slices that include this light
            const firstSlice = this._getSliceIndex(camera, light._currentViewDepth - range);
            const lastSlice = this._getSliceIndex(camera, light._currentViewDepth + range);
            for(let j = firstSlice; j <= lastSlice; j += 1){
                if (j < 0 || j >= this._depthSlices) {
                    continue;
                } else if (j > minSlice) {
                    // Update min index
                    this._sliceRanges[j * 2] = i;
                    minSlice = j;
                }
                // Update max index
                this._sliceRanges[j * 2 + 1] = i;
            }
        }
        const engine = this.getEngine();
        if (engine.isWebGPU) {
            // Whenever the light data changes we have to flush pending WebGPU command buffers so that
            // previous render passes use the old data and later render passes use the new data.
            engine.flushFramebuffer();
        }
        this._lightDataTexture.update(this._lightDataBuffer);
    }
    dispose(doNotRecurse, disposeMaterialAndTextures) {
        for (const light of this._lights){
            light.dispose(doNotRecurse, disposeMaterialAndTextures);
        }
        this._lightDataTexture.dispose();
        this._tileMaskTexture.dispose();
        this._tileMaskBuffer?.dispose();
        this._proxyMesh.dispose(doNotRecurse, disposeMaterialAndTextures);
        super.dispose(doNotRecurse, disposeMaterialAndTextures);
    }
    /**
     * Adds a light to the clustering system.
     * @param light The light to add
     */ addLight(light) {
        if (!ClusteredLightContainer.IsLightSupported(light)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Attempting to add a light to cluster that does not support clustering");
            return;
        }
        this._scene.removeLight(light);
        this._lights.push(light);
        this._sortedLights.push(light);
        this._proxyMesh.isVisible = true;
        this._proxyMesh.thinInstanceCount = this._sortedLights.length;
    }
    /**
     * Removes a light from the clustering system.
     * @param light The light to remove
     * @returns the index where the light was in the light list
     */ removeLight(light) {
        // Convert to `Light` array without cast so `indexOf` has correct typing
        const sortedLights = this._sortedLights;
        const sortedIndex = sortedLights.indexOf(light);
        if (sortedIndex !== -1) {
            sortedLights.splice(sortedIndex, 1);
            this._proxyMesh.thinInstanceCount = sortedLights.length;
            if (sortedLights.length === 0) {
                this._proxyMesh.isVisible = false;
            }
        }
        const index = this._lights.indexOf(light);
        if (index !== -1) {
            this._lights.splice(index, 1);
            // We treat the unsorted array as the "real" one so only add back to the scene if it was found in that
            this._scene.addLight(light);
        }
        return index;
    }
    _buildUniformLayout() {
        this._uniformBuffer.addUniform("vLightData", 4);
        this._uniformBuffer.addUniform("vLightDiffuse", 4);
        this._uniformBuffer.addUniform("vLightSpecular", 4);
        this._uniformBuffer.addUniform("vSliceData", 2);
        // _depthSlices might not be initialized yet
        this._uniformBuffer.addUniform("vSliceRanges", 2, this._depthSlices ?? DefaultDepthSlices);
        this._uniformBuffer.addUniform("shadowsInfo", 3);
        this._uniformBuffer.addUniform("depthValues", 2);
        this._uniformBuffer.create();
    }
    transferToEffect(effect, lightIndex) {
        const engine = this.getEngine();
        const hscale = this._horizontalTiles / engine.getRenderWidth();
        const vscale = this._verticalTiles / engine.getRenderHeight();
        this._uniformBuffer.updateFloat4("vLightData", hscale, vscale, this._verticalTiles, this._tileMaskBatches, lightIndex);
        this._uniformBuffer.updateFloat2("vSliceData", this._sliceScale, this._sliceBias, lightIndex);
        this._uniformBuffer.updateFloatArray("vSliceRanges", this._sliceRanges, lightIndex);
        return this;
    }
    transferTexturesToEffect(effect, lightIndex) {
        const engine = this.getEngine();
        effect.setTexture("lightDataTexture" + lightIndex, this._lightDataTexture);
        if (engine.isWebGPU) {
            engine.setStorageBuffer("tileMaskBuffer" + lightIndex, this._tileMaskBuffer);
        } else {
            effect.setTexture("tileMaskTexture" + lightIndex, this._tileMaskTexture);
        }
        return this;
    }
    transferToNodeMaterialEffect(_effect) {
        return this;
    }
    prepareLightSpecificDefines(defines, lightIndex) {
        defines["CLUSTLIGHT" + lightIndex] = true;
        defines["CLUSTLIGHT_BATCH"] = this._batchSize;
        defines["CLUSTLIGHT_SLICES"] = this._depthSlices;
    }
    _isReady() {
        this._updateBatches();
        return this._proxyMesh.isReady(true, true);
    }
}
/** @internal */ ClusteredLightContainer._SceneComponentInitialization = ()=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("ClusteredLightingSceneComponent");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ClusteredLightContainer.prototype, "horizontalTiles", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ClusteredLightContainer.prototype, "verticalTiles", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ClusteredLightContainer.prototype, "maxRange", null);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ClusteredLightContainer", ClusteredLightContainer); //# sourceMappingURL=clusteredLightContainer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/clusteredLightingSceneComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusteredLightingSceneComponent",
    ()=>ClusteredLightingSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$clusteredLightContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/clusteredLightContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightConstants.js [app-ssr] (ecmascript)");
;
;
;
class ClusteredLightingSceneComponent {
    /**
     * Creates a new scene component.
     * @param scene The scene the component belongs to
     */ constructor(scene){
        /**
         * The name of the component. Each component must have a unique name.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_CLUSTEREDLIGHTING;
        this._gatherActiveCameraRenderTargets = (renderTargets)=>{
            for (const light of this.scene.lights){
                if (light.getTypeID() === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTTYPEID_CLUSTERED_CONTAINER && light.isSupported) {
                    renderTargets.push(light._updateBatches());
                }
            }
        };
        this.scene = scene;
    }
    /**
     * Disposes the component and the associated resources.
     */ dispose() {}
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ rebuild() {}
    /**
     * Register the component to one instance of a scene.
     */ register() {
        this.scene._gatherActiveCameraRenderTargetsStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING, this, this._gatherActiveCameraRenderTargets);
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$clusteredLightContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClusteredLightContainer"]._SceneComponentInitialization = (scene)=>{
    if (!scene._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_CLUSTEREDLIGHTING)) {
        scene._addComponent(new ClusteredLightingSceneComponent(scene));
    }
}; //# sourceMappingURL=clusteredLightingSceneComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$clusteredLightContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/clusteredLightContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$clusteredLightingSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/clusteredLightingSceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$lightProxy$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/lightProxy.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$lightProxy$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/lightProxy.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$lightProxy$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lightProxy.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$lightProxy$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lightProxy.vertex.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/IES/iesLoader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadIESData",
    ()=>LoadIESData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
;
function LineToArray(line) {
    return line.split(" ").filter((x)=>x !== "").map((x)=>parseFloat(x));
}
function ReadArray(dataPointer, count, targetArray) {
    while(targetArray.length !== count){
        const line = LineToArray(dataPointer.lines[dataPointer.index++]);
        targetArray.push(...line);
    }
}
function InterpolateCandelaValues(data, phi, theta) {
    let phiIndex = 0;
    let thetaIndex = 0;
    let startTheta = 0;
    let endTheta = 0;
    let startPhi = 0;
    let endPhi = 0;
    // Check if the angle is outside the range
    for(let index = 0; index < data.numberOfHorizontalAngles - 1; index++){
        if (theta < data.horizontalAngles[index + 1] || index === data.numberOfHorizontalAngles - 2) {
            thetaIndex = index;
            startTheta = data.horizontalAngles[index];
            endTheta = data.horizontalAngles[index + 1];
            break;
        }
    }
    for(let index = 0; index < data.numberOfVerticalAngles - 1; index++){
        if (phi < data.verticalAngles[index + 1] || index === data.numberOfVerticalAngles - 2) {
            phiIndex = index;
            startPhi = data.verticalAngles[index];
            endPhi = data.verticalAngles[index + 1];
            break;
        }
    }
    const deltaTheta = endTheta - startTheta;
    const deltaPhi = endPhi - startPhi;
    if (deltaPhi === 0) {
        return 0;
    }
    // Interpolate
    const t1 = deltaTheta === 0 ? 0 : (theta - startTheta) / deltaTheta;
    const t2 = (phi - startPhi) / deltaPhi;
    const nextThetaIndex = deltaTheta === 0 ? thetaIndex : thetaIndex + 1;
    const v1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lerp"])(data.candelaValues[thetaIndex][phiIndex], data.candelaValues[nextThetaIndex][phiIndex], t1);
    const v2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lerp"])(data.candelaValues[thetaIndex][phiIndex + 1], data.candelaValues[nextThetaIndex][phiIndex + 1], t1);
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Lerp"])(v1, v2, t2);
    return v;
}
function LoadIESData(uint8Array) {
    const decoder = new TextDecoder("utf-8");
    const source = decoder.decode(uint8Array);
    // Read data
    const dataPointer = {
        lines: source.split("\n"),
        index: 0
    };
    const data = {
        version: dataPointer.lines[0],
        candelaValues: [],
        horizontalAngles: [],
        verticalAngles: [],
        numberOfHorizontalAngles: 0,
        numberOfVerticalAngles: 0
    };
    // Skip metadata
    dataPointer.index = 1;
    while(dataPointer.lines.length > 0 && !dataPointer.lines[dataPointer.index].includes("TILT=")){
        dataPointer.index++;
    }
    // Process tilt data?
    if (dataPointer.lines[dataPointer.index].includes("INCLUDE")) {
    // Not supported yet as I did not manage to find an example :)
    }
    dataPointer.index++;
    // Header
    const header = LineToArray(dataPointer.lines[dataPointer.index++]);
    data.numberOfLights = header[0];
    data.lumensPerLamp = header[1];
    data.candelaMultiplier = header[2];
    data.numberOfVerticalAngles = header[3];
    data.numberOfHorizontalAngles = header[4];
    data.photometricType = header[5]; // We ignore cylindrical type for now. Will add support later if needed
    data.unitsType = header[6];
    data.width = header[7];
    data.length = header[8];
    data.height = header[9];
    // Additional data
    const additionalData = LineToArray(dataPointer.lines[dataPointer.index++]);
    data.ballastFactor = additionalData[0];
    data.fileGenerationType = additionalData[1];
    data.inputWatts = additionalData[2];
    // Prepare arrays
    for(let index = 0; index < data.numberOfHorizontalAngles; index++){
        data.candelaValues[index] = [];
    }
    // Vertical angles
    ReadArray(dataPointer, data.numberOfVerticalAngles, data.verticalAngles);
    // Horizontal angles
    ReadArray(dataPointer, data.numberOfHorizontalAngles, data.horizontalAngles);
    // Candela values
    for(let index = 0; index < data.numberOfHorizontalAngles; index++){
        ReadArray(dataPointer, data.numberOfVerticalAngles, data.candelaValues[index]);
    }
    // Evaluate candela values
    let maxCandela = -1;
    for(let index = 0; index < data.numberOfHorizontalAngles; index++){
        for(let subIndex = 0; subIndex < data.numberOfVerticalAngles; subIndex++){
            data.candelaValues[index][subIndex] *= data.candelaValues[index][subIndex] * data.candelaMultiplier * data.ballastFactor * data.fileGenerationType;
            maxCandela = Math.max(maxCandela, data.candelaValues[index][subIndex]);
        }
    }
    // Normalize candela values
    if (maxCandela > 0) {
        for(let index = 0; index < data.numberOfHorizontalAngles; index++){
            for(let subIndex = 0; subIndex < data.numberOfVerticalAngles; subIndex++){
                data.candelaValues[index][subIndex] /= maxCandela;
            }
        }
    }
    // Create the cylindrical texture
    const height = 180;
    const width = height * 2;
    const size = width * height;
    const arrayBuffer = new Float32Array(width * height);
    // Fill the texture
    const startTheta = data.horizontalAngles[0];
    const endTheta = data.horizontalAngles[data.numberOfHorizontalAngles - 1];
    for(let index = 0; index < size; index++){
        let theta = index % width;
        const phi = Math.floor(index / width);
        // Symmetry
        if (endTheta - startTheta !== 0 && (theta < startTheta || theta >= endTheta)) {
            theta %= endTheta * 2;
            if (theta > endTheta) {
                theta = endTheta * 2 - theta;
            }
        }
        arrayBuffer[phi + theta * height] = InterpolateCandelaValues(data, phi, theta);
    }
    // So far we only need the first half of the first row of the texture as we only support IES for spot light. We can add support for other types later.
    return {
        width: width / 2,
        height: 1,
        data: arrayBuffer
    };
} //# sourceMappingURL=iesLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightingVolume.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightingVolume",
    ()=>LightingVolume
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/directionalLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compute$2f$computeShader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compute/computeShader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$copyTextureToTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/copyTextureToTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$storageBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/storageBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$lightingVolume$2e$compute$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lightingVolume.compute.js [app-ssr] (ecmascript)");
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
const InvViewProjMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
const TmpVec3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
class LightingVolume {
    /**
     * The shadow generator used to create the lighting volume.
     */ get shadowGenerator() {
        return this._shadowGenerator;
    }
    set shadowGenerator(sg) {
        const light = sg.getLight();
        if (!(light instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"])) {
            throw new Error(`LightingVolumeMesh ${this._name}: light must be a directional light`);
        }
        this._shadowGenerator = sg;
        this._light = light;
        this._createGeometry();
        if (!this._engine.isWebGPU) {
            this._createFallbackTextures();
        }
        const depthTexture = this._shadowGenerator.getShadowMap()?.depthStencilTexture;
        if (this._cs && depthTexture) {
            this._cs.setInternalTexture("shadowMap", depthTexture);
        }
    }
    /**
     * The tesselation level of the lighting volume.
     */ get tesselation() {
        return this._tesselation;
    }
    set tesselation(n) {
        this._tesselation = n;
        this._createGeometry();
    }
    /**
     * Indicates whether to build the full volume (true) or only the far plane (false). Default is false.
     */ get buildFullVolume() {
        return this._buildFullVolume;
    }
    set buildFullVolume(value) {
        if (this._buildFullVolume === value) {
            return;
        }
        this._buildFullVolume = value;
        this._createGeometry();
        this._createComputeShader();
    }
    /**
     * The mesh used as a support for the lighting volume.
     * Note that this mesh is not automatically added to the scene's mesh array.
     * If you want to render it, you need to add it manually.
     */ get mesh() {
        return this._mesh;
    }
    /**
     * The frequency (in number of times you call updateMesh) at which the lighting volume is updated.
     */ get frequency() {
        return this._frequency;
    }
    set frequency(value) {
        this._frequency = value;
        this._firstUpdate = true;
    }
    /**
     * The name of the lighting volume.
     */ get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        if (this._mesh) {
            this._mesh.name = name;
        }
    }
    /**
     * Indicates whether this is the first update of the lighting volume.
     * If true, the volume has not yet been updated for the first time.
     */ get firstUpdate() {
        return this._firstUpdate;
    }
    /**
     * Creates a new LightingVolume.
     * @param name The name of the lighting volume.
     * @param scene The scene the lighting volume belongs to.
     * @param shadowGenerator The shadow generator used to create the lighting volume. This is optional in the constructor, but must be set before calling updateMesh.
     * @param tesselation The tesselation level of the lighting volume (default: 64).
     */ constructor(name, scene, shadowGenerator, tesselation = 64){
        this._readPixelPromise = null;
        this._readPixelAbortController = null;
        this._numFrames = 0;
        this._firstUpdate = true;
        this._tesselation = 0;
        this._buildFullVolume = false;
        this._frequency = 1;
        const light = shadowGenerator ? shadowGenerator.getLight() : undefined;
        if (light && !(light instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"])) {
            throw new Error(`LightingVolumeMesh ${name}: light must be a directional light`);
        }
        this._name = name;
        this._shadowGenerator = shadowGenerator;
        this._light = light;
        this._engine = scene.getEngine();
        this._scene = scene;
        this._mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](name, this._scene);
        scene.meshes.splice(scene.meshes.indexOf(this._mesh), 1);
        if (this._engine.isWebGPU) {
            this._uBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformBuffer"](this._engine);
            this._uBuffer.addUniform("invViewProjMatrix", 16);
            this._uBuffer.addUniform("startVertexIndex", 1);
            this._uBuffer.addUniform("step", 1);
            this._uBuffer.addUniform("tesselation", 1);
            this._uBuffer.update();
            this._createComputeShader();
        } else {
            this._copyTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$copyTextureToTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyTextureToTexture"](this._engine, false, true);
            this._createFallbackTextures();
        }
        this._tesselation = tesselation;
        this._createGeometry();
    }
    /**
     * Checks if the lighting volume is ready to be updated.
     * @returns True if the volume is ready to be updated.
     */ isReady() {
        let isReady = this._mesh.isReady(true);
        if (this._cs) {
            isReady = this._cs.isReady() && isReady;
        }
        return isReady;
    }
    /**
     * Updates the lighting volume mesh.
     * @param forceUpdate If true, forces the update even if the frequency condition is not met.
     */ update(forceUpdate = false) {
        if (this._tesselation === 0 || !this._shadowGenerator) {
            return;
        }
        if (!forceUpdate && !this._firstUpdate && (this.frequency === 0 || ++this._numFrames < this.frequency)) {
            return;
        }
        this._numFrames = 0;
        if (this._cs && this._uBuffer) {
            const dispatchSize = Math.ceil((this._tesselation + 1) / 8);
            const viewProjMatrix = this._shadowGenerator.getTransformMatrix();
            viewProjMatrix.invertToRef(InvViewProjMatrix);
            this._uBuffer.updateMatrix("invViewProjMatrix", InvViewProjMatrix);
            this._uBuffer.update();
            this._engine._debugPushGroup?.(`Generate lighting volume (${this._name})`);
            this._cs.dispatch(dispatchSize, dispatchSize, 1);
            this._engine._debugPopGroup?.();
            this._firstUpdate = false;
        } else {
            try {
                void this._fallbackReadPixelAsync();
            } catch  {
                this._readPixelPromise = null;
            }
        }
    }
    /**
     * Disposes the lighting volume and associated resources.
     */ dispose() {
        this._readPixelAbortController?.abort(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbortError"]("LightingVolume is disposed"));
        this._readPixelAbortController = null;
        this._mesh.dispose();
        if (this._fallbackTexture) {
            this._fallbackTexture._texture = null;
        }
        this._fallbackTexture?.dispose();
        this._copyTexture?.dispose();
        this._storageBuffer?.dispose();
        this._uBuffer?.dispose();
        this._depthCopy?.dispose();
    }
    _createComputeShader() {
        this._cs = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compute$2f$computeShader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComputeShader"]("createLightVolume", this._engine, "lightingVolume", {
            bindingsMapping: {
                shadowMap: {
                    group: 0,
                    binding: 0
                },
                params: {
                    group: 0,
                    binding: 1
                },
                positions: {
                    group: 0,
                    binding: 2
                }
            },
            defines: !this._buildFullVolume ? [
                "#define KEEP_EDGES",
                "#define MOVE_FAR_DEPTH_TO_NEAR"
            ] : undefined
        });
        if (this._shadowGenerator) {
            const depthTexture = this._shadowGenerator.getShadowMap()?.depthStencilTexture;
            if (depthTexture) {
                this._cs.setInternalTexture("shadowMap", depthTexture);
            }
        }
        if (this._uBuffer) {
            this._cs.setUniformBuffer("params", this._uBuffer);
        }
        if (this._storageBuffer) {
            this._cs.setStorageBuffer("positions", this._storageBuffer);
        }
    }
    _createFallbackTextures() {
        if (!this._shadowGenerator) {
            return;
        }
        this._readPixelAbortController?.abort(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbortError"]("Fallback textures are being (re)created"));
        this._readPixelAbortController = new AbortController();
        const mapSize = this._shadowGenerator.mapSize;
        this._depthCopy?.dispose();
        this._depthCopy = this._engine.createRenderTargetTexture({
            width: mapSize,
            height: mapSize
        }, {
            type: 1,
            format: 6,
            samples: 1,
            label: `${this._name} - fallback internal texture`,
            generateDepthBuffer: false
        });
        this._fallbackTexture?.dispose();
        this._fallbackTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTexture"](this._scene, this._depthCopy.texture);
        this._fallbackTexture.name = `${this._name} - fallback texture`;
    }
    async _fallbackReadPixelAsync() {
        if (this._readPixelPromise || !this._fallbackTexture || !this._copyTexture) {
            return;
        }
        const abortController = this._readPixelAbortController;
        abortController?.signal.throwIfAborted();
        const engine = this._engine;
        const shadowGenerator = this._shadowGenerator;
        const shadowMapDepthTexture = shadowGenerator?.getShadowMap()?.depthStencilTexture;
        if (!shadowMapDepthTexture) {
            return;
        }
        // Copies the shadow map of the shadow generator into _depthCopy
        // That's because we can't read from a depth attachment texture in WebGL. We must first copy it to a regular texture.
        engine.updateTextureSamplingMode(1, shadowMapDepthTexture);
        engine.updateTextureComparisonFunction(shadowMapDepthTexture, 0);
        this._copyTexture.copy(shadowMapDepthTexture, this._depthCopy);
        engine.updateTextureComparisonFunction(shadowMapDepthTexture, 513);
        // Gets the texture from GPU to CPU
        this._readPixelPromise = this._fallbackTexture.readPixels(0, 0, undefined, true, false);
        if (!this._readPixelPromise) {
            return;
        }
        const buffer = await this._readPixelPromise;
        abortController?.signal.throwIfAborted();
        const depthValues = buffer;
        const positions = this._mesh.getVerticesData("position");
        const numTesselation = this._tesselation;
        const startPos = this._buildFullVolume ? (numTesselation + 1) * 4 * 3 : 4 * 3;
        const mapSize = shadowGenerator.mapSize;
        const step = (mapSize - 1) / numTesselation;
        if (!positions) {
            this._readPixelPromise = null;
            return;
        }
        const halfTesselation = numTesselation / 2;
        const invViewProjMatrix = shadowGenerator.getTransformMatrix().clone();
        invViewProjMatrix.invertToRef(invViewProjMatrix);
        const factor = 4;
        let posIndex = startPos;
        let stepY = 0;
        for(let y = 0; y < numTesselation + 1; ++y){
            for(let x = 0; x < numTesselation + 1; ++x){
                let depth = depthValues[Math.floor(mapSize * Math.floor(stepY) + x * step) * factor];
                if (!this._buildFullVolume && (depth === 1 || y === 0 || x === 0 || y === numTesselation || x === numTesselation)) {
                    depth = 0;
                }
                TmpVec3.set((x - halfTesselation) / halfTesselation, (y - halfTesselation) / halfTesselation, -1 + 2 * depth);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(TmpVec3, invViewProjMatrix, TmpVec3);
                positions[posIndex] = TmpVec3.x;
                positions[posIndex + 1] = TmpVec3.y;
                positions[posIndex + 2] = TmpVec3.z;
                posIndex += 3;
            }
            stepY += step;
        }
        this._mesh.setVerticesData("position", positions);
        this._readPixelPromise = null;
        this._firstUpdate = false;
    }
    _createGeometry() {
        if (!this._light) {
            return;
        }
        this._tesselation = Math.max(Math.ceil(this._tesselation) & ~1, 2);
        const light = this._light;
        const min = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](light.orthoLeft, light.orthoBottom, light.shadowMinZ ?? 0);
        const max = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](light.orthoRight, light.orthoTop, light.shadowMaxZ ?? 10000);
        const invViewMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].LookAtLH(light.position, light.position.add(light.direction), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly);
        invViewMatrix.invertToRef(invViewMatrix);
        const positions = [];
        const indices = [];
        const numTesselation = this._tesselation;
        const stepX = (max.x - min.x) / numTesselation;
        const stepY = (max.y - min.y) / numTesselation;
        const v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        const startFarIndices = this._buildFullVolume ? (numTesselation + 1) * 4 : 4;
        if (this._buildFullVolume) {
            let startIndices = 0;
            // Right faces of the frustum
            for(let i = 0; i <= numTesselation; ++i){
                v.set(max.x, min.y + i * stepY, min.z);
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
                positions.push(p.x, p.y, p.z);
                if (i < numTesselation) {
                    indices.push(startIndices + i, startFarIndices + numTesselation + (i + 1) * (numTesselation + 1), startFarIndices + numTesselation + i * (numTesselation + 1));
                    indices.push(startIndices + i, startIndices + i + 1, startFarIndices + numTesselation + (i + 1) * (numTesselation + 1));
                }
            }
            const n0 = 0;
            const n1 = positions.length / 3 - 1;
            const n2 = n1 + 1;
            startIndices = positions.length / 3;
            // Left faces of the frustum
            for(let i = 0; i <= numTesselation; ++i){
                v.set(min.x, min.y + i * stepY, min.z);
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
                positions.push(p.x, p.y, p.z);
                if (i < numTesselation) {
                    indices.push(startIndices + i, startFarIndices + 0 + i * (numTesselation + 1), startFarIndices + 0 + (i + 1) * (numTesselation + 1));
                    indices.push(startIndices + i, startFarIndices + 0 + (i + 1) * (numTesselation + 1), startIndices + i + 1);
                }
            }
            const n3 = positions.length / 3 - 1;
            startIndices = positions.length / 3;
            // Bottom faces of the frustum
            for(let i = 0; i <= numTesselation; ++i){
                v.set(min.x + i * stepX, min.y, min.z);
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
                positions.push(p.x, p.y, p.z);
                if (i < numTesselation) {
                    indices.push(startIndices + i, startIndices + i + 1, startFarIndices + i + 0 * (numTesselation + 1));
                    indices.push(startIndices + i + 1, startFarIndices + i + 1 + 0 * (numTesselation + 1), startFarIndices + i + 0 * (numTesselation + 1));
                }
            }
            startIndices = positions.length / 3;
            // Top faces of the frustum
            for(let i = 0; i <= numTesselation; ++i){
                v.set(min.x + i * stepX, max.y, min.z);
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
                positions.push(p.x, p.y, p.z);
                if (i < numTesselation) {
                    indices.push(startIndices + i, startFarIndices + i + numTesselation * (numTesselation + 1), startIndices + i + 1);
                    indices.push(startIndices + i + 1, startFarIndices + i + numTesselation * (numTesselation + 1), startFarIndices + i + 1 + numTesselation * (numTesselation + 1));
                }
            }
            startIndices = positions.length / 3;
            // Near faces of the frustum
            indices.push(n0, n2, n1);
            indices.push(n2, n3, n1);
        } else {
            let p;
            v.set(max.x, min.y, min.z);
            p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
            positions.push(p.x, p.y, p.z);
            v.set(max.x, max.y, min.z);
            p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
            positions.push(p.x, p.y, p.z);
            v.set(min.x, min.y, min.z);
            p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
            positions.push(p.x, p.y, p.z);
            v.set(min.x, max.y, min.z);
            p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
            positions.push(p.x, p.y, p.z);
            indices.push(0, 2, 1);
            indices.push(2, 3, 1);
        }
        // Tesselate the far plane
        let y = min.y;
        for(let iy = 0; iy <= numTesselation; ++iy){
            let x = min.x;
            for(let ix = 0; ix <= numTesselation; ++ix){
                v.set(x, y, min.z);
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(v, invViewMatrix);
                positions.push(p.x, p.y, p.z);
                if (ix < numTesselation && iy < numTesselation) {
                    indices.push(startFarIndices + ix + iy * (numTesselation + 1), startFarIndices + ix + 1 + iy * (numTesselation + 1), startFarIndices + ix + 1 + (iy + 1) * (numTesselation + 1));
                    indices.push(startFarIndices + ix + iy * (numTesselation + 1), startFarIndices + ix + 1 + (iy + 1) * (numTesselation + 1), startFarIndices + ix + (iy + 1) * (numTesselation + 1));
                }
                x += stepX;
            }
            y += stepY;
        }
        if (this._uBuffer && this._cs) {
            const webGPUEngine = this._engine;
            this._storageBuffer?.dispose();
            this._storageBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$storageBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageBuffer"](webGPUEngine, positions.length * 4, 8 | 3);
            this._storageBuffer.update(positions);
            const vertexBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"](webGPUEngine, this._storageBuffer.getBuffer(), "position");
            this._mesh.setVerticesBuffer(vertexBuffer);
            this._cs.setStorageBuffer("positions", this._storageBuffer);
            this._uBuffer.updateUInt("startVertexIndex", this._buildFullVolume ? (numTesselation + 1) * 4 * 3 : 4 * 3);
            this._uBuffer.updateFloat("step", ((this._shadowGenerator?.mapSize ?? 128) - 1) / numTesselation);
            this._uBuffer.updateUInt("tesselation", numTesselation);
        } else {
            this._mesh.setVerticesData("position", positions);
        }
        this._mesh.setIndices(indices, positions.length / 3);
    }
} //# sourceMappingURL=lightingVolume.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/shadowLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/directionalLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$hemisphericLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/hemisphericLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$pointLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/pointLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$spotLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/spotLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$areaLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/areaLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$rectAreaLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/rectAreaLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$IES$2f$iesLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/IES/iesLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightConstants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightingVolume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightingVolume.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CascadedShadowGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$cascadedShadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CascadedShadowGenerator"],
    "ShadowGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"],
    "ShadowGeneratorSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGeneratorSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGeneratorSceneComponent"],
    "depthBoxBlurPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$depthBoxBlur$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["depthBoxBlurPixelShader"],
    "depthBoxBlurPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$depthBoxBlur$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["depthBoxBlurPixelShaderWGSL"],
    "shadowMapFragmentSoftTransparentShadow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapFragmentSoftTransparentShadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapFragmentSoftTransparentShadow"],
    "shadowMapFragmentSoftTransparentShadowWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragmentSoftTransparentShadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapFragmentSoftTransparentShadowWGSL"],
    "shadowMapPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$shadowMap$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapPixelShader"],
    "shadowMapPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$shadowMap$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapPixelShaderWGSL"],
    "shadowMapVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$shadowMap$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapVertexShader"],
    "shadowMapVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$shadowMap$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapVertexShaderWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$cascadedShadowGenerator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/cascadedShadowGenerator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$shadowGeneratorSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$shadowMap$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/shadowMap.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$shadowMap$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/shadowMap.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$depthBoxBlur$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/depthBoxBlur.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragmentSoftTransparentShadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragmentSoftTransparentShadow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$shadowMap$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/shadowMap.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$shadowMap$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/shadowMap.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$depthBoxBlur$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/depthBoxBlur.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapFragmentSoftTransparentShadow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragmentSoftTransparentShadow.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClusteredLightContainer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$clusteredLightContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClusteredLightContainer"],
    "ClusteredLightingSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$clusteredLightingSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClusteredLightingSceneComponent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$clusteredLightContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/clusteredLightContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$clusteredLightingSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/clusteredLightingSceneComponent.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$areaLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaLight"],
    "CascadedShadowGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CascadedShadowGenerator"],
    "ClusteredLightContainer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClusteredLightContainer"],
    "ClusteredLightingSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClusteredLightingSceneComponent"],
    "DirectionalLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"],
    "HemisphericLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$hemisphericLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HemisphericLight"],
    "Light",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Light"],
    "LightConstants",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"],
    "LightingVolume",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightingVolume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightingVolume"],
    "LoadIESData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$IES$2f$iesLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadIESData"],
    "PointLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$pointLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointLight"],
    "RectAreaLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$rectAreaLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RectAreaLight"],
    "ShadowGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGenerator"],
    "ShadowGeneratorSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowGeneratorSceneComponent"],
    "ShadowLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowLight"],
    "SpotLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$spotLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotLight"],
    "depthBoxBlurPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["depthBoxBlurPixelShader"],
    "depthBoxBlurPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["depthBoxBlurPixelShaderWGSL"],
    "shadowMapFragmentSoftTransparentShadow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapFragmentSoftTransparentShadow"],
    "shadowMapFragmentSoftTransparentShadowWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapFragmentSoftTransparentShadowWGSL"],
    "shadowMapPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapPixelShader"],
    "shadowMapPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapPixelShaderWGSL"],
    "shadowMapVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapVertexShader"],
    "shadowMapVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapVertexShaderWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$light$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/light.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$shadowLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/shadowLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Shadows$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Shadows/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/directionalLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$hemisphericLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/hemisphericLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$pointLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/pointLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$spotLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/spotLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$areaLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/areaLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$rectAreaLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/rectAreaLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$Clustered$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/Clustered/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$IES$2f$iesLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/IES/iesLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightConstants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightingVolume$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightingVolume.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Lights_c40bf1d5._.js.map